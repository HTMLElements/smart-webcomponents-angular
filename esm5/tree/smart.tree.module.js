import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { TreeComponent } from './smart.tree';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TreeItemComponent } from './smart.treeitem';
import { TreeItemsGroupComponent } from './smart.treeitemsgroup';
var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = tslib_1.__decorate([
        NgModule({
            declarations: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent]
        })
    ], TreeModule);
    return TreeModule;
}());
export { TreeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQudHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvdHJlZS8iLCJzb3VyY2VzIjpbInNtYXJ0LnRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUWpFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFOdEIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1lBQzVFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztTQUNwRSxDQUFDO09BRVcsVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC50cmVlJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQudHJlZWl0ZW0nO1xuaW1wb3J0IHsgVHJlZUl0ZW1zR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LnRyZWVpdGVtc2dyb3VwJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtUcmVlQ29tcG9uZW50LCBUcmVlSXRlbUNvbXBvbmVudCwgVHJlZUl0ZW1zR3JvdXBDb21wb25lbnRdLFxuXHRzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG5cdGV4cG9ydHM6IFtUcmVlQ29tcG9uZW50LCBUcmVlSXRlbUNvbXBvbmVudCwgVHJlZUl0ZW1zR3JvdXBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vZHVsZSB7IH1cbiJdfQ==