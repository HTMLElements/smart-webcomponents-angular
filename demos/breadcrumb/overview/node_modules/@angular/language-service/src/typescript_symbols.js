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
        define("@angular/language-service/src/typescript_symbols", ["require", "exports", "tslib", "path", "typescript", "@angular/language-service/src/symbols"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPipesTable = exports.getClassMembersFromDeclaration = exports.getClassMembers = exports.getSymbolQuery = void 0;
    var tslib_1 = require("tslib");
    var path = require("path");
    var ts = require("typescript");
    var symbols_1 = require("@angular/language-service/src/symbols");
    // In TypeScript 2.1 these flags moved
    // These helpers work for both 2.0 and 2.1.
    var isPrivate = ts.ModifierFlags ?
        (function (node) {
            return !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Private);
        }) :
        (function (node) { return !!(node.flags & ts.NodeFlags.Private); });
    var isReferenceType = ts.ObjectFlags ?
        (function (type) {
            return !!(type.flags & ts.TypeFlags.Object &&
                type.objectFlags & ts.ObjectFlags.Reference);
        }) :
        (function (type) { return !!(type.flags & ts.TypeFlags.Reference); });
    function getSymbolQuery(program, checker, source, fetchPipes) {
        return new TypeScriptSymbolQuery(program, checker, source, fetchPipes);
    }
    exports.getSymbolQuery = getSymbolQuery;
    function getClassMembers(program, checker, staticSymbol) {
        var declaration = getClassFromStaticSymbol(program, staticSymbol);
        if (declaration) {
            var type = checker.getTypeAtLocation(declaration);
            var node = program.getSourceFile(staticSymbol.filePath);
            if (node) {
                return new TypeWrapper(type, { node: node, program: program, checker: checker }).members();
            }
        }
    }
    exports.getClassMembers = getClassMembers;
    function getClassMembersFromDeclaration(program, checker, source, declaration) {
        var type = checker.getTypeAtLocation(declaration);
        return new TypeWrapper(type, { node: source, program: program, checker: checker }).members();
    }
    exports.getClassMembersFromDeclaration = getClassMembersFromDeclaration;
    function getPipesTable(source, program, checker, pipes) {
        return new PipesTable(pipes, { program: program, checker: checker, node: source });
    }
    exports.getPipesTable = getPipesTable;
    function getClassFromStaticSymbol(program, type) {
        var source = program.getSourceFile(type.filePath);
        if (source) {
            return ts.forEachChild(source, function (child) {
                if (child.kind === ts.SyntaxKind.ClassDeclaration) {
                    var classDeclaration = child;
                    if (classDeclaration.name != null && classDeclaration.name.text === type.name) {
                        return classDeclaration;
                    }
                }
            });
        }
        return undefined;
    }
    var TypeScriptSymbolQuery = /** @class */ (function () {
        function TypeScriptSymbolQuery(program, checker, source, fetchPipes) {
            this.program = program;
            this.checker = checker;
            this.source = source;
            this.fetchPipes = fetchPipes;
            this.typeCache = new Map();
        }
        TypeScriptSymbolQuery.prototype.getTypeKind = function (symbol) {
            var type = symbol instanceof TypeWrapper ? symbol.tsType : undefined;
            return typeKindOf(type);
        };
        TypeScriptSymbolQuery.prototype.getBuiltinType = function (kind) {
            var result = this.typeCache.get(kind);
            if (!result) {
                var type = getTsTypeFromBuiltinType(kind, {
                    checker: this.checker,
                    node: this.source,
                    program: this.program,
                });
                result =
                    new TypeWrapper(type, { program: this.program, checker: this.checker, node: this.source });
                this.typeCache.set(kind, result);
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getTypeUnion = function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            // No API exists so return any if the types are not all the same type.
            var result = undefined;
            if (types.length) {
                result = types[0];
                for (var i = 1; i < types.length; i++) {
                    if (types[i] != result) {
                        result = undefined;
                        break;
                    }
                }
            }
            return result || this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getArrayType = function (_type) {
            return this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getElementType = function (type) {
            if (type instanceof TypeWrapper) {
                var ty = type.tsType;
                var tyArgs = type.typeArguments();
                // TODO(ayazhafiz): Track https://github.com/microsoft/TypeScript/issues/37711 to expose
                // `isArrayLikeType` as a public method.
                if (!this.checker.isArrayLikeType(ty) || (tyArgs === null || tyArgs === void 0 ? void 0 : tyArgs.length) !== 1)
                    return;
                return tyArgs[0];
            }
        };
        TypeScriptSymbolQuery.prototype.getNonNullableType = function (symbol) {
            if (symbol instanceof TypeWrapper && (typeof this.checker.getNonNullableType == 'function')) {
                var tsType = symbol.tsType;
                var nonNullableType = this.checker.getNonNullableType(tsType);
                if (nonNullableType != tsType) {
                    return new TypeWrapper(nonNullableType, symbol.context);
                }
                else if (nonNullableType == tsType) {
                    return symbol;
                }
            }
            return this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getPipes = function () {
            var result = this.pipesCache;
            if (!result) {
                result = this.pipesCache = this.fetchPipes();
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getTemplateContext = function (type) {
            var context = { node: this.source, program: this.program, checker: this.checker };
            var typeSymbol = findClassSymbolInContext(type, context);
            if (typeSymbol) {
                var contextType = this.getTemplateRefContextType(typeSymbol, context);
                if (contextType)
                    return contextType.members();
            }
        };
        TypeScriptSymbolQuery.prototype.getTypeSymbol = function (type) {
            var context = { node: this.source, program: this.program, checker: this.checker };
            var typeSymbol = findClassSymbolInContext(type, context);
            return typeSymbol && new SymbolWrapper(typeSymbol, context);
        };
        TypeScriptSymbolQuery.prototype.createSymbolTable = function (symbols) {
            var result = new MapSymbolTable();
            result.addAll(symbols.map(function (s) { return new DeclaredSymbol(s); }));
            return result;
        };
        TypeScriptSymbolQuery.prototype.mergeSymbolTable = function (symbolTables) {
            var e_1, _a;
            var result = new MapSymbolTable();
            try {
                for (var symbolTables_1 = tslib_1.__values(symbolTables), symbolTables_1_1 = symbolTables_1.next(); !symbolTables_1_1.done; symbolTables_1_1 = symbolTables_1.next()) {
                    var symbolTable = symbolTables_1_1.value;
                    result.addAll(symbolTable.values());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (symbolTables_1_1 && !symbolTables_1_1.done && (_a = symbolTables_1.return)) _a.call(symbolTables_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getSpanAt = function (line, column) {
            return spanAt(this.source, line, column);
        };
        TypeScriptSymbolQuery.prototype.getTemplateRefContextType = function (typeSymbol, context) {
            var e_2, _a;
            var type = this.checker.getTypeOfSymbolAtLocation(typeSymbol, this.source);
            var constructor = type.symbol && type.symbol.members &&
                getFromSymbolTable(type.symbol.members, '__constructor');
            if (constructor) {
                var constructorDeclaration = constructor.declarations[0];
                try {
                    for (var _b = tslib_1.__values(constructorDeclaration.parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var parameter = _c.value;
                        var type_1 = this.checker.getTypeAtLocation(parameter.type);
                        if (type_1.symbol.name == 'TemplateRef' && isReferenceType(type_1)) {
                            var typeWrapper = new TypeWrapper(type_1, context);
                            var typeArguments = typeWrapper.typeArguments();
                            if (typeArguments && typeArguments.length === 1) {
                                return typeArguments[0];
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        };
        return TypeScriptSymbolQuery;
    }());
    function typeCallable(type) {
        var signatures = type.getCallSignatures();
        return signatures && signatures.length != 0;
    }
    function signaturesOf(type, context) {
        return type.getCallSignatures().map(function (s) { return new SignatureWrapper(s, context); });
    }
    function selectSignature(type, context, types) {
        // TODO: Do a better job of selecting the right signature. TypeScript does not currently support a
        // Type Relationship API (see https://github.com/angular/vscode-ng-language-service/issues/143).
        // Consider creating a TypeCheckBlock host in the language service that may also act as a
        // scratchpad for type comparisons.
        var signatures = type.getCallSignatures();
        var passedInTypes = types.map(function (type) {
            if (type instanceof TypeWrapper) {
                return type.tsType;
            }
        });
        // Try to select a matching signature in which all parameter types match.
        // Note that this is just a best-effort approach, because we're checking for
        // strict type equality rather than compatibility.
        // For example, if the signature contains a ReadonlyArray<number> and the
        // passed parameter type is an Array<number>, this will fail.
        function allParameterTypesMatch(signature) {
            var tc = context.checker;
            return signature.getParameters().every(function (parameter, i) {
                var type = tc.getTypeOfSymbolAtLocation(parameter, parameter.valueDeclaration);
                return type === passedInTypes[i];
            });
        }
        var exactMatch = signatures.find(allParameterTypesMatch);
        if (exactMatch) {
            return new SignatureWrapper(exactMatch, context);
        }
        // If not, fallback to a naive selection
        return signatures.length ? new SignatureWrapper(signatures[0], context) : undefined;
    }
    var TypeWrapper = /** @class */ (function () {
        function TypeWrapper(tsType, context) {
            this.tsType = tsType;
            this.context = context;
            this.kind = 'type';
            this.language = 'typescript';
            this.type = undefined;
            this.container = undefined;
            this.public = true;
            if (!tsType) {
                throw Error('Internal: null type');
            }
        }
        Object.defineProperty(TypeWrapper.prototype, "name", {
            get: function () {
                return this.context.checker.typeToString(this.tsType);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "callable", {
            get: function () {
                return typeCallable(this.tsType);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "nullable", {
            get: function () {
                return this.context.checker.getNonNullableType(this.tsType) != this.tsType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "documentation", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                if (!symbol) {
                    return [];
                }
                return symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "definition", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                return symbol ? definitionFromTsSymbol(symbol) : undefined;
            },
            enumerable: false,
            configurable: true
        });
        TypeWrapper.prototype.members = function () {
            // Should call getApparentProperties() instead of getProperties() because
            // the former includes properties on the base class whereas the latter does
            // not. This provides properties like .bind(), .call(), .apply(), etc for
            // functions.
            return new SymbolTableWrapper(this.tsType.getApparentProperties(), this.context, this.tsType);
        };
        TypeWrapper.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        TypeWrapper.prototype.selectSignature = function (types) {
            return selectSignature(this.tsType, this.context, types);
        };
        TypeWrapper.prototype.indexed = function (type, value) {
            if (!(type instanceof TypeWrapper))
                return;
            var typeKind = typeKindOf(type.tsType);
            switch (typeKind) {
                case symbols_1.BuiltinType.Number:
                    var nType = this.tsType.getNumberIndexType();
                    if (nType) {
                        // get the right tuple type by value, like 'var t: [number, string];'
                        if (nType.isUnion()) {
                            // return undefined if array index out of bound.
                            return nType.types[value] && new TypeWrapper(nType.types[value], this.context);
                        }
                        return new TypeWrapper(nType, this.context);
                    }
                    return undefined;
                case symbols_1.BuiltinType.String:
                    var sType = this.tsType.getStringIndexType();
                    return sType && new TypeWrapper(sType, this.context);
            }
        };
        TypeWrapper.prototype.typeArguments = function () {
            var _this = this;
            if (!isReferenceType(this.tsType))
                return;
            var typeReference = this.tsType;
            var typeArguments;
            typeArguments = this.context.checker.getTypeArguments(typeReference);
            if (!typeArguments)
                return undefined;
            return typeArguments.map(function (ta) { return new TypeWrapper(ta, _this.context); });
        };
        return TypeWrapper;
    }());
    // If stringIndexType a primitive type(e.g. 'string'), the Symbol is undefined;
    // and in AstType.resolvePropertyRead method, the Symbol.type should get the right type.
    var StringIndexTypeWrapper = /** @class */ (function (_super) {
        tslib_1.__extends(StringIndexTypeWrapper, _super);
        function StringIndexTypeWrapper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = new TypeWrapper(_this.tsType, _this.context);
            return _this;
        }
        return StringIndexTypeWrapper;
    }(TypeWrapper));
    var SymbolWrapper = /** @class */ (function () {
        function SymbolWrapper(symbol, 
        /** TypeScript type context of the symbol. */
        context, 
        /**
         * Type of the TypeScript symbol, if known. If not provided, the type of the symbol
         * will be determined dynamically; see `SymbolWrapper#tsType`.
         */
        _tsType) {
            this.context = context;
            this._tsType = _tsType;
            this.nullable = false;
            this.language = 'typescript';
            this.symbol = symbol && context && (symbol.flags & ts.SymbolFlags.Alias) ?
                context.checker.getAliasedSymbol(symbol) :
                symbol;
        }
        Object.defineProperty(SymbolWrapper.prototype, "name", {
            get: function () {
                return this.symbol.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "kind", {
            get: function () {
                return this.callable ? 'method' : 'property';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "type", {
            get: function () {
                return new TypeWrapper(this.tsType, this.context);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "container", {
            get: function () {
                return getContainerOf(this.symbol, this.context);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "public", {
            get: function () {
                // Symbols that are not explicitly made private are public.
                return !isSymbolPrivate(this.symbol);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "callable", {
            get: function () {
                return typeCallable(this.tsType);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "definition", {
            get: function () {
                return definitionFromTsSymbol(this.symbol);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "documentation", {
            get: function () {
                return this.symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: false,
            configurable: true
        });
        SymbolWrapper.prototype.members = function () {
            if (!this._members) {
                if ((this.symbol.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Interface)) != 0) {
                    var declaredType = this.context.checker.getDeclaredTypeOfSymbol(this.symbol);
                    var typeWrapper = new TypeWrapper(declaredType, this.context);
                    this._members = typeWrapper.members();
                }
                else {
                    this._members = new SymbolTableWrapper(this.symbol.members, this.context, this.tsType);
                }
            }
            return this._members;
        };
        SymbolWrapper.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        SymbolWrapper.prototype.selectSignature = function (types) {
            return selectSignature(this.tsType, this.context, types);
        };
        SymbolWrapper.prototype.indexed = function (_argument) {
            return undefined;
        };
        SymbolWrapper.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        Object.defineProperty(SymbolWrapper.prototype, "tsType", {
            get: function () {
                var type = this._tsType;
                if (!type) {
                    type = this._tsType =
                        this.context.checker.getTypeOfSymbolAtLocation(this.symbol, this.context.node);
                }
                return type;
            },
            enumerable: false,
            configurable: true
        });
        return SymbolWrapper;
    }());
    var DeclaredSymbol = /** @class */ (function () {
        function DeclaredSymbol(declaration) {
            this.declaration = declaration;
            this.language = 'ng-template';
            this.nullable = false;
            this.public = true;
        }
        Object.defineProperty(DeclaredSymbol.prototype, "name", {
            get: function () {
                return this.declaration.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "kind", {
            get: function () {
                return this.declaration.kind;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "container", {
            get: function () {
                return undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "type", {
            get: function () {
                return this.declaration.type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "callable", {
            get: function () {
                return this.type.callable;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "definition", {
            get: function () {
                return this.declaration.definition;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "documentation", {
            get: function () {
                return this.declaration.type.documentation;
            },
            enumerable: false,
            configurable: true
        });
        DeclaredSymbol.prototype.members = function () {
            return this.type.members();
        };
        DeclaredSymbol.prototype.signatures = function () {
            return this.type.signatures();
        };
        DeclaredSymbol.prototype.selectSignature = function (types) {
            return this.type.selectSignature(types);
        };
        DeclaredSymbol.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        DeclaredSymbol.prototype.indexed = function (_argument) {
            return undefined;
        };
        return DeclaredSymbol;
    }());
    var SignatureWrapper = /** @class */ (function () {
        function SignatureWrapper(signature, context) {
            this.signature = signature;
            this.context = context;
        }
        Object.defineProperty(SignatureWrapper.prototype, "arguments", {
            get: function () {
                return new SymbolTableWrapper(this.signature.getParameters(), this.context);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SignatureWrapper.prototype, "result", {
            get: function () {
                return new TypeWrapper(this.signature.getReturnType(), this.context);
            },
            enumerable: false,
            configurable: true
        });
        return SignatureWrapper;
    }());
    var SignatureResultOverride = /** @class */ (function () {
        function SignatureResultOverride(signature, resultType) {
            this.signature = signature;
            this.resultType = resultType;
        }
        Object.defineProperty(SignatureResultOverride.prototype, "arguments", {
            get: function () {
                return this.signature.arguments;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SignatureResultOverride.prototype, "result", {
            get: function () {
                return this.resultType;
            },
            enumerable: false,
            configurable: true
        });
        return SignatureResultOverride;
    }());
    function toSymbolTableFactory(symbols) {
        var e_3, _a;
        // ∀ Typescript version >= 2.2, `SymbolTable` is implemented as an ES6 `Map`
        var result = new Map();
        try {
            for (var symbols_2 = tslib_1.__values(symbols), symbols_2_1 = symbols_2.next(); !symbols_2_1.done; symbols_2_1 = symbols_2.next()) {
                var symbol = symbols_2_1.value;
                result.set(symbol.name, symbol);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (symbols_2_1 && !symbols_2_1.done && (_a = symbols_2.return)) _a.call(symbols_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    }
    function toSymbols(symbolTable) {
        if (!symbolTable)
            return [];
        var table = symbolTable;
        if (typeof table.values === 'function') {
            return Array.from(table.values());
        }
        var result = [];
        var own = typeof table.hasOwnProperty === 'function' ?
            function (name) { return table.hasOwnProperty(name); } :
            function (name) { return !!table[name]; };
        for (var name_1 in table) {
            if (own(name_1)) {
                result.push(table[name_1]);
            }
        }
        return result;
    }
    var SymbolTableWrapper = /** @class */ (function () {
        /**
         * Creates a queryable table of symbols belonging to a TypeScript entity.
         * @param symbols symbols to query belonging to the entity
         * @param context program context
         * @param type original TypeScript type of entity owning the symbols, if known
         */
        function SymbolTableWrapper(symbols, context, type) {
            this.context = context;
            symbols = symbols || [];
            if (Array.isArray(symbols)) {
                this.symbols = symbols;
                this.symbolTable = toSymbolTableFactory(symbols);
            }
            else {
                this.symbols = toSymbols(symbols);
                this.symbolTable = symbols;
            }
            if (type) {
                this.stringIndexType = type.getStringIndexType();
            }
        }
        Object.defineProperty(SymbolTableWrapper.prototype, "size", {
            get: function () {
                return this.symbols.length;
            },
            enumerable: false,
            configurable: true
        });
        SymbolTableWrapper.prototype.get = function (key) {
            var symbol = getFromSymbolTable(this.symbolTable, key);
            if (symbol) {
                return new SymbolWrapper(symbol, this.context);
            }
            if (this.stringIndexType) {
                // If the key does not exist as an explicit symbol on the type, it may be accessing a string
                // index signature using dot notation:
                //
                //   const obj<T>: { [key: string]: T };
                //   obj.stringIndex // equivalent to obj['stringIndex'];
                //
                // In this case, return the type indexed by an arbitrary string key.
                return new StringIndexTypeWrapper(this.stringIndexType, this.context);
            }
            return undefined;
        };
        SymbolTableWrapper.prototype.has = function (key) {
            var table = this.symbolTable;
            return ((typeof table.has === 'function') ? table.has(key) : table[key] != null) ||
                this.stringIndexType !== undefined;
        };
        SymbolTableWrapper.prototype.values = function () {
            var _this = this;
            return this.symbols.map(function (s) { return new SymbolWrapper(s, _this.context); });
        };
        return SymbolTableWrapper;
    }());
    var MapSymbolTable = /** @class */ (function () {
        function MapSymbolTable() {
            this.map = new Map();
            this._values = [];
        }
        Object.defineProperty(MapSymbolTable.prototype, "size", {
            get: function () {
                return this.map.size;
            },
            enumerable: false,
            configurable: true
        });
        MapSymbolTable.prototype.get = function (key) {
            return this.map.get(key);
        };
        MapSymbolTable.prototype.add = function (symbol) {
            if (this.map.has(symbol.name)) {
                var previous = this.map.get(symbol.name);
                this._values[this._values.indexOf(previous)] = symbol;
            }
            this.map.set(symbol.name, symbol);
            this._values.push(symbol);
        };
        MapSymbolTable.prototype.addAll = function (symbols) {
            var e_4, _a;
            try {
                for (var symbols_3 = tslib_1.__values(symbols), symbols_3_1 = symbols_3.next(); !symbols_3_1.done; symbols_3_1 = symbols_3.next()) {
                    var symbol = symbols_3_1.value;
                    this.add(symbol);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (symbols_3_1 && !symbols_3_1.done && (_a = symbols_3.return)) _a.call(symbols_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        MapSymbolTable.prototype.has = function (key) {
            return this.map.has(key);
        };
        MapSymbolTable.prototype.values = function () {
            // Switch to this.map.values once iterables are supported by the target language.
            return this._values;
        };
        return MapSymbolTable;
    }());
    var PipesTable = /** @class */ (function () {
        function PipesTable(pipes, context) {
            this.pipes = pipes;
            this.context = context;
        }
        Object.defineProperty(PipesTable.prototype, "size", {
            get: function () {
                return this.pipes.length;
            },
            enumerable: false,
            configurable: true
        });
        PipesTable.prototype.get = function (key) {
            var pipe = this.pipes.find(function (pipe) { return pipe.name == key; });
            if (pipe) {
                return new PipeSymbol(pipe, this.context);
            }
        };
        PipesTable.prototype.has = function (key) {
            return this.pipes.find(function (pipe) { return pipe.name == key; }) != null;
        };
        PipesTable.prototype.values = function () {
            var _this = this;
            return this.pipes.map(function (pipe) { return new PipeSymbol(pipe, _this.context); });
        };
        return PipesTable;
    }());
    // This matches .d.ts files that look like ".../<package-name>/<package-name>.d.ts",
    var INDEX_PATTERN = /[\\/]([^\\/]+)[\\/]\1\.d\.ts$/;
    var PipeSymbol = /** @class */ (function () {
        function PipeSymbol(pipe, context) {
            this.pipe = pipe;
            this.context = context;
            this.kind = 'pipe';
            this.language = 'typescript';
            this.container = undefined;
            this.callable = true;
            this.nullable = false;
            this.public = true;
        }
        Object.defineProperty(PipeSymbol.prototype, "name", {
            get: function () {
                return this.pipe.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "type", {
            get: function () {
                return new TypeWrapper(this.tsType, this.context);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "definition", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                return symbol ? definitionFromTsSymbol(symbol) : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "documentation", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                if (!symbol) {
                    return [];
                }
                return symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: false,
            configurable: true
        });
        PipeSymbol.prototype.members = function () {
            return EmptyTable.instance;
        };
        PipeSymbol.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        PipeSymbol.prototype.selectSignature = function (types) {
            var signature = selectSignature(this.tsType, this.context, types);
            if (types.length > 0) {
                var parameterType = types[0];
                var resultType = undefined;
                switch (this.name) {
                    case 'async':
                        // Get type argument of 'Observable', 'Promise', or 'EventEmitter'.
                        var tArgs = parameterType.typeArguments();
                        if (tArgs && tArgs.length === 1) {
                            resultType = tArgs[0];
                        }
                        break;
                    case 'slice':
                        resultType = parameterType;
                        break;
                }
                if (resultType) {
                    signature = new SignatureResultOverride(signature, resultType);
                }
            }
            return signature;
        };
        PipeSymbol.prototype.indexed = function (_argument) {
            return undefined;
        };
        PipeSymbol.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        Object.defineProperty(PipeSymbol.prototype, "tsType", {
            get: function () {
                var type = this._tsType;
                if (!type) {
                    var classSymbol = this.findClassSymbol(this.pipe.type.reference);
                    if (classSymbol) {
                        type = this._tsType = this.findTransformMethodType(classSymbol);
                    }
                    if (!type) {
                        type = this._tsType = getTsTypeFromBuiltinType(symbols_1.BuiltinType.Any, this.context);
                    }
                }
                return type;
            },
            enumerable: false,
            configurable: true
        });
        PipeSymbol.prototype.findClassSymbol = function (type) {
            return findClassSymbolInContext(type, this.context);
        };
        PipeSymbol.prototype.findTransformMethodType = function (classSymbol) {
            var classType = this.context.checker.getDeclaredTypeOfSymbol(classSymbol);
            if (classType) {
                var transform = classType.getProperty('transform');
                if (transform) {
                    return this.context.checker.getTypeOfSymbolAtLocation(transform, this.context.node);
                }
            }
        };
        return PipeSymbol;
    }());
    function findClassSymbolInContext(type, context) {
        var sourceFile = context.program.getSourceFile(type.filePath);
        if (!sourceFile) {
            // This handles a case where an <packageName>/index.d.ts and a <packageName>/<packageName>.d.ts
            // are in the same directory. If we are looking for <packageName>/<packageName> and didn't
            // find it, look for <packageName>/index.d.ts as the program might have found that instead.
            var p = type.filePath;
            var m = p.match(INDEX_PATTERN);
            if (m) {
                var indexVersion = path.join(path.dirname(p), 'index.d.ts');
                sourceFile = context.program.getSourceFile(indexVersion);
            }
        }
        if (sourceFile) {
            var moduleSymbol = sourceFile.module || sourceFile.symbol;
            var exports_1 = context.checker.getExportsOfModule(moduleSymbol);
            return (exports_1 || []).find(function (symbol) { return symbol.name == type.name; });
        }
    }
    var EmptyTable = /** @class */ (function () {
        function EmptyTable() {
            this.size = 0;
        }
        EmptyTable.prototype.get = function (_key) {
            return undefined;
        };
        EmptyTable.prototype.has = function (_key) {
            return false;
        };
        EmptyTable.prototype.values = function () {
            return [];
        };
        EmptyTable.instance = new EmptyTable();
        return EmptyTable;
    }());
    function isSymbolPrivate(s) {
        return !!s.valueDeclaration && isPrivate(s.valueDeclaration);
    }
    function getTsTypeFromBuiltinType(builtinType, ctx) {
        var syntaxKind;
        switch (builtinType) {
            case symbols_1.BuiltinType.Any:
                syntaxKind = ts.SyntaxKind.AnyKeyword;
                break;
            case symbols_1.BuiltinType.Boolean:
                syntaxKind = ts.SyntaxKind.BooleanKeyword;
                break;
            case symbols_1.BuiltinType.Null:
                syntaxKind = ts.SyntaxKind.NullKeyword;
                break;
            case symbols_1.BuiltinType.Number:
                syntaxKind = ts.SyntaxKind.NumberKeyword;
                break;
            case symbols_1.BuiltinType.String:
                syntaxKind = ts.SyntaxKind.StringKeyword;
                break;
            case symbols_1.BuiltinType.Undefined:
                syntaxKind = ts.SyntaxKind.UndefinedKeyword;
                break;
            default:
                throw new Error("Internal error, unhandled literal kind " + builtinType + ":" + symbols_1.BuiltinType[builtinType]);
        }
        var node = ts.createNode(syntaxKind);
        node.parent = ts.createEmptyStatement();
        return ctx.checker.getTypeAtLocation(node);
    }
    function spanAt(sourceFile, line, column) {
        if (line != null && column != null) {
            var position_1 = ts.getPositionOfLineAndCharacter(sourceFile, line, column);
            var findChild = function findChild(node) {
                if (node.kind > ts.SyntaxKind.LastToken && node.pos <= position_1 && node.end > position_1) {
                    var betterNode = ts.forEachChild(node, findChild);
                    return betterNode || node;
                }
            };
            var node = ts.forEachChild(sourceFile, findChild);
            if (node) {
                return { start: node.getStart(), end: node.getEnd() };
            }
        }
    }
    function definitionFromTsSymbol(symbol) {
        var declarations = symbol.declarations;
        if (declarations) {
            return declarations.map(function (declaration) {
                var sourceFile = declaration.getSourceFile();
                return {
                    fileName: sourceFile.fileName,
                    span: { start: declaration.getStart(), end: declaration.getEnd() }
                };
            });
        }
    }
    function parentDeclarationOf(node) {
        while (node) {
            switch (node.kind) {
                case ts.SyntaxKind.ClassDeclaration:
                case ts.SyntaxKind.InterfaceDeclaration:
                    return node;
                case ts.SyntaxKind.SourceFile:
                    return undefined;
            }
            node = node.parent;
        }
    }
    function getContainerOf(symbol, context) {
        var e_5, _a;
        if (symbol.getFlags() & ts.SymbolFlags.ClassMember && symbol.declarations) {
            try {
                for (var _b = tslib_1.__values(symbol.declarations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var declaration = _c.value;
                    var parent_1 = parentDeclarationOf(declaration);
                    if (parent_1) {
                        var type = context.checker.getTypeAtLocation(parent_1);
                        if (type) {
                            return new TypeWrapper(type, context);
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
    function typeKindOf(type) {
        var e_6, _a;
        if (type) {
            if (type.flags & ts.TypeFlags.Any) {
                return symbols_1.BuiltinType.Any;
            }
            else if (type.flags & (ts.TypeFlags.String | ts.TypeFlags.StringLike | ts.TypeFlags.StringLiteral)) {
                return symbols_1.BuiltinType.String;
            }
            else if (type.flags & (ts.TypeFlags.Number | ts.TypeFlags.NumberLike)) {
                return symbols_1.BuiltinType.Number;
            }
            else if (type.flags & ts.TypeFlags.Object) {
                return symbols_1.BuiltinType.Object;
            }
            else if (type.flags & (ts.TypeFlags.Undefined)) {
                return symbols_1.BuiltinType.Undefined;
            }
            else if (type.flags & (ts.TypeFlags.Null)) {
                return symbols_1.BuiltinType.Null;
            }
            else if (type.flags & ts.TypeFlags.Union) {
                var unionType = type;
                if (unionType.types.length === 0)
                    return symbols_1.BuiltinType.Other;
                var ty = 0;
                try {
                    for (var _b = tslib_1.__values(unionType.types), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var subType = _c.value;
                        ty |= typeKindOf(subType);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                return ty;
            }
            else if (type.flags & ts.TypeFlags.TypeParameter) {
                return symbols_1.BuiltinType.Unbound;
            }
        }
        return symbols_1.BuiltinType.Other;
    }
    function getFromSymbolTable(symbolTable, key) {
        var table = symbolTable;
        var symbol;
        if (typeof table.get === 'function') {
            // TS 2.2 uses a Map
            symbol = table.get(key);
        }
        else {
            // TS pre-2.2 uses an object
            symbol = table[key];
        }
        return symbol;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF9zeW1ib2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvdHlwZXNjcmlwdF9zeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFHSCwyQkFBNkI7SUFDN0IsK0JBQWlDO0lBRWpDLGlFQUF5STtJQUV6SSxzQ0FBc0M7SUFDdEMsMkNBQTJDO0lBQzNDLElBQU0sU0FBUyxHQUFJLEVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxDQUFDLFVBQUMsSUFBYTtZQUNWLE9BQUEsQ0FBQyxDQUFDLENBQUUsRUFBVSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFJLEVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQWxGLENBQWtGLENBQUMsQ0FBQyxDQUFDO1FBQzFGLENBQUMsVUFBQyxJQUFhLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFJLEVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztJQUV4RSxJQUFNLGVBQWUsR0FBSSxFQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxVQUFDLElBQWE7WUFDVixPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUksRUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNO2dCQUN4QyxJQUFZLENBQUMsV0FBVyxHQUFJLEVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBRGpFLENBQ2lFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsVUFBQyxJQUFhLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFJLEVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FB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MkIsRUFBRSxHQUFXO1FBQ2xFLElBQU0sS0FBSyxHQUFHLFdBQWtCLENBQUM7UUFDakMsSUFBSSxNQUEyQixDQUFDO1FBRWhDLElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtZQUNuQyxvQkFBb0I7WUFDcEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLDRCQUE0QjtZQUM1QixNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVQaXBlU3VtbWFyeSwgU3RhdGljU3ltYm9sfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7QnVpbHRpblR5cGUsIERlY2xhcmF0aW9uS2luZCwgRGVmaW5pdGlvbiwgU2lnbmF0dXJlLCBTcGFuLCBTeW1ib2wsIFN5bWJvbERlY2xhcmF0aW9uLCBTeW1ib2xRdWVyeSwgU3ltYm9sVGFibGV9IGZyb20gJy4vc3ltYm9scyc7XG5cbi8vIEluIFR5cGVTY3JpcHQgMi4xIHRoZXNlIGZsYWdzIG1vdmVkXG4vLyBUaGVzZSBoZWxwZXJzIHdvcmsgZm9yIGJvdGggMi4wIGFuZCAyLjEuXG5jb25zdCBpc1ByaXZhdGUgPSAodHMgYXMgYW55KS5Nb2RpZmllckZsYWdzID9cbiAgICAoKG5vZGU6IHRzLk5vZGUpID0+XG4gICAgICAgICAhISgodHMgYXMgYW55KS5nZXRDb21iaW5lZE1vZGlmaWVyRmxhZ3Mobm9kZSkgJiAodHMgYXMgYW55KS5Nb2RpZmllckZsYWdzLlByaXZhdGUpKSA6XG4gICAgKChub2RlOiB0cy5Ob2RlKSA9PiAhIShub2RlLmZsYWdzICYgKHRzIGFzIGFueSkuTm9kZUZsYWdzLlByaXZhdGUpKTtcblxuY29uc3QgaXNSZWZlcmVuY2VUeXBlID0gKHRzIGFzIGFueSkuT2JqZWN0RmxhZ3MgP1xuICAgICgodHlwZTogdHMuVHlwZSkgPT5cbiAgICAgICAgICEhKHR5cGUuZmxhZ3MgJiAodHMgYXMgYW55KS5UeXBlRmxhZ3MuT2JqZWN0ICYmXG4gICAgICAgICAgICAodHlwZSBhcyBhbnkpLm9iamVjdEZsYWdzICYgKHRzIGFzIGFueSkuT2JqZWN0RmxhZ3MuUmVmZXJlbmNlKSkgOlxuICAgICgodHlwZTogdHMuVHlwZSkgPT4gISEodHlwZS5mbGFncyAmICh0cyBhcyBhbnkpLlR5cGVGbGFncy5SZWZlcmVuY2UpKTtcblxuaW50ZXJmYWNlIFR5cGVDb250ZXh0IHtcbiAgbm9kZTogdHMuTm9kZTtcbiAgcHJvZ3JhbTogdHMuUHJvZ3JhbTtcbiAgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xRdWVyeShcbiAgICBwcm9ncmFtOiB0cy5Qcm9ncmFtLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgc291cmNlOiB0cy5Tb3VyY2VGaWxlLFxuICAgIGZldGNoUGlwZXM6ICgpID0+IFN5bWJvbFRhYmxlKTogU3ltYm9sUXVlcnkge1xuICByZXR1cm4gbmV3IFR5cGVTY3JpcHRTeW1ib2xRdWVyeShwcm9ncmFtLCBjaGVja2VyLCBzb3VyY2UsIGZldGNoUGlwZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NNZW1iZXJzKFxuICAgIHByb2dyYW06IHRzLlByb2dyYW0sIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBzdGF0aWNTeW1ib2w6IFN0YXRpY1N5bWJvbCk6IFN5bWJvbFRhYmxlfFxuICAgIHVuZGVmaW5lZCB7XG4gIGNvbnN0IGRlY2xhcmF0aW9uID0gZ2V0Q2xhc3NGcm9tU3RhdGljU3ltYm9sKHByb2dyYW0sIHN0YXRpY1N5bWJvbCk7XG4gIGlmIChkZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IHR5cGUgPSBjaGVja2VyLmdldFR5cGVBdExvY2F0aW9uKGRlY2xhcmF0aW9uKTtcbiAgICBjb25zdCBub2RlID0gcHJvZ3JhbS5nZXRTb3VyY2VGaWxlKHN0YXRpY1N5bWJvbC5maWxlUGF0aCk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZVdyYXBwZXIodHlwZSwge25vZGUsIHByb2dyYW0sIGNoZWNrZXJ9KS5tZW1iZXJzKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc01lbWJlcnNGcm9tRGVjbGFyYXRpb24oXG4gICAgcHJvZ3JhbTogdHMuUHJvZ3JhbSwgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsIHNvdXJjZTogdHMuU291cmNlRmlsZSxcbiAgICBkZWNsYXJhdGlvbjogdHMuQ2xhc3NEZWNsYXJhdGlvbikge1xuICBjb25zdCB0eXBlID0gY2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihkZWNsYXJhdGlvbik7XG4gIHJldHVybiBuZXcgVHlwZVdyYXBwZXIodHlwZSwge25vZGU6IHNvdXJjZSwgcHJvZ3JhbSwgY2hlY2tlcn0pLm1lbWJlcnMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBpcGVzVGFibGUoXG4gICAgc291cmNlOiB0cy5Tb3VyY2VGaWxlLCBwcm9ncmFtOiB0cy5Qcm9ncmFtLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlcixcbiAgICBwaXBlczogQ29tcGlsZVBpcGVTdW1tYXJ5W10pOiBTeW1ib2xUYWJsZSB7XG4gIHJldHVybiBuZXcgUGlwZXNUYWJsZShwaXBlcywge3Byb2dyYW0sIGNoZWNrZXIsIG5vZGU6IHNvdXJjZX0pO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFzc0Zyb21TdGF0aWNTeW1ib2wocHJvZ3JhbTogdHMuUHJvZ3JhbSwgdHlwZTogU3RhdGljU3ltYm9sKTogdHMuQ2xhc3NEZWNsYXJhdGlvbnxcbiAgICB1bmRlZmluZWQge1xuICBjb25zdCBzb3VyY2UgPSBwcm9ncmFtLmdldFNvdXJjZUZpbGUodHlwZS5maWxlUGF0aCk7XG4gIGlmIChzb3VyY2UpIHtcbiAgICByZXR1cm4gdHMuZm9yRWFjaENoaWxkKHNvdXJjZSwgY2hpbGQgPT4ge1xuICAgICAgaWYgKGNoaWxkLmtpbmQgPT09IHRzLlN5bnRheEtpbmQuQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgICAgICBjb25zdCBjbGFzc0RlY2xhcmF0aW9uID0gY2hpbGQgYXMgdHMuQ2xhc3NEZWNsYXJhdGlvbjtcbiAgICAgICAgaWYgKGNsYXNzRGVjbGFyYXRpb24ubmFtZSAhPSBudWxsICYmIGNsYXNzRGVjbGFyYXRpb24ubmFtZS50ZXh0ID09PSB0eXBlLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gY2xhc3NEZWNsYXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIGFzICh0cy5DbGFzc0RlY2xhcmF0aW9uIHwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNsYXNzIFR5cGVTY3JpcHRTeW1ib2xRdWVyeSBpbXBsZW1lbnRzIFN5bWJvbFF1ZXJ5IHtcbiAgcHJpdmF0ZSB0eXBlQ2FjaGUgPSBuZXcgTWFwPEJ1aWx0aW5UeXBlLCBTeW1ib2w+KCk7XG4gIHByaXZhdGUgcGlwZXNDYWNoZTogU3ltYm9sVGFibGV8dW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBwcm9ncmFtOiB0cy5Qcm9ncmFtLCBwcml2YXRlIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBwcml2YXRlIHNvdXJjZTogdHMuU291cmNlRmlsZSxcbiAgICAgIHByaXZhdGUgZmV0Y2hQaXBlczogKCkgPT4gU3ltYm9sVGFibGUpIHt9XG5cbiAgZ2V0VHlwZUtpbmQoc3ltYm9sOiBTeW1ib2wpOiBCdWlsdGluVHlwZSB7XG4gICAgY29uc3QgdHlwZSA9IHN5bWJvbCBpbnN0YW5jZW9mIFR5cGVXcmFwcGVyID8gc3ltYm9sLnRzVHlwZSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdHlwZUtpbmRPZih0eXBlKTtcbiAgfVxuXG4gIGdldEJ1aWx0aW5UeXBlKGtpbmQ6IEJ1aWx0aW5UeXBlKTogU3ltYm9sIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy50eXBlQ2FjaGUuZ2V0KGtpbmQpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBjb25zdCB0eXBlID0gZ2V0VHNUeXBlRnJvbUJ1aWx0aW5UeXBlKGtpbmQsIHtcbiAgICAgICAgY2hlY2tlcjogdGhpcy5jaGVja2VyLFxuICAgICAgICBub2RlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgICAgfSk7XG4gICAgICByZXN1bHQgPVxuICAgICAgICAgIG5ldyBUeXBlV3JhcHBlcih0eXBlLCB7cHJvZ3JhbTogdGhpcy5wcm9ncmFtLCBjaGVja2VyOiB0aGlzLmNoZWNrZXIsIG5vZGU6IHRoaXMuc291cmNlfSk7XG4gICAgICB0aGlzLnR5cGVDYWNoZS5zZXQoa2luZCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFR5cGVVbmlvbiguLi50eXBlczogU3ltYm9sW10pOiBTeW1ib2wge1xuICAgIC8vIE5vIEFQSSBleGlzdHMgc28gcmV0dXJuIGFueSBpZiB0aGUgdHlwZXMgYXJlIG5vdCBhbGwgdGhlIHNhbWUgdHlwZS5cbiAgICBsZXQgcmVzdWx0OiBTeW1ib2x8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlcy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IHR5cGVzWzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZXNbaV0gIT0gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgfHwgdGhpcy5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5BbnkpO1xuICB9XG5cbiAgZ2V0QXJyYXlUeXBlKF90eXBlOiBTeW1ib2wpOiBTeW1ib2wge1xuICAgIHJldHVybiB0aGlzLmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSk7XG4gIH1cblxuICBnZXRFbGVtZW50VHlwZSh0eXBlOiBTeW1ib2wpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVXcmFwcGVyKSB7XG4gICAgICBjb25zdCB0eSA9IHR5cGUudHNUeXBlO1xuICAgICAgY29uc3QgdHlBcmdzID0gdHlwZS50eXBlQXJndW1lbnRzKCk7XG4gICAgICAvLyBUT0RPKGF5YXpoYWZpeik6IFRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzc3MTEgdG8gZXhwb3NlXG4gICAgICAvLyBgaXNBcnJheUxpa2VUeXBlYCBhcyBhIHB1YmxpYyBtZXRob2QuXG4gICAgICBpZiAoISh0aGlzLmNoZWNrZXIgYXMgYW55KS5pc0FycmF5TGlrZVR5cGUodHkpIHx8IHR5QXJncz8ubGVuZ3RoICE9PSAxKSByZXR1cm47XG4gICAgICByZXR1cm4gdHlBcmdzWzBdO1xuICAgIH1cbiAgfVxuXG4gIGdldE5vbk51bGxhYmxlVHlwZShzeW1ib2w6IFN5bWJvbCk6IFN5bWJvbCB7XG4gICAgaWYgKHN5bWJvbCBpbnN0YW5jZW9mIFR5cGVXcmFwcGVyICYmICh0eXBlb2YgdGhpcy5jaGVja2VyLmdldE5vbk51bGxhYmxlVHlwZSA9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgY29uc3QgdHNUeXBlID0gc3ltYm9sLnRzVHlwZTtcbiAgICAgIGNvbnN0IG5vbk51bGxhYmxlVHlwZSA9IHRoaXMuY2hlY2tlci5nZXROb25OdWxsYWJsZVR5cGUodHNUeXBlKTtcbiAgICAgIGlmIChub25OdWxsYWJsZVR5cGUgIT0gdHNUeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZVdyYXBwZXIobm9uTnVsbGFibGVUeXBlLCBzeW1ib2wuY29udGV4dCk7XG4gICAgICB9IGVsc2UgaWYgKG5vbk51bGxhYmxlVHlwZSA9PSB0c1R5cGUpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KTtcbiAgfVxuXG4gIGdldFBpcGVzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5waXBlc0NhY2hlO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnBpcGVzQ2FjaGUgPSB0aGlzLmZldGNoUGlwZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlQ29udGV4dCh0eXBlOiBTdGF0aWNTeW1ib2wpOiBTeW1ib2xUYWJsZXx1bmRlZmluZWQge1xuICAgIGNvbnN0IGNvbnRleHQ6IFR5cGVDb250ZXh0ID0ge25vZGU6IHRoaXMuc291cmNlLCBwcm9ncmFtOiB0aGlzLnByb2dyYW0sIGNoZWNrZXI6IHRoaXMuY2hlY2tlcn07XG4gICAgY29uc3QgdHlwZVN5bWJvbCA9IGZpbmRDbGFzc1N5bWJvbEluQ29udGV4dCh0eXBlLCBjb250ZXh0KTtcbiAgICBpZiAodHlwZVN5bWJvbCkge1xuICAgICAgY29uc3QgY29udGV4dFR5cGUgPSB0aGlzLmdldFRlbXBsYXRlUmVmQ29udGV4dFR5cGUodHlwZVN5bWJvbCwgY29udGV4dCk7XG4gICAgICBpZiAoY29udGV4dFR5cGUpIHJldHVybiBjb250ZXh0VHlwZS5tZW1iZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VHlwZVN5bWJvbCh0eXBlOiBTdGF0aWNTeW1ib2wpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBjb250ZXh0OiBUeXBlQ29udGV4dCA9IHtub2RlOiB0aGlzLnNvdXJjZSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLCBjaGVja2VyOiB0aGlzLmNoZWNrZXJ9O1xuICAgIGNvbnN0IHR5cGVTeW1ib2wgPSBmaW5kQ2xhc3NTeW1ib2xJbkNvbnRleHQodHlwZSwgY29udGV4dCk7XG4gICAgcmV0dXJuIHR5cGVTeW1ib2wgJiYgbmV3IFN5bWJvbFdyYXBwZXIodHlwZVN5bWJvbCwgY29udGV4dCk7XG4gIH1cblxuICBjcmVhdGVTeW1ib2xUYWJsZShzeW1ib2xzOiBTeW1ib2xEZWNsYXJhdGlvbltdKTogU3ltYm9sVGFibGUge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXBTeW1ib2xUYWJsZSgpO1xuICAgIHJlc3VsdC5hZGRBbGwoc3ltYm9scy5tYXAocyA9PiBuZXcgRGVjbGFyZWRTeW1ib2wocykpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWVyZ2VTeW1ib2xUYWJsZShzeW1ib2xUYWJsZXM6IFN5bWJvbFRhYmxlW10pOiBTeW1ib2xUYWJsZSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcFN5bWJvbFRhYmxlKCk7XG4gICAgZm9yIChjb25zdCBzeW1ib2xUYWJsZSBvZiBzeW1ib2xUYWJsZXMpIHtcbiAgICAgIHJlc3VsdC5hZGRBbGwoc3ltYm9sVGFibGUudmFsdWVzKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0U3BhbkF0KGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBTcGFufHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHNwYW5BdCh0aGlzLnNvdXJjZSwgbGluZSwgY29sdW1uKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGVSZWZDb250ZXh0VHlwZSh0eXBlU3ltYm9sOiB0cy5TeW1ib2wsIGNvbnRleHQ6IFR5cGVDb250ZXh0KTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuY2hlY2tlci5nZXRUeXBlT2ZTeW1ib2xBdExvY2F0aW9uKHR5cGVTeW1ib2wsIHRoaXMuc291cmNlKTtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHR5cGUuc3ltYm9sICYmIHR5cGUuc3ltYm9sLm1lbWJlcnMgJiZcbiAgICAgICAgZ2V0RnJvbVN5bWJvbFRhYmxlKHR5cGUuc3ltYm9sLm1lbWJlcnMhLCAnX19jb25zdHJ1Y3RvcicpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gY29uc3RydWN0b3IuZGVjbGFyYXRpb25zIVswXSBhcyB0cy5Db25zdHJ1Y3RvclR5cGVOb2RlO1xuICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgY29uc3RydWN0b3JEZWNsYXJhdGlvbi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNoZWNrZXIuZ2V0VHlwZUF0TG9jYXRpb24ocGFyYW1ldGVyLnR5cGUhKTtcbiAgICAgICAgaWYgKHR5cGUuc3ltYm9sIS5uYW1lID09ICdUZW1wbGF0ZVJlZicgJiYgaXNSZWZlcmVuY2VUeXBlKHR5cGUpKSB7XG4gICAgICAgICAgY29uc3QgdHlwZVdyYXBwZXIgPSBuZXcgVHlwZVdyYXBwZXIodHlwZSwgY29udGV4dCk7XG4gICAgICAgICAgY29uc3QgdHlwZUFyZ3VtZW50cyA9IHR5cGVXcmFwcGVyLnR5cGVBcmd1bWVudHMoKTtcbiAgICAgICAgICBpZiAodHlwZUFyZ3VtZW50cyAmJiB0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVBcmd1bWVudHNbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVDYWxsYWJsZSh0eXBlOiB0cy5UeXBlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHNpZ25hdHVyZXMgPSB0eXBlLmdldENhbGxTaWduYXR1cmVzKCk7XG4gIHJldHVybiBzaWduYXR1cmVzICYmIHNpZ25hdHVyZXMubGVuZ3RoICE9IDA7XG59XG5cbmZ1bmN0aW9uIHNpZ25hdHVyZXNPZih0eXBlOiB0cy5UeXBlLCBjb250ZXh0OiBUeXBlQ29udGV4dCk6IFNpZ25hdHVyZVtdIHtcbiAgcmV0dXJuIHR5cGUuZ2V0Q2FsbFNpZ25hdHVyZXMoKS5tYXAocyA9PiBuZXcgU2lnbmF0dXJlV3JhcHBlcihzLCBjb250ZXh0KSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFNpZ25hdHVyZSh0eXBlOiB0cy5UeXBlLCBjb250ZXh0OiBUeXBlQ29udGV4dCwgdHlwZXM6IFN5bWJvbFtdKTogU2lnbmF0dXJlfFxuICAgIHVuZGVmaW5lZCB7XG4gIC8vIFRPRE86IERvIGEgYmV0dGVyIGpvYiBvZiBzZWxlY3RpbmcgdGhlIHJpZ2h0IHNpZ25hdHVyZS4gVHlwZVNjcmlwdCBkb2VzIG5vdCBjdXJyZW50bHkgc3VwcG9ydCBhXG4gIC8vIFR5cGUgUmVsYXRpb25zaGlwIEFQSSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3ZzY29kZS1uZy1sYW5ndWFnZS1zZXJ2aWNlL2lzc3Vlcy8xNDMpLlxuICAvLyBDb25zaWRlciBjcmVhdGluZyBhIFR5cGVDaGVja0Jsb2NrIGhvc3QgaW4gdGhlIGxhbmd1YWdlIHNlcnZpY2UgdGhhdCBtYXkgYWxzbyBhY3QgYXMgYVxuICAvLyBzY3JhdGNocGFkIGZvciB0eXBlIGNvbXBhcmlzb25zLlxuICBjb25zdCBzaWduYXR1cmVzID0gdHlwZS5nZXRDYWxsU2lnbmF0dXJlcygpO1xuICBjb25zdCBwYXNzZWRJblR5cGVzOiBBcnJheTx0cy5UeXBlfHVuZGVmaW5lZD4gPSB0eXBlcy5tYXAodHlwZSA9PiB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUeXBlV3JhcHBlcikge1xuICAgICAgcmV0dXJuIHR5cGUudHNUeXBlO1xuICAgIH1cbiAgfSk7XG4gIC8vIFRyeSB0byBzZWxlY3QgYSBtYXRjaGluZyBzaWduYXR1cmUgaW4gd2hpY2ggYWxsIHBhcmFtZXRlciB0eXBlcyBtYXRjaC5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgaXMganVzdCBhIGJlc3QtZWZmb3J0IGFwcHJvYWNoLCBiZWNhdXNlIHdlJ3JlIGNoZWNraW5nIGZvclxuICAvLyBzdHJpY3QgdHlwZSBlcXVhbGl0eSByYXRoZXIgdGhhbiBjb21wYXRpYmlsaXR5LlxuICAvLyBGb3IgZXhhbXBsZSwgaWYgdGhlIHNpZ25hdHVyZSBjb250YWlucyBhIFJlYWRvbmx5QXJyYXk8bnVtYmVyPiBhbmQgdGhlXG4gIC8vIHBhc3NlZCBwYXJhbWV0ZXIgdHlwZSBpcyBhbiBBcnJheTxudW1iZXI+LCB0aGlzIHdpbGwgZmFpbC5cbiAgZnVuY3Rpb24gYWxsUGFyYW1ldGVyVHlwZXNNYXRjaChzaWduYXR1cmU6IHRzLlNpZ25hdHVyZSkge1xuICAgIGNvbnN0IHRjID0gY29udGV4dC5jaGVja2VyO1xuICAgIHJldHVybiBzaWduYXR1cmUuZ2V0UGFyYW1ldGVycygpLmV2ZXJ5KChwYXJhbWV0ZXI6IHRzLlN5bWJvbCwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gdGMuZ2V0VHlwZU9mU3ltYm9sQXRMb2NhdGlvbihwYXJhbWV0ZXIsIHBhcmFtZXRlci52YWx1ZURlY2xhcmF0aW9uKTtcbiAgICAgIHJldHVybiB0eXBlID09PSBwYXNzZWRJblR5cGVzW2ldO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGV4YWN0TWF0Y2ggPSBzaWduYXR1cmVzLmZpbmQoYWxsUGFyYW1ldGVyVHlwZXNNYXRjaCk7XG4gIGlmIChleGFjdE1hdGNoKSB7XG4gICAgcmV0dXJuIG5ldyBTaWduYXR1cmVXcmFwcGVyKGV4YWN0TWF0Y2gsIGNvbnRleHQpO1xuICB9XG4gIC8vIElmIG5vdCwgZmFsbGJhY2sgdG8gYSBuYWl2ZSBzZWxlY3Rpb25cbiAgcmV0dXJuIHNpZ25hdHVyZXMubGVuZ3RoID8gbmV3IFNpZ25hdHVyZVdyYXBwZXIoc2lnbmF0dXJlc1swXSwgY29udGV4dCkgOiB1bmRlZmluZWQ7XG59XG5cbmNsYXNzIFR5cGVXcmFwcGVyIGltcGxlbWVudHMgU3ltYm9sIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRzVHlwZTogdHMuVHlwZSwgcHVibGljIGNvbnRleHQ6IFR5cGVDb250ZXh0KSB7XG4gICAgaWYgKCF0c1R5cGUpIHtcbiAgICAgIHRocm93IEVycm9yKCdJbnRlcm5hbDogbnVsbCB0eXBlJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNoZWNrZXIudHlwZVRvU3RyaW5nKHRoaXMudHNUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBraW5kOiBEZWNsYXJhdGlvbktpbmQgPSAndHlwZSc7XG5cbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBzdHJpbmcgPSAndHlwZXNjcmlwdCc7XG5cbiAgcHVibGljIHJlYWRvbmx5IHR5cGU6IFN5bWJvbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHVibGljIHJlYWRvbmx5IGNvbnRhaW5lcjogU3ltYm9sfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgcmVhZG9ubHkgcHVibGljOiBib29sZWFuID0gdHJ1ZTtcblxuICBnZXQgY2FsbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVDYWxsYWJsZSh0aGlzLnRzVHlwZSk7XG4gIH1cblxuICBnZXQgbnVsbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5jaGVja2VyLmdldE5vbk51bGxhYmxlVHlwZSh0aGlzLnRzVHlwZSkgIT0gdGhpcy50c1R5cGU7XG4gIH1cblxuICBnZXQgZG9jdW1lbnRhdGlvbigpOiB0cy5TeW1ib2xEaXNwbGF5UGFydFtdIHtcbiAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnRzVHlwZS5nZXRTeW1ib2woKTtcbiAgICBpZiAoIXN5bWJvbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gc3ltYm9sLmdldERvY3VtZW50YXRpb25Db21tZW50KHRoaXMuY29udGV4dC5jaGVja2VyKTtcbiAgfVxuXG4gIGdldCBkZWZpbml0aW9uKCk6IERlZmluaXRpb258dW5kZWZpbmVkIHtcbiAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnRzVHlwZS5nZXRTeW1ib2woKTtcbiAgICByZXR1cm4gc3ltYm9sID8gZGVmaW5pdGlvbkZyb21Uc1N5bWJvbChzeW1ib2wpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgbWVtYmVycygpOiBTeW1ib2xUYWJsZSB7XG4gICAgLy8gU2hvdWxkIGNhbGwgZ2V0QXBwYXJlbnRQcm9wZXJ0aWVzKCkgaW5zdGVhZCBvZiBnZXRQcm9wZXJ0aWVzKCkgYmVjYXVzZVxuICAgIC8vIHRoZSBmb3JtZXIgaW5jbHVkZXMgcHJvcGVydGllcyBvbiB0aGUgYmFzZSBjbGFzcyB3aGVyZWFzIHRoZSBsYXR0ZXIgZG9lc1xuICAgIC8vIG5vdC4gVGhpcyBwcm92aWRlcyBwcm9wZXJ0aWVzIGxpa2UgLmJpbmQoKSwgLmNhbGwoKSwgLmFwcGx5KCksIGV0YyBmb3JcbiAgICAvLyBmdW5jdGlvbnMuXG4gICAgcmV0dXJuIG5ldyBTeW1ib2xUYWJsZVdyYXBwZXIodGhpcy50c1R5cGUuZ2V0QXBwYXJlbnRQcm9wZXJ0aWVzKCksIHRoaXMuY29udGV4dCwgdGhpcy50c1R5cGUpO1xuICB9XG5cbiAgc2lnbmF0dXJlcygpOiBTaWduYXR1cmVbXSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZXNPZih0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIHNlbGVjdFNpZ25hdHVyZSh0eXBlczogU3ltYm9sW10pOiBTaWduYXR1cmV8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gc2VsZWN0U2lnbmF0dXJlKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQsIHR5cGVzKTtcbiAgfVxuXG4gIGluZGV4ZWQodHlwZTogU3ltYm9sLCB2YWx1ZTogYW55KTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIFR5cGVXcmFwcGVyKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdHlwZUtpbmQgPSB0eXBlS2luZE9mKHR5cGUudHNUeXBlKTtcbiAgICBzd2l0Y2ggKHR5cGVLaW5kKSB7XG4gICAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgY29uc3QgblR5cGUgPSB0aGlzLnRzVHlwZS5nZXROdW1iZXJJbmRleFR5cGUoKTtcbiAgICAgICAgaWYgKG5UeXBlKSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSByaWdodCB0dXBsZSB0eXBlIGJ5IHZhbHVlLCBsaWtlICd2YXIgdDogW251bWJlciwgc3RyaW5nXTsnXG4gICAgICAgICAgaWYgKG5UeXBlLmlzVW5pb24oKSkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHVuZGVmaW5lZCBpZiBhcnJheSBpbmRleCBvdXQgb2YgYm91bmQuXG4gICAgICAgICAgICByZXR1cm4gblR5cGUudHlwZXNbdmFsdWVdICYmIG5ldyBUeXBlV3JhcHBlcihuVHlwZS50eXBlc1t2YWx1ZV0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgVHlwZVdyYXBwZXIoblR5cGUsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGNhc2UgQnVpbHRpblR5cGUuU3RyaW5nOlxuICAgICAgICBjb25zdCBzVHlwZSA9IHRoaXMudHNUeXBlLmdldFN0cmluZ0luZGV4VHlwZSgpO1xuICAgICAgICByZXR1cm4gc1R5cGUgJiYgbmV3IFR5cGVXcmFwcGVyKHNUeXBlLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHR5cGVBcmd1bWVudHMoKTogU3ltYm9sW118dW5kZWZpbmVkIHtcbiAgICBpZiAoIWlzUmVmZXJlbmNlVHlwZSh0aGlzLnRzVHlwZSkpIHJldHVybjtcblxuICAgIGNvbnN0IHR5cGVSZWZlcmVuY2UgPSAodGhpcy50c1R5cGUgYXMgdHMuVHlwZVJlZmVyZW5jZSk7XG4gICAgbGV0IHR5cGVBcmd1bWVudHM6IFJlYWRvbmx5QXJyYXk8dHMuVHlwZT58dW5kZWZpbmVkO1xuICAgIHR5cGVBcmd1bWVudHMgPSB0aGlzLmNvbnRleHQuY2hlY2tlci5nZXRUeXBlQXJndW1lbnRzKHR5cGVSZWZlcmVuY2UpO1xuICAgIGlmICghdHlwZUFyZ3VtZW50cykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdHlwZUFyZ3VtZW50cy5tYXAodGEgPT4gbmV3IFR5cGVXcmFwcGVyKHRhLCB0aGlzLmNvbnRleHQpKTtcbiAgfVxufVxuXG4vLyBJZiBzdHJpbmdJbmRleFR5cGUgYSBwcmltaXRpdmUgdHlwZShlLmcuICdzdHJpbmcnKSwgdGhlIFN5bWJvbCBpcyB1bmRlZmluZWQ7XG4vLyBhbmQgaW4gQXN0VHlwZS5yZXNvbHZlUHJvcGVydHlSZWFkIG1ldGhvZCwgdGhlIFN5bWJvbC50eXBlIHNob3VsZCBnZXQgdGhlIHJpZ2h0IHR5cGUuXG5jbGFzcyBTdHJpbmdJbmRleFR5cGVXcmFwcGVyIGV4dGVuZHMgVHlwZVdyYXBwZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9IG5ldyBUeXBlV3JhcHBlcih0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0KTtcbn1cblxuY2xhc3MgU3ltYm9sV3JhcHBlciBpbXBsZW1lbnRzIFN5bWJvbCB7XG4gIHByaXZhdGUgc3ltYm9sOiB0cy5TeW1ib2w7XG4gIHByaXZhdGUgX21lbWJlcnM/OiBTeW1ib2xUYWJsZTtcblxuICBwdWJsaWMgcmVhZG9ubHkgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBzdHJpbmcgPSAndHlwZXNjcmlwdCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBzeW1ib2w6IHRzLlN5bWJvbCxcbiAgICAgIC8qKiBUeXBlU2NyaXB0IHR5cGUgY29udGV4dCBvZiB0aGUgc3ltYm9sLiAqL1xuICAgICAgcHJpdmF0ZSBjb250ZXh0OiBUeXBlQ29udGV4dCxcbiAgICAgIC8qKlxuICAgICAgICogVHlwZSBvZiB0aGUgVHlwZVNjcmlwdCBzeW1ib2wsIGlmIGtub3duLiBJZiBub3QgcHJvdmlkZWQsIHRoZSB0eXBlIG9mIHRoZSBzeW1ib2xcbiAgICAgICAqIHdpbGwgYmUgZGV0ZXJtaW5lZCBkeW5hbWljYWxseTsgc2VlIGBTeW1ib2xXcmFwcGVyI3RzVHlwZWAuXG4gICAgICAgKi9cbiAgICAgIHByaXZhdGUgX3RzVHlwZT86IHRzLlR5cGUpIHtcbiAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbCAmJiBjb250ZXh0ICYmIChzeW1ib2wuZmxhZ3MgJiB0cy5TeW1ib2xGbGFncy5BbGlhcykgP1xuICAgICAgICBjb250ZXh0LmNoZWNrZXIuZ2V0QWxpYXNlZFN5bWJvbChzeW1ib2wpIDpcbiAgICAgICAgc3ltYm9sO1xuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2wubmFtZTtcbiAgfVxuXG4gIGdldCBraW5kKCk6IERlY2xhcmF0aW9uS2luZCB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGFibGUgPyAnbWV0aG9kJyA6ICdwcm9wZXJ0eSc7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBUeXBlV3JhcHBlciB7XG4gICAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcih0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGdldENvbnRhaW5lck9mKHRoaXMuc3ltYm9sLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IHB1YmxpYygpOiBib29sZWFuIHtcbiAgICAvLyBTeW1ib2xzIHRoYXQgYXJlIG5vdCBleHBsaWNpdGx5IG1hZGUgcHJpdmF0ZSBhcmUgcHVibGljLlxuICAgIHJldHVybiAhaXNTeW1ib2xQcml2YXRlKHRoaXMuc3ltYm9sKTtcbiAgfVxuXG4gIGdldCBjYWxsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZUNhbGxhYmxlKHRoaXMudHNUeXBlKTtcbiAgfVxuXG4gIGdldCBkZWZpbml0aW9uKCk6IERlZmluaXRpb24ge1xuICAgIHJldHVybiBkZWZpbml0aW9uRnJvbVRzU3ltYm9sKHRoaXMuc3ltYm9sKTtcbiAgfVxuXG4gIGdldCBkb2N1bWVudGF0aW9uKCk6IHRzLlN5bWJvbERpc3BsYXlQYXJ0W10ge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbC5nZXREb2N1bWVudGF0aW9uQ29tbWVudCh0aGlzLmNvbnRleHQuY2hlY2tlcik7XG4gIH1cblxuICBtZW1iZXJzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICBpZiAoIXRoaXMuX21lbWJlcnMpIHtcbiAgICAgIGlmICgodGhpcy5zeW1ib2wuZmxhZ3MgJiAodHMuU3ltYm9sRmxhZ3MuQ2xhc3MgfCB0cy5TeW1ib2xGbGFncy5JbnRlcmZhY2UpKSAhPSAwKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmVkVHlwZSA9IHRoaXMuY29udGV4dC5jaGVja2VyLmdldERlY2xhcmVkVHlwZU9mU3ltYm9sKHRoaXMuc3ltYm9sKTtcbiAgICAgICAgY29uc3QgdHlwZVdyYXBwZXIgPSBuZXcgVHlwZVdyYXBwZXIoZGVjbGFyZWRUeXBlLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLl9tZW1iZXJzID0gdHlwZVdyYXBwZXIubWVtYmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWVtYmVycyA9IG5ldyBTeW1ib2xUYWJsZVdyYXBwZXIodGhpcy5zeW1ib2wubWVtYmVycyEsIHRoaXMuY29udGV4dCwgdGhpcy50c1R5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVtYmVycztcbiAgfVxuXG4gIHNpZ25hdHVyZXMoKTogU2lnbmF0dXJlW10ge1xuICAgIHJldHVybiBzaWduYXR1cmVzT2YodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBzZWxlY3RTaWduYXR1cmUodHlwZXM6IFN5bWJvbFtdKTogU2lnbmF0dXJlfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHNlbGVjdFNpZ25hdHVyZSh0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0LCB0eXBlcyk7XG4gIH1cblxuICBpbmRleGVkKF9hcmd1bWVudDogU3ltYm9sKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHR5cGVBcmd1bWVudHMoKTogU3ltYm9sW118dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50eXBlLnR5cGVBcmd1bWVudHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHRzVHlwZSgpOiB0cy5UeXBlIHtcbiAgICBsZXQgdHlwZSA9IHRoaXMuX3RzVHlwZTtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHR5cGUgPSB0aGlzLl90c1R5cGUgPVxuICAgICAgICAgIHRoaXMuY29udGV4dC5jaGVja2VyLmdldFR5cGVPZlN5bWJvbEF0TG9jYXRpb24odGhpcy5zeW1ib2wsIHRoaXMuY29udGV4dC5ub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuY2xhc3MgRGVjbGFyZWRTeW1ib2wgaW1wbGVtZW50cyBTeW1ib2wge1xuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IHN0cmluZyA9ICduZy10ZW1wbGF0ZSc7XG5cbiAgcHVibGljIHJlYWRvbmx5IG51bGxhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHJlYWRvbmx5IHB1YmxpYzogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWNsYXJhdGlvbjogU3ltYm9sRGVjbGFyYXRpb24pIHt9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24ubmFtZTtcbiAgfVxuXG4gIGdldCBraW5kKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLmtpbmQ7XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBTeW1ib2wge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLnR5cGU7XG4gIH1cblxuICBnZXQgY2FsbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZS5jYWxsYWJsZTtcbiAgfVxuXG4gIGdldCBkZWZpbml0aW9uKCk6IERlZmluaXRpb24ge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLmRlZmluaXRpb247XG4gIH1cblxuICBnZXQgZG9jdW1lbnRhdGlvbigpOiB0cy5TeW1ib2xEaXNwbGF5UGFydFtdIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbi50eXBlLmRvY3VtZW50YXRpb247XG4gIH1cblxuICBtZW1iZXJzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICByZXR1cm4gdGhpcy50eXBlLm1lbWJlcnMoKTtcbiAgfVxuXG4gIHNpZ25hdHVyZXMoKTogU2lnbmF0dXJlW10ge1xuICAgIHJldHVybiB0aGlzLnR5cGUuc2lnbmF0dXJlcygpO1xuICB9XG5cbiAgc2VsZWN0U2lnbmF0dXJlKHR5cGVzOiBTeW1ib2xbXSk6IFNpZ25hdHVyZXx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnR5cGUuc2VsZWN0U2lnbmF0dXJlKHR5cGVzKTtcbiAgfVxuXG4gIHR5cGVBcmd1bWVudHMoKTogU3ltYm9sW118dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50eXBlLnR5cGVBcmd1bWVudHMoKTtcbiAgfVxuXG4gIGluZGV4ZWQoX2FyZ3VtZW50OiBTeW1ib2wpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmNsYXNzIFNpZ25hdHVyZVdyYXBwZXIgaW1wbGVtZW50cyBTaWduYXR1cmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZ25hdHVyZTogdHMuU2lnbmF0dXJlLCBwcml2YXRlIGNvbnRleHQ6IFR5cGVDb250ZXh0KSB7fVxuXG4gIGdldCBhcmd1bWVudHMoKTogU3ltYm9sVGFibGUge1xuICAgIHJldHVybiBuZXcgU3ltYm9sVGFibGVXcmFwcGVyKHRoaXMuc2lnbmF0dXJlLmdldFBhcmFtZXRlcnMoKSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCByZXN1bHQoKTogU3ltYm9sIHtcbiAgICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKHRoaXMuc2lnbmF0dXJlLmdldFJldHVyblR5cGUoKSwgdGhpcy5jb250ZXh0KTtcbiAgfVxufVxuXG5jbGFzcyBTaWduYXR1cmVSZXN1bHRPdmVycmlkZSBpbXBsZW1lbnRzIFNpZ25hdHVyZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lnbmF0dXJlOiBTaWduYXR1cmUsIHByaXZhdGUgcmVzdWx0VHlwZTogU3ltYm9sKSB7fVxuXG4gIGdldCBhcmd1bWVudHMoKTogU3ltYm9sVGFibGUge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZS5hcmd1bWVudHM7XG4gIH1cblxuICBnZXQgcmVzdWx0KCk6IFN5bWJvbCB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0VHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b1N5bWJvbFRhYmxlRmFjdG9yeShzeW1ib2xzOiB0cy5TeW1ib2xbXSk6IHRzLlN5bWJvbFRhYmxlIHtcbiAgLy8g4oiAIFR5cGVzY3JpcHQgdmVyc2lvbiA+PSAyLjIsIGBTeW1ib2xUYWJsZWAgaXMgaW1wbGVtZW50ZWQgYXMgYW4gRVM2IGBNYXBgXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXA8c3RyaW5nLCB0cy5TeW1ib2w+KCk7XG4gIGZvciAoY29uc3Qgc3ltYm9sIG9mIHN5bWJvbHMpIHtcbiAgICByZXN1bHQuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCBhcyB0cy5TeW1ib2xUYWJsZTtcbn1cblxuZnVuY3Rpb24gdG9TeW1ib2xzKHN5bWJvbFRhYmxlOiB0cy5TeW1ib2xUYWJsZXx1bmRlZmluZWQpOiB0cy5TeW1ib2xbXSB7XG4gIGlmICghc3ltYm9sVGFibGUpIHJldHVybiBbXTtcblxuICBjb25zdCB0YWJsZSA9IHN5bWJvbFRhYmxlIGFzIGFueTtcblxuICBpZiAodHlwZW9mIHRhYmxlLnZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRhYmxlLnZhbHVlcygpKSBhcyB0cy5TeW1ib2xbXTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdDogdHMuU3ltYm9sW10gPSBbXTtcblxuICBjb25zdCBvd24gPSB0eXBlb2YgdGFibGUuaGFzT3duUHJvcGVydHkgPT09ICdmdW5jdGlvbicgP1xuICAgICAgKG5hbWU6IHN0cmluZykgPT4gdGFibGUuaGFzT3duUHJvcGVydHkobmFtZSkgOlxuICAgICAgKG5hbWU6IHN0cmluZykgPT4gISF0YWJsZVtuYW1lXTtcblxuICBmb3IgKGNvbnN0IG5hbWUgaW4gdGFibGUpIHtcbiAgICBpZiAob3duKG5hbWUpKSB7XG4gICAgICByZXN1bHQucHVzaCh0YWJsZVtuYW1lXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmNsYXNzIFN5bWJvbFRhYmxlV3JhcHBlciBpbXBsZW1lbnRzIFN5bWJvbFRhYmxlIHtcbiAgcHJpdmF0ZSBzeW1ib2xzOiB0cy5TeW1ib2xbXTtcbiAgcHJpdmF0ZSBzeW1ib2xUYWJsZTogdHMuU3ltYm9sVGFibGU7XG4gIHByaXZhdGUgc3RyaW5nSW5kZXhUeXBlPzogdHMuVHlwZTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHF1ZXJ5YWJsZSB0YWJsZSBvZiBzeW1ib2xzIGJlbG9uZ2luZyB0byBhIFR5cGVTY3JpcHQgZW50aXR5LlxuICAgKiBAcGFyYW0gc3ltYm9scyBzeW1ib2xzIHRvIHF1ZXJ5IGJlbG9uZ2luZyB0byB0aGUgZW50aXR5XG4gICAqIEBwYXJhbSBjb250ZXh0IHByb2dyYW0gY29udGV4dFxuICAgKiBAcGFyYW0gdHlwZSBvcmlnaW5hbCBUeXBlU2NyaXB0IHR5cGUgb2YgZW50aXR5IG93bmluZyB0aGUgc3ltYm9scywgaWYga25vd25cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN5bWJvbHM6IHRzLlN5bWJvbFRhYmxlfHRzLlN5bWJvbFtdLCBwcml2YXRlIGNvbnRleHQ6IFR5cGVDb250ZXh0LCB0eXBlPzogdHMuVHlwZSkge1xuICAgIHN5bWJvbHMgPSBzeW1ib2xzIHx8IFtdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3ltYm9scykpIHtcbiAgICAgIHRoaXMuc3ltYm9scyA9IHN5bWJvbHM7XG4gICAgICB0aGlzLnN5bWJvbFRhYmxlID0gdG9TeW1ib2xUYWJsZUZhY3Rvcnkoc3ltYm9scyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3ltYm9scyA9IHRvU3ltYm9scyhzeW1ib2xzKTtcbiAgICAgIHRoaXMuc3ltYm9sVGFibGUgPSBzeW1ib2xzO1xuICAgIH1cblxuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzLnN0cmluZ0luZGV4VHlwZSA9IHR5cGUuZ2V0U3RyaW5nSW5kZXhUeXBlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLmxlbmd0aDtcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZyk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIGNvbnN0IHN5bWJvbCA9IGdldEZyb21TeW1ib2xUYWJsZSh0aGlzLnN5bWJvbFRhYmxlLCBrZXkpO1xuICAgIGlmIChzeW1ib2wpIHtcbiAgICAgIHJldHVybiBuZXcgU3ltYm9sV3JhcHBlcihzeW1ib2wsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RyaW5nSW5kZXhUeXBlKSB7XG4gICAgICAvLyBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0IGFzIGFuIGV4cGxpY2l0IHN5bWJvbCBvbiB0aGUgdHlwZSwgaXQgbWF5IGJlIGFjY2Vzc2luZyBhIHN0cmluZ1xuICAgICAgLy8gaW5kZXggc2lnbmF0dXJlIHVzaW5nIGRvdCBub3RhdGlvbjpcbiAgICAgIC8vXG4gICAgICAvLyAgIGNvbnN0IG9iajxUPjogeyBba2V5OiBzdHJpbmddOiBUIH07XG4gICAgICAvLyAgIG9iai5zdHJpbmdJbmRleCAvLyBlcXVpdmFsZW50IHRvIG9ialsnc3RyaW5nSW5kZXgnXTtcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIHJldHVybiB0aGUgdHlwZSBpbmRleGVkIGJ5IGFuIGFyYml0cmFyeSBzdHJpbmcga2V5LlxuICAgICAgcmV0dXJuIG5ldyBTdHJpbmdJbmRleFR5cGVXcmFwcGVyKHRoaXMuc3RyaW5nSW5kZXhUeXBlLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YWJsZTogYW55ID0gdGhpcy5zeW1ib2xUYWJsZTtcbiAgICByZXR1cm4gKCh0eXBlb2YgdGFibGUuaGFzID09PSAnZnVuY3Rpb24nKSA/IHRhYmxlLmhhcyhrZXkpIDogdGFibGVba2V5XSAhPSBudWxsKSB8fFxuICAgICAgICB0aGlzLnN0cmluZ0luZGV4VHlwZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFsdWVzKCk6IFN5bWJvbFtdIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChzID0+IG5ldyBTeW1ib2xXcmFwcGVyKHMsIHRoaXMuY29udGV4dCkpO1xuICB9XG59XG5cbmNsYXNzIE1hcFN5bWJvbFRhYmxlIGltcGxlbWVudHMgU3ltYm9sVGFibGUge1xuICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTeW1ib2w+KCk7XG4gIHByaXZhdGUgX3ZhbHVlczogU3ltYm9sW10gPSBbXTtcblxuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1hcC5zaXplO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpO1xuICB9XG5cbiAgYWRkKHN5bWJvbDogU3ltYm9sKSB7XG4gICAgaWYgKHRoaXMubWFwLmhhcyhzeW1ib2wubmFtZSkpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5tYXAuZ2V0KHN5bWJvbC5uYW1lKSE7XG4gICAgICB0aGlzLl92YWx1ZXNbdGhpcy5fdmFsdWVzLmluZGV4T2YocHJldmlvdXMpXSA9IHN5bWJvbDtcbiAgICB9XG4gICAgdGhpcy5tYXAuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHN5bWJvbCk7XG4gIH1cblxuICBhZGRBbGwoc3ltYm9sczogU3ltYm9sW10pIHtcbiAgICBmb3IgKGNvbnN0IHN5bWJvbCBvZiBzeW1ib2xzKSB7XG4gICAgICB0aGlzLmFkZChzeW1ib2wpO1xuICAgIH1cbiAgfVxuXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcbiAgfVxuXG4gIHZhbHVlcygpOiBTeW1ib2xbXSB7XG4gICAgLy8gU3dpdGNoIHRvIHRoaXMubWFwLnZhbHVlcyBvbmNlIGl0ZXJhYmxlcyBhcmUgc3VwcG9ydGVkIGJ5IHRoZSB0YXJnZXQgbGFuZ3VhZ2UuXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxufVxuXG5jbGFzcyBQaXBlc1RhYmxlIGltcGxlbWVudHMgU3ltYm9sVGFibGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXSwgcHJpdmF0ZSBjb250ZXh0OiBUeXBlQ29udGV4dCkge31cblxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waXBlcy5sZW5ndGg7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBwaXBlID0gdGhpcy5waXBlcy5maW5kKHBpcGUgPT4gcGlwZS5uYW1lID09IGtleSk7XG4gICAgaWYgKHBpcGUpIHtcbiAgICAgIHJldHVybiBuZXcgUGlwZVN5bWJvbChwaXBlLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBpcGVzLmZpbmQocGlwZSA9PiBwaXBlLm5hbWUgPT0ga2V5KSAhPSBudWxsO1xuICB9XG5cbiAgdmFsdWVzKCk6IFN5bWJvbFtdIHtcbiAgICByZXR1cm4gdGhpcy5waXBlcy5tYXAocGlwZSA9PiBuZXcgUGlwZVN5bWJvbChwaXBlLCB0aGlzLmNvbnRleHQpKTtcbiAgfVxufVxuXG4vLyBUaGlzIG1hdGNoZXMgLmQudHMgZmlsZXMgdGhhdCBsb29rIGxpa2UgXCIuLi4vPHBhY2thZ2UtbmFtZT4vPHBhY2thZ2UtbmFtZT4uZC50c1wiLFxuY29uc3QgSU5ERVhfUEFUVEVSTiA9IC9bXFxcXC9dKFteXFxcXC9dKylbXFxcXC9dXFwxXFwuZFxcLnRzJC87XG5cbmNsYXNzIFBpcGVTeW1ib2wgaW1wbGVtZW50cyBTeW1ib2wge1xuICBwcml2YXRlIF90c1R5cGU6IHRzLlR5cGV8dW5kZWZpbmVkO1xuICBwdWJsaWMgcmVhZG9ubHkga2luZDogRGVjbGFyYXRpb25LaW5kID0gJ3BpcGUnO1xuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IHN0cmluZyA9ICd0eXBlc2NyaXB0JztcbiAgcHVibGljIHJlYWRvbmx5IGNvbnRhaW5lcjogU3ltYm9sfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHJlYWRvbmx5IGNhbGxhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHJlYWRvbmx5IG51bGxhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWFkb25seSBwdWJsaWM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGlwZTogQ29tcGlsZVBpcGVTdW1tYXJ5LCBwcml2YXRlIGNvbnRleHQ6IFR5cGVDb250ZXh0KSB7fVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGlwZS5uYW1lO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogVHlwZVdyYXBwZXIge1xuICAgIHJldHVybiBuZXcgVHlwZVdyYXBwZXIodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXQgZGVmaW5pdGlvbigpOiBEZWZpbml0aW9ufHVuZGVmaW5lZCB7XG4gICAgY29uc3Qgc3ltYm9sID0gdGhpcy50c1R5cGUuZ2V0U3ltYm9sKCk7XG4gICAgcmV0dXJuIHN5bWJvbCA/IGRlZmluaXRpb25Gcm9tVHNTeW1ib2woc3ltYm9sKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBkb2N1bWVudGF0aW9uKCk6IHRzLlN5bWJvbERpc3BsYXlQYXJ0W10ge1xuICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMudHNUeXBlLmdldFN5bWJvbCgpO1xuICAgIGlmICghc3ltYm9sKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBzeW1ib2wuZ2V0RG9jdW1lbnRhdGlvbkNvbW1lbnQodGhpcy5jb250ZXh0LmNoZWNrZXIpO1xuICB9XG5cbiAgbWVtYmVycygpOiBTeW1ib2xUYWJsZSB7XG4gICAgcmV0dXJuIEVtcHR5VGFibGUuaW5zdGFuY2U7XG4gIH1cblxuICBzaWduYXR1cmVzKCk6IFNpZ25hdHVyZVtdIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlc09mKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgc2VsZWN0U2lnbmF0dXJlKHR5cGVzOiBTeW1ib2xbXSk6IFNpZ25hdHVyZXx1bmRlZmluZWQge1xuICAgIGxldCBzaWduYXR1cmUgPSBzZWxlY3RTaWduYXR1cmUodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCwgdHlwZXMpITtcbiAgICBpZiAodHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyVHlwZSA9IHR5cGVzWzBdO1xuICAgICAgbGV0IHJlc3VsdFR5cGU6IFN5bWJvbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBzd2l0Y2ggKHRoaXMubmFtZSkge1xuICAgICAgICBjYXNlICdhc3luYyc6XG4gICAgICAgICAgLy8gR2V0IHR5cGUgYXJndW1lbnQgb2YgJ09ic2VydmFibGUnLCAnUHJvbWlzZScsIG9yICdFdmVudEVtaXR0ZXInLlxuICAgICAgICAgIGNvbnN0IHRBcmdzID0gcGFyYW1ldGVyVHlwZS50eXBlQXJndW1lbnRzKCk7XG4gICAgICAgICAgaWYgKHRBcmdzICYmIHRBcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0VHlwZSA9IHRBcmdzWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2xpY2UnOlxuICAgICAgICAgIHJlc3VsdFR5cGUgPSBwYXJhbWV0ZXJUeXBlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdFR5cGUpIHtcbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZVJlc3VsdE92ZXJyaWRlKHNpZ25hdHVyZSwgcmVzdWx0VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBpbmRleGVkKF9hcmd1bWVudDogU3ltYm9sKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHR5cGVBcmd1bWVudHMoKTogU3ltYm9sW118dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50eXBlLnR5cGVBcmd1bWVudHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHRzVHlwZSgpOiB0cy5UeXBlIHtcbiAgICBsZXQgdHlwZSA9IHRoaXMuX3RzVHlwZTtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIGNvbnN0IGNsYXNzU3ltYm9sID0gdGhpcy5maW5kQ2xhc3NTeW1ib2wodGhpcy5waXBlLnR5cGUucmVmZXJlbmNlKTtcbiAgICAgIGlmIChjbGFzc1N5bWJvbCkge1xuICAgICAgICB0eXBlID0gdGhpcy5fdHNUeXBlID0gdGhpcy5maW5kVHJhbnNmb3JtTWV0aG9kVHlwZShjbGFzc1N5bWJvbCkhO1xuICAgICAgfVxuICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgIHR5cGUgPSB0aGlzLl90c1R5cGUgPSBnZXRUc1R5cGVGcm9tQnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55LCB0aGlzLmNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZENsYXNzU3ltYm9sKHR5cGU6IFN0YXRpY1N5bWJvbCk6IHRzLlN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiBmaW5kQ2xhc3NTeW1ib2xJbkNvbnRleHQodHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFRyYW5zZm9ybU1ldGhvZFR5cGUoY2xhc3NTeW1ib2w6IHRzLlN5bWJvbCk6IHRzLlR5cGV8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBjbGFzc1R5cGUgPSB0aGlzLmNvbnRleHQuY2hlY2tlci5nZXREZWNsYXJlZFR5cGVPZlN5bWJvbChjbGFzc1N5bWJvbCk7XG4gICAgaWYgKGNsYXNzVHlwZSkge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gY2xhc3NUeXBlLmdldFByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jaGVja2VyLmdldFR5cGVPZlN5bWJvbEF0TG9jYXRpb24odHJhbnNmb3JtLCB0aGlzLmNvbnRleHQubm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRDbGFzc1N5bWJvbEluQ29udGV4dCh0eXBlOiBTdGF0aWNTeW1ib2wsIGNvbnRleHQ6IFR5cGVDb250ZXh0KTogdHMuU3ltYm9sfHVuZGVmaW5lZCB7XG4gIGxldCBzb3VyY2VGaWxlID0gY29udGV4dC5wcm9ncmFtLmdldFNvdXJjZUZpbGUodHlwZS5maWxlUGF0aCk7XG4gIGlmICghc291cmNlRmlsZSkge1xuICAgIC8vIFRoaXMgaGFuZGxlcyBhIGNhc2Ugd2hlcmUgYW4gPHBhY2thZ2VOYW1lPi9pbmRleC5kLnRzIGFuZCBhIDxwYWNrYWdlTmFtZT4vPHBhY2thZ2VOYW1lPi5kLnRzXG4gICAgLy8gYXJlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS4gSWYgd2UgYXJlIGxvb2tpbmcgZm9yIDxwYWNrYWdlTmFtZT4vPHBhY2thZ2VOYW1lPiBhbmQgZGlkbid0XG4gICAgLy8gZmluZCBpdCwgbG9vayBmb3IgPHBhY2thZ2VOYW1lPi9pbmRleC5kLnRzIGFzIHRoZSBwcm9ncmFtIG1pZ2h0IGhhdmUgZm91bmQgdGhhdCBpbnN0ZWFkLlxuICAgIGNvbnN0IHAgPSB0eXBlLmZpbGVQYXRoO1xuICAgIGNvbnN0IG0gPSBwLm1hdGNoKElOREVYX1BBVFRFUk4pO1xuICAgIGlmIChtKSB7XG4gICAgICBjb25zdCBpbmRleFZlcnNpb24gPSBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKHApLCAnaW5kZXguZC50cycpO1xuICAgICAgc291cmNlRmlsZSA9IGNvbnRleHQucHJvZ3JhbS5nZXRTb3VyY2VGaWxlKGluZGV4VmVyc2lvbik7XG4gICAgfVxuICB9XG4gIGlmIChzb3VyY2VGaWxlKSB7XG4gICAgY29uc3QgbW9kdWxlU3ltYm9sID0gKHNvdXJjZUZpbGUgYXMgYW55KS5tb2R1bGUgfHwgKHNvdXJjZUZpbGUgYXMgYW55KS5zeW1ib2w7XG4gICAgY29uc3QgZXhwb3J0cyA9IGNvbnRleHQuY2hlY2tlci5nZXRFeHBvcnRzT2ZNb2R1bGUobW9kdWxlU3ltYm9sKTtcbiAgICByZXR1cm4gKGV4cG9ydHMgfHwgW10pLmZpbmQoc3ltYm9sID0+IHN5bWJvbC5uYW1lID09IHR5cGUubmFtZSk7XG4gIH1cbn1cblxuY2xhc3MgRW1wdHlUYWJsZSBpbXBsZW1lbnRzIFN5bWJvbFRhYmxlIHtcbiAgcHVibGljIHJlYWRvbmx5IHNpemU6IG51bWJlciA9IDA7XG4gIGdldChfa2V5OiBzdHJpbmcpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGhhcyhfa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFsdWVzKCk6IFN5bWJvbFtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgc3RhdGljIGluc3RhbmNlID0gbmV3IEVtcHR5VGFibGUoKTtcbn1cblxuZnVuY3Rpb24gaXNTeW1ib2xQcml2YXRlKHM6IHRzLlN5bWJvbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gISFzLnZhbHVlRGVjbGFyYXRpb24gJiYgaXNQcml2YXRlKHMudmFsdWVEZWNsYXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdldFRzVHlwZUZyb21CdWlsdGluVHlwZShidWlsdGluVHlwZTogQnVpbHRpblR5cGUsIGN0eDogVHlwZUNvbnRleHQpOiB0cy5UeXBlIHtcbiAgbGV0IHN5bnRheEtpbmQ6IHRzLlN5bnRheEtpbmQ7XG4gIHN3aXRjaCAoYnVpbHRpblR5cGUpIHtcbiAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueTpcbiAgICAgIHN5bnRheEtpbmQgPSB0cy5TeW50YXhLaW5kLkFueUtleXdvcmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJ1aWx0aW5UeXBlLkJvb2xlYW46XG4gICAgICBzeW50YXhLaW5kID0gdHMuU3ludGF4S2luZC5Cb29sZWFuS2V5d29yZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQnVpbHRpblR5cGUuTnVsbDpcbiAgICAgIHN5bnRheEtpbmQgPSB0cy5TeW50YXhLaW5kLk51bGxLZXl3b3JkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCdWlsdGluVHlwZS5OdW1iZXI6XG4gICAgICBzeW50YXhLaW5kID0gdHMuU3ludGF4S2luZC5OdW1iZXJLZXl3b3JkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCdWlsdGluVHlwZS5TdHJpbmc6XG4gICAgICBzeW50YXhLaW5kID0gdHMuU3ludGF4S2luZC5TdHJpbmdLZXl3b3JkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCdWlsdGluVHlwZS5VbmRlZmluZWQ6XG4gICAgICBzeW50YXhLaW5kID0gdHMuU3ludGF4S2luZC5VbmRlZmluZWRLZXl3b3JkO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW50ZXJuYWwgZXJyb3IsIHVuaGFuZGxlZCBsaXRlcmFsIGtpbmQgJHtidWlsdGluVHlwZX06JHtCdWlsdGluVHlwZVtidWlsdGluVHlwZV19YCk7XG4gIH1cbiAgY29uc3Qgbm9kZSA9IHRzLmNyZWF0ZU5vZGUoc3ludGF4S2luZCk7XG4gIChub2RlLnBhcmVudCBhcyB0cy5Ob2RlKSA9IHRzLmNyZWF0ZUVtcHR5U3RhdGVtZW50KCk7XG4gIHJldHVybiBjdHguY2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihub2RlKTtcbn1cblxuZnVuY3Rpb24gc3BhbkF0KHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsIGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBTcGFufHVuZGVmaW5lZCB7XG4gIGlmIChsaW5lICE9IG51bGwgJiYgY29sdW1uICE9IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRzLmdldFBvc2l0aW9uT2ZMaW5lQW5kQ2hhcmFjdGVyKHNvdXJjZUZpbGUsIGxpbmUsIGNvbHVtbik7XG4gICAgY29uc3QgZmluZENoaWxkID0gZnVuY3Rpb24gZmluZENoaWxkKG5vZGU6IHRzLk5vZGUpOiB0cy5Ob2RlfHVuZGVmaW5lZCB7XG4gICAgICBpZiAobm9kZS5raW5kID4gdHMuU3ludGF4S2luZC5MYXN0VG9rZW4gJiYgbm9kZS5wb3MgPD0gcG9zaXRpb24gJiYgbm9kZS5lbmQgPiBwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBiZXR0ZXJOb2RlID0gdHMuZm9yRWFjaENoaWxkKG5vZGUsIGZpbmRDaGlsZCk7XG4gICAgICAgIHJldHVybiBiZXR0ZXJOb2RlIHx8IG5vZGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG5vZGUgPSB0cy5mb3JFYWNoQ2hpbGQoc291cmNlRmlsZSwgZmluZENoaWxkKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIHtzdGFydDogbm9kZS5nZXRTdGFydCgpLCBlbmQ6IG5vZGUuZ2V0RW5kKCl9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbml0aW9uRnJvbVRzU3ltYm9sKHN5bWJvbDogdHMuU3ltYm9sKTogRGVmaW5pdGlvbiB7XG4gIGNvbnN0IGRlY2xhcmF0aW9ucyA9IHN5bWJvbC5kZWNsYXJhdGlvbnM7XG4gIGlmIChkZWNsYXJhdGlvbnMpIHtcbiAgICByZXR1cm4gZGVjbGFyYXRpb25zLm1hcChkZWNsYXJhdGlvbiA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VGaWxlID0gZGVjbGFyYXRpb24uZ2V0U291cmNlRmlsZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZU5hbWU6IHNvdXJjZUZpbGUuZmlsZU5hbWUsXG4gICAgICAgIHNwYW46IHtzdGFydDogZGVjbGFyYXRpb24uZ2V0U3RhcnQoKSwgZW5kOiBkZWNsYXJhdGlvbi5nZXRFbmQoKX1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyZW50RGVjbGFyYXRpb25PZihub2RlOiB0cy5Ob2RlKTogdHMuTm9kZXx1bmRlZmluZWQge1xuICB3aGlsZSAobm9kZSkge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQ2xhc3NEZWNsYXJhdGlvbjpcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5JbnRlcmZhY2VEZWNsYXJhdGlvbjpcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuU291cmNlRmlsZTpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50ITtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb250YWluZXJPZihzeW1ib2w6IHRzLlN5bWJvbCwgY29udGV4dDogVHlwZUNvbnRleHQpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgaWYgKHN5bWJvbC5nZXRGbGFncygpICYgdHMuU3ltYm9sRmxhZ3MuQ2xhc3NNZW1iZXIgJiYgc3ltYm9sLmRlY2xhcmF0aW9ucykge1xuICAgIGZvciAoY29uc3QgZGVjbGFyYXRpb24gb2Ygc3ltYm9sLmRlY2xhcmF0aW9ucykge1xuICAgICAgY29uc3QgcGFyZW50ID0gcGFyZW50RGVjbGFyYXRpb25PZihkZWNsYXJhdGlvbik7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmNoZWNrZXIuZ2V0VHlwZUF0TG9jYXRpb24ocGFyZW50KTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKHR5cGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVLaW5kT2YodHlwZTogdHMuVHlwZXx1bmRlZmluZWQpOiBCdWlsdGluVHlwZSB7XG4gIGlmICh0eXBlKSB7XG4gICAgaWYgKHR5cGUuZmxhZ3MgJiB0cy5UeXBlRmxhZ3MuQW55KSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuQW55O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHR5cGUuZmxhZ3MgJiAodHMuVHlwZUZsYWdzLlN0cmluZyB8IHRzLlR5cGVGbGFncy5TdHJpbmdMaWtlIHwgdHMuVHlwZUZsYWdzLlN0cmluZ0xpdGVyYWwpKSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuU3RyaW5nO1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmICh0cy5UeXBlRmxhZ3MuTnVtYmVyIHwgdHMuVHlwZUZsYWdzLk51bWJlckxpa2UpKSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuTnVtYmVyO1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmIHRzLlR5cGVGbGFncy5PYmplY3QpIHtcbiAgICAgIHJldHVybiBCdWlsdGluVHlwZS5PYmplY3Q7XG4gICAgfSBlbHNlIGlmICh0eXBlLmZsYWdzICYgKHRzLlR5cGVGbGFncy5VbmRlZmluZWQpKSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuVW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmICh0cy5UeXBlRmxhZ3MuTnVsbCkpIHtcbiAgICAgIHJldHVybiBCdWlsdGluVHlwZS5OdWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmIHRzLlR5cGVGbGFncy5Vbmlvbikge1xuICAgICAgY29uc3QgdW5pb25UeXBlID0gdHlwZSBhcyB0cy5VbmlvblR5cGU7XG4gICAgICBpZiAodW5pb25UeXBlLnR5cGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIEJ1aWx0aW5UeXBlLk90aGVyO1xuICAgICAgbGV0IHR5OiBCdWlsdGluVHlwZSA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHN1YlR5cGUgb2YgdW5pb25UeXBlLnR5cGVzKSB7XG4gICAgICAgIHR5IHw9IHR5cGVLaW5kT2Yoc3ViVHlwZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHk7XG4gICAgfSBlbHNlIGlmICh0eXBlLmZsYWdzICYgdHMuVHlwZUZsYWdzLlR5cGVQYXJhbWV0ZXIpIHtcbiAgICAgIHJldHVybiBCdWlsdGluVHlwZS5VbmJvdW5kO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQnVpbHRpblR5cGUuT3RoZXI7XG59XG5cbmZ1bmN0aW9uIGdldEZyb21TeW1ib2xUYWJsZShzeW1ib2xUYWJsZTogdHMuU3ltYm9sVGFibGUsIGtleTogc3RyaW5nKTogdHMuU3ltYm9sfHVuZGVmaW5lZCB7XG4gIGNvbnN0IHRhYmxlID0gc3ltYm9sVGFibGUgYXMgYW55O1xuICBsZXQgc3ltYm9sOiB0cy5TeW1ib2x8dW5kZWZpbmVkO1xuXG4gIGlmICh0eXBlb2YgdGFibGUuZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVFMgMi4yIHVzZXMgYSBNYXBcbiAgICBzeW1ib2wgPSB0YWJsZS5nZXQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUUyBwcmUtMi4yIHVzZXMgYW4gb2JqZWN0XG4gICAgc3ltYm9sID0gdGFibGVba2V5XTtcbiAgfVxuXG4gIHJldHVybiBzeW1ib2w7XG59XG4iXX0=