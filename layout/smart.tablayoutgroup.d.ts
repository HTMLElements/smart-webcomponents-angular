import { TabLayoutGroup } from './../index';
import { TabLayoutGroupOrientation, TabLayoutGroupPosition } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { TabLayoutGroupOrientation, TabLayoutGroupPosition, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { TabLayoutGroup } from './../index';
export declare class TabLayoutGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<TabLayoutGroup>);
    private eventHandlers;
    nativeElement: TabLayoutGroup;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets the modifiers of the Layout item. */
    modifiers: any;
    /** @description Determines the min size of the item. */
    min: number;
    /** @description Determines the label of the item. */
    label: string;
    /** @description Determines the group orientation. */
    orientation: TabLayoutGroupOrientation | string;
    /** @description Determines the position of the tab items group. */
    position: TabLayoutGroupPosition | string;
    /** @description Determines the size of the item. */
    size: any;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
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
