
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
    useExisting: forwardRef(() => MaskedTextBoxComponent),
    multi: true
};
let MaskedTextBoxComponent = class MaskedTextBoxComponent extends BaseElement {
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
        /** @description This event is triggered when the value of the Text Box is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value before it was changed.
        *   value - The new value.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered on each key up event of the MaskedTextBox, if the value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value before it was changed.
        *   value - The new value.
        */
        this.onChanging = new EventEmitter();
        /** @description This event is triggered if the validation property is set. Indicates whether valiation has passed successfully or not.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	success)
        *   success - A flag inidicating whether the validation was successfull or not.
        */
        this.onValidation = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-masked-text-box');
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
    /** @description Determines whether promptChar can be entered as valid input by the user. */
    get allowPromptAsInput() {
        return this.nativeElement ? this.nativeElement.allowPromptAsInput : undefined;
    }
    set allowPromptAsInput(value) {
        this.nativeElement ? this.nativeElement.allowPromptAsInput = value : undefined;
    }
    /** @description Determines whether the input accepts characters only from the ASCII character set. */
    get asciiOnly() {
        return this.nativeElement ? this.nativeElement.asciiOnly : undefined;
    }
    set asciiOnly(value) {
        this.nativeElement ? this.nativeElement.asciiOnly = value : undefined;
    }
    /** @description Specifies whether the input should be focused when the page is loaded. */
    get autoFocus() {
        return this.nativeElement ? this.nativeElement.autoFocus : undefined;
    }
    set autoFocus(value) {
        this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
    }
    /** @description Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set. */
    get autoShowMask() {
        return this.nativeElement ? this.nativeElement.autoShowMask : undefined;
    }
    set autoShowMask(value) {
        this.nativeElement ? this.nativeElement.autoShowMask = value : undefined;
    }
    /** @description Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations. */
    get cutCopyMaskFormat() {
        return this.nativeElement ? this.nativeElement.cutCopyMaskFormat : undefined;
    }
    set cutCopyMaskFormat(value) {
        this.nativeElement ? this.nativeElement.cutCopyMaskFormat = value : undefined;
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
    /** @description Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore. */
    get hidePromptOnLeave() {
        return this.nativeElement ? this.nativeElement.hidePromptOnLeave : undefined;
    }
    set hidePromptOnLeave(value) {
        this.nativeElement ? this.nativeElement.hidePromptOnLeave = value : undefined;
    }
    /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        this.nativeElement ? this.nativeElement.hint = value : undefined;
    }
    /** @description Determines whether new user input overwrites the existing input value or not. */
    get isOverwriteMode() {
        return this.nativeElement ? this.nativeElement.isOverwriteMode : undefined;
    }
    set isOverwriteMode(value) {
        this.nativeElement ? this.nativeElement.isOverwriteMode = value : undefined;
    }
    /** @description Sets label above the element. The label is always visible. */
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
    /** @description Defines the mask for the input. */
    get mask() {
        return this.nativeElement ? this.nativeElement.mask : undefined;
    }
    set mask(value) {
        this.nativeElement ? this.nativeElement.mask = value : undefined;
    }
    /** @description Indicates whether all required fields of the mask have been populated or not. */
    get maskCompleted() {
        return this.nativeElement ? this.nativeElement.maskCompleted : undefined;
    }
    set maskCompleted(value) {
        this.nativeElement ? this.nativeElement.maskCompleted = value : undefined;
    }
    /** @description Indicates whether all required and optional fields of the mask have been populated or not. */
    get maskFull() {
        return this.nativeElement ? this.nativeElement.maskFull : undefined;
    }
    set maskFull(value) {
        this.nativeElement ? this.nativeElement.maskFull = value : undefined;
    }
    /** @description Determines the maximum number of characters that the user can enter. */
    get maxLength() {
        return this.nativeElement ? this.nativeElement.maxLength : undefined;
    }
    set maxLength(value) {
        this.nativeElement ? this.nativeElement.maxLength = value : undefined;
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
    /** @description A string that appears inside the input when there's no value and mask.  */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Determines the prompt char that is used for the mask of the element. */
    get promptChar() {
        return this.nativeElement ? this.nativeElement.promptChar : undefined;
    }
    set promptChar(value) {
        this.nativeElement ? this.nativeElement.promptChar = value : undefined;
    }
    /** @description If the element is readonly, the users cannot iteract with the element. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Determines whether the parsing of user input should stop after the first invalid character or not. */
    get rejectInputOnFirstFailure() {
        return this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure : undefined;
    }
    set rejectInputOnFirstFailure(value) {
        this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure = value : undefined;
    }
    /** @description Specifies that the input must be filled in before submitting a form */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled. */
    get resetOnPrompt() {
        return this.nativeElement ? this.nativeElement.resetOnPrompt : undefined;
    }
    set resetOnPrompt(value) {
        this.nativeElement ? this.nativeElement.resetOnPrompt = value : undefined;
    }
    /** @description Determines whether hitting space character resets the currently selected value from the input or not. */
    get resetOnSpace() {
        return this.nativeElement ? this.nativeElement.resetOnSpace : undefined;
    }
    set resetOnSpace(value) {
        this.nativeElement ? this.nativeElement.resetOnSpace = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Specifies whether the value of the input will be selected on focus or not. */
    get selectAllOnFocus() {
        return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
    }
    set selectAllOnFocus(value) {
        this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
    }
    /** @description Determines whether the value of the input should contain or not the prompt/literals of the mask. */
    get textMaskFormat() {
        return this.nativeElement ? this.nativeElement.textMaskFormat : undefined;
    }
    set textMaskFormat(value) {
        this.nativeElement ? this.nativeElement.textMaskFormat = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
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
    /** @description Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid. */
    get validation() {
        return this.nativeElement ? this.nativeElement.validation : undefined;
    }
    set validation(value) {
        this.nativeElement ? this.nativeElement.validation = value : undefined;
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
    /** @description Blurs the element.
    */
    blur() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.blur();
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
        that.eventHandlers['validationHandler'] = (event) => { that.onValidation.emit(event); };
        that.nativeElement.addEventListener('validation', that.eventHandlers['validationHandler']);
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
        if (that.eventHandlers['validationHandler']) {
            that.nativeElement.removeEventListener('validation', that.eventHandlers['validationHandler']);
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
MaskedTextBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "animation", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "allowPromptAsInput", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "asciiOnly", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "autoFocus", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "autoShowMask", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "cutCopyMaskFormat", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "enterKeyBehavior", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "hidePromptOnLeave", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "isOverwriteMode", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "label", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "locale", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "mask", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "maskCompleted", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "maskFull", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "maxLength", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "messages", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "name", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "promptChar", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "readonly", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "rejectInputOnFirstFailure", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "required", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "resetOnPrompt", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "resetOnSpace", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "selectAllOnFocus", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "textMaskFormat", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "theme", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "value", null);
__decorate([
    Input()
], MaskedTextBoxComponent.prototype, "validation", null);
__decorate([
    Output()
], MaskedTextBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], MaskedTextBoxComponent.prototype, "onChanging", void 0);
__decorate([
    Output()
], MaskedTextBoxComponent.prototype, "onValidation", void 0);
MaskedTextBoxComponent = __decorate([
    Directive({
        exportAs: 'smart-masked-text-box', selector: 'smart-masked-text-box, [smart-masked-text-box]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], MaskedTextBoxComponent);

let MaskedTextBoxModule = class MaskedTextBoxModule {
};
MaskedTextBoxModule = __decorate([
    NgModule({
        declarations: [MaskedTextBoxComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [MaskedTextBoxComponent]
    })
], MaskedTextBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { MaskedTextBoxComponent, MaskedTextBoxModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-maskedtextbox.js.map
