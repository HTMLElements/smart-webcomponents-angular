/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/ivy/definitions" />
import { NgCompiler } from '@angular/compiler-cli/src/ngtsc/core';
import * as ts from 'typescript';
export declare class DefinitionBuilder {
    private readonly tsLS;
    private readonly compiler;
    constructor(tsLS: ts.LanguageService, compiler: NgCompiler);
    getDefinitionAndBoundSpan(fileName: string, position: number): ts.DefinitionInfoAndBoundSpan | undefined;
    private getDefinitionsForSymbol;
    private getDefinitionsForSymbols;
    getTypeDefinitionsAtPosition(fileName: string, position: number): readonly ts.DefinitionInfo[] | undefined;
    private getTypeDefinitionsForTemplateInstance;
    private getDirectiveTypeDefsForBindingNode;
    private getTypeDefinitionsForSymbols;
    private getDefinitionMetaAtPosition;
}
