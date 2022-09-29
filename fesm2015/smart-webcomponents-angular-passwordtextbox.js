
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.textbox';

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
    useExisting: forwardRef(() => PasswordTextBoxComponent),
    multi: true
};
let PasswordTextBoxComponent = class PasswordTextBoxComponent extends BaseElement {
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
        /** @description This event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value of the element before it was changed.
        *   value - The new value of the element.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered on each key up event of the TextBox, if the value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value before it was changed.
        *   value - The new value.
        */
        this.onChanging = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-password-text-box');
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
    /** @description Specifies that the element should be focused when the page is loaded. */
    get autoFocus() {
        return this.nativeElement ? this.nativeElement.autoFocus : undefined;
    }
    set autoFocus(value) {
        this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Specifies the behavior on "Enter" key press. Default mode is "submit". */
    get enterKeyBehavior() {
        return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
    }
    set enterKeyBehavior(value) {
        this.nativeElement ? this.nativeElement.enterKeyBehavior = value : undefined;
    }
    /** @description The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
    get form() {
        return this.nativeElement ? this.nativeElement.form : undefined;
    }
    set form(value) {
        this.nativeElement ? this.nativeElement.form = value : undefined;
    }
    /** @description Sets additional helper text below the element. Appears only when the element is focused. */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        this.nativeElement ? this.nativeElement.hint = value : undefined;
    }
    /** @description Sets label above the element. The label is displayed above the input and it's always visible. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
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
    /** @description Sets or gets the maximum number of characters that the user can enter. */
    get maxLength() {
        return this.nativeElement ? this.nativeElement.maxLength : undefined;
    }
    set maxLength(value) {
        this.nativeElement ? this.nativeElement.maxLength = value : undefined;
    }
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the minimum number of characters that the user can enter. */
    get minLength() {
        return this.nativeElement ? this.nativeElement.minLength : undefined;
    }
    set minLength(value) {
        this.nativeElement ? this.nativeElement.minLength = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'. */
    get passwordStrength() {
        return this.nativeElement ? this.nativeElement.passwordStrength : undefined;
    }
    set passwordStrength(value) {
        this.nativeElement ? this.nativeElement.passwordStrength = value : undefined;
    }
    /** @description The placeholder text that is displayed when no value is applied to the element.  */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Specifies that the user must fill in a value before submitting a form that contains the element. */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Specifies whether the content of the input will be selected on focus. */
    get selectAllOnFocus() {
        return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
    }
    set selectAllOnFocus(value) {
        this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
    }
    /** @description Determines whether the password icon is visible. */
    get showPasswordIcon() {
        return this.nativeElement ? this.nativeElement.showPasswordIcon : undefined;
    }
    set showPasswordIcon(value) {
        this.nativeElement ? this.nativeElement.showPasswordIcon = value : undefined;
    }
    /** @description Determines whether a tooltip which shows the password's strength will be shown. */
    get showPasswordStrength() {
        return this.nativeElement ? this.nativeElement.showPasswordStrength : undefined;
    }
    set showPasswordStrength(value) {
        this.nativeElement ? this.nativeElement.showPasswordStrength = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Determines whether Tooltip's arrow will be shown or not. */
    get tooltipArrow() {
        return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
    }
    set tooltipArrow(value) {
        this.nativeElement ? this.nativeElement.tooltipArrow = value : undefined;
    }
    /** @description Determines the delay before the tooltip appears in miliseconds. */
    get tooltipDelay() {
        return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
    }
    set tooltipDelay(value) {
        this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
    }
    /** @description Determines the position of the tooltip. */
    get tooltipPosition() {
        return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
    }
    set tooltipPosition(value) {
        this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
    }
    /** @description Sets a custom template for the content of the tooltip. */
    get tooltipTemplate() {
        return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
    }
    set tooltipTemplate(value) {
        this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
    }
    /** @description If true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the value of the element.  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Focuses the element.
    */
    focus() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }
    /** @description The method is used to reset input to it's initial value.
    */
    reset() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
            });
        }
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
        const value = this.nativeElement.value;
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
            that.value = normalizedValue;
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
        that.eventHandlers['changingHandler'] = (event) => { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['changeModelHandler'] = (event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.value);
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
        if (that.eventHandlers['changingHandler']) {
            that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
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
PasswordTextBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "animation", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "autoFocus", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "enterKeyBehavior", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "form", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "label", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "locale", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "maxLength", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "messages", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "minLength", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "name", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "passwordStrength", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "required", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "selectAllOnFocus", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "showPasswordIcon", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "showPasswordStrength", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "theme", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "tooltipArrow", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "tooltipDelay", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "tooltipPosition", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "tooltipTemplate", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], PasswordTextBoxComponent.prototype, "value", null);
__decorate([
    Output()
], PasswordTextBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], PasswordTextBoxComponent.prototype, "onChanging", void 0);
PasswordTextBoxComponent = __decorate([
    Directive({
        exportAs: 'smart-password-text-box', selector: 'smart-password-text-box, [smart-password-text-box]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], PasswordTextBoxComponent);

let PasswordTextBoxModule = class PasswordTextBoxModule {
};
PasswordTextBoxModule = __decorate([
    NgModule({
        declarations: [PasswordTextBoxComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [PasswordTextBoxComponent]
    })
], PasswordTextBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { PasswordTextBoxComponent, PasswordTextBoxModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-passwordtextbox.js.map
