import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MenuComponent } from './smart.menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuItemComponent } from './smart.menuitem';
import { MenuItemsGroupComponent } from './smart.menuitemsgroup';
let MenuModule = class MenuModule {
};
MenuModule = tslib_1.__decorate([
    NgModule({
        declarations: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent]
    })
], MenuModule);
export { MenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvbWVudS8iLCJzb3VyY2VzIjpbInNtYXJ0Lm1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUWpFLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7Q0FBSSxDQUFBO0FBQWQsVUFBVTtJQU50QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7UUFDNUUsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7R0FFVyxVQUFVLENBQUk7U0FBZCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQubWVudSc7XG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lm1lbnVpdGVtJztcbmltcG9ydCB7IE1lbnVJdGVtc0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5tZW51aXRlbXNncm91cCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTWVudUNvbXBvbmVudCwgTWVudUl0ZW1Db21wb25lbnQsIE1lbnVJdGVtc0dyb3VwQ29tcG9uZW50XSxcblx0c2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuXHRleHBvcnRzOiBbTWVudUNvbXBvbmVudCwgTWVudUl0ZW1Db21wb25lbnQsIE1lbnVJdGVtc0dyb3VwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE1lbnVNb2R1bGUgeyB9XG4iXX0=