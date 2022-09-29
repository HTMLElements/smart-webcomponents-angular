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
    animation: Animation | string;
    /** @description Determines the options that will be available for selection inside the context menu. */
    contextMenuDataSource: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets Layout's data source. */
    dataSource: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    messages: any;
    /** @description Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource. */
    orientation: Orientation | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Determines whether splitting is live or not. */
    allowLiveSplit: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the selected item. */
    selectedIndex: any;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered after resizing is completed.
    *  @param event. The custom event. 	*/
    onResize: EventEmitter<CustomEvent>;
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
    /** @description Returns a Layout item according to the index that is passed.
    * @param {number | string} index. The index of an item.
    */
    getItem(index: number | string): void;
    /** @description Refreshes the Layout
    */
    refresh(): void;
    /** @description Inserts a new item inside the Layout.
    * @param {any} type. The index of an item to be removed or an instance of JQX.SplitterItem.
    * @param {string | undefined} position?. A string that represents the position where the new item will be created.
    */
    createLayoutItem(type: any, position?: string | undefined): void;
    /** @description Moves all children from one item to another.
    * @param {any} oldItem. The source item that will have it's content removed.
    * @param {any} newItem. The host item that will have it's content replaced.
    */
    moveChildren(oldItem: any, newItem: any): void;
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
