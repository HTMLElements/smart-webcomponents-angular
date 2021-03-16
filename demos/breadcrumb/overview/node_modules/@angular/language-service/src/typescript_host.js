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
        define("@angular/language-service/src/typescript_host", ["require", "exports", "tslib", "@angular/compiler", "@angular/core", "path", "typescript/lib/tsserverlibrary", "@angular/language-service/src/reflector_host", "@angular/language-service/src/template", "@angular/language-service/src/ts_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeScriptServiceHost = exports.DummyResourceLoader = exports.DummyHtmlParser = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var core_1 = require("@angular/core");
    var path = require("path");
    var tss = require("typescript/lib/tsserverlibrary");
    var reflector_host_1 = require("@angular/language-service/src/reflector_host");
    var template_1 = require("@angular/language-service/src/template");
    var ts_utils_1 = require("@angular/language-service/src/ts_utils");
    /**
     * The language service never needs the normalized versions of the metadata. To avoid parsing
     * the content and resolving references, return an empty file. This also allows normalizing
     * template that are syntatically incorrect which is required to provide completions in
     * syntactically incorrect templates.
     */
    var DummyHtmlParser = /** @class */ (function (_super) {
        tslib_1.__extends(DummyHtmlParser, _super);
        function DummyHtmlParser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DummyHtmlParser.prototype.parse = function () {
            return new compiler_1.ParseTreeResult([], []);
        };
        return DummyHtmlParser;
    }(compiler_1.HtmlParser));
    exports.DummyHtmlParser = DummyHtmlParser;
    /**
     * Avoid loading resources in the language servcie by using a dummy loader.
     */
    var DummyResourceLoader = /** @class */ (function (_super) {
        tslib_1.__extends(DummyResourceLoader, _super);
        function DummyResourceLoader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DummyResourceLoader.prototype.get = function (_url) {
            return Promise.resolve('');
        };
        return DummyResourceLoader;
    }(compiler_1.ResourceLoader));
    exports.DummyResourceLoader = DummyResourceLoader;
    /**
     * An implementation of a `LanguageServiceHost` for a TypeScript project.
     *
     * The `TypeScriptServiceHost` implements the Angular `LanguageServiceHost` using
     * the TypeScript language services.
     *
     * @publicApi
     */
    var TypeScriptServiceHost = /** @class */ (function () {
        function TypeScriptServiceHost(tsLsHost, tsLS) {
            var _this = this;
            this.tsLsHost = tsLsHost;
            this.tsLS = tsLS;
            this.staticSymbolCache = new compiler_1.StaticSymbolCache();
            /**
             * Key of the `fileToComponent` map must be TS internal normalized path (path
             * separator must be `/`), value of the map is the StaticSymbol for the
             * Component class declaration.
             */
            this.fileToComponent = new Map();
            this.collectedErrors = new Map();
            this.fileVersions = new Map();
            this.lastProgram = undefined;
            this.analyzedModules = {
                files: [],
                ngModuleByPipeOrDirective: new Map(),
                ngModules: [],
            };
            this.summaryResolver = new compiler_1.AotSummaryResolver({
                loadSummary: function (_filePath) {
                    return null;
                },
                isSourceFile: function (_sourceFilePath) {
                    return true;
                },
                toSummaryFileName: function (sourceFilePath) {
                    return sourceFilePath;
                },
                fromSummaryFileName: function (filePath) {
                    return filePath;
                },
            }, this.staticSymbolCache);
            this.reflectorHost = new reflector_host_1.ReflectorHost(function () { return _this.program; }, tsLsHost);
            this.staticSymbolResolver = new compiler_1.StaticSymbolResolver(this.reflectorHost, this.staticSymbolCache, this.summaryResolver, function (e, filePath) { return _this.collectError(e, filePath); });
            this.urlResolver = {
                resolve: function (baseUrl, url) {
                    // In practice, `directoryExists` is always defined.
                    // https://github.com/microsoft/TypeScript/blob/0b6c9254a850dd07056259d4eefca7721745af75/src/server/project.ts#L1608-L1614
                    if (tsLsHost.directoryExists(baseUrl)) {
                        return path.resolve(baseUrl, url);
                    }
                    return path.resolve(path.dirname(baseUrl), url);
                }
            };
        }
        Object.defineProperty(TypeScriptServiceHost.prototype, "resolver", {
            /**
             * Return the singleton instance of the MetadataResolver.
             */
            get: function () {
                var _this = this;
                if (this._resolver) {
                    return this._resolver;
                }
                // StaticReflector keeps its own private caches that are not clearable.
                // We have no choice but to create a new instance to invalidate the caches.
                // TODO: Revisit this when language service gets rewritten for Ivy.
                var staticReflector = new compiler_1.StaticReflector(this.summaryResolver, this.staticSymbolResolver, [], // knownMetadataClasses
                [], // knownMetadataFunctions
                function (e, filePath) { return _this.collectError(e, filePath); });
                // Because static reflector above is changed, we need to create a new
                // resolver.
                var moduleResolver = new compiler_1.NgModuleResolver(staticReflector);
                var directiveResolver = new compiler_1.DirectiveResolver(staticReflector);
                var pipeResolver = new compiler_1.PipeResolver(staticReflector);
                var elementSchemaRegistry = new compiler_1.DomElementSchemaRegistry();
                var resourceLoader = new DummyResourceLoader();
                var htmlParser = new DummyHtmlParser();
                // This tracks the CompileConfig in codegen.ts. Currently these options
                // are hard-coded.
                var config = new compiler_1.CompilerConfig({
                    defaultEncapsulation: core_1.ViewEncapsulation.Emulated,
                    useJit: false,
                });
                var directiveNormalizer = new compiler_1.DirectiveNormalizer(resourceLoader, this.urlResolver, htmlParser, config);
                this._resolver = new compiler_1.CompileMetadataResolver(config, htmlParser, moduleResolver, directiveResolver, pipeResolver, new compiler_1.JitSummaryResolver(), elementSchemaRegistry, directiveNormalizer, new core_1.ɵConsole(), this.staticSymbolCache, staticReflector, function (error, type) { return _this.collectError(error, type && type.filePath); });
                return this._resolver;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeScriptServiceHost.prototype, "reflector", {
            /**
             * Return the singleton instance of the StaticReflector hosted in the
             * MetadataResolver.
             */
            get: function () {
                return this.resolver.getReflector();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Return all known external templates.
         */
        TypeScriptServiceHost.prototype.getExternalTemplates = function () {
            return tslib_1.__spread(this.fileToComponent.keys());
        };
        /**
         * Checks whether the program has changed and returns all analyzed modules.
         * If program has changed, invalidate all caches and update fileToComponent
         * and templateReferences.
         * In addition to returning information about NgModules, this method plays the
         * same role as 'synchronizeHostData' in tsserver.
         */
        TypeScriptServiceHost.prototype.getAnalyzedModules = function () {
            var e_1, _a, e_2, _b;
            if (this.upToDate()) {
                return this.analyzedModules;
            }
            // Invalidate caches
            this.fileToComponent.clear();
            this.collectedErrors.clear();
            this.resolver.clearCache();
            var analyzeHost = {
                isSourceFile: function (_filePath) {
                    return true;
                }
            };
            var programFiles = this.program.getSourceFiles().map(function (sf) { return sf.fileName; });
            try {
                this.analyzedModules =
                    compiler_1.analyzeNgModules(programFiles, analyzeHost, this.staticSymbolResolver, this.resolver);
            }
            catch (e) {
                // Analyzing modules may throw; in that case, reuse the old modules.
                this.error("Analyzing NgModules failed. " + e);
                return this.analyzedModules;
            }
            try {
                // update template references and fileToComponent
                for (var _c = tslib_1.__values(this.analyzedModules.ngModules), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var ngModule = _d.value;
                    try {
                        for (var _e = (e_2 = void 0, tslib_1.__values(ngModule.declaredDirectives)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var directive = _f.value;
                            var metadata = this.resolver.getNonNormalizedDirectiveMetadata(directive.reference).metadata;
                            if (metadata.isComponent && metadata.template && metadata.template.templateUrl) {
                                var templateName = this.urlResolver.resolve(this.reflector.componentModuleUrl(directive.reference), metadata.template.templateUrl);
                                this.fileToComponent.set(tss.server.toNormalizedPath(templateName), directive.reference);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this.analyzedModules;
        };
        /**
         * Checks whether the program has changed, and invalidate static symbols in
         * the source files that have changed.
         * Returns true if modules are up-to-date, false otherwise.
         * This should only be called by getAnalyzedModules().
         */
        TypeScriptServiceHost.prototype.upToDate = function () {
            var e_3, _a, e_4, _b, e_5, _c;
            var _d = this, lastProgram = _d.lastProgram, program = _d.program;
            if (lastProgram === program) {
                return true;
            }
            this.lastProgram = program;
            // Even though the program has changed, it could be the case that none of
            // the source files have changed. If all source files remain the same, then
            // program is still up-to-date, and we should not invalidate caches.
            var filesAdded = 0;
            var filesChangedOrRemoved = [];
            // Check if any source files have been added / changed since last computation.
            var seen = new Set();
            var ANGULAR_CORE = '@angular/core';
            var corePath = this.reflectorHost.moduleNameToFileName(ANGULAR_CORE);
            try {
                for (var _e = tslib_1.__values(program.getSourceFiles()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var fileName = _f.value.fileName;
                    // If `@angular/core` is edited, the language service would have to be
                    // restarted, so ignore changes to `@angular/core`.
                    // When the StaticReflector is initialized at startup, it loads core
                    // symbols from @angular/core by calling initializeConversionMap(). This
                    // is only done once. If the file is invalidated, some of the core symbols
                    // will be lost permanently.
                    if (fileName === corePath) {
                        continue;
                    }
                    seen.add(fileName);
                    var version = this.tsLsHost.getScriptVersion(fileName);
                    var lastVersion = this.fileVersions.get(fileName);
                    if (lastVersion === undefined) {
                        filesAdded++;
                        this.fileVersions.set(fileName, version);
                    }
                    else if (version !== lastVersion) {
                        filesChangedOrRemoved.push(fileName); // changed
                        this.fileVersions.set(fileName, version);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                // Check if any source files have been removed since last computation.
                for (var _g = tslib_1.__values(this.fileVersions), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var _j = tslib_1.__read(_h.value, 1), fileName = _j[0];
                    if (!seen.has(fileName)) {
                        filesChangedOrRemoved.push(fileName); // removed
                        // Because Maps are iterated in insertion order, it is safe to delete
                        // entries from the same map while iterating.
                        // See https://stackoverflow.com/questions/35940216 and
                        // https://www.ecma-international.org/ecma-262/10.0/index.html#sec-map.prototype.foreach
                        this.fileVersions.delete(fileName);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                }
                finally { if (e_4) throw e_4.error; }
            }
            try {
                for (var filesChangedOrRemoved_1 = tslib_1.__values(filesChangedOrRemoved), filesChangedOrRemoved_1_1 = filesChangedOrRemoved_1.next(); !filesChangedOrRemoved_1_1.done; filesChangedOrRemoved_1_1 = filesChangedOrRemoved_1.next()) {
                    var fileName = filesChangedOrRemoved_1_1.value;
                    var symbols = this.staticSymbolResolver.invalidateFile(fileName);
                    this.reflector.invalidateSymbols(symbols);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (filesChangedOrRemoved_1_1 && !filesChangedOrRemoved_1_1.done && (_c = filesChangedOrRemoved_1.return)) _c.call(filesChangedOrRemoved_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            // Program is up-to-date iff no files are added, changed, or removed.
            return filesAdded === 0 && filesChangedOrRemoved.length === 0;
        };
        /**
         * Find all templates in the specified `file`.
         * @param fileName TS or HTML file
         */
        TypeScriptServiceHost.prototype.getTemplates = function (fileName) {
            var _this = this;
            var results = [];
            if (fileName.endsWith('.ts')) {
                // Find every template string in the file
                var visit_1 = function (child) {
                    var template = _this.getInternalTemplate(child);
                    if (template) {
                        results.push(template);
                    }
                    else {
                        tss.forEachChild(child, visit_1);
                    }
                };
                var sourceFile = this.getSourceFile(fileName);
                if (sourceFile) {
                    tss.forEachChild(sourceFile, visit_1);
                }
            }
            else {
                var template = this.getExternalTemplate(fileName);
                if (template) {
                    results.push(template);
                }
            }
            return results;
        };
        /**
         * Return metadata about all class declarations in the file that are Angular
         * directives. Potential matches are `@NgModule`, `@Component`, `@Directive`,
         * `@Pipes`, etc. class declarations.
         *
         * @param fileName TS file
         */
        TypeScriptServiceHost.prototype.getDeclarations = function (fileName) {
            var _this = this;
            if (!fileName.endsWith('.ts')) {
                return [];
            }
            var sourceFile = this.getSourceFile(fileName);
            if (!sourceFile) {
                return [];
            }
            var results = [];
            var visit = function (child) {
                var candidate = ts_utils_1.getDirectiveClassLike(child);
                if (candidate) {
                    var classId = candidate.classId;
                    var declarationSpan = spanOf(classId);
                    var className = classId.getText();
                    var classSymbol = _this.reflector.getStaticSymbol(sourceFile.fileName, className);
                    // Ask the resolver to check if candidate is actually Angular directive
                    if (!_this.resolver.isDirective(classSymbol)) {
                        return;
                    }
                    var data = _this.resolver.getNonNormalizedDirectiveMetadata(classSymbol);
                    if (!data) {
                        return;
                    }
                    results.push({
                        type: classSymbol,
                        declarationSpan: declarationSpan,
                        metadata: data.metadata,
                        errors: _this.getCollectedErrors(declarationSpan, sourceFile),
                    });
                }
                else {
                    child.forEachChild(visit);
                }
            };
            tss.forEachChild(sourceFile, visit);
            return results;
        };
        TypeScriptServiceHost.prototype.getSourceFile = function (fileName) {
            if (!fileName.endsWith('.ts')) {
                throw new Error("Non-TS source file requested: " + fileName);
            }
            return this.program.getSourceFile(fileName);
        };
        Object.defineProperty(TypeScriptServiceHost.prototype, "program", {
            get: function () {
                var program = this.tsLS.getProgram();
                if (!program) {
                    // Program is very very unlikely to be undefined.
                    throw new Error('No program in language service!');
                }
                return program;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Return the TemplateSource if `node` is a template node.
         *
         * For example,
         *
         * @Component({
         *   template: '<div></div>' <-- template node
         * })
         * class AppComponent {}
         *           ^---- class declaration node
         *
         * @param node Potential template node
         */
        TypeScriptServiceHost.prototype.getInternalTemplate = function (node) {
            if (!tss.isStringLiteralLike(node)) {
                return;
            }
            var tmplAsgn = ts_utils_1.getPropertyAssignmentFromValue(node, 'template');
            if (!tmplAsgn) {
                return;
            }
            var classDecl = ts_utils_1.getClassDeclFromDecoratorProp(tmplAsgn);
            if (!classDecl || !classDecl.name) { // Does not handle anonymous class
                return;
            }
            var fileName = node.getSourceFile().fileName;
            var classSymbol = this.reflector.getStaticSymbol(fileName, classDecl.name.text);
            return new template_1.InlineTemplate(node, classDecl, classSymbol, this);
        };
        /**
         * Return the external template for `fileName`.
         * @param fileName HTML file
         */
        TypeScriptServiceHost.prototype.getExternalTemplate = function (fileName) {
            // First get the text for the template
            var snapshot = this.tsLsHost.getScriptSnapshot(fileName);
            if (!snapshot) {
                return;
            }
            var source = snapshot.getText(0, snapshot.getLength());
            // Next find the component class symbol
            var classSymbol = this.fileToComponent.get(tss.server.toNormalizedPath(fileName));
            if (!classSymbol) {
                return;
            }
            // Then use the class symbol to find the actual ts.ClassDeclaration node
            var sourceFile = this.getSourceFile(classSymbol.filePath);
            if (!sourceFile) {
                return;
            }
            // TODO: This only considers top-level class declarations in a source file.
            // This would not find a class declaration in a namespace, for example.
            var classDecl = sourceFile.forEachChild(function (child) {
                if (tss.isClassDeclaration(child) && child.name && child.name.text === classSymbol.name) {
                    return child;
                }
            });
            if (!classDecl) {
                return;
            }
            return new template_1.ExternalTemplate(source, fileName, classDecl, classSymbol, this);
        };
        TypeScriptServiceHost.prototype.collectError = function (error, filePath) {
            if (filePath) {
                var errors = this.collectedErrors.get(filePath);
                if (!errors) {
                    errors = [];
                    this.collectedErrors.set(filePath, errors);
                }
                errors.push(error);
            }
        };
        TypeScriptServiceHost.prototype.getCollectedErrors = function (defaultSpan, sourceFile) {
            var errors = this.collectedErrors.get(sourceFile.fileName);
            if (!errors) {
                return [];
            }
            // TODO: Add better typings for the errors
            return errors.map(function (e) {
                var line = e.line || (e.position && e.position.line);
                var column = e.column || (e.position && e.position.column);
                var span = spanAt(sourceFile, line, column) || defaultSpan;
                if (compiler_1.isFormattedError(e)) {
                    return errorToDiagnosticWithChain(e, span);
                }
                return { message: e.message, span: span };
            });
        };
        /**
         * Return the parsed template for the template at the specified `position`.
         * @param fileName TS or HTML file
         * @param position Position of the template in the TS file, otherwise ignored.
         */
        TypeScriptServiceHost.prototype.getTemplateAstAtPosition = function (fileName, position) {
            var template;
            if (fileName.endsWith('.ts')) {
                var sourceFile = this.getSourceFile(fileName);
                if (!sourceFile) {
                    return;
                }
                // Find the node that most closely matches the position
                var node = ts_utils_1.findTightestNode(sourceFile, position);
                if (!node) {
                    return;
                }
                template = this.getInternalTemplate(node);
            }
            else {
                template = this.getExternalTemplate(fileName);
            }
            if (!template) {
                return;
            }
            return this.getTemplateAst(template);
        };
        /**
         * Find the NgModule which the directive associated with the `classSymbol`
         * belongs to, then return its schema and transitive directives and pipes.
         * @param classSymbol Angular Symbol that defines a directive
         */
        TypeScriptServiceHost.prototype.getModuleMetadataForDirective = function (classSymbol) {
            var e_6, _a, e_7, _b, _c;
            var result = {
                directives: [],
                pipes: [],
                schemas: [],
            };
            // First find which NgModule the directive belongs to.
            var ngModule = this.analyzedModules.ngModuleByPipeOrDirective.get(classSymbol) ||
                findSuitableDefaultModule(this.analyzedModules);
            if (!ngModule) {
                return result;
            }
            // Then gather all transitive directives and pipes.
            var _d = ngModule.transitiveModule, directives = _d.directives, pipes = _d.pipes;
            try {
                for (var directives_1 = tslib_1.__values(directives), directives_1_1 = directives_1.next(); !directives_1_1.done; directives_1_1 = directives_1.next()) {
                    var directive = directives_1_1.value;
                    var data = this.resolver.getNonNormalizedDirectiveMetadata(directive.reference);
                    if (data) {
                        result.directives.push(data.metadata.toSummary());
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (directives_1_1 && !directives_1_1.done && (_a = directives_1.return)) _a.call(directives_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
            try {
                for (var pipes_1 = tslib_1.__values(pipes), pipes_1_1 = pipes_1.next(); !pipes_1_1.done; pipes_1_1 = pipes_1.next()) {
                    var pipe = pipes_1_1.value;
                    var metadata = this.resolver.getOrLoadPipeMetadata(pipe.reference);
                    result.pipes.push(metadata.toSummary());
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (pipes_1_1 && !pipes_1_1.done && (_b = pipes_1.return)) _b.call(pipes_1);
                }
                finally { if (e_7) throw e_7.error; }
            }
            (_c = result.schemas).push.apply(_c, tslib_1.__spread(ngModule.schemas));
            return result;
        };
        /**
         * Parse the `template` and return its AST, if any.
         * @param template template to be parsed
         */
        TypeScriptServiceHost.prototype.getTemplateAst = function (template) {
            var classSymbol = template.type, fileName = template.fileName;
            var data = this.resolver.getNonNormalizedDirectiveMetadata(classSymbol);
            if (!data) {
                return;
            }
            var htmlParser = new compiler_1.HtmlParser();
            var expressionParser = new compiler_1.Parser(new compiler_1.Lexer());
            var parser = new compiler_1.TemplateParser(new compiler_1.CompilerConfig(), this.reflector, expressionParser, new compiler_1.DomElementSchemaRegistry(), htmlParser, null, // console
            [] // tranforms
            );
            var htmlResult = htmlParser.parse(template.source, fileName, {
                tokenizeExpansionForms: true,
                preserveLineEndings: true,
            });
            var _a = this.getModuleMetadataForDirective(classSymbol), directives = _a.directives, pipes = _a.pipes, schemas = _a.schemas;
            var parseResult = parser.tryParseHtml(htmlResult, data.metadata, directives, pipes, schemas);
            if (!parseResult.templateAst) {
                return;
            }
            return {
                htmlAst: htmlResult.rootNodes,
                templateAst: parseResult.templateAst,
                directive: data.metadata,
                directives: directives,
                pipes: pipes,
                parseErrors: parseResult.errors,
                expressionParser: expressionParser,
                template: template,
            };
        };
        /**
         * Log the specified `msg` to file at INFO level. If logging is not enabled
         * this method is a no-op.
         * @param msg Log message
         */
        TypeScriptServiceHost.prototype.log = function (msg) {
            if (this.tsLsHost.log) {
                this.tsLsHost.log(msg);
            }
        };
        /**
         * Log the specified `msg` to file at ERROR level. If logging is not enabled
         * this method is a no-op.
         * @param msg error message
         */
        TypeScriptServiceHost.prototype.error = function (msg) {
            if (this.tsLsHost.error) {
                this.tsLsHost.error(msg);
            }
        };
        /**
         * Log debugging info to file at INFO level, only if verbose setting is turned
         * on. Otherwise, this method is a no-op.
         * @param msg debugging message
         */
        TypeScriptServiceHost.prototype.debug = function (msg) {
            var project = this.tsLsHost;
            if (!project.projectService) {
                // tsLsHost is not a Project
                return;
            }
            var logger = project.projectService.logger;
            if (logger.hasLevel(tss.server.LogLevel.verbose)) {
                logger.info(msg);
            }
        };
        return TypeScriptServiceHost;
    }());
    exports.TypeScriptServiceHost = TypeScriptServiceHost;
    function findSuitableDefaultModule(modules) {
        var e_8, _a;
        var result = undefined;
        var resultSize = 0;
        try {
            for (var _b = tslib_1.__values(modules.ngModules), _c = _b.next(); !_c.done; _c = _b.next()) {
                var module_1 = _c.value;
                var moduleSize = module_1.transitiveModule.directives.length;
                if (moduleSize > resultSize) {
                    result = module_1;
                    resultSize = moduleSize;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    }
    function spanOf(node) {
        return { start: node.getStart(), end: node.getEnd() };
    }
    function spanAt(sourceFile, line, column) {
        if (line != null && column != null) {
            var position_1 = tss.getPositionOfLineAndCharacter(sourceFile, line, column);
            var findChild = function findChild(node) {
                if (node.kind > tss.SyntaxKind.LastToken && node.pos <= position_1 && node.end > position_1) {
                    var betterNode = tss.forEachChild(node, findChild);
                    return betterNode || node;
                }
            };
            var node = tss.forEachChild(sourceFile, findChild);
            if (node) {
                return { start: node.getStart(), end: node.getEnd() };
            }
        }
    }
    function convertChain(chain) {
        return { message: chain.message, next: chain.next ? chain.next.map(convertChain) : undefined };
    }
    function errorToDiagnosticWithChain(error, span) {
        return { message: error.chain ? convertChain(error.chain) : error.message, span: span };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF9ob3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvdHlwZXNjcmlwdF9ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBeWhCO0lBQ3poQixzQ0FBcUY7SUFDckYsMkJBQTZCO0lBQzdCLG9EQUFzRDtJQUV0RCwrRUFBK0M7SUFDL0MsbUVBQTREO0lBQzVELG1FQUFrSTtJQUdsSTs7Ozs7T0FLRztJQUNIO1FBQXFDLDJDQUFVO1FBQS9DOztRQUlBLENBQUM7UUFIQywrQkFBSyxHQUFMO1lBQ0UsT0FBTyxJQUFJLDBCQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDSCxzQkFBQztJQUFELENBQUMsQUFKRCxDQUFxQyxxQkFBVSxHQUk5QztJQUpZLDBDQUFlO0lBTTVCOztPQUVHO0lBQ0g7UUFBeUMsK0NBQWM7UUFBdkQ7O1FBSUEsQ0FBQztRQUhDLGlDQUFHLEdBQUgsVUFBSSxJQUFZO1lBQ2QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDSCwwQkFBQztJQUFELENBQUMsQUFKRCxDQUF5Qyx5QkFBYyxHQUl0RDtJQUpZLGtEQUFtQjtJQU1oQzs7Ozs7OztPQU9HO0lBQ0g7UUF1QkUsK0JBQXFCLFFBQWlDLEVBQVcsSUFBeUI7WUFBMUYsaUJBK0JDO1lBL0JvQixhQUFRLEdBQVIsUUFBUSxDQUF5QjtZQUFXLFNBQUksR0FBSixJQUFJLENBQXFCO1lBbEJ6RSxzQkFBaUIsR0FBRyxJQUFJLDRCQUFpQixFQUFFLENBQUM7WUFDN0Q7Ozs7ZUFJRztZQUNjLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQTBDLENBQUM7WUFDcEUsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztZQUMz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SyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFDLENBQUM7SUFDbEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2FuYWx5emVOZ01vZHVsZXMsIEFvdFN1bW1hcnlSZXNvbHZlciwgQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnksIENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgQ29tcGlsZVBpcGVTdW1tYXJ5LCBDb21waWxlckNvbmZpZywgRGlyZWN0aXZlTm9ybWFsaXplciwgRGlyZWN0aXZlUmVzb2x2ZXIsIERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgRm9ybWF0dGVkRXJyb3IsIEZvcm1hdHRlZE1lc3NhZ2VDaGFpbiwgSHRtbFBhcnNlciwgaXNGb3JtYXR0ZWRFcnJvciwgSml0U3VtbWFyeVJlc29sdmVyLCBMZXhlciwgTmdBbmFseXplZE1vZHVsZXMsIE5nTW9kdWxlUmVzb2x2ZXIsIFBhcnNlciwgUGFyc2VUcmVlUmVzdWx0LCBQaXBlUmVzb2x2ZXIsIFJlc291cmNlTG9hZGVyLCBTdGF0aWNSZWZsZWN0b3IsIFN0YXRpY1N5bWJvbCwgU3RhdGljU3ltYm9sQ2FjaGUsIFN0YXRpY1N5bWJvbFJlc29sdmVyLCBUZW1wbGF0ZVBhcnNlciwgVXJsUmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7U2NoZW1hTWV0YWRhdGEsIFZpZXdFbmNhcHN1bGF0aW9uLCDJtUNvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgdHNzIGZyb20gJ3R5cGVzY3JpcHQvbGliL3Rzc2VydmVybGlicmFyeSc7XG5cbmltcG9ydCB7UmVmbGVjdG9ySG9zdH0gZnJvbSAnLi9yZWZsZWN0b3JfaG9zdCc7XG5pbXBvcnQge0V4dGVybmFsVGVtcGxhdGUsIElubGluZVRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB7ZmluZFRpZ2h0ZXN0Tm9kZSwgZ2V0Q2xhc3NEZWNsRnJvbURlY29yYXRvclByb3AsIGdldERpcmVjdGl2ZUNsYXNzTGlrZSwgZ2V0UHJvcGVydHlBc3NpZ25tZW50RnJvbVZhbHVlfSBmcm9tICcuL3RzX3V0aWxzJztcbmltcG9ydCB7QXN0UmVzdWx0LCBEZWNsYXJhdGlvbiwgRGVjbGFyYXRpb25FcnJvciwgRGlhZ25vc3RpY01lc3NhZ2VDaGFpbiwgTGFuZ3VhZ2VTZXJ2aWNlSG9zdCwgU3BhbiwgVGVtcGxhdGVTb3VyY2V9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFRoZSBsYW5ndWFnZSBzZXJ2aWNlIG5ldmVyIG5lZWRzIHRoZSBub3JtYWxpemVkIHZlcnNpb25zIG9mIHRoZSBtZXRhZGF0YS4gVG8gYXZvaWQgcGFyc2luZ1xuICogdGhlIGNvbnRlbnQgYW5kIHJlc29sdmluZyByZWZlcmVuY2VzLCByZXR1cm4gYW4gZW1wdHkgZmlsZS4gVGhpcyBhbHNvIGFsbG93cyBub3JtYWxpemluZ1xuICogdGVtcGxhdGUgdGhhdCBhcmUgc3ludGF0aWNhbGx5IGluY29ycmVjdCB3aGljaCBpcyByZXF1aXJlZCB0byBwcm92aWRlIGNvbXBsZXRpb25zIGluXG4gKiBzeW50YWN0aWNhbGx5IGluY29ycmVjdCB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBEdW1teUh0bWxQYXJzZXIgZXh0ZW5kcyBIdG1sUGFyc2VyIHtcbiAgcGFyc2UoKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChbXSwgW10pO1xuICB9XG59XG5cbi8qKlxuICogQXZvaWQgbG9hZGluZyByZXNvdXJjZXMgaW4gdGhlIGxhbmd1YWdlIHNlcnZjaWUgYnkgdXNpbmcgYSBkdW1teSBsb2FkZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBEdW1teVJlc291cmNlTG9hZGVyIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xuICBnZXQoX3VybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgYExhbmd1YWdlU2VydmljZUhvc3RgIGZvciBhIFR5cGVTY3JpcHQgcHJvamVjdC5cbiAqXG4gKiBUaGUgYFR5cGVTY3JpcHRTZXJ2aWNlSG9zdGAgaW1wbGVtZW50cyB0aGUgQW5ndWxhciBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAgdXNpbmdcbiAqIHRoZSBUeXBlU2NyaXB0IGxhbmd1YWdlIHNlcnZpY2VzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVTY3JpcHRTZXJ2aWNlSG9zdCBpbXBsZW1lbnRzIExhbmd1YWdlU2VydmljZUhvc3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHN1bW1hcnlSZXNvbHZlcjogQW90U3VtbWFyeVJlc29sdmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IHJlZmxlY3Rvckhvc3Q6IFJlZmxlY3Rvckhvc3Q7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhdGljU3ltYm9sUmVzb2x2ZXI6IFN0YXRpY1N5bWJvbFJlc29sdmVyO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhdGljU3ltYm9sQ2FjaGUgPSBuZXcgU3RhdGljU3ltYm9sQ2FjaGUoKTtcbiAgLyoqXG4gICAqIEtleSBvZiB0aGUgYGZpbGVUb0NvbXBvbmVudGAgbWFwIG11c3QgYmUgVFMgaW50ZXJuYWwgbm9ybWFsaXplZCBwYXRoIChwYXRoXG4gICAqIHNlcGFyYXRvciBtdXN0IGJlIGAvYCksIHZhbHVlIG9mIHRoZSBtYXAgaXMgdGhlIFN0YXRpY1N5bWJvbCBmb3IgdGhlXG4gICAqIENvbXBvbmVudCBjbGFzcyBkZWNsYXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgZmlsZVRvQ29tcG9uZW50ID0gbmV3IE1hcDx0cy5zZXJ2ZXIuTm9ybWFsaXplZFBhdGgsIFN0YXRpY1N5bWJvbD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjb2xsZWN0ZWRFcnJvcnMgPSBuZXcgTWFwPHN0cmluZywgYW55W10+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZmlsZVZlcnNpb25zID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmxSZXNvbHZlcjogVXJsUmVzb2x2ZXI7XG5cbiAgcHJpdmF0ZSBsYXN0UHJvZ3JhbTogdHNzLlByb2dyYW18dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGFuYWx5emVkTW9kdWxlczogTmdBbmFseXplZE1vZHVsZXMgPSB7XG4gICAgZmlsZXM6IFtdLFxuICAgIG5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmU6IG5ldyBNYXAoKSxcbiAgICBuZ01vZHVsZXM6IFtdLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHRzTHNIb3N0OiB0c3MuTGFuZ3VhZ2VTZXJ2aWNlSG9zdCwgcmVhZG9ubHkgdHNMUzogdHNzLkxhbmd1YWdlU2VydmljZSkge1xuICAgIHRoaXMuc3VtbWFyeVJlc29sdmVyID0gbmV3IEFvdFN1bW1hcnlSZXNvbHZlcihcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRTdW1tYXJ5KF9maWxlUGF0aDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU291cmNlRmlsZShfc291cmNlRmlsZVBhdGg6IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b1N1bW1hcnlGaWxlTmFtZShzb3VyY2VGaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlRmlsZVBhdGg7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmcm9tU3VtbWFyeUZpbGVOYW1lKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuc3RhdGljU3ltYm9sQ2FjaGUpO1xuICAgIHRoaXMucmVmbGVjdG9ySG9zdCA9IG5ldyBSZWZsZWN0b3JIb3N0KCgpID0+IHRoaXMucHJvZ3JhbSwgdHNMc0hvc3QpO1xuICAgIHRoaXMuc3RhdGljU3ltYm9sUmVzb2x2ZXIgPSBuZXcgU3RhdGljU3ltYm9sUmVzb2x2ZXIoXG4gICAgICAgIHRoaXMucmVmbGVjdG9ySG9zdCwgdGhpcy5zdGF0aWNTeW1ib2xDYWNoZSwgdGhpcy5zdW1tYXJ5UmVzb2x2ZXIsXG4gICAgICAgIChlLCBmaWxlUGF0aCkgPT4gdGhpcy5jb2xsZWN0RXJyb3IoZSwgZmlsZVBhdGgpKTtcbiAgICB0aGlzLnVybFJlc29sdmVyID0ge1xuICAgICAgcmVzb2x2ZTogKGJhc2VVcmw6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gSW4gcHJhY3RpY2UsIGBkaXJlY3RvcnlFeGlzdHNgIGlzIGFsd2F5cyBkZWZpbmVkLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi8wYjZjOTI1NGE4NTBkZDA3MDU2MjU5ZDRlZWZjYTc3MjE3NDVhZjc1L3NyYy9zZXJ2ZXIvcHJvamVjdC50cyNMMTYwOC1MMTYxNFxuICAgICAgICBpZiAodHNMc0hvc3QuZGlyZWN0b3J5RXhpc3RzIShiYXNlVXJsKSkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnJlc29sdmUoYmFzZVVybCwgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHBhdGguZGlybmFtZShiYXNlVXJsKSwgdXJsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gVGhlIHJlc29sdmVyIGlzIGluc3RhbnRpYXRlZCBsYXppbHkgYW5kIHNob3VsZCBub3QgYmUgYWNjZXNzZWQgZGlyZWN0bHkuXG4gIC8vIEluc3RlYWQsIGNhbGwgdGhlIHJlc29sdmVyIGdldHRlci4gVGhlIGluc3RhbnRpYXRpb24gb2YgdGhlIHJlc29sdmVyIGFsc29cbiAgLy8gcmVxdWlyZXMgaW5zdGFudGlhdGlvbiBvZiB0aGUgU3RhdGljUmVmbGVjdG9yLCBhbmQgdGhlIGxhdHRlciByZXF1aXJlc1xuICAvLyByZXNvbHV0aW9uIG9mIGNvcmUgQW5ndWxhciBzeW1ib2xzLiBNb2R1bGUgcmVzb2x1dGlvbiBzaG91bGQgbm90IGJlIGRvbmVcbiAgLy8gZHVyaW5nIGluc3RhbnRpYXRpb24gdG8gYXZvaWQgY3ljbGljIGRlcGVuZGVuY3kgYmV0d2VlbiB0aGUgcGx1Z2luIGFuZCB0aGVcbiAgLy8gY29udGFpbmluZyBQcm9qZWN0LCBzbyB0aGUgU2luZ2xldG9uIHBhdHRlcm4gaXMgdXNlZCBoZXJlLlxuICBwcml2YXRlIF9yZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXJ8dW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgTWV0YWRhdGFSZXNvbHZlci5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHJlc29sdmVyKCk6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyIHtcbiAgICBpZiAodGhpcy5fcmVzb2x2ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlcjtcbiAgICB9XG4gICAgLy8gU3RhdGljUmVmbGVjdG9yIGtlZXBzIGl0cyBvd24gcHJpdmF0ZSBjYWNoZXMgdGhhdCBhcmUgbm90IGNsZWFyYWJsZS5cbiAgICAvLyBXZSBoYXZlIG5vIGNob2ljZSBidXQgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIHRvIGludmFsaWRhdGUgdGhlIGNhY2hlcy5cbiAgICAvLyBUT0RPOiBSZXZpc2l0IHRoaXMgd2hlbiBsYW5ndWFnZSBzZXJ2aWNlIGdldHMgcmV3cml0dGVuIGZvciBJdnkuXG4gICAgY29uc3Qgc3RhdGljUmVmbGVjdG9yID0gbmV3IFN0YXRpY1JlZmxlY3RvcihcbiAgICAgICAgdGhpcy5zdW1tYXJ5UmVzb2x2ZXIsIHRoaXMuc3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgICAgIFtdLCAgLy8ga25vd25NZXRhZGF0YUNsYXNzZXNcbiAgICAgICAgW10sICAvLyBrbm93bk1ldGFkYXRhRnVuY3Rpb25zXG4gICAgICAgIChlLCBmaWxlUGF0aCkgPT4gdGhpcy5jb2xsZWN0RXJyb3IoZSwgZmlsZVBhdGgpKTtcbiAgICAvLyBCZWNhdXNlIHN0YXRpYyByZWZsZWN0b3IgYWJvdmUgaXMgY2hhbmdlZCwgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXdcbiAgICAvLyByZXNvbHZlci5cbiAgICBjb25zdCBtb2R1bGVSZXNvbHZlciA9IG5ldyBOZ01vZHVsZVJlc29sdmVyKHN0YXRpY1JlZmxlY3Rvcik7XG4gICAgY29uc3QgZGlyZWN0aXZlUmVzb2x2ZXIgPSBuZXcgRGlyZWN0aXZlUmVzb2x2ZXIoc3RhdGljUmVmbGVjdG9yKTtcbiAgICBjb25zdCBwaXBlUmVzb2x2ZXIgPSBuZXcgUGlwZVJlc29sdmVyKHN0YXRpY1JlZmxlY3Rvcik7XG4gICAgY29uc3QgZWxlbWVudFNjaGVtYVJlZ2lzdHJ5ID0gbmV3IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSgpO1xuICAgIGNvbnN0IHJlc291cmNlTG9hZGVyID0gbmV3IER1bW15UmVzb3VyY2VMb2FkZXIoKTtcbiAgICBjb25zdCBodG1sUGFyc2VyID0gbmV3IER1bW15SHRtbFBhcnNlcigpO1xuICAgIC8vIFRoaXMgdHJhY2tzIHRoZSBDb21waWxlQ29uZmlnIGluIGNvZGVnZW4udHMuIEN1cnJlbnRseSB0aGVzZSBvcHRpb25zXG4gICAgLy8gYXJlIGhhcmQtY29kZWQuXG4gICAgY29uc3QgY29uZmlnID0gbmV3IENvbXBpbGVyQ29uZmlnKHtcbiAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbiAgICAgIHVzZUppdDogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgZGlyZWN0aXZlTm9ybWFsaXplciA9XG4gICAgICAgIG5ldyBEaXJlY3RpdmVOb3JtYWxpemVyKHJlc291cmNlTG9hZGVyLCB0aGlzLnVybFJlc29sdmVyLCBodG1sUGFyc2VyLCBjb25maWcpO1xuICAgIHRoaXMuX3Jlc29sdmVyID0gbmV3IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyKFxuICAgICAgICBjb25maWcsIGh0bWxQYXJzZXIsIG1vZHVsZVJlc29sdmVyLCBkaXJlY3RpdmVSZXNvbHZlciwgcGlwZVJlc29sdmVyLFxuICAgICAgICBuZXcgSml0U3VtbWFyeVJlc29sdmVyKCksIGVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgZGlyZWN0aXZlTm9ybWFsaXplciwgbmV3IENvbnNvbGUoKSxcbiAgICAgICAgdGhpcy5zdGF0aWNTeW1ib2xDYWNoZSwgc3RhdGljUmVmbGVjdG9yLFxuICAgICAgICAoZXJyb3IsIHR5cGUpID0+IHRoaXMuY29sbGVjdEVycm9yKGVycm9yLCB0eXBlICYmIHR5cGUuZmlsZVBhdGgpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFN0YXRpY1JlZmxlY3RvciBob3N0ZWQgaW4gdGhlXG4gICAqIE1ldGFkYXRhUmVzb2x2ZXIuXG4gICAqL1xuICBwcml2YXRlIGdldCByZWZsZWN0b3IoKTogU3RhdGljUmVmbGVjdG9yIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlci5nZXRSZWZsZWN0b3IoKSBhcyBTdGF0aWNSZWZsZWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFsbCBrbm93biBleHRlcm5hbCB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXRFeHRlcm5hbFRlbXBsYXRlcygpOiB0cy5zZXJ2ZXIuTm9ybWFsaXplZFBhdGhbXSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmZpbGVUb0NvbXBvbmVudC5rZXlzKCldO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBwcm9ncmFtIGhhcyBjaGFuZ2VkIGFuZCByZXR1cm5zIGFsbCBhbmFseXplZCBtb2R1bGVzLlxuICAgKiBJZiBwcm9ncmFtIGhhcyBjaGFuZ2VkLCBpbnZhbGlkYXRlIGFsbCBjYWNoZXMgYW5kIHVwZGF0ZSBmaWxlVG9Db21wb25lbnRcbiAgICogYW5kIHRlbXBsYXRlUmVmZXJlbmNlcy5cbiAgICogSW4gYWRkaXRpb24gdG8gcmV0dXJuaW5nIGluZm9ybWF0aW9uIGFib3V0IE5nTW9kdWxlcywgdGhpcyBtZXRob2QgcGxheXMgdGhlXG4gICAqIHNhbWUgcm9sZSBhcyAnc3luY2hyb25pemVIb3N0RGF0YScgaW4gdHNzZXJ2ZXIuXG4gICAqL1xuICBnZXRBbmFseXplZE1vZHVsZXMoKTogTmdBbmFseXplZE1vZHVsZXMge1xuICAgIGlmICh0aGlzLnVwVG9EYXRlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuYWx5emVkTW9kdWxlcztcbiAgICB9XG5cbiAgICAvLyBJbnZhbGlkYXRlIGNhY2hlc1xuICAgIHRoaXMuZmlsZVRvQ29tcG9uZW50LmNsZWFyKCk7XG4gICAgdGhpcy5jb2xsZWN0ZWRFcnJvcnMuY2xlYXIoKTtcbiAgICB0aGlzLnJlc29sdmVyLmNsZWFyQ2FjaGUoKTtcblxuICAgIGNvbnN0IGFuYWx5emVIb3N0ID0ge1xuICAgICAgaXNTb3VyY2VGaWxlKF9maWxlUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcHJvZ3JhbUZpbGVzID0gdGhpcy5wcm9ncmFtLmdldFNvdXJjZUZpbGVzKCkubWFwKHNmID0+IHNmLmZpbGVOYW1lKTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmFuYWx5emVkTW9kdWxlcyA9XG4gICAgICAgICAgYW5hbHl6ZU5nTW9kdWxlcyhwcm9ncmFtRmlsZXMsIGFuYWx5emVIb3N0LCB0aGlzLnN0YXRpY1N5bWJvbFJlc29sdmVyLCB0aGlzLnJlc29sdmVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBBbmFseXppbmcgbW9kdWxlcyBtYXkgdGhyb3c7IGluIHRoYXQgY2FzZSwgcmV1c2UgdGhlIG9sZCBtb2R1bGVzLlxuICAgICAgdGhpcy5lcnJvcihgQW5hbHl6aW5nIE5nTW9kdWxlcyBmYWlsZWQuICR7ZX1gKTtcbiAgICAgIHJldHVybiB0aGlzLmFuYWx5emVkTW9kdWxlcztcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGVtcGxhdGUgcmVmZXJlbmNlcyBhbmQgZmlsZVRvQ29tcG9uZW50XG4gICAgZm9yIChjb25zdCBuZ01vZHVsZSBvZiB0aGlzLmFuYWx5emVkTW9kdWxlcy5uZ01vZHVsZXMpIHtcbiAgICAgIGZvciAoY29uc3QgZGlyZWN0aXZlIG9mIG5nTW9kdWxlLmRlY2xhcmVkRGlyZWN0aXZlcykge1xuICAgICAgICBjb25zdCB7bWV0YWRhdGF9ID0gdGhpcy5yZXNvbHZlci5nZXROb25Ob3JtYWxpemVkRGlyZWN0aXZlTWV0YWRhdGEoZGlyZWN0aXZlLnJlZmVyZW5jZSkhO1xuICAgICAgICBpZiAobWV0YWRhdGEuaXNDb21wb25lbnQgJiYgbWV0YWRhdGEudGVtcGxhdGUgJiYgbWV0YWRhdGEudGVtcGxhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSB0aGlzLnVybFJlc29sdmVyLnJlc29sdmUoXG4gICAgICAgICAgICAgIHRoaXMucmVmbGVjdG9yLmNvbXBvbmVudE1vZHVsZVVybChkaXJlY3RpdmUucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgbWV0YWRhdGEudGVtcGxhdGUudGVtcGxhdGVVcmwpO1xuICAgICAgICAgIHRoaXMuZmlsZVRvQ29tcG9uZW50LnNldCh0c3Muc2VydmVyLnRvTm9ybWFsaXplZFBhdGgodGVtcGxhdGVOYW1lKSwgZGlyZWN0aXZlLnJlZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hbmFseXplZE1vZHVsZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHByb2dyYW0gaGFzIGNoYW5nZWQsIGFuZCBpbnZhbGlkYXRlIHN0YXRpYyBzeW1ib2xzIGluXG4gICAqIHRoZSBzb3VyY2UgZmlsZXMgdGhhdCBoYXZlIGNoYW5nZWQuXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBtb2R1bGVzIGFyZSB1cC10by1kYXRlLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJ5IGdldEFuYWx5emVkTW9kdWxlcygpLlxuICAgKi9cbiAgcHJpdmF0ZSB1cFRvRGF0ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7bGFzdFByb2dyYW0sIHByb2dyYW19ID0gdGhpcztcbiAgICBpZiAobGFzdFByb2dyYW0gPT09IHByb2dyYW0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmxhc3RQcm9ncmFtID0gcHJvZ3JhbTtcblxuICAgIC8vIEV2ZW4gdGhvdWdoIHRoZSBwcm9ncmFtIGhhcyBjaGFuZ2VkLCBpdCBjb3VsZCBiZSB0aGUgY2FzZSB0aGF0IG5vbmUgb2ZcbiAgICAvLyB0aGUgc291cmNlIGZpbGVzIGhhdmUgY2hhbmdlZC4gSWYgYWxsIHNvdXJjZSBmaWxlcyByZW1haW4gdGhlIHNhbWUsIHRoZW5cbiAgICAvLyBwcm9ncmFtIGlzIHN0aWxsIHVwLXRvLWRhdGUsIGFuZCB3ZSBzaG91bGQgbm90IGludmFsaWRhdGUgY2FjaGVzLlxuICAgIGxldCBmaWxlc0FkZGVkID0gMDtcbiAgICBjb25zdCBmaWxlc0NoYW5nZWRPclJlbW92ZWQ6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgc291cmNlIGZpbGVzIGhhdmUgYmVlbiBhZGRlZCAvIGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvbi5cbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgQU5HVUxBUl9DT1JFID0gJ0Bhbmd1bGFyL2NvcmUnO1xuICAgIGNvbnN0IGNvcmVQYXRoID0gdGhpcy5yZWZsZWN0b3JIb3N0Lm1vZHVsZU5hbWVUb0ZpbGVOYW1lKEFOR1VMQVJfQ09SRSk7XG4gICAgZm9yIChjb25zdCB7ZmlsZU5hbWV9IG9mIHByb2dyYW0uZ2V0U291cmNlRmlsZXMoKSkge1xuICAgICAgLy8gSWYgYEBhbmd1bGFyL2NvcmVgIGlzIGVkaXRlZCwgdGhlIGxhbmd1YWdlIHNlcnZpY2Ugd291bGQgaGF2ZSB0byBiZVxuICAgICAgLy8gcmVzdGFydGVkLCBzbyBpZ25vcmUgY2hhbmdlcyB0byBgQGFuZ3VsYXIvY29yZWAuXG4gICAgICAvLyBXaGVuIHRoZSBTdGF0aWNSZWZsZWN0b3IgaXMgaW5pdGlhbGl6ZWQgYXQgc3RhcnR1cCwgaXQgbG9hZHMgY29yZVxuICAgICAgLy8gc3ltYm9scyBmcm9tIEBhbmd1bGFyL2NvcmUgYnkgY2FsbGluZyBpbml0aWFsaXplQ29udmVyc2lvbk1hcCgpLiBUaGlzXG4gICAgICAvLyBpcyBvbmx5IGRvbmUgb25jZS4gSWYgdGhlIGZpbGUgaXMgaW52YWxpZGF0ZWQsIHNvbWUgb2YgdGhlIGNvcmUgc3ltYm9sc1xuICAgICAgLy8gd2lsbCBiZSBsb3N0IHBlcm1hbmVudGx5LlxuICAgICAgaWYgKGZpbGVOYW1lID09PSBjb3JlUGF0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHNlZW4uYWRkKGZpbGVOYW1lKTtcbiAgICAgIGNvbnN0IHZlcnNpb24gPSB0aGlzLnRzTHNIb3N0LmdldFNjcmlwdFZlcnNpb24oZmlsZU5hbWUpO1xuICAgICAgY29uc3QgbGFzdFZlcnNpb24gPSB0aGlzLmZpbGVWZXJzaW9ucy5nZXQoZmlsZU5hbWUpO1xuICAgICAgaWYgKGxhc3RWZXJzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmlsZXNBZGRlZCsrO1xuICAgICAgICB0aGlzLmZpbGVWZXJzaW9ucy5zZXQoZmlsZU5hbWUsIHZlcnNpb24pO1xuICAgICAgfSBlbHNlIGlmICh2ZXJzaW9uICE9PSBsYXN0VmVyc2lvbikge1xuICAgICAgICBmaWxlc0NoYW5nZWRPclJlbW92ZWQucHVzaChmaWxlTmFtZSk7ICAvLyBjaGFuZ2VkXG4gICAgICAgIHRoaXMuZmlsZVZlcnNpb25zLnNldChmaWxlTmFtZSwgdmVyc2lvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW55IHNvdXJjZSBmaWxlcyBoYXZlIGJlZW4gcmVtb3ZlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uLlxuICAgIGZvciAoY29uc3QgW2ZpbGVOYW1lXSBvZiB0aGlzLmZpbGVWZXJzaW9ucykge1xuICAgICAgaWYgKCFzZWVuLmhhcyhmaWxlTmFtZSkpIHtcbiAgICAgICAgZmlsZXNDaGFuZ2VkT3JSZW1vdmVkLnB1c2goZmlsZU5hbWUpOyAgLy8gcmVtb3ZlZFxuICAgICAgICAvLyBCZWNhdXNlIE1hcHMgYXJlIGl0ZXJhdGVkIGluIGluc2VydGlvbiBvcmRlciwgaXQgaXMgc2FmZSB0byBkZWxldGVcbiAgICAgICAgLy8gZW50cmllcyBmcm9tIHRoZSBzYW1lIG1hcCB3aGlsZSBpdGVyYXRpbmcuXG4gICAgICAgIC8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTk0MDIxNiBhbmRcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi8xMC4wL2luZGV4Lmh0bWwjc2VjLW1hcC5wcm90b3R5cGUuZm9yZWFjaFxuICAgICAgICB0aGlzLmZpbGVWZXJzaW9ucy5kZWxldGUoZmlsZU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZmlsZU5hbWUgb2YgZmlsZXNDaGFuZ2VkT3JSZW1vdmVkKSB7XG4gICAgICBjb25zdCBzeW1ib2xzID0gdGhpcy5zdGF0aWNTeW1ib2xSZXNvbHZlci5pbnZhbGlkYXRlRmlsZShmaWxlTmFtZSk7XG4gICAgICB0aGlzLnJlZmxlY3Rvci5pbnZhbGlkYXRlU3ltYm9scyhzeW1ib2xzKTtcbiAgICB9XG5cbiAgICAvLyBQcm9ncmFtIGlzIHVwLXRvLWRhdGUgaWZmIG5vIGZpbGVzIGFyZSBhZGRlZCwgY2hhbmdlZCwgb3IgcmVtb3ZlZC5cbiAgICByZXR1cm4gZmlsZXNBZGRlZCA9PT0gMCAmJiBmaWxlc0NoYW5nZWRPclJlbW92ZWQubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIHRlbXBsYXRlcyBpbiB0aGUgc3BlY2lmaWVkIGBmaWxlYC5cbiAgICogQHBhcmFtIGZpbGVOYW1lIFRTIG9yIEhUTUwgZmlsZVxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzKGZpbGVOYW1lOiBzdHJpbmcpOiBUZW1wbGF0ZVNvdXJjZVtdIHtcbiAgICBjb25zdCByZXN1bHRzOiBUZW1wbGF0ZVNvdXJjZVtdID0gW107XG4gICAgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKCcudHMnKSkge1xuICAgICAgLy8gRmluZCBldmVyeSB0ZW1wbGF0ZSBzdHJpbmcgaW4gdGhlIGZpbGVcbiAgICAgIGNvbnN0IHZpc2l0ID0gKGNoaWxkOiB0c3MuTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0SW50ZXJuYWxUZW1wbGF0ZShjaGlsZCk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHNzLmZvckVhY2hDaGlsZChjaGlsZCwgdmlzaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc291cmNlRmlsZSA9IHRoaXMuZ2V0U291cmNlRmlsZShmaWxlTmFtZSk7XG4gICAgICBpZiAoc291cmNlRmlsZSkge1xuICAgICAgICB0c3MuZm9yRWFjaENoaWxkKHNvdXJjZUZpbGUsIHZpc2l0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldEV4dGVybmFsVGVtcGxhdGUoZmlsZU5hbWUpO1xuICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBtZXRhZGF0YSBhYm91dCBhbGwgY2xhc3MgZGVjbGFyYXRpb25zIGluIHRoZSBmaWxlIHRoYXQgYXJlIEFuZ3VsYXJcbiAgICogZGlyZWN0aXZlcy4gUG90ZW50aWFsIG1hdGNoZXMgYXJlIGBATmdNb2R1bGVgLCBgQENvbXBvbmVudGAsIGBARGlyZWN0aXZlYCxcbiAgICogYEBQaXBlc2AsIGV0Yy4gY2xhc3MgZGVjbGFyYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZU5hbWUgVFMgZmlsZVxuICAgKi9cbiAgZ2V0RGVjbGFyYXRpb25zKGZpbGVOYW1lOiBzdHJpbmcpOiBEZWNsYXJhdGlvbltdIHtcbiAgICBpZiAoIWZpbGVOYW1lLmVuZHNXaXRoKCcudHMnKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2VGaWxlID0gdGhpcy5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKTtcbiAgICBpZiAoIXNvdXJjZUZpbGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0czogRGVjbGFyYXRpb25bXSA9IFtdO1xuICAgIGNvbnN0IHZpc2l0ID0gKGNoaWxkOiB0c3MuTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2FuZGlkYXRlID0gZ2V0RGlyZWN0aXZlQ2xhc3NMaWtlKGNoaWxkKTtcbiAgICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzSWR9ID0gY2FuZGlkYXRlO1xuICAgICAgICBjb25zdCBkZWNsYXJhdGlvblNwYW4gPSBzcGFuT2YoY2xhc3NJZCk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzSWQuZ2V0VGV4dCgpO1xuICAgICAgICBjb25zdCBjbGFzc1N5bWJvbCA9IHRoaXMucmVmbGVjdG9yLmdldFN0YXRpY1N5bWJvbChzb3VyY2VGaWxlLmZpbGVOYW1lLCBjbGFzc05hbWUpO1xuICAgICAgICAvLyBBc2sgdGhlIHJlc29sdmVyIHRvIGNoZWNrIGlmIGNhbmRpZGF0ZSBpcyBhY3R1YWxseSBBbmd1bGFyIGRpcmVjdGl2ZVxuICAgICAgICBpZiAoIXRoaXMucmVzb2x2ZXIuaXNEaXJlY3RpdmUoY2xhc3NTeW1ib2wpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc29sdmVyLmdldE5vbk5vcm1hbGl6ZWREaXJlY3RpdmVNZXRhZGF0YShjbGFzc1N5bWJvbCk7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHR5cGU6IGNsYXNzU3ltYm9sLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3BhbixcbiAgICAgICAgICBtZXRhZGF0YTogZGF0YS5tZXRhZGF0YSxcbiAgICAgICAgICBlcnJvcnM6IHRoaXMuZ2V0Q29sbGVjdGVkRXJyb3JzKGRlY2xhcmF0aW9uU3Bhbiwgc291cmNlRmlsZSksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaENoaWxkKHZpc2l0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRzcy5mb3JFYWNoQ2hpbGQoc291cmNlRmlsZSwgdmlzaXQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBnZXRTb3VyY2VGaWxlKGZpbGVOYW1lOiBzdHJpbmcpOiB0c3MuU291cmNlRmlsZXx1bmRlZmluZWQge1xuICAgIGlmICghZmlsZU5hbWUuZW5kc1dpdGgoJy50cycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vbi1UUyBzb3VyY2UgZmlsZSByZXF1ZXN0ZWQ6ICR7ZmlsZU5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb2dyYW0uZ2V0U291cmNlRmlsZShmaWxlTmFtZSk7XG4gIH1cblxuICBnZXQgcHJvZ3JhbSgpOiB0c3MuUHJvZ3JhbSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMudHNMUy5nZXRQcm9ncmFtKCk7XG4gICAgaWYgKCFwcm9ncmFtKSB7XG4gICAgICAvLyBQcm9ncmFtIGlzIHZlcnkgdmVyeSB1bmxpa2VseSB0byBiZSB1bmRlZmluZWQuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHByb2dyYW0gaW4gbGFuZ3VhZ2Ugc2VydmljZSEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2dyYW07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBUZW1wbGF0ZVNvdXJjZSBpZiBgbm9kZWAgaXMgYSB0ZW1wbGF0ZSBub2RlLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSxcbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2PicgPC0tIHRlbXBsYXRlIG5vZGVcbiAgICogfSlcbiAgICogY2xhc3MgQXBwQ29tcG9uZW50IHt9XG4gICAqICAgICAgICAgICBeLS0tLSBjbGFzcyBkZWNsYXJhdGlvbiBub2RlXG4gICAqXG4gICAqIEBwYXJhbSBub2RlIFBvdGVudGlhbCB0ZW1wbGF0ZSBub2RlXG4gICAqL1xuICBwcml2YXRlIGdldEludGVybmFsVGVtcGxhdGUobm9kZTogdHNzLk5vZGUpOiBUZW1wbGF0ZVNvdXJjZXx1bmRlZmluZWQge1xuICAgIGlmICghdHNzLmlzU3RyaW5nTGl0ZXJhbExpa2Uobm9kZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG1wbEFzZ24gPSBnZXRQcm9wZXJ0eUFzc2lnbm1lbnRGcm9tVmFsdWUobm9kZSwgJ3RlbXBsYXRlJyk7XG4gICAgaWYgKCF0bXBsQXNnbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc0RlY2wgPSBnZXRDbGFzc0RlY2xGcm9tRGVjb3JhdG9yUHJvcCh0bXBsQXNnbik7XG4gICAgaWYgKCFjbGFzc0RlY2wgfHwgIWNsYXNzRGVjbC5uYW1lKSB7ICAvLyBEb2VzIG5vdCBoYW5kbGUgYW5vbnltb3VzIGNsYXNzXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVOYW1lID0gbm9kZS5nZXRTb3VyY2VGaWxlKCkuZmlsZU5hbWU7XG4gICAgY29uc3QgY2xhc3NTeW1ib2wgPSB0aGlzLnJlZmxlY3Rvci5nZXRTdGF0aWNTeW1ib2woZmlsZU5hbWUsIGNsYXNzRGVjbC5uYW1lLnRleHQpO1xuICAgIHJldHVybiBuZXcgSW5saW5lVGVtcGxhdGUobm9kZSwgY2xhc3NEZWNsLCBjbGFzc1N5bWJvbCwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBleHRlcm5hbCB0ZW1wbGF0ZSBmb3IgYGZpbGVOYW1lYC5cbiAgICogQHBhcmFtIGZpbGVOYW1lIEhUTUwgZmlsZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRFeHRlcm5hbFRlbXBsYXRlKGZpbGVOYW1lOiBzdHJpbmcpOiBUZW1wbGF0ZVNvdXJjZXx1bmRlZmluZWQge1xuICAgIC8vIEZpcnN0IGdldCB0aGUgdGV4dCBmb3IgdGhlIHRlbXBsYXRlXG4gICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLnRzTHNIb3N0LmdldFNjcmlwdFNuYXBzaG90KGZpbGVOYW1lKTtcbiAgICBpZiAoIXNuYXBzaG90KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSA9IHNuYXBzaG90LmdldFRleHQoMCwgc25hcHNob3QuZ2V0TGVuZ3RoKCkpO1xuICAgIC8vIE5leHQgZmluZCB0aGUgY29tcG9uZW50IGNsYXNzIHN5bWJvbFxuICAgIGNvbnN0IGNsYXNzU3ltYm9sID0gdGhpcy5maWxlVG9Db21wb25lbnQuZ2V0KHRzcy5zZXJ2ZXIudG9Ob3JtYWxpemVkUGF0aChmaWxlTmFtZSkpO1xuICAgIGlmICghY2xhc3NTeW1ib2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVGhlbiB1c2UgdGhlIGNsYXNzIHN5bWJvbCB0byBmaW5kIHRoZSBhY3R1YWwgdHMuQ2xhc3NEZWNsYXJhdGlvbiBub2RlXG4gICAgY29uc3Qgc291cmNlRmlsZSA9IHRoaXMuZ2V0U291cmNlRmlsZShjbGFzc1N5bWJvbC5maWxlUGF0aCk7XG4gICAgaWYgKCFzb3VyY2VGaWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRPRE86IFRoaXMgb25seSBjb25zaWRlcnMgdG9wLWxldmVsIGNsYXNzIGRlY2xhcmF0aW9ucyBpbiBhIHNvdXJjZSBmaWxlLlxuICAgIC8vIFRoaXMgd291bGQgbm90IGZpbmQgYSBjbGFzcyBkZWNsYXJhdGlvbiBpbiBhIG5hbWVzcGFjZSwgZm9yIGV4YW1wbGUuXG4gICAgY29uc3QgY2xhc3NEZWNsID0gc291cmNlRmlsZS5mb3JFYWNoQ2hpbGQoKGNoaWxkKSA9PiB7XG4gICAgICBpZiAodHNzLmlzQ2xhc3NEZWNsYXJhdGlvbihjaGlsZCkgJiYgY2hpbGQubmFtZSAmJiBjaGlsZC5uYW1lLnRleHQgPT09IGNsYXNzU3ltYm9sLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghY2xhc3NEZWNsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXh0ZXJuYWxUZW1wbGF0ZShzb3VyY2UsIGZpbGVOYW1lLCBjbGFzc0RlY2wsIGNsYXNzU3ltYm9sLCB0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdEVycm9yKGVycm9yOiBhbnksIGZpbGVQYXRoPzogc3RyaW5nKSB7XG4gICAgaWYgKGZpbGVQYXRoKSB7XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5jb2xsZWN0ZWRFcnJvcnMuZ2V0KGZpbGVQYXRoKTtcbiAgICAgIGlmICghZXJyb3JzKSB7XG4gICAgICAgIGVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxlY3RlZEVycm9ycy5zZXQoZmlsZVBhdGgsIGVycm9ycyk7XG4gICAgICB9XG4gICAgICBlcnJvcnMucHVzaChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb2xsZWN0ZWRFcnJvcnMoZGVmYXVsdFNwYW46IFNwYW4sIHNvdXJjZUZpbGU6IHRzcy5Tb3VyY2VGaWxlKTogRGVjbGFyYXRpb25FcnJvcltdIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmNvbGxlY3RlZEVycm9ycy5nZXQoc291cmNlRmlsZS5maWxlTmFtZSk7XG4gICAgaWYgKCFlcnJvcnMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gVE9ETzogQWRkIGJldHRlciB0eXBpbmdzIGZvciB0aGUgZXJyb3JzXG4gICAgcmV0dXJuIGVycm9ycy5tYXAoKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgbGluZSA9IGUubGluZSB8fCAoZS5wb3NpdGlvbiAmJiBlLnBvc2l0aW9uLmxpbmUpO1xuICAgICAgY29uc3QgY29sdW1uID0gZS5jb2x1bW4gfHwgKGUucG9zaXRpb24gJiYgZS5wb3NpdGlvbi5jb2x1bW4pO1xuICAgICAgY29uc3Qgc3BhbiA9IHNwYW5BdChzb3VyY2VGaWxlLCBsaW5lLCBjb2x1bW4pIHx8IGRlZmF1bHRTcGFuO1xuICAgICAgaWYgKGlzRm9ybWF0dGVkRXJyb3IoZSkpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yVG9EaWFnbm9zdGljV2l0aENoYWluKGUsIHNwYW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHttZXNzYWdlOiBlLm1lc3NhZ2UsIHNwYW59O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcGFyc2VkIHRlbXBsYXRlIGZvciB0aGUgdGVtcGxhdGUgYXQgdGhlIHNwZWNpZmllZCBgcG9zaXRpb25gLlxuICAgKiBAcGFyYW0gZmlsZU5hbWUgVFMgb3IgSFRNTCBmaWxlXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBQb3NpdGlvbiBvZiB0aGUgdGVtcGxhdGUgaW4gdGhlIFRTIGZpbGUsIG90aGVyd2lzZSBpZ25vcmVkLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVBc3RBdFBvc2l0aW9uKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiBBc3RSZXN1bHR8dW5kZWZpbmVkIHtcbiAgICBsZXQgdGVtcGxhdGU6IFRlbXBsYXRlU291cmNlfHVuZGVmaW5lZDtcbiAgICBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoJy50cycpKSB7XG4gICAgICBjb25zdCBzb3VyY2VGaWxlID0gdGhpcy5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKTtcbiAgICAgIGlmICghc291cmNlRmlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBGaW5kIHRoZSBub2RlIHRoYXQgbW9zdCBjbG9zZWx5IG1hdGNoZXMgdGhlIHBvc2l0aW9uXG4gICAgICBjb25zdCBub2RlID0gZmluZFRpZ2h0ZXN0Tm9kZShzb3VyY2VGaWxlLCBwb3NpdGlvbik7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGUgPSB0aGlzLmdldEludGVybmFsVGVtcGxhdGUobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBsYXRlID0gdGhpcy5nZXRFeHRlcm5hbFRlbXBsYXRlKGZpbGVOYW1lKTtcbiAgICB9XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZUFzdCh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgTmdNb2R1bGUgd2hpY2ggdGhlIGRpcmVjdGl2ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGBjbGFzc1N5bWJvbGBcbiAgICogYmVsb25ncyB0bywgdGhlbiByZXR1cm4gaXRzIHNjaGVtYSBhbmQgdHJhbnNpdGl2ZSBkaXJlY3RpdmVzIGFuZCBwaXBlcy5cbiAgICogQHBhcmFtIGNsYXNzU3ltYm9sIEFuZ3VsYXIgU3ltYm9sIHRoYXQgZGVmaW5lcyBhIGRpcmVjdGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNb2R1bGVNZXRhZGF0YUZvckRpcmVjdGl2ZShjbGFzc1N5bWJvbDogU3RhdGljU3ltYm9sKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZGlyZWN0aXZlczogW10gYXMgQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnlbXSxcbiAgICAgIHBpcGVzOiBbXSBhcyBDb21waWxlUGlwZVN1bW1hcnlbXSxcbiAgICAgIHNjaGVtYXM6IFtdIGFzIFNjaGVtYU1ldGFkYXRhW10sXG4gICAgfTtcbiAgICAvLyBGaXJzdCBmaW5kIHdoaWNoIE5nTW9kdWxlIHRoZSBkaXJlY3RpdmUgYmVsb25ncyB0by5cbiAgICBjb25zdCBuZ01vZHVsZSA9IHRoaXMuYW5hbHl6ZWRNb2R1bGVzLm5nTW9kdWxlQnlQaXBlT3JEaXJlY3RpdmUuZ2V0KGNsYXNzU3ltYm9sKSB8fFxuICAgICAgICBmaW5kU3VpdGFibGVEZWZhdWx0TW9kdWxlKHRoaXMuYW5hbHl6ZWRNb2R1bGVzKTtcbiAgICBpZiAoIW5nTW9kdWxlKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBUaGVuIGdhdGhlciBhbGwgdHJhbnNpdGl2ZSBkaXJlY3RpdmVzIGFuZCBwaXBlcy5cbiAgICBjb25zdCB7ZGlyZWN0aXZlcywgcGlwZXN9ID0gbmdNb2R1bGUudHJhbnNpdGl2ZU1vZHVsZTtcbiAgICBmb3IgKGNvbnN0IGRpcmVjdGl2ZSBvZiBkaXJlY3RpdmVzKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5yZXNvbHZlci5nZXROb25Ob3JtYWxpemVkRGlyZWN0aXZlTWV0YWRhdGEoZGlyZWN0aXZlLnJlZmVyZW5jZSk7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXN1bHQuZGlyZWN0aXZlcy5wdXNoKGRhdGEubWV0YWRhdGEudG9TdW1tYXJ5KCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpcGUgb2YgcGlwZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5yZXNvbHZlci5nZXRPckxvYWRQaXBlTWV0YWRhdGEocGlwZS5yZWZlcmVuY2UpO1xuICAgICAgcmVzdWx0LnBpcGVzLnB1c2gobWV0YWRhdGEudG9TdW1tYXJ5KCkpO1xuICAgIH1cbiAgICByZXN1bHQuc2NoZW1hcy5wdXNoKC4uLm5nTW9kdWxlLnNjaGVtYXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGB0ZW1wbGF0ZWAgYW5kIHJldHVybiBpdHMgQVNULCBpZiBhbnkuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSB0ZW1wbGF0ZSB0byBiZSBwYXJzZWRcbiAgICovXG4gIGdldFRlbXBsYXRlQXN0KHRlbXBsYXRlOiBUZW1wbGF0ZVNvdXJjZSk6IEFzdFJlc3VsdHx1bmRlZmluZWQge1xuICAgIGNvbnN0IHt0eXBlOiBjbGFzc1N5bWJvbCwgZmlsZU5hbWV9ID0gdGVtcGxhdGU7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzb2x2ZXIuZ2V0Tm9uTm9ybWFsaXplZERpcmVjdGl2ZU1ldGFkYXRhKGNsYXNzU3ltYm9sKTtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCk7XG4gICAgY29uc3QgZXhwcmVzc2lvblBhcnNlciA9IG5ldyBQYXJzZXIobmV3IExleGVyKCkpO1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBUZW1wbGF0ZVBhcnNlcihcbiAgICAgICAgbmV3IENvbXBpbGVyQ29uZmlnKCksIHRoaXMucmVmbGVjdG9yLCBleHByZXNzaW9uUGFyc2VyLCBuZXcgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5KCksXG4gICAgICAgIGh0bWxQYXJzZXIsXG4gICAgICAgIG51bGwsICAvLyBjb25zb2xlXG4gICAgICAgIFtdICAgICAvLyB0cmFuZm9ybXNcbiAgICApO1xuICAgIGNvbnN0IGh0bWxSZXN1bHQgPSBodG1sUGFyc2VyLnBhcnNlKHRlbXBsYXRlLnNvdXJjZSwgZmlsZU5hbWUsIHtcbiAgICAgIHRva2VuaXplRXhwYW5zaW9uRm9ybXM6IHRydWUsXG4gICAgICBwcmVzZXJ2ZUxpbmVFbmRpbmdzOiB0cnVlLCAgLy8gZG8gbm90IGNvbnZlcnQgQ1JMRiB0byBMRlxuICAgIH0pO1xuICAgIGNvbnN0IHtkaXJlY3RpdmVzLCBwaXBlcywgc2NoZW1hc30gPSB0aGlzLmdldE1vZHVsZU1ldGFkYXRhRm9yRGlyZWN0aXZlKGNsYXNzU3ltYm9sKTtcbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlci50cnlQYXJzZUh0bWwoaHRtbFJlc3VsdCwgZGF0YS5tZXRhZGF0YSwgZGlyZWN0aXZlcywgcGlwZXMsIHNjaGVtYXMpO1xuICAgIGlmICghcGFyc2VSZXN1bHQudGVtcGxhdGVBc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGh0bWxBc3Q6IGh0bWxSZXN1bHQucm9vdE5vZGVzLFxuICAgICAgdGVtcGxhdGVBc3Q6IHBhcnNlUmVzdWx0LnRlbXBsYXRlQXN0LFxuICAgICAgZGlyZWN0aXZlOiBkYXRhLm1ldGFkYXRhLFxuICAgICAgZGlyZWN0aXZlcyxcbiAgICAgIHBpcGVzLFxuICAgICAgcGFyc2VFcnJvcnM6IHBhcnNlUmVzdWx0LmVycm9ycyxcbiAgICAgIGV4cHJlc3Npb25QYXJzZXIsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyB0aGUgc3BlY2lmaWVkIGBtc2dgIHRvIGZpbGUgYXQgSU5GTyBsZXZlbC4gSWYgbG9nZ2luZyBpcyBub3QgZW5hYmxlZFxuICAgKiB0aGlzIG1ldGhvZCBpcyBhIG5vLW9wLlxuICAgKiBAcGFyYW0gbXNnIExvZyBtZXNzYWdlXG4gICAqL1xuICBsb2cobXNnOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy50c0xzSG9zdC5sb2cpIHtcbiAgICAgIHRoaXMudHNMc0hvc3QubG9nKG1zZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvZyB0aGUgc3BlY2lmaWVkIGBtc2dgIHRvIGZpbGUgYXQgRVJST1IgbGV2ZWwuIElmIGxvZ2dpbmcgaXMgbm90IGVuYWJsZWRcbiAgICogdGhpcyBtZXRob2QgaXMgYSBuby1vcC5cbiAgICogQHBhcmFtIG1zZyBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtc2c6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnRzTHNIb3N0LmVycm9yKSB7XG4gICAgICB0aGlzLnRzTHNIb3N0LmVycm9yKG1zZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvZyBkZWJ1Z2dpbmcgaW5mbyB0byBmaWxlIGF0IElORk8gbGV2ZWwsIG9ubHkgaWYgdmVyYm9zZSBzZXR0aW5nIGlzIHR1cm5lZFxuICAgKiBvbi4gT3RoZXJ3aXNlLCB0aGlzIG1ldGhvZCBpcyBhIG5vLW9wLlxuICAgKiBAcGFyYW0gbXNnIGRlYnVnZ2luZyBtZXNzYWdlXG4gICAqL1xuICBkZWJ1Zyhtc2c6IHN0cmluZykge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnRzTHNIb3N0IGFzIHRzcy5zZXJ2ZXIuUHJvamVjdDtcbiAgICBpZiAoIXByb2plY3QucHJvamVjdFNlcnZpY2UpIHtcbiAgICAgIC8vIHRzTHNIb3N0IGlzIG5vdCBhIFByb2plY3RcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge2xvZ2dlcn0gPSBwcm9qZWN0LnByb2plY3RTZXJ2aWNlO1xuICAgIGlmIChsb2dnZXIuaGFzTGV2ZWwodHNzLnNlcnZlci5Mb2dMZXZlbC52ZXJib3NlKSkge1xuICAgICAgbG9nZ2VyLmluZm8obXNnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFN1aXRhYmxlRGVmYXVsdE1vZHVsZShtb2R1bGVzOiBOZ0FuYWx5emVkTW9kdWxlcyk6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhfHVuZGVmaW5lZCB7XG4gIGxldCByZXN1bHQ6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgbGV0IHJlc3VsdFNpemUgPSAwO1xuICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzLm5nTW9kdWxlcykge1xuICAgIGNvbnN0IG1vZHVsZVNpemUgPSBtb2R1bGUudHJhbnNpdGl2ZU1vZHVsZS5kaXJlY3RpdmVzLmxlbmd0aDtcbiAgICBpZiAobW9kdWxlU2l6ZSA+IHJlc3VsdFNpemUpIHtcbiAgICAgIHJlc3VsdCA9IG1vZHVsZTtcbiAgICAgIHJlc3VsdFNpemUgPSBtb2R1bGVTaXplO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcGFuT2Yobm9kZTogdHNzLk5vZGUpOiBTcGFuIHtcbiAgcmV0dXJuIHtzdGFydDogbm9kZS5nZXRTdGFydCgpLCBlbmQ6IG5vZGUuZ2V0RW5kKCl9O1xufVxuXG5mdW5jdGlvbiBzcGFuQXQoc291cmNlRmlsZTogdHNzLlNvdXJjZUZpbGUsIGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBTcGFufHVuZGVmaW5lZCB7XG4gIGlmIChsaW5lICE9IG51bGwgJiYgY29sdW1uICE9IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRzcy5nZXRQb3NpdGlvbk9mTGluZUFuZENoYXJhY3Rlcihzb3VyY2VGaWxlLCBsaW5lLCBjb2x1bW4pO1xuICAgIGNvbnN0IGZpbmRDaGlsZCA9IGZ1bmN0aW9uIGZpbmRDaGlsZChub2RlOiB0c3MuTm9kZSk6IHRzcy5Ob2RlfHVuZGVmaW5lZCB7XG4gICAgICBpZiAobm9kZS5raW5kID4gdHNzLlN5bnRheEtpbmQuTGFzdFRva2VuICYmIG5vZGUucG9zIDw9IHBvc2l0aW9uICYmIG5vZGUuZW5kID4gcG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgYmV0dGVyTm9kZSA9IHRzcy5mb3JFYWNoQ2hpbGQobm9kZSwgZmluZENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGJldHRlck5vZGUgfHwgbm9kZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgbm9kZSA9IHRzcy5mb3JFYWNoQ2hpbGQoc291cmNlRmlsZSwgZmluZENoaWxkKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIHtzdGFydDogbm9kZS5nZXRTdGFydCgpLCBlbmQ6IG5vZGUuZ2V0RW5kKCl9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0Q2hhaW4oY2hhaW46IEZvcm1hdHRlZE1lc3NhZ2VDaGFpbik6IERpYWdub3N0aWNNZXNzYWdlQ2hhaW4ge1xuICByZXR1cm4ge21lc3NhZ2U6IGNoYWluLm1lc3NhZ2UsIG5leHQ6IGNoYWluLm5leHQgPyBjaGFpbi5uZXh0Lm1hcChjb252ZXJ0Q2hhaW4pIDogdW5kZWZpbmVkfTtcbn1cblxuZnVuY3Rpb24gZXJyb3JUb0RpYWdub3N0aWNXaXRoQ2hhaW4oZXJyb3I6IEZvcm1hdHRlZEVycm9yLCBzcGFuOiBTcGFuKTogRGVjbGFyYXRpb25FcnJvciB7XG4gIHJldHVybiB7bWVzc2FnZTogZXJyb3IuY2hhaW4gPyBjb252ZXJ0Q2hhaW4oZXJyb3IuY2hhaW4pIDogZXJyb3IubWVzc2FnZSwgc3Bhbn07XG59XG4iXX0=