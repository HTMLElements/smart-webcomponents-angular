(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/ivy/ts_utils", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClassDeclFromDecoratorProp = exports.getPropertyAssignmentFromValue = exports.getParentClassDeclaration = exports.findTightestNode = void 0;
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    /**
     * Return the node that most tightly encompasses the specified `position`.
     * @param node The starting node to start the top-down search.
     * @param position The target position within the `node`.
     */
    function findTightestNode(node, position) {
        var _a;
        if (node.getStart() <= position && position < node.getEnd()) {
            return (_a = node.forEachChild(function (c) { return findTightestNode(c, position); })) !== null && _a !== void 0 ? _a : node;
        }
        return undefined;
    }
    exports.findTightestNode = findTightestNode;
    function getParentClassDeclaration(startNode) {
        while (startNode) {
            if (ts.isClassDeclaration(startNode)) {
                return startNode;
            }
            startNode = startNode.parent;
        }
        return undefined;
    }
    exports.getParentClassDeclaration = getParentClassDeclaration;
    /**
     * Returns a property assignment from the assignment value if the property name
     * matches the specified `key`, or `null` if there is no match.
     */
    function getPropertyAssignmentFromValue(value, key) {
        var propAssignment = value.parent;
        if (!propAssignment || !ts.isPropertyAssignment(propAssignment) ||
            propAssignment.name.getText() !== key) {
            return null;
        }
        return propAssignment;
    }
    exports.getPropertyAssignmentFromValue = getPropertyAssignmentFromValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL2l2eS90c191dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwrQkFBaUM7SUFFakM7Ozs7T0FJRztJQUNILFNBQWdCLGdCQUFnQixDQUFDLElBQWEsRUFBRSxRQUFnQjs7UUFDOUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDM0QsYUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUE3QixDQUE2QixDQUFDLG1DQUFJLElBQUksQ0FBQztTQUN0RTtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFMRCw0Q0FLQztJQUVELFNBQWdCLHlCQUF5QixDQUFDLFNBQWtCO1FBQzFELE9BQU8sU0FBUyxFQUFFO1lBQ2hCLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUNELFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQVJELDhEQVFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBZ0IsOEJBQThCLENBQUMsS0FBYyxFQUFFLEdBQVc7UUFFeEUsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztZQUMzRCxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUcsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQVJELHdFQVFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsU0FBZ0IsNkJBQTZCLENBQUMsWUFBbUM7UUFFL0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlFLE9BQU87U0FDUjtRQUNELElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pFLE9BQU87U0FDUjtRQUNELElBQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoRSxPQUFPO1NBQ1I7UUFDRCxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqRSxPQUFPO1NBQ1I7UUFDRCxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFuQkQsc0VBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG5vZGUgdGhhdCBtb3N0IHRpZ2h0bHkgZW5jb21wYXNzZXMgdGhlIHNwZWNpZmllZCBgcG9zaXRpb25gLlxuICogQHBhcmFtIG5vZGUgVGhlIHN0YXJ0aW5nIG5vZGUgdG8gc3RhcnQgdGhlIHRvcC1kb3duIHNlYXJjaC5cbiAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgdGFyZ2V0IHBvc2l0aW9uIHdpdGhpbiB0aGUgYG5vZGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFRpZ2h0ZXN0Tm9kZShub2RlOiB0cy5Ob2RlLCBwb3NpdGlvbjogbnVtYmVyKTogdHMuTm9kZXx1bmRlZmluZWQge1xuICBpZiAobm9kZS5nZXRTdGFydCgpIDw9IHBvc2l0aW9uICYmIHBvc2l0aW9uIDwgbm9kZS5nZXRFbmQoKSkge1xuICAgIHJldHVybiBub2RlLmZvckVhY2hDaGlsZChjID0+IGZpbmRUaWdodGVzdE5vZGUoYywgcG9zaXRpb24pKSA/PyBub2RlO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRDbGFzc0RlY2xhcmF0aW9uKHN0YXJ0Tm9kZTogdHMuTm9kZSk6IHRzLkNsYXNzRGVjbGFyYXRpb258dW5kZWZpbmVkIHtcbiAgd2hpbGUgKHN0YXJ0Tm9kZSkge1xuICAgIGlmICh0cy5pc0NsYXNzRGVjbGFyYXRpb24oc3RhcnROb2RlKSkge1xuICAgICAgcmV0dXJuIHN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgc3RhcnROb2RlID0gc3RhcnROb2RlLnBhcmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwcm9wZXJ0eSBhc3NpZ25tZW50IGZyb20gdGhlIGFzc2lnbm1lbnQgdmFsdWUgaWYgdGhlIHByb3BlcnR5IG5hbWVcbiAqIG1hdGNoZXMgdGhlIHNwZWNpZmllZCBga2V5YCwgb3IgYG51bGxgIGlmIHRoZXJlIGlzIG5vIG1hdGNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlBc3NpZ25tZW50RnJvbVZhbHVlKHZhbHVlOiB0cy5Ob2RlLCBrZXk6IHN0cmluZyk6IHRzLlByb3BlcnR5QXNzaWdubWVudHxcbiAgICBudWxsIHtcbiAgY29uc3QgcHJvcEFzc2lnbm1lbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gIGlmICghcHJvcEFzc2lnbm1lbnQgfHwgIXRzLmlzUHJvcGVydHlBc3NpZ25tZW50KHByb3BBc3NpZ25tZW50KSB8fFxuICAgICAgcHJvcEFzc2lnbm1lbnQubmFtZS5nZXRUZXh0KCkgIT09IGtleSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwcm9wQXNzaWdubWVudDtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIGRlY29yYXRvciBwcm9wZXJ0eSBhc3NpZ25tZW50LCByZXR1cm4gdGhlIENsYXNzRGVjbGFyYXRpb24gbm9kZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZVxuICogZGlyZWN0aXZlIGNsYXNzIHRoZSBwcm9wZXJ0eSBhcHBsaWVzIHRvLlxuICogSWYgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQgaXMgbm90IG9uIGEgY2xhc3MgZGVjb3JhdG9yLCBubyBkZWNsYXJhdGlvbiBpcyByZXR1cm5lZC5cbiAqXG4gKiBGb3IgZXhhbXBsZSxcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcbiAqICAgXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl4tLS0tIHByb3BlcnR5IGFzc2lnbm1lbnRcbiAqIH0pXG4gKiBjbGFzcyBBcHBDb21wb25lbnQge31cbiAqICAgICAgICAgICBeLS0tLSBjbGFzcyBkZWNsYXJhdGlvbiBub2RlXG4gKlxuICogQHBhcmFtIHByb3BBc2duTm9kZSBwcm9wZXJ0eSBhc3NpZ25tZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc0RlY2xGcm9tRGVjb3JhdG9yUHJvcChwcm9wQXNnbk5vZGU6IHRzLlByb3BlcnR5QXNzaWdubWVudCk6XG4gICAgdHMuQ2xhc3NEZWNsYXJhdGlvbnx1bmRlZmluZWQge1xuICBpZiAoIXByb3BBc2duTm9kZS5wYXJlbnQgfHwgIXRzLmlzT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24ocHJvcEFzZ25Ob2RlLnBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb2JqTGl0RXhwck5vZGUgPSBwcm9wQXNnbk5vZGUucGFyZW50O1xuICBpZiAoIW9iakxpdEV4cHJOb2RlLnBhcmVudCB8fCAhdHMuaXNDYWxsRXhwcmVzc2lvbihvYmpMaXRFeHByTm9kZS5wYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNhbGxFeHByTm9kZSA9IG9iakxpdEV4cHJOb2RlLnBhcmVudDtcbiAgaWYgKCFjYWxsRXhwck5vZGUucGFyZW50IHx8ICF0cy5pc0RlY29yYXRvcihjYWxsRXhwck5vZGUucGFyZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkZWNvcmF0b3IgPSBjYWxsRXhwck5vZGUucGFyZW50O1xuICBpZiAoIWRlY29yYXRvci5wYXJlbnQgfHwgIXRzLmlzQ2xhc3NEZWNsYXJhdGlvbihkZWNvcmF0b3IucGFyZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjbGFzc0RlY2xOb2RlID0gZGVjb3JhdG9yLnBhcmVudDtcbiAgcmV0dXJuIGNsYXNzRGVjbE5vZGU7XG59XG4iXX0=