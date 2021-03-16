/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/ivy/language_service", ["require", "exports", "tslib", "@angular/compiler-cli", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/typecheck", "@angular/compiler-cli/src/ngtsc/typecheck/api", "@angular/compiler-cli/src/ngtsc/typecheck/src/comments", "typescript/lib/tsserverlibrary", "@angular/language-service/ivy/adapters", "@angular/language-service/ivy/compiler_factory", "@angular/language-service/ivy/completions", "@angular/language-service/ivy/definitions", "@angular/language-service/ivy/quick_info", "@angular/language-service/ivy/references", "@angular/language-service/ivy/template_target", "@angular/language-service/ivy/ts_utils", "@angular/language-service/ivy/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LanguageService = void 0;
    var tslib_1 = require("tslib");
    var compiler_cli_1 = require("@angular/compiler-cli");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var typecheck_1 = require("@angular/compiler-cli/src/ngtsc/typecheck");
    var api_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/api");
    var comments_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/comments");
    var ts = require("typescript/lib/tsserverlibrary");
    var adapters_1 = require("@angular/language-service/ivy/adapters");
    var compiler_factory_1 = require("@angular/language-service/ivy/compiler_factory");
    var completions_1 = require("@angular/language-service/ivy/completions");
    var definitions_1 = require("@angular/language-service/ivy/definitions");
    var quick_info_1 = require("@angular/language-service/ivy/quick_info");
    var references_1 = require("@angular/language-service/ivy/references");
    var template_target_1 = require("@angular/language-service/ivy/template_target");
    var ts_utils_1 = require("@angular/language-service/ivy/ts_utils");
    var utils_1 = require("@angular/language-service/ivy/utils");
    var LanguageService = /** @class */ (function () {
        function LanguageService(project, tsLS, config) {
            this.project = project;
            this.tsLS = tsLS;
            this.config = config;
            this.parseConfigHost = new adapters_1.LSParseConfigHost(project.projectService.host);
            this.options = parseNgCompilerOptions(project, this.parseConfigHost, config);
            logCompilerOptions(project, this.options);
            this.strategy = createTypeCheckingProgramStrategy(project);
            this.adapter = new adapters_1.LanguageServiceAdapter(project);
            this.compilerFactory = new compiler_factory_1.CompilerFactory(this.adapter, this.strategy, this.options);
            this.watchConfigFile(project);
        }
        LanguageService.prototype.getCompilerOptions = function () {
            return this.options;
        };
        LanguageService.prototype.getSemanticDiagnostics = function (fileName) {
            var e_1, _a;
            var compiler = this.compilerFactory.getOrCreate();
            var ttc = compiler.getTemplateTypeChecker();
            var diagnostics = [];
            if (utils_1.isTypeScriptFile(fileName)) {
                var program = compiler.getNextProgram();
                var sourceFile_1 = program.getSourceFile(fileName);
                if (sourceFile_1) {
                    var ngDiagnostics = compiler.getDiagnosticsForFile(sourceFile_1, api_1.OptimizeFor.SingleFile);
                    // There are several kinds of diagnostics returned by `NgCompiler` for a source file:
                    //
                    // 1. Angular-related non-template diagnostics from decorated classes within that file.
                    // 2. Template diagnostics for components with direct inline templates (a string literal).
                    // 3. Template diagnostics for components with indirect inline templates (templates computed
                    //    by expression).
                    // 4. Template diagnostics for components with external templates.
                    //
                    // When showing diagnostics for a TS source file, we want to only include kinds 1 and 2 -
                    // those diagnostics which are reported at a location within the TS file itself. Diagnostics
                    // for external templates will be shown when editing that template file (the `else` block)
                    // below.
                    //
                    // Currently, indirect inline template diagnostics (kind 3) are not shown at all by the
                    // Language Service, because there is no sensible location in the user's code for them. Such
                    // templates are an edge case, though, and should not be common.
                    //
                    // TODO(alxhub): figure out a good user experience for indirect template diagnostics and
                    // show them from within the Language Service.
                    diagnostics.push.apply(diagnostics, tslib_1.__spread(ngDiagnostics.filter(function (diag) { return diag.file !== undefined && diag.file.fileName === sourceFile_1.fileName; })));
                }
            }
            else {
                var components = compiler.getComponentsWithTemplateFile(fileName);
                try {
                    for (var components_1 = tslib_1.__values(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
                        var component = components_1_1.value;
                        if (ts.isClassDeclaration(component)) {
                            diagnostics.push.apply(diagnostics, tslib_1.__spread(ttc.getDiagnosticsForComponent(component)));
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            this.compilerFactory.registerLastKnownProgram();
            return diagnostics;
        };
        LanguageService.prototype.getDefinitionAndBoundSpan = function (fileName, position) {
            var _this = this;
            return this.withCompiler(function (compiler) {
                if (!isInAngularContext(compiler.getNextProgram(), fileName, position)) {
                    return undefined;
                }
                return new definitions_1.DefinitionBuilder(_this.tsLS, compiler)
                    .getDefinitionAndBoundSpan(fileName, position);
            });
        };
        LanguageService.prototype.getTypeDefinitionAtPosition = function (fileName, position) {
            var _this = this;
            return this.withCompiler(function (compiler) {
                if (!isTemplateContext(compiler.getNextProgram(), fileName, position)) {
                    return undefined;
                }
                return new definitions_1.DefinitionBuilder(_this.tsLS, compiler)
                    .getTypeDefinitionsAtPosition(fileName, position);
            });
        };
        LanguageService.prototype.getQuickInfoAtPosition = function (fileName, position) {
            var _this = this;
            return this.withCompiler(function (compiler) {
                if (!isTemplateContext(compiler.getNextProgram(), fileName, position)) {
                    return undefined;
                }
                var templateInfo = utils_1.getTemplateInfoAtPosition(fileName, position, compiler);
                if (templateInfo === undefined) {
                    return undefined;
                }
                var positionDetails = template_target_1.getTargetAtPosition(templateInfo.template, position);
                if (positionDetails === null) {
                    return undefined;
                }
                // Because we can only show 1 quick info, just use the bound attribute if the target is a two
                // way binding. We may consider concatenating additional display parts from the other target
                // nodes or representing the two way binding in some other manner in the future.
                var node = positionDetails.context.kind === template_target_1.TargetNodeKind.TwoWayBindingContext ?
                    positionDetails.context.nodes[0] :
                    positionDetails.context.node;
                return new quick_info_1.QuickInfoBuilder(_this.tsLS, compiler, templateInfo.component, node).get();
            });
        };
        LanguageService.prototype.getReferencesAtPosition = function (fileName, position) {
            var compiler = this.compilerFactory.getOrCreate();
            var results = new references_1.ReferencesAndRenameBuilder(this.strategy, this.tsLS, compiler)
                .getReferencesAtPosition(fileName, position);
            this.compilerFactory.registerLastKnownProgram();
            return results;
        };
        LanguageService.prototype.getRenameInfo = function (fileName, position) {
            var _a, _b, _c;
            var compiler = this.compilerFactory.getOrCreate();
            var renameInfo = new references_1.ReferencesAndRenameBuilder(this.strategy, this.tsLS, compiler)
                .getRenameInfo(file_system_1.absoluteFrom(fileName), position);
            if (!renameInfo.canRename) {
                return renameInfo;
            }
            var quickInfo = (_a = this.getQuickInfoAtPosition(fileName, position)) !== null && _a !== void 0 ? _a : this.tsLS.getQuickInfoAtPosition(fileName, position);
            var kind = (_b = quickInfo === null || quickInfo === void 0 ? void 0 : quickInfo.kind) !== null && _b !== void 0 ? _b : ts.ScriptElementKind.unknown;
            var kindModifiers = (_c = quickInfo === null || quickInfo === void 0 ? void 0 : quickInfo.kindModifiers) !== null && _c !== void 0 ? _c : ts.ScriptElementKind.unknown;
            return tslib_1.__assign(tslib_1.__assign({}, renameInfo), { kind: kind, kindModifiers: kindModifiers });
        };
        LanguageService.prototype.findRenameLocations = function (fileName, position) {
            var compiler = this.compilerFactory.getOrCreate();
            var results = new references_1.ReferencesAndRenameBuilder(this.strategy, this.tsLS, compiler)
                .findRenameLocations(fileName, position);
            this.compilerFactory.registerLastKnownProgram();
            return results;
        };
        LanguageService.prototype.getCompletionBuilder = function (fileName, position) {
            var compiler = this.compilerFactory.getOrCreate();
            var templateInfo = utils_1.getTemplateInfoAtPosition(fileName, position, compiler);
            if (templateInfo === undefined) {
                return null;
            }
            var positionDetails = template_target_1.getTargetAtPosition(templateInfo.template, position);
            if (positionDetails === null) {
                return null;
            }
            // For two-way bindings, we actually only need to be concerned with the bound attribute because
            // the bindings in the template are written with the attribute name, not the event name.
            var node = positionDetails.context.kind === template_target_1.TargetNodeKind.TwoWayBindingContext ?
                positionDetails.context.nodes[0] :
                positionDetails.context.node;
            return new completions_1.CompletionBuilder(this.tsLS, compiler, templateInfo.component, node, positionDetails, utils_1.isTypeScriptFile(fileName));
        };
        LanguageService.prototype.getCompletionsAtPosition = function (fileName, position, options) {
            var _this = this;
            return this.withCompiler(function (compiler) {
                if (!isTemplateContext(compiler.getNextProgram(), fileName, position)) {
                    return undefined;
                }
                var builder = _this.getCompletionBuilder(fileName, position);
                if (builder === null) {
                    return undefined;
                }
                return builder.getCompletionsAtPosition(options);
            });
        };
        LanguageService.prototype.getCompletionEntryDetails = function (fileName, position, entryName, formatOptions, preferences) {
            var _this = this;
            return this.withCompiler(function (compiler) {
                if (!isTemplateContext(compiler.getNextProgram(), fileName, position)) {
                    return undefined;
                }
                var builder = _this.getCompletionBuilder(fileName, position);
                if (builder === null) {
                    return undefined;
                }
                return builder.getCompletionEntryDetails(entryName, formatOptions, preferences);
            });
        };
        LanguageService.prototype.getCompletionEntrySymbol = function (fileName, position, entryName) {
            var _this = this;
            return this.withCompiler(function (compiler) {
                if (!isTemplateContext(compiler.getNextProgram(), fileName, position)) {
                    return undefined;
                }
                var builder = _this.getCompletionBuilder(fileName, position);
                if (builder === null) {
                    return undefined;
                }
                var result = builder.getCompletionEntrySymbol(entryName);
                _this.compilerFactory.registerLastKnownProgram();
                return result;
            });
        };
        LanguageService.prototype.getTcb = function (fileName, position) {
            return this.withCompiler(function (compiler) {
                var templateInfo = utils_1.getTemplateInfoAtPosition(fileName, position, compiler);
                if (templateInfo === undefined) {
                    return undefined;
                }
                var tcb = compiler.getTemplateTypeChecker().getTypeCheckBlock(templateInfo.component);
                if (tcb === null) {
                    return undefined;
                }
                var sf = tcb.getSourceFile();
                var selections = [];
                var target = template_target_1.getTargetAtPosition(templateInfo.template, position);
                if (target !== null) {
                    var selectionSpans = void 0;
                    if ('nodes' in target.context) {
                        selectionSpans = target.context.nodes.map(function (n) { return n.sourceSpan; });
                    }
                    else {
                        selectionSpans = [target.context.node.sourceSpan];
                    }
                    var selectionNodes = selectionSpans
                        .map(function (s) { return comments_1.findFirstMatchingNode(tcb, {
                        withSpan: s,
                        filter: function (node) { return true; },
                    }); })
                        .filter(function (n) { return n !== null; });
                    selections = selectionNodes.map(function (n) {
                        return {
                            start: n.getStart(sf),
                            length: n.getEnd() - n.getStart(sf),
                        };
                    });
                }
                return {
                    fileName: sf.fileName,
                    content: sf.getFullText(),
                    selections: selections,
                };
            });
        };
        LanguageService.prototype.withCompiler = function (p) {
            var compiler = this.compilerFactory.getOrCreate();
            var result = p(compiler);
            this.compilerFactory.registerLastKnownProgram();
            return result;
        };
        LanguageService.prototype.getCompilerOptionsDiagnostics = function () {
            var project = this.project;
            if (!(project instanceof ts.server.ConfiguredProject)) {
                return [];
            }
            var diagnostics = [];
            var configSourceFile = ts.readJsonConfigFile(project.getConfigFilePath(), function (path) { return project.readFile(path); });
            if (!this.options.strictTemplates && !this.options.fullTemplateTypeCheck) {
                diagnostics.push({
                    messageText: 'Some language features are not available. ' +
                        'To access all features, enable `strictTemplates` in `angularCompilerOptions`.',
                    category: ts.DiagnosticCategory.Suggestion,
                    code: diagnostics_1.ngErrorCode(diagnostics_1.ErrorCode.SUGGEST_STRICT_TEMPLATES),
                    file: configSourceFile,
                    start: undefined,
                    length: undefined,
                });
            }
            var compiler = this.compilerFactory.getOrCreate();
            diagnostics.push.apply(diagnostics, tslib_1.__spread(compiler.getOptionDiagnostics()));
            return diagnostics;
        };
        LanguageService.prototype.watchConfigFile = function (project) {
            var _this = this;
            // TODO: Check the case when the project is disposed. An InferredProject
            // could be disposed when a tsconfig.json is added to the workspace,
            // in which case it becomes a ConfiguredProject (or vice-versa).
            // We need to make sure that the FileWatcher is closed.
            if (!(project instanceof ts.server.ConfiguredProject)) {
                return;
            }
            var host = project.projectService.host;
            host.watchFile(project.getConfigFilePath(), function (fileName, eventKind) {
                project.log("Config file changed: " + fileName);
                if (eventKind === ts.FileWatcherEventKind.Changed) {
                    _this.options = parseNgCompilerOptions(project, _this.parseConfigHost, _this.config);
                    logCompilerOptions(project, _this.options);
                }
            });
        };
        return LanguageService;
    }());
    exports.LanguageService = LanguageService;
    function logCompilerOptions(project, options) {
        var logger = project.projectService.logger;
        var projectName = project.getProjectName();
        logger.info("Angular compiler options for " + projectName + ": " + JSON.stringify(options, null, 2));
    }
    function parseNgCompilerOptions(project, host, config) {
        if (!(project instanceof ts.server.ConfiguredProject)) {
            return {};
        }
        var _a = compiler_cli_1.readConfiguration(project.getConfigFilePath(), /* existingOptions */ undefined, host), options = _a.options, errors = _a.errors;
        if (errors.length > 0) {
            project.setProjectErrors(errors);
        }
        // Projects loaded into the Language Service often include test files which are not part of the
        // app's main compilation unit, and these test files often include inline NgModules that declare
        // components from the app. These declarations conflict with the main declarations of such
        // components in the app's NgModules. This conflict is not normally present during regular
        // compilation because the app and the tests are part of separate compilation units.
        //
        // As a temporary mitigation of this problem, we instruct the compiler to ignore classes which
        // are not exported. In many cases, this ensures the test NgModules are ignored by the compiler
        // and only the real component declaration is used.
        options.compileNonExportedClasses = false;
        // If `forceStrictTemplates` is true, always enable `strictTemplates`
        // regardless of its value in tsconfig.json.
        if (config.forceStrictTemplates === true) {
            options.strictTemplates = true;
        }
        return options;
    }
    function createTypeCheckingProgramStrategy(project) {
        return {
            supportsInlineOperations: false,
            shimPathForComponent: function (component) {
                return typecheck_1.TypeCheckShimGenerator.shimFor(file_system_1.absoluteFromSourceFile(component.getSourceFile()));
            },
            getProgram: function () {
                var program = project.getLanguageService().getProgram();
                if (!program) {
                    throw new Error('Language service does not have a program!');
                }
                return program;
            },
            updateFiles: function (contents) {
                var e_2, _a;
                try {
                    for (var contents_1 = tslib_1.__values(contents), contents_1_1 = contents_1.next(); !contents_1_1.done; contents_1_1 = contents_1.next()) {
                        var _b = tslib_1.__read(contents_1_1.value, 2), fileName = _b[0], newText = _b[1];
                        var scriptInfo = getOrCreateTypeCheckScriptInfo(project, fileName);
                        var snapshot = scriptInfo.getSnapshot();
                        var length_1 = snapshot.getLength();
                        scriptInfo.editContent(0, length_1, newText);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (contents_1_1 && !contents_1_1.done && (_a = contents_1.return)) _a.call(contents_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            },
        };
    }
    function getOrCreateTypeCheckScriptInfo(project, tcf) {
        // First check if there is already a ScriptInfo for the tcf
        var projectService = project.projectService;
        var scriptInfo = projectService.getScriptInfo(tcf);
        if (!scriptInfo) {
            // ScriptInfo needs to be opened by client to be able to set its user-defined
            // content. We must also provide file content, otherwise the service will
            // attempt to fetch the content from disk and fail.
            scriptInfo = projectService.getOrCreateScriptInfoForNormalizedPath(ts.server.toNormalizedPath(tcf), true, // openedByClient
            '', // fileContent
            // script info added by plugins should be marked as external, see
            // https://github.com/microsoft/TypeScript/blob/b217f22e798c781f55d17da72ed099a9dee5c650/src/compiler/program.ts#L1897-L1899
            ts.ScriptKind.External);
            if (!scriptInfo) {
                throw new Error("Failed to create script info for " + tcf);
            }
        }
        // Add ScriptInfo to project if it's missing. A ScriptInfo needs to be part of
        // the project so that it becomes part of the program.
        if (!project.containsScriptInfo(scriptInfo)) {
            project.addRoot(scriptInfo);
        }
        return scriptInfo;
    }
    function isTemplateContext(program, fileName, position) {
        if (!utils_1.isTypeScriptFile(fileName)) {
            // If we aren't in a TS file, we must be in an HTML file, which we treat as template context
            return true;
        }
        var node = findTightestNodeAtPosition(program, fileName, position);
        if (node === undefined) {
            return false;
        }
        var asgn = ts_utils_1.getPropertyAssignmentFromValue(node, 'template');
        if (asgn === null) {
            return false;
        }
        return ts_utils_1.getClassDeclFromDecoratorProp(asgn) !== null;
    }
    function isInAngularContext(program, fileName, position) {
        var _a, _b;
        if (!utils_1.isTypeScriptFile(fileName)) {
            return true;
        }
        var node = findTightestNodeAtPosition(program, fileName, position);
        if (node === undefined) {
            return false;
        }
        var asgn = (_b = (_a = ts_utils_1.getPropertyAssignmentFromValue(node, 'template')) !== null && _a !== void 0 ? _a : ts_utils_1.getPropertyAssignmentFromValue(node, 'templateUrl')) !== null && _b !== void 0 ? _b : ts_utils_1.getPropertyAssignmentFromValue(node.parent, 'styleUrls');
        return asgn !== null && ts_utils_1.getClassDeclFromDecoratorProp(asgn) !== null;
    }
    function findTightestNodeAtPosition(program, fileName, position) {
        var sourceFile = program.getSourceFile(fileName);
        if (sourceFile === undefined) {
            return undefined;
        }
        return ts_utils_1.findTightestNode(sourceFile, position);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Vfc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2UvaXZ5L2xhbmd1YWdlX3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7OztJQUdILHNEQUE0RjtJQUU1RiwyRUFBbUY7SUFDbkYsMkVBQWlIO0lBQ2pILHVFQUFpRjtJQUNqRixxRUFBdUc7SUFDdkcsbUZBQTZGO0lBQzdGLG1EQUFxRDtJQUdyRCxtRUFBcUU7SUFDckUsbUZBQW1EO0lBQ25ELHlFQUF1RTtJQUN2RSx5RUFBZ0Q7SUFDaEQsdUVBQThDO0lBQzlDLHVFQUF3RDtJQUN4RCxpRkFBcUY7SUFDckYsbUVBQTJHO0lBQzNHLDZEQUFvRTtJQVVwRTtRQU9FLHlCQUNxQixPQUEwQixFQUMxQixJQUF3QixFQUN4QixNQUE2QjtZQUY3QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtZQUMxQixTQUFJLEdBQUosSUFBSSxDQUFvQjtZQUN4QixXQUFNLEdBQU4sTUFBTSxDQUF1QjtZQUVoRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksNEJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdFLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUNBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxD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QUFDLENBQUM7UUFDbkQsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzVCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTywyQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Fic29sdXRlU291cmNlU3BhbiwgQVNULCBQYXJzZVNvdXJjZVNwYW4sIFRtcGxBc3RCb3VuZEV2ZW50LCBUbXBsQXN0Tm9kZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlck9wdGlvbnMsIENvbmZpZ3VyYXRpb25Ib3N0LCByZWFkQ29uZmlndXJhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpJztcbmltcG9ydCB7TmdDb21waWxlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9jb3JlJztcbmltcG9ydCB7RXJyb3JDb2RlLCBuZ0Vycm9yQ29kZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9kaWFnbm9zdGljcyc7XG5pbXBvcnQge2Fic29sdXRlRnJvbSwgYWJzb2x1dGVGcm9tU291cmNlRmlsZSwgQWJzb2x1dGVGc1BhdGh9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtUeXBlQ2hlY2tTaGltR2VuZXJhdG9yfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL3R5cGVjaGVjayc7XG5pbXBvcnQge09wdGltaXplRm9yLCBUeXBlQ2hlY2tpbmdQcm9ncmFtU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL2FwaSc7XG5pbXBvcnQge2ZpbmRGaXJzdE1hdGNoaW5nTm9kZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy90eXBlY2hlY2svc3JjL2NvbW1lbnRzJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQvbGliL3Rzc2VydmVybGlicmFyeSc7XG5pbXBvcnQge0dldFRjYlJlc3BvbnNlfSBmcm9tICcuLi9hcGknO1xuXG5pbXBvcnQge0xhbmd1YWdlU2VydmljZUFkYXB0ZXIsIExTUGFyc2VDb25maWdIb3N0fSBmcm9tICcuL2FkYXB0ZXJzJztcbmltcG9ydCB7Q29tcGlsZXJGYWN0b3J5fSBmcm9tICcuL2NvbXBpbGVyX2ZhY3RvcnknO1xuaW1wb3J0IHtDb21wbGV0aW9uQnVpbGRlciwgQ29tcGxldGlvbk5vZGVDb250ZXh0fSBmcm9tICcuL2NvbXBsZXRpb25zJztcbmltcG9ydCB7RGVmaW5pdGlvbkJ1aWxkZXJ9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHtRdWlja0luZm9CdWlsZGVyfSBmcm9tICcuL3F1aWNrX2luZm8nO1xuaW1wb3J0IHtSZWZlcmVuY2VzQW5kUmVuYW1lQnVpbGRlcn0gZnJvbSAnLi9yZWZlcmVuY2VzJztcbmltcG9ydCB7Z2V0VGFyZ2V0QXRQb3NpdGlvbiwgVGFyZ2V0Q29udGV4dCwgVGFyZ2V0Tm9kZUtpbmR9IGZyb20gJy4vdGVtcGxhdGVfdGFyZ2V0JztcbmltcG9ydCB7ZmluZFRpZ2h0ZXN0Tm9kZSwgZ2V0Q2xhc3NEZWNsRnJvbURlY29yYXRvclByb3AsIGdldFByb3BlcnR5QXNzaWdubWVudEZyb21WYWx1ZX0gZnJvbSAnLi90c191dGlscyc7XG5pbXBvcnQge2dldFRlbXBsYXRlSW5mb0F0UG9zaXRpb24sIGlzVHlwZVNjcmlwdEZpbGV9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgTGFuZ3VhZ2VTZXJ2aWNlQ29uZmlnIHtcbiAgLyoqXG4gICAqIElmIHRydWUsIGVuYWJsZSBgc3RyaWN0VGVtcGxhdGVzYCBpbiBBbmd1bGFyIGNvbXBpbGVyIG9wdGlvbnMgcmVnYXJkbGVzc1xuICAgKiBvZiBpdHMgdmFsdWUgaW4gdHNjb25maWcuanNvbi5cbiAgICovXG4gIGZvcmNlU3RyaWN0VGVtcGxhdGVzPzogdHJ1ZTtcbn1cblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlU2VydmljZSB7XG4gIHByaXZhdGUgb3B0aW9uczogQ29tcGlsZXJPcHRpb25zO1xuICByZWFkb25seSBjb21waWxlckZhY3Rvcnk6IENvbXBpbGVyRmFjdG9yeTtcbiAgcHJpdmF0ZSByZWFkb25seSBzdHJhdGVneTogVHlwZUNoZWNraW5nUHJvZ3JhbVN0cmF0ZWd5O1xuICBwcml2YXRlIHJlYWRvbmx5IGFkYXB0ZXI6IExhbmd1YWdlU2VydmljZUFkYXB0ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGFyc2VDb25maWdIb3N0OiBMU1BhcnNlQ29uZmlnSG9zdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvamVjdDogdHMuc2VydmVyLlByb2plY3QsXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IHRzTFM6IHRzLkxhbmd1YWdlU2VydmljZSxcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBMYW5ndWFnZVNlcnZpY2VDb25maWcsXG4gICkge1xuICAgIHRoaXMucGFyc2VDb25maWdIb3N0ID0gbmV3IExTUGFyc2VDb25maWdIb3N0KHByb2plY3QucHJvamVjdFNlcnZpY2UuaG9zdCk7XG4gICAgdGhpcy5vcHRpb25zID0gcGFyc2VOZ0NvbXBpbGVyT3B0aW9ucyhwcm9qZWN0LCB0aGlzLnBhcnNlQ29uZmlnSG9zdCwgY29uZmlnKTtcbiAgICBsb2dDb21waWxlck9wdGlvbnMocHJvamVjdCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnN0cmF0ZWd5ID0gY3JlYXRlVHlwZUNoZWNraW5nUHJvZ3JhbVN0cmF0ZWd5KHByb2plY3QpO1xuICAgIHRoaXMuYWRhcHRlciA9IG5ldyBMYW5ndWFnZVNlcnZpY2VBZGFwdGVyKHByb2plY3QpO1xuICAgIHRoaXMuY29tcGlsZXJGYWN0b3J5ID0gbmV3IENvbXBpbGVyRmFjdG9yeSh0aGlzLmFkYXB0ZXIsIHRoaXMuc3RyYXRlZ3ksIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy53YXRjaENvbmZpZ0ZpbGUocHJvamVjdCk7XG4gIH1cblxuICBnZXRDb21waWxlck9wdGlvbnMoKTogQ29tcGlsZXJPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0U2VtYW50aWNEaWFnbm9zdGljcyhmaWxlTmFtZTogc3RyaW5nKTogdHMuRGlhZ25vc3RpY1tdIHtcbiAgICBjb25zdCBjb21waWxlciA9IHRoaXMuY29tcGlsZXJGYWN0b3J5LmdldE9yQ3JlYXRlKCk7XG4gICAgY29uc3QgdHRjID0gY29tcGlsZXIuZ2V0VGVtcGxhdGVUeXBlQ2hlY2tlcigpO1xuICAgIGNvbnN0IGRpYWdub3N0aWNzOiB0cy5EaWFnbm9zdGljW10gPSBbXTtcbiAgICBpZiAoaXNUeXBlU2NyaXB0RmlsZShmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IHByb2dyYW0gPSBjb21waWxlci5nZXROZXh0UHJvZ3JhbSgpO1xuICAgICAgY29uc3Qgc291cmNlRmlsZSA9IHByb2dyYW0uZ2V0U291cmNlRmlsZShmaWxlTmFtZSk7XG4gICAgICBpZiAoc291cmNlRmlsZSkge1xuICAgICAgICBjb25zdCBuZ0RpYWdub3N0aWNzID0gY29tcGlsZXIuZ2V0RGlhZ25vc3RpY3NGb3JGaWxlKHNvdXJjZUZpbGUsIE9wdGltaXplRm9yLlNpbmdsZUZpbGUpO1xuICAgICAgICAvLyBUaGVyZSBhcmUgc2V2ZXJhbCBraW5kcyBvZiBkaWFnbm9zdGljcyByZXR1cm5lZCBieSBgTmdDb21waWxlcmAgZm9yIGEgc291cmNlIGZpbGU6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIDEuIEFuZ3VsYXItcmVsYXRlZCBub24tdGVtcGxhdGUgZGlhZ25vc3RpY3MgZnJvbSBkZWNvcmF0ZWQgY2xhc3NlcyB3aXRoaW4gdGhhdCBmaWxlLlxuICAgICAgICAvLyAyLiBUZW1wbGF0ZSBkaWFnbm9zdGljcyBmb3IgY29tcG9uZW50cyB3aXRoIGRpcmVjdCBpbmxpbmUgdGVtcGxhdGVzIChhIHN0cmluZyBsaXRlcmFsKS5cbiAgICAgICAgLy8gMy4gVGVtcGxhdGUgZGlhZ25vc3RpY3MgZm9yIGNvbXBvbmVudHMgd2l0aCBpbmRpcmVjdCBpbmxpbmUgdGVtcGxhdGVzICh0ZW1wbGF0ZXMgY29tcHV0ZWRcbiAgICAgICAgLy8gICAgYnkgZXhwcmVzc2lvbikuXG4gICAgICAgIC8vIDQuIFRlbXBsYXRlIGRpYWdub3N0aWNzIGZvciBjb21wb25lbnRzIHdpdGggZXh0ZXJuYWwgdGVtcGxhdGVzLlxuICAgICAgICAvL1xuICAgICAgICAvLyBXaGVuIHNob3dpbmcgZGlhZ25vc3RpY3MgZm9yIGEgVFMgc291cmNlIGZpbGUsIHdlIHdhbnQgdG8gb25seSBpbmNsdWRlIGtpbmRzIDEgYW5kIDIgLVxuICAgICAgICAvLyB0aG9zZSBkaWFnbm9zdGljcyB3aGljaCBhcmUgcmVwb3J0ZWQgYXQgYSBsb2NhdGlvbiB3aXRoaW4gdGhlIFRTIGZpbGUgaXRzZWxmLiBEaWFnbm9zdGljc1xuICAgICAgICAvLyBmb3IgZXh0ZXJuYWwgdGVtcGxhdGVzIHdpbGwgYmUgc2hvd24gd2hlbiBlZGl0aW5nIHRoYXQgdGVtcGxhdGUgZmlsZSAodGhlIGBlbHNlYCBibG9jaylcbiAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEN1cnJlbnRseSwgaW5kaXJlY3QgaW5saW5lIHRlbXBsYXRlIGRpYWdub3N0aWNzIChraW5kIDMpIGFyZSBub3Qgc2hvd24gYXQgYWxsIGJ5IHRoZVxuICAgICAgICAvLyBMYW5ndWFnZSBTZXJ2aWNlLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHNlbnNpYmxlIGxvY2F0aW9uIGluIHRoZSB1c2VyJ3MgY29kZSBmb3IgdGhlbS4gU3VjaFxuICAgICAgICAvLyB0ZW1wbGF0ZXMgYXJlIGFuIGVkZ2UgY2FzZSwgdGhvdWdoLCBhbmQgc2hvdWxkIG5vdCBiZSBjb21tb24uXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRPRE8oYWx4aHViKTogZmlndXJlIG91dCBhIGdvb2QgdXNlciBleHBlcmllbmNlIGZvciBpbmRpcmVjdCB0ZW1wbGF0ZSBkaWFnbm9zdGljcyBhbmRcbiAgICAgICAgLy8gc2hvdyB0aGVtIGZyb20gd2l0aGluIHRoZSBMYW5ndWFnZSBTZXJ2aWNlLlxuICAgICAgICBkaWFnbm9zdGljcy5wdXNoKC4uLm5nRGlhZ25vc3RpY3MuZmlsdGVyKFxuICAgICAgICAgICAgZGlhZyA9PiBkaWFnLmZpbGUgIT09IHVuZGVmaW5lZCAmJiBkaWFnLmZpbGUuZmlsZU5hbWUgPT09IHNvdXJjZUZpbGUuZmlsZU5hbWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbXBpbGVyLmdldENvbXBvbmVudHNXaXRoVGVtcGxhdGVGaWxlKGZpbGVOYW1lKTtcbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihjb21wb25lbnQpKSB7XG4gICAgICAgICAgZGlhZ25vc3RpY3MucHVzaCguLi50dGMuZ2V0RGlhZ25vc3RpY3NGb3JDb21wb25lbnQoY29tcG9uZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb21waWxlckZhY3RvcnkucmVnaXN0ZXJMYXN0S25vd25Qcm9ncmFtKCk7XG4gICAgcmV0dXJuIGRpYWdub3N0aWNzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbihmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdHMuRGVmaW5pdGlvbkluZm9BbmRCb3VuZFNwYW5cbiAgICAgIHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLndpdGhDb21waWxlcigoY29tcGlsZXIpID0+IHtcbiAgICAgIGlmICghaXNJbkFuZ3VsYXJDb250ZXh0KGNvbXBpbGVyLmdldE5leHRQcm9ncmFtKCksIGZpbGVOYW1lLCBwb3NpdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRGVmaW5pdGlvbkJ1aWxkZXIodGhpcy50c0xTLCBjb21waWxlcilcbiAgICAgICAgICAuZ2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VHlwZURlZmluaXRpb25BdFBvc2l0aW9uKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOlxuICAgICAgcmVhZG9ubHkgdHMuRGVmaW5pdGlvbkluZm9bXXx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLndpdGhDb21waWxlcigoY29tcGlsZXIpID0+IHtcbiAgICAgIGlmICghaXNUZW1wbGF0ZUNvbnRleHQoY29tcGlsZXIuZ2V0TmV4dFByb2dyYW0oKSwgZmlsZU5hbWUsIHBvc2l0aW9uKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBEZWZpbml0aW9uQnVpbGRlcih0aGlzLnRzTFMsIGNvbXBpbGVyKVxuICAgICAgICAgIC5nZXRUeXBlRGVmaW5pdGlvbnNBdFBvc2l0aW9uKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBnZXRRdWlja0luZm9BdFBvc2l0aW9uKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB0cy5RdWlja0luZm98dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53aXRoQ29tcGlsZXIoKGNvbXBpbGVyKSA9PiB7XG4gICAgICBpZiAoIWlzVGVtcGxhdGVDb250ZXh0KGNvbXBpbGVyLmdldE5leHRQcm9ncmFtKCksIGZpbGVOYW1lLCBwb3NpdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGVtcGxhdGVJbmZvID0gZ2V0VGVtcGxhdGVJbmZvQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24sIGNvbXBpbGVyKTtcbiAgICAgIGlmICh0ZW1wbGF0ZUluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9zaXRpb25EZXRhaWxzID0gZ2V0VGFyZ2V0QXRQb3NpdGlvbih0ZW1wbGF0ZUluZm8udGVtcGxhdGUsIHBvc2l0aW9uKTtcbiAgICAgIGlmIChwb3NpdGlvbkRldGFpbHMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLy8gQmVjYXVzZSB3ZSBjYW4gb25seSBzaG93IDEgcXVpY2sgaW5mbywganVzdCB1c2UgdGhlIGJvdW5kIGF0dHJpYnV0ZSBpZiB0aGUgdGFyZ2V0IGlzIGEgdHdvXG4gICAgICAvLyB3YXkgYmluZGluZy4gV2UgbWF5IGNvbnNpZGVyIGNvbmNhdGVuYXRpbmcgYWRkaXRpb25hbCBkaXNwbGF5IHBhcnRzIGZyb20gdGhlIG90aGVyIHRhcmdldFxuICAgICAgLy8gbm9kZXMgb3IgcmVwcmVzZW50aW5nIHRoZSB0d28gd2F5IGJpbmRpbmcgaW4gc29tZSBvdGhlciBtYW5uZXIgaW4gdGhlIGZ1dHVyZS5cbiAgICAgIGNvbnN0IG5vZGUgPSBwb3NpdGlvbkRldGFpbHMuY29udGV4dC5raW5kID09PSBUYXJnZXROb2RlS2luZC5Ud29XYXlCaW5kaW5nQ29udGV4dCA/XG4gICAgICAgICAgcG9zaXRpb25EZXRhaWxzLmNvbnRleHQubm9kZXNbMF0gOlxuICAgICAgICAgIHBvc2l0aW9uRGV0YWlscy5jb250ZXh0Lm5vZGU7XG4gICAgICByZXR1cm4gbmV3IFF1aWNrSW5mb0J1aWxkZXIodGhpcy50c0xTLCBjb21waWxlciwgdGVtcGxhdGVJbmZvLmNvbXBvbmVudCwgbm9kZSkuZ2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzQXRQb3NpdGlvbihmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdHMuUmVmZXJlbmNlRW50cnlbXXx1bmRlZmluZWQge1xuICAgIGNvbnN0IGNvbXBpbGVyID0gdGhpcy5jb21waWxlckZhY3RvcnkuZ2V0T3JDcmVhdGUoKTtcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFJlZmVyZW5jZXNBbmRSZW5hbWVCdWlsZGVyKHRoaXMuc3RyYXRlZ3ksIHRoaXMudHNMUywgY29tcGlsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UmVmZXJlbmNlc0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICB0aGlzLmNvbXBpbGVyRmFjdG9yeS5yZWdpc3Rlckxhc3RLbm93blByb2dyYW0oKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGdldFJlbmFtZUluZm8oZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IHRzLlJlbmFtZUluZm8ge1xuICAgIGNvbnN0IGNvbXBpbGVyID0gdGhpcy5jb21waWxlckZhY3RvcnkuZ2V0T3JDcmVhdGUoKTtcbiAgICBjb25zdCByZW5hbWVJbmZvID0gbmV3IFJlZmVyZW5jZXNBbmRSZW5hbWVCdWlsZGVyKHRoaXMuc3RyYXRlZ3ksIHRoaXMudHNMUywgY29tcGlsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UmVuYW1lSW5mbyhhYnNvbHV0ZUZyb20oZmlsZU5hbWUpLCBwb3NpdGlvbik7XG4gICAgaWYgKCFyZW5hbWVJbmZvLmNhblJlbmFtZSkge1xuICAgICAgcmV0dXJuIHJlbmFtZUluZm87XG4gICAgfVxuXG4gICAgY29uc3QgcXVpY2tJbmZvID0gdGhpcy5nZXRRdWlja0luZm9BdFBvc2l0aW9uKGZpbGVOYW1lLCBwb3NpdGlvbikgPz9cbiAgICAgICAgdGhpcy50c0xTLmdldFF1aWNrSW5mb0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICBjb25zdCBraW5kID0gcXVpY2tJbmZvPy5raW5kID8/IHRzLlNjcmlwdEVsZW1lbnRLaW5kLnVua25vd247XG4gICAgY29uc3Qga2luZE1vZGlmaWVycyA9IHF1aWNrSW5mbz8ua2luZE1vZGlmaWVycyA/PyB0cy5TY3JpcHRFbGVtZW50S2luZC51bmtub3duO1xuICAgIHJldHVybiB7Li4ucmVuYW1lSW5mbywga2luZCwga2luZE1vZGlmaWVyc307XG4gIH1cblxuICBmaW5kUmVuYW1lTG9jYXRpb25zKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiByZWFkb25seSB0cy5SZW5hbWVMb2NhdGlvbltdfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgY29tcGlsZXIgPSB0aGlzLmNvbXBpbGVyRmFjdG9yeS5nZXRPckNyZWF0ZSgpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgUmVmZXJlbmNlc0FuZFJlbmFtZUJ1aWxkZXIodGhpcy5zdHJhdGVneSwgdGhpcy50c0xTLCBjb21waWxlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kUmVuYW1lTG9jYXRpb25zKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gICAgdGhpcy5jb21waWxlckZhY3RvcnkucmVnaXN0ZXJMYXN0S25vd25Qcm9ncmFtKCk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBsZXRpb25CdWlsZGVyKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOlxuICAgICAgQ29tcGxldGlvbkJ1aWxkZXI8VG1wbEFzdE5vZGV8QVNUPnxudWxsIHtcbiAgICBjb25zdCBjb21waWxlciA9IHRoaXMuY29tcGlsZXJGYWN0b3J5LmdldE9yQ3JlYXRlKCk7XG4gICAgY29uc3QgdGVtcGxhdGVJbmZvID0gZ2V0VGVtcGxhdGVJbmZvQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24sIGNvbXBpbGVyKTtcbiAgICBpZiAodGVtcGxhdGVJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbkRldGFpbHMgPSBnZXRUYXJnZXRBdFBvc2l0aW9uKHRlbXBsYXRlSW5mby50ZW1wbGF0ZSwgcG9zaXRpb24pO1xuICAgIGlmIChwb3NpdGlvbkRldGFpbHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvciB0d28td2F5IGJpbmRpbmdzLCB3ZSBhY3R1YWxseSBvbmx5IG5lZWQgdG8gYmUgY29uY2VybmVkIHdpdGggdGhlIGJvdW5kIGF0dHJpYnV0ZSBiZWNhdXNlXG4gICAgLy8gdGhlIGJpbmRpbmdzIGluIHRoZSB0ZW1wbGF0ZSBhcmUgd3JpdHRlbiB3aXRoIHRoZSBhdHRyaWJ1dGUgbmFtZSwgbm90IHRoZSBldmVudCBuYW1lLlxuICAgIGNvbnN0IG5vZGUgPSBwb3NpdGlvbkRldGFpbHMuY29udGV4dC5raW5kID09PSBUYXJnZXROb2RlS2luZC5Ud29XYXlCaW5kaW5nQ29udGV4dCA/XG4gICAgICAgIHBvc2l0aW9uRGV0YWlscy5jb250ZXh0Lm5vZGVzWzBdIDpcbiAgICAgICAgcG9zaXRpb25EZXRhaWxzLmNvbnRleHQubm9kZTtcbiAgICByZXR1cm4gbmV3IENvbXBsZXRpb25CdWlsZGVyKFxuICAgICAgICB0aGlzLnRzTFMsIGNvbXBpbGVyLCB0ZW1wbGF0ZUluZm8uY29tcG9uZW50LCBub2RlLCBwb3NpdGlvbkRldGFpbHMsXG4gICAgICAgIGlzVHlwZVNjcmlwdEZpbGUoZmlsZU5hbWUpKTtcbiAgfVxuXG4gIGdldENvbXBsZXRpb25zQXRQb3NpdGlvbihcbiAgICAgIGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIsIG9wdGlvbnM6IHRzLkdldENvbXBsZXRpb25zQXRQb3NpdGlvbk9wdGlvbnN8dW5kZWZpbmVkKTpcbiAgICAgIHRzLldpdGhNZXRhZGF0YTx0cy5Db21wbGV0aW9uSW5mbz58dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53aXRoQ29tcGlsZXIoKGNvbXBpbGVyKSA9PiB7XG4gICAgICBpZiAoIWlzVGVtcGxhdGVDb250ZXh0KGNvbXBpbGVyLmdldE5leHRQcm9ncmFtKCksIGZpbGVOYW1lLCBwb3NpdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnVpbGRlciA9IHRoaXMuZ2V0Q29tcGxldGlvbkJ1aWxkZXIoZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICAgIGlmIChidWlsZGVyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnVpbGRlci5nZXRDb21wbGV0aW9uc0F0UG9zaXRpb24ob3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb21wbGV0aW9uRW50cnlEZXRhaWxzKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlciwgZW50cnlOYW1lOiBzdHJpbmcsXG4gICAgICBmb3JtYXRPcHRpb25zOiB0cy5Gb3JtYXRDb2RlT3B0aW9uc3x0cy5Gb3JtYXRDb2RlU2V0dGluZ3N8dW5kZWZpbmVkLFxuICAgICAgcHJlZmVyZW5jZXM6IHRzLlVzZXJQcmVmZXJlbmNlc3x1bmRlZmluZWQpOiB0cy5Db21wbGV0aW9uRW50cnlEZXRhaWxzfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMud2l0aENvbXBpbGVyKChjb21waWxlcikgPT4ge1xuICAgICAgaWYgKCFpc1RlbXBsYXRlQ29udGV4dChjb21waWxlci5nZXROZXh0UHJvZ3JhbSgpLCBmaWxlTmFtZSwgcG9zaXRpb24pKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ1aWxkZXIgPSB0aGlzLmdldENvbXBsZXRpb25CdWlsZGVyKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gICAgICBpZiAoYnVpbGRlciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1aWxkZXIuZ2V0Q29tcGxldGlvbkVudHJ5RGV0YWlscyhlbnRyeU5hbWUsIGZvcm1hdE9wdGlvbnMsIHByZWZlcmVuY2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbXBsZXRpb25FbnRyeVN5bWJvbChmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyLCBlbnRyeU5hbWU6IHN0cmluZyk6IHRzLlN5bWJvbFxuICAgICAgfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMud2l0aENvbXBpbGVyKChjb21waWxlcikgPT4ge1xuICAgICAgaWYgKCFpc1RlbXBsYXRlQ29udGV4dChjb21waWxlci5nZXROZXh0UHJvZ3JhbSgpLCBmaWxlTmFtZSwgcG9zaXRpb24pKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ1aWxkZXIgPSB0aGlzLmdldENvbXBsZXRpb25CdWlsZGVyKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gICAgICBpZiAoYnVpbGRlciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYnVpbGRlci5nZXRDb21wbGV0aW9uRW50cnlTeW1ib2woZW50cnlOYW1lKTtcbiAgICAgIHRoaXMuY29tcGlsZXJGYWN0b3J5LnJlZ2lzdGVyTGFzdEtub3duUHJvZ3JhbSgpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRjYihmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogR2V0VGNiUmVzcG9uc2V8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53aXRoQ29tcGlsZXI8R2V0VGNiUmVzcG9uc2V8dW5kZWZpbmVkPihjb21waWxlciA9PiB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUluZm8gPSBnZXRUZW1wbGF0ZUluZm9BdFBvc2l0aW9uKGZpbGVOYW1lLCBwb3NpdGlvbiwgY29tcGlsZXIpO1xuICAgICAgaWYgKHRlbXBsYXRlSW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB0Y2IgPSBjb21waWxlci5nZXRUZW1wbGF0ZVR5cGVDaGVja2VyKCkuZ2V0VHlwZUNoZWNrQmxvY2sodGVtcGxhdGVJbmZvLmNvbXBvbmVudCk7XG4gICAgICBpZiAodGNiID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBzZiA9IHRjYi5nZXRTb3VyY2VGaWxlKCk7XG5cbiAgICAgIGxldCBzZWxlY3Rpb25zOiB0cy5UZXh0U3BhbltdID0gW107XG4gICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXRBdFBvc2l0aW9uKHRlbXBsYXRlSW5mby50ZW1wbGF0ZSwgcG9zaXRpb24pO1xuICAgICAgaWYgKHRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uU3BhbnM6IEFycmF5PFBhcnNlU291cmNlU3BhbnxBYnNvbHV0ZVNvdXJjZVNwYW4+O1xuICAgICAgICBpZiAoJ25vZGVzJyBpbiB0YXJnZXQuY29udGV4dCkge1xuICAgICAgICAgIHNlbGVjdGlvblNwYW5zID0gdGFyZ2V0LmNvbnRleHQubm9kZXMubWFwKG4gPT4gbi5zb3VyY2VTcGFuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3Rpb25TcGFucyA9IFt0YXJnZXQuY29udGV4dC5ub2RlLnNvdXJjZVNwYW5dO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbk5vZGVzOiB0cy5Ob2RlW10gPVxuICAgICAgICAgICAgc2VsZWN0aW9uU3BhbnNcbiAgICAgICAgICAgICAgICAubWFwKHMgPT4gZmluZEZpcnN0TWF0Y2hpbmdOb2RlKHRjYiwge1xuICAgICAgICAgICAgICAgICAgICAgICB3aXRoU3BhbjogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAobm9kZTogdHMuTm9kZSk6IG5vZGUgaXMgdHMuTm9kZSA9PiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigobik6IG4gaXMgdHMuTm9kZSA9PiBuICE9PSBudWxsKTtcblxuICAgICAgICBzZWxlY3Rpb25zID0gc2VsZWN0aW9uTm9kZXMubWFwKG4gPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydDogbi5nZXRTdGFydChzZiksXG4gICAgICAgICAgICBsZW5ndGg6IG4uZ2V0RW5kKCkgLSBuLmdldFN0YXJ0KHNmKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZU5hbWU6IHNmLmZpbGVOYW1lLFxuICAgICAgICBjb250ZW50OiBzZi5nZXRGdWxsVGV4dCgpLFxuICAgICAgICBzZWxlY3Rpb25zLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aENvbXBpbGVyPFQ+KHA6IChjb21waWxlcjogTmdDb21waWxlcikgPT4gVCk6IFQge1xuICAgIGNvbnN0IGNvbXBpbGVyID0gdGhpcy5jb21waWxlckZhY3RvcnkuZ2V0T3JDcmVhdGUoKTtcbiAgICBjb25zdCByZXN1bHQgPSBwKGNvbXBpbGVyKTtcbiAgICB0aGlzLmNvbXBpbGVyRmFjdG9yeS5yZWdpc3Rlckxhc3RLbm93blByb2dyYW0oKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Q29tcGlsZXJPcHRpb25zRGlhZ25vc3RpY3MoKTogdHMuRGlhZ25vc3RpY1tdIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0O1xuICAgIGlmICghKHByb2plY3QgaW5zdGFuY2VvZiB0cy5zZXJ2ZXIuQ29uZmlndXJlZFByb2plY3QpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXSA9IFtdO1xuICAgIGNvbnN0IGNvbmZpZ1NvdXJjZUZpbGUgPSB0cy5yZWFkSnNvbkNvbmZpZ0ZpbGUoXG4gICAgICAgIHByb2plY3QuZ2V0Q29uZmlnRmlsZVBhdGgoKSwgKHBhdGg6IHN0cmluZykgPT4gcHJvamVjdC5yZWFkRmlsZShwYXRoKSk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3RUZW1wbGF0ZXMgJiYgIXRoaXMub3B0aW9ucy5mdWxsVGVtcGxhdGVUeXBlQ2hlY2spIHtcbiAgICAgIGRpYWdub3N0aWNzLnB1c2goe1xuICAgICAgICBtZXNzYWdlVGV4dDogJ1NvbWUgbGFuZ3VhZ2UgZmVhdHVyZXMgYXJlIG5vdCBhdmFpbGFibGUuICcgK1xuICAgICAgICAgICAgJ1RvIGFjY2VzcyBhbGwgZmVhdHVyZXMsIGVuYWJsZSBgc3RyaWN0VGVtcGxhdGVzYCBpbiBgYW5ndWxhckNvbXBpbGVyT3B0aW9uc2AuJyxcbiAgICAgICAgY2F0ZWdvcnk6IHRzLkRpYWdub3N0aWNDYXRlZ29yeS5TdWdnZXN0aW9uLFxuICAgICAgICBjb2RlOiBuZ0Vycm9yQ29kZShFcnJvckNvZGUuU1VHR0VTVF9TVFJJQ1RfVEVNUExBVEVTKSxcbiAgICAgICAgZmlsZTogY29uZmlnU291cmNlRmlsZSxcbiAgICAgICAgc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgbGVuZ3RoOiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlciA9IHRoaXMuY29tcGlsZXJGYWN0b3J5LmdldE9yQ3JlYXRlKCk7XG4gICAgZGlhZ25vc3RpY3MucHVzaCguLi5jb21waWxlci5nZXRPcHRpb25EaWFnbm9zdGljcygpKTtcblxuICAgIHJldHVybiBkaWFnbm9zdGljcztcbiAgfVxuXG4gIHByaXZhdGUgd2F0Y2hDb25maWdGaWxlKHByb2plY3Q6IHRzLnNlcnZlci5Qcm9qZWN0KSB7XG4gICAgLy8gVE9ETzogQ2hlY2sgdGhlIGNhc2Ugd2hlbiB0aGUgcHJvamVjdCBpcyBkaXNwb3NlZC4gQW4gSW5mZXJyZWRQcm9qZWN0XG4gICAgLy8gY291bGQgYmUgZGlzcG9zZWQgd2hlbiBhIHRzY29uZmlnLmpzb24gaXMgYWRkZWQgdG8gdGhlIHdvcmtzcGFjZSxcbiAgICAvLyBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgYSBDb25maWd1cmVkUHJvamVjdCAob3IgdmljZS12ZXJzYSkuXG4gICAgLy8gV2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB0aGUgRmlsZVdhdGNoZXIgaXMgY2xvc2VkLlxuICAgIGlmICghKHByb2plY3QgaW5zdGFuY2VvZiB0cy5zZXJ2ZXIuQ29uZmlndXJlZFByb2plY3QpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtob3N0fSA9IHByb2plY3QucHJvamVjdFNlcnZpY2U7XG4gICAgaG9zdC53YXRjaEZpbGUoXG4gICAgICAgIHByb2plY3QuZ2V0Q29uZmlnRmlsZVBhdGgoKSwgKGZpbGVOYW1lOiBzdHJpbmcsIGV2ZW50S2luZDogdHMuRmlsZVdhdGNoZXJFdmVudEtpbmQpID0+IHtcbiAgICAgICAgICBwcm9qZWN0LmxvZyhgQ29uZmlnIGZpbGUgY2hhbmdlZDogJHtmaWxlTmFtZX1gKTtcbiAgICAgICAgICBpZiAoZXZlbnRLaW5kID09PSB0cy5GaWxlV2F0Y2hlckV2ZW50S2luZC5DaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBwYXJzZU5nQ29tcGlsZXJPcHRpb25zKHByb2plY3QsIHRoaXMucGFyc2VDb25maWdIb3N0LCB0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICBsb2dDb21waWxlck9wdGlvbnMocHJvamVjdCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0NvbXBpbGVyT3B0aW9ucyhwcm9qZWN0OiB0cy5zZXJ2ZXIuUHJvamVjdCwgb3B0aW9uczogQ29tcGlsZXJPcHRpb25zKSB7XG4gIGNvbnN0IHtsb2dnZXJ9ID0gcHJvamVjdC5wcm9qZWN0U2VydmljZTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldFByb2plY3ROYW1lKCk7XG4gIGxvZ2dlci5pbmZvKGBBbmd1bGFyIGNvbXBpbGVyIG9wdGlvbnMgZm9yICR7cHJvamVjdE5hbWV9OiBgICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucywgbnVsbCwgMikpO1xufVxuXG5mdW5jdGlvbiBwYXJzZU5nQ29tcGlsZXJPcHRpb25zKFxuICAgIHByb2plY3Q6IHRzLnNlcnZlci5Qcm9qZWN0LCBob3N0OiBDb25maWd1cmF0aW9uSG9zdCxcbiAgICBjb25maWc6IExhbmd1YWdlU2VydmljZUNvbmZpZyk6IENvbXBpbGVyT3B0aW9ucyB7XG4gIGlmICghKHByb2plY3QgaW5zdGFuY2VvZiB0cy5zZXJ2ZXIuQ29uZmlndXJlZFByb2plY3QpKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IHtvcHRpb25zLCBlcnJvcnN9ID1cbiAgICAgIHJlYWRDb25maWd1cmF0aW9uKHByb2plY3QuZ2V0Q29uZmlnRmlsZVBhdGgoKSwgLyogZXhpc3RpbmdPcHRpb25zICovIHVuZGVmaW5lZCwgaG9zdCk7XG4gIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIHByb2plY3Quc2V0UHJvamVjdEVycm9ycyhlcnJvcnMpO1xuICB9XG5cbiAgLy8gUHJvamVjdHMgbG9hZGVkIGludG8gdGhlIExhbmd1YWdlIFNlcnZpY2Ugb2Z0ZW4gaW5jbHVkZSB0ZXN0IGZpbGVzIHdoaWNoIGFyZSBub3QgcGFydCBvZiB0aGVcbiAgLy8gYXBwJ3MgbWFpbiBjb21waWxhdGlvbiB1bml0LCBhbmQgdGhlc2UgdGVzdCBmaWxlcyBvZnRlbiBpbmNsdWRlIGlubGluZSBOZ01vZHVsZXMgdGhhdCBkZWNsYXJlXG4gIC8vIGNvbXBvbmVudHMgZnJvbSB0aGUgYXBwLiBUaGVzZSBkZWNsYXJhdGlvbnMgY29uZmxpY3Qgd2l0aCB0aGUgbWFpbiBkZWNsYXJhdGlvbnMgb2Ygc3VjaFxuICAvLyBjb21wb25lbnRzIGluIHRoZSBhcHAncyBOZ01vZHVsZXMuIFRoaXMgY29uZmxpY3QgaXMgbm90IG5vcm1hbGx5IHByZXNlbnQgZHVyaW5nIHJlZ3VsYXJcbiAgLy8gY29tcGlsYXRpb24gYmVjYXVzZSB0aGUgYXBwIGFuZCB0aGUgdGVzdHMgYXJlIHBhcnQgb2Ygc2VwYXJhdGUgY29tcGlsYXRpb24gdW5pdHMuXG4gIC8vXG4gIC8vIEFzIGEgdGVtcG9yYXJ5IG1pdGlnYXRpb24gb2YgdGhpcyBwcm9ibGVtLCB3ZSBpbnN0cnVjdCB0aGUgY29tcGlsZXIgdG8gaWdub3JlIGNsYXNzZXMgd2hpY2hcbiAgLy8gYXJlIG5vdCBleHBvcnRlZC4gSW4gbWFueSBjYXNlcywgdGhpcyBlbnN1cmVzIHRoZSB0ZXN0IE5nTW9kdWxlcyBhcmUgaWdub3JlZCBieSB0aGUgY29tcGlsZXJcbiAgLy8gYW5kIG9ubHkgdGhlIHJlYWwgY29tcG9uZW50IGRlY2xhcmF0aW9uIGlzIHVzZWQuXG4gIG9wdGlvbnMuY29tcGlsZU5vbkV4cG9ydGVkQ2xhc3NlcyA9IGZhbHNlO1xuXG4gIC8vIElmIGBmb3JjZVN0cmljdFRlbXBsYXRlc2AgaXMgdHJ1ZSwgYWx3YXlzIGVuYWJsZSBgc3RyaWN0VGVtcGxhdGVzYFxuICAvLyByZWdhcmRsZXNzIG9mIGl0cyB2YWx1ZSBpbiB0c2NvbmZpZy5qc29uLlxuICBpZiAoY29uZmlnLmZvcmNlU3RyaWN0VGVtcGxhdGVzID09PSB0cnVlKSB7XG4gICAgb3B0aW9ucy5zdHJpY3RUZW1wbGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVR5cGVDaGVja2luZ1Byb2dyYW1TdHJhdGVneShwcm9qZWN0OiB0cy5zZXJ2ZXIuUHJvamVjdCk6XG4gICAgVHlwZUNoZWNraW5nUHJvZ3JhbVN0cmF0ZWd5IHtcbiAgcmV0dXJuIHtcbiAgICBzdXBwb3J0c0lubGluZU9wZXJhdGlvbnM6IGZhbHNlLFxuICAgIHNoaW1QYXRoRm9yQ29tcG9uZW50KGNvbXBvbmVudDogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IEFic29sdXRlRnNQYXRoIHtcbiAgICAgIHJldHVybiBUeXBlQ2hlY2tTaGltR2VuZXJhdG9yLnNoaW1Gb3IoYWJzb2x1dGVGcm9tU291cmNlRmlsZShjb21wb25lbnQuZ2V0U291cmNlRmlsZSgpKSk7XG4gICAgfSxcbiAgICBnZXRQcm9ncmFtKCk6IHRzLlByb2dyYW0ge1xuICAgICAgY29uc3QgcHJvZ3JhbSA9IHByb2plY3QuZ2V0TGFuZ3VhZ2VTZXJ2aWNlKCkuZ2V0UHJvZ3JhbSgpO1xuICAgICAgaWYgKCFwcm9ncmFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGFuZ3VhZ2Ugc2VydmljZSBkb2VzIG5vdCBoYXZlIGEgcHJvZ3JhbSEnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgIH0sXG4gICAgdXBkYXRlRmlsZXMoY29udGVudHM6IE1hcDxBYnNvbHV0ZUZzUGF0aCwgc3RyaW5nPikge1xuICAgICAgZm9yIChjb25zdCBbZmlsZU5hbWUsIG5ld1RleHRdIG9mIGNvbnRlbnRzKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdEluZm8gPSBnZXRPckNyZWF0ZVR5cGVDaGVja1NjcmlwdEluZm8ocHJvamVjdCwgZmlsZU5hbWUpO1xuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IHNjcmlwdEluZm8uZ2V0U25hcHNob3QoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc25hcHNob3QuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIHNjcmlwdEluZm8uZWRpdENvbnRlbnQoMCwgbGVuZ3RoLCBuZXdUZXh0KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVR5cGVDaGVja1NjcmlwdEluZm8oXG4gICAgcHJvamVjdDogdHMuc2VydmVyLlByb2plY3QsIHRjZjogc3RyaW5nKTogdHMuc2VydmVyLlNjcmlwdEluZm8ge1xuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgU2NyaXB0SW5mbyBmb3IgdGhlIHRjZlxuICBjb25zdCB7cHJvamVjdFNlcnZpY2V9ID0gcHJvamVjdDtcbiAgbGV0IHNjcmlwdEluZm8gPSBwcm9qZWN0U2VydmljZS5nZXRTY3JpcHRJbmZvKHRjZik7XG4gIGlmICghc2NyaXB0SW5mbykge1xuICAgIC8vIFNjcmlwdEluZm8gbmVlZHMgdG8gYmUgb3BlbmVkIGJ5IGNsaWVudCB0byBiZSBhYmxlIHRvIHNldCBpdHMgdXNlci1kZWZpbmVkXG4gICAgLy8gY29udGVudC4gV2UgbXVzdCBhbHNvIHByb3ZpZGUgZmlsZSBjb250ZW50LCBvdGhlcndpc2UgdGhlIHNlcnZpY2Ugd2lsbFxuICAgIC8vIGF0dGVtcHQgdG8gZmV0Y2ggdGhlIGNvbnRlbnQgZnJvbSBkaXNrIGFuZCBmYWlsLlxuICAgIHNjcmlwdEluZm8gPSBwcm9qZWN0U2VydmljZS5nZXRPckNyZWF0ZVNjcmlwdEluZm9Gb3JOb3JtYWxpemVkUGF0aChcbiAgICAgICAgdHMuc2VydmVyLnRvTm9ybWFsaXplZFBhdGgodGNmKSxcbiAgICAgICAgdHJ1ZSwgIC8vIG9wZW5lZEJ5Q2xpZW50XG4gICAgICAgICcnLCAgICAvLyBmaWxlQ29udGVudFxuICAgICAgICAvLyBzY3JpcHQgaW5mbyBhZGRlZCBieSBwbHVnaW5zIHNob3VsZCBiZSBtYXJrZWQgYXMgZXh0ZXJuYWwsIHNlZVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi9iMjE3ZjIyZTc5OGM3ODFmNTVkMTdkYTcyZWQwOTlhOWRlZTVjNjUwL3NyYy9jb21waWxlci9wcm9ncmFtLnRzI0wxODk3LUwxODk5XG4gICAgICAgIHRzLlNjcmlwdEtpbmQuRXh0ZXJuYWwsICAvLyBzY3JpcHRLaW5kXG4gICAgKTtcbiAgICBpZiAoIXNjcmlwdEluZm8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBzY3JpcHQgaW5mbyBmb3IgJHt0Y2Z9YCk7XG4gICAgfVxuICB9XG4gIC8vIEFkZCBTY3JpcHRJbmZvIHRvIHByb2plY3QgaWYgaXQncyBtaXNzaW5nLiBBIFNjcmlwdEluZm8gbmVlZHMgdG8gYmUgcGFydCBvZlxuICAvLyB0aGUgcHJvamVjdCBzbyB0aGF0IGl0IGJlY29tZXMgcGFydCBvZiB0aGUgcHJvZ3JhbS5cbiAgaWYgKCFwcm9qZWN0LmNvbnRhaW5zU2NyaXB0SW5mbyhzY3JpcHRJbmZvKSkge1xuICAgIHByb2plY3QuYWRkUm9vdChzY3JpcHRJbmZvKTtcbiAgfVxuICByZXR1cm4gc2NyaXB0SW5mbztcbn1cblxuZnVuY3Rpb24gaXNUZW1wbGF0ZUNvbnRleHQocHJvZ3JhbTogdHMuUHJvZ3JhbSwgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoIWlzVHlwZVNjcmlwdEZpbGUoZmlsZU5hbWUpKSB7XG4gICAgLy8gSWYgd2UgYXJlbid0IGluIGEgVFMgZmlsZSwgd2UgbXVzdCBiZSBpbiBhbiBIVE1MIGZpbGUsIHdoaWNoIHdlIHRyZWF0IGFzIHRlbXBsYXRlIGNvbnRleHRcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IG5vZGUgPSBmaW5kVGlnaHRlc3ROb2RlQXRQb3NpdGlvbihwcm9ncmFtLCBmaWxlTmFtZSwgcG9zaXRpb24pO1xuICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGFzZ24gPSBnZXRQcm9wZXJ0eUFzc2lnbm1lbnRGcm9tVmFsdWUobm9kZSwgJ3RlbXBsYXRlJyk7XG4gIGlmIChhc2duID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBnZXRDbGFzc0RlY2xGcm9tRGVjb3JhdG9yUHJvcChhc2duKSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNJbkFuZ3VsYXJDb250ZXh0KHByb2dyYW06IHRzLlByb2dyYW0sIGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgaWYgKCFpc1R5cGVTY3JpcHRGaWxlKGZpbGVOYW1lKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3Qgbm9kZSA9IGZpbmRUaWdodGVzdE5vZGVBdFBvc2l0aW9uKHByb2dyYW0sIGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBhc2duID0gZ2V0UHJvcGVydHlBc3NpZ25tZW50RnJvbVZhbHVlKG5vZGUsICd0ZW1wbGF0ZScpID8/XG4gICAgICBnZXRQcm9wZXJ0eUFzc2lnbm1lbnRGcm9tVmFsdWUobm9kZSwgJ3RlbXBsYXRlVXJsJykgPz9cbiAgICAgIGdldFByb3BlcnR5QXNzaWdubWVudEZyb21WYWx1ZShub2RlLnBhcmVudCwgJ3N0eWxlVXJscycpO1xuICByZXR1cm4gYXNnbiAhPT0gbnVsbCAmJiBnZXRDbGFzc0RlY2xGcm9tRGVjb3JhdG9yUHJvcChhc2duKSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZmluZFRpZ2h0ZXN0Tm9kZUF0UG9zaXRpb24ocHJvZ3JhbTogdHMuUHJvZ3JhbSwgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICBjb25zdCBzb3VyY2VGaWxlID0gcHJvZ3JhbS5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKTtcbiAgaWYgKHNvdXJjZUZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gZmluZFRpZ2h0ZXN0Tm9kZShzb3VyY2VGaWxlLCBwb3NpdGlvbik7XG59XG4iXX0=