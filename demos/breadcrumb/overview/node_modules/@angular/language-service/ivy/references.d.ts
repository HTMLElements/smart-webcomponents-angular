/// <amd-module name="@angular/language-service/ivy/references" />
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AST, TmplAstNode } from '@angular/compiler';
import { NgCompiler } from '@angular/compiler-cli/src/ngtsc/core';
import { TypeCheckingProgramStrategy } from '@angular/compiler-cli/src/ngtsc/typecheck/api';
import * as ts from 'typescript';
declare enum RequestKind {
    Template = 0,
    TypeScript = 1
}
interface TemplateRequest {
    kind: RequestKind.Template;
    requestNode: TmplAstNode | AST;
    position: number;
}
interface TypeScriptRequest {
    kind: RequestKind.TypeScript;
    requestNode: ts.Node;
}
declare type RequestOrigin = TemplateRequest | TypeScriptRequest;
export declare class ReferencesAndRenameBuilder {
    private readonly strategy;
    private readonly tsLS;
    private readonly compiler;
    private readonly ttc;
    constructor(strategy: TypeCheckingProgramStrategy, tsLS: ts.LanguageService, compiler: NgCompiler);
    getRenameInfo(filePath: string, position: number): Omit<ts.RenameInfoSuccess, 'kind' | 'kindModifiers'> | ts.RenameInfoFailure;
    findRenameLocations(filePath: string, position: number): readonly ts.RenameLocation[] | undefined;
    private findRenameLocationsAtTemplatePosition;
    private getTsNodeAtPosition;
    findRenameLocationsAtTypescriptPosition(filePath: string, position: number, requestOrigin: RequestOrigin): readonly ts.RenameLocation[] | undefined;
    getReferencesAtPosition(filePath: string, position: number): ts.ReferenceEntry[] | undefined;
    private getReferencesAtTemplatePosition;
    private getTargetDetailsAtTemplatePosition;
    private getPositionsForDirectives;
    private getReferencesAtTypescriptPosition;
    private convertToTemplateDocumentSpan;
}
export {};
