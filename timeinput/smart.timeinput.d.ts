import { TimeInput } from './../index';
import { Animation, DropDownButtonPosition, TimeFormat } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TimeFormatHour, TimeFormatMinute, DropDownButtonPosition, TimeFormat, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { TimeInput } from './../index';
export declare class TimeInputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<TimeInput>);
    private eventHandlers;
    nativeElement: TimeInput;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation;
    /** @description Determines the format of the time displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date format is 'numeric'. */
    dateTimeFormat: TimeFormat;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Determines the position of the drop down button. */
    dropDownButtonPosition: DropDownButtonPosition;
    /** @description Sets the height of the drop down. By default it's set to 'auto'. */
    dropDownHeight: string | number;
    /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
    dropDownWidth: string | number;
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    inputPurpose: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
    name: string;
    /** @description Determines whether the drop down is opened or not. */
    opened: boolean;
    /** @description Determines the placeholder of the input. */
    placeholder: string;
    /** @description Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
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
    /** @description Closes the drop down.
    */
    close(): void;
    /** @description Opens the drop down.
    */
    open(): void;
    /** @description Returns the value in the desired format.
    */
    getFormattedValue(): void;
    /** @description Returns the value of the input.
    */
    getValue(): void;
    /** @description Selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
    /** @description Sets the value of the input. Expects an array of 2 numbers for hours and minutes.
    * @param {any[]} value. The value to be set.
    */
    setValue(value: any[]): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}