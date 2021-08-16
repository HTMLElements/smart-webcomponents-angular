import { Grid } from './../index';
import { Scrolling, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnGroup, GridConditionalFormatting, GridCharting, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridEditing, GridFiltering, GridGrouping, GridPaging, GridPager, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSorting } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnMenuDataSource, GridCommand, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Grid } from './../index';
export { DataAdapter, Chart } from './../index';
export declare class GridComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Grid>);
    private eventHandlers;
    nativeElement: Grid;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description An object containing settings related to the grid's appearance. */
    appearance: GridAppearance;
    /** @description An object containing settings related to the grid's behavior. */
    behavior: GridBehavior;
    /** @description An object containing settings related to the grid's layout. */
    layout: GridLayout;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
    clipboard: GridClipboard;
    /** @description The columns property is used to describe all columns displayed in the grid.  */
    columns: {
        label: string;
        dataField: string;
    }[] | string[] | number | GridColumn[];
    /** @description Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
    columnMenu: GridColumnMenu;
    /** @description Describes the settings of the column groups. */
    columnGroups: GridColumnGroup[];
    /** @description Sets or gets details about conditional formatting to be applied to the Grid's cells. */
    conditionalFormatting: GridConditionalFormatting[];
    /** @description Sets the Grid Charting Data Visualization. */
    charting: GridCharting;
    /** @description Sets the TreeGrid checkboxes. */
    checkBoxes: GridCheckBoxes;
    /** @description Sets the Grid Data Export options. */
    dataExport: GridDataExport;
    /** @description Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array. */
    dataSource: any;
    /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
    dataSourceSettings: GridDataSourceSettings;
    /** @description Describes the grid's editing settings. */
    editing: GridEditing;
    /** @description Describes the grid's filtering settings. */
    filtering: GridFiltering;
    /** @description Describes the grid's grouping settings. */
    grouping: GridGrouping;
    /** @description Sets the messages values. */
    messages: any;
    /** @description Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings. */
    onCellValue: {
        (cell: GridCell): void;
    };
    /** @description Callback function() called when the grid has been rendered. */
    onCellUpdate: {
        (cell: GridCell, oldValue: any, value: any, confirm: {
            (commit: boolean): void;
        }): void;
    };
    /** @description Describes the paging settings. */
    onCellRender: {
        (cell: GridCell): void;
    };
    /** @description Describes the pager settings. */
    onBeforeInit: {
        (): void;
    };
    /** @description Sets the row details. */
    onInit: {
        (): void;
    };
    /** @description Sets the scroll mode settings. */
    onAfterInit: {
        (): void;
    };
    /** @description Describes the column header settings. */
    onChartInit: any;
    /** @description Describes the summary row settings. */
    onRender: any;
    /** @description Describes the settings for the group header. */
    onKey: {
        (event: KeyboardEvent): void;
    };
    /** @description Describes the header settings of the grid. */
    onRowInit: {
        (index: number, row: GridRow): void;
    };
    /** @description Describes the footer settings of the grid. */
    onRowDetailInit: {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    onRowDetailUpdated: {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    /** @description The rows property is used to describe all rows displayed in the grid. */
    onRowInserted: {
        (index: number, row: GridRow): void;
    };
    /** @description Describes the selection settings. */
    onRowRemoved: {
        (index: number, row: GridRow): void;
    };
    /** @description Describes sorting settings. */
    onRowUpdate: {
        (index: number, row: GridRow, oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    };
    /** @description undefined */
    onRowUpdated: {
        (index: number, row: GridRow): void;
    };
    /** @description undefined */
    onColumnInit: {
        (index: number, column: GridColumn): void;
    };
    /** @description undefined */
    onColumnInserted: {
        (index: number, column: GridColumn): void;
    };
    /** @description undefined */
    onColumnRemoved: {
        (index: number, column: GridColumn): void;
    };
    /** @description undefined */
    onColumnUpdated: {
        (index: number, column: GridColumn): void;
    };
    /** @description undefined */
    onCommand: {
        (name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void;
    };
    /** @description undefined */
    paging: GridPaging;
    /** @description undefined */
    pager: GridPager;
    /** @description undefined */
    rowDetail: GridRowDetail;
    /** @description undefined */
    scrolling: Scrolling;
    /** @description undefined */
    columnHeader: GridColumnHeader;
    /** @description undefined */
    summaryRow: GridSummaryRow;
    /** @description undefined */
    groupHeader: GridGroupHeader;
    /** @description undefined */
    header: GridHeader;
    /** @description undefined */
    footer: GridFooter;
    /** @description undefined */
    rightToLeft: boolean;
    /** @description undefined */
    rows: GridRow[];
    /** @description undefined */
    selection: GridSelection;
    /** @description undefined */
    sorting: GridSorting;
    /** @description This event is triggered, when the edit begins.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    */
    onBeginEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
    */
    onBatchChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
    */
    onBatchCancel: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
    *   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
    *   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user clicks on the header of a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
    *   column - The clicked column.
    *   dataField - The column's data field.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onColumnClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user double clicks on the header of a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
    *   column - The double-clicked column.
    *   dataField - The column's data field.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onColumnDoubleClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user resized a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
    *   column - The resized column.
    *   dataField - The column's data field.
    *   oldWidth - The old width of the column.
    *   width - The new width of the column.
    */
    onColumnResize: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user starts a column drag.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   originalEvent - The origianl Event object.
    */
    onColumnDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user drags a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user drops a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   newIndex - The column's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user reorders a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   newIndex - The column's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnReorder: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user starts a row drag.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   originalEvent - The origianl Event object.
    */
    onRowDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user drags a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user drags a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   newIndex - The row's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user reorders a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   newIndex - The row's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowReorder: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
    *   row - The expanded row.
    *   id - The row's id
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
    *   row - The collapsed row.
    *   id - The row's id
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user clicks on a row of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
    *   row - The clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onRowClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user double clicks on a row of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
    *   row - The double-clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onRowDoubleClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user resized a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
    *   row - The resized row.
    *   id - Gets the row id.
    *   oldHeight - The old height of the row.
    *   height - The new height of the row.
    */
    onRowResize: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user clicks on a cell of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
    *   cell - The clicked cell.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   dataField - Gets the column dataField.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onCellClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user double clicks on a cell of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
    *   cell - The double-clicked cell.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   dataField - Gets the column dataField.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onCellDoubleClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the edit ends.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    */
    onEndEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when a filter is added or removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
    */
    onFilter: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the grid is resized.
    *  @param event. The custom event. 	*/
    onResize: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user touches and holds on the row for at least 300ms.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
    *   row - The tapped row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowTap: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user touches and holds on the cell for at least 300ms.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
    *   cell - The tapped row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onCellTap: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user changes the pages.
    *  @param event. The custom event. 	*/
    onPage: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when a sorting column is added or removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
    */
    onSort: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user reaches the bottom of the grid.
    *  @param event. The custom event. 	*/
    onScrollBottomReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user reaches the top of the grid.
    *  @param event. The custom event. 	*/
    onScrollTopReached: EventEmitter<CustomEvent>;
    /** @description Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {any} data. row data matching the data source
    * @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
    * @param {any} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    addRow(data: any, insertAtBottom?: boolean, callback?: any): void;
    /** @description Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addNewRow(position?: any): Promise<any>;
    /** @description Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
    * @param {number} count. The count of unbound rows.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addUnboundRow(count: any, position?: any): Promise<any>;
    /** @description Adds a filter to a column. This method will apply a filter to the Grid data.
    * @param {string} dataField. column bound data field
    * @param {string} filter. Filter expression like: 'startsWith B'
    * @param {boolean} refreshFilters?.
    */
    addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
    /** @description Auto-sizes grid rows. This method will update the height of all Grid rows.
    */
    autoSizeRows(): void;
    /** @description Auto-sizes grid columns. This method will update the width of all Grid columns.
    */
    autoSizeColumns(): void;
    /** @description This method returns true, if all rows in the Grid are selected.
    * @returns {boolean}
  */
    areAllRowsSelected(): Promise<any>;
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** @description Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    beginEdit(rowId: string | number, dataField?: string): void;
    /** @description Clears all filters. Refreshes the view and updates all filter input components.
    */
    clearFilter(): void;
    /** @description Clears the selection that user have made. All row, cell and column selection highlights will be removed.
    */
    clearSelection(): void;
    /** @description Cancels the editing. This method closes the cell editor and cancels the changes.
    */
    cancelEdit(): void;
    /** @description Checks a TreeGrid row. This method updates the row's check-box.
    * @param {string | number} rowId. row bound id
    */
    checkRow(rowId: string | number): void;
    /** @description Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
    */
    checkAllRows(): void;
    /** @description Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
    */
    clearRows(): void;
    /** @description Closes the column drop-down menu.
    */
    closeMenu(): void;
    /** @description Collapses a TreeGrid or Grouping row.
    * @param {string | number} rowId. row bound id
    */
    collapseRow(rowId: string | number): void;
    /** @description Collapses all TreeGrid or Grouping rows.
    */
    collapseAllRows(): void;
    /** @description Creates a Chart, when charting is enabled.
    * @param {string} type. Chart's type
    * @param {any} dataSource?. Chart's data source
    */
    createChart(type: string, dataSource?: any): void;
    /** @description Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {any} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
    */
    deleteRow(rowId: string | number, callback?: any): void;
    /** @description Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    * @returns {boolean}
  */
    ensureVisible(rowId: any, dataField?: any): Promise<any>;
    /** @description Ends the editing. This method confirms all changes and closes the opened cell editor(s).
    */
    endEdit(): void;
    /** @description Ends the update operation. This method will resume the rendering and will refresh the Grid.
    * @param {boolean} refresh?. The flag that control the calls of the refresh method.
    */
    endUpdate(refresh?: boolean): void;
    /** @description Expands a TreeGrid or Grouping row.
    * @param {string | number} rowId. row bound id
    */
    expandRow(rowId: string | number): void;
    /** @description Expands all TreeGrid or Grouping rows.
    */
    expandAllRows(): void;
    /** @description Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
    * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    */
    exportData(Dataformat: string): void;
    /** @description Navigates to a page, when paging is enabled.
    * @param {number} index. page index
    */
    goToPage(index: number): void;
    /** @description Navigates to the next page, when grid paging is enabled.
    */
    nextPage(): void;
    /** @description Navigates to the prev page, when grid paging is enabled.
    */
    prevPage(): void;
    /** @description Navigates to the first page, when grid paging is enabled.
    */
    firstPage(): void;
    /** @description Navigates to the last page, when grid paging is enabled.
    */
    lastPage(): void;
    /** @description Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    getVerticalScrollMax(): Promise<any>;
    /** @description Gets the position of the vertical scrollbar.
    * @returns {number}
  */
    getVerticalScrollValue(): Promise<any>;
    /** @description Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    getHorizontalScrollMax(): Promise<any>;
    /** @description Gets the position of the horizontal scrollbar.
    * @returns {number}
  */
    getHorizontalScrollValue(): Promise<any>;
    /** @description Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'.
    * @returns {any}
  */
    getColumns(): Promise<any>;
    /** @description Gets the groups array.
    * @returns {any[]}
  */
    getGroups(): Promise<any>;
    /** @description Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value.
    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
    getSortedColumns(): Promise<any>;
    /** @description Gets the selection.
    * @returns {any}
  */
    getSelection(): Promise<any>;
    /** @description Gets the selected row ids.
    * @returns {any[]}
  */
    getSelectedRows(): Promise<any>;
    /** @description Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value.
    * @returns {any[]}
  */
    getSelectedCells(): Promise<any>;
    /** @description Gets an array of columns with applied filters.
    * @returns {any}
  */
    getFilteredColumns(): Promise<any>;
    /** @description Gets an array of rows, which are visible and match the applied filter.
    * @returns {any}
  */
    getVisibleRows(): Promise<any>;
    /** @description Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
    * @returns {any}
  */
    getViewRows(): Promise<any>;
    /** @description Gets a JSON object with the following fields: 'sort', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** @description Gets the changes from the batch edit.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    getBatchEditChanges(): Promise<any>;
    /** @description Gets a value of a cell.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @returns {any}
  */
    getCellValue(rowId: any, dataField: any): Promise<any>;
    /** @description Gets a value of a column.
    * @param {string} dataField. column bound data field
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    getColumnProperty(dataField: any, propertyName: any): Promise<any>;
    /** @description Gets a value of a row.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    getRowProperty(rowId: any, propertyName: any): Promise<any>;
    /** @description Gets the Data source data associated to the row.
    * @param {string | number} rowId. row bound id
    * @returns {any}
  */
    getRowData(rowId: any): Promise<any>;
    /** @description Gets the Row's id.
    * @param {number} rowIndex. row index
    * @returns {any}
  */
    getRowId(rowIndex: any): Promise<any>;
    /** @description Gets whether a column's drop-down menu is opened.
    * @returns {boolean}
  */
    hasMenu(): Promise<any>;
    /** @description This method returns true, if any rows in the Grid are selected.
    * @returns {boolean}
  */
    hasSelectedRows(): Promise<any>;
    /** @description Hides the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    */
    hideDetail(rowId: string | number): void;
    /** @description Highlights a column. Highlights a Grid column.
    * @param {string} dataField. column bound data field
    */
    highlightColumn(dataField: string): void;
    /** @description Highlights a cell. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string} className?. CSS Class Name
    */
    highlightCell(rowId: string | number, dataField: string, className?: string): void;
    /** @description Highlights a row. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} className?. CSS Class Name
    */
    highlightRow(rowId: string | number, className?: string): void;
    /** @description Opens a column drop-down menu.
    * @param {string} dataField. column bound data field
    */
    openMenu(dataField: string): void;
    /** @description Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property.
    */
    print(): void;
    /** @description Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
    */
    refresh(): void;
    /** @description Refreshes the grid with the current property values. This method will refresh the Grid layout.
    */
    refreshView(): void;
    /** @description Refreshes the grid cells in view. The method is useful for live-updates of cell values.
    * @param {string} dataField. column bound data field
    * @param {boolean} refreshFilters?.
    */
    removeFilter(dataField: string, refreshFilters?: boolean): void;
    /** @description Removes a column filter.
    */
    revertBatchEdit(): void;
    /** @description Reverts the batch edit changes. This method cancels all changes made by the end-user.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
    */
    reorderColumns(dataField: string | number, referenceDataField: string | number, insertAfter?: boolean): void;
    /** @description Reorders two DataGrid columns.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    */
    swapColumns(dataField: string | number, referenceDataField: string | number): void;
    /** @description Swaps two DataGrid columns.
    */
    saveBatchEdit(): void;
    /** @description Saves the batch edit changes. This method confirms the editing changes made by the end-user.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    select(rowId: string | number, dataField?: string): void;
    /** @description Selects a row, cell or column.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string | number} endRowId. row bound id
    * @param {string} endDataField. column bound data field
    */
    selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void;
    /** @description Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string | number} endRowId. row bound id
    */
    selectRowsRange(rowId: string | number, endRowId: string | number): void;
    /** @description Selects a range of rows.
    * @param {(string | number)[]} rowId. Array of row ids
    */
    selectRows(rowId: (string | number)[]): void;
    /** @description Selects multiple rows by their ids.
    */
    selectAllRows(): void;
    /** @description Selects all rows.
    * @param {number[]} rowIndex. Array of row indexes
    */
    selectRowsByIndex(rowIndex: number[]): void;
    /** @description Selects multiple rows by their index.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string | number | Date | boolean} value. New Cell value.
    */
    setCellValue(rowId: string | number, dataField: string, value: string | number | Date | boolean): void;
    /** @description Sets a new value to a cell.
    * @param {string} dataField. column bound data field
    * @param {string} propertyName. The column property's name.
    * @param {any} value. The new property value.
    */
    setColumnProperty(dataField: string, propertyName: string, value: any): void;
    /** @description Sets a property to a column.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The row property's name.
    * @param {any} value. The new property value.
    */
    setRowProperty(rowId: string | number, propertyName: string, value: any): void;
    /** @description Sets a property to a row.
    * @param {number} value. The new scroll position
    */
    setVerticalScrollValue(value: number): void;
    /** @description Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax.
    * @param {number} value. The new scroll position
    */
    setHorizontalScrollValue(value: number): void;
    /** @description Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax.
    * @param {string | number} rowId. row bound id
    */
    showDetail(rowId: string | number): void;
    /** @description Shows the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    * @param {any} data. row data matching the data source
    * @param {any} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
    */
    updateRow(rowId: string | number, data: any, callback?: any): void;
    /** @description Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    unselect(rowId: string | number, dataField?: string): void;
    /** @description Unselects a row, cell or column.
    * @param {string | number} rowId. row bound id
    */
    uncheckRow(rowId: string | number): void;
    /** @description Unchecks a TreeGrid row. Sets its check-box to false.
    */
    uncheckAllRows(): void;
    /** @description Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
    * @param {string | number} rowId. row bound id
    */
    toggleRow(rowId: string | number): void;
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
