import { ListBox } from './../index';
import { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility, ListBoxItem } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility, ListBoxItem, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ListBox } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class ListBoxComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<ListBox>);
    private eventHandlers;
    nativeElement: ListBox;
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
    /** @description Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged. */
    allowDrag: boolean;
    /** @description Enables or disables the ability to drop list items inside the target List box. */
    allowDrop: boolean;
    /** @description Determines the number of color alternations in rows. */
    alternationCount: number;
    /** @description Determines the ending index of color alternations in rows. */
    alternationEnd: number;
    /** @description Determines the starting index of color alternations in rows */
    alternationStart: number;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically. */
    autoSort: boolean;
    /** @description Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
    dataSource: any;
    /** @description Enables or disables the list box. */
    disabled: boolean;
    /** @description Determines whether an indicator will appear during filtering and remote item loading. */
    displayLoadingIndicator: boolean;
    /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
    displayMember: string;
    /** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item. */
    dragFeedbackFormatFunction: any;
    /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset. */
    dragOffset: number[];
    /** @description Determines what happens when an item is dropped. */
    dropAction: ListBoxDropAction | string;
    /** @description Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard. */
    editable: boolean;
    /** @description Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box. */
    filterable: boolean;
    /** @description A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom' */
    filterCallback: any;
    /** @description Determines the filtering mode. */
    filterMode: FilterMode | string;
    /** @description Determines the placeholder for the filter input field. */
    filterInputPlaceholder: string;
    /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
    grouped: boolean;
    /** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
    groupMember: string | null;
    /** @description Determines the visibility of the horizontal Scroll bar. */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility | string;
    /** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
    incrementalSearchDelay: number;
    /** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search. */
    incrementalSearchMode: SearchMode | string;
    /** @description Sets the height for all list box items. Used only when virtualization is enabled. */
    itemHeight: number;
    /** @description Determines the item width measuring algorithm. */
    itemMeasureMode: ListItemMeasureMode | string;
    /** @description A getter that returns an array of all ListBox items. */
    items: ListBoxItem[];
    /** @description A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items. */
    itemTemplate: any;
    /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
    loadingIndicatorPlaceholder: string;
    /** @description Determines the position of the loading indicator. */
    loadingIndicatorPosition: VerticalAlignment | string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Determines the placeholder that will be shown when the List box is empty. */
    placeholder: string;
    /** @description Sets or gets the readonly property. If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
    selectedIndexes: number[];
    /** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
    selectedValues: string[];
    /** @description Determines how many items can be selected depending on the selection mode. */
    selectionMode: ListSelectionMode | string;
    /** @description Determines when listbox selection is achieved - on 'press' or 'release'. */
    selectionChangeAction: ListBoxSelectionChangeAction | string;
    /** @description Determines whether the items are sorted alphabetically or not */
    sorted: boolean;
    /** @description Determines sorting direction - ascending(asc) or descending(desc) */
    sortDirection: string;
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    theme: string;
    /** @description Ensures the item with the target index is in view as the first (top) item in the list box. */
    topVisibleIndex: number;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[]. */
    value: any;
    /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
    valueMember: string;
    /** @description Determines the visibility of the vertical scroll bar. */
    verticalScrollBarVisibility: VerticalScrollBarVisibility | string;
    /** @description Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box. */
    virtualized: boolean;
    /** @description This event is triggered when listbox binding is completed.
    *  @param event. The custom event. 	*/
    onBindingComplete: EventEmitter<CustomEvent>;
    /** @description This event is triggered when selection is changed.
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
    /** @description This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
    *   container - The List box that an item was dragged <strong>to.</strong>
    *   data - An object that contains data about the dragging operation like start position, start time, etc.
    *   item - The List item that was dragged.
    *   originalEvent - That original event that was fired.
    *   previousContainer - The List box that an item was dragged <strong>from</strong>.
    *   target - The event target.
    */
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a List item is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	originalEvent)
    *   data - An object that contains data about the dragging operation like start position, start time, etc.
    *   item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
    *   originalEvent - The original event that initiates the dragging operation.
    */
    onDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
    *   container - The List box that an item was dragged <strong>to.</strong>
    *   data - An object that contains data about the dragging oepration like start position, start time, etc.
    *   item - The List item that was dragged.
    *   originalEvent - That original event that was fired.
    *   previousContainer - The List box that an item was dragged <strong>from</strong>.
    *   target - The event target.
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item has been edited.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	selected, 	disabled, 	index, 	label, 	value)
    *   selected - Indicates whether the List item is selected or not.
    *   disabled - Indicates whether the List item is disabled or not.
    *   index - The index of the List item that was edited.
    *   label - The label of the edited List item.
    *   value - The value of the List item that was edited.
    */
    onItemLabelChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user scrolls to the end of the list.
    *  @param event. The custom event. 	*/
    onScrollBottomReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user scrolls to the beginning of the list.
    *  @param event. The custom event. 	*/
    onScrollTopReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the left, inside the listBox.
    *  @param event. The custom event. 	*/
    onSwipeleft: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the right, inside the listBox.
    *  @param event. The custom event. 	*/
    onSwiperight: EventEmitter<CustomEvent>;
    /** @description Appends a ListItem to the end of the list of items inside element.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node: any): Promise<any>;
    /** @description Removes all items from the listBox.
    */
    clearItems(): void;
    /** @description Unselects all items.
    */
    clearSelection(): void;
    /** @description Ensures the target item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item: HTMLElement | string): void;
    /** @description Returns an item instance from the listBox.
    * @param {string} value. The value of an item from the listBox.
    * @returns {HTMLElement}
  */
    getItem(value: any): Promise<any>;
    /** @description Returns an array of ListBox items.
    * @returns {{label: string, value: string}[]}
  */
    getItems(): Promise<any>;
    /** @description Inserts a new item at a specified index.
    * @param {number} index. The index where the item must be inserted.
    * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
    */
    insert(index: number, items: any): void;
    /** @description Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node: any, referenceNode: any): Promise<any>;
    /** @description Removes an item at a specified index.
    * @param {number} index. The index of the removed item.
    */
    removeAt(index: number): void;
    /** @description Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node: any): Promise<any>;
    /** @description Selects an item from the listBox.
    * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
    */
    select(item: string | number | HTMLElement): void;
    /** @description Unselects an item from the listBox.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item: string | HTMLElement): void;
    /** @description Updates an item from the listBox.
    * @param {number} index. The index of the item that is going to be updated.
    * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
    */
    update(index: number, details: any): void;
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
