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
        define("@angular/language-service/src/ts_plugin", ["require", "exports", "tslib", "@angular/language-service/src/language_service", "@angular/language-service/src/typescript_host"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.getExternalFiles = void 0;
    var tslib_1 = require("tslib");
    var language_service_1 = require("@angular/language-service/src/language_service");
    var typescript_host_1 = require("@angular/language-service/src/typescript_host");
    // Use a WeakMap to keep track of Project to Host mapping so that when Project
    // is deleted Host could be garbage collected.
    var PROJECT_MAP = new WeakMap();
    /**
     * This function is called by tsserver to retrieve the external (non-TS) files
     * that should belong to the specified `project`. For Angular, these files are
     * external templates. This is called once when the project is loaded, then
     * every time when the program is updated.
     * @param project Project for which external files should be retrieved.
     */
    function getExternalFiles(project) {
        if (!project.hasRoots()) {
            // During project initialization where there is no root files yet we should
            // not do any work.
            return [];
        }
        var ngLsHost = PROJECT_MAP.get(project);
        if (ngLsHost === undefined) {
            return [];
        }
        ngLsHost.getAnalyzedModules();
        return ngLsHost.getExternalTemplates().filter(function (fileName) {
            // TODO(kyliau): Remove this when the following PR lands on the version of
            // TypeScript used in this repo.
            // https://github.com/microsoft/TypeScript/pull/41737
            return project.fileExists(fileName);
        });
    }
    exports.getExternalFiles = getExternalFiles;
    function create(info) {
        var tsLS = info.languageService, tsLSHost = info.languageServiceHost, config = info.config, project = info.project;
        // This plugin could operate under two different modes:
        // 1. TS + Angular
        //    Plugin augments TS language service to provide additional Angular
        //    information. This only works with inline templates and is meant to be
        //    used as a local plugin (configured via tsconfig.json)
        // 2. Angular only
        //    Plugin only provides information on Angular templates, no TS info at all.
        //    This effectively disables native TS features and is meant for internal
        //    use only.
        var angularOnly = config ? config.angularOnly === true : false;
        var ngLSHost = new typescript_host_1.TypeScriptServiceHost(tsLSHost, tsLS);
        var ngLS = language_service_1.createLanguageService(ngLSHost);
        PROJECT_MAP.set(project, ngLSHost);
        function getCompletionsAtPosition(fileName, position, options) {
            if (!angularOnly) {
                var results = tsLS.getCompletionsAtPosition(fileName, position, options);
                if (results && results.entries.length) {
                    // If TS could answer the query, then return results immediately.
                    return results;
                }
            }
            return ngLS.getCompletionsAtPosition(fileName, position, options);
        }
        function getQuickInfoAtPosition(fileName, position) {
            if (!angularOnly) {
                var result = tsLS.getQuickInfoAtPosition(fileName, position);
                if (result) {
                    // If TS could answer the query, then return results immediately.
                    return result;
                }
            }
            return ngLS.getQuickInfoAtPosition(fileName, position);
        }
        function getSemanticDiagnostics(fileName) {
            var results = [];
            if (!angularOnly) {
                results.push.apply(results, tslib_1.__spread(tsLS.getSemanticDiagnostics(fileName)));
            }
            // For semantic diagnostics we need to combine both TS + Angular results
            results.push.apply(results, tslib_1.__spread(ngLS.getSemanticDiagnostics(fileName)));
            return results;
        }
        function getDefinitionAtPosition(fileName, position) {
            if (!angularOnly) {
                var results = tsLS.getDefinitionAtPosition(fileName, position);
                if (results) {
                    // If TS could answer the query, then return results immediately.
                    return results;
                }
            }
            var result = ngLS.getDefinitionAndBoundSpan(fileName, position);
            if (!result || !result.definitions || !result.definitions.length) {
                return;
            }
            return result.definitions;
        }
        function getDefinitionAndBoundSpan(fileName, position) {
            if (!angularOnly) {
                var result = tsLS.getDefinitionAndBoundSpan(fileName, position);
                if (result) {
                    // If TS could answer the query, then return results immediately.
                    return result;
                }
            }
            return ngLS.getDefinitionAndBoundSpan(fileName, position);
        }
        function getTypeDefinitionAtPosition(fileName, position) {
            // Not implemented in VE Language Service
            return undefined;
        }
        function getReferencesAtPosition(fileName, position) {
            // Not implemented in VE Language Service
            return undefined;
        }
        function findRenameLocations(fileName, position, findInStrings, findInComments, providePrefixAndSuffixTextForRename) {
            // not implemented in VE Language Service
            return undefined;
        }
        function getTcb(fileName, position) {
            // Not implemented in VE Language Service
            return undefined;
        }
        return tslib_1.__assign(tslib_1.__assign({}, tsLS), { 
            // Then override the methods supported by Angular language service
            getCompletionsAtPosition: getCompletionsAtPosition,
            getQuickInfoAtPosition: getQuickInfoAtPosition,
            getSemanticDiagnostics: getSemanticDiagnostics,
            getDefinitionAtPosition: getDefinitionAtPosition,
            getDefinitionAndBoundSpan: getDefinitionAndBoundSpan,
            getTypeDefinitionAtPosition: getTypeDefinitionAtPosition,
            getReferencesAtPosition: getReferencesAtPosition,
            findRenameLocations: findRenameLocations,
            getTcb: getTcb });
    }
    exports.create = create;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvdHNfcGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFLSCxtRkFBeUQ7SUFDekQsaUZBQXdEO0lBRXhELDhFQUE4RTtJQUM5RSw4Q0FBOEM7SUFDOUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxPQUFPLEVBQTZDLENBQUM7SUFFN0U7Ozs7OztPQU1HO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBMkI7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QiwyRUFBMkU7WUFDM0UsbUJBQW1CO1lBQ25CLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUIsT0FBTyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQ3BELDBFQUEwRTtZQUMxRSxnQ0FBZ0M7WUFDaEMscURBQXFEO1lBQ3JELE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQkQsNENBaUJDO0lBRUQsU0FBZ0IsTUFBTSxDQUFDLElBQWlDO1FBQy9DLElBQWlCLElBQUksR0FBb0QsSUFBSSxnQkFBeEQsRUFBdUIsUUFBUSxHQUFxQixJQUFJLG9CQUF6QixFQUFFLE1BQU0sR0FBYSxJQUFJLE9BQWpCLEVBQUUsT0FBTyxHQUFJLElBQUksUUFBUixDQUFTO1FBQ3JGLHVEQUF1RDtR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SUFBSSxNQUFNLEVBQUU7b0JBQ1YsaUVBQWlFO29CQUNqRSxPQUFPLE1BQU0sQ0FBQztpQkFDZjthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxTQUFTLDJCQUEyQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7WUFDckUseUNBQXlDO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCxTQUFTLHVCQUF1QixDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7WUFDakUseUNBQXlDO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCxTQUFTLG1CQUFtQixDQUN4QixRQUFnQixFQUFFLFFBQWdCLEVBQUUsYUFBc0IsRUFBRSxjQUF1QixFQUNuRixtQ0FBNkM7WUFDL0MseUNBQXlDO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCxTQUFTLE1BQU0sQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1lBQ2hELHlDQUF5QztZQUN6QyxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBRUQsNkNBRUssSUFBSTtZQUNQLGtFQUFrRTtZQUNsRSx3QkFBd0IsMEJBQUE7WUFDeEIsc0JBQXNCLHdCQUFBO1lBQ3RCLHNCQUFzQix3QkFBQTtZQUN0Qix1QkFBdUIseUJBQUE7WUFDdkIseUJBQXlCLDJCQUFBO1lBQ3pCLDJCQUEyQiw2QkFBQTtZQUMzQix1QkFBdUIseUJBQUE7WUFDdkIsbUJBQW1CLHFCQUFBO1lBQ25CLE1BQU0sUUFBQSxJQUNOO0lBQ0osQ0FBQztJQWpIRCx3QkFpSEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHNzIGZyb20gJ3R5cGVzY3JpcHQvbGliL3Rzc2VydmVybGlicmFyeSc7XG5pbXBvcnQge05nTGFuZ3VhZ2VTZXJ2aWNlfSBmcm9tICcuLi9hcGknO1xuXG5pbXBvcnQge2NyZWF0ZUxhbmd1YWdlU2VydmljZX0gZnJvbSAnLi9sYW5ndWFnZV9zZXJ2aWNlJztcbmltcG9ydCB7VHlwZVNjcmlwdFNlcnZpY2VIb3N0fSBmcm9tICcuL3R5cGVzY3JpcHRfaG9zdCc7XG5cbi8vIFVzZSBhIFdlYWtNYXAgdG8ga2VlcCB0cmFjayBvZiBQcm9qZWN0IHRvIEhvc3QgbWFwcGluZyBzbyB0aGF0IHdoZW4gUHJvamVjdFxuLy8gaXMgZGVsZXRlZCBIb3N0IGNvdWxkIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuY29uc3QgUFJPSkVDVF9NQVAgPSBuZXcgV2Vha01hcDx0c3Muc2VydmVyLlByb2plY3QsIFR5cGVTY3JpcHRTZXJ2aWNlSG9zdD4oKTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSB0c3NlcnZlciB0byByZXRyaWV2ZSB0aGUgZXh0ZXJuYWwgKG5vbi1UUykgZmlsZXNcbiAqIHRoYXQgc2hvdWxkIGJlbG9uZyB0byB0aGUgc3BlY2lmaWVkIGBwcm9qZWN0YC4gRm9yIEFuZ3VsYXIsIHRoZXNlIGZpbGVzIGFyZVxuICogZXh0ZXJuYWwgdGVtcGxhdGVzLiBUaGlzIGlzIGNhbGxlZCBvbmNlIHdoZW4gdGhlIHByb2plY3QgaXMgbG9hZGVkLCB0aGVuXG4gKiBldmVyeSB0aW1lIHdoZW4gdGhlIHByb2dyYW0gaXMgdXBkYXRlZC5cbiAqIEBwYXJhbSBwcm9qZWN0IFByb2plY3QgZm9yIHdoaWNoIGV4dGVybmFsIGZpbGVzIHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlcm5hbEZpbGVzKHByb2plY3Q6IHRzcy5zZXJ2ZXIuUHJvamVjdCk6IHN0cmluZ1tdIHtcbiAgaWYgKCFwcm9qZWN0Lmhhc1Jvb3RzKCkpIHtcbiAgICAvLyBEdXJpbmcgcHJvamVjdCBpbml0aWFsaXphdGlvbiB3aGVyZSB0aGVyZSBpcyBubyByb290IGZpbGVzIHlldCB3ZSBzaG91bGRcbiAgICAvLyBub3QgZG8gYW55IHdvcmsuXG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IG5nTHNIb3N0ID0gUFJPSkVDVF9NQVAuZ2V0KHByb2plY3QpO1xuICBpZiAobmdMc0hvc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBuZ0xzSG9zdC5nZXRBbmFseXplZE1vZHVsZXMoKTtcbiAgcmV0dXJuIG5nTHNIb3N0LmdldEV4dGVybmFsVGVtcGxhdGVzKCkuZmlsdGVyKGZpbGVOYW1lID0+IHtcbiAgICAvLyBUT0RPKGt5bGlhdSk6IFJlbW92ZSB0aGlzIHdoZW4gdGhlIGZvbGxvd2luZyBQUiBsYW5kcyBvbiB0aGUgdmVyc2lvbiBvZlxuICAgIC8vIFR5cGVTY3JpcHQgdXNlZCBpbiB0aGlzIHJlcG8uXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L3B1bGwvNDE3MzdcbiAgICByZXR1cm4gcHJvamVjdC5maWxlRXhpc3RzKGZpbGVOYW1lKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoaW5mbzogdHNzLnNlcnZlci5QbHVnaW5DcmVhdGVJbmZvKTogTmdMYW5ndWFnZVNlcnZpY2Uge1xuICBjb25zdCB7bGFuZ3VhZ2VTZXJ2aWNlOiB0c0xTLCBsYW5ndWFnZVNlcnZpY2VIb3N0OiB0c0xTSG9zdCwgY29uZmlnLCBwcm9qZWN0fSA9IGluZm87XG4gIC8vIFRoaXMgcGx1Z2luIGNvdWxkIG9wZXJhdGUgdW5kZXIgdHdvIGRpZmZlcmVudCBtb2RlczpcbiAgLy8gMS4gVFMgKyBBbmd1bGFyXG4gIC8vICAgIFBsdWdpbiBhdWdtZW50cyBUUyBsYW5ndWFnZSBzZXJ2aWNlIHRvIHByb3ZpZGUgYWRkaXRpb25hbCBBbmd1bGFyXG4gIC8vICAgIGluZm9ybWF0aW9uLiBUaGlzIG9ubHkgd29ya3Mgd2l0aCBpbmxpbmUgdGVtcGxhdGVzIGFuZCBpcyBtZWFudCB0byBiZVxuICAvLyAgICB1c2VkIGFzIGEgbG9jYWwgcGx1Z2luIChjb25maWd1cmVkIHZpYSB0c2NvbmZpZy5qc29uKVxuICAvLyAyLiBBbmd1bGFyIG9ubHlcbiAgLy8gICAgUGx1Z2luIG9ubHkgcHJvdmlkZXMgaW5mb3JtYXRpb24gb24gQW5ndWxhciB0ZW1wbGF0ZXMsIG5vIFRTIGluZm8gYXQgYWxsLlxuICAvLyAgICBUaGlzIGVmZmVjdGl2ZWx5IGRpc2FibGVzIG5hdGl2ZSBUUyBmZWF0dXJlcyBhbmQgaXMgbWVhbnQgZm9yIGludGVybmFsXG4gIC8vICAgIHVzZSBvbmx5LlxuICBjb25zdCBhbmd1bGFyT25seSA9IGNvbmZpZyA/IGNvbmZpZy5hbmd1bGFyT25seSA9PT0gdHJ1ZSA6IGZhbHNlO1xuICBjb25zdCBuZ0xTSG9zdCA9IG5ldyBUeXBlU2NyaXB0U2VydmljZUhvc3QodHNMU0hvc3QsIHRzTFMpO1xuICBjb25zdCBuZ0xTID0gY3JlYXRlTGFuZ3VhZ2VTZXJ2aWNlKG5nTFNIb3N0KTtcbiAgUFJPSkVDVF9NQVAuc2V0KHByb2plY3QsIG5nTFNIb3N0KTtcblxuICBmdW5jdGlvbiBnZXRDb21wbGV0aW9uc0F0UG9zaXRpb24oXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyLCBvcHRpb25zOiB0c3MuR2V0Q29tcGxldGlvbnNBdFBvc2l0aW9uT3B0aW9uc3x1bmRlZmluZWQpIHtcbiAgICBpZiAoIWFuZ3VsYXJPbmx5KSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gdHNMUy5nZXRDb21wbGV0aW9uc0F0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uLCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMuZW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgVFMgY291bGQgYW5zd2VyIHRoZSBxdWVyeSwgdGhlbiByZXR1cm4gcmVzdWx0cyBpbW1lZGlhdGVseS5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZ0xTLmdldENvbXBsZXRpb25zQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24sIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbihmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdHNzLlF1aWNrSW5mb3x1bmRlZmluZWQge1xuICAgIGlmICghYW5ndWxhck9ubHkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRzTFMuZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBJZiBUUyBjb3VsZCBhbnN3ZXIgdGhlIHF1ZXJ5LCB0aGVuIHJldHVybiByZXN1bHRzIGltbWVkaWF0ZWx5LlxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmdMUy5nZXRRdWlja0luZm9BdFBvc2l0aW9uKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZW1hbnRpY0RpYWdub3N0aWNzKGZpbGVOYW1lOiBzdHJpbmcpOiB0c3MuRGlhZ25vc3RpY1tdIHtcbiAgICBjb25zdCByZXN1bHRzOiB0c3MuRGlhZ25vc3RpY1tdID0gW107XG4gICAgaWYgKCFhbmd1bGFyT25seSkge1xuICAgICAgcmVzdWx0cy5wdXNoKC4uLnRzTFMuZ2V0U2VtYW50aWNEaWFnbm9zdGljcyhmaWxlTmFtZSkpO1xuICAgIH1cbiAgICAvLyBGb3Igc2VtYW50aWMgZGlhZ25vc3RpY3Mgd2UgbmVlZCB0byBjb21iaW5lIGJvdGggVFMgKyBBbmd1bGFyIHJlc3VsdHNcbiAgICByZXN1bHRzLnB1c2goLi4ubmdMUy5nZXRTZW1hbnRpY0RpYWdub3N0aWNzKGZpbGVOYW1lKSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZpbml0aW9uQXRQb3NpdGlvbihcbiAgICAgIGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiBSZWFkb25seUFycmF5PHRzcy5EZWZpbml0aW9uSW5mbz58dW5kZWZpbmVkIHtcbiAgICBpZiAoIWFuZ3VsYXJPbmx5KSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gdHNMUy5nZXREZWZpbml0aW9uQXRQb3NpdGlvbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgLy8gSWYgVFMgY291bGQgYW5zd2VyIHRoZSBxdWVyeSwgdGhlbiByZXR1cm4gcmVzdWx0cyBpbW1lZGlhdGVseS5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5nTFMuZ2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbihmaWxlTmFtZSwgcG9zaXRpb24pO1xuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGVmaW5pdGlvbnMgfHwgIXJlc3VsdC5kZWZpbml0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmluaXRpb25BbmRCb3VuZFNwYW4oXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdHNzLkRlZmluaXRpb25JbmZvQW5kQm91bmRTcGFufHVuZGVmaW5lZCB7XG4gICAgaWYgKCFhbmd1bGFyT25seSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdHNMUy5nZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIElmIFRTIGNvdWxkIGFuc3dlciB0aGUgcXVlcnksIHRoZW4gcmV0dXJuIHJlc3VsdHMgaW1tZWRpYXRlbHkuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZ0xTLmdldERlZmluaXRpb25BbmRCb3VuZFNwYW4oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFR5cGVEZWZpbml0aW9uQXRQb3NpdGlvbihmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgLy8gTm90IGltcGxlbWVudGVkIGluIFZFIExhbmd1YWdlIFNlcnZpY2VcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlc0F0UG9zaXRpb24oZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgIC8vIE5vdCBpbXBsZW1lbnRlZCBpbiBWRSBMYW5ndWFnZSBTZXJ2aWNlXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRSZW5hbWVMb2NhdGlvbnMoXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyLCBmaW5kSW5TdHJpbmdzOiBib29sZWFuLCBmaW5kSW5Db21tZW50czogYm9vbGVhbixcbiAgICAgIHByb3ZpZGVQcmVmaXhBbmRTdWZmaXhUZXh0Rm9yUmVuYW1lPzogYm9vbGVhbik6IHJlYWRvbmx5IHRzLlJlbmFtZUxvY2F0aW9uW118dW5kZWZpbmVkIHtcbiAgICAvLyBub3QgaW1wbGVtZW50ZWQgaW4gVkUgTGFuZ3VhZ2UgU2VydmljZVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUY2IoZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgIC8vIE5vdCBpbXBsZW1lbnRlZCBpbiBWRSBMYW5ndWFnZSBTZXJ2aWNlXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gRmlyc3QgY2xvbmUgdGhlIG9yaWdpbmFsIFRTIGxhbmd1YWdlIHNlcnZpY2VcbiAgICAuLi50c0xTLFxuICAgIC8vIFRoZW4gb3ZlcnJpZGUgdGhlIG1ldGhvZHMgc3VwcG9ydGVkIGJ5IEFuZ3VsYXIgbGFuZ3VhZ2Ugc2VydmljZVxuICAgIGdldENvbXBsZXRpb25zQXRQb3NpdGlvbixcbiAgICBnZXRRdWlja0luZm9BdFBvc2l0aW9uLFxuICAgIGdldFNlbWFudGljRGlhZ25vc3RpY3MsXG4gICAgZ2V0RGVmaW5pdGlvbkF0UG9zaXRpb24sXG4gICAgZ2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbixcbiAgICBnZXRUeXBlRGVmaW5pdGlvbkF0UG9zaXRpb24sXG4gICAgZ2V0UmVmZXJlbmNlc0F0UG9zaXRpb24sXG4gICAgZmluZFJlbmFtZUxvY2F0aW9ucyxcbiAgICBnZXRUY2IsXG4gIH07XG59XG4iXX0=