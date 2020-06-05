import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { SplitterComponent } from './smart.splitter';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SplitterItemComponent } from './smart.splitteritem';
import { SplitterBarComponent } from './smart.splitterbar';
var SplitterModule = /** @class */ (function () {
    function SplitterModule() {
    }
    SplitterModule = tslib_1.__decorate([
        NgModule({
            declarations: [SplitterComponent, SplitterItemComponent, SplitterBarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [SplitterComponent, SplitterItemComponent, SplitterBarComponent]
        })
    ], SplitterModule);
    return SplitterModule;
}());
export { SplitterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuc3BsaXR0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3NwbGl0dGVyLyIsInNvdXJjZXMiOlsic21hcnQuc3BsaXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVEzRDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQU4xQixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQztZQUNqRixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQztTQUN6RSxDQUFDO09BRVcsY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3BsaXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LnNwbGl0dGVyJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTcGxpdHRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LnNwbGl0dGVyaXRlbSc7XG5pbXBvcnQgeyBTcGxpdHRlckJhckNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQuc3BsaXR0ZXJiYXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1NwbGl0dGVyQ29tcG9uZW50LCBTcGxpdHRlckl0ZW1Db21wb25lbnQsIFNwbGl0dGVyQmFyQ29tcG9uZW50XSxcblx0c2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuXHRleHBvcnRzOiBbU3BsaXR0ZXJDb21wb25lbnQsIFNwbGl0dGVySXRlbUNvbXBvbmVudCwgU3BsaXR0ZXJCYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJNb2R1bGUgeyB9XG4iXX0=