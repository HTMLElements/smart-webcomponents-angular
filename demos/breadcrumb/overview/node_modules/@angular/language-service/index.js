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
        define("@angular/language-service", ["require", "exports", "tslib", "@angular/language-service/api", "@angular/language-service/src/ts_plugin"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getExternalFiles = exports.create = void 0;
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require("@angular/language-service/api"), exports);
    var ts_plugin_1 = require("@angular/language-service/src/ts_plugin");
    Object.defineProperty(exports, "create", { enumerable: true, get: function () { return ts_plugin_1.create; } });
    Object.defineProperty(exports, "getExternalFiles", { enumerable: true, get: function () { return ts_plugin_1.getExternalFiles; } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCx3RUFBc0I7SUFDdEIscUVBQXlEO0lBQWpELG1HQUFBLE1BQU0sT0FBQTtJQUFFLDZHQUFBLGdCQUFnQixPQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vYXBpJztcbmV4cG9ydCB7Y3JlYXRlLCBnZXRFeHRlcm5hbEZpbGVzfSBmcm9tICcuL3NyYy90c19wbHVnaW4nO1xuIl19