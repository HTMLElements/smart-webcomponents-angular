
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.button';

import { __decorate } from 'tslib';
import { EventEmitter, Output, Input, forwardRef, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckBoxComponent),
    multi: true
};
let CheckBoxComponent = class CheckBoxComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        this._onChange = () => { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        this._onTouched = () => { };
        /** @description This event is triggered when the widget is checked/unchecked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
        *   value - A boolean value indicating the new state of the button ( checked or not ).
        *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
        *   changeType - A string flag indicating whether the change event was triggered via API or an event.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when the widget is checked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
        *   changeType - A string flag indicating whether the change event was triggered via API or an event.
        */
        this.onCheckValue = new EventEmitter();
        /** @description This event is triggered when the widget is unchecked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
        *   changeType - A string flag indicating whether the change event was triggered via API or an event.
        */
        this.onUncheckValue = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-check-box');
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
    /** @description Sets or gets the checked state.  */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        this.nativeElement ? this.nativeElement.checked = value : undefined;
    }
    /** @description Determines which part of the element can be used to toggle it. */
    get checkMode() {
        return this.nativeElement ? this.nativeElement.checkMode : undefined;
    }
    set checkMode(value) {
        this.nativeElement ? this.nativeElement.checkMode = value : undefined;
    }
    /** @description Sets the click mode of the checkbox. */
    get clickMode() {
        return this.nativeElement ? this.nativeElement.clickMode : undefined;
    }
    set clickMode(value) {
        this.nativeElement ? this.nativeElement.clickMode = value : undefined;
    }
    /** @description Enables or disables the checkbox.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the elements's innerHTML. */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
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
    /** @description If the element is readonly, users cannot interact with it. */
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
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets or gets the value of the element. */
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
    get ngValue() {
        if (!this.nativeElement) {
            return null;
        }
        const value = this.nativeElement.checked;
        return value;
    }
    set ngValue(value) {
        if (this.nativeElement) {
            this.writeValue(value);
        }
    }
    writeValue(value) {
        const that = this;
        const normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(() => {
            that.checked = normalizedValue;
            that.value = '' + normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
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
        that.eventHandlers['checkValueHandler'] = (event) => { that.onCheckValue.emit(event); };
        that.nativeElement.addEventListener('checkValue', that.eventHandlers['checkValueHandler']);
        that.eventHandlers['uncheckValueHandler'] = (event) => { that.onUncheckValue.emit(event); };
        that.nativeElement.addEventListener('uncheckValue', that.eventHandlers['uncheckValueHandler']);
        that.eventHandlers['changeModelHandler'] = (event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.checked);
        };
        that.eventHandlers['blurModelHandler'] = (event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = (event) => {
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['checkValueHandler']) {
            that.nativeElement.removeEventListener('checkValue', that.eventHandlers['checkValueHandler']);
        }
        if (that.eventHandlers['uncheckValueHandler']) {
            that.nativeElement.removeEventListener('uncheckValue', that.eventHandlers['uncheckValueHandler']);
        }
        if (that.eventHandlers['changeModelHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        }
        if (that.eventHandlers['blurModelHandler']) {
            that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
        }
    }
};
CheckBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], CheckBoxComponent.prototype, "animation", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "checked", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "checkMode", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "clickMode", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "innerHTML", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "locale", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "messages", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "name", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "readonly", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "theme", null);
__decorate([
    Input()
], CheckBoxComponent.prototype, "value", null);
__decorate([
    Output()
], CheckBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], CheckBoxComponent.prototype, "onCheckValue", void 0);
__decorate([
    Output()
], CheckBoxComponent.prototype, "onUncheckValue", void 0);
CheckBoxComponent = __decorate([
    Directive({
        exportAs: 'smart-check-box', selector: 'smart-check-box, [smart-check-box]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], CheckBoxComponent);

let CheckBoxModule = class CheckBoxModule {
};
CheckBoxModule = __decorate([
    NgModule({
        declarations: [CheckBoxComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [CheckBoxComponent]
    })
], CheckBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CheckBoxComponent, CheckBoxModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-checkbox.js.map
