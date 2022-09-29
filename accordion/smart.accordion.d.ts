import { Accordion } from './../index';
import { Animation, AccordionExpandMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, AccordionExpandMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Accordion } from './../index';
export declare class AccordionComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Accordion>);
    private eventHandlers;
    nativeElement: Accordion;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines the data source that will be loaded to the Accordion. */
    dataSource: any;
    /** @description Enables or disables the accordion. Disabled elements can not be interacted with. */
    disabled: boolean;
    /** @description Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode. */
    expandedIndexes: number[];
    /** @description Sets or gets the expand mode. Expand mode determines how the items will expand or collapse. */
    expandMode: AccordionExpandMode | string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines if the element is readonly or not. If the element true, users cannot interact with it. */
    readonly: boolean;
    /** @description Enables or disables accordion reordering. */
    reorder: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Determines whether the element can be focused or not. */
    unfocusable: boolean;
    /** @description This event is triggered when an item is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item
    */
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item is going to be collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item
    */
    onCollapsing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a reordering operation is completed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
    *   position - The current top and left position of the item that was dragged.
    *   target - The item that was dragged.
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item.
    */
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a reordering operation is started.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
    *   position - The current top and left position of the item that is about to be dragged.
    *   target - The item that is about to be dragged.
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item.
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
    *   position - The current top and left position of the item.
    *   target - The item that was dragged.
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item.
    */
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item is going to be expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item
    */
    onExpanding: EventEmitter<CustomEvent>;
    /** @description Collapses an item at a specified index.
    * @param {number} position. The index of the collapsed item.
    */
    collapse(position: number): void;
    /** @description Expands an item at a specified index.
    * @param {number} position. The index of the expanded item.
    */
    expand(position: number): void;
    /** @description Inserts a new item at a specified index.
    * @param {number} index. The index where the item must be inserted.
    * @param {any} item. An object containing the values for the properties of the new item to be inserted.
    */
    insert(index: number, item: any): void;
    /** @description Removes an item at a specified index.
    * @param {number} position. The index of the item to be removed.
    */
    removeAt(position: number): void;
    /** @description Updates an item from the element.
    * @param {number} index. The index of the item to be updated.
    * @param {any} settings. An object containing the values for the properties of the item that will be updated.
    */
    update(index: number, settings: any): void;
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
