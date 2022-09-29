import { PhoneInput } from './../index';
import { DropDownButtonPosition } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { DropDownButtonPosition, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { PhoneInput } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class PhoneInputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<PhoneInput>);
    private eventHandlers;
    nativeElement: PhoneInput;
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
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets additional class names to the Input drop down. */
    dropDownClassList: any;
    /** @description Determines the position of the drop down button. */
    dropDownButtonPosition: DropDownButtonPosition | string;
    /** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
    dropDownHeight: string | number;
    /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
    dropDownWidth: string | number;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
    name: string;
    /** @description Determines whether the input will be in international or national mode i.e whether the input will start with '+'. */
    nationalMode: boolean;
    /** @description Determines whether the drop down is opened or not. */
    opened: boolean;
    /** @description Sets or gets an array of country codes which will be used instead of the default one with all countries. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
    onlyCountries: any;
    /** @description Determines the placeholder of the input. */
    placeholder: string;
    /** @description Sets or gets the selected country of the element. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
    selectedCountry: string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element. */
    value: string;
    /** @description This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered on each key up event of the Input, if the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user clicks on an item from the popup list.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The item that was clicked.
    *   label - The label of the item that was clicked.
    *   value - The value of the item that was clicked.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description Closes the drop down.
    */
    close(): void;
    /** @description Ensures that the active ( selected ) item is always visible.
    */
    ensureVisible(): void;
    /** @description Returns the entered phone number with formatting.
    * @param {boolean} isInternational?. When you use 'false', the national phone number will be returned and the international phone number, when you use 'true' as parameter.
    * @returns {string}
  */
    getNumber(isInternational?: any): Promise<any>;
    /** @description Returns an item by its country dial code. The item is an object with 'label', 'value', 'iso2' and 'dialCode' properties.
    * @param {string} dialCode?. Returns the national or international phone number
    * @returns {any}
  */
    getItemByDialCode(dialCode?: any): Promise<any>;
    /** @description Returns the selected item. The item is an object with 'label', 'value', 'iso2' and 'dialCode' properties.
    * @returns {any}
  */
    getSelectedItem(): Promise<any>;
    /** @description Returns true or false depending on whether the entered phone number is valid.
    * @returns {boolean}
  */
    isValidNumber(): Promise<any>;
    /** @description Validates the entered phone number.
    */
    validate(): void;
    /** @description Opens the drop down.
    */
    open(): void;
    /** @description Selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
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
