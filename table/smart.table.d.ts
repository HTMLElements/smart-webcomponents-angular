import { Table } from './../index';
import { Animation, TableSortMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TableSortMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Table } from './../index';
export declare class TableComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Table>);
    private eventHandlers;
    nativeElement: Table;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation;
    /** @description Disables the interaction with the element. */
    disabled: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Table columns */
    columns: any;
    /** @description Determines the data source of the table component. */
    dataSource: any;
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description The name of the element. Used when submiting data inside a Form. */
    name: string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the sorting mode of the Table. */
    sortMode: TableSortMode;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Clears the Table sorting.
    */
    clearSort(): void;
    /** @description Binds the table to the data source or rebinds it.
    */
    dataBind(): void;
    /** @description Focuses the table.
    */
    focus(): void;
    /** @description Refreshes the table.
    */
    refresh(): void;
    /** @description Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order.
    */
    sortBy(columnDataField: string, sortOrder?: string): void;
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
