import { TextBox } from './../index';
import { Animation, AutoComplete, TextBoxDisplayMode, DropDownOpenMode, DropDownPosition, EscKeyMode, EnterKeyBehavior, HorizontalScrollBarVisibility, ListItemMeasureMode, VerticalAlignment, VerticalScrollBarVisibility } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, AutoComplete, TextBoxDisplayMode, DropDownOpenMode, DropDownPosition, EscKeyMode, EnterKeyBehavior, HorizontalScrollBarVisibility, ListItemMeasureMode, VerticalAlignment, VerticalScrollBarVisibility, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { TextBox } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class TextBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<TextBox>);
    private eventHandlers;
    nativeElement: TextBox;
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
    /** @description Determines whether the text box will be focused on page load or not. */
    autoFocus: boolean;
    /** @description Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input. */
    autoComplete: AutoComplete | string;
    /** @description Determines the delay before the drop down opens to show the matches from the auto complete operation. */
    autoCompleteDelay: number;
    /** @description Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings, numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. */
    dataSource: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Determines whether an indicator will appear during filtering and remote item loading. */
    displayLoadingIndicator: boolean;
    /** @description Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property. */
    displayMember: string;
    /** @description Determines how the characters are displayed inside the input. */
    displayMode: TextBoxDisplayMode | string;
    /** @description Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the drop down will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place. */
    dropDownAppendTo: any;
    /** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
    dropDownHeight: string | number;
    /** @description Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable. */
    dropDownMaxHeight: string | number;
    /** @description Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable. */
    dropDownMaxWidth: string | number;
    /** @description Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable. */
    dropDownMinHeight: string | number;
    /** @description Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable. */
    dropDownMinWidth: string | number;
    /** @description Determines how the drop down is going to open. */
    dropDownOpenMode: DropDownOpenMode | string;
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the drop down will will target the overlay and not the DOM. */
    dropDownOverlay: boolean;
    /** @description Determines the placeholder for the drop down, displayed when there are no items in it. */
    dropDownPlaceholder: string;
    /** @description Determines the position of the drop down when opened. */
    dropDownPosition: DropDownPosition | string;
    /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
    dropDownWidth: string | number;
    /** @description Determines the behavior of the element when Escape key is pressed. */
    escKeyMode: EscKeyMode | string;
    /** @description Specifies the behavior of "Enter" key. */
    enterKeyBehavior: EnterKeyBehavior | string;
    /** @description The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
    form: string;
    /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
    hint: any;
    /** @description Determines the visibility of the horizontal Scroll bar thats inside the drop down. */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility | string;
    /** @description Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input. */
    inputMember: string;
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    inputPurpose: string;
    /** @description Sets the height for all list items. Used only when virtualization is enabled. */
    itemHeight: number | null;
    /** @description Determines the item width measuring algorithm. */
    itemMeasureMode: ListItemMeasureMode | string;
    /** @description A getter that returns an array of all List items inside the drop down. */
    items: any;
    /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items. */
    itemTemplate: any;
    /** @description Sets a little text label above the element. */
    label: string;
    /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
    loadingIndicatorPlaceholder: string;
    /** @description Determines the position of the loading indicator. */
    loadingIndicatorPosition: VerticalAlignment | string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets the maximum number of characters that the user can enter. */
    maxLength: number;
    /** @description Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. */
    minLength: number;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Determines whether the drop down is opened or closed */
    opened: boolean;
    /** @description Determines the input's placeholder. */
    placeholder: string;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Specifies that the user must fill the input before submitting a form with the element. */
    required: boolean;
    /** @description Specifies the message that will appear if required is set and no value is provided in the input. */
    requiredMessage: string;
    /** @description Determines whether the content of the input will be selected on focus or not. */
    selectAllOnFocus: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element.  */
    value: string;
    /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
    valueMember: string;
    /** @description Determines the visibility of the vertical scroll bar that's inside the drop down. */
    verticalScrollBarVisibility: VerticalScrollBarVisibility | string;
    /** @description This event is triggered when the value of the Text Box is changed. This happens on blur and if 'Enter' is pressed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    *   type - The type of the event.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered on each key up event of the TextBox, if the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging: EventEmitter<CustomEvent>;
    /** @description Closes the drop down. The drop down is used only when auto complete is enabled.
    */
    close(): void;
    /** @description Opens the drop down. The drop down is used only when auto complete is enabled.
    */
    open(): void;
    /** @description The method is used to reset the input back to it's initial value.
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
