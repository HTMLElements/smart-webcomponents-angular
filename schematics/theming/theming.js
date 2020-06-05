"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const change_1 = require("@schematics/angular/utility/change");
const config_1 = require("@schematics/angular/utility/config");
const path_1 = require("path");
const parse5_1 = require("../parse5");
const create_custom_theme_1 = require("./create-custom-theme");
/** Path segment that can be found in paths that refer to a prebuilt theme. */
let prebuiltThemePathSegment = 'smart-webcomponents-angular/source/styles';
/** Default file name of the custom theme that can be generated. */
const defaultCustomThemeFilename = 'custom-theme.css';
/** Add pre-built styles to the main project style file. */
function addThemeToAppStyles(options) {
    return function (host, context) {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace, options.project);
        const themeName = options.theme || 'default';
        const projectIndexFiles = typeof schematics_2.getProjectIndexFiles === 'function' ? schematics_2.getProjectIndexFiles(project) : null;
        if (projectIndexFiles && !projectIndexFiles.length) {
            throw new schematics_1.SchematicsException('No project index HTML file could be found.');
        }
        if (themeName !== 'default') {
            insertPrebuiltTheme(project, host, "smart.default", workspace, context.logger);
            console.log('Adds default theme');
            if (projectIndexFiles) {
                projectIndexFiles.forEach(path => addThemeAttribute(host, path, themeName));
            }
            prebuiltThemePathSegment += "/" + themeName;
        }
        if (themeName === 'custom') {
            insertCustomTheme(project, options.project, host, workspace, context.logger);
            console.log('Adds custom theme');
            if (projectIndexFiles) {
                projectIndexFiles.forEach(path => addThemeAttribute(host, path, 'custom'));
            }
        }
        else {
            insertPrebuiltTheme(project, host, 'smart.' + themeName, workspace, context.logger);
            console.log('Adds ' + themeName + ' theme');
        }
        return host;
    };
}
exports.addThemeToAppStyles = addThemeToAppStyles;
function getElementByTagName(tagName, htmlContent) {
    const document = parse5_1.parse(htmlContent, { sourceCodeLocationInfo: true });
    const nodeQueue = [...document.childNodes];
    while (nodeQueue.length) {
        const node = nodeQueue.shift();
        if (node.nodeName.toLowerCase() === tagName) {
            return node;
        }
        else if (node.childNodes) {
            nodeQueue.push(...node.childNodes);
        }
    }
    return null;
}
function addThemeAttribute(host, htmlFilePath, themeName) {
    const htmlFileBuffer = host.read(htmlFilePath);
    if (!htmlFileBuffer) {
        throw new Error(`Could not read file for path: ${htmlFilePath}`);
    }
    const htmlContent = htmlFileBuffer.toString();
    const body = getElementByTagName('body', htmlContent);
    if (!body) {
        throw Error(`Could not find <body> element in HTML file: ${htmlFileBuffer}`);
    }
    const themeAttribute = body.attrs.find(attribute => attribute.name === 'theme');
    if (themeAttribute) {
        delete body.attrs["theme"];
        const recordedChange = host
            .beginUpdate(htmlFilePath)
            .insertRight(body.sourceCodeLocation.startTag.endOffset - 1, ` theme="${themeName}"`);
        host.commitUpdate(recordedChange);
    }
    else {
        const recordedChange = host
            .beginUpdate(htmlFilePath)
            .insertRight(body.sourceCodeLocation.startTag.endOffset - 1, ` theme="${themeName}"`);
        host.commitUpdate(recordedChange);
    }
}
/** Adds the global typography class to the body element. */
function addTypographyClass(options) {
    return function (host) {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace, options.project);
        const projectIndexFiles = schematics_2.getProjectIndexFiles(project);
        if (!projectIndexFiles.length) {
            throw new schematics_1.SchematicsException('No project index HTML file could be found.');
        }
        if (options.typography) {
            projectIndexFiles.forEach(path => schematics_2.addBodyClass(host, path, 'smart-typography'));
        }
        return host;
    };
}
exports.addTypographyClass = addTypographyClass;
/**
 * Insert a custom theme to project style file. If no valid style file could be found, a new
 * Scss file for the custom theme will be created.
 */
function insertCustomTheme(project, projectName, host, workspace, logger) {
    const stylesPath = schematics_2.getProjectStyleFile(project, 'css');
    const themeContent = create_custom_theme_1.createCustomTheme(projectName);
    if (!stylesPath) {
        if (!project.sourceRoot) {
            throw new schematics_1.SchematicsException(`Could not find source root for project: "${projectName}". ` +
                `Please make sure that the "sourceRoot" property is set in the workspace config.`);
        }
        // Normalize the path through the devkit utilities because we want to avoid having
        // unnecessary path segments and windows backslash delimiters.
        const customThemePath = core_1.normalize(path_1.join(project.sourceRoot, defaultCustomThemeFilename));
        if (host.exists(customThemePath)) {
            logger.warn(`Cannot create a custom Angular Smart Material theme because
          ${customThemePath} already exists. Skipping custom theme generation.`);
            return;
        }
        host.create(customThemePath, themeContent);
        addThemeStyleToTarget(project, 'build', host, customThemePath, workspace, logger);
        return;
    }
    const insertion = new change_1.InsertChange(stylesPath, 0, themeContent);
    const recorder = host.beginUpdate(stylesPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    host.commitUpdate(recorder);
}
/** Insert a pre-built theme into the angular.json file. */
function insertPrebuiltTheme(project, host, theme, workspace, logger) {
    // Path needs to be always relative to the `package.json` or workspace root.
    const themePath = `./node_modules/smart-webcomponents-angular/source/styles/${theme}.css`;
    addThemeStyleToTarget(project, 'build', host, themePath, workspace, logger);
    addThemeStyleToTarget(project, 'test', host, themePath, workspace, logger);
}
/** Adds a theming style entry to the given project target options. */
function addThemeStyleToTarget(project, targetName, host, assetPath, workspace, logger) {
    // Do not update the builder options in case the target does not use the default CLI builder.
    if (!validateDefaultTargetBuilder(project, targetName, logger)) {
        return;
    }
    const targetOptions = schematics_2.getProjectTargetOptions(project, targetName);
    if (!targetOptions.styles) {
        targetOptions.styles = [assetPath];
    }
    else {
        const existingStyles = targetOptions.styles.map(s => typeof s === 'string' ? s : s.input);
        for (let [index, stylePath] of existingStyles.entries()) {
            // If the given asset is already specified in the styles, we don't need to do anything.
            if (stylePath === assetPath) {
                return;
            }
            // In case a prebuilt theme is already set up, we can safely replace the theme with the new
            // theme file. If a custom theme is set up, we are not able to safely replace the custom
            // theme because these files can contain custom styles, while prebuilt themes are
            // always packaged and considered replaceable.
            if (stylePath.includes(defaultCustomThemeFilename)) {
                logger.error(`Could not add the selected theme to the CLI project ` +
                    `configuration because there is already a custom theme file referenced.`);
                logger.info(`Please manually add the following style file to your configuration:`);
                logger.info(`    ${assetPath}`);
                return;
            }
            else if (stylePath.includes(prebuiltThemePathSegment)) {
                targetOptions.styles.splice(index, 1);
            }
        }
        targetOptions.styles.unshift(assetPath);
    }
    host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
/**
 * Validates that the specified project target is configured with the default builders which are
 * provided by the Angular CLI. If the configured builder does not match the default builder,
 * this function can either throw or just show a warning.
 */
function validateDefaultTargetBuilder(project, targetName, logger) {
    const defaultBuilder = schematics_2.defaultTargetBuilders[targetName];
    const targetConfig = project.architect && project.architect[targetName] ||
        project.targets && project.targets[targetName];
    const isDefaultBuilder = targetConfig && targetConfig['builder'] === defaultBuilder;
    // Because the build setup for the Angular CLI can be customized by developers, we can't know
    // where to put the theme file in the workspace configuration if custom builders are being
    // used. In case the builder has been changed for the "build" target, we throw an error and
    // exit because setting up a theme is a primary goal of `ng-add`. Otherwise if just the "test"
    // builder has been changed, we warn because a theme is not mandatory for running tests
    // with Material. See: https://github.com/angular/components/issues/14176
    if (!isDefaultBuilder && targetName === 'build') {
        throw new schematics_1.SchematicsException(`Your project is not using the default builders for ` +
            `"${targetName}". The Angular Material schematics cannot add a theme to the workspace ` +
            `configuration if the builder has been changed.`);
    }
    else if (!isDefaultBuilder) {
        // for non-build targets we gracefully report the error without actually aborting the
        // setup schematic. This is because a theme is not mandatory for running tests.
        logger.warn(`Your project is not using the default builders for "${targetName}". This ` +
            `means that we cannot add the configured theme to the "${targetName}" target.`);
    }
    return isDefaultBuilder;
}
//# sourceMappingURL=theming.js.map