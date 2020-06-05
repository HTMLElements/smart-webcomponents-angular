import { Layout } from './../index';
import { Animation, Orientation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, Orientation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Layout } from './../index';
export declare class LayoutComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Layout>);
    private eventHandlers;
    nativeElement: Layout;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation;
    /** @description Determines the options that will be available for selection inside the context menu. */
    contextMenuDataSource: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets Layout's data source. */
    dataSource: any;
    /** @description Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
    itemLabel: string;
    /** @description Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
    itemGroupLabel: string;
    /** @description A getter that returns an array of all Splitter items inside the Layout. */
    items: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    messages: any;
    /** @description Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource. */
    orientation: Orientation;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Determines the resize step during reisizing */
    resizeStep: number;
    /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
    liveResize: boolean;
    /** @description Determines the placeholder text of the empty items. */
    placeholder: string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it. */
    selectedIndex: any;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when resizing begins.
    *  @param event. The custom event. 	*/
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when resizing finishes.
    *  @param event. The custom event. 	*/
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
    *   item - The Splitter item that was the target of a change.
    *   type - A description of the operation that has cause the change.
    */
    onStateChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
    *   oldSelectedIndex - The Splitter item that was previously selected.
    *   selectedIndex - The Splitter item that is currently selected.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a the context menu is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a the context menu is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an option from the context menu has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	label, 	value)
    *   target - The Splitter item that was the target of the context menu opening.
    *   item - The Context menu item that was clicked.
    *   label - The label of the context menu that was clicked.
    *   value - The value of the context menu that was clicked.
    */
    onMenuItemClick: EventEmitter<CustomEvent>;
    /** @description Appends a new node.
    * @param {Node} node. The node to append
    * @returns {Node}
  */
    appendChild(node: any): Promise<any>;
    /** @description Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
    * @param {Node} newNode. The  "smart-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode: any, referenceNode?: any): Promise<any>;
    /** @description Removes a child "smart-splitter-item" node from the Layout.
    * @param {Node} node. The "smart-splitter-item" node to remove.
    * @returns {Node}
  */
    removeChild(node: any): Promise<any>;
    /** @description Returns a Splitter Item according to the index that is passed as an argument.
    * @param {any} index. The index of an item.
    */
    getItem(index: any): void;
    /** @description Returns the index of a Splitter Item that is passed as an argument.
    * @param {any} item. The index of the Splitter item that is passed as an argument.
    */
    getItemIndex(item: any): void;
    /** @description Insert a new Splitter item at a given position.
    * @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
    * @param {number | string} index. The index at which a new item will be inserted.
    * @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
    */
    insert(item: any, index: number | string, position?: string): void;
    /** @description Removes a Splitter item from the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    */
    removeItem(index: any): void;
    /** @description Removes all items from the Layout
    */
    removeAll(): void;
    /** @description Selects a Splitter item from the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    */
    select(index: any): void;
    /** @description Unselects the selected item inside the element.
    */
    unselect(): void;
    /** @description Updates a Splitter item that is inside the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    * @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
    */
    updateItem(index: any, settings: any): void;
    /** @description Clears the localStorage of any previous cached states of the element according to it's id.
    */
    clearState(): void;
    /** @description Saves the current state of the element to LocalStorage. Requires an id to be set to the element.
    * @returns {any}
  */
    saveState(): Promise<any>;
    /** @description Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element.
    * @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
    */
    loadState(state?: any[]): void;
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
