import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './smart.progressbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CircularProgressBarComponent } from './smart.circularprogressbar';
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = tslib_1.__decorate([
        NgModule({
            declarations: [ProgressBarComponent, CircularProgressBarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ProgressBarComponent, CircularProgressBarComponent]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());
export { ProgressBarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQucHJvZ3Jlc3NiYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3Byb2dyZXNzYmFyLyIsInNvdXJjZXMiOlsic21hcnQucHJvZ3Jlc3NiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVEzRTtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBTjdCLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLDRCQUE0QixDQUFDO1lBQ3JFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLDRCQUE0QixDQUFDO1NBQzdELENBQUM7T0FFVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LnByb2dyZXNzYmFyJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5jaXJjdWxhcnByb2dyZXNzYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc0JhckNvbXBvbmVudCwgQ2lyY3VsYXJQcm9ncmVzc0JhckNvbXBvbmVudF0sXG5cdHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcblx0ZXhwb3J0czogW1Byb2dyZXNzQmFyQ29tcG9uZW50LCBDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyTW9kdWxlIHsgfVxuIl19