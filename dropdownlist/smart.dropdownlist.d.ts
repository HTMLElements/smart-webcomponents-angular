import { DropDownList } from './../index';
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { DropDownList } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class DropDownListComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<DropDownList>);
    private eventHandlers;
    nativeElement: DropDownList;
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
    /** @description Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element. */
    autoCloseDelay: number;
    /** @description Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
    dataSource: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Determines whether an indicator will appear during filtering and remote item loading. */
    displayLoadingIndicator: boolean;
    /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
    displayMember: string;
    /** @description Determines the drop down parent. The expected value is CSS Selector, ID or 'body'. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place. */
    dropDownAppendTo: string;
    /** @description Determines the position of the drop down button. */
    dropDownButtonPosition: DropDownButtonPosition | string;
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
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM. */
    dropDownOverlay: boolean;
    /** @description Determines the placeholder for the drop down list when it's empty. */
    dropDownPlaceholder: string;
    /** @description Determines the position of the drop down when opened. */
    dropDownPosition: DropDownPosition | string;
    /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
    dropDownWidth: string | number;
    /** @description Determines whether filtering is enabled. */
    filterable: boolean;
    /** @description Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled. */
    filterInputPlaceholder: string;
    /** @description Determines the filtering mode of the drop down list. */
    filterMode: FilterMode | string;
    /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
    grouped: boolean;
    /** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
    groupMember: string | null;
    /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
    hint: string;
    /** @description Determines the visibility of the horizontal Scroll bar inside the drop down. */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility | string;
    /** @description Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input. */
    inputMember: string;
    /** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
    incrementalSearchDelay: number;
    /** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
    incrementalSearchMode: SearchMode | string;
    /** @description Sets the height for all list items. Used only when virtualization is enabled. */
    itemHeight: number | null;
    /** @description Determines the item width measuring algorithm. */
    itemMeasureMode: ListItemMeasureMode | string;
    /** @description A getter that returns an array of all List items inside the drop down. */
    items: any;
    /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items. */
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
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Determines whether the popup is opened or not. */
    opened: boolean;
    /** @description Determines the element's placeholder, displayed in the element's selection field. */
    placeholder: string;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
    resizeIndicator: boolean;
    /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
    resizeMode: ResizeMode | string;
    /** @description Determines what will be displayed in the dropDown selection field. */
    selectionDisplayMode: SelectionDisplayMode | string;
    /** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
    selectedIndexes: number[];
    /** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
    selectedValues: string[];
    /** @description Determines how many items can be selected. */
    selectionMode: ListSelectionMode | string;
    /** @description Determines whether the items are sorted alphabetically or not */
    sorted: boolean;
    /** @description Determines sorting direction - ascending(asc) or descending(desc) */
    sortDirection: string;
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    theme: string;
    /** @description Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'. */
    tokenTemplate: any;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[]. */
    value: any;
    /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
    valueMember: string;
    /** @description Determines the visibility of the vertical scroll bar. */
    verticalScrollBarVisibility: VerticalScrollBarVisibility | string;
    /** @description Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded. */
    virtualized: boolean;
    /** @description This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
    *  @param event. The custom event. 	*/
    onActionButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
    *   addedItems - An array of List items that have been selected.
    *   disabled - A flag indicating whether or not the item that caused the change event is disabled.
    *   index - The index of the List item that triggered the event.
    *   label - The label of the List item that triggered the event.
    *   removedItems - An array of List items that have been unselected before the event was fired.
    *   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
    *   value - The value of the List item that triggered the event.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down list is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down list is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user starts resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the resizing of the drop down is finished.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user scrolls to the end of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollBottomReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user scrolls to the start of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollTopReached: EventEmitter<CustomEvent>;
    /** @description Appends a ListItem to the end of the list of items inside element.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node: any): Promise<any>;
    /** @description Removes all items from the drop down list.
    */
    clearItems(): void;
    /** @description Unselects all items.
    */
    clearSelection(): void;
    /** @description Closes the dropDown list.
    */
    close(): void;
    /** @description Ensures the desired item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item: HTMLElement | string): void;
    /** @description Returns an item instance from the dropDown list.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    getItem(value: any): Promise<any>;
    /** @description Inserts a new item at a specified position.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    insert(position: number, value: any): void;
    /** @description Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node: any, referenceNode: any): Promise<any>;
    /** @description Opens the dropDown list.
    */
    open(): void;
    /** @description Removes an item at a specified position.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position: number): void;
    /** @description Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node: any): Promise<any>;
    /** @description Selects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    select(item: string | HTMLElement): void;
    /** @description Unselects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item: string | HTMLElement): void;
    /** @description Updates an item from the dropDown list.
    * @param {number} position. The position where the item must be updated.
    * @param {any} value. The value of the updated item.
    */
    update(position: number, value: any): void;
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
