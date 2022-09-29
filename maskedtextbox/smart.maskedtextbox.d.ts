import { MaskedTextBox } from './../index';
import { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { MaskedTextBox } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class MaskedTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<MaskedTextBox>);
    private eventHandlers;
    nativeElement: MaskedTextBox;
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
    /** @description Determines whether promptChar can be entered as valid input by the user. */
    allowPromptAsInput: boolean;
    /** @description Determines whether the input accepts characters only from the ASCII character set. */
    asciiOnly: boolean;
    /** @description Specifies whether the input should be focused when the page is loaded. */
    autoFocus: boolean;
    /** @description Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set. */
    autoShowMask: boolean;
    /** @description Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations. */
    cutCopyMaskFormat: MaskedTextBoxCutCopyMaskFormat | string;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Specifies the behavior on "Enter" key press. Default mode is "submit". */
    enterKeyBehavior: EnterKeyBehavior | string;
    /** @description Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore. */
    hidePromptOnLeave: boolean;
    /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
    hint: string;
    /** @description Determines whether new user input overwrites the existing input value or not. */
    isOverwriteMode: boolean;
    /** @description Sets label above the element. The label is always visible. */
    label: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Defines the mask for the input. */
    mask: string;
    /** @description Indicates whether all required fields of the mask have been populated or not. */
    maskCompleted: boolean;
    /** @description Indicates whether all required and optional fields of the mask have been populated or not. */
    maskFull: boolean;
    /** @description Determines the maximum number of characters that the user can enter. */
    maxLength: number;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description A string that appears inside the input when there's no value and mask.  */
    placeholder: string;
    /** @description Determines the prompt char that is used for the mask of the element. */
    promptChar: string;
    /** @description If the element is readonly, the users cannot iteract with the element. */
    readonly: boolean;
    /** @description Determines whether the parsing of user input should stop after the first invalid character or not. */
    rejectInputOnFirstFailure: boolean;
    /** @description Specifies that the input must be filled in before submitting a form */
    required: boolean;
    /** @description Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled. */
    resetOnPrompt: boolean;
    /** @description Determines whether hitting space character resets the currently selected value from the input or not. */
    resetOnSpace: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Specifies whether the value of the input will be selected on focus or not. */
    selectAllOnFocus: boolean;
    /** @description Determines whether the value of the input should contain or not the prompt/literals of the mask. */
    textMaskFormat: MaskedTextBoxTextMaskFormat | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element.  */
    value: string;
    /** @description Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid. */
    validation: any;
    /** @description This event is triggered when the value of the Text Box is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered on each key up event of the MaskedTextBox, if the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging: EventEmitter<CustomEvent>;
    /** @description This event is triggered if the validation property is set. Indicates whether valiation has passed successfully or not.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	success)
    *   success - A flag inidicating whether the validation was successfull or not.
    */
    onValidation: EventEmitter<CustomEvent>;
    /** @description Focuses the element.
    */
    focus(): void;
    /** @description Blurs the element.
    */
    blur(): void;
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
