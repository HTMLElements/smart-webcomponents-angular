import { TabItem } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { TabItem } from './../index';
export declare class TabItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<TabItem>);
    private eventHandlers;
    nativeElement: TabItem;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Tab item close button state */
    closeButtonHidden: boolean;
    /** @description Disables the Tab item */
    disabled: boolean;
    /** @description Tab item index */
    index: number;
    /** @description Tab item selected state */
    selected: boolean;
    /** @description Tab item label */
    label: string;
    /** @description Tab item content */
    content: any;
    /** @description Tab item label size */
    labelSize: number;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
