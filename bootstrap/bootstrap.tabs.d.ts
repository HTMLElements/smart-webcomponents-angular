import { BootstrapTabs } from './../index';
import { BootstrapTabsAlignment, BootstrapTabsListType, BootstrapTabsStyleMode, BootstrapTabsTabType } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapTabsAlignment, BootstrapTabsListType, BootstrapTabsStyleMode, BootstrapTabsTabType, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapTabs } from './../index';
export declare class BootstrapTabsComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapTabs>);
    private eventHandlers;
    nativeElement: BootstrapTabs;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets the tabs alignment */
    alignment: BootstrapTabsAlignment | string;
    /** @description Enables or disables the tabs.  */
    disabled: boolean;
    /** @description Sets the tabs fill */
    fill: boolean;
    /** @description Sets the tabs justified */
    justified: boolean;
    /** @description Sets or gets the tab type. */
    listType: BootstrapTabsListType | string;
    /** @description Sets or gets the style mode of the tabs. */
    styleMode: BootstrapTabsStyleMode | string;
    /** @description Sets or gets the size mode of the element. */
    sizeMode: string;
    /** @description Sets or gets the tab type . */
    tabType: BootstrapTabsTabType | string;
    /** @description Show event.
    *  @param event. The custom event. 	*/
    onShow: EventEmitter<CustomEvent>;
    /** @description Shows an item
    * @param {HTMLElement} item. The tab item to be shown.
    */
    show(item: HTMLElement): void;
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
