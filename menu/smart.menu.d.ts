import { Menu } from './../index';
import { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Menu } from './../index';
export declare class MenuComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Menu>);
    private eventHandlers;
    nativeElement: Menu;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'. */
    autoCloseDelay: number;
    /** @description If set to true, on mouseenter, the element receives focus automatically. */
    autoFocusOnMouseenter: boolean;
    /** @description Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective smart-menu-items-group. */
    checkable: boolean;
    /** @description Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable. */
    checkboxes: boolean;
    /** @description Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective smart-menu-items-group. */
    checkMode: MenuCheckMode | string;
    /** @description Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown'). */
    closeAction: MenuCloseAction | string;
    /** @description Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items. */
    dataSource: any;
    /** @description Enables or disables element. */
    disabled: boolean;
    /** @description Determines the field in the data source that corresponds to an item's label. */
    displayMember: string;
    /** @description Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM. */
    dropDownAppendTo: string | HTMLElement;
    /** @description If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    dropDownOverlay: boolean;
    /** @description Determines the opening direction of Menu dropdowns. */
    dropDownPosition: MenuDropDownPosition | string;
    /** @description A getter that returns an array of all Menu items. */
    items: any;
    /** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
    itemsMember: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id. */
    minimizeIconTemplate: string;
    /** @description Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically. */
    minimizeWidth: number;
    /** @description Determines the menu's display mode. */
    mode: MenuMode | string;
    /** @description Opens or closes thte menu when it's in 'dropDown' mode. */
    opened: boolean;
    /** @description Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null. */
    overflow: Overflow | string;
    /** @description If set to true, prevents the closing of the Menu or its dropdowns when Menu items are checked/unchecked. */
    preventCloseOnCheck: boolean;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the menu's selection mode. */
    selectionMode: MenuSelectionMode | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Determines the field in the data source that corresponds to an item's value. */
    valueMember: string;
    /** @description This event is triggered when the menu is closed. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	trigger)
    *   trigger - Indicates whether the event was called from inside the element or programatically.
    */
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-menu-items-group is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was collapsed.
    *   label - The label of the toggled item that was collapsed.
    *   value - The value of the toggled item that was collapsed.
    *   path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that was collapsed.
    */
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-menu-items-group is collapsing.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that is going to be collapsed.
    *   label - The label of the toggled item that is going to be collapsed.
    *   value - The value of the toggled item that is going to be collapsed.
    *   path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that is going to be collapsed.
    */
    onCollapsing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-menu-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was expanded.
    *   label - The label of the toggled item that was expanded.
    *   value - The value of the toggled item that was expanded.
    *   path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that was expanded.
    */
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered before a smart-menu-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that is going to be expanded.
    *   label - The label of the toggled item that is going to be expanded.
    *   value - The value of the toggled item that is going to be expanded.
    *   path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that is going to be expanded.
    */
    onExpanding: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a menu item check state is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
    *   item - The menu item which state was changed.
    *   label - The label of the item which state was changed.
    *   value - The value of the item which state was changed.
    *   checked - The checked state of the toggled item. If false the item is not toggled.
    */
    onItemCheckChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a menu item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The menu item that is toggled.
    *   label - The label of the toggled item.
    *   value - The value of the toggled item.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the menu is opened. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description Adds an item to the menu.
    * @param {HTMLElement} Item. A smart-menu-item to add to the Menu.
    * @param {HTMLElement | string} Parent?. The smart-menu-items-group or its id or numeric path to add the item to.
    */
    addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
    /** @description Checks an item.
    * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
    */
    checkItem(item: HTMLElement | string): void;
    /** @description Clears all Menu items.
    */
    clear(): void;
    /** @description Clicks on an item programatically.
    * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
    */
    clickItem(item: HTMLElement | string): void;
    /** @description Closes the Menu when mode is 'dropDown'.
    */
    close(): void;
    /** @description Collapses an item.
    * @param {HTMLElement | string} item?. smart-menu-item/smart-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item?: HTMLElement | string, animation?: boolean): void;
    /** @description Expands an item.
    * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item: HTMLElement | string, animation?: boolean): void;
    /** @description Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item
    * @returns {HTMLElement}
  */
    getItem(id: any): Promise<any>;
    /** @description Maximizes the Menu.
    */
    maximize(): void;
    /** @description Minimizes the Menu.
    */
    minimize(): void;
    /** @description Opens the Menu when mode is 'dropDown'.
    * @param {number} left. Horizontal position
    * @param {number} top. Vertical position
    */
    open(left: number, top: number): void;
    /** @description Removes an item from the menu.
    * @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group or its id or numeric path to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** @description Unchecks an item.
    * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path)
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
