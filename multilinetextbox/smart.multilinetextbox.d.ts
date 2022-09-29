import { MultilineTextBox } from './../index';
import { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { MultilineTextBox } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class MultilineTextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<MultilineTextBox>);
    private eventHandlers;
    nativeElement: MultilineTextBox;
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
    /** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. */
    autoCapitalize: MultilineTextBoxAutoCapitalize | string;
    /** @description Determines whether the value of the control can be automatically completed by the browser. */
    autoComplete: MultiLineTextBoxAutoComplete | string;
    /** @description Determines whether element will auto expand when the input overflows vertically. */
    autoExpand: boolean;
    /** @description Determines whether the input should be focused when the page is loaded. */
    autoFocus: boolean;
    /** @description The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20. */
    cols: number;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Specifies how the characters are displayed inside the input. */
    displayMode: TextBoxDisplayMode | string;
    /** @description Determines the behavior on "Enter" key. */
    enterKeyBehavior: MultilineTextBoxEnterKeyBehavior | string;
    /** @description The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
    form: string;
    /** @description Sets additional helper text below the element. Appears only when the element is focused. */
    hint: any;
    /** @description Controls horizontal scrollbar's visibility.  */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility | string;
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    inputPurpose: string;
    /** @description Sets label above the element. The label is displayed above the input and it's always visible. */
    label: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets the maximum number of characters that the user can enter. */
    maxLength: number;
    /** @description Sets or gets the minimum number of characters that the user can enter. */
    minLength: number;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description The placeholder text that is displayed when no value is applied to the element.  */
    placeholder: string;
    /** @description If enabled the users cannot iteract with the element. */
    readonly: boolean;
    /** @description Specifies that the user must fill in a value before submitting a form that contains the element. */
    required: boolean;
    /** @description Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area. */
    resizable: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description The number of visible text lines for the control. */
    rows: number;
    /** @description Specifies whether the content of the input will be selected on focus. */
    selectAllOnFocus: boolean;
    /** @description Indicates the index of the last character in the current selection. */
    selectionEnd: number;
    /** @description Indicates the index to the first character in the current selection. */
    selectionStart: number;
    /** @description Specifies whether the element is to have its spelling and grammar checked or not. */
    spellCheck: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element. */
    value: string;
    /** @description Controls vertical scrollbar's visibility.  */
    verticalScrollBarVisibility: VerticalScrollBarVisibility | string;
    /** @description Indicates how the control wraps text. */
    wrap: MultilineTextBoxWrap | string;
    /** @description This event is triggered when the value of the text box is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
    *   oldValue - The previous value of the element before it was changed.
    *   value - The new value of the element.
    *   type - Indicates when the element was called, e.g. on blur or submit.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description Focuses the element.
    */
    focus(): void;
    /** @description The method is used to reset the value of the element box to it's initial state.
    */
    reset(): void;
    /** @description Returns the currenctly selected text.
    * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
    * @returns {string}
  */
    selection(displayMode: any): Promise<any>;
    /** @description Selects a certain part of the input text. If no arguments are specified the whole text will be selected.
    * @param {any} rangeFrom?. Determines the start index of the text selection.
    * @param {any} rangeTo?. Determines the end index of the text selection.
    */
    select(rangeFrom?: any, rangeTo?: any): void;
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
