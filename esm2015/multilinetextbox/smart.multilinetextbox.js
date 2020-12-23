import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultilineTextBoxComponent),
    multi: true
};
let MultilineTextBoxComponent = class MultilineTextBoxComponent extends BaseElement {
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
        /** @description This event is triggered when the value of the text box is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
        *   oldValue - The previous value of the element before it was changed.
        *   value - The new value of the element.
        *   type - Indicates when the element was called, e.g. on blur or submit.
        */
        this.onChange = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-multiline-text-box');
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
    /** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. */
    get autoCapitalize() {
        return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
    }
    set autoCapitalize(value) {
        this.nativeElement ? this.nativeElement.autoCapitalize = value : undefined;
    }
    /** @description Determines whether the value of the control can be automatically completed by the browser. */
    get autoComplete() {
        return this.nativeElement ? this.nativeElement.autoComplete : undefined;
    }
    set autoComplete(value) {
        this.nativeElement ? this.nativeElement.autoComplete = value : undefined;
    }
    /** @description Determines whether element will auto expand when the input overflows vertically. */
    get autoExpand() {
        return this.nativeElement ? this.nativeElement.autoExpand : undefined;
    }
    set autoExpand(value) {
        this.nativeElement ? this.nativeElement.autoExpand = value : undefined;
    }
    /** @description Determines whether the input should be focused when the page is loaded. */
    get autoFocus() {
        return this.nativeElement ? this.nativeElement.autoFocus : undefined;
    }
    set autoFocus(value) {
        this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
    }
    /** @description The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20. */
    get cols() {
        return this.nativeElement ? this.nativeElement.cols : undefined;
    }
    set cols(value) {
        this.nativeElement ? this.nativeElement.cols = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Specifies how the characters are displayed inside the input. */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        this.nativeElement ? this.nativeElement.displayMode = value : undefined;
    }
    /** @description Determines the behavior on "Enter" key. */
    get enterKeyBehavior() {
        return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
    }
    set enterKeyBehavior(value) {
        this.nativeElement ? this.nativeElement.enterKeyBehavior = value : undefined;
    }
    /** @description The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
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
    /** @description Controls horizontal scrollbar's visibility.  */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
    }
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    get inputPurpose() {
        return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
    }
    set inputPurpose(value) {
        this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
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
    /** @description Sets or gets the minimum number of characters that the user can enter. */
    get minLength() {
        return this.nativeElement ? this.nativeElement.minLength : undefined;
    }
    set minLength(value) {
        this.nativeElement ? this.nativeElement.minLength = value : undefined;
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
    /** @description The placeholder text that is displayed when no value is applied to the element.  */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description If enabled the users cannot iteract with the element. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Specifies that the user must fill in a value before submitting a form that contains the element. */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area. */
    get resizable() {
        return this.nativeElement ? this.nativeElement.resizable : undefined;
    }
    set resizable(value) {
        this.nativeElement ? this.nativeElement.resizable = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description The number of visible text lines for the control. */
    get rows() {
        return this.nativeElement ? this.nativeElement.rows : undefined;
    }
    set rows(value) {
        this.nativeElement ? this.nativeElement.rows = value : undefined;
    }
    /** @description Specifies whether the content of the input will be selected on focus. */
    get selectAllOnFocus() {
        return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
    }
    set selectAllOnFocus(value) {
        this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
    }
    /** @description Indicates the index of the last character in the current selection. */
    get selectionEnd() {
        return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
    }
    set selectionEnd(value) {
        this.nativeElement ? this.nativeElement.selectionEnd = value : undefined;
    }
    /** @description Indicates the index to the first character in the current selection. */
    get selectionStart() {
        return this.nativeElement ? this.nativeElement.selectionStart : undefined;
    }
    set selectionStart(value) {
        this.nativeElement ? this.nativeElement.selectionStart = value : undefined;
    }
    /** @description Specifies whether the element is to have its spelling and grammar checked or not. */
    get spellCheck() {
        return this.nativeElement ? this.nativeElement.spellCheck : undefined;
    }
    set spellCheck(value) {
        this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
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
    /** @description Sets or gets the value of the element. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Controls vertical scrollbar's visibility.  */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
    }
    /** @description Indicates how the control wraps text. */
    get wrap() {
        return this.nativeElement ? this.nativeElement.wrap : undefined;
    }
    set wrap(value) {
        this.nativeElement ? this.nativeElement.wrap = value : undefined;
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
    /** @description The method is used to reset the value of the element box to it's initial state.
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
    /** @description Returns the currenctly selected text.
    * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
    * @returns {string}
  */
    selection(displayMode) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.selection(displayMode);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Selects a certain part of the input text. If no arguments are specified the whole text will be selected.
    * @param {any} rangeFrom?. Determines the start index of the text selection.
    * @param {any} rangeTo?. Determines the end index of the text selection.
    */
    select(rangeFrom, rangeTo) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rangeFrom, rangeTo);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rangeFrom, rangeTo);
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
MultilineTextBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "autoCapitalize", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "autoComplete", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "autoExpand", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "autoFocus", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "cols", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "displayMode", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "enterKeyBehavior", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "form", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "horizontalScrollBarVisibility", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "inputPurpose", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "label", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "localizeFormatFunction", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "maxLength", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "minLength", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "name", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "placeholder", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "readonly", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "required", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "resizable", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "rows", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "selectAllOnFocus", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "selectionEnd", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "selectionStart", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "spellCheck", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "unfocusable", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "value", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "verticalScrollBarVisibility", null);
tslib_1.__decorate([
    Input()
], MultilineTextBoxComponent.prototype, "wrap", null);
tslib_1.__decorate([
    Output()
], MultilineTextBoxComponent.prototype, "onChange", void 0);
MultilineTextBoxComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-multiline-text-box, [smart-multiline-text-box]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], MultilineTextBoxComponent);
export { MultilineTextBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubXVsdGlsaW5ldGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9tdWx0aWxpbmV0ZXh0Ym94LyIsInNvdXJjZXMiOlsic21hcnQubXVsdGlsaW5ldGV4dGJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM04sT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXpFLE1BQU0sbUNBQW1DLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQTtBQVFELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsV0FBVztJQUV6RCxZQUFZLEdBQWlDO1FBQzVDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUlKLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBYTNCOzs7VUFHRTtRQUNILGNBQVMsR0FBeUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzFDOzs7VUFHRTtRQUNILGVBQVUsR0FBYyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUE4VHZDOzs7OztVQUtFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVks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QUFLLEVBQUU7NkRBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7dUVBR1A7QUFPRDtJQURDLEtBQUssRUFBRTswREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzBEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzREQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt5REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzBEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2lFQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NkRBR1A7QUFPRDtJQURDLEtBQUssRUFBRTsrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzJEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs0REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NEVBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQVdTO0lBQVQsTUFBTSxFQUFFOzJEQUEwRDtBQWpXdkQseUJBQXlCO0lBTnJDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxzREFBc0Q7UUFDaEUsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7S0FFaEQsQ0FBQztHQUVXLHlCQUF5QixDQW1oQnJDO1NBbmhCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdWx0aWxpbmVUZXh0Qm94IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIE11bHRpbGluZVRleHRCb3hBdXRvQ2FwaXRhbGl6ZSwgTXVsdGlMaW5lVGV4dEJveEF1dG9Db21wbGV0ZSwgVGV4dEJveERpc3BsYXlNb2RlLCBNdWx0aWxpbmVUZXh0Qm94RW50ZXJLZXlCZWhhdmlvciwgSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHksIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgTXVsdGlsaW5lVGV4dEJveFdyYXAsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgTXVsdGlsaW5lVGV4dEJveEF1dG9DYXBpdGFsaXplLCBNdWx0aUxpbmVUZXh0Qm94QXV0b0NvbXBsZXRlLCBUZXh0Qm94RGlzcGxheU1vZGUsIE11bHRpbGluZVRleHRCb3hFbnRlcktleUJlaGF2aW9yLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBNdWx0aWxpbmVUZXh0Qm94V3JhcCwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgTXVsdGlsaW5lVGV4dEJveCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cblxuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lmxpc3RpdGVtJztcblxuaW1wb3J0IHsgTGlzdEl0ZW1zR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lmxpc3RpdGVtc2dyb3VwJztcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNdWx0aWxpbmVUZXh0Qm94Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1tdWx0aWxpbmUtdGV4dC1ib3gsIFtzbWFydC1tdWx0aWxpbmUtdGV4dC1ib3hdJyxcblx0cHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmVUZXh0Qm94Q29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPE11bHRpbGluZVRleHRCb3g+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBNdWx0aWxpbmVUZXh0Qm94O1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBNdWx0aWxpbmVUZXh0Qm94O1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxNdWx0aWxpbmVUZXh0Qm94PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LW11bHRpbGluZS10ZXh0LWJveCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG4gICAgICAgIC8qKlxuICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgY2hhbmdlIGV2ZW50IG9jY3VycyBvbiB0aGUgZm9ybSBlbGVtZW50cy5cbiAgICAgICAgKi9cbiAgICAgICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gICAgICAgIC8qKlxuICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgYmx1ciBldmVudCBvY2N1cnMgb24gdGhlIGZvcm0gZWxlbWVudHMuXG4gICAgICAgICovXG4gICAgICAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBhbmQgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBjYXBpdGFsaXplZCBhcyBpdCBpcyBlbnRlcmVkL2VkaXRlZCBieSB0aGUgdXNlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9DYXBpdGFsaXplKCk6IE11bHRpbGluZVRleHRCb3hBdXRvQ2FwaXRhbGl6ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ2FwaXRhbGl6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0NhcGl0YWxpemUodmFsdWU6IE11bHRpbGluZVRleHRCb3hBdXRvQ2FwaXRhbGl6ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ2FwaXRhbGl6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNhbiBiZSBhdXRvbWF0aWNhbGx5IGNvbXBsZXRlZCBieSB0aGUgYnJvd3Nlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Db21wbGV0ZSgpOiBNdWx0aUxpbmVUZXh0Qm94QXV0b0NvbXBsZXRlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Db21wbGV0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0NvbXBsZXRlKHZhbHVlOiBNdWx0aUxpbmVUZXh0Qm94QXV0b0NvbXBsZXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Db21wbGV0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgZWxlbWVudCB3aWxsIGF1dG8gZXhwYW5kIHdoZW4gdGhlIGlucHV0IG92ZXJmbG93cyB2ZXJ0aWNhbGx5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0V4cGFuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9FeHBhbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9FeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0V4cGFuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0ZvY3VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0ZvY3VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBjb2xzIGF0dHJpYnV0ZSBzcGVjaWZpZXMgdGhlIHZpc2libGUgd2lkdGggb2YgYSBpbnB1dC4gSWYgaXQgaXMgc3BlY2lmaWVkLCBpdCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci4gSWYgaXQgaXMgbm90IHNwZWNpZmllZCwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2xzKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xzKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29scyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3BlY2lmaWVzIGhvdyB0aGUgY2hhcmFjdGVycyBhcmUgZGlzcGxheWVkIGluc2lkZSB0aGUgaW5wdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNwbGF5TW9kZSgpOiBUZXh0Qm94RGlzcGxheU1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc3BsYXlNb2RlKHZhbHVlOiBUZXh0Qm94RGlzcGxheU1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgYmVoYXZpb3Igb24gXCJFbnRlclwiIGtleS4gKi9cblx0QElucHV0KClcblx0Z2V0IGVudGVyS2V5QmVoYXZpb3IoKTogTXVsdGlsaW5lVGV4dEJveEVudGVyS2V5QmVoYXZpb3Ige1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW50ZXJLZXlCZWhhdmlvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZW50ZXJLZXlCZWhhdmlvcih2YWx1ZTogTXVsdGlsaW5lVGV4dEJveEVudGVyS2V5QmVoYXZpb3IpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW50ZXJLZXlCZWhhdmlvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZm9ybSBlbGVtZW50IHRoYXQgdGhlIGVsZW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIChpdHMgXCJmb3JtIG93bmVyXCIpLiBUaGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBtdXN0IGJlIHRoZSBJRCBvZiBhIGZvcm0gZWxlbWVudCBpbiB0aGUgc2FtZSBkb2N1bWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZvcm0oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm0gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvcm0odmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb3JtID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYWRkaXRpb25hbCBoZWxwZXIgdGV4dCBiZWxvdyB0aGUgZWxlbWVudC4gQXBwZWFycyBvbmx5IHdoZW4gdGhlIGVsZW1lbnQgaXMgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpbnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpbnQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaW50ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbnRyb2xzIGhvcml6b250YWwgc2Nyb2xsYmFyJ3MgdmlzaWJpbGl0eS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSgpOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkodmFsdWU6IEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHB1cnBvc2Ugb2YgdGhlIGlucHV0IGFuZCB3aGF0LCBpZiBhbnksIHBlcm1pc3Npb24gdGhlIHVzZXIgYWdlbnQgaGFzIHRvIHByb3ZpZGUgYXV0b21hdGVkIGFzc2lzdGFuY2UgaW4gZmlsbGluZyBvdXQgdGhlIGVsZW1lbnQncyBpbnB1dCB3aGVuIGluIGEgZm9ybSwgYXMgd2VsbCBhcyBndWlkYW5jZSB0byB0aGUgYnJvd3NlciBhcyB0byB0aGUgdHlwZSBvZiBpbmZvcm1hdGlvbiBleHBlY3RlZCBpbiB0aGUgZWxlbWVudC4gVGhpcyB2YWx1ZSBjb3JyZXNwb25kcyB0byB0aGUgc3RhbmRhcmQgSFRNTCBhdXRvY29tcGxldGUgYXR0cmlidXRlIGFuZCBjYW4gYmUgc2V0IHRvIHZhbHVlcyBzdWNoIGFzICdvbicsICduYW1lJywgJ29yZ2FuaXphdGlvbicsICdzdHJlZXQtYWRkcmVzcycsIGV0Yy4gKi9cblx0QElucHV0KClcblx0Z2V0IGlucHV0UHVycG9zZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5wdXRQdXJwb3NlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbnB1dFB1cnBvc2UodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnB1dFB1cnBvc2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBsYWJlbCBhYm92ZSB0aGUgZWxlbWVudC4gVGhlIGxhYmVsIGlzIGRpc3BsYXllZCBhYm92ZSB0aGUgaW5wdXQgYW5kIGl0J3MgYWx3YXlzIHZpc2libGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYWJlbCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIHVzZWQgdG8gY3VzdG9taXplIHRoZSBmb3JtYXQgb2YgdGhlIG1lc3NhZ2VzIHRoYXQgYXJlIHJldHVybmVkIGZyb20gdGhlIExvY2FsaXphdGlvbiBNb2R1bGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgdXNlciBjYW4gZW50ZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXhMZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heExlbmd0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWF4TGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IHRoZSB1c2VyIGNhbiBlbnRlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbkxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluTGVuZ3RoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW5MZW5ndGgodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW5MZW5ndGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbmFtZSBhdHRyaWJ1dGUgZm9yIHRoZSBlbGVtZW50LiBOYW1lIGlzIHVzZWQgd2hlbiBzdWJtaXRpbmcgSFRNTCBmb3Jtcy4gKi9cblx0QElucHV0KClcblx0Z2V0IG5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5hbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5uYW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gbm8gdmFsdWUgaXMgYXBwbGllZCB0byB0aGUgZWxlbWVudC4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgZW5hYmxlZCB0aGUgdXNlcnMgY2Fubm90IGl0ZXJhY3Qgd2l0aCB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNwZWNpZmllcyB0aGF0IHRoZSB1c2VyIG11c3QgZmlsbCBpbiBhIHZhbHVlIGJlZm9yZSBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXF1aXJlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy8gZGlzYWJsZXMgdGhlIHJlc2l6aW5nIG9mIHRoZSBlbGVtZW50LiBJZiBlbmFibGVkIGEgcmVzaXppbmcgaW5kaWNhdG9yIGFwcGVhcnMgaW4gdGhlIGJvdHRvbSBjb3JuZXIgb2YgdGhlIGlucHV0IGFyZWEuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNpemFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemFibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemFibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBudW1iZXIgb2YgdmlzaWJsZSB0ZXh0IGxpbmVzIGZvciB0aGUgY29udHJvbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJvd3MoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJvd3ModmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBjb250ZW50IG9mIHRoZSBpbnB1dCB3aWxsIGJlIHNlbGVjdGVkIG9uIGZvY3VzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0QWxsT25Gb2N1cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdEFsbE9uRm9jdXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdEFsbE9uRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsT25Gb2N1cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbmRpY2F0ZXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGNoYXJhY3RlciBpbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25FbmQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uRW5kKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB0aGUgaW5kZXggdG8gdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25TdGFydCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGlvblN0YXJ0KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdG8gaGF2ZSBpdHMgc3BlbGxpbmcgYW5kIGdyYW1tYXIgY2hlY2tlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcGVsbENoZWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BlbGxDaGVjayA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BlbGxDaGVjayh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGVsbENoZWNrID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb250cm9scyB2ZXJ0aWNhbCBzY3JvbGxiYXIncyB2aXNpYmlsaXR5LiAgKi9cblx0QElucHV0KClcblx0Z2V0IHZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSgpOiBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkodmFsdWU6IFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIGhvdyB0aGUgY29udHJvbCB3cmFwcyB0ZXh0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd3JhcCgpOiBNdWx0aWxpbmVUZXh0Qm94V3JhcCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53cmFwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3cmFwKHZhbHVlOiBNdWx0aWxpbmVUZXh0Qm94V3JhcCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53cmFwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSB0ZXh0IGJveCBpcyBjaGFuZ2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlLCBcdHR5cGUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgZWxlbWVudCBiZWZvcmUgaXQgd2FzIGNoYW5nZWQuXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgdmFsdWUgb2YgdGhlIGVsZW1lbnQuXG5cdCogICB0eXBlIC0gSW5kaWNhdGVzIHdoZW4gdGhlIGVsZW1lbnQgd2FzIGNhbGxlZCwgZS5nLiBvbiBibHVyIG9yIHN1Ym1pdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gRm9jdXNlcyB0aGUgZWxlbWVudC4gXG5cdCovXG4gICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2QgaXMgdXNlZCB0byByZXNldCB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgYm94IHRvIGl0J3MgaW5pdGlhbCBzdGF0ZS4gXG5cdCovXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGN1cnJlbmN0bHkgc2VsZWN0ZWQgdGV4dC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlNb2RlLiBJZiA8Yj5kaXNwbGF5TW9kZTwvYj4gaXMgc2V0IHRvICdlc2NhcGVkJywgdGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIG1ldGhvZCBjb250YWlucyBlc2NhcGVkIHNwZWNpYWwgY2hhcmFjdGVycy5cblx0KiBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgc2VsZWN0aW9uKGRpc3BsYXlNb2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbihkaXNwbGF5TW9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgY2VydGFpbiBwYXJ0IG9mIHRoZSBpbnB1dCB0ZXh0LiBJZiBubyBhcmd1bWVudHMgYXJlIHNwZWNpZmllZCB0aGUgd2hvbGUgdGV4dCB3aWxsIGJlIHNlbGVjdGVkLiBcblx0KiBAcGFyYW0ge2FueX0gcmFuZ2VGcm9tPy4gRGV0ZXJtaW5lcyB0aGUgc3RhcnQgaW5kZXggb2YgdGhlIHRleHQgc2VsZWN0aW9uLlxuXHQqIEBwYXJhbSB7YW55fSByYW5nZVRvPy4gRGV0ZXJtaW5lcyB0aGUgZW5kIGluZGV4IG9mIHRoZSB0ZXh0IHNlbGVjdGlvbi5cblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0KHJhbmdlRnJvbT86IGFueSwgcmFuZ2VUbz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3QocmFuZ2VGcm9tLCByYW5nZVRvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3QocmFuZ2VGcm9tLCByYW5nZVRvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdF9pbml0aWFsQ2hhbmdlID0gdHJ1ZTsgXG5cblx0Z2V0IG5nVmFsdWUoKTogYW55IHtcblx0XHRpZiAoIXRoaXMubmF0aXZlRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c2V0IG5nVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQpIHtcblx0XHQgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuXG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG5cdFx0XHR0aGF0LnZhbHVlID0gbm9ybWFsaXplZFZhbHVlO1xuXHRcdFx0aWYgKHRoYXQuX2luaXRpYWxDaGFuZ2UgPT09IGZhbHNlKSB7XG5cdCAgICBcdFx0dGhhdC5fb25DaGFuZ2UodGhhdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cdFx0fSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl9vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cbiAgICAgICAgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoYXQuX2luaXRpYWxDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoYXQuX29uQ2hhbmdlKHRoYXQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5fb25Ub3VjaGVkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoYXQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5ldmVudEhhbmRsZXJzWydrZXl1cE1vZGVsSGFuZGxlciddID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKGV2ZW50KTsgfSwgNTApO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGF0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sna2V5dXBNb2RlbEhhbmRsZXInXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKTtcblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddKTtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXSk7XG4gICAgICAgICAgICBpZiAodGhhdC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhhdC5ldmVudEhhbmRsZXJzWydrZXl1cE1vZGVsSGFuZGxlciddKTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==