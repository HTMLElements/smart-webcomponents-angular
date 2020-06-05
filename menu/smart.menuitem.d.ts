import { MenuItem } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { MenuItem } from './../index';
export declare class MenuItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<MenuItem>);
    private eventHandlers;
    nativeElement: MenuItem;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description  */
    checked: boolean;
    /** @description Enables or disables element. */
    disabled: boolean;
    /** @description  */
    label: any;
    /** @description  */
    level: number;
    /** @description  */
    separator: boolean;
    /** @description  */
    shortcut: string;
    /** @description  */
    value: any;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
