import { PivotTable } from './../index';
import { Animation, PivotTableColumnTotalsPosition, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, PivotTableColumnAlign, PivotTableColumnDataType, PivotTableColumnSummary, PivotTableColumnTotalsPosition, PivotTableConditionalFormattingCondition, PivotTableConditionalFormattingFontFamily, PivotTableConditionalFormattingFontSize, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { PivotTable } from './../index';
export declare class PivotTableComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<PivotTable>);
    private eventHandlers;
    nativeElement: PivotTable;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets whether the reordering of columns is enabled. */
    columnReorder: boolean;
    /** @description Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated. */
    columns: PivotTableColumn[];
    /** @description Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated. */
    columnTotals: boolean;
    /** @description Sets or gets the position of total columns (shown when columnTotals is enabled). */
    columnTotalsPosition: PivotTableColumnTotalsPosition | string;
    /** @description Sets or gets details about conditional formatting to be applied to the PivotTable's cells. */
    conditionalFormatting: PivotTableConditionalFormatting[];
    /** @description Determines the original tabular data source of the PivotTable. */
    dataSource: any;
    /** @description Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order). */
    defaultSortByRowGroups: boolean;
    /** @description Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering. */
    designer: boolean;
    /** @description Sets or gets the position of the PivotTable's designer (shown when designer is enabled). */
    designerPosition: PivotTableDesignerPosition | string;
    /** @description Disables the interaction with the element. */
    disabled: boolean;
    /** @description If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed. */
    drillDown: boolean;
    /** @description If set, shows an export button in the drill down dialog. */
    drillDownDataExport: PivotTableDrillDownDataExport | string;
    /** @description Sets or gets the drill down table export file name. */
    drillDownDataExportName: string;
    /** @description Sets or gets whether sorting based on columns in classic row groups layout mode is enabled. */
    drillDownTableInit: {
        (table: HTMLElement): void;
    };
    /** @description Sets or gets whether the PivotTable's column header is sticky/frozen. */
    drillDownCustomAction: {
        (originalRecords: []): void;
    };
    /** @description Sets or gets whether to show a Grand total row aggregating the data of all rows. */
    enableSortByRowGroups: boolean;
    /** @description Sets or gets the way row nesting (based on rowGroup columns) is displayed. */
    freezeHeader: boolean;
    /** @description Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected. */
    getDefaultSummaryFunction: {
        (column: PivotTableColumn): string;
    };
    /** @description Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns. */
    grandTotal: boolean;
    /** @description Sets or gets whether navigation with the keyboard is enabled in the PivotTable. */
    groupLayout: PivotTableGroupLayout | string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    hideCellSelectionTooltip: boolean;
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    hideEmptyRows: boolean;
    /** @description Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty. */
    keyboardNavigation: boolean;
    /** @description Sets or gets the page size (when paging is enabled). */
    locale: string;
    /** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
    messages: any;
    /** @description Sets or gets whether paging is enabled. */
    nullDefaultValue: number;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    onCellRender: {
        (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void;
    };
    /** @description Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns. */
    onColumnRender: {
        (settings: {
            text: string;
            cell: HTMLTableCellElement;
            column: PivotTableColumn;
            fullDefinition: any;
        }): void;
    };
    /** @description Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false. */
    onInit: {
        (): void;
    };
    /** @description Sets or gets whether to show row total columns for each summary column. */
    pageSize: PivotTablePageSize | string;
    /** @description Sets or gets the position of row total columns (shown when rowTotals is enabled). */
    pageIndex: number;
    /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
    paging: boolean;
    /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
    rightToLeft: boolean;
    /** @description Determines the sorting mode of the PivotTable. */
    rowSort: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    rowSummary: boolean;
    /** @description Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings. */
    rowTotals: boolean;
    /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
    rowTotalsPosition: PivotTableRowTotalsPosition | string;
    /** @description undefined */
    selection: boolean;
    /** @description undefined */
    selectionMode: PivotTableSelectionMode | string;
    /** @description undefined */
    sortMode: PivotTableSortMode | string;
    /** @description undefined */
    theme: string;
    /** @description undefined */
    toolbar: boolean;
    /** @description undefined */
    tooltip: boolean;
    /** @description This event is triggered when a cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's dynamic column.
    *   row - The data of the cell's row.
    */
    onCellClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a summary column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
    *   columnDefinition - An object detailing the clicked dynamic column.
    *   dataField - The data field of the cell's original column.
    */
    onColumnClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a row has been collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The (aggregated) data of the collapsed row.
    */
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a total column has been collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
    *   columnDefinition - The definition of the collapsed total column.
    */
    onCollapseTotalColumn: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a row has been expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The (aggregated) data of the expanded row.
    */
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a total column has been expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
    *   columnDefinition - The definition of the expanded total column.
    */
    onExpandTotalColumn: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a filtering-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
    *   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
    */
    onSort: EventEmitter<CustomEvent>;
    /** @description Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField: string, filter: any): void;
    /** @description Clears applied filters.
    */
    clearFilters(): void;
    /** @description Clears selection.
    */
    clearSelection(): void;
    /** @description Clears the PivotTable sorting.
    */
    clearSort(): void;
    /** @description Collapses all rows (when multiple row groups are applied).
    */
    collapseAllRows(): void;
    /** @description Collapses a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
    */
    collapseRow(rowId: string | number): void;
    /** @description Expands all rows (when multiple row groups are applied).
    */
    expandAllRows(): void;
    /** @description Expands a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
    */
    expandRow(rowId: string | number): void;
    /** @description Exports the PivotTable's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: any, fileName: any, callback?: any): Promise<any>;
    /** @description Returns the current dynamic pivot columns.
    * @returns {any}
  */
    getDynamicColumns(): Promise<any>;
    /** @description Returns an array of selected row ids (when selectionMode is 'many' or 'extended') or an array of selected cell details (when selectionMode is 'cell').
    * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
  */
    getSelection(): Promise<any>;
    /** @description Refreshes the PivotTable.
    */
    refresh(): void;
    /** @description Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** @description Selects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    select(rowId: string | number | (string | number)[], dataField?: string): void;
    /** @description Sorts by a summary or group column.
    * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDefinition: any, sortOrder?: string): void;
    /** @description Unselects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    unselect(rowId: string | number | (string | number)[], dataField?: string): void;
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
