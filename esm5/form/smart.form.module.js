import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormComponent } from './smart.form';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControlComponent } from './smart.formcontrol';
import { FormGroupComponent } from './smart.formgroup';
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = tslib_1.__decorate([
        NgModule({
            declarations: [FormComponent, FormControlComponent, FormGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [FormComponent, FormControlComponent, FormGroupComponent]
        })
    ], FormModule);
    return FormModule;
}());
export { FormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvZm9ybS8iLCJzb3VyY2VzIjpbInNtYXJ0LmZvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUXZEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFOdEIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDO1lBQzFFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQztTQUNsRSxDQUFDO09BRVcsVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5mb3JtJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQuZm9ybWNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5mb3JtZ3JvdXAnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0Zvcm1Db21wb25lbnQsIEZvcm1Db250cm9sQ29tcG9uZW50LCBGb3JtR3JvdXBDb21wb25lbnRdLFxuXHRzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG5cdGV4cG9ydHM6IFtGb3JtQ29tcG9uZW50LCBGb3JtQ29udHJvbENvbXBvbmVudCwgRm9ybUdyb3VwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEZvcm1Nb2R1bGUgeyB9XG4iXX0=