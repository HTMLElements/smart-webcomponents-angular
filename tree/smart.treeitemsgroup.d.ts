import { TreeItemsGroup } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { TreeItemsGroup } from './../index';
export declare class TreeItemsGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<TreeItemsGroup>);
    private eventHandlers;
    nativeElement: TreeItemsGroup;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables element. */
    disabled: boolean;
    /** @description  */
    expanded: boolean;
    /** @description  */
    label: any;
    /** @description  */
    level: number;
    /** @description  */
    selected: boolean;
    /** @description  */
    separator: boolean;
    /** @description  */
    value: any;
    /** @description Disables user interaction with the item. */
    readonly: boolean;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
