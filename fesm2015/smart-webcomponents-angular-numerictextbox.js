
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.textbox';

import { __decorate, __awaiter } from 'tslib';
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
    useExisting: forwardRef(() => NumericTextBoxComponent),
    multi: true
};
let NumericTextBoxComponent = class NumericTextBoxComponent extends BaseElement {
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
        /** @description This event is triggered when the value is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        /** @description This event is triggered when the value in the input is being changed via keypress or paste.
        *  @param event. The custom event. 	*/
        this.onChanging = new EventEmitter();
        /** @description This event is triggered when the dropdown is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when the dropdown is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when the radix is changed.
        *  @param event. The custom event. 	*/
        this.onRadixChange = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-numeric-text-box');
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
    /** @description Sets or gets the char to use as the decimal separator in numeric values.  */
    get decimalSeparator() {
        return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
    }
    set decimalSeparator(value) {
        this.nativeElement ? this.nativeElement.decimalSeparator = value : undefined;
    }
    /** @description Enables or disables the jqxNumericTextBox.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets the parent container of the radix dropdown. */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
    }
    /** @description Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems. */
    get dropDownEnabled() {
        return this.nativeElement ? this.nativeElement.dropDownEnabled : undefined;
    }
    set dropDownEnabled(value) {
        this.nativeElement ? this.nativeElement.dropDownEnabled = value : undefined;
    }
    /** @description Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox.  */
    get enableMouseWheelAction() {
        return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
    }
    set enableMouseWheelAction(value) {
        this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
    }
    /** @description Sets additional helper text below the element.  */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        this.nativeElement ? this.nativeElement.hint = value : undefined;
    }
    /** @description Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.  */
    get inputFormat() {
        return this.nativeElement ? this.nativeElement.inputFormat : undefined;
    }
    set inputFormat(value) {
        this.nativeElement ? this.nativeElement.inputFormat = value : undefined;
    }
    /** @description Sets a label above the element.  */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength. */
    get leadingZeros() {
        return this.nativeElement ? this.nativeElement.leadingZeros : undefined;
    }
    set leadingZeros(value) {
        this.nativeElement ? this.nativeElement.leadingZeros = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback, related to localization module.  */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets the maximum value of the widget.  */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the minimum value of the widget.  */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description The name of the control. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Enables or disables the setting of the value property to null or empty string.  */
    get nullable() {
        return this.nativeElement ? this.nativeElement.nullable : undefined;
    }
    set nullable(value) {
        this.nativeElement ? this.nativeElement.nullable = value : undefined;
    }
    /** @description Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true.  */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString.  */
    get outputFormatString() {
        return this.nativeElement ? this.nativeElement.outputFormatString : undefined;
    }
    set outputFormatString(value) {
        this.nativeElement ? this.nativeElement.outputFormatString = value : undefined;
    }
    /** @description Determines the widget's place holder displayed when the widget's input is empty.  */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
    get precisionDigits() {
        return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
    }
    set precisionDigits(value) {
        this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
    }
    /** @description Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.  */
    get radix() {
        return this.nativeElement ? this.nativeElement.radix : undefined;
    }
    set radix(value) {
        this.nativeElement ? this.nativeElement.radix = value : undefined;
    }
    /** @description Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'.  */
    get radixDisplay() {
        return this.nativeElement ? this.nativeElement.radixDisplay : undefined;
    }
    set radixDisplay(value) {
        this.nativeElement ? this.nativeElement.radixDisplay = value : undefined;
    }
    /** @description Sets or gets the position of the radix display button of the jqxNumericTextBox.  */
    get radixDisplayPosition() {
        return this.nativeElement ? this.nativeElement.radixDisplayPosition : undefined;
    }
    set radixDisplayPosition(value) {
        this.nativeElement ? this.nativeElement.radixDisplayPosition = value : undefined;
    }
    /** @description Sets or gets the readonly state of the jqxNumericTextBox.  */
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
    /** @description Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'.  */
    get scientificNotation() {
        return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
    }
    set scientificNotation(value) {
        this.nativeElement ? this.nativeElement.scientificNotation = value : undefined;
    }
    /** @description Determines whether to show the current value represented in all four numeral systems in the drop down. */
    get showDropDownValues() {
        return this.nativeElement ? this.nativeElement.showDropDownValues : undefined;
    }
    set showDropDownValues(value) {
        this.nativeElement ? this.nativeElement.showDropDownValues = value : undefined;
    }
    /** @description Enables or disables the visibility of the units.  */
    get showUnit() {
        return this.nativeElement ? this.nativeElement.showUnit : undefined;
    }
    set showUnit(value) {
        this.nativeElement ? this.nativeElement.showUnit = value : undefined;
    }
    /** @description Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
    get significantDigits() {
        return this.nativeElement ? this.nativeElement.significantDigits : undefined;
    }
    set significantDigits(value) {
        this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
    }
    /** @description Enables or disables the visibility of the spin buttons.  */
    get spinButtons() {
        return this.nativeElement ? this.nativeElement.spinButtons : undefined;
    }
    set spinButtons(value) {
        this.nativeElement ? this.nativeElement.spinButtons = value : undefined;
    }
    /** @description Sets the delay between repeats of spin buttons in miliseconds.  */
    get spinButtonsDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
    }
    set spinButtonsDelay(value) {
        this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
    }
    /** @description Sets a delay before the first repeat iteration of spin buttons in miliseconds.  */
    get spinButtonsInitialDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
    }
    set spinButtonsInitialDelay(value) {
        this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
    }
    /** @description Sets or gets the position of the spin buttons of the jqxNumericTextBox.  */
    get spinButtonsPosition() {
        return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
    }
    set spinButtonsPosition(value) {
        this.nativeElement ? this.nativeElement.spinButtonsPosition = value : undefined;
    }
    /** @description Sets or gets the increase/decrease step.  */
    get spinButtonsStep() {
        return this.nativeElement ? this.nativeElement.spinButtonsStep : undefined;
    }
    set spinButtonsStep(value) {
        this.nativeElement ? this.nativeElement.spinButtonsStep = value : undefined;
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
    /** @description Sets or gets the name of unit used in jqxNumericTextBox widget.  */
    get unit() {
        return this.nativeElement ? this.nativeElement.unit : undefined;
    }
    set unit(value) {
        this.nativeElement ? this.nativeElement.unit = value : undefined;
    }
    /** @description Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
    get validation() {
        return this.nativeElement ? this.nativeElement.validation : undefined;
    }
    set validation(value) {
        this.nativeElement ? this.nativeElement.validation = value : undefined;
    }
    /** @description Sets or gets the value of the jqxNumericTextBox widget.  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length.  */
    get wordLength() {
        return this.nativeElement ? this.nativeElement.wordLength : undefined;
    }
    set wordLength(value) {
        this.nativeElement ? this.nativeElement.wordLength = value : undefined;
    }
    /** @description Focuses the NumericTextBox.
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
    /** @description Get/set the value of the NumericTextBox.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox.
    * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation.
    * @returns {string}
  */
    val(value, suppressValidation) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.val(value, suppressValidation);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
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
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['radixChangeHandler'] = (event) => { that.onRadixChange.emit(event); };
        that.nativeElement.addEventListener('radixChange', that.eventHandlers['radixChangeHandler']);
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
                    that.nativeElement._validate(false, that.nativeElement.querySelector('input').value);
                    that.eventHandlers['changeModelHandler'](event);
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
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['radixChangeHandler']) {
            that.nativeElement.removeEventListener('radixChange', that.eventHandlers['radixChangeHandler']);
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
NumericTextBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "animation", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "decimalSeparator", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "dropDownAppendTo", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "dropDownEnabled", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "enableMouseWheelAction", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "hint", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "inputFormat", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "label", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "leadingZeros", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "locale", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "max", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "messages", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "min", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "name", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "nullable", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "opened", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "outputFormatString", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "placeholder", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "precisionDigits", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "radix", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "radixDisplay", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "radixDisplayPosition", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "readonly", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "scientificNotation", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "showDropDownValues", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "showUnit", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "significantDigits", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "spinButtons", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "spinButtonsDelay", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "spinButtonsInitialDelay", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "spinButtonsPosition", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "spinButtonsStep", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "theme", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "unit", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "validation", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "value", null);
__decorate([
    Input()
], NumericTextBoxComponent.prototype, "wordLength", null);
__decorate([
    Output()
], NumericTextBoxComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], NumericTextBoxComponent.prototype, "onChanging", void 0);
__decorate([
    Output()
], NumericTextBoxComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], NumericTextBoxComponent.prototype, "onClosing", void 0);
__decorate([
    Output()
], NumericTextBoxComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], NumericTextBoxComponent.prototype, "onOpening", void 0);
__decorate([
    Output()
], NumericTextBoxComponent.prototype, "onRadixChange", void 0);
NumericTextBoxComponent = __decorate([
    Directive({
        exportAs: 'smart-numeric-text-box', selector: 'smart-numeric-text-box, [smart-numeric-text-box]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], NumericTextBoxComponent);

let NumericTextBoxModule = class NumericTextBoxModule {
};
NumericTextBoxModule = __decorate([
    NgModule({
        declarations: [NumericTextBoxComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [NumericTextBoxComponent]
    })
], NumericTextBoxModule);

/**
 * Generated bundle index. Do not edit.
 */

export { NumericTextBoxComponent, NumericTextBoxModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-numerictextbox.js.map
