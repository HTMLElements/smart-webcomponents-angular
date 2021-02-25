import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ButtonComponent } from './smart.button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RepeatButtonComponent } from './smart.repeatbutton';
import { ToggleButtonComponent } from './smart.togglebutton';
import { PowerButtonComponent } from './smart.powerbutton';
let ButtonModule = class ButtonModule {
};
ButtonModule = tslib_1.__decorate([
    NgModule({
        declarations: [ButtonComponent, RepeatButtonComponent, ToggleButtonComponent, PowerButtonComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ButtonComponent, RepeatButtonComponent, ToggleButtonComponent, PowerButtonComponent]
    })
], ButtonModule);
export { ButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9idXR0b24vIiwic291cmNlcyI6WyJzbWFydC5idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRM0QsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFJLENBQUE7QUFBaEIsWUFBWTtJQU54QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLENBQUM7UUFDdEcsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDO0tBQzlGLENBQUM7R0FFVyxZQUFZLENBQUk7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQuYnV0dG9uJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBlYXRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LnJlcGVhdGJ1dHRvbic7XG5pbXBvcnQgeyBUb2dnbGVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LnRvZ2dsZWJ1dHRvbic7XG5pbXBvcnQgeyBQb3dlckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQucG93ZXJidXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0J1dHRvbkNvbXBvbmVudCwgUmVwZWF0QnV0dG9uQ29tcG9uZW50LCBUb2dnbGVCdXR0b25Db21wb25lbnQsIFBvd2VyQnV0dG9uQ29tcG9uZW50XSxcblx0c2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuXHRleHBvcnRzOiBbQnV0dG9uQ29tcG9uZW50LCBSZXBlYXRCdXR0b25Db21wb25lbnQsIFRvZ2dsZUJ1dHRvbkNvbXBvbmVudCwgUG93ZXJCdXR0b25Db21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kdWxlIHsgfVxuIl19