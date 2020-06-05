"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const config_1 = require("@schematics/angular/utility/config");
/** Adds the Material Design fonts to the index HTML file. */
function addFontsToIndex(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace, options.project);
        const projectIndexFiles = schematics_2.getProjectIndexFiles(project);
        if (!projectIndexFiles.length) {
            throw new schematics_1.SchematicsException('No project index HTML file could be found.');
        }
        const fonts = [
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
        ];
        fonts.forEach(f => {
            projectIndexFiles.forEach(indexFilePath => {
                schematics_2.appendHtmlElementToHead(host, indexFilePath, `<link href="${f}" rel="stylesheet">`);
            });
        });
        return host;
    };
}
exports.addFontsToIndex = addFontsToIndex;
//# sourceMappingURL=material-fonts.js.map