/// <amd-module name="@angular/language-service/ivy/utils" />
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteSourceSpan, ParseSourceSpan } from '@angular/compiler';
import { NgCompiler } from '@angular/compiler-cli/src/ngtsc/core';
import { AbsoluteFsPath } from '@angular/compiler-cli/src/ngtsc/file_system';
import { DirectiveSymbol, TemplateTypeChecker } from '@angular/compiler-cli/src/ngtsc/typecheck/api';
import * as e from '@angular/compiler/src/expression_parser/ast';
import * as t from '@angular/compiler/src/render3/r3_ast';
import * as ts from 'typescript';
export declare function getTextSpanOfNode(node: t.Node | e.AST): ts.TextSpan;
export declare function toTextSpan(span: AbsoluteSourceSpan | ParseSourceSpan | e.ParseSpan): ts.TextSpan;
interface NodeWithKeyAndValue extends t.Node {
    keySpan: ParseSourceSpan;
    valueSpan?: ParseSourceSpan;
}
export declare function isTemplateNodeWithKeyAndValue(node: t.Node | e.AST): node is NodeWithKeyAndValue;
export declare function isWithinKey(position: number, node: NodeWithKeyAndValue): boolean;
export declare function isWithinKeyValue(position: number, node: NodeWithKeyAndValue): boolean;
export declare function isTemplateNode(node: t.Node | e.AST): node is t.Node;
export declare function isExpressionNode(node: t.Node | e.AST): node is e.AST;
export interface TemplateInfo {
    template: t.Node[];
    component: ts.ClassDeclaration;
}
/**
 * Retrieves the `ts.ClassDeclaration` at a location along with its template nodes.
 */
export declare function getTemplateInfoAtPosition(fileName: string, position: number, compiler: NgCompiler): TemplateInfo | undefined;
/**
 * Given an element or template, determines which directives match because the tag is present. For
 * example, if a directive selector is `div[myAttr]`, this would match div elements but would not if
 * the selector were just `[myAttr]`. We find which directives are applied because of this tag by
 * elimination: compare the directive matches with the tag present against the directive matches
 * without it. The difference would be the directives which match because the tag is present.
 *
 * @param element The element or template node that the attribute/tag is part of.
 * @param directives The list of directives to match against.
 * @returns The list of directives matching the tag name via the strategy described above.
 */
export declare function getDirectiveMatchesForElementTag(element: t.Template | t.Element, directives: DirectiveSymbol[]): Set<DirectiveSymbol>;
export declare function makeElementSelector(element: t.Element | t.Template): string;
/**
 * Given an attribute name, determines which directives match because the attribute is present. We
 * find which directives are applied because of this attribute by elimination: compare the directive
 * matches with the attribute present against the directive matches without it. The difference would
 * be the directives which match because the attribute is present.
 *
 * @param name The name of the attribute
 * @param hostNode The node which the attribute appears on
 * @param directives The list of directives to match against.
 * @returns The list of directives matching the tag name via the strategy described above.
 */
export declare function getDirectiveMatchesForAttribute(name: string, hostNode: t.Template | t.Element, directives: DirectiveSymbol[]): Set<DirectiveSymbol>;
/**
 * Returns a new `ts.SymbolDisplayPart` array which has the alias imports from the tcb filtered
 * out, i.e. `i0.NgForOf`.
 */
export declare function filterAliasImports(displayParts: ts.SymbolDisplayPart[]): ts.SymbolDisplayPart[];
export declare function isDollarEvent(n: t.Node | e.AST): n is e.PropertyRead;
/**
 * Returns a new array formed by applying a given callback function to each element of the array,
 * and then flattening the result by one level.
 */
export declare function flatMap<T, R>(items: T[] | readonly T[], f: (item: T) => R[] | readonly R[]): R[];
export declare function isTypeScriptFile(fileName: string): boolean;
export declare function isExternalTemplate(fileName: string): boolean;
export declare function isWithin(position: number, span: AbsoluteSourceSpan | ParseSourceSpan): boolean;
/**
 * For a given location in a shim file, retrieves the corresponding file url for the template and
 * the span in the template.
 */
export declare function getTemplateLocationFromShimLocation(templateTypeChecker: TemplateTypeChecker, shimPath: AbsoluteFsPath, positionInShimFile: number): {
    templateUrl: AbsoluteFsPath;
    span: ParseSourceSpan;
} | null;
export {};
