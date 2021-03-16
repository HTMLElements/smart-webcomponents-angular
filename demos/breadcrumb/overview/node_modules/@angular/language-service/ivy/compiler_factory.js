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
        define("@angular/language-service/ivy/compiler_factory", ["require", "exports", "@angular/compiler-cli/src/ngtsc/core", "@angular/compiler-cli/src/ngtsc/incremental"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CompilerFactory = void 0;
    var core_1 = require("@angular/compiler-cli/src/ngtsc/core");
    var incremental_1 = require("@angular/compiler-cli/src/ngtsc/incremental");
    /**
     * Manages the `NgCompiler` instance which backs the language service, updating or replacing it as
     * needed to produce an up-to-date understanding of the current program.
     *
     * TODO(alxhub): currently the options used for the compiler are specified at `CompilerFactory`
     * construction, and are not changable. In a real project, users can update `tsconfig.json`. We need
     * to properly handle a change in the compiler options, either by having an API to update the
     * `CompilerFactory` to use new options, or by replacing it entirely.
     */
    var CompilerFactory = /** @class */ (function () {
        function CompilerFactory(adapter, programStrategy, options) {
            this.adapter = adapter;
            this.programStrategy = programStrategy;
            this.options = options;
            this.incrementalStrategy = new incremental_1.TrackedIncrementalBuildStrategy();
            this.compiler = null;
            this.lastKnownProgram = null;
        }
        CompilerFactory.prototype.getOrCreate = function () {
            var _a;
            var program = this.programStrategy.getProgram();
            var modifiedResourceFiles = (_a = this.adapter.getModifiedResourceFiles()) !== null && _a !== void 0 ? _a : new Set();
            if (this.compiler !== null && program === this.lastKnownProgram) {
                if (modifiedResourceFiles.size > 0) {
                    // Only resource files have changed since the last NgCompiler was created.
                    var ticket_1 = core_1.resourceChangeTicket(this.compiler, modifiedResourceFiles);
                    this.compiler = core_1.NgCompiler.fromTicket(ticket_1, this.adapter);
                }
                return this.compiler;
            }
            var ticket;
            if (this.compiler === null || this.lastKnownProgram === null) {
                ticket = core_1.freshCompilationTicket(program, this.options, this.incrementalStrategy, this.programStrategy, true, true);
            }
            else {
                ticket = core_1.incrementalFromCompilerTicket(this.compiler, program, this.incrementalStrategy, this.programStrategy, modifiedResourceFiles);
            }
            this.compiler = core_1.NgCompiler.fromTicket(ticket, this.adapter);
            this.lastKnownProgram = program;
            return this.compiler;
        };
        CompilerFactory.prototype.registerLastKnownProgram = function () {
            this.lastKnownProgram = this.programStrategy.getProgram();
        };
        return CompilerFactory;
    }());
    exports.CompilerFactory = CompilerFactory;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2UvaXZ5L2NvbXBpbGVyX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsNkRBQWdLO0lBRWhLLDJFQUE0RjtJQU81Rjs7Ozs7Ozs7T0FRRztJQUNIO1FBS0UseUJBQ3FCLE9BQStCLEVBQy9CLGVBQTRDLEVBQzVDLE9BQTBCO1lBRjFCLFlBQU8sR0FBUCxPQUFPLENBQXdCO1lBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUE2QjtZQUM1QyxZQUFPLEdBQVAsT0FBTyxDQUFtQjtZQVA5Qix3QkFBbUIsR0FBRyxJQUFJLDZDQUErQixFQUFFLENBQUM7WUFDckUsYUFBUSxHQUFvQixJQUFJLENBQUM7WUFDakMscUJBQWdCLEdBQW9CLElBQUksQ0FBQztRQU05QyxDQUFDO1FBRUoscUNBQVcsR0FBWDs7WUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xELElBQU0scUJBQXFCLFNBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxtQ0FBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRW5GLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDL0QsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUNsQywwRUFBMEU7b0JBQzFFLElBQU0sUUFBTSxHQUFHLDJCQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3RDtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7WUFFRCxJQUFJLE1BQXlCLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO2dCQUM1RCxNQUFNLEdBQUcsNkJBQXNCLENBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN4RjtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsb0NBQTZCLENBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUN0RSxxQkFBcUIsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxrREFBd0IsR0FBeEI7WUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1RCxDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQUFDLEFBMUNELElBMENDO0lBMUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsYXRpb25UaWNrZXQsIGZyZXNoQ29tcGlsYXRpb25UaWNrZXQsIGluY3JlbWVudGFsRnJvbUNvbXBpbGVyVGlja2V0LCBOZ0NvbXBpbGVyLCByZXNvdXJjZUNoYW5nZVRpY2tldH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9jb3JlJztcbmltcG9ydCB7TmdDb21waWxlck9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvY29yZS9hcGknO1xuaW1wb3J0IHtUcmFja2VkSW5jcmVtZW50YWxCdWlsZFN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2luY3JlbWVudGFsJztcbmltcG9ydCB7VHlwZUNoZWNraW5nUHJvZ3JhbVN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL3R5cGVjaGVjay9hcGknO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdC9saWIvdHNzZXJ2ZXJsaWJyYXJ5JztcblxuaW1wb3J0IHtMYW5ndWFnZVNlcnZpY2VBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXJzJztcbmltcG9ydCB7aXNFeHRlcm5hbFRlbXBsYXRlfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBNYW5hZ2VzIHRoZSBgTmdDb21waWxlcmAgaW5zdGFuY2Ugd2hpY2ggYmFja3MgdGhlIGxhbmd1YWdlIHNlcnZpY2UsIHVwZGF0aW5nIG9yIHJlcGxhY2luZyBpdCBhc1xuICogbmVlZGVkIHRvIHByb2R1Y2UgYW4gdXAtdG8tZGF0ZSB1bmRlcnN0YW5kaW5nIG9mIHRoZSBjdXJyZW50IHByb2dyYW0uXG4gKlxuICogVE9ETyhhbHhodWIpOiBjdXJyZW50bHkgdGhlIG9wdGlvbnMgdXNlZCBmb3IgdGhlIGNvbXBpbGVyIGFyZSBzcGVjaWZpZWQgYXQgYENvbXBpbGVyRmFjdG9yeWBcbiAqIGNvbnN0cnVjdGlvbiwgYW5kIGFyZSBub3QgY2hhbmdhYmxlLiBJbiBhIHJlYWwgcHJvamVjdCwgdXNlcnMgY2FuIHVwZGF0ZSBgdHNjb25maWcuanNvbmAuIFdlIG5lZWRcbiAqIHRvIHByb3Blcmx5IGhhbmRsZSBhIGNoYW5nZSBpbiB0aGUgY29tcGlsZXIgb3B0aW9ucywgZWl0aGVyIGJ5IGhhdmluZyBhbiBBUEkgdG8gdXBkYXRlIHRoZVxuICogYENvbXBpbGVyRmFjdG9yeWAgdG8gdXNlIG5ldyBvcHRpb25zLCBvciBieSByZXBsYWNpbmcgaXQgZW50aXJlbHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21waWxlckZhY3Rvcnkge1xuICBwcml2YXRlIHJlYWRvbmx5IGluY3JlbWVudGFsU3RyYXRlZ3kgPSBuZXcgVHJhY2tlZEluY3JlbWVudGFsQnVpbGRTdHJhdGVneSgpO1xuICBwcml2YXRlIGNvbXBpbGVyOiBOZ0NvbXBpbGVyfG51bGwgPSBudWxsO1xuICBwcml2YXRlIGxhc3RLbm93blByb2dyYW06IHRzLlByb2dyYW18bnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IGFkYXB0ZXI6IExhbmd1YWdlU2VydmljZUFkYXB0ZXIsXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IHByb2dyYW1TdHJhdGVneTogVHlwZUNoZWNraW5nUHJvZ3JhbVN0cmF0ZWd5LFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBOZ0NvbXBpbGVyT3B0aW9ucyxcbiAgKSB7fVxuXG4gIGdldE9yQ3JlYXRlKCk6IE5nQ29tcGlsZXIge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLnByb2dyYW1TdHJhdGVneS5nZXRQcm9ncmFtKCk7XG4gICAgY29uc3QgbW9kaWZpZWRSZXNvdXJjZUZpbGVzID0gdGhpcy5hZGFwdGVyLmdldE1vZGlmaWVkUmVzb3VyY2VGaWxlcygpID8/IG5ldyBTZXQoKTtcblxuICAgIGlmICh0aGlzLmNvbXBpbGVyICE9PSBudWxsICYmIHByb2dyYW0gPT09IHRoaXMubGFzdEtub3duUHJvZ3JhbSkge1xuICAgICAgaWYgKG1vZGlmaWVkUmVzb3VyY2VGaWxlcy5zaXplID4gMCkge1xuICAgICAgICAvLyBPbmx5IHJlc291cmNlIGZpbGVzIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBOZ0NvbXBpbGVyIHdhcyBjcmVhdGVkLlxuICAgICAgICBjb25zdCB0aWNrZXQgPSByZXNvdXJjZUNoYW5nZVRpY2tldCh0aGlzLmNvbXBpbGVyLCBtb2RpZmllZFJlc291cmNlRmlsZXMpO1xuICAgICAgICB0aGlzLmNvbXBpbGVyID0gTmdDb21waWxlci5mcm9tVGlja2V0KHRpY2tldCwgdGhpcy5hZGFwdGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZXI7XG4gICAgfVxuXG4gICAgbGV0IHRpY2tldDogQ29tcGlsYXRpb25UaWNrZXQ7XG4gICAgaWYgKHRoaXMuY29tcGlsZXIgPT09IG51bGwgfHwgdGhpcy5sYXN0S25vd25Qcm9ncmFtID09PSBudWxsKSB7XG4gICAgICB0aWNrZXQgPSBmcmVzaENvbXBpbGF0aW9uVGlja2V0KFxuICAgICAgICAgIHByb2dyYW0sIHRoaXMub3B0aW9ucywgdGhpcy5pbmNyZW1lbnRhbFN0cmF0ZWd5LCB0aGlzLnByb2dyYW1TdHJhdGVneSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpY2tldCA9IGluY3JlbWVudGFsRnJvbUNvbXBpbGVyVGlja2V0KFxuICAgICAgICAgIHRoaXMuY29tcGlsZXIsIHByb2dyYW0sIHRoaXMuaW5jcmVtZW50YWxTdHJhdGVneSwgdGhpcy5wcm9ncmFtU3RyYXRlZ3ksXG4gICAgICAgICAgbW9kaWZpZWRSZXNvdXJjZUZpbGVzKTtcbiAgICB9XG4gICAgdGhpcy5jb21waWxlciA9IE5nQ29tcGlsZXIuZnJvbVRpY2tldCh0aWNrZXQsIHRoaXMuYWRhcHRlcik7XG4gICAgdGhpcy5sYXN0S25vd25Qcm9ncmFtID0gcHJvZ3JhbTtcbiAgICByZXR1cm4gdGhpcy5jb21waWxlcjtcbiAgfVxuXG4gIHJlZ2lzdGVyTGFzdEtub3duUHJvZ3JhbSgpIHtcbiAgICB0aGlzLmxhc3RLbm93blByb2dyYW0gPSB0aGlzLnByb2dyYW1TdHJhdGVneS5nZXRQcm9ncmFtKCk7XG4gIH1cbn1cbiJdfQ==