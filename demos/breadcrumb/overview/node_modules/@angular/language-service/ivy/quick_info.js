(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/ivy/quick_info", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/typecheck/api", "typescript", "@angular/language-service/ivy/display_parts", "@angular/language-service/ivy/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createQuickInfo = exports.QuickInfoBuilder = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    var api_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/api");
    var ts = require("typescript");
    var display_parts_1 = require("@angular/language-service/ivy/display_parts");
    var utils_1 = require("@angular/language-service/ivy/utils");
    var QuickInfoBuilder = /** @class */ (function () {
        function QuickInfoBuilder(tsLS, compiler, component, node) {
            this.tsLS = tsLS;
            this.compiler = compiler;
            this.component = component;
            this.node = node;
            this.typeChecker = this.compiler.getNextProgram().getTypeChecker();
        }
        QuickInfoBuilder.prototype.get = function () {
            var symbol = this.compiler.getTemplateTypeChecker().getSymbolOfNode(this.node, this.component);
            if (symbol === null) {
                return isDollarAny(this.node) ? createDollarAnyQuickInfo(this.node) : undefined;
            }
            return this.getQuickInfoForSymbol(symbol);
        };
        QuickInfoBuilder.prototype.getQuickInfoForSymbol = function (symbol) {
            switch (symbol.kind) {
                case api_1.SymbolKind.Input:
                case api_1.SymbolKind.Output:
                    return this.getQuickInfoForBindingSymbol(symbol);
                case api_1.SymbolKind.Template:
                    return createNgTemplateQuickInfo(this.node);
                case api_1.SymbolKind.Element:
                    return this.getQuickInfoForElementSymbol(symbol);
                case api_1.SymbolKind.Variable:
                    return this.getQuickInfoForVariableSymbol(symbol);
                case api_1.SymbolKind.Reference:
                    return this.getQuickInfoForReferenceSymbol(symbol);
                case api_1.SymbolKind.DomBinding:
                    return this.getQuickInfoForDomBinding(symbol);
                case api_1.SymbolKind.Directive:
                    return this.getQuickInfoAtShimLocation(symbol.shimLocation);
                case api_1.SymbolKind.Pipe:
                    return this.getQuickInfoForPipeSymbol(symbol);
                case api_1.SymbolKind.Expression:
                    return this.getQuickInfoAtShimLocation(symbol.shimLocation);
            }
        };
        QuickInfoBuilder.prototype.getQuickInfoForBindingSymbol = function (symbol) {
            if (symbol.bindings.length === 0) {
                return undefined;
            }
            var kind = symbol.kind === api_1.SymbolKind.Input ? display_parts_1.DisplayInfoKind.PROPERTY : display_parts_1.DisplayInfoKind.EVENT;
            var quickInfo = this.getQuickInfoAtShimLocation(symbol.bindings[0].shimLocation);
            return quickInfo === undefined ? undefined : updateQuickInfoKind(quickInfo, kind);
        };
        QuickInfoBuilder.prototype.getQuickInfoForElementSymbol = function (symbol) {
            var templateNode = symbol.templateNode;
            var matches = utils_1.getDirectiveMatchesForElementTag(templateNode, symbol.directives);
            if (matches.size > 0) {
                return this.getQuickInfoForDirectiveSymbol(matches.values().next().value, templateNode);
            }
            return createQuickInfo(templateNode.name, display_parts_1.DisplayInfoKind.ELEMENT, utils_1.getTextSpanOfNode(templateNode), undefined /* containerName */, this.typeChecker.typeToString(symbol.tsType));
        };
        QuickInfoBuilder.prototype.getQuickInfoForVariableSymbol = function (symbol) {
            var documentation = this.getDocumentationFromTypeDefAtLocation(symbol.initializerLocation);
            return createQuickInfo(symbol.declaration.name, display_parts_1.DisplayInfoKind.VARIABLE, utils_1.getTextSpanOfNode(this.node), undefined /* containerName */, this.typeChecker.typeToString(symbol.tsType), documentation);
        };
        QuickInfoBuilder.prototype.getQuickInfoForReferenceSymbol = function (symbol) {
            var documentation = this.getDocumentationFromTypeDefAtLocation(symbol.targetLocation);
            return createQuickInfo(symbol.declaration.name, display_parts_1.DisplayInfoKind.REFERENCE, utils_1.getTextSpanOfNode(this.node), undefined /* containerName */, this.typeChecker.typeToString(symbol.tsType), documentation);
        };
        QuickInfoBuilder.prototype.getQuickInfoForPipeSymbol = function (symbol) {
            if (symbol.tsSymbol !== null) {
                var quickInfo = this.getQuickInfoAtShimLocation(symbol.shimLocation);
                return quickInfo === undefined ? undefined :
                    updateQuickInfoKind(quickInfo, display_parts_1.DisplayInfoKind.PIPE);
            }
            else {
                return createQuickInfo(this.typeChecker.typeToString(symbol.classSymbol.tsType), display_parts_1.DisplayInfoKind.PIPE, utils_1.getTextSpanOfNode(this.node));
            }
        };
        QuickInfoBuilder.prototype.getQuickInfoForDomBinding = function (symbol) {
            if (!(this.node instanceof compiler_1.TmplAstTextAttribute) &&
                !(this.node instanceof compiler_1.TmplAstBoundAttribute)) {
                return undefined;
            }
            var directives = utils_1.getDirectiveMatchesForAttribute(this.node.name, symbol.host.templateNode, symbol.host.directives);
            if (directives.size === 0) {
                return undefined;
            }
            return this.getQuickInfoForDirectiveSymbol(directives.values().next().value);
        };
        QuickInfoBuilder.prototype.getQuickInfoForDirectiveSymbol = function (dir, node) {
            if (node === void 0) { node = this.node; }
            var kind = dir.isComponent ? display_parts_1.DisplayInfoKind.COMPONENT : display_parts_1.DisplayInfoKind.DIRECTIVE;
            var documentation = this.getDocumentationFromTypeDefAtLocation(dir.shimLocation);
            var containerName;
            if (ts.isClassDeclaration(dir.tsSymbol.valueDeclaration) && dir.ngModule !== null) {
                containerName = dir.ngModule.name.getText();
            }
            return createQuickInfo(this.typeChecker.typeToString(dir.tsType), kind, utils_1.getTextSpanOfNode(this.node), containerName, undefined, documentation);
        };
        QuickInfoBuilder.prototype.getDocumentationFromTypeDefAtLocation = function (shimLocation) {
            var _a;
            var typeDefs = this.tsLS.getTypeDefinitionAtPosition(shimLocation.shimPath, shimLocation.positionInShimFile);
            if (typeDefs === undefined || typeDefs.length === 0) {
                return undefined;
            }
            return (_a = this.tsLS.getQuickInfoAtPosition(typeDefs[0].fileName, typeDefs[0].textSpan.start)) === null || _a === void 0 ? void 0 : _a.documentation;
        };
        QuickInfoBuilder.prototype.getQuickInfoAtShimLocation = function (location) {
            var quickInfo = this.tsLS.getQuickInfoAtPosition(location.shimPath, location.positionInShimFile);
            if (quickInfo === undefined || quickInfo.displayParts === undefined) {
                return quickInfo;
            }
            quickInfo.displayParts = utils_1.filterAliasImports(quickInfo.displayParts);
            var textSpan = utils_1.getTextSpanOfNode(this.node);
            return tslib_1.__assign(tslib_1.__assign({}, quickInfo), { textSpan: textSpan });
        };
        return QuickInfoBuilder;
    }());
    exports.QuickInfoBuilder = QuickInfoBuilder;
    function updateQuickInfoKind(quickInfo, kind) {
        if (quickInfo.displayParts === undefined) {
            return quickInfo;
        }
        var startsWithKind = quickInfo.displayParts.length >= 3 &&
            displayPartsEqual(quickInfo.displayParts[0], { text: '(', kind: display_parts_1.SYMBOL_PUNC }) &&
            quickInfo.displayParts[1].kind === display_parts_1.SYMBOL_TEXT &&
            displayPartsEqual(quickInfo.displayParts[2], { text: ')', kind: display_parts_1.SYMBOL_PUNC });
        if (startsWithKind) {
            quickInfo.displayParts[1].text = kind;
        }
        else {
            quickInfo.displayParts = tslib_1.__spread([
                { text: '(', kind: display_parts_1.SYMBOL_PUNC },
                { text: kind, kind: display_parts_1.SYMBOL_TEXT },
                { text: ')', kind: display_parts_1.SYMBOL_PUNC },
                { text: ' ', kind: display_parts_1.SYMBOL_SPACE }
            ], quickInfo.displayParts);
        }
        return quickInfo;
    }
    function displayPartsEqual(a, b) {
        return a.text === b.text && a.kind === b.kind;
    }
    function isDollarAny(node) {
        return node instanceof compiler_1.MethodCall && node.receiver instanceof compiler_1.ImplicitReceiver &&
            !(node.receiver instanceof compiler_1.ThisReceiver) && node.name === '$any' && node.args.length === 1;
    }
    function createDollarAnyQuickInfo(node) {
        return createQuickInfo('$any', display_parts_1.DisplayInfoKind.METHOD, utils_1.getTextSpanOfNode(node), 
        /** containerName */ undefined, 'any', [{
                kind: display_parts_1.SYMBOL_TEXT,
                text: 'function to cast an expression to the `any` type',
            }]);
    }
    // TODO(atscott): Create special `ts.QuickInfo` for `ng-template` and `ng-container` as well.
    function createNgTemplateQuickInfo(node) {
        return createQuickInfo('ng-template', display_parts_1.DisplayInfoKind.TEMPLATE, utils_1.getTextSpanOfNode(node), 
        /** containerName */ undefined, 
        /** type */ undefined, [{
                kind: display_parts_1.SYMBOL_TEXT,
                text: 'The `<ng-template>` is an Angular element for rendering HTML. It is never displayed directly.',
            }]);
    }
    /**
     * Construct a QuickInfo object taking into account its container and type.
     * @param name Name of the QuickInfo target
     * @param kind component, directive, pipe, etc.
     * @param textSpan span of the target
     * @param containerName either the Symbol's container or the NgModule that contains the directive
     * @param type user-friendly name of the type
     * @param documentation docstring or comment
     */
    function createQuickInfo(name, kind, textSpan, containerName, type, documentation) {
        var displayParts = display_parts_1.createDisplayParts(name, kind, containerName, type);
        return {
            kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(kind),
            kindModifiers: ts.ScriptElementKindModifier.none,
            textSpan: textSpan,
            displayParts: displayParts,
            documentation: documentation,
        };
    }
    exports.createQuickInfo = createQuickInfo;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tfaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2UvaXZ5L3F1aWNrX2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDhDQUE0STtJQUU1SSxxRUFBdU87SUFDdk8sK0JBQWlDO0lBRWpDLDZFQUEwSjtJQUMxSiw2REFBaUk7SUFFakk7UUFHRSwwQkFDcUIsSUFBd0IsRUFBbUIsUUFBb0IsRUFDL0QsU0FBOEIsRUFBVSxJQUFxQjtZQUQ3RCxTQUFJLEdBQUosSUFBSSxDQUFvQjtZQUFtQixhQUFRLEdBQVIsUUFBUSxDQUFZO1lBQy9ELGNBQVMsR0FBVCxTQUFTLENBQXFCO1lBQVUsU0FBSSxHQUFKLElBQUksQ0FBaUI7WUFKakUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBSU0sQ0FBQztRQUV0Riw4QkFBRyxHQUFIO1lBQ0UsSUFBTSxNQUFNLEdBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0RixJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDakY7WUFFRCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRU8sZ0RBQXFCLEdBQTdCLFVBQThCLE1BQWM7WUFDMUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLGdCQUFV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QUUsYUFBc0IsRUFDbEYsSUFBYSxFQUFFLGFBQXNDO1FBQ3ZELElBQU0sWUFBWSxHQUFHLGtDQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpFLE9BQU87WUFDTCxJQUFJLEVBQUUsNERBQTRDLENBQUMsSUFBSSxDQUFDO1lBQ3hELGFBQWEsRUFBRSxFQUFFLENBQUMseUJBQXlCLENBQUMsSUFBSTtZQUNoRCxRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLGNBQUE7WUFDWixhQUFhLGVBQUE7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQVpELDBDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FTVCwgSW1wbGljaXRSZWNlaXZlciwgTWV0aG9kQ2FsbCwgVGhpc1JlY2VpdmVyLCBUbXBsQXN0Qm91bmRBdHRyaWJ1dGUsIFRtcGxBc3ROb2RlLCBUbXBsQXN0VGV4dEF0dHJpYnV0ZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtOZ0NvbXBpbGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmVTeW1ib2wsIERvbUJpbmRpbmdTeW1ib2wsIEVsZW1lbnRTeW1ib2wsIElucHV0QmluZGluZ1N5bWJvbCwgT3V0cHV0QmluZGluZ1N5bWJvbCwgUGlwZVN5bWJvbCwgUmVmZXJlbmNlU3ltYm9sLCBTaGltTG9jYXRpb24sIFN5bWJvbCwgU3ltYm9sS2luZCwgVmFyaWFibGVTeW1ib2x9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL2FwaSc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtjcmVhdGVEaXNwbGF5UGFydHMsIERpc3BsYXlJbmZvS2luZCwgU1lNQk9MX1BVTkMsIFNZTUJPTF9TUEFDRSwgU1lNQk9MX1RFWFQsIHVuc2FmZUNhc3REaXNwbGF5SW5mb0tpbmRUb1NjcmlwdEVsZW1lbnRLaW5kfSBmcm9tICcuL2Rpc3BsYXlfcGFydHMnO1xuaW1wb3J0IHtmaWx0ZXJBbGlhc0ltcG9ydHMsIGdldERpcmVjdGl2ZU1hdGNoZXNGb3JBdHRyaWJ1dGUsIGdldERpcmVjdGl2ZU1hdGNoZXNGb3JFbGVtZW50VGFnLCBnZXRUZXh0U3Bhbk9mTm9kZX0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBRdWlja0luZm9CdWlsZGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlQ2hlY2tlciA9IHRoaXMuY29tcGlsZXIuZ2V0TmV4dFByb2dyYW0oKS5nZXRUeXBlQ2hlY2tlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByZWFkb25seSB0c0xTOiB0cy5MYW5ndWFnZVNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgY29tcGlsZXI6IE5nQ29tcGlsZXIsXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudDogdHMuQ2xhc3NEZWNsYXJhdGlvbiwgcHJpdmF0ZSBub2RlOiBUbXBsQXN0Tm9kZXxBU1QpIHt9XG5cbiAgZ2V0KCk6IHRzLlF1aWNrSW5mb3x1bmRlZmluZWQge1xuICAgIGNvbnN0IHN5bWJvbCA9XG4gICAgICAgIHRoaXMuY29tcGlsZXIuZ2V0VGVtcGxhdGVUeXBlQ2hlY2tlcigpLmdldFN5bWJvbE9mTm9kZSh0aGlzLm5vZGUsIHRoaXMuY29tcG9uZW50KTtcbiAgICBpZiAoc3ltYm9sID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gaXNEb2xsYXJBbnkodGhpcy5ub2RlKSA/IGNyZWF0ZURvbGxhckFueVF1aWNrSW5mbyh0aGlzLm5vZGUpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldFF1aWNrSW5mb0ZvclN5bWJvbChzeW1ib2wpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRRdWlja0luZm9Gb3JTeW1ib2woc3ltYm9sOiBTeW1ib2wpOiB0cy5RdWlja0luZm98dW5kZWZpbmVkIHtcbiAgICBzd2l0Y2ggKHN5bWJvbC5raW5kKSB7XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuSW5wdXQ6XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuT3V0cHV0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRRdWlja0luZm9Gb3JCaW5kaW5nU3ltYm9sKHN5bWJvbCk7XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuVGVtcGxhdGU6XG4gICAgICAgIHJldHVybiBjcmVhdGVOZ1RlbXBsYXRlUXVpY2tJbmZvKHRoaXMubm9kZSk7XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuRWxlbWVudDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UXVpY2tJbmZvRm9yRWxlbWVudFN5bWJvbChzeW1ib2wpO1xuICAgICAgY2FzZSBTeW1ib2xLaW5kLlZhcmlhYmxlOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRRdWlja0luZm9Gb3JWYXJpYWJsZVN5bWJvbChzeW1ib2wpO1xuICAgICAgY2FzZSBTeW1ib2xLaW5kLlJlZmVyZW5jZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UXVpY2tJbmZvRm9yUmVmZXJlbmNlU3ltYm9sKHN5bWJvbCk7XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuRG9tQmluZGluZzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UXVpY2tJbmZvRm9yRG9tQmluZGluZyhzeW1ib2wpO1xuICAgICAgY2FzZSBTeW1ib2xLaW5kLkRpcmVjdGl2ZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UXVpY2tJbmZvQXRTaGltTG9jYXRpb24oc3ltYm9sLnNoaW1Mb2NhdGlvbik7XG4gICAgICBjYXNlIFN5bWJvbEtpbmQuUGlwZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UXVpY2tJbmZvRm9yUGlwZVN5bWJvbChzeW1ib2wpO1xuICAgICAgY2FzZSBTeW1ib2xLaW5kLkV4cHJlc3Npb246XG4gICAgICAgIHJldHVybiB0aGlzLmdldFF1aWNrSW5mb0F0U2hpbUxvY2F0aW9uKHN5bWJvbC5zaGltTG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVpY2tJbmZvRm9yQmluZGluZ1N5bWJvbChzeW1ib2w6IElucHV0QmluZGluZ1N5bWJvbHxPdXRwdXRCaW5kaW5nU3ltYm9sKTogdHMuUXVpY2tJbmZvXG4gICAgICB8dW5kZWZpbmVkIHtcbiAgICBpZiAoc3ltYm9sLmJpbmRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBraW5kID1cbiAgICAgICAgc3ltYm9sLmtpbmQgPT09IFN5bWJvbEtpbmQuSW5wdXQgPyBEaXNwbGF5SW5mb0tpbmQuUFJPUEVSVFkgOiBEaXNwbGF5SW5mb0tpbmQuRVZFTlQ7XG5cbiAgICBjb25zdCBxdWlja0luZm8gPSB0aGlzLmdldFF1aWNrSW5mb0F0U2hpbUxvY2F0aW9uKHN5bWJvbC5iaW5kaW5nc1swXS5zaGltTG9jYXRpb24pO1xuICAgIHJldHVybiBxdWlja0luZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHVwZGF0ZVF1aWNrSW5mb0tpbmQocXVpY2tJbmZvLCBraW5kKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVpY2tJbmZvRm9yRWxlbWVudFN5bWJvbChzeW1ib2w6IEVsZW1lbnRTeW1ib2wpOiB0cy5RdWlja0luZm8ge1xuICAgIGNvbnN0IHt0ZW1wbGF0ZU5vZGV9ID0gc3ltYm9sO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBnZXREaXJlY3RpdmVNYXRjaGVzRm9yRWxlbWVudFRhZyh0ZW1wbGF0ZU5vZGUsIHN5bWJvbC5kaXJlY3RpdmVzKTtcbiAgICBpZiAobWF0Y2hlcy5zaXplID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UXVpY2tJbmZvRm9yRGlyZWN0aXZlU3ltYm9sKG1hdGNoZXMudmFsdWVzKCkubmV4dCgpLnZhbHVlLCB0ZW1wbGF0ZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVRdWlja0luZm8oXG4gICAgICAgIHRlbXBsYXRlTm9kZS5uYW1lLCBEaXNwbGF5SW5mb0tpbmQuRUxFTUVOVCwgZ2V0VGV4dFNwYW5PZk5vZGUodGVtcGxhdGVOb2RlKSxcbiAgICAgICAgdW5kZWZpbmVkIC8qIGNvbnRhaW5lck5hbWUgKi8sIHRoaXMudHlwZUNoZWNrZXIudHlwZVRvU3RyaW5nKHN5bWJvbC50c1R5cGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVpY2tJbmZvRm9yVmFyaWFibGVTeW1ib2woc3ltYm9sOiBWYXJpYWJsZVN5bWJvbCk6IHRzLlF1aWNrSW5mbyB7XG4gICAgY29uc3QgZG9jdW1lbnRhdGlvbiA9IHRoaXMuZ2V0RG9jdW1lbnRhdGlvbkZyb21UeXBlRGVmQXRMb2NhdGlvbihzeW1ib2wuaW5pdGlhbGl6ZXJMb2NhdGlvbik7XG4gICAgcmV0dXJuIGNyZWF0ZVF1aWNrSW5mbyhcbiAgICAgICAgc3ltYm9sLmRlY2xhcmF0aW9uLm5hbWUsIERpc3BsYXlJbmZvS2luZC5WQVJJQUJMRSwgZ2V0VGV4dFNwYW5PZk5vZGUodGhpcy5ub2RlKSxcbiAgICAgICAgdW5kZWZpbmVkIC8qIGNvbnRhaW5lck5hbWUgKi8sIHRoaXMudHlwZUNoZWNrZXIudHlwZVRvU3RyaW5nKHN5bWJvbC50c1R5cGUpLCBkb2N1bWVudGF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVpY2tJbmZvRm9yUmVmZXJlbmNlU3ltYm9sKHN5bWJvbDogUmVmZXJlbmNlU3ltYm9sKTogdHMuUXVpY2tJbmZvIHtcbiAgICBjb25zdCBkb2N1bWVudGF0aW9uID0gdGhpcy5nZXREb2N1bWVudGF0aW9uRnJvbVR5cGVEZWZBdExvY2F0aW9uKHN5bWJvbC50YXJnZXRMb2NhdGlvbik7XG4gICAgcmV0dXJuIGNyZWF0ZVF1aWNrSW5mbyhcbiAgICAgICAgc3ltYm9sLmRlY2xhcmF0aW9uLm5hbWUsIERpc3BsYXlJbmZvS2luZC5SRUZFUkVOQ0UsIGdldFRleHRTcGFuT2ZOb2RlKHRoaXMubm9kZSksXG4gICAgICAgIHVuZGVmaW5lZCAvKiBjb250YWluZXJOYW1lICovLCB0aGlzLnR5cGVDaGVja2VyLnR5cGVUb1N0cmluZyhzeW1ib2wudHNUeXBlKSwgZG9jdW1lbnRhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldFF1aWNrSW5mb0ZvclBpcGVTeW1ib2woc3ltYm9sOiBQaXBlU3ltYm9sKTogdHMuUXVpY2tJbmZvfHVuZGVmaW5lZCB7XG4gICAgaWYgKHN5bWJvbC50c1N5bWJvbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVpY2tJbmZvID0gdGhpcy5nZXRRdWlja0luZm9BdFNoaW1Mb2NhdGlvbihzeW1ib2wuc2hpbUxvY2F0aW9uKTtcbiAgICAgIHJldHVybiBxdWlja0luZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWlja0luZm9LaW5kKHF1aWNrSW5mbywgRGlzcGxheUluZm9LaW5kLlBJUEUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlUXVpY2tJbmZvKFxuICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIudHlwZVRvU3RyaW5nKHN5bWJvbC5jbGFzc1N5bWJvbC50c1R5cGUpLCBEaXNwbGF5SW5mb0tpbmQuUElQRSxcbiAgICAgICAgICBnZXRUZXh0U3Bhbk9mTm9kZSh0aGlzLm5vZGUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFF1aWNrSW5mb0ZvckRvbUJpbmRpbmcoc3ltYm9sOiBEb21CaW5kaW5nU3ltYm9sKSB7XG4gICAgaWYgKCEodGhpcy5ub2RlIGluc3RhbmNlb2YgVG1wbEFzdFRleHRBdHRyaWJ1dGUpICYmXG4gICAgICAgICEodGhpcy5ub2RlIGluc3RhbmNlb2YgVG1wbEFzdEJvdW5kQXR0cmlidXRlKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IGdldERpcmVjdGl2ZU1hdGNoZXNGb3JBdHRyaWJ1dGUoXG4gICAgICAgIHRoaXMubm9kZS5uYW1lLCBzeW1ib2wuaG9zdC50ZW1wbGF0ZU5vZGUsIHN5bWJvbC5ob3N0LmRpcmVjdGl2ZXMpO1xuICAgIGlmIChkaXJlY3RpdmVzLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UXVpY2tJbmZvRm9yRGlyZWN0aXZlU3ltYm9sKGRpcmVjdGl2ZXMudmFsdWVzKCkubmV4dCgpLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVpY2tJbmZvRm9yRGlyZWN0aXZlU3ltYm9sKGRpcjogRGlyZWN0aXZlU3ltYm9sLCBub2RlOiBUbXBsQXN0Tm9kZXxBU1QgPSB0aGlzLm5vZGUpOlxuICAgICAgdHMuUXVpY2tJbmZvIHtcbiAgICBjb25zdCBraW5kID0gZGlyLmlzQ29tcG9uZW50ID8gRGlzcGxheUluZm9LaW5kLkNPTVBPTkVOVCA6IERpc3BsYXlJbmZvS2luZC5ESVJFQ1RJVkU7XG4gICAgY29uc3QgZG9jdW1lbnRhdGlvbiA9IHRoaXMuZ2V0RG9jdW1lbnRhdGlvbkZyb21UeXBlRGVmQXRMb2NhdGlvbihkaXIuc2hpbUxvY2F0aW9uKTtcbiAgICBsZXQgY29udGFpbmVyTmFtZTogc3RyaW5nfHVuZGVmaW5lZDtcbiAgICBpZiAodHMuaXNDbGFzc0RlY2xhcmF0aW9uKGRpci50c1N5bWJvbC52YWx1ZURlY2xhcmF0aW9uKSAmJiBkaXIubmdNb2R1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnRhaW5lck5hbWUgPSBkaXIubmdNb2R1bGUubmFtZS5nZXRUZXh0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZVF1aWNrSW5mbyhcbiAgICAgICAgdGhpcy50eXBlQ2hlY2tlci50eXBlVG9TdHJpbmcoZGlyLnRzVHlwZSksIGtpbmQsIGdldFRleHRTcGFuT2ZOb2RlKHRoaXMubm9kZSksXG4gICAgICAgIGNvbnRhaW5lck5hbWUsIHVuZGVmaW5lZCwgZG9jdW1lbnRhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldERvY3VtZW50YXRpb25Gcm9tVHlwZURlZkF0TG9jYXRpb24oc2hpbUxvY2F0aW9uOiBTaGltTG9jYXRpb24pOlxuICAgICAgdHMuU3ltYm9sRGlzcGxheVBhcnRbXXx1bmRlZmluZWQge1xuICAgIGNvbnN0IHR5cGVEZWZzID0gdGhpcy50c0xTLmdldFR5cGVEZWZpbml0aW9uQXRQb3NpdGlvbihcbiAgICAgICAgc2hpbUxvY2F0aW9uLnNoaW1QYXRoLCBzaGltTG9jYXRpb24ucG9zaXRpb25JblNoaW1GaWxlKTtcbiAgICBpZiAodHlwZURlZnMgPT09IHVuZGVmaW5lZCB8fCB0eXBlRGVmcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRzTFMuZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbih0eXBlRGVmc1swXS5maWxlTmFtZSwgdHlwZURlZnNbMF0udGV4dFNwYW4uc3RhcnQpXG4gICAgICAgID8uZG9jdW1lbnRhdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVpY2tJbmZvQXRTaGltTG9jYXRpb24obG9jYXRpb246IFNoaW1Mb2NhdGlvbik6IHRzLlF1aWNrSW5mb3x1bmRlZmluZWQge1xuICAgIGNvbnN0IHF1aWNrSW5mbyA9XG4gICAgICAgIHRoaXMudHNMUy5nZXRRdWlja0luZm9BdFBvc2l0aW9uKGxvY2F0aW9uLnNoaW1QYXRoLCBsb2NhdGlvbi5wb3NpdGlvbkluU2hpbUZpbGUpO1xuICAgIGlmIChxdWlja0luZm8gPT09IHVuZGVmaW5lZCB8fCBxdWlja0luZm8uZGlzcGxheVBhcnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBxdWlja0luZm87XG4gICAgfVxuXG4gICAgcXVpY2tJbmZvLmRpc3BsYXlQYXJ0cyA9IGZpbHRlckFsaWFzSW1wb3J0cyhxdWlja0luZm8uZGlzcGxheVBhcnRzKTtcblxuICAgIGNvbnN0IHRleHRTcGFuID0gZ2V0VGV4dFNwYW5PZk5vZGUodGhpcy5ub2RlKTtcbiAgICByZXR1cm4gey4uLnF1aWNrSW5mbywgdGV4dFNwYW59O1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVF1aWNrSW5mb0tpbmQocXVpY2tJbmZvOiB0cy5RdWlja0luZm8sIGtpbmQ6IERpc3BsYXlJbmZvS2luZCk6IHRzLlF1aWNrSW5mbyB7XG4gIGlmIChxdWlja0luZm8uZGlzcGxheVBhcnRzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcXVpY2tJbmZvO1xuICB9XG5cbiAgY29uc3Qgc3RhcnRzV2l0aEtpbmQgPSBxdWlja0luZm8uZGlzcGxheVBhcnRzLmxlbmd0aCA+PSAzICYmXG4gICAgICBkaXNwbGF5UGFydHNFcXVhbChxdWlja0luZm8uZGlzcGxheVBhcnRzWzBdLCB7dGV4dDogJygnLCBraW5kOiBTWU1CT0xfUFVOQ30pICYmXG4gICAgICBxdWlja0luZm8uZGlzcGxheVBhcnRzWzFdLmtpbmQgPT09IFNZTUJPTF9URVhUICYmXG4gICAgICBkaXNwbGF5UGFydHNFcXVhbChxdWlja0luZm8uZGlzcGxheVBhcnRzWzJdLCB7dGV4dDogJyknLCBraW5kOiBTWU1CT0xfUFVOQ30pO1xuICBpZiAoc3RhcnRzV2l0aEtpbmQpIHtcbiAgICBxdWlja0luZm8uZGlzcGxheVBhcnRzWzFdLnRleHQgPSBraW5kO1xuICB9IGVsc2Uge1xuICAgIHF1aWNrSW5mby5kaXNwbGF5UGFydHMgPSBbXG4gICAgICB7dGV4dDogJygnLCBraW5kOiBTWU1CT0xfUFVOQ30sXG4gICAgICB7dGV4dDoga2luZCwga2luZDogU1lNQk9MX1RFWFR9LFxuICAgICAge3RleHQ6ICcpJywga2luZDogU1lNQk9MX1BVTkN9LFxuICAgICAge3RleHQ6ICcgJywga2luZDogU1lNQk9MX1NQQUNFfSxcbiAgICAgIC4uLnF1aWNrSW5mby5kaXNwbGF5UGFydHMsXG4gICAgXTtcbiAgfVxuICByZXR1cm4gcXVpY2tJbmZvO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFydHNFcXVhbChhOiB7dGV4dDogc3RyaW5nLCBraW5kOiBzdHJpbmd9LCBiOiB7dGV4dDogc3RyaW5nLCBraW5kOiBzdHJpbmd9KSB7XG4gIHJldHVybiBhLnRleHQgPT09IGIudGV4dCAmJiBhLmtpbmQgPT09IGIua2luZDtcbn1cblxuZnVuY3Rpb24gaXNEb2xsYXJBbnkobm9kZTogVG1wbEFzdE5vZGV8QVNUKTogbm9kZSBpcyBNZXRob2RDYWxsIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBNZXRob2RDYWxsICYmIG5vZGUucmVjZWl2ZXIgaW5zdGFuY2VvZiBJbXBsaWNpdFJlY2VpdmVyICYmXG4gICAgICAhKG5vZGUucmVjZWl2ZXIgaW5zdGFuY2VvZiBUaGlzUmVjZWl2ZXIpICYmIG5vZGUubmFtZSA9PT0gJyRhbnknICYmIG5vZGUuYXJncy5sZW5ndGggPT09IDE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURvbGxhckFueVF1aWNrSW5mbyhub2RlOiBNZXRob2RDYWxsKTogdHMuUXVpY2tJbmZvIHtcbiAgcmV0dXJuIGNyZWF0ZVF1aWNrSW5mbyhcbiAgICAgICckYW55JyxcbiAgICAgIERpc3BsYXlJbmZvS2luZC5NRVRIT0QsXG4gICAgICBnZXRUZXh0U3Bhbk9mTm9kZShub2RlKSxcbiAgICAgIC8qKiBjb250YWluZXJOYW1lICovIHVuZGVmaW5lZCxcbiAgICAgICdhbnknLFxuICAgICAgW3tcbiAgICAgICAga2luZDogU1lNQk9MX1RFWFQsXG4gICAgICAgIHRleHQ6ICdmdW5jdGlvbiB0byBjYXN0IGFuIGV4cHJlc3Npb24gdG8gdGhlIGBhbnlgIHR5cGUnLFxuICAgICAgfV0sXG4gICk7XG59XG5cbi8vIFRPRE8oYXRzY290dCk6IENyZWF0ZSBzcGVjaWFsIGB0cy5RdWlja0luZm9gIGZvciBgbmctdGVtcGxhdGVgIGFuZCBgbmctY29udGFpbmVyYCBhcyB3ZWxsLlxuZnVuY3Rpb24gY3JlYXRlTmdUZW1wbGF0ZVF1aWNrSW5mbyhub2RlOiBUbXBsQXN0Tm9kZXxBU1QpOiB0cy5RdWlja0luZm8ge1xuICByZXR1cm4gY3JlYXRlUXVpY2tJbmZvKFxuICAgICAgJ25nLXRlbXBsYXRlJyxcbiAgICAgIERpc3BsYXlJbmZvS2luZC5URU1QTEFURSxcbiAgICAgIGdldFRleHRTcGFuT2ZOb2RlKG5vZGUpLFxuICAgICAgLyoqIGNvbnRhaW5lck5hbWUgKi8gdW5kZWZpbmVkLFxuICAgICAgLyoqIHR5cGUgKi8gdW5kZWZpbmVkLFxuICAgICAgW3tcbiAgICAgICAga2luZDogU1lNQk9MX1RFWFQsXG4gICAgICAgIHRleHQ6XG4gICAgICAgICAgICAnVGhlIGA8bmctdGVtcGxhdGU+YCBpcyBhbiBBbmd1bGFyIGVsZW1lbnQgZm9yIHJlbmRlcmluZyBIVE1MLiBJdCBpcyBuZXZlciBkaXNwbGF5ZWQgZGlyZWN0bHkuJyxcbiAgICAgIH1dLFxuICApO1xufVxuXG4vKipcbiAqIENvbnN0cnVjdCBhIFF1aWNrSW5mbyBvYmplY3QgdGFraW5nIGludG8gYWNjb3VudCBpdHMgY29udGFpbmVyIGFuZCB0eXBlLlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgUXVpY2tJbmZvIHRhcmdldFxuICogQHBhcmFtIGtpbmQgY29tcG9uZW50LCBkaXJlY3RpdmUsIHBpcGUsIGV0Yy5cbiAqIEBwYXJhbSB0ZXh0U3BhbiBzcGFuIG9mIHRoZSB0YXJnZXRcbiAqIEBwYXJhbSBjb250YWluZXJOYW1lIGVpdGhlciB0aGUgU3ltYm9sJ3MgY29udGFpbmVyIG9yIHRoZSBOZ01vZHVsZSB0aGF0IGNvbnRhaW5zIHRoZSBkaXJlY3RpdmVcbiAqIEBwYXJhbSB0eXBlIHVzZXItZnJpZW5kbHkgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIGRvY3VtZW50YXRpb24gZG9jc3RyaW5nIG9yIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1aWNrSW5mbyhcbiAgICBuYW1lOiBzdHJpbmcsIGtpbmQ6IERpc3BsYXlJbmZvS2luZCwgdGV4dFNwYW46IHRzLlRleHRTcGFuLCBjb250YWluZXJOYW1lPzogc3RyaW5nLFxuICAgIHR5cGU/OiBzdHJpbmcsIGRvY3VtZW50YXRpb24/OiB0cy5TeW1ib2xEaXNwbGF5UGFydFtdKTogdHMuUXVpY2tJbmZvIHtcbiAgY29uc3QgZGlzcGxheVBhcnRzID0gY3JlYXRlRGlzcGxheVBhcnRzKG5hbWUsIGtpbmQsIGNvbnRhaW5lck5hbWUsIHR5cGUpO1xuXG4gIHJldHVybiB7XG4gICAga2luZDogdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoa2luZCksXG4gICAga2luZE1vZGlmaWVyczogdHMuU2NyaXB0RWxlbWVudEtpbmRNb2RpZmllci5ub25lLFxuICAgIHRleHRTcGFuOiB0ZXh0U3BhbixcbiAgICBkaXNwbGF5UGFydHMsXG4gICAgZG9jdW1lbnRhdGlvbixcbiAgfTtcbn1cbiJdfQ==