/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/ivy/compiler_factory" />
import { NgCompiler } from '@angular/compiler-cli/src/ngtsc/core';
import { NgCompilerOptions } from '@angular/compiler-cli/src/ngtsc/core/api';
import { TypeCheckingProgramStrategy } from '@angular/compiler-cli/src/ngtsc/typecheck/api';
import { LanguageServiceAdapter } from './adapters';
/**
 * Manages the `NgCompiler` instance which backs the language service, updating or replacing it as
 * needed to produce an up-to-date understanding of the current program.
 *
 * TODO(alxhub): currently the options used for the compiler are specified at `CompilerFactory`
 * construction, and are not changable. In a real project, users can update `tsconfig.json`. We need
 * to properly handle a change in the compiler options, either by having an API to update the
 * `CompilerFactory` to use new options, or by replacing it entirely.
 */
export declare class CompilerFactory {
    private readonly adapter;
    private readonly programStrategy;
    private readonly options;
    private readonly incrementalStrategy;
    private compiler;
    private lastKnownProgram;
    constructor(adapter: LanguageServiceAdapter, programStrategy: TypeCheckingProgramStrategy, options: NgCompilerOptions);
    getOrCreate(): NgCompiler;
    registerLastKnownProgram(): void;
}
