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
        define("@angular/language-service/src/completions", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler/src/chars", "@angular/language-service/src/binding_utils", "@angular/language-service/src/expression_diagnostics", "@angular/language-service/src/expressions", "@angular/language-service/src/html_info", "@angular/language-service/src/template", "@angular/language-service/src/types", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTemplateCompletions = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var chars_1 = require("@angular/compiler/src/chars");
    var binding_utils_1 = require("@angular/language-service/src/binding_utils");
    var expression_diagnostics_1 = require("@angular/language-service/src/expression_diagnostics");
    var expressions_1 = require("@angular/language-service/src/expressions");
    var html_info_1 = require("@angular/language-service/src/html_info");
    var template_1 = require("@angular/language-service/src/template");
    var ng = require("@angular/language-service/src/types");
    var utils_1 = require("@angular/language-service/src/utils");
    var HIDDEN_HTML_ELEMENTS = new Set(['html', 'script', 'noscript', 'base', 'body', 'title', 'head', 'link']);
    var HTML_ELEMENTS = html_info_1.elementNames().filter(function (name) { return !HIDDEN_HTML_ELEMENTS.has(name); }).map(function (name) {
        return {
            name: name,
            kind: ng.CompletionKind.HTML_ELEMENT,
            sortText: name,
        };
    });
    var ANGULAR_ELEMENTS = [
        {
            name: 'ng-container',
            kind: ng.CompletionKind.ANGULAR_ELEMENT,
            sortText: 'ng-container',
        },
        {
            name: 'ng-content',
            kind: ng.CompletionKind.ANGULAR_ELEMENT,
            sortText: 'ng-content',
        },
        {
            name: 'ng-template',
            kind: ng.CompletionKind.ANGULAR_ELEMENT,
            sortText: 'ng-template',
        },
    ];
    function isIdentifierPart(code) {
        // Identifiers consist of alphanumeric characters, '_', or '$'.
        return chars_1.isAsciiLetter(code) || chars_1.isDigit(code) || code == chars_1.$$ || code == chars_1.$_;
    }
    /**
     * Gets the span of word in a template that surrounds `position`. If there is no word around
     * `position`, nothing is returned.
     */
    function getBoundedWordSpan(templateInfo, position, ast) {
        var template = templateInfo.template;
        var templateSrc = template.source;
        if (!templateSrc)
            return;
        if (ast instanceof compiler_1.Element) {
            // The HTML tag may include `-` (e.g. `app-root`),
            // so use the HtmlAst to get the span before ayazhafiz refactor the code.
            return {
                start: templateInfo.template.span.start + ast.startSourceSpan.start.offset + 1,
                length: ast.name.length
            };
        }
        // TODO(ayazhafiz): A solution based on word expansion will always be expensive compared to one
        // based on ASTs. Whatever penalty we incur is probably manageable for small-length (i.e. the
        // majority of) identifiers, but the current solution involes a number of branchings and we can't
        // control potentially very long identifiers. Consider moving to an AST-based solution once
        // existing difficulties with AST spans are more clearly resolved (see #31898 for discussion of
        // known problems, and #33091 for how they affect text replacement).
        //
        // `templatePosition` represents the right-bound location of a cursor in the template.
        //    key.ent|ry
        //           ^---- cursor, at position `r` is at.
        // A cursor is not itself a character in the template; it has a left (lower) and right (upper)
        // index bound that hugs the cursor itself.
        var templatePosition = position - template.span.start;
        // To perform word expansion, we want to determine the left and right indices that hug the cursor.
        // There are three cases here.
        var left, right;
        if (templatePosition === 0) {
            // 1. Case like
            //      |rest of template
            //    the cursor is at the start of the template, hugged only by the right side (0-index).
            left = right = 0;
        }
        else if (templatePosition === templateSrc.length) {
            // 2. Case like
            //      rest of template|
            //    the cursor is at the end of the template, hugged only by the left side (last-index).
            left = right = templateSrc.length - 1;
        }
        else {
            // 3. Case like
            //      wo|rd
            //    there is a clear left and right index.
            left = templatePosition - 1;
            right = templatePosition;
        }
        if (!isIdentifierPart(templateSrc.charCodeAt(left)) &&
            !isIdentifierPart(templateSrc.charCodeAt(right))) {
            // Case like
            //         .|.
            // left ---^ ^--- right
            // There is no word here.
            return;
        }
        // Expand on the left and right side until a word boundary is hit. Back up one expansion on both
        // side to stay inside the word.
        while (left >= 0 && isIdentifierPart(templateSrc.charCodeAt(left)))
            --left;
        ++left;
        while (right < templateSrc.length && isIdentifierPart(templateSrc.charCodeAt(right)))
            ++right;
        --right;
        var absoluteStartPosition = position - (templatePosition - left);
        var length = right - left + 1;
        return { start: absoluteStartPosition, length: length };
    }
    function getTemplateCompletions(templateInfo, position) {
        var htmlAst = templateInfo.htmlAst, template = templateInfo.template;
        // Calculate the position relative to the start of the template. This is needed
        // because spans in HTML AST are relative. Inline template has non-zero start position.
        var templatePosition = position - template.span.start;
        var htmlPath = utils_1.getPathToNodeAtPosition(htmlAst, templatePosition);
        var mostSpecific = htmlPath.tail;
        var visitor = new HtmlVisitor(templateInfo, htmlPath);
        var results = mostSpecific ?
            mostSpecific.visit(visitor, null /* context */) :
            elementCompletions(templateInfo);
        var replacementSpan = getBoundedWordSpan(templateInfo, position, mostSpecific);
        return results.map(function (entry) {
            return tslib_1.__assign(tslib_1.__assign({}, entry), { replacementSpan: replacementSpan });
        });
    }
    exports.getTemplateCompletions = getTemplateCompletions;
    var HtmlVisitor = /** @class */ (function () {
        function HtmlVisitor(templateInfo, htmlPath) {
            this.templateInfo = templateInfo;
            this.htmlPath = htmlPath;
            this.relativePosition = htmlPath.position;
        }
        // Note that every visitor method must explicitly specify return type because
        // Visitor returns `any` for all methods.
        HtmlVisitor.prototype.visitElement = function (ast) {
            var startTagSpan = utils_1.spanOf(ast.sourceSpan);
            var tagLen = ast.name.length;
            // + 1 for the opening angle bracket
            if (this.relativePosition <= startTagSpan.start + tagLen + 1) {
                // If we are in the tag then return the element completions.
                return elementCompletions(this.templateInfo);
            }
            if (this.relativePosition < startTagSpan.end) {
                // We are in the attribute section of the element (but not in an attribute).
                // Return the attribute completions.
                return attributeCompletionsForElement(this.templateInfo, ast.name);
            }
            return [];
        };
        HtmlVisitor.prototype.visitAttribute = function (ast) {
            // An attribute consists of two parts, LHS="RHS".
            // Determine if completions are requested for LHS or RHS
            if (ast.valueSpan && utils_1.inSpan(this.relativePosition, utils_1.spanOf(ast.valueSpan))) {
                // RHS completion
                return attributeValueCompletions(this.templateInfo, this.htmlPath);
            }
            // LHS completion
            return attributeCompletions(this.templateInfo, this.htmlPath);
        };
        HtmlVisitor.prototype.visitText = function () {
            var _this = this;
            var _a;
            var templatePath = utils_1.findTemplateAstAt(this.templateInfo.templateAst, this.relativePosition);
            if (templatePath.tail instanceof compiler_1.BoundTextAst) {
                // If we know that this is an interpolation then do not try other scenarios.
                var visitor = new ExpressionVisitor(this.templateInfo, this.relativePosition, function () {
                    return expression_diagnostics_1.getExpressionScope(utils_1.diagnosticInfoFromTemplateInfo(_this.templateInfo), templatePath);
                });
                (_a = templatePath.tail) === null || _a === void 0 ? void 0 : _a.visit(visitor, null);
                return visitor.results;
            }
            // TODO(kyliau): Not sure if this check is really needed since we don't have
            // any test cases for it.
            var element = this.htmlPath.first(compiler_1.Element);
            if (element &&
                compiler_1.getHtmlTagDefinition(element.name).getContentType() !== compiler_1.TagContentType.PARSABLE_DATA) {
                return [];
            }
            // This is to account for cases like <h1> <a> text | </h1> where the
            // closest element has no closing tag and thus is considered plain text.
            var results = voidElementAttributeCompletions(this.templateInfo, this.htmlPath);
            if (results.length) {
                return results;
            }
            return elementCompletions(this.templateInfo);
        };
        HtmlVisitor.prototype.visitComment = function () {
            return [];
        };
        HtmlVisitor.prototype.visitExpansion = function () {
            return [];
        };
        HtmlVisitor.prototype.visitExpansionCase = function () {
            return [];
        };
        return HtmlVisitor;
    }());
    function attributeCompletions(info, path) {
        var attr = path.tail;
        var elem = path.parentOf(attr);
        if (!(attr instanceof compiler_1.Attribute) || !(elem instanceof compiler_1.Element)) {
            return [];
        }
        // TODO: Consider parsing the attrinute name to a proper AST instead of
        // matching using regex. This is because the regexp would incorrectly identify
        // bind parts for cases like [()|]
        //                              ^ cursor is here
        var binding = binding_utils_1.getBindingDescriptor(attr.name);
        if (!binding) {
            // This is a normal HTML attribute, not an Angular attribute.
            return attributeCompletionsForElement(info, elem.name);
        }
        var results = [];
        var ngAttrs = angularAttributes(info, elem.name);
        switch (binding.kind) {
            case binding_utils_1.ATTR.KW_MICROSYNTAX:
                // template reference attribute: *attrName
                results.push.apply(results, tslib_1.__spread(ngAttrs.templateRefs));
                break;
            case binding_utils_1.ATTR.KW_BIND:
            case binding_utils_1.ATTR.IDENT_PROPERTY:
                // property binding via bind- or []
                results.push.apply(results, tslib_1.__spread(html_info_1.propertyNames(elem.name), ngAttrs.inputs));
                break;
            case binding_utils_1.ATTR.KW_ON:
            case binding_utils_1.ATTR.IDENT_EVENT:
                // event binding via on- or ()
                results.push.apply(results, tslib_1.__spread(html_info_1.eventNames(elem.name), ngAttrs.outputs));
                break;
            case binding_utils_1.ATTR.KW_BINDON:
            case binding_utils_1.ATTR.IDENT_BANANA_BOX:
                // banana-in-a-box binding via bindon- or [()]
                results.push.apply(results, tslib_1.__spread(ngAttrs.bananas));
                break;
        }
        return results.map(function (name) {
            return {
                name: name,
                kind: ng.CompletionKind.ATTRIBUTE,
                sortText: name,
            };
        });
    }
    function attributeCompletionsForElement(info, elementName) {
        var e_1, _a, e_2, _b;
        var results = [];
        if (info.template instanceof template_1.InlineTemplate) {
            try {
                // Provide HTML attributes completion only for inline templates
                for (var _c = tslib_1.__values(html_info_1.attributeNames(elementName)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_1 = _d.value;
                    results.push({
                        name: name_1,
                        kind: ng.CompletionKind.HTML_ATTRIBUTE,
                        sortText: name_1,
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // Add Angular attributes
        var ngAttrs = angularAttributes(info, elementName);
        try {
            for (var _e = tslib_1.__values(ngAttrs.others), _f = _e.next(); !_f.done; _f = _e.next()) {
                var name_2 = _f.value;
                results.push({
                    name: name_2,
                    kind: ng.CompletionKind.ATTRIBUTE,
                    sortText: name_2,
                });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return results;
    }
    /**
     * Provide completions to the RHS of an attribute, which is of the form
     * LHS="RHS". The template path is computed from the specified `info` whereas
     * the context is determined from the specified `htmlPath`.
     * @param info Object that contains the template AST
     * @param htmlPath Path to the HTML node
     */
    function attributeValueCompletions(info, htmlPath) {
        // Find the corresponding Template AST path.
        var templatePath = utils_1.findTemplateAstAt(info.templateAst, htmlPath.position);
        var visitor = new ExpressionVisitor(info, htmlPath.position, function () {
            var dinfo = utils_1.diagnosticInfoFromTemplateInfo(info);
            return expression_diagnostics_1.getExpressionScope(dinfo, templatePath);
        });
        if (templatePath.tail instanceof compiler_1.AttrAst ||
            templatePath.tail instanceof compiler_1.BoundElementPropertyAst ||
            templatePath.tail instanceof compiler_1.BoundEventAst) {
            templatePath.tail.visit(visitor, null);
            return visitor.results;
        }
        // In order to provide accurate attribute value completion, we need to know
        // what the LHS is, and construct the proper AST if it is missing.
        var htmlAttr = htmlPath.tail;
        var binding = binding_utils_1.getBindingDescriptor(htmlAttr.name);
        if (binding && binding.kind === binding_utils_1.ATTR.KW_REF) {
            var refAst = void 0;
            var elemAst = void 0;
            if (templatePath.tail instanceof compiler_1.ReferenceAst) {
                refAst = templatePath.tail;
                var parent_1 = templatePath.parentOf(refAst);
                if (parent_1 instanceof compiler_1.ElementAst) {
                    elemAst = parent_1;
                }
            }
            else if (templatePath.tail instanceof compiler_1.ElementAst) {
                refAst = new compiler_1.ReferenceAst(htmlAttr.name, null, htmlAttr.value, htmlAttr.valueSpan);
                elemAst = templatePath.tail;
            }
            if (refAst && elemAst) {
                refAst.visit(visitor, elemAst);
            }
        }
        else {
            // HtmlAst contains the `Attribute` node, however the corresponding `AttrAst`
            // node is missing from the TemplateAst.
            var attrAst = new compiler_1.AttrAst(htmlAttr.name, htmlAttr.value, htmlAttr.valueSpan);
            attrAst.visit(visitor, null);
        }
        return visitor.results;
    }
    function elementCompletions(info) {
        var e_3, _a;
        var results = tslib_1.__spread(ANGULAR_ELEMENTS);
        if (info.template instanceof template_1.InlineTemplate) {
            // Provide HTML elements completion only for inline templates
            results.push.apply(results, tslib_1.__spread(HTML_ELEMENTS));
        }
        // Collect the elements referenced by the selectors
        var components = new Set();
        try {
            for (var _b = tslib_1.__values(utils_1.getSelectors(info).selectors), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selector = _c.value;
                var name_3 = selector.element;
                if (name_3 && !components.has(name_3)) {
                    components.add(name_3);
                    results.push({
                        name: name_3,
                        kind: ng.CompletionKind.COMPONENT,
                        sortText: name_3,
                    });
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return results;
    }
    // There is a special case of HTML where text that contains a unclosed tag is treated as
    // text. For exaple '<h1> Some <a text </h1>' produces a text nodes inside of the H1
    // element "Some <a text". We, however, want to treat this as if the user was requesting
    // the attributes of an "a" element, not requesting completion in the a text element. This
    // code checks for this case and returns element completions if it is detected or undefined
    // if it is not.
    function voidElementAttributeCompletions(info, path) {
        var tail = path.tail;
        if (tail instanceof compiler_1.Text) {
            var match = tail.value.match(/<(\w(\w|\d|-)*:)?(\w(\w|\d|-)*)\s/);
            // The position must be after the match, otherwise we are still in a place where elements
            // are expected (such as `<|a` or `<a|`; we only want attributes for `<a |` or after).
            if (match &&
                path.position >= (match.index || 0) + match[0].length + tail.sourceSpan.start.offset) {
                return attributeCompletionsForElement(info, match[3]);
            }
        }
        return [];
    }
    var ExpressionVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(ExpressionVisitor, _super);
        function ExpressionVisitor(info, position, getExpressionScope) {
            var _this = _super.call(this) || this;
            _this.info = info;
            _this.position = position;
            _this.getExpressionScope = getExpressionScope;
            _this.completions = new Map();
            return _this;
        }
        Object.defineProperty(ExpressionVisitor.prototype, "results", {
            get: function () {
                return Array.from(this.completions.values());
            },
            enumerable: false,
            configurable: true
        });
        ExpressionVisitor.prototype.visitDirectiveProperty = function (ast) {
            this.processExpressionCompletions(ast.value);
        };
        ExpressionVisitor.prototype.visitElementProperty = function (ast) {
            this.processExpressionCompletions(ast.value);
        };
        ExpressionVisitor.prototype.visitEvent = function (ast) {
            this.processExpressionCompletions(ast.handler);
        };
        ExpressionVisitor.prototype.visitElement = function () {
            // no-op for now
        };
        ExpressionVisitor.prototype.visitAttr = function (ast) {
            var binding = binding_utils_1.getBindingDescriptor(ast.name);
            if (binding && binding.kind === binding_utils_1.ATTR.KW_MICROSYNTAX) {
                // This a template binding given by micro syntax expression.
                // First, verify the attribute consists of some binding we can give completions for.
                // The sourceSpan of AttrAst points to the RHS of the attribute
                var templateKey = binding.name;
                var templateValue = ast.sourceSpan.toString();
                var templateUrl = ast.sourceSpan.start.file.url;
                // TODO(kyliau): We are unable to determine the absolute offset of the key
                // but it is okay here, because we are only looking at the RHS of the attr
                var absKeyOffset = 0;
                var absValueOffset = ast.sourceSpan.start.offset;
                var templateBindings = this.info.expressionParser.parseTemplateBindings(templateKey, templateValue, templateUrl, absKeyOffset, absValueOffset).templateBindings;
                // Find the nearest template binding to the position.
                var lastBindingEnd = templateBindings.length > 0 &&
                    templateBindings[templateBindings.length - 1].sourceSpan.end;
                var normalizedPositionToBinding_1 = lastBindingEnd && this.position > lastBindingEnd ? lastBindingEnd : this.position;
                var templateBinding = templateBindings.find(function (b) { return utils_1.inSpan(normalizedPositionToBinding_1, b.sourceSpan); });
                if (!templateBinding) {
                    return;
                }
                this.microSyntaxInAttributeValue(ast, templateBinding);
            }
            else {
                var expressionAst = this.info.expressionParser.parseBinding(ast.value, ast.sourceSpan.toString(), ast.sourceSpan.start.offset);
                this.processExpressionCompletions(expressionAst);
            }
        };
        ExpressionVisitor.prototype.visitReference = function (_ast, context) {
            var _this = this;
            context.directives.forEach(function (dir) {
                var exportAs = dir.directive.exportAs;
                if (exportAs) {
                    _this.completions.set(exportAs, { name: exportAs, kind: ng.CompletionKind.REFERENCE, sortText: exportAs });
                }
            });
        };
        ExpressionVisitor.prototype.visitBoundText = function (ast) {
            if (utils_1.inSpan(this.position, ast.value.sourceSpan)) {
                var completions = expressions_1.getExpressionCompletions(this.getExpressionScope(), ast.value, this.position, this.info.template);
                if (completions) {
                    this.addSymbolsToCompletions(completions);
                }
            }
        };
        ExpressionVisitor.prototype.processExpressionCompletions = function (value) {
            var symbols = expressions_1.getExpressionCompletions(this.getExpressionScope(), value, this.position, this.info.template);
            if (symbols) {
                this.addSymbolsToCompletions(symbols);
            }
        };
        ExpressionVisitor.prototype.addSymbolsToCompletions = function (symbols) {
            var e_4, _a;
            try {
                for (var symbols_1 = tslib_1.__values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                    var s = symbols_1_1.value;
                    if (s.name.startsWith('__') || !s.public || this.completions.has(s.name)) {
                        continue;
                    }
                    // The pipe method should not include parentheses.
                    // e.g. {{ value_expression | slice : start [ : end ] }}
                    var shouldInsertParentheses = s.callable && s.kind !== ng.CompletionKind.PIPE;
                    this.completions.set(s.name, {
                        name: s.name,
                        kind: s.kind,
                        sortText: s.name,
                        insertText: shouldInsertParentheses ? s.name + "()" : s.name,
                    });
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        /**
         * This method handles the completions of attribute values for directives that
         * support the microsyntax format. Examples are *ngFor and *ngIf.
         * These directives allows declaration of "let" variables, adds context-specific
         * symbols like $implicit, index, count, among other behaviors.
         * For a complete description of such format, see
         * https://angular.io/guide/structural-directives#asterisk
         *
         * @param attr descriptor for attribute name and value pair
         * @param binding template binding for the expression in the attribute
         */
        ExpressionVisitor.prototype.microSyntaxInAttributeValue = function (attr, binding) {
            var _a;
            var key = attr.name.substring(1); // remove leading asterisk
            // Find the selector - eg ngFor, ngIf, etc
            var selectorInfo = utils_1.getSelectors(this.info);
            var selector = selectorInfo.selectors.find(function (s) {
                // attributes are listed in (attribute, value) pairs
                for (var i = 0; i < s.attrs.length; i += 2) {
                    if (s.attrs[i] === key) {
                        return true;
                    }
                }
            });
            if (!selector) {
                return;
            }
            var valueRelativePosition = this.position - attr.sourceSpan.start.offset;
            if (binding instanceof compiler_1.VariableBinding) {
                // TODO(kyliau): With expression sourceSpan we shouldn't have to search
                // the attribute value string anymore. Just check if position is in the
                // expression source span.
                var equalLocation = attr.value.indexOf('=');
                if (equalLocation > 0 && valueRelativePosition > equalLocation) {
                    // We are after the '=' in a let clause. The valid values here are the members of the
                    // template reference's type parameter.
                    var directiveMetadata = selectorInfo.map.get(selector);
                    if (directiveMetadata) {
                        var contextTable = this.info.template.query.getTemplateContext(directiveMetadata.type.reference);
                        if (contextTable) {
                            // This adds symbols like $implicit, index, count, etc.
                            this.addSymbolsToCompletions(contextTable.values());
                            return;
                        }
                    }
                }
            }
            else if (binding instanceof compiler_1.ExpressionBinding) {
                if (utils_1.inSpan(this.position, (_a = binding.value) === null || _a === void 0 ? void 0 : _a.ast.sourceSpan)) {
                    this.processExpressionCompletions(binding.value.ast);
                    return;
                }
                else if (!binding.value && this.position > binding.key.span.end) {
                    // No expression is defined for the value of the key expression binding, but the cursor is
                    // in a location where the expression would be defined. This can happen in a case like
                    //   let i of |
                    //            ^-- cursor
                    // In this case, backfill the value to be an empty expression and retrieve completions.
                    this.processExpressionCompletions(new compiler_1.EmptyExpr(new compiler_1.ParseSpan(valueRelativePosition, valueRelativePosition), new compiler_1.AbsoluteSourceSpan(this.position, this.position)));
                    return;
                }
            }
        };
        return ExpressionVisitor;
    }(compiler_1.NullTemplateVisitor));
    /**
     * Return all Angular-specific attributes for the element with `elementName`.
     * @param info
     * @param elementName
     */
    function angularAttributes(info, elementName) {
        var e_5, _a, e_6, _b, e_7, _c, e_8, _d;
        var _e = utils_1.getSelectors(info), selectors = _e.selectors, selectorMap = _e.map;
        var templateRefs = new Set();
        var inputs = new Set();
        var outputs = new Set();
        var bananas = new Set();
        var others = new Set();
        try {
            for (var selectors_1 = tslib_1.__values(selectors), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
                var selector = selectors_1_1.value;
                if (selector.element && selector.element !== elementName) {
                    continue;
                }
                var summary = selectorMap.get(selector);
                var hasTemplateRef = utils_1.isStructuralDirective(summary.type);
                // attributes are listed in (attribute, value) pairs
                for (var i = 0; i < selector.attrs.length; i += 2) {
                    var attr = selector.attrs[i];
                    if (hasTemplateRef) {
                        templateRefs.add(attr);
                    }
                    else {
                        others.add(attr);
                    }
                }
                try {
                    for (var _f = (e_6 = void 0, tslib_1.__values(Object.values(summary.inputs))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var input = _g.value;
                        inputs.add(input);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                try {
                    for (var _h = (e_7 = void 0, tslib_1.__values(Object.values(summary.outputs))), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var output = _j.value;
                        outputs.add(output);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (selectors_1_1 && !selectors_1_1.done && (_a = selectors_1.return)) _a.call(selectors_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var inputs_1 = tslib_1.__values(inputs), inputs_1_1 = inputs_1.next(); !inputs_1_1.done; inputs_1_1 = inputs_1.next()) {
                var name_4 = inputs_1_1.value;
                // Add banana-in-a-box syntax
                // https://angular.io/guide/template-syntax#two-way-binding-
                if (outputs.has(name_4 + "Change")) {
                    bananas.add(name_4);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (inputs_1_1 && !inputs_1_1.done && (_d = inputs_1.return)) _d.call(inputs_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return { templateRefs: templateRefs, inputs: inputs, outputs: outputs, bananas: bananas, others: others };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9jb21wbGV0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7O0lBRUgsOENBQThYO0lBQzlYLHFEQUEyRTtJQUUzRSw2RUFBMkQ7SUFDM0QsK0ZBQTREO0lBQzVELHlFQUF1RDtJQUN2RCxxRUFBb0Y7SUFDcEYsbUVBQTBDO0lBQzFDLHdEQUE4QjtJQUM5Qiw2REFBd0o7SUFFeEosSUFBTSxvQkFBb0IsR0FDdEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRixJQUFNLGFBQWEsR0FDZix3QkFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1FBQ3JFLE9BQU87WUFDTCxJQUFJLE1BQUE7WUFDSixJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZO1lBQ3BDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ1AsSUFBTSxnQkFBZ0IsR0FBc0M7UUFDMUQ7WUFDRSxJQUFJLEVBQUUsY0FBYztZQUNwQixJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlO1lBQ3ZDLFFBQVEsRUFBRSxjQUFjO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlO1lBQ3ZDLFFBQVEsRUFBRSxZQUFZO1NB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QUNELE9BQU8sRUFBQyxZQUFZLGNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBQyxDQUFDO0lBQzFELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBYnNvbHV0ZVNvdXJjZVNwYW4sIEFTVCwgQXN0UGF0aCwgQXR0ckFzdCwgQXR0cmlidXRlLCBCb3VuZERpcmVjdGl2ZVByb3BlcnR5QXN0LCBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCwgQm91bmRFdmVudEFzdCwgQm91bmRUZXh0QXN0LCBFbGVtZW50LCBFbGVtZW50QXN0LCBFbXB0eUV4cHIsIEV4cHJlc3Npb25CaW5kaW5nLCBnZXRIdG1sVGFnRGVmaW5pdGlvbiwgSHRtbEFzdFBhdGgsIE5vZGUgYXMgSHRtbEFzdCwgTnVsbFRlbXBsYXRlVmlzaXRvciwgUGFyc2VTcGFuLCBSZWZlcmVuY2VBc3QsIFRhZ0NvbnRlbnRUeXBlLCBUZW1wbGF0ZUJpbmRpbmcsIFRleHQsIFZhcmlhYmxlQmluZGluZywgVmlzaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHskJCwgJF8sIGlzQXNjaWlMZXR0ZXIsIGlzRGlnaXR9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jaGFycyc7XG5cbmltcG9ydCB7QVRUUiwgZ2V0QmluZGluZ0Rlc2NyaXB0b3J9IGZyb20gJy4vYmluZGluZ191dGlscyc7XG5pbXBvcnQge2dldEV4cHJlc3Npb25TY29wZX0gZnJvbSAnLi9leHByZXNzaW9uX2RpYWdub3N0aWNzJztcbmltcG9ydCB7Z2V0RXhwcmVzc2lvbkNvbXBsZXRpb25zfSBmcm9tICcuL2V4cHJlc3Npb25zJztcbmltcG9ydCB7YXR0cmlidXRlTmFtZXMsIGVsZW1lbnROYW1lcywgZXZlbnROYW1lcywgcHJvcGVydHlOYW1lc30gZnJvbSAnLi9odG1sX2luZm8nO1xuaW1wb3J0IHtJbmxpbmVUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgKiBhcyBuZyBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7ZGlhZ25vc3RpY0luZm9Gcm9tVGVtcGxhdGVJbmZvLCBmaW5kVGVtcGxhdGVBc3RBdCwgZ2V0UGF0aFRvTm9kZUF0UG9zaXRpb24sIGdldFNlbGVjdG9ycywgaW5TcGFuLCBpc1N0cnVjdHVyYWxEaXJlY3RpdmUsIHNwYW5PZn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEhJRERFTl9IVE1MX0VMRU1FTlRTOiBSZWFkb25seVNldDxzdHJpbmc+ID1cbiAgICBuZXcgU2V0KFsnaHRtbCcsICdzY3JpcHQnLCAnbm9zY3JpcHQnLCAnYmFzZScsICdib2R5JywgJ3RpdGxlJywgJ2hlYWQnLCAnbGluayddKTtcbmNvbnN0IEhUTUxfRUxFTUVOVFM6IFJlYWRvbmx5QXJyYXk8bmcuQ29tcGxldGlvbkVudHJ5PiA9XG4gICAgZWxlbWVudE5hbWVzKCkuZmlsdGVyKG5hbWUgPT4gIUhJRERFTl9IVE1MX0VMRU1FTlRTLmhhcyhuYW1lKSkubWFwKG5hbWUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAga2luZDogbmcuQ29tcGxldGlvbktpbmQuSFRNTF9FTEVNRU5ULFxuICAgICAgICBzb3J0VGV4dDogbmFtZSxcbiAgICAgIH07XG4gICAgfSk7XG5jb25zdCBBTkdVTEFSX0VMRU1FTlRTOiBSZWFkb25seUFycmF5PG5nLkNvbXBsZXRpb25FbnRyeT4gPSBbXG4gIHtcbiAgICBuYW1lOiAnbmctY29udGFpbmVyJyxcbiAgICBraW5kOiBuZy5Db21wbGV0aW9uS2luZC5BTkdVTEFSX0VMRU1FTlQsXG4gICAgc29ydFRleHQ6ICduZy1jb250YWluZXInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ25nLWNvbnRlbnQnLFxuICAgIGtpbmQ6IG5nLkNvbXBsZXRpb25LaW5kLkFOR1VMQVJfRUxFTUVOVCxcbiAgICBzb3J0VGV4dDogJ25nLWNvbnRlbnQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ25nLXRlbXBsYXRlJyxcbiAgICBraW5kOiBuZy5Db21wbGV0aW9uS2luZC5BTkdVTEFSX0VMRU1FTlQsXG4gICAgc29ydFRleHQ6ICduZy10ZW1wbGF0ZScsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJQYXJ0KGNvZGU6IG51bWJlcikge1xuICAvLyBJZGVudGlmaWVycyBjb25zaXN0IG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCAnXycsIG9yICckJy5cbiAgcmV0dXJuIGlzQXNjaWlMZXR0ZXIoY29kZSkgfHwgaXNEaWdpdChjb2RlKSB8fCBjb2RlID09ICQkIHx8IGNvZGUgPT0gJF87XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3BhbiBvZiB3b3JkIGluIGEgdGVtcGxhdGUgdGhhdCBzdXJyb3VuZHMgYHBvc2l0aW9uYC4gSWYgdGhlcmUgaXMgbm8gd29yZCBhcm91bmRcbiAqIGBwb3NpdGlvbmAsIG5vdGhpbmcgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kZWRXb3JkU3BhbihcbiAgICB0ZW1wbGF0ZUluZm86IG5nLkFzdFJlc3VsdCwgcG9zaXRpb246IG51bWJlciwgYXN0OiBIdG1sQXN0fHVuZGVmaW5lZCk6IHRzLlRleHRTcGFufHVuZGVmaW5lZCB7XG4gIGNvbnN0IHt0ZW1wbGF0ZX0gPSB0ZW1wbGF0ZUluZm87XG4gIGNvbnN0IHRlbXBsYXRlU3JjID0gdGVtcGxhdGUuc291cmNlO1xuXG4gIGlmICghdGVtcGxhdGVTcmMpIHJldHVybjtcblxuICBpZiAoYXN0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgIC8vIFRoZSBIVE1MIHRhZyBtYXkgaW5jbHVkZSBgLWAgKGUuZy4gYGFwcC1yb290YCksXG4gICAgLy8gc28gdXNlIHRoZSBIdG1sQXN0IHRvIGdldCB0aGUgc3BhbiBiZWZvcmUgYXlhemhhZml6IHJlZmFjdG9yIHRoZSBjb2RlLlxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogdGVtcGxhdGVJbmZvLnRlbXBsYXRlLnNwYW4uc3RhcnQgKyBhc3Quc3RhcnRTb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCArIDEsXG4gICAgICBsZW5ndGg6IGFzdC5uYW1lLmxlbmd0aFxuICAgIH07XG4gIH1cblxuICAvLyBUT0RPKGF5YXpoYWZpeik6IEEgc29sdXRpb24gYmFzZWQgb24gd29yZCBleHBhbnNpb24gd2lsbCBhbHdheXMgYmUgZXhwZW5zaXZlIGNvbXBhcmVkIHRvIG9uZVxuICAvLyBiYXNlZCBvbiBBU1RzLiBXaGF0ZXZlciBwZW5hbHR5IHdlIGluY3VyIGlzIHByb2JhYmx5IG1hbmFnZWFibGUgZm9yIHNtYWxsLWxlbmd0aCAoaS5lLiB0aGVcbiAgLy8gbWFqb3JpdHkgb2YpIGlkZW50aWZpZXJzLCBidXQgdGhlIGN1cnJlbnQgc29sdXRpb24gaW52b2xlcyBhIG51bWJlciBvZiBicmFuY2hpbmdzIGFuZCB3ZSBjYW4ndFxuICAvLyBjb250cm9sIHBvdGVudGlhbGx5IHZlcnkgbG9uZyBpZGVudGlmaWVycy4gQ29uc2lkZXIgbW92aW5nIHRvIGFuIEFTVC1iYXNlZCBzb2x1dGlvbiBvbmNlXG4gIC8vIGV4aXN0aW5nIGRpZmZpY3VsdGllcyB3aXRoIEFTVCBzcGFucyBhcmUgbW9yZSBjbGVhcmx5IHJlc29sdmVkIChzZWUgIzMxODk4IGZvciBkaXNjdXNzaW9uIG9mXG4gIC8vIGtub3duIHByb2JsZW1zLCBhbmQgIzMzMDkxIGZvciBob3cgdGhleSBhZmZlY3QgdGV4dCByZXBsYWNlbWVudCkuXG4gIC8vXG4gIC8vIGB0ZW1wbGF0ZVBvc2l0aW9uYCByZXByZXNlbnRzIHRoZSByaWdodC1ib3VuZCBsb2NhdGlvbiBvZiBhIGN1cnNvciBpbiB0aGUgdGVtcGxhdGUuXG4gIC8vICAgIGtleS5lbnR8cnlcbiAgLy8gICAgICAgICAgIF4tLS0tIGN1cnNvciwgYXQgcG9zaXRpb24gYHJgIGlzIGF0LlxuICAvLyBBIGN1cnNvciBpcyBub3QgaXRzZWxmIGEgY2hhcmFjdGVyIGluIHRoZSB0ZW1wbGF0ZTsgaXQgaGFzIGEgbGVmdCAobG93ZXIpIGFuZCByaWdodCAodXBwZXIpXG4gIC8vIGluZGV4IGJvdW5kIHRoYXQgaHVncyB0aGUgY3Vyc29yIGl0c2VsZi5cbiAgbGV0IHRlbXBsYXRlUG9zaXRpb24gPSBwb3NpdGlvbiAtIHRlbXBsYXRlLnNwYW4uc3RhcnQ7XG4gIC8vIFRvIHBlcmZvcm0gd29yZCBleHBhbnNpb24sIHdlIHdhbnQgdG8gZGV0ZXJtaW5lIHRoZSBsZWZ0IGFuZCByaWdodCBpbmRpY2VzIHRoYXQgaHVnIHRoZSBjdXJzb3IuXG4gIC8vIFRoZXJlIGFyZSB0aHJlZSBjYXNlcyBoZXJlLlxuICBsZXQgbGVmdCwgcmlnaHQ7XG4gIGlmICh0ZW1wbGF0ZVBvc2l0aW9uID09PSAwKSB7XG4gICAgLy8gMS4gQ2FzZSBsaWtlXG4gICAgLy8gICAgICB8cmVzdCBvZiB0ZW1wbGF0ZVxuICAgIC8vICAgIHRoZSBjdXJzb3IgaXMgYXQgdGhlIHN0YXJ0IG9mIHRoZSB0ZW1wbGF0ZSwgaHVnZ2VkIG9ubHkgYnkgdGhlIHJpZ2h0IHNpZGUgKDAtaW5kZXgpLlxuICAgIGxlZnQgPSByaWdodCA9IDA7XG4gIH0gZWxzZSBpZiAodGVtcGxhdGVQb3NpdGlvbiA9PT0gdGVtcGxhdGVTcmMubGVuZ3RoKSB7XG4gICAgLy8gMi4gQ2FzZSBsaWtlXG4gICAgLy8gICAgICByZXN0IG9mIHRlbXBsYXRlfFxuICAgIC8vICAgIHRoZSBjdXJzb3IgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGVtcGxhdGUsIGh1Z2dlZCBvbmx5IGJ5IHRoZSBsZWZ0IHNpZGUgKGxhc3QtaW5kZXgpLlxuICAgIGxlZnQgPSByaWdodCA9IHRlbXBsYXRlU3JjLmxlbmd0aCAtIDE7XG4gIH0gZWxzZSB7XG4gICAgLy8gMy4gQ2FzZSBsaWtlXG4gICAgLy8gICAgICB3b3xyZFxuICAgIC8vICAgIHRoZXJlIGlzIGEgY2xlYXIgbGVmdCBhbmQgcmlnaHQgaW5kZXguXG4gICAgbGVmdCA9IHRlbXBsYXRlUG9zaXRpb24gLSAxO1xuICAgIHJpZ2h0ID0gdGVtcGxhdGVQb3NpdGlvbjtcbiAgfVxuXG4gIGlmICghaXNJZGVudGlmaWVyUGFydCh0ZW1wbGF0ZVNyYy5jaGFyQ29kZUF0KGxlZnQpKSAmJlxuICAgICAgIWlzSWRlbnRpZmllclBhcnQodGVtcGxhdGVTcmMuY2hhckNvZGVBdChyaWdodCkpKSB7XG4gICAgLy8gQ2FzZSBsaWtlXG4gICAgLy8gICAgICAgICAufC5cbiAgICAvLyBsZWZ0IC0tLV4gXi0tLSByaWdodFxuICAgIC8vIFRoZXJlIGlzIG5vIHdvcmQgaGVyZS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBFeHBhbmQgb24gdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUgdW50aWwgYSB3b3JkIGJvdW5kYXJ5IGlzIGhpdC4gQmFjayB1cCBvbmUgZXhwYW5zaW9uIG9uIGJvdGhcbiAgLy8gc2lkZSB0byBzdGF5IGluc2lkZSB0aGUgd29yZC5cbiAgd2hpbGUgKGxlZnQgPj0gMCAmJiBpc0lkZW50aWZpZXJQYXJ0KHRlbXBsYXRlU3JjLmNoYXJDb2RlQXQobGVmdCkpKSAtLWxlZnQ7XG4gICsrbGVmdDtcbiAgd2hpbGUgKHJpZ2h0IDwgdGVtcGxhdGVTcmMubGVuZ3RoICYmIGlzSWRlbnRpZmllclBhcnQodGVtcGxhdGVTcmMuY2hhckNvZGVBdChyaWdodCkpKSArK3JpZ2h0O1xuICAtLXJpZ2h0O1xuXG4gIGNvbnN0IGFic29sdXRlU3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uIC0gKHRlbXBsYXRlUG9zaXRpb24gLSBsZWZ0KTtcbiAgY29uc3QgbGVuZ3RoID0gcmlnaHQgLSBsZWZ0ICsgMTtcbiAgcmV0dXJuIHtzdGFydDogYWJzb2x1dGVTdGFydFBvc2l0aW9uLCBsZW5ndGh9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGVDb21wbGV0aW9ucyhcbiAgICB0ZW1wbGF0ZUluZm86IG5nLkFzdFJlc3VsdCwgcG9zaXRpb246IG51bWJlcik6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgY29uc3Qge2h0bWxBc3QsIHRlbXBsYXRlfSA9IHRlbXBsYXRlSW5mbztcbiAgLy8gQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIHRlbXBsYXRlLiBUaGlzIGlzIG5lZWRlZFxuICAvLyBiZWNhdXNlIHNwYW5zIGluIEhUTUwgQVNUIGFyZSByZWxhdGl2ZS4gSW5saW5lIHRlbXBsYXRlIGhhcyBub24temVybyBzdGFydCBwb3NpdGlvbi5cbiAgY29uc3QgdGVtcGxhdGVQb3NpdGlvbiA9IHBvc2l0aW9uIC0gdGVtcGxhdGUuc3Bhbi5zdGFydDtcbiAgY29uc3QgaHRtbFBhdGg6IEh0bWxBc3RQYXRoID0gZ2V0UGF0aFRvTm9kZUF0UG9zaXRpb24oaHRtbEFzdCwgdGVtcGxhdGVQb3NpdGlvbik7XG4gIGNvbnN0IG1vc3RTcGVjaWZpYyA9IGh0bWxQYXRoLnRhaWw7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgSHRtbFZpc2l0b3IodGVtcGxhdGVJbmZvLCBodG1sUGF0aCk7XG4gIGNvbnN0IHJlc3VsdHM6IG5nLkNvbXBsZXRpb25FbnRyeVtdID0gbW9zdFNwZWNpZmljID9cbiAgICAgIG1vc3RTcGVjaWZpYy52aXNpdCh2aXNpdG9yLCBudWxsIC8qIGNvbnRleHQgKi8pIDpcbiAgICAgIGVsZW1lbnRDb21wbGV0aW9ucyh0ZW1wbGF0ZUluZm8pO1xuICBjb25zdCByZXBsYWNlbWVudFNwYW4gPSBnZXRCb3VuZGVkV29yZFNwYW4odGVtcGxhdGVJbmZvLCBwb3NpdGlvbiwgbW9zdFNwZWNpZmljKTtcbiAgcmV0dXJuIHJlc3VsdHMubWFwKGVudHJ5ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW50cnksXG4gICAgICByZXBsYWNlbWVudFNwYW4sXG4gICAgfTtcbiAgfSk7XG59XG5cbmNsYXNzIEh0bWxWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIC8qKlxuICAgKiBQb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSByZWxhdGl2ZVBvc2l0aW9uOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVJbmZvOiBuZy5Bc3RSZXN1bHQsIHByaXZhdGUgcmVhZG9ubHkgaHRtbFBhdGg6IEh0bWxBc3RQYXRoKSB7XG4gICAgdGhpcy5yZWxhdGl2ZVBvc2l0aW9uID0gaHRtbFBhdGgucG9zaXRpb247XG4gIH1cbiAgLy8gTm90ZSB0aGF0IGV2ZXJ5IHZpc2l0b3IgbWV0aG9kIG11c3QgZXhwbGljaXRseSBzcGVjaWZ5IHJldHVybiB0eXBlIGJlY2F1c2VcbiAgLy8gVmlzaXRvciByZXR1cm5zIGBhbnlgIGZvciBhbGwgbWV0aG9kcy5cbiAgdmlzaXRFbGVtZW50KGFzdDogRWxlbWVudCk6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgICBjb25zdCBzdGFydFRhZ1NwYW4gPSBzcGFuT2YoYXN0LnNvdXJjZVNwYW4pO1xuICAgIGNvbnN0IHRhZ0xlbiA9IGFzdC5uYW1lLmxlbmd0aDtcbiAgICAvLyArIDEgZm9yIHRoZSBvcGVuaW5nIGFuZ2xlIGJyYWNrZXRcbiAgICBpZiAodGhpcy5yZWxhdGl2ZVBvc2l0aW9uIDw9IHN0YXJ0VGFnU3Bhbi5zdGFydCArIHRhZ0xlbiArIDEpIHtcbiAgICAgIC8vIElmIHdlIGFyZSBpbiB0aGUgdGFnIHRoZW4gcmV0dXJuIHRoZSBlbGVtZW50IGNvbXBsZXRpb25zLlxuICAgICAgcmV0dXJuIGVsZW1lbnRDb21wbGV0aW9ucyh0aGlzLnRlbXBsYXRlSW5mbyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbGF0aXZlUG9zaXRpb24gPCBzdGFydFRhZ1NwYW4uZW5kKSB7XG4gICAgICAvLyBXZSBhcmUgaW4gdGhlIGF0dHJpYnV0ZSBzZWN0aW9uIG9mIHRoZSBlbGVtZW50IChidXQgbm90IGluIGFuIGF0dHJpYnV0ZSkuXG4gICAgICAvLyBSZXR1cm4gdGhlIGF0dHJpYnV0ZSBjb21wbGV0aW9ucy5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVDb21wbGV0aW9uc0ZvckVsZW1lbnQodGhpcy50ZW1wbGF0ZUluZm8sIGFzdC5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZpc2l0QXR0cmlidXRlKGFzdDogQXR0cmlidXRlKTogbmcuQ29tcGxldGlvbkVudHJ5W10ge1xuICAgIC8vIEFuIGF0dHJpYnV0ZSBjb25zaXN0cyBvZiB0d28gcGFydHMsIExIUz1cIlJIU1wiLlxuICAgIC8vIERldGVybWluZSBpZiBjb21wbGV0aW9ucyBhcmUgcmVxdWVzdGVkIGZvciBMSFMgb3IgUkhTXG4gICAgaWYgKGFzdC52YWx1ZVNwYW4gJiYgaW5TcGFuKHRoaXMucmVsYXRpdmVQb3NpdGlvbiwgc3Bhbk9mKGFzdC52YWx1ZVNwYW4pKSkge1xuICAgICAgLy8gUkhTIGNvbXBsZXRpb25cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZUNvbXBsZXRpb25zKHRoaXMudGVtcGxhdGVJbmZvLCB0aGlzLmh0bWxQYXRoKTtcbiAgICB9XG4gICAgLy8gTEhTIGNvbXBsZXRpb25cbiAgICByZXR1cm4gYXR0cmlidXRlQ29tcGxldGlvbnModGhpcy50ZW1wbGF0ZUluZm8sIHRoaXMuaHRtbFBhdGgpO1xuICB9XG4gIHZpc2l0VGV4dCgpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gICAgY29uc3QgdGVtcGxhdGVQYXRoID0gZmluZFRlbXBsYXRlQXN0QXQodGhpcy50ZW1wbGF0ZUluZm8udGVtcGxhdGVBc3QsIHRoaXMucmVsYXRpdmVQb3NpdGlvbik7XG4gICAgaWYgKHRlbXBsYXRlUGF0aC50YWlsIGluc3RhbmNlb2YgQm91bmRUZXh0QXN0KSB7XG4gICAgICAvLyBJZiB3ZSBrbm93IHRoYXQgdGhpcyBpcyBhbiBpbnRlcnBvbGF0aW9uIHRoZW4gZG8gbm90IHRyeSBvdGhlciBzY2VuYXJpb3MuXG4gICAgICBjb25zdCB2aXNpdG9yID0gbmV3IEV4cHJlc3Npb25WaXNpdG9yKFxuICAgICAgICAgIHRoaXMudGVtcGxhdGVJbmZvLCB0aGlzLnJlbGF0aXZlUG9zaXRpb24sXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgZ2V0RXhwcmVzc2lvblNjb3BlKGRpYWdub3N0aWNJbmZvRnJvbVRlbXBsYXRlSW5mbyh0aGlzLnRlbXBsYXRlSW5mbyksIHRlbXBsYXRlUGF0aCkpO1xuICAgICAgdGVtcGxhdGVQYXRoLnRhaWw/LnZpc2l0KHZpc2l0b3IsIG51bGwpO1xuICAgICAgcmV0dXJuIHZpc2l0b3IucmVzdWx0cztcbiAgICB9XG4gICAgLy8gVE9ETyhreWxpYXUpOiBOb3Qgc3VyZSBpZiB0aGlzIGNoZWNrIGlzIHJlYWxseSBuZWVkZWQgc2luY2Ugd2UgZG9uJ3QgaGF2ZVxuICAgIC8vIGFueSB0ZXN0IGNhc2VzIGZvciBpdC5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5odG1sUGF0aC5maXJzdChFbGVtZW50KTtcbiAgICBpZiAoZWxlbWVudCAmJlxuICAgICAgICBnZXRIdG1sVGFnRGVmaW5pdGlvbihlbGVtZW50Lm5hbWUpLmdldENvbnRlbnRUeXBlKCkgIT09IFRhZ0NvbnRlbnRUeXBlLlBBUlNBQkxFX0RBVEEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gVGhpcyBpcyB0byBhY2NvdW50IGZvciBjYXNlcyBsaWtlIDxoMT4gPGE+IHRleHQgfCA8L2gxPiB3aGVyZSB0aGVcbiAgICAvLyBjbG9zZXN0IGVsZW1lbnQgaGFzIG5vIGNsb3NpbmcgdGFnIGFuZCB0aHVzIGlzIGNvbnNpZGVyZWQgcGxhaW4gdGV4dC5cbiAgICBjb25zdCByZXN1bHRzID0gdm9pZEVsZW1lbnRBdHRyaWJ1dGVDb21wbGV0aW9ucyh0aGlzLnRlbXBsYXRlSW5mbywgdGhpcy5odG1sUGF0aCk7XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRDb21wbGV0aW9ucyh0aGlzLnRlbXBsYXRlSW5mbyk7XG4gIH1cbiAgdmlzaXRDb21tZW50KCk6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmlzaXRFeHBhbnNpb24oKTogbmcuQ29tcGxldGlvbkVudHJ5W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2aXNpdEV4cGFuc2lvbkNhc2UoKTogbmcuQ29tcGxldGlvbkVudHJ5W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVDb21wbGV0aW9ucyhpbmZvOiBuZy5Bc3RSZXN1bHQsIHBhdGg6IEFzdFBhdGg8SHRtbEFzdD4pOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gIGNvbnN0IGF0dHIgPSBwYXRoLnRhaWw7XG4gIGNvbnN0IGVsZW0gPSBwYXRoLnBhcmVudE9mKGF0dHIpO1xuICBpZiAoIShhdHRyIGluc3RhbmNlb2YgQXR0cmlidXRlKSB8fCAhKGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIFRPRE86IENvbnNpZGVyIHBhcnNpbmcgdGhlIGF0dHJpbnV0ZSBuYW1lIHRvIGEgcHJvcGVyIEFTVCBpbnN0ZWFkIG9mXG4gIC8vIG1hdGNoaW5nIHVzaW5nIHJlZ2V4LiBUaGlzIGlzIGJlY2F1c2UgdGhlIHJlZ2V4cCB3b3VsZCBpbmNvcnJlY3RseSBpZGVudGlmeVxuICAvLyBiaW5kIHBhcnRzIGZvciBjYXNlcyBsaWtlIFsoKXxdXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXiBjdXJzb3IgaXMgaGVyZVxuICBjb25zdCBiaW5kaW5nID0gZ2V0QmluZGluZ0Rlc2NyaXB0b3IoYXR0ci5uYW1lKTtcbiAgaWYgKCFiaW5kaW5nKSB7XG4gICAgLy8gVGhpcyBpcyBhIG5vcm1hbCBIVE1MIGF0dHJpYnV0ZSwgbm90IGFuIEFuZ3VsYXIgYXR0cmlidXRlLlxuICAgIHJldHVybiBhdHRyaWJ1dGVDb21wbGV0aW9uc0ZvckVsZW1lbnQoaW5mbywgZWxlbS5uYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IG5nQXR0cnMgPSBhbmd1bGFyQXR0cmlidXRlcyhpbmZvLCBlbGVtLm5hbWUpO1xuICBzd2l0Y2ggKGJpbmRpbmcua2luZCkge1xuICAgIGNhc2UgQVRUUi5LV19NSUNST1NZTlRBWDpcbiAgICAgIC8vIHRlbXBsYXRlIHJlZmVyZW5jZSBhdHRyaWJ1dGU6ICphdHRyTmFtZVxuICAgICAgcmVzdWx0cy5wdXNoKC4uLm5nQXR0cnMudGVtcGxhdGVSZWZzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBVFRSLktXX0JJTkQ6XG4gICAgY2FzZSBBVFRSLklERU5UX1BST1BFUlRZOlxuICAgICAgLy8gcHJvcGVydHkgYmluZGluZyB2aWEgYmluZC0gb3IgW11cbiAgICAgIHJlc3VsdHMucHVzaCguLi5wcm9wZXJ0eU5hbWVzKGVsZW0ubmFtZSksIC4uLm5nQXR0cnMuaW5wdXRzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBVFRSLktXX09OOlxuICAgIGNhc2UgQVRUUi5JREVOVF9FVkVOVDpcbiAgICAgIC8vIGV2ZW50IGJpbmRpbmcgdmlhIG9uLSBvciAoKVxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmV2ZW50TmFtZXMoZWxlbS5uYW1lKSwgLi4ubmdBdHRycy5vdXRwdXRzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBVFRSLktXX0JJTkRPTjpcbiAgICBjYXNlIEFUVFIuSURFTlRfQkFOQU5BX0JPWDpcbiAgICAgIC8vIGJhbmFuYS1pbi1hLWJveCBiaW5kaW5nIHZpYSBiaW5kb24tIG9yIFsoKV1cbiAgICAgIHJlc3VsdHMucHVzaCguLi5uZ0F0dHJzLmJhbmFuYXMpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5tYXAobmFtZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBraW5kOiBuZy5Db21wbGV0aW9uS2luZC5BVFRSSUJVVEUsXG4gICAgICBzb3J0VGV4dDogbmFtZSxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlQ29tcGxldGlvbnNGb3JFbGVtZW50KFxuICAgIGluZm86IG5nLkFzdFJlc3VsdCwgZWxlbWVudE5hbWU6IHN0cmluZyk6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgY29uc3QgcmVzdWx0czogbmcuQ29tcGxldGlvbkVudHJ5W10gPSBbXTtcblxuICBpZiAoaW5mby50ZW1wbGF0ZSBpbnN0YW5jZW9mIElubGluZVRlbXBsYXRlKSB7XG4gICAgLy8gUHJvdmlkZSBIVE1MIGF0dHJpYnV0ZXMgY29tcGxldGlvbiBvbmx5IGZvciBpbmxpbmUgdGVtcGxhdGVzXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJpYnV0ZU5hbWVzKGVsZW1lbnROYW1lKSkge1xuICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAga2luZDogbmcuQ29tcGxldGlvbktpbmQuSFRNTF9BVFRSSUJVVEUsXG4gICAgICAgIHNvcnRUZXh0OiBuYW1lLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIEFuZ3VsYXIgYXR0cmlidXRlc1xuICBjb25zdCBuZ0F0dHJzID0gYW5ndWxhckF0dHJpYnV0ZXMoaW5mbywgZWxlbWVudE5hbWUpO1xuICBmb3IgKGNvbnN0IG5hbWUgb2YgbmdBdHRycy5vdGhlcnMpIHtcbiAgICByZXN1bHRzLnB1c2goe1xuICAgICAgbmFtZSxcbiAgICAgIGtpbmQ6IG5nLkNvbXBsZXRpb25LaW5kLkFUVFJJQlVURSxcbiAgICAgIHNvcnRUZXh0OiBuYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogUHJvdmlkZSBjb21wbGV0aW9ucyB0byB0aGUgUkhTIG9mIGFuIGF0dHJpYnV0ZSwgd2hpY2ggaXMgb2YgdGhlIGZvcm1cbiAqIExIUz1cIlJIU1wiLiBUaGUgdGVtcGxhdGUgcGF0aCBpcyBjb21wdXRlZCBmcm9tIHRoZSBzcGVjaWZpZWQgYGluZm9gIHdoZXJlYXNcbiAqIHRoZSBjb250ZXh0IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY2lmaWVkIGBodG1sUGF0aGAuXG4gKiBAcGFyYW0gaW5mbyBPYmplY3QgdGhhdCBjb250YWlucyB0aGUgdGVtcGxhdGUgQVNUXG4gKiBAcGFyYW0gaHRtbFBhdGggUGF0aCB0byB0aGUgSFRNTCBub2RlXG4gKi9cbmZ1bmN0aW9uIGF0dHJpYnV0ZVZhbHVlQ29tcGxldGlvbnMoXG4gICAgaW5mbzogbmcuQXN0UmVzdWx0LCBodG1sUGF0aDogSHRtbEFzdFBhdGgpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgVGVtcGxhdGUgQVNUIHBhdGguXG4gIGNvbnN0IHRlbXBsYXRlUGF0aCA9IGZpbmRUZW1wbGF0ZUFzdEF0KGluZm8udGVtcGxhdGVBc3QsIGh0bWxQYXRoLnBvc2l0aW9uKTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBFeHByZXNzaW9uVmlzaXRvcihpbmZvLCBodG1sUGF0aC5wb3NpdGlvbiwgKCkgPT4ge1xuICAgIGNvbnN0IGRpbmZvID0gZGlhZ25vc3RpY0luZm9Gcm9tVGVtcGxhdGVJbmZvKGluZm8pO1xuICAgIHJldHVybiBnZXRFeHByZXNzaW9uU2NvcGUoZGluZm8sIHRlbXBsYXRlUGF0aCk7XG4gIH0pO1xuICBpZiAodGVtcGxhdGVQYXRoLnRhaWwgaW5zdGFuY2VvZiBBdHRyQXN0IHx8XG4gICAgICB0ZW1wbGF0ZVBhdGgudGFpbCBpbnN0YW5jZW9mIEJvdW5kRWxlbWVudFByb3BlcnR5QXN0IHx8XG4gICAgICB0ZW1wbGF0ZVBhdGgudGFpbCBpbnN0YW5jZW9mIEJvdW5kRXZlbnRBc3QpIHtcbiAgICB0ZW1wbGF0ZVBhdGgudGFpbC52aXNpdCh2aXNpdG9yLCBudWxsKTtcbiAgICByZXR1cm4gdmlzaXRvci5yZXN1bHRzO1xuICB9XG4gIC8vIEluIG9yZGVyIHRvIHByb3ZpZGUgYWNjdXJhdGUgYXR0cmlidXRlIHZhbHVlIGNvbXBsZXRpb24sIHdlIG5lZWQgdG8ga25vd1xuICAvLyB3aGF0IHRoZSBMSFMgaXMsIGFuZCBjb25zdHJ1Y3QgdGhlIHByb3BlciBBU1QgaWYgaXQgaXMgbWlzc2luZy5cbiAgY29uc3QgaHRtbEF0dHIgPSBodG1sUGF0aC50YWlsIGFzIEF0dHJpYnV0ZTtcbiAgY29uc3QgYmluZGluZyA9IGdldEJpbmRpbmdEZXNjcmlwdG9yKGh0bWxBdHRyLm5hbWUpO1xuICBpZiAoYmluZGluZyAmJiBiaW5kaW5nLmtpbmQgPT09IEFUVFIuS1dfUkVGKSB7XG4gICAgbGV0IHJlZkFzdDogUmVmZXJlbmNlQXN0fHVuZGVmaW5lZDtcbiAgICBsZXQgZWxlbUFzdDogRWxlbWVudEFzdHx1bmRlZmluZWQ7XG4gICAgaWYgKHRlbXBsYXRlUGF0aC50YWlsIGluc3RhbmNlb2YgUmVmZXJlbmNlQXN0KSB7XG4gICAgICByZWZBc3QgPSB0ZW1wbGF0ZVBhdGgudGFpbDtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlUGF0aC5wYXJlbnRPZihyZWZBc3QpO1xuICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEVsZW1lbnRBc3QpIHtcbiAgICAgICAgZWxlbUFzdCA9IHBhcmVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlbXBsYXRlUGF0aC50YWlsIGluc3RhbmNlb2YgRWxlbWVudEFzdCkge1xuICAgICAgcmVmQXN0ID0gbmV3IFJlZmVyZW5jZUFzdChodG1sQXR0ci5uYW1lLCBudWxsISwgaHRtbEF0dHIudmFsdWUsIGh0bWxBdHRyLnZhbHVlU3BhbiEpO1xuICAgICAgZWxlbUFzdCA9IHRlbXBsYXRlUGF0aC50YWlsO1xuICAgIH1cbiAgICBpZiAocmVmQXN0ICYmIGVsZW1Bc3QpIHtcbiAgICAgIHJlZkFzdC52aXNpdCh2aXNpdG9yLCBlbGVtQXN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSHRtbEFzdCBjb250YWlucyB0aGUgYEF0dHJpYnV0ZWAgbm9kZSwgaG93ZXZlciB0aGUgY29ycmVzcG9uZGluZyBgQXR0ckFzdGBcbiAgICAvLyBub2RlIGlzIG1pc3NpbmcgZnJvbSB0aGUgVGVtcGxhdGVBc3QuXG4gICAgY29uc3QgYXR0ckFzdCA9IG5ldyBBdHRyQXN0KGh0bWxBdHRyLm5hbWUsIGh0bWxBdHRyLnZhbHVlLCBodG1sQXR0ci52YWx1ZVNwYW4hKTtcbiAgICBhdHRyQXN0LnZpc2l0KHZpc2l0b3IsIG51bGwpO1xuICB9XG4gIHJldHVybiB2aXNpdG9yLnJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRDb21wbGV0aW9ucyhpbmZvOiBuZy5Bc3RSZXN1bHQpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gIGNvbnN0IHJlc3VsdHM6IG5nLkNvbXBsZXRpb25FbnRyeVtdID0gWy4uLkFOR1VMQVJfRUxFTUVOVFNdO1xuXG4gIGlmIChpbmZvLnRlbXBsYXRlIGluc3RhbmNlb2YgSW5saW5lVGVtcGxhdGUpIHtcbiAgICAvLyBQcm92aWRlIEhUTUwgZWxlbWVudHMgY29tcGxldGlvbiBvbmx5IGZvciBpbmxpbmUgdGVtcGxhdGVzXG4gICAgcmVzdWx0cy5wdXNoKC4uLkhUTUxfRUxFTUVOVFMpO1xuICB9XG5cbiAgLy8gQ29sbGVjdCB0aGUgZWxlbWVudHMgcmVmZXJlbmNlZCBieSB0aGUgc2VsZWN0b3JzXG4gIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBnZXRTZWxlY3RvcnMoaW5mbykuc2VsZWN0b3JzKSB7XG4gICAgY29uc3QgbmFtZSA9IHNlbGVjdG9yLmVsZW1lbnQ7XG4gICAgaWYgKG5hbWUgJiYgIWNvbXBvbmVudHMuaGFzKG5hbWUpKSB7XG4gICAgICBjb21wb25lbnRzLmFkZChuYW1lKTtcbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGtpbmQ6IG5nLkNvbXBsZXRpb25LaW5kLkNPTVBPTkVOVCxcbiAgICAgICAgc29ydFRleHQ6IG5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLy8gVGhlcmUgaXMgYSBzcGVjaWFsIGNhc2Ugb2YgSFRNTCB3aGVyZSB0ZXh0IHRoYXQgY29udGFpbnMgYSB1bmNsb3NlZCB0YWcgaXMgdHJlYXRlZCBhc1xuLy8gdGV4dC4gRm9yIGV4YXBsZSAnPGgxPiBTb21lIDxhIHRleHQgPC9oMT4nIHByb2R1Y2VzIGEgdGV4dCBub2RlcyBpbnNpZGUgb2YgdGhlIEgxXG4vLyBlbGVtZW50IFwiU29tZSA8YSB0ZXh0XCIuIFdlLCBob3dldmVyLCB3YW50IHRvIHRyZWF0IHRoaXMgYXMgaWYgdGhlIHVzZXIgd2FzIHJlcXVlc3Rpbmdcbi8vIHRoZSBhdHRyaWJ1dGVzIG9mIGFuIFwiYVwiIGVsZW1lbnQsIG5vdCByZXF1ZXN0aW5nIGNvbXBsZXRpb24gaW4gdGhlIGEgdGV4dCBlbGVtZW50LiBUaGlzXG4vLyBjb2RlIGNoZWNrcyBmb3IgdGhpcyBjYXNlIGFuZCByZXR1cm5zIGVsZW1lbnQgY29tcGxldGlvbnMgaWYgaXQgaXMgZGV0ZWN0ZWQgb3IgdW5kZWZpbmVkXG4vLyBpZiBpdCBpcyBub3QuXG5mdW5jdGlvbiB2b2lkRWxlbWVudEF0dHJpYnV0ZUNvbXBsZXRpb25zKFxuICAgIGluZm86IG5nLkFzdFJlc3VsdCwgcGF0aDogQXN0UGF0aDxIdG1sQXN0Pik6IG5nLkNvbXBsZXRpb25FbnRyeVtdIHtcbiAgY29uc3QgdGFpbCA9IHBhdGgudGFpbDtcbiAgaWYgKHRhaWwgaW5zdGFuY2VvZiBUZXh0KSB7XG4gICAgY29uc3QgbWF0Y2ggPSB0YWlsLnZhbHVlLm1hdGNoKC88KFxcdyhcXHd8XFxkfC0pKjopPyhcXHcoXFx3fFxcZHwtKSopXFxzLyk7XG4gICAgLy8gVGhlIHBvc2l0aW9uIG11c3QgYmUgYWZ0ZXIgdGhlIG1hdGNoLCBvdGhlcndpc2Ugd2UgYXJlIHN0aWxsIGluIGEgcGxhY2Ugd2hlcmUgZWxlbWVudHNcbiAgICAvLyBhcmUgZXhwZWN0ZWQgKHN1Y2ggYXMgYDx8YWAgb3IgYDxhfGA7IHdlIG9ubHkgd2FudCBhdHRyaWJ1dGVzIGZvciBgPGEgfGAgb3IgYWZ0ZXIpLlxuICAgIGlmIChtYXRjaCAmJlxuICAgICAgICBwYXRoLnBvc2l0aW9uID49IChtYXRjaC5pbmRleCB8fCAwKSArIG1hdGNoWzBdLmxlbmd0aCArIHRhaWwuc291cmNlU3Bhbi5zdGFydC5vZmZzZXQpIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVDb21wbGV0aW9uc0ZvckVsZW1lbnQoaW5mbywgbWF0Y2hbM10pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG5cbmNsYXNzIEV4cHJlc3Npb25WaXNpdG9yIGV4dGVuZHMgTnVsbFRlbXBsYXRlVmlzaXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29tcGxldGlvbnMgPSBuZXcgTWFwPHN0cmluZywgbmcuQ29tcGxldGlvbkVudHJ5PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBpbmZvOiBuZy5Bc3RSZXN1bHQsIHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcixcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgZ2V0RXhwcmVzc2lvblNjb3BlOiAoKSA9PiBuZy5TeW1ib2xUYWJsZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgcmVzdWx0cygpOiBuZy5Db21wbGV0aW9uRW50cnlbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jb21wbGV0aW9ucy52YWx1ZXMoKSk7XG4gIH1cblxuICB2aXNpdERpcmVjdGl2ZVByb3BlcnR5KGFzdDogQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdCk6IHZvaWQge1xuICAgIHRoaXMucHJvY2Vzc0V4cHJlc3Npb25Db21wbGV0aW9ucyhhc3QudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50UHJvcGVydHkoYXN0OiBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCk6IHZvaWQge1xuICAgIHRoaXMucHJvY2Vzc0V4cHJlc3Npb25Db21wbGV0aW9ucyhhc3QudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRFdmVudChhc3Q6IEJvdW5kRXZlbnRBc3QpOiB2b2lkIHtcbiAgICB0aGlzLnByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnMoYXN0LmhhbmRsZXIpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KCk6IHZvaWQge1xuICAgIC8vIG5vLW9wIGZvciBub3dcbiAgfVxuXG4gIHZpc2l0QXR0cihhc3Q6IEF0dHJBc3QpIHtcbiAgICBjb25zdCBiaW5kaW5nID0gZ2V0QmluZGluZ0Rlc2NyaXB0b3IoYXN0Lm5hbWUpO1xuICAgIGlmIChiaW5kaW5nICYmIGJpbmRpbmcua2luZCA9PT0gQVRUUi5LV19NSUNST1NZTlRBWCkge1xuICAgICAgLy8gVGhpcyBhIHRlbXBsYXRlIGJpbmRpbmcgZ2l2ZW4gYnkgbWljcm8gc3ludGF4IGV4cHJlc3Npb24uXG4gICAgICAvLyBGaXJzdCwgdmVyaWZ5IHRoZSBhdHRyaWJ1dGUgY29uc2lzdHMgb2Ygc29tZSBiaW5kaW5nIHdlIGNhbiBnaXZlIGNvbXBsZXRpb25zIGZvci5cbiAgICAgIC8vIFRoZSBzb3VyY2VTcGFuIG9mIEF0dHJBc3QgcG9pbnRzIHRvIHRoZSBSSFMgb2YgdGhlIGF0dHJpYnV0ZVxuICAgICAgY29uc3QgdGVtcGxhdGVLZXkgPSBiaW5kaW5nLm5hbWU7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVZhbHVlID0gYXN0LnNvdXJjZVNwYW4udG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlVXJsID0gYXN0LnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmw7XG4gICAgICAvLyBUT0RPKGt5bGlhdSk6IFdlIGFyZSB1bmFibGUgdG8gZGV0ZXJtaW5lIHRoZSBhYnNvbHV0ZSBvZmZzZXQgb2YgdGhlIGtleVxuICAgICAgLy8gYnV0IGl0IGlzIG9rYXkgaGVyZSwgYmVjYXVzZSB3ZSBhcmUgb25seSBsb29raW5nIGF0IHRoZSBSSFMgb2YgdGhlIGF0dHJcbiAgICAgIGNvbnN0IGFic0tleU9mZnNldCA9IDA7XG4gICAgICBjb25zdCBhYnNWYWx1ZU9mZnNldCA9IGFzdC5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldDtcbiAgICAgIGNvbnN0IHt0ZW1wbGF0ZUJpbmRpbmdzfSA9IHRoaXMuaW5mby5leHByZXNzaW9uUGFyc2VyLnBhcnNlVGVtcGxhdGVCaW5kaW5ncyhcbiAgICAgICAgICB0ZW1wbGF0ZUtleSwgdGVtcGxhdGVWYWx1ZSwgdGVtcGxhdGVVcmwsIGFic0tleU9mZnNldCwgYWJzVmFsdWVPZmZzZXQpO1xuICAgICAgLy8gRmluZCB0aGUgbmVhcmVzdCB0ZW1wbGF0ZSBiaW5kaW5nIHRvIHRoZSBwb3NpdGlvbi5cbiAgICAgIGNvbnN0IGxhc3RCaW5kaW5nRW5kID0gdGVtcGxhdGVCaW5kaW5ncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgdGVtcGxhdGVCaW5kaW5nc1t0ZW1wbGF0ZUJpbmRpbmdzLmxlbmd0aCAtIDFdLnNvdXJjZVNwYW4uZW5kO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFBvc2l0aW9uVG9CaW5kaW5nID1cbiAgICAgICAgICBsYXN0QmluZGluZ0VuZCAmJiB0aGlzLnBvc2l0aW9uID4gbGFzdEJpbmRpbmdFbmQgPyBsYXN0QmluZGluZ0VuZCA6IHRoaXMucG9zaXRpb247XG4gICAgICBjb25zdCB0ZW1wbGF0ZUJpbmRpbmcgPVxuICAgICAgICAgIHRlbXBsYXRlQmluZGluZ3MuZmluZChiID0+IGluU3Bhbihub3JtYWxpemVkUG9zaXRpb25Ub0JpbmRpbmcsIGIuc291cmNlU3BhbikpO1xuXG4gICAgICBpZiAoIXRlbXBsYXRlQmluZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWljcm9TeW50YXhJbkF0dHJpYnV0ZVZhbHVlKGFzdCwgdGVtcGxhdGVCaW5kaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhwcmVzc2lvbkFzdCA9IHRoaXMuaW5mby5leHByZXNzaW9uUGFyc2VyLnBhcnNlQmluZGluZyhcbiAgICAgICAgICBhc3QudmFsdWUsIGFzdC5zb3VyY2VTcGFuLnRvU3RyaW5nKCksIGFzdC5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCk7XG4gICAgICB0aGlzLnByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnMoZXhwcmVzc2lvbkFzdCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRSZWZlcmVuY2UoX2FzdDogUmVmZXJlbmNlQXN0LCBjb250ZXh0OiBFbGVtZW50QXN0KSB7XG4gICAgY29udGV4dC5kaXJlY3RpdmVzLmZvckVhY2goZGlyID0+IHtcbiAgICAgIGNvbnN0IHtleHBvcnRBc30gPSBkaXIuZGlyZWN0aXZlO1xuICAgICAgaWYgKGV4cG9ydEFzKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGlvbnMuc2V0KFxuICAgICAgICAgICAgZXhwb3J0QXMsIHtuYW1lOiBleHBvcnRBcywga2luZDogbmcuQ29tcGxldGlvbktpbmQuUkVGRVJFTkNFLCBzb3J0VGV4dDogZXhwb3J0QXN9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0Qm91bmRUZXh0KGFzdDogQm91bmRUZXh0QXN0KSB7XG4gICAgaWYgKGluU3Bhbih0aGlzLnBvc2l0aW9uLCBhc3QudmFsdWUuc291cmNlU3BhbikpIHtcbiAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gZ2V0RXhwcmVzc2lvbkNvbXBsZXRpb25zKFxuICAgICAgICAgIHRoaXMuZ2V0RXhwcmVzc2lvblNjb3BlKCksIGFzdC52YWx1ZSwgdGhpcy5wb3NpdGlvbiwgdGhpcy5pbmZvLnRlbXBsYXRlKTtcbiAgICAgIGlmIChjb21wbGV0aW9ucykge1xuICAgICAgICB0aGlzLmFkZFN5bWJvbHNUb0NvbXBsZXRpb25zKGNvbXBsZXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnModmFsdWU6IEFTVCkge1xuICAgIGNvbnN0IHN5bWJvbHMgPSBnZXRFeHByZXNzaW9uQ29tcGxldGlvbnMoXG4gICAgICAgIHRoaXMuZ2V0RXhwcmVzc2lvblNjb3BlKCksIHZhbHVlLCB0aGlzLnBvc2l0aW9uLCB0aGlzLmluZm8udGVtcGxhdGUpO1xuICAgIGlmIChzeW1ib2xzKSB7XG4gICAgICB0aGlzLmFkZFN5bWJvbHNUb0NvbXBsZXRpb25zKHN5bWJvbHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU3ltYm9sc1RvQ29tcGxldGlvbnMoc3ltYm9sczogbmcuU3ltYm9sW10pIHtcbiAgICBmb3IgKGNvbnN0IHMgb2Ygc3ltYm9scykge1xuICAgICAgaWYgKHMubmFtZS5zdGFydHNXaXRoKCdfXycpIHx8ICFzLnB1YmxpYyB8fCB0aGlzLmNvbXBsZXRpb25zLmhhcyhzLm5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcGlwZSBtZXRob2Qgc2hvdWxkIG5vdCBpbmNsdWRlIHBhcmVudGhlc2VzLlxuICAgICAgLy8gZS5nLiB7eyB2YWx1ZV9leHByZXNzaW9uIHwgc2xpY2UgOiBzdGFydCBbIDogZW5kIF0gfX1cbiAgICAgIGNvbnN0IHNob3VsZEluc2VydFBhcmVudGhlc2VzID0gcy5jYWxsYWJsZSAmJiBzLmtpbmQgIT09IG5nLkNvbXBsZXRpb25LaW5kLlBJUEU7XG4gICAgICB0aGlzLmNvbXBsZXRpb25zLnNldChzLm5hbWUsIHtcbiAgICAgICAgbmFtZTogcy5uYW1lLFxuICAgICAgICBraW5kOiBzLmtpbmQgYXMgbmcuQ29tcGxldGlvbktpbmQsXG4gICAgICAgIHNvcnRUZXh0OiBzLm5hbWUsXG4gICAgICAgIGluc2VydFRleHQ6IHNob3VsZEluc2VydFBhcmVudGhlc2VzID8gYCR7cy5uYW1lfSgpYCA6IHMubmFtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBoYW5kbGVzIHRoZSBjb21wbGV0aW9ucyBvZiBhdHRyaWJ1dGUgdmFsdWVzIGZvciBkaXJlY3RpdmVzIHRoYXRcbiAgICogc3VwcG9ydCB0aGUgbWljcm9zeW50YXggZm9ybWF0LiBFeGFtcGxlcyBhcmUgKm5nRm9yIGFuZCAqbmdJZi5cbiAgICogVGhlc2UgZGlyZWN0aXZlcyBhbGxvd3MgZGVjbGFyYXRpb24gb2YgXCJsZXRcIiB2YXJpYWJsZXMsIGFkZHMgY29udGV4dC1zcGVjaWZpY1xuICAgKiBzeW1ib2xzIGxpa2UgJGltcGxpY2l0LCBpbmRleCwgY291bnQsIGFtb25nIG90aGVyIGJlaGF2aW9ycy5cbiAgICogRm9yIGEgY29tcGxldGUgZGVzY3JpcHRpb24gb2Ygc3VjaCBmb3JtYXQsIHNlZVxuICAgKiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI2FzdGVyaXNrXG4gICAqXG4gICAqIEBwYXJhbSBhdHRyIGRlc2NyaXB0b3IgZm9yIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZSBwYWlyXG4gICAqIEBwYXJhbSBiaW5kaW5nIHRlbXBsYXRlIGJpbmRpbmcgZm9yIHRoZSBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGVcbiAgICovXG4gIHByaXZhdGUgbWljcm9TeW50YXhJbkF0dHJpYnV0ZVZhbHVlKGF0dHI6IEF0dHJBc3QsIGJpbmRpbmc6IFRlbXBsYXRlQmluZGluZykge1xuICAgIGNvbnN0IGtleSA9IGF0dHIubmFtZS5zdWJzdHJpbmcoMSk7ICAvLyByZW1vdmUgbGVhZGluZyBhc3Rlcmlza1xuXG4gICAgLy8gRmluZCB0aGUgc2VsZWN0b3IgLSBlZyBuZ0ZvciwgbmdJZiwgZXRjXG4gICAgY29uc3Qgc2VsZWN0b3JJbmZvID0gZ2V0U2VsZWN0b3JzKHRoaXMuaW5mbyk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckluZm8uc2VsZWN0b3JzLmZpbmQocyA9PiB7XG4gICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgaW4gKGF0dHJpYnV0ZSwgdmFsdWUpIHBhaXJzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMuYXR0cnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgaWYgKHMuYXR0cnNbaV0gPT09IGtleSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVSZWxhdGl2ZVBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiAtIGF0dHIuc291cmNlU3Bhbi5zdGFydC5vZmZzZXQ7XG5cbiAgICBpZiAoYmluZGluZyBpbnN0YW5jZW9mIFZhcmlhYmxlQmluZGluZykge1xuICAgICAgLy8gVE9ETyhreWxpYXUpOiBXaXRoIGV4cHJlc3Npb24gc291cmNlU3BhbiB3ZSBzaG91bGRuJ3QgaGF2ZSB0byBzZWFyY2hcbiAgICAgIC8vIHRoZSBhdHRyaWJ1dGUgdmFsdWUgc3RyaW5nIGFueW1vcmUuIEp1c3QgY2hlY2sgaWYgcG9zaXRpb24gaXMgaW4gdGhlXG4gICAgICAvLyBleHByZXNzaW9uIHNvdXJjZSBzcGFuLlxuICAgICAgY29uc3QgZXF1YWxMb2NhdGlvbiA9IGF0dHIudmFsdWUuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGVxdWFsTG9jYXRpb24gPiAwICYmIHZhbHVlUmVsYXRpdmVQb3NpdGlvbiA+IGVxdWFsTG9jYXRpb24pIHtcbiAgICAgICAgLy8gV2UgYXJlIGFmdGVyIHRoZSAnPScgaW4gYSBsZXQgY2xhdXNlLiBUaGUgdmFsaWQgdmFsdWVzIGhlcmUgYXJlIHRoZSBtZW1iZXJzIG9mIHRoZVxuICAgICAgICAvLyB0ZW1wbGF0ZSByZWZlcmVuY2UncyB0eXBlIHBhcmFtZXRlci5cbiAgICAgICAgY29uc3QgZGlyZWN0aXZlTWV0YWRhdGEgPSBzZWxlY3RvckluZm8ubWFwLmdldChzZWxlY3Rvcik7XG4gICAgICAgIGlmIChkaXJlY3RpdmVNZXRhZGF0YSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHRUYWJsZSA9XG4gICAgICAgICAgICAgIHRoaXMuaW5mby50ZW1wbGF0ZS5xdWVyeS5nZXRUZW1wbGF0ZUNvbnRleHQoZGlyZWN0aXZlTWV0YWRhdGEudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgICAgIGlmIChjb250ZXh0VGFibGUpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgYWRkcyBzeW1ib2xzIGxpa2UgJGltcGxpY2l0LCBpbmRleCwgY291bnQsIGV0Yy5cbiAgICAgICAgICAgIHRoaXMuYWRkU3ltYm9sc1RvQ29tcGxldGlvbnMoY29udGV4dFRhYmxlLnZhbHVlcygpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJpbmRpbmcgaW5zdGFuY2VvZiBFeHByZXNzaW9uQmluZGluZykge1xuICAgICAgaWYgKGluU3Bhbih0aGlzLnBvc2l0aW9uLCBiaW5kaW5nLnZhbHVlPy5hc3Quc291cmNlU3BhbikpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzRXhwcmVzc2lvbkNvbXBsZXRpb25zKGJpbmRpbmcudmFsdWUhLmFzdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoIWJpbmRpbmcudmFsdWUgJiYgdGhpcy5wb3NpdGlvbiA+IGJpbmRpbmcua2V5LnNwYW4uZW5kKSB7XG4gICAgICAgIC8vIE5vIGV4cHJlc3Npb24gaXMgZGVmaW5lZCBmb3IgdGhlIHZhbHVlIG9mIHRoZSBrZXkgZXhwcmVzc2lvbiBiaW5kaW5nLCBidXQgdGhlIGN1cnNvciBpc1xuICAgICAgICAvLyBpbiBhIGxvY2F0aW9uIHdoZXJlIHRoZSBleHByZXNzaW9uIHdvdWxkIGJlIGRlZmluZWQuIFRoaXMgY2FuIGhhcHBlbiBpbiBhIGNhc2UgbGlrZVxuICAgICAgICAvLyAgIGxldCBpIG9mIHxcbiAgICAgICAgLy8gICAgICAgICAgICBeLS0gY3Vyc29yXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSwgYmFja2ZpbGwgdGhlIHZhbHVlIHRvIGJlIGFuIGVtcHR5IGV4cHJlc3Npb24gYW5kIHJldHJpZXZlIGNvbXBsZXRpb25zLlxuICAgICAgICB0aGlzLnByb2Nlc3NFeHByZXNzaW9uQ29tcGxldGlvbnMobmV3IEVtcHR5RXhwcihcbiAgICAgICAgICAgIG5ldyBQYXJzZVNwYW4odmFsdWVSZWxhdGl2ZVBvc2l0aW9uLCB2YWx1ZVJlbGF0aXZlUG9zaXRpb24pLFxuICAgICAgICAgICAgbmV3IEFic29sdXRlU291cmNlU3Bhbih0aGlzLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBBbmd1bGFyQXR0cmlidXRlcyB7XG4gIC8qKlxuICAgKiBBdHRyaWJ1dGVzIHRoYXQgc3VwcG9ydCB0aGUgKiBzeW50YXguIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvcmUvVGVtcGxhdGVSZWZcbiAgICovXG4gIHRlbXBsYXRlUmVmczogU2V0PHN0cmluZz47XG4gIC8qKlxuICAgKiBBdHRyaWJ1dGVzIHdpdGggdGhlIEBJbnB1dCBhbm5vdGF0aW9uLlxuICAgKi9cbiAgaW5wdXRzOiBTZXQ8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEF0dHJpYnV0ZXMgd2l0aCB0aGUgQE91dHB1dCBhbm5vdGF0aW9uLlxuICAgKi9cbiAgb3V0cHV0czogU2V0PHN0cmluZz47XG4gIC8qKlxuICAgKiBBdHRyaWJ1dGVzIHRoYXQgc3VwcG9ydCB0aGUgWygpXSBvciBiaW5kb24tIHN5bnRheC5cbiAgICovXG4gIGJhbmFuYXM6IFNldDxzdHJpbmc+O1xuICAvKipcbiAgICogR2VuZXJhbCBhdHRyaWJ1dGVzIHRoYXQgbWF0Y2ggdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgKi9cbiAgb3RoZXJzOiBTZXQ8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYWxsIEFuZ3VsYXItc3BlY2lmaWMgYXR0cmlidXRlcyBmb3IgdGhlIGVsZW1lbnQgd2l0aCBgZWxlbWVudE5hbWVgLlxuICogQHBhcmFtIGluZm9cbiAqIEBwYXJhbSBlbGVtZW50TmFtZVxuICovXG5mdW5jdGlvbiBhbmd1bGFyQXR0cmlidXRlcyhpbmZvOiBuZy5Bc3RSZXN1bHQsIGVsZW1lbnROYW1lOiBzdHJpbmcpOiBBbmd1bGFyQXR0cmlidXRlcyB7XG4gIGNvbnN0IHtzZWxlY3RvcnMsIG1hcDogc2VsZWN0b3JNYXB9ID0gZ2V0U2VsZWN0b3JzKGluZm8pO1xuICBjb25zdCB0ZW1wbGF0ZVJlZnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgaW5wdXRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IG91dHB1dHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgYmFuYW5hcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBvdGhlcnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpIHtcbiAgICBpZiAoc2VsZWN0b3IuZWxlbWVudCAmJiBzZWxlY3Rvci5lbGVtZW50ICE9PSBlbGVtZW50TmFtZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHN1bW1hcnkgPSBzZWxlY3Rvck1hcC5nZXQoc2VsZWN0b3IpITtcbiAgICBjb25zdCBoYXNUZW1wbGF0ZVJlZiA9IGlzU3RydWN0dXJhbERpcmVjdGl2ZShzdW1tYXJ5LnR5cGUpO1xuICAgIC8vIGF0dHJpYnV0ZXMgYXJlIGxpc3RlZCBpbiAoYXR0cmlidXRlLCB2YWx1ZSkgcGFpcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdG9yLmF0dHJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBjb25zdCBhdHRyID0gc2VsZWN0b3IuYXR0cnNbaV07XG4gICAgICBpZiAoaGFzVGVtcGxhdGVSZWYpIHtcbiAgICAgICAgdGVtcGxhdGVSZWZzLmFkZChhdHRyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG90aGVycy5hZGQoYXR0cik7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgT2JqZWN0LnZhbHVlcyhzdW1tYXJ5LmlucHV0cykpIHtcbiAgICAgIGlucHV0cy5hZGQoaW5wdXQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiBPYmplY3QudmFsdWVzKHN1bW1hcnkub3V0cHV0cykpIHtcbiAgICAgIG91dHB1dHMuYWRkKG91dHB1dCk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgbmFtZSBvZiBpbnB1dHMpIHtcbiAgICAvLyBBZGQgYmFuYW5hLWluLWEtYm94IHN5bnRheFxuICAgIC8vIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS90ZW1wbGF0ZS1zeW50YXgjdHdvLXdheS1iaW5kaW5nLVxuICAgIGlmIChvdXRwdXRzLmhhcyhgJHtuYW1lfUNoYW5nZWApKSB7XG4gICAgICBiYW5hbmFzLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHt0ZW1wbGF0ZVJlZnMsIGlucHV0cywgb3V0cHV0cywgYmFuYW5hcywgb3RoZXJzfTtcbn1cbiJdfQ==