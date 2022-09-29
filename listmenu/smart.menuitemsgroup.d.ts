import { MenuItemsGroup } from './../index';
import { MenuCheckMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { MenuCheckMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { MenuItemsGroup } from './../index';
export declare class MenuItemsGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<MenuItemsGroup>);
    private eventHandlers;
    nativeElement: MenuItemsGroup;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description  */
    checkable: boolean;
    /** @description  */
    checked: boolean;
    /** @description  */
    checkMode: MenuCheckMode | string;
    /** @description Enables or disables element. */
    disabled: boolean;
    /** @description  */
    dropDownHeight: number;
    /** @description  */
    expanded: boolean;
    /** @description  */
    label: any;
    /** @description  */
    level: number;
    /** @description  */
    separator: boolean;
    /** @description  */
    value: any;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
