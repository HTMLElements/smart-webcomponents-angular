/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/ivy/template_target" />
import * as e from '@angular/compiler/src/expression_parser/ast';
import * as t from '@angular/compiler/src/render3/r3_ast';
/**
 * Contextual information for a target position within the template.
 */
export interface TemplateTarget {
    /**
     * Target position within the template.
     */
    position: number;
    /**
     * The template (or AST expression) node or nodes closest to the search position.
     */
    context: TargetContext;
    /**
     * The `t.Template` which contains the found node or expression (or `null` if in the root
     * template).
     */
    template: t.Template | null;
    /**
     * The immediate parent node of the targeted node.
     */
    parent: t.Node | e.AST | null;
}
/**
 * A node or nodes targeted at a given position in the template, including potential contextual
 * information about the specific aspect of the node being referenced.
 *
 * Some nodes have multiple interior contexts. For example, `t.Element` nodes have both a tag name
 * as well as a body, and a given position definitively points to one or the other. `TargetNode`
 * captures the node itself, as well as this additional contextual disambiguation.
 */
export declare type TargetContext = SingleNodeTarget | MultiNodeTarget;
/** Contexts which logically target only a single node in the template AST. */
export declare type SingleNodeTarget = RawExpression | RawTemplateNode | ElementInBodyContext | ElementInTagContext | AttributeInKeyContext | AttributeInValueContext;
/**
 * Contexts which logically target multiple nodes in the template AST, which cannot be
 * disambiguated given a single position because they are all equally relavent. For example, in the
 * banana-in-a-box syntax `[(ngModel)]="formValues.person"`, the position in the template for the
 * key `ngModel` refers to both the bound event `ngModelChange` and the input `ngModel`.
 */
export declare type MultiNodeTarget = TwoWayBindingContext;
/**
 * Differentiates the various kinds of `TargetNode`s.
 */
export declare enum TargetNodeKind {
    RawExpression = 0,
    RawTemplateNode = 1,
    ElementInTagContext = 2,
    ElementInBodyContext = 3,
    AttributeInKeyContext = 4,
    AttributeInValueContext = 5,
    TwoWayBindingContext = 6
}
/**
 * An `e.AST` expression that's targeted at a given position, with no additional context.
 */
export interface RawExpression {
    kind: TargetNodeKind.RawExpression;
    node: e.AST;
}
/**
 * A `t.Node` template node that's targeted at a given position, with no additional context.
 */
export interface RawTemplateNode {
    kind: TargetNodeKind.RawTemplateNode;
    node: t.Node;
}
/**
 * A `t.Element` (or `t.Template`) element node that's targeted, where the given position is within
 * the tag name.
 */
export interface ElementInTagContext {
    kind: TargetNodeKind.ElementInTagContext;
    node: t.Element | t.Template;
}
/**
 * A `t.Element` (or `t.Template`) element node that's targeted, where the given position is within
 * the element body.
 */
export interface ElementInBodyContext {
    kind: TargetNodeKind.ElementInBodyContext;
    node: t.Element | t.Template;
}
export interface AttributeInKeyContext {
    kind: TargetNodeKind.AttributeInKeyContext;
    node: t.TextAttribute | t.BoundAttribute | t.BoundEvent;
}
export interface AttributeInValueContext {
    kind: TargetNodeKind.AttributeInValueContext;
    node: t.TextAttribute | t.BoundAttribute | t.BoundEvent;
}
/**
 * A `t.BoundAttribute` and `t.BoundEvent` pair that are targeted, where the given position is
 * within the key span of both.
 */
export interface TwoWayBindingContext {
    kind: TargetNodeKind.TwoWayBindingContext;
    nodes: [t.BoundAttribute, t.BoundEvent];
}
/**
 * Return the template AST node or expression AST node that most accurately
 * represents the node at the specified cursor `position`.
 *
 * @param template AST tree of the template
 * @param position target cursor position
 */
export declare function getTargetAtPosition(template: t.Node[], position: number): TemplateTarget | null;
