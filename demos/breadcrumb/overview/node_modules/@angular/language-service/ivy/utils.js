(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/ivy/utils", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/metadata", "@angular/compiler/src/expression_parser/ast", "@angular/compiler/src/render3/r3_ast", "typescript", "@angular/language-service/ivy/display_parts", "@angular/language-service/ivy/ts_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTemplateLocationFromShimLocation = exports.isWithin = exports.isExternalTemplate = exports.isTypeScriptFile = exports.flatMap = exports.isDollarEvent = exports.filterAliasImports = exports.getDirectiveMatchesForAttribute = exports.makeElementSelector = exports.getDirectiveMatchesForElementTag = exports.getTemplateInfoAtPosition = exports.isExpressionNode = exports.isTemplateNode = exports.isWithinKeyValue = exports.isWithinKey = exports.isTemplateNodeWithKeyAndValue = exports.toTextSpan = exports.getTextSpanOfNode = void 0;
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
    var metadata_1 = require("@angular/compiler-cli/src/ngtsc/metadata");
    var e = require("@angular/compiler/src/expression_parser/ast"); // e for expression AST
    var t = require("@angular/compiler/src/render3/r3_ast"); // t for template AST
    var ts = require("typescript");
    var display_parts_1 = require("@angular/language-service/ivy/display_parts");
    var ts_utils_1 = require("@angular/language-service/ivy/ts_utils");
    function getTextSpanOfNode(node) {
        if (isTemplateNodeWithKeyAndValue(node)) {
            return toTextSpan(node.keySpan);
        }
        else if (node instanceof e.PropertyWrite || node instanceof e.MethodCall ||
            node instanceof e.BindingPipe || node instanceof e.PropertyRead) {
            // The `name` part of a `PropertyWrite`, `MethodCall`, and `BindingPipe` does not
            // have its own AST so there is no way to retrieve a `Symbol` for just the `name` via a specific
            // node.
            return toTextSpan(node.nameSpan);
        }
        else {
            return toTextSpan(node.sourceSpan);
        }
    }
    exports.getTextSpanOfNode = getTextSpanOfNode;
    function toTextSpan(span) {
        var start, end;
        if (span instanceof compiler_1.AbsoluteSourceSpan || span instanceof e.ParseSpan) {
            start = span.start;
            end = span.end;
        }
        else {
            start = span.start.offset;
            end = span.end.offset;
        }
        return { start: start, length: end - start };
    }
    exports.toTextSpan = toTextSpan;
    function isTemplateNodeWithKeyAndValue(node) {
        return isTemplateNode(node) && node.hasOwnProperty('keySpan');
    }
    exports.isTemplateNodeWithKeyAndValue = isTemplateNodeWithKeyAndValue;
    function isWithinKey(position, node) {
        var keySpan = node.keySpan, valueSpan = node.valueSpan;
        if (valueSpan === undefined && node instanceof compiler_1.TmplAstBoundEvent) {
            valueSpan = node.handlerSpan;
        }
        var isWithinKeyValue = isWithin(position, keySpan) || !!(valueSpan && isWithin(position, valueSpan));
        return isWithinKeyValue;
    }
    exports.isWithinKey = isWithinKey;
    function isWithinKeyValue(position, node) {
        var keySpan = node.keySpan, valueSpan = node.valueSpan;
        if (valueSpan === undefined && node instanceof compiler_1.TmplAstBoundEvent) {
            valueSpan = node.handlerSpan;
        }
        var isWithinKeyValue = isWithin(position, keySpan) || !!(valueSpan && isWithin(position, valueSpan));
        return isWithinKeyValue;
    }
    exports.isWithinKeyValue = isWithinKeyValue;
    function isTemplateNode(node) {
        // Template node implements the Node interface so we cannot use instanceof.
        return node.sourceSpan instanceof compiler_1.ParseSourceSpan;
    }
    exports.isTemplateNode = isTemplateNode;
    function isExpressionNode(node) {
        return node instanceof e.AST;
    }
    exports.isExpressionNode = isExpressionNode;
    function getInlineTemplateInfoAtPosition(sf, position, compiler) {
        var expression = ts_utils_1.findTightestNode(sf, position);
        if (expression === undefined) {
            return undefined;
        }
        var classDecl = ts_utils_1.getParentClassDeclaration(expression);
        if (classDecl === undefined) {
            return undefined;
        }
        // Return `undefined` if the position is not on the template expression or the template resource
        // is not inline.
        var resources = compiler.getComponentResources(classDecl);
        if (resources === null || metadata_1.isExternalResource(resources.template) ||
            expression !== resources.template.expression) {
            return undefined;
        }
        var template = compiler.getTemplateTypeChecker().getTemplate(classDecl);
        if (template === null) {
            return undefined;
        }
        return { template: template, component: classDecl };
    }
    /**
     * Retrieves the `ts.ClassDeclaration` at a location along with its template nodes.
     */
    function getTemplateInfoAtPosition(fileName, position, compiler) {
        if (isTypeScriptFile(fileName)) {
            var sf = compiler.getNextProgram().getSourceFile(fileName);
            if (sf === undefined) {
                return undefined;
            }
            return getInlineTemplateInfoAtPosition(sf, position, compiler);
        }
        else {
            return getFirstComponentForTemplateFile(fileName, compiler);
        }
    }
    exports.getTemplateInfoAtPosition = getTemplateInfoAtPosition;
    /**
     * First, attempt to sort component declarations by file name.
     * If the files are the same, sort by start location of the declaration.
     */
    function tsDeclarationSortComparator(a, b) {
        var aFile = a.getSourceFile().fileName;
        var bFile = b.getSourceFile().fileName;
        if (aFile < bFile) {
            return -1;
        }
        else if (aFile > bFile) {
            return 1;
        }
        else {
            return b.getFullStart() - a.getFullStart();
        }
    }
    function getFirstComponentForTemplateFile(fileName, compiler) {
        var e_1, _a;
        var templateTypeChecker = compiler.getTemplateTypeChecker();
        var components = compiler.getComponentsWithTemplateFile(fileName);
        var sortedComponents = Array.from(components).sort(tsDeclarationSortComparator);
        try {
            for (var sortedComponents_1 = tslib_1.__values(sortedComponents), sortedComponents_1_1 = sortedComponents_1.next(); !sortedComponents_1_1.done; sortedComponents_1_1 = sortedComponents_1.next()) {
                var component = sortedComponents_1_1.value;
                if (!ts.isClassDeclaration(component)) {
                    continue;
                }
                var template = templateTypeChecker.getTemplate(component);
                if (template === null) {
                    continue;
                }
                return { template: template, component: component };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sortedComponents_1_1 && !sortedComponents_1_1.done && (_a = sortedComponents_1.return)) _a.call(sortedComponents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    }
    /**
     * Given an attribute node, converts it to string form.
     */
    function toAttributeString(attribute) {
        var _a, _b;
        if (attribute instanceof t.BoundEvent) {
            return "[" + attribute.name + "]";
        }
        else {
            return "[" + attribute.name + "=" + ((_b = (_a = attribute.valueSpan) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '') + "]";
        }
    }
    function getNodeName(node) {
        return node instanceof t.Template ? node.tagName : node.name;
    }
    /**
     * Given a template or element node, returns all attributes on the node.
     */
    function getAttributes(node) {
        var attributes = tslib_1.__spread(node.attributes, node.inputs, node.outputs);
        if (node instanceof t.Template) {
            attributes.push.apply(attributes, tslib_1.__spread(node.templateAttrs));
        }
        return attributes;
    }
    /**
     * Given two `Set`s, returns all items in the `left` which do not appear in the `right`.
     */
    function difference(left, right) {
        var e_2, _a;
        var result = new Set();
        try {
            for (var left_1 = tslib_1.__values(left), left_1_1 = left_1.next(); !left_1_1.done; left_1_1 = left_1.next()) {
                var dir = left_1_1.value;
                if (!right.has(dir)) {
                    result.add(dir);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (left_1_1 && !left_1_1.done && (_a = left_1.return)) _a.call(left_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    }
    /**
     * Given an element or template, determines which directives match because the tag is present. For
     * example, if a directive selector is `div[myAttr]`, this would match div elements but would not if
     * the selector were just `[myAttr]`. We find which directives are applied because of this tag by
     * elimination: compare the directive matches with the tag present against the directive matches
     * without it. The difference would be the directives which match because the tag is present.
     *
     * @param element The element or template node that the attribute/tag is part of.
     * @param directives The list of directives to match against.
     * @returns The list of directives matching the tag name via the strategy described above.
     */
    // TODO(atscott): Add unit tests for this and the one for attributes
    function getDirectiveMatchesForElementTag(element, directives) {
        var attributes = getAttributes(element);
        var allAttrs = attributes.map(toAttributeString);
        var allDirectiveMatches = getDirectiveMatchesForSelector(directives, getNodeName(element) + allAttrs.join(''));
        var matchesWithoutElement = getDirectiveMatchesForSelector(directives, allAttrs.join(''));
        return difference(allDirectiveMatches, matchesWithoutElement);
    }
    exports.getDirectiveMatchesForElementTag = getDirectiveMatchesForElementTag;
    function makeElementSelector(element) {
        var attributes = getAttributes(element);
        var allAttrs = attributes.map(toAttributeString);
        return getNodeName(element) + allAttrs.join('');
    }
    exports.makeElementSelector = makeElementSelector;
    /**
     * Given an attribute name, determines which directives match because the attribute is present. We
     * find which directives are applied because of this attribute by elimination: compare the directive
     * matches with the attribute present against the directive matches without it. The difference would
     * be the directives which match because the attribute is present.
     *
     * @param name The name of the attribute
     * @param hostNode The node which the attribute appears on
     * @param directives The list of directives to match against.
     * @returns The list of directives matching the tag name via the strategy described above.
     */
    function getDirectiveMatchesForAttribute(name, hostNode, directives) {
        var attributes = getAttributes(hostNode);
        var allAttrs = attributes.map(toAttributeString);
        var allDirectiveMatches = getDirectiveMatchesForSelector(directives, getNodeName(hostNode) + allAttrs.join(''));
        var attrsExcludingName = attributes.filter(function (a) { return a.name !== name; }).map(toAttributeString);
        var matchesWithoutAttr = getDirectiveMatchesForSelector(directives, getNodeName(hostNode) + attrsExcludingName.join(''));
        return difference(allDirectiveMatches, matchesWithoutAttr);
    }
    exports.getDirectiveMatchesForAttribute = getDirectiveMatchesForAttribute;
    /**
     * Given a list of directives and a text to use as a selector, returns the directives which match
     * for the selector.
     */
    function getDirectiveMatchesForSelector(directives, selector) {
        var selectors = compiler_1.CssSelector.parse(selector);
        if (selectors.length === 0) {
            return new Set();
        }
        return new Set(directives.filter(function (dir) {
            if (dir.selector === null) {
                return false;
            }
            var matcher = new compiler_1.SelectorMatcher();
            matcher.addSelectables(compiler_1.CssSelector.parse(dir.selector));
            return selectors.some(function (selector) { return matcher.match(selector, null); });
        }));
    }
    /**
     * Returns a new `ts.SymbolDisplayPart` array which has the alias imports from the tcb filtered
     * out, i.e. `i0.NgForOf`.
     */
    function filterAliasImports(displayParts) {
        var tcbAliasImportRegex = /i\d+/;
        function isImportAlias(part) {
            return part.kind === display_parts_1.ALIAS_NAME && tcbAliasImportRegex.test(part.text);
        }
        function isDotPunctuation(part) {
            return part.kind === display_parts_1.SYMBOL_PUNC && part.text === '.';
        }
        return displayParts.filter(function (part, i) {
            var previousPart = displayParts[i - 1];
            var nextPart = displayParts[i + 1];
            var aliasNameFollowedByDot = isImportAlias(part) && nextPart !== undefined && isDotPunctuation(nextPart);
            var dotPrecededByAlias = isDotPunctuation(part) && previousPart !== undefined && isImportAlias(previousPart);
            return !aliasNameFollowedByDot && !dotPrecededByAlias;
        });
    }
    exports.filterAliasImports = filterAliasImports;
    function isDollarEvent(n) {
        return n instanceof e.PropertyRead && n.name === '$event' &&
            n.receiver instanceof e.ImplicitReceiver && !(n.receiver instanceof e.ThisReceiver);
    }
    exports.isDollarEvent = isDollarEvent;
    /**
     * Returns a new array formed by applying a given callback function to each element of the array,
     * and then flattening the result by one level.
     */
    function flatMap(items, f) {
        var e_3, _a;
        var results = [];
        try {
            for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var x = items_1_1.value;
                results.push.apply(results, tslib_1.__spread(f(x)));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return results;
    }
    exports.flatMap = flatMap;
    function isTypeScriptFile(fileName) {
        return fileName.endsWith('.ts');
    }
    exports.isTypeScriptFile = isTypeScriptFile;
    function isExternalTemplate(fileName) {
        return !isTypeScriptFile(fileName);
    }
    exports.isExternalTemplate = isExternalTemplate;
    function isWithin(position, span) {
        var start, end;
        if (span instanceof compiler_1.ParseSourceSpan) {
            start = span.start.offset;
            end = span.end.offset;
        }
        else {
            start = span.start;
            end = span.end;
        }
        // Note both start and end are inclusive because we want to match conditions
        // like ¦start and end¦ where ¦ is the cursor.
        return start <= position && position <= end;
    }
    exports.isWithin = isWithin;
    /**
     * For a given location in a shim file, retrieves the corresponding file url for the template and
     * the span in the template.
     */
    function getTemplateLocationFromShimLocation(templateTypeChecker, shimPath, positionInShimFile) {
        var mapping = templateTypeChecker.getTemplateMappingAtShimLocation({ shimPath: shimPath, positionInShimFile: positionInShimFile });
        if (mapping === null) {
            return null;
        }
        var templateSourceMapping = mapping.templateSourceMapping, span = mapping.span;
        var templateUrl;
        if (templateSourceMapping.type === 'direct') {
            templateUrl = file_system_1.absoluteFromSourceFile(templateSourceMapping.node.getSourceFile());
        }
        else if (templateSourceMapping.type === 'external') {
            templateUrl = file_system_1.absoluteFrom(templateSourceMapping.templateUrl);
        }
        else {
            // This includes indirect mappings, which are difficult to map directly to the code
            // location. Diagnostics similarly return a synthetic template string for this case rather
            // than a real location.
            return null;
        }
        return { templateUrl: templateUrl, span: span };
    }
    exports.getTemplateLocationFromShimLocation = getTemplateLocationFromShimLocation;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL2l2eS91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsOENBQXVIO0lBRXZILDJFQUFpSDtJQUNqSCxxRUFBNEU7SUFHNUUsK0RBQWlFLENBQUUsdUJBQXVCO0lBQzFGLHdEQUEwRCxDQUFTLHFCQUFxQjtJQUN4RiwrQkFBaUM7SUFFakMsNkVBQXdEO0lBQ3hELG1FQUF1RTtJQUV2RSxTQUFnQixpQkFBaUIsQ0FBQyxJQUFrQjtRQUNsRCxJQUFJLDZCQUE2QixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQzthQUFNLElBQ0gsSUFBSSxZQUFZLENBQUMsQ0FBQyxhQUFhLElBQUksSUFBSSxZQUFZLENBQUMsQ0FBQyxVQUFVO1lBQy9ELElBQUksWUFBWSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksWUFBWSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ25FLGlGQUFpRjtZQUNqRixnR0FBZ0c7WUFDaEcsUUFBUTtZQUNSLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQWJELDhDQWFDO0lBRUQsU0FBZ0IsVUFBVSxDQUFDLElBQW9EO1FBQzdFLElBQUksS0FBYSxFQUFFLEdBQVcsQ0FBQztRQUMvQixJQUFJLElBQUksWUFBWSw2QkFBa0IsSUFBSSxJQUFJLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNyRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcs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QU8sc0JBQWpCLEVBQUUsSUFBSSxHQUFJLE9BQU8sS0FBWCxDQUFZO1FBRTlDLElBQUksV0FBMkIsQ0FBQztRQUNoQyxJQUFJLHFCQUFxQixDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDM0MsV0FBVyxHQUFHLG9DQUFzQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2xGO2FBQU0sSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3BELFdBQVcsR0FBRywwQkFBWSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxtRkFBbUY7WUFDbkYsMEZBQTBGO1lBQzFGLHdCQUF3QjtZQUN4QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxFQUFDLFdBQVcsYUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUM7SUFDN0IsQ0FBQztJQXRCRCxrRkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QWJzb2x1dGVTb3VyY2VTcGFuLCBDc3NTZWxlY3RvciwgUGFyc2VTb3VyY2VTcGFuLCBTZWxlY3Rvck1hdGNoZXIsIFRtcGxBc3RCb3VuZEV2ZW50fSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge05nQ29tcGlsZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvY29yZSc7XG5pbXBvcnQge2Fic29sdXRlRnJvbSwgYWJzb2x1dGVGcm9tU291cmNlRmlsZSwgQWJzb2x1dGVGc1BhdGh9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtpc0V4dGVybmFsUmVzb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvbWV0YWRhdGEnO1xuaW1wb3J0IHtEZWNsYXJhdGlvbk5vZGV9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcmVmbGVjdGlvbic7XG5pbXBvcnQge0RpcmVjdGl2ZVN5bWJvbCwgVGVtcGxhdGVUeXBlQ2hlY2tlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy90eXBlY2hlY2svYXBpJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2V4cHJlc3Npb25fcGFyc2VyL2FzdCc7ICAvLyBlIGZvciBleHByZXNzaW9uIEFTVFxuaW1wb3J0ICogYXMgdCBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvcmVuZGVyMy9yM19hc3QnOyAgICAgICAgIC8vIHQgZm9yIHRlbXBsYXRlIEFTVFxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7QUxJQVNfTkFNRSwgU1lNQk9MX1BVTkN9IGZyb20gJy4vZGlzcGxheV9wYXJ0cyc7XG5pbXBvcnQge2ZpbmRUaWdodGVzdE5vZGUsIGdldFBhcmVudENsYXNzRGVjbGFyYXRpb259IGZyb20gJy4vdHNfdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dFNwYW5PZk5vZGUobm9kZTogdC5Ob2RlfGUuQVNUKTogdHMuVGV4dFNwYW4ge1xuICBpZiAoaXNUZW1wbGF0ZU5vZGVXaXRoS2V5QW5kVmFsdWUobm9kZSkpIHtcbiAgICByZXR1cm4gdG9UZXh0U3Bhbihub2RlLmtleVNwYW4pO1xuICB9IGVsc2UgaWYgKFxuICAgICAgbm9kZSBpbnN0YW5jZW9mIGUuUHJvcGVydHlXcml0ZSB8fCBub2RlIGluc3RhbmNlb2YgZS5NZXRob2RDYWxsIHx8XG4gICAgICBub2RlIGluc3RhbmNlb2YgZS5CaW5kaW5nUGlwZSB8fCBub2RlIGluc3RhbmNlb2YgZS5Qcm9wZXJ0eVJlYWQpIHtcbiAgICAvLyBUaGUgYG5hbWVgIHBhcnQgb2YgYSBgUHJvcGVydHlXcml0ZWAsIGBNZXRob2RDYWxsYCwgYW5kIGBCaW5kaW5nUGlwZWAgZG9lcyBub3RcbiAgICAvLyBoYXZlIGl0cyBvd24gQVNUIHNvIHRoZXJlIGlzIG5vIHdheSB0byByZXRyaWV2ZSBhIGBTeW1ib2xgIGZvciBqdXN0IHRoZSBgbmFtZWAgdmlhIGEgc3BlY2lmaWNcbiAgICAvLyBub2RlLlxuICAgIHJldHVybiB0b1RleHRTcGFuKG5vZGUubmFtZVNwYW4pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0b1RleHRTcGFuKG5vZGUuc291cmNlU3Bhbik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGV4dFNwYW4oc3BhbjogQWJzb2x1dGVTb3VyY2VTcGFufFBhcnNlU291cmNlU3BhbnxlLlBhcnNlU3Bhbik6IHRzLlRleHRTcGFuIHtcbiAgbGV0IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyO1xuICBpZiAoc3BhbiBpbnN0YW5jZW9mIEFic29sdXRlU291cmNlU3BhbiB8fCBzcGFuIGluc3RhbmNlb2YgZS5QYXJzZVNwYW4pIHtcbiAgICBzdGFydCA9IHNwYW4uc3RhcnQ7XG4gICAgZW5kID0gc3Bhbi5lbmQ7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBzcGFuLnN0YXJ0Lm9mZnNldDtcbiAgICBlbmQgPSBzcGFuLmVuZC5vZmZzZXQ7XG4gIH1cbiAgcmV0dXJuIHtzdGFydCwgbGVuZ3RoOiBlbmQgLSBzdGFydH07XG59XG5cbmludGVyZmFjZSBOb2RlV2l0aEtleUFuZFZhbHVlIGV4dGVuZHMgdC5Ob2RlIHtcbiAga2V5U3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RlbXBsYXRlTm9kZVdpdGhLZXlBbmRWYWx1ZShub2RlOiB0Lk5vZGV8ZS5BU1QpOiBub2RlIGlzIE5vZGVXaXRoS2V5QW5kVmFsdWUge1xuICByZXR1cm4gaXNUZW1wbGF0ZU5vZGUobm9kZSkgJiYgbm9kZS5oYXNPd25Qcm9wZXJ0eSgna2V5U3BhbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXaXRoaW5LZXkocG9zaXRpb246IG51bWJlciwgbm9kZTogTm9kZVdpdGhLZXlBbmRWYWx1ZSk6IGJvb2xlYW4ge1xuICBsZXQge2tleVNwYW4sIHZhbHVlU3Bhbn0gPSBub2RlO1xuICBpZiAodmFsdWVTcGFuID09PSB1bmRlZmluZWQgJiYgbm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RCb3VuZEV2ZW50KSB7XG4gICAgdmFsdWVTcGFuID0gbm9kZS5oYW5kbGVyU3BhbjtcbiAgfVxuICBjb25zdCBpc1dpdGhpbktleVZhbHVlID1cbiAgICAgIGlzV2l0aGluKHBvc2l0aW9uLCBrZXlTcGFuKSB8fCAhISh2YWx1ZVNwYW4gJiYgaXNXaXRoaW4ocG9zaXRpb24sIHZhbHVlU3BhbikpO1xuICByZXR1cm4gaXNXaXRoaW5LZXlWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2l0aGluS2V5VmFsdWUocG9zaXRpb246IG51bWJlciwgbm9kZTogTm9kZVdpdGhLZXlBbmRWYWx1ZSk6IGJvb2xlYW4ge1xuICBsZXQge2tleVNwYW4sIHZhbHVlU3Bhbn0gPSBub2RlO1xuICBpZiAodmFsdWVTcGFuID09PSB1bmRlZmluZWQgJiYgbm9kZSBpbnN0YW5jZW9mIFRtcGxBc3RCb3VuZEV2ZW50KSB7XG4gICAgdmFsdWVTcGFuID0gbm9kZS5oYW5kbGVyU3BhbjtcbiAgfVxuICBjb25zdCBpc1dpdGhpbktleVZhbHVlID1cbiAgICAgIGlzV2l0aGluKHBvc2l0aW9uLCBrZXlTcGFuKSB8fCAhISh2YWx1ZVNwYW4gJiYgaXNXaXRoaW4ocG9zaXRpb24sIHZhbHVlU3BhbikpO1xuICByZXR1cm4gaXNXaXRoaW5LZXlWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVtcGxhdGVOb2RlKG5vZGU6IHQuTm9kZXxlLkFTVCk6IG5vZGUgaXMgdC5Ob2RlIHtcbiAgLy8gVGVtcGxhdGUgbm9kZSBpbXBsZW1lbnRzIHRoZSBOb2RlIGludGVyZmFjZSBzbyB3ZSBjYW5ub3QgdXNlIGluc3RhbmNlb2YuXG4gIHJldHVybiBub2RlLnNvdXJjZVNwYW4gaW5zdGFuY2VvZiBQYXJzZVNvdXJjZVNwYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4cHJlc3Npb25Ob2RlKG5vZGU6IHQuTm9kZXxlLkFTVCk6IG5vZGUgaXMgZS5BU1Qge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIGUuQVNUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlSW5mbyB7XG4gIHRlbXBsYXRlOiB0Lk5vZGVbXTtcbiAgY29tcG9uZW50OiB0cy5DbGFzc0RlY2xhcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRJbmxpbmVUZW1wbGF0ZUluZm9BdFBvc2l0aW9uKFxuICAgIHNmOiB0cy5Tb3VyY2VGaWxlLCBwb3NpdGlvbjogbnVtYmVyLCBjb21waWxlcjogTmdDb21waWxlcik6IFRlbXBsYXRlSW5mb3x1bmRlZmluZWQge1xuICBjb25zdCBleHByZXNzaW9uID0gZmluZFRpZ2h0ZXN0Tm9kZShzZiwgcG9zaXRpb24pO1xuICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBjbGFzc0RlY2wgPSBnZXRQYXJlbnRDbGFzc0RlY2xhcmF0aW9uKGV4cHJlc3Npb24pO1xuICBpZiAoY2xhc3NEZWNsID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gUmV0dXJuIGB1bmRlZmluZWRgIGlmIHRoZSBwb3NpdGlvbiBpcyBub3Qgb24gdGhlIHRlbXBsYXRlIGV4cHJlc3Npb24gb3IgdGhlIHRlbXBsYXRlIHJlc291cmNlXG4gIC8vIGlzIG5vdCBpbmxpbmUuXG4gIGNvbnN0IHJlc291cmNlcyA9IGNvbXBpbGVyLmdldENvbXBvbmVudFJlc291cmNlcyhjbGFzc0RlY2wpO1xuICBpZiAocmVzb3VyY2VzID09PSBudWxsIHx8IGlzRXh0ZXJuYWxSZXNvdXJjZShyZXNvdXJjZXMudGVtcGxhdGUpIHx8XG4gICAgICBleHByZXNzaW9uICE9PSByZXNvdXJjZXMudGVtcGxhdGUuZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZSA9IGNvbXBpbGVyLmdldFRlbXBsYXRlVHlwZUNoZWNrZXIoKS5nZXRUZW1wbGF0ZShjbGFzc0RlY2wpO1xuICBpZiAodGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHt0ZW1wbGF0ZSwgY29tcG9uZW50OiBjbGFzc0RlY2x9O1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgYHRzLkNsYXNzRGVjbGFyYXRpb25gIGF0IGEgbG9jYXRpb24gYWxvbmcgd2l0aCBpdHMgdGVtcGxhdGUgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZUluZm9BdFBvc2l0aW9uKFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIsIGNvbXBpbGVyOiBOZ0NvbXBpbGVyKTogVGVtcGxhdGVJbmZvfHVuZGVmaW5lZCB7XG4gIGlmIChpc1R5cGVTY3JpcHRGaWxlKGZpbGVOYW1lKSkge1xuICAgIGNvbnN0IHNmID0gY29tcGlsZXIuZ2V0TmV4dFByb2dyYW0oKS5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKTtcbiAgICBpZiAoc2YgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0SW5saW5lVGVtcGxhdGVJbmZvQXRQb3NpdGlvbihzZiwgcG9zaXRpb24sIGNvbXBpbGVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0Rmlyc3RDb21wb25lbnRGb3JUZW1wbGF0ZUZpbGUoZmlsZU5hbWUsIGNvbXBpbGVyKTtcbiAgfVxufVxuXG4vKipcbiAqIEZpcnN0LCBhdHRlbXB0IHRvIHNvcnQgY29tcG9uZW50IGRlY2xhcmF0aW9ucyBieSBmaWxlIG5hbWUuXG4gKiBJZiB0aGUgZmlsZXMgYXJlIHRoZSBzYW1lLCBzb3J0IGJ5IHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBkZWNsYXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdHNEZWNsYXJhdGlvblNvcnRDb21wYXJhdG9yKGE6IERlY2xhcmF0aW9uTm9kZSwgYjogRGVjbGFyYXRpb25Ob2RlKTogbnVtYmVyIHtcbiAgY29uc3QgYUZpbGUgPSBhLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZTtcbiAgY29uc3QgYkZpbGUgPSBiLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZTtcbiAgaWYgKGFGaWxlIDwgYkZpbGUpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoYUZpbGUgPiBiRmlsZSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBiLmdldEZ1bGxTdGFydCgpIC0gYS5nZXRGdWxsU3RhcnQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudEZvclRlbXBsYXRlRmlsZShmaWxlTmFtZTogc3RyaW5nLCBjb21waWxlcjogTmdDb21waWxlcik6IFRlbXBsYXRlSW5mb3xcbiAgICB1bmRlZmluZWQge1xuICBjb25zdCB0ZW1wbGF0ZVR5cGVDaGVja2VyID0gY29tcGlsZXIuZ2V0VGVtcGxhdGVUeXBlQ2hlY2tlcigpO1xuICBjb25zdCBjb21wb25lbnRzID0gY29tcGlsZXIuZ2V0Q29tcG9uZW50c1dpdGhUZW1wbGF0ZUZpbGUoZmlsZU5hbWUpO1xuICBjb25zdCBzb3J0ZWRDb21wb25lbnRzID0gQXJyYXkuZnJvbShjb21wb25lbnRzKS5zb3J0KHRzRGVjbGFyYXRpb25Tb3J0Q29tcGFyYXRvcik7XG4gIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNvcnRlZENvbXBvbmVudHMpIHtcbiAgICBpZiAoIXRzLmlzQ2xhc3NEZWNsYXJhdGlvbihjb21wb25lbnQpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZVR5cGVDaGVja2VyLmdldFRlbXBsYXRlKGNvbXBvbmVudCk7XG4gICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIHt0ZW1wbGF0ZSwgY29tcG9uZW50fTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gYXR0cmlidXRlIG5vZGUsIGNvbnZlcnRzIGl0IHRvIHN0cmluZyBmb3JtLlxuICovXG5mdW5jdGlvbiB0b0F0dHJpYnV0ZVN0cmluZyhhdHRyaWJ1dGU6IHQuVGV4dEF0dHJpYnV0ZXx0LkJvdW5kQXR0cmlidXRlfHQuQm91bmRFdmVudCk6IHN0cmluZyB7XG4gIGlmIChhdHRyaWJ1dGUgaW5zdGFuY2VvZiB0LkJvdW5kRXZlbnQpIHtcbiAgICByZXR1cm4gYFske2F0dHJpYnV0ZS5uYW1lfV1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgWyR7YXR0cmlidXRlLm5hbWV9PSR7YXR0cmlidXRlLnZhbHVlU3Bhbj8udG9TdHJpbmcoKSA/PyAnJ31dYDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXROb2RlTmFtZShub2RlOiB0LlRlbXBsYXRlfHQuRWxlbWVudCk6IHN0cmluZyB7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgdC5UZW1wbGF0ZSA/IG5vZGUudGFnTmFtZSA6IG5vZGUubmFtZTtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIHRlbXBsYXRlIG9yIGVsZW1lbnQgbm9kZSwgcmV0dXJucyBhbGwgYXR0cmlidXRlcyBvbiB0aGUgbm9kZS5cbiAqL1xuZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhub2RlOiB0LlRlbXBsYXRlfFxuICAgICAgICAgICAgICAgICAgICAgICB0LkVsZW1lbnQpOiBBcnJheTx0LlRleHRBdHRyaWJ1dGV8dC5Cb3VuZEF0dHJpYnV0ZXx0LkJvdW5kRXZlbnQ+IHtcbiAgY29uc3QgYXR0cmlidXRlczogQXJyYXk8dC5UZXh0QXR0cmlidXRlfHQuQm91bmRBdHRyaWJ1dGV8dC5Cb3VuZEV2ZW50PiA9XG4gICAgICBbLi4ubm9kZS5hdHRyaWJ1dGVzLCAuLi5ub2RlLmlucHV0cywgLi4ubm9kZS5vdXRwdXRzXTtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiB0LlRlbXBsYXRlKSB7XG4gICAgYXR0cmlidXRlcy5wdXNoKC4uLm5vZGUudGVtcGxhdGVBdHRycyk7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZXM7XG59XG5cbi8qKlxuICogR2l2ZW4gdHdvIGBTZXRgcywgcmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGBsZWZ0YCB3aGljaCBkbyBub3QgYXBwZWFyIGluIHRoZSBgcmlnaHRgLlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlPFQ+KGxlZnQ6IFNldDxUPiwgcmlnaHQ6IFNldDxUPik6IFNldDxUPiB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8VD4oKTtcbiAgZm9yIChjb25zdCBkaXIgb2YgbGVmdCkge1xuICAgIGlmICghcmlnaHQuaGFzKGRpcikpIHtcbiAgICAgIHJlc3VsdC5hZGQoZGlyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50IG9yIHRlbXBsYXRlLCBkZXRlcm1pbmVzIHdoaWNoIGRpcmVjdGl2ZXMgbWF0Y2ggYmVjYXVzZSB0aGUgdGFnIGlzIHByZXNlbnQuIEZvclxuICogZXhhbXBsZSwgaWYgYSBkaXJlY3RpdmUgc2VsZWN0b3IgaXMgYGRpdltteUF0dHJdYCwgdGhpcyB3b3VsZCBtYXRjaCBkaXYgZWxlbWVudHMgYnV0IHdvdWxkIG5vdCBpZlxuICogdGhlIHNlbGVjdG9yIHdlcmUganVzdCBgW215QXR0cl1gLiBXZSBmaW5kIHdoaWNoIGRpcmVjdGl2ZXMgYXJlIGFwcGxpZWQgYmVjYXVzZSBvZiB0aGlzIHRhZyBieVxuICogZWxpbWluYXRpb246IGNvbXBhcmUgdGhlIGRpcmVjdGl2ZSBtYXRjaGVzIHdpdGggdGhlIHRhZyBwcmVzZW50IGFnYWluc3QgdGhlIGRpcmVjdGl2ZSBtYXRjaGVzXG4gKiB3aXRob3V0IGl0LiBUaGUgZGlmZmVyZW5jZSB3b3VsZCBiZSB0aGUgZGlyZWN0aXZlcyB3aGljaCBtYXRjaCBiZWNhdXNlIHRoZSB0YWcgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBvciB0ZW1wbGF0ZSBub2RlIHRoYXQgdGhlIGF0dHJpYnV0ZS90YWcgaXMgcGFydCBvZi5cbiAqIEBwYXJhbSBkaXJlY3RpdmVzIFRoZSBsaXN0IG9mIGRpcmVjdGl2ZXMgdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEByZXR1cm5zIFRoZSBsaXN0IG9mIGRpcmVjdGl2ZXMgbWF0Y2hpbmcgdGhlIHRhZyBuYW1lIHZpYSB0aGUgc3RyYXRlZ3kgZGVzY3JpYmVkIGFib3ZlLlxuICovXG4vLyBUT0RPKGF0c2NvdHQpOiBBZGQgdW5pdCB0ZXN0cyBmb3IgdGhpcyBhbmQgdGhlIG9uZSBmb3IgYXR0cmlidXRlc1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpcmVjdGl2ZU1hdGNoZXNGb3JFbGVtZW50VGFnKFxuICAgIGVsZW1lbnQ6IHQuVGVtcGxhdGV8dC5FbGVtZW50LCBkaXJlY3RpdmVzOiBEaXJlY3RpdmVTeW1ib2xbXSk6IFNldDxEaXJlY3RpdmVTeW1ib2w+IHtcbiAgY29uc3QgYXR0cmlidXRlcyA9IGdldEF0dHJpYnV0ZXMoZWxlbWVudCk7XG4gIGNvbnN0IGFsbEF0dHJzID0gYXR0cmlidXRlcy5tYXAodG9BdHRyaWJ1dGVTdHJpbmcpO1xuICBjb25zdCBhbGxEaXJlY3RpdmVNYXRjaGVzID1cbiAgICAgIGdldERpcmVjdGl2ZU1hdGNoZXNGb3JTZWxlY3RvcihkaXJlY3RpdmVzLCBnZXROb2RlTmFtZShlbGVtZW50KSArIGFsbEF0dHJzLmpvaW4oJycpKTtcbiAgY29uc3QgbWF0Y2hlc1dpdGhvdXRFbGVtZW50ID0gZ2V0RGlyZWN0aXZlTWF0Y2hlc0ZvclNlbGVjdG9yKGRpcmVjdGl2ZXMsIGFsbEF0dHJzLmpvaW4oJycpKTtcbiAgcmV0dXJuIGRpZmZlcmVuY2UoYWxsRGlyZWN0aXZlTWF0Y2hlcywgbWF0Y2hlc1dpdGhvdXRFbGVtZW50KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVsZW1lbnRTZWxlY3RvcihlbGVtZW50OiB0LkVsZW1lbnR8dC5UZW1wbGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQpO1xuICBjb25zdCBhbGxBdHRycyA9IGF0dHJpYnV0ZXMubWFwKHRvQXR0cmlidXRlU3RyaW5nKTtcbiAgcmV0dXJuIGdldE5vZGVOYW1lKGVsZW1lbnQpICsgYWxsQXR0cnMuam9pbignJyk7XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gYXR0cmlidXRlIG5hbWUsIGRldGVybWluZXMgd2hpY2ggZGlyZWN0aXZlcyBtYXRjaCBiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudC4gV2VcbiAqIGZpbmQgd2hpY2ggZGlyZWN0aXZlcyBhcmUgYXBwbGllZCBiZWNhdXNlIG9mIHRoaXMgYXR0cmlidXRlIGJ5IGVsaW1pbmF0aW9uOiBjb21wYXJlIHRoZSBkaXJlY3RpdmVcbiAqIG1hdGNoZXMgd2l0aCB0aGUgYXR0cmlidXRlIHByZXNlbnQgYWdhaW5zdCB0aGUgZGlyZWN0aXZlIG1hdGNoZXMgd2l0aG91dCBpdC4gVGhlIGRpZmZlcmVuY2Ugd291bGRcbiAqIGJlIHRoZSBkaXJlY3RpdmVzIHdoaWNoIG1hdGNoIGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSBob3N0Tm9kZSBUaGUgbm9kZSB3aGljaCB0aGUgYXR0cmlidXRlIGFwcGVhcnMgb25cbiAqIEBwYXJhbSBkaXJlY3RpdmVzIFRoZSBsaXN0IG9mIGRpcmVjdGl2ZXMgdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEByZXR1cm5zIFRoZSBsaXN0IG9mIGRpcmVjdGl2ZXMgbWF0Y2hpbmcgdGhlIHRhZyBuYW1lIHZpYSB0aGUgc3RyYXRlZ3kgZGVzY3JpYmVkIGFib3ZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTWF0Y2hlc0ZvckF0dHJpYnV0ZShcbiAgICBuYW1lOiBzdHJpbmcsIGhvc3ROb2RlOiB0LlRlbXBsYXRlfHQuRWxlbWVudCxcbiAgICBkaXJlY3RpdmVzOiBEaXJlY3RpdmVTeW1ib2xbXSk6IFNldDxEaXJlY3RpdmVTeW1ib2w+IHtcbiAgY29uc3QgYXR0cmlidXRlcyA9IGdldEF0dHJpYnV0ZXMoaG9zdE5vZGUpO1xuICBjb25zdCBhbGxBdHRycyA9IGF0dHJpYnV0ZXMubWFwKHRvQXR0cmlidXRlU3RyaW5nKTtcbiAgY29uc3QgYWxsRGlyZWN0aXZlTWF0Y2hlcyA9XG4gICAgICBnZXREaXJlY3RpdmVNYXRjaGVzRm9yU2VsZWN0b3IoZGlyZWN0aXZlcywgZ2V0Tm9kZU5hbWUoaG9zdE5vZGUpICsgYWxsQXR0cnMuam9pbignJykpO1xuICBjb25zdCBhdHRyc0V4Y2x1ZGluZ05hbWUgPSBhdHRyaWJ1dGVzLmZpbHRlcihhID0+IGEubmFtZSAhPT0gbmFtZSkubWFwKHRvQXR0cmlidXRlU3RyaW5nKTtcbiAgY29uc3QgbWF0Y2hlc1dpdGhvdXRBdHRyID0gZ2V0RGlyZWN0aXZlTWF0Y2hlc0ZvclNlbGVjdG9yKFxuICAgICAgZGlyZWN0aXZlcywgZ2V0Tm9kZU5hbWUoaG9zdE5vZGUpICsgYXR0cnNFeGNsdWRpbmdOYW1lLmpvaW4oJycpKTtcbiAgcmV0dXJuIGRpZmZlcmVuY2UoYWxsRGlyZWN0aXZlTWF0Y2hlcywgbWF0Y2hlc1dpdGhvdXRBdHRyKTtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgZGlyZWN0aXZlcyBhbmQgYSB0ZXh0IHRvIHVzZSBhcyBhIHNlbGVjdG9yLCByZXR1cm5zIHRoZSBkaXJlY3RpdmVzIHdoaWNoIG1hdGNoXG4gKiBmb3IgdGhlIHNlbGVjdG9yLlxuICovXG5mdW5jdGlvbiBnZXREaXJlY3RpdmVNYXRjaGVzRm9yU2VsZWN0b3IoXG4gICAgZGlyZWN0aXZlczogRGlyZWN0aXZlU3ltYm9sW10sIHNlbGVjdG9yOiBzdHJpbmcpOiBTZXQ8RGlyZWN0aXZlU3ltYm9sPiB7XG4gIGNvbnN0IHNlbGVjdG9ycyA9IENzc1NlbGVjdG9yLnBhcnNlKHNlbGVjdG9yKTtcbiAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IFNldCgpO1xuICB9XG4gIHJldHVybiBuZXcgU2V0KGRpcmVjdGl2ZXMuZmlsdGVyKChkaXI6IERpcmVjdGl2ZVN5bWJvbCkgPT4ge1xuICAgIGlmIChkaXIuc2VsZWN0b3IgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaGVyID0gbmV3IFNlbGVjdG9yTWF0Y2hlcigpO1xuICAgIG1hdGNoZXIuYWRkU2VsZWN0YWJsZXMoQ3NzU2VsZWN0b3IucGFyc2UoZGlyLnNlbGVjdG9yKSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzLnNvbWUoc2VsZWN0b3IgPT4gbWF0Y2hlci5tYXRjaChzZWxlY3RvciwgbnVsbCkpO1xuICB9KSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBgdHMuU3ltYm9sRGlzcGxheVBhcnRgIGFycmF5IHdoaWNoIGhhcyB0aGUgYWxpYXMgaW1wb3J0cyBmcm9tIHRoZSB0Y2IgZmlsdGVyZWRcbiAqIG91dCwgaS5lLiBgaTAuTmdGb3JPZmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJBbGlhc0ltcG9ydHMoZGlzcGxheVBhcnRzOiB0cy5TeW1ib2xEaXNwbGF5UGFydFtdKTogdHMuU3ltYm9sRGlzcGxheVBhcnRbXSB7XG4gIGNvbnN0IHRjYkFsaWFzSW1wb3J0UmVnZXggPSAvaVxcZCsvO1xuICBmdW5jdGlvbiBpc0ltcG9ydEFsaWFzKHBhcnQ6IHtraW5kOiBzdHJpbmcsIHRleHQ6IHN0cmluZ30pIHtcbiAgICByZXR1cm4gcGFydC5raW5kID09PSBBTElBU19OQU1FICYmIHRjYkFsaWFzSW1wb3J0UmVnZXgudGVzdChwYXJ0LnRleHQpO1xuICB9XG4gIGZ1bmN0aW9uIGlzRG90UHVuY3R1YXRpb24ocGFydDoge2tpbmQ6IHN0cmluZywgdGV4dDogc3RyaW5nfSkge1xuICAgIHJldHVybiBwYXJ0LmtpbmQgPT09IFNZTUJPTF9QVU5DICYmIHBhcnQudGV4dCA9PT0gJy4nO1xuICB9XG5cbiAgcmV0dXJuIGRpc3BsYXlQYXJ0cy5maWx0ZXIoKHBhcnQsIGkpID0+IHtcbiAgICBjb25zdCBwcmV2aW91c1BhcnQgPSBkaXNwbGF5UGFydHNbaSAtIDFdO1xuICAgIGNvbnN0IG5leHRQYXJ0ID0gZGlzcGxheVBhcnRzW2kgKyAxXTtcblxuICAgIGNvbnN0IGFsaWFzTmFtZUZvbGxvd2VkQnlEb3QgPVxuICAgICAgICBpc0ltcG9ydEFsaWFzKHBhcnQpICYmIG5leHRQYXJ0ICE9PSB1bmRlZmluZWQgJiYgaXNEb3RQdW5jdHVhdGlvbihuZXh0UGFydCk7XG4gICAgY29uc3QgZG90UHJlY2VkZWRCeUFsaWFzID1cbiAgICAgICAgaXNEb3RQdW5jdHVhdGlvbihwYXJ0KSAmJiBwcmV2aW91c1BhcnQgIT09IHVuZGVmaW5lZCAmJiBpc0ltcG9ydEFsaWFzKHByZXZpb3VzUGFydCk7XG5cbiAgICByZXR1cm4gIWFsaWFzTmFtZUZvbGxvd2VkQnlEb3QgJiYgIWRvdFByZWNlZGVkQnlBbGlhcztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RvbGxhckV2ZW50KG46IHQuTm9kZXxlLkFTVCk6IG4gaXMgZS5Qcm9wZXJ0eVJlYWQge1xuICByZXR1cm4gbiBpbnN0YW5jZW9mIGUuUHJvcGVydHlSZWFkICYmIG4ubmFtZSA9PT0gJyRldmVudCcgJiZcbiAgICAgIG4ucmVjZWl2ZXIgaW5zdGFuY2VvZiBlLkltcGxpY2l0UmVjZWl2ZXIgJiYgIShuLnJlY2VpdmVyIGluc3RhbmNlb2YgZS5UaGlzUmVjZWl2ZXIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgZm9ybWVkIGJ5IGFwcGx5aW5nIGEgZ2l2ZW4gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSxcbiAqIGFuZCB0aGVuIGZsYXR0ZW5pbmcgdGhlIHJlc3VsdCBieSBvbmUgbGV2ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0TWFwPFQsIFI+KGl0ZW1zOiBUW118cmVhZG9ubHkgVFtdLCBmOiAoaXRlbTogVCkgPT4gUltdIHwgcmVhZG9ubHkgUltdKTogUltdIHtcbiAgY29uc3QgcmVzdWx0czogUltdID0gW107XG4gIGZvciAoY29uc3QgeCBvZiBpdGVtcykge1xuICAgIHJlc3VsdHMucHVzaCguLi5mKHgpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZVNjcmlwdEZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gZmlsZU5hbWUuZW5kc1dpdGgoJy50cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFeHRlcm5hbFRlbXBsYXRlKGZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc1R5cGVTY3JpcHRGaWxlKGZpbGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2l0aGluKHBvc2l0aW9uOiBudW1iZXIsIHNwYW46IEFic29sdXRlU291cmNlU3BhbnxQYXJzZVNvdXJjZVNwYW4pOiBib29sZWFuIHtcbiAgbGV0IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyO1xuICBpZiAoc3BhbiBpbnN0YW5jZW9mIFBhcnNlU291cmNlU3Bhbikge1xuICAgIHN0YXJ0ID0gc3Bhbi5zdGFydC5vZmZzZXQ7XG4gICAgZW5kID0gc3Bhbi5lbmQub2Zmc2V0O1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0ID0gc3Bhbi5zdGFydDtcbiAgICBlbmQgPSBzcGFuLmVuZDtcbiAgfVxuICAvLyBOb3RlIGJvdGggc3RhcnQgYW5kIGVuZCBhcmUgaW5jbHVzaXZlIGJlY2F1c2Ugd2Ugd2FudCB0byBtYXRjaCBjb25kaXRpb25zXG4gIC8vIGxpa2UgwqZzdGFydCBhbmQgZW5kwqYgd2hlcmUgwqYgaXMgdGhlIGN1cnNvci5cbiAgcmV0dXJuIHN0YXJ0IDw9IHBvc2l0aW9uICYmIHBvc2l0aW9uIDw9IGVuZDtcbn1cblxuLyoqXG4gKiBGb3IgYSBnaXZlbiBsb2NhdGlvbiBpbiBhIHNoaW0gZmlsZSwgcmV0cmlldmVzIHRoZSBjb3JyZXNwb25kaW5nIGZpbGUgdXJsIGZvciB0aGUgdGVtcGxhdGUgYW5kXG4gKiB0aGUgc3BhbiBpbiB0aGUgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZUxvY2F0aW9uRnJvbVNoaW1Mb2NhdGlvbihcbiAgICB0ZW1wbGF0ZVR5cGVDaGVja2VyOiBUZW1wbGF0ZVR5cGVDaGVja2VyLCBzaGltUGF0aDogQWJzb2x1dGVGc1BhdGgsXG4gICAgcG9zaXRpb25JblNoaW1GaWxlOiBudW1iZXIpOiB7dGVtcGxhdGVVcmw6IEFic29sdXRlRnNQYXRoLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW59fG51bGwge1xuICBjb25zdCBtYXBwaW5nID1cbiAgICAgIHRlbXBsYXRlVHlwZUNoZWNrZXIuZ2V0VGVtcGxhdGVNYXBwaW5nQXRTaGltTG9jYXRpb24oe3NoaW1QYXRoLCBwb3NpdGlvbkluU2hpbUZpbGV9KTtcbiAgaWYgKG1hcHBpbmcgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7dGVtcGxhdGVTb3VyY2VNYXBwaW5nLCBzcGFufSA9IG1hcHBpbmc7XG5cbiAgbGV0IHRlbXBsYXRlVXJsOiBBYnNvbHV0ZUZzUGF0aDtcbiAgaWYgKHRlbXBsYXRlU291cmNlTWFwcGluZy50eXBlID09PSAnZGlyZWN0Jykge1xuICAgIHRlbXBsYXRlVXJsID0gYWJzb2x1dGVGcm9tU291cmNlRmlsZSh0ZW1wbGF0ZVNvdXJjZU1hcHBpbmcubm9kZS5nZXRTb3VyY2VGaWxlKCkpO1xuICB9IGVsc2UgaWYgKHRlbXBsYXRlU291cmNlTWFwcGluZy50eXBlID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgdGVtcGxhdGVVcmwgPSBhYnNvbHV0ZUZyb20odGVtcGxhdGVTb3VyY2VNYXBwaW5nLnRlbXBsYXRlVXJsKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGlzIGluY2x1ZGVzIGluZGlyZWN0IG1hcHBpbmdzLCB3aGljaCBhcmUgZGlmZmljdWx0IHRvIG1hcCBkaXJlY3RseSB0byB0aGUgY29kZVxuICAgIC8vIGxvY2F0aW9uLiBEaWFnbm9zdGljcyBzaW1pbGFybHkgcmV0dXJuIGEgc3ludGhldGljIHRlbXBsYXRlIHN0cmluZyBmb3IgdGhpcyBjYXNlIHJhdGhlclxuICAgIC8vIHRoYW4gYSByZWFsIGxvY2F0aW9uLlxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7dGVtcGxhdGVVcmwsIHNwYW59O1xufSJdfQ==