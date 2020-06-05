import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ListBoxComponent } from './smart.listbox';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';
var ListBoxModule = /** @class */ (function () {
    function ListBoxModule() {
    }
    ListBoxModule = tslib_1.__decorate([
        NgModule({
            declarations: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent]
        })
    ], ListBoxModule);
    return ListBoxModule;
}());
export { ListBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubGlzdGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvbGlzdGJveC8iLCJzb3VyY2VzIjpbInNtYXJ0Lmxpc3Rib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVFqRTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQU56QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztZQUMvRSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDO09BRVcsYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdEJveENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQubGlzdGJveCc7XG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lmxpc3RpdGVtJztcbmltcG9ydCB7IExpc3RJdGVtc0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5saXN0aXRlbXNncm91cCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTGlzdEJveENvbXBvbmVudCwgTGlzdEl0ZW1Db21wb25lbnQsIExpc3RJdGVtc0dyb3VwQ29tcG9uZW50XSxcblx0c2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuXHRleHBvcnRzOiBbTGlzdEJveENvbXBvbmVudCwgTGlzdEl0ZW1Db21wb25lbnQsIExpc3RJdGVtc0dyb3VwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RCb3hNb2R1bGUgeyB9XG4iXX0=