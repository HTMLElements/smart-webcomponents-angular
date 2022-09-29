import { NumberInput } from './../index';
import { Animation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { NumberInput } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class NumberInputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<NumberInput>);
    private eventHandlers;
    nativeElement: NumberInput;
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
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    inputPurpose: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Determines the max number that can be displayed inside the input. */
    max: number;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the min number that can be displayed inside the input. */
    min: number;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
    name: string;
    /** @description Sets or gets the value format of the element. */
    numberFormat: any;
    /** @description Determines the placeholder of the input. */
    placeholder: string;
    /** @description Determines whether ot not the user can enter text inside the input. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets the incremental/decremental step for the value of the element. */
    step: number;
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element. */
    value: any;
    /** @description This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description Returns the value in the desired format.
    * @param {string | number} value. The value to be formatted by the method.
    * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
    * @returns {string}
  */
    getFormattedValue(value: any, format?: any): Promise<any>;
    /** @description Returns the number of the input.
    * @returns {number}
  */
    getValue(): Promise<any>;
    /** @description Selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
    /** @description Sets the value of the input.
    * @param {string | number} value. The value to be set.
    */
    setValue(value: string | number): void;
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
