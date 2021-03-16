/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/ivy/attribute_completions" />
import { TmplAstElement, TmplAstTemplate } from '@angular/compiler';
import { DirectiveInScope, TemplateTypeChecker } from '@angular/compiler-cli/src/ngtsc/typecheck/api';
import * as ts from 'typescript';
/**
 * Differentiates different kinds of `AttributeCompletion`s.
 */
export declare enum AttributeCompletionKind {
    /**
     * Completion of an attribute from the HTML schema.
     *
     * Attributes often have a corresponding DOM property of the same name.
     */
    DomAttribute = 0,
    /**
     * Completion of a property from the DOM schema.
     *
     * `DomProperty` completions are generated only for properties which don't share their name with
     * an HTML attribute.
     */
    DomProperty = 1,
    /**
     * Completion of an attribute that results in a new directive being matched on an element.
     */
    DirectiveAttribute = 2,
    /**
     * Completion of an attribute that results in a new structural directive being matched on an
     * element.
     */
    StructuralDirectiveAttribute = 3,
    /**
     * Completion of an input from a directive which is either present on the element, or becomes
     * present after the addition of this attribute.
     */
    DirectiveInput = 4,
    /**
     * Completion of an output from a directive which is either present on the element, or becomes
     * present after the addition of this attribute.
     */
    DirectiveOutput = 5
}
/**
 * Completion of an attribute from the DOM schema.
 */
export interface DomAttributeCompletion {
    kind: AttributeCompletionKind.DomAttribute;
    /**
     * Name of the HTML attribute (not to be confused with the corresponding DOM property name).
     */
    attribute: string;
    /**
     * Whether this attribute is also a DOM property.
     */
    isAlsoProperty: boolean;
}
/**
 * Completion of a DOM property of an element that's distinct from an HTML attribute.
 */
export interface DomPropertyCompletion {
    kind: AttributeCompletionKind.DomProperty;
    /**
     * Name of the DOM property
     */
    property: string;
}
/**
 * Completion of an attribute which results in a new directive being matched on an element.
 */
export interface DirectiveAttributeCompletion {
    kind: AttributeCompletionKind.DirectiveAttribute | AttributeCompletionKind.StructuralDirectiveAttribute;
    /**
     * Name of the attribute whose addition causes this directive to match the element.
     */
    attribute: string;
    /**
     * The directive whose selector gave rise to this completion.
     */
    directive: DirectiveInScope;
}
/**
 * Completion of an input of a directive which may either be present on the element, or become
 * present when a binding to this input is added.
 */
export interface DirectiveInputCompletion {
    kind: AttributeCompletionKind.DirectiveInput;
    /**
     * The public property name of the input (the name which would be used in any binding to that
     * input).
     */
    propertyName: string;
    /**
     * The directive which has this input.
     */
    directive: DirectiveInScope;
    /**
     * The field name on the directive class which corresponds to this input.
     *
     * Currently, in the case where a single property name corresponds to multiple input fields, only
     * the first such field is represented here. In the future multiple results may be warranted.
     */
    classPropertyName: string;
    /**
     * Whether this input can be used with two-way binding (that is, whether a corresponding change
     * output exists on the directive).
     */
    twoWayBindingSupported: boolean;
}
export interface DirectiveOutputCompletion {
    kind: AttributeCompletionKind.DirectiveOutput;
    /**
     * The public event name of the output (the name which would be used in any binding to that
     * output).
     */
    eventName: string;
    /**
     *The directive which has this output.
     */
    directive: DirectiveInScope;
    /**
     * The field name on the directive class which corresponds to this output.
     */
    classPropertyName: string;
}
/**
 * Any named attribute which is available for completion on a given element.
 *
 * Disambiguated by the `kind` property into various types of completions.
 */
export declare type AttributeCompletion = DomAttributeCompletion | DomPropertyCompletion | DirectiveAttributeCompletion | DirectiveInputCompletion | DirectiveOutputCompletion;
/**
 * Given an element and its context, produce a `Map` of all possible attribute completions.
 *
 * 3 kinds of attributes are considered for completion, from highest to lowest priority:
 *
 * 1. Inputs/outputs of directives present on the element already.
 * 2. Inputs/outputs of directives that are not present on the element, but which would become
 *    present if such a binding is added.
 * 3. Attributes from the DOM schema for the element.
 *
 * The priority of these options determines which completions are added to the `Map`. If a directive
 * input shares the same name as a DOM attribute, the `Map` will reflect the directive input
 * completion, not the DOM completion for that name.
 */
export declare function buildAttributeCompletionTable(component: ts.ClassDeclaration, element: TmplAstElement | TmplAstTemplate, checker: TemplateTypeChecker, includeDomSchemaAttributes: boolean): Map<string, AttributeCompletion>;
/**
 * Given an `AttributeCompletion`, add any available completions to a `ts.CompletionEntry` array of
 * results.
 *
 * The kind of completions generated depends on whether the current context is an attribute context
 * or not. For example, completing on `<element attr|>` will generate two results: `attribute` and
 * `[attribute]` - either a static attribute can be generated, or a property binding. However,
 * `<element [attr|]>` is not an attribute context, and so only the property completion `attribute`
 * is generated. Note that this completion does not have the `[]` property binding sugar as its
 * implicitly present in a property binding context (we're already completing within an `[attr|]`
 * expression).
 */
export declare function addAttributeCompletionEntries(entries: ts.CompletionEntry[], completion: AttributeCompletion, isAttributeContext: boolean, isElementContext: boolean, replacementSpan: ts.TextSpan | undefined): void;
export declare function getAttributeCompletionSymbol(completion: AttributeCompletion, checker: ts.TypeChecker): ts.Symbol | null;
