import { Array } from './../index';
import { Animation, ArrayArrayIndexingMode, ArrayType } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ArrayArrayIndexingMode, ArrayType, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Array } from './../index';
export declare class ArrayComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Array>);
    private eventHandlers;
    nativeElement: Array;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets the indexing mode of the Array. */
    arrayIndexingMode: ArrayArrayIndexingMode | string;
    /** @description A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'. */
    changeProperty: any;
    /** @description Sets or gets the number of visible columns in the Array. */
    columns: number;
    /** @description Sets or gets the default value of inner elements when type is 'custom'. */
    customWidgetDefaultValue: any;
    /** @description Sets or gets the dimensions of the Array. */
    dimensions: number;
    /** @description Sets or gets disabled state of the Array. */
    disabled: boolean;
    /** @description Sets or gets the height of Array elements (row height). */
    elementHeight: number;
    /** @description A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function. */
    elementTemplate: any;
    /** @description Sets or gets the width of Array elements (column width). */
    elementWidth: number;
    /** @description A callback function that can be used for getting the value of element widgets. */
    getElementValue: any;
    /** @description Sets or gets the height of indexers. */
    indexerHeight: number;
    /** @description Sets or gets the width of indexers. */
    indexerWidth: number;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the number of visible rows in the Array. */
    rows: number;
    /** @description A callback function that can be used for setting the value of element widgets. */
    setElementValue: any;
    /** @description Sets or gets whether to display the horizontal scrollbar. */
    showHorizontalScrollbar: boolean;
    /** @description Sets or gets whether to display the array indexers. */
    showIndexDisplay: boolean;
    /** @description Sets or gets whether to highlight selected elements. */
    showSelection: boolean;
    /** @description Sets or gets whether to display the vertical scrollbar. */
    showVerticalScrollbar: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets or gets the data type and element widgets to be used in the Array. */
    type: ArrayType | string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the Array. */
    value: any;
    /** @description This event is triggered when a visible row or column has been added or removed.
    *  @param event. The custom event. 	*/
    onArraySizeChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the value of the Array is changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a dimension has been added or removed.
    *  @param event. The custom event. 	*/
    onDimensionChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an Array element has been clicked.
    *  @param event. The custom event. 	*/
    onElementClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the Array is scrolled with one of the scrollbars.
    *  @param event. The custom event. 	*/
    onScroll: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the column width or the row height has been changed.
    *  @param event. The custom event. 	*/
    onSizeChange: EventEmitter<CustomEvent>;
    /** @description Adds a dimension to the array. Note: when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    addDimension(): void;
    /** @description Clears the selection.
    */
    clearSelection(): void;
    /** @description Copies the value of an Array element to the clipboard.
    * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
    * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
    */
    copyElementValueToClipboard(Rowvisibleindex: number, Columnvisibleindex: number): void;
    /** @description Deletes a column in the value array.
    * @param {number} Columnindex. Index of the column to be deleted.
    */
    deleteColumn(Columnindex: number): void;
    /** @description Deletes a row in the value array.
    * @param {number} Rowindex. Index of the row to be deleted.
    */
    deleteRow(Rowindex: number): void;
    /** @description Empties the value array.
    */
    emptyArray(): void;
    /** @description Designates the end of a selection started with the method startSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
    */
    endSelection(Rowboundindex: number, Columnboundindex: number): void;
    /** @description Returns the HTML element at the specified visible row and column coordinates of the Array.
    * @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
    * @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
    * @returns {HTMLElement}
  */
    getElement(RowVisibleIndex: any, ColumnVisibleIndex: any): Promise<any>;
    /** @description Returns an object with the values of the Array element width and height.
    * @returns {any}
  */
    getElementSize(): Promise<any>;
    /** @description Gets an array with the values of all indexers.
    * @returns {any[]}
  */
    getIndexerValue(): Promise<any>;
    /** @description Returns an HTML element from the Array at the specified page coordinates and other information about this element.
    * @param {number} Pagexcoordinate.
    * @param {number} Pageycoordinate.
    * @returns {any}
  */
    hitTest(Pagexcoordinate: any, Pageycoordinate: any): Promise<any>;
    /** @description Inserts a column in the value array before the specified column. The new column is filled with default values.
    * @param {number} Columnindex. Index of the column to add a new column before.
    */
    insertColumnBefore(Columnindex: number): void;
    /** @description Inserts a row in the value array before the specified row. The new row is filled with default values.
    * @param {number} Rowindex. Index of the row to add a new row before.
    */
    insertRowBefore(Rowindex: number): void;
    /** @description Sets all value array members to the default value.
    */
    reinitializeArray(): void;
    /** @description Removes a dimension from the array. Note: when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    removeDimension(): void;
    /** @description Sets the array's type to 'none'.
    */
    reset(): void;
    /** @description Resizes Array elements (changes both the column width and the row height).
    * @param {number} Elementwidth. The new element (column) width.
    * @param {number} Elementheight. The new element (row) height.
    */
    resizeElement(Elementwidth: number, Elementheight: number): void;
    /** @description Selects all members of the array.
    */
    selectAll(): void;
    /** @description Selects an element with the passed row and column bound indexes.
    * @param {number} Rowboundindex.
    * @param {number} Columnboundindex.
    */
    selectElement(Rowboundindex: number, Columnboundindex: number): void;
    /** @description Sets the column (element) width.
    * @param {number} Columnwidth. The new column width.
    */
    setColumnWidth(Columnwidth: number): void;
    /** @description Sets the default value of array members.
    * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
    */
    setDefaultValue(Defaultvalue: any): void;
    /** @description Sets the value of one or more Array indexers.
    * @param {any[]} Settings. An array of objects with the fields index and value.
    */
    setIndexerValue(Settings: any[]): void;
    /** @description Sets the row (element) height.
    * @param {number} Rowheight. The new row height.
    */
    setRowHeight(Rowheight: number): void;
    /** @description Makes the last array member visible.
    */
    showLastElement(): void;
    /** @description Designates the start of a selection. To end a selection, call endSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
    */
    startSelection(Rowboundindex: number, Columnboundindex: number): void;
    /** @description Increases or decreases the visual gap between Array elements.
    */
    toggleElementGap(): void;
    /** @description Transposes the array. Applicable only when dimensions is 2 (2D array).
    */
    transposeArray(): void;
    /** @description Sets or gets the value of the whole array or sets the value of a member of the array.
    * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
    * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
    * @returns {any[]}
  */
    val(Newvalue?: any, Elementindexes?: any): Promise<any>;
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
