import { Input as InputEditor } from './../index';
import { DropDownButtonPosition, InputQueryMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { DropDownButtonPosition, InputQueryMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Input as InputEditor } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class InputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<InputEditor>);
    private eventHandlers;
    nativeElement: InputEditor;
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
    /** @description Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds. */
    autoCompleteDelay: number;
    /** @description Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. The data source item object may have the following fields: 'label' - string, 'value' - string or number, 'selected' - boolean, 'prefix' - string, 'suffix' - string, 'title' - string. The 'prefix' and 'suffix' add html before and after the label. */
    dataSource: any;
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
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    inputPurpose: string;
    /** @description Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down. */
    items: number;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items. */
    minLength: number;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
    name: string;
    /** @description Determines whether the drop down is opened or not. */
    opened: boolean;
    /** @description Determines the placeholder of the input. */
    placeholder: string;
    /** @description Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied. */
    query: string | number;
    /** @description Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
    queryMode: InputQueryMode | string;
    /** @description Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines whether the items are sorted alphabetically or not */
    sorted: boolean;
    /** @description Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled. */
    sortDirection: string;
    /** @description Determines the selected index. */
    selectedIndex: number;
    /** @description Determines the selected value. */
    selectedValue: string | number;
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    theme: string;
    /** @description Determines the input type. Input type determines what input can be entered. */
    type: string;
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
    /** @description This event is triggered when the popup is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the popup is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
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
    /** @description Opens the drop down.
    */
    open(): void;
    /** @description Focuses and selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
    /** @description Selects an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    */
    selectItem(value: string | number): void;
    /** @description Gets an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getItem(value: any): Promise<any>;
    /** @description Gets the selected item. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'] and the user selected the second item, the method returns 'Item 2'. If your data source is an object with label and value, the returned value would be the 'value'.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getSelectedItem(value: any): Promise<any>;
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
