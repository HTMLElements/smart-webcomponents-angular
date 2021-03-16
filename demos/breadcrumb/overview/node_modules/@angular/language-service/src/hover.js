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
        define("@angular/language-service/src/hover", ["require", "exports", "tslib", "typescript", "@angular/language-service/src/locate_symbol", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTsHover = exports.getTemplateHover = void 0;
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var locate_symbol_1 = require("@angular/language-service/src/locate_symbol");
    var utils_1 = require("@angular/language-service/src/utils");
    /**
     * Traverse the template AST and look for the symbol located at `position`, then
     * return the corresponding quick info.
     * @param info template AST
     * @param position location of the symbol
     * @param analyzedModules all NgModules in the program.
     */
    function getTemplateHover(info, position, analyzedModules) {
        var _a, _b;
        var symbolInfo = locate_symbol_1.locateSymbols(info, position)[0];
        if (!symbolInfo) {
            return;
        }
        var symbol = symbolInfo.symbol, span = symbolInfo.span, staticSymbol = symbolInfo.staticSymbol;
        // The container is either the symbol's container (for example, 'AppComponent'
        // is the container of the symbol 'title' in its template) or the NgModule
        // that the directive belongs to (the container of AppComponent is AppModule).
        var containerName = (_a = symbol.container) === null || _a === void 0 ? void 0 : _a.name;
        if (!containerName && staticSymbol) {
            // If there is a static symbol then the target is a directive.
            var ngModule = analyzedModules.ngModuleByPipeOrDirective.get(staticSymbol);
            containerName = ngModule === null || ngModule === void 0 ? void 0 : ngModule.type.reference.name;
        }
        return createQuickInfo(symbol.name, symbol.kind, span, containerName, (_b = symbol.type) === null || _b === void 0 ? void 0 : _b.name, symbol.documentation);
    }
    exports.getTemplateHover = getTemplateHover;
    /**
     * Get quick info for Angular semantic entities in TypeScript files, like Directives.
     * @param position location of the symbol in the source file
     * @param declarations All Directive-like declarations in the source file.
     * @param analyzedModules all NgModules in the program.
     */
    function getTsHover(position, declarations, analyzedModules) {
        var e_1, _a;
        try {
            for (var declarations_1 = tslib_1.__values(declarations), declarations_1_1 = declarations_1.next(); !declarations_1_1.done; declarations_1_1 = declarations_1.next()) {
                var _b = declarations_1_1.value, declarationSpan = _b.declarationSpan, metadata = _b.metadata;
                if (utils_1.inSpan(position, declarationSpan)) {
                    var staticSymbol = metadata.type.reference;
                    var directiveName = staticSymbol.name;
                    var kind = metadata.isComponent ? 'component' : 'directive';
                    var textSpan = ts.createTextSpanFromBounds(declarationSpan.start, declarationSpan.end);
                    var ngModule = analyzedModules.ngModuleByPipeOrDirective.get(staticSymbol);
                    var moduleName = ngModule === null || ngModule === void 0 ? void 0 : ngModule.type.reference.name;
                    return createQuickInfo(directiveName, kind, textSpan, moduleName, ts.ScriptElementKind.classElement);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (declarations_1_1 && !declarations_1_1.done && (_a = declarations_1.return)) _a.call(declarations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    exports.getTsHover = getTsHover;
    // Reverse mappings of enum would generate strings
    var ALIAS_NAME = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.aliasName];
    var SYMBOL_INTERFACE = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.interfaceName];
    var SYMBOL_PUNC = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.punctuation];
    var SYMBOL_SPACE = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.space];
    var SYMBOL_TEXT = ts.SymbolDisplayPartKind[ts.SymbolDisplayPartKind.text];
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
        var containerDisplayParts = containerName ?
            [
                { text: containerName, kind: SYMBOL_INTERFACE },
                { text: '.', kind: SYMBOL_PUNC },
            ] :
            [];
        var typeDisplayParts = type ?
            [
                { text: ':', kind: SYMBOL_PUNC },
                { text: ' ', kind: SYMBOL_SPACE },
                { text: type, kind: SYMBOL_INTERFACE },
            ] :
            [];
        return {
            kind: kind,
            kindModifiers: ts.ScriptElementKindModifier.none,
            textSpan: textSpan,
            displayParts: tslib_1.__spread([
                { text: '(', kind: SYMBOL_PUNC },
                { text: kind, kind: SYMBOL_TEXT },
                { text: ')', kind: SYMBOL_PUNC },
                { text: ' ', kind: SYMBOL_SPACE }
            ], containerDisplayParts, [
                { text: name, kind: SYMBOL_INTERFACE }
            ], typeDisplayParts),
            documentation: documentation,
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9ob3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7O0lBR0gsK0JBQWlDO0lBRWpDLDZFQUE4QztJQUU5Qyw2REFBK0I7SUFFL0I7Ozs7OztPQU1HO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQzVCLElBQWtCLEVBQUUsUUFBZ0IsRUFBRSxlQUFrQzs7UUFFMUUsSUFBTSxVQUFVLEdBQUcsNkJBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNNLElBQUEsTUFBTSxHQUF3QixVQUFVLE9BQWxDLEVBQUUsSUFBSSxHQUFrQixVQUFVLEtBQTVCLEVBQUUsWUFBWSxHQUFJLFVBQVUsYUFBZCxDQUFlO1FBRWhELDhFQUE4RTtRQUM5RSwwRUFBMEU7UUFDMUUsOEVBQThFO1FBQzlFLElBQUksYUFBYSxTQUFxQixNQUFNLENBQUMsU0FBUywwQ0FBRSxJQUFJLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLEVBQUU7WUFDbEMsOERBQThEO1lBQzlELElBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0UsYUFBYSxHQUFHLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUMvQztRQUVELE9BQU8sZUFBZSxDQUNsQixNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsUUFBRSxNQUFNLENBQUMsSUFBSSwwQ0FBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FB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QUk7WUFDaEQsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWTtnQkFDVixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztnQkFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7Z0JBQy9CLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO2dCQUM5QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztlQUM1QixxQkFBcUI7Z0JBQ3hCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7ZUFDakMsZ0JBQWdCLENBQ3BCO1lBQ0QsYUFBYSxlQUFBO1NBQ2QsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ0FuYWx5emVkTW9kdWxlc30gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7bG9jYXRlU3ltYm9sc30gZnJvbSAnLi9sb2NhdGVfc3ltYm9sJztcbmltcG9ydCAqIGFzIG5nIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtpblNwYW59IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIFRyYXZlcnNlIHRoZSB0ZW1wbGF0ZSBBU1QgYW5kIGxvb2sgZm9yIHRoZSBzeW1ib2wgbG9jYXRlZCBhdCBgcG9zaXRpb25gLCB0aGVuXG4gKiByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgcXVpY2sgaW5mby5cbiAqIEBwYXJhbSBpbmZvIHRlbXBsYXRlIEFTVFxuICogQHBhcmFtIHBvc2l0aW9uIGxvY2F0aW9uIG9mIHRoZSBzeW1ib2xcbiAqIEBwYXJhbSBhbmFseXplZE1vZHVsZXMgYWxsIE5nTW9kdWxlcyBpbiB0aGUgcHJvZ3JhbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlSG92ZXIoXG4gICAgaW5mbzogbmcuQXN0UmVzdWx0LCBwb3NpdGlvbjogbnVtYmVyLCBhbmFseXplZE1vZHVsZXM6IE5nQW5hbHl6ZWRNb2R1bGVzKTogdHMuUXVpY2tJbmZvfFxuICAgIHVuZGVmaW5lZCB7XG4gIGNvbnN0IHN5bWJvbEluZm8gPSBsb2NhdGVTeW1ib2xzKGluZm8sIHBvc2l0aW9uKVswXTtcbiAgaWYgKCFzeW1ib2xJbmZvKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtzeW1ib2wsIHNwYW4sIHN0YXRpY1N5bWJvbH0gPSBzeW1ib2xJbmZvO1xuXG4gIC8vIFRoZSBjb250YWluZXIgaXMgZWl0aGVyIHRoZSBzeW1ib2wncyBjb250YWluZXIgKGZvciBleGFtcGxlLCAnQXBwQ29tcG9uZW50J1xuICAvLyBpcyB0aGUgY29udGFpbmVyIG9mIHRoZSBzeW1ib2wgJ3RpdGxlJyBpbiBpdHMgdGVtcGxhdGUpIG9yIHRoZSBOZ01vZHVsZVxuICAvLyB0aGF0IHRoZSBkaXJlY3RpdmUgYmVsb25ncyB0byAodGhlIGNvbnRhaW5lciBvZiBBcHBDb21wb25lbnQgaXMgQXBwTW9kdWxlKS5cbiAgbGV0IGNvbnRhaW5lck5hbWU6IHN0cmluZ3x1bmRlZmluZWQgPSBzeW1ib2wuY29udGFpbmVyPy5uYW1lO1xuICBpZiAoIWNvbnRhaW5lck5hbWUgJiYgc3RhdGljU3ltYm9sKSB7XG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzdGF0aWMgc3ltYm9sIHRoZW4gdGhlIHRhcmdldCBpcyBhIGRpcmVjdGl2ZS5cbiAgICBjb25zdCBuZ01vZHVsZSA9IGFuYWx5emVkTW9kdWxlcy5uZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLmdldChzdGF0aWNTeW1ib2wpO1xuICAgIGNvbnRhaW5lck5hbWUgPSBuZ01vZHVsZT8udHlwZS5yZWZlcmVuY2UubmFtZTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVRdWlja0luZm8oXG4gICAgICBzeW1ib2wubmFtZSwgc3ltYm9sLmtpbmQsIHNwYW4sIGNvbnRhaW5lck5hbWUsIHN5bWJvbC50eXBlPy5uYW1lLCBzeW1ib2wuZG9jdW1lbnRhdGlvbik7XG59XG5cbi8qKlxuICogR2V0IHF1aWNrIGluZm8gZm9yIEFuZ3VsYXIgc2VtYW50aWMgZW50aXRpZXMgaW4gVHlwZVNjcmlwdCBmaWxlcywgbGlrZSBEaXJlY3RpdmVzLlxuICogQHBhcmFtIHBvc2l0aW9uIGxvY2F0aW9uIG9mIHRoZSBzeW1ib2wgaW4gdGhlIHNvdXJjZSBmaWxlXG4gKiBAcGFyYW0gZGVjbGFyYXRpb25zIEFsbCBEaXJlY3RpdmUtbGlrZSBkZWNsYXJhdGlvbnMgaW4gdGhlIHNvdXJjZSBmaWxlLlxuICogQHBhcmFtIGFuYWx5emVkTW9kdWxlcyBhbGwgTmdNb2R1bGVzIGluIHRoZSBwcm9ncmFtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHNIb3ZlcihcbiAgICBwb3NpdGlvbjogbnVtYmVyLCBkZWNsYXJhdGlvbnM6IG5nLkRlY2xhcmF0aW9uW10sXG4gICAgYW5hbHl6ZWRNb2R1bGVzOiBOZ0FuYWx5emVkTW9kdWxlcyk6IHRzLlF1aWNrSW5mb3x1bmRlZmluZWQge1xuICBmb3IgKGNvbnN0IHtkZWNsYXJhdGlvblNwYW4sIG1ldGFkYXRhfSBvZiBkZWNsYXJhdGlvbnMpIHtcbiAgICBpZiAoaW5TcGFuKHBvc2l0aW9uLCBkZWNsYXJhdGlvblNwYW4pKSB7XG4gICAgICBjb25zdCBzdGF0aWNTeW1ib2w6IG5nLlN0YXRpY1N5bWJvbCA9IG1ldGFkYXRhLnR5cGUucmVmZXJlbmNlO1xuICAgICAgY29uc3QgZGlyZWN0aXZlTmFtZSA9IHN0YXRpY1N5bWJvbC5uYW1lO1xuICAgICAgY29uc3Qga2luZCA9IG1ldGFkYXRhLmlzQ29tcG9uZW50ID8gJ2NvbXBvbmVudCcgOiAnZGlyZWN0aXZlJztcbiAgICAgIGNvbnN0IHRleHRTcGFuID0gdHMuY3JlYXRlVGV4dFNwYW5Gcm9tQm91bmRzKGRlY2xhcmF0aW9uU3Bhbi5zdGFydCwgZGVjbGFyYXRpb25TcGFuLmVuZCk7XG4gICAgICBjb25zdCBuZ01vZHVsZSA9IGFuYWx5emVkTW9kdWxlcy5uZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLmdldChzdGF0aWNTeW1ib2wpO1xuICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IG5nTW9kdWxlPy50eXBlLnJlZmVyZW5jZS5uYW1lO1xuICAgICAgcmV0dXJuIGNyZWF0ZVF1aWNrSW5mbyhcbiAgICAgICAgICBkaXJlY3RpdmVOYW1lLCBraW5kLCB0ZXh0U3BhbiwgbW9kdWxlTmFtZSwgdHMuU2NyaXB0RWxlbWVudEtpbmQuY2xhc3NFbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFJldmVyc2UgbWFwcGluZ3Mgb2YgZW51bSB3b3VsZCBnZW5lcmF0ZSBzdHJpbmdzXG5jb25zdCBBTElBU19OQU1FID0gdHMuU3ltYm9sRGlzcGxheVBhcnRLaW5kW3RzLlN5bWJvbERpc3BsYXlQYXJ0S2luZC5hbGlhc05hbWVdO1xuY29uc3QgU1lNQk9MX0lOVEVSRkFDRSA9IHRzLlN5bWJvbERpc3BsYXlQYXJ0S2luZFt0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmQuaW50ZXJmYWNlTmFtZV07XG5jb25zdCBTWU1CT0xfUFVOQyA9IHRzLlN5bWJvbERpc3BsYXlQYXJ0S2luZFt0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmQucHVuY3R1YXRpb25dO1xuY29uc3QgU1lNQk9MX1NQQUNFID0gdHMuU3ltYm9sRGlzcGxheVBhcnRLaW5kW3RzLlN5bWJvbERpc3BsYXlQYXJ0S2luZC5zcGFjZV07XG5jb25zdCBTWU1CT0xfVEVYVCA9IHRzLlN5bWJvbERpc3BsYXlQYXJ0S2luZFt0cy5TeW1ib2xEaXNwbGF5UGFydEtpbmQudGV4dF07XG5cbi8qKlxuICogQ29uc3RydWN0IGEgUXVpY2tJbmZvIG9iamVjdCB0YWtpbmcgaW50byBhY2NvdW50IGl0cyBjb250YWluZXIgYW5kIHR5cGUuXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBRdWlja0luZm8gdGFyZ2V0XG4gKiBAcGFyYW0ga2luZCBjb21wb25lbnQsIGRpcmVjdGl2ZSwgcGlwZSwgZXRjLlxuICogQHBhcmFtIHRleHRTcGFuIHNwYW4gb2YgdGhlIHRhcmdldFxuICogQHBhcmFtIGNvbnRhaW5lck5hbWUgZWl0aGVyIHRoZSBTeW1ib2wncyBjb250YWluZXIgb3IgdGhlIE5nTW9kdWxlIHRoYXQgY29udGFpbnMgdGhlIGRpcmVjdGl2ZVxuICogQHBhcmFtIHR5cGUgdXNlci1mcmllbmRseSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0gZG9jdW1lbnRhdGlvbiBkb2NzdHJpbmcgb3IgY29tbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVRdWlja0luZm8oXG4gICAgbmFtZTogc3RyaW5nLCBraW5kOiBzdHJpbmcsIHRleHRTcGFuOiB0cy5UZXh0U3BhbiwgY29udGFpbmVyTmFtZT86IHN0cmluZywgdHlwZT86IHN0cmluZyxcbiAgICBkb2N1bWVudGF0aW9uPzogdHMuU3ltYm9sRGlzcGxheVBhcnRbXSk6IHRzLlF1aWNrSW5mbyB7XG4gIGNvbnN0IGNvbnRhaW5lckRpc3BsYXlQYXJ0cyA9IGNvbnRhaW5lck5hbWUgP1xuICAgICAgW1xuICAgICAgICB7dGV4dDogY29udGFpbmVyTmFtZSwga2luZDogU1lNQk9MX0lOVEVSRkFDRX0sXG4gICAgICAgIHt0ZXh0OiAnLicsIGtpbmQ6IFNZTUJPTF9QVU5DfSxcbiAgICAgIF0gOlxuICAgICAgW107XG5cbiAgY29uc3QgdHlwZURpc3BsYXlQYXJ0cyA9IHR5cGUgP1xuICAgICAgW1xuICAgICAgICB7dGV4dDogJzonLCBraW5kOiBTWU1CT0xfUFVOQ30sXG4gICAgICAgIHt0ZXh0OiAnICcsIGtpbmQ6IFNZTUJPTF9TUEFDRX0sXG4gICAgICAgIHt0ZXh0OiB0eXBlLCBraW5kOiBTWU1CT0xfSU5URVJGQUNFfSxcbiAgICAgIF0gOlxuICAgICAgW107XG5cbiAgcmV0dXJuIHtcbiAgICBraW5kOiBraW5kIGFzIHRzLlNjcmlwdEVsZW1lbnRLaW5kLFxuICAgIGtpbmRNb2RpZmllcnM6IHRzLlNjcmlwdEVsZW1lbnRLaW5kTW9kaWZpZXIubm9uZSxcbiAgICB0ZXh0U3BhbjogdGV4dFNwYW4sXG4gICAgZGlzcGxheVBhcnRzOiBbXG4gICAgICB7dGV4dDogJygnLCBraW5kOiBTWU1CT0xfUFVOQ30sXG4gICAgICB7dGV4dDoga2luZCwga2luZDogU1lNQk9MX1RFWFR9LFxuICAgICAge3RleHQ6ICcpJywga2luZDogU1lNQk9MX1BVTkN9LFxuICAgICAge3RleHQ6ICcgJywga2luZDogU1lNQk9MX1NQQUNFfSxcbiAgICAgIC4uLmNvbnRhaW5lckRpc3BsYXlQYXJ0cyxcbiAgICAgIHt0ZXh0OiBuYW1lLCBraW5kOiBTWU1CT0xfSU5URVJGQUNFfSxcbiAgICAgIC4uLnR5cGVEaXNwbGF5UGFydHMsXG4gICAgXSxcbiAgICBkb2N1bWVudGF0aW9uLFxuICB9O1xufVxuIl19