
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.led';

import { __decorate } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
__decorate([
    Output()
], BaseElement.prototype, "onCreate", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onReady", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onAttach", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onDetach", void 0);
__decorate([
    Input()
], BaseElement.prototype, "locale", null);
__decorate([
    Input()
], BaseElement.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], BaseElement.prototype, "messages", null);
__decorate([
    Input()
], BaseElement.prototype, "rightToLeft", null);
__decorate([
    Input()
], BaseElement.prototype, "theme", null);
const Smart = window.Smart;

let LedComponent = class LedComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the widget is checked/unchecked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value of the element before it was changed.
        *   value - The new value of the element.
        */
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-led');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Sets or gets the check state. */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        this.nativeElement ? this.nativeElement.checked = value : undefined;
    }
    /** @description Determines when the element fires a click event. */
    get clickMode() {
        return this.nativeElement ? this.nativeElement.clickMode : undefined;
    }
    set clickMode(value) {
        this.nativeElement ? this.nativeElement.clickMode = value : undefined;
    }
    /** @description Enables or disables the LED. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets the content for the 'false' state. */
    get falseContent() {
        return this.nativeElement ? this.nativeElement.falseContent : undefined;
    }
    set falseContent(value) {
        this.nativeElement ? this.nativeElement.falseContent = value : undefined;
    }
    /** @description Sets custom template for LED's false state. */
    get falseTemplate() {
        return this.nativeElement ? this.nativeElement.falseTemplate : undefined;
    }
    set falseTemplate(value) {
        this.nativeElement ? this.nativeElement.falseTemplate = value : undefined;
    }
    /** @description Sets the LED to indeterminate state. */
    get indeterminate() {
        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
    }
    set indeterminate(value) {
        this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
    }
    /** @description Sets the content for the 'null' state. */
    get indeterminateContent() {
        return this.nativeElement ? this.nativeElement.indeterminateContent : undefined;
    }
    set indeterminateContent(value) {
        this.nativeElement ? this.nativeElement.indeterminateContent = value : undefined;
    }
    /** @description Sets a custom template for LED's indeterminate state. */
    get indeterminateTemplate() {
        return this.nativeElement ? this.nativeElement.indeterminateTemplate : undefined;
    }
    set indeterminateTemplate(value) {
        this.nativeElement ? this.nativeElement.indeterminateTemplate = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description If the widgets is readonly, the users cannot iteract with the element. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Sets the shape of LED. */
    get shape() {
        return this.nativeElement ? this.nativeElement.shape : undefined;
    }
    set shape(value) {
        this.nativeElement ? this.nativeElement.shape = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets the content for the 'true' state. */
    get trueContent() {
        return this.nativeElement ? this.nativeElement.trueContent : undefined;
    }
    set trueContent(value) {
        this.nativeElement ? this.nativeElement.trueContent = value : undefined;
    }
    /** @description Sets custom template for LED's true state. */
    get trueTemplate() {
        return this.nativeElement ? this.nativeElement.trueTemplate : undefined;
    }
    set trueTemplate(value) {
        this.nativeElement ? this.nativeElement.trueTemplate = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the element's value. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
        this.listen();
    }
    ngOnDestroy() {
        this.unlisten();
    }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
    /** @description Add event listeners. */
    listen() {
        const that = this;
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
LedComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], LedComponent.prototype, "animation", null);
__decorate([
    Input()
], LedComponent.prototype, "checked", null);
__decorate([
    Input()
], LedComponent.prototype, "clickMode", null);
__decorate([
    Input()
], LedComponent.prototype, "disabled", null);
__decorate([
    Input()
], LedComponent.prototype, "falseContent", null);
__decorate([
    Input()
], LedComponent.prototype, "falseTemplate", null);
__decorate([
    Input()
], LedComponent.prototype, "indeterminate", null);
__decorate([
    Input()
], LedComponent.prototype, "indeterminateContent", null);
__decorate([
    Input()
], LedComponent.prototype, "indeterminateTemplate", null);
__decorate([
    Input()
], LedComponent.prototype, "locale", null);
__decorate([
    Input()
], LedComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], LedComponent.prototype, "messages", null);
__decorate([
    Input()
], LedComponent.prototype, "name", null);
__decorate([
    Input()
], LedComponent.prototype, "readonly", null);
__decorate([
    Input()
], LedComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], LedComponent.prototype, "shape", null);
__decorate([
    Input()
], LedComponent.prototype, "theme", null);
__decorate([
    Input()
], LedComponent.prototype, "trueContent", null);
__decorate([
    Input()
], LedComponent.prototype, "trueTemplate", null);
__decorate([
    Input()
], LedComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], LedComponent.prototype, "value", null);
__decorate([
    Output()
], LedComponent.prototype, "onChange", void 0);
LedComponent = __decorate([
    Directive({
        exportAs: 'smart-led', selector: 'smart-led, [smart-led]'
    })
], LedComponent);

let LedModule = class LedModule {
};
LedModule = __decorate([
    NgModule({
        declarations: [LedComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [LedComponent]
    })
], LedModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LedComponent, LedModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-led.js.map
