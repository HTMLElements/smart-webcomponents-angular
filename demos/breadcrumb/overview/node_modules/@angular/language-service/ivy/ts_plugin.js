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
        define("@angular/language-service/ivy/ts_plugin", ["require", "exports", "tslib", "typescript/lib/tsserverlibrary", "@angular/language-service/ivy/language_service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getExternalFiles = exports.create = void 0;
    var tslib_1 = require("tslib");
    var ts = require("typescript/lib/tsserverlibrary");
    var language_service_1 = require("@angular/language-service/ivy/language_service");
    function create(info) {
        var project = info.project, tsLS = info.languageService, config = info.config;
        var angularOnly = (config === null || config === void 0 ? void 0 : config.angularOnly) === true;
        var ngLS = new language_service_1.LanguageService(project, tsLS, config);
        function getSemanticDiagnostics(fileName) {
            var diagnostics = [];
            if (!angularOnly) {
                diagnostics.push.apply(diagnostics, tslib_1.__spread(tsLS.getSemanticDiagnostics(fileName)));
            }
            diagnostics.push.apply(diagnostics, tslib_1.__spread(ngLS.getSemanticDiagnostics(fileName)));
            return diagnostics;
        }
        function getQuickInfoAtPosition(fileName, position) {
            var _a;
            if (angularOnly) {
                return ngLS.getQuickInfoAtPosition(fileName, position);
            }
            else {
                // If TS could answer the query, then return that result. Otherwise, return from Angular LS.
                return (_a = tsLS.getQuickInfoAtPosition(fileName, position)) !== null && _a !== void 0 ? _a : ngLS.getQuickInfoAtPosition(fileName, position);
            }
        }
        function getTypeDefinitionAtPosition(fileName, position) {
            var _a;
            if (angularOnly) {
                return ngLS.getTypeDefinitionAtPosition(fileName, position);
            }
            else {
                // If TS could answer the query, then return that result. Otherwise, return from Angular LS.
                return (_a = tsLS.getTypeDefinitionAtPosition(fileName, position)) !== null && _a !== void 0 ? _a : ngLS.getTypeDefinitionAtPosition(fileName, position);
            }
        }
        function getDefinitionAndBoundSpan(fileName, position) {
            var _a;
            if (angularOnly) {
                return ngLS.getDefinitionAndBoundSpan(fileName, position);
            }
            else {
                // If TS could answer the query, then return that result. Otherwise, return from Angular LS.
                return (_a = tsLS.getDefinitionAndBoundSpan(fileName, position)) !== null && _a !== void 0 ? _a : ngLS.getDefinitionAndBoundSpan(fileName, position);
            }
        }
        function getReferencesAtPosition(fileName, position) {
            return ngLS.getReferencesAtPosition(fileName, position);
        }
        function findRenameLocations(fileName, position, findInStrings, findInComments, providePrefixAndSuffixTextForRename) {
            // Most operations combine results from all extensions. However, rename locations are exclusive
            // (results from only one extension are used) so our rename locations are a superset of the TS
            // rename locations. As a result, we do not check the `angularOnly` flag here because we always
            // want to include results at TS locations as well as locations in templates.
            return ngLS.findRenameLocations(fileName, position);
        }
        function getRenameInfo(fileName, position) {
            // See the comment in `findRenameLocations` explaining why we don't check the `angularOnly`
            // flag.
            return ngLS.getRenameInfo(fileName, position);
        }
        function getCompletionsAtPosition(fileName, position, options) {
            var _a;
            if (angularOnly) {
                return ngLS.getCompletionsAtPosition(fileName, position, options);
            }
            else {
                // If TS could answer the query, then return that result. Otherwise, return from Angular LS.
                return (_a = tsLS.getCompletionsAtPosition(fileName, position, options)) !== null && _a !== void 0 ? _a : ngLS.getCompletionsAtPosition(fileName, position, options);
            }
        }
        function getCompletionEntryDetails(fileName, position, entryName, formatOptions, source, preferences) {
            var _a;
            if (angularOnly) {
                return ngLS.getCompletionEntryDetails(fileName, position, entryName, formatOptions, preferences);
            }
            else {
                // If TS could answer the query, then return that result. Otherwise, return from Angular LS.
                return (_a = tsLS.getCompletionEntryDetails(fileName, position, entryName, formatOptions, source, preferences)) !== null && _a !== void 0 ? _a : ngLS.getCompletionEntryDetails(fileName, position, entryName, formatOptions, preferences);
            }
        }
        function getCompletionEntrySymbol(fileName, position, name, source) {
            var _a;
            if (angularOnly) {
                return ngLS.getCompletionEntrySymbol(fileName, position, name);
            }
            else {
                // If TS could answer the query, then return that result. Otherwise, return from Angular LS.
                return (_a = tsLS.getCompletionEntrySymbol(fileName, position, name, source)) !== null && _a !== void 0 ? _a : ngLS.getCompletionEntrySymbol(fileName, position, name);
            }
        }
        /**
         * Gets global diagnostics related to the program configuration and compiler options.
         */
        function getCompilerOptionsDiagnostics() {
            var diagnostics = [];
            if (!angularOnly) {
                diagnostics.push.apply(diagnostics, tslib_1.__spread(tsLS.getCompilerOptionsDiagnostics()));
            }
            diagnostics.push.apply(diagnostics, tslib_1.__spread(ngLS.getCompilerOptionsDiagnostics()));
            return diagnostics;
        }
        function getTcb(fileName, position) {
            return ngLS.getTcb(fileName, position);
        }
        return tslib_1.__assign(tslib_1.__assign({}, tsLS), { getSemanticDiagnostics: getSemanticDiagnostics,
            getTypeDefinitionAtPosition: getTypeDefinitionAtPosition,
            getQuickInfoAtPosition: getQuickInfoAtPosition,
            getDefinitionAndBoundSpan: getDefinitionAndBoundSpan,
            getReferencesAtPosition: getReferencesAtPosition,
            findRenameLocations: findRenameLocations,
            getRenameInfo: getRenameInfo,
            getCompletionsAtPosition: getCompletionsAtPosition,
            getCompletionEntryDetails: getCompletionEntryDetails,
            getCompletionEntrySymbol: getCompletionEntrySymbol,
            getTcb: getTcb,
            getCompilerOptionsDiagnostics: getCompilerOptionsDiagnostics });
    }
    exports.create = create;
    function getExternalFiles(project) {
        var e_1, _a;
        if (!project.hasRoots()) {
            return []; // project has not been initialized
        }
        var typecheckFiles = [];
        try {
            for (var _b = tslib_1.__values(project.getScriptInfos()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var scriptInfo = _c.value;
                if (scriptInfo.scriptKind === ts.ScriptKind.External) {
                    // script info for typecheck file is marked as external, see
                    // getOrCreateTypeCheckScriptInfo() in
                    // packages/language-service/ivy/language_service.ts
                    typecheckFiles.push(scriptInfo.fileName);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return typecheckFiles;
    }
    exports.getExternalFiles = getExternalFiles;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9pdnkvdHNfcGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCxtREFBcUQ7SUFFckQsbUZBQW1EO0lBRW5ELFNBQWdCLE1BQU0sQ0FBQyxJQUFnQztRQUM5QyxJQUFBLE9BQU8sR0FBbUMsSUFBSSxRQUF2QyxFQUFtQixJQUFJLEdBQVksSUFBSSxnQkFBaEIsRUFBRSxNQUFNLEdBQUksSUFBSSxPQUFSLENBQVM7UUFDdEQsSUFBTSxXQUFXLEdBQUcsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxNQUFLLElBQUksQ0FBQztRQUVqRCxJQUFNLElBQUksR0FBRyxJQUFJLGtDQUFlLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxTQUFTLHNCQUFzQixDQUFDLFFBQWdCO1lBQzlDLElBQU0sV0FBVyxHQUFvQixFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsV0FBVyxDQUFDLElBQUksT0FBaEIsV0FBVyxtQkFBUyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEdBQUU7YUFDNUQ7WUFDRCxXQUFXLENBQUMsSUFBSSxPQUFoQixXQUFXLG1CQUFTLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsR0FBRTtZQUMzRCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO1FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxRQUFnQixFQUFFLFFBQWdCOztZQUNoRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsNEZBQTRGO2dCQUM1RixhQUFP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QUN4QixNQUFNLFFBQUE7WUFDTiw2QkFBNkIsK0JBQUEsSUFDN0I7SUFDSixDQUFDO0lBeklELHdCQXlJQztJQUVELFNBQWdCLGdCQUFnQixDQUFDLE9BQTBCOztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLENBQUUsbUNBQW1DO1NBQ2hEO1FBQ0QsSUFBTSxjQUFjLEdBQWEsRUFBRSxDQUFDOztZQUNwQyxLQUF5QixJQUFBLEtBQUEsaUJBQUEsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE5QyxJQUFNLFVBQVUsV0FBQTtnQkFDbkIsSUFBSSxVQUFVLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNwRCw0REFBNEQ7b0JBQzVELHNDQUFzQztvQkFDdEMsb0RBQW9EO29CQUNwRCxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDMUM7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQWRELDRDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQvbGliL3Rzc2VydmVybGlicmFyeSc7XG5pbXBvcnQge0dldFRjYlJlc3BvbnNlLCBOZ0xhbmd1YWdlU2VydmljZX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7TGFuZ3VhZ2VTZXJ2aWNlfSBmcm9tICcuL2xhbmd1YWdlX3NlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKGluZm86IHRzLnNlcnZlci5QbHVnaW5DcmVhdGVJbmZvKTogTmdMYW5ndWFnZVNlcnZpY2Uge1xuICBjb25zdCB7cHJvamVjdCwgbGFuZ3VhZ2VTZXJ2aWNlOiB0c0xTLCBjb25maWd9ID0gaW5mbztcbiAgY29uc3QgYW5ndWxhck9ubHkgPSBjb25maWc/LmFuZ3VsYXJPbmx5ID09PSB0cnVlO1xuXG4gIGNvbnN0IG5nTFMgPSBuZXcgTGFuZ3VhZ2VTZXJ2aWNlKHByb2plY3QsIHRzTFMsIGNvbmZpZyk7XG5cbiAgZnVuY3Rpb24gZ2V0U2VtYW50aWNEaWFnbm9zdGljcyhmaWxlTmFtZTogc3RyaW5nKTogdHMuRGlhZ25vc3RpY1tdIHtcbiAgICBjb25zdCBkaWFnbm9zdGljczogdHMuRGlhZ25vc3RpY1tdID0gW107XG4gICAgaWYgKCFhbmd1bGFyT25seSkge1xuICAgICAgZGlhZ25vc3RpY3MucHVzaCguLi50c0xTLmdldFNlbWFudGljRGlhZ25vc3RpY3MoZmlsZU5hbWUpKTtcbiAgICB9XG4gICAgZGlhZ25vc3RpY3MucHVzaCguLi5uZ0xTLmdldFNlbWFudGljRGlhZ25vc3RpY3MoZmlsZU5hbWUpKTtcbiAgICByZXR1cm4gZGlhZ25vc3RpY3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRRdWlja0luZm9BdFBvc2l0aW9uKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB0cy5RdWlja0luZm98dW5kZWZpbmVkIHtcbiAgICBpZiAoYW5ndWxhck9ubHkpIHtcbiAgICAgIHJldHVybiBuZ0xTLmdldFF1aWNrSW5mb0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgVFMgY291bGQgYW5zd2VyIHRoZSBxdWVyeSwgdGhlbiByZXR1cm4gdGhhdCByZXN1bHQuIE90aGVyd2lzZSwgcmV0dXJuIGZyb20gQW5ndWxhciBMUy5cbiAgICAgIHJldHVybiB0c0xTLmdldFF1aWNrSW5mb0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKSA/P1xuICAgICAgICAgIG5nTFMuZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFR5cGVEZWZpbml0aW9uQXRQb3NpdGlvbihcbiAgICAgIGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiByZWFkb25seSB0cy5EZWZpbml0aW9uSW5mb1tdfHVuZGVmaW5lZCB7XG4gICAgaWYgKGFuZ3VsYXJPbmx5KSB7XG4gICAgICByZXR1cm4gbmdMUy5nZXRUeXBlRGVmaW5pdGlvbkF0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgVFMgY291bGQgYW5zd2VyIHRoZSBxdWVyeSwgdGhlbiByZXR1cm4gdGhhdCByZXN1bHQuIE90aGVyd2lzZSwgcmV0dXJuIGZyb20gQW5ndWxhciBMUy5cbiAgICAgIHJldHVybiB0c0xTLmdldFR5cGVEZWZpbml0aW9uQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24pID8/XG4gICAgICAgICAgbmdMUy5nZXRUeXBlRGVmaW5pdGlvbkF0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IHRzLkRlZmluaXRpb25JbmZvQW5kQm91bmRTcGFufHVuZGVmaW5lZCB7XG4gICAgaWYgKGFuZ3VsYXJPbmx5KSB7XG4gICAgICByZXR1cm4gbmdMUy5nZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIFRTIGNvdWxkIGFuc3dlciB0aGUgcXVlcnksIHRoZW4gcmV0dXJuIHRoYXQgcmVzdWx0LiBPdGhlcndpc2UsIHJldHVybiBmcm9tIEFuZ3VsYXIgTFMuXG4gICAgICByZXR1cm4gdHNMUy5nZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKGZpbGVOYW1lLCBwb3NpdGlvbikgPz9cbiAgICAgICAgICBuZ0xTLmdldERlZmluaXRpb25BbmRCb3VuZFNwYW4oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWZlcmVuY2VzQXRQb3NpdGlvbihmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdHMuUmVmZXJlbmNlRW50cnlbXXxcbiAgICAgIHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG5nTFMuZ2V0UmVmZXJlbmNlc0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRSZW5hbWVMb2NhdGlvbnMoXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyLCBmaW5kSW5TdHJpbmdzOiBib29sZWFuLCBmaW5kSW5Db21tZW50czogYm9vbGVhbixcbiAgICAgIHByb3ZpZGVQcmVmaXhBbmRTdWZmaXhUZXh0Rm9yUmVuYW1lPzogYm9vbGVhbik6IHJlYWRvbmx5IHRzLlJlbmFtZUxvY2F0aW9uW118dW5kZWZpbmVkIHtcbiAgICAvLyBNb3N0IG9wZXJhdGlvbnMgY29tYmluZSByZXN1bHRzIGZyb20gYWxsIGV4dGVuc2lvbnMuIEhvd2V2ZXIsIHJlbmFtZSBsb2NhdGlvbnMgYXJlIGV4Y2x1c2l2ZVxuICAgIC8vIChyZXN1bHRzIGZyb20gb25seSBvbmUgZXh0ZW5zaW9uIGFyZSB1c2VkKSBzbyBvdXIgcmVuYW1lIGxvY2F0aW9ucyBhcmUgYSBzdXBlcnNldCBvZiB0aGUgVFNcbiAgICAvLyByZW5hbWUgbG9jYXRpb25zLiBBcyBhIHJlc3VsdCwgd2UgZG8gbm90IGNoZWNrIHRoZSBgYW5ndWxhck9ubHlgIGZsYWcgaGVyZSBiZWNhdXNlIHdlIGFsd2F5c1xuICAgIC8vIHdhbnQgdG8gaW5jbHVkZSByZXN1bHRzIGF0IFRTIGxvY2F0aW9ucyBhcyB3ZWxsIGFzIGxvY2F0aW9ucyBpbiB0ZW1wbGF0ZXMuXG4gICAgcmV0dXJuIG5nTFMuZmluZFJlbmFtZUxvY2F0aW9ucyhmaWxlTmFtZSwgcG9zaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVuYW1lSW5mbyhmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdHMuUmVuYW1lSW5mbyB7XG4gICAgLy8gU2VlIHRoZSBjb21tZW50IGluIGBmaW5kUmVuYW1lTG9jYXRpb25zYCBleHBsYWluaW5nIHdoeSB3ZSBkb24ndCBjaGVjayB0aGUgYGFuZ3VsYXJPbmx5YFxuICAgIC8vIGZsYWcuXG4gICAgcmV0dXJuIG5nTFMuZ2V0UmVuYW1lSW5mbyhmaWxlTmFtZSwgcG9zaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcGxldGlvbnNBdFBvc2l0aW9uKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcixcbiAgICAgIG9wdGlvbnM6IHRzLkdldENvbXBsZXRpb25zQXRQb3NpdGlvbk9wdGlvbnMpOiB0cy5XaXRoTWV0YWRhdGE8dHMuQ29tcGxldGlvbkluZm8+fHVuZGVmaW5lZCB7XG4gICAgaWYgKGFuZ3VsYXJPbmx5KSB7XG4gICAgICByZXR1cm4gbmdMUy5nZXRDb21wbGV0aW9uc0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgVFMgY291bGQgYW5zd2VyIHRoZSBxdWVyeSwgdGhlbiByZXR1cm4gdGhhdCByZXN1bHQuIE90aGVyd2lzZSwgcmV0dXJuIGZyb20gQW5ndWxhciBMUy5cbiAgICAgIHJldHVybiB0c0xTLmdldENvbXBsZXRpb25zQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24sIG9wdGlvbnMpID8/XG4gICAgICAgICAgbmdMUy5nZXRDb21wbGV0aW9uc0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21wbGV0aW9uRW50cnlEZXRhaWxzKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlciwgZW50cnlOYW1lOiBzdHJpbmcsXG4gICAgICBmb3JtYXRPcHRpb25zOiB0cy5Gb3JtYXRDb2RlT3B0aW9uc3x0cy5Gb3JtYXRDb2RlU2V0dGluZ3N8dW5kZWZpbmVkLCBzb3VyY2U6IHN0cmluZ3x1bmRlZmluZWQsXG4gICAgICBwcmVmZXJlbmNlczogdHMuVXNlclByZWZlcmVuY2VzfHVuZGVmaW5lZCk6IHRzLkNvbXBsZXRpb25FbnRyeURldGFpbHN8dW5kZWZpbmVkIHtcbiAgICBpZiAoYW5ndWxhck9ubHkpIHtcbiAgICAgIHJldHVybiBuZ0xTLmdldENvbXBsZXRpb25FbnRyeURldGFpbHMoXG4gICAgICAgICAgZmlsZU5hbWUsIHBvc2l0aW9uLCBlbnRyeU5hbWUsIGZvcm1hdE9wdGlvbnMsIHByZWZlcmVuY2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgVFMgY291bGQgYW5zd2VyIHRoZSBxdWVyeSwgdGhlbiByZXR1cm4gdGhhdCByZXN1bHQuIE90aGVyd2lzZSwgcmV0dXJuIGZyb20gQW5ndWxhciBMUy5cbiAgICAgIHJldHVybiB0c0xTLmdldENvbXBsZXRpb25FbnRyeURldGFpbHMoXG4gICAgICAgICAgICAgICAgIGZpbGVOYW1lLCBwb3NpdGlvbiwgZW50cnlOYW1lLCBmb3JtYXRPcHRpb25zLCBzb3VyY2UsIHByZWZlcmVuY2VzKSA/P1xuICAgICAgICAgIG5nTFMuZ2V0Q29tcGxldGlvbkVudHJ5RGV0YWlscyhmaWxlTmFtZSwgcG9zaXRpb24sIGVudHJ5TmFtZSwgZm9ybWF0T3B0aW9ucywgcHJlZmVyZW5jZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbXBsZXRpb25FbnRyeVN5bWJvbChcbiAgICAgIGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIsIG5hbWU6IHN0cmluZywgc291cmNlOiBzdHJpbmd8dW5kZWZpbmVkKTogdHMuU3ltYm9sfFxuICAgICAgdW5kZWZpbmVkIHtcbiAgICBpZiAoYW5ndWxhck9ubHkpIHtcbiAgICAgIHJldHVybiBuZ0xTLmdldENvbXBsZXRpb25FbnRyeVN5bWJvbChmaWxlTmFtZSwgcG9zaXRpb24sIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBUUyBjb3VsZCBhbnN3ZXIgdGhlIHF1ZXJ5LCB0aGVuIHJldHVybiB0aGF0IHJlc3VsdC4gT3RoZXJ3aXNlLCByZXR1cm4gZnJvbSBBbmd1bGFyIExTLlxuICAgICAgcmV0dXJuIHRzTFMuZ2V0Q29tcGxldGlvbkVudHJ5U3ltYm9sKGZpbGVOYW1lLCBwb3NpdGlvbiwgbmFtZSwgc291cmNlKSA/P1xuICAgICAgICAgIG5nTFMuZ2V0Q29tcGxldGlvbkVudHJ5U3ltYm9sKGZpbGVOYW1lLCBwb3NpdGlvbiwgbmFtZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZXRzIGdsb2JhbCBkaWFnbm9zdGljcyByZWxhdGVkIHRvIHRoZSBwcm9ncmFtIGNvbmZpZ3VyYXRpb24gYW5kIGNvbXBpbGVyIG9wdGlvbnMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRDb21waWxlck9wdGlvbnNEaWFnbm9zdGljcygpOiB0cy5EaWFnbm9zdGljW10ge1xuICAgIGNvbnN0IGRpYWdub3N0aWNzOiB0cy5EaWFnbm9zdGljW10gPSBbXTtcbiAgICBpZiAoIWFuZ3VsYXJPbmx5KSB7XG4gICAgICBkaWFnbm9zdGljcy5wdXNoKC4uLnRzTFMuZ2V0Q29tcGlsZXJPcHRpb25zRGlhZ25vc3RpY3MoKSk7XG4gICAgfVxuICAgIGRpYWdub3N0aWNzLnB1c2goLi4ubmdMUy5nZXRDb21waWxlck9wdGlvbnNEaWFnbm9zdGljcygpKTtcbiAgICByZXR1cm4gZGlhZ25vc3RpY3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUY2IoZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IEdldFRjYlJlc3BvbnNlfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG5nTFMuZ2V0VGNiKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnRzTFMsXG4gICAgZ2V0U2VtYW50aWNEaWFnbm9zdGljcyxcbiAgICBnZXRUeXBlRGVmaW5pdGlvbkF0UG9zaXRpb24sXG4gICAgZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbixcbiAgICBnZXREZWZpbml0aW9uQW5kQm91bmRTcGFuLFxuICAgIGdldFJlZmVyZW5jZXNBdFBvc2l0aW9uLFxuICAgIGZpbmRSZW5hbWVMb2NhdGlvbnMsXG4gICAgZ2V0UmVuYW1lSW5mbyxcbiAgICBnZXRDb21wbGV0aW9uc0F0UG9zaXRpb24sXG4gICAgZ2V0Q29tcGxldGlvbkVudHJ5RGV0YWlscyxcbiAgICBnZXRDb21wbGV0aW9uRW50cnlTeW1ib2wsXG4gICAgZ2V0VGNiLFxuICAgIGdldENvbXBpbGVyT3B0aW9uc0RpYWdub3N0aWNzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZXJuYWxGaWxlcyhwcm9qZWN0OiB0cy5zZXJ2ZXIuUHJvamVjdCk6IHN0cmluZ1tdIHtcbiAgaWYgKCFwcm9qZWN0Lmhhc1Jvb3RzKCkpIHtcbiAgICByZXR1cm4gW107ICAvLyBwcm9qZWN0IGhhcyBub3QgYmVlbiBpbml0aWFsaXplZFxuICB9XG4gIGNvbnN0IHR5cGVjaGVja0ZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHNjcmlwdEluZm8gb2YgcHJvamVjdC5nZXRTY3JpcHRJbmZvcygpKSB7XG4gICAgaWYgKHNjcmlwdEluZm8uc2NyaXB0S2luZCA9PT0gdHMuU2NyaXB0S2luZC5FeHRlcm5hbCkge1xuICAgICAgLy8gc2NyaXB0IGluZm8gZm9yIHR5cGVjaGVjayBmaWxlIGlzIG1hcmtlZCBhcyBleHRlcm5hbCwgc2VlXG4gICAgICAvLyBnZXRPckNyZWF0ZVR5cGVDaGVja1NjcmlwdEluZm8oKSBpblxuICAgICAgLy8gcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9pdnkvbGFuZ3VhZ2Vfc2VydmljZS50c1xuICAgICAgdHlwZWNoZWNrRmlsZXMucHVzaChzY3JpcHRJbmZvLmZpbGVOYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHR5cGVjaGVja0ZpbGVzO1xufVxuIl19