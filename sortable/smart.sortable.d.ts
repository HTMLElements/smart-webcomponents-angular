import { Sortable } from './../index';
import { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Sortable } from './../index';
export declare class SortableComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Sortable>);
    private eventHandlers;
    nativeElement: Sortable;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Enables or disables sorting. */
    disabled: boolean;
    /** @description Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle'). */
    dragMode: SortableDragMode | string;
    /** @description Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'. */
    handlePosition: SortableHandlePosition | string;
    /** @description Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'. */
    handleVisibility: SortableHandleVisibility | string;
    /** @description Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the smart-sortable custom element. */
    items: string | null;
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the direction sortable items are stacked and can be dragged. */
    mode: Orientation | string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description This event is triggered when sortable items have been reordered.
    *  @param event. The custom event. 	*/
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description Moves a sortable item from one index to another.
    * @param {number} fromIndex?. The original index of the item.
    * @param {number} toIndex?. The index to move the item to.
    */
    move(fromIndex?: number, toIndex?: number): void;
    /** @description Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element.
    */
    updateItems(): void;
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
