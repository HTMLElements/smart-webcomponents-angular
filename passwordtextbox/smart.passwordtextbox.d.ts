import { PasswordTextBox } from './../index';
import { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { PasswordTextBox } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class PasswordTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<PasswordTextBox>);
    private eventHandlers;
    nativeElement: PasswordTextBox;
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
    /** @description Specifies that the element should be focused when the page is loaded. */
    autoFocus: boolean;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Specifies the behavior on "Enter" key press. Default mode is "submit". */
    enterKeyBehavior: EnterKeyBehavior | string;
    /** @description The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
    form: string;
    /** @description Sets additional helper text below the element. Appears only when the element is focused. */
    hint: any;
    /** @description Sets label above the element. The label is displayed above the input and it's always visible. */
    label: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets the maximum number of characters that the user can enter. */
    maxLength: number;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    messages: any;
    /** @description Sets or gets the minimum number of characters that the user can enter. */
    minLength: number;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'. */
    passwordStrength: any;
    /** @description The placeholder text that is displayed when no value is applied to the element.  */
    placeholder: string;
    /** @description Specifies that the user must fill in a value before submitting a form that contains the element. */
    required: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Specifies whether the content of the input will be selected on focus. */
    selectAllOnFocus: boolean;
    /** @description Determines whether the password icon is visible. */
    showPasswordIcon: boolean;
    /** @description Determines whether a tooltip which shows the password's strength will be shown. */
    showPasswordStrength: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Determines whether Tooltip's arrow will be shown or not. */
    tooltipArrow: boolean;
    /** @description Determines the delay before the tooltip appears in miliseconds. */
    tooltipDelay: number;
    /** @description Determines the position of the tooltip. */
    tooltipPosition: PasswordTextBoxTooltipPosition | string;
    /** @description Sets a custom template for the content of the tooltip. */
    tooltipTemplate: string;
    /** @description If true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element.  */
    value: string;
    /** @description This event is triggered when the value of the element is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element before it was changed.
    *   value - The new value of the element.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered on each key up event of the TextBox, if the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging: EventEmitter<CustomEvent>;
    /** @description Focuses the element.
    */
    focus(): void;
    /** @description The method is used to reset input to it's initial value.
    */
    reset(): void;
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
