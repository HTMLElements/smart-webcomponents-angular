/// <amd-module name="@angular/language-service/ivy/quick_info" />
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AST, TmplAstNode } from '@angular/compiler';
import { NgCompiler } from '@angular/compiler-cli/src/ngtsc/core';
import * as ts from 'typescript';
import { DisplayInfoKind } from './display_parts';
export declare class QuickInfoBuilder {
    private readonly tsLS;
    private readonly compiler;
    private readonly component;
    private node;
    private readonly typeChecker;
    constructor(tsLS: ts.LanguageService, compiler: NgCompiler, component: ts.ClassDeclaration, node: TmplAstNode | AST);
    get(): ts.QuickInfo | undefined;
    private getQuickInfoForSymbol;
    private getQuickInfoForBindingSymbol;
    private getQuickInfoForElementSymbol;
    private getQuickInfoForVariableSymbol;
    private getQuickInfoForReferenceSymbol;
    private getQuickInfoForPipeSymbol;
    private getQuickInfoForDomBinding;
    private getQuickInfoForDirectiveSymbol;
    private getDocumentationFromTypeDefAtLocation;
    private getQuickInfoAtShimLocation;
}
/**
 * Construct a QuickInfo object taking into account its container and type.
 * @param name Name of the QuickInfo target
 * @param kind component, directive, pipe, etc.
 * @param textSpan span of the target
 * @param containerName either the Symbol's container or the NgModule that contains the directive
 * @param type user-friendly name of the type
 * @param documentation docstring or comment
 */
export declare function createQuickInfo(name: string, kind: DisplayInfoKind, textSpan: ts.TextSpan, containerName?: string, type?: string, documentation?: ts.SymbolDisplayPart[]): ts.QuickInfo;
