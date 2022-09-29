import { ListMenu } from './../index';
import { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ListMenuScrollMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ListMenuScrollMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ListMenu } from './../index';
export declare class ListMenuComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ListMenu>);
    private eventHandlers;
    nativeElement: ListMenu;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines whether the element becomes focused on hover or not. */
    autoFocusOnMouseenter: boolean;
    /** @description Allows top-level ListMenu items to be checkable. */
    checkable: boolean;
    /** @description Sets or gets whether checkboxes and radio buttons can be displayed in the top level menu groups. This property is applicable only to the ListMenu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable. */
    checkboxes: boolean;
    /** @description Sets the check mode of top-level ListMenu items(groups). */
    checkMode: MenuCheckMode | string;
    /** @description Determines the data source that will be loaded to the ListMenu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items. */
    dataSource: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Displays or hides the loading indicator. Loading indicator is hidden by default. */
    displayLoadingIndicator: boolean;
    /** @description Determines the field in the data source that corresponds to an item's label. */
    displayMember: string;
    /** @description Sets custom outer container where the minimized dropdown will be appednded. By default it is in the ListMenu. The value of the property can be an HTML element or the id of an HTML element. */
    dropDownAppendTo: string | HTMLElement;
    /** @description If this property is enabled, when the element's minimized dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    dropDownOverlay: boolean;
    /** @description Sets or gets the opening direction of the ListMenu minimized dropdown. */
    dropDownPosition: MenuDropDownPosition | string;
    /** @description Enables or disables scrolling using the mouse wheel through overflowing menu items. */
    enableMouseWheelAction: boolean;
    /** @description Determines whether menu item filtering is enabled. When enabled a filter input is shown at the top of the element. Only items in the current view can be filtered. */
    filterable: boolean;
    /** @description Determines the placeholder for the filter input. */
    filterInputPlaceholder: string;
    /** @description Determines the MenuItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the 'value' property or 'textContent' if the user wants to filter by text inside the MenuItem's content or any other property. */
    filterMember: string;
    /** @description Determines the filtering mode. */
    filterMode: FilterMode | string;
    /** @description If enabled, the items will be grouped by their first letter and sorted. */
    grouped: boolean;
    /** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
    itemsMember: string;
    /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
    loadingIndicatorPlaceholder: string;
    /** @description Determines the position of the loading indicator inside the element. */
    loadingIndicatorPosition: VerticalAlignment | string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Allows to load a custom minimize icon from an HTMLTemplateElement.The property acceps the id of an HTMLTemplateElement or it's direct instance. */
    minimizeIconTemplate: string;
    /** @description Determines the minimum width of the ListMenu at which it will switch from normal to minimized mode. If set to null, the ListMenu does not minimize automatically. */
    minimizeWidth: number | null;
    /** @description Sets or gets the ListMenu's scroll buttons behavior. */
    overflow: Overflow | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
    scrollMode: ListMenuScrollMode | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Determines the field in the data source that corresponds to an item's value. */
    valueMember: string;
    /** @description This event is triggered when a smart-menu-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was expanded.
    *   label - The label of the item that was expanded.
    *   value - The value of the item that was expanded.
    *   path - The path of the item that was expanded, e.g. '0.1', '1.1.2'.
    *   children - The children of the item that was expanded.
    */
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a menu item check state is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
    *   item - The menu item which state was changed.
    *   label - The label of the item which state was changed.
    *   value - The value of the item which state was changed.
    *   checked - The checked state of the toggled item. If false the item is not toggled.
    */
    onItemCheckChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a list menu item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The menu item that was clicked.
    *   label - The label of the clicked item.
    *   value - The value of the clicked item.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user scrolls to the bottom of the ListMenu.
    *  @param event. The custom event. 	*/
    onScrollBottomReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the left inside the ListMenu.
    *  @param event. The custom event. 	*/
    onSwipeleft: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the right inside the ListMenu.
    *  @param event. The custom event. 	*/
    onSwiperight: EventEmitter<CustomEvent>;
    /** @description Adds an item to the list.
    * @param {HTMLElement} Item. A smart-menu-item to add to the List Menu.
    * @param {HTMLElement | string} Parent?. The smart-menu-items-group (or its id or numeric path) to add the item to.
    */
    addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
    /** @description Navigates to the previous page (smart-menu-items-group).
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
    */
    back(animation?: boolean): void;
    /** @description Navigates to a particular page (smart-menu-items-group).
    * @param {string} id. The id or numeric path of a page (smart-menu-items-group).
    */
    changePage(id: string): void;
    /** @description Checks an item.
    * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
    */
    checkItem(item: HTMLElement | string): void;
    /** @description Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item
    * @returns {HTMLElement}
  */
    getItem(id: any): Promise<any>;
    /** @description Maximizes the List Menu.
    */
    maximize(): void;
    /** @description Minimizes the List Menu. An icon is displayed and the menu is hidden when minimized.
    */
    minimize(): void;
    /** @description Removes an item.
    * @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group (or its id or numeric path) to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** @description Unchecks an item.
    * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
    */
    uncheckItem(item: HTMLElement | string): void;
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
