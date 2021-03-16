(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/ivy/references", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/typecheck/api", "@angular/compiler-cli/src/ngtsc/typecheck/src/comments", "typescript", "@angular/language-service/ivy/template_target", "@angular/language-service/ivy/ts_utils", "@angular/language-service/ivy/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReferencesAndRenameBuilder = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var api_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/api");
    var comments_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/comments");
    var ts = require("typescript");
    var template_target_1 = require("@angular/language-service/ivy/template_target");
    var ts_utils_1 = require("@angular/language-service/ivy/ts_utils");
    var utils_1 = require("@angular/language-service/ivy/utils");
    function toFilePosition(shimLocation) {
        return { fileName: shimLocation.shimPath, position: shimLocation.positionInShimFile };
    }
    var RequestKind;
    (function (RequestKind) {
        RequestKind[RequestKind["Template"] = 0] = "Template";
        RequestKind[RequestKind["TypeScript"] = 1] = "TypeScript";
    })(RequestKind || (RequestKind = {}));
    var ReferencesAndRenameBuilder = /** @class */ (function () {
        function ReferencesAndRenameBuilder(strategy, tsLS, compiler) {
            this.strategy = strategy;
            this.tsLS = tsLS;
            this.compiler = compiler;
            this.ttc = this.compiler.getTemplateTypeChecker();
        }
        ReferencesAndRenameBuilder.prototype.getRenameInfo = function (filePath, position) {
            var templateInfo = utils_1.getTemplateInfoAtPosition(filePath, position, this.compiler);
            // We could not get a template at position so we assume the request came from outside the
            // template.
            if (templateInfo === undefined) {
                return this.tsLS.getRenameInfo(filePath, position);
            }
            var allTargetDetails = this.getTargetDetailsAtTemplatePosition(templateInfo, position);
            if (allTargetDetails === null) {
                return { canRename: false, localizedErrorMessage: 'Could not find template node at position.' };
            }
            var templateTarget = allTargetDetails[0].templateTarget;
            var templateTextAndSpan = getRenameTextAndSpanAtPosition(templateTarget, position);
            if (templateTextAndSpan === null) {
                return { canRename: false, localizedErrorMessage: 'Could not determine template node text.' };
            }
            var text = templateTextAndSpan.text, span = templateTextAndSpan.span;
            return {
                canRename: true,
                displayName: text,
                fullDisplayName: text,
                triggerSpan: span,
            };
        };
        ReferencesAndRenameBuilder.prototype.findRenameLocations = function (filePath, position) {
            this.ttc.generateAllTypeCheckBlocks();
            var templateInfo = utils_1.getTemplateInfoAtPosition(filePath, position, this.compiler);
            // We could not get a template at position so we assume the request came from outside the
            // template.
            if (templateInfo === undefined) {
                var requestNode = this.getTsNodeAtPosition(filePath, position);
                if (requestNode === null) {
                    return undefined;
                }
                var requestOrigin = { kind: RequestKind.TypeScript, requestNode: requestNode };
                return this.findRenameLocationsAtTypescriptPosition(filePath, position, requestOrigin);
            }
            return this.findRenameLocationsAtTemplatePosition(templateInfo, position);
        };
        ReferencesAndRenameBuilder.prototype.findRenameLocationsAtTemplatePosition = function (templateInfo, position) {
            var e_1, _a, e_2, _b;
            var allTargetDetails = this.getTargetDetailsAtTemplatePosition(templateInfo, position);
            if (allTargetDetails === null) {
                return undefined;
            }
            var allRenameLocations = [];
            try {
                for (var allTargetDetails_1 = tslib_1.__values(allTargetDetails), allTargetDetails_1_1 = allTargetDetails_1.next(); !allTargetDetails_1_1.done; allTargetDetails_1_1 = allTargetDetails_1.next()) {
                    var targetDetails = allTargetDetails_1_1.value;
                    var requestOrigin = {
                        kind: RequestKind.Template,
                        requestNode: targetDetails.templateTarget,
                        position: position,
                    };
                    try {
                        for (var _c = (e_2 = void 0, tslib_1.__values(targetDetails.typescriptLocations)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var location_1 = _d.value;
                            var locations = this.findRenameLocationsAtTypescriptPosition(location_1.fileName, location_1.position, requestOrigin);
                            // If we couldn't find rename locations for _any_ result, we should not allow renaming to
                            // proceed instead of having a partially complete rename.
                            if (locations === undefined) {
                                return undefined;
                            }
                            allRenameLocations.push.apply(allRenameLocations, tslib_1.__spread(locations));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (allTargetDetails_1_1 && !allTargetDetails_1_1.done && (_a = allTargetDetails_1.return)) _a.call(allTargetDetails_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return allRenameLocations.length > 0 ? allRenameLocations : undefined;
        };
        ReferencesAndRenameBuilder.prototype.getTsNodeAtPosition = function (filePath, position) {
            var _a;
            var sf = this.strategy.getProgram().getSourceFile(filePath);
            if (!sf) {
                return null;
            }
            return (_a = ts_utils_1.findTightestNode(sf, position)) !== null && _a !== void 0 ? _a : null;
        };
        ReferencesAndRenameBuilder.prototype.findRenameLocationsAtTypescriptPosition = function (filePath, position, requestOrigin) {
            var e_3, _a;
            var originalNodeText;
            if (requestOrigin.kind === RequestKind.TypeScript) {
                originalNodeText = requestOrigin.requestNode.getText();
            }
            else {
                var templateNodeText = getRenameTextAndSpanAtPosition(requestOrigin.requestNode, requestOrigin.position);
                if (templateNodeText === null) {
                    return undefined;
                }
                originalNodeText = templateNodeText.text;
            }
            var locations = this.tsLS.findRenameLocations(filePath, position, /*findInStrings*/ false, /*findInComments*/ false);
            if (locations === undefined) {
                return undefined;
            }
            var entries = new Map();
            try {
                for (var locations_1 = tslib_1.__values(locations), locations_1_1 = locations_1.next(); !locations_1_1.done; locations_1_1 = locations_1.next()) {
                    var location_2 = locations_1_1.value;
                    // TODO(atscott): Determine if a file is a shim file in a more robust way and make the API
                    // available in an appropriate location.
                    if (this.ttc.isTrackedTypeCheckFile(file_system_1.absoluteFrom(location_2.fileName))) {
                        var entry = this.convertToTemplateDocumentSpan(location_2, this.ttc, originalNodeText);
                        // There is no template node whose text matches the original rename request. Bail on
                        // renaming completely rather than providing incomplete results.
                        if (entry === null) {
                            return undefined;
                        }
                        entries.set(createLocationKey(entry), entry);
                    }
                    else {
                        // Ensure we only allow renaming a TS result with matching text
                        var refNode = this.getTsNodeAtPosition(location_2.fileName, location_2.textSpan.start);
                        if (refNode === null || refNode.getText() !== originalNodeText) {
                            return undefined;
                        }
                        entries.set(createLocationKey(location_2), location_2);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (locations_1_1 && !locations_1_1.done && (_a = locations_1.return)) _a.call(locations_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return Array.from(entries.values());
        };
        ReferencesAndRenameBuilder.prototype.getReferencesAtPosition = function (filePath, position) {
            this.ttc.generateAllTypeCheckBlocks();
            var templateInfo = utils_1.getTemplateInfoAtPosition(filePath, position, this.compiler);
            if (templateInfo === undefined) {
                return this.getReferencesAtTypescriptPosition(filePath, position);
            }
            return this.getReferencesAtTemplatePosition(templateInfo, position);
        };
        ReferencesAndRenameBuilder.prototype.getReferencesAtTemplatePosition = function (templateInfo, position) {
            var e_4, _a, e_5, _b;
            var allTargetDetails = this.getTargetDetailsAtTemplatePosition(templateInfo, position);
            if (allTargetDetails === null) {
                return undefined;
            }
            var allReferences = [];
            try {
                for (var allTargetDetails_2 = tslib_1.__values(allTargetDetails), allTargetDetails_2_1 = allTargetDetails_2.next(); !allTargetDetails_2_1.done; allTargetDetails_2_1 = allTargetDetails_2.next()) {
                    var targetDetails = allTargetDetails_2_1.value;
                    try {
                        for (var _c = (e_5 = void 0, tslib_1.__values(targetDetails.typescriptLocations)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var location_3 = _d.value;
                            var refs = this.getReferencesAtTypescriptPosition(location_3.fileName, location_3.position);
                            if (refs !== undefined) {
                                allReferences.push.apply(allReferences, tslib_1.__spread(refs));
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (allTargetDetails_2_1 && !allTargetDetails_2_1.done && (_a = allTargetDetails_2.return)) _a.call(allTargetDetails_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return allReferences.length > 0 ? allReferences : undefined;
        };
        ReferencesAndRenameBuilder.prototype.getTargetDetailsAtTemplatePosition = function (_a, position) {
            var e_6, _b;
            var template = _a.template, component = _a.component;
            // Find the AST node in the template at the position.
            var positionDetails = template_target_1.getTargetAtPosition(template, position);
            if (positionDetails === null) {
                return null;
            }
            var nodes = positionDetails.context.kind === template_target_1.TargetNodeKind.TwoWayBindingContext ?
                positionDetails.context.nodes :
                [positionDetails.context.node];
            var details = [];
            try {
                for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                    var node = nodes_1_1.value;
                    // Get the information about the TCB at the template position.
                    var symbol = this.ttc.getSymbolOfNode(node, component);
                    if (symbol === null) {
                        continue;
                    }
                    var templateTarget = node;
                    switch (symbol.kind) {
                        case api_1.SymbolKind.Directive:
                        case api_1.SymbolKind.Template:
                            // References to elements, templates, and directives will be through template references
                            // (#ref). They shouldn't be used directly for a Language Service reference request.
                            break;
                        case api_1.SymbolKind.Element: {
                            var matches = utils_1.getDirectiveMatchesForElementTag(symbol.templateNode, symbol.directives);
                            details.push({ typescriptLocations: this.getPositionsForDirectives(matches), templateTarget: templateTarget });
                            break;
                        }
                        case api_1.SymbolKind.DomBinding: {
                            // Dom bindings aren't currently type-checked (see `checkTypeOfDomBindings`) so they don't
                            // have a shim location. This means we can't match dom bindings to their lib.dom
                            // reference, but we can still see if they match to a directive.
                            if (!(node instanceof compiler_1.TmplAstTextAttribute) && !(node instanceof compiler_1.TmplAstBoundAttribute)) {
                                return null;
                            }
                            var directives = utils_1.getDirectiveMatchesForAttribute(node.name, symbol.host.templateNode, symbol.host.directives);
                            details.push({
                                typescriptLocations: this.getPositionsForDirectives(directives),
                                templateTarget: templateTarget,
                            });
                            break;
                        }
                        case api_1.SymbolKind.Reference: {
                            details.push({
                                typescriptLocations: [toFilePosition(symbol.referenceVarLocation)],
                                templateTarget: templateTarget,
                            });
                            break;
                        }
                        case api_1.SymbolKind.Variable: {
                            if ((templateTarget instanceof compiler_1.TmplAstVariable)) {
                                if (templateTarget.valueSpan !== undefined &&
                                    utils_1.isWithin(position, templateTarget.valueSpan)) {
                                    // In the valueSpan of the variable, we want to get the reference of the initializer.
                                    details.push({
                                        typescriptLocations: [toFilePosition(symbol.initializerLocation)],
                                        templateTarget: templateTarget,
                                    });
                                }
                                else if (utils_1.isWithin(position, templateTarget.keySpan)) {
                                    // In the keySpan of the variable, we want to get the reference of the local variable.
                                    details.push({
                                        typescriptLocations: [toFilePosition(symbol.localVarLocation)],
                                        templateTarget: templateTarget,
                                    });
                                }
                            }
                            else {
                                // If the templateNode is not the `TmplAstVariable`, it must be a usage of the
                                // variable somewhere in the template.
                                details.push({
                                    typescriptLocations: [toFilePosition(symbol.localVarLocation)],
                                    templateTarget: templateTarget,
                                });
                            }
                            break;
                        }
                        case api_1.SymbolKind.Input:
                        case api_1.SymbolKind.Output: {
                            details.push({
                                typescriptLocations: symbol.bindings.map(function (binding) { return toFilePosition(binding.shimLocation); }),
                                templateTarget: templateTarget,
                            });
                            break;
                        }
                        case api_1.SymbolKind.Pipe:
                        case api_1.SymbolKind.Expression: {
                            details.push({ typescriptLocations: [toFilePosition(symbol.shimLocation)], templateTarget: templateTarget });
                            break;
                        }
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (nodes_1_1 && !nodes_1_1.done && (_b = nodes_1.return)) _b.call(nodes_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return details.length > 0 ? details : null;
        };
        ReferencesAndRenameBuilder.prototype.getPositionsForDirectives = function (directives) {
            var e_7, _a;
            var allDirectives = [];
            try {
                for (var _b = tslib_1.__values(directives.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dir = _c.value;
                    var dirClass = dir.tsSymbol.valueDeclaration;
                    if (dirClass === undefined || !ts.isClassDeclaration(dirClass) ||
                        dirClass.name === undefined) {
                        continue;
                    }
                    var fileName = dirClass.getSourceFile().fileName;
                    var position = dirClass.name.getStart();
                    allDirectives.push({ fileName: fileName, position: position });
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return allDirectives;
        };
        ReferencesAndRenameBuilder.prototype.getReferencesAtTypescriptPosition = function (fileName, position) {
            var e_8, _a;
            var refs = this.tsLS.getReferencesAtPosition(fileName, position);
            if (refs === undefined) {
                return undefined;
            }
            var entries = new Map();
            try {
                for (var refs_1 = tslib_1.__values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                    var ref = refs_1_1.value;
                    if (this.ttc.isTrackedTypeCheckFile(file_system_1.absoluteFrom(ref.fileName))) {
                        var entry = this.convertToTemplateDocumentSpan(ref, this.ttc);
                        if (entry !== null) {
                            entries.set(createLocationKey(entry), entry);
                        }
                    }
                    else {
                        // TODO(atscott): uncomment when VSCode deduplicates results on their end
                        // https://github.com/microsoft/vscode/issues/117095
                        // entries.set(createLocationKey(ref), ref);
                    }
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (refs_1_1 && !refs_1_1.done && (_a = refs_1.return)) _a.call(refs_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
            return Array.from(entries.values());
        };
        ReferencesAndRenameBuilder.prototype.convertToTemplateDocumentSpan = function (shimDocumentSpan, templateTypeChecker, requiredNodeText) {
            var sf = this.strategy.getProgram().getSourceFile(shimDocumentSpan.fileName);
            if (sf === undefined) {
                return null;
            }
            var tcbNode = ts_utils_1.findTightestNode(sf, shimDocumentSpan.textSpan.start);
            if (tcbNode === undefined ||
                comments_1.hasExpressionIdentifier(sf, tcbNode, comments_1.ExpressionIdentifier.EVENT_PARAMETER)) {
                // If the reference result is the $event parameter in the subscribe/addEventListener
                // function in the TCB, we want to filter this result out of the references. We really only
                // want to return references to the parameter in the template itself.
                return null;
            }
            // TODO(atscott): Determine how to consistently resolve paths. i.e. with the project
            // serverHost or LSParseConfigHost in the adapter. We should have a better defined way to
            // normalize paths.
            var mapping = utils_1.getTemplateLocationFromShimLocation(templateTypeChecker, file_system_1.absoluteFrom(shimDocumentSpan.fileName), shimDocumentSpan.textSpan.start);
            if (mapping === null) {
                return null;
            }
            var span = mapping.span, templateUrl = mapping.templateUrl;
            if (requiredNodeText !== undefined && span.toString() !== requiredNodeText) {
                return null;
            }
            return tslib_1.__assign(tslib_1.__assign({}, shimDocumentSpan), { fileName: templateUrl, textSpan: utils_1.toTextSpan(span), 
                // Specifically clear other text span values because we do not have enough knowledge to
                // convert these to spans in the template.
                contextSpan: undefined, originalContextSpan: undefined, originalTextSpan: undefined });
        };
        return ReferencesAndRenameBuilder;
    }());
    exports.ReferencesAndRenameBuilder = ReferencesAndRenameBuilder;
    function getRenameTextAndSpanAtPosition(node, position) {
        if (node instanceof compiler_1.TmplAstBoundAttribute || node instanceof compiler_1.TmplAstTextAttribute ||
            node instanceof compiler_1.TmplAstBoundEvent) {
            if (node.keySpan === undefined) {
                return null;
            }
            return { text: node.name, span: utils_1.toTextSpan(node.keySpan) };
        }
        else if (node instanceof compiler_1.TmplAstVariable || node instanceof compiler_1.TmplAstReference) {
            if (utils_1.isWithin(position, node.keySpan)) {
                return { text: node.keySpan.toString(), span: utils_1.toTextSpan(node.keySpan) };
            }
            else if (node.valueSpan && utils_1.isWithin(position, node.valueSpan)) {
                return { text: node.valueSpan.toString(), span: utils_1.toTextSpan(node.valueSpan) };
            }
        }
        if (node instanceof compiler_1.BindingPipe) {
            // TODO(atscott): Add support for renaming pipes
            return null;
        }
        if (node instanceof compiler_1.PropertyRead || node instanceof compiler_1.MethodCall || node instanceof compiler_1.PropertyWrite ||
            node instanceof compiler_1.SafePropertyRead || node instanceof compiler_1.SafeMethodCall) {
            return { text: node.name, span: utils_1.toTextSpan(node.nameSpan) };
        }
        else if (node instanceof compiler_1.LiteralPrimitive) {
            var span = utils_1.toTextSpan(node.sourceSpan);
            var text = node.value;
            if (typeof text === 'string') {
                // The span of a string literal includes the quotes but they should be removed for renaming.
                span.start += 1;
                span.length -= 2;
            }
            return { text: text, span: span };
        }
        return null;
    }
    /**
     * Creates a "key" for a rename/reference location by concatenating file name, span start, and span
     * length. This allows us to de-duplicate template results when an item may appear several times
     * in the TCB but map back to the same template location.
     */
    function createLocationKey(ds) {
        return ds.fileName + ds.textSpan.start + ds.textSpan.length;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2UvaXZ5L3JlZmVyZW5jZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDhDQUFxUztJQUVyUywyRUFBaUg7SUFDakgscUVBQTBKO0lBQzFKLG1GQUFxSDtJQUNySCwrQkFBaUM7SUFFakMsaUZBQXNFO0lBQ3RFLG1FQUE0QztJQUM1Qyw2REFBOEw7SUFPOUwsU0FBUyxjQUFjLENBQUMsWUFBMEI7UUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsa0JBQWtCLEVBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsSUFBSyxXQUdKO0lBSEQsV0FBSyxXQUFXO1FBQ2QscURBQVEsQ0FBQTtRQUNSLHlEQUFVLENBQUE7SUFDWixDQUFDLEVBSEksV0FBVyxLQUFYLFdBQVcsUUFHZjtJQTZCRDtRQUdFLG9DQUNxQixRQUFxQyxFQUNyQyxJQUF3QixFQUFtQixRQUFvQjtZQUQvRCxhQUFRLEdBQVIsUUFBUSxDQUE2QjtZQUNyQyxTQUFJLEdBQUosSUFBSSxDQUFvQjtZQUFtQixhQUFRLEdBQVIsUUFBUSxDQUFZO1lBSm5FLFFBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFJeUIsQ0FBQztRQUV4RixrREFBYSxHQUFiLFVBQWMsUUFBZ0IsRUFBRSxRQUFnQjtZQUU5QyxJQUFNLFlBQVksR0FBRyxpQ0FBeUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRix5RkFBeUY7WUFDekYsWUFBWTtZQUNaLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEs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QVksMkJBQWdCLElBQUksSUFBSSxZQUFZLHlCQUFjLEVBQUU7WUFDdEUsT0FBTyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxrQkFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO1NBQzNEO2FBQU0sSUFBSSxJQUFJLFlBQVksMkJBQWdCLEVBQUU7WUFDM0MsSUFBTSxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsNEZBQTRGO2dCQUM1RixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLEVBQUMsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQztTQUNyQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCxTQUFTLGlCQUFpQixDQUFDLEVBQW1CO1FBQzVDLE9BQU8sRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlU291cmNlU3BhbiwgQVNULCBCaW5kaW5nUGlwZSwgTGl0ZXJhbFByaW1pdGl2ZSwgTWV0aG9kQ2FsbCwgUGFyc2VTb3VyY2VTcGFuLCBQcm9wZXJ0eVJlYWQsIFByb3BlcnR5V3JpdGUsIFNhZmVNZXRob2RDYWxsLCBTYWZlUHJvcGVydHlSZWFkLCBUbXBsQXN0Qm91bmRBdHRyaWJ1dGUsIFRtcGxBc3RCb3VuZEV2ZW50LCBUbXBsQXN0Tm9kZSwgVG1wbEFzdFJlZmVyZW5jZSwgVG1wbEFzdFRleHRBdHRyaWJ1dGUsIFRtcGxBc3RWYXJpYWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtOZ0NvbXBpbGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2NvcmUnO1xuaW1wb3J0IHthYnNvbHV0ZUZyb20sIGFic29sdXRlRnJvbVNvdXJjZUZpbGUsIEFic29sdXRlRnNQYXRofSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7RGlyZWN0aXZlU3ltYm9sLCBTaGltTG9jYXRpb24sIFN5bWJvbEtpbmQsIFRlbXBsYXRlVHlwZUNoZWNrZXIsIFR5cGVDaGVja2luZ1Byb2dyYW1TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy90eXBlY2hlY2svYXBpJztcbmltcG9ydCB7RXhwcmVzc2lvbklkZW50aWZpZXIsIGhhc0V4cHJlc3Npb25JZGVudGlmaWVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL3R5cGVjaGVjay9zcmMvY29tbWVudHMnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7Z2V0VGFyZ2V0QXRQb3NpdGlvbiwgVGFyZ2V0Tm9kZUtpbmR9IGZyb20gJy4vdGVtcGxhdGVfdGFyZ2V0JztcbmltcG9ydCB7ZmluZFRpZ2h0ZXN0Tm9kZX0gZnJvbSAnLi90c191dGlscyc7XG5pbXBvcnQge2dldERpcmVjdGl2ZU1hdGNoZXNGb3JBdHRyaWJ1dGUsIGdldERpcmVjdGl2ZU1hdGNoZXNGb3JFbGVtZW50VGFnLCBnZXRUZW1wbGF0ZUluZm9BdFBvc2l0aW9uLCBnZXRUZW1wbGF0ZUxvY2F0aW9uRnJvbVNoaW1Mb2NhdGlvbiwgaXNXaXRoaW4sIFRlbXBsYXRlSW5mbywgdG9UZXh0U3Bhbn0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBGaWxlUG9zaXRpb24ge1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiB0b0ZpbGVQb3NpdGlvbihzaGltTG9jYXRpb246IFNoaW1Mb2NhdGlvbik6IEZpbGVQb3NpdGlvbiB7XG4gIHJldHVybiB7ZmlsZU5hbWU6IHNoaW1Mb2NhdGlvbi5zaGltUGF0aCwgcG9zaXRpb246IHNoaW1Mb2NhdGlvbi5wb3NpdGlvbkluU2hpbUZpbGV9O1xufVxuXG5lbnVtIFJlcXVlc3RLaW5kIHtcbiAgVGVtcGxhdGUsXG4gIFR5cGVTY3JpcHQsXG59XG5cbmludGVyZmFjZSBUZW1wbGF0ZVJlcXVlc3Qge1xuICBraW5kOiBSZXF1ZXN0S2luZC5UZW1wbGF0ZTtcbiAgcmVxdWVzdE5vZGU6IFRtcGxBc3ROb2RlfEFTVDtcbiAgcG9zaXRpb246IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFR5cGVTY3JpcHRSZXF1ZXN0IHtcbiAga2luZDogUmVxdWVzdEtpbmQuVHlwZVNjcmlwdDtcbiAgcmVxdWVzdE5vZGU6IHRzLk5vZGU7XG59XG5cbnR5cGUgUmVxdWVzdE9yaWdpbiA9IFRlbXBsYXRlUmVxdWVzdHxUeXBlU2NyaXB0UmVxdWVzdDtcblxuaW50ZXJmYWNlIFRlbXBsYXRlTG9jYXRpb25EZXRhaWxzIHtcbiAgLyoqXG4gICAqIEEgdGFyZ2V0IG5vZGUgaW4gYSB0ZW1wbGF0ZS5cbiAgICovXG4gIHRlbXBsYXRlVGFyZ2V0OiBUbXBsQXN0Tm9kZXxBU1Q7XG5cbiAgLyoqXG4gICAqIFR5cGVTY3JpcHQgbG9jYXRpb25zIHdoaWNoIHRoZSB0ZW1wbGF0ZSBub2RlIG1hcHMgdG8uIEEgZ2l2ZW4gdGVtcGxhdGUgbm9kZSBtaWdodCBtYXAgdG9cbiAgICogc2V2ZXJhbCBUUyBub2Rlcy4gRm9yIGV4YW1wbGUsIGEgdGVtcGxhdGUgbm9kZSBmb3IgYW4gYXR0cmlidXRlIG1pZ2h0IHJlc29sdmUgdG8gc2V2ZXJhbFxuICAgKiBkaXJlY3RpdmVzIG9yIGEgZGlyZWN0aXZlIGFuZCBvbmUgb2YgaXRzIGlucHV0cy5cbiAgICovXG4gIHR5cGVzY3JpcHRMb2NhdGlvbnM6IEZpbGVQb3NpdGlvbltdO1xufVxuXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlc0FuZFJlbmFtZUJ1aWxkZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHR0YyA9IHRoaXMuY29tcGlsZXIuZ2V0VGVtcGxhdGVUeXBlQ2hlY2tlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBzdHJhdGVneTogVHlwZUNoZWNraW5nUHJvZ3JhbVN0cmF0ZWd5LFxuICAgICAgcHJpdmF0ZSByZWFkb25seSB0c0xTOiB0cy5MYW5ndWFnZVNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgY29tcGlsZXI6IE5nQ29tcGlsZXIpIHt9XG5cbiAgZ2V0UmVuYW1lSW5mbyhmaWxlUGF0aDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTpcbiAgICAgIE9taXQ8dHMuUmVuYW1lSW5mb1N1Y2Nlc3MsICdraW5kJ3wna2luZE1vZGlmaWVycyc+fHRzLlJlbmFtZUluZm9GYWlsdXJlIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUluZm8gPSBnZXRUZW1wbGF0ZUluZm9BdFBvc2l0aW9uKGZpbGVQYXRoLCBwb3NpdGlvbiwgdGhpcy5jb21waWxlcik7XG4gICAgLy8gV2UgY291bGQgbm90IGdldCBhIHRlbXBsYXRlIGF0IHBvc2l0aW9uIHNvIHdlIGFzc3VtZSB0aGUgcmVxdWVzdCBjYW1lIGZyb20gb3V0c2lkZSB0aGVcbiAgICAvLyB0ZW1wbGF0ZS5cbiAgICBpZiAodGVtcGxhdGVJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRzTFMuZ2V0UmVuYW1lSW5mbyhmaWxlUGF0aCwgcG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFRhcmdldERldGFpbHMgPSB0aGlzLmdldFRhcmdldERldGFpbHNBdFRlbXBsYXRlUG9zaXRpb24odGVtcGxhdGVJbmZvLCBwb3NpdGlvbik7XG4gICAgaWYgKGFsbFRhcmdldERldGFpbHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7Y2FuUmVuYW1lOiBmYWxzZSwgbG9jYWxpemVkRXJyb3JNZXNzYWdlOiAnQ291bGQgbm90IGZpbmQgdGVtcGxhdGUgbm9kZSBhdCBwb3NpdGlvbi4nfTtcbiAgICB9XG4gICAgY29uc3Qge3RlbXBsYXRlVGFyZ2V0fSA9IGFsbFRhcmdldERldGFpbHNbMF07XG4gICAgY29uc3QgdGVtcGxhdGVUZXh0QW5kU3BhbiA9IGdldFJlbmFtZVRleHRBbmRTcGFuQXRQb3NpdGlvbih0ZW1wbGF0ZVRhcmdldCwgcG9zaXRpb24pO1xuICAgIGlmICh0ZW1wbGF0ZVRleHRBbmRTcGFuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4ge2NhblJlbmFtZTogZmFsc2UsIGxvY2FsaXplZEVycm9yTWVzc2FnZTogJ0NvdWxkIG5vdCBkZXRlcm1pbmUgdGVtcGxhdGUgbm9kZSB0ZXh0Lid9O1xuICAgIH1cbiAgICBjb25zdCB7dGV4dCwgc3Bhbn0gPSB0ZW1wbGF0ZVRleHRBbmRTcGFuO1xuICAgIHJldHVybiB7XG4gICAgICBjYW5SZW5hbWU6IHRydWUsXG4gICAgICBkaXNwbGF5TmFtZTogdGV4dCxcbiAgICAgIGZ1bGxEaXNwbGF5TmFtZTogdGV4dCxcbiAgICAgIHRyaWdnZXJTcGFuOiBzcGFuLFxuICAgIH07XG4gIH1cblxuICBmaW5kUmVuYW1lTG9jYXRpb25zKGZpbGVQYXRoOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiByZWFkb25seSB0cy5SZW5hbWVMb2NhdGlvbltdfHVuZGVmaW5lZCB7XG4gICAgdGhpcy50dGMuZ2VuZXJhdGVBbGxUeXBlQ2hlY2tCbG9ja3MoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZUluZm8gPSBnZXRUZW1wbGF0ZUluZm9BdFBvc2l0aW9uKGZpbGVQYXRoLCBwb3NpdGlvbiwgdGhpcy5jb21waWxlcik7XG4gICAgLy8gV2UgY291bGQgbm90IGdldCBhIHRlbXBsYXRlIGF0IHBvc2l0aW9uIHNvIHdlIGFzc3VtZSB0aGUgcmVxdWVzdCBjYW1lIGZyb20gb3V0c2lkZSB0aGVcbiAgICAvLyB0ZW1wbGF0ZS5cbiAgICBpZiAodGVtcGxhdGVJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3ROb2RlID0gdGhpcy5nZXRUc05vZGVBdFBvc2l0aW9uKGZpbGVQYXRoLCBwb3NpdGlvbik7XG4gICAgICBpZiAocmVxdWVzdE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcXVlc3RPcmlnaW46IFR5cGVTY3JpcHRSZXF1ZXN0ID0ge2tpbmQ6IFJlcXVlc3RLaW5kLlR5cGVTY3JpcHQsIHJlcXVlc3ROb2RlfTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRSZW5hbWVMb2NhdGlvbnNBdFR5cGVzY3JpcHRQb3NpdGlvbihmaWxlUGF0aCwgcG9zaXRpb24sIHJlcXVlc3RPcmlnaW4pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZpbmRSZW5hbWVMb2NhdGlvbnNBdFRlbXBsYXRlUG9zaXRpb24odGVtcGxhdGVJbmZvLCBwb3NpdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGZpbmRSZW5hbWVMb2NhdGlvbnNBdFRlbXBsYXRlUG9zaXRpb24odGVtcGxhdGVJbmZvOiBUZW1wbGF0ZUluZm8sIHBvc2l0aW9uOiBudW1iZXIpOlxuICAgICAgcmVhZG9ubHkgdHMuUmVuYW1lTG9jYXRpb25bXXx1bmRlZmluZWQge1xuICAgIGNvbnN0IGFsbFRhcmdldERldGFpbHMgPSB0aGlzLmdldFRhcmdldERldGFpbHNBdFRlbXBsYXRlUG9zaXRpb24odGVtcGxhdGVJbmZvLCBwb3NpdGlvbik7XG4gICAgaWYgKGFsbFRhcmdldERldGFpbHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsUmVuYW1lTG9jYXRpb25zOiB0cy5SZW5hbWVMb2NhdGlvbltdID0gW107XG4gICAgZm9yIChjb25zdCB0YXJnZXREZXRhaWxzIG9mIGFsbFRhcmdldERldGFpbHMpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcmlnaW46IFRlbXBsYXRlUmVxdWVzdCA9IHtcbiAgICAgICAga2luZDogUmVxdWVzdEtpbmQuVGVtcGxhdGUsXG4gICAgICAgIHJlcXVlc3ROb2RlOiB0YXJnZXREZXRhaWxzLnRlbXBsYXRlVGFyZ2V0LFxuICAgICAgICBwb3NpdGlvbixcbiAgICAgIH07XG5cbiAgICAgIGZvciAoY29uc3QgbG9jYXRpb24gb2YgdGFyZ2V0RGV0YWlscy50eXBlc2NyaXB0TG9jYXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IHRoaXMuZmluZFJlbmFtZUxvY2F0aW9uc0F0VHlwZXNjcmlwdFBvc2l0aW9uKFxuICAgICAgICAgICAgbG9jYXRpb24uZmlsZU5hbWUsIGxvY2F0aW9uLnBvc2l0aW9uLCByZXF1ZXN0T3JpZ2luKTtcbiAgICAgICAgLy8gSWYgd2UgY291bGRuJ3QgZmluZCByZW5hbWUgbG9jYXRpb25zIGZvciBfYW55XyByZXN1bHQsIHdlIHNob3VsZCBub3QgYWxsb3cgcmVuYW1pbmcgdG9cbiAgICAgICAgLy8gcHJvY2VlZCBpbnN0ZWFkIG9mIGhhdmluZyBhIHBhcnRpYWxseSBjb21wbGV0ZSByZW5hbWUuXG4gICAgICAgIGlmIChsb2NhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYWxsUmVuYW1lTG9jYXRpb25zLnB1c2goLi4ubG9jYXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFsbFJlbmFtZUxvY2F0aW9ucy5sZW5ndGggPiAwID8gYWxsUmVuYW1lTG9jYXRpb25zIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUc05vZGVBdFBvc2l0aW9uKGZpbGVQYXRoOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB0cy5Ob2RlfG51bGwge1xuICAgIGNvbnN0IHNmID0gdGhpcy5zdHJhdGVneS5nZXRQcm9ncmFtKCkuZ2V0U291cmNlRmlsZShmaWxlUGF0aCk7XG4gICAgaWYgKCFzZikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmaW5kVGlnaHRlc3ROb2RlKHNmLCBwb3NpdGlvbikgPz8gbnVsbDtcbiAgfVxuXG4gIGZpbmRSZW5hbWVMb2NhdGlvbnNBdFR5cGVzY3JpcHRQb3NpdGlvbihcbiAgICAgIGZpbGVQYXRoOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIsXG4gICAgICByZXF1ZXN0T3JpZ2luOiBSZXF1ZXN0T3JpZ2luKTogcmVhZG9ubHkgdHMuUmVuYW1lTG9jYXRpb25bXXx1bmRlZmluZWQge1xuICAgIGxldCBvcmlnaW5hbE5vZGVUZXh0OiBzdHJpbmc7XG4gICAgaWYgKHJlcXVlc3RPcmlnaW4ua2luZCA9PT0gUmVxdWVzdEtpbmQuVHlwZVNjcmlwdCkge1xuICAgICAgb3JpZ2luYWxOb2RlVGV4dCA9IHJlcXVlc3RPcmlnaW4ucmVxdWVzdE5vZGUuZ2V0VGV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZU5vZGVUZXh0ID1cbiAgICAgICAgICBnZXRSZW5hbWVUZXh0QW5kU3BhbkF0UG9zaXRpb24ocmVxdWVzdE9yaWdpbi5yZXF1ZXN0Tm9kZSwgcmVxdWVzdE9yaWdpbi5wb3NpdGlvbik7XG4gICAgICBpZiAodGVtcGxhdGVOb2RlVGV4dCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgb3JpZ2luYWxOb2RlVGV4dCA9IHRlbXBsYXRlTm9kZVRleHQudGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhdGlvbnMgPSB0aGlzLnRzTFMuZmluZFJlbmFtZUxvY2F0aW9ucyhcbiAgICAgICAgZmlsZVBhdGgsIHBvc2l0aW9uLCAvKmZpbmRJblN0cmluZ3MqLyBmYWxzZSwgLypmaW5kSW5Db21tZW50cyovIGZhbHNlKTtcbiAgICBpZiAobG9jYXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZW50cmllczogTWFwPHN0cmluZywgdHMuUmVuYW1lTG9jYXRpb24+ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgbG9jYXRpb24gb2YgbG9jYXRpb25zKSB7XG4gICAgICAvLyBUT0RPKGF0c2NvdHQpOiBEZXRlcm1pbmUgaWYgYSBmaWxlIGlzIGEgc2hpbSBmaWxlIGluIGEgbW9yZSByb2J1c3Qgd2F5IGFuZCBtYWtlIHRoZSBBUElcbiAgICAgIC8vIGF2YWlsYWJsZSBpbiBhbiBhcHByb3ByaWF0ZSBsb2NhdGlvbi5cbiAgICAgIGlmICh0aGlzLnR0Yy5pc1RyYWNrZWRUeXBlQ2hlY2tGaWxlKGFic29sdXRlRnJvbShsb2NhdGlvbi5maWxlTmFtZSkpKSB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5jb252ZXJ0VG9UZW1wbGF0ZURvY3VtZW50U3Bhbihsb2NhdGlvbiwgdGhpcy50dGMsIG9yaWdpbmFsTm9kZVRleHQpO1xuICAgICAgICAvLyBUaGVyZSBpcyBubyB0ZW1wbGF0ZSBub2RlIHdob3NlIHRleHQgbWF0Y2hlcyB0aGUgb3JpZ2luYWwgcmVuYW1lIHJlcXVlc3QuIEJhaWwgb25cbiAgICAgICAgLy8gcmVuYW1pbmcgY29tcGxldGVseSByYXRoZXIgdGhhbiBwcm92aWRpbmcgaW5jb21wbGV0ZSByZXN1bHRzLlxuICAgICAgICBpZiAoZW50cnkgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVudHJpZXMuc2V0KGNyZWF0ZUxvY2F0aW9uS2V5KGVudHJ5KSwgZW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRW5zdXJlIHdlIG9ubHkgYWxsb3cgcmVuYW1pbmcgYSBUUyByZXN1bHQgd2l0aCBtYXRjaGluZyB0ZXh0XG4gICAgICAgIGNvbnN0IHJlZk5vZGUgPSB0aGlzLmdldFRzTm9kZUF0UG9zaXRpb24obG9jYXRpb24uZmlsZU5hbWUsIGxvY2F0aW9uLnRleHRTcGFuLnN0YXJ0KTtcbiAgICAgICAgaWYgKHJlZk5vZGUgPT09IG51bGwgfHwgcmVmTm9kZS5nZXRUZXh0KCkgIT09IG9yaWdpbmFsTm9kZVRleHQpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVudHJpZXMuc2V0KGNyZWF0ZUxvY2F0aW9uS2V5KGxvY2F0aW9uKSwgbG9jYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbnRyaWVzLnZhbHVlcygpKTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXNBdFBvc2l0aW9uKGZpbGVQYXRoOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB0cy5SZWZlcmVuY2VFbnRyeVtdfHVuZGVmaW5lZCB7XG4gICAgdGhpcy50dGMuZ2VuZXJhdGVBbGxUeXBlQ2hlY2tCbG9ja3MoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZUluZm8gPSBnZXRUZW1wbGF0ZUluZm9BdFBvc2l0aW9uKGZpbGVQYXRoLCBwb3NpdGlvbiwgdGhpcy5jb21waWxlcik7XG4gICAgaWYgKHRlbXBsYXRlSW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZWZlcmVuY2VzQXRUeXBlc2NyaXB0UG9zaXRpb24oZmlsZVBhdGgsIHBvc2l0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVmZXJlbmNlc0F0VGVtcGxhdGVQb3NpdGlvbih0ZW1wbGF0ZUluZm8sIHBvc2l0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVmZXJlbmNlc0F0VGVtcGxhdGVQb3NpdGlvbih0ZW1wbGF0ZUluZm86IFRlbXBsYXRlSW5mbywgcG9zaXRpb246IG51bWJlcik6XG4gICAgICB0cy5SZWZlcmVuY2VFbnRyeVtdfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgYWxsVGFyZ2V0RGV0YWlscyA9IHRoaXMuZ2V0VGFyZ2V0RGV0YWlsc0F0VGVtcGxhdGVQb3NpdGlvbih0ZW1wbGF0ZUluZm8sIHBvc2l0aW9uKTtcbiAgICBpZiAoYWxsVGFyZ2V0RGV0YWlscyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgYWxsUmVmZXJlbmNlczogdHMuUmVmZXJlbmNlRW50cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGFyZ2V0RGV0YWlscyBvZiBhbGxUYXJnZXREZXRhaWxzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxvY2F0aW9uIG9mIHRhcmdldERldGFpbHMudHlwZXNjcmlwdExvY2F0aW9ucykge1xuICAgICAgICBjb25zdCByZWZzID0gdGhpcy5nZXRSZWZlcmVuY2VzQXRUeXBlc2NyaXB0UG9zaXRpb24obG9jYXRpb24uZmlsZU5hbWUsIGxvY2F0aW9uLnBvc2l0aW9uKTtcbiAgICAgICAgaWYgKHJlZnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFsbFJlZmVyZW5jZXMucHVzaCguLi5yZWZzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsUmVmZXJlbmNlcy5sZW5ndGggPiAwID8gYWxsUmVmZXJlbmNlcyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGFyZ2V0RGV0YWlsc0F0VGVtcGxhdGVQb3NpdGlvbih7dGVtcGxhdGUsIGNvbXBvbmVudH06IFRlbXBsYXRlSW5mbywgcG9zaXRpb246IG51bWJlcik6XG4gICAgICBUZW1wbGF0ZUxvY2F0aW9uRGV0YWlsc1tdfG51bGwge1xuICAgIC8vIEZpbmQgdGhlIEFTVCBub2RlIGluIHRoZSB0ZW1wbGF0ZSBhdCB0aGUgcG9zaXRpb24uXG4gICAgY29uc3QgcG9zaXRpb25EZXRhaWxzID0gZ2V0VGFyZ2V0QXRQb3NpdGlvbih0ZW1wbGF0ZSwgcG9zaXRpb24pO1xuICAgIGlmIChwb3NpdGlvbkRldGFpbHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gcG9zaXRpb25EZXRhaWxzLmNvbnRleHQua2luZCA9PT0gVGFyZ2V0Tm9kZUtpbmQuVHdvV2F5QmluZGluZ0NvbnRleHQgP1xuICAgICAgICBwb3NpdGlvbkRldGFpbHMuY29udGV4dC5ub2RlcyA6XG4gICAgICAgIFtwb3NpdGlvbkRldGFpbHMuY29udGV4dC5ub2RlXTtcblxuICAgIGNvbnN0IGRldGFpbHM6IFRlbXBsYXRlTG9jYXRpb25EZXRhaWxzW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgLy8gR2V0IHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgVENCIGF0IHRoZSB0ZW1wbGF0ZSBwb3NpdGlvbi5cbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMudHRjLmdldFN5bWJvbE9mTm9kZShub2RlLCBjb21wb25lbnQpO1xuICAgICAgaWYgKHN5bWJvbCA9PT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGVtcGxhdGVUYXJnZXQgPSBub2RlO1xuICAgICAgc3dpdGNoIChzeW1ib2wua2luZCkge1xuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuRGlyZWN0aXZlOlxuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuVGVtcGxhdGU6XG4gICAgICAgICAgLy8gUmVmZXJlbmNlcyB0byBlbGVtZW50cywgdGVtcGxhdGVzLCBhbmQgZGlyZWN0aXZlcyB3aWxsIGJlIHRocm91Z2ggdGVtcGxhdGUgcmVmZXJlbmNlc1xuICAgICAgICAgIC8vICgjcmVmKS4gVGhleSBzaG91bGRuJ3QgYmUgdXNlZCBkaXJlY3RseSBmb3IgYSBMYW5ndWFnZSBTZXJ2aWNlIHJlZmVyZW5jZSByZXF1ZXN0LlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuRWxlbWVudDoge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBnZXREaXJlY3RpdmVNYXRjaGVzRm9yRWxlbWVudFRhZyhzeW1ib2wudGVtcGxhdGVOb2RlLCBzeW1ib2wuZGlyZWN0aXZlcyk7XG4gICAgICAgICAgZGV0YWlscy5wdXNoKFxuICAgICAgICAgICAgICB7dHlwZXNjcmlwdExvY2F0aW9uczogdGhpcy5nZXRQb3NpdGlvbnNGb3JEaXJlY3RpdmVzKG1hdGNoZXMpLCB0ZW1wbGF0ZVRhcmdldH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU3ltYm9sS2luZC5Eb21CaW5kaW5nOiB7XG4gICAgICAgICAgLy8gRG9tIGJpbmRpbmdzIGFyZW4ndCBjdXJyZW50bHkgdHlwZS1jaGVja2VkIChzZWUgYGNoZWNrVHlwZU9mRG9tQmluZGluZ3NgKSBzbyB0aGV5IGRvbid0XG4gICAgICAgICAgLy8gaGF2ZSBhIHNoaW0gbG9jYXRpb24uIFRoaXMgbWVhbnMgd2UgY2FuJ3QgbWF0Y2ggZG9tIGJpbmRpbmdzIHRvIHRoZWlyIGxpYi5kb21cbiAgICAgICAgICAvLyByZWZlcmVuY2UsIGJ1dCB3ZSBjYW4gc3RpbGwgc2VlIGlmIHRoZXkgbWF0Y2ggdG8gYSBkaXJlY3RpdmUuXG4gICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RUZXh0QXR0cmlidXRlKSAmJiAhKG5vZGUgaW5zdGFuY2VvZiBUbXBsQXN0Qm91bmRBdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IGdldERpcmVjdGl2ZU1hdGNoZXNGb3JBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIG5vZGUubmFtZSwgc3ltYm9sLmhvc3QudGVtcGxhdGVOb2RlLCBzeW1ib2wuaG9zdC5kaXJlY3RpdmVzKTtcbiAgICAgICAgICBkZXRhaWxzLnB1c2goe1xuICAgICAgICAgICAgdHlwZXNjcmlwdExvY2F0aW9uczogdGhpcy5nZXRQb3NpdGlvbnNGb3JEaXJlY3RpdmVzKGRpcmVjdGl2ZXMpLFxuICAgICAgICAgICAgdGVtcGxhdGVUYXJnZXQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLlJlZmVyZW5jZToge1xuICAgICAgICAgIGRldGFpbHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlc2NyaXB0TG9jYXRpb25zOiBbdG9GaWxlUG9zaXRpb24oc3ltYm9sLnJlZmVyZW5jZVZhckxvY2F0aW9uKV0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVRhcmdldCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuVmFyaWFibGU6IHtcbiAgICAgICAgICBpZiAoKHRlbXBsYXRlVGFyZ2V0IGluc3RhbmNlb2YgVG1wbEFzdFZhcmlhYmxlKSkge1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlVGFyZ2V0LnZhbHVlU3BhbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgaXNXaXRoaW4ocG9zaXRpb24sIHRlbXBsYXRlVGFyZ2V0LnZhbHVlU3BhbikpIHtcbiAgICAgICAgICAgICAgLy8gSW4gdGhlIHZhbHVlU3BhbiBvZiB0aGUgdmFyaWFibGUsIHdlIHdhbnQgdG8gZ2V0IHRoZSByZWZlcmVuY2Ugb2YgdGhlIGluaXRpYWxpemVyLlxuICAgICAgICAgICAgICBkZXRhaWxzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGVzY3JpcHRMb2NhdGlvbnM6IFt0b0ZpbGVQb3NpdGlvbihzeW1ib2wuaW5pdGlhbGl6ZXJMb2NhdGlvbildLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVGFyZ2V0LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaXRoaW4ocG9zaXRpb24sIHRlbXBsYXRlVGFyZ2V0LmtleVNwYW4pKSB7XG4gICAgICAgICAgICAgIC8vIEluIHRoZSBrZXlTcGFuIG9mIHRoZSB2YXJpYWJsZSwgd2Ugd2FudCB0byBnZXQgdGhlIHJlZmVyZW5jZSBvZiB0aGUgbG9jYWwgdmFyaWFibGUuXG4gICAgICAgICAgICAgIGRldGFpbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZXNjcmlwdExvY2F0aW9uczogW3RvRmlsZVBvc2l0aW9uKHN5bWJvbC5sb2NhbFZhckxvY2F0aW9uKV0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVUYXJnZXQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdGVtcGxhdGVOb2RlIGlzIG5vdCB0aGUgYFRtcGxBc3RWYXJpYWJsZWAsIGl0IG11c3QgYmUgYSB1c2FnZSBvZiB0aGVcbiAgICAgICAgICAgIC8vIHZhcmlhYmxlIHNvbWV3aGVyZSBpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAgICBkZXRhaWxzLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlc2NyaXB0TG9jYXRpb25zOiBbdG9GaWxlUG9zaXRpb24oc3ltYm9sLmxvY2FsVmFyTG9jYXRpb24pXSxcbiAgICAgICAgICAgICAgdGVtcGxhdGVUYXJnZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLklucHV0OlxuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuT3V0cHV0OiB7XG4gICAgICAgICAgZGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGVzY3JpcHRMb2NhdGlvbnM6XG4gICAgICAgICAgICAgICAgc3ltYm9sLmJpbmRpbmdzLm1hcChiaW5kaW5nID0+IHRvRmlsZVBvc2l0aW9uKGJpbmRpbmcuc2hpbUxvY2F0aW9uKSksXG4gICAgICAgICAgICB0ZW1wbGF0ZVRhcmdldCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFN5bWJvbEtpbmQuUGlwZTpcbiAgICAgICAgY2FzZSBTeW1ib2xLaW5kLkV4cHJlc3Npb246IHtcbiAgICAgICAgICBkZXRhaWxzLnB1c2goXG4gICAgICAgICAgICAgIHt0eXBlc2NyaXB0TG9jYXRpb25zOiBbdG9GaWxlUG9zaXRpb24oc3ltYm9sLnNoaW1Mb2NhdGlvbildLCB0ZW1wbGF0ZVRhcmdldH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRldGFpbHMubGVuZ3RoID4gMCA/IGRldGFpbHMgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3NpdGlvbnNGb3JEaXJlY3RpdmVzKGRpcmVjdGl2ZXM6IFNldDxEaXJlY3RpdmVTeW1ib2w+KTogRmlsZVBvc2l0aW9uW10ge1xuICAgIGNvbnN0IGFsbERpcmVjdGl2ZXM6IEZpbGVQb3NpdGlvbltdID0gW107XG4gICAgZm9yIChjb25zdCBkaXIgb2YgZGlyZWN0aXZlcy52YWx1ZXMoKSkge1xuICAgICAgY29uc3QgZGlyQ2xhc3MgPSBkaXIudHNTeW1ib2wudmFsdWVEZWNsYXJhdGlvbjtcbiAgICAgIGlmIChkaXJDbGFzcyA9PT0gdW5kZWZpbmVkIHx8ICF0cy5pc0NsYXNzRGVjbGFyYXRpb24oZGlyQ2xhc3MpIHx8XG4gICAgICAgICAgZGlyQ2xhc3MubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7ZmlsZU5hbWV9ID0gZGlyQ2xhc3MuZ2V0U291cmNlRmlsZSgpO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBkaXJDbGFzcy5uYW1lLmdldFN0YXJ0KCk7XG4gICAgICBhbGxEaXJlY3RpdmVzLnB1c2goe2ZpbGVOYW1lLCBwb3NpdGlvbn0pO1xuICAgIH1cblxuICAgIHJldHVybiBhbGxEaXJlY3RpdmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZWZlcmVuY2VzQXRUeXBlc2NyaXB0UG9zaXRpb24oZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6XG4gICAgICB0cy5SZWZlcmVuY2VFbnRyeVtdfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgcmVmcyA9IHRoaXMudHNMUy5nZXRSZWZlcmVuY2VzQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICAgIGlmIChyZWZzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZW50cmllczogTWFwPHN0cmluZywgdHMuUmVmZXJlbmNlRW50cnk+ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgcmVmIG9mIHJlZnMpIHtcbiAgICAgIGlmICh0aGlzLnR0Yy5pc1RyYWNrZWRUeXBlQ2hlY2tGaWxlKGFic29sdXRlRnJvbShyZWYuZmlsZU5hbWUpKSkge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuY29udmVydFRvVGVtcGxhdGVEb2N1bWVudFNwYW4ocmVmLCB0aGlzLnR0Yyk7XG4gICAgICAgIGlmIChlbnRyeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJpZXMuc2V0KGNyZWF0ZUxvY2F0aW9uS2V5KGVudHJ5KSwgZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPKGF0c2NvdHQpOiB1bmNvbW1lbnQgd2hlbiBWU0NvZGUgZGVkdXBsaWNhdGVzIHJlc3VsdHMgb24gdGhlaXIgZW5kXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdnNjb2RlL2lzc3Vlcy8xMTcwOTVcbiAgICAgICAgLy8gZW50cmllcy5zZXQoY3JlYXRlTG9jYXRpb25LZXkocmVmKSwgcmVmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZW50cmllcy52YWx1ZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb1RlbXBsYXRlRG9jdW1lbnRTcGFuPFQgZXh0ZW5kcyB0cy5Eb2N1bWVudFNwYW4+KFxuICAgICAgc2hpbURvY3VtZW50U3BhbjogVCwgdGVtcGxhdGVUeXBlQ2hlY2tlcjogVGVtcGxhdGVUeXBlQ2hlY2tlciwgcmVxdWlyZWROb2RlVGV4dD86IHN0cmluZyk6IFRcbiAgICAgIHxudWxsIHtcbiAgICBjb25zdCBzZiA9IHRoaXMuc3RyYXRlZ3kuZ2V0UHJvZ3JhbSgpLmdldFNvdXJjZUZpbGUoc2hpbURvY3VtZW50U3Bhbi5maWxlTmFtZSk7XG4gICAgaWYgKHNmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0Y2JOb2RlID0gZmluZFRpZ2h0ZXN0Tm9kZShzZiwgc2hpbURvY3VtZW50U3Bhbi50ZXh0U3Bhbi5zdGFydCk7XG4gICAgaWYgKHRjYk5vZGUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBoYXNFeHByZXNzaW9uSWRlbnRpZmllcihzZiwgdGNiTm9kZSwgRXhwcmVzc2lvbklkZW50aWZpZXIuRVZFTlRfUEFSQU1FVEVSKSkge1xuICAgICAgLy8gSWYgdGhlIHJlZmVyZW5jZSByZXN1bHQgaXMgdGhlICRldmVudCBwYXJhbWV0ZXIgaW4gdGhlIHN1YnNjcmliZS9hZGRFdmVudExpc3RlbmVyXG4gICAgICAvLyBmdW5jdGlvbiBpbiB0aGUgVENCLCB3ZSB3YW50IHRvIGZpbHRlciB0aGlzIHJlc3VsdCBvdXQgb2YgdGhlIHJlZmVyZW5jZXMuIFdlIHJlYWxseSBvbmx5XG4gICAgICAvLyB3YW50IHRvIHJldHVybiByZWZlcmVuY2VzIHRvIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIHRlbXBsYXRlIGl0c2VsZi5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBUT0RPKGF0c2NvdHQpOiBEZXRlcm1pbmUgaG93IHRvIGNvbnNpc3RlbnRseSByZXNvbHZlIHBhdGhzLiBpLmUuIHdpdGggdGhlIHByb2plY3RcbiAgICAvLyBzZXJ2ZXJIb3N0IG9yIExTUGFyc2VDb25maWdIb3N0IGluIHRoZSBhZGFwdGVyLiBXZSBzaG91bGQgaGF2ZSBhIGJldHRlciBkZWZpbmVkIHdheSB0b1xuICAgIC8vIG5vcm1hbGl6ZSBwYXRocy5cbiAgICBjb25zdCBtYXBwaW5nID0gZ2V0VGVtcGxhdGVMb2NhdGlvbkZyb21TaGltTG9jYXRpb24oXG4gICAgICAgIHRlbXBsYXRlVHlwZUNoZWNrZXIsIGFic29sdXRlRnJvbShzaGltRG9jdW1lbnRTcGFuLmZpbGVOYW1lKSxcbiAgICAgICAgc2hpbURvY3VtZW50U3Bhbi50ZXh0U3Bhbi5zdGFydCk7XG4gICAgaWYgKG1hcHBpbmcgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHtzcGFuLCB0ZW1wbGF0ZVVybH0gPSBtYXBwaW5nO1xuICAgIGlmIChyZXF1aXJlZE5vZGVUZXh0ICE9PSB1bmRlZmluZWQgJiYgc3Bhbi50b1N0cmluZygpICE9PSByZXF1aXJlZE5vZGVUZXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc2hpbURvY3VtZW50U3BhbixcbiAgICAgIGZpbGVOYW1lOiB0ZW1wbGF0ZVVybCxcbiAgICAgIHRleHRTcGFuOiB0b1RleHRTcGFuKHNwYW4pLFxuICAgICAgLy8gU3BlY2lmaWNhbGx5IGNsZWFyIG90aGVyIHRleHQgc3BhbiB2YWx1ZXMgYmVjYXVzZSB3ZSBkbyBub3QgaGF2ZSBlbm91Z2gga25vd2xlZGdlIHRvXG4gICAgICAvLyBjb252ZXJ0IHRoZXNlIHRvIHNwYW5zIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICAgIGNvbnRleHRTcGFuOiB1bmRlZmluZWQsXG4gICAgICBvcmlnaW5hbENvbnRleHRTcGFuOiB1bmRlZmluZWQsXG4gICAgICBvcmlnaW5hbFRleHRTcGFuOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZW5hbWVUZXh0QW5kU3BhbkF0UG9zaXRpb24oXG4gICAgbm9kZTogVG1wbEFzdE5vZGV8QVNULCBwb3NpdGlvbjogbnVtYmVyKToge3RleHQ6IHN0cmluZywgc3BhbjogdHMuVGV4dFNwYW59fG51bGwge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RCb3VuZEF0dHJpYnV0ZSB8fCBub2RlIGluc3RhbmNlb2YgVG1wbEFzdFRleHRBdHRyaWJ1dGUgfHxcbiAgICAgIG5vZGUgaW5zdGFuY2VvZiBUbXBsQXN0Qm91bmRFdmVudCkge1xuICAgIGlmIChub2RlLmtleVNwYW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7dGV4dDogbm9kZS5uYW1lLCBzcGFuOiB0b1RleHRTcGFuKG5vZGUua2V5U3Bhbil9O1xuICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUbXBsQXN0VmFyaWFibGUgfHwgbm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RSZWZlcmVuY2UpIHtcbiAgICBpZiAoaXNXaXRoaW4ocG9zaXRpb24sIG5vZGUua2V5U3BhbikpIHtcbiAgICAgIHJldHVybiB7dGV4dDogbm9kZS5rZXlTcGFuLnRvU3RyaW5nKCksIHNwYW46IHRvVGV4dFNwYW4obm9kZS5rZXlTcGFuKX07XG4gICAgfSBlbHNlIGlmIChub2RlLnZhbHVlU3BhbiAmJiBpc1dpdGhpbihwb3NpdGlvbiwgbm9kZS52YWx1ZVNwYW4pKSB7XG4gICAgICByZXR1cm4ge3RleHQ6IG5vZGUudmFsdWVTcGFuLnRvU3RyaW5nKCksIHNwYW46IHRvVGV4dFNwYW4obm9kZS52YWx1ZVNwYW4pfTtcbiAgICB9XG4gIH1cblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIEJpbmRpbmdQaXBlKSB7XG4gICAgLy8gVE9ETyhhdHNjb3R0KTogQWRkIHN1cHBvcnQgZm9yIHJlbmFtaW5nIHBpcGVzXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBQcm9wZXJ0eVJlYWQgfHwgbm9kZSBpbnN0YW5jZW9mIE1ldGhvZENhbGwgfHwgbm9kZSBpbnN0YW5jZW9mIFByb3BlcnR5V3JpdGUgfHxcbiAgICAgIG5vZGUgaW5zdGFuY2VvZiBTYWZlUHJvcGVydHlSZWFkIHx8IG5vZGUgaW5zdGFuY2VvZiBTYWZlTWV0aG9kQ2FsbCkge1xuICAgIHJldHVybiB7dGV4dDogbm9kZS5uYW1lLCBzcGFuOiB0b1RleHRTcGFuKG5vZGUubmFtZVNwYW4pfTtcbiAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTGl0ZXJhbFByaW1pdGl2ZSkge1xuICAgIGNvbnN0IHNwYW4gPSB0b1RleHRTcGFuKG5vZGUuc291cmNlU3Bhbik7XG4gICAgY29uc3QgdGV4dCA9IG5vZGUudmFsdWU7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhlIHNwYW4gb2YgYSBzdHJpbmcgbGl0ZXJhbCBpbmNsdWRlcyB0aGUgcXVvdGVzIGJ1dCB0aGV5IHNob3VsZCBiZSByZW1vdmVkIGZvciByZW5hbWluZy5cbiAgICAgIHNwYW4uc3RhcnQgKz0gMTtcbiAgICAgIHNwYW4ubGVuZ3RoIC09IDI7XG4gICAgfVxuICAgIHJldHVybiB7dGV4dCwgc3Bhbn07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYSBcImtleVwiIGZvciBhIHJlbmFtZS9yZWZlcmVuY2UgbG9jYXRpb24gYnkgY29uY2F0ZW5hdGluZyBmaWxlIG5hbWUsIHNwYW4gc3RhcnQsIGFuZCBzcGFuXG4gKiBsZW5ndGguIFRoaXMgYWxsb3dzIHVzIHRvIGRlLWR1cGxpY2F0ZSB0ZW1wbGF0ZSByZXN1bHRzIHdoZW4gYW4gaXRlbSBtYXkgYXBwZWFyIHNldmVyYWwgdGltZXNcbiAqIGluIHRoZSBUQ0IgYnV0IG1hcCBiYWNrIHRvIHRoZSBzYW1lIHRlbXBsYXRlIGxvY2F0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbktleShkczogdHMuRG9jdW1lbnRTcGFuKSB7XG4gIHJldHVybiBkcy5maWxlTmFtZSArIGRzLnRleHRTcGFuLnN0YXJ0ICsgZHMudGV4dFNwYW4ubGVuZ3RoO1xufSJdfQ==