import { SplitterItem } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { SplitterItem } from './../index';
export declare class SplitterItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<SplitterItem>);
    private eventHandlers;
    nativeElement: SplitterItem;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Determines of the item is collapsed or not. */
    collapsed: boolean;
    /** @description Determines of the item can be collapsed. If set to false, the item can't be collapsed */
    collapsible: boolean;
    /** @description Determines the content of the splitter items */
    content: any;
    /** @description Determines of the item can be resized or not. */
    locked: boolean;
    /** @description Determines the max size of the item. */
    max: string;
    /** @description Determines the min size of the item */
    min: string;
    /** @description Determines the size of the item. */
    size: string;
    /** @description Collapses the item.
    * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
    */
    collapse(far: string): void;
    /** @description Expands the item if it's collapsed.
    */
    expand(): void;
    /** @description Locks the item so it can no longer change it's size.
    */
    lock(): void;
    /** @description Unlocks a previously locked item.
    */
    unlock(): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
