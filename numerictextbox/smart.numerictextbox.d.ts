import { NumericTextBox } from './../index';
import { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { NumericTextBox } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class NumericTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<NumericTextBox>);
    private eventHandlers;
    nativeElement: NumericTextBox;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /**
    * @description
    * The registered callback function called when a change event occurs on the form elements.
    */
    _onChange: (value: any) => void;
    /**
    * @description
    * The registered callback function called when a blur event occurs on the form elements.
    */
    _onTouched: () => any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets the char to use as the decimal separator in numeric values.  */
    decimalSeparator: string;
    /** @description Enables or disables the jqxNumericTextBox.  */
    disabled: boolean;
    /** @description Sets the parent container of the radix dropdown. */
    dropDownAppendTo: any;
    /** @description Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems. */
    dropDownEnabled: boolean;
    /** @description Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox.  */
    enableMouseWheelAction: boolean;
    /** @description Sets additional helper text below the element.  */
    hint: string;
    /** @description Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.  */
    inputFormat: NumericTextBoxInputFormat | string;
    /** @description Sets a label above the element.  */
    label: string;
    /** @description If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength. */
    leadingZeros: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets the maximum value of the widget.  */
    max: number | string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the minimum value of the widget.  */
    min: number | string;
    /** @description The name of the control. */
    name: string;
    /** @description Enables or disables the setting of the value property to null or empty string.  */
    nullable: boolean;
    /** @description Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true.  */
    opened: boolean;
    /** @description Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString.  */
    outputFormatString: string;
    /** @description Determines the widget's place holder displayed when the widget's input is empty.  */
    placeholder: string;
    /** @description Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
    precisionDigits: number;
    /** @description Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.  */
    radix: NumericTextBoxRadix | string;
    /** @description Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'.  */
    radixDisplay: boolean;
    /** @description Sets or gets the position of the radix display button of the jqxNumericTextBox.  */
    radixDisplayPosition: NumericTextBoxDisplayPosition | string;
    /** @description Sets or gets the readonly state of the jqxNumericTextBox.  */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'.  */
    scientificNotation: boolean;
    /** @description Determines whether to show the current value represented in all four numeral systems in the drop down. */
    showDropDownValues: boolean;
    /** @description Enables or disables the visibility of the units.  */
    showUnit: boolean;
    /** @description Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
    significantDigits: number;
    /** @description Enables or disables the visibility of the spin buttons.  */
    spinButtons: boolean;
    /** @description Sets the delay between repeats of spin buttons in miliseconds.  */
    spinButtonsDelay: number;
    /** @description Sets a delay before the first repeat iteration of spin buttons in miliseconds.  */
    spinButtonsInitialDelay: number;
    /** @description Sets or gets the position of the spin buttons of the jqxNumericTextBox.  */
    spinButtonsPosition: NumericTextBoxDisplayPosition | string;
    /** @description Sets or gets the increase/decrease step.  */
    spinButtonsStep: number | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the name of unit used in jqxNumericTextBox widget.  */
    unit: string;
    /** @description Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
    validation: Validation | string;
    /** @description Sets or gets the value of the jqxNumericTextBox widget.  */
    value: any;
    /** @description Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length.  */
    wordLength: WordLength | string;
    /** @description This event is triggered when the value is changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the value in the input is being changed via keypress or paste.
    *  @param event. The custom event. 	*/
    onChanging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the dropdown is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the dropdown is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the radix is changed.
    *  @param event. The custom event. 	*/
    onRadixChange: EventEmitter<CustomEvent>;
    /** @description Focuses the NumericTextBox.
    */
    focus(): void;
    /** @description Get/set the value of the NumericTextBox.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox.
    * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation.
    * @returns {string}
  */
    val(value?: any, suppressValidation?: any): Promise<any>;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _initialChange: boolean;
    ngValue: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
