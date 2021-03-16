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
        define("@angular/language-service/src/ts_utils", ["require", "exports", "tslib", "typescript/lib/tsserverlibrary"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClassDeclFromDecoratorProp = exports.getClassDeclOfInlineTemplateNode = exports.getPropertyAssignmentFromValue = exports.findTightestNode = exports.findPropertyValueOfType = exports.getDirectiveClassLike = void 0;
    var tslib_1 = require("tslib");
    var ts = require("typescript/lib/tsserverlibrary");
    /**
     * Return metadata about `node` if it looks like an Angular directive class.
     * In this case, potential matches are `@NgModule`, `@Component`, `@Directive`,
     * `@Pipe`, etc.
     * These class declarations all share some common attributes, namely their
     * decorator takes exactly one parameter and the parameter must be an object
     * literal.
     *
     * For example,
     *     v---------- `decoratorId`
     * @NgModule({           <
     *   declarations: [],   < classDecln-al
     * })                    <
     * class AppModule {}    <
     *          ^----- `classId`
     *
     * @param node Potential node that represents an Angular directive.
     */
    function getDirectiveClassLike(node) {
        var e_1, _a;
        if (!ts.isClassDeclaration(node) || !node.name || !node.decorators) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(node.decorators), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                var expr = d.expression;
                if (!ts.isCallExpression(expr) || expr.arguments.length !== 1 ||
                    !ts.isIdentifier(expr.expression)) {
                    continue;
                }
                var arg = expr.arguments[0];
                if (ts.isObjectLiteralExpression(arg)) {
                    return {
                        decoratorId: expr.expression,
                        classId: node.name,
                    };
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    exports.getDirectiveClassLike = getDirectiveClassLike;
    /**
     * Finds the value of a property assignment that is nested in a TypeScript node and is of a certain
     * type T.
     *
     * @param startNode node to start searching for nested property assignment from
     * @param propName property assignment name
     * @param predicate function to verify that a node is of type T.
     * @return node property assignment value of type T, or undefined if none is found
     */
    function findPropertyValueOfType(startNode, propName, predicate) {
        if (ts.isPropertyAssignment(startNode) && startNode.name.getText() === propName) {
            var initializer = startNode.initializer;
            if (predicate(initializer))
                return initializer;
        }
        return startNode.forEachChild(function (c) { return findPropertyValueOfType(c, propName, predicate); });
    }
    exports.findPropertyValueOfType = findPropertyValueOfType;
    /**
     * Return the node that most tightly encompass the specified `position`.
     * @param node
     * @param position
     */
    function findTightestNode(node, position) {
        if (node.getStart() <= position && position < node.getEnd()) {
            return node.forEachChild(function (c) { return findTightestNode(c, position); }) || node;
        }
    }
    exports.findTightestNode = findTightestNode;
    /**
     * Returns a property assignment from the assignment value if the property name
     * matches the specified `key`, or `undefined` if there is no match.
     */
    function getPropertyAssignmentFromValue(value, key) {
        var propAssignment = value.parent;
        if (!propAssignment || !ts.isPropertyAssignment(propAssignment) ||
            propAssignment.name.getText() !== key) {
            return;
        }
        return propAssignment;
    }
    exports.getPropertyAssignmentFromValue = getPropertyAssignmentFromValue;
    /**
     * Given the node which is the string of the inline template for a component, returns the
     * `ts.ClassDeclaration` for the component.
     */
    function getClassDeclOfInlineTemplateNode(templateStringNode) {
        if (!ts.isStringLiteralLike(templateStringNode)) {
            return;
        }
        var tmplAsgn = getPropertyAssignmentFromValue(templateStringNode, 'template');
        if (!tmplAsgn) {
            return;
        }
        return getClassDeclFromDecoratorProp(tmplAsgn);
    }
    exports.getClassDeclOfInlineTemplateNode = getClassDeclOfInlineTemplateNode;
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
    function getClassDeclFromDecoratorProp(propAsgnNode) {
        if (!propAsgnNode.parent || !ts.isObjectLiteralExpression(propAsgnNode.parent)) {
            return;
        }
        var objLitExprNode = propAsgnNode.parent;
        if (!objLitExprNode.parent || !ts.isCallExpression(objLitExprNode.parent)) {
            return;
        }
        var callExprNode = objLitExprNode.parent;
        if (!callExprNode.parent || !ts.isDecorator(callExprNode.parent)) {
            return;
        }
        var decorator = callExprNode.parent;
        if (!decorator.parent || !ts.isClassDeclaration(decorator.parent)) {
            return;
        }
        var classDeclNode = decorator.parent;
        return classDeclNode;
    }
    exports.getClassDeclFromDecoratorProp = getClassDeclFromDecoratorProp;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy90c191dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7O0lBRUgsbURBQXFEO0lBT3JEOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUNILFNBQWdCLHFCQUFxQixDQUFDLElBQWE7O1FBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsRSxPQUFPO1NBQ1I7O1lBQ0QsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTVCLElBQU0sQ0FBQyxXQUFBO2dCQUNWLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFDekQsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDckMsU0FBUztpQkFDVjtnQkFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckMsT0FBTzt3QkFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVU7d0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDbkIsQ0FBQztpQkFDSDthQUNGOzs7Ozs7Ozs7SUFDSCxDQUFDO0lBbEJELHNEQWtCQztJQUVEOzs7Ozs7OztPQVFH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QUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFuQkQsc0VBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQvbGliL3Rzc2VydmVybGlicmFyeSc7XG5cbmludGVyZmFjZSBEaXJlY3RpdmVDbGFzc0xpa2Uge1xuICBkZWNvcmF0b3JJZDogdHMuSWRlbnRpZmllcjsgIC8vIGRlY29yYXRvciBpZGVudGlmaWVyLCBsaWtlIEBDb21wb25lbnRcbiAgY2xhc3NJZDogdHMuSWRlbnRpZmllcjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbWV0YWRhdGEgYWJvdXQgYG5vZGVgIGlmIGl0IGxvb2tzIGxpa2UgYW4gQW5ndWxhciBkaXJlY3RpdmUgY2xhc3MuXG4gKiBJbiB0aGlzIGNhc2UsIHBvdGVudGlhbCBtYXRjaGVzIGFyZSBgQE5nTW9kdWxlYCwgYEBDb21wb25lbnRgLCBgQERpcmVjdGl2ZWAsXG4gKiBgQFBpcGVgLCBldGMuXG4gKiBUaGVzZSBjbGFzcyBkZWNsYXJhdGlvbnMgYWxsIHNoYXJlIHNvbWUgY29tbW9uIGF0dHJpYnV0ZXMsIG5hbWVseSB0aGVpclxuICogZGVjb3JhdG9yIHRha2VzIGV4YWN0bHkgb25lIHBhcmFtZXRlciBhbmQgdGhlIHBhcmFtZXRlciBtdXN0IGJlIGFuIG9iamVjdFxuICogbGl0ZXJhbC5cbiAqXG4gKiBGb3IgZXhhbXBsZSxcbiAqICAgICB2LS0tLS0tLS0tLSBgZGVjb3JhdG9ySWRgXG4gKiBATmdNb2R1bGUoeyAgICAgICAgICAgPFxuICogICBkZWNsYXJhdGlvbnM6IFtdLCAgIDwgY2xhc3NEZWNsbi1hbFxuICogfSkgICAgICAgICAgICAgICAgICAgIDxcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fSAgICA8XG4gKiAgICAgICAgICBeLS0tLS0gYGNsYXNzSWRgXG4gKlxuICogQHBhcmFtIG5vZGUgUG90ZW50aWFsIG5vZGUgdGhhdCByZXByZXNlbnRzIGFuIEFuZ3VsYXIgZGlyZWN0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aXZlQ2xhc3NMaWtlKG5vZGU6IHRzLk5vZGUpOiBEaXJlY3RpdmVDbGFzc0xpa2V8dW5kZWZpbmVkIHtcbiAgaWYgKCF0cy5pc0NsYXNzRGVjbGFyYXRpb24obm9kZSkgfHwgIW5vZGUubmFtZSB8fCAhbm9kZS5kZWNvcmF0b3JzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoY29uc3QgZCBvZiBub2RlLmRlY29yYXRvcnMpIHtcbiAgICBjb25zdCBleHByID0gZC5leHByZXNzaW9uO1xuICAgIGlmICghdHMuaXNDYWxsRXhwcmVzc2lvbihleHByKSB8fCBleHByLmFyZ3VtZW50cy5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgIXRzLmlzSWRlbnRpZmllcihleHByLmV4cHJlc3Npb24pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgYXJnID0gZXhwci5hcmd1bWVudHNbMF07XG4gICAgaWYgKHRzLmlzT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oYXJnKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVjb3JhdG9ySWQ6IGV4cHIuZXhwcmVzc2lvbixcbiAgICAgICAgY2xhc3NJZDogbm9kZS5uYW1lLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBhc3NpZ25tZW50IHRoYXQgaXMgbmVzdGVkIGluIGEgVHlwZVNjcmlwdCBub2RlIGFuZCBpcyBvZiBhIGNlcnRhaW5cbiAqIHR5cGUgVC5cbiAqXG4gKiBAcGFyYW0gc3RhcnROb2RlIG5vZGUgdG8gc3RhcnQgc2VhcmNoaW5nIGZvciBuZXN0ZWQgcHJvcGVydHkgYXNzaWdubWVudCBmcm9tXG4gKiBAcGFyYW0gcHJvcE5hbWUgcHJvcGVydHkgYXNzaWdubWVudCBuYW1lXG4gKiBAcGFyYW0gcHJlZGljYXRlIGZ1bmN0aW9uIHRvIHZlcmlmeSB0aGF0IGEgbm9kZSBpcyBvZiB0eXBlIFQuXG4gKiBAcmV0dXJuIG5vZGUgcHJvcGVydHkgYXNzaWdubWVudCB2YWx1ZSBvZiB0eXBlIFQsIG9yIHVuZGVmaW5lZCBpZiBub25lIGlzIGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUHJvcGVydHlWYWx1ZU9mVHlwZTxUIGV4dGVuZHMgdHMuTm9kZT4oXG4gICAgc3RhcnROb2RlOiB0cy5Ob2RlLCBwcm9wTmFtZTogc3RyaW5nLCBwcmVkaWNhdGU6IChub2RlOiB0cy5Ob2RlKSA9PiBub2RlIGlzIFQpOiBUfHVuZGVmaW5lZCB7XG4gIGlmICh0cy5pc1Byb3BlcnR5QXNzaWdubWVudChzdGFydE5vZGUpICYmIHN0YXJ0Tm9kZS5uYW1lLmdldFRleHQoKSA9PT0gcHJvcE5hbWUpIHtcbiAgICBjb25zdCB7aW5pdGlhbGl6ZXJ9ID0gc3RhcnROb2RlO1xuICAgIGlmIChwcmVkaWNhdGUoaW5pdGlhbGl6ZXIpKSByZXR1cm4gaW5pdGlhbGl6ZXI7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0Tm9kZS5mb3JFYWNoQ2hpbGQoYyA9PiBmaW5kUHJvcGVydHlWYWx1ZU9mVHlwZShjLCBwcm9wTmFtZSwgcHJlZGljYXRlKSk7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBub2RlIHRoYXQgbW9zdCB0aWdodGx5IGVuY29tcGFzcyB0aGUgc3BlY2lmaWVkIGBwb3NpdGlvbmAuXG4gKiBAcGFyYW0gbm9kZVxuICogQHBhcmFtIHBvc2l0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGlnaHRlc3ROb2RlKG5vZGU6IHRzLk5vZGUsIHBvc2l0aW9uOiBudW1iZXIpOiB0cy5Ob2RlfHVuZGVmaW5lZCB7XG4gIGlmIChub2RlLmdldFN0YXJ0KCkgPD0gcG9zaXRpb24gJiYgcG9zaXRpb24gPCBub2RlLmdldEVuZCgpKSB7XG4gICAgcmV0dXJuIG5vZGUuZm9yRWFjaENoaWxkKGMgPT4gZmluZFRpZ2h0ZXN0Tm9kZShjLCBwb3NpdGlvbikpIHx8IG5vZGU7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvcGVydHkgYXNzaWdubWVudCBmcm9tIHRoZSBhc3NpZ25tZW50IHZhbHVlIGlmIHRoZSBwcm9wZXJ0eSBuYW1lXG4gKiBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgYGtleWAsIG9yIGB1bmRlZmluZWRgIGlmIHRoZXJlIGlzIG5vIG1hdGNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlBc3NpZ25tZW50RnJvbVZhbHVlKHZhbHVlOiB0cy5Ob2RlLCBrZXk6IHN0cmluZyk6IHRzLlByb3BlcnR5QXNzaWdubWVudHxcbiAgICB1bmRlZmluZWQge1xuICBjb25zdCBwcm9wQXNzaWdubWVudCA9IHZhbHVlLnBhcmVudDtcbiAgaWYgKCFwcm9wQXNzaWdubWVudCB8fCAhdHMuaXNQcm9wZXJ0eUFzc2lnbm1lbnQocHJvcEFzc2lnbm1lbnQpIHx8XG4gICAgICBwcm9wQXNzaWdubWVudC5uYW1lLmdldFRleHQoKSAhPT0ga2V5KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBwcm9wQXNzaWdubWVudDtcbn1cblxuLyoqXG4gKiBHaXZlbiB0aGUgbm9kZSB3aGljaCBpcyB0aGUgc3RyaW5nIG9mIHRoZSBpbmxpbmUgdGVtcGxhdGUgZm9yIGEgY29tcG9uZW50LCByZXR1cm5zIHRoZVxuICogYHRzLkNsYXNzRGVjbGFyYXRpb25gIGZvciB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NEZWNsT2ZJbmxpbmVUZW1wbGF0ZU5vZGUodGVtcGxhdGVTdHJpbmdOb2RlOiB0cy5Ob2RlKTogdHMuQ2xhc3NEZWNsYXJhdGlvbnxcbiAgICB1bmRlZmluZWQge1xuICBpZiAoIXRzLmlzU3RyaW5nTGl0ZXJhbExpa2UodGVtcGxhdGVTdHJpbmdOb2RlKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0bXBsQXNnbiA9IGdldFByb3BlcnR5QXNzaWdubWVudEZyb21WYWx1ZSh0ZW1wbGF0ZVN0cmluZ05vZGUsICd0ZW1wbGF0ZScpO1xuICBpZiAoIXRtcGxBc2duKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBnZXRDbGFzc0RlY2xGcm9tRGVjb3JhdG9yUHJvcCh0bXBsQXNnbik7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBkZWNvcmF0b3IgcHJvcGVydHkgYXNzaWdubWVudCwgcmV0dXJuIHRoZSBDbGFzc0RlY2xhcmF0aW9uIG5vZGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGVcbiAqIGRpcmVjdGl2ZSBjbGFzcyB0aGUgcHJvcGVydHkgYXBwbGllcyB0by5cbiAqIElmIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50IGlzIG5vdCBvbiBhIGNsYXNzIGRlY29yYXRvciwgbm8gZGVjbGFyYXRpb24gaXMgcmV0dXJuZWQuXG4gKlxuICogRm9yIGV4YW1wbGUsXG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG4gKiAgIF5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eLS0tLSBwcm9wZXJ0eSBhc3NpZ25tZW50XG4gKiB9KVxuICogY2xhc3MgQXBwQ29tcG9uZW50IHt9XG4gKiAgICAgICAgICAgXi0tLS0gY2xhc3MgZGVjbGFyYXRpb24gbm9kZVxuICpcbiAqIEBwYXJhbSBwcm9wQXNnbk5vZGUgcHJvcGVydHkgYXNzaWdubWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NEZWNsRnJvbURlY29yYXRvclByb3AocHJvcEFzZ25Ob2RlOiB0cy5Qcm9wZXJ0eUFzc2lnbm1lbnQpOlxuICAgIHRzLkNsYXNzRGVjbGFyYXRpb258dW5kZWZpbmVkIHtcbiAgaWYgKCFwcm9wQXNnbk5vZGUucGFyZW50IHx8ICF0cy5pc09iamVjdExpdGVyYWxFeHByZXNzaW9uKHByb3BBc2duTm9kZS5wYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9iakxpdEV4cHJOb2RlID0gcHJvcEFzZ25Ob2RlLnBhcmVudDtcbiAgaWYgKCFvYmpMaXRFeHByTm9kZS5wYXJlbnQgfHwgIXRzLmlzQ2FsbEV4cHJlc3Npb24ob2JqTGl0RXhwck5vZGUucGFyZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjYWxsRXhwck5vZGUgPSBvYmpMaXRFeHByTm9kZS5wYXJlbnQ7XG4gIGlmICghY2FsbEV4cHJOb2RlLnBhcmVudCB8fCAhdHMuaXNEZWNvcmF0b3IoY2FsbEV4cHJOb2RlLnBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGVjb3JhdG9yID0gY2FsbEV4cHJOb2RlLnBhcmVudDtcbiAgaWYgKCFkZWNvcmF0b3IucGFyZW50IHx8ICF0cy5pc0NsYXNzRGVjbGFyYXRpb24oZGVjb3JhdG9yLnBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY2xhc3NEZWNsTm9kZSA9IGRlY29yYXRvci5wYXJlbnQ7XG4gIHJldHVybiBjbGFzc0RlY2xOb2RlO1xufVxuIl19