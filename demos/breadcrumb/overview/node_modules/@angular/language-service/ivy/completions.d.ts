/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/ivy/completions" />
import { AST, TmplAstNode } from '@angular/compiler';
import { NgCompiler } from '@angular/compiler-cli/src/ngtsc/core';
import * as ts from 'typescript';
import { TemplateTarget } from './template_target';
export declare enum CompletionNodeContext {
    None = 0,
    ElementTag = 1,
    ElementAttributeKey = 2,
    ElementAttributeValue = 3,
    EventValue = 4,
    TwoWayBinding = 5
}
/**
 * Performs autocompletion operations on a given node in the template.
 *
 * This class acts as a closure around all of the context required to perform the 3 autocompletion
 * operations (completions, get details, and get symbol) at a specific node.
 *
 * The generic `N` type for the template node is narrowed internally for certain operations, as the
 * compiler operations required to implement completion may be different for different node types.
 *
 * @param N type of the template node in question, narrowed accordingly.
 */
export declare class CompletionBuilder<N extends TmplAstNode | AST> {
    private readonly tsLS;
    private readonly compiler;
    private readonly component;
    private readonly node;
    private readonly targetDetails;
    private readonly inlineTemplate;
    private readonly typeChecker;
    private readonly templateTypeChecker;
    private readonly nodeParent;
    private readonly nodeContext;
    private readonly template;
    private readonly position;
    constructor(tsLS: ts.LanguageService, compiler: NgCompiler, component: ts.ClassDeclaration, node: N, targetDetails: TemplateTarget, inlineTemplate: boolean);
    /**
     * Analogue for `ts.LanguageService.getCompletionsAtPosition`.
     */
    getCompletionsAtPosition(options: ts.GetCompletionsAtPositionOptions | undefined): ts.WithMetadata<ts.CompletionInfo> | undefined;
    /**
     * Analogue for `ts.LanguageService.getCompletionEntryDetails`.
     */
    getCompletionEntryDetails(entryName: string, formatOptions: ts.FormatCodeOptions | ts.FormatCodeSettings | undefined, preferences: ts.UserPreferences | undefined): ts.CompletionEntryDetails | undefined;
    /**
     * Analogue for `ts.LanguageService.getCompletionEntrySymbol`.
     */
    getCompletionEntrySymbol(name: string): ts.Symbol | undefined;
    /**
     * Determine if the current node is the completion of a property expression, and narrow the type
     * of `this.node` if so.
     *
     * This narrowing gives access to additional methods related to completion of property
     * expressions.
     */
    private isPropertyExpressionCompletion;
    /**
     * Get completions for property expressions.
     */
    private getPropertyExpressionCompletion;
    /**
     * Get the details of a specific completion for a property expression.
     */
    private getPropertyExpressionCompletionDetails;
    /**
     * Get the `ts.Symbol` for a specific completion for a property expression.
     */
    private getPropertyExpressionCompletionSymbol;
    /**
     * Get completions for a property expression in a global context (e.g. `{{y|}}`).
     */
    private getGlobalPropertyExpressionCompletion;
    /**
     * Get the details of a specific completion for a property expression in a global context (e.g.
     * `{{y|}}`).
     */
    private getGlobalPropertyExpressionCompletionDetails;
    /**
     * Get the `ts.Symbol` of a specific completion for a property expression in a global context
     * (e.g.
     * `{{y|}}`).
     */
    private getGlobalPropertyExpressionCompletionSymbol;
    private isElementTagCompletion;
    private getElementTagCompletion;
    private getElementTagCompletionDetails;
    private getElementTagCompletionSymbol;
    private isElementAttributeCompletion;
    private getElementAttributeCompletions;
    private getElementAttributeCompletionDetails;
    private getElementAttributeCompletionSymbol;
    private isPipeCompletion;
    private getPipeCompletions;
}
