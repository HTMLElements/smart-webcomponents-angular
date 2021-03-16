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
        define("@angular/language-service/src/expression_type", ["require", "exports", "tslib", "@angular/compiler", "@angular/language-service/src/diagnostic_messages", "@angular/language-service/src/symbols", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AstType = void 0;
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var diagnostic_messages_1 = require("@angular/language-service/src/diagnostic_messages");
    var symbols_1 = require("@angular/language-service/src/symbols");
    var utils_1 = require("@angular/language-service/src/utils");
    // AstType calculatetype of the ast given AST element.
    var AstType = /** @class */ (function () {
        function AstType(scope, query, context, source) {
            this.scope = scope;
            this.query = query;
            this.context = context;
            this.source = source;
            this.diagnostics = [];
        }
        AstType.prototype.getType = function (ast) {
            return ast.visit(this);
        };
        AstType.prototype.getDiagnostics = function (ast) {
            var type = ast.visit(this);
            if (this.context.inEvent && type.callable) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.callable_expression_expected_method_call));
            }
            return this.diagnostics;
        };
        AstType.prototype.visitUnary = function (ast) {
            // Visit the child to produce diagnostics.
            ast.expr.visit(this);
            // The unary plus and minus operator are always of type number.
            // https://github.com/Microsoft/TypeScript/blob/v1.8.10/doc/spec.md#4.18
            switch (ast.operator) {
                case '-':
                case '+':
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Number);
            }
            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.unrecognized_operator, ast.operator));
            return this.anyType;
        };
        AstType.prototype.visitBinary = function (ast) {
            var _this_1 = this;
            var getType = function (ast, operation) {
                var type = _this_1.getType(ast);
                if (type.nullable) {
                    switch (operation) {
                        case '&&':
                        case '||':
                        case '==':
                        case '!=':
                        case '===':
                        case '!==':
                            // Nullable allowed.
                            break;
                        default:
                            _this_1.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.expression_might_be_null));
                            break;
                    }
                }
                return type;
            };
            var leftType = getType(ast.left, ast.operation);
            var rightType = getType(ast.right, ast.operation);
            var leftKind = this.query.getTypeKind(leftType);
            var rightKind = this.query.getTypeKind(rightType);
            // The following swtich implements operator typing similar to the
            // type production tables in the TypeScript specification.
            // https://github.com/Microsoft/TypeScript/blob/v1.8.10/doc/spec.md#4.19
            var operKind = leftKind << 8 | rightKind;
            switch (ast.operation) {
                case '*':
                case '/':
                case '%':
                case '-':
                case '<<':
                case '>>':
                case '>>>':
                case '&':
                case '^':
                case '|':
                    switch (operKind) {
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Number:
                            return this.query.getBuiltinType(symbols_1.BuiltinType.Number);
                        default:
                            var errorAst = ast.left;
                            switch (leftKind) {
                                case symbols_1.BuiltinType.Any:
                                case symbols_1.BuiltinType.Number:
                                    errorAst = ast.right;
                                    break;
                            }
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(errorAst.span, diagnostic_messages_1.Diagnostic.expected_a_number_type));
                            return this.anyType;
                    }
                case '+':
                    switch (operKind) {
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Other:
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.Any:
                            return this.anyType;
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Other:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.String:
                            return this.query.getBuiltinType(symbols_1.BuiltinType.String);
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Number:
                            return this.query.getBuiltinType(symbols_1.BuiltinType.Number);
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.Number:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.left.span, diagnostic_messages_1.Diagnostic.expected_a_number_type));
                            return this.anyType;
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Other:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.right.span, diagnostic_messages_1.Diagnostic.expected_a_number_type));
                            return this.anyType;
                        default:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.expected_a_string_or_number_type));
                            return this.anyType;
                    }
                case '>':
                case '<':
                case '<=':
                case '>=':
                case '==':
                case '!=':
                case '===':
                case '!==':
                    if (!(leftKind & rightKind) &&
                        !((leftKind | rightKind) & (symbols_1.BuiltinType.Null | symbols_1.BuiltinType.Undefined))) {
                        // Two values are comparable only if
                        //   - they have some type overlap, or
                        //   - at least one is not defined
                        this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.expected_operands_of_comparable_types_or_any));
                    }
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Boolean);
                case '&&':
                    return rightType;
                case '||':
                    return this.query.getTypeUnion(leftType, rightType);
            }
            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.unrecognized_operator, ast.operation));
            return this.anyType;
        };
        AstType.prototype.visitChain = function (ast) {
            var e_1, _a;
            try {
                // If we are producing diagnostics, visit the children
                for (var _b = tslib_1.__values(ast.expressions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var expr = _c.value;
                    expr.visit(this);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // The type of a chain is always undefined.
            return this.query.getBuiltinType(symbols_1.BuiltinType.Undefined);
        };
        AstType.prototype.visitConditional = function (ast) {
            // The type of a conditional is the union of the true and false conditions.
            ast.condition.visit(this);
            ast.trueExp.visit(this);
            ast.falseExp.visit(this);
            return this.query.getTypeUnion(this.getType(ast.trueExp), this.getType(ast.falseExp));
        };
        AstType.prototype.visitFunctionCall = function (ast) {
            var _this_1 = this;
            // The type of a function call is the return type of the selected signature.
            // The signature is selected based on the types of the arguments. Angular doesn't
            // support contextual typing of arguments so this is simpler than TypeScript's
            // version.
            var args = ast.args.map(function (arg) { return _this_1.getType(arg); });
            var target = this.getType(ast.target);
            if (!target || !target.callable) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.call_target_not_callable, this.sourceOf(ast.target), target.name));
                return this.anyType;
            }
            var signature = target.selectSignature(args);
            if (signature) {
                return signature.result;
            }
            // TODO: Consider a better error message here. See `typescript_symbols#selectSignature` for more
            // details.
            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.unable_to_resolve_compatible_call_signature));
            return this.anyType;
        };
        AstType.prototype.visitImplicitReceiver = function (_ast) {
            var _this = this;
            // Return a pseudo-symbol for the implicit receiver.
            // The members of the implicit receiver are what is defined by the
            // scope passed into this class.
            return {
                name: '$implicit',
                kind: 'component',
                language: 'ng-template',
                type: undefined,
                container: undefined,
                callable: false,
                nullable: false,
                public: true,
                definition: undefined,
                documentation: [],
                members: function () {
                    return _this.scope;
                },
                signatures: function () {
                    return [];
                },
                selectSignature: function (_types) {
                    return undefined;
                },
                indexed: function (_argument) {
                    return undefined;
                },
                typeArguments: function () {
                    return undefined;
                },
            };
        };
        AstType.prototype.visitThisReceiver = function (_ast) {
            return this.visitImplicitReceiver(_ast);
        };
        AstType.prototype.visitInterpolation = function (ast) {
            var e_2, _a;
            try {
                // If we are producing diagnostics, visit the children.
                for (var _b = tslib_1.__values(ast.expressions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var expr = _c.value;
                    expr.visit(this);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return this.undefinedType;
        };
        AstType.prototype.visitKeyedRead = function (ast) {
            var targetType = this.getType(ast.obj);
            var keyType = this.getType(ast.key);
            var result = targetType.indexed(keyType, ast.key instanceof compiler_1.LiteralPrimitive ? ast.key.value : undefined);
            return result || this.anyType;
        };
        AstType.prototype.visitKeyedWrite = function (ast) {
            // The write of a type is the type of the value being written.
            return this.getType(ast.value);
        };
        AstType.prototype.visitLiteralArray = function (ast) {
            var _a;
            var _this_1 = this;
            // A type literal is an array type of the union of the elements
            return this.query.getArrayType((_a = this.query).getTypeUnion.apply(_a, tslib_1.__spread(ast.expressions.map(function (element) { return _this_1.getType(element); }))));
        };
        AstType.prototype.visitLiteralMap = function (ast) {
            var e_3, _a;
            try {
                // If we are producing diagnostics, visit the children
                for (var _b = tslib_1.__values(ast.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
                    value.visit(this);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // TODO: Return a composite type.
            return this.anyType;
        };
        AstType.prototype.visitLiteralPrimitive = function (ast) {
            // The type of a literal primitive depends on the value of the literal.
            switch (ast.value) {
                case true:
                case false:
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Boolean);
                case null:
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Null);
                case undefined:
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Undefined);
                default:
                    switch (typeof ast.value) {
                        case 'string':
                            return this.query.getBuiltinType(symbols_1.BuiltinType.String);
                        case 'number':
                            return this.query.getBuiltinType(symbols_1.BuiltinType.Number);
                        default:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.unrecognized_primitive, typeof ast.value));
                            return this.anyType;
                    }
            }
        };
        AstType.prototype.visitMethodCall = function (ast) {
            return this.resolveMethodCall(this.getType(ast.receiver), ast);
        };
        AstType.prototype.visitPipe = function (ast) {
            var _this_1 = this;
            // The type of a pipe node is the return type of the pipe's transform method. The table returned
            // by getPipes() is expected to contain symbols with the corresponding transform method type.
            var pipe = this.query.getPipes().get(ast.name);
            if (!pipe) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.no_pipe_found, ast.name));
                return this.anyType;
            }
            var expType = this.getType(ast.exp);
            var signature = pipe.selectSignature([expType].concat(ast.args.map(function (arg) { return _this_1.getType(arg); })));
            if (!signature) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.unable_to_resolve_signature, ast.name));
                return this.anyType;
            }
            return signature.result;
        };
        AstType.prototype.visitPrefixNot = function (ast) {
            // If we are producing diagnostics, visit the children
            ast.expression.visit(this);
            // The type of a prefix ! is always boolean.
            return this.query.getBuiltinType(symbols_1.BuiltinType.Boolean);
        };
        AstType.prototype.visitNonNullAssert = function (ast) {
            var expressionType = this.getType(ast.expression);
            return this.query.getNonNullableType(expressionType);
        };
        AstType.prototype.visitPropertyRead = function (ast) {
            return this.resolvePropertyRead(this.getType(ast.receiver), ast);
        };
        AstType.prototype.visitPropertyWrite = function (ast) {
            // The type of a write is the type of the value being written.
            return this.getType(ast.value);
        };
        AstType.prototype.visitQuote = function (_ast) {
            // The type of a quoted expression is any.
            return this.query.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        AstType.prototype.visitSafeMethodCall = function (ast) {
            return this.resolveMethodCall(this.query.getNonNullableType(this.getType(ast.receiver)), ast);
        };
        AstType.prototype.visitSafePropertyRead = function (ast) {
            return this.resolvePropertyRead(this.query.getNonNullableType(this.getType(ast.receiver)), ast);
        };
        /**
         * Gets the source of an expession AST.
         * The AST's sourceSpan is relative to the start of the template source code, which is contained
         * at this.source.
         */
        AstType.prototype.sourceOf = function (ast) {
            return this.source.substring(ast.sourceSpan.start, ast.sourceSpan.end);
        };
        Object.defineProperty(AstType.prototype, "anyType", {
            get: function () {
                var result = this._anyType;
                if (!result) {
                    result = this._anyType = this.query.getBuiltinType(symbols_1.BuiltinType.Any);
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AstType.prototype, "undefinedType", {
            get: function () {
                var result = this._undefinedType;
                if (!result) {
                    result = this._undefinedType = this.query.getBuiltinType(symbols_1.BuiltinType.Undefined);
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
        AstType.prototype.resolveMethodCall = function (receiverType, ast) {
            var _this_1 = this;
            if (this.isAny(receiverType)) {
                return this.anyType;
            }
            var methodType = this.resolvePropertyRead(receiverType, ast);
            if (!methodType) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.could_not_resolve_type, ast.name));
                return this.anyType;
            }
            if (this.isAny(methodType)) {
                return this.anyType;
            }
            if (!methodType.callable) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.identifier_not_callable, ast.name));
                return this.anyType;
            }
            var signature = methodType.selectSignature(ast.args.map(function (arg) { return _this_1.getType(arg); }));
            if (!signature) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.unable_to_resolve_signature, ast.name));
                return this.anyType;
            }
            return signature.result;
        };
        AstType.prototype.resolvePropertyRead = function (receiverType, ast) {
            if (this.isAny(receiverType)) {
                return this.anyType;
            }
            // The type of a property read is the seelcted member's type.
            var member = receiverType.members().get(ast.name);
            if (!member) {
                if (receiverType.name === '$implicit') {
                    this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.identifier_not_defined_in_app_context, ast.name));
                }
                else if (receiverType.nullable && ast.receiver instanceof compiler_1.PropertyRead) {
                    var receiver = ast.receiver.name;
                    this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.identifier_possibly_undefined, receiver, receiver + "?." + ast.name, receiver + "!." + ast.name));
                }
                else {
                    this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.identifier_not_defined_on_receiver, ast.name, receiverType.name));
                }
                return this.anyType;
            }
            if (!member.public) {
                var container = receiverType.name === '$implicit' ? 'the component' : "'" + receiverType.name + "'";
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(refinedSpan(ast), diagnostic_messages_1.Diagnostic.identifier_is_private, ast.name, container));
            }
            return member.type;
        };
        AstType.prototype.isAny = function (symbol) {
            return !symbol || this.query.getTypeKind(symbol) === symbols_1.BuiltinType.Any ||
                (!!symbol.type && this.isAny(symbol.type));
        };
        return AstType;
    }());
    exports.AstType = AstType;
    function refinedSpan(ast) {
        // nameSpan is an absolute span, but the spans returned by the expression visitor are expected to
        // be relative to the start of the expression.
        // TODO: migrate to only using absolute spans
        var absoluteOffset = ast.sourceSpan.start - ast.span.start;
        if (ast instanceof compiler_1.ASTWithName) {
            return utils_1.offsetSpan(ast.nameSpan, -absoluteOffset);
        }
        return utils_1.offsetSpan(ast.sourceSpan, -absoluteOffset);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbl90eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvZXhwcmVzc2lvbl90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBMlY7SUFFM1YseUZBQW1FO0lBQ25FLGlFQUFtRjtJQUVuRiw2REFBbUM7SUFNbkMsc0RBQXNEO0lBQ3REO1FBR0UsaUJBQ1ksS0FBa0IsRUFBVSxLQUFrQixFQUM5QyxPQUFxQyxFQUFVLE1BQWM7WUFEN0QsVUFBSyxHQUFMLEtBQUssQ0FBYTtZQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7WUFDOUMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBSnhELGdCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUl5QixDQUFDO1FBRTdFLHlCQUFPLEdBQVAsVUFBUSxHQUFRO1lBQ2QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxnQ0FBYyxHQUFkLFVBQWUsR0FBUTtZQUNyQixJQUFNLElBQUksR0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLHNDQUFnQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxnQ0FBVSxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQzthQUM5RjtZQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBRUQsNEJBQVUsR0FBVixVQUFXLEdBQVU7WUFDbkIsMENBQTBDO1lBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FB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LEVBQUU7WUFDOUIsT0FBTyxrQkFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sa0JBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FTVCwgQXN0VmlzaXRvciwgQVNUV2l0aE5hbWUsIEJpbmFyeSwgQmluZGluZ1BpcGUsIENoYWluLCBDb25kaXRpb25hbCwgRnVuY3Rpb25DYWxsLCBJbXBsaWNpdFJlY2VpdmVyLCBJbnRlcnBvbGF0aW9uLCBLZXllZFJlYWQsIEtleWVkV3JpdGUsIExpdGVyYWxBcnJheSwgTGl0ZXJhbE1hcCwgTGl0ZXJhbFByaW1pdGl2ZSwgTWV0aG9kQ2FsbCwgTm9uTnVsbEFzc2VydCwgUHJlZml4Tm90LCBQcm9wZXJ0eVJlYWQsIFByb3BlcnR5V3JpdGUsIFF1b3RlLCBTYWZlTWV0aG9kQ2FsbCwgU2FmZVByb3BlcnR5UmVhZCwgVGhpc1JlY2VpdmVyLCBVbmFyeX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5pbXBvcnQge2NyZWF0ZURpYWdub3N0aWMsIERpYWdub3N0aWN9IGZyb20gJy4vZGlhZ25vc3RpY19tZXNzYWdlcyc7XG5pbXBvcnQge0J1aWx0aW5UeXBlLCBTaWduYXR1cmUsIFN5bWJvbCwgU3ltYm9sUXVlcnksIFN5bWJvbFRhYmxlfSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0ICogYXMgbmcgZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge29mZnNldFNwYW59IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgRXhwcmVzc2lvbkRpYWdub3N0aWNzQ29udGV4dCB7XG4gIGluRXZlbnQ/OiBib29sZWFuO1xufVxuXG4vLyBBc3RUeXBlIGNhbGN1bGF0ZXR5cGUgb2YgdGhlIGFzdCBnaXZlbiBBU1QgZWxlbWVudC5cbmV4cG9ydCBjbGFzcyBBc3RUeXBlIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGlhZ25vc3RpY3M6IG5nLkRpYWdub3N0aWNbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzY29wZTogU3ltYm9sVGFibGUsIHByaXZhdGUgcXVlcnk6IFN5bWJvbFF1ZXJ5LFxuICAgICAgcHJpdmF0ZSBjb250ZXh0OiBFeHByZXNzaW9uRGlhZ25vc3RpY3NDb250ZXh0LCBwcml2YXRlIHNvdXJjZTogc3RyaW5nKSB7fVxuXG4gIGdldFR5cGUoYXN0OiBBU1QpOiBTeW1ib2wge1xuICAgIHJldHVybiBhc3QudmlzaXQodGhpcyk7XG4gIH1cblxuICBnZXREaWFnbm9zdGljcyhhc3Q6IEFTVCk6IG5nLkRpYWdub3N0aWNbXSB7XG4gICAgY29uc3QgdHlwZTogU3ltYm9sID0gYXN0LnZpc2l0KHRoaXMpO1xuICAgIGlmICh0aGlzLmNvbnRleHQuaW5FdmVudCAmJiB0eXBlLmNhbGxhYmxlKSB7XG4gICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goXG4gICAgICAgICAgY3JlYXRlRGlhZ25vc3RpYyhyZWZpbmVkU3Bhbihhc3QpLCBEaWFnbm9zdGljLmNhbGxhYmxlX2V4cHJlc3Npb25fZXhwZWN0ZWRfbWV0aG9kX2NhbGwpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGlhZ25vc3RpY3M7XG4gIH1cblxuICB2aXNpdFVuYXJ5KGFzdDogVW5hcnkpOiBTeW1ib2wge1xuICAgIC8vIFZpc2l0IHRoZSBjaGlsZCB0byBwcm9kdWNlIGRpYWdub3N0aWNzLlxuICAgIGFzdC5leHByLnZpc2l0KHRoaXMpO1xuXG4gICAgLy8gVGhlIHVuYXJ5IHBsdXMgYW5kIG1pbnVzIG9wZXJhdG9yIGFyZSBhbHdheXMgb2YgdHlwZSBudW1iZXIuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2Jsb2IvdjEuOC4xMC9kb2Mvc3BlYy5tZCM0LjE4XG4gICAgc3dpdGNoIChhc3Qub3BlcmF0b3IpIHtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLk51bWJlcik7XG4gICAgfVxuXG4gICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKFxuICAgICAgICBjcmVhdGVEaWFnbm9zdGljKHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMudW5yZWNvZ25pemVkX29wZXJhdG9yLCBhc3Qub3BlcmF0b3IpKTtcbiAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICB9XG5cbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnkpOiBTeW1ib2wge1xuICAgIGNvbnN0IGdldFR5cGUgPSAoYXN0OiBBU1QsIG9wZXJhdGlvbjogc3RyaW5nKTogU3ltYm9sID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoYXN0KTtcbiAgICAgIGlmICh0eXBlLm51bGxhYmxlKSB7XG4gICAgICAgIHN3aXRjaCAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgY2FzZSAnJiYnOlxuICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgIC8vIE51bGxhYmxlIGFsbG93ZWQuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKFxuICAgICAgICAgICAgICAgIGNyZWF0ZURpYWdub3N0aWMocmVmaW5lZFNwYW4oYXN0KSwgRGlhZ25vc3RpYy5leHByZXNzaW9uX21pZ2h0X2JlX251bGwpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGVmdFR5cGUgPSBnZXRUeXBlKGFzdC5sZWZ0LCBhc3Qub3BlcmF0aW9uKTtcbiAgICBjb25zdCByaWdodFR5cGUgPSBnZXRUeXBlKGFzdC5yaWdodCwgYXN0Lm9wZXJhdGlvbik7XG4gICAgY29uc3QgbGVmdEtpbmQgPSB0aGlzLnF1ZXJ5LmdldFR5cGVLaW5kKGxlZnRUeXBlKTtcbiAgICBjb25zdCByaWdodEtpbmQgPSB0aGlzLnF1ZXJ5LmdldFR5cGVLaW5kKHJpZ2h0VHlwZSk7XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIHN3dGljaCBpbXBsZW1lbnRzIG9wZXJhdG9yIHR5cGluZyBzaW1pbGFyIHRvIHRoZVxuICAgIC8vIHR5cGUgcHJvZHVjdGlvbiB0YWJsZXMgaW4gdGhlIFR5cGVTY3JpcHQgc3BlY2lmaWNhdGlvbi5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi92MS44LjEwL2RvYy9zcGVjLm1kIzQuMTlcbiAgICBjb25zdCBvcGVyS2luZCA9IGxlZnRLaW5kIDw8IDggfCByaWdodEtpbmQ7XG4gICAgc3dpdGNoIChhc3Qub3BlcmF0aW9uKSB7XG4gICAgICBjYXNlICcqJzpcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICctJzpcbiAgICAgIGNhc2UgJzw8JzpcbiAgICAgIGNhc2UgJz4+JzpcbiAgICAgIGNhc2UgJz4+Pic6XG4gICAgICBjYXNlICcmJzpcbiAgICAgIGNhc2UgJ14nOlxuICAgICAgY2FzZSAnfCc6XG4gICAgICAgIHN3aXRjaCAob3BlcktpbmQpIHtcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5Bbnk6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5BbnkgPDwgOCB8IEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bWJlciA8PCA4IHwgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuTnVtYmVyKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGVycm9yQXN0ID0gYXN0LmxlZnQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGxlZnRLaW5kKSB7XG4gICAgICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICBlcnJvckFzdCA9IGFzdC5yaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGVycm9yQXN0LnNwYW4sIERpYWdub3N0aWMuZXhwZWN0ZWRfYV9udW1iZXJfdHlwZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIHN3aXRjaCAob3BlcktpbmQpIHtcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55IDw8IDggfCBCdWlsdGluVHlwZS5Cb29sZWFuOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55IDw8IDggfCBCdWlsdGluVHlwZS5OdW1iZXI6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5BbnkgPDwgOCB8IEJ1aWx0aW5UeXBlLk90aGVyOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQm9vbGVhbiA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5Bbnk6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5PdGhlciA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuU3RyaW5nOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQm9vbGVhbiA8PCA4IHwgQnVpbHRpblR5cGUuU3RyaW5nOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5TdHJpbmc6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5TdHJpbmcgPDwgOCB8IEJ1aWx0aW5UeXBlLkFueTpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLlN0cmluZyA8PCA4IHwgQnVpbHRpblR5cGUuQm9vbGVhbjpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLlN0cmluZyA8PCA4IHwgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuU3RyaW5nIDw8IDggfCBCdWlsdGluVHlwZS5TdHJpbmc6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5TdHJpbmcgPDwgOCB8IEJ1aWx0aW5UeXBlLk90aGVyOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuT3RoZXIgPDwgOCB8IEJ1aWx0aW5UeXBlLlN0cmluZzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLlN0cmluZyk7XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5OdW1iZXIgPDwgOCB8IEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLk51bWJlcik7XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5Cb29sZWFuIDw8IDggfCBCdWlsdGluVHlwZS5OdW1iZXI6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5PdGhlciA8PCA4IHwgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKFxuICAgICAgICAgICAgICAgIGNyZWF0ZURpYWdub3N0aWMoYXN0LmxlZnQuc3BhbiwgRGlhZ25vc3RpYy5leHBlY3RlZF9hX251bWJlcl90eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5Cb29sZWFuOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5PdGhlcjpcbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5yaWdodC5zcGFuLCBEaWFnbm9zdGljLmV4cGVjdGVkX2FfbnVtYmVyX3R5cGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMuZXhwZWN0ZWRfYV9zdHJpbmdfb3JfbnVtYmVyX3R5cGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJz4nOlxuICAgICAgY2FzZSAnPCc6XG4gICAgICBjYXNlICc8PSc6XG4gICAgICBjYXNlICc+PSc6XG4gICAgICBjYXNlICc9PSc6XG4gICAgICBjYXNlICchPSc6XG4gICAgICBjYXNlICc9PT0nOlxuICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgaWYgKCEobGVmdEtpbmQgJiByaWdodEtpbmQpICYmXG4gICAgICAgICAgICAhKChsZWZ0S2luZCB8IHJpZ2h0S2luZCkgJiAoQnVpbHRpblR5cGUuTnVsbCB8IEJ1aWx0aW5UeXBlLlVuZGVmaW5lZCkpKSB7XG4gICAgICAgICAgLy8gVHdvIHZhbHVlcyBhcmUgY29tcGFyYWJsZSBvbmx5IGlmXG4gICAgICAgICAgLy8gICAtIHRoZXkgaGF2ZSBzb21lIHR5cGUgb3ZlcmxhcCwgb3JcbiAgICAgICAgICAvLyAgIC0gYXQgbGVhc3Qgb25lIGlzIG5vdCBkZWZpbmVkXG4gICAgICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKGNyZWF0ZURpYWdub3N0aWMoXG4gICAgICAgICAgICAgIHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMuZXhwZWN0ZWRfb3BlcmFuZHNfb2ZfY29tcGFyYWJsZV90eXBlc19vcl9hbnkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5Cb29sZWFuKTtcbiAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgcmV0dXJuIHJpZ2h0VHlwZTtcbiAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0VHlwZVVuaW9uKGxlZnRUeXBlLCByaWdodFR5cGUpO1xuICAgIH1cblxuICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgY3JlYXRlRGlhZ25vc3RpYyhyZWZpbmVkU3Bhbihhc3QpLCBEaWFnbm9zdGljLnVucmVjb2duaXplZF9vcGVyYXRvciwgYXN0Lm9wZXJhdGlvbikpO1xuICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gIH1cblxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4pIHtcbiAgICAvLyBJZiB3ZSBhcmUgcHJvZHVjaW5nIGRpYWdub3N0aWNzLCB2aXNpdCB0aGUgY2hpbGRyZW5cbiAgICBmb3IgKGNvbnN0IGV4cHIgb2YgYXN0LmV4cHJlc3Npb25zKSB7XG4gICAgICBleHByLnZpc2l0KHRoaXMpO1xuICAgIH1cbiAgICAvLyBUaGUgdHlwZSBvZiBhIGNoYWluIGlzIGFsd2F5cyB1bmRlZmluZWQuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuVW5kZWZpbmVkKTtcbiAgfVxuXG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCkge1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgY29uZGl0aW9uYWwgaXMgdGhlIHVuaW9uIG9mIHRoZSB0cnVlIGFuZCBmYWxzZSBjb25kaXRpb25zLlxuICAgIGFzdC5jb25kaXRpb24udmlzaXQodGhpcyk7XG4gICAgYXN0LnRydWVFeHAudmlzaXQodGhpcyk7XG4gICAgYXN0LmZhbHNlRXhwLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldFR5cGVVbmlvbih0aGlzLmdldFR5cGUoYXN0LnRydWVFeHApLCB0aGlzLmdldFR5cGUoYXN0LmZhbHNlRXhwKSk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCkge1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgZnVuY3Rpb24gY2FsbCBpcyB0aGUgcmV0dXJuIHR5cGUgb2YgdGhlIHNlbGVjdGVkIHNpZ25hdHVyZS5cbiAgICAvLyBUaGUgc2lnbmF0dXJlIGlzIHNlbGVjdGVkIGJhc2VkIG9uIHRoZSB0eXBlcyBvZiB0aGUgYXJndW1lbnRzLiBBbmd1bGFyIGRvZXNuJ3RcbiAgICAvLyBzdXBwb3J0IGNvbnRleHR1YWwgdHlwaW5nIG9mIGFyZ3VtZW50cyBzbyB0aGlzIGlzIHNpbXBsZXIgdGhhbiBUeXBlU2NyaXB0J3NcbiAgICAvLyB2ZXJzaW9uLlxuICAgIGNvbnN0IGFyZ3MgPSBhc3QuYXJncy5tYXAoYXJnID0+IHRoaXMuZ2V0VHlwZShhcmcpKTtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmdldFR5cGUoYXN0LnRhcmdldCEpO1xuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2FsbGFibGUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKFxuICAgICAgICAgIHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMuY2FsbF90YXJnZXRfbm90X2NhbGxhYmxlLCB0aGlzLnNvdXJjZU9mKGFzdC50YXJnZXQhKSxcbiAgICAgICAgICB0YXJnZXQubmFtZSkpO1xuICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICB9XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGFyZ2V0LnNlbGVjdFNpZ25hdHVyZShhcmdzKTtcbiAgICBpZiAoc2lnbmF0dXJlKSB7XG4gICAgICByZXR1cm4gc2lnbmF0dXJlLnJlc3VsdDtcbiAgICB9XG4gICAgLy8gVE9ETzogQ29uc2lkZXIgYSBiZXR0ZXIgZXJyb3IgbWVzc2FnZSBoZXJlLiBTZWUgYHR5cGVzY3JpcHRfc3ltYm9scyNzZWxlY3RTaWduYXR1cmVgIGZvciBtb3JlXG4gICAgLy8gZGV0YWlscy5cbiAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goXG4gICAgICAgIGNyZWF0ZURpYWdub3N0aWMocmVmaW5lZFNwYW4oYXN0KSwgRGlhZ25vc3RpYy51bmFibGVfdG9fcmVzb2x2ZV9jb21wYXRpYmxlX2NhbGxfc2lnbmF0dXJlKSk7XG4gICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgfVxuXG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihfYXN0OiBJbXBsaWNpdFJlY2VpdmVyKTogU3ltYm9sIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgLy8gUmV0dXJuIGEgcHNldWRvLXN5bWJvbCBmb3IgdGhlIGltcGxpY2l0IHJlY2VpdmVyLlxuICAgIC8vIFRoZSBtZW1iZXJzIG9mIHRoZSBpbXBsaWNpdCByZWNlaXZlciBhcmUgd2hhdCBpcyBkZWZpbmVkIGJ5IHRoZVxuICAgIC8vIHNjb3BlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3MuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICckaW1wbGljaXQnLFxuICAgICAga2luZDogJ2NvbXBvbmVudCcsXG4gICAgICBsYW5ndWFnZTogJ25nLXRlbXBsYXRlJyxcbiAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICAgICAgY2FsbGFibGU6IGZhbHNlLFxuICAgICAgbnVsbGFibGU6IGZhbHNlLFxuICAgICAgcHVibGljOiB0cnVlLFxuICAgICAgZGVmaW5pdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZG9jdW1lbnRhdGlvbjogW10sXG4gICAgICBtZW1iZXJzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNjb3BlO1xuICAgICAgfSxcbiAgICAgIHNpZ25hdHVyZXMoKTogU2lnbmF0dXJlW10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9LFxuICAgICAgc2VsZWN0U2lnbmF0dXJlKF90eXBlcyk6IFNpZ25hdHVyZSB8XG4gICAgICAgICAgdW5kZWZpbmVkIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfSxcbiAgICAgIGluZGV4ZWQoX2FyZ3VtZW50KTogU3ltYm9sIHxcbiAgICAgICAgICB1bmRlZmluZWQge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9LFxuICAgICAgdHlwZUFyZ3VtZW50cygpOiBTeW1ib2xbXSB8XG4gICAgICAgICAgdW5kZWZpbmVkIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUaGlzUmVjZWl2ZXIoX2FzdDogVGhpc1JlY2VpdmVyKTogU3ltYm9sIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEltcGxpY2l0UmVjZWl2ZXIoX2FzdCk7XG4gIH1cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uKTogU3ltYm9sIHtcbiAgICAvLyBJZiB3ZSBhcmUgcHJvZHVjaW5nIGRpYWdub3N0aWNzLCB2aXNpdCB0aGUgY2hpbGRyZW4uXG4gICAgZm9yIChjb25zdCBleHByIG9mIGFzdC5leHByZXNzaW9ucykge1xuICAgICAgZXhwci52aXNpdCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudW5kZWZpbmVkVHlwZTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkKTogU3ltYm9sIHtcbiAgICBjb25zdCB0YXJnZXRUeXBlID0gdGhpcy5nZXRUeXBlKGFzdC5vYmopO1xuICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLmdldFR5cGUoYXN0LmtleSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0VHlwZS5pbmRleGVkKFxuICAgICAgICBrZXlUeXBlLCBhc3Qua2V5IGluc3RhbmNlb2YgTGl0ZXJhbFByaW1pdGl2ZSA/IGFzdC5rZXkudmFsdWUgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiByZXN1bHQgfHwgdGhpcy5hbnlUeXBlO1xuICB9XG5cbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSk6IFN5bWJvbCB7XG4gICAgLy8gVGhlIHdyaXRlIG9mIGEgdHlwZSBpcyB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgYmVpbmcgd3JpdHRlbi5cbiAgICByZXR1cm4gdGhpcy5nZXRUeXBlKGFzdC52YWx1ZSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSk6IFN5bWJvbCB7XG4gICAgLy8gQSB0eXBlIGxpdGVyYWwgaXMgYW4gYXJyYXkgdHlwZSBvZiB0aGUgdW5pb24gb2YgdGhlIGVsZW1lbnRzXG4gICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QXJyYXlUeXBlKFxuICAgICAgICB0aGlzLnF1ZXJ5LmdldFR5cGVVbmlvbiguLi5hc3QuZXhwcmVzc2lvbnMubWFwKGVsZW1lbnQgPT4gdGhpcy5nZXRUeXBlKGVsZW1lbnQpKSkpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCk6IFN5bWJvbCB7XG4gICAgLy8gSWYgd2UgYXJlIHByb2R1Y2luZyBkaWFnbm9zdGljcywgdmlzaXQgdGhlIGNoaWxkcmVuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhc3QudmFsdWVzKSB7XG4gICAgICB2YWx1ZS52aXNpdCh0aGlzKTtcbiAgICB9XG4gICAgLy8gVE9ETzogUmV0dXJuIGEgY29tcG9zaXRlIHR5cGUuXG4gICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUpIHtcbiAgICAvLyBUaGUgdHlwZSBvZiBhIGxpdGVyYWwgcHJpbWl0aXZlIGRlcGVuZHMgb24gdGhlIHZhbHVlIG9mIHRoZSBsaXRlcmFsLlxuICAgIHN3aXRjaCAoYXN0LnZhbHVlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5Cb29sZWFuKTtcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuTnVsbCk7XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuVW5kZWZpbmVkKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIGFzdC52YWx1ZSkge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5TdHJpbmcpO1xuICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5OdW1iZXIpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goY3JlYXRlRGlhZ25vc3RpYyhcbiAgICAgICAgICAgICAgICByZWZpbmVkU3Bhbihhc3QpLCBEaWFnbm9zdGljLnVucmVjb2duaXplZF9wcmltaXRpdmUsIHR5cGVvZiBhc3QudmFsdWUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1ldGhvZENhbGwodGhpcy5nZXRUeXBlKGFzdC5yZWNlaXZlciksIGFzdCk7XG4gIH1cblxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSkge1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgcGlwZSBub2RlIGlzIHRoZSByZXR1cm4gdHlwZSBvZiB0aGUgcGlwZSdzIHRyYW5zZm9ybSBtZXRob2QuIFRoZSB0YWJsZSByZXR1cm5lZFxuICAgIC8vIGJ5IGdldFBpcGVzKCkgaXMgZXhwZWN0ZWQgdG8gY29udGFpbiBzeW1ib2xzIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgdHJhbnNmb3JtIG1ldGhvZCB0eXBlLlxuICAgIGNvbnN0IHBpcGUgPSB0aGlzLnF1ZXJ5LmdldFBpcGVzKCkuZ2V0KGFzdC5uYW1lKTtcbiAgICBpZiAoIXBpcGUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMubm9fcGlwZV9mb3VuZCwgYXN0Lm5hbWUpKTtcbiAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgfVxuICAgIGNvbnN0IGV4cFR5cGUgPSB0aGlzLmdldFR5cGUoYXN0LmV4cCk7XG4gICAgY29uc3Qgc2lnbmF0dXJlID1cbiAgICAgICAgcGlwZS5zZWxlY3RTaWduYXR1cmUoW2V4cFR5cGVdLmNvbmNhdChhc3QuYXJncy5tYXAoYXJnID0+IHRoaXMuZ2V0VHlwZShhcmcpKSkpO1xuICAgIGlmICghc2lnbmF0dXJlKSB7XG4gICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goXG4gICAgICAgICAgY3JlYXRlRGlhZ25vc3RpYyhyZWZpbmVkU3Bhbihhc3QpLCBEaWFnbm9zdGljLnVuYWJsZV90b19yZXNvbHZlX3NpZ25hdHVyZSwgYXN0Lm5hbWUpKTtcbiAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgfVxuICAgIHJldHVybiBzaWduYXR1cmUucmVzdWx0O1xuICB9XG5cbiAgdmlzaXRQcmVmaXhOb3QoYXN0OiBQcmVmaXhOb3QpIHtcbiAgICAvLyBJZiB3ZSBhcmUgcHJvZHVjaW5nIGRpYWdub3N0aWNzLCB2aXNpdCB0aGUgY2hpbGRyZW5cbiAgICBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKTtcbiAgICAvLyBUaGUgdHlwZSBvZiBhIHByZWZpeCAhIGlzIGFsd2F5cyBib29sZWFuLlxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkJvb2xlYW4pO1xuICB9XG5cbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gdGhpcy5nZXRUeXBlKGFzdC5leHByZXNzaW9uKTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXROb25OdWxsYWJsZVR5cGUoZXhwcmVzc2lvblR5cGUpO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlUHJvcGVydHlSZWFkKHRoaXMuZ2V0VHlwZShhc3QucmVjZWl2ZXIpLCBhc3QpO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogUHJvcGVydHlXcml0ZSkge1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgd3JpdGUgaXMgdGhlIHR5cGUgb2YgdGhlIHZhbHVlIGJlaW5nIHdyaXR0ZW4uXG4gICAgcmV0dXJuIHRoaXMuZ2V0VHlwZShhc3QudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRRdW90ZShfYXN0OiBRdW90ZSkge1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgcXVvdGVkIGV4cHJlc3Npb24gaXMgYW55LlxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSk7XG4gIH1cblxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTWV0aG9kQ2FsbCh0aGlzLnF1ZXJ5LmdldE5vbk51bGxhYmxlVHlwZSh0aGlzLmdldFR5cGUoYXN0LnJlY2VpdmVyKSksIGFzdCk7XG4gIH1cblxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZVByb3BlcnR5UmVhZCh0aGlzLnF1ZXJ5LmdldE5vbk51bGxhYmxlVHlwZSh0aGlzLmdldFR5cGUoYXN0LnJlY2VpdmVyKSksIGFzdCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc291cmNlIG9mIGFuIGV4cGVzc2lvbiBBU1QuXG4gICAqIFRoZSBBU1QncyBzb3VyY2VTcGFuIGlzIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgdGVtcGxhdGUgc291cmNlIGNvZGUsIHdoaWNoIGlzIGNvbnRhaW5lZFxuICAgKiBhdCB0aGlzLnNvdXJjZS5cbiAgICovXG4gIHByaXZhdGUgc291cmNlT2YoYXN0OiBBU1QpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzdHJpbmcoYXN0LnNvdXJjZVNwYW4uc3RhcnQsIGFzdC5zb3VyY2VTcGFuLmVuZCk7XG4gIH1cblxuICBwcml2YXRlIF9hbnlUeXBlOiBTeW1ib2x8dW5kZWZpbmVkO1xuICBwcml2YXRlIGdldCBhbnlUeXBlKCk6IFN5bWJvbCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuX2FueVR5cGU7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX2FueVR5cGUgPSB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF91bmRlZmluZWRUeXBlOiBTeW1ib2x8dW5kZWZpbmVkO1xuICBwcml2YXRlIGdldCB1bmRlZmluZWRUeXBlKCk6IFN5bWJvbCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuX3VuZGVmaW5lZFR5cGU7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX3VuZGVmaW5lZFR5cGUgPSB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLlVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVNZXRob2RDYWxsKHJlY2VpdmVyVHlwZTogU3ltYm9sLCBhc3Q6IFNhZmVNZXRob2RDYWxsfE1ldGhvZENhbGwpIHtcbiAgICBpZiAodGhpcy5pc0FueShyZWNlaXZlclR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2RUeXBlID0gdGhpcy5yZXNvbHZlUHJvcGVydHlSZWFkKHJlY2VpdmVyVHlwZSwgYXN0KTtcbiAgICBpZiAoIW1ldGhvZFR5cGUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMuY291bGRfbm90X3Jlc29sdmVfdHlwZSwgYXN0Lm5hbWUpKTtcbiAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQW55KG1ldGhvZFR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICBpZiAoIW1ldGhvZFR5cGUuY2FsbGFibGUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMuaWRlbnRpZmllcl9ub3RfY2FsbGFibGUsIGFzdC5uYW1lKSk7XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICBjb25zdCBzaWduYXR1cmUgPSBtZXRob2RUeXBlLnNlbGVjdFNpZ25hdHVyZShhc3QuYXJncy5tYXAoYXJnID0+IHRoaXMuZ2V0VHlwZShhcmcpKSk7XG4gICAgaWYgKCFzaWduYXR1cmUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKHJlZmluZWRTcGFuKGFzdCksIERpYWdub3N0aWMudW5hYmxlX3RvX3Jlc29sdmVfc2lnbmF0dXJlLCBhc3QubmFtZSkpO1xuICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5yZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVQcm9wZXJ0eVJlYWQocmVjZWl2ZXJUeXBlOiBTeW1ib2wsIGFzdDogU2FmZVByb3BlcnR5UmVhZHxQcm9wZXJ0eVJlYWQpIHtcbiAgICBpZiAodGhpcy5pc0FueShyZWNlaXZlclR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICAvLyBUaGUgdHlwZSBvZiBhIHByb3BlcnR5IHJlYWQgaXMgdGhlIHNlZWxjdGVkIG1lbWJlcidzIHR5cGUuXG4gICAgY29uc3QgbWVtYmVyID0gcmVjZWl2ZXJUeXBlLm1lbWJlcnMoKS5nZXQoYXN0Lm5hbWUpO1xuICAgIGlmICghbWVtYmVyKSB7XG4gICAgICBpZiAocmVjZWl2ZXJUeXBlLm5hbWUgPT09ICckaW1wbGljaXQnKSB7XG4gICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKFxuICAgICAgICAgICAgcmVmaW5lZFNwYW4oYXN0KSwgRGlhZ25vc3RpYy5pZGVudGlmaWVyX25vdF9kZWZpbmVkX2luX2FwcF9jb250ZXh0LCBhc3QubmFtZSkpO1xuICAgICAgfSBlbHNlIGlmIChyZWNlaXZlclR5cGUubnVsbGFibGUgJiYgYXN0LnJlY2VpdmVyIGluc3RhbmNlb2YgUHJvcGVydHlSZWFkKSB7XG4gICAgICAgIGNvbnN0IHJlY2VpdmVyID0gYXN0LnJlY2VpdmVyLm5hbWU7XG4gICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKFxuICAgICAgICAgICAgcmVmaW5lZFNwYW4oYXN0KSwgRGlhZ25vc3RpYy5pZGVudGlmaWVyX3Bvc3NpYmx5X3VuZGVmaW5lZCwgcmVjZWl2ZXIsXG4gICAgICAgICAgICBgJHtyZWNlaXZlcn0/LiR7YXN0Lm5hbWV9YCwgYCR7cmVjZWl2ZXJ9IS4ke2FzdC5uYW1lfWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKFxuICAgICAgICAgICAgcmVmaW5lZFNwYW4oYXN0KSwgRGlhZ25vc3RpYy5pZGVudGlmaWVyX25vdF9kZWZpbmVkX29uX3JlY2VpdmVyLCBhc3QubmFtZSxcbiAgICAgICAgICAgIHJlY2VpdmVyVHlwZS5uYW1lKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICBpZiAoIW1lbWJlci5wdWJsaWMpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgICAgICAgcmVjZWl2ZXJUeXBlLm5hbWUgPT09ICckaW1wbGljaXQnID8gJ3RoZSBjb21wb25lbnQnIDogYCcke3JlY2VpdmVyVHlwZS5uYW1lfSdgO1xuICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKGNyZWF0ZURpYWdub3N0aWMoXG4gICAgICAgICAgcmVmaW5lZFNwYW4oYXN0KSwgRGlhZ25vc3RpYy5pZGVudGlmaWVyX2lzX3ByaXZhdGUsIGFzdC5uYW1lLCBjb250YWluZXIpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbWJlci50eXBlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FueShzeW1ib2w6IFN5bWJvbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhc3ltYm9sIHx8IHRoaXMucXVlcnkuZ2V0VHlwZUtpbmQoc3ltYm9sKSA9PT0gQnVpbHRpblR5cGUuQW55IHx8XG4gICAgICAgICghIXN5bWJvbC50eXBlICYmIHRoaXMuaXNBbnkoc3ltYm9sLnR5cGUpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWZpbmVkU3Bhbihhc3Q6IEFTVCk6IG5nLlNwYW4ge1xuICAvLyBuYW1lU3BhbiBpcyBhbiBhYnNvbHV0ZSBzcGFuLCBidXQgdGhlIHNwYW5zIHJldHVybmVkIGJ5IHRoZSBleHByZXNzaW9uIHZpc2l0b3IgYXJlIGV4cGVjdGVkIHRvXG4gIC8vIGJlIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgZXhwcmVzc2lvbi5cbiAgLy8gVE9ETzogbWlncmF0ZSB0byBvbmx5IHVzaW5nIGFic29sdXRlIHNwYW5zXG4gIGNvbnN0IGFic29sdXRlT2Zmc2V0ID0gYXN0LnNvdXJjZVNwYW4uc3RhcnQgLSBhc3Quc3Bhbi5zdGFydDtcbiAgaWYgKGFzdCBpbnN0YW5jZW9mIEFTVFdpdGhOYW1lKSB7XG4gICAgcmV0dXJuIG9mZnNldFNwYW4oYXN0Lm5hbWVTcGFuLCAtYWJzb2x1dGVPZmZzZXQpO1xuICB9XG4gIHJldHVybiBvZmZzZXRTcGFuKGFzdC5zb3VyY2VTcGFuLCAtYWJzb2x1dGVPZmZzZXQpO1xufVxuIl19