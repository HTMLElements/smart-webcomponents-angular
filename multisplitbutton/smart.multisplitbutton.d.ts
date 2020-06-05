import { MultiSplitButton } from './../index';
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { MultiSplitButton } from './../index';
export declare class MultiSplitButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<MultiSplitButton>);
    private eventHandlers;
    nativeElement: MultiSplitButton;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation;
    /** @description Determines a data source used to generate element's permanently visible buttons. */
    buttonsDataSource: string[];
    /** @description Determines the data source of the multi split button's dropdown. */
    dataSource: any;
    /** @description Enables or disables jqxMultiSplitButton. */
    disabled: boolean;
    /** @description Displays or hides the loading indicator */
    displayLoadingIndicator: boolean;
    /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
    displayMember: string;
    /** @description Sets the parent container of the button's dropDown list (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list. */
    dropDownAppendTo: any;
    /** @description Determines position of the drop down button. */
    dropDownButtonPosition: DropDownButtonPosition;
    /** @description Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section. */
    dropDownOpenMode: DropDownOpenMode;
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    dropDownOverlay: boolean;
    /** @description Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size. */
    dropDownPosition: DropDownPosition;
    /** @description Determines whether the Filtering is enabled. */
    filterable: boolean;
    /** @description Determines the filtering for the drop down list mode. */
    filterMode: FilterMode;
    /** @description Determines the placeholder for the drop down list filter input field. */
    filterInputPlaceholder: string;
    /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
    grouped: boolean;
    /** @description Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object. */
    groupMember: string;
    /** @description Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing. */
    incrementalSearchDelay: number;
    /** @description Sets ot gets the mode of the incremental search mode. */
    incrementalSearchMode: SearchMode;
    /** @description Determines the height of the items. */
    itemHeight: number | null;
    /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement. */
    itemTemplate: any;
    /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
    loadingIndicatorPlaceholder: string;
    /** @description The position of the loading indicator. */
    loadingIndicatorPosition: VerticalAlignment;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
    messages: any;
    /** @description Determines whether the popup is opened or closed */
    opened: boolean;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Sets or gets selected indexes of buttons's dropDown. */
    selectedIndexes: number[];
    /** @description Sets or gets selected values of buttons's dropDown. */
    selectedValues: string[];
    /** @description Determines how many items can be selected. */
    selectionMode: MultiSplitButtonSelectionMode;
    /** @description Determines whether the items in the dropDown are sorted alphabetically or not */
    sorted: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Determines the value member of an item. Stored as value in the item object. */
    valueMember: string;
    /** @description Determines weather or not Virtualization is used for the button's dropDownList. */
    virtualized: boolean;
    /** @description This event is triggered when button's dropDown selection is changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when button's dropDown list is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when button's dropDown list is closing.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user clicks any of the element's buttons or button's dropDown items.
    *  @param event. The custom event. 	*/
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when button's dropDown list is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when button's dropDown list is opening.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user scrolls to the end of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollBottomReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user scrolls to the start of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollTopReached: EventEmitter<CustomEvent>;
    /** @description Closes button's dropDown list.
    */
    close(): void;
    /** @description Returns an item instance occured in the element's drop down.
    * @param {string} value. The value of an item from the drop down list or a button.
    * @returns {HTMLElement}
  */
    getItem(value: any): Promise<any>;
    /** @description Returns an array with the items from the split button's dropDown list.
    * @returns {any[]}
  */
    items(): Promise<any>;
    /** @description Inserts a new item at a specified position in the drop down list.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    insert(position: number, value: any): void;
    /** @description Opens the splitButton's dropDown list.
    */
    open(): void;
    /** @description Removes an item at a specified position in the drop down list.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position: number): void;
    /** @description Updates an item from the dropDown list.
    * @param {number} position. The position where the item must be updated.
    * @param {any} value. The value of the updated item.
    */
    update(position: number, value: any): void;
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
