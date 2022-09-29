import { AccordionItem } from './../index';
import { AccordionItemArrow } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { AccordionItemArrow, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { AccordionItem } from './../index';
export declare class AccordionItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<AccordionItem>);
    private eventHandlers;
    nativeElement: AccordionItem;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets header's arrow position. If the value is 'none' the arrow is not shown. */
    arrow: AccordionItemArrow | string;
    /** @description Sets or gets the content if the item. */
    content: string | HTMLElement;
    /** @description Sets or gets the expanded state. */
    expanded: boolean;
    /** @description Sets or gets the focus state. */
    focused: boolean;
    /** @description Sets or gets the label if the item. */
    label: string;
    /** @description This event is triggered when the item is collapsed.
    *  @param event. The custom event. 	*/
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the item is expanded.
    *  @param event. The custom event. 	*/
    onExpand: EventEmitter<CustomEvent>;
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
