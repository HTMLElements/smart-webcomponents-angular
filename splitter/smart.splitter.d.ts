import { Splitter } from './../index';
import { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Splitter } from './../index';
export declare class SplitterComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Splitter>);
    private eventHandlers;
    nativeElement: Splitter;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content. */
    autoFitMode: SplitterAutoFitMode | string;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets splitter's data source. */
    dataSource: any;
    /** @description A getter that returns an array of all Splitter items. */
    items: any;
    /** @description If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items. */
    keepProportionsOnResize: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    messages: any;
    /** @description Sets or gets splitter's orientation. */
    orientation: Orientation | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size. */
    resizeMode: SplitterResizeMode | string;
    /** @description Determines the resize step during reisizing */
    resizeStep: number;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
    liveResize: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when splitter item is collapsed.
    *  @param event. The custom event. 	*/
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when splitter item is expanded.
    *  @param event. The custom event. 	*/
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered when splitter resizing begins.
    *  @param event. The custom event. 	*/
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when splitter resizing finishes.
    *  @param event. The custom event. 	*/
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description Appends a new node.
    * @param {Node} node. The node to append
    */
    appendChild(node: Node): void;
    /** @description Collapses splitter item.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
    */
    collapse(item: any, far?: boolean): void;
    /** @description Expands the splitter item if possible (if there's enough space available).
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    */
    expand(item: any): void;
    /** @description Hides a splitter bar
    * @param {number} splitterBar. A JQX.SplitterBar instance.
    * @returns {number}
  */
    hideBar(splitterBar: any): Promise<any>;
    /** @description Insert a new Splitter item at a given position.
    * @param {number} index. The index at which a new item will be inserted.
    * @param {any} details. An Object or string used as content if the splitter item.
    */
    insert(index: number, details: any): void;
    /** @description Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
    * @param {Node} newNode. The  "smart-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode: any, referenceNode?: any): Promise<any>;
    /** @description Locks a splitter item so it's size can't change.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockItem(index: number): void;
    /** @description Locks a splitter bar so it can't be dragged.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockBar(index: number): void;
    /** @description Removes a Splitter item.
    * @param {number} index. An item to be removed.
    */
    removeAt(index: number): void;
    /** @description Removes all items from the Splitter
    */
    removeAll(): void;
    /** @description Removes a child "smart-splitter-item" node.
    * @param {Node} node. The "smart-splitter-item" node to remove.
    * @returns {Node}
  */
    removeChild(node: any): Promise<any>;
    /** @description Refreshes the Splitter
    */
    refresh(): void;
    /** @description Unhides a Splitter Bar
    * @param {number} splitterBar. An instance of a splitter bar.
    */
    showBar(splitterBar: number): void;
    /** @description Unlocks a previously locked splitter item.
    * @param {number} item. The index of a Splitter Item or it's instance.
    */
    unlockItem(item: number): void;
    /** @description Unlocks a previously locked splitter bar.
    * @param {number} item. The index of a Splitter Bar or it's instance.
    */
    unlockBar(item: number): void;
    /** @description Updates the properties of a Splitter item inside the Splitter.
    * @param {any} item. The index of a JQX.SplitterItem or it's instance.
    * @param {any} settings. An object containing the properties of a JQX.SplitterItem.
    */
    update(item: any, settings: any): void;
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
