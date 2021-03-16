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
        define("@angular/language-service/ivy/adapters", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/shims", "@angular/compiler-cli/src/ngtsc/util/src/typescript", "path", "@angular/language-service/ivy/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LSParseConfigHost = exports.LanguageServiceAdapter = void 0;
    var tslib_1 = require("tslib");
    var shims_1 = require("@angular/compiler-cli/src/ngtsc/shims");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    var p = require("path");
    var utils_1 = require("@angular/language-service/ivy/utils");
    var LanguageServiceAdapter = /** @class */ (function () {
        function LanguageServiceAdapter(project) {
            this.project = project;
            this.entryPoint = null;
            this.constructionDiagnostics = [];
            this.ignoreForEmit = new Set();
            this.factoryTracker = null; // no .ngfactory shims
            this.unifiedModulesHost = null; // only used in Bazel
            /**
             * Map of resource filenames to the version of the file last read via `readResource`.
             *
             * Used to implement `getModifiedResourceFiles`.
             */
            this.lastReadResourceVersion = new Map();
            this.rootDirs = typescript_1.getRootDirs(this, project.getCompilationSettings());
        }
        LanguageServiceAdapter.prototype.isShim = function (sf) {
            return shims_1.isShim(sf);
        };
        LanguageServiceAdapter.prototype.fileExists = function (fileName) {
            return this.project.fileExists(fileName);
        };
        LanguageServiceAdapter.prototype.readFile = function (fileName) {
            return this.project.readFile(fileName);
        };
        LanguageServiceAdapter.prototype.getCurrentDirectory = function () {
            return this.project.getCurrentDirectory();
        };
        LanguageServiceAdapter.prototype.getCanonicalFileName = function (fileName) {
            return this.project.projectService.toCanonicalFileName(fileName);
        };
        /**
         * Return the real path of a symlink. This method is required in order to
         * resolve symlinks in node_modules.
         */
        LanguageServiceAdapter.prototype.realpath = function (path) {
            var _a, _b, _c;
            return (_c = (_b = (_a = this.project).realpath) === null || _b === void 0 ? void 0 : _b.call(_a, path)) !== null && _c !== void 0 ? _c : path;
        };
        /**
         * readResource() is an Angular-specific method for reading files that are not
         * managed by the TS compiler host, namely templates and stylesheets.
         * It is a method on ExtendedTsCompilerHost, see
         * packages/compiler-cli/src/ngtsc/core/api/src/interfaces.ts
         */
        LanguageServiceAdapter.prototype.readResource = function (fileName) {
            if (utils_1.isTypeScriptFile(fileName)) {
                throw new Error("readResource() should not be called on TS file: " + fileName);
            }
            // Calling getScriptSnapshot() will actually create a ScriptInfo if it does
            // not exist! The same applies for getScriptVersion().
            // getScriptInfo() will not create one if it does not exist.
            // In this case, we *want* a script info to be created so that we could
            // keep track of its version.
            var snapshot = this.project.getScriptSnapshot(fileName);
            if (!snapshot) {
                // This would fail if the file does not exist, or readFile() fails for
                // whatever reasons.
                throw new Error("Failed to get script snapshot while trying to read " + fileName);
            }
            var version = this.project.getScriptVersion(fileName);
            this.lastReadResourceVersion.set(fileName, version);
            return snapshot.getText(0, snapshot.getLength());
        };
        LanguageServiceAdapter.prototype.getModifiedResourceFiles = function () {
            var e_1, _a;
            var modifiedFiles = new Set();
            try {
                for (var _b = tslib_1.__values(this.lastReadResourceVersion), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib_1.__read(_c.value, 2), fileName = _d[0], oldVersion = _d[1];
                    if (this.project.getScriptVersion(fileName) !== oldVersion) {
                        modifiedFiles.add(fileName);
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
            return modifiedFiles.size > 0 ? modifiedFiles : undefined;
        };
        return LanguageServiceAdapter;
    }());
    exports.LanguageServiceAdapter = LanguageServiceAdapter;
    /**
     * Used to read configuration files.
     *
     * A language service parse configuration host is independent of the adapter
     * because signatures of calls like `FileSystem#readFile` are a bit stricter
     * than those on the adapter.
     */
    var LSParseConfigHost = /** @class */ (function () {
        function LSParseConfigHost(serverHost) {
            this.serverHost = serverHost;
        }
        LSParseConfigHost.prototype.exists = function (path) {
            return this.serverHost.fileExists(path) || this.serverHost.directoryExists(path);
        };
        LSParseConfigHost.prototype.readFile = function (path) {
            var content = this.serverHost.readFile(path);
            if (content === undefined) {
                throw new Error("LanguageServiceFS#readFile called on unavailable file " + path);
            }
            return content;
        };
        LSParseConfigHost.prototype.lstat = function (path) {
            var _this = this;
            return {
                isFile: function () {
                    return _this.serverHost.fileExists(path);
                },
                isDirectory: function () {
                    return _this.serverHost.directoryExists(path);
                },
                isSymbolicLink: function () {
                    throw new Error("LanguageServiceFS#lstat#isSymbolicLink not implemented");
                },
            };
        };
        LSParseConfigHost.prototype.pwd = function () {
            return this.serverHost.getCurrentDirectory();
        };
        LSParseConfigHost.prototype.extname = function (path) {
            return p.extname(path);
        };
        LSParseConfigHost.prototype.resolve = function () {
            var paths = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                paths[_i] = arguments[_i];
            }
            return p.resolve.apply(p, tslib_1.__spread(paths));
        };
        LSParseConfigHost.prototype.dirname = function (file) {
            return p.dirname(file);
        };
        LSParseConfigHost.prototype.join = function (basePath) {
            var paths = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                paths[_i - 1] = arguments[_i];
            }
            return p.join.apply(p, tslib_1.__spread([basePath], paths));
        };
        return LSParseConfigHost;
    }());
    exports.LSParseConfigHost = LSParseConfigHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL2l2eS9hZGFwdGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7O0lBT0gsK0RBQTZEO0lBQzdELGtGQUFnRjtJQUNoRix3QkFBMEI7SUFHMUIsNkRBQXlDO0lBRXpDO1FBZUUsZ0NBQTZCLE9BQTBCO1lBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1lBZDlDLGVBQVUsR0FBRyxJQUFJLENBQUM7WUFDbEIsNEJBQXVCLEdBQW9CLEVBQUUsQ0FBQztZQUM5QyxrQkFBYSxHQUF1QixJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQzlDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLENBQU0sc0JBQXNCO1lBQ2xELHVCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFFLHFCQUFxQjtZQUcxRDs7OztlQUlHO1lBQ2MsNEJBQXVCLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7WUFHbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBVyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFFRCx1Q0FBTSxHQUFOLFVBQU8sRUFBaUI7WUFDdEIsT0FBTyxjQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUVELDJDQUFVLEdBQVYsVUFBVyxRQUFnQjtZQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCx5Q0FBUSxHQUFSLFVBQVMsUUFBZ0I7WUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsb0RBQW1CLEdBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFD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QUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFDRCxXQUFXLEVBQUU7b0JBQ1gsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFDRCxjQUFjLEVBQUU7b0JBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2FBQ0YsQ0FBQztRQUNKLENBQUM7UUFDRCwrQkFBRyxHQUFIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFvQixDQUFDO1FBQ2pFLENBQUM7UUFDRCxtQ0FBTyxHQUFQLFVBQVEsSUFBZ0M7WUFDdEMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxtQ0FBTyxHQUFQO1lBQVEsZUFBa0I7aUJBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtnQkFBbEIsMEJBQWtCOztZQUN4QixPQUFPLENBQUMsQ0FBQyxPQUFPLE9BQVQsQ0FBQyxtQkFBWSxLQUFLLEVBQW1CLENBQUM7UUFDL0MsQ0FBQztRQUNELG1DQUFPLEdBQVAsVUFBOEIsSUFBTztZQUNuQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFNLENBQUM7UUFDOUIsQ0FBQztRQUNELGdDQUFJLEdBQUosVUFBMkIsUUFBVztZQUFFLGVBQWtCO2lCQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7Z0JBQWxCLDhCQUFrQjs7WUFDeEQsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFOLENBQUMsb0JBQU0sUUFBUSxHQUFLLEtBQUssRUFBTSxDQUFDO1FBQ3pDLENBQUM7UUFDSCx3QkFBQztJQUFELENBQUMsQUF4Q0QsSUF3Q0M7SUF4Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKiBAZmlsZW92ZXJ2aWV3IHByb3ZpZGVzIGFkYXB0ZXJzIGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIG5nIGNvbXBpbGVyICovXG5cbmltcG9ydCB7Q29uZmlndXJhdGlvbkhvc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaSc7XG5pbXBvcnQge05nQ29tcGlsZXJBZGFwdGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2NvcmUvYXBpJztcbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIEZpbGVTdGF0cywgUGF0aFNlZ21lbnQsIFBhdGhTdHJpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtpc1NoaW19IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2Mvc2hpbXMnO1xuaW1wb3J0IHtnZXRSb290RGlyc30gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy91dGlsL3NyYy90eXBlc2NyaXB0JztcbmltcG9ydCAqIGFzIHAgZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0L2xpYi90c3NlcnZlcmxpYnJhcnknO1xuXG5pbXBvcnQge2lzVHlwZVNjcmlwdEZpbGV9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlQWRhcHRlciBpbXBsZW1lbnRzIE5nQ29tcGlsZXJBZGFwdGVyIHtcbiAgcmVhZG9ubHkgZW50cnlQb2ludCA9IG51bGw7XG4gIHJlYWRvbmx5IGNvbnN0cnVjdGlvbkRpYWdub3N0aWNzOiB0cy5EaWFnbm9zdGljW10gPSBbXTtcbiAgcmVhZG9ubHkgaWdub3JlRm9yRW1pdDogU2V0PHRzLlNvdXJjZUZpbGU+ID0gbmV3IFNldCgpO1xuICByZWFkb25seSBmYWN0b3J5VHJhY2tlciA9IG51bGw7ICAgICAgLy8gbm8gLm5nZmFjdG9yeSBzaGltc1xuICByZWFkb25seSB1bmlmaWVkTW9kdWxlc0hvc3QgPSBudWxsOyAgLy8gb25seSB1c2VkIGluIEJhemVsXG4gIHJlYWRvbmx5IHJvb3REaXJzOiBBYnNvbHV0ZUZzUGF0aFtdO1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgcmVzb3VyY2UgZmlsZW5hbWVzIHRvIHRoZSB2ZXJzaW9uIG9mIHRoZSBmaWxlIGxhc3QgcmVhZCB2aWEgYHJlYWRSZXNvdXJjZWAuXG4gICAqXG4gICAqIFVzZWQgdG8gaW1wbGVtZW50IGBnZXRNb2RpZmllZFJlc291cmNlRmlsZXNgLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBsYXN0UmVhZFJlc291cmNlVmVyc2lvbiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwcm9qZWN0OiB0cy5zZXJ2ZXIuUHJvamVjdCkge1xuICAgIHRoaXMucm9vdERpcnMgPSBnZXRSb290RGlycyh0aGlzLCBwcm9qZWN0LmdldENvbXBpbGF0aW9uU2V0dGluZ3MoKSk7XG4gIH1cblxuICBpc1NoaW0oc2Y6IHRzLlNvdXJjZUZpbGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNTaGltKHNmKTtcbiAgfVxuXG4gIGZpbGVFeGlzdHMoZmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2plY3QuZmlsZUV4aXN0cyhmaWxlTmFtZSk7XG4gIH1cblxuICByZWFkRmlsZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdC5yZWFkRmlsZShmaWxlTmFtZSk7XG4gIH1cblxuICBnZXRDdXJyZW50RGlyZWN0b3J5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdC5nZXRDdXJyZW50RGlyZWN0b3J5KCk7XG4gIH1cblxuICBnZXRDYW5vbmljYWxGaWxlTmFtZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0LnByb2plY3RTZXJ2aWNlLnRvQ2Fub25pY2FsRmlsZU5hbWUoZmlsZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcmVhbCBwYXRoIG9mIGEgc3ltbGluay4gVGhpcyBtZXRob2QgaXMgcmVxdWlyZWQgaW4gb3JkZXIgdG9cbiAgICogcmVzb2x2ZSBzeW1saW5rcyBpbiBub2RlX21vZHVsZXMuXG4gICAqL1xuICByZWFscGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnByb2plY3QucmVhbHBhdGg/LihwYXRoKSA/PyBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlYWRSZXNvdXJjZSgpIGlzIGFuIEFuZ3VsYXItc3BlY2lmaWMgbWV0aG9kIGZvciByZWFkaW5nIGZpbGVzIHRoYXQgYXJlIG5vdFxuICAgKiBtYW5hZ2VkIGJ5IHRoZSBUUyBjb21waWxlciBob3N0LCBuYW1lbHkgdGVtcGxhdGVzIGFuZCBzdHlsZXNoZWV0cy5cbiAgICogSXQgaXMgYSBtZXRob2Qgb24gRXh0ZW5kZWRUc0NvbXBpbGVySG9zdCwgc2VlXG4gICAqIHBhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvY29yZS9hcGkvc3JjL2ludGVyZmFjZXMudHNcbiAgICovXG4gIHJlYWRSZXNvdXJjZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaXNUeXBlU2NyaXB0RmlsZShmaWxlTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgcmVhZFJlc291cmNlKCkgc2hvdWxkIG5vdCBiZSBjYWxsZWQgb24gVFMgZmlsZTogJHtmaWxlTmFtZX1gKTtcbiAgICB9XG4gICAgLy8gQ2FsbGluZyBnZXRTY3JpcHRTbmFwc2hvdCgpIHdpbGwgYWN0dWFsbHkgY3JlYXRlIGEgU2NyaXB0SW5mbyBpZiBpdCBkb2VzXG4gICAgLy8gbm90IGV4aXN0ISBUaGUgc2FtZSBhcHBsaWVzIGZvciBnZXRTY3JpcHRWZXJzaW9uKCkuXG4gICAgLy8gZ2V0U2NyaXB0SW5mbygpIHdpbGwgbm90IGNyZWF0ZSBvbmUgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCB3ZSAqd2FudCogYSBzY3JpcHQgaW5mbyB0byBiZSBjcmVhdGVkIHNvIHRoYXQgd2UgY291bGRcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGl0cyB2ZXJzaW9uLlxuICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5wcm9qZWN0LmdldFNjcmlwdFNuYXBzaG90KGZpbGVOYW1lKTtcbiAgICBpZiAoIXNuYXBzaG90KSB7XG4gICAgICAvLyBUaGlzIHdvdWxkIGZhaWwgaWYgdGhlIGZpbGUgZG9lcyBub3QgZXhpc3QsIG9yIHJlYWRGaWxlKCkgZmFpbHMgZm9yXG4gICAgICAvLyB3aGF0ZXZlciByZWFzb25zLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZ2V0IHNjcmlwdCBzbmFwc2hvdCB3aGlsZSB0cnlpbmcgdG8gcmVhZCAke2ZpbGVOYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCB2ZXJzaW9uID0gdGhpcy5wcm9qZWN0LmdldFNjcmlwdFZlcnNpb24oZmlsZU5hbWUpO1xuICAgIHRoaXMubGFzdFJlYWRSZXNvdXJjZVZlcnNpb24uc2V0KGZpbGVOYW1lLCB2ZXJzaW9uKTtcbiAgICByZXR1cm4gc25hcHNob3QuZ2V0VGV4dCgwLCBzbmFwc2hvdC5nZXRMZW5ndGgoKSk7XG4gIH1cblxuICBnZXRNb2RpZmllZFJlc291cmNlRmlsZXMoKTogU2V0PHN0cmluZz58dW5kZWZpbmVkIHtcbiAgICBjb25zdCBtb2RpZmllZEZpbGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBbZmlsZU5hbWUsIG9sZFZlcnNpb25dIG9mIHRoaXMubGFzdFJlYWRSZXNvdXJjZVZlcnNpb24pIHtcbiAgICAgIGlmICh0aGlzLnByb2plY3QuZ2V0U2NyaXB0VmVyc2lvbihmaWxlTmFtZSkgIT09IG9sZFZlcnNpb24pIHtcbiAgICAgICAgbW9kaWZpZWRGaWxlcy5hZGQoZmlsZU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9kaWZpZWRGaWxlcy5zaXplID4gMCA/IG1vZGlmaWVkRmlsZXMgOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2VkIHRvIHJlYWQgY29uZmlndXJhdGlvbiBmaWxlcy5cbiAqXG4gKiBBIGxhbmd1YWdlIHNlcnZpY2UgcGFyc2UgY29uZmlndXJhdGlvbiBob3N0IGlzIGluZGVwZW5kZW50IG9mIHRoZSBhZGFwdGVyXG4gKiBiZWNhdXNlIHNpZ25hdHVyZXMgb2YgY2FsbHMgbGlrZSBgRmlsZVN5c3RlbSNyZWFkRmlsZWAgYXJlIGEgYml0IHN0cmljdGVyXG4gKiB0aGFuIHRob3NlIG9uIHRoZSBhZGFwdGVyLlxuICovXG5leHBvcnQgY2xhc3MgTFNQYXJzZUNvbmZpZ0hvc3QgaW1wbGVtZW50cyBDb25maWd1cmF0aW9uSG9zdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VydmVySG9zdDogdHMuc2VydmVyLlNlcnZlckhvc3QpIHt9XG4gIGV4aXN0cyhwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZlckhvc3QuZmlsZUV4aXN0cyhwYXRoKSB8fCB0aGlzLnNlcnZlckhvc3QuZGlyZWN0b3J5RXhpc3RzKHBhdGgpO1xuICB9XG4gIHJlYWRGaWxlKHBhdGg6IEFic29sdXRlRnNQYXRoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5zZXJ2ZXJIb3N0LnJlYWRGaWxlKHBhdGgpO1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTGFuZ3VhZ2VTZXJ2aWNlRlMjcmVhZEZpbGUgY2FsbGVkIG9uIHVuYXZhaWxhYmxlIGZpbGUgJHtwYXRofWApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBsc3RhdChwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IEZpbGVTdGF0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmlsZTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJIb3N0LmZpbGVFeGlzdHMocGF0aCk7XG4gICAgICB9LFxuICAgICAgaXNEaXJlY3Rvcnk6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVySG9zdC5kaXJlY3RvcnlFeGlzdHMocGF0aCk7XG4gICAgICB9LFxuICAgICAgaXNTeW1ib2xpY0xpbms6ICgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMYW5ndWFnZVNlcnZpY2VGUyNsc3RhdCNpc1N5bWJvbGljTGluayBub3QgaW1wbGVtZW50ZWRgKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBwd2QoKTogQWJzb2x1dGVGc1BhdGgge1xuICAgIHJldHVybiB0aGlzLnNlcnZlckhvc3QuZ2V0Q3VycmVudERpcmVjdG9yeSgpIGFzIEFic29sdXRlRnNQYXRoO1xuICB9XG4gIGV4dG5hbWUocGF0aDogQWJzb2x1dGVGc1BhdGh8UGF0aFNlZ21lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBwLmV4dG5hbWUocGF0aCk7XG4gIH1cbiAgcmVzb2x2ZSguLi5wYXRoczogc3RyaW5nW10pOiBBYnNvbHV0ZUZzUGF0aCB7XG4gICAgcmV0dXJuIHAucmVzb2x2ZSguLi5wYXRocykgYXMgQWJzb2x1dGVGc1BhdGg7XG4gIH1cbiAgZGlybmFtZTxUIGV4dGVuZHMgUGF0aFN0cmluZz4oZmlsZTogVCk6IFQge1xuICAgIHJldHVybiBwLmRpcm5hbWUoZmlsZSkgYXMgVDtcbiAgfVxuICBqb2luPFQgZXh0ZW5kcyBQYXRoU3RyaW5nPihiYXNlUGF0aDogVCwgLi4ucGF0aHM6IHN0cmluZ1tdKTogVCB7XG4gICAgcmV0dXJuIHAuam9pbihiYXNlUGF0aCwgLi4ucGF0aHMpIGFzIFQ7XG4gIH1cbn1cbiJdfQ==