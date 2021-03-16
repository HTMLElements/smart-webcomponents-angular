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
        define("@angular/language-service/ivy/display_parts", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/typecheck/api", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTsSymbolDisplayInfo = exports.getDirectiveDisplayInfo = exports.unsafeCastDisplayInfoKindToScriptElementKind = exports.createDisplayParts = exports.getSymbolDisplayInfo = exports.DisplayInfoKind = exports.SYMBOL_TEXT = exports.SYMBOL_SPACE = exports.SYMBOL_PUNC = exports.SYMBOL_INTERFACE = exports.ALIAS_NAME = void 0;
    var tslib_1 = require("tslib");
    var api_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/api");
    var ts = require("typescript");
    // Reverse mappings of enum would generate strings
    exports.ALIAS_NAME = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.aliasName];
    exports.SYMBOL_INTERFACE = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.interfaceName];
    exports.SYMBOL_PUNC = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.punctuation];
    exports.SYMBOL_SPACE = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.space];
    exports.SYMBOL_TEXT = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.text];
    /**
     * Label for various kinds of Angular entities for TS display info.
     */
    var DisplayInfoKind;
    (function (DisplayInfoKind) {
        DisplayInfoKind["ATTRIBUTE"] = "attribute";
        DisplayInfoKind["COMPONENT"] = "component";
        DisplayInfoKind["DIRECTIVE"] = "directive";
        DisplayInfoKind["EVENT"] = "event";
        DisplayInfoKind["REFERENCE"] = "reference";
        DisplayInfoKind["ELEMENT"] = "element";
        DisplayInfoKind["VARIABLE"] = "variable";
        DisplayInfoKind["PIPE"] = "pipe";
        DisplayInfoKind["PROPERTY"] = "property";
        DisplayInfoKind["METHOD"] = "method";
        DisplayInfoKind["TEMPLATE"] = "template";
    })(DisplayInfoKind = exports.DisplayInfoKind || (exports.DisplayInfoKind = {}));
    function getSymbolDisplayInfo(tsLS, typeChecker, symbol) {
        var kind;
        if (symbol.kind === api_1.SymbolKind.Reference) {
            kind = DisplayInfoKind.REFERENCE;
        }
        else if (symbol.kind === api_1.SymbolKind.Variable) {
            kind = DisplayInfoKind.VARIABLE;
        }
        else {
            throw new Error("AssertionError: unexpected symbol kind " + api_1.SymbolKind[symbol.kind]);
        }
        var displayParts = createDisplayParts(symbol.declaration.name, kind, /* containerName */ undefined, typeChecker.typeToString(symbol.tsType));
        var documentation = symbol.kind === api_1.SymbolKind.Reference ?
            getDocumentationFromTypeDefAtLocation(tsLS, symbol.targetLocation) :
            getDocumentationFromTypeDefAtLocation(tsLS, symbol.initializerLocation);
        return {
            kind: kind,
            displayParts: displayParts,
            documentation: documentation,
        };
    }
    exports.getSymbolDisplayInfo = getSymbolDisplayInfo;
    /**
     * Construct a compound `ts.SymbolDisplayPart[]` which incorporates the container and type of a
     * target declaration.
     * @param name Name of the target
     * @param kind component, directive, pipe, etc.
     * @param containerName either the Symbol's container or the NgModule that contains the directive
     * @param type user-friendly name of the type
     * @param documentation docstring or comment
     */
    function createDisplayParts(name, kind, containerName, type) {
        var containerDisplayParts = containerName !== undefined ?
            [
                { text: containerName, kind: exports.SYMBOL_INTERFACE },
                { text: '.', kind: exports.SYMBOL_PUNC },
            ] :
            [];
        var typeDisplayParts = type !== undefined ?
            [
                { text: ':', kind: exports.SYMBOL_PUNC },
                { text: ' ', kind: exports.SYMBOL_SPACE },
                { text: type, kind: exports.SYMBOL_INTERFACE },
            ] :
            [];
        return tslib_1.__spread([
            { text: '(', kind: exports.SYMBOL_PUNC },
            { text: kind, kind: exports.SYMBOL_TEXT },
            { text: ')', kind: exports.SYMBOL_PUNC },
            { text: ' ', kind: exports.SYMBOL_SPACE }
        ], containerDisplayParts, [
            { text: name, kind: exports.SYMBOL_INTERFACE }
        ], typeDisplayParts);
    }
    exports.createDisplayParts = createDisplayParts;
    /**
     * Convert a `SymbolDisplayInfoKind` to a `ts.ScriptElementKind` type, allowing it to pass through
     * TypeScript APIs.
     *
     * In practice, this is an "illegal" type cast. Since `ts.ScriptElementKind` is a string, this is
     * safe to do if TypeScript only uses the value in a string context. Consumers of this conversion
     * function are responsible for ensuring this is the case.
     */
    function unsafeCastDisplayInfoKindToScriptElementKind(kind) {
        return kind;
    }
    exports.unsafeCastDisplayInfoKindToScriptElementKind = unsafeCastDisplayInfoKindToScriptElementKind;
    function getDocumentationFromTypeDefAtLocation(tsLS, shimLocation) {
        var _a;
        var typeDefs = tsLS.getTypeDefinitionAtPosition(shimLocation.shimPath, shimLocation.positionInShimFile);
        if (typeDefs === undefined || typeDefs.length === 0) {
            return undefined;
        }
        return (_a = tsLS.getQuickInfoAtPosition(typeDefs[0].fileName, typeDefs[0].textSpan.start)) === null || _a === void 0 ? void 0 : _a.documentation;
    }
    function getDirectiveDisplayInfo(tsLS, dir) {
        var _a, _b;
        var kind = dir.isComponent ? DisplayInfoKind.COMPONENT : DisplayInfoKind.DIRECTIVE;
        var decl = dir.tsSymbol.declarations.find(ts.isClassDeclaration);
        if (decl === undefined || decl.name === undefined) {
            return { kind: kind, displayParts: [], documentation: [] };
        }
        var res = tsLS.getQuickInfoAtPosition(decl.getSourceFile().fileName, decl.name.getStart());
        if (res === undefined) {
            return { kind: kind, displayParts: [], documentation: [] };
        }
        var displayParts = createDisplayParts(dir.tsSymbol.name, kind, (_b = (_a = dir.ngModule) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.text, undefined);
        return {
            kind: kind,
            displayParts: displayParts,
            documentation: res.documentation,
        };
    }
    exports.getDirectiveDisplayInfo = getDirectiveDisplayInfo;
    function getTsSymbolDisplayInfo(tsLS, checker, symbol, kind, ownerName) {
        var decl = symbol.valueDeclaration;
        if (decl === undefined || (!ts.isPropertyDeclaration(decl) && !ts.isMethodDeclaration(decl)) ||
            !ts.isIdentifier(decl.name)) {
            return null;
        }
        var res = tsLS.getQuickInfoAtPosition(decl.getSourceFile().fileName, decl.name.getStart());
        if (res === undefined) {
            return { kind: kind, displayParts: [], documentation: [] };
        }
        var type = checker.getDeclaredTypeOfSymbol(symbol);
        var typeString = checker.typeToString(type);
        var displayParts = createDisplayParts(symbol.name, kind, ownerName !== null && ownerName !== void 0 ? ownerName : undefined, typeString);
        return {
            kind: kind,
            displayParts: displayParts,
            documentation: res.documentation,
        };
    }
    exports.getTsSymbolDisplayInfo = getTsSymbolDisplayInfo;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheV9wYXJ0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2UvaXZ5L2Rpc3BsYXlfcGFydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7OztJQUVILHFFQUFrSjtJQUNsSiwrQkFBaUM7SUFHakMsa0RBQWtEO0lBQ3JDLFFBQUEsVUFBVSxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUUsUUFBQSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLFFBQUEsV0FBVyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0UsUUFBQSxZQUFZLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RSxRQUFBLFdBQVcsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBR25GOztPQUVHO0lBQ0gsSUFBWSxlQVlYO0lBWkQsV0FBWSxlQUFlO1FBQ3pCLDBDQUF1QixDQUFBO1FBQ3ZCLDBDQUF1QixDQUFBO1FBQ3ZCLDBDQUF1QixDQUFBO1FBQ3ZCLGtDQUFlLENBQUE7UUFDZiwwQ0FBdUIsQ0FBQTtRQUN2QixzQ0FBbUIsQ0FBQTtRQUNuQix3Q0FBcUIsQ0FBQTtRQUNyQixnQ0FBYSxDQUFBO1FBQ2Isd0NBQXFCLENBQUE7UUFDckIsb0NBQWlCLENBQUE7UUFDakIsd0NBQXFCLENBQUE7SUFDdkIsQ0FBQyxFQVpXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVC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QUksRUFBRSxJQUFJLEVBQUUsU0FBUyxhQUFULFNBQVMsY0FBVCxTQUFTLEdBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRS9GLE9BQU87WUFDTCxJQUFJLE1BQUE7WUFDSixZQUFZLGNBQUE7WUFDWixhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWE7U0FDakMsQ0FBQztJQUNKLENBQUM7SUF2QkQsd0RBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlSW5TY29wZSwgUmVmZXJlbmNlU3ltYm9sLCBTaGltTG9jYXRpb24sIFN5bWJvbCwgU3ltYm9sS2luZCwgVmFyaWFibGVTeW1ib2x9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL2FwaSc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuXG4vLyBSZXZlcnNlIG1hcHBpbmdzIG9mIGVudW0gd291bGQgZ2VuZXJhdGUgc3RyaW5nc1xuZXhwb3J0IGNvbnN0IEFMSUFTX05BTUUgPSB0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmRbdHMuU3ltYm9sRGlzcGxheVBhcnRLaW5kLmFsaWFzTmFtZV07XG5leHBvcnQgY29uc3QgU1lNQk9MX0lOVEVSRkFDRSA9IHRzLlN5bWJvbERpc3BsYXlQYXJ0S2luZFt0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmQuaW50ZXJmYWNlTmFtZV07XG5leHBvcnQgY29uc3QgU1lNQk9MX1BVTkMgPSB0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmRbdHMuU3ltYm9sRGlzcGxheVBhcnRLaW5kLnB1bmN0dWF0aW9uXTtcbmV4cG9ydCBjb25zdCBTWU1CT0xfU1BBQ0UgPSB0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmRbdHMuU3ltYm9sRGlzcGxheVBhcnRLaW5kLnNwYWNlXTtcbmV4cG9ydCBjb25zdCBTWU1CT0xfVEVYVCA9IHRzLlN5bWJvbERpc3BsYXlQYXJ0S2luZFt0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmQudGV4dF07XG5cblxuLyoqXG4gKiBMYWJlbCBmb3IgdmFyaW91cyBraW5kcyBvZiBBbmd1bGFyIGVudGl0aWVzIGZvciBUUyBkaXNwbGF5IGluZm8uXG4gKi9cbmV4cG9ydCBlbnVtIERpc3BsYXlJbmZvS2luZCB7XG4gIEFUVFJJQlVURSA9ICdhdHRyaWJ1dGUnLFxuICBDT01QT05FTlQgPSAnY29tcG9uZW50JyxcbiAgRElSRUNUSVZFID0gJ2RpcmVjdGl2ZScsXG4gIEVWRU5UID0gJ2V2ZW50JyxcbiAgUkVGRVJFTkNFID0gJ3JlZmVyZW5jZScsXG4gIEVMRU1FTlQgPSAnZWxlbWVudCcsXG4gIFZBUklBQkxFID0gJ3ZhcmlhYmxlJyxcbiAgUElQRSA9ICdwaXBlJyxcbiAgUFJPUEVSVFkgPSAncHJvcGVydHknLFxuICBNRVRIT0QgPSAnbWV0aG9kJyxcbiAgVEVNUExBVEUgPSAndGVtcGxhdGUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlJbmZvIHtcbiAga2luZDogRGlzcGxheUluZm9LaW5kO1xuICBkaXNwbGF5UGFydHM6IHRzLlN5bWJvbERpc3BsYXlQYXJ0W107XG4gIGRvY3VtZW50YXRpb246IHRzLlN5bWJvbERpc3BsYXlQYXJ0W118dW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sRGlzcGxheUluZm8oXG4gICAgdHNMUzogdHMuTGFuZ3VhZ2VTZXJ2aWNlLCB0eXBlQ2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsXG4gICAgc3ltYm9sOiBSZWZlcmVuY2VTeW1ib2x8VmFyaWFibGVTeW1ib2wpOiBEaXNwbGF5SW5mbyB7XG4gIGxldCBraW5kOiBEaXNwbGF5SW5mb0tpbmQ7XG4gIGlmIChzeW1ib2wua2luZCA9PT0gU3ltYm9sS2luZC5SZWZlcmVuY2UpIHtcbiAgICBraW5kID0gRGlzcGxheUluZm9LaW5kLlJFRkVSRU5DRTtcbiAgfSBlbHNlIGlmIChzeW1ib2wua2luZCA9PT0gU3ltYm9sS2luZC5WYXJpYWJsZSkge1xuICAgIGtpbmQgPSBEaXNwbGF5SW5mb0tpbmQuVkFSSUFCTEU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQXNzZXJ0aW9uRXJyb3I6IHVuZXhwZWN0ZWQgc3ltYm9sIGtpbmQgJHtTeW1ib2xLaW5kWyhzeW1ib2wgYXMgU3ltYm9sKS5raW5kXX1gKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlQYXJ0cyA9IGNyZWF0ZURpc3BsYXlQYXJ0cyhcbiAgICAgIHN5bWJvbC5kZWNsYXJhdGlvbi5uYW1lLCBraW5kLCAvKiBjb250YWluZXJOYW1lICovIHVuZGVmaW5lZCxcbiAgICAgIHR5cGVDaGVja2VyLnR5cGVUb1N0cmluZyhzeW1ib2wudHNUeXBlKSk7XG4gIGNvbnN0IGRvY3VtZW50YXRpb24gPSBzeW1ib2wua2luZCA9PT0gU3ltYm9sS2luZC5SZWZlcmVuY2UgP1xuICAgICAgZ2V0RG9jdW1lbnRhdGlvbkZyb21UeXBlRGVmQXRMb2NhdGlvbih0c0xTLCBzeW1ib2wudGFyZ2V0TG9jYXRpb24pIDpcbiAgICAgIGdldERvY3VtZW50YXRpb25Gcm9tVHlwZURlZkF0TG9jYXRpb24odHNMUywgc3ltYm9sLmluaXRpYWxpemVyTG9jYXRpb24pO1xuICByZXR1cm4ge1xuICAgIGtpbmQsXG4gICAgZGlzcGxheVBhcnRzLFxuICAgIGRvY3VtZW50YXRpb24sXG4gIH07XG59XG5cbi8qKlxuICogQ29uc3RydWN0IGEgY29tcG91bmQgYHRzLlN5bWJvbERpc3BsYXlQYXJ0W11gIHdoaWNoIGluY29ycG9yYXRlcyB0aGUgY29udGFpbmVyIGFuZCB0eXBlIG9mIGFcbiAqIHRhcmdldCBkZWNsYXJhdGlvbi5cbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHRhcmdldFxuICogQHBhcmFtIGtpbmQgY29tcG9uZW50LCBkaXJlY3RpdmUsIHBpcGUsIGV0Yy5cbiAqIEBwYXJhbSBjb250YWluZXJOYW1lIGVpdGhlciB0aGUgU3ltYm9sJ3MgY29udGFpbmVyIG9yIHRoZSBOZ01vZHVsZSB0aGF0IGNvbnRhaW5zIHRoZSBkaXJlY3RpdmVcbiAqIEBwYXJhbSB0eXBlIHVzZXItZnJpZW5kbHkgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIGRvY3VtZW50YXRpb24gZG9jc3RyaW5nIG9yIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc3BsYXlQYXJ0cyhcbiAgICBuYW1lOiBzdHJpbmcsIGtpbmQ6IERpc3BsYXlJbmZvS2luZCwgY29udGFpbmVyTmFtZTogc3RyaW5nfHVuZGVmaW5lZCxcbiAgICB0eXBlOiBzdHJpbmd8dW5kZWZpbmVkKTogdHMuU3ltYm9sRGlzcGxheVBhcnRbXSB7XG4gIGNvbnN0IGNvbnRhaW5lckRpc3BsYXlQYXJ0cyA9IGNvbnRhaW5lck5hbWUgIT09IHVuZGVmaW5lZCA/XG4gICAgICBbXG4gICAgICAgIHt0ZXh0OiBjb250YWluZXJOYW1lLCBraW5kOiBTWU1CT0xfSU5URVJGQUNFfSxcbiAgICAgICAge3RleHQ6ICcuJywga2luZDogU1lNQk9MX1BVTkN9LFxuICAgICAgXSA6XG4gICAgICBbXTtcblxuICBjb25zdCB0eXBlRGlzcGxheVBhcnRzID0gdHlwZSAhPT0gdW5kZWZpbmVkID9cbiAgICAgIFtcbiAgICAgICAge3RleHQ6ICc6Jywga2luZDogU1lNQk9MX1BVTkN9LFxuICAgICAgICB7dGV4dDogJyAnLCBraW5kOiBTWU1CT0xfU1BBQ0V9LFxuICAgICAgICB7dGV4dDogdHlwZSwga2luZDogU1lNQk9MX0lOVEVSRkFDRX0sXG4gICAgICBdIDpcbiAgICAgIFtdO1xuICByZXR1cm4gW1xuICAgIHt0ZXh0OiAnKCcsIGtpbmQ6IFNZTUJPTF9QVU5DfSxcbiAgICB7dGV4dDoga2luZCwga2luZDogU1lNQk9MX1RFWFR9LFxuICAgIHt0ZXh0OiAnKScsIGtpbmQ6IFNZTUJPTF9QVU5DfSxcbiAgICB7dGV4dDogJyAnLCBraW5kOiBTWU1CT0xfU1BBQ0V9LFxuICAgIC4uLmNvbnRhaW5lckRpc3BsYXlQYXJ0cyxcbiAgICB7dGV4dDogbmFtZSwga2luZDogU1lNQk9MX0lOVEVSRkFDRX0sXG4gICAgLi4udHlwZURpc3BsYXlQYXJ0cyxcbiAgXTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgYFN5bWJvbERpc3BsYXlJbmZvS2luZGAgdG8gYSBgdHMuU2NyaXB0RWxlbWVudEtpbmRgIHR5cGUsIGFsbG93aW5nIGl0IHRvIHBhc3MgdGhyb3VnaFxuICogVHlwZVNjcmlwdCBBUElzLlxuICpcbiAqIEluIHByYWN0aWNlLCB0aGlzIGlzIGFuIFwiaWxsZWdhbFwiIHR5cGUgY2FzdC4gU2luY2UgYHRzLlNjcmlwdEVsZW1lbnRLaW5kYCBpcyBhIHN0cmluZywgdGhpcyBpc1xuICogc2FmZSB0byBkbyBpZiBUeXBlU2NyaXB0IG9ubHkgdXNlcyB0aGUgdmFsdWUgaW4gYSBzdHJpbmcgY29udGV4dC4gQ29uc3VtZXJzIG9mIHRoaXMgY29udmVyc2lvblxuICogZnVuY3Rpb24gYXJlIHJlc3BvbnNpYmxlIGZvciBlbnN1cmluZyB0aGlzIGlzIHRoZSBjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoa2luZDogRGlzcGxheUluZm9LaW5kKTpcbiAgICB0cy5TY3JpcHRFbGVtZW50S2luZCB7XG4gIHJldHVybiBraW5kIGFzIHN0cmluZyBhcyB0cy5TY3JpcHRFbGVtZW50S2luZDtcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbkZyb21UeXBlRGVmQXRMb2NhdGlvbihcbiAgICB0c0xTOiB0cy5MYW5ndWFnZVNlcnZpY2UsIHNoaW1Mb2NhdGlvbjogU2hpbUxvY2F0aW9uKTogdHMuU3ltYm9sRGlzcGxheVBhcnRbXXx1bmRlZmluZWQge1xuICBjb25zdCB0eXBlRGVmcyA9XG4gICAgICB0c0xTLmdldFR5cGVEZWZpbml0aW9uQXRQb3NpdGlvbihzaGltTG9jYXRpb24uc2hpbVBhdGgsIHNoaW1Mb2NhdGlvbi5wb3NpdGlvbkluU2hpbUZpbGUpO1xuICBpZiAodHlwZURlZnMgPT09IHVuZGVmaW5lZCB8fCB0eXBlRGVmcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiB0c0xTLmdldFF1aWNrSW5mb0F0UG9zaXRpb24odHlwZURlZnNbMF0uZmlsZU5hbWUsIHR5cGVEZWZzWzBdLnRleHRTcGFuLnN0YXJ0KVxuICAgICAgPy5kb2N1bWVudGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aXZlRGlzcGxheUluZm8oXG4gICAgdHNMUzogdHMuTGFuZ3VhZ2VTZXJ2aWNlLCBkaXI6IERpcmVjdGl2ZUluU2NvcGUpOiBEaXNwbGF5SW5mbyB7XG4gIGNvbnN0IGtpbmQgPSBkaXIuaXNDb21wb25lbnQgPyBEaXNwbGF5SW5mb0tpbmQuQ09NUE9ORU5UIDogRGlzcGxheUluZm9LaW5kLkRJUkVDVElWRTtcbiAgY29uc3QgZGVjbCA9IGRpci50c1N5bWJvbC5kZWNsYXJhdGlvbnMuZmluZCh0cy5pc0NsYXNzRGVjbGFyYXRpb24pO1xuICBpZiAoZGVjbCA9PT0gdW5kZWZpbmVkIHx8IGRlY2wubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtraW5kLCBkaXNwbGF5UGFydHM6IFtdLCBkb2N1bWVudGF0aW9uOiBbXX07XG4gIH1cblxuICBjb25zdCByZXMgPSB0c0xTLmdldFF1aWNrSW5mb0F0UG9zaXRpb24oZGVjbC5nZXRTb3VyY2VGaWxlKCkuZmlsZU5hbWUsIGRlY2wubmFtZS5nZXRTdGFydCgpKTtcbiAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtraW5kLCBkaXNwbGF5UGFydHM6IFtdLCBkb2N1bWVudGF0aW9uOiBbXX07XG4gIH1cblxuICBjb25zdCBkaXNwbGF5UGFydHMgPVxuICAgICAgY3JlYXRlRGlzcGxheVBhcnRzKGRpci50c1N5bWJvbC5uYW1lLCBraW5kLCBkaXIubmdNb2R1bGU/Lm5hbWU/LnRleHQsIHVuZGVmaW5lZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBraW5kLFxuICAgIGRpc3BsYXlQYXJ0cyxcbiAgICBkb2N1bWVudGF0aW9uOiByZXMuZG9jdW1lbnRhdGlvbixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRzU3ltYm9sRGlzcGxheUluZm8oXG4gICAgdHNMUzogdHMuTGFuZ3VhZ2VTZXJ2aWNlLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgc3ltYm9sOiB0cy5TeW1ib2wsIGtpbmQ6IERpc3BsYXlJbmZvS2luZCxcbiAgICBvd25lck5hbWU6IHN0cmluZ3xudWxsKTogRGlzcGxheUluZm98bnVsbCB7XG4gIGNvbnN0IGRlY2wgPSBzeW1ib2wudmFsdWVEZWNsYXJhdGlvbjtcbiAgaWYgKGRlY2wgPT09IHVuZGVmaW5lZCB8fCAoIXRzLmlzUHJvcGVydHlEZWNsYXJhdGlvbihkZWNsKSAmJiAhdHMuaXNNZXRob2REZWNsYXJhdGlvbihkZWNsKSkgfHxcbiAgICAgICF0cy5pc0lkZW50aWZpZXIoZGVjbC5uYW1lKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRzTFMuZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbihkZWNsLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZSwgZGVjbC5uYW1lLmdldFN0YXJ0KCkpO1xuICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge2tpbmQsIGRpc3BsYXlQYXJ0czogW10sIGRvY3VtZW50YXRpb246IFtdfTtcbiAgfVxuXG4gIGNvbnN0IHR5cGUgPSBjaGVja2VyLmdldERlY2xhcmVkVHlwZU9mU3ltYm9sKHN5bWJvbCk7XG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBjaGVja2VyLnR5cGVUb1N0cmluZyh0eXBlKTtcblxuICBjb25zdCBkaXNwbGF5UGFydHMgPSBjcmVhdGVEaXNwbGF5UGFydHMoc3ltYm9sLm5hbWUsIGtpbmQsIG93bmVyTmFtZSA/PyB1bmRlZmluZWQsIHR5cGVTdHJpbmcpO1xuXG4gIHJldHVybiB7XG4gICAga2luZCxcbiAgICBkaXNwbGF5UGFydHMsXG4gICAgZG9jdW1lbnRhdGlvbjogcmVzLmRvY3VtZW50YXRpb24sXG4gIH07XG59XG4iXX0=