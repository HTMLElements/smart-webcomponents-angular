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
        define("@angular/language-service/src/utils", ["require", "exports", "tslib", "@angular/compiler", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractAbsoluteFilePath = exports.findOutputBinding = exports.invertMap = exports.getPathToNodeAtPosition = exports.findTemplateAstAt = exports.diagnosticInfoFromTemplateInfo = exports.getSelectors = exports.isStructuralDirective = exports.isNarrower = exports.offsetSpan = exports.inSpan = exports.spanOf = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var path = require("path");
    function isParseSourceSpan(value) {
        return value && !!value.start;
    }
    function spanOf(span) {
        if (!span)
            return undefined;
        if (isParseSourceSpan(span)) {
            return { start: span.start.offset, end: span.end.offset };
        }
        else {
            if (span.endSourceSpan) {
                return { start: span.sourceSpan.start.offset, end: span.endSourceSpan.end.offset };
            }
            else if (span.children && span.children.length) {
                return {
                    start: span.sourceSpan.start.offset,
                    end: spanOf(span.children[span.children.length - 1]).end
                };
            }
            return { start: span.sourceSpan.start.offset, end: span.sourceSpan.end.offset };
        }
    }
    exports.spanOf = spanOf;
    function inSpan(position, span, exclusive) {
        return span != null &&
            (exclusive ? position >= span.start && position < span.end :
                position >= span.start && position <= span.end);
    }
    exports.inSpan = inSpan;
    function offsetSpan(span, amount) {
        return { start: span.start + amount, end: span.end + amount };
    }
    exports.offsetSpan = offsetSpan;
    function isNarrower(spanA, spanB) {
        return spanA.start >= spanB.start && spanA.end <= spanB.end;
    }
    exports.isNarrower = isNarrower;
    function isStructuralDirective(type) {
        var e_1, _a;
        var _b;
        try {
            for (var _c = tslib_1.__values(type.diDeps), _d = _c.next(); !_d.done; _d = _c.next()) {
                var diDep = _d.value;
                var diDepName = compiler_1.identifierName((_b = diDep.token) === null || _b === void 0 ? void 0 : _b.identifier);
                if (diDepName === compiler_1.Identifiers.TemplateRef.name ||
                    diDepName === compiler_1.Identifiers.ViewContainerRef.name) {
                    return true;
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
        return false;
    }
    exports.isStructuralDirective = isStructuralDirective;
    function getSelectors(info) {
        var e_2, _a, e_3, _b;
        var map = new Map();
        var results = [];
        try {
            for (var _c = tslib_1.__values(info.directives), _d = _c.next(); !_d.done; _d = _c.next()) {
                var directive = _d.value;
                var selectors = compiler_1.CssSelector.parse(directive.selector);
                try {
                    for (var selectors_1 = (e_3 = void 0, tslib_1.__values(selectors)), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
                        var selector = selectors_1_1.value;
                        results.push(selector);
                        map.set(selector, directive);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (selectors_1_1 && !selectors_1_1.done && (_b = selectors_1.return)) _b.call(selectors_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { selectors: results, map: map };
    }
    exports.getSelectors = getSelectors;
    function diagnosticInfoFromTemplateInfo(info) {
        return {
            fileName: info.template.fileName,
            offset: info.template.span.start,
            query: info.template.query,
            members: info.template.members,
            htmlAst: info.htmlAst,
            templateAst: info.templateAst,
            source: info.template.source,
        };
    }
    exports.diagnosticInfoFromTemplateInfo = diagnosticInfoFromTemplateInfo;
    function findTemplateAstAt(ast, position) {
        var path = [];
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visit = function (ast) {
                var span = spanOf(ast);
                if (inSpan(position, span)) {
                    var len = path.length;
                    if (!len || isNarrower(span, spanOf(path[len - 1]))) {
                        path.push(ast);
                    }
                }
                else {
                    // Returning a value here will result in the children being skipped.
                    return true;
                }
            };
            class_1.prototype.visitEmbeddedTemplate = function (ast, context) {
                return this.visitChildren(context, function (visit) {
                    // Ignore reference, variable and providers
                    visit(ast.attrs);
                    visit(ast.directives);
                    visit(ast.children);
                });
            };
            class_1.prototype.visitElement = function (ast, context) {
                return this.visitChildren(context, function (visit) {
                    // Ingnore providers
                    visit(ast.attrs);
                    visit(ast.inputs);
                    visit(ast.outputs);
                    visit(ast.references);
                    visit(ast.directives);
                    visit(ast.children);
                });
            };
            class_1.prototype.visitDirective = function (ast, context) {
                // Ignore the host properties of a directive
                var result = this.visitChildren(context, function (visit) {
                    visit(ast.inputs);
                });
                // We never care about the diretive itself, just its inputs.
                if (path[path.length - 1] === ast) {
                    path.pop();
                }
                return result;
            };
            return class_1;
        }(compiler_1.RecursiveTemplateAstVisitor));
        compiler_1.templateVisitAll(visitor, ast);
        return new compiler_1.AstPath(path, position);
    }
    exports.findTemplateAstAt = findTemplateAstAt;
    /**
     * Find the tightest node at the specified `position` from the AST `nodes`, and
     * return the path to the node.
     * @param nodes HTML AST nodes
     * @param position
     */
    function getPathToNodeAtPosition(nodes, position) {
        var path = [];
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_2.prototype.visit = function (ast) {
                var span = spanOf(ast);
                if (inSpan(position, span)) {
                    path.push(ast);
                }
                else {
                    // Returning a truthy value here will skip all children and terminate
                    // the visit.
                    return true;
                }
            };
            return class_2;
        }(compiler_1.RecursiveVisitor));
        compiler_1.visitAll(visitor, nodes);
        return new compiler_1.AstPath(path, position);
    }
    exports.getPathToNodeAtPosition = getPathToNodeAtPosition;
    /**
     * Inverts an object's key-value pairs.
     */
    function invertMap(obj) {
        var e_4, _a;
        var result = {};
        try {
            for (var _b = tslib_1.__values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                var v = obj[name_1];
                result[v] = name_1;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    }
    exports.invertMap = invertMap;
    /**
     * Finds the directive member providing a template output binding, if one exists.
     * @param info aggregate template AST information
     * @param path narrowing
     */
    function findOutputBinding(binding, path, query) {
        var e_5, _a;
        var element = path.first(compiler_1.ElementAst);
        if (element) {
            try {
                for (var _b = tslib_1.__values(element.directives), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var directive = _c.value;
                    var invertedOutputs = invertMap(directive.directive.outputs);
                    var fieldName = invertedOutputs[binding.name];
                    if (fieldName) {
                        var classSymbol = query.getTypeSymbol(directive.directive.type.reference);
                        if (classSymbol) {
                            return classSymbol.members().get(fieldName);
                        }
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    }
    exports.findOutputBinding = findOutputBinding;
    /**
     * Returns an absolute path from the text in `node`. If the text is already
     * an absolute path, return it as is, otherwise join the path with the filename
     * of the source file.
     */
    function extractAbsoluteFilePath(node) {
        var url = node.text;
        return path.isAbsolute(url) ? url : path.join(path.dirname(node.getSourceFile().fileName), url);
    }
    exports.extractAbsoluteFilePath = extractAbsoluteFilePath;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7O0lBRUgsOENBQTZVO0lBQzdVLDJCQUE2QjtJQVU3QixTQUFTLGlCQUFpQixDQUFDLEtBQVU7UUFDbkMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUtELFNBQWdCLE1BQU0sQ0FBQyxJQUFpQztRQUN0RCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQzVCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLENBQUM7YUFDbEY7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNoRCxPQUFPO29CQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHO2lCQUMxRCxDQUFDO2FB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UmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBc3RQYXRoLCBCb3VuZEV2ZW50QXN0LCBDb21waWxlRGlyZWN0aXZlU3VtbWFyeSwgQ29tcGlsZVR5cGVNZXRhZGF0YSwgQ3NzU2VsZWN0b3IsIERpcmVjdGl2ZUFzdCwgRWxlbWVudEFzdCwgRW1iZWRkZWRUZW1wbGF0ZUFzdCwgSHRtbEFzdFBhdGgsIGlkZW50aWZpZXJOYW1lLCBJZGVudGlmaWVycywgTm9kZSwgUGFyc2VTb3VyY2VTcGFuLCBSZWN1cnNpdmVUZW1wbGF0ZUFzdFZpc2l0b3IsIFJlY3Vyc2l2ZVZpc2l0b3IsIFRlbXBsYXRlQXN0LCBUZW1wbGF0ZUFzdFBhdGgsIHRlbXBsYXRlVmlzaXRBbGwsIHZpc2l0QWxsfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQge0FzdFJlc3VsdCwgRGlhZ25vc3RpY1RlbXBsYXRlSW5mbywgU2VsZWN0b3JJbmZvLCBTcGFuLCBTeW1ib2wsIFN5bWJvbFF1ZXJ5fSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFNwYW5Ib2xkZXIge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIGVuZFNvdXJjZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW58bnVsbDtcbiAgY2hpbGRyZW4/OiBTcGFuSG9sZGVyW107XG59XG5cbmZ1bmN0aW9uIGlzUGFyc2VTb3VyY2VTcGFuKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBQYXJzZVNvdXJjZVNwYW4ge1xuICByZXR1cm4gdmFsdWUgJiYgISF2YWx1ZS5zdGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYW5PZihzcGFuOiBTcGFuSG9sZGVyKTogU3BhbjtcbmV4cG9ydCBmdW5jdGlvbiBzcGFuT2Yoc3BhbjogUGFyc2VTb3VyY2VTcGFuKTogU3BhbjtcbmV4cG9ydCBmdW5jdGlvbiBzcGFuT2Yoc3BhbjogU3BhbkhvbGRlcnxQYXJzZVNvdXJjZVNwYW58dW5kZWZpbmVkKTogU3Bhbnx1bmRlZmluZWQ7XG5leHBvcnQgZnVuY3Rpb24gc3Bhbk9mKHNwYW4/OiBTcGFuSG9sZGVyfFBhcnNlU291cmNlU3Bhbik6IFNwYW58dW5kZWZpbmVkIHtcbiAgaWYgKCFzcGFuKSByZXR1cm4gdW5kZWZpbmVkO1xuICBpZiAoaXNQYXJzZVNvdXJjZVNwYW4oc3BhbikpIHtcbiAgICByZXR1cm4ge3N0YXJ0OiBzcGFuLnN0YXJ0Lm9mZnNldCwgZW5kOiBzcGFuLmVuZC5vZmZzZXR9O1xuICB9IGVsc2Uge1xuICAgIGlmIChzcGFuLmVuZFNvdXJjZVNwYW4pIHtcbiAgICAgIHJldHVybiB7c3RhcnQ6IHNwYW4uc291cmNlU3Bhbi5zdGFydC5vZmZzZXQsIGVuZDogc3Bhbi5lbmRTb3VyY2VTcGFuLmVuZC5vZmZzZXR9O1xuICAgIH0gZWxzZSBpZiAoc3Bhbi5jaGlsZHJlbiAmJiBzcGFuLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHNwYW4uc291cmNlU3Bhbi5zdGFydC5vZmZzZXQsXG4gICAgICAgIGVuZDogc3Bhbk9mKHNwYW4uY2hpbGRyZW5bc3Bhbi5jaGlsZHJlbi5sZW5ndGggLSAxXSkhLmVuZFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtzdGFydDogc3Bhbi5zb3VyY2VTcGFuLnN0YXJ0Lm9mZnNldCwgZW5kOiBzcGFuLnNvdXJjZVNwYW4uZW5kLm9mZnNldH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluU3Bhbihwb3NpdGlvbjogbnVtYmVyLCBzcGFuPzogU3BhbiwgZXhjbHVzaXZlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BhbiAhPSBudWxsICYmXG4gICAgICAoZXhjbHVzaXZlID8gcG9zaXRpb24gPj0gc3Bhbi5zdGFydCAmJiBwb3NpdGlvbiA8IHNwYW4uZW5kIDpcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA+PSBzcGFuLnN0YXJ0ICYmIHBvc2l0aW9uIDw9IHNwYW4uZW5kKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldFNwYW4oc3BhbjogU3BhbiwgYW1vdW50OiBudW1iZXIpOiBTcGFuIHtcbiAgcmV0dXJuIHtzdGFydDogc3Bhbi5zdGFydCArIGFtb3VudCwgZW5kOiBzcGFuLmVuZCArIGFtb3VudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hcnJvd2VyKHNwYW5BOiBTcGFuLCBzcGFuQjogU3Bhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BhbkEuc3RhcnQgPj0gc3BhbkIuc3RhcnQgJiYgc3BhbkEuZW5kIDw9IHNwYW5CLmVuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RydWN0dXJhbERpcmVjdGl2ZSh0eXBlOiBDb21waWxlVHlwZU1ldGFkYXRhKTogYm9vbGVhbiB7XG4gIGZvciAoY29uc3QgZGlEZXAgb2YgdHlwZS5kaURlcHMpIHtcbiAgICBjb25zdCBkaURlcE5hbWUgPSBpZGVudGlmaWVyTmFtZShkaURlcC50b2tlbj8uaWRlbnRpZmllcik7XG4gICAgaWYgKGRpRGVwTmFtZSA9PT0gSWRlbnRpZmllcnMuVGVtcGxhdGVSZWYubmFtZSB8fFxuICAgICAgICBkaURlcE5hbWUgPT09IElkZW50aWZpZXJzLlZpZXdDb250YWluZXJSZWYubmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhpbmZvOiBBc3RSZXN1bHQpOiBTZWxlY3RvckluZm8ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwPENzc1NlbGVjdG9yLCBDb21waWxlRGlyZWN0aXZlU3VtbWFyeT4oKTtcbiAgY29uc3QgcmVzdWx0czogQ3NzU2VsZWN0b3JbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGRpcmVjdGl2ZSBvZiBpbmZvLmRpcmVjdGl2ZXMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnM6IENzc1NlbGVjdG9yW10gPSBDc3NTZWxlY3Rvci5wYXJzZShkaXJlY3RpdmUuc2VsZWN0b3IhKTtcbiAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycykge1xuICAgICAgcmVzdWx0cy5wdXNoKHNlbGVjdG9yKTtcbiAgICAgIG1hcC5zZXQoc2VsZWN0b3IsIGRpcmVjdGl2ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7c2VsZWN0b3JzOiByZXN1bHRzLCBtYXB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlhZ25vc3RpY0luZm9Gcm9tVGVtcGxhdGVJbmZvKGluZm86IEFzdFJlc3VsdCk6IERpYWdub3N0aWNUZW1wbGF0ZUluZm8ge1xuICByZXR1cm4ge1xuICAgIGZpbGVOYW1lOiBpbmZvLnRlbXBsYXRlLmZpbGVOYW1lLFxuICAgIG9mZnNldDogaW5mby50ZW1wbGF0ZS5zcGFuLnN0YXJ0LFxuICAgIHF1ZXJ5OiBpbmZvLnRlbXBsYXRlLnF1ZXJ5LFxuICAgIG1lbWJlcnM6IGluZm8udGVtcGxhdGUubWVtYmVycyxcbiAgICBodG1sQXN0OiBpbmZvLmh0bWxBc3QsXG4gICAgdGVtcGxhdGVBc3Q6IGluZm8udGVtcGxhdGVBc3QsXG4gICAgc291cmNlOiBpbmZvLnRlbXBsYXRlLnNvdXJjZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUZW1wbGF0ZUFzdEF0KGFzdDogVGVtcGxhdGVBc3RbXSwgcG9zaXRpb246IG51bWJlcik6IFRlbXBsYXRlQXN0UGF0aCB7XG4gIGNvbnN0IHBhdGg6IFRlbXBsYXRlQXN0W10gPSBbXTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBjbGFzcyBleHRlbmRzIFJlY3Vyc2l2ZVRlbXBsYXRlQXN0VmlzaXRvciB7XG4gICAgdmlzaXQoYXN0OiBUZW1wbGF0ZUFzdCk6IGFueSB7XG4gICAgICBsZXQgc3BhbiA9IHNwYW5PZihhc3QpO1xuICAgICAgaWYgKGluU3Bhbihwb3NpdGlvbiwgc3BhbikpIHtcbiAgICAgICAgY29uc3QgbGVuID0gcGF0aC5sZW5ndGg7XG4gICAgICAgIGlmICghbGVuIHx8IGlzTmFycm93ZXIoc3Bhbiwgc3Bhbk9mKHBhdGhbbGVuIC0gMV0pKSkge1xuICAgICAgICAgIHBhdGgucHVzaChhc3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm5pbmcgYSB2YWx1ZSBoZXJlIHdpbGwgcmVzdWx0IGluIHRoZSBjaGlsZHJlbiBiZWluZyBza2lwcGVkLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoYXN0OiBFbWJlZGRlZFRlbXBsYXRlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaXRDaGlsZHJlbihjb250ZXh0LCB2aXNpdCA9PiB7XG4gICAgICAgIC8vIElnbm9yZSByZWZlcmVuY2UsIHZhcmlhYmxlIGFuZCBwcm92aWRlcnNcbiAgICAgICAgdmlzaXQoYXN0LmF0dHJzKTtcbiAgICAgICAgdmlzaXQoYXN0LmRpcmVjdGl2ZXMpO1xuICAgICAgICB2aXNpdChhc3QuY2hpbGRyZW4pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmlzaXRFbGVtZW50KGFzdDogRWxlbWVudEFzdCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0Q2hpbGRyZW4oY29udGV4dCwgdmlzaXQgPT4ge1xuICAgICAgICAvLyBJbmdub3JlIHByb3ZpZGVyc1xuICAgICAgICB2aXNpdChhc3QuYXR0cnMpO1xuICAgICAgICB2aXNpdChhc3QuaW5wdXRzKTtcbiAgICAgICAgdmlzaXQoYXN0Lm91dHB1dHMpO1xuICAgICAgICB2aXNpdChhc3QucmVmZXJlbmNlcyk7XG4gICAgICAgIHZpc2l0KGFzdC5kaXJlY3RpdmVzKTtcbiAgICAgICAgdmlzaXQoYXN0LmNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZpc2l0RGlyZWN0aXZlKGFzdDogRGlyZWN0aXZlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgLy8gSWdub3JlIHRoZSBob3N0IHByb3BlcnRpZXMgb2YgYSBkaXJlY3RpdmVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmlzaXRDaGlsZHJlbihjb250ZXh0LCB2aXNpdCA9PiB7XG4gICAgICAgIHZpc2l0KGFzdC5pbnB1dHMpO1xuICAgICAgfSk7XG4gICAgICAvLyBXZSBuZXZlciBjYXJlIGFib3V0IHRoZSBkaXJldGl2ZSBpdHNlbGYsIGp1c3QgaXRzIGlucHV0cy5cbiAgICAgIGlmIChwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09IGFzdCkge1xuICAgICAgICBwYXRoLnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH07XG5cbiAgdGVtcGxhdGVWaXNpdEFsbCh2aXNpdG9yLCBhc3QpO1xuXG4gIHJldHVybiBuZXcgQXN0UGF0aDxUZW1wbGF0ZUFzdD4ocGF0aCwgcG9zaXRpb24pO1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIHRpZ2h0ZXN0IG5vZGUgYXQgdGhlIHNwZWNpZmllZCBgcG9zaXRpb25gIGZyb20gdGhlIEFTVCBgbm9kZXNgLCBhbmRcbiAqIHJldHVybiB0aGUgcGF0aCB0byB0aGUgbm9kZS5cbiAqIEBwYXJhbSBub2RlcyBIVE1MIEFTVCBub2Rlc1xuICogQHBhcmFtIHBvc2l0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXRoVG9Ob2RlQXRQb3NpdGlvbihub2RlczogTm9kZVtdLCBwb3NpdGlvbjogbnVtYmVyKTogSHRtbEFzdFBhdGgge1xuICBjb25zdCBwYXRoOiBOb2RlW10gPSBbXTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBjbGFzcyBleHRlbmRzIFJlY3Vyc2l2ZVZpc2l0b3Ige1xuICAgIHZpc2l0KGFzdDogTm9kZSkge1xuICAgICAgY29uc3Qgc3BhbiA9IHNwYW5PZihhc3QpO1xuICAgICAgaWYgKGluU3Bhbihwb3NpdGlvbiwgc3BhbikpIHtcbiAgICAgICAgcGF0aC5wdXNoKGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm5pbmcgYSB0cnV0aHkgdmFsdWUgaGVyZSB3aWxsIHNraXAgYWxsIGNoaWxkcmVuIGFuZCB0ZXJtaW5hdGVcbiAgICAgICAgLy8gdGhlIHZpc2l0LlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHZpc2l0QWxsKHZpc2l0b3IsIG5vZGVzKTtcbiAgcmV0dXJuIG5ldyBBc3RQYXRoPE5vZGU+KHBhdGgsIHBvc2l0aW9uKTtcbn1cblxuXG4vKipcbiAqIEludmVydHMgYW4gb2JqZWN0J3Mga2V5LXZhbHVlIHBhaXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0TWFwKG9iajoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9KToge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgY29uc3QgcmVzdWx0OiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICBjb25zdCB2ID0gb2JqW25hbWVdO1xuICAgIHJlc3VsdFt2XSA9IG5hbWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKipcbiAqIEZpbmRzIHRoZSBkaXJlY3RpdmUgbWVtYmVyIHByb3ZpZGluZyBhIHRlbXBsYXRlIG91dHB1dCBiaW5kaW5nLCBpZiBvbmUgZXhpc3RzLlxuICogQHBhcmFtIGluZm8gYWdncmVnYXRlIHRlbXBsYXRlIEFTVCBpbmZvcm1hdGlvblxuICogQHBhcmFtIHBhdGggbmFycm93aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kT3V0cHV0QmluZGluZyhcbiAgICBiaW5kaW5nOiBCb3VuZEV2ZW50QXN0LCBwYXRoOiBUZW1wbGF0ZUFzdFBhdGgsIHF1ZXJ5OiBTeW1ib2xRdWVyeSk6IFN5bWJvbHx1bmRlZmluZWQge1xuICBjb25zdCBlbGVtZW50ID0gcGF0aC5maXJzdChFbGVtZW50QXN0KTtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBmb3IgKGNvbnN0IGRpcmVjdGl2ZSBvZiBlbGVtZW50LmRpcmVjdGl2ZXMpIHtcbiAgICAgIGNvbnN0IGludmVydGVkT3V0cHV0cyA9IGludmVydE1hcChkaXJlY3RpdmUuZGlyZWN0aXZlLm91dHB1dHMpO1xuICAgICAgY29uc3QgZmllbGROYW1lID0gaW52ZXJ0ZWRPdXRwdXRzW2JpbmRpbmcubmFtZV07XG4gICAgICBpZiAoZmllbGROYW1lKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzU3ltYm9sID0gcXVlcnkuZ2V0VHlwZVN5bWJvbChkaXJlY3RpdmUuZGlyZWN0aXZlLnR5cGUucmVmZXJlbmNlKTtcbiAgICAgICAgaWYgKGNsYXNzU3ltYm9sKSB7XG4gICAgICAgICAgcmV0dXJuIGNsYXNzU3ltYm9sLm1lbWJlcnMoKS5nZXQoZmllbGROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYWJzb2x1dGUgcGF0aCBmcm9tIHRoZSB0ZXh0IGluIGBub2RlYC4gSWYgdGhlIHRleHQgaXMgYWxyZWFkeVxuICogYW4gYWJzb2x1dGUgcGF0aCwgcmV0dXJuIGl0IGFzIGlzLCBvdGhlcndpc2Ugam9pbiB0aGUgcGF0aCB3aXRoIHRoZSBmaWxlbmFtZVxuICogb2YgdGhlIHNvdXJjZSBmaWxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEFic29sdXRlRmlsZVBhdGgobm9kZTogdHMuU3RyaW5nTGl0ZXJhbExpa2UpIHtcbiAgY29uc3QgdXJsID0gbm9kZS50ZXh0O1xuICByZXR1cm4gcGF0aC5pc0Fic29sdXRlKHVybCkgPyB1cmwgOiBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKG5vZGUuZ2V0U291cmNlRmlsZSgpLmZpbGVOYW1lKSwgdXJsKTtcbn1cbiJdfQ==