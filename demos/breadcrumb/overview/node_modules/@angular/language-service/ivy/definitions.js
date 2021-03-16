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
        define("@angular/language-service/ivy/definitions", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/metadata", "@angular/compiler-cli/src/ngtsc/typecheck/api", "typescript", "@angular/language-service/ivy/template_target", "@angular/language-service/ivy/ts_utils", "@angular/language-service/ivy/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefinitionBuilder = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var metadata_1 = require("@angular/compiler-cli/src/ngtsc/metadata");
    var api_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/api");
    var ts = require("typescript");
    var template_target_1 = require("@angular/language-service/ivy/template_target");
    var ts_utils_1 = require("@angular/language-service/ivy/ts_utils");
    var utils_1 = require("@angular/language-service/ivy/utils");
    var DefinitionBuilder = /** @class */ (function () {
        function DefinitionBuilder(tsLS, compiler) {
            this.tsLS = tsLS;
            this.compiler = compiler;
        }
        DefinitionBuilder.prototype.getDefinitionAndBoundSpan = function (fileName, position) {
            var e_1, _a;
            var _b;
            var templateInfo = utils_1.getTemplateInfoAtPosition(fileName, position, this.compiler);
            if (templateInfo === undefined) {
                // We were unable to get a template at the given position. If we are in a TS file, instead
                // attempt to get an Angular definition at the location inside a TS file (examples of this
                // would be templateUrl or a url in styleUrls).
                if (!utils_1.isTypeScriptFile(fileName)) {
                    return;
                }
                return getDefinitionForExpressionAtPosition(fileName, position, this.compiler);
            }
            var definitionMetas = this.getDefinitionMetaAtPosition(templateInfo, position);
            if (definitionMetas === undefined) {
                return undefined;
            }
            var definitions = [];
            try {
                for (var definitionMetas_1 = tslib_1.__values(definitionMetas), definitionMetas_1_1 = definitionMetas_1.next(); !definitionMetas_1_1.done; definitionMetas_1_1 = definitionMetas_1.next()) {
                    var definitionMeta = definitionMetas_1_1.value;
                    // The `$event` of event handlers would point to the $event parameter in the shim file, as in
                    // `_t3["x"].subscribe(function ($event): any { $event }) ;`
                    // If we wanted to return something for this, it would be more appropriate for something like
                    // `getTypeDefinition`.
                    if (utils_1.isDollarEvent(definitionMeta.node)) {
                        continue;
                    }
                    definitions.push.apply(definitions, tslib_1.__spread(((_b = this.getDefinitionsForSymbol(tslib_1.__assign(tslib_1.__assign({}, definitionMeta), templateInfo))) !== null && _b !== void 0 ? _b : [])));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (definitionMetas_1_1 && !definitionMetas_1_1.done && (_a = definitionMetas_1.return)) _a.call(definitionMetas_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (definitions.length === 0) {
                return undefined;
            }
            return { definitions: definitions, textSpan: utils_1.getTextSpanOfNode(definitionMetas[0].node) };
        };
        DefinitionBuilder.prototype.getDefinitionsForSymbol = function (_a) {
            var symbol = _a.symbol, node = _a.node, parent = _a.parent, component = _a.component;
            switch (symbol.kind) {
                case api_1.SymbolKind.Directive:
                case api_1.SymbolKind.Element:
                case api_1.SymbolKind.Template:
                case api_1.SymbolKind.DomBinding:
                    // Though it is generally more appropriate for the above symbol definitions to be
                    // associated with "type definitions" since the location in the template is the
                    // actual definition location, the better user experience would be to allow
                    // LS users to "go to definition" on an item in the template that maps to a class and be
                    // taken to the directive or HTML class.
                    return this.getTypeDefinitionsForTemplateInstance(symbol, node);
                case api_1.SymbolKind.Pipe: {
                    if (symbol.tsSymbol !== null) {
                        return this.getDefinitionsForSymbols(symbol);
                    }
                    else {
                        // If there is no `ts.Symbol` for the pipe transform, we want to return the
                        // type definition (the pipe class).
                        return this.getTypeDefinitionsForSymbols(symbol.classSymbol);
                    }
                }
                case api_1.SymbolKind.Output:
                case api_1.SymbolKind.Input: {
                    var bindingDefs = this.getDefinitionsForSymbols.apply(this, tslib_1.__spread(symbol.bindings));
                    // Also attempt to get directive matches for the input name. If there is a directive that
                    // has the input name as part of the selector, we want to return that as well.
                    var directiveDefs = this.getDirectiveTypeDefsForBindingNode(node, parent, component);
                    return tslib_1.__spread(bindingDefs, directiveDefs);
                }
                case api_1.SymbolKind.Variable:
                case api_1.SymbolKind.Reference: {
                    var definitions = [];
                    if (symbol.declaration !== node) {
                        var shimLocation = symbol.kind === api_1.SymbolKind.Variable ? symbol.localVarLocation :
                            symbol.referenceVarLocation;
                        var mapping = utils_1.getTemplateLocationFromShimLocation(this.compiler.getTemplateTypeChecker(), shimLocation.shimPath, shimLocation.positionInShimFile);
                        if (mapping !== null) {
                            definitions.push({
                                name: symbol.declaration.name,
                                containerName: '',
                                containerKind: ts.ScriptElementKind.unknown,
                                kind: ts.ScriptElementKind.variableElement,
                                textSpan: utils_1.getTextSpanOfNode(symbol.declaration),
                                contextSpan: utils_1.toTextSpan(symbol.declaration.sourceSpan),
                                fileName: mapping.templateUrl,
                            });
                        }
                    }
                    if (symbol.kind === api_1.SymbolKind.Variable) {
                        definitions.push.apply(definitions, tslib_1.__spread(this.getDefinitionsForSymbols({ shimLocation: symbol.initializerLocation })));
                    }
                    return definitions;
                }
                case api_1.SymbolKind.Expression: {
                    return this.getDefinitionsForSymbols(symbol);
                }
            }
        };
        DefinitionBuilder.prototype.getDefinitionsForSymbols = function () {
            var _this = this;
            var symbols = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                symbols[_i] = arguments[_i];
            }
            return utils_1.flatMap(symbols, function (_a) {
                var _b;
                var shimLocation = _a.shimLocation;
                var shimPath = shimLocation.shimPath, positionInShimFile = shimLocation.positionInShimFile;
                return (_b = _this.tsLS.getDefinitionAtPosition(shimPath, positionInShimFile)) !== null && _b !== void 0 ? _b : [];
            });
        };
        DefinitionBuilder.prototype.getTypeDefinitionsAtPosition = function (fileName, position) {
            var e_2, _a;
            var templateInfo = utils_1.getTemplateInfoAtPosition(fileName, position, this.compiler);
            if (templateInfo === undefined) {
                return;
            }
            var definitionMetas = this.getDefinitionMetaAtPosition(templateInfo, position);
            if (definitionMetas === undefined) {
                return undefined;
            }
            var definitions = [];
            try {
                for (var definitionMetas_2 = tslib_1.__values(definitionMetas), definitionMetas_2_1 = definitionMetas_2.next(); !definitionMetas_2_1.done; definitionMetas_2_1 = definitionMetas_2.next()) {
                    var _b = definitionMetas_2_1.value, symbol = _b.symbol, node = _b.node, parent_1 = _b.parent;
                    switch (symbol.kind) {
                        case api_1.SymbolKind.Directive:
                        case api_1.SymbolKind.DomBinding:
                        case api_1.SymbolKind.Element:
                        case api_1.SymbolKind.Template:
                            definitions.push.apply(definitions, tslib_1.__spread(this.getTypeDefinitionsForTemplateInstance(symbol, node)));
                            break;
                        case api_1.SymbolKind.Output:
                        case api_1.SymbolKind.Input: {
                            var bindingDefs = this.getTypeDefinitionsForSymbols.apply(this, tslib_1.__spread(symbol.bindings));
                            definitions.push.apply(definitions, tslib_1.__spread(bindingDefs));
                            // Also attempt to get directive matches for the input name. If there is a directive that
                            // has the input name as part of the selector, we want to return that as well.
                            var directiveDefs = this.getDirectiveTypeDefsForBindingNode(node, parent_1, templateInfo.component);
                            definitions.push.apply(definitions, tslib_1.__spread(directiveDefs));
                            break;
                        }
                        case api_1.SymbolKind.Pipe: {
                            if (symbol.tsSymbol !== null) {
                                definitions.push.apply(definitions, tslib_1.__spread(this.getTypeDefinitionsForSymbols(symbol)));
                            }
                            else {
                                // If there is no `ts.Symbol` for the pipe transform, we want to return the
                                // type definition (the pipe class).
                                definitions.push.apply(definitions, tslib_1.__spread(this.getTypeDefinitionsForSymbols(symbol.classSymbol)));
                            }
                            break;
                        }
                        case api_1.SymbolKind.Reference:
                            definitions.push.apply(definitions, tslib_1.__spread(this.getTypeDefinitionsForSymbols({ shimLocation: symbol.targetLocation })));
                            break;
                        case api_1.SymbolKind.Expression:
                            definitions.push.apply(definitions, tslib_1.__spread(this.getTypeDefinitionsForSymbols(symbol)));
                            break;
                        case api_1.SymbolKind.Variable: {
                            definitions.push.apply(definitions, tslib_1.__spread(this.getTypeDefinitionsForSymbols({ shimLocation: symbol.initializerLocation })));
                            break;
                        }
                    }
                    return definitions;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (definitionMetas_2_1 && !definitionMetas_2_1.done && (_a = definitionMetas_2.return)) _a.call(definitionMetas_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        DefinitionBuilder.prototype.getTypeDefinitionsForTemplateInstance = function (symbol, node) {
            switch (symbol.kind) {
                case api_1.SymbolKind.Template: {
                    var matches = utils_1.getDirectiveMatchesForElementTag(symbol.templateNode, symbol.directives);
                    return this.getTypeDefinitionsForSymbols.apply(this, tslib_1.__spread(matches));
                }
                case api_1.SymbolKind.Element: {
                    var matches = utils_1.getDirectiveMatchesForElementTag(symbol.templateNode, symbol.directives);
                    // If one of the directive matches is a component, we should not include the native element
                    // in the results because it is replaced by the component.
                    return Array.from(matches).some(function (dir) { return dir.isComponent; }) ? this.getTypeDefinitionsForSymbols.apply(this, tslib_1.__spread(matches)) : this.getTypeDefinitionsForSymbols.apply(this, tslib_1.__spread(matches, [symbol]));
                }
                case api_1.SymbolKind.DomBinding: {
                    if (!(node instanceof compiler_1.TmplAstTextAttribute)) {
                        return [];
                    }
                    var dirs = utils_1.getDirectiveMatchesForAttribute(node.name, symbol.host.templateNode, symbol.host.directives);
                    return this.getTypeDefinitionsForSymbols.apply(this, tslib_1.__spread(dirs));
                }
                case api_1.SymbolKind.Directive:
                    return this.getTypeDefinitionsForSymbols(symbol);
            }
        };
        DefinitionBuilder.prototype.getDirectiveTypeDefsForBindingNode = function (node, parent, component) {
            if (!(node instanceof compiler_1.TmplAstBoundAttribute) && !(node instanceof compiler_1.TmplAstTextAttribute) &&
                !(node instanceof compiler_1.TmplAstBoundEvent)) {
                return [];
            }
            if (parent === null ||
                !(parent instanceof compiler_1.TmplAstTemplate || parent instanceof compiler_1.TmplAstElement)) {
                return [];
            }
            var templateOrElementSymbol = this.compiler.getTemplateTypeChecker().getSymbolOfNode(parent, component);
            if (templateOrElementSymbol === null ||
                (templateOrElementSymbol.kind !== api_1.SymbolKind.Template &&
                    templateOrElementSymbol.kind !== api_1.SymbolKind.Element)) {
                return [];
            }
            var dirs = utils_1.getDirectiveMatchesForAttribute(node.name, parent, templateOrElementSymbol.directives);
            return this.getTypeDefinitionsForSymbols.apply(this, tslib_1.__spread(dirs));
        };
        DefinitionBuilder.prototype.getTypeDefinitionsForSymbols = function () {
            var _this = this;
            var symbols = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                symbols[_i] = arguments[_i];
            }
            return utils_1.flatMap(symbols, function (_a) {
                var _b;
                var shimLocation = _a.shimLocation;
                var shimPath = shimLocation.shimPath, positionInShimFile = shimLocation.positionInShimFile;
                return (_b = _this.tsLS.getTypeDefinitionAtPosition(shimPath, positionInShimFile)) !== null && _b !== void 0 ? _b : [];
            });
        };
        DefinitionBuilder.prototype.getDefinitionMetaAtPosition = function (_a, position) {
            var e_3, _b;
            var template = _a.template, component = _a.component;
            var target = template_target_1.getTargetAtPosition(template, position);
            if (target === null) {
                return undefined;
            }
            var context = target.context, parent = target.parent;
            var nodes = context.kind === template_target_1.TargetNodeKind.TwoWayBindingContext ? context.nodes : [context.node];
            var definitionMetas = [];
            try {
                for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                    var node = nodes_1_1.value;
                    var symbol = this.compiler.getTemplateTypeChecker().getSymbolOfNode(node, component);
                    if (symbol === null) {
                        continue;
                    }
                    definitionMetas.push({ node: node, parent: parent, symbol: symbol });
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (nodes_1_1 && !nodes_1_1.done && (_b = nodes_1.return)) _b.call(nodes_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return definitionMetas.length > 0 ? definitionMetas : undefined;
        };
        return DefinitionBuilder;
    }());
    exports.DefinitionBuilder = DefinitionBuilder;
    /**
     * Gets an Angular-specific definition in a TypeScript source file.
     */
    function getDefinitionForExpressionAtPosition(fileName, position, compiler) {
        var sf = compiler.getNextProgram().getSourceFile(fileName);
        if (sf === undefined) {
            return;
        }
        var expression = ts_utils_1.findTightestNode(sf, position);
        if (expression === undefined) {
            return;
        }
        var classDeclaration = ts_utils_1.getParentClassDeclaration(expression);
        if (classDeclaration === undefined) {
            return;
        }
        var componentResources = compiler.getComponentResources(classDeclaration);
        if (componentResources === null) {
            return;
        }
        var allResources = tslib_1.__spread(componentResources.styles, [componentResources.template]);
        var resourceForExpression = allResources.find(function (resource) { return resource.expression === expression; });
        if (resourceForExpression === undefined || !metadata_1.isExternalResource(resourceForExpression)) {
            return;
        }
        var templateDefinitions = [{
                kind: ts.ScriptElementKind.externalModuleName,
                name: resourceForExpression.path,
                containerKind: ts.ScriptElementKind.unknown,
                containerName: '',
                // Reading the template is expensive, so don't provide a preview.
                // TODO(ayazhafiz): Consider providing an actual span:
                //  1. We're likely to read the template anyway
                //  2. We could show just the first 100 chars or so
                textSpan: { start: 0, length: 0 },
                fileName: resourceForExpression.path,
            }];
        return {
            definitions: templateDefinitions,
            textSpan: {
                // Exclude opening and closing quotes in the url span.
                start: expression.getStart() + 1,
                length: expression.getWidth() - 2,
            },
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL2l2eS9kZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7O0lBRUgsOENBQW9KO0lBRXBKLHFFQUE0RTtJQUM1RSxxRUFBaUs7SUFDakssK0JBQWlDO0lBRWpDLGlGQUFzRTtJQUN0RSxtRUFBdUU7SUFDdkUsNkRBQWlQO0lBWWpQO1FBQ0UsMkJBQTZCLElBQXdCLEVBQW1CLFFBQW9CO1lBQS9ELFNBQUksR0FBSixJQUFJLENBQW9CO1lBQW1CLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBRyxDQUFDO1FBRWhHLHFEQUF5QixHQUF6QixVQUEwQixRQUFnQixFQUFFLFFBQWdCOzs7WUFFMUQsSUFBTSxZQUFZLEdBQUcsaUNBQXlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEYsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUM5QiwwRkFBMEY7Z0JBQzFGLDBGQUEwRjtnQkFDMUYsK0NBQStDO2dCQUMvQyxJQUFJLENBQUMsd0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQy9CLE9BQU87aUJBQ1I7Z0JBQ0QsT0FBTyxvQ0FBb0MsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNoRjtZQUNELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakYsSUFBSSxlQUFlLEtBQUssU0FBUyxFQUFFO2dCQUNqQyxPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUNELElBQU0sV0FBVyxHQUF3QixFQUFFLENBQUM7O2dCQUM1QyxLQUE2QixJQUFBLG9CQUFBLGlCQUFBLGVBQWUsQ0FBQSxn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LE9BQU87U0FDUjtRQUVELElBQU0sWUFBWSxvQkFBTyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUUsa0JBQWtCLENBQUMsUUFBUSxFQUFDLENBQUM7UUFFakYsSUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQWxDLENBQWtDLENBQUMsQ0FBQztRQUNoRyxJQUFJLHFCQUFxQixLQUFLLFNBQVMsSUFBSSxDQUFDLDZCQUFrQixDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDckYsT0FBTztTQUNSO1FBRUQsSUFBTSxtQkFBbUIsR0FBd0IsQ0FBQztnQkFDaEQsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0I7Z0JBQzdDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxJQUFJO2dCQUNoQyxhQUFhLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU87Z0JBQzNDLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixpRUFBaUU7Z0JBQ2pFLHNEQUFzRDtnQkFDdEQsK0NBQStDO2dCQUMvQyxtREFBbUQ7Z0JBQ25ELFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQztnQkFDL0IsUUFBUSxFQUFFLHFCQUFxQixDQUFDLElBQUk7YUFDckMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsUUFBUSxFQUFFO2dCQUNSLHNEQUFzRDtnQkFDdEQsS0FBSyxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7YUFDbEM7U0FDRixDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FTVCwgVG1wbEFzdEJvdW5kQXR0cmlidXRlLCBUbXBsQXN0Qm91bmRFdmVudCwgVG1wbEFzdEVsZW1lbnQsIFRtcGxBc3ROb2RlLCBUbXBsQXN0VGVtcGxhdGUsIFRtcGxBc3RUZXh0QXR0cmlidXRlfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge05nQ29tcGlsZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvY29yZSc7XG5pbXBvcnQge2lzRXh0ZXJuYWxSZXNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9tZXRhZGF0YSc7XG5pbXBvcnQge0RpcmVjdGl2ZVN5bWJvbCwgRG9tQmluZGluZ1N5bWJvbCwgRWxlbWVudFN5bWJvbCwgU2hpbUxvY2F0aW9uLCBTeW1ib2wsIFN5bWJvbEtpbmQsIFRlbXBsYXRlU3ltYm9sfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL3R5cGVjaGVjay9hcGknO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7Z2V0VGFyZ2V0QXRQb3NpdGlvbiwgVGFyZ2V0Tm9kZUtpbmR9IGZyb20gJy4vdGVtcGxhdGVfdGFyZ2V0JztcbmltcG9ydCB7ZmluZFRpZ2h0ZXN0Tm9kZSwgZ2V0UGFyZW50Q2xhc3NEZWNsYXJhdGlvbn0gZnJvbSAnLi90c191dGlscyc7XG5pbXBvcnQge2ZsYXRNYXAsIGdldERpcmVjdGl2ZU1hdGNoZXNGb3JBdHRyaWJ1dGUsIGdldERpcmVjdGl2ZU1hdGNoZXNGb3JFbGVtZW50VGFnLCBnZXRUZW1wbGF0ZUluZm9BdFBvc2l0aW9uLCBnZXRUZW1wbGF0ZUxvY2F0aW9uRnJvbVNoaW1Mb2NhdGlvbiwgZ2V0VGV4dFNwYW5PZk5vZGUsIGlzRG9sbGFyRXZlbnQsIGlzVHlwZVNjcmlwdEZpbGUsIFRlbXBsYXRlSW5mbywgdG9UZXh0U3Bhbn0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBEZWZpbml0aW9uTWV0YSB7XG4gIG5vZGU6IEFTVHxUbXBsQXN0Tm9kZTtcbiAgcGFyZW50OiBBU1R8VG1wbEFzdE5vZGV8bnVsbDtcbiAgc3ltYm9sOiBTeW1ib2w7XG59XG5cbmludGVyZmFjZSBIYXNTaGltTG9jYXRpb24ge1xuICBzaGltTG9jYXRpb246IFNoaW1Mb2NhdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmluaXRpb25CdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0c0xTOiB0cy5MYW5ndWFnZVNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgY29tcGlsZXI6IE5nQ29tcGlsZXIpIHt9XG5cbiAgZ2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbihmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdHMuRGVmaW5pdGlvbkluZm9BbmRCb3VuZFNwYW5cbiAgICAgIHx1bmRlZmluZWQge1xuICAgIGNvbnN0IHRlbXBsYXRlSW5mbyA9IGdldFRlbXBsYXRlSW5mb0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uLCB0aGlzLmNvbXBpbGVyKTtcbiAgICBpZiAodGVtcGxhdGVJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFdlIHdlcmUgdW5hYmxlIHRvIGdldCBhIHRlbXBsYXRlIGF0IHRoZSBnaXZlbiBwb3NpdGlvbi4gSWYgd2UgYXJlIGluIGEgVFMgZmlsZSwgaW5zdGVhZFxuICAgICAgLy8gYXR0ZW1wdCB0byBnZXQgYW4gQW5ndWxhciBkZWZpbml0aW9uIGF0IHRoZSBsb2NhdGlvbiBpbnNpZGUgYSBUUyBmaWxlIChleGFtcGxlcyBvZiB0aGlzXG4gICAgICAvLyB3b3VsZCBiZSB0ZW1wbGF0ZVVybCBvciBhIHVybCBpbiBzdHlsZVVybHMpLlxuICAgICAgaWYgKCFpc1R5cGVTY3JpcHRGaWxlKGZpbGVOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RGVmaW5pdGlvbkZvckV4cHJlc3Npb25BdFBvc2l0aW9uKGZpbGVOYW1lLCBwb3NpdGlvbiwgdGhpcy5jb21waWxlcik7XG4gICAgfVxuICAgIGNvbnN0IGRlZmluaXRpb25NZXRhcyA9IHRoaXMuZ2V0RGVmaW5pdGlvbk1ldGFBdFBvc2l0aW9uKHRlbXBsYXRlSW5mbywgcG9zaXRpb24pO1xuICAgIGlmIChkZWZpbml0aW9uTWV0YXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZGVmaW5pdGlvbnM6IHRzLkRlZmluaXRpb25JbmZvW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRlZmluaXRpb25NZXRhIG9mIGRlZmluaXRpb25NZXRhcykge1xuICAgICAgLy8gVGhlIGAkZXZlbnRgIG9mIGV2ZW50IGhhbmRsZXJzIHdvdWxkIHBvaW50IHRvIHRoZSAkZXZlbnQgcGFyYW1ldGVyIGluIHRoZSBzaGltIGZpbGUsIGFzIGluXG4gICAgICAvLyBgX3QzW1wieFwiXS5zdWJzY3JpYmUoZnVuY3Rpb24gKCRldmVudCk6IGFueSB7ICRldmVudCB9KSA7YFxuICAgICAgLy8gSWYgd2Ugd2FudGVkIHRvIHJldHVybiBzb21ldGhpbmcgZm9yIHRoaXMsIGl0IHdvdWxkIGJlIG1vcmUgYXBwcm9wcmlhdGUgZm9yIHNvbWV0aGluZyBsaWtlXG4gICAgICAvLyBgZ2V0VHlwZURlZmluaXRpb25gLlxuICAgICAgaWYgKGlzRG9sbGFyRXZlbnQoZGVmaW5pdGlvbk1ldGEubm9kZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goXG4gICAgICAgICAgLi4uKHRoaXMuZ2V0RGVmaW5pdGlvbnNGb3JTeW1ib2woey4uLmRlZmluaXRpb25NZXRhLCAuLi50ZW1wbGF0ZUluZm99KSA/PyBbXSkpO1xuICAgIH1cblxuICAgIGlmIChkZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtkZWZpbml0aW9ucywgdGV4dFNwYW46IGdldFRleHRTcGFuT2ZOb2RlKGRlZmluaXRpb25NZXRhc1swXS5ub2RlKX07XG4gIH1cblxuICBwcml2YXRlIGdldERlZmluaXRpb25zRm9yU3ltYm9sKHtzeW1ib2wsIG5vZGUsIHBhcmVudCwgY29tcG9uZW50fTogRGVmaW5pdGlvbk1ldGEmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcGxhdGVJbmZvKTogcmVhZG9ubHkgdHMuRGVmaW5pdGlvbkluZm9bXXx1bmRlZmluZWQge1xuICAgIHN3aXRjaCAoc3ltYm9sLmtpbmQpIHtcbiAgICAgIGNhc2UgU3ltYm9sS2luZC5EaXJlY3RpdmU6XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuRWxlbWVudDpcbiAgICAgIGNhc2UgU3ltYm9sS2luZC5UZW1wbGF0ZTpcbiAgICAgIGNhc2UgU3ltYm9sS2luZC5Eb21CaW5kaW5nOlxuICAgICAgICAvLyBUaG91Z2ggaXQgaXMgZ2VuZXJhbGx5IG1vcmUgYXBwcm9wcmlhdGUgZm9yIHRoZSBhYm92ZSBzeW1ib2wgZGVmaW5pdGlvbnMgdG8gYmVcbiAgICAgICAgLy8gYXNzb2NpYXRlZCB3aXRoIFwidHlwZSBkZWZpbml0aW9uc1wiIHNpbmNlIHRoZSBsb2NhdGlvbiBpbiB0aGUgdGVtcGxhdGUgaXMgdGhlXG4gICAgICAgIC8vIGFjdHVhbCBkZWZpbml0aW9uIGxvY2F0aW9uLCB0aGUgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZSB3b3VsZCBiZSB0byBhbGxvd1xuICAgICAgICAvLyBMUyB1c2VycyB0byBcImdvIHRvIGRlZmluaXRpb25cIiBvbiBhbiBpdGVtIGluIHRoZSB0ZW1wbGF0ZSB0aGF0IG1hcHMgdG8gYSBjbGFzcyBhbmQgYmVcbiAgICAgICAgLy8gdGFrZW4gdG8gdGhlIGRpcmVjdGl2ZSBvciBIVE1MIGNsYXNzLlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUeXBlRGVmaW5pdGlvbnNGb3JUZW1wbGF0ZUluc3RhbmNlKHN5bWJvbCwgbm9kZSk7XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuUGlwZToge1xuICAgICAgICBpZiAoc3ltYm9sLnRzU3ltYm9sICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmaW5pdGlvbnNGb3JTeW1ib2xzKHN5bWJvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gYHRzLlN5bWJvbGAgZm9yIHRoZSBwaXBlIHRyYW5zZm9ybSwgd2Ugd2FudCB0byByZXR1cm4gdGhlXG4gICAgICAgICAgLy8gdHlwZSBkZWZpbml0aW9uICh0aGUgcGlwZSBjbGFzcykuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZURlZmluaXRpb25zRm9yU3ltYm9scyhzeW1ib2wuY2xhc3NTeW1ib2wpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuT3V0cHV0OlxuICAgICAgY2FzZSBTeW1ib2xLaW5kLklucHV0OiB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdEZWZzID0gdGhpcy5nZXREZWZpbml0aW9uc0ZvclN5bWJvbHMoLi4uc3ltYm9sLmJpbmRpbmdzKTtcbiAgICAgICAgLy8gQWxzbyBhdHRlbXB0IHRvIGdldCBkaXJlY3RpdmUgbWF0Y2hlcyBmb3IgdGhlIGlucHV0IG5hbWUuIElmIHRoZXJlIGlzIGEgZGlyZWN0aXZlIHRoYXRcbiAgICAgICAgLy8gaGFzIHRoZSBpbnB1dCBuYW1lIGFzIHBhcnQgb2YgdGhlIHNlbGVjdG9yLCB3ZSB3YW50IHRvIHJldHVybiB0aGF0IGFzIHdlbGwuXG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZURlZnMgPSB0aGlzLmdldERpcmVjdGl2ZVR5cGVEZWZzRm9yQmluZGluZ05vZGUobm9kZSwgcGFyZW50LCBjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gWy4uLmJpbmRpbmdEZWZzLCAuLi5kaXJlY3RpdmVEZWZzXTtcbiAgICAgIH1cbiAgICAgIGNhc2UgU3ltYm9sS2luZC5WYXJpYWJsZTpcbiAgICAgIGNhc2UgU3ltYm9sS2luZC5SZWZlcmVuY2U6IHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnM6IHRzLkRlZmluaXRpb25JbmZvW10gPSBbXTtcbiAgICAgICAgaWYgKHN5bWJvbC5kZWNsYXJhdGlvbiAhPT0gbm9kZSkge1xuICAgICAgICAgIGNvbnN0IHNoaW1Mb2NhdGlvbiA9IHN5bWJvbC5raW5kID09PSBTeW1ib2xLaW5kLlZhcmlhYmxlID8gc3ltYm9sLmxvY2FsVmFyTG9jYXRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLnJlZmVyZW5jZVZhckxvY2F0aW9uO1xuICAgICAgICAgIGNvbnN0IG1hcHBpbmcgPSBnZXRUZW1wbGF0ZUxvY2F0aW9uRnJvbVNoaW1Mb2NhdGlvbihcbiAgICAgICAgICAgICAgdGhpcy5jb21waWxlci5nZXRUZW1wbGF0ZVR5cGVDaGVja2VyKCksIHNoaW1Mb2NhdGlvbi5zaGltUGF0aCxcbiAgICAgICAgICAgICAgc2hpbUxvY2F0aW9uLnBvc2l0aW9uSW5TaGltRmlsZSk7XG4gICAgICAgICAgaWYgKG1hcHBpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb25zLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzeW1ib2wuZGVjbGFyYXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgY29udGFpbmVyTmFtZTogJycsXG4gICAgICAgICAgICAgIGNvbnRhaW5lcktpbmQ6IHRzLlNjcmlwdEVsZW1lbnRLaW5kLnVua25vd24sXG4gICAgICAgICAgICAgIGtpbmQ6IHRzLlNjcmlwdEVsZW1lbnRLaW5kLnZhcmlhYmxlRWxlbWVudCxcbiAgICAgICAgICAgICAgdGV4dFNwYW46IGdldFRleHRTcGFuT2ZOb2RlKHN5bWJvbC5kZWNsYXJhdGlvbiksXG4gICAgICAgICAgICAgIGNvbnRleHRTcGFuOiB0b1RleHRTcGFuKHN5bWJvbC5kZWNsYXJhdGlvbi5zb3VyY2VTcGFuKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IG1hcHBpbmcudGVtcGxhdGVVcmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN5bWJvbC5raW5kID09PSBTeW1ib2xLaW5kLlZhcmlhYmxlKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZpbml0aW9uc0ZvclN5bWJvbHMoe3NoaW1Mb2NhdGlvbjogc3ltYm9sLmluaXRpYWxpemVyTG9jYXRpb259KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgICAgfVxuICAgICAgY2FzZSBTeW1ib2xLaW5kLkV4cHJlc3Npb246IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmaW5pdGlvbnNGb3JTeW1ib2xzKHN5bWJvbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZpbml0aW9uc0ZvclN5bWJvbHMoLi4uc3ltYm9sczogSGFzU2hpbUxvY2F0aW9uW10pOiB0cy5EZWZpbml0aW9uSW5mb1tdIHtcbiAgICByZXR1cm4gZmxhdE1hcChzeW1ib2xzLCAoe3NoaW1Mb2NhdGlvbn0pID0+IHtcbiAgICAgIGNvbnN0IHtzaGltUGF0aCwgcG9zaXRpb25JblNoaW1GaWxlfSA9IHNoaW1Mb2NhdGlvbjtcbiAgICAgIHJldHVybiB0aGlzLnRzTFMuZ2V0RGVmaW5pdGlvbkF0UG9zaXRpb24oc2hpbVBhdGgsIHBvc2l0aW9uSW5TaGltRmlsZSkgPz8gW107XG4gICAgfSk7XG4gIH1cblxuICBnZXRUeXBlRGVmaW5pdGlvbnNBdFBvc2l0aW9uKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOlxuICAgICAgcmVhZG9ubHkgdHMuRGVmaW5pdGlvbkluZm9bXXx1bmRlZmluZWQge1xuICAgIGNvbnN0IHRlbXBsYXRlSW5mbyA9IGdldFRlbXBsYXRlSW5mb0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uLCB0aGlzLmNvbXBpbGVyKTtcbiAgICBpZiAodGVtcGxhdGVJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGVmaW5pdGlvbk1ldGFzID0gdGhpcy5nZXREZWZpbml0aW9uTWV0YUF0UG9zaXRpb24odGVtcGxhdGVJbmZvLCBwb3NpdGlvbik7XG4gICAgaWYgKGRlZmluaXRpb25NZXRhcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmluaXRpb25zOiB0cy5EZWZpbml0aW9uSW5mb1tdID0gW107XG4gICAgZm9yIChjb25zdCB7c3ltYm9sLCBub2RlLCBwYXJlbnR9IG9mIGRlZmluaXRpb25NZXRhcykge1xuICAgICAgc3dpdGNoIChzeW1ib2wua2luZCkge1xuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuRGlyZWN0aXZlOlxuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuRG9tQmluZGluZzpcbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLkVsZW1lbnQ6XG4gICAgICAgIGNhc2UgU3ltYm9sS2luZC5UZW1wbGF0ZTpcbiAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKC4uLnRoaXMuZ2V0VHlwZURlZmluaXRpb25zRm9yVGVtcGxhdGVJbnN0YW5jZShzeW1ib2wsIG5vZGUpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLk91dHB1dDpcbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLklucHV0OiB7XG4gICAgICAgICAgY29uc3QgYmluZGluZ0RlZnMgPSB0aGlzLmdldFR5cGVEZWZpbml0aW9uc0ZvclN5bWJvbHMoLi4uc3ltYm9sLmJpbmRpbmdzKTtcbiAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKC4uLmJpbmRpbmdEZWZzKTtcbiAgICAgICAgICAvLyBBbHNvIGF0dGVtcHQgdG8gZ2V0IGRpcmVjdGl2ZSBtYXRjaGVzIGZvciB0aGUgaW5wdXQgbmFtZS4gSWYgdGhlcmUgaXMgYSBkaXJlY3RpdmUgdGhhdFxuICAgICAgICAgIC8vIGhhcyB0aGUgaW5wdXQgbmFtZSBhcyBwYXJ0IG9mIHRoZSBzZWxlY3Rvciwgd2Ugd2FudCB0byByZXR1cm4gdGhhdCBhcyB3ZWxsLlxuICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZURlZnMgPVxuICAgICAgICAgICAgICB0aGlzLmdldERpcmVjdGl2ZVR5cGVEZWZzRm9yQmluZGluZ05vZGUobm9kZSwgcGFyZW50LCB0ZW1wbGF0ZUluZm8uY29tcG9uZW50KTtcbiAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKC4uLmRpcmVjdGl2ZURlZnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU3ltYm9sS2luZC5QaXBlOiB7XG4gICAgICAgICAgaWYgKHN5bWJvbC50c1N5bWJvbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGVmaW5pdGlvbnMucHVzaCguLi50aGlzLmdldFR5cGVEZWZpbml0aW9uc0ZvclN5bWJvbHMoc3ltYm9sKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGB0cy5TeW1ib2xgIGZvciB0aGUgcGlwZSB0cmFuc2Zvcm0sIHdlIHdhbnQgdG8gcmV0dXJuIHRoZVxuICAgICAgICAgICAgLy8gdHlwZSBkZWZpbml0aW9uICh0aGUgcGlwZSBjbGFzcykuXG4gICAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKC4uLnRoaXMuZ2V0VHlwZURlZmluaXRpb25zRm9yU3ltYm9scyhzeW1ib2wuY2xhc3NTeW1ib2wpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLlJlZmVyZW5jZTpcbiAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAuLi50aGlzLmdldFR5cGVEZWZpbml0aW9uc0ZvclN5bWJvbHMoe3NoaW1Mb2NhdGlvbjogc3ltYm9sLnRhcmdldExvY2F0aW9ufSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuRXhwcmVzc2lvbjpcbiAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKC4uLnRoaXMuZ2V0VHlwZURlZmluaXRpb25zRm9yU3ltYm9scyhzeW1ib2wpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLlZhcmlhYmxlOiB7XG4gICAgICAgICAgZGVmaW5pdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgLi4udGhpcy5nZXRUeXBlRGVmaW5pdGlvbnNGb3JTeW1ib2xzKHtzaGltTG9jYXRpb246IHN5bWJvbC5pbml0aWFsaXplckxvY2F0aW9ufSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUeXBlRGVmaW5pdGlvbnNGb3JUZW1wbGF0ZUluc3RhbmNlKFxuICAgICAgc3ltYm9sOiBUZW1wbGF0ZVN5bWJvbHxFbGVtZW50U3ltYm9sfERvbUJpbmRpbmdTeW1ib2x8RGlyZWN0aXZlU3ltYm9sLFxuICAgICAgbm9kZTogQVNUfFRtcGxBc3ROb2RlKTogdHMuRGVmaW5pdGlvbkluZm9bXSB7XG4gICAgc3dpdGNoIChzeW1ib2wua2luZCkge1xuICAgICAgY2FzZSBTeW1ib2xLaW5kLlRlbXBsYXRlOiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBnZXREaXJlY3RpdmVNYXRjaGVzRm9yRWxlbWVudFRhZyhzeW1ib2wudGVtcGxhdGVOb2RlLCBzeW1ib2wuZGlyZWN0aXZlcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVEZWZpbml0aW9uc0ZvclN5bWJvbHMoLi4ubWF0Y2hlcyk7XG4gICAgICB9XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuRWxlbWVudDoge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gZ2V0RGlyZWN0aXZlTWF0Y2hlc0ZvckVsZW1lbnRUYWcoc3ltYm9sLnRlbXBsYXRlTm9kZSwgc3ltYm9sLmRpcmVjdGl2ZXMpO1xuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIGRpcmVjdGl2ZSBtYXRjaGVzIGlzIGEgY29tcG9uZW50LCB3ZSBzaG91bGQgbm90IGluY2x1ZGUgdGhlIG5hdGl2ZSBlbGVtZW50XG4gICAgICAgIC8vIGluIHRoZSByZXN1bHRzIGJlY2F1c2UgaXQgaXMgcmVwbGFjZWQgYnkgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obWF0Y2hlcykuc29tZShkaXIgPT4gZGlyLmlzQ29tcG9uZW50KSA/XG4gICAgICAgICAgICB0aGlzLmdldFR5cGVEZWZpbml0aW9uc0ZvclN5bWJvbHMoLi4ubWF0Y2hlcykgOlxuICAgICAgICAgICAgdGhpcy5nZXRUeXBlRGVmaW5pdGlvbnNGb3JTeW1ib2xzKC4uLm1hdGNoZXMsIHN5bWJvbCk7XG4gICAgICB9XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuRG9tQmluZGluZzoge1xuICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgVG1wbEFzdFRleHRBdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpcnMgPSBnZXREaXJlY3RpdmVNYXRjaGVzRm9yQXR0cmlidXRlKFxuICAgICAgICAgICAgbm9kZS5uYW1lLCBzeW1ib2wuaG9zdC50ZW1wbGF0ZU5vZGUsIHN5bWJvbC5ob3N0LmRpcmVjdGl2ZXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUeXBlRGVmaW5pdGlvbnNGb3JTeW1ib2xzKC4uLmRpcnMpO1xuICAgICAgfVxuICAgICAgY2FzZSBTeW1ib2xLaW5kLkRpcmVjdGl2ZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZURlZmluaXRpb25zRm9yU3ltYm9scyhzeW1ib2wpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGlyZWN0aXZlVHlwZURlZnNGb3JCaW5kaW5nTm9kZShcbiAgICAgIG5vZGU6IFRtcGxBc3ROb2RlfEFTVCwgcGFyZW50OiBUbXBsQXN0Tm9kZXxBU1R8bnVsbCwgY29tcG9uZW50OiB0cy5DbGFzc0RlY2xhcmF0aW9uKSB7XG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RCb3VuZEF0dHJpYnV0ZSkgJiYgIShub2RlIGluc3RhbmNlb2YgVG1wbEFzdFRleHRBdHRyaWJ1dGUpICYmXG4gICAgICAgICEobm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RCb3VuZEV2ZW50KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAocGFyZW50ID09PSBudWxsIHx8XG4gICAgICAgICEocGFyZW50IGluc3RhbmNlb2YgVG1wbEFzdFRlbXBsYXRlIHx8IHBhcmVudCBpbnN0YW5jZW9mIFRtcGxBc3RFbGVtZW50KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wbGF0ZU9yRWxlbWVudFN5bWJvbCA9XG4gICAgICAgIHRoaXMuY29tcGlsZXIuZ2V0VGVtcGxhdGVUeXBlQ2hlY2tlcigpLmdldFN5bWJvbE9mTm9kZShwYXJlbnQsIGNvbXBvbmVudCk7XG4gICAgaWYgKHRlbXBsYXRlT3JFbGVtZW50U3ltYm9sID09PSBudWxsIHx8XG4gICAgICAgICh0ZW1wbGF0ZU9yRWxlbWVudFN5bWJvbC5raW5kICE9PSBTeW1ib2xLaW5kLlRlbXBsYXRlICYmXG4gICAgICAgICB0ZW1wbGF0ZU9yRWxlbWVudFN5bWJvbC5raW5kICE9PSBTeW1ib2xLaW5kLkVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGRpcnMgPVxuICAgICAgICBnZXREaXJlY3RpdmVNYXRjaGVzRm9yQXR0cmlidXRlKG5vZGUubmFtZSwgcGFyZW50LCB0ZW1wbGF0ZU9yRWxlbWVudFN5bWJvbC5kaXJlY3RpdmVzKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUeXBlRGVmaW5pdGlvbnNGb3JTeW1ib2xzKC4uLmRpcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUeXBlRGVmaW5pdGlvbnNGb3JTeW1ib2xzKC4uLnN5bWJvbHM6IEhhc1NoaW1Mb2NhdGlvbltdKTogdHMuRGVmaW5pdGlvbkluZm9bXSB7XG4gICAgcmV0dXJuIGZsYXRNYXAoc3ltYm9scywgKHtzaGltTG9jYXRpb259KSA9PiB7XG4gICAgICBjb25zdCB7c2hpbVBhdGgsIHBvc2l0aW9uSW5TaGltRmlsZX0gPSBzaGltTG9jYXRpb247XG4gICAgICByZXR1cm4gdGhpcy50c0xTLmdldFR5cGVEZWZpbml0aW9uQXRQb3NpdGlvbihzaGltUGF0aCwgcG9zaXRpb25JblNoaW1GaWxlKSA/PyBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5pdGlvbk1ldGFBdFBvc2l0aW9uKHt0ZW1wbGF0ZSwgY29tcG9uZW50fTogVGVtcGxhdGVJbmZvLCBwb3NpdGlvbjogbnVtYmVyKTpcbiAgICAgIERlZmluaXRpb25NZXRhW118dW5kZWZpbmVkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXRBdFBvc2l0aW9uKHRlbXBsYXRlLCBwb3NpdGlvbik7XG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qge2NvbnRleHQsIHBhcmVudH0gPSB0YXJnZXQ7XG5cbiAgICBjb25zdCBub2RlcyA9XG4gICAgICAgIGNvbnRleHQua2luZCA9PT0gVGFyZ2V0Tm9kZUtpbmQuVHdvV2F5QmluZGluZ0NvbnRleHQgPyBjb250ZXh0Lm5vZGVzIDogW2NvbnRleHQubm9kZV07XG5cblxuICAgIGNvbnN0IGRlZmluaXRpb25NZXRhczogRGVmaW5pdGlvbk1ldGFbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgY29uc3Qgc3ltYm9sID0gdGhpcy5jb21waWxlci5nZXRUZW1wbGF0ZVR5cGVDaGVja2VyKCkuZ2V0U3ltYm9sT2ZOb2RlKG5vZGUsIGNvbXBvbmVudCk7XG4gICAgICBpZiAoc3ltYm9sID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZGVmaW5pdGlvbk1ldGFzLnB1c2goe25vZGUsIHBhcmVudCwgc3ltYm9sfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWZpbml0aW9uTWV0YXMubGVuZ3RoID4gMCA/IGRlZmluaXRpb25NZXRhcyA6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgYW4gQW5ndWxhci1zcGVjaWZpYyBkZWZpbml0aW9uIGluIGEgVHlwZVNjcmlwdCBzb3VyY2UgZmlsZS5cbiAqL1xuZnVuY3Rpb24gZ2V0RGVmaW5pdGlvbkZvckV4cHJlc3Npb25BdFBvc2l0aW9uKFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIsIGNvbXBpbGVyOiBOZ0NvbXBpbGVyKTogdHMuRGVmaW5pdGlvbkluZm9BbmRCb3VuZFNwYW58XG4gICAgdW5kZWZpbmVkIHtcbiAgY29uc3Qgc2YgPSBjb21waWxlci5nZXROZXh0UHJvZ3JhbSgpLmdldFNvdXJjZUZpbGUoZmlsZU5hbWUpO1xuICBpZiAoc2YgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBmaW5kVGlnaHRlc3ROb2RlKHNmLCBwb3NpdGlvbik7XG4gIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY2xhc3NEZWNsYXJhdGlvbiA9IGdldFBhcmVudENsYXNzRGVjbGFyYXRpb24oZXhwcmVzc2lvbik7XG4gIGlmIChjbGFzc0RlY2xhcmF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50UmVzb3VyY2VzID0gY29tcGlsZXIuZ2V0Q29tcG9uZW50UmVzb3VyY2VzKGNsYXNzRGVjbGFyYXRpb24pO1xuICBpZiAoY29tcG9uZW50UmVzb3VyY2VzID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYWxsUmVzb3VyY2VzID0gWy4uLmNvbXBvbmVudFJlc291cmNlcy5zdHlsZXMsIGNvbXBvbmVudFJlc291cmNlcy50ZW1wbGF0ZV07XG5cbiAgY29uc3QgcmVzb3VyY2VGb3JFeHByZXNzaW9uID0gYWxsUmVzb3VyY2VzLmZpbmQocmVzb3VyY2UgPT4gcmVzb3VyY2UuZXhwcmVzc2lvbiA9PT0gZXhwcmVzc2lvbik7XG4gIGlmIChyZXNvdXJjZUZvckV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCB8fCAhaXNFeHRlcm5hbFJlc291cmNlKHJlc291cmNlRm9yRXhwcmVzc2lvbikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZURlZmluaXRpb25zOiB0cy5EZWZpbml0aW9uSW5mb1tdID0gW3tcbiAgICBraW5kOiB0cy5TY3JpcHRFbGVtZW50S2luZC5leHRlcm5hbE1vZHVsZU5hbWUsXG4gICAgbmFtZTogcmVzb3VyY2VGb3JFeHByZXNzaW9uLnBhdGgsXG4gICAgY29udGFpbmVyS2luZDogdHMuU2NyaXB0RWxlbWVudEtpbmQudW5rbm93bixcbiAgICBjb250YWluZXJOYW1lOiAnJyxcbiAgICAvLyBSZWFkaW5nIHRoZSB0ZW1wbGF0ZSBpcyBleHBlbnNpdmUsIHNvIGRvbid0IHByb3ZpZGUgYSBwcmV2aWV3LlxuICAgIC8vIFRPRE8oYXlhemhhZml6KTogQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFjdHVhbCBzcGFuOlxuICAgIC8vICAxLiBXZSdyZSBsaWtlbHkgdG8gcmVhZCB0aGUgdGVtcGxhdGUgYW55d2F5XG4gICAgLy8gIDIuIFdlIGNvdWxkIHNob3cganVzdCB0aGUgZmlyc3QgMTAwIGNoYXJzIG9yIHNvXG4gICAgdGV4dFNwYW46IHtzdGFydDogMCwgbGVuZ3RoOiAwfSxcbiAgICBmaWxlTmFtZTogcmVzb3VyY2VGb3JFeHByZXNzaW9uLnBhdGgsXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgZGVmaW5pdGlvbnM6IHRlbXBsYXRlRGVmaW5pdGlvbnMsXG4gICAgdGV4dFNwYW46IHtcbiAgICAgIC8vIEV4Y2x1ZGUgb3BlbmluZyBhbmQgY2xvc2luZyBxdW90ZXMgaW4gdGhlIHVybCBzcGFuLlxuICAgICAgc3RhcnQ6IGV4cHJlc3Npb24uZ2V0U3RhcnQoKSArIDEsXG4gICAgICBsZW5ndGg6IGV4cHJlc3Npb24uZ2V0V2lkdGgoKSAtIDIsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==