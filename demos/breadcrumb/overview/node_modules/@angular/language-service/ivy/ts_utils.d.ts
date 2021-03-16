/// <amd-module name="@angular/language-service/ivy/ts_utils" />
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
/**
 * Return the node that most tightly encompasses the specified `position`.
 * @param node The starting node to start the top-down search.
 * @param position The target position within the `node`.
 */
export declare function findTightestNode(node: ts.Node, position: number): ts.Node | undefined;
export declare function getParentClassDeclaration(startNode: ts.Node): ts.ClassDeclaration | undefined;
/**
 * Returns a property assignment from the assignment value if the property name
 * matches the specified `key`, or `null` if there is no match.
 */
export declare function getPropertyAssignmentFromValue(value: ts.Node, key: string): ts.PropertyAssignment | null;
/**
 * Given a decorator property assignment, return the ClassDeclaration node that corresponds to the
 * directive class the property applies to.
 * If the property assignment is not on a class decorator, no declaration is returned.
 *
 * For example,
 *
 * @Component({
 *   template: '<div></div>'
 *   ^^^^^^^^^^^^^^^^^^^^^^^---- property assignment
 * })
 * class AppComponent {}
 *           ^---- class declaration node
 *
 * @param propAsgnNode property assignment
 */
export declare function getClassDeclFromDecoratorProp(propAsgnNode: ts.PropertyAssignment): ts.ClassDeclaration | undefined;
