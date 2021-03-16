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
        define("@angular/language-service/src/expressions", ["require", "exports", "tslib", "@angular/compiler", "@angular/language-service/src/expression_type", "@angular/language-service/src/types", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getExpressionSymbol = exports.getExpressionCompletions = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var expression_type_1 = require("@angular/language-service/src/expression_type");
    var types_1 = require("@angular/language-service/src/types");
    var utils_1 = require("@angular/language-service/src/utils");
    function findAstAt(ast, position, excludeEmpty) {
        if (excludeEmpty === void 0) { excludeEmpty = false; }
        var path = [];
        var visitor = new /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visit = function (ast) {
                if ((!excludeEmpty || ast.sourceSpan.start < ast.sourceSpan.end) &&
                    utils_1.inSpan(position, ast.sourceSpan)) {
                    var isNotNarrower = path.length && !utils_1.isNarrower(ast.span, path[path.length - 1].span);
                    if (!isNotNarrower) {
                        path.push(ast);
                    }
                    ast.visit(this);
                }
            };
            return class_1;
        }(compiler_1.RecursiveAstVisitor));
        // We never care about the ASTWithSource node and its visit() method calls its ast's visit so
        // the visit() method above would never see it.
        if (ast instanceof compiler_1.ASTWithSource) {
            ast = ast.ast;
        }
        // `Interpolation` is useless here except the `expressions` of it.
        if (ast instanceof compiler_1.Interpolation) {
            ast = ast.expressions.filter(function (_ast) { return utils_1.inSpan(position, _ast.sourceSpan); })[0];
        }
        if (ast) {
            visitor.visit(ast);
        }
        return new compiler_1.AstPath(path, position);
    }
    function getExpressionCompletions(scope, ast, position, templateInfo) {
        var path = findAstAt(ast, position);
        if (path.empty)
            return undefined;
        var tail = path.tail;
        var result = scope;
        function getType(ast) {
            return new expression_type_1.AstType(scope, templateInfo.query, {}, templateInfo.source).getType(ast);
        }
        // If the completion request is in a not in a pipe or property access then the global scope
        // (that is the scope of the implicit receiver) is the right scope as the user is typing the
        // beginning of an expression.
        tail.visit({
            visitUnary: function (_ast) { },
            visitBinary: function (_ast) { },
            visitChain: function (_ast) { },
            visitConditional: function (_ast) { },
            visitFunctionCall: function (_ast) { },
            visitImplicitReceiver: function (_ast) { },
            visitThisReceiver: function (_ast) { },
            visitInterpolation: function (_ast) {
                result = undefined;
            },
            visitKeyedRead: function (_ast) { },
            visitKeyedWrite: function (_ast) { },
            visitLiteralArray: function (_ast) { },
            visitLiteralMap: function (_ast) { },
            visitLiteralPrimitive: function (ast) {
                // The type `LiteralPrimitive` include the `ERROR`, and it's wrapped as `string`.
                // packages/compiler/src/template_parser/binding_parser.ts#L308
                // So exclude the `ERROR` here.
                if (typeof ast.value === 'string' &&
                    ast.value ===
                        templateInfo.source.slice(ast.sourceSpan.start + 1, ast.sourceSpan.end - 1)) {
                    result = undefined;
                }
            },
            visitMethodCall: function (_ast) { },
            visitPipe: function (ast) {
                if (position >= ast.exp.span.end &&
                    (!ast.args || !ast.args.length || position < ast.args[0].span.start)) {
                    // We are in a position a pipe name is expected.
                    result = templateInfo.query.getPipes();
                }
            },
            visitPrefixNot: function (_ast) { },
            visitNonNullAssert: function (_ast) { },
            visitPropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
            visitPropertyWrite: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
            visitQuote: function (_ast) {
                // For a quote, return the members of any (if there are any).
                result = templateInfo.query.getBuiltinType(types_1.BuiltinType.Any).members();
            },
            visitSafeMethodCall: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
            visitSafePropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                result = receiverType ? receiverType.members() : scope;
            },
        });
        return result && result.values();
    }
    exports.getExpressionCompletions = getExpressionCompletions;
    /**
     * Retrieves the expression symbol at a particular position in a template.
     *
     * @param scope symbols in scope of the template
     * @param ast template AST
     * @param position absolute location in template to retrieve symbol at
     * @param query type symbol query for the template scope
     */
    function getExpressionSymbol(scope, ast, position, templateInfo) {
        var path = findAstAt(ast, position, /* excludeEmpty */ true);
        if (path.empty)
            return undefined;
        var tail = path.tail;
        function getType(ast) {
            return new expression_type_1.AstType(scope, templateInfo.query, {}, templateInfo.source).getType(ast);
        }
        function spanFromName(ast) {
            // `nameSpan` is an absolute span, but the span expected by the result of this method is
            // relative to the start of the expression.
            // TODO(ayazhafiz): migrate to only using absolute spans
            var offset = ast.sourceSpan.start - ast.span.start;
            return {
                start: ast.nameSpan.start - offset,
                end: ast.nameSpan.end - offset,
            };
        }
        var symbol = undefined;
        var span = undefined;
        // If the completion request is in a not in a pipe or property access then the global scope
        // (that is the scope of the implicit receiver) is the right scope as the user is typing the
        // beginning of an expression.
        tail.visit({
            visitUnary: function (_ast) { },
            visitBinary: function (_ast) { },
            visitChain: function (_ast) { },
            visitConditional: function (_ast) { },
            visitFunctionCall: function (_ast) { },
            visitImplicitReceiver: function (_ast) { },
            visitThisReceiver: function (_ast) { },
            visitInterpolation: function (_ast) { },
            visitKeyedRead: function (_ast) { },
            visitKeyedWrite: function (_ast) { },
            visitLiteralArray: function (_ast) { },
            visitLiteralMap: function (_ast) { },
            visitLiteralPrimitive: function (_ast) { },
            visitMethodCall: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitPipe: function (ast) {
                if (utils_1.inSpan(position, ast.nameSpan, /* exclusive */ true)) {
                    // We are in a position a pipe name is expected.
                    var pipes = templateInfo.query.getPipes();
                    symbol = pipes.get(ast.name);
                    span = spanFromName(ast);
                }
            },
            visitPrefixNot: function (_ast) { },
            visitNonNullAssert: function (_ast) { },
            visitPropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitPropertyWrite: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitQuote: function (_ast) { },
            visitSafeMethodCall: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
            visitSafePropertyRead: function (ast) {
                var receiverType = getType(ast.receiver);
                symbol = receiverType && receiverType.members().get(ast.name);
                span = spanFromName(ast);
            },
        });
        if (symbol && span) {
            return { symbol: symbol, span: span };
        }
    }
    exports.getExpressionSymbol = getExpressionSymbol;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9leHByZXNzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7O0lBRUgsOENBQThIO0lBRTlILGlGQUEwQztJQUMxQyw2REFBK0U7SUFDL0UsNkRBQTJDO0lBSTNDLFNBQVMsU0FBUyxDQUFDLEdBQVEsRUFBRSxRQUFnQixFQUFFLFlBQTZCO1FBQTdCLDZCQUFBLEVBQUEsb0JBQTZCO1FBQzFFLElBQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFNLE9BQU8sR0FBRztZQUFrQixtQ0FBbUI7WUFBakM7O1lBV3BCLENBQUM7WUFWQyx1QkFBSyxHQUFMLFVBQU0sR0FBUTtnQkFDWixJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7b0JBQzVELGNBQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNwQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2RixJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNoQjtvQkFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQjtZQUNILENBQUM7WUFDSCxjQUFDO1FBQUQsQ0FBQyxBQVhtQixDQUFjLDhCQUFtQixFQVdwRCxDQUFDO1FBRUYsNkZBQTZGO1FBQzdGLCtDQUEr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Q0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE9BQU8sRUFBQyxNQUFNLFFBQUEsRUFBRSxJQUFJLE1BQUEsRUFBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQW5GRCxrREFtRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBU1QsIEFzdFBhdGggYXMgQXN0UGF0aEJhc2UsIEFTVFdpdGhOYW1lLCBBU1RXaXRoU291cmNlLCBJbnRlcnBvbGF0aW9uLCBSZWN1cnNpdmVBc3RWaXNpdG9yfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbmltcG9ydCB7QXN0VHlwZX0gZnJvbSAnLi9leHByZXNzaW9uX3R5cGUnO1xuaW1wb3J0IHtCdWlsdGluVHlwZSwgU3BhbiwgU3ltYm9sLCBTeW1ib2xUYWJsZSwgVGVtcGxhdGVTb3VyY2V9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtpblNwYW4sIGlzTmFycm93ZXJ9IGZyb20gJy4vdXRpbHMnO1xuXG50eXBlIEFzdFBhdGggPSBBc3RQYXRoQmFzZTxBU1Q+O1xuXG5mdW5jdGlvbiBmaW5kQXN0QXQoYXN0OiBBU1QsIHBvc2l0aW9uOiBudW1iZXIsIGV4Y2x1ZGVFbXB0eTogYm9vbGVhbiA9IGZhbHNlKTogQXN0UGF0aCB7XG4gIGNvbnN0IHBhdGg6IEFTVFtdID0gW107XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgY2xhc3MgZXh0ZW5kcyBSZWN1cnNpdmVBc3RWaXNpdG9yIHtcbiAgICB2aXNpdChhc3Q6IEFTVCkge1xuICAgICAgaWYgKCghZXhjbHVkZUVtcHR5IHx8IGFzdC5zb3VyY2VTcGFuLnN0YXJ0IDwgYXN0LnNvdXJjZVNwYW4uZW5kKSAmJlxuICAgICAgICAgIGluU3Bhbihwb3NpdGlvbiwgYXN0LnNvdXJjZVNwYW4pKSB7XG4gICAgICAgIGNvbnN0IGlzTm90TmFycm93ZXIgPSBwYXRoLmxlbmd0aCAmJiAhaXNOYXJyb3dlcihhc3Quc3BhbiwgcGF0aFtwYXRoLmxlbmd0aCAtIDFdLnNwYW4pO1xuICAgICAgICBpZiAoIWlzTm90TmFycm93ZXIpIHtcbiAgICAgICAgICBwYXRoLnB1c2goYXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhc3QudmlzaXQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFdlIG5ldmVyIGNhcmUgYWJvdXQgdGhlIEFTVFdpdGhTb3VyY2Ugbm9kZSBhbmQgaXRzIHZpc2l0KCkgbWV0aG9kIGNhbGxzIGl0cyBhc3QncyB2aXNpdCBzb1xuICAvLyB0aGUgdmlzaXQoKSBtZXRob2QgYWJvdmUgd291bGQgbmV2ZXIgc2VlIGl0LlxuICBpZiAoYXN0IGluc3RhbmNlb2YgQVNUV2l0aFNvdXJjZSkge1xuICAgIGFzdCA9IGFzdC5hc3Q7XG4gIH1cblxuICAvLyBgSW50ZXJwb2xhdGlvbmAgaXMgdXNlbGVzcyBoZXJlIGV4Y2VwdCB0aGUgYGV4cHJlc3Npb25zYCBvZiBpdC5cbiAgaWYgKGFzdCBpbnN0YW5jZW9mIEludGVycG9sYXRpb24pIHtcbiAgICBhc3QgPSBhc3QuZXhwcmVzc2lvbnMuZmlsdGVyKChfYXN0OiBBU1QpID0+IGluU3Bhbihwb3NpdGlvbiwgX2FzdC5zb3VyY2VTcGFuKSlbMF07XG4gIH1cblxuICBpZiAoYXN0KSB7XG4gICAgdmlzaXRvci52aXNpdChhc3QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBBc3RQYXRoQmFzZTxBU1Q+KHBhdGgsIHBvc2l0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cHJlc3Npb25Db21wbGV0aW9ucyhcbiAgICBzY29wZTogU3ltYm9sVGFibGUsIGFzdDogQVNULCBwb3NpdGlvbjogbnVtYmVyLCB0ZW1wbGF0ZUluZm86IFRlbXBsYXRlU291cmNlKTogU3ltYm9sW118XG4gICAgdW5kZWZpbmVkIHtcbiAgY29uc3QgcGF0aCA9IGZpbmRBc3RBdChhc3QsIHBvc2l0aW9uKTtcbiAgaWYgKHBhdGguZW1wdHkpIHJldHVybiB1bmRlZmluZWQ7XG4gIGNvbnN0IHRhaWwgPSBwYXRoLnRhaWwhO1xuICBsZXQgcmVzdWx0OiBTeW1ib2xUYWJsZXx1bmRlZmluZWQgPSBzY29wZTtcblxuICBmdW5jdGlvbiBnZXRUeXBlKGFzdDogQVNUKTogU3ltYm9sIHtcbiAgICByZXR1cm4gbmV3IEFzdFR5cGUoc2NvcGUsIHRlbXBsYXRlSW5mby5xdWVyeSwge30sIHRlbXBsYXRlSW5mby5zb3VyY2UpLmdldFR5cGUoYXN0KTtcbiAgfVxuXG4gIC8vIElmIHRoZSBjb21wbGV0aW9uIHJlcXVlc3QgaXMgaW4gYSBub3QgaW4gYSBwaXBlIG9yIHByb3BlcnR5IGFjY2VzcyB0aGVuIHRoZSBnbG9iYWwgc2NvcGVcbiAgLy8gKHRoYXQgaXMgdGhlIHNjb3BlIG9mIHRoZSBpbXBsaWNpdCByZWNlaXZlcikgaXMgdGhlIHJpZ2h0IHNjb3BlIGFzIHRoZSB1c2VyIGlzIHR5cGluZyB0aGVcbiAgLy8gYmVnaW5uaW5nIG9mIGFuIGV4cHJlc3Npb24uXG4gIHRhaWwudmlzaXQoe1xuICAgIHZpc2l0VW5hcnkoX2FzdCkge30sXG4gICAgdmlzaXRCaW5hcnkoX2FzdCkge30sXG4gICAgdmlzaXRDaGFpbihfYXN0KSB7fSxcbiAgICB2aXNpdENvbmRpdGlvbmFsKF9hc3QpIHt9LFxuICAgIHZpc2l0RnVuY3Rpb25DYWxsKF9hc3QpIHt9LFxuICAgIHZpc2l0SW1wbGljaXRSZWNlaXZlcihfYXN0KSB7fSxcbiAgICB2aXNpdFRoaXNSZWNlaXZlcihfYXN0KSB7fSxcbiAgICB2aXNpdEludGVycG9sYXRpb24oX2FzdCkge1xuICAgICAgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgdmlzaXRLZXllZFJlYWQoX2FzdCkge30sXG4gICAgdmlzaXRLZXllZFdyaXRlKF9hc3QpIHt9LFxuICAgIHZpc2l0TGl0ZXJhbEFycmF5KF9hc3QpIHt9LFxuICAgIHZpc2l0TGl0ZXJhbE1hcChfYXN0KSB7fSxcbiAgICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0KSB7XG4gICAgICAvLyBUaGUgdHlwZSBgTGl0ZXJhbFByaW1pdGl2ZWAgaW5jbHVkZSB0aGUgYEVSUk9SYCwgYW5kIGl0J3Mgd3JhcHBlZCBhcyBgc3RyaW5nYC5cbiAgICAgIC8vIHBhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZV9wYXJzZXIvYmluZGluZ19wYXJzZXIudHMjTDMwOFxuICAgICAgLy8gU28gZXhjbHVkZSB0aGUgYEVSUk9SYCBoZXJlLlxuICAgICAgaWYgKHR5cGVvZiBhc3QudmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgYXN0LnZhbHVlID09PVxuICAgICAgICAgICAgICB0ZW1wbGF0ZUluZm8uc291cmNlLnNsaWNlKGFzdC5zb3VyY2VTcGFuLnN0YXJ0ICsgMSwgYXN0LnNvdXJjZVNwYW4uZW5kIC0gMSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmlzaXRNZXRob2RDYWxsKF9hc3QpIHt9LFxuICAgIHZpc2l0UGlwZShhc3QpIHtcbiAgICAgIGlmIChwb3NpdGlvbiA+PSBhc3QuZXhwLnNwYW4uZW5kICYmXG4gICAgICAgICAgKCFhc3QuYXJncyB8fCAhYXN0LmFyZ3MubGVuZ3RoIHx8IHBvc2l0aW9uIDwgKDxBU1Q+YXN0LmFyZ3NbMF0pLnNwYW4uc3RhcnQpKSB7XG4gICAgICAgIC8vIFdlIGFyZSBpbiBhIHBvc2l0aW9uIGEgcGlwZSBuYW1lIGlzIGV4cGVjdGVkLlxuICAgICAgICByZXN1bHQgPSB0ZW1wbGF0ZUluZm8ucXVlcnkuZ2V0UGlwZXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpc2l0UHJlZml4Tm90KF9hc3QpIHt9LFxuICAgIHZpc2l0Tm9uTnVsbEFzc2VydChfYXN0KSB7fSxcbiAgICB2aXNpdFByb3BlcnR5UmVhZChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICAgIHZpc2l0UHJvcGVydHlXcml0ZShhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICAgIHZpc2l0UXVvdGUoX2FzdCkge1xuICAgICAgLy8gRm9yIGEgcXVvdGUsIHJldHVybiB0aGUgbWVtYmVycyBvZiBhbnkgKGlmIHRoZXJlIGFyZSBhbnkpLlxuICAgICAgcmVzdWx0ID0gdGVtcGxhdGVJbmZvLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSkubWVtYmVycygpO1xuICAgIH0sXG4gICAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICAgIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHJlc3VsdCA9IHJlY2VpdmVyVHlwZSA/IHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkgOiBzY29wZTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC52YWx1ZXMoKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGV4cHJlc3Npb24gc3ltYm9sIGF0IGEgcGFydGljdWxhciBwb3NpdGlvbiBpbiBhIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBzY29wZSBzeW1ib2xzIGluIHNjb3BlIG9mIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIGFzdCB0ZW1wbGF0ZSBBU1RcbiAqIEBwYXJhbSBwb3NpdGlvbiBhYnNvbHV0ZSBsb2NhdGlvbiBpbiB0ZW1wbGF0ZSB0byByZXRyaWV2ZSBzeW1ib2wgYXRcbiAqIEBwYXJhbSBxdWVyeSB0eXBlIHN5bWJvbCBxdWVyeSBmb3IgdGhlIHRlbXBsYXRlIHNjb3BlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHByZXNzaW9uU3ltYm9sKFxuICAgIHNjb3BlOiBTeW1ib2xUYWJsZSwgYXN0OiBBU1QsIHBvc2l0aW9uOiBudW1iZXIsXG4gICAgdGVtcGxhdGVJbmZvOiBUZW1wbGF0ZVNvdXJjZSk6IHtzeW1ib2w6IFN5bWJvbCwgc3BhbjogU3Bhbn18dW5kZWZpbmVkIHtcbiAgY29uc3QgcGF0aCA9IGZpbmRBc3RBdChhc3QsIHBvc2l0aW9uLCAvKiBleGNsdWRlRW1wdHkgKi8gdHJ1ZSk7XG4gIGlmIChwYXRoLmVtcHR5KSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCB0YWlsID0gcGF0aC50YWlsITtcblxuICBmdW5jdGlvbiBnZXRUeXBlKGFzdDogQVNUKTogU3ltYm9sIHtcbiAgICByZXR1cm4gbmV3IEFzdFR5cGUoc2NvcGUsIHRlbXBsYXRlSW5mby5xdWVyeSwge30sIHRlbXBsYXRlSW5mby5zb3VyY2UpLmdldFR5cGUoYXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwYW5Gcm9tTmFtZShhc3Q6IEFTVFdpdGhOYW1lKTogU3BhbiB7XG4gICAgLy8gYG5hbWVTcGFuYCBpcyBhbiBhYnNvbHV0ZSBzcGFuLCBidXQgdGhlIHNwYW4gZXhwZWN0ZWQgYnkgdGhlIHJlc3VsdCBvZiB0aGlzIG1ldGhvZCBpc1xuICAgIC8vIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgZXhwcmVzc2lvbi5cbiAgICAvLyBUT0RPKGF5YXpoYWZpeik6IG1pZ3JhdGUgdG8gb25seSB1c2luZyBhYnNvbHV0ZSBzcGFuc1xuICAgIGNvbnN0IG9mZnNldCA9IGFzdC5zb3VyY2VTcGFuLnN0YXJ0IC0gYXN0LnNwYW4uc3RhcnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBhc3QubmFtZVNwYW4uc3RhcnQgLSBvZmZzZXQsXG4gICAgICBlbmQ6IGFzdC5uYW1lU3Bhbi5lbmQgLSBvZmZzZXQsXG4gICAgfTtcbiAgfVxuXG4gIGxldCBzeW1ib2w6IFN5bWJvbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGxldCBzcGFuOiBTcGFufHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvLyBJZiB0aGUgY29tcGxldGlvbiByZXF1ZXN0IGlzIGluIGEgbm90IGluIGEgcGlwZSBvciBwcm9wZXJ0eSBhY2Nlc3MgdGhlbiB0aGUgZ2xvYmFsIHNjb3BlXG4gIC8vICh0aGF0IGlzIHRoZSBzY29wZSBvZiB0aGUgaW1wbGljaXQgcmVjZWl2ZXIpIGlzIHRoZSByaWdodCBzY29wZSBhcyB0aGUgdXNlciBpcyB0eXBpbmcgdGhlXG4gIC8vIGJlZ2lubmluZyBvZiBhbiBleHByZXNzaW9uLlxuICB0YWlsLnZpc2l0KHtcbiAgICB2aXNpdFVuYXJ5KF9hc3QpIHt9LFxuICAgIHZpc2l0QmluYXJ5KF9hc3QpIHt9LFxuICAgIHZpc2l0Q2hhaW4oX2FzdCkge30sXG4gICAgdmlzaXRDb25kaXRpb25hbChfYXN0KSB7fSxcbiAgICB2aXNpdEZ1bmN0aW9uQ2FsbChfYXN0KSB7fSxcbiAgICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoX2FzdCkge30sXG4gICAgdmlzaXRUaGlzUmVjZWl2ZXIoX2FzdCkge30sXG4gICAgdmlzaXRJbnRlcnBvbGF0aW9uKF9hc3QpIHt9LFxuICAgIHZpc2l0S2V5ZWRSZWFkKF9hc3QpIHt9LFxuICAgIHZpc2l0S2V5ZWRXcml0ZShfYXN0KSB7fSxcbiAgICB2aXNpdExpdGVyYWxBcnJheShfYXN0KSB7fSxcbiAgICB2aXNpdExpdGVyYWxNYXAoX2FzdCkge30sXG4gICAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKF9hc3QpIHt9LFxuICAgIHZpc2l0TWV0aG9kQ2FsbChhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHN5bWJvbCA9IHJlY2VpdmVyVHlwZSAmJiByZWNlaXZlclR5cGUubWVtYmVycygpLmdldChhc3QubmFtZSk7XG4gICAgICBzcGFuID0gc3BhbkZyb21OYW1lKGFzdCk7XG4gICAgfSxcbiAgICB2aXNpdFBpcGUoYXN0KSB7XG4gICAgICBpZiAoaW5TcGFuKHBvc2l0aW9uLCBhc3QubmFtZVNwYW4sIC8qIGV4Y2x1c2l2ZSAqLyB0cnVlKSkge1xuICAgICAgICAvLyBXZSBhcmUgaW4gYSBwb3NpdGlvbiBhIHBpcGUgbmFtZSBpcyBleHBlY3RlZC5cbiAgICAgICAgY29uc3QgcGlwZXMgPSB0ZW1wbGF0ZUluZm8ucXVlcnkuZ2V0UGlwZXMoKTtcbiAgICAgICAgc3ltYm9sID0gcGlwZXMuZ2V0KGFzdC5uYW1lKTtcbiAgICAgICAgc3BhbiA9IHNwYW5Gcm9tTmFtZShhc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmlzaXRQcmVmaXhOb3QoX2FzdCkge30sXG4gICAgdmlzaXROb25OdWxsQXNzZXJ0KF9hc3QpIHt9LFxuICAgIHZpc2l0UHJvcGVydHlSZWFkKGFzdCkge1xuICAgICAgY29uc3QgcmVjZWl2ZXJUeXBlID0gZ2V0VHlwZShhc3QucmVjZWl2ZXIpO1xuICAgICAgc3ltYm9sID0gcmVjZWl2ZXJUeXBlICYmIHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkuZ2V0KGFzdC5uYW1lKTtcbiAgICAgIHNwYW4gPSBzcGFuRnJvbU5hbWUoYXN0KTtcbiAgICB9LFxuICAgIHZpc2l0UHJvcGVydHlXcml0ZShhc3QpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyVHlwZSA9IGdldFR5cGUoYXN0LnJlY2VpdmVyKTtcbiAgICAgIHN5bWJvbCA9IHJlY2VpdmVyVHlwZSAmJiByZWNlaXZlclR5cGUubWVtYmVycygpLmdldChhc3QubmFtZSk7XG4gICAgICBzcGFuID0gc3BhbkZyb21OYW1lKGFzdCk7XG4gICAgfSxcbiAgICB2aXNpdFF1b3RlKF9hc3QpIHt9LFxuICAgIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0KSB7XG4gICAgICBjb25zdCByZWNlaXZlclR5cGUgPSBnZXRUeXBlKGFzdC5yZWNlaXZlcik7XG4gICAgICBzeW1ib2wgPSByZWNlaXZlclR5cGUgJiYgcmVjZWl2ZXJUeXBlLm1lbWJlcnMoKS5nZXQoYXN0Lm5hbWUpO1xuICAgICAgc3BhbiA9IHNwYW5Gcm9tTmFtZShhc3QpO1xuICAgIH0sXG4gICAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdCkge1xuICAgICAgY29uc3QgcmVjZWl2ZXJUeXBlID0gZ2V0VHlwZShhc3QucmVjZWl2ZXIpO1xuICAgICAgc3ltYm9sID0gcmVjZWl2ZXJUeXBlICYmIHJlY2VpdmVyVHlwZS5tZW1iZXJzKCkuZ2V0KGFzdC5uYW1lKTtcbiAgICAgIHNwYW4gPSBzcGFuRnJvbU5hbWUoYXN0KTtcbiAgICB9LFxuICB9KTtcblxuICBpZiAoc3ltYm9sICYmIHNwYW4pIHtcbiAgICByZXR1cm4ge3N5bWJvbCwgc3Bhbn07XG4gIH1cbn1cbiJdfQ==