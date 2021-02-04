import { Table } from './../index';
import { Animation, TableColumnSizeMode, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TableColumnDataType, TableColumnFreeze, TableColumnResponsivePriority, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableDataSourceSettingsDataFieldDataType, TableDataSourceSettingsDataSourceType, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings, TableDataSourceSettingsDataField, ElementRenderMode } from './../index';
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
    /** @description Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. */
    autoLoadState: boolean;
    /** @description Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property. */
    autoSaveState: boolean;
    /** @description Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported. */
    columnGroups: TableColumnGroup[];
    /** @description Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width. */
    columnMinWidth: string | number;
    /** @description Sets or gets whether the reordering of columns is enabled. */
    columnReorder: boolean;
    /** @description Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based. */
    columnResize: boolean;
    /** @description Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed. */
    columnResizeFeedback: boolean;
    /** @description Describes the columns properties. */
    columns: TableColumn[];
    /** @description Sets or gets details about conditional formatting to be applied to the Table's cells. */
    conditionalFormatting: TableConditionalFormatting[];
    /** @description Sets or gets the column sizing behavior. */
    columnSizeMode: TableColumnSizeMode;
    /** @description Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options. */
    conditionalFormattingButton: boolean;
    /** @description When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to. */
    dataRowId: string;
    /** @description Determines the data source of the table component. The data source of the Table can be a regular Array or a DataAdapter instance. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/. */
    dataSource: any;
    /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
    dataSourceSettings: TableDataSourceSettings;
    /** @description A callback function that can be used to transform the initial dataSource records. If implemented, it is called once for each record (which is passed as an argument). */
    dataTransform: any;
    /** @description Disables the interaction with the element. */
    disabled: boolean;
    /** @description Sets or gets whether the Table can be edited. */
    editing: boolean;
    /** @description Sets or gets the edit mode. */
    editMode: TableEditMode;
    /** @description Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header. */
    filtering: boolean;
    /** @description Sets or gets whether the Table can be filtered via a filter row. */
    filterRow: boolean;
    /** @description Sets or gets the id of an HTML template element to be applied as a custom filter template. */
    filterTemplate: string;
    /** @description Sets or gets the id of an HTML template element to be applied as footer row(s). */
    footerRow: string;
    /** @description Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced). */
    formulas: boolean;
    /** @description Sets or gets whether the Table's footer is sticky/frozen. */
    freezeFooter: boolean;
    /** @description Sets or gets whether the Table's column header is sticky/frozen. */
    freezeHeader: boolean;
    /** @description Sets or gets whether grouping the Table is enabled. */
    grouping: boolean;
    /** @description A callback function that can be used to modify the contents of a grouping header row. By changing the 'label' you modify the rendered grouping value. By changing the 'template' you can modify the entire content including the column and count information. */
    groupFormatFunction: any;
    /** @description Sets or gets the id of an HTML template element to be applied as additional column header(s). */
    headerRow: string;
    /** @description Sets or gets whether navigation with the keyboard is enabled in the Table. */
    keyboardNavigation: boolean;
    /** @description Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'. */
    loadColumnStateBehavior: TableLoadColumnStateBehavior;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description A callback function executed each time a Table cell is rendered. */
    onCellRender: any;
    /** @description A callback function executed each time a Table column header cell is rendered. */
    onColumnRender: {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    };
    /** @description A callback function executed when the Table is being initialized. */
    onInit: {
        (): void;
    };
    /** @description Sets or gets the page size (when paging is enabled). */
    pageSize: TablePageSize;
    /** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
    pageIndex: number;
    /** @description Sets or gets whether paging is enabled. */
    paging: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it. */
    rowDetailTemplate: string;
    /** @description Sets or gets an array of the Table's selected row's ids. */
    selected: any[];
    /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
    selection: boolean;
    /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
    selectionMode: TableSelectionMode;
    /** @description A callback function executed when a column is sorted that can be used to override the default sorting behavior. The function is passed four parameters: dataSource - the Table's data sourcesortColumns - an array of the data fields of columns to be sorted bydirections - an array of sort directions to be sorted by (corresponding to sortColumns)defaultCompareFunctions - an array of default compare functions to be sorted by (corresponding to sortColumns), useful if the sorting of some columns does not have to be overridden */
    sort: any;
    /** @description Determines the sorting mode of the Table. */
    sortMode: TableSortMode;
    /** @description Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState). */
    stateSettings: string[];
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
    tooltip: boolean;
    /** @description Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance. */
    virtualization: boolean;
    /** @description This event is triggered when a cell edit operation has been initiated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row, 	value)
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    *   value - The data value of the cell.
    */
    onCellBeginEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
    *   id - The cell's row id.
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    *   value - The data value of the cell.
    *   originalEvent - The 'click' event object.
    */
    onCellClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a cell has been edited.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row, 	value)
    *   dataField - The data field of the cell's column.
    *   row - The new data of the cell's row.
    *   value - The data value of the cell.
    */
    onCellEndEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a row has been collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The data of the collapsed row.
    */
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a row has been expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The (aggregated) data of the expanded row.
    */
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the cell's column.
    */
    onColumnClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column has been resized via dragging or double-click.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
    *   dataField - The data field of the column.
    *   headerCellElement - The column's header cell HTML element.
    *   width - The new width of the column.
    */
    onColumnResize: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a filtering-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a grouping-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label)
    *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
    *   dataField - The data field of the column whose grouping is modified.
    *   label - The label of the group (only when collapsing/expanding).
    */
    onGroup: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a paging-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
    *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
    */
    onPage: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row)
    *   row - The data of the row.
    */
    onRowBeginEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a row has been edited (only when editMode is 'row').
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row)
    *   row - The new data of the row.
    */
    onRowEndEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
    *   columns - An array with information about the columns the Table has been sorted by.
    */
    onSort: EventEmitter<CustomEvent>;
    /** @description Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField: string, filter: any): void;
    /** @description Groups by a column.
    * @param {string} dataField. The column's data field.
    */
    addGroup(dataField: string): void;
    /** @description Begins an edit operation.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    beginEdit(row: string | number, dataField?: string): void;
    /** @description Ends the current edit operation and discards changes.
    */
    cancelEdit(): void;
    /** @description Clears applied filters.
    */
    clearFilters(): void;
    /** @description Clears grouping.
    */
    clearGrouping(): void;
    /** @description Clears selection.
    */
    clearSelection(): void;
    /** @description Clears the Table sorting.
    */
    clearSort(): void;
    /** @description Collapses all rows (in tree mode).
    */
    collapseAllRows(): void;
    /** @description Collapses a group.
    * @param {string} index. The group's hierarchical index.
    */
    collapseGroup(index: string): void;
    /** @description Collapses a row (in tree mode).
    * @param {string | number} rowId. The id of the row to collapse.
    */
    collapseRow(rowId: string | number): void;
    /** @description Ends the current edit operation and saves changes.
    */
    endEdit(): void;
    /** @description Expands all rows (in tree mode).
    */
    expandAllRows(): void;
    /** @description Expands a group.
    * @param {string} index. The group's hierarchical index.
    */
    expandGroup(index: string): void;
    /** @description Expands a row (in tree mode).
    * @param {string | number} rowId. The id of the row to expand.
    */
    expandRow(rowId: string | number): void;
    /** @description Exports the Table's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: any, fileName?: any, exportFiltered?: any, callback?: any): Promise<any>;
    /** @description Returns an array of selected row ids.
    * @returns {(string | number)[]}
  */
    getSelection(): Promise<any>;
    /** @description Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** @description Returns the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    getValue(row: any, dataField: any): Promise<any>;
    /** @description Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state?: any): void;
    /** @description Navigates to a page.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    navigateTo(pageIndex: number): void;
    /** @description Refreshes the table.
    */
    refresh(): void;
    /** @description Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** @description Removes grouping by a column.
    * @param {string} dataField. The column's data field.
    */
    removeGroup(dataField: string): void;
    /** @description Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property.
    * @returns {any}
  */
    saveState(): Promise<any>;
    /** @description Selects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    select(rowId: string | number | (string | number)[]): void;
    /** @description Sets the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @param {any} value. The new value of the cell.
    */
    setValue(row: string | number, dataField: string, value: any): void;
    /** @description Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDataField: string, sortOrder?: string): void;
    /** @description Unselects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
    */
    unselect(rowId: string | number | (string | number)[]): void;
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
