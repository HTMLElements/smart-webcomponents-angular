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
        define("@angular/language-service/ivy/attribute_completions", ["require", "exports", "tslib", "@angular/compiler", "typescript", "@angular/language-service/ivy/display_parts", "@angular/language-service/ivy/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAttributeCompletionSymbol = exports.addAttributeCompletionEntries = exports.buildAttributeCompletionTable = exports.AttributeCompletionKind = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var display_parts_1 = require("@angular/language-service/ivy/display_parts");
    var utils_1 = require("@angular/language-service/ivy/utils");
    /**
     * Differentiates different kinds of `AttributeCompletion`s.
     */
    var AttributeCompletionKind;
    (function (AttributeCompletionKind) {
        /**
         * Completion of an attribute from the HTML schema.
         *
         * Attributes often have a corresponding DOM property of the same name.
         */
        AttributeCompletionKind[AttributeCompletionKind["DomAttribute"] = 0] = "DomAttribute";
        /**
         * Completion of a property from the DOM schema.
         *
         * `DomProperty` completions are generated only for properties which don't share their name with
         * an HTML attribute.
         */
        AttributeCompletionKind[AttributeCompletionKind["DomProperty"] = 1] = "DomProperty";
        /**
         * Completion of an attribute that results in a new directive being matched on an element.
         */
        AttributeCompletionKind[AttributeCompletionKind["DirectiveAttribute"] = 2] = "DirectiveAttribute";
        /**
         * Completion of an attribute that results in a new structural directive being matched on an
         * element.
         */
        AttributeCompletionKind[AttributeCompletionKind["StructuralDirectiveAttribute"] = 3] = "StructuralDirectiveAttribute";
        /**
         * Completion of an input from a directive which is either present on the element, or becomes
         * present after the addition of this attribute.
         */
        AttributeCompletionKind[AttributeCompletionKind["DirectiveInput"] = 4] = "DirectiveInput";
        /**
         * Completion of an output from a directive which is either present on the element, or becomes
         * present after the addition of this attribute.
         */
        AttributeCompletionKind[AttributeCompletionKind["DirectiveOutput"] = 5] = "DirectiveOutput";
    })(AttributeCompletionKind = exports.AttributeCompletionKind || (exports.AttributeCompletionKind = {}));
    /**
     * Given an element and its context, produce a `Map` of all possible attribute completions.
     *
     * 3 kinds of attributes are considered for completion, from highest to lowest priority:
     *
     * 1. Inputs/outputs of directives present on the element already.
     * 2. Inputs/outputs of directives that are not present on the element, but which would become
     *    present if such a binding is added.
     * 3. Attributes from the DOM schema for the element.
     *
     * The priority of these options determines which completions are added to the `Map`. If a directive
     * input shares the same name as a DOM attribute, the `Map` will reflect the directive input
     * completion, not the DOM completion for that name.
     */
    function buildAttributeCompletionTable(component, element, checker, includeDomSchemaAttributes) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g, e_8, _h;
        var table = new Map();
        // Use the `ElementSymbol` or `TemplateSymbol` to iterate over directives present on the node, and
        // their inputs/outputs. These have the highest priority of completion results.
        var symbol = checker.getSymbolOfNode(element, component);
        var presentDirectives = new Set();
        if (symbol !== null) {
            try {
                // An `ElementSymbol` was available. This means inputs and outputs for directives on the
                // element can be added to the completion table.
                for (var _j = tslib_1.__values(symbol.directives), _k = _j.next(); !_k.done; _k = _j.next()) {
                    var dirSymbol = _k.value;
                    var directive = dirSymbol.tsSymbol.valueDeclaration;
                    if (!ts.isClassDeclaration(directive)) {
                        continue;
                    }
                    presentDirectives.add(directive);
                    var meta = checker.getDirectiveMetadata(directive);
                    if (meta === null) {
                        continue;
                    }
                    try {
                        for (var _l = (e_2 = void 0, tslib_1.__values(meta.inputs)), _m = _l.next(); !_m.done; _m = _l.next()) {
                            var _o = tslib_1.__read(_m.value, 2), classPropertyName = _o[0], propertyName = _o[1];
                            if (table.has(propertyName)) {
                                continue;
                            }
                            table.set(propertyName, {
                                kind: AttributeCompletionKind.DirectiveInput,
                                propertyName: propertyName,
                                directive: dirSymbol,
                                classPropertyName: classPropertyName,
                                twoWayBindingSupported: meta.outputs.hasBindingPropertyName(propertyName + 'Change'),
                            });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_m && !_m.done && (_b = _l.return)) _b.call(_l);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    try {
                        for (var _p = (e_3 = void 0, tslib_1.__values(meta.outputs)), _q = _p.next(); !_q.done; _q = _p.next()) {
                            var _r = tslib_1.__read(_q.value, 2), classPropertyName = _r[0], propertyName = _r[1];
                            if (table.has(propertyName)) {
                                continue;
                            }
                            table.set(propertyName, {
                                kind: AttributeCompletionKind.DirectiveOutput,
                                eventName: propertyName,
                                directive: dirSymbol,
                                classPropertyName: classPropertyName,
                            });
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_q && !_q.done && (_c = _p.return)) _c.call(_p);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_k && !_k.done && (_a = _j.return)) _a.call(_j);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // Next, explore hypothetical directives and determine if the addition of any single attributes
        // can cause the directive to match the element.
        var directivesInScope = checker.getDirectivesInScope(component);
        if (directivesInScope !== null) {
            var elementSelector = utils_1.makeElementSelector(element);
            try {
                for (var directivesInScope_1 = tslib_1.__values(directivesInScope), directivesInScope_1_1 = directivesInScope_1.next(); !directivesInScope_1_1.done; directivesInScope_1_1 = directivesInScope_1.next()) {
                    var dirInScope = directivesInScope_1_1.value;
                    var directive = dirInScope.tsSymbol.valueDeclaration;
                    // Skip directives that are present on the element.
                    if (!ts.isClassDeclaration(directive) || presentDirectives.has(directive)) {
                        continue;
                    }
                    var meta = checker.getDirectiveMetadata(directive);
                    if (meta === null || meta.selector === null) {
                        continue;
                    }
                    if (!meta.isStructural) {
                        // For non-structural directives, the directive's attribute selector(s) are matched against
                        // a hypothetical version of the element with those attributes. A match indicates that
                        // adding that attribute/input/output binding would cause the directive to become present,
                        // meaning that such a binding is a valid completion.
                        var selectors = compiler_1.CssSelector.parse(meta.selector);
                        var matcher = new compiler_1.SelectorMatcher();
                        matcher.addSelectables(selectors);
                        try {
                            for (var selectors_1 = (e_5 = void 0, tslib_1.__values(selectors)), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
                                var selector = selectors_1_1.value;
                                try {
                                    for (var _s = (e_6 = void 0, tslib_1.__values(selectorAttributes(selector))), _t = _s.next(); !_t.done; _t = _s.next()) {
                                        var _u = tslib_1.__read(_t.value, 2), attrName = _u[0], attrValue = _u[1];
                                        if (attrValue !== '') {
                                            // This attribute selector requires a value, which is not supported in completion.
                                            continue;
                                        }
                                        if (table.has(attrName)) {
                                            // Skip this attribute as there's already a binding for it.
                                            continue;
                                        }
                                        // Check whether adding this attribute would cause the directive to start matching.
                                        var newElementSelector = elementSelector + ("[" + attrName + "]");
                                        if (!matcher.match(compiler_1.CssSelector.parse(newElementSelector)[0], null)) {
                                            // Nope, move on with our lives.
                                            continue;
                                        }
                                        // Adding this attribute causes a new directive to be matched. Decide how to categorize
                                        // it based on the directive's inputs and outputs.
                                        if (meta.inputs.hasBindingPropertyName(attrName)) {
                                            // This attribute corresponds to an input binding.
                                            table.set(attrName, {
                                                kind: AttributeCompletionKind.DirectiveInput,
                                                directive: dirInScope,
                                                propertyName: attrName,
                                                classPropertyName: meta.inputs.getByBindingPropertyName(attrName)[0].classPropertyName,
                                                twoWayBindingSupported: meta.outputs.hasBindingPropertyName(attrName + 'Change'),
                                            });
                                        }
                                        else if (meta.outputs.hasBindingPropertyName(attrName)) {
                                            // This attribute corresponds to an output binding.
                                            table.set(attrName, {
                                                kind: AttributeCompletionKind.DirectiveOutput,
                                                directive: dirInScope,
                                                eventName: attrName,
                                                classPropertyName: meta.outputs.getByBindingPropertyName(attrName)[0].classPropertyName,
                                            });
                                        }
                                        else {
                                            // This attribute causes a new directive to be matched, but does not also correspond
                                            // to an input or output binding.
                                            table.set(attrName, {
                                                kind: AttributeCompletionKind.DirectiveAttribute,
                                                attribute: attrName,
                                                directive: dirInScope,
                                            });
                                        }
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (_t && !_t.done && (_f = _s.return)) _f.call(_s);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (selectors_1_1 && !selectors_1_1.done && (_e = selectors_1.return)) _e.call(selectors_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                    }
                    else {
                        // Hypothetically matching a structural directive is a litle different than a plain
                        // directive. Use of the '*' structural directive syntactic sugar means that the actual
                        // directive is applied to a plain <ng-template> node, not the existing element with any
                        // other attributes it might already have.
                        // Additionally, more than one attribute/input might need to be present in order for the
                        // directive to match (e.g. `ngFor` has a selector of `[ngFor][ngForOf]`). This gets a
                        // little tricky.
                        var structuralAttributes = getStructuralAttributes(meta);
                        try {
                            for (var structuralAttributes_1 = (e_7 = void 0, tslib_1.__values(structuralAttributes)), structuralAttributes_1_1 = structuralAttributes_1.next(); !structuralAttributes_1_1.done; structuralAttributes_1_1 = structuralAttributes_1.next()) {
                                var attrName = structuralAttributes_1_1.value;
                                table.set(attrName, {
                                    kind: AttributeCompletionKind.StructuralDirectiveAttribute,
                                    attribute: attrName,
                                    directive: dirInScope,
                                });
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (structuralAttributes_1_1 && !structuralAttributes_1_1.done && (_g = structuralAttributes_1.return)) _g.call(structuralAttributes_1);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (directivesInScope_1_1 && !directivesInScope_1_1.done && (_d = directivesInScope_1.return)) _d.call(directivesInScope_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        // Finally, add any DOM attributes not already covered by inputs.
        if (element instanceof compiler_1.TmplAstElement && includeDomSchemaAttributes) {
            try {
                for (var _v = tslib_1.__values(checker.getPotentialDomBindings(element.name)), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var _x = _w.value, attribute = _x.attribute, property = _x.property;
                    var isAlsoProperty = attribute === property;
                    if (!table.has(attribute)) {
                        table.set(attribute, {
                            kind: AttributeCompletionKind.DomAttribute,
                            attribute: attribute,
                            isAlsoProperty: isAlsoProperty,
                        });
                    }
                    if (!isAlsoProperty && !table.has(property)) {
                        table.set(property, {
                            kind: AttributeCompletionKind.DomProperty,
                            property: property,
                        });
                    }
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_w && !_w.done && (_h = _v.return)) _h.call(_v);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        return table;
    }
    exports.buildAttributeCompletionTable = buildAttributeCompletionTable;
    /**
     * Given an `AttributeCompletion`, add any available completions to a `ts.CompletionEntry` array of
     * results.
     *
     * The kind of completions generated depends on whether the current context is an attribute context
     * or not. For example, completing on `<element attr|>` will generate two results: `attribute` and
     * `[attribute]` - either a static attribute can be generated, or a property binding. However,
     * `<element [attr|]>` is not an attribute context, and so only the property completion `attribute`
     * is generated. Note that this completion does not have the `[]` property binding sugar as its
     * implicitly present in a property binding context (we're already completing within an `[attr|]`
     * expression).
     */
    function addAttributeCompletionEntries(entries, completion, isAttributeContext, isElementContext, replacementSpan) {
        switch (completion.kind) {
            case AttributeCompletionKind.DirectiveAttribute: {
                entries.push({
                    kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.DIRECTIVE),
                    name: completion.attribute,
                    sortText: completion.attribute,
                    replacementSpan: replacementSpan,
                });
                break;
            }
            case AttributeCompletionKind.StructuralDirectiveAttribute: {
                // In an element, the completion is offered with a leading '*' to activate the structural
                // directive. Once present, the structural attribute will be parsed as a template and not an
                // element, and the prefix is no longer necessary.
                var prefix = isElementContext ? '*' : '';
                entries.push({
                    kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.DIRECTIVE),
                    name: prefix + completion.attribute,
                    sortText: prefix + completion.attribute,
                    replacementSpan: replacementSpan,
                });
                break;
            }
            case AttributeCompletionKind.DirectiveInput: {
                if (isAttributeContext) {
                    // Offer a completion of a property binding.
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.PROPERTY),
                        name: "[" + completion.propertyName + "]",
                        sortText: completion.propertyName,
                        replacementSpan: replacementSpan,
                    });
                    // If the directive supports banana-in-a-box for this input, offer that as well.
                    if (completion.twoWayBindingSupported) {
                        entries.push({
                            kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.PROPERTY),
                            name: "[(" + completion.propertyName + ")]",
                            // This completion should sort after the property binding.
                            sortText: completion.propertyName + '_1',
                            replacementSpan: replacementSpan,
                        });
                    }
                    // Offer a completion of the input binding as an attribute.
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.ATTRIBUTE),
                        name: completion.propertyName,
                        // This completion should sort after both property binding options (one-way and two-way).
                        sortText: completion.propertyName + '_2',
                        replacementSpan: replacementSpan,
                    });
                }
                else {
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.PROPERTY),
                        name: completion.propertyName,
                        sortText: completion.propertyName,
                        replacementSpan: replacementSpan,
                    });
                }
                break;
            }
            case AttributeCompletionKind.DirectiveOutput: {
                if (isAttributeContext) {
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.EVENT),
                        name: "(" + completion.eventName + ")",
                        sortText: completion.eventName,
                        replacementSpan: replacementSpan,
                    });
                }
                else {
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.EVENT),
                        name: completion.eventName,
                        sortText: completion.eventName,
                        replacementSpan: replacementSpan,
                    });
                }
                break;
            }
            case AttributeCompletionKind.DomAttribute: {
                if (isAttributeContext) {
                    // Offer a completion of an attribute binding.
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.ATTRIBUTE),
                        name: completion.attribute,
                        sortText: completion.attribute,
                        replacementSpan: replacementSpan,
                    });
                    if (completion.isAlsoProperty) {
                        // Offer a completion of a property binding to the DOM property.
                        entries.push({
                            kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.PROPERTY),
                            name: "[" + completion.attribute + "]",
                            // In the case of DOM attributes, the property binding should sort after the attribute
                            // binding.
                            sortText: completion.attribute + '_1',
                            replacementSpan: replacementSpan,
                        });
                    }
                }
                else if (completion.isAlsoProperty) {
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.PROPERTY),
                        name: completion.attribute,
                        sortText: completion.attribute,
                        replacementSpan: replacementSpan,
                    });
                }
                break;
            }
            case AttributeCompletionKind.DomProperty: {
                if (!isAttributeContext) {
                    entries.push({
                        kind: display_parts_1.unsafeCastDisplayInfoKindToScriptElementKind(display_parts_1.DisplayInfoKind.PROPERTY),
                        name: completion.property,
                        sortText: completion.property,
                        replacementSpan: replacementSpan,
                    });
                }
            }
        }
    }
    exports.addAttributeCompletionEntries = addAttributeCompletionEntries;
    function getAttributeCompletionSymbol(completion, checker) {
        var _a;
        switch (completion.kind) {
            case AttributeCompletionKind.DomAttribute:
            case AttributeCompletionKind.DomProperty:
                return null;
            case AttributeCompletionKind.DirectiveAttribute:
            case AttributeCompletionKind.StructuralDirectiveAttribute:
                return completion.directive.tsSymbol;
            case AttributeCompletionKind.DirectiveInput:
            case AttributeCompletionKind.DirectiveOutput:
                return (_a = checker.getDeclaredTypeOfSymbol(completion.directive.tsSymbol)
                    .getProperty(completion.classPropertyName)) !== null && _a !== void 0 ? _a : null;
        }
    }
    exports.getAttributeCompletionSymbol = getAttributeCompletionSymbol;
    /**
     * Iterates over `CssSelector` attributes, which are internally represented in a zipped array style
     * which is not conducive to straightforward iteration.
     */
    function selectorAttributes(selector) {
        var i;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < selector.attrs.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, [selector.attrs[0], selector.attrs[1]]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i += 2;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    function getStructuralAttributes(meta) {
        var e_9, _a;
        if (meta.selector === null) {
            return [];
        }
        var structuralAttributes = [];
        var selectors = compiler_1.CssSelector.parse(meta.selector);
        var _loop_1 = function (selector) {
            if (selector.element !== null && selector.element !== 'ng-template') {
                return "continue";
            }
            // Every attribute of this selector must be name-only - no required values.
            var attributeSelectors = Array.from(selectorAttributes(selector));
            if (!attributeSelectors.every(function (_a) {
                var _b = tslib_1.__read(_a, 2), _ = _b[0], attrValue = _b[1];
                return attrValue === '';
            })) {
                return "continue";
            }
            // Get every named selector.
            var attributes = attributeSelectors.map(function (_a) {
                var _b = tslib_1.__read(_a, 2), attrName = _b[0], _ = _b[1];
                return attrName;
            });
            // Find the shortest attribute. This is the structural directive "base", and all potential
            // input bindings must begin with the base. E.g. in `*ngFor="let a of b"`, `ngFor` is the
            // base attribute, and the `of` binding key corresponds to an input of `ngForOf`.
            var baseAttr = attributes.reduce(function (prev, curr) { return prev === null || curr.length < prev.length ? curr : prev; }, null);
            if (baseAttr === null) {
                return "continue";
            }
            // Validate that the attributes are compatible with use as a structural directive.
            var isValid = function (attr) {
                // The base attribute is valid by default.
                if (attr === baseAttr) {
                    return true;
                }
                // Non-base attributes must all be prefixed with the base attribute.
                if (!attr.startsWith(baseAttr)) {
                    return false;
                }
                // Non-base attributes must also correspond to directive inputs.
                if (!meta.inputs.hasBindingPropertyName(attr)) {
                    return false;
                }
                // This attribute is compatible.
                return true;
            };
            if (!attributes.every(isValid)) {
                return "continue";
            }
            // This attribute is valid as a structural attribute for this directive.
            structuralAttributes.push(baseAttr);
        };
        try {
            for (var selectors_2 = tslib_1.__values(selectors), selectors_2_1 = selectors_2.next(); !selectors_2_1.done; selectors_2_1 = selectors_2.next()) {
                var selector = selectors_2_1.value;
                _loop_1(selector);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (selectors_2_1 && !selectors_2_1.done && (_a = selectors_2.return)) _a.call(selectors_2);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return structuralAttributes;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlX2NvbXBsZXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9pdnkvYXR0cmlidXRlX2NvbXBsZXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBZ0c7SUFFaEcsK0JBQWlDO0lBRWpDLDZFQUE4RjtJQUM5Riw2REFBNEM7SUFFNUM7O09BRUc7SUFDSCxJQUFZLHVCQXNDWDtJQXRDRCxXQUFZLHVCQUF1QjtRQUNqQzs7OztXQUlHO1FBQ0gscUZBQVksQ0FBQTtRQUVaOzs7OztXQUtHO1FBQ0gsbUZBQVcsQ0FBQTtRQUVYOztXQUVHO1FBQ0gsaUdBQWtCLENBQUE7UUFFbEI7OztXQUdHO1FBQ0gscUhBQTRCLENBQUE7UUFFNUI7OztXQUdHO1FBQ0gseUZBQWMsQ0FBQTtRQUVkOzs7V0FHRztRQUNILDJGQUFlLENBQUE7SUFDakIsQ0FBQyxFQXRDVyx1QkFBdUIsR0FBdkIsK0JBQXVCLEtBQXZCLCtCQUF1QixRQXNDbEM7SUE4R0Q7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILFNBQWdCLDZCQUE2QixDQUN6QyxTQUE4QixFQUFFLE9BQXVDLEVBQ3ZFLE9BQTRCLEVBQzVCLDBCQUFtQzs7UUFDckMsSUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQStCLENBQUM7UUFFckQsa0dBQWtHO1FBQ2xHLCtFQUErRTtRQUMvRSxJQUFNLE1BQU0sR0FDUixPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQW1DLENBQUM7UUFDbEYsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUN6RCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7O2dCQUNuQix3RkFBd0Y7Z0JBQ3hGLGdEQUFnRDtnQkFDaEQsS0FBd0IsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxV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c0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q3NzU2VsZWN0b3IsIFNlbGVjdG9yTWF0Y2hlciwgVG1wbEFzdEVsZW1lbnQsIFRtcGxBc3RUZW1wbGF0ZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtEaXJlY3RpdmVJblNjb3BlLCBFbGVtZW50U3ltYm9sLCBUZW1wbGF0ZVN5bWJvbCwgVGVtcGxhdGVUeXBlQ2hlY2tlciwgVHlwZUNoZWNrYWJsZURpcmVjdGl2ZU1ldGF9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL2FwaSc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtEaXNwbGF5SW5mb0tpbmQsIHVuc2FmZUNhc3REaXNwbGF5SW5mb0tpbmRUb1NjcmlwdEVsZW1lbnRLaW5kfSBmcm9tICcuL2Rpc3BsYXlfcGFydHMnO1xuaW1wb3J0IHttYWtlRWxlbWVudFNlbGVjdG9yfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBEaWZmZXJlbnRpYXRlcyBkaWZmZXJlbnQga2luZHMgb2YgYEF0dHJpYnV0ZUNvbXBsZXRpb25gcy5cbiAqL1xuZXhwb3J0IGVudW0gQXR0cmlidXRlQ29tcGxldGlvbktpbmQge1xuICAvKipcbiAgICogQ29tcGxldGlvbiBvZiBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgSFRNTCBzY2hlbWEuXG4gICAqXG4gICAqIEF0dHJpYnV0ZXMgb2Z0ZW4gaGF2ZSBhIGNvcnJlc3BvbmRpbmcgRE9NIHByb3BlcnR5IG9mIHRoZSBzYW1lIG5hbWUuXG4gICAqL1xuICBEb21BdHRyaWJ1dGUsXG5cbiAgLyoqXG4gICAqIENvbXBsZXRpb24gb2YgYSBwcm9wZXJ0eSBmcm9tIHRoZSBET00gc2NoZW1hLlxuICAgKlxuICAgKiBgRG9tUHJvcGVydHlgIGNvbXBsZXRpb25zIGFyZSBnZW5lcmF0ZWQgb25seSBmb3IgcHJvcGVydGllcyB3aGljaCBkb24ndCBzaGFyZSB0aGVpciBuYW1lIHdpdGhcbiAgICogYW4gSFRNTCBhdHRyaWJ1dGUuXG4gICAqL1xuICBEb21Qcm9wZXJ0eSxcblxuICAvKipcbiAgICogQ29tcGxldGlvbiBvZiBhbiBhdHRyaWJ1dGUgdGhhdCByZXN1bHRzIGluIGEgbmV3IGRpcmVjdGl2ZSBiZWluZyBtYXRjaGVkIG9uIGFuIGVsZW1lbnQuXG4gICAqL1xuICBEaXJlY3RpdmVBdHRyaWJ1dGUsXG5cbiAgLyoqXG4gICAqIENvbXBsZXRpb24gb2YgYW4gYXR0cmlidXRlIHRoYXQgcmVzdWx0cyBpbiBhIG5ldyBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBiZWluZyBtYXRjaGVkIG9uIGFuXG4gICAqIGVsZW1lbnQuXG4gICAqL1xuICBTdHJ1Y3R1cmFsRGlyZWN0aXZlQXR0cmlidXRlLFxuXG4gIC8qKlxuICAgKiBDb21wbGV0aW9uIG9mIGFuIGlucHV0IGZyb20gYSBkaXJlY3RpdmUgd2hpY2ggaXMgZWl0aGVyIHByZXNlbnQgb24gdGhlIGVsZW1lbnQsIG9yIGJlY29tZXNcbiAgICogcHJlc2VudCBhZnRlciB0aGUgYWRkaXRpb24gb2YgdGhpcyBhdHRyaWJ1dGUuXG4gICAqL1xuICBEaXJlY3RpdmVJbnB1dCxcblxuICAvKipcbiAgICogQ29tcGxldGlvbiBvZiBhbiBvdXRwdXQgZnJvbSBhIGRpcmVjdGl2ZSB3aGljaCBpcyBlaXRoZXIgcHJlc2VudCBvbiB0aGUgZWxlbWVudCwgb3IgYmVjb21lc1xuICAgKiBwcmVzZW50IGFmdGVyIHRoZSBhZGRpdGlvbiBvZiB0aGlzIGF0dHJpYnV0ZS5cbiAgICovXG4gIERpcmVjdGl2ZU91dHB1dCxcbn1cblxuLyoqXG4gKiBDb21wbGV0aW9uIG9mIGFuIGF0dHJpYnV0ZSBmcm9tIHRoZSBET00gc2NoZW1hLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvbUF0dHJpYnV0ZUNvbXBsZXRpb24ge1xuICBraW5kOiBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5Eb21BdHRyaWJ1dGU7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIEhUTUwgYXR0cmlidXRlIChub3QgdG8gYmUgY29uZnVzZWQgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBET00gcHJvcGVydHkgbmFtZSkuXG4gICAqL1xuICBhdHRyaWJ1dGU6IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIGF0dHJpYnV0ZSBpcyBhbHNvIGEgRE9NIHByb3BlcnR5LlxuICAgKi9cbiAgaXNBbHNvUHJvcGVydHk6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29tcGxldGlvbiBvZiBhIERPTSBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IHRoYXQncyBkaXN0aW5jdCBmcm9tIGFuIEhUTUwgYXR0cmlidXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvbVByb3BlcnR5Q29tcGxldGlvbiB7XG4gIGtpbmQ6IEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRvbVByb3BlcnR5O1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBET00gcHJvcGVydHlcbiAgICovXG4gIHByb3BlcnR5OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ29tcGxldGlvbiBvZiBhbiBhdHRyaWJ1dGUgd2hpY2ggcmVzdWx0cyBpbiBhIG5ldyBkaXJlY3RpdmUgYmVpbmcgbWF0Y2hlZCBvbiBhbiBlbGVtZW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZUF0dHJpYnV0ZUNvbXBsZXRpb24ge1xuICBraW5kOiBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5EaXJlY3RpdmVBdHRyaWJ1dGV8XG4gICAgICBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5TdHJ1Y3R1cmFsRGlyZWN0aXZlQXR0cmlidXRlO1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2hvc2UgYWRkaXRpb24gY2F1c2VzIHRoaXMgZGlyZWN0aXZlIHRvIG1hdGNoIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgYXR0cmlidXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3RpdmUgd2hvc2Ugc2VsZWN0b3IgZ2F2ZSByaXNlIHRvIHRoaXMgY29tcGxldGlvbi5cbiAgICovXG4gIGRpcmVjdGl2ZTogRGlyZWN0aXZlSW5TY29wZTtcbn1cblxuLyoqXG4gKiBDb21wbGV0aW9uIG9mIGFuIGlucHV0IG9mIGEgZGlyZWN0aXZlIHdoaWNoIG1heSBlaXRoZXIgYmUgcHJlc2VudCBvbiB0aGUgZWxlbWVudCwgb3IgYmVjb21lXG4gKiBwcmVzZW50IHdoZW4gYSBiaW5kaW5nIHRvIHRoaXMgaW5wdXQgaXMgYWRkZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlSW5wdXRDb21wbGV0aW9uIHtcbiAga2luZDogQXR0cmlidXRlQ29tcGxldGlvbktpbmQuRGlyZWN0aXZlSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgcHJvcGVydHkgbmFtZSBvZiB0aGUgaW5wdXQgKHRoZSBuYW1lIHdoaWNoIHdvdWxkIGJlIHVzZWQgaW4gYW55IGJpbmRpbmcgdG8gdGhhdFxuICAgKiBpbnB1dCkuXG4gICAqL1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRpcmVjdGl2ZSB3aGljaCBoYXMgdGhpcyBpbnB1dC5cbiAgICovXG4gIGRpcmVjdGl2ZTogRGlyZWN0aXZlSW5TY29wZTtcblxuICAvKipcbiAgICogVGhlIGZpZWxkIG5hbWUgb24gdGhlIGRpcmVjdGl2ZSBjbGFzcyB3aGljaCBjb3JyZXNwb25kcyB0byB0aGlzIGlucHV0LlxuICAgKlxuICAgKiBDdXJyZW50bHksIGluIHRoZSBjYXNlIHdoZXJlIGEgc2luZ2xlIHByb3BlcnR5IG5hbWUgY29ycmVzcG9uZHMgdG8gbXVsdGlwbGUgaW5wdXQgZmllbGRzLCBvbmx5XG4gICAqIHRoZSBmaXJzdCBzdWNoIGZpZWxkIGlzIHJlcHJlc2VudGVkIGhlcmUuIEluIHRoZSBmdXR1cmUgbXVsdGlwbGUgcmVzdWx0cyBtYXkgYmUgd2FycmFudGVkLlxuICAgKi9cbiAgY2xhc3NQcm9wZXJ0eU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIGlucHV0IGNhbiBiZSB1c2VkIHdpdGggdHdvLXdheSBiaW5kaW5nICh0aGF0IGlzLCB3aGV0aGVyIGEgY29ycmVzcG9uZGluZyBjaGFuZ2VcbiAgICogb3V0cHV0IGV4aXN0cyBvbiB0aGUgZGlyZWN0aXZlKS5cbiAgICovXG4gIHR3b1dheUJpbmRpbmdTdXBwb3J0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlT3V0cHV0Q29tcGxldGlvbiB7XG4gIGtpbmQ6IEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRpcmVjdGl2ZU91dHB1dDtcblxuICAvKipcbiAgICogVGhlIHB1YmxpYyBldmVudCBuYW1lIG9mIHRoZSBvdXRwdXQgKHRoZSBuYW1lIHdoaWNoIHdvdWxkIGJlIHVzZWQgaW4gYW55IGJpbmRpbmcgdG8gdGhhdFxuICAgKiBvdXRwdXQpLlxuICAgKi9cbiAgZXZlbnROYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqVGhlIGRpcmVjdGl2ZSB3aGljaCBoYXMgdGhpcyBvdXRwdXQuXG4gICAqL1xuICBkaXJlY3RpdmU6IERpcmVjdGl2ZUluU2NvcGU7XG5cbiAgLyoqXG4gICAqIFRoZSBmaWVsZCBuYW1lIG9uIHRoZSBkaXJlY3RpdmUgY2xhc3Mgd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhpcyBvdXRwdXQuXG4gICAqL1xuICBjbGFzc1Byb3BlcnR5TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEFueSBuYW1lZCBhdHRyaWJ1dGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBjb21wbGV0aW9uIG9uIGEgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBEaXNhbWJpZ3VhdGVkIGJ5IHRoZSBga2luZGAgcHJvcGVydHkgaW50byB2YXJpb3VzIHR5cGVzIG9mIGNvbXBsZXRpb25zLlxuICovXG5leHBvcnQgdHlwZSBBdHRyaWJ1dGVDb21wbGV0aW9uID0gRG9tQXR0cmlidXRlQ29tcGxldGlvbnxEb21Qcm9wZXJ0eUNvbXBsZXRpb258XG4gICAgRGlyZWN0aXZlQXR0cmlidXRlQ29tcGxldGlvbnxEaXJlY3RpdmVJbnB1dENvbXBsZXRpb258RGlyZWN0aXZlT3V0cHV0Q29tcGxldGlvbjtcblxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50IGFuZCBpdHMgY29udGV4dCwgcHJvZHVjZSBhIGBNYXBgIG9mIGFsbCBwb3NzaWJsZSBhdHRyaWJ1dGUgY29tcGxldGlvbnMuXG4gKlxuICogMyBraW5kcyBvZiBhdHRyaWJ1dGVzIGFyZSBjb25zaWRlcmVkIGZvciBjb21wbGV0aW9uLCBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0IHByaW9yaXR5OlxuICpcbiAqIDEuIElucHV0cy9vdXRwdXRzIG9mIGRpcmVjdGl2ZXMgcHJlc2VudCBvbiB0aGUgZWxlbWVudCBhbHJlYWR5LlxuICogMi4gSW5wdXRzL291dHB1dHMgb2YgZGlyZWN0aXZlcyB0aGF0IGFyZSBub3QgcHJlc2VudCBvbiB0aGUgZWxlbWVudCwgYnV0IHdoaWNoIHdvdWxkIGJlY29tZVxuICogICAgcHJlc2VudCBpZiBzdWNoIGEgYmluZGluZyBpcyBhZGRlZC5cbiAqIDMuIEF0dHJpYnV0ZXMgZnJvbSB0aGUgRE9NIHNjaGVtYSBmb3IgdGhlIGVsZW1lbnQuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHRoZXNlIG9wdGlvbnMgZGV0ZXJtaW5lcyB3aGljaCBjb21wbGV0aW9ucyBhcmUgYWRkZWQgdG8gdGhlIGBNYXBgLiBJZiBhIGRpcmVjdGl2ZVxuICogaW5wdXQgc2hhcmVzIHRoZSBzYW1lIG5hbWUgYXMgYSBET00gYXR0cmlidXRlLCB0aGUgYE1hcGAgd2lsbCByZWZsZWN0IHRoZSBkaXJlY3RpdmUgaW5wdXRcbiAqIGNvbXBsZXRpb24sIG5vdCB0aGUgRE9NIGNvbXBsZXRpb24gZm9yIHRoYXQgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQXR0cmlidXRlQ29tcGxldGlvblRhYmxlKFxuICAgIGNvbXBvbmVudDogdHMuQ2xhc3NEZWNsYXJhdGlvbiwgZWxlbWVudDogVG1wbEFzdEVsZW1lbnR8VG1wbEFzdFRlbXBsYXRlLFxuICAgIGNoZWNrZXI6IFRlbXBsYXRlVHlwZUNoZWNrZXIsXG4gICAgaW5jbHVkZURvbVNjaGVtYUF0dHJpYnV0ZXM6IGJvb2xlYW4pOiBNYXA8c3RyaW5nLCBBdHRyaWJ1dGVDb21wbGV0aW9uPiB7XG4gIGNvbnN0IHRhYmxlID0gbmV3IE1hcDxzdHJpbmcsIEF0dHJpYnV0ZUNvbXBsZXRpb24+KCk7XG5cbiAgLy8gVXNlIHRoZSBgRWxlbWVudFN5bWJvbGAgb3IgYFRlbXBsYXRlU3ltYm9sYCB0byBpdGVyYXRlIG92ZXIgZGlyZWN0aXZlcyBwcmVzZW50IG9uIHRoZSBub2RlLCBhbmRcbiAgLy8gdGhlaXIgaW5wdXRzL291dHB1dHMuIFRoZXNlIGhhdmUgdGhlIGhpZ2hlc3QgcHJpb3JpdHkgb2YgY29tcGxldGlvbiByZXN1bHRzLlxuICBjb25zdCBzeW1ib2w6IEVsZW1lbnRTeW1ib2x8VGVtcGxhdGVTeW1ib2wgPVxuICAgICAgY2hlY2tlci5nZXRTeW1ib2xPZk5vZGUoZWxlbWVudCwgY29tcG9uZW50KSBhcyBFbGVtZW50U3ltYm9sIHwgVGVtcGxhdGVTeW1ib2w7XG4gIGNvbnN0IHByZXNlbnREaXJlY3RpdmVzID0gbmV3IFNldDx0cy5DbGFzc0RlY2xhcmF0aW9uPigpO1xuICBpZiAoc3ltYm9sICE9PSBudWxsKSB7XG4gICAgLy8gQW4gYEVsZW1lbnRTeW1ib2xgIHdhcyBhdmFpbGFibGUuIFRoaXMgbWVhbnMgaW5wdXRzIGFuZCBvdXRwdXRzIGZvciBkaXJlY3RpdmVzIG9uIHRoZVxuICAgIC8vIGVsZW1lbnQgY2FuIGJlIGFkZGVkIHRvIHRoZSBjb21wbGV0aW9uIHRhYmxlLlxuICAgIGZvciAoY29uc3QgZGlyU3ltYm9sIG9mIHN5bWJvbC5kaXJlY3RpdmVzKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJTeW1ib2wudHNTeW1ib2wudmFsdWVEZWNsYXJhdGlvbjtcbiAgICAgIGlmICghdHMuaXNDbGFzc0RlY2xhcmF0aW9uKGRpcmVjdGl2ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBwcmVzZW50RGlyZWN0aXZlcy5hZGQoZGlyZWN0aXZlKTtcblxuICAgICAgY29uc3QgbWV0YSA9IGNoZWNrZXIuZ2V0RGlyZWN0aXZlTWV0YWRhdGEoZGlyZWN0aXZlKTtcbiAgICAgIGlmIChtZXRhID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IFtjbGFzc1Byb3BlcnR5TmFtZSwgcHJvcGVydHlOYW1lXSBvZiBtZXRhLmlucHV0cykge1xuICAgICAgICBpZiAodGFibGUuaGFzKHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhYmxlLnNldChwcm9wZXJ0eU5hbWUsIHtcbiAgICAgICAgICBraW5kOiBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5EaXJlY3RpdmVJbnB1dCxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgZGlyZWN0aXZlOiBkaXJTeW1ib2wsXG4gICAgICAgICAgY2xhc3NQcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgdHdvV2F5QmluZGluZ1N1cHBvcnRlZDogbWV0YS5vdXRwdXRzLmhhc0JpbmRpbmdQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lICsgJ0NoYW5nZScpLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBbY2xhc3NQcm9wZXJ0eU5hbWUsIHByb3BlcnR5TmFtZV0gb2YgbWV0YS5vdXRwdXRzKSB7XG4gICAgICAgIGlmICh0YWJsZS5oYXMocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGUuc2V0KHByb3BlcnR5TmFtZSwge1xuICAgICAgICAgIGtpbmQ6IEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRpcmVjdGl2ZU91dHB1dCxcbiAgICAgICAgICBldmVudE5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICBkaXJlY3RpdmU6IGRpclN5bWJvbCxcbiAgICAgICAgICBjbGFzc1Byb3BlcnR5TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTmV4dCwgZXhwbG9yZSBoeXBvdGhldGljYWwgZGlyZWN0aXZlcyBhbmQgZGV0ZXJtaW5lIGlmIHRoZSBhZGRpdGlvbiBvZiBhbnkgc2luZ2xlIGF0dHJpYnV0ZXNcbiAgLy8gY2FuIGNhdXNlIHRoZSBkaXJlY3RpdmUgdG8gbWF0Y2ggdGhlIGVsZW1lbnQuXG4gIGNvbnN0IGRpcmVjdGl2ZXNJblNjb3BlID0gY2hlY2tlci5nZXREaXJlY3RpdmVzSW5TY29wZShjb21wb25lbnQpO1xuICBpZiAoZGlyZWN0aXZlc0luU2NvcGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBtYWtlRWxlbWVudFNlbGVjdG9yKGVsZW1lbnQpO1xuXG4gICAgZm9yIChjb25zdCBkaXJJblNjb3BlIG9mIGRpcmVjdGl2ZXNJblNjb3BlKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJJblNjb3BlLnRzU3ltYm9sLnZhbHVlRGVjbGFyYXRpb247XG4gICAgICAvLyBTa2lwIGRpcmVjdGl2ZXMgdGhhdCBhcmUgcHJlc2VudCBvbiB0aGUgZWxlbWVudC5cbiAgICAgIGlmICghdHMuaXNDbGFzc0RlY2xhcmF0aW9uKGRpcmVjdGl2ZSkgfHwgcHJlc2VudERpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldGEgPSBjaGVja2VyLmdldERpcmVjdGl2ZU1ldGFkYXRhKGRpcmVjdGl2ZSk7XG4gICAgICBpZiAobWV0YSA9PT0gbnVsbCB8fCBtZXRhLnNlbGVjdG9yID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1ldGEuaXNTdHJ1Y3R1cmFsKSB7XG4gICAgICAgIC8vIEZvciBub24tc3RydWN0dXJhbCBkaXJlY3RpdmVzLCB0aGUgZGlyZWN0aXZlJ3MgYXR0cmlidXRlIHNlbGVjdG9yKHMpIGFyZSBtYXRjaGVkIGFnYWluc3RcbiAgICAgICAgLy8gYSBoeXBvdGhldGljYWwgdmVyc2lvbiBvZiB0aGUgZWxlbWVudCB3aXRoIHRob3NlIGF0dHJpYnV0ZXMuIEEgbWF0Y2ggaW5kaWNhdGVzIHRoYXRcbiAgICAgICAgLy8gYWRkaW5nIHRoYXQgYXR0cmlidXRlL2lucHV0L291dHB1dCBiaW5kaW5nIHdvdWxkIGNhdXNlIHRoZSBkaXJlY3RpdmUgdG8gYmVjb21lIHByZXNlbnQsXG4gICAgICAgIC8vIG1lYW5pbmcgdGhhdCBzdWNoIGEgYmluZGluZyBpcyBhIHZhbGlkIGNvbXBsZXRpb24uXG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IENzc1NlbGVjdG9yLnBhcnNlKG1ldGEuc2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBtYXRjaGVyID0gbmV3IFNlbGVjdG9yTWF0Y2hlcigpO1xuICAgICAgICBtYXRjaGVyLmFkZFNlbGVjdGFibGVzKHNlbGVjdG9ycyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IFthdHRyTmFtZSwgYXR0clZhbHVlXSBvZiBzZWxlY3RvckF0dHJpYnV0ZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBzZWxlY3RvciByZXF1aXJlcyBhIHZhbHVlLCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIGNvbXBsZXRpb24uXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFibGUuaGFzKGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAvLyBTa2lwIHRoaXMgYXR0cmlidXRlIGFzIHRoZXJlJ3MgYWxyZWFkeSBhIGJpbmRpbmcgZm9yIGl0LlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgd2hldGhlciBhZGRpbmcgdGhpcyBhdHRyaWJ1dGUgd291bGQgY2F1c2UgdGhlIGRpcmVjdGl2ZSB0byBzdGFydCBtYXRjaGluZy5cbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnRTZWxlY3RvciA9IGVsZW1lbnRTZWxlY3RvciArIGBbJHthdHRyTmFtZX1dYDtcbiAgICAgICAgICAgIGlmICghbWF0Y2hlci5tYXRjaChDc3NTZWxlY3Rvci5wYXJzZShuZXdFbGVtZW50U2VsZWN0b3IpWzBdLCBudWxsKSkge1xuICAgICAgICAgICAgICAvLyBOb3BlLCBtb3ZlIG9uIHdpdGggb3VyIGxpdmVzLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkaW5nIHRoaXMgYXR0cmlidXRlIGNhdXNlcyBhIG5ldyBkaXJlY3RpdmUgdG8gYmUgbWF0Y2hlZC4gRGVjaWRlIGhvdyB0byBjYXRlZ29yaXplXG4gICAgICAgICAgICAvLyBpdCBiYXNlZCBvbiB0aGUgZGlyZWN0aXZlJ3MgaW5wdXRzIGFuZCBvdXRwdXRzLlxuICAgICAgICAgICAgaWYgKG1ldGEuaW5wdXRzLmhhc0JpbmRpbmdQcm9wZXJ0eU5hbWUoYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGNvcnJlc3BvbmRzIHRvIGFuIGlucHV0IGJpbmRpbmcuXG4gICAgICAgICAgICAgIHRhYmxlLnNldChhdHRyTmFtZSwge1xuICAgICAgICAgICAgICAgIGtpbmQ6IEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRpcmVjdGl2ZUlucHV0LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZTogZGlySW5TY29wZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IGF0dHJOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzUHJvcGVydHlOYW1lOlxuICAgICAgICAgICAgICAgICAgICBtZXRhLmlucHV0cy5nZXRCeUJpbmRpbmdQcm9wZXJ0eU5hbWUoYXR0ck5hbWUpIVswXS5jbGFzc1Byb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB0d29XYXlCaW5kaW5nU3VwcG9ydGVkOiBtZXRhLm91dHB1dHMuaGFzQmluZGluZ1Byb3BlcnR5TmFtZShhdHRyTmFtZSArICdDaGFuZ2UnKSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGEub3V0cHV0cy5oYXNCaW5kaW5nUHJvcGVydHlOYW1lKGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBjb3JyZXNwb25kcyB0byBhbiBvdXRwdXQgYmluZGluZy5cbiAgICAgICAgICAgICAgdGFibGUuc2V0KGF0dHJOYW1lLCB7XG4gICAgICAgICAgICAgICAga2luZDogQXR0cmlidXRlQ29tcGxldGlvbktpbmQuRGlyZWN0aXZlT3V0cHV0LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZTogZGlySW5TY29wZSxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGF0dHJOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzUHJvcGVydHlOYW1lOlxuICAgICAgICAgICAgICAgICAgICBtZXRhLm91dHB1dHMuZ2V0QnlCaW5kaW5nUHJvcGVydHlOYW1lKGF0dHJOYW1lKSFbMF0uY2xhc3NQcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgY2F1c2VzIGEgbmV3IGRpcmVjdGl2ZSB0byBiZSBtYXRjaGVkLCBidXQgZG9lcyBub3QgYWxzbyBjb3JyZXNwb25kXG4gICAgICAgICAgICAgIC8vIHRvIGFuIGlucHV0IG9yIG91dHB1dCBiaW5kaW5nLlxuICAgICAgICAgICAgICB0YWJsZS5zZXQoYXR0ck5hbWUsIHtcbiAgICAgICAgICAgICAgICBraW5kOiBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5EaXJlY3RpdmVBdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiBhdHRyTmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmU6IGRpckluU2NvcGUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSHlwb3RoZXRpY2FsbHkgbWF0Y2hpbmcgYSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBpcyBhIGxpdGxlIGRpZmZlcmVudCB0aGFuIGEgcGxhaW5cbiAgICAgICAgLy8gZGlyZWN0aXZlLiBVc2Ugb2YgdGhlICcqJyBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBzeW50YWN0aWMgc3VnYXIgbWVhbnMgdGhhdCB0aGUgYWN0dWFsXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBpcyBhcHBsaWVkIHRvIGEgcGxhaW4gPG5nLXRlbXBsYXRlPiBub2RlLCBub3QgdGhlIGV4aXN0aW5nIGVsZW1lbnQgd2l0aCBhbnlcbiAgICAgICAgLy8gb3RoZXIgYXR0cmlidXRlcyBpdCBtaWdodCBhbHJlYWR5IGhhdmUuXG4gICAgICAgIC8vIEFkZGl0aW9uYWxseSwgbW9yZSB0aGFuIG9uZSBhdHRyaWJ1dGUvaW5wdXQgbWlnaHQgbmVlZCB0byBiZSBwcmVzZW50IGluIG9yZGVyIGZvciB0aGVcbiAgICAgICAgLy8gZGlyZWN0aXZlIHRvIG1hdGNoIChlLmcuIGBuZ0ZvcmAgaGFzIGEgc2VsZWN0b3Igb2YgYFtuZ0Zvcl1bbmdGb3JPZl1gKS4gVGhpcyBnZXRzIGFcbiAgICAgICAgLy8gbGl0dGxlIHRyaWNreS5cblxuICAgICAgICBjb25zdCBzdHJ1Y3R1cmFsQXR0cmlidXRlcyA9IGdldFN0cnVjdHVyYWxBdHRyaWJ1dGVzKG1ldGEpO1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJOYW1lIG9mIHN0cnVjdHVyYWxBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgdGFibGUuc2V0KGF0dHJOYW1lLCB7XG4gICAgICAgICAgICBraW5kOiBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5TdHJ1Y3R1cmFsRGlyZWN0aXZlQXR0cmlidXRlLFxuICAgICAgICAgICAgYXR0cmlidXRlOiBhdHRyTmFtZSxcbiAgICAgICAgICAgIGRpcmVjdGl2ZTogZGlySW5TY29wZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmFsbHksIGFkZCBhbnkgRE9NIGF0dHJpYnV0ZXMgbm90IGFscmVhZHkgY292ZXJlZCBieSBpbnB1dHMuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgVG1wbEFzdEVsZW1lbnQgJiYgaW5jbHVkZURvbVNjaGVtYUF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IHthdHRyaWJ1dGUsIHByb3BlcnR5fSBvZiBjaGVja2VyLmdldFBvdGVudGlhbERvbUJpbmRpbmdzKGVsZW1lbnQubmFtZSkpIHtcbiAgICAgIGNvbnN0IGlzQWxzb1Byb3BlcnR5ID0gYXR0cmlidXRlID09PSBwcm9wZXJ0eTtcbiAgICAgIGlmICghdGFibGUuaGFzKGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgdGFibGUuc2V0KGF0dHJpYnV0ZSwge1xuICAgICAgICAgIGtpbmQ6IEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRvbUF0dHJpYnV0ZSxcbiAgICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgICAgaXNBbHNvUHJvcGVydHksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0Fsc29Qcm9wZXJ0eSAmJiAhdGFibGUuaGFzKHByb3BlcnR5KSkge1xuICAgICAgICB0YWJsZS5zZXQocHJvcGVydHksIHtcbiAgICAgICAgICBraW5kOiBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5Eb21Qcm9wZXJ0eSxcbiAgICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG4vKipcbiAqIEdpdmVuIGFuIGBBdHRyaWJ1dGVDb21wbGV0aW9uYCwgYWRkIGFueSBhdmFpbGFibGUgY29tcGxldGlvbnMgdG8gYSBgdHMuQ29tcGxldGlvbkVudHJ5YCBhcnJheSBvZlxuICogcmVzdWx0cy5cbiAqXG4gKiBUaGUga2luZCBvZiBjb21wbGV0aW9ucyBnZW5lcmF0ZWQgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBjdXJyZW50IGNvbnRleHQgaXMgYW4gYXR0cmlidXRlIGNvbnRleHRcbiAqIG9yIG5vdC4gRm9yIGV4YW1wbGUsIGNvbXBsZXRpbmcgb24gYDxlbGVtZW50IGF0dHJ8PmAgd2lsbCBnZW5lcmF0ZSB0d28gcmVzdWx0czogYGF0dHJpYnV0ZWAgYW5kXG4gKiBgW2F0dHJpYnV0ZV1gIC0gZWl0aGVyIGEgc3RhdGljIGF0dHJpYnV0ZSBjYW4gYmUgZ2VuZXJhdGVkLCBvciBhIHByb3BlcnR5IGJpbmRpbmcuIEhvd2V2ZXIsXG4gKiBgPGVsZW1lbnQgW2F0dHJ8XT5gIGlzIG5vdCBhbiBhdHRyaWJ1dGUgY29udGV4dCwgYW5kIHNvIG9ubHkgdGhlIHByb3BlcnR5IGNvbXBsZXRpb24gYGF0dHJpYnV0ZWBcbiAqIGlzIGdlbmVyYXRlZC4gTm90ZSB0aGF0IHRoaXMgY29tcGxldGlvbiBkb2VzIG5vdCBoYXZlIHRoZSBgW11gIHByb3BlcnR5IGJpbmRpbmcgc3VnYXIgYXMgaXRzXG4gKiBpbXBsaWNpdGx5IHByZXNlbnQgaW4gYSBwcm9wZXJ0eSBiaW5kaW5nIGNvbnRleHQgKHdlJ3JlIGFscmVhZHkgY29tcGxldGluZyB3aXRoaW4gYW4gYFthdHRyfF1gXG4gKiBleHByZXNzaW9uKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZUNvbXBsZXRpb25FbnRyaWVzKFxuICAgIGVudHJpZXM6IHRzLkNvbXBsZXRpb25FbnRyeVtdLCBjb21wbGV0aW9uOiBBdHRyaWJ1dGVDb21wbGV0aW9uLCBpc0F0dHJpYnV0ZUNvbnRleHQ6IGJvb2xlYW4sXG4gICAgaXNFbGVtZW50Q29udGV4dDogYm9vbGVhbiwgcmVwbGFjZW1lbnRTcGFuOiB0cy5UZXh0U3Bhbnx1bmRlZmluZWQpOiB2b2lkIHtcbiAgc3dpdGNoIChjb21wbGV0aW9uLmtpbmQpIHtcbiAgICBjYXNlIEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRpcmVjdGl2ZUF0dHJpYnV0ZToge1xuICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAga2luZDogdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoRGlzcGxheUluZm9LaW5kLkRJUkVDVElWRSksXG4gICAgICAgIG5hbWU6IGNvbXBsZXRpb24uYXR0cmlidXRlLFxuICAgICAgICBzb3J0VGV4dDogY29tcGxldGlvbi5hdHRyaWJ1dGUsXG4gICAgICAgIHJlcGxhY2VtZW50U3BhbixcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQXR0cmlidXRlQ29tcGxldGlvbktpbmQuU3RydWN0dXJhbERpcmVjdGl2ZUF0dHJpYnV0ZToge1xuICAgICAgLy8gSW4gYW4gZWxlbWVudCwgdGhlIGNvbXBsZXRpb24gaXMgb2ZmZXJlZCB3aXRoIGEgbGVhZGluZyAnKicgdG8gYWN0aXZhdGUgdGhlIHN0cnVjdHVyYWxcbiAgICAgIC8vIGRpcmVjdGl2ZS4gT25jZSBwcmVzZW50LCB0aGUgc3RydWN0dXJhbCBhdHRyaWJ1dGUgd2lsbCBiZSBwYXJzZWQgYXMgYSB0ZW1wbGF0ZSBhbmQgbm90IGFuXG4gICAgICAvLyBlbGVtZW50LCBhbmQgdGhlIHByZWZpeCBpcyBubyBsb25nZXIgbmVjZXNzYXJ5LlxuICAgICAgY29uc3QgcHJlZml4ID0gaXNFbGVtZW50Q29udGV4dCA/ICcqJyA6ICcnO1xuICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAga2luZDogdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoRGlzcGxheUluZm9LaW5kLkRJUkVDVElWRSksXG4gICAgICAgIG5hbWU6IHByZWZpeCArIGNvbXBsZXRpb24uYXR0cmlidXRlLFxuICAgICAgICBzb3J0VGV4dDogcHJlZml4ICsgY29tcGxldGlvbi5hdHRyaWJ1dGUsXG4gICAgICAgIHJlcGxhY2VtZW50U3BhbixcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQXR0cmlidXRlQ29tcGxldGlvbktpbmQuRGlyZWN0aXZlSW5wdXQ6IHtcbiAgICAgIGlmIChpc0F0dHJpYnV0ZUNvbnRleHQpIHtcbiAgICAgICAgLy8gT2ZmZXIgYSBjb21wbGV0aW9uIG9mIGEgcHJvcGVydHkgYmluZGluZy5cbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBraW5kOiB1bnNhZmVDYXN0RGlzcGxheUluZm9LaW5kVG9TY3JpcHRFbGVtZW50S2luZChEaXNwbGF5SW5mb0tpbmQuUFJPUEVSVFkpLFxuICAgICAgICAgIG5hbWU6IGBbJHtjb21wbGV0aW9uLnByb3BlcnR5TmFtZX1dYCxcbiAgICAgICAgICBzb3J0VGV4dDogY29tcGxldGlvbi5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgcmVwbGFjZW1lbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gSWYgdGhlIGRpcmVjdGl2ZSBzdXBwb3J0cyBiYW5hbmEtaW4tYS1ib3ggZm9yIHRoaXMgaW5wdXQsIG9mZmVyIHRoYXQgYXMgd2VsbC5cbiAgICAgICAgaWYgKGNvbXBsZXRpb24udHdvV2F5QmluZGluZ1N1cHBvcnRlZCkge1xuICAgICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICBraW5kOiB1bnNhZmVDYXN0RGlzcGxheUluZm9LaW5kVG9TY3JpcHRFbGVtZW50S2luZChEaXNwbGF5SW5mb0tpbmQuUFJPUEVSVFkpLFxuICAgICAgICAgICAgbmFtZTogYFsoJHtjb21wbGV0aW9uLnByb3BlcnR5TmFtZX0pXWAsXG4gICAgICAgICAgICAvLyBUaGlzIGNvbXBsZXRpb24gc2hvdWxkIHNvcnQgYWZ0ZXIgdGhlIHByb3BlcnR5IGJpbmRpbmcuXG4gICAgICAgICAgICBzb3J0VGV4dDogY29tcGxldGlvbi5wcm9wZXJ0eU5hbWUgKyAnXzEnLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRTcGFuLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE9mZmVyIGEgY29tcGxldGlvbiBvZiB0aGUgaW5wdXQgYmluZGluZyBhcyBhbiBhdHRyaWJ1dGUuXG4gICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAga2luZDogdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoRGlzcGxheUluZm9LaW5kLkFUVFJJQlVURSksXG4gICAgICAgICAgbmFtZTogY29tcGxldGlvbi5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgLy8gVGhpcyBjb21wbGV0aW9uIHNob3VsZCBzb3J0IGFmdGVyIGJvdGggcHJvcGVydHkgYmluZGluZyBvcHRpb25zIChvbmUtd2F5IGFuZCB0d28td2F5KS5cbiAgICAgICAgICBzb3J0VGV4dDogY29tcGxldGlvbi5wcm9wZXJ0eU5hbWUgKyAnXzInLFxuICAgICAgICAgIHJlcGxhY2VtZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGtpbmQ6IHVuc2FmZUNhc3REaXNwbGF5SW5mb0tpbmRUb1NjcmlwdEVsZW1lbnRLaW5kKERpc3BsYXlJbmZvS2luZC5QUk9QRVJUWSksXG4gICAgICAgICAgbmFtZTogY29tcGxldGlvbi5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgc29ydFRleHQ6IGNvbXBsZXRpb24ucHJvcGVydHlOYW1lLFxuICAgICAgICAgIHJlcGxhY2VtZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5EaXJlY3RpdmVPdXRwdXQ6IHtcbiAgICAgIGlmIChpc0F0dHJpYnV0ZUNvbnRleHQpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBraW5kOiB1bnNhZmVDYXN0RGlzcGxheUluZm9LaW5kVG9TY3JpcHRFbGVtZW50S2luZChEaXNwbGF5SW5mb0tpbmQuRVZFTlQpLFxuICAgICAgICAgIG5hbWU6IGAoJHtjb21wbGV0aW9uLmV2ZW50TmFtZX0pYCxcbiAgICAgICAgICBzb3J0VGV4dDogY29tcGxldGlvbi5ldmVudE5hbWUsXG4gICAgICAgICAgcmVwbGFjZW1lbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAga2luZDogdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoRGlzcGxheUluZm9LaW5kLkVWRU5UKSxcbiAgICAgICAgICBuYW1lOiBjb21wbGV0aW9uLmV2ZW50TmFtZSxcbiAgICAgICAgICBzb3J0VGV4dDogY29tcGxldGlvbi5ldmVudE5hbWUsXG4gICAgICAgICAgcmVwbGFjZW1lbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRvbUF0dHJpYnV0ZToge1xuICAgICAgaWYgKGlzQXR0cmlidXRlQ29udGV4dCkge1xuICAgICAgICAvLyBPZmZlciBhIGNvbXBsZXRpb24gb2YgYW4gYXR0cmlidXRlIGJpbmRpbmcuXG4gICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAga2luZDogdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoRGlzcGxheUluZm9LaW5kLkFUVFJJQlVURSksXG4gICAgICAgICAgbmFtZTogY29tcGxldGlvbi5hdHRyaWJ1dGUsXG4gICAgICAgICAgc29ydFRleHQ6IGNvbXBsZXRpb24uYXR0cmlidXRlLFxuICAgICAgICAgIHJlcGxhY2VtZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wbGV0aW9uLmlzQWxzb1Byb3BlcnR5KSB7XG4gICAgICAgICAgLy8gT2ZmZXIgYSBjb21wbGV0aW9uIG9mIGEgcHJvcGVydHkgYmluZGluZyB0byB0aGUgRE9NIHByb3BlcnR5LlxuICAgICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICBraW5kOiB1bnNhZmVDYXN0RGlzcGxheUluZm9LaW5kVG9TY3JpcHRFbGVtZW50S2luZChEaXNwbGF5SW5mb0tpbmQuUFJPUEVSVFkpLFxuICAgICAgICAgICAgbmFtZTogYFske2NvbXBsZXRpb24uYXR0cmlidXRlfV1gLFxuICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgRE9NIGF0dHJpYnV0ZXMsIHRoZSBwcm9wZXJ0eSBiaW5kaW5nIHNob3VsZCBzb3J0IGFmdGVyIHRoZSBhdHRyaWJ1dGVcbiAgICAgICAgICAgIC8vIGJpbmRpbmcuXG4gICAgICAgICAgICBzb3J0VGV4dDogY29tcGxldGlvbi5hdHRyaWJ1dGUgKyAnXzEnLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRTcGFuLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNvbXBsZXRpb24uaXNBbHNvUHJvcGVydHkpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBraW5kOiB1bnNhZmVDYXN0RGlzcGxheUluZm9LaW5kVG9TY3JpcHRFbGVtZW50S2luZChEaXNwbGF5SW5mb0tpbmQuUFJPUEVSVFkpLFxuICAgICAgICAgIG5hbWU6IGNvbXBsZXRpb24uYXR0cmlidXRlLFxuICAgICAgICAgIHNvcnRUZXh0OiBjb21wbGV0aW9uLmF0dHJpYnV0ZSxcbiAgICAgICAgICByZXBsYWNlbWVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQXR0cmlidXRlQ29tcGxldGlvbktpbmQuRG9tUHJvcGVydHk6IHtcbiAgICAgIGlmICghaXNBdHRyaWJ1dGVDb250ZXh0KSB7XG4gICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAga2luZDogdW5zYWZlQ2FzdERpc3BsYXlJbmZvS2luZFRvU2NyaXB0RWxlbWVudEtpbmQoRGlzcGxheUluZm9LaW5kLlBST1BFUlRZKSxcbiAgICAgICAgICBuYW1lOiBjb21wbGV0aW9uLnByb3BlcnR5LFxuICAgICAgICAgIHNvcnRUZXh0OiBjb21wbGV0aW9uLnByb3BlcnR5LFxuICAgICAgICAgIHJlcGxhY2VtZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVDb21wbGV0aW9uU3ltYm9sKFxuICAgIGNvbXBsZXRpb246IEF0dHJpYnV0ZUNvbXBsZXRpb24sIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyKTogdHMuU3ltYm9sfG51bGwge1xuICBzd2l0Y2ggKGNvbXBsZXRpb24ua2luZCkge1xuICAgIGNhc2UgQXR0cmlidXRlQ29tcGxldGlvbktpbmQuRG9tQXR0cmlidXRlOlxuICAgIGNhc2UgQXR0cmlidXRlQ29tcGxldGlvbktpbmQuRG9tUHJvcGVydHk6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlIEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRpcmVjdGl2ZUF0dHJpYnV0ZTpcbiAgICBjYXNlIEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLlN0cnVjdHVyYWxEaXJlY3RpdmVBdHRyaWJ1dGU6XG4gICAgICByZXR1cm4gY29tcGxldGlvbi5kaXJlY3RpdmUudHNTeW1ib2w7XG4gICAgY2FzZSBBdHRyaWJ1dGVDb21wbGV0aW9uS2luZC5EaXJlY3RpdmVJbnB1dDpcbiAgICBjYXNlIEF0dHJpYnV0ZUNvbXBsZXRpb25LaW5kLkRpcmVjdGl2ZU91dHB1dDpcbiAgICAgIHJldHVybiBjaGVja2VyLmdldERlY2xhcmVkVHlwZU9mU3ltYm9sKGNvbXBsZXRpb24uZGlyZWN0aXZlLnRzU3ltYm9sKVxuICAgICAgICAgICAgICAgICAuZ2V0UHJvcGVydHkoY29tcGxldGlvbi5jbGFzc1Byb3BlcnR5TmFtZSkgPz9cbiAgICAgICAgICBudWxsO1xuICB9XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBgQ3NzU2VsZWN0b3JgIGF0dHJpYnV0ZXMsIHdoaWNoIGFyZSBpbnRlcm5hbGx5IHJlcHJlc2VudGVkIGluIGEgemlwcGVkIGFycmF5IHN0eWxlXG4gKiB3aGljaCBpcyBub3QgY29uZHVjaXZlIHRvIHN0cmFpZ2h0Zm9yd2FyZCBpdGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uKiBzZWxlY3RvckF0dHJpYnV0ZXMoc2VsZWN0b3I6IENzc1NlbGVjdG9yKTogSXRlcmFibGU8W3N0cmluZywgc3RyaW5nXT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdG9yLmF0dHJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgeWllbGQgW3NlbGVjdG9yLmF0dHJzWzBdLCBzZWxlY3Rvci5hdHRyc1sxXV07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3RydWN0dXJhbEF0dHJpYnV0ZXMobWV0YTogVHlwZUNoZWNrYWJsZURpcmVjdGl2ZU1ldGEpOiBzdHJpbmdbXSB7XG4gIGlmIChtZXRhLnNlbGVjdG9yID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3Qgc3RydWN0dXJhbEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHNlbGVjdG9ycyA9IENzc1NlbGVjdG9yLnBhcnNlKG1ldGEuc2VsZWN0b3IpO1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycykge1xuICAgIGlmIChzZWxlY3Rvci5lbGVtZW50ICE9PSBudWxsICYmIHNlbGVjdG9yLmVsZW1lbnQgIT09ICduZy10ZW1wbGF0ZScpIHtcbiAgICAgIC8vIFRoaXMgcGFydGljdWxhciBzZWxlY3RvciBkb2VzIG5vdCBhcHBseSB1bmRlciBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBzeW50YXguXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBFdmVyeSBhdHRyaWJ1dGUgb2YgdGhpcyBzZWxlY3RvciBtdXN0IGJlIG5hbWUtb25seSAtIG5vIHJlcXVpcmVkIHZhbHVlcy5cbiAgICBjb25zdCBhdHRyaWJ1dGVTZWxlY3RvcnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yQXR0cmlidXRlcyhzZWxlY3RvcikpO1xuICAgIGlmICghYXR0cmlidXRlU2VsZWN0b3JzLmV2ZXJ5KChbXywgYXR0clZhbHVlXSkgPT4gYXR0clZhbHVlID09PSAnJykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIEdldCBldmVyeSBuYW1lZCBzZWxlY3Rvci5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gYXR0cmlidXRlU2VsZWN0b3JzLm1hcCgoW2F0dHJOYW1lLCBfXSkgPT4gYXR0ck5hbWUpO1xuXG4gICAgLy8gRmluZCB0aGUgc2hvcnRlc3QgYXR0cmlidXRlLiBUaGlzIGlzIHRoZSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBcImJhc2VcIiwgYW5kIGFsbCBwb3RlbnRpYWxcbiAgICAvLyBpbnB1dCBiaW5kaW5ncyBtdXN0IGJlZ2luIHdpdGggdGhlIGJhc2UuIEUuZy4gaW4gYCpuZ0Zvcj1cImxldCBhIG9mIGJcImAsIGBuZ0ZvcmAgaXMgdGhlXG4gICAgLy8gYmFzZSBhdHRyaWJ1dGUsIGFuZCB0aGUgYG9mYCBiaW5kaW5nIGtleSBjb3JyZXNwb25kcyB0byBhbiBpbnB1dCBvZiBgbmdGb3JPZmAuXG4gICAgY29uc3QgYmFzZUF0dHIgPSBhdHRyaWJ1dGVzLnJlZHVjZShcbiAgICAgICAgKHByZXYsIGN1cnIpID0+IHByZXYgPT09IG51bGwgfHwgY3Vyci5sZW5ndGggPCBwcmV2Lmxlbmd0aCA/IGN1cnIgOiBwcmV2LFxuICAgICAgICBudWxsIGFzIHN0cmluZyB8IG51bGwpO1xuICAgIGlmIChiYXNlQXR0ciA9PT0gbnVsbCkge1xuICAgICAgLy8gTm8gYXR0cmlidXRlcyBpbiB0aGlzIHNlbGVjdG9yP1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgYXR0cmlidXRlcyBhcmUgY29tcGF0aWJsZSB3aXRoIHVzZSBhcyBhIHN0cnVjdHVyYWwgZGlyZWN0aXZlLlxuICAgIGNvbnN0IGlzVmFsaWQgPSAoYXR0cjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAvLyBUaGUgYmFzZSBhdHRyaWJ1dGUgaXMgdmFsaWQgYnkgZGVmYXVsdC5cbiAgICAgIGlmIChhdHRyID09PSBiYXNlQXR0cikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gTm9uLWJhc2UgYXR0cmlidXRlcyBtdXN0IGFsbCBiZSBwcmVmaXhlZCB3aXRoIHRoZSBiYXNlIGF0dHJpYnV0ZS5cbiAgICAgIGlmICghYXR0ci5zdGFydHNXaXRoKGJhc2VBdHRyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vbi1iYXNlIGF0dHJpYnV0ZXMgbXVzdCBhbHNvIGNvcnJlc3BvbmQgdG8gZGlyZWN0aXZlIGlucHV0cy5cbiAgICAgIGlmICghbWV0YS5pbnB1dHMuaGFzQmluZGluZ1Byb3BlcnR5TmFtZShhdHRyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIGNvbXBhdGlibGUuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgaWYgKCFhdHRyaWJ1dGVzLmV2ZXJ5KGlzVmFsaWQpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyB2YWxpZCBhcyBhIHN0cnVjdHVyYWwgYXR0cmlidXRlIGZvciB0aGlzIGRpcmVjdGl2ZS5cbiAgICBzdHJ1Y3R1cmFsQXR0cmlidXRlcy5wdXNoKGJhc2VBdHRyKTtcbiAgfVxuXG4gIHJldHVybiBzdHJ1Y3R1cmFsQXR0cmlidXRlcztcbn1cbiJdfQ==