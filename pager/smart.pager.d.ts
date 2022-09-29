import { Pager } from './../index';
import { Animation, PagerAutoEllipsis, LayoutPosition } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, PagerAutoEllipsis, LayoutPosition, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Pager } from './../index';
export declare class PagerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Pager>);
    private eventHandlers;
    nativeElement: Pager;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages. */
    autoEllipsis: PagerAutoEllipsis | string;
    /** @description Enables or disables the pager. */
    disabled: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Handles the position of the navigation buttons. */
    navigationButtonsPosition: LayoutPosition | string;
    /** @description Gets/sets current page index. */
    pageIndex: number;
    /** @description Defines the number of page index selectors. */
    pageIndexSelectors: number;
    /** @description Gets/sets total number of items displayed on page. */
    pageSize: number;
    /** @description Defines the data source of the element's page size selector drop down. */
    pageSizeSelectorDataSource: number[];
    /** @description The number of pages in the element. */
    pagesCount: number;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Controlls displaying of the 'first' and 'last' navigation buttons. */
    showFirstLastNavigationButtons: boolean;
    /** @description Displays text content in navigation buttons instead default icons. */
    showNavigationButtonLabels: boolean;
    /** @description Determines whether the navigation input is displayed. */
    showNavigationInput: boolean;
    /** @description Determines whether the page index selectors are displayed. */
    showPageIndexSelectors: boolean;
    /** @description Determines whether the page size selector is displayed. */
    showPageSizeSelector: boolean;
    /** @description Controlls displaying of the 'previous' and 'next' navigation buttons. */
    showPrevNextNavigationButtons: boolean;
    /** @description Determines whether the page summary is displayed. */
    showSummary: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Gets/sets total number of records whose pagination the Pager controls. Useful when the Pager is part of a more complex element or application. */
    totalRecords: number;
    /** @description This event is triggered when user selects a new item.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when page size is changed.
    *  @param event. The custom event. 	*/
    onPageSizeChanged: EventEmitter<CustomEvent>;
    /** @description Selects first item.
    */
    first(): void;
    /** @description Selects last item.
    */
    last(): void;
    /** @description Navigates to particular item.
    * @param {any} pageIndex.
    */
    navigateTo(pageIndex: any): void;
    /** @description Selects next pager item.
    */
    next(): void;
    /** @description Selects previous pager item.
    */
    prev(): void;
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
