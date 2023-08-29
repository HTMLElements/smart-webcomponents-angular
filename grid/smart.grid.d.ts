import { Grid } from './../index';
import { Scrolling, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridColumnMenu, GridColumnGroup, GridConditionalFormatting, GridCharting, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridEditing, GridFiltering, GridGrouping, GridUploadSettings, GridPaging, GridPager, GridRowDetail, GridColumnHeader, GridSummaryRow, GridStateSettings, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSorting } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridSortingCommandKey, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridContextMenuDataSource, GridCommand, GridColumnMenu, GridColumnMenuDataSource, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridUploadSettings, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridStateSettings, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting, ElementRenderMode } from './../index';
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
    /** @description Context Menu is the drop-down menu displayed after right-clicking a Grid row. It allows you to delete row, edit cell or row depending on the edit mode. The 'contextMenuItemCustom' dataSource option allows you to add custom menu item to the context menu. You can replace the context menu by using the 'selector' property and setting it to ID of a Smart.Menu component. */
    contextMenu: GridContextMenu;
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
        (cells: GridCell[], oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    };
    /** @description Callback function() called when the grid has been rendered for first time and bindings are completed. The component is ready. */
    onCellRender: {
        (cell: GridCell): void;
    };
    /** @description Sets or gets the rows  CSS class rules. Different CSS class names are conditionally applied. Example: rowCSSRules: { 'cell-class-1': settings =&gt; settings.data.quantity === 5, 'cell-class-2': settings =&gt; settings.data.quantity &lt; 5, 'cell-class-3': settings =&gt; settings.data.quantity &gt; 5 }.  The settings object contains the following properties: index, data, row, api. */
    onBeforeInit: {
        (): void;
    };
    /** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
    onInit: {
        (): void;
    };
    /** @description Sets the grid users. Expects an array with 'id', 'name' and optionally 'color' and 'image' properties. */
    onAfterInit: {
        (): void;
    };
    /** @description Sets the grid's image and filter upload settings for the image and attachment columns. */
    onChartInit: any;
    /** @description Describes the paging settings. */
    onRender: any;
    /** @description Describes the pager settings. */
    onLoad: any;
    /** @description Sets the row details. */
    onKey: {
        (event: KeyboardEvent): void;
    };
    /** @description Sets the scroll mode settings. */
    onRowInit: {
        (index: number, row: GridRow): void;
    };
    /** @description Describes the column header settings. */
    onRowDetailInit: {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    /** @description Describes the summary row settings. */
    onRowDetailUpdated: {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    /** @description Sets the grid's state settings. */
    onRowHistory: {
        (index: number, row: GridRow, history: any[]): void;
    };
    /** @description Describes the settings for the group header. */
    onRowStyle: {
        (index: number, row: GridRow, history: any[]): void;
    };
    /** @description Describes the header settings of the grid. */
    onRowInserted: {
        (index: number[], row: GridRow[]): void;
    };
    /** @description Describes the footer settings of the grid. */
    onRowRemoved: {
        (indexes: number[], rows: GridRow[]): void;
    };
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    onRowUpdate: {
        (index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    };
    /** @description The rows property is used to describe all rows displayed in the grid. */
    onRowUpdated: {
        (index: number[], row: GridRow[]): void;
    };
    /** @description Describes the selection settings. */
    onRowClass: {
        (index: number, data: any, row: GridRow[]): void;
    };
    /** @description Describes sorting settings. */
    onCellClass: {
        (index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void;
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
    onColumnClone: {
        (dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void;
    };
    /** @description undefined */
    onCommand: {
        (name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void;
    };
    /** @description undefined */
    rowCSSRules: any;
    /** @description undefined */
    currentUser: string | number;
    /** @description undefined */
    users: any[];
    /** @description undefined */
    uploadSettings: GridUploadSettings;
    /** @description undefined */
    paging: GridPaging;
    /** @description undefined */
    pager: GridPager;
    /** @description undefined */
    rowDetail: GridRowDetail;
    /** @description undefined */
    scrolling: Scrolling | string;
    /** @description undefined */
    columnHeader: GridColumnHeader;
    /** @description undefined */
    summaryRow: GridSummaryRow;
    /** @description undefined */
    stateSettings: GridStateSettings;
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
    /** @description This event is triggered, when the edit begins. After the event occurs, editing starts. If you need to prevent the editing for specific cells, rows or columns, you can call event.preventDefault();.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
    *   id - The edited row id.
    *   dataField - The edited column data field.
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    *   data - The edited row's data.
    *   value - The edited cell's value.
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
    /** @description This event is triggered, when the user enters a comment in the row edit dialog.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
    *   id - The row's id.
    *   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
    */
    onCommentAdd: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user removes a comment in the row edit dialog.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
    *   id - The row's id.
    *   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
    */
    onCommentRemove: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the user clicks on a context menu item.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	command)
    *   id - The row's id.
    *   dataField - The column's data field.
    *   command - Command function.
    */
    onContextMenuItemClick: EventEmitter<CustomEvent>;
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
    /** @description This event is triggered, when the user clicks on the row header's star.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	value)
    *   row - The clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   value - Gets whether the row is starred or not.
    */
    onRowStarred: EventEmitter<CustomEvent>;
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
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
    *   id - The edited row id.
    *   dataField - The edited column data field.
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    *   data - The edited row's data.
    *   value - The edited cell's value.
    */
    onEndEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when a filter is added or removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	expressions)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, filter: object}. <em>dataField</em> is the column's data field. <em>filter</em> is a FilterGroup object.
    *   expressions - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'. In each array item, you will have an object with column's name and filter string. Example: [['firstName', 'contains Andrew or contains Nancy'], ['quantity', '&lt;= 3 and &gt;= 8']], [['firstName', 'EQUAL' 'Andrew' or 'EQUAL' 'Antoni' or 'EQUAL' 'Beate']], [['lastName','CONTAINS' 'burke' or 'CONTAINS' 'peterson']]. Filter conditions used in the filter expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    */
    onFilter: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the rows grouping is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	groups)
    *   groups - Array of column data fields.
    */
    onGroup: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the add new column dialog is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The column data field.
    */
    onOpenColumnDialog: EventEmitter<CustomEvent>;
    /** @description This event is triggered, when the add new column dialog is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The column data field.
    */
    onCloseColumnDialog: EventEmitter<CustomEvent>;
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
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	sortDataFields, 	sortDataTypes, 	sortOrders, 	sortIndexes)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
    *   sortDataFields - Array of column data fields.
    *   sortDataTypes - Array of column data types. The values in the array would be 'string', 'date', 'boolean' or 'number'.
    *   sortOrders - Array of column orders. The values in the array would be 'asc' or 'desc'.
    *   sortIndexes - Array of column sort indexes. When multiple sorting is applied the sort index is an important parameter as it specifies the priority of sorting.
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
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    addRow(data: any, insertAtBottom?: boolean, callback?: {
        (row: GridRow): void;
    }): void;
    /** @description Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addNewRow(position?: any): Promise<any>;
    /** @description Adds a new column.
    * @param {any} column. A Grid column object. See 'columns' property.
    * @returns {boolean}
  */
    addNewColumn(column: any): Promise<any>;
    /** @description Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
    * @param {number} count. The count of unbound rows.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addUnboundRow(count: any, position?: any): Promise<any>;
    /** @description Adds a filter to a column. This method will apply a filter to the Grid data. Example for adding multiple filters to a column: grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"']). Example for adding single filter to a column: grid.addFilter('lastName', 'CONTAINS "burke"'). Example for adding numeric filter:  grid.addFilter('quantity', '&lt;= 5')
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} filter. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @param {boolean} refreshFilters?. Set this to false, if you will use multiple 'addFilter' calls. By doing this, you will avoid unnecessary renders.
    */
    addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
    /** @description Groups the Grid by a data field. This method will add a group to the Grid when grouping is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    addGroup(dataField: string): void;
    /** @description Sorts the Grid by a data field. This method will add a sorting to the Grid when sorting is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} sortOrder. column's sort order. Use 'asc' or 'desc'.
    */
    addSort(dataField: string, sortOrder: string): void;
    /** @description Auto-sizes grid rows. This method will update the height of all Grid rows.
    */
    autoSizeRows(): void;
    /** @description Auto-sizes grid columns. This method will update the width of all Grid columns.
    */
    autoSizeColumns(): void;
    /** @description Auto-sizes grid column. This method will update the width of a Grid column by measuring the cells and column header label width.
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    autoSizeColumn(dataField?: string): void;
    /** @description This method returns true, if all rows in the Grid are selected.
    * @returns {boolean}
  */
    areAllRowsSelected(): Promise<any>;
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** @description Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    beginEdit(rowId: string | number, dataField?: string): void;
    /** @description Clears all filters. Refreshes the view and updates all filter input components.
    */
    clearFilter(): void;
    /** @description Clears all data groups. Refreshes the view and updates the DataGrid component.
    */
    clearGroups(): void;
    /** @description Clears all sorting. Refreshes the view and updates the DataGrid component.
    */
    clearSort(): void;
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
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
    */
    deleteRow(rowId: string | number, callback?: {
        (row: GridRow): void;
    }): void;
    /** @description Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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
    /** @description Expands a TreeGrid or Grouping row. For example, if you want to expand the first group, then its second sub grup, then the first sub sub group, you can use: grid.expandRow('0.1.0');
    * @param {string | number} rowId. row bound id
    */
    expandRow(rowId: string | number): void;
    /** @description Expands rows to a given group level. For example 'grid.expandRowsToGroupLevel(1);' means that all groups at the root level will be expanded.
    * @param {number} level. row group level
    */
    expandRowsToGroupLevel(level: number): void;
    /** @description Expands all TreeGrid or Grouping rows.
    */
    expandAllRows(): void;
    /** @description Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
    * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    */
    exportData(Dataformat: string): void;
    /** @description Finds entries by using a query and returns an array of row ids. Example: const rows = grid.find('nancy'); returns all rows that have 'nancy' value. Example 2: const rows = grid.find('nancy, davolio'); returns all rows that have 'nancy' and 'davolio' values in the same row. Example 3: const rows = grid.find(5, 'quantity', '>'); returns all rows where the value of the 'quantity' field is > 5.
    * @param {string} query. Search query
    * @param {string} dataField?. Column data field.
    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @returns {any[]}
  */
    find(query: any, dataField?: any, condition?: any): Promise<any>;
    /** @description Finds entries by using a query and returns an array of cells. Each cell in the array is also an array in this format: [id, dataField, value]. Example: const cells = grid.findCells('nancy'); returns all cells that have 'nancy' value. Example 2: const cells = grid.findCells('nancy, davolio'); returns all cells that have 'nancy' and 'davolio' values.
    * @param {string} query. Search query. You can enter multiple search strings, by using ','. Example: 'nancy, davolio'
    * @returns {any[]}
  */
    findCells(query: any): Promise<any>;
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
    /** @description Focuses and selects a cell or row. The keyboard navigation starts from the focused cell or row. Any previously applied selection will be cleared after calling this method.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    focusAndSelect(rowId: string | number, dataField?: string): void;
    /** @description Iterates through each row in the grid and calls the callback for each row. This is similar to the forEach method on a JavaScript array. This is called for each row, ignoring grouping, filtering or sorting applied in the Grid.
    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
    */
    forEachRow(rowCallback: any): void;
    /** @description Similar to forEachRow. Iterates through each row in the grid and calls the callback for each row. This method takes into account filtering and sorting applied to the Grid.
    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
    */
    forEachRowAfterFilterAndSort(rowCallback: any): void;
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
    /** @description Gets the editing cell(s), when the grid is editing.
    * @returns {any[]}
  */
    getEditCells(): Promise<any>;
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
    /** @description Gets an Array where each item is an Array of row id and row data. If the Grid is used in virtual mode, the row data parameter is empty object, because the data is loaded on demand.
    * @returns {any[]}
  */
    getSelectedRows(): Promise<any>;
    /** @description Gets the selected row ids.
    * @returns {any[]}
  */
    getSelectedRowIds(): Promise<any>;
    /** @description Gets the selected row indexes.
    * @returns {any[]}
  */
    getSelectedRowIndexes(): Promise<any>;
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
    /** @description Gets a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** @description Saves the Grid state and returns a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
    * @param {string} name?. state name
    * @returns {any}
  */
    saveState(name?: any): Promise<any>;
    /** @description Loads a previously saved Grid state. You can pass a state name when there is a state which was previously saved with the saveState(stateName) method call or a state object returned by the saveState or getState method calls. The state object is required to be a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
    * @param {any} state. state name or state object
    * @returns {any}
  */
    loadState(state: any): Promise<any>;
    /** @description Resets the Grid state.
    */
    resetState(): void;
    /** @description Gets the changes from the batch edit.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    getBatchEditChanges(): Promise<any>;
    /** @description Gets a value of a cell.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {any}
  */
    getCellValue(rowId: any, dataField: any): Promise<any>;
    /** @description Gets a column. Returns a Grid column object.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {GridColumn}
  */
    getColumn(dataField: any): Promise<any>;
    /** @description Gets a value of a column.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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
    /** @description Gets a row. Returns a Grid row object.
    * @param {string | number} rowId. row bound id
    * @returns {GridRow}
  */
    getRow(rowId: any): Promise<any>;
    /** @description Gets a row by its index. Returns a Grid row object.
    * @param {number} rowIndex. row bound index
    * @returns {GridRow}
  */
    getRowByIndex(rowIndex: any): Promise<any>;
    /** @description Gets the Data source data associated to the row.
    * @param {string | number} rowId. row bound id
    * @returns {any}
  */
    getRowData(rowId: any): Promise<any>;
    /** @description Gets the Row's id by a row index.
    * @param {number} rowIndex. row index
    * @returns {string | number}
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
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    highlightColumn(dataField: string): void;
    /** @description Highlights a cell. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} className?. CSS Class Name
    */
    highlightCell(rowId: string | number, dataField: string, className?: string): void;
    /** @description Highlights a row. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} className?. CSS Class Name
    */
    highlightRow(rowId: string | number, className?: string): void;
    /** @description Inserts a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {any} data. row data matching the data source
    * @param {number} index?. Determines the insert index. The default value is the last index.
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    insertRow(data: any, index?: number, callback?: {
        (row: GridRow): void;
    }): void;
    /** @description Opens a column drop-down menu.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    openMenu(dataField: string): void;
    /** @description Opens a context menu. Note that context menu should be enabled.
    * @param {number} left. Left Position.
    * @param {number} top. Top Position.
    */
    openContextMenu(left: number, top: number): void;
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
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {boolean} refreshFilters?. Set this to false, if you need to make multiple removeFilter calls.
    */
    removeFilter(dataField: string, refreshFilters?: boolean): void;
    /** @description Removes a column filter.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    removeGroup(dataField: string): void;
    /** @description Removes a group by data field. This method will remove a group to the Grid when grouping is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    removeSort(dataField: string): void;
    /** @description Removes a sorting by data field. This method will remove a sorting from a Grid column.
    */
    refreshSort(): void;
    /** @description Re-sorts the Grid by using the already applied column sortings and re-renders the Grid.
    */
    revertBatchEdit(): void;
    /** @description Reverts the batch edit changes. This method cancels all changes made by the end-user.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
    */
    reorderColumns(dataField: string | number, referenceDataField: string | number, insertAfter?: boolean): void;
    /** @description Reorders two DataGrid columns.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string | null} sortOrder. column's sort order. Use 'asc', 'desc' or null.
    */
    sortBy(dataField: string, sortOrder: string | null): void;
    /** @description Sorts the Grid by a data field. This method will add or remove sorting, when sorting is enabled. To remove the sorting, use 'null' for the sortOrder parameter.
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
    * @param {string} query. Search query
    * @param {string} dataField?. Column data field.
    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    */
    selectRowsByQuery(query: string, dataField?: string, condition?: string): void;
    /** @description Selects rows by using a query. Example: grid.selectRowsByQuery('nancy'); selects all rows that have 'nancy' value. Example 2: grid.selectRowsByQuery('nancy, davolio'); selects all rows that have 'nancy' and 'davolio' values in the same row. Example 3: grid.selectRowsByQuery(5, 'quantity', '>'); selects all rows where the value of the 'quantity' field is > 5.
    * @param {(string | number)[]} rowIds. Array of row ids
    * @param {string[]} dataFields. Array of data fields.
    */
    selectCells(rowIds: (string | number)[], dataFields: string[]): void;
    /** @description Selects multiple cells by their ids and dataFields. Example: grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']); - selects the 'firstName', 'quantity' and 'date' cells from the first, second and third rows.
    * @param {string} query. Search query
    */
    selectCellsByQuery(query: string): void;
    /** @description Selects cells by using a query. Example: grid.selectCellsByQuery('nancy'); selects all cells that have 'nancy' value. Example 2: grid.selectCellsByQuery('nancy, davolio'); selects all cells that have 'nancy' and 'davolio' values in the same row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string | number | Date | boolean} value. New Cell value.
    */
    setCellValue(rowId: string | number, dataField: string, value: string | number | Date | boolean): void;
    /** @description Sets a new value to a cell.
    * @param {GridColumn[]} columns. Columns array.
    */
    setColumns(columns: GridColumn[]): void;
    /** @description Sets new columns to the Grid. The grid will redraw all the column headers, and then redraw all of the rows. By using 'setColumns', the grid will compare the new columns passed as argument to the method with existing columns. The Grid will automatically create new columns, keep old columns if they already exist and remove columns which are not in the 'setColumns' method argument. The benefit of that is that the state of the column like(sort, filter, width or other) will be kept, if the column exsits after the new columns are applied.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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
    * @param {string | number} rowId. row bound id
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The row style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
    */
    setRowStyle(rowId: string | number, rowStyle: {
        background?: string;
        color?: string;
        fontSize?: string;
        fontFamily?: string;
        textDecoration?: string;
        fontStyle?: string;
        fontWeight?: string;
    }): void;
    /** @description Sets a style to a row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. Column bound field name.
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The cell style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
    */
    setCellStyle(rowId: string | number, dataField: string, rowStyle: {
        background?: string;
        color?: string;
        fontSize?: string;
        fontFamily?: string;
        textDecoration?: string;
        fontStyle?: string;
        fontWeight?: string;
    }): void;
    /** @description Sets a style to a row.
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
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
    */
    updateRow(rowId: string | number, data: any, callback?: {
        (row: GridRow): void;
    }): void;
    /** @description Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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
