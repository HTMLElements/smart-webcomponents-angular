import { ListItem } from './../index';
import { ListItemDisplayMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ListItemDisplayMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ListItem } from './../index';
export declare class ListItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ListItem>);
    private eventHandlers;
    nativeElement: ListItem;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description  */
    alternationIndex: number;
    /** @description  */
    color: string;
    /** @description  */
    displayMode: ListItemDisplayMode | string;
    /** @description  */
    grouped: boolean;
    /** @description  */
    selected: boolean;
    /** @description  */
    value: string;
    /** @description  */
    label: string;
    /** @description  */
    details: string;
    /** @description  */
    group: string;
    /** @description  */
    hidden: boolean;
    /** @description  */
    readonly: boolean;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
