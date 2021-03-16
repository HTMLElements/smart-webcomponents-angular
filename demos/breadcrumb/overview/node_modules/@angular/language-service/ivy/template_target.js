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
        define("@angular/language-service/ivy/template_target", ["require", "exports", "tslib", "@angular/compiler", "@angular/compiler/src/expression_parser/ast", "@angular/compiler/src/render3/r3_ast", "@angular/language-service/ivy/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTargetAtPosition = exports.TargetNodeKind = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var e = require("@angular/compiler/src/expression_parser/ast"); // e for expression AST
    var t = require("@angular/compiler/src/render3/r3_ast"); // t for template AST
    var utils_1 = require("@angular/language-service/ivy/utils");
    /**
     * Differentiates the various kinds of `TargetNode`s.
     */
    var TargetNodeKind;
    (function (TargetNodeKind) {
        TargetNodeKind[TargetNodeKind["RawExpression"] = 0] = "RawExpression";
        TargetNodeKind[TargetNodeKind["RawTemplateNode"] = 1] = "RawTemplateNode";
        TargetNodeKind[TargetNodeKind["ElementInTagContext"] = 2] = "ElementInTagContext";
        TargetNodeKind[TargetNodeKind["ElementInBodyContext"] = 3] = "ElementInBodyContext";
        TargetNodeKind[TargetNodeKind["AttributeInKeyContext"] = 4] = "AttributeInKeyContext";
        TargetNodeKind[TargetNodeKind["AttributeInValueContext"] = 5] = "AttributeInValueContext";
        TargetNodeKind[TargetNodeKind["TwoWayBindingContext"] = 6] = "TwoWayBindingContext";
    })(TargetNodeKind = exports.TargetNodeKind || (exports.TargetNodeKind = {}));
    /**
     * This special marker is added to the path when the cursor is within the sourceSpan but not the key
     * or value span of a node with key/value spans.
     */
    var OUTSIDE_K_V_MARKER = new e.AST(new compiler_1.ParseSpan(-1, -1), new e.AbsoluteSourceSpan(-1, -1));
    /**
     * Return the template AST node or expression AST node that most accurately
     * represents the node at the specified cursor `position`.
     *
     * @param template AST tree of the template
     * @param position target cursor position
     */
    function getTargetAtPosition(template, position) {
        var path = TemplateTargetVisitor.visitTemplate(template, position);
        if (path.length === 0) {
            return null;
        }
        var candidate = path[path.length - 1];
        // Walk up the result nodes to find the nearest `t.Template` which contains the targeted node.
        var context = null;
        for (var i = path.length - 2; i >= 0; i--) {
            var node = path[i];
            if (node instanceof t.Template) {
                context = node;
                break;
            }
        }
        // Given the candidate node, determine the full targeted context.
        var nodeInContext;
        if (candidate instanceof e.AST) {
            nodeInContext = {
                kind: TargetNodeKind.RawExpression,
                node: candidate,
            };
        }
        else if (candidate instanceof t.Element) {
            // Elements have two contexts: the tag context (position is within the element tag) or the
            // element body context (position is outside of the tag name, but still in the element).
            // Calculate the end of the element tag name. Any position beyond this is in the element body.
            var tagEndPos = candidate.sourceSpan.start.offset + 1 /* '<' element open */ + candidate.name.length;
            if (position > tagEndPos) {
                // Position is within the element body
                nodeInContext = {
                    kind: TargetNodeKind.ElementInBodyContext,
                    node: candidate,
                };
            }
            else {
                nodeInContext = {
                    kind: TargetNodeKind.ElementInTagContext,
                    node: candidate,
                };
            }
        }
        else if ((candidate instanceof t.BoundAttribute || candidate instanceof t.BoundEvent ||
            candidate instanceof t.TextAttribute) &&
            candidate.keySpan !== undefined) {
            var previousCandidate = path[path.length - 2];
            if (candidate instanceof t.BoundEvent && previousCandidate instanceof t.BoundAttribute &&
                candidate.name === previousCandidate.name + 'Change') {
                var boundAttribute = previousCandidate;
                var boundEvent = candidate;
                nodeInContext = {
                    kind: TargetNodeKind.TwoWayBindingContext,
                    nodes: [boundAttribute, boundEvent],
                };
            }
            else if (utils_1.isWithin(position, candidate.keySpan)) {
                nodeInContext = {
                    kind: TargetNodeKind.AttributeInKeyContext,
                    node: candidate,
                };
            }
            else {
                nodeInContext = {
                    kind: TargetNodeKind.AttributeInValueContext,
                    node: candidate,
                };
            }
        }
        else {
            nodeInContext = {
                kind: TargetNodeKind.RawTemplateNode,
                node: candidate,
            };
        }
        var parent = null;
        if (nodeInContext.kind === TargetNodeKind.TwoWayBindingContext && path.length >= 3) {
            parent = path[path.length - 3];
        }
        else if (path.length >= 2) {
            parent = path[path.length - 2];
        }
        return { position: position, context: nodeInContext, template: context, parent: parent };
    }
    exports.getTargetAtPosition = getTargetAtPosition;
    /**
     * Visitor which, given a position and a template, identifies the node within the template at that
     * position, as well as records the path of increasingly nested nodes that were traversed to reach
     * that position.
     */
    var TemplateTargetVisitor = /** @class */ (function () {
        // Position must be absolute in the source file.
        function TemplateTargetVisitor(position) {
            this.position = position;
            // We need to keep a path instead of the last node because we might need more
            // context for the last node, for example what is the parent node?
            this.path = [];
        }
        TemplateTargetVisitor.visitTemplate = function (template, position) {
            var visitor = new TemplateTargetVisitor(position);
            visitor.visitAll(template);
            var path = visitor.path;
            var strictPath = path.filter(function (v) { return v !== OUTSIDE_K_V_MARKER; });
            var candidate = strictPath[strictPath.length - 1];
            var matchedASourceSpanButNotAKvSpan = path.some(function (v) { return v === OUTSIDE_K_V_MARKER; });
            if (matchedASourceSpanButNotAKvSpan &&
                (candidate instanceof t.Template || candidate instanceof t.Element)) {
                // Template nodes with key and value spans are always defined on a `t.Template` or
                // `t.Element`. If we found a node on a template with a `sourceSpan` that includes the cursor,
                // it is possible that we are outside the k/v spans (i.e. in-between them). If this is the
                // case and we do not have any other candidate matches on the `t.Element` or `t.Template`, we
                // want to return no results. Otherwise, the `t.Element`/`t.Template` result is incorrect for
                // that cursor position.
                return [];
            }
            return strictPath;
        };
        TemplateTargetVisitor.prototype.visit = function (node) {
            var _a = getSpanIncludingEndTag(node), start = _a.start, end = _a.end;
            if (!utils_1.isWithin(this.position, { start: start, end: end })) {
                return;
            }
            var last = this.path[this.path.length - 1];
            var withinKeySpanOfLastNode = last && utils_1.isTemplateNodeWithKeyAndValue(last) && utils_1.isWithin(this.position, last.keySpan);
            var withinKeySpanOfCurrentNode = utils_1.isTemplateNodeWithKeyAndValue(node) && utils_1.isWithin(this.position, node.keySpan);
            if (withinKeySpanOfLastNode && !withinKeySpanOfCurrentNode) {
                // We've already identified that we are within a `keySpan` of a node.
                // Unless we are _also_ in the `keySpan` of the current node (happens with two way bindings),
                // we should stop processing nodes at this point to prevent matching any other nodes. This can
                // happen when the end span of a different node touches the start of the keySpan for the
                // candidate node. Because our `isWithin` logic is inclusive on both ends, we can match both
                // nodes.
                return;
            }
            if (utils_1.isTemplateNodeWithKeyAndValue(node) && !utils_1.isWithinKeyValue(this.position, node)) {
                // If cursor is within source span but not within key span or value span,
                // do not return the node.
                this.path.push(OUTSIDE_K_V_MARKER);
            }
            else {
                this.path.push(node);
                node.visit(this);
            }
        };
        TemplateTargetVisitor.prototype.visitElement = function (element) {
            this.visitElementOrTemplate(element);
        };
        TemplateTargetVisitor.prototype.visitTemplate = function (template) {
            this.visitElementOrTemplate(template);
        };
        TemplateTargetVisitor.prototype.visitElementOrTemplate = function (element) {
            this.visitAll(element.attributes);
            this.visitAll(element.inputs);
            this.visitAll(element.outputs);
            if (element instanceof t.Template) {
                this.visitAll(element.templateAttrs);
            }
            this.visitAll(element.references);
            if (element instanceof t.Template) {
                this.visitAll(element.variables);
            }
            // If we get here and have not found a candidate node on the element itself, proceed with
            // looking for a more specific node on the element children.
            if (this.path[this.path.length - 1] !== element) {
                return;
            }
            this.visitAll(element.children);
        };
        TemplateTargetVisitor.prototype.visitContent = function (content) {
            t.visitAll(this, content.attributes);
        };
        TemplateTargetVisitor.prototype.visitVariable = function (variable) {
            // Variable has no template nodes or expression nodes.
        };
        TemplateTargetVisitor.prototype.visitReference = function (reference) {
            // Reference has no template nodes or expression nodes.
        };
        TemplateTargetVisitor.prototype.visitTextAttribute = function (attribute) {
            // Text attribute has no template nodes or expression nodes.
        };
        TemplateTargetVisitor.prototype.visitBoundAttribute = function (attribute) {
            var visitor = new ExpressionVisitor(this.position);
            visitor.visit(attribute.value, this.path);
        };
        TemplateTargetVisitor.prototype.visitBoundEvent = function (event) {
            // An event binding with no value (e.g. `(event|)`) parses to a `BoundEvent` with a
            // `LiteralPrimitive` handler with value `'ERROR'`, as opposed to a property binding with no
            // value which has an `EmptyExpr` as its value. This is a synthetic node created by the binding
            // parser, and is not suitable to use for Language Service analysis. Skip it.
            //
            // TODO(alxhub): modify the parser to generate an `EmptyExpr` instead.
            var handler = event.handler;
            if (handler instanceof e.ASTWithSource) {
                handler = handler.ast;
            }
            if (handler instanceof e.LiteralPrimitive && handler.value === 'ERROR') {
                return;
            }
            var visitor = new ExpressionVisitor(this.position);
            visitor.visit(event.handler, this.path);
        };
        TemplateTargetVisitor.prototype.visitText = function (text) {
            // Text has no template nodes or expression nodes.
        };
        TemplateTargetVisitor.prototype.visitBoundText = function (text) {
            var visitor = new ExpressionVisitor(this.position);
            visitor.visit(text.value, this.path);
        };
        TemplateTargetVisitor.prototype.visitIcu = function (icu) {
            var e_1, _a, e_2, _b;
            try {
                for (var _c = tslib_1.__values(Object.values(icu.vars)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var boundText = _d.value;
                    this.visit(boundText);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _e = tslib_1.__values(Object.values(icu.placeholders)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var boundTextOrText = _f.value;
                    this.visit(boundTextOrText);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        TemplateTargetVisitor.prototype.visitAll = function (nodes) {
            var e_3, _a;
            try {
                for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                    var node = nodes_1_1.value;
                    this.visit(node);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        return TemplateTargetVisitor;
    }());
    var ExpressionVisitor = /** @class */ (function (_super) {
        tslib_1.__extends(ExpressionVisitor, _super);
        // Position must be absolute in the source file.
        function ExpressionVisitor(position) {
            var _this = _super.call(this) || this;
            _this.position = position;
            return _this;
        }
        ExpressionVisitor.prototype.visit = function (node, path) {
            if (node instanceof e.ASTWithSource) {
                // In order to reduce noise, do not include `ASTWithSource` in the path.
                // For the purpose of source spans, there is no difference between
                // `ASTWithSource` and and underlying node that it wraps.
                node = node.ast;
            }
            // The third condition is to account for the implicit receiver, which should
            // not be visited.
            if (utils_1.isWithin(this.position, node.sourceSpan) && !(node instanceof e.ImplicitReceiver)) {
                path.push(node);
                node.visit(this, path);
            }
        };
        return ExpressionVisitor;
    }(e.RecursiveAstVisitor));
    function getSpanIncludingEndTag(ast) {
        var result = {
            start: ast.sourceSpan.start.offset,
            end: ast.sourceSpan.end.offset,
        };
        // For Element and Template node, sourceSpan.end is the end of the opening
        // tag. For the purpose of language service, we need to actually recognize
        // the end of the closing tag. Otherwise, for situation like
        // <my-component></my-comp¦onent> where the cursor is in the closing tag
        // we will not be able to return any information.
        if ((ast instanceof t.Element || ast instanceof t.Template) && ast.endSourceSpan) {
            result.end = ast.endSourceSpan.end.offset;
        }
        return result;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfdGFyZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9pdnkvdGVtcGxhdGVfdGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBK0Q7SUFDL0QsK0RBQWlFLENBQUUsdUJBQXVCO0lBQzFGLHdEQUEwRCxDQUFTLHFCQUFxQjtJQUV4Riw2REFBa0Y7SUFrRGxGOztPQUVHO0lBQ0gsSUFBWSxjQVFYO0lBUkQsV0FBWSxjQUFjO1FBQ3hCLHFFQUFhLENBQUE7UUFDYix5RUFBZSxDQUFBO1FBQ2YsaUZBQW1CLENBQUE7UUFDbkIsbUZBQW9CLENBQUE7UUFDcEIscUZBQXFCLENBQUE7UUFDckIseUZBQXVCLENBQUE7UUFDdkIsbUZBQW9CLENBQUE7SUFDdEIsQ0FBQyxFQVJXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBUXpCO0lBdUREOzs7T0FHRztJQUNILElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksb0JBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5Rjs7Ozs7O09BTUc7SUFDSCxTQUFnQixtQkFBbUIsQ0FBQyxRQUFrQixFQUFFLFFBQWdCO1FBQ3RFLElBQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FB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QUFHLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUU7WUFDaEYsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDM0M7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGFyc2VTcGFuLCBUbXBsQXN0Qm91bmRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgZSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvZXhwcmVzc2lvbl9wYXJzZXIvYXN0JzsgIC8vIGUgZm9yIGV4cHJlc3Npb24gQVNUXG5pbXBvcnQgKiBhcyB0IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3IzX2FzdCc7ICAgICAgICAgLy8gdCBmb3IgdGVtcGxhdGUgQVNUXG5cbmltcG9ydCB7aXNUZW1wbGF0ZU5vZGVXaXRoS2V5QW5kVmFsdWUsIGlzV2l0aGluLCBpc1dpdGhpbktleVZhbHVlfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBDb250ZXh0dWFsIGluZm9ybWF0aW9uIGZvciBhIHRhcmdldCBwb3NpdGlvbiB3aXRoaW4gdGhlIHRlbXBsYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlVGFyZ2V0IHtcbiAgLyoqXG4gICAqIFRhcmdldCBwb3NpdGlvbiB3aXRoaW4gdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcG9zaXRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIChvciBBU1QgZXhwcmVzc2lvbikgbm9kZSBvciBub2RlcyBjbG9zZXN0IHRvIHRoZSBzZWFyY2ggcG9zaXRpb24uXG4gICAqL1xuICBjb250ZXh0OiBUYXJnZXRDb250ZXh0O1xuXG4gIC8qKlxuICAgKiBUaGUgYHQuVGVtcGxhdGVgIHdoaWNoIGNvbnRhaW5zIHRoZSBmb3VuZCBub2RlIG9yIGV4cHJlc3Npb24gKG9yIGBudWxsYCBpZiBpbiB0aGUgcm9vdFxuICAgKiB0ZW1wbGF0ZSkuXG4gICAqL1xuICB0ZW1wbGF0ZTogdC5UZW1wbGF0ZXxudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgaW1tZWRpYXRlIHBhcmVudCBub2RlIG9mIHRoZSB0YXJnZXRlZCBub2RlLlxuICAgKi9cbiAgcGFyZW50OiB0Lk5vZGV8ZS5BU1R8bnVsbDtcbn1cblxuLyoqXG4gKiBBIG5vZGUgb3Igbm9kZXMgdGFyZ2V0ZWQgYXQgYSBnaXZlbiBwb3NpdGlvbiBpbiB0aGUgdGVtcGxhdGUsIGluY2x1ZGluZyBwb3RlbnRpYWwgY29udGV4dHVhbFxuICogaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNwZWNpZmljIGFzcGVjdCBvZiB0aGUgbm9kZSBiZWluZyByZWZlcmVuY2VkLlxuICpcbiAqIFNvbWUgbm9kZXMgaGF2ZSBtdWx0aXBsZSBpbnRlcmlvciBjb250ZXh0cy4gRm9yIGV4YW1wbGUsIGB0LkVsZW1lbnRgIG5vZGVzIGhhdmUgYm90aCBhIHRhZyBuYW1lXG4gKiBhcyB3ZWxsIGFzIGEgYm9keSwgYW5kIGEgZ2l2ZW4gcG9zaXRpb24gZGVmaW5pdGl2ZWx5IHBvaW50cyB0byBvbmUgb3IgdGhlIG90aGVyLiBgVGFyZ2V0Tm9kZWBcbiAqIGNhcHR1cmVzIHRoZSBub2RlIGl0c2VsZiwgYXMgd2VsbCBhcyB0aGlzIGFkZGl0aW9uYWwgY29udGV4dHVhbCBkaXNhbWJpZ3VhdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgVGFyZ2V0Q29udGV4dCA9IFNpbmdsZU5vZGVUYXJnZXR8TXVsdGlOb2RlVGFyZ2V0O1xuXG4vKiogQ29udGV4dHMgd2hpY2ggbG9naWNhbGx5IHRhcmdldCBvbmx5IGEgc2luZ2xlIG5vZGUgaW4gdGhlIHRlbXBsYXRlIEFTVC4gKi9cbmV4cG9ydCB0eXBlIFNpbmdsZU5vZGVUYXJnZXQgPSBSYXdFeHByZXNzaW9ufFJhd1RlbXBsYXRlTm9kZXxFbGVtZW50SW5Cb2R5Q29udGV4dHxcbiAgICBFbGVtZW50SW5UYWdDb250ZXh0fEF0dHJpYnV0ZUluS2V5Q29udGV4dHxBdHRyaWJ1dGVJblZhbHVlQ29udGV4dDtcblxuLyoqXG4gKiBDb250ZXh0cyB3aGljaCBsb2dpY2FsbHkgdGFyZ2V0IG11bHRpcGxlIG5vZGVzIGluIHRoZSB0ZW1wbGF0ZSBBU1QsIHdoaWNoIGNhbm5vdCBiZVxuICogZGlzYW1iaWd1YXRlZCBnaXZlbiBhIHNpbmdsZSBwb3NpdGlvbiBiZWNhdXNlIHRoZXkgYXJlIGFsbCBlcXVhbGx5IHJlbGF2ZW50LiBGb3IgZXhhbXBsZSwgaW4gdGhlXG4gKiBiYW5hbmEtaW4tYS1ib3ggc3ludGF4IGBbKG5nTW9kZWwpXT1cImZvcm1WYWx1ZXMucGVyc29uXCJgLCB0aGUgcG9zaXRpb24gaW4gdGhlIHRlbXBsYXRlIGZvciB0aGVcbiAqIGtleSBgbmdNb2RlbGAgcmVmZXJzIHRvIGJvdGggdGhlIGJvdW5kIGV2ZW50IGBuZ01vZGVsQ2hhbmdlYCBhbmQgdGhlIGlucHV0IGBuZ01vZGVsYC5cbiAqL1xuZXhwb3J0IHR5cGUgTXVsdGlOb2RlVGFyZ2V0ID0gVHdvV2F5QmluZGluZ0NvbnRleHQ7XG5cbi8qKlxuICogRGlmZmVyZW50aWF0ZXMgdGhlIHZhcmlvdXMga2luZHMgb2YgYFRhcmdldE5vZGVgcy5cbiAqL1xuZXhwb3J0IGVudW0gVGFyZ2V0Tm9kZUtpbmQge1xuICBSYXdFeHByZXNzaW9uLFxuICBSYXdUZW1wbGF0ZU5vZGUsXG4gIEVsZW1lbnRJblRhZ0NvbnRleHQsXG4gIEVsZW1lbnRJbkJvZHlDb250ZXh0LFxuICBBdHRyaWJ1dGVJbktleUNvbnRleHQsXG4gIEF0dHJpYnV0ZUluVmFsdWVDb250ZXh0LFxuICBUd29XYXlCaW5kaW5nQ29udGV4dCxcbn1cblxuLyoqXG4gKiBBbiBgZS5BU1RgIGV4cHJlc3Npb24gdGhhdCdzIHRhcmdldGVkIGF0IGEgZ2l2ZW4gcG9zaXRpb24sIHdpdGggbm8gYWRkaXRpb25hbCBjb250ZXh0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJhd0V4cHJlc3Npb24ge1xuICBraW5kOiBUYXJnZXROb2RlS2luZC5SYXdFeHByZXNzaW9uO1xuICBub2RlOiBlLkFTVDtcbn1cblxuLyoqXG4gKiBBIGB0Lk5vZGVgIHRlbXBsYXRlIG5vZGUgdGhhdCdzIHRhcmdldGVkIGF0IGEgZ2l2ZW4gcG9zaXRpb24sIHdpdGggbm8gYWRkaXRpb25hbCBjb250ZXh0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJhd1RlbXBsYXRlTm9kZSB7XG4gIGtpbmQ6IFRhcmdldE5vZGVLaW5kLlJhd1RlbXBsYXRlTm9kZTtcbiAgbm9kZTogdC5Ob2RlO1xufVxuXG4vKipcbiAqIEEgYHQuRWxlbWVudGAgKG9yIGB0LlRlbXBsYXRlYCkgZWxlbWVudCBub2RlIHRoYXQncyB0YXJnZXRlZCwgd2hlcmUgdGhlIGdpdmVuIHBvc2l0aW9uIGlzIHdpdGhpblxuICogdGhlIHRhZyBuYW1lLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRJblRhZ0NvbnRleHQge1xuICBraW5kOiBUYXJnZXROb2RlS2luZC5FbGVtZW50SW5UYWdDb250ZXh0O1xuICBub2RlOiB0LkVsZW1lbnR8dC5UZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBBIGB0LkVsZW1lbnRgIChvciBgdC5UZW1wbGF0ZWApIGVsZW1lbnQgbm9kZSB0aGF0J3MgdGFyZ2V0ZWQsIHdoZXJlIHRoZSBnaXZlbiBwb3NpdGlvbiBpcyB3aXRoaW5cbiAqIHRoZSBlbGVtZW50IGJvZHkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEluQm9keUNvbnRleHQge1xuICBraW5kOiBUYXJnZXROb2RlS2luZC5FbGVtZW50SW5Cb2R5Q29udGV4dDtcbiAgbm9kZTogdC5FbGVtZW50fHQuVGVtcGxhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlSW5LZXlDb250ZXh0IHtcbiAga2luZDogVGFyZ2V0Tm9kZUtpbmQuQXR0cmlidXRlSW5LZXlDb250ZXh0O1xuICBub2RlOiB0LlRleHRBdHRyaWJ1dGV8dC5Cb3VuZEF0dHJpYnV0ZXx0LkJvdW5kRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlSW5WYWx1ZUNvbnRleHQge1xuICBraW5kOiBUYXJnZXROb2RlS2luZC5BdHRyaWJ1dGVJblZhbHVlQ29udGV4dDtcbiAgbm9kZTogdC5UZXh0QXR0cmlidXRlfHQuQm91bmRBdHRyaWJ1dGV8dC5Cb3VuZEV2ZW50O1xufVxuXG4vKipcbiAqIEEgYHQuQm91bmRBdHRyaWJ1dGVgIGFuZCBgdC5Cb3VuZEV2ZW50YCBwYWlyIHRoYXQgYXJlIHRhcmdldGVkLCB3aGVyZSB0aGUgZ2l2ZW4gcG9zaXRpb24gaXNcbiAqIHdpdGhpbiB0aGUga2V5IHNwYW4gb2YgYm90aC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUd29XYXlCaW5kaW5nQ29udGV4dCB7XG4gIGtpbmQ6IFRhcmdldE5vZGVLaW5kLlR3b1dheUJpbmRpbmdDb250ZXh0O1xuICBub2RlczogW3QuQm91bmRBdHRyaWJ1dGUsIHQuQm91bmRFdmVudF07XG59XG5cbi8qKlxuICogVGhpcyBzcGVjaWFsIG1hcmtlciBpcyBhZGRlZCB0byB0aGUgcGF0aCB3aGVuIHRoZSBjdXJzb3IgaXMgd2l0aGluIHRoZSBzb3VyY2VTcGFuIGJ1dCBub3QgdGhlIGtleVxuICogb3IgdmFsdWUgc3BhbiBvZiBhIG5vZGUgd2l0aCBrZXkvdmFsdWUgc3BhbnMuXG4gKi9cbmNvbnN0IE9VVFNJREVfS19WX01BUktFUiA9IG5ldyBlLkFTVChuZXcgUGFyc2VTcGFuKC0xLCAtMSksIG5ldyBlLkFic29sdXRlU291cmNlU3BhbigtMSwgLTEpKTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHRlbXBsYXRlIEFTVCBub2RlIG9yIGV4cHJlc3Npb24gQVNUIG5vZGUgdGhhdCBtb3N0IGFjY3VyYXRlbHlcbiAqIHJlcHJlc2VudHMgdGhlIG5vZGUgYXQgdGhlIHNwZWNpZmllZCBjdXJzb3IgYHBvc2l0aW9uYC5cbiAqXG4gKiBAcGFyYW0gdGVtcGxhdGUgQVNUIHRyZWUgb2YgdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0gcG9zaXRpb24gdGFyZ2V0IGN1cnNvciBwb3NpdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0QXRQb3NpdGlvbih0ZW1wbGF0ZTogdC5Ob2RlW10sIHBvc2l0aW9uOiBudW1iZXIpOiBUZW1wbGF0ZVRhcmdldHxudWxsIHtcbiAgY29uc3QgcGF0aCA9IFRlbXBsYXRlVGFyZ2V0VmlzaXRvci52aXNpdFRlbXBsYXRlKHRlbXBsYXRlLCBwb3NpdGlvbik7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY2FuZGlkYXRlID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAvLyBXYWxrIHVwIHRoZSByZXN1bHQgbm9kZXMgdG8gZmluZCB0aGUgbmVhcmVzdCBgdC5UZW1wbGF0ZWAgd2hpY2ggY29udGFpbnMgdGhlIHRhcmdldGVkIG5vZGUuXG4gIGxldCBjb250ZXh0OiB0LlRlbXBsYXRlfG51bGwgPSBudWxsO1xuICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IG5vZGUgPSBwYXRoW2ldO1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgdC5UZW1wbGF0ZSkge1xuICAgICAgY29udGV4dCA9IG5vZGU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBHaXZlbiB0aGUgY2FuZGlkYXRlIG5vZGUsIGRldGVybWluZSB0aGUgZnVsbCB0YXJnZXRlZCBjb250ZXh0LlxuICBsZXQgbm9kZUluQ29udGV4dDogVGFyZ2V0Q29udGV4dDtcbiAgaWYgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIGUuQVNUKSB7XG4gICAgbm9kZUluQ29udGV4dCA9IHtcbiAgICAgIGtpbmQ6IFRhcmdldE5vZGVLaW5kLlJhd0V4cHJlc3Npb24sXG4gICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChjYW5kaWRhdGUgaW5zdGFuY2VvZiB0LkVsZW1lbnQpIHtcbiAgICAvLyBFbGVtZW50cyBoYXZlIHR3byBjb250ZXh0czogdGhlIHRhZyBjb250ZXh0IChwb3NpdGlvbiBpcyB3aXRoaW4gdGhlIGVsZW1lbnQgdGFnKSBvciB0aGVcbiAgICAvLyBlbGVtZW50IGJvZHkgY29udGV4dCAocG9zaXRpb24gaXMgb3V0c2lkZSBvZiB0aGUgdGFnIG5hbWUsIGJ1dCBzdGlsbCBpbiB0aGUgZWxlbWVudCkuXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVuZCBvZiB0aGUgZWxlbWVudCB0YWcgbmFtZS4gQW55IHBvc2l0aW9uIGJleW9uZCB0aGlzIGlzIGluIHRoZSBlbGVtZW50IGJvZHkuXG4gICAgY29uc3QgdGFnRW5kUG9zID1cbiAgICAgICAgY2FuZGlkYXRlLnNvdXJjZVNwYW4uc3RhcnQub2Zmc2V0ICsgMSAvKiAnPCcgZWxlbWVudCBvcGVuICovICsgY2FuZGlkYXRlLm5hbWUubGVuZ3RoO1xuICAgIGlmIChwb3NpdGlvbiA+IHRhZ0VuZFBvcykge1xuICAgICAgLy8gUG9zaXRpb24gaXMgd2l0aGluIHRoZSBlbGVtZW50IGJvZHlcbiAgICAgIG5vZGVJbkNvbnRleHQgPSB7XG4gICAgICAgIGtpbmQ6IFRhcmdldE5vZGVLaW5kLkVsZW1lbnRJbkJvZHlDb250ZXh0LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlSW5Db250ZXh0ID0ge1xuICAgICAgICBraW5kOiBUYXJnZXROb2RlS2luZC5FbGVtZW50SW5UYWdDb250ZXh0LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICAgIChjYW5kaWRhdGUgaW5zdGFuY2VvZiB0LkJvdW5kQXR0cmlidXRlIHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIHQuQm91bmRFdmVudCB8fFxuICAgICAgIGNhbmRpZGF0ZSBpbnN0YW5jZW9mIHQuVGV4dEF0dHJpYnV0ZSkgJiZcbiAgICAgIGNhbmRpZGF0ZS5rZXlTcGFuICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBwcmV2aW91c0NhbmRpZGF0ZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAyXTtcbiAgICBpZiAoY2FuZGlkYXRlIGluc3RhbmNlb2YgdC5Cb3VuZEV2ZW50ICYmIHByZXZpb3VzQ2FuZGlkYXRlIGluc3RhbmNlb2YgdC5Cb3VuZEF0dHJpYnV0ZSAmJlxuICAgICAgICBjYW5kaWRhdGUubmFtZSA9PT0gcHJldmlvdXNDYW5kaWRhdGUubmFtZSArICdDaGFuZ2UnKSB7XG4gICAgICBjb25zdCBib3VuZEF0dHJpYnV0ZTogdC5Cb3VuZEF0dHJpYnV0ZSA9IHByZXZpb3VzQ2FuZGlkYXRlO1xuICAgICAgY29uc3QgYm91bmRFdmVudDogdC5Cb3VuZEV2ZW50ID0gY2FuZGlkYXRlO1xuICAgICAgbm9kZUluQ29udGV4dCA9IHtcbiAgICAgICAga2luZDogVGFyZ2V0Tm9kZUtpbmQuVHdvV2F5QmluZGluZ0NvbnRleHQsXG4gICAgICAgIG5vZGVzOiBbYm91bmRBdHRyaWJ1dGUsIGJvdW5kRXZlbnRdLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzV2l0aGluKHBvc2l0aW9uLCBjYW5kaWRhdGUua2V5U3BhbikpIHtcbiAgICAgIG5vZGVJbkNvbnRleHQgPSB7XG4gICAgICAgIGtpbmQ6IFRhcmdldE5vZGVLaW5kLkF0dHJpYnV0ZUluS2V5Q29udGV4dCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZUluQ29udGV4dCA9IHtcbiAgICAgICAga2luZDogVGFyZ2V0Tm9kZUtpbmQuQXR0cmlidXRlSW5WYWx1ZUNvbnRleHQsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG5vZGVJbkNvbnRleHQgPSB7XG4gICAgICBraW5kOiBUYXJnZXROb2RlS2luZC5SYXdUZW1wbGF0ZU5vZGUsXG4gICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgfTtcbiAgfVxuXG4gIGxldCBwYXJlbnQ6IHQuTm9kZXxlLkFTVHxudWxsID0gbnVsbDtcbiAgaWYgKG5vZGVJbkNvbnRleHQua2luZCA9PT0gVGFyZ2V0Tm9kZUtpbmQuVHdvV2F5QmluZGluZ0NvbnRleHQgJiYgcGF0aC5sZW5ndGggPj0gMykge1xuICAgIHBhcmVudCA9IHBhdGhbcGF0aC5sZW5ndGggLSAzXTtcbiAgfSBlbHNlIGlmIChwYXRoLmxlbmd0aCA+PSAyKSB7XG4gICAgcGFyZW50ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDJdO1xuICB9XG5cbiAgcmV0dXJuIHtwb3NpdGlvbiwgY29udGV4dDogbm9kZUluQ29udGV4dCwgdGVtcGxhdGU6IGNvbnRleHQsIHBhcmVudH07XG59XG5cbi8qKlxuICogVmlzaXRvciB3aGljaCwgZ2l2ZW4gYSBwb3NpdGlvbiBhbmQgYSB0ZW1wbGF0ZSwgaWRlbnRpZmllcyB0aGUgbm9kZSB3aXRoaW4gdGhlIHRlbXBsYXRlIGF0IHRoYXRcbiAqIHBvc2l0aW9uLCBhcyB3ZWxsIGFzIHJlY29yZHMgdGhlIHBhdGggb2YgaW5jcmVhc2luZ2x5IG5lc3RlZCBub2RlcyB0aGF0IHdlcmUgdHJhdmVyc2VkIHRvIHJlYWNoXG4gKiB0aGF0IHBvc2l0aW9uLlxuICovXG5jbGFzcyBUZW1wbGF0ZVRhcmdldFZpc2l0b3IgaW1wbGVtZW50cyB0LlZpc2l0b3Ige1xuICAvLyBXZSBuZWVkIHRvIGtlZXAgYSBwYXRoIGluc3RlYWQgb2YgdGhlIGxhc3Qgbm9kZSBiZWNhdXNlIHdlIG1pZ2h0IG5lZWQgbW9yZVxuICAvLyBjb250ZXh0IGZvciB0aGUgbGFzdCBub2RlLCBmb3IgZXhhbXBsZSB3aGF0IGlzIHRoZSBwYXJlbnQgbm9kZT9cbiAgcmVhZG9ubHkgcGF0aDogQXJyYXk8dC5Ob2RlfGUuQVNUPiA9IFtdO1xuXG4gIHN0YXRpYyB2aXNpdFRlbXBsYXRlKHRlbXBsYXRlOiB0Lk5vZGVbXSwgcG9zaXRpb246IG51bWJlcik6IEFycmF5PHQuTm9kZXxlLkFTVD4ge1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgVGVtcGxhdGVUYXJnZXRWaXNpdG9yKHBvc2l0aW9uKTtcbiAgICB2aXNpdG9yLnZpc2l0QWxsKHRlbXBsYXRlKTtcbiAgICBjb25zdCB7cGF0aH0gPSB2aXNpdG9yO1xuXG4gICAgY29uc3Qgc3RyaWN0UGF0aCA9IHBhdGguZmlsdGVyKHYgPT4gdiAhPT0gT1VUU0lERV9LX1ZfTUFSS0VSKTtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBzdHJpY3RQYXRoW3N0cmljdFBhdGgubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbWF0Y2hlZEFTb3VyY2VTcGFuQnV0Tm90QUt2U3BhbiA9IHBhdGguc29tZSh2ID0+IHYgPT09IE9VVFNJREVfS19WX01BUktFUik7XG4gICAgaWYgKG1hdGNoZWRBU291cmNlU3BhbkJ1dE5vdEFLdlNwYW4gJiZcbiAgICAgICAgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIHQuVGVtcGxhdGUgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgdC5FbGVtZW50KSkge1xuICAgICAgLy8gVGVtcGxhdGUgbm9kZXMgd2l0aCBrZXkgYW5kIHZhbHVlIHNwYW5zIGFyZSBhbHdheXMgZGVmaW5lZCBvbiBhIGB0LlRlbXBsYXRlYCBvclxuICAgICAgLy8gYHQuRWxlbWVudGAuIElmIHdlIGZvdW5kIGEgbm9kZSBvbiBhIHRlbXBsYXRlIHdpdGggYSBgc291cmNlU3BhbmAgdGhhdCBpbmNsdWRlcyB0aGUgY3Vyc29yLFxuICAgICAgLy8gaXQgaXMgcG9zc2libGUgdGhhdCB3ZSBhcmUgb3V0c2lkZSB0aGUgay92IHNwYW5zIChpLmUuIGluLWJldHdlZW4gdGhlbSkuIElmIHRoaXMgaXMgdGhlXG4gICAgICAvLyBjYXNlIGFuZCB3ZSBkbyBub3QgaGF2ZSBhbnkgb3RoZXIgY2FuZGlkYXRlIG1hdGNoZXMgb24gdGhlIGB0LkVsZW1lbnRgIG9yIGB0LlRlbXBsYXRlYCwgd2VcbiAgICAgIC8vIHdhbnQgdG8gcmV0dXJuIG5vIHJlc3VsdHMuIE90aGVyd2lzZSwgdGhlIGB0LkVsZW1lbnRgL2B0LlRlbXBsYXRlYCByZXN1bHQgaXMgaW5jb3JyZWN0IGZvclxuICAgICAgLy8gdGhhdCBjdXJzb3IgcG9zaXRpb24uXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBzdHJpY3RQYXRoO1xuICB9XG5cbiAgLy8gUG9zaXRpb24gbXVzdCBiZSBhYnNvbHV0ZSBpbiB0aGUgc291cmNlIGZpbGUuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyKSB7fVxuXG4gIHZpc2l0KG5vZGU6IHQuTm9kZSkge1xuICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IGdldFNwYW5JbmNsdWRpbmdFbmRUYWcobm9kZSk7XG4gICAgaWYgKCFpc1dpdGhpbih0aGlzLnBvc2l0aW9uLCB7c3RhcnQsIGVuZH0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdDogdC5Ob2RlfGUuQVNUfHVuZGVmaW5lZCA9IHRoaXMucGF0aFt0aGlzLnBhdGgubGVuZ3RoIC0gMV07XG4gICAgY29uc3Qgd2l0aGluS2V5U3Bhbk9mTGFzdE5vZGUgPVxuICAgICAgICBsYXN0ICYmIGlzVGVtcGxhdGVOb2RlV2l0aEtleUFuZFZhbHVlKGxhc3QpICYmIGlzV2l0aGluKHRoaXMucG9zaXRpb24sIGxhc3Qua2V5U3Bhbik7XG4gICAgY29uc3Qgd2l0aGluS2V5U3Bhbk9mQ3VycmVudE5vZGUgPVxuICAgICAgICBpc1RlbXBsYXRlTm9kZVdpdGhLZXlBbmRWYWx1ZShub2RlKSAmJiBpc1dpdGhpbih0aGlzLnBvc2l0aW9uLCBub2RlLmtleVNwYW4pO1xuICAgIGlmICh3aXRoaW5LZXlTcGFuT2ZMYXN0Tm9kZSAmJiAhd2l0aGluS2V5U3Bhbk9mQ3VycmVudE5vZGUpIHtcbiAgICAgIC8vIFdlJ3ZlIGFscmVhZHkgaWRlbnRpZmllZCB0aGF0IHdlIGFyZSB3aXRoaW4gYSBga2V5U3BhbmAgb2YgYSBub2RlLlxuICAgICAgLy8gVW5sZXNzIHdlIGFyZSBfYWxzb18gaW4gdGhlIGBrZXlTcGFuYCBvZiB0aGUgY3VycmVudCBub2RlIChoYXBwZW5zIHdpdGggdHdvIHdheSBiaW5kaW5ncyksXG4gICAgICAvLyB3ZSBzaG91bGQgc3RvcCBwcm9jZXNzaW5nIG5vZGVzIGF0IHRoaXMgcG9pbnQgdG8gcHJldmVudCBtYXRjaGluZyBhbnkgb3RoZXIgbm9kZXMuIFRoaXMgY2FuXG4gICAgICAvLyBoYXBwZW4gd2hlbiB0aGUgZW5kIHNwYW4gb2YgYSBkaWZmZXJlbnQgbm9kZSB0b3VjaGVzIHRoZSBzdGFydCBvZiB0aGUga2V5U3BhbiBmb3IgdGhlXG4gICAgICAvLyBjYW5kaWRhdGUgbm9kZS4gQmVjYXVzZSBvdXIgYGlzV2l0aGluYCBsb2dpYyBpcyBpbmNsdXNpdmUgb24gYm90aCBlbmRzLCB3ZSBjYW4gbWF0Y2ggYm90aFxuICAgICAgLy8gbm9kZXMuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1RlbXBsYXRlTm9kZVdpdGhLZXlBbmRWYWx1ZShub2RlKSAmJiAhaXNXaXRoaW5LZXlWYWx1ZSh0aGlzLnBvc2l0aW9uLCBub2RlKSkge1xuICAgICAgLy8gSWYgY3Vyc29yIGlzIHdpdGhpbiBzb3VyY2Ugc3BhbiBidXQgbm90IHdpdGhpbiBrZXkgc3BhbiBvciB2YWx1ZSBzcGFuLFxuICAgICAgLy8gZG8gbm90IHJldHVybiB0aGUgbm9kZS5cbiAgICAgIHRoaXMucGF0aC5wdXNoKE9VVFNJREVfS19WX01BUktFUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGF0aC5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS52aXNpdCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogdC5FbGVtZW50KSB7XG4gICAgdGhpcy52aXNpdEVsZW1lbnRPclRlbXBsYXRlKGVsZW1lbnQpO1xuICB9XG5cblxuICB2aXNpdFRlbXBsYXRlKHRlbXBsYXRlOiB0LlRlbXBsYXRlKSB7XG4gICAgdGhpcy52aXNpdEVsZW1lbnRPclRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudE9yVGVtcGxhdGUoZWxlbWVudDogdC5UZW1wbGF0ZXx0LkVsZW1lbnQpIHtcbiAgICB0aGlzLnZpc2l0QWxsKGVsZW1lbnQuYXR0cmlidXRlcyk7XG4gICAgdGhpcy52aXNpdEFsbChlbGVtZW50LmlucHV0cyk7XG4gICAgdGhpcy52aXNpdEFsbChlbGVtZW50Lm91dHB1dHMpO1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgdC5UZW1wbGF0ZSkge1xuICAgICAgdGhpcy52aXNpdEFsbChlbGVtZW50LnRlbXBsYXRlQXR0cnMpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0QWxsKGVsZW1lbnQucmVmZXJlbmNlcyk7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiB0LlRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZpc2l0QWxsKGVsZW1lbnQudmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBnZXQgaGVyZSBhbmQgaGF2ZSBub3QgZm91bmQgYSBjYW5kaWRhdGUgbm9kZSBvbiB0aGUgZWxlbWVudCBpdHNlbGYsIHByb2NlZWQgd2l0aFxuICAgIC8vIGxvb2tpbmcgZm9yIGEgbW9yZSBzcGVjaWZpYyBub2RlIG9uIHRoZSBlbGVtZW50IGNoaWxkcmVuLlxuICAgIGlmICh0aGlzLnBhdGhbdGhpcy5wYXRoLmxlbmd0aCAtIDFdICE9PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aXNpdEFsbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgfVxuXG4gIHZpc2l0Q29udGVudChjb250ZW50OiB0LkNvbnRlbnQpIHtcbiAgICB0LnZpc2l0QWxsKHRoaXMsIGNvbnRlbnQuYXR0cmlidXRlcyk7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlKHZhcmlhYmxlOiB0LlZhcmlhYmxlKSB7XG4gICAgLy8gVmFyaWFibGUgaGFzIG5vIHRlbXBsYXRlIG5vZGVzIG9yIGV4cHJlc3Npb24gbm9kZXMuXG4gIH1cblxuICB2aXNpdFJlZmVyZW5jZShyZWZlcmVuY2U6IHQuUmVmZXJlbmNlKSB7XG4gICAgLy8gUmVmZXJlbmNlIGhhcyBubyB0ZW1wbGF0ZSBub2RlcyBvciBleHByZXNzaW9uIG5vZGVzLlxuICB9XG5cbiAgdmlzaXRUZXh0QXR0cmlidXRlKGF0dHJpYnV0ZTogdC5UZXh0QXR0cmlidXRlKSB7XG4gICAgLy8gVGV4dCBhdHRyaWJ1dGUgaGFzIG5vIHRlbXBsYXRlIG5vZGVzIG9yIGV4cHJlc3Npb24gbm9kZXMuXG4gIH1cblxuICB2aXNpdEJvdW5kQXR0cmlidXRlKGF0dHJpYnV0ZTogdC5Cb3VuZEF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgRXhwcmVzc2lvblZpc2l0b3IodGhpcy5wb3NpdGlvbik7XG4gICAgdmlzaXRvci52aXNpdChhdHRyaWJ1dGUudmFsdWUsIHRoaXMucGF0aCk7XG4gIH1cblxuICB2aXNpdEJvdW5kRXZlbnQoZXZlbnQ6IHQuQm91bmRFdmVudCkge1xuICAgIC8vIEFuIGV2ZW50IGJpbmRpbmcgd2l0aCBubyB2YWx1ZSAoZS5nLiBgKGV2ZW50fClgKSBwYXJzZXMgdG8gYSBgQm91bmRFdmVudGAgd2l0aCBhXG4gICAgLy8gYExpdGVyYWxQcmltaXRpdmVgIGhhbmRsZXIgd2l0aCB2YWx1ZSBgJ0VSUk9SJ2AsIGFzIG9wcG9zZWQgdG8gYSBwcm9wZXJ0eSBiaW5kaW5nIHdpdGggbm9cbiAgICAvLyB2YWx1ZSB3aGljaCBoYXMgYW4gYEVtcHR5RXhwcmAgYXMgaXRzIHZhbHVlLiBUaGlzIGlzIGEgc3ludGhldGljIG5vZGUgY3JlYXRlZCBieSB0aGUgYmluZGluZ1xuICAgIC8vIHBhcnNlciwgYW5kIGlzIG5vdCBzdWl0YWJsZSB0byB1c2UgZm9yIExhbmd1YWdlIFNlcnZpY2UgYW5hbHlzaXMuIFNraXAgaXQuXG4gICAgLy9cbiAgICAvLyBUT0RPKGFseGh1Yik6IG1vZGlmeSB0aGUgcGFyc2VyIHRvIGdlbmVyYXRlIGFuIGBFbXB0eUV4cHJgIGluc3RlYWQuXG4gICAgbGV0IGhhbmRsZXI6IGUuQVNUID0gZXZlbnQuaGFuZGxlcjtcbiAgICBpZiAoaGFuZGxlciBpbnN0YW5jZW9mIGUuQVNUV2l0aFNvdXJjZSkge1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXIuYXN0O1xuICAgIH1cbiAgICBpZiAoaGFuZGxlciBpbnN0YW5jZW9mIGUuTGl0ZXJhbFByaW1pdGl2ZSAmJiBoYW5kbGVyLnZhbHVlID09PSAnRVJST1InKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBFeHByZXNzaW9uVmlzaXRvcih0aGlzLnBvc2l0aW9uKTtcbiAgICB2aXNpdG9yLnZpc2l0KGV2ZW50LmhhbmRsZXIsIHRoaXMucGF0aCk7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogdC5UZXh0KSB7XG4gICAgLy8gVGV4dCBoYXMgbm8gdGVtcGxhdGUgbm9kZXMgb3IgZXhwcmVzc2lvbiBub2Rlcy5cbiAgfVxuXG4gIHZpc2l0Qm91bmRUZXh0KHRleHQ6IHQuQm91bmRUZXh0KSB7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBFeHByZXNzaW9uVmlzaXRvcih0aGlzLnBvc2l0aW9uKTtcbiAgICB2aXNpdG9yLnZpc2l0KHRleHQudmFsdWUsIHRoaXMucGF0aCk7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IHQuSWN1KSB7XG4gICAgZm9yIChjb25zdCBib3VuZFRleHQgb2YgT2JqZWN0LnZhbHVlcyhpY3UudmFycykpIHtcbiAgICAgIHRoaXMudmlzaXQoYm91bmRUZXh0KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBib3VuZFRleHRPclRleHQgb2YgT2JqZWN0LnZhbHVlcyhpY3UucGxhY2Vob2xkZXJzKSkge1xuICAgICAgdGhpcy52aXNpdChib3VuZFRleHRPclRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QWxsKG5vZGVzOiB0Lk5vZGVbXSkge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgdGhpcy52aXNpdChub2RlKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRXhwcmVzc2lvblZpc2l0b3IgZXh0ZW5kcyBlLlJlY3Vyc2l2ZUFzdFZpc2l0b3Ige1xuICAvLyBQb3NpdGlvbiBtdXN0IGJlIGFic29sdXRlIGluIHRoZSBzb3VyY2UgZmlsZS5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHZpc2l0KG5vZGU6IGUuQVNULCBwYXRoOiBBcnJheTx0Lk5vZGV8ZS5BU1Q+KSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBlLkFTVFdpdGhTb3VyY2UpIHtcbiAgICAgIC8vIEluIG9yZGVyIHRvIHJlZHVjZSBub2lzZSwgZG8gbm90IGluY2x1ZGUgYEFTVFdpdGhTb3VyY2VgIGluIHRoZSBwYXRoLlxuICAgICAgLy8gRm9yIHRoZSBwdXJwb3NlIG9mIHNvdXJjZSBzcGFucywgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBiZXR3ZWVuXG4gICAgICAvLyBgQVNUV2l0aFNvdXJjZWAgYW5kIGFuZCB1bmRlcmx5aW5nIG5vZGUgdGhhdCBpdCB3cmFwcy5cbiAgICAgIG5vZGUgPSBub2RlLmFzdDtcbiAgICB9XG4gICAgLy8gVGhlIHRoaXJkIGNvbmRpdGlvbiBpcyB0byBhY2NvdW50IGZvciB0aGUgaW1wbGljaXQgcmVjZWl2ZXIsIHdoaWNoIHNob3VsZFxuICAgIC8vIG5vdCBiZSB2aXNpdGVkLlxuICAgIGlmIChpc1dpdGhpbih0aGlzLnBvc2l0aW9uLCBub2RlLnNvdXJjZVNwYW4pICYmICEobm9kZSBpbnN0YW5jZW9mIGUuSW1wbGljaXRSZWNlaXZlcikpIHtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIG5vZGUudmlzaXQodGhpcywgcGF0aCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNwYW5JbmNsdWRpbmdFbmRUYWcoYXN0OiB0Lk5vZGUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHN0YXJ0OiBhc3Quc291cmNlU3Bhbi5zdGFydC5vZmZzZXQsXG4gICAgZW5kOiBhc3Quc291cmNlU3Bhbi5lbmQub2Zmc2V0LFxuICB9O1xuICAvLyBGb3IgRWxlbWVudCBhbmQgVGVtcGxhdGUgbm9kZSwgc291cmNlU3Bhbi5lbmQgaXMgdGhlIGVuZCBvZiB0aGUgb3BlbmluZ1xuICAvLyB0YWcuIEZvciB0aGUgcHVycG9zZSBvZiBsYW5ndWFnZSBzZXJ2aWNlLCB3ZSBuZWVkIHRvIGFjdHVhbGx5IHJlY29nbml6ZVxuICAvLyB0aGUgZW5kIG9mIHRoZSBjbG9zaW5nIHRhZy4gT3RoZXJ3aXNlLCBmb3Igc2l0dWF0aW9uIGxpa2VcbiAgLy8gPG15LWNvbXBvbmVudD48L215LWNvbXDCpm9uZW50PiB3aGVyZSB0aGUgY3Vyc29yIGlzIGluIHRoZSBjbG9zaW5nIHRhZ1xuICAvLyB3ZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJldHVybiBhbnkgaW5mb3JtYXRpb24uXG4gIGlmICgoYXN0IGluc3RhbmNlb2YgdC5FbGVtZW50IHx8IGFzdCBpbnN0YW5jZW9mIHQuVGVtcGxhdGUpICYmIGFzdC5lbmRTb3VyY2VTcGFuKSB7XG4gICAgcmVzdWx0LmVuZCA9IGFzdC5lbmRTb3VyY2VTcGFuLmVuZC5vZmZzZXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==