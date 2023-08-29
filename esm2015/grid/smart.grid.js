import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let GridComponent = class GridComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
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
        this.onBeginEdit = new EventEmitter();
        /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
        *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
        */
        this.onBatchChange = new EventEmitter();
        /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
        *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
        */
        this.onBatchCancel = new EventEmitter();
        /** @description This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
        *   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
        *   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered, when the user clicks on the header of a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
        *   column - The clicked column.
        *   dataField - The column's data field.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        this.onColumnClick = new EventEmitter();
        /** @description This event is triggered, when the user double clicks on the header of a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
        *   column - The double-clicked column.
        *   dataField - The column's data field.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        this.onColumnDoubleClick = new EventEmitter();
        /** @description This event is triggered, when the user resized a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
        *   column - The resized column.
        *   dataField - The column's data field.
        *   oldWidth - The old width of the column.
        *   width - The new width of the column.
        */
        this.onColumnResize = new EventEmitter();
        /** @description This event is triggered, when the user starts a column drag.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   originalEvent - The origianl Event object.
        */
        this.onColumnDragStart = new EventEmitter();
        /** @description This event is triggered, when the user drags a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        this.onColumnDragging = new EventEmitter();
        /** @description This event is triggered, when the user drops a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   newIndex - The column's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        this.onColumnDragEnd = new EventEmitter();
        /** @description This event is triggered, when the user reorders a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   newIndex - The column's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        this.onColumnReorder = new EventEmitter();
        /** @description This event is triggered, when the user enters a comment in the row edit dialog.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
        *   id - The row's id.
        *   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
        */
        this.onCommentAdd = new EventEmitter();
        /** @description This event is triggered, when the user removes a comment in the row edit dialog.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
        *   id - The row's id.
        *   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
        */
        this.onCommentRemove = new EventEmitter();
        /** @description This event is triggered, when the user clicks on a context menu item.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	command)
        *   id - The row's id.
        *   dataField - The column's data field.
        *   command - Command function.
        */
        this.onContextMenuItemClick = new EventEmitter();
        /** @description This event is triggered, when the user starts a row drag.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   originalEvent - The origianl Event object.
        */
        this.onRowDragStart = new EventEmitter();
        /** @description This event is triggered, when the user drags a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        this.onRowDragging = new EventEmitter();
        /** @description This event is triggered, when the user drags a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   newIndex - The row's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        this.onRowDragEnd = new EventEmitter();
        /** @description This event is triggered, when the user reorders a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   newIndex - The row's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        this.onRowReorder = new EventEmitter();
        /** @description This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
        *   row - The expanded row.
        *   id - The row's id
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        this.onRowExpand = new EventEmitter();
        /** @description This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
        *   row - The collapsed row.
        *   id - The row's id
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        this.onRowCollapse = new EventEmitter();
        /** @description This event is triggered, when the user clicks on a row of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
        *   row - The clicked row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        *   id - Gets the row id.
        *   isRightClick - Gets whether the pointing device's right button is clicked.
        *   pageX - Gets the click's X position.
        *   pageY - Gets the click's Y position.
        */
        this.onRowClick = new EventEmitter();
        /** @description This event is triggered, when the user double clicks on a row of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
        *   row - The double-clicked row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        *   id - Gets the row id.
        *   isRightClick - Gets whether the pointing device's right button is clicked.
        *   pageX - Gets the click's X position.
        *   pageY - Gets the click's Y position.
        */
        this.onRowDoubleClick = new EventEmitter();
        /** @description This event is triggered, when the user resized a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
        *   row - The resized row.
        *   id - Gets the row id.
        *   oldHeight - The old height of the row.
        *   height - The new height of the row.
        */
        this.onRowResize = new EventEmitter();
        /** @description This event is triggered, when the user clicks on the row header's star.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	value)
        *   row - The clicked row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        *   id - Gets the row id.
        *   value - Gets whether the row is starred or not.
        */
        this.onRowStarred = new EventEmitter();
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
        this.onCellClick = new EventEmitter();
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
        this.onCellDoubleClick = new EventEmitter();
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
        this.onEndEdit = new EventEmitter();
        /** @description This event is triggered, when a filter is added or removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	expressions)
        *   columns - Array of columns.
        *   data - Array of {dataField: string, filter: object}. <em>dataField</em> is the column's data field. <em>filter</em> is a FilterGroup object.
        *   expressions - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'. In each array item, you will have an object with column's name and filter string. Example: [['firstName', 'contains Andrew or contains Nancy'], ['quantity', '&lt;= 3 and &gt;= 8']], [['firstName', 'EQUAL' 'Andrew' or 'EQUAL' 'Antoni' or 'EQUAL' 'Beate']], [['lastName','CONTAINS' 'burke' or 'CONTAINS' 'peterson']]. Filter conditions used in the filter expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
        */
        this.onFilter = new EventEmitter();
        /** @description This event is triggered, when the rows grouping is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	groups)
        *   groups - Array of column data fields.
        */
        this.onGroup = new EventEmitter();
        /** @description This event is triggered, when the add new column dialog is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The column data field.
        */
        this.onOpenColumnDialog = new EventEmitter();
        /** @description This event is triggered, when the add new column dialog is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The column data field.
        */
        this.onCloseColumnDialog = new EventEmitter();
        /** @description This event is triggered, when the grid is resized.
        *  @param event. The custom event. 	*/
        this.onResize = new EventEmitter();
        /** @description This event is triggered when the user touches and holds on the row for at least 300ms.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
        *   row - The tapped row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        this.onRowTap = new EventEmitter();
        /** @description This event is triggered when the user touches and holds on the cell for at least 300ms.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
        *   cell - The tapped row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        this.onCellTap = new EventEmitter();
        /** @description This event is triggered, when the user changes the pages.
        *  @param event. The custom event. 	*/
        this.onPage = new EventEmitter();
        /** @description This event is triggered, when a sorting column is added or removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	sortDataFields, 	sortDataTypes, 	sortOrders, 	sortIndexes)
        *   columns - Array of columns.
        *   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
        *   sortDataFields - Array of column data fields.
        *   sortDataTypes - Array of column data types. The values in the array would be 'string', 'date', 'boolean' or 'number'.
        *   sortOrders - Array of column orders. The values in the array would be 'asc' or 'desc'.
        *   sortIndexes - Array of column sort indexes. When multiple sorting is applied the sort index is an important parameter as it specifies the priority of sorting.
        */
        this.onSort = new EventEmitter();
        /** @description This event is triggered, when the user reaches the bottom of the grid.
        *  @param event. The custom event. 	*/
        this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered, when the user reaches the top of the grid.
        *  @param event. The custom event. 	*/
        this.onScrollTopReached = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-grid');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description An object containing settings related to the grid's appearance. */
    get appearance() {
        return this.nativeElement ? this.nativeElement.appearance : undefined;
    }
    set appearance(value) {
        this.nativeElement ? this.nativeElement.appearance = value : undefined;
    }
    /** @description An object containing settings related to the grid's behavior. */
    get behavior() {
        return this.nativeElement ? this.nativeElement.behavior : undefined;
    }
    set behavior(value) {
        this.nativeElement ? this.nativeElement.behavior = value : undefined;
    }
    /** @description An object containing settings related to the grid's layout. */
    get layout() {
        return this.nativeElement ? this.nativeElement.layout : undefined;
    }
    set layout(value) {
        this.nativeElement ? this.nativeElement.layout = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
    get clipboard() {
        return this.nativeElement ? this.nativeElement.clipboard : undefined;
    }
    set clipboard(value) {
        this.nativeElement ? this.nativeElement.clipboard = value : undefined;
    }
    /** @description The columns property is used to describe all columns displayed in the grid.  */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Context Menu is the drop-down menu displayed after right-clicking a Grid row. It allows you to delete row, edit cell or row depending on the edit mode. The 'contextMenuItemCustom' dataSource option allows you to add custom menu item to the context menu. You can replace the context menu by using the 'selector' property and setting it to ID of a Smart.Menu component. */
    get contextMenu() {
        return this.nativeElement ? this.nativeElement.contextMenu : undefined;
    }
    set contextMenu(value) {
        this.nativeElement ? this.nativeElement.contextMenu = value : undefined;
    }
    /** @description Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
    get columnMenu() {
        return this.nativeElement ? this.nativeElement.columnMenu : undefined;
    }
    set columnMenu(value) {
        this.nativeElement ? this.nativeElement.columnMenu = value : undefined;
    }
    /** @description Describes the settings of the column groups. */
    get columnGroups() {
        return this.nativeElement ? this.nativeElement.columnGroups : undefined;
    }
    set columnGroups(value) {
        this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
    }
    /** @description Sets or gets details about conditional formatting to be applied to the Grid's cells. */
    get conditionalFormatting() {
        return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
    }
    set conditionalFormatting(value) {
        this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
    }
    /** @description Sets the Grid Charting Data Visualization. */
    get charting() {
        return this.nativeElement ? this.nativeElement.charting : undefined;
    }
    set charting(value) {
        this.nativeElement ? this.nativeElement.charting = value : undefined;
    }
    /** @description Sets the TreeGrid checkboxes. */
    get checkBoxes() {
        return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
    }
    set checkBoxes(value) {
        this.nativeElement ? this.nativeElement.checkBoxes = value : undefined;
    }
    /** @description Sets the Grid Data Export options. */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        this.nativeElement ? this.nativeElement.dataExport = value : undefined;
    }
    /** @description Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
    get dataSourceSettings() {
        return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
    }
    set dataSourceSettings(value) {
        this.nativeElement ? this.nativeElement.dataSourceSettings = value : undefined;
    }
    /** @description Describes the grid's editing settings. */
    get editing() {
        return this.nativeElement ? this.nativeElement.editing : undefined;
    }
    set editing(value) {
        this.nativeElement ? this.nativeElement.editing = value : undefined;
    }
    /** @description Describes the grid's filtering settings. */
    get filtering() {
        return this.nativeElement ? this.nativeElement.filtering : undefined;
    }
    set filtering(value) {
        this.nativeElement ? this.nativeElement.filtering = value : undefined;
    }
    /** @description Describes the grid's grouping settings. */
    get grouping() {
        return this.nativeElement ? this.nativeElement.grouping : undefined;
    }
    set grouping(value) {
        this.nativeElement ? this.nativeElement.grouping = value : undefined;
    }
    /** @description Sets the messages values. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings. */
    get onCellValue() {
        return this.nativeElement ? this.nativeElement.onCellValue : undefined;
    }
    set onCellValue(value) {
        this.nativeElement ? this.nativeElement.onCellValue = value : undefined;
    }
    /** @description Callback function() called when the grid has been rendered. */
    get onCellUpdate() {
        return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
    }
    set onCellUpdate(value) {
        this.nativeElement ? this.nativeElement.onCellUpdate = value : undefined;
    }
    /** @description Callback function() called when the grid has been rendered for first time and bindings are completed. The component is ready. */
    get onCellRender() {
        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
    }
    set onCellRender(value) {
        this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
    }
    /** @description Sets or gets the rows  CSS class rules. Different CSS class names are conditionally applied. Example: rowCSSRules: { 'cell-class-1': settings =&gt; settings.data.quantity === 5, 'cell-class-2': settings =&gt; settings.data.quantity &lt; 5, 'cell-class-3': settings =&gt; settings.data.quantity &gt; 5 }.  The settings object contains the following properties: index, data, row, api. */
    get onBeforeInit() {
        return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
    }
    set onBeforeInit(value) {
        this.nativeElement ? this.nativeElement.onBeforeInit = value : undefined;
    }
    /** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
    get onInit() {
        return this.nativeElement ? this.nativeElement.onInit : undefined;
    }
    set onInit(value) {
        this.nativeElement ? this.nativeElement.onInit = value : undefined;
    }
    /** @description Sets the grid users. Expects an array with 'id', 'name' and optionally 'color' and 'image' properties. */
    get onAfterInit() {
        return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
    }
    set onAfterInit(value) {
        this.nativeElement ? this.nativeElement.onAfterInit = value : undefined;
    }
    /** @description Sets the grid's image and filter upload settings for the image and attachment columns. */
    get onChartInit() {
        return this.nativeElement ? this.nativeElement.onChartInit : undefined;
    }
    set onChartInit(value) {
        this.nativeElement ? this.nativeElement.onChartInit = value : undefined;
    }
    /** @description Describes the paging settings. */
    get onRender() {
        return this.nativeElement ? this.nativeElement.onRender : undefined;
    }
    set onRender(value) {
        this.nativeElement ? this.nativeElement.onRender = value : undefined;
    }
    /** @description Describes the pager settings. */
    get onLoad() {
        return this.nativeElement ? this.nativeElement.onLoad : undefined;
    }
    set onLoad(value) {
        this.nativeElement ? this.nativeElement.onLoad = value : undefined;
    }
    /** @description Sets the row details. */
    get onKey() {
        return this.nativeElement ? this.nativeElement.onKey : undefined;
    }
    set onKey(value) {
        this.nativeElement ? this.nativeElement.onKey = value : undefined;
    }
    /** @description Sets the scroll mode settings. */
    get onRowInit() {
        return this.nativeElement ? this.nativeElement.onRowInit : undefined;
    }
    set onRowInit(value) {
        this.nativeElement ? this.nativeElement.onRowInit = value : undefined;
    }
    /** @description Describes the column header settings. */
    get onRowDetailInit() {
        return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
    }
    set onRowDetailInit(value) {
        this.nativeElement ? this.nativeElement.onRowDetailInit = value : undefined;
    }
    /** @description Describes the summary row settings. */
    get onRowDetailUpdated() {
        return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
    }
    set onRowDetailUpdated(value) {
        this.nativeElement ? this.nativeElement.onRowDetailUpdated = value : undefined;
    }
    /** @description Sets the grid's state settings. */
    get onRowHistory() {
        return this.nativeElement ? this.nativeElement.onRowHistory : undefined;
    }
    set onRowHistory(value) {
        this.nativeElement ? this.nativeElement.onRowHistory = value : undefined;
    }
    /** @description Describes the settings for the group header. */
    get onRowStyle() {
        return this.nativeElement ? this.nativeElement.onRowStyle : undefined;
    }
    set onRowStyle(value) {
        this.nativeElement ? this.nativeElement.onRowStyle = value : undefined;
    }
    /** @description Describes the header settings of the grid. */
    get onRowInserted() {
        return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
    }
    set onRowInserted(value) {
        this.nativeElement ? this.nativeElement.onRowInserted = value : undefined;
    }
    /** @description Describes the footer settings of the grid. */
    get onRowRemoved() {
        return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
    }
    set onRowRemoved(value) {
        this.nativeElement ? this.nativeElement.onRowRemoved = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get onRowUpdate() {
        return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
    }
    set onRowUpdate(value) {
        this.nativeElement ? this.nativeElement.onRowUpdate = value : undefined;
    }
    /** @description The rows property is used to describe all rows displayed in the grid. */
    get onRowUpdated() {
        return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
    }
    set onRowUpdated(value) {
        this.nativeElement ? this.nativeElement.onRowUpdated = value : undefined;
    }
    /** @description Describes the selection settings. */
    get onRowClass() {
        return this.nativeElement ? this.nativeElement.onRowClass : undefined;
    }
    set onRowClass(value) {
        this.nativeElement ? this.nativeElement.onRowClass = value : undefined;
    }
    /** @description Describes sorting settings. */
    get onCellClass() {
        return this.nativeElement ? this.nativeElement.onCellClass : undefined;
    }
    set onCellClass(value) {
        this.nativeElement ? this.nativeElement.onCellClass = value : undefined;
    }
    /** @description undefined */
    get onColumnInit() {
        return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
    }
    set onColumnInit(value) {
        this.nativeElement ? this.nativeElement.onColumnInit = value : undefined;
    }
    /** @description undefined */
    get onColumnInserted() {
        return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
    }
    set onColumnInserted(value) {
        this.nativeElement ? this.nativeElement.onColumnInserted = value : undefined;
    }
    /** @description undefined */
    get onColumnRemoved() {
        return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
    }
    set onColumnRemoved(value) {
        this.nativeElement ? this.nativeElement.onColumnRemoved = value : undefined;
    }
    /** @description undefined */
    get onColumnUpdated() {
        return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
    }
    set onColumnUpdated(value) {
        this.nativeElement ? this.nativeElement.onColumnUpdated = value : undefined;
    }
    /** @description undefined */
    get onColumnClone() {
        return this.nativeElement ? this.nativeElement.onColumnClone : undefined;
    }
    set onColumnClone(value) {
        this.nativeElement ? this.nativeElement.onColumnClone = value : undefined;
    }
    /** @description undefined */
    get onCommand() {
        return this.nativeElement ? this.nativeElement.onCommand : undefined;
    }
    set onCommand(value) {
        this.nativeElement ? this.nativeElement.onCommand = value : undefined;
    }
    /** @description undefined */
    get rowCSSRules() {
        return this.nativeElement ? this.nativeElement.rowCSSRules : undefined;
    }
    set rowCSSRules(value) {
        this.nativeElement ? this.nativeElement.rowCSSRules = value : undefined;
    }
    /** @description undefined */
    get currentUser() {
        return this.nativeElement ? this.nativeElement.currentUser : undefined;
    }
    set currentUser(value) {
        this.nativeElement ? this.nativeElement.currentUser = value : undefined;
    }
    /** @description undefined */
    get users() {
        return this.nativeElement ? this.nativeElement.users : undefined;
    }
    set users(value) {
        this.nativeElement ? this.nativeElement.users = value : undefined;
    }
    /** @description undefined */
    get uploadSettings() {
        return this.nativeElement ? this.nativeElement.uploadSettings : undefined;
    }
    set uploadSettings(value) {
        this.nativeElement ? this.nativeElement.uploadSettings = value : undefined;
    }
    /** @description undefined */
    get paging() {
        return this.nativeElement ? this.nativeElement.paging : undefined;
    }
    set paging(value) {
        this.nativeElement ? this.nativeElement.paging = value : undefined;
    }
    /** @description undefined */
    get pager() {
        return this.nativeElement ? this.nativeElement.pager : undefined;
    }
    set pager(value) {
        this.nativeElement ? this.nativeElement.pager = value : undefined;
    }
    /** @description undefined */
    get rowDetail() {
        return this.nativeElement ? this.nativeElement.rowDetail : undefined;
    }
    set rowDetail(value) {
        this.nativeElement ? this.nativeElement.rowDetail = value : undefined;
    }
    /** @description undefined */
    get scrolling() {
        return this.nativeElement ? this.nativeElement.scrolling : undefined;
    }
    set scrolling(value) {
        this.nativeElement ? this.nativeElement.scrolling = value : undefined;
    }
    /** @description undefined */
    get columnHeader() {
        return this.nativeElement ? this.nativeElement.columnHeader : undefined;
    }
    set columnHeader(value) {
        this.nativeElement ? this.nativeElement.columnHeader = value : undefined;
    }
    /** @description undefined */
    get summaryRow() {
        return this.nativeElement ? this.nativeElement.summaryRow : undefined;
    }
    set summaryRow(value) {
        this.nativeElement ? this.nativeElement.summaryRow = value : undefined;
    }
    /** @description undefined */
    get stateSettings() {
        return this.nativeElement ? this.nativeElement.stateSettings : undefined;
    }
    set stateSettings(value) {
        this.nativeElement ? this.nativeElement.stateSettings = value : undefined;
    }
    /** @description undefined */
    get groupHeader() {
        return this.nativeElement ? this.nativeElement.groupHeader : undefined;
    }
    set groupHeader(value) {
        this.nativeElement ? this.nativeElement.groupHeader = value : undefined;
    }
    /** @description undefined */
    get header() {
        return this.nativeElement ? this.nativeElement.header : undefined;
    }
    set header(value) {
        this.nativeElement ? this.nativeElement.header = value : undefined;
    }
    /** @description undefined */
    get footer() {
        return this.nativeElement ? this.nativeElement.footer : undefined;
    }
    set footer(value) {
        this.nativeElement ? this.nativeElement.footer = value : undefined;
    }
    /** @description undefined */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description undefined */
    get rows() {
        return this.nativeElement ? this.nativeElement.rows : undefined;
    }
    set rows(value) {
        this.nativeElement ? this.nativeElement.rows = value : undefined;
    }
    /** @description undefined */
    get selection() {
        return this.nativeElement ? this.nativeElement.selection : undefined;
    }
    set selection(value) {
        this.nativeElement ? this.nativeElement.selection = value : undefined;
    }
    /** @description undefined */
    get sorting() {
        return this.nativeElement ? this.nativeElement.sorting : undefined;
    }
    set sorting(value) {
        this.nativeElement ? this.nativeElement.sorting = value : undefined;
    }
    /** @description Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {any} data. row data matching the data source
    * @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    addRow(data, insertAtBottom, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRow(data, insertAtBottom, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addRow(data, insertAtBottom, callback);
            });
        }
    }
    /** @description Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addNewRow(position) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.addNewRow(position);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Adds a new column.
    * @param {any} column. A Grid column object. See 'columns' property.
    * @returns {boolean}
  */
    addNewColumn(column) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.addNewColumn(column);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
    * @param {number} count. The count of unbound rows.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addUnboundRow(count, position) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.addUnboundRow(count, position);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Adds a filter to a column. This method will apply a filter to the Grid data. Example for adding multiple filters to a column: grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"']). Example for adding single filter to a column: grid.addFilter('lastName', 'CONTAINS "burke"'). Example for adding numeric filter:  grid.addFilter('quantity', '&lt;= 5')
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} filter. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @param {boolean} refreshFilters?. Set this to false, if you will use multiple 'addFilter' calls. By doing this, you will avoid unnecessary renders.
    */
    addFilter(dataField, filter, refreshFilters) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter, refreshFilters);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(dataField, filter, refreshFilters);
            });
        }
    }
    /** @description Groups the Grid by a data field. This method will add a group to the Grid when grouping is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    addGroup(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(dataField);
            });
        }
    }
    /** @description Sorts the Grid by a data field. This method will add a sorting to the Grid when sorting is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} sortOrder. column's sort order. Use 'asc' or 'desc'.
    */
    addSort(dataField, sortOrder) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataField, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataField, sortOrder);
            });
        }
    }
    /** @description Auto-sizes grid rows. This method will update the height of all Grid rows.
    */
    autoSizeRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeRows();
            });
        }
    }
    /** @description Auto-sizes grid columns. This method will update the width of all Grid columns.
    */
    autoSizeColumns() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeColumns();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeColumns();
            });
        }
    }
    /** @description Auto-sizes grid column. This method will update the width of a Grid column by measuring the cells and column header label width.
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    autoSizeColumn(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeColumn(dataField);
            });
        }
    }
    /** @description This method returns true, if all rows in the Grid are selected.
    * @returns {boolean}
  */
    areAllRowsSelected() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.areAllRowsSelected();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }
    /** @description Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    beginEdit(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(rowId, dataField);
            });
        }
    }
    /** @description Clears all filters. Refreshes the view and updates all filter input components.
    */
    clearFilter() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilter();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilter();
            });
        }
    }
    /** @description Clears all data groups. Refreshes the view and updates the DataGrid component.
    */
    clearGroups() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGroups();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearGroups();
            });
        }
    }
    /** @description Clears all sorting. Refreshes the view and updates the DataGrid component.
    */
    clearSort() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSort();
            });
        }
    }
    /** @description Clears the selection that user have made. All row, cell and column selection highlights will be removed.
    */
    clearSelection() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }
    /** @description Cancels the editing. This method closes the cell editor and cancels the changes.
    */
    cancelEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelEdit();
            });
        }
    }
    /** @description Checks a TreeGrid row. This method updates the row's check-box.
    * @param {string | number} rowId. row bound id
    */
    checkRow(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkRow(rowId);
            });
        }
    }
    /** @description Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
    */
    checkAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkAllRows();
            });
        }
    }
    /** @description Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
    */
    clearRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearRows();
            });
        }
    }
    /** @description Closes the column drop-down menu.
    */
    closeMenu() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeMenu();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeMenu();
            });
        }
    }
    /** @description Collapses a TreeGrid or Grouping row.
    * @param {string | number} rowId. row bound id
    */
    collapseRow(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseRow(rowId);
            });
        }
    }
    /** @description Collapses all TreeGrid or Grouping rows.
    */
    collapseAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllRows();
            });
        }
    }
    /** @description Creates a Chart, when charting is enabled.
    * @param {string} type. Chart's type
    * @param {any} dataSource?. Chart's data source
    */
    createChart(type, dataSource) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createChart(type, dataSource);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createChart(type, dataSource);
            });
        }
    }
    /** @description Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
    */
    deleteRow(rowId, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(rowId, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteRow(rowId, callback);
            });
        }
    }
    /** @description Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {boolean}
  */
    ensureVisible(rowId, dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.ensureVisible(rowId, dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Ends the editing. This method confirms all changes and closes the opened cell editor(s).
    */
    endEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endEdit();
            });
        }
    }
    /** @description Ends the update operation. This method will resume the rendering and will refresh the Grid.
    * @param {boolean} refresh?. The flag that control the calls of the refresh method.
    */
    endUpdate(refresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate(refresh);
            });
        }
    }
    /** @description Expands a TreeGrid or Grouping row. For example, if you want to expand the first group, then its second sub grup, then the first sub sub group, you can use: grid.expandRow('0.1.0');
    * @param {string | number} rowId. row bound id
    */
    expandRow(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandRow(rowId);
            });
        }
    }
    /** @description Expands rows to a given group level. For example 'grid.expandRowsToGroupLevel(1);' means that all groups at the root level will be expanded.
    * @param {number} level. row group level
    */
    expandRowsToGroupLevel(level) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRowsToGroupLevel(level);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandRowsToGroupLevel(level);
            });
        }
    }
    /** @description Expands all TreeGrid or Grouping rows.
    */
    expandAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllRows();
            });
        }
    }
    /** @description Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
    * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    */
    exportData(Dataformat) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(Dataformat);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(Dataformat);
            });
        }
    }
    /** @description Finds entries by using a query and returns an array of row ids. Example: const rows = grid.find('nancy'); returns all rows that have 'nancy' value. Example 2: const rows = grid.find('nancy, davolio'); returns all rows that have 'nancy' and 'davolio' values in the same row. Example 3: const rows = grid.find(5, 'quantity', '>'); returns all rows where the value of the 'quantity' field is > 5.
    * @param {string} query. Search query
    * @param {string} dataField?. Column data field.
    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @returns {any[]}
  */
    find(query, dataField, condition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.find(query, dataField, condition);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Finds entries by using a query and returns an array of cells. Each cell in the array is also an array in this format: [id, dataField, value]. Example: const cells = grid.findCells('nancy'); returns all cells that have 'nancy' value. Example 2: const cells = grid.findCells('nancy, davolio'); returns all cells that have 'nancy' and 'davolio' values.
    * @param {string} query. Search query. You can enter multiple search strings, by using ','. Example: 'nancy, davolio'
    * @returns {any[]}
  */
    findCells(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.findCells(query);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Navigates to a page, when paging is enabled.
    * @param {number} index. page index
    */
    goToPage(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.goToPage(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.goToPage(index);
            });
        }
    }
    /** @description Navigates to the next page, when grid paging is enabled.
    */
    nextPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.nextPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.nextPage();
            });
        }
    }
    /** @description Navigates to the prev page, when grid paging is enabled.
    */
    prevPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.prevPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.prevPage();
            });
        }
    }
    /** @description Navigates to the first page, when grid paging is enabled.
    */
    firstPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.firstPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.firstPage();
            });
        }
    }
    /** @description Navigates to the last page, when grid paging is enabled.
    */
    lastPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lastPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lastPage();
            });
        }
    }
    /** @description Focuses and selects a cell or row. The keyboard navigation starts from the focused cell or row. Any previously applied selection will be cleared after calling this method.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    focusAndSelect(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focusAndSelect(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focusAndSelect(rowId, dataField);
            });
        }
    }
    /** @description Iterates through each row in the grid and calls the callback for each row. This is similar to the forEach method on a JavaScript array. This is called for each row, ignoring grouping, filtering or sorting applied in the Grid.
    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
    */
    forEachRow(rowCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.forEachRow(rowCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.forEachRow(rowCallback);
            });
        }
    }
    /** @description Similar to forEachRow. Iterates through each row in the grid and calls the callback for each row. This method takes into account filtering and sorting applied to the Grid.
    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
    */
    forEachRowAfterFilterAndSort(rowCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
            });
        }
    }
    /** @description Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    getVerticalScrollMax() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getVerticalScrollMax();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the position of the vertical scrollbar.
    * @returns {number}
  */
    getVerticalScrollValue() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getVerticalScrollValue();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    getHorizontalScrollMax() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getHorizontalScrollMax();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the position of the horizontal scrollbar.
    * @returns {number}
  */
    getHorizontalScrollValue() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getHorizontalScrollValue();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'.
    * @returns {any}
  */
    getColumns() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getColumns();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the editing cell(s), when the grid is editing.
    * @returns {any[]}
  */
    getEditCells() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getEditCells();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the groups array.
    * @returns {any[]}
  */
    getGroups() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getGroups();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value.
    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
    getSortedColumns() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSortedColumns();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selection.
    * @returns {any}
  */
    getSelection() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelection();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets an Array where each item is an Array of row id and row data. If the Grid is used in virtual mode, the row data parameter is empty object, because the data is loaded on demand.
    * @returns {any[]}
  */
    getSelectedRows() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedRows();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selected row ids.
    * @returns {any[]}
  */
    getSelectedRowIds() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedRowIds();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selected row indexes.
    * @returns {any[]}
  */
    getSelectedRowIndexes() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedRowIndexes();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value.
    * @returns {any[]}
  */
    getSelectedCells() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedCells();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets an array of columns with applied filters.
    * @returns {any}
  */
    getFilteredColumns() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getFilteredColumns();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets an array of rows, which are visible and match the applied filter.
    * @returns {any}
  */
    getVisibleRows() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getVisibleRows();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
    * @returns {any}
  */
    getViewRows() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getViewRows();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
    * @returns {any}
  */
    getState() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getState();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Saves the Grid state and returns a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
    * @param {string} name?. state name
    * @returns {any}
  */
    saveState(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.saveState(name);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Loads a previously saved Grid state. You can pass a state name when there is a state which was previously saved with the saveState(stateName) method call or a state object returned by the saveState or getState method calls. The state object is required to be a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
    * @param {any} state. state name or state object
    * @returns {any}
  */
    loadState(state) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.loadState(state);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Resets the Grid state.
    */
    resetState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.resetState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.resetState();
            });
        }
    }
    /** @description Gets the changes from the batch edit.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    getBatchEditChanges() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getBatchEditChanges();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a value of a cell.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {any}
  */
    getCellValue(rowId, dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getCellValue(rowId, dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a column. Returns a Grid column object.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {GridColumn}
  */
    getColumn(dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getColumn(dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a value of a column.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    getColumnProperty(dataField, propertyName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getColumnProperty(dataField, propertyName);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a value of a row.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    getRowProperty(rowId, propertyName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getRowProperty(rowId, propertyName);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a row. Returns a Grid row object.
    * @param {string | number} rowId. row bound id
    * @returns {GridRow}
  */
    getRow(rowId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getRow(rowId);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a row by its index. Returns a Grid row object.
    * @param {number} rowIndex. row bound index
    * @returns {GridRow}
  */
    getRowByIndex(rowIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getRowByIndex(rowIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the Data source data associated to the row.
    * @param {string | number} rowId. row bound id
    * @returns {any}
  */
    getRowData(rowId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getRowData(rowId);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the Row's id by a row index.
    * @param {number} rowIndex. row index
    * @returns {string | number}
  */
    getRowId(rowIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getRowId(rowIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets whether a column's drop-down menu is opened.
    * @returns {boolean}
  */
    hasMenu() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.hasMenu();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description This method returns true, if any rows in the Grid are selected.
    * @returns {boolean}
  */
    hasSelectedRows() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.hasSelectedRows();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Hides the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    */
    hideDetail(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideDetail(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideDetail(rowId);
            });
        }
    }
    /** @description Highlights a column. Highlights a Grid column.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    highlightColumn(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightColumn(dataField);
            });
        }
    }
    /** @description Highlights a cell. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} className?. CSS Class Name
    */
    highlightCell(rowId, dataField, className) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightCell(rowId, dataField, className);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightCell(rowId, dataField, className);
            });
        }
    }
    /** @description Highlights a row. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} className?. CSS Class Name
    */
    highlightRow(rowId, className) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightRow(rowId, className);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightRow(rowId, className);
            });
        }
    }
    /** @description Inserts a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {any} data. row data matching the data source
    * @param {number} index?. Determines the insert index. The default value is the last index.
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    insertRow(data, index, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertRow(data, index, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertRow(data, index, callback);
            });
        }
    }
    /** @description Opens a column drop-down menu.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    openMenu(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openMenu(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openMenu(dataField);
            });
        }
    }
    /** @description Opens a context menu. Note that context menu should be enabled.
    * @param {number} left. Left Position.
    * @param {number} top. Top Position.
    */
    openContextMenu(left, top) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openContextMenu(left, top);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openContextMenu(left, top);
            });
        }
    }
    /** @description Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property.
    */
    print() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }
    /** @description Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
    */
    refresh() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }
    /** @description Refreshes the grid with the current property values. This method will refresh the Grid layout.
    */
    refreshView() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshView();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshView();
            });
        }
    }
    /** @description Refreshes the grid cells in view. The method is useful for live-updates of cell values.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {boolean} refreshFilters?. Set this to false, if you need to make multiple removeFilter calls.
    */
    removeFilter(dataField, refreshFilters) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField, refreshFilters);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter(dataField, refreshFilters);
            });
        }
    }
    /** @description Removes a column filter.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    removeGroup(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(dataField);
            });
        }
    }
    /** @description Removes a group by data field. This method will remove a group to the Grid when grouping is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    removeSort(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort(dataField);
            });
        }
    }
    /** @description Removes a sorting by data field. This method will remove a sorting from a Grid column.
    */
    refreshSort() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshSort();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshSort();
            });
        }
    }
    /** @description Re-sorts the Grid by using the already applied column sortings and re-renders the Grid.
    */
    revertBatchEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.revertBatchEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.revertBatchEdit();
            });
        }
    }
    /** @description Reverts the batch edit changes. This method cancels all changes made by the end-user.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
    */
    reorderColumns(dataField, referenceDataField, insertAfter) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
            });
        }
    }
    /** @description Reorders two DataGrid columns.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string | null} sortOrder. column's sort order. Use 'asc', 'desc' or null.
    */
    sortBy(dataField, sortOrder) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(dataField, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(dataField, sortOrder);
            });
        }
    }
    /** @description Sorts the Grid by a data field. This method will add or remove sorting, when sorting is enabled. To remove the sorting, use 'null' for the sortOrder parameter.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    */
    swapColumns(dataField, referenceDataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.swapColumns(dataField, referenceDataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.swapColumns(dataField, referenceDataField);
            });
        }
    }
    /** @description Swaps two DataGrid columns.
    */
    saveBatchEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveBatchEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveBatchEdit();
            });
        }
    }
    /** @description Saves the batch edit changes. This method confirms the editing changes made by the end-user.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    select(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rowId, dataField);
            });
        }
    }
    /** @description Selects a row, cell or column.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string | number} endRowId. row bound id
    * @param {string} endDataField. column bound data field
    */
    selectRange(rowId, dataField, endRowId, endDataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
            });
        }
    }
    /** @description Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string | number} endRowId. row bound id
    */
    selectRowsRange(rowId, endRowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsRange(rowId, endRowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsRange(rowId, endRowId);
            });
        }
    }
    /** @description Selects a range of rows.
    * @param {(string | number)[]} rowId. Array of row ids
    */
    selectRows(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRows(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRows(rowId);
            });
        }
    }
    /** @description Selects multiple rows by their ids.
    */
    selectAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAllRows();
            });
        }
    }
    /** @description Selects all rows.
    * @param {number[]} rowIndex. Array of row indexes
    */
    selectRowsByIndex(rowIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsByIndex(rowIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsByIndex(rowIndex);
            });
        }
    }
    /** @description Selects multiple rows by their index.
    * @param {string} query. Search query
    * @param {string} dataField?. Column data field.
    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    */
    selectRowsByQuery(query, dataField, condition) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsByQuery(query, dataField, condition);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsByQuery(query, dataField, condition);
            });
        }
    }
    /** @description Selects rows by using a query. Example: grid.selectRowsByQuery('nancy'); selects all rows that have 'nancy' value. Example 2: grid.selectRowsByQuery('nancy, davolio'); selects all rows that have 'nancy' and 'davolio' values in the same row. Example 3: grid.selectRowsByQuery(5, 'quantity', '>'); selects all rows where the value of the 'quantity' field is > 5.
    * @param {(string | number)[]} rowIds. Array of row ids
    * @param {string[]} dataFields. Array of data fields.
    */
    selectCells(rowIds, dataFields) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectCells(rowIds, dataFields);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectCells(rowIds, dataFields);
            });
        }
    }
    /** @description Selects multiple cells by their ids and dataFields. Example: grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']); - selects the 'firstName', 'quantity' and 'date' cells from the first, second and third rows.
    * @param {string} query. Search query
    */
    selectCellsByQuery(query) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectCellsByQuery(query);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectCellsByQuery(query);
            });
        }
    }
    /** @description Selects cells by using a query. Example: grid.selectCellsByQuery('nancy'); selects all cells that have 'nancy' value. Example 2: grid.selectCellsByQuery('nancy, davolio'); selects all cells that have 'nancy' and 'davolio' values in the same row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string | number | Date | boolean} value. New Cell value.
    */
    setCellValue(rowId, dataField, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCellValue(rowId, dataField, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCellValue(rowId, dataField, value);
            });
        }
    }
    /** @description Sets a new value to a cell.
    * @param {GridColumn[]} columns. Columns array.
    */
    setColumns(columns) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumns(columns);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumns(columns);
            });
        }
    }
    /** @description Sets new columns to the Grid. The grid will redraw all the column headers, and then redraw all of the rows. By using 'setColumns', the grid will compare the new columns passed as argument to the method with existing columns. The Grid will automatically create new columns, keep old columns if they already exist and remove columns which are not in the 'setColumns' method argument. The benefit of that is that the state of the column like(sort, filter, width or other) will be kept, if the column exsits after the new columns are applied.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} propertyName. The column property's name.
    * @param {any} value. The new property value.
    */
    setColumnProperty(dataField, propertyName, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnProperty(dataField, propertyName, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumnProperty(dataField, propertyName, value);
            });
        }
    }
    /** @description Sets a property to a column.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The row property's name.
    * @param {any} value. The new property value.
    */
    setRowProperty(rowId, propertyName, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowProperty(rowId, propertyName, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowProperty(rowId, propertyName, value);
            });
        }
    }
    /** @description Sets a property to a row.
    * @param {string | number} rowId. row bound id
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The row style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
    */
    setRowStyle(rowId, rowStyle) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowStyle(rowId, rowStyle);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowStyle(rowId, rowStyle);
            });
        }
    }
    /** @description Sets a style to a row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. Column bound field name.
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The cell style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
    */
    setCellStyle(rowId, dataField, rowStyle) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
            });
        }
    }
    /** @description Sets a style to a row.
    * @param {number} value. The new scroll position
    */
    setVerticalScrollValue(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setVerticalScrollValue(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setVerticalScrollValue(value);
            });
        }
    }
    /** @description Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax.
    * @param {number} value. The new scroll position
    */
    setHorizontalScrollValue(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setHorizontalScrollValue(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setHorizontalScrollValue(value);
            });
        }
    }
    /** @description Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax.
    * @param {string | number} rowId. row bound id
    */
    showDetail(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showDetail(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showDetail(rowId);
            });
        }
    }
    /** @description Shows the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    * @param {any} data. row data matching the data source
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
    */
    updateRow(rowId, data, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateRow(rowId, data, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateRow(rowId, data, callback);
            });
        }
    }
    /** @description Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    unselect(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(rowId, dataField);
            });
        }
    }
    /** @description Unselects a row, cell or column.
    * @param {string | number} rowId. row bound id
    */
    uncheckRow(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckRow(rowId);
            });
        }
    }
    /** @description Unchecks a TreeGrid row. Sets its check-box to false.
    */
    uncheckAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckAllRows();
            });
        }
    }
    /** @description Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
    * @param {string | number} rowId. row bound id
    */
    toggleRow(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggleRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggleRow(rowId);
            });
        }
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
        this.listen();
    }
    ngOnDestroy() {
        this.unlisten();
    }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
    /** @description Add event listeners. */
    listen() {
        const that = this;
        that.eventHandlers['beginEditHandler'] = (event) => { that.onBeginEdit.emit(event); };
        that.nativeElement.addEventListener('beginEdit', that.eventHandlers['beginEditHandler']);
        that.eventHandlers['batchChangeHandler'] = (event) => { that.onBatchChange.emit(event); };
        that.nativeElement.addEventListener('batchChange', that.eventHandlers['batchChangeHandler']);
        that.eventHandlers['batchCancelHandler'] = (event) => { that.onBatchCancel.emit(event); };
        that.nativeElement.addEventListener('batchCancel', that.eventHandlers['batchCancelHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['columnClickHandler'] = (event) => { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['columnDoubleClickHandler'] = (event) => { that.onColumnDoubleClick.emit(event); };
        that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
        that.eventHandlers['columnResizeHandler'] = (event) => { that.onColumnResize.emit(event); };
        that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        that.eventHandlers['columnDragStartHandler'] = (event) => { that.onColumnDragStart.emit(event); };
        that.nativeElement.addEventListener('columnDragStart', that.eventHandlers['columnDragStartHandler']);
        that.eventHandlers['columnDraggingHandler'] = (event) => { that.onColumnDragging.emit(event); };
        that.nativeElement.addEventListener('columnDragging', that.eventHandlers['columnDraggingHandler']);
        that.eventHandlers['columnDragEndHandler'] = (event) => { that.onColumnDragEnd.emit(event); };
        that.nativeElement.addEventListener('columnDragEnd', that.eventHandlers['columnDragEndHandler']);
        that.eventHandlers['columnReorderHandler'] = (event) => { that.onColumnReorder.emit(event); };
        that.nativeElement.addEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
        that.eventHandlers['commentAddHandler'] = (event) => { that.onCommentAdd.emit(event); };
        that.nativeElement.addEventListener('commentAdd', that.eventHandlers['commentAddHandler']);
        that.eventHandlers['commentRemoveHandler'] = (event) => { that.onCommentRemove.emit(event); };
        that.nativeElement.addEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);
        that.eventHandlers['contextMenuItemClickHandler'] = (event) => { that.onContextMenuItemClick.emit(event); };
        that.nativeElement.addEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);
        that.eventHandlers['rowDragStartHandler'] = (event) => { that.onRowDragStart.emit(event); };
        that.nativeElement.addEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
        that.eventHandlers['rowDraggingHandler'] = (event) => { that.onRowDragging.emit(event); };
        that.nativeElement.addEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
        that.eventHandlers['rowDragEndHandler'] = (event) => { that.onRowDragEnd.emit(event); };
        that.nativeElement.addEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
        that.eventHandlers['rowReorderHandler'] = (event) => { that.onRowReorder.emit(event); };
        that.nativeElement.addEventListener('rowReorder', that.eventHandlers['rowReorderHandler']);
        that.eventHandlers['rowExpandHandler'] = (event) => { that.onRowExpand.emit(event); };
        that.nativeElement.addEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);
        that.eventHandlers['rowCollapseHandler'] = (event) => { that.onRowCollapse.emit(event); };
        that.nativeElement.addEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);
        that.eventHandlers['rowClickHandler'] = (event) => { that.onRowClick.emit(event); };
        that.nativeElement.addEventListener('rowClick', that.eventHandlers['rowClickHandler']);
        that.eventHandlers['rowDoubleClickHandler'] = (event) => { that.onRowDoubleClick.emit(event); };
        that.nativeElement.addEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);
        that.eventHandlers['rowResizeHandler'] = (event) => { that.onRowResize.emit(event); };
        that.nativeElement.addEventListener('rowResize', that.eventHandlers['rowResizeHandler']);
        that.eventHandlers['rowStarredHandler'] = (event) => { that.onRowStarred.emit(event); };
        that.nativeElement.addEventListener('rowStarred', that.eventHandlers['rowStarredHandler']);
        that.eventHandlers['cellClickHandler'] = (event) => { that.onCellClick.emit(event); };
        that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        that.eventHandlers['cellDoubleClickHandler'] = (event) => { that.onCellDoubleClick.emit(event); };
        that.nativeElement.addEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);
        that.eventHandlers['endEditHandler'] = (event) => { that.onEndEdit.emit(event); };
        that.nativeElement.addEventListener('endEdit', that.eventHandlers['endEditHandler']);
        that.eventHandlers['filterHandler'] = (event) => { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['groupHandler'] = (event) => { that.onGroup.emit(event); };
        that.nativeElement.addEventListener('group', that.eventHandlers['groupHandler']);
        that.eventHandlers['openColumnDialogHandler'] = (event) => { that.onOpenColumnDialog.emit(event); };
        that.nativeElement.addEventListener('openColumnDialog', that.eventHandlers['openColumnDialogHandler']);
        that.eventHandlers['closeColumnDialogHandler'] = (event) => { that.onCloseColumnDialog.emit(event); };
        that.nativeElement.addEventListener('closeColumnDialog', that.eventHandlers['closeColumnDialogHandler']);
        that.eventHandlers['resizeHandler'] = (event) => { that.onResize.emit(event); };
        that.nativeElement.addEventListener('resize', that.eventHandlers['resizeHandler']);
        that.eventHandlers['rowTapHandler'] = (event) => { that.onRowTap.emit(event); };
        that.nativeElement.addEventListener('rowTap', that.eventHandlers['rowTapHandler']);
        that.eventHandlers['cellTapHandler'] = (event) => { that.onCellTap.emit(event); };
        that.nativeElement.addEventListener('cellTap', that.eventHandlers['cellTapHandler']);
        that.eventHandlers['pageHandler'] = (event) => { that.onPage.emit(event); };
        that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);
        that.eventHandlers['sortHandler'] = (event) => { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = (event) => { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = (event) => { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['beginEditHandler']) {
            that.nativeElement.removeEventListener('beginEdit', that.eventHandlers['beginEditHandler']);
        }
        if (that.eventHandlers['batchChangeHandler']) {
            that.nativeElement.removeEventListener('batchChange', that.eventHandlers['batchChangeHandler']);
        }
        if (that.eventHandlers['batchCancelHandler']) {
            that.nativeElement.removeEventListener('batchCancel', that.eventHandlers['batchCancelHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['columnClickHandler']) {
            that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        }
        if (that.eventHandlers['columnDoubleClickHandler']) {
            that.nativeElement.removeEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
        }
        if (that.eventHandlers['columnResizeHandler']) {
            that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        }
        if (that.eventHandlers['columnDragStartHandler']) {
            that.nativeElement.removeEventListener('columnDragStart', that.eventHandlers['columnDragStartHandler']);
        }
        if (that.eventHandlers['columnDraggingHandler']) {
            that.nativeElement.removeEventListener('columnDragging', that.eventHandlers['columnDraggingHandler']);
        }
        if (that.eventHandlers['columnDragEndHandler']) {
            that.nativeElement.removeEventListener('columnDragEnd', that.eventHandlers['columnDragEndHandler']);
        }
        if (that.eventHandlers['columnReorderHandler']) {
            that.nativeElement.removeEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
        }
        if (that.eventHandlers['commentAddHandler']) {
            that.nativeElement.removeEventListener('commentAdd', that.eventHandlers['commentAddHandler']);
        }
        if (that.eventHandlers['commentRemoveHandler']) {
            that.nativeElement.removeEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);
        }
        if (that.eventHandlers['contextMenuItemClickHandler']) {
            that.nativeElement.removeEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);
        }
        if (that.eventHandlers['rowDragStartHandler']) {
            that.nativeElement.removeEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
        }
        if (that.eventHandlers['rowDraggingHandler']) {
            that.nativeElement.removeEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
        }
        if (that.eventHandlers['rowDragEndHandler']) {
            that.nativeElement.removeEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
        }
        if (that.eventHandlers['rowReorderHandler']) {
            that.nativeElement.removeEventListener('rowReorder', that.eventHandlers['rowReorderHandler']);
        }
        if (that.eventHandlers['rowExpandHandler']) {
            that.nativeElement.removeEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);
        }
        if (that.eventHandlers['rowCollapseHandler']) {
            that.nativeElement.removeEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);
        }
        if (that.eventHandlers['rowClickHandler']) {
            that.nativeElement.removeEventListener('rowClick', that.eventHandlers['rowClickHandler']);
        }
        if (that.eventHandlers['rowDoubleClickHandler']) {
            that.nativeElement.removeEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);
        }
        if (that.eventHandlers['rowResizeHandler']) {
            that.nativeElement.removeEventListener('rowResize', that.eventHandlers['rowResizeHandler']);
        }
        if (that.eventHandlers['rowStarredHandler']) {
            that.nativeElement.removeEventListener('rowStarred', that.eventHandlers['rowStarredHandler']);
        }
        if (that.eventHandlers['cellClickHandler']) {
            that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        }
        if (that.eventHandlers['cellDoubleClickHandler']) {
            that.nativeElement.removeEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);
        }
        if (that.eventHandlers['endEditHandler']) {
            that.nativeElement.removeEventListener('endEdit', that.eventHandlers['endEditHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['groupHandler']) {
            that.nativeElement.removeEventListener('group', that.eventHandlers['groupHandler']);
        }
        if (that.eventHandlers['openColumnDialogHandler']) {
            that.nativeElement.removeEventListener('openColumnDialog', that.eventHandlers['openColumnDialogHandler']);
        }
        if (that.eventHandlers['closeColumnDialogHandler']) {
            that.nativeElement.removeEventListener('closeColumnDialog', that.eventHandlers['closeColumnDialogHandler']);
        }
        if (that.eventHandlers['resizeHandler']) {
            that.nativeElement.removeEventListener('resize', that.eventHandlers['resizeHandler']);
        }
        if (that.eventHandlers['rowTapHandler']) {
            that.nativeElement.removeEventListener('rowTap', that.eventHandlers['rowTapHandler']);
        }
        if (that.eventHandlers['cellTapHandler']) {
            that.nativeElement.removeEventListener('cellTap', that.eventHandlers['cellTapHandler']);
        }
        if (that.eventHandlers['pageHandler']) {
            that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
        }
        if (that.eventHandlers['sortHandler']) {
            that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
        }
        if (that.eventHandlers['scrollBottomReachedHandler']) {
            that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        }
        if (that.eventHandlers['scrollTopReachedHandler']) {
            that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        }
    }
};
GridComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "appearance", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "behavior", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "layout", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "clipboard", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "columns", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "contextMenu", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "columnMenu", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "columnGroups", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "conditionalFormatting", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "charting", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "checkBoxes", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "dataExport", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "dataSourceSettings", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "editing", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "filtering", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "grouping", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onCellValue", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onCellUpdate", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onCellRender", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onBeforeInit", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onInit", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onAfterInit", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onChartInit", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRender", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onLoad", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onKey", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowInit", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowDetailInit", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowDetailUpdated", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowHistory", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowStyle", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowInserted", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowRemoved", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowUpdate", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowUpdated", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onRowClass", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onCellClass", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onColumnInit", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onColumnInserted", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onColumnRemoved", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onColumnUpdated", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onColumnClone", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "onCommand", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "rowCSSRules", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "currentUser", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "users", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "uploadSettings", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "paging", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "pager", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "rowDetail", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "scrolling", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "columnHeader", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "summaryRow", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "stateSettings", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "groupHeader", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "header", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "footer", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "rows", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "selection", null);
tslib_1.__decorate([
    Input()
], GridComponent.prototype, "sorting", null);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onBeginEdit", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onBatchChange", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onBatchCancel", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onColumnClick", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onColumnDoubleClick", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onColumnResize", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onColumnDragStart", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onColumnDragging", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onColumnDragEnd", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onColumnReorder", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onCommentAdd", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onCommentRemove", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onContextMenuItemClick", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowDragStart", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowDragging", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowDragEnd", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowReorder", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowExpand", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowCollapse", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowClick", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowDoubleClick", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowResize", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowStarred", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onCellClick", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onCellDoubleClick", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onEndEdit", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onFilter", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onGroup", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onOpenColumnDialog", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onCloseColumnDialog", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onResize", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onRowTap", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onCellTap", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onPage", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onSort", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onScrollBottomReached", void 0);
tslib_1.__decorate([
    Output()
], GridComponent.prototype, "onScrollTopReached", void 0);
GridComponent = tslib_1.__decorate([
    Directive({
        exportAs: 'smart-grid', selector: 'smart-grid, [smart-grid]'
    })
], GridComponent);
export { GridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9ncmlkLyIsInNvdXJjZXMiOlsic21hcnQuZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEMsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLFdBQVc7SUFDN0MsWUFBWSxHQUFxQjtRQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJSixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQTZrQmxDOzs7Ozs7Ozs7VUFTRTtRQUNRLGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7OztVQUdFO1FBQ1Esa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7O1VBR0U7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzs7OztVQUtFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7OztVQUtFO1FBQ1Esa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7Ozs7VUFLRTtRQUNRLHdCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7Ozs7VUFNRTtRQUNRLG1CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7Ozs7OztVQU1FO1FBQ1Esc0JBQWlCLEdBQThCLElBQUks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QUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtC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RUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLDBCQUEwQjtLQUM1RCxDQUFDO0dBRVcsYUFBYSxDQW1nR3pCO1NBbmdHWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgR3JpZEFwcGVhcmFuY2VBdXRvR2VuZXJhdGVSb3dMYWJlbE1vZGUsIEdyaWRBcHBlYXJhbmNlQXV0b0dlbmVyYXRlQ29sdW1uTGFiZWxNb2RlLCBHcmlkUmVzaXplTW9kZSwgR3JpZENsaXBib2FyZEF1dG9GaWxsTW9kZSwgSG9yaXpvbnRhbEFsaWdubWVudCwgVmVydGljYWxBbGlnbm1lbnQsIFBvc2l0aW9uLCBHcmlkQ29sdW1uRmlsdGVyTWVudU1vZGUsIEdyaWRDb2x1bW5Tb3J0T3JkZXIsIEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmdDb25kaXRpb24sIEdyaWREYXRhRXhwb3J0UGFnZU9yaWVudGF0aW9uLCBHcmlkRGF0YVNvdXJjZVNldHRpbmdzU2FuaXRpemVIVE1MLCBHcmlkRGF0YVNvdXJjZVNldHRpbmdzRGF0YUZpZWxkRGF0YVR5cGUsIEdyaWREYXRhU291cmNlU2V0dGluZ3NEYXRhU291cmNlVHlwZSwgR3JpZEVkaXRpbmdBY3Rpb24sIExheW91dFBvc2l0aW9uLCBHcmlkQ29tbWFuZERpc3BsYXlNb2RlLCBHcmlkRWRpdGluZ01vZGUsIEdyaWRFZGl0aW5nQWRkTmV3Um93RGlzcGxheU1vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3dBcHBseU1vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJNZW51TW9kZSwgR3JpZEdyb3VwaW5nRXhwYW5kTW9kZSwgR3JpZEdyb3VwaW5nUmVuZGVyTW9kZSwgR3JpZFBhZ2VyQXV0b0VsbGlwc2lzLCBTY3JvbGxpbmcsIEdyaWRTZWxlY3Rpb25Nb2RlLCBHcmlkU2VsZWN0aW9uQWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlc1NlbGVjdEFsbE1vZGUsIEdyaWRTb3J0aW5nTW9kZSwgR3JpZFNvcnRpbmdDb21tYW5kS2V5LCBHcmlkQXBwZWFyYW5jZSwgR3JpZEJlaGF2aW9yLCBHcmlkTGF5b3V0LCBHcmlkQ2xpcGJvYXJkLCBHcmlkQ29sdW1uLCBHcmlkQ29udGV4dE1lbnUsIEdyaWRDb250ZXh0TWVudURhdGFTb3VyY2UsIEdyaWRDb21tYW5kLCBHcmlkQ29sdW1uTWVudSwgR3JpZENvbHVtbk1lbnVEYXRhU291cmNlLCBHcmlkQ29sdW1uR3JvdXAsIEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmcsIEdyaWRDaGFydGluZywgRGlhbG9nLCBHcmlkQ2hlY2tCb3hlcywgR3JpZERhdGFFeHBvcnQsIEdyaWREYXRhU291cmNlU2V0dGluZ3MsIEdyaWREYXRhU291cmNlU2V0dGluZ3NEYXRhRmllbGQsIEdyaWRFZGl0aW5nLCBHcmlkRWRpdGluZ0NvbW1hbmRLZXlzLCBHcmlkQ29tbWFuZEtleSwgR3JpZEVkaXRpbmdDb21tYW5kQmFyLCBHcmlkRWRpdGluZ0NvbW1hbmRCYXJEYXRhU291cmNlLCBHcmlkRWRpdGluZ0NvbW1hbmRDb2x1bW4sIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbkRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQWRkTmV3Um93LCBHcmlkRWRpdGluZ0FkZE5ld0NvbHVtbiwgR3JpZEZpbHRlcmluZywgR3JpZEZpbHRlcmluZ0ZpbHRlclJvdywgR3JpZEZpbHRlcmluZ0ZpbHRlck1lbnUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJCdWlsZGVyLCBHcmlkR3JvdXBpbmcsIEdyaWRHcm91cGluZ0dyb3VwQmFyLCBHcmlkR3JvdXBpbmdTdW1tYXJ5Um93LCBHcmlkVXBsb2FkU2V0dGluZ3MsIEdyaWRQYWdpbmcsIEdyaWRQYWdpbmdTcGlubmVyLCBHcmlkUGFnZXIsIEdyaWRQYWdlclBhZ2VTaXplU2VsZWN0b3IsIEdyaWRQYWdlclN1bW1hcnksIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc1ByZXZOZXh0QnV0dG9ucywgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnNGaXJzdExhc3RCdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc0xhYmVscywgR3JpZFBhZ2VyTmF2aWdhdGlvbklucHV0LCBHcmlkUGFnZXJQYWdlSW5kZXhTZWxlY3RvcnMsIEdyaWRSb3dEZXRhaWwsIEdyaWRDb2x1bW5IZWFkZXIsIEdyaWRTdW1tYXJ5Um93LCBHcmlkU3RhdGVTZXR0aW5ncywgR3JpZEdyb3VwSGVhZGVyLCBHcmlkSGVhZGVyLCBHcmlkRm9vdGVyLCBHcmlkUm93LCBHcmlkQ2VsbCwgR3JpZFNlbGVjdGlvbiwgR3JpZFNlbGVjdGlvbkNoZWNrQm94ZXMsIEdyaWRTb3J0aW5nLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBEYXRhQWRhcHRlciwgQ2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBHcmlkQXBwZWFyYW5jZUF1dG9HZW5lcmF0ZVJvd0xhYmVsTW9kZSwgR3JpZEFwcGVhcmFuY2VBdXRvR2VuZXJhdGVDb2x1bW5MYWJlbE1vZGUsIEdyaWRSZXNpemVNb2RlLCBHcmlkQ2xpcGJvYXJkQXV0b0ZpbGxNb2RlLCBIb3Jpem9udGFsQWxpZ25tZW50LCBWZXJ0aWNhbEFsaWdubWVudCwgUG9zaXRpb24sIEdyaWRDb2x1bW5GaWx0ZXJNZW51TW9kZSwgR3JpZENvbHVtblNvcnRPcmRlciwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZ0NvbmRpdGlvbiwgR3JpZERhdGFFeHBvcnRQYWdlT3JpZW50YXRpb24sIEdyaWREYXRhU291cmNlU2V0dGluZ3NTYW5pdGl6ZUhUTUwsIEdyaWREYXRhU291cmNlU2V0dGluZ3NEYXRhRmllbGREYXRhVHlwZSwgR3JpZERhdGFTb3VyY2VTZXR0aW5nc0RhdGFTb3VyY2VUeXBlLCBHcmlkRWRpdGluZ0FjdGlvbiwgTGF5b3V0UG9zaXRpb24sIEdyaWRDb21tYW5kRGlzcGxheU1vZGUsIEdyaWRFZGl0aW5nTW9kZSwgR3JpZEVkaXRpbmdBZGROZXdSb3dEaXNwbGF5TW9kZSwgR3JpZEZpbHRlcmluZ0ZpbHRlclJvd0FwcGx5TW9kZSwgR3JpZEZpbHRlcmluZ0ZpbHRlck1lbnVNb2RlLCBHcmlkR3JvdXBpbmdFeHBhbmRNb2RlLCBHcmlkR3JvdXBpbmdSZW5kZXJNb2RlLCBHcmlkUGFnZXJBdXRvRWxsaXBzaXMsIFNjcm9sbGluZywgR3JpZFNlbGVjdGlvbk1vZGUsIEdyaWRTZWxlY3Rpb25BY3Rpb24sIEdyaWRTZWxlY3Rpb25DaGVja0JveGVzU2VsZWN0QWxsTW9kZSwgR3JpZFNvcnRpbmdNb2RlLCBHcmlkU29ydGluZ0NvbW1hbmRLZXksIEdyaWRBcHBlYXJhbmNlLCBHcmlkQmVoYXZpb3IsIEdyaWRMYXlvdXQsIEdyaWRDbGlwYm9hcmQsIEdyaWRDb2x1bW4sIEdyaWRDb250ZXh0TWVudSwgR3JpZENvbnRleHRNZW51RGF0YVNvdXJjZSwgR3JpZENvbW1hbmQsIEdyaWRDb2x1bW5NZW51LCBHcmlkQ29sdW1uTWVudURhdGFTb3VyY2UsIEdyaWRDb2x1bW5Hcm91cCwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZywgR3JpZENoYXJ0aW5nLCBEaWFsb2csIEdyaWRDaGVja0JveGVzLCBHcmlkRGF0YUV4cG9ydCwgR3JpZERhdGFTb3VyY2VTZXR0aW5ncywgR3JpZERhdGFTb3VyY2VTZXR0aW5nc0RhdGFGaWVsZCwgR3JpZEVkaXRpbmcsIEdyaWRFZGl0aW5nQ29tbWFuZEtleXMsIEdyaWRDb21tYW5kS2V5LCBHcmlkRWRpdGluZ0NvbW1hbmRCYXIsIEdyaWRFZGl0aW5nQ29tbWFuZEJhckRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbiwgR3JpZEVkaXRpbmdDb21tYW5kQ29sdW1uRGF0YVNvdXJjZSwgR3JpZEVkaXRpbmdBZGROZXdSb3csIEdyaWRFZGl0aW5nQWRkTmV3Q29sdW1uLCBHcmlkRmlsdGVyaW5nLCBHcmlkRmlsdGVyaW5nRmlsdGVyUm93LCBHcmlkRmlsdGVyaW5nRmlsdGVyTWVudSwgR3JpZEZpbHRlcmluZ0ZpbHRlckJ1aWxkZXIsIEdyaWRHcm91cGluZywgR3JpZEdyb3VwaW5nR3JvdXBCYXIsIEdyaWRHcm91cGluZ1N1bW1hcnlSb3csIEdyaWRVcGxvYWRTZXR0aW5ncywgR3JpZFBhZ2luZywgR3JpZFBhZ2luZ1NwaW5uZXIsIEdyaWRQYWdlciwgR3JpZFBhZ2VyUGFnZVNpemVTZWxlY3RvciwgR3JpZFBhZ2VyU3VtbWFyeSwgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zUHJldk5leHRCdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc0ZpcnN0TGFzdEJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zTGFiZWxzLCBHcmlkUGFnZXJOYXZpZ2F0aW9uSW5wdXQsIEdyaWRQYWdlclBhZ2VJbmRleFNlbGVjdG9ycywgR3JpZFJvd0RldGFpbCwgR3JpZENvbHVtbkhlYWRlciwgR3JpZFN1bW1hcnlSb3csIEdyaWRTdGF0ZVNldHRpbmdzLCBHcmlkR3JvdXBIZWFkZXIsIEdyaWRIZWFkZXIsIEdyaWRGb290ZXIsIEdyaWRSb3csIEdyaWRDZWxsLCBHcmlkU2VsZWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlcywgR3JpZFNvcnRpbmcsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEdyaWQgfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IERhdGFBZGFwdGVyLCBDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRleHBvcnRBczogJ3NtYXJ0LWdyaWQnLFx0c2VsZWN0b3I6ICdzbWFydC1ncmlkLCBbc21hcnQtZ3JpZF0nXG59KVxuXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxHcmlkPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgR3JpZDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogR3JpZDtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8R3JpZD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1ncmlkJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBvYmplY3QgY29udGFpbmluZyBzZXR0aW5ncyByZWxhdGVkIHRvIHRoZSBncmlkJ3MgYXBwZWFyYW5jZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFwcGVhcmFuY2UoKTogR3JpZEFwcGVhcmFuY2Uge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZWFyYW5jZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXBwZWFyYW5jZSh2YWx1ZTogR3JpZEFwcGVhcmFuY2UpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZWFyYW5jZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBvYmplY3QgY29udGFpbmluZyBzZXR0aW5ncyByZWxhdGVkIHRvIHRoZSBncmlkJ3MgYmVoYXZpb3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBiZWhhdmlvcigpOiBHcmlkQmVoYXZpb3Ige1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVoYXZpb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJlaGF2aW9yKHZhbHVlOiBHcmlkQmVoYXZpb3IpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVoYXZpb3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQW4gb2JqZWN0IGNvbnRhaW5pbmcgc2V0dGluZ3MgcmVsYXRlZCB0byB0aGUgZ3JpZCdzIGxheW91dC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxheW91dCgpOiBHcmlkTGF5b3V0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGF5b3V0KHZhbHVlOiBHcmlkTGF5b3V0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxheW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGNsaXBib2FyZCBwcm9wZXJ0eSBpcyB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGNsaXBib2FyZCBvcGVyYXRpb25zIHdpdGggQ3RybCtDLCBDdHJsK1ggYW5kIEN0cmwrViBrZXlib2FyZCBuYXZpZ2F0aW9ucy4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjbGlwYm9hcmQoKTogR3JpZENsaXBib2FyZCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwYm9hcmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNsaXBib2FyZCh2YWx1ZTogR3JpZENsaXBib2FyZCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwYm9hcmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGNvbHVtbnMgcHJvcGVydHkgaXMgdXNlZCB0byBkZXNjcmliZSBhbGwgY29sdW1ucyBkaXNwbGF5ZWQgaW4gdGhlIGdyaWQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiB7bGFiZWw6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmd9W10gfCBzdHJpbmdbXSB8IG51bWJlciB8IEdyaWRDb2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5zKHZhbHVlOiB7bGFiZWw6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmd9W10gfCBzdHJpbmdbXSB8IG51bWJlciB8IEdyaWRDb2x1bW5bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbnRleHQgTWVudSBpcyB0aGUgZHJvcC1kb3duIG1lbnUgZGlzcGxheWVkIGFmdGVyIHJpZ2h0LWNsaWNraW5nIGEgR3JpZCByb3cuIEl0IGFsbG93cyB5b3UgdG8gZGVsZXRlIHJvdywgZWRpdCBjZWxsIG9yIHJvdyBkZXBlbmRpbmcgb24gdGhlIGVkaXQgbW9kZS4gVGhlICdjb250ZXh0TWVudUl0ZW1DdXN0b20nIGRhdGFTb3VyY2Ugb3B0aW9uIGFsbG93cyB5b3UgdG8gYWRkIGN1c3RvbSBtZW51IGl0ZW0gdG8gdGhlIGNvbnRleHQgbWVudS4gWW91IGNhbiByZXBsYWNlIHRoZSBjb250ZXh0IG1lbnUgYnkgdXNpbmcgdGhlICdzZWxlY3RvcicgcHJvcGVydHkgYW5kIHNldHRpbmcgaXQgdG8gSUQgb2YgYSBTbWFydC5NZW51IGNvbXBvbmVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbnRleHRNZW51KCk6IEdyaWRDb250ZXh0TWVudSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGV4dE1lbnUodmFsdWU6IEdyaWRDb250ZXh0TWVudSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2x1bW4gTWVudSBpcyB0aGUgZHJvcC1kb3duIG1lbnUgZGlzcGxheWVkIGFmdGVyIGNsaWNraW5nIHRoZSBjb2x1bW4gaGVhZGVyJ3MgZHJvcC1kb3duIGJ1dHRvbiwgd2hpY2ggaXMgZGlzcGxheWVkIHdoZW4geW91IGhvdmVyIHRoZSBjb2x1bW4gaGVhZGVyLiBJdCBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSBjb2x1bW4gc2V0dGluZ3MuIEZvciBleGFtcGxlOiBTb3J0LCBGaWx0ZXIgb3IgR3JvdXAgdGhlIEdyaWQgYnkgdGhlIGN1cnJlbnQgY29sdW1uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uTWVudSgpOiBHcmlkQ29sdW1uTWVudSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5NZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5NZW51KHZhbHVlOiBHcmlkQ29sdW1uTWVudSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5NZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGNvbHVtbiBncm91cHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5Hcm91cHMoKTogR3JpZENvbHVtbkdyb3VwW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uR3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5Hcm91cHModmFsdWU6IEdyaWRDb2x1bW5Hcm91cFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkdyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgZGV0YWlscyBhYm91dCBjb25kaXRpb25hbCBmb3JtYXR0aW5nIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEdyaWQncyBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZygpOiBHcmlkQ29uZGl0aW9uYWxGb3JtYXR0aW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29uZGl0aW9uYWxGb3JtYXR0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb25kaXRpb25hbEZvcm1hdHRpbmcodmFsdWU6IEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmdbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgR3JpZCBDaGFydGluZyBEYXRhIFZpc3VhbGl6YXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjaGFydGluZygpOiBHcmlkQ2hhcnRpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hhcnRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNoYXJ0aW5nKHZhbHVlOiBHcmlkQ2hhcnRpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hhcnRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgVHJlZUdyaWQgY2hlY2tib3hlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNoZWNrQm94ZXMoKTogR3JpZENoZWNrQm94ZXMge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tCb3hlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2hlY2tCb3hlcyh2YWx1ZTogR3JpZENoZWNrQm94ZXMpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tCb3hlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBHcmlkIERhdGEgRXhwb3J0IG9wdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhRXhwb3J0KCk6IEdyaWREYXRhRXhwb3J0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFFeHBvcnQodmFsdWU6IEdyaWREYXRhRXhwb3J0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZ3JpZCdzIGRhdGEgc291cmNlLiBUaGUgdmFsdWUgb2YgZGF0YVNvdXJjZSBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgSlFYLkRhdGFBZGFwdGVyIG9yIGFuIEFycmF5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZ3JpZCdzIGRhdGEgc291cmNlIHNldHRpbmdzIHdoZW4gdGhlIGRhdGFTb3VyY2UgcHJvcGVydHkgaXMgc2V0IHRvIGFuIEFycmF5IG9yIFVSTC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2VTZXR0aW5ncygpOiBHcmlkRGF0YVNvdXJjZVNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2VTZXR0aW5ncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZVNldHRpbmdzKHZhbHVlOiBHcmlkRGF0YVNvdXJjZVNldHRpbmdzKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2VTZXR0aW5ncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGdyaWQncyBlZGl0aW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZWRpdGluZygpOiBHcmlkRWRpdGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlZGl0aW5nKHZhbHVlOiBHcmlkRWRpdGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0aW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgZ3JpZCdzIGZpbHRlcmluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlcmluZygpOiBHcmlkRmlsdGVyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyaW5nKHZhbHVlOiBHcmlkRmlsdGVyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGdyaWQncyBncm91cGluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwaW5nKCk6IEdyaWRHcm91cGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBpbmcodmFsdWU6IEdyaWRHcm91cGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBtZXNzYWdlcyB2YWx1ZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgZnVuY3Rpb24oY2hhcnQ6IEpRWC5DaGFydCkgY2FsbGVkIHdoZW4gdGhlIGNoYXJ0IGhhcyBiZWVuIGluaXRpYWxpemVkLiBZb3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSB0aGUgQ2hhcnQgZWxlbWVudCBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ2VsbFZhbHVlKCk6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxWYWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25DZWxsVmFsdWUodmFsdWU6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxWYWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbigpIGNhbGxlZCB3aGVuIHRoZSBncmlkIGhhcyBiZWVuIHJlbmRlcmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsVXBkYXRlKCk6IHsoY2VsbHM6IEdyaWRDZWxsW10sIG9sZFZhbHVlczogYW55W10sIHZhbHVlczogYW55W10sIGNvbmZpcm06IHsoY29tbWl0OiBib29sZWFuKTogdm9pZH0pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxVcGRhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbFVwZGF0ZSh2YWx1ZTogeyhjZWxsczogR3JpZENlbGxbXSwgb2xkVmFsdWVzOiBhbnlbXSwgdmFsdWVzOiBhbnlbXSwgY29uZmlybTogeyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkfSk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFVwZGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbigpIGNhbGxlZCB3aGVuIHRoZSBncmlkIGhhcyBiZWVuIHJlbmRlcmVkIGZvciBmaXJzdCB0aW1lIGFuZCBiaW5kaW5ncyBhcmUgY29tcGxldGVkLiBUaGUgY29tcG9uZW50IGlzIHJlYWR5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsUmVuZGVyKCk6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxSZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbFJlbmRlcih2YWx1ZTogeyhjZWxsOiBHcmlkQ2VsbCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFJlbmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHJvd3MgIENTUyBjbGFzcyBydWxlcy4gRGlmZmVyZW50IENTUyBjbGFzcyBuYW1lcyBhcmUgY29uZGl0aW9uYWxseSBhcHBsaWVkLiBFeGFtcGxlOiByb3dDU1NSdWxlczogeyAnY2VsbC1jbGFzcy0xJzogc2V0dGluZ3MgPSZndDsgc2V0dGluZ3MuZGF0YS5xdWFudGl0eSA9PT0gNSwgJ2NlbGwtY2xhc3MtMic6IHNldHRpbmdzID0mZ3Q7IHNldHRpbmdzLmRhdGEucXVhbnRpdHkgJmx0OyA1LCAnY2VsbC1jbGFzcy0zJzogc2V0dGluZ3MgPSZndDsgc2V0dGluZ3MuZGF0YS5xdWFudGl0eSAmZ3Q7IDUgfS4gIFRoZSBzZXR0aW5ncyBvYmplY3QgY29udGFpbnMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiBpbmRleCwgZGF0YSwgcm93LCBhcGkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkJlZm9yZUluaXQoKTogeygpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkJlZm9yZUluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQmVmb3JlSW5pdCh2YWx1ZTogeygpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkJlZm9yZUluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBpZCBvZiB0aGUgY3VycmVudCB1c2VyLiBIYXMgdG8gY29ycmVzcG9uZCB0byB0aGUgaWQgb2YgYW4gaXRlbSBmcm9tIHRoZSB1c2VycyBwcm9wZXJ0eS9hcnJheS4gRGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHVzZXIsIGRpZmZlcmVudCBwcml2aWxlZ2VzIGFyZSBlbmFibGVkLiBJZiBubyBjdXJyZW50IHVzZXIgaXMgc2V0LCBwcml2aWxlZ2VzIGRlcGVuZCBvbiB0aGUgZWxlbWVudCdzIHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkluaXQoKTogeygpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uSW5pdCh2YWx1ZTogeygpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZ3JpZCB1c2Vycy4gRXhwZWN0cyBhbiBhcnJheSB3aXRoICdpZCcsICduYW1lJyBhbmQgb3B0aW9uYWxseSAnY29sb3InIGFuZCAnaW1hZ2UnIHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkFmdGVySW5pdCgpOiB7KCk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQWZ0ZXJJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkFmdGVySW5pdCh2YWx1ZTogeygpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkFmdGVySW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBncmlkJ3MgaW1hZ2UgYW5kIGZpbHRlciB1cGxvYWQgc2V0dGluZ3MgZm9yIHRoZSBpbWFnZSBhbmQgYXR0YWNobWVudCBjb2x1bW5zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DaGFydEluaXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2hhcnRJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNoYXJ0SW5pdCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2hhcnRJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgcGFnaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25SZW5kZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJlbmRlcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUmVuZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgcGFnZXIgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkxvYWQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uTG9hZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Mb2FkKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Mb2FkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHJvdyBkZXRhaWxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25LZXkoKTogeyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uS2V5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbktleSh2YWx1ZTogeyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uS2V5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHNjcm9sbCBtb2RlIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dJbml0KCk6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd0luaXQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgY29sdW1uIGhlYWRlciBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93RGV0YWlsSW5pdCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgZGV0YWlsczogSFRNTEVsZW1lbnQpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0RldGFpbEluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93RGV0YWlsSW5pdCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGRldGFpbHM6IEhUTUxFbGVtZW50KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dEZXRhaWxJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc3VtbWFyeSByb3cgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd0RldGFpbFVwZGF0ZWQoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGRldGFpbHM6IEhUTUxFbGVtZW50KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dEZXRhaWxVcGRhdGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd0RldGFpbFVwZGF0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93LCBkZXRhaWxzOiBIVE1MRWxlbWVudCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93RGV0YWlsVXBkYXRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBncmlkJ3Mgc3RhdGUgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd0hpc3RvcnkoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGhpc3Rvcnk6IGFueVtdKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dIaXN0b3J5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd0hpc3RvcnkodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93LCBoaXN0b3J5OiBhbnlbXSk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93SGlzdG9yeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIHNldHRpbmdzIGZvciB0aGUgZ3JvdXAgaGVhZGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dTdHlsZSgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgaGlzdG9yeTogYW55W10pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1N0eWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd1N0eWxlKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgaGlzdG9yeTogYW55W10pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1N0eWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgaGVhZGVyIHNldHRpbmdzIG9mIHRoZSBncmlkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dJbnNlcnRlZCgpOiB7KGluZGV4OiBudW1iZXJbXSwgcm93OiBHcmlkUm93W10pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0luc2VydGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd0luc2VydGVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXJbXSwgcm93OiBHcmlkUm93W10pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0luc2VydGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgZm9vdGVyIHNldHRpbmdzIG9mIHRoZSBncmlkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dSZW1vdmVkKCk6IHsoaW5kZXhlczogbnVtYmVyW10sIHJvd3M6IEdyaWRSb3dbXSk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93UmVtb3ZlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dSZW1vdmVkKHZhbHVlOiB7KGluZGV4ZXM6IG51bWJlcltdLCByb3dzOiBHcmlkUm93W10pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1JlbW92ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93VXBkYXRlKCk6IHsoaW5kZXg6IG51bWJlcltdLCByb3c6IEdyaWRSb3dbXSwgb2xkVmFsdWVzOiBhbnlbXSwgdmFsdWVzOiBhbnlbXSwgY29uZmlybTogeyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkfSk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93VXBkYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd1VwZGF0ZSh2YWx1ZTogeyhpbmRleDogbnVtYmVyW10sIHJvdzogR3JpZFJvd1tdLCBvbGRWYWx1ZXM6IGFueVtdLCB2YWx1ZXM6IGFueVtdLCBjb25maXJtOiB7KGNvbW1pdDogYm9vbGVhbik6IHZvaWR9KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dVcGRhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHJvd3MgcHJvcGVydHkgaXMgdXNlZCB0byBkZXNjcmliZSBhbGwgcm93cyBkaXNwbGF5ZWQgaW4gdGhlIGdyaWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd1VwZGF0ZWQoKTogeyhpbmRleDogbnVtYmVyW10sIHJvdzogR3JpZFJvd1tdKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dVcGRhdGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd1VwZGF0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlcltdLCByb3c6IEdyaWRSb3dbXSk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93VXBkYXRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIHNlbGVjdGlvbiBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93Q2xhc3MoKTogeyhpbmRleDogbnVtYmVyLCBkYXRhOiBhbnksIHJvdzogR3JpZFJvd1tdKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dDbGFzcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dDbGFzcyh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCBkYXRhOiBhbnksIHJvdzogR3JpZFJvd1tdKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dDbGFzcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgc29ydGluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ2VsbENsYXNzKCk6IHsoaW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIGNlbGxWYWx1ZTogYW55LCBkYXRhOiBhbnksIHJvdzogR3JpZFJvd1tdKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25DZWxsQ2xhc3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbENsYXNzKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nLCBjZWxsVmFsdWU6IGFueSwgZGF0YTogYW55LCByb3c6IEdyaWRSb3dbXSk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbENsYXNzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5Jbml0KCk6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5Jbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtbkluaXQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5Jbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5JbnNlcnRlZCgpOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uSW5zZXJ0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29sdW1uSW5zZXJ0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5JbnNlcnRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uUmVtb3ZlZCgpOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVtb3ZlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db2x1bW5SZW1vdmVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVtb3ZlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uVXBkYXRlZCgpOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uVXBkYXRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db2x1bW5VcGRhdGVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uVXBkYXRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uQ2xvbmUoKTogeyhkYXRhRmllbGQ6IHN0cmluZywgY2xvbmVDb2x1bW5EYXRhRmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlciwgZHVwbGljYXRlQ2VsbHM6IGJvb2xlYW4pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtbkNsb25lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtbkNsb25lKHZhbHVlOiB7KGRhdGFGaWVsZDogc3RyaW5nLCBjbG9uZUNvbHVtbkRhdGFGaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBkdXBsaWNhdGVDZWxsczogYm9vbGVhbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uQ2xvbmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNvbW1hbmQoKTogeyhuYW1lOiBzdHJpbmcsIGNvbW1hbmQ6IGFueSwgZGV0YWlsczogR3JpZENlbGwsIGV2ZW50OiBFdmVudCB8IEtleWJvYXJkRXZlbnQgfCBQb2ludGVyRXZlbnQsIGhhbmRsZWQ6IGJvb2xlYW4pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbW1hbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29tbWFuZCh2YWx1ZTogeyhuYW1lOiBzdHJpbmcsIGNvbW1hbmQ6IGFueSwgZGV0YWlsczogR3JpZENlbGwsIGV2ZW50OiBFdmVudCB8IEtleWJvYXJkRXZlbnQgfCBQb2ludGVyRXZlbnQsIGhhbmRsZWQ6IGJvb2xlYW4pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbW1hbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCByb3dDU1NSdWxlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93Q1NTUnVsZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJvd0NTU1J1bGVzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93Q1NTUnVsZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBjdXJyZW50VXNlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFVzZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRVc2VyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFVzZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCB1c2VycygpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51c2VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdXNlcnModmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVzZXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdXBsb2FkU2V0dGluZ3MoKTogR3JpZFVwbG9hZFNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZFNldHRpbmdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1cGxvYWRTZXR0aW5ncyh2YWx1ZTogR3JpZFVwbG9hZFNldHRpbmdzKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZFNldHRpbmdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFnaW5nKCk6IEdyaWRQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYWdpbmcodmFsdWU6IEdyaWRQYWdpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFnZXIoKTogR3JpZFBhZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2VyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYWdlcih2YWx1ZTogR3JpZFBhZ2VyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2VyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcm93RGV0YWlsKCk6IEdyaWRSb3dEZXRhaWwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93RGV0YWlsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dEZXRhaWwodmFsdWU6IEdyaWRSb3dEZXRhaWwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93RGV0YWlsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2Nyb2xsaW5nKCk6IFNjcm9sbGluZyB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNjcm9sbGluZyh2YWx1ZTogU2Nyb2xsaW5nIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkhlYWRlcigpOiBHcmlkQ29sdW1uSGVhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkhlYWRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uSGVhZGVyKHZhbHVlOiBHcmlkQ29sdW1uSGVhZGVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkhlYWRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHN1bW1hcnlSb3coKTogR3JpZFN1bW1hcnlSb3cge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3VtbWFyeVJvdyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3VtbWFyeVJvdyh2YWx1ZTogR3JpZFN1bW1hcnlSb3cpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3VtbWFyeVJvdyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHN0YXRlU2V0dGluZ3MoKTogR3JpZFN0YXRlU2V0dGluZ3Mge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdGVTZXR0aW5ncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3RhdGVTZXR0aW5ncyh2YWx1ZTogR3JpZFN0YXRlU2V0dGluZ3MpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdGVTZXR0aW5ncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwSGVhZGVyKCk6IEdyaWRHcm91cEhlYWRlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEhlYWRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBIZWFkZXIodmFsdWU6IEdyaWRHcm91cEhlYWRlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEhlYWRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlcigpOiBHcmlkSGVhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyKHZhbHVlOiBHcmlkSGVhZGVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGZvb3RlcigpOiBHcmlkRm9vdGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9vdGVyKHZhbHVlOiBHcmlkRm9vdGVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcm93cygpOiBHcmlkUm93W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93cyh2YWx1ZTogR3JpZFJvd1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb24oKTogR3JpZFNlbGVjdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGlvbih2YWx1ZTogR3JpZFNlbGVjdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0aW5nKCk6IEdyaWRTb3J0aW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRpbmcodmFsdWU6IEdyaWRTb3J0aW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIGVkaXQgYmVnaW5zLiBBZnRlciB0aGUgZXZlbnQgb2NjdXJzLCBlZGl0aW5nIHN0YXJ0cy4gSWYgeW91IG5lZWQgdG8gcHJldmVudCB0aGUgZWRpdGluZyBmb3Igc3BlY2lmaWMgY2VsbHMsIHJvd3Mgb3IgY29sdW1ucywgeW91IGNhbiBjYWxsIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGRhdGFGaWVsZCwgXHRyb3csIFx0Y29sdW1uLCBcdGNlbGwsIFx0ZGF0YSwgXHR2YWx1ZSlcblx0KiAgIGlkIC0gVGhlIGVkaXRlZCByb3cgaWQuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgZWRpdGVkIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqICAgcm93IC0gVGhlIGVkaXRlZCByb3cuXG5cdCogICBjb2x1bW4gLSBUaGUgZWRpdGVkIGNvbHVtbi5cblx0KiAgIGNlbGwgLSBUaGUgZWRpdGVkIGNlbGwuXG5cdCogICBkYXRhIC0gVGhlIGVkaXRlZCByb3cncyBkYXRhLlxuXHQqICAgdmFsdWUgLSBUaGUgZWRpdGVkIGNlbGwncyB2YWx1ZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQmVnaW5FZGl0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIEdyaWQncyBoZWFkZXIgdG9vbGJhciBpcyBkaXNwbGF5ZWQgYW5kIHRoZSAnT0snIGJ1dHRvbiBvZiBhIGhlYWRlciBkcm9wZG93biBpcyBjbGlja2VkLiBGb3IgZXhhbXBsZSwgd2hlbiB5b3Ugb3BlbiB0aGUgY29sdW1ucyBjdXN0b21pemUgcGFuZWwsIHJlb3JkZXIgY29sdW1ucyBhbmQgY2xpY2sgdGhlICdPSycgYnV0dG9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHR5cGUpXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgZHJvcGRvd24uIFBvc3NpYmxlIHZhbHVlczogJ2ZpbHRlcicsICdzb3J0JywgJ3NlYXJjaCcsICdncm91cCcsICdmb3JtYXQnLCAnY3VzdG9taXplJ1xuXHQqL1xuXHRAT3V0cHV0KCkgb25CYXRjaENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBHcmlkJ3MgaGVhZGVyIHRvb2xiYXIgaXMgZGlzcGxheWVkIGFuZCB0aGUgJ0NhbmNlbCcgYnV0dG9uIG9mIGEgaGVhZGVyIGRyb3Bkb3duIGlzIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSlcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBkcm9wZG93bi4gUG9zc2libGUgdmFsdWVzOiAnZmlsdGVyJywgJ3NvcnQnLCAnc2VhcmNoJywgJ2dyb3VwJywgJ2Zvcm1hdCcsICdjdXN0b21pemUnXG5cdCovXG5cdEBPdXRwdXQoKSBvbkJhdGNoQ2FuY2VsOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLiBXaGVuIHlvdSBzZWxlY3Qgd2l0aCBhIGRyYWcsIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZHJhZyBzdGFydHMgYW5kIGVuZHMuIFxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHN0YXJ0ZWQsIFx0ZmluaXNoZWQsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHN0YXJ0ZWQgLSBUaGUgZmxhZyBpcyA8ZW0+dHJ1ZTwvZW0+LCB3aGVuIHRoZSBzZWxlY3Rpb24gc3RhcnRzLiBUaGUgZmxhZyBpcyA8ZW0+ZmFsc2U8L2VtPiwgd2hlbiB0aGUgc2VsZWN0aW9uIGVuZHMgYW5kIHdoZW4gdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uIGJ5IGRyYWdnaW5nLlxuXHQqICAgZmluaXNoZWQgLSBUaGUgZmxhZyBpcyA8ZW0+dHJ1ZTwvZW0+LCB3aGVuIHRoZSBzZWxlY3Rpb24gZW5kcy4gVGhlIGZsYWcgaXMgPGVtPmZhbHNlPC9lbT4sIHdoZW4gdGhlIHNlbGVjdGlvbiBzdGFydHMgYW5kIHdoZW4gdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uIGJ5IGRyYWdnaW5nLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBoZWFkZXIgb2YgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdGRhdGFGaWVsZCwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNsaWNrZWQgY29sdW1uLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbidzIGRhdGEgZmllbGQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGRvdWJsZSBjbGlja3Mgb24gdGhlIGhlYWRlciBvZiBhIGNvbHVtbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW4sIFx0ZGF0YUZpZWxkLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjb2x1bW4gLSBUaGUgZG91YmxlLWNsaWNrZWQgY29sdW1uLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbidzIGRhdGEgZmllbGQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5Eb3VibGVDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHJlc2l6ZWQgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdGRhdGFGaWVsZCwgXHRvbGRXaWR0aCwgXHR3aWR0aClcblx0KiAgIGNvbHVtbiAtIFRoZSByZXNpemVkIGNvbHVtbi5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqICAgb2xkV2lkdGggLSBUaGUgb2xkIHdpZHRoIG9mIHRoZSBjb2x1bW4uXG5cdCogICB3aWR0aCAtIFRoZSBuZXcgd2lkdGggb2YgdGhlIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uUmVzaXplOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGEgY29sdW1uIGRyYWcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdGRhdGFGaWVsZCwgXHRpbmRleCwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbi5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqICAgaW5kZXggLSBUaGUgY29sdW1uJ3MgaW5kZXhcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIGNvbHVtbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW4sIFx0ZGF0YUZpZWxkLCBcdGluZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4uXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIGluZGV4XG5cdCogICBkYXRhIC0gVGhlIGRyYWdnaW5nIG9iamVjdC4gZGF0YS5mZWVkYmFjayBhbmQgZGF0YS5mZWVkYmFja0xpbmUgYXJlIEhUTUwgRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXllZCB3aGlsZSB0aGUgdXNlciBkcmFncy4gVGhlIG9iamVjdCBoYXMgZXJyb3IoKSwgc3VjY2VzcygpIGFuZCBkYXRhKCkgbWV0aG9kcyB3aGljaCB5b3UgY2FuIGNhbGwgdG8gc2V0IHRoZSBmZWVkYmFjayBzdGF0ZS5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5EcmFnZ2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGRyb3BzIGEgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRkYXRhRmllbGQsIFx0aW5kZXgsIFx0bmV3SW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbi5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqICAgaW5kZXggLSBUaGUgY29sdW1uJ3MgaW5kZXhcblx0KiAgIG5ld0luZGV4IC0gVGhlIGNvbHVtbidzIG5ldyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHJlb3JkZXJzIGEgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRkYXRhRmllbGQsIFx0aW5kZXgsIFx0bmV3SW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbi5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqICAgaW5kZXggLSBUaGUgY29sdW1uJ3MgaW5kZXhcblx0KiAgIG5ld0luZGV4IC0gVGhlIGNvbHVtbidzIG5ldyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uUmVvcmRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGVudGVycyBhIGNvbW1lbnQgaW4gdGhlIHJvdyBlZGl0IGRpYWxvZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRjb21tZW50KVxuXHQqICAgaWQgLSBUaGUgcm93J3MgaWQuXG5cdCogICBjb21tZW50IC0gVGhlIGNvbW1lbnQgb2JqZWN0LiBUaGUgY29tbWVudCBvYmplY3QgaGFzICd0ZXh0OiBzdHJpbmcnLCAnaWQ6IHN0cmluZycsICd1c2VySWQ6IHN0cmluZyB8IG51bWJlcicsIGFuZCAndGltZTogZGF0ZScgZmllbGRzLiBUaGUgJ3RleHQnIGlzIHRoZSBjb21tZW50J3MgdGV4dC4gJ2lkJyBpcyB0aGUgY29tbWVudCdzIHVuaXF1ZSBpZCwgJ3VzZXJJZCcgaXMgdGhlIHVzZXIncyBpZCB3aG8gZW50ZXJlZCB0aGUgY29tbWVudCBhbmQgJ3RpbWUnIGlzIGEgamF2YXNjcmlwdCBkYXRlIG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29tbWVudEFkZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHJlbW92ZXMgYSBjb21tZW50IGluIHRoZSByb3cgZWRpdCBkaWFsb2cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0Y29tbWVudClcblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkLlxuXHQqICAgY29tbWVudCAtIFRoZSBjb21tZW50IG9iamVjdC4gVGhlIGNvbW1lbnQgb2JqZWN0IGhhcyAndGV4dDogc3RyaW5nJywgJ2lkOiBzdHJpbmcnLCAndXNlcklkOiBzdHJpbmcgfCBudW1iZXInLCBhbmQgJ3RpbWU6IGRhdGUnIGZpZWxkcy4gVGhlICd0ZXh0JyBpcyB0aGUgY29tbWVudCdzIHRleHQuICdpZCcgaXMgdGhlIGNvbW1lbnQncyB1bmlxdWUgaWQsICd1c2VySWQnIGlzIHRoZSB1c2VyJ3MgaWQgd2hvIGVudGVyZWQgdGhlIGNvbW1lbnQgYW5kICd0aW1lJyBpcyBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbW1lbnRSZW1vdmU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBjb250ZXh0IG1lbnUgaXRlbS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRkYXRhRmllbGQsIFx0Y29tbWFuZClcblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbidzIGRhdGEgZmllbGQuXG5cdCogICBjb21tYW5kIC0gQ29tbWFuZCBmdW5jdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBzdGFydHMgYSByb3cgZHJhZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0aW5kZXgsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSByb3cuXG5cdCogICBpZCAtIFRoZSByb3cncyBpZFxuXHQqICAgaW5kZXggLSBUaGUgcm93J3MgaW5kZXhcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIHJvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0aW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIHJvdy5cblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkXG5cdCogICBpbmRleCAtIFRoZSByb3cncyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93RHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIHJvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0aW5kZXgsIFx0bmV3SW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIHJvdy5cblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkXG5cdCogICBpbmRleCAtIFRoZSByb3cncyBpbmRleFxuXHQqICAgbmV3SW5kZXggLSBUaGUgcm93J3MgbmV3IGluZGV4XG5cdCogICBkYXRhIC0gVGhlIGRyYWdnaW5nIG9iamVjdC4gZGF0YS5mZWVkYmFjayBhbmQgZGF0YS5mZWVkYmFja0xpbmUgYXJlIEhUTUwgRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXllZCB3aGlsZSB0aGUgdXNlciBkcmFncy4gVGhlIG9iamVjdCBoYXMgZXJyb3IoKSwgc3VjY2VzcygpIGFuZCBkYXRhKCkgbWV0aG9kcyB3aGljaCB5b3UgY2FuIGNhbGwgdG8gc2V0IHRoZSBmZWVkYmFjayBzdGF0ZS5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dEcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgcmVvcmRlcnMgYSByb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGlkLCBcdGluZGV4LCBcdG5ld0luZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSByb3cuXG5cdCogICBpZCAtIFRoZSByb3cncyBpZFxuXHQqICAgaW5kZXggLSBUaGUgcm93J3MgaW5kZXhcblx0KiAgIG5ld0luZGV4IC0gVGhlIHJvdydzIG5ldyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93UmVvcmRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGV4cGFuZHMgYSByb3cgb2YgdGhlIGdyaWQuIFRoZSBHcmlkIGlzIGluIFRyZWVHcmlkL0dyb3VwaW5nIG1vZGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGlkLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICByb3cgLSBUaGUgZXhwYW5kZWQgcm93LlxuXHQqICAgaWQgLSBUaGUgcm93J3MgaWRcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0V4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNvbGxhcHNlZCBhIHJvdyBvZiB0aGUgZ3JpZC4gVGhlIEdyaWQgaXMgaW4gVHJlZUdyaWQvR3JvdXBpbmcgbW9kZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSBjb2xsYXBzZWQgcm93LiBcblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dDb2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHJvdyBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b3JpZ2luYWxFdmVudCwgXHRpZCwgXHRpc1JpZ2h0Q2xpY2ssIFx0cGFnZVgsIFx0cGFnZVkpXG5cdCogICByb3cgLSBUaGUgY2xpY2tlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBpc1JpZ2h0Q2xpY2sgLSBHZXRzIHdoZXRoZXIgdGhlIHBvaW50aW5nIGRldmljZSdzIHJpZ2h0IGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQqICAgcGFnZVggLSBHZXRzIHRoZSBjbGljaydzIFggcG9zaXRpb24uXG5cdCogICBwYWdlWSAtIEdldHMgdGhlIGNsaWNrJ3MgWSBwb3NpdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkb3VibGUgY2xpY2tzIG9uIGEgcm93IG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRvcmlnaW5hbEV2ZW50LCBcdGlkLCBcdGlzUmlnaHRDbGljaywgXHRwYWdlWCwgXHRwYWdlWSlcblx0KiAgIHJvdyAtIFRoZSBkb3VibGUtY2xpY2tlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBpc1JpZ2h0Q2xpY2sgLSBHZXRzIHdoZXRoZXIgdGhlIHBvaW50aW5nIGRldmljZSdzIHJpZ2h0IGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQqICAgcGFnZVggLSBHZXRzIHRoZSBjbGljaydzIFggcG9zaXRpb24uXG5cdCogICBwYWdlWSAtIEdldHMgdGhlIGNsaWNrJ3MgWSBwb3NpdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93RG91YmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZXNpemVkIGEgcm93LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRpZCwgXHRvbGRIZWlnaHQsIFx0aGVpZ2h0KVxuXHQqICAgcm93IC0gVGhlIHJlc2l6ZWQgcm93LlxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBvbGRIZWlnaHQgLSBUaGUgb2xkIGhlaWdodCBvZiB0aGUgcm93LlxuXHQqICAgaGVpZ2h0IC0gVGhlIG5ldyBoZWlnaHQgb2YgdGhlIHJvdy5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93UmVzaXplOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSByb3cgaGVhZGVyJ3Mgc3Rhci5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b3JpZ2luYWxFdmVudCwgXHRpZCwgXHR2YWx1ZSlcblx0KiAgIHJvdyAtIFRoZSBjbGlja2VkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCogICBpZCAtIEdldHMgdGhlIHJvdyBpZC5cblx0KiAgIHZhbHVlIC0gR2V0cyB3aGV0aGVyIHRoZSByb3cgaXMgc3RhcnJlZCBvciBub3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd1N0YXJyZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBjZWxsIG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNlbGwsIFx0b3JpZ2luYWxFdmVudCwgXHRpZCwgXHRkYXRhRmllbGQsIFx0aXNSaWdodENsaWNrLCBcdHBhZ2VYLCBcdHBhZ2VZKVxuXHQqICAgY2VsbCAtIFRoZSBjbGlja2VkIGNlbGwuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBkYXRhRmllbGQgLSBHZXRzIHRoZSBjb2x1bW4gZGF0YUZpZWxkLlxuXHQqICAgaXNSaWdodENsaWNrIC0gR2V0cyB3aGV0aGVyIHRoZSBwb2ludGluZyBkZXZpY2UncyByaWdodCBidXR0b24gaXMgY2xpY2tlZC5cblx0KiAgIHBhZ2VYIC0gR2V0cyB0aGUgY2xpY2sncyBYIHBvc2l0aW9uLlxuXHQqICAgcGFnZVkgLSBHZXRzIHRoZSBjbGljaydzIFkgcG9zaXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGRvdWJsZSBjbGlja3Mgb24gYSBjZWxsIG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNlbGwsIFx0b3JpZ2luYWxFdmVudCwgXHRpZCwgXHRkYXRhRmllbGQsIFx0aXNSaWdodENsaWNrLCBcdHBhZ2VYLCBcdHBhZ2VZKVxuXHQqICAgY2VsbCAtIFRoZSBkb3VibGUtY2xpY2tlZCBjZWxsLiBcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCogICBpZCAtIEdldHMgdGhlIHJvdyBpZC5cblx0KiAgIGRhdGFGaWVsZCAtIEdldHMgdGhlIGNvbHVtbiBkYXRhRmllbGQuXG5cdCogICBpc1JpZ2h0Q2xpY2sgLSBHZXRzIHdoZXRoZXIgdGhlIHBvaW50aW5nIGRldmljZSdzIHJpZ2h0IGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQqICAgcGFnZVggLSBHZXRzIHRoZSBjbGljaydzIFggcG9zaXRpb24uXG5cdCogICBwYWdlWSAtIEdldHMgdGhlIGNsaWNrJ3MgWSBwb3NpdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2VsbERvdWJsZUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIGVkaXQgZW5kcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRkYXRhRmllbGQsIFx0cm93LCBcdGNvbHVtbiwgXHRjZWxsLCBcdGRhdGEsIFx0dmFsdWUpXG5cdCogICBpZCAtIFRoZSBlZGl0ZWQgcm93IGlkLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGVkaXRlZCBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIHJvdyAtIFRoZSBlZGl0ZWQgcm93LlxuXHQqICAgY29sdW1uIC0gVGhlIGVkaXRlZCBjb2x1bW4uXG5cdCogICBjZWxsIC0gVGhlIGVkaXRlZCBjZWxsLlxuXHQqICAgZGF0YSAtIFRoZSBlZGl0ZWQgcm93J3MgZGF0YS5cblx0KiAgIHZhbHVlIC0gVGhlIGVkaXRlZCBjZWxsJ3MgdmFsdWUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVuZEVkaXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiBhIGZpbHRlciBpcyBhZGRlZCBvciByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbnMsIFx0ZGF0YSwgXHRleHByZXNzaW9ucylcblx0KiAgIGNvbHVtbnMgLSBBcnJheSBvZiBjb2x1bW5zLlxuXHQqICAgZGF0YSAtIEFycmF5IG9mIHtkYXRhRmllbGQ6IHN0cmluZywgZmlsdGVyOiBvYmplY3R9LiA8ZW0+ZGF0YUZpZWxkPC9lbT4gaXMgdGhlIGNvbHVtbidzIGRhdGEgZmllbGQuIDxlbT5maWx0ZXI8L2VtPiBpcyBhIEZpbHRlckdyb3VwIG9iamVjdC5cblx0KiAgIGV4cHJlc3Npb25zIC0gQXJyYXkgb2Yge2RhdGFGaWVsZDogc3RyaW5nLCBmaWx0ZXI6IHN0cmluZ30uIDxlbT5kYXRhRmllbGQ8L2VtPiBpcyB0aGUgY29sdW1uJ3MgZGF0YSBmaWVsZC4gPGVtPmZpbHRlcjwvZW0+IGlzIGEgZmlsdGVyIGV4cHJlc3Npb24gbGlrZSAnc3RhcnRzV2l0aCBCJy4gSW4gZWFjaCBhcnJheSBpdGVtLCB5b3Ugd2lsbCBoYXZlIGFuIG9iamVjdCB3aXRoIGNvbHVtbidzIG5hbWUgYW5kIGZpbHRlciBzdHJpbmcuIEV4YW1wbGU6IFtbJ2ZpcnN0TmFtZScsICdjb250YWlucyBBbmRyZXcgb3IgY29udGFpbnMgTmFuY3knXSwgWydxdWFudGl0eScsICcmbHQ7PSAzIGFuZCAmZ3Q7PSA4J11dLCBbWydmaXJzdE5hbWUnLCAnRVFVQUwnICdBbmRyZXcnIG9yICdFUVVBTCcgJ0FudG9uaScgb3IgJ0VRVUFMJyAnQmVhdGUnXV0sIFtbJ2xhc3ROYW1lJywnQ09OVEFJTlMnICdidXJrZScgb3IgJ0NPTlRBSU5TJyAncGV0ZXJzb24nXV0uIEZpbHRlciBjb25kaXRpb25zIHVzZWQgaW4gdGhlIGZpbHRlciBleHByZXNzaW9uczogJz0nLCAnRVFVQUwnLCcmbHQ7Jmd0OycsICdOT1RfRVFVQUwnLCAnIT0nLCAnJmx0OycsICdMRVNTX1RIQU4nLCcmZ3Q7JywgJ0dSRUFURVJfVEhBTicsICcmbHQ7PScsICdMRVNTX1RIQU5fT1JfRVFVQUwnLCAnJmd0Oz0nLCAnR1JFQVRFUl9USEFOX09SX0VRVUFMJywnc3RhcnRzIHdpdGgnLCAnU1RBUlRTX1dJVEgnLCdlbmRzIHdpdGgnLCAnRU5EU19XSVRIJywgJycsICdFTVBUWScsICdDT05UQUlOUycsJ0RPRVNfTk9UX0NPTlRBSU4nLCAnTlVMTCcsJ05PVF9OVUxMJ1xuXHQqL1xuXHRAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgcm93cyBncm91cGluZyBpcyBjaGFuZ2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGdyb3Vwcylcblx0KiAgIGdyb3VwcyAtIEFycmF5IG9mIGNvbHVtbiBkYXRhIGZpZWxkcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uR3JvdXA6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgYWRkIG5ldyBjb2x1bW4gZGlhbG9nIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRkYXRhRmllbGQpXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbk9wZW5Db2x1bW5EaWFsb2c6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgYWRkIG5ldyBjb2x1bW4gZGlhbG9nIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRkYXRhRmllbGQpXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlQ29sdW1uRGlhbG9nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIGdyaWQgaXMgcmVzaXplZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdG91Y2hlcyBhbmQgaG9sZHMgb24gdGhlIHJvdyBmb3IgYXQgbGVhc3QgMzAwbXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICByb3cgLSBUaGUgdGFwcGVkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd1RhcDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdG91Y2hlcyBhbmQgaG9sZHMgb24gdGhlIGNlbGwgZm9yIGF0IGxlYXN0IDMwMG1zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNlbGwsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNlbGwgLSBUaGUgdGFwcGVkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxUYXA6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBwYWdlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblBhZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiBhIHNvcnRpbmcgY29sdW1uIGlzIGFkZGVkIG9yIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1ucywgXHRkYXRhLCBcdHNvcnREYXRhRmllbGRzLCBcdHNvcnREYXRhVHlwZXMsIFx0c29ydE9yZGVycywgXHRzb3J0SW5kZXhlcylcblx0KiAgIGNvbHVtbnMgLSBBcnJheSBvZiBjb2x1bW5zLlxuXHQqICAgZGF0YSAtIEFycmF5IG9mIHtkYXRhRmllbGQ6IHN0cmluZywgc29ydE9yZGVyOiBzdHJpbmcsIHNvcnRJbmRleDogbnVtYmVyfS4gPGVtPmRhdGFGaWVsZDwvZW0+IGlzIHRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLiA8ZW0+c29ydE9yZGVyPC9lbT4gaXMgJ2FzYycgb3IgJ2Rlc2MnLCA8ZW0+c29ydEluZGV4PC9lbT4gaXMgdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gaW4gbXVsdGkgY29sdW1uIHNvcnRpbmcuXG5cdCogICBzb3J0RGF0YUZpZWxkcyAtIEFycmF5IG9mIGNvbHVtbiBkYXRhIGZpZWxkcy5cblx0KiAgIHNvcnREYXRhVHlwZXMgLSBBcnJheSBvZiBjb2x1bW4gZGF0YSB0eXBlcy4gVGhlIHZhbHVlcyBpbiB0aGUgYXJyYXkgd291bGQgYmUgJ3N0cmluZycsICdkYXRlJywgJ2Jvb2xlYW4nIG9yICdudW1iZXInLlxuXHQqICAgc29ydE9yZGVycyAtIEFycmF5IG9mIGNvbHVtbiBvcmRlcnMuIFRoZSB2YWx1ZXMgaW4gdGhlIGFycmF5IHdvdWxkIGJlICdhc2MnIG9yICdkZXNjJy5cblx0KiAgIHNvcnRJbmRleGVzIC0gQXJyYXkgb2YgY29sdW1uIHNvcnQgaW5kZXhlcy4gV2hlbiBtdWx0aXBsZSBzb3J0aW5nIGlzIGFwcGxpZWQgdGhlIHNvcnQgaW5kZXggaXMgYW4gaW1wb3J0YW50IHBhcmFtZXRlciBhcyBpdCBzcGVjaWZpZXMgdGhlIHByaW9yaXR5IG9mIHNvcnRpbmcuXG5cdCovXG5cdEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZWFjaGVzIHRoZSBib3R0b20gb2YgdGhlIGdyaWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxCb3R0b21SZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgcmVhY2hlcyB0aGUgdG9wIG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsVG9wUmVhY2hlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSByb3cuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHthbnl9IGRhdGEuIHJvdyBkYXRhIG1hdGNoaW5nIHRoZSBkYXRhIHNvdXJjZVxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaW5zZXJ0QXRCb3R0b20/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWRkIHRoZSBuZXcgcm93IHRvIHRoZSBib3R0b20gb3IgdG9wIG9mIHRoZSBjb2xsZWN0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAndHJ1ZSdcblx0KiBAcGFyYW0ge3socm93OiBHcmlkUm93KTogdm9pZH19IGNhbGxiYWNrPy4gU2V0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIG5ldyByb3cgaXMgYWRkZWQuIFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50IGlzIHRoZSBuZXcgcm93LlxuXHQqL1xuICAgIHB1YmxpYyBhZGRSb3coZGF0YTogYW55LCBpbnNlcnRBdEJvdHRvbT86IGJvb2xlYW4sIGNhbGxiYWNrPzogeyhyb3c6IEdyaWRSb3cpOiB2b2lkfSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRSb3coZGF0YSwgaW5zZXJ0QXRCb3R0b20sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRSb3coZGF0YSwgaW5zZXJ0QXRCb3R0b20sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyByb3cgYW5kIHB1dHMgaXQgaW50byBlZGl0IG1vZGUuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHBvc2l0aW9uPy4gJ25lYXInIG9yICdmYXInXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhZGROZXdSb3cocG9zaXRpb24/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld1Jvdyhwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IGNvbHVtbi4gXG5cdCogQHBhcmFtIHthbnl9IGNvbHVtbi4gQSBHcmlkIGNvbHVtbiBvYmplY3QuIFNlZSAnY29sdW1ucycgcHJvcGVydHkuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhZGROZXdDb2x1bW4oY29sdW1uKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0NvbHVtbihjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyB1bmJvdW5kIHJvdyB0byB0aGUgdG9wIG9yIGJvdHRvbS4gVW5ib3VuZCByb3dzIGFyZSBub3QgcGFydCBvZiB0aGUgR3JpZCdzIGRhdGFTb3VyY2UuIFRoZXkgYmVjb21lIHBhcnQgb2YgdGhlIGRhdGFTb3VyY2UsIGFmdGVyIGFuIHVuYm91bmQgcm93IGlzIGVkaXRlZC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGNvdW50LiBUaGUgY291bnQgb2YgdW5ib3VuZCByb3dzLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBwb3NpdGlvbj8uICduZWFyJyBvciAnZmFyJ1xuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgYWRkVW5ib3VuZFJvdyhjb3VudCwgcG9zaXRpb24/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFkZFVuYm91bmRSb3coY291bnQsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBmaWx0ZXIgdG8gYSBjb2x1bW4uIFRoaXMgbWV0aG9kIHdpbGwgYXBwbHkgYSBmaWx0ZXIgdG8gdGhlIEdyaWQgZGF0YS4gRXhhbXBsZSBmb3IgYWRkaW5nIG11bHRpcGxlIGZpbHRlcnMgdG8gYSBjb2x1bW46IGdyaWQuYWRkRmlsdGVyKCdsYXN0TmFtZScsIFsnQ09OVEFJTlMgXCJidXJrZVwiJywgJ29yJywgJ0NPTlRBSU5TIFwicGV0ZXJzb25cIiddKS4gRXhhbXBsZSBmb3IgYWRkaW5nIHNpbmdsZSBmaWx0ZXIgdG8gYSBjb2x1bW46IGdyaWQuYWRkRmlsdGVyKCdsYXN0TmFtZScsICdDT05UQUlOUyBcImJ1cmtlXCInKS4gRXhhbXBsZSBmb3IgYWRkaW5nIG51bWVyaWMgZmlsdGVyOiAgZ3JpZC5hZGRGaWx0ZXIoJ3F1YW50aXR5JywgJyZsdDs9IDUnKSBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGEgY29sdW1uIHdpdGggZGF0YUZpZWxkOiAnZmlyc3ROYW1lJywgc2V0ICdmaXJzdE5hbWUnIGhlcmUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbHRlci4gRmlsdGVyIGV4cHJlc3Npb24gbGlrZTogJ3N0YXJ0c1dpdGggQicuIEV4YW1wbGUgMjogWydjb250YWlucyBBbmRyZXcgb3IgY29udGFpbnMgTmFuY3knXSwgRXhhbXBsZSAzOiAgWydxdWFudGl0eScsICcmbHQ7PSAzIGFuZCAmZ3Q7PSA4J10uICBGaWx0ZXIgY29uZGl0aW9ucyB3aGljaCB5b3UgY2FuIHVzZSBpbiB0aGUgZXhwcmVzc2lvbnM6ICc9JywgJ0VRVUFMJywnJmx0OyZndDsnLCAnTk9UX0VRVUFMJywgJyE9JywgJyZsdDsnLCAnTEVTU19USEFOJywnJmd0OycsICdHUkVBVEVSX1RIQU4nLCAnJmx0Oz0nLCAnTEVTU19USEFOX09SX0VRVUFMJywgJyZndDs9JywgJ0dSRUFURVJfVEhBTl9PUl9FUVVBTCcsJ3N0YXJ0cyB3aXRoJywgJ1NUQVJUU19XSVRIJywnZW5kcyB3aXRoJywgJ0VORFNfV0lUSCcsICcnLCAnRU1QVFknLCAnQ09OVEFJTlMnLCdET0VTX05PVF9DT05UQUlOJywgJ05VTEwnLCdOT1RfTlVMTCdcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2hGaWx0ZXJzPy4gU2V0IHRoaXMgdG8gZmFsc2UsIGlmIHlvdSB3aWxsIHVzZSBtdWx0aXBsZSAnYWRkRmlsdGVyJyBjYWxscy4gQnkgZG9pbmcgdGhpcywgeW91IHdpbGwgYXZvaWQgdW5uZWNlc3NhcnkgcmVuZGVycy5cblx0Ki9cbiAgICBwdWJsaWMgYWRkRmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nLCBmaWx0ZXI6IHN0cmluZywgcmVmcmVzaEZpbHRlcnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihkYXRhRmllbGQsIGZpbHRlciwgcmVmcmVzaEZpbHRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihkYXRhRmllbGQsIGZpbHRlciwgcmVmcmVzaEZpbHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHcm91cHMgdGhlIEdyaWQgYnkgYSBkYXRhIGZpZWxkLiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBhIGdyb3VwIHRvIHRoZSBHcmlkIHdoZW4gZ3JvdXBpbmcgaXMgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGQuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhIGNvbHVtbiB3aXRoIGRhdGFGaWVsZDogJ2ZpcnN0TmFtZScsIHNldCAnZmlyc3ROYW1lJyBoZXJlLlxuXHQqL1xuICAgIHB1YmxpYyBhZGRHcm91cChkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRHcm91cChkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEdyb3VwKGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNvcnRzIHRoZSBHcmlkIGJ5IGEgZGF0YSBmaWVsZC4gVGhpcyBtZXRob2Qgd2lsbCBhZGQgYSBzb3J0aW5nIHRvIHRoZSBHcmlkIHdoZW4gc29ydGluZyBpcyBlbmFibGVkLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGEgY29sdW1uIHdpdGggZGF0YUZpZWxkOiAnZmlyc3ROYW1lJywgc2V0ICdmaXJzdE5hbWUnIGhlcmUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHNvcnRPcmRlci4gY29sdW1uJ3Mgc29ydCBvcmRlci4gVXNlICdhc2MnIG9yICdkZXNjJy5cblx0Ki9cbiAgICBwdWJsaWMgYWRkU29ydChkYXRhRmllbGQ6IHN0cmluZywgc29ydE9yZGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkU29ydChkYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkU29ydChkYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG8tc2l6ZXMgZ3JpZCByb3dzLiBUaGlzIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgaGVpZ2h0IG9mIGFsbCBHcmlkIHJvd3MuIFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvU2l6ZVJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBdXRvLXNpemVzIGdyaWQgY29sdW1ucy4gVGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgdGhlIHdpZHRoIG9mIGFsbCBHcmlkIGNvbHVtbnMuIFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvU2l6ZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplQ29sdW1ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplQ29sdW1ucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBdXRvLXNpemVzIGdyaWQgY29sdW1uLiBUaGlzIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgd2lkdGggb2YgYSBHcmlkIGNvbHVtbiBieSBtZWFzdXJpbmcgdGhlIGNlbGxzIGFuZCBjb2x1bW4gaGVhZGVyIGxhYmVsIHdpZHRoLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGQuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhIGNvbHVtbiB3aXRoIGRhdGFGaWVsZDogJ2ZpcnN0TmFtZScsIHNldCAnZmlyc3ROYW1lJyBoZXJlLlxuXHQqL1xuICAgIHB1YmxpYyBhdXRvU2l6ZUNvbHVtbihkYXRhRmllbGQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NpemVDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2l6ZUNvbHVtbihkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIGFsbCByb3dzIGluIHRoZSBHcmlkIGFyZSBzZWxlY3RlZC4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhcmVBbGxSb3dzU2VsZWN0ZWQoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFyZUFsbFJvd3NTZWxlY3RlZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3RhcnRzIGFuIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgaXMgYXBwcm9wcmlhdGUgd2hlbiBjYWxsaW5nIG11bHRpcGxlIG1ldGhvZHMgb3Igc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYXQgb25jZS4gXG5cdCovXG4gICAgcHVibGljIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEJlZ2lucyByb3csIGNlbGwgb3IgY29sdW1uLiBUaGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIHByb2dyYW1tYXRpY2FsbHkgc3RhcnQgYSBjZWxsLCByb3cgb3IgY29sdW1uIGVkaXRpbmcuIEFmdGVyIGNhbGxpbmcgaXQsIGFuIGVkaXRvciBIVE1MRWxlbWVudCB3aWxsIGJlIGNyZWF0ZWQgYW5kIGRpc3BsYXllZCBpbiB0aGUgR3JpZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGQuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhIGNvbHVtbiB3aXRoIGRhdGFGaWVsZDogJ2ZpcnN0TmFtZScsIHNldCAnZmlyc3ROYW1lJyBoZXJlLlxuXHQqL1xuICAgIHB1YmxpYyBiZWdpbkVkaXQocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luRWRpdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpbkVkaXQocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyBhbGwgZmlsdGVycy4gUmVmcmVzaGVzIHRoZSB2aWV3IGFuZCB1cGRhdGVzIGFsbCBmaWx0ZXIgaW5wdXQgY29tcG9uZW50cy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyRmlsdGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyBhbGwgZGF0YSBncm91cHMuIFJlZnJlc2hlcyB0aGUgdmlldyBhbmQgdXBkYXRlcyB0aGUgRGF0YUdyaWQgY29tcG9uZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJHcm91cHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyR3JvdXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJHcm91cHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIGFsbCBzb3J0aW5nLiBSZWZyZXNoZXMgdGhlIHZpZXcgYW5kIHVwZGF0ZXMgdGhlIERhdGFHcmlkIGNvbXBvbmVudC4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU29ydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTb3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTb3J0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgc2VsZWN0aW9uIHRoYXQgdXNlciBoYXZlIG1hZGUuIEFsbCByb3csIGNlbGwgYW5kIGNvbHVtbiBzZWxlY3Rpb24gaGlnaGxpZ2h0cyB3aWxsIGJlIHJlbW92ZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYW5jZWxzIHRoZSBlZGl0aW5nLiBUaGlzIG1ldGhvZCBjbG9zZXMgdGhlIGNlbGwgZWRpdG9yIGFuZCBjYW5jZWxzIHRoZSBjaGFuZ2VzLiBcblx0Ki9cbiAgICBwdWJsaWMgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGEgVHJlZUdyaWQgcm93LiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSByb3cncyBjaGVjay1ib3guIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGNoZWNrUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tSb3cocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGFsbCBUcmVlR3JpZCBvciBHcm91cGluZyByb3dzLiBUaGlzIG1ldGhvZCB1cGRhdGVzIGFsbCBjaGVjay1ib3hlcyBpbiB0aGUgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gXG5cdCovXG4gICAgcHVibGljIGNoZWNrQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgdXNlciBzZWxlY3Rpb24gYW5kIGVtcHRpZXMgdGhlIGRhdGEgc291cmNlLiBUaGUgR3JpZCB3aWxsIGRpc3BsYXkgJ05vIFJvd3MnIGluIHRoZSB2aWV3LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBjb2x1bW4gZHJvcC1kb3duIG1lbnUuIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYSBUcmVlR3JpZCBvciBHcm91cGluZyByb3cuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VSb3cocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGFsbCBUcmVlR3JpZCBvciBHcm91cGluZyByb3dzLiBcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIENoYXJ0LCB3aGVuIGNoYXJ0aW5nIGlzIGVuYWJsZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB0eXBlLiBDaGFydCdzIHR5cGVcblx0KiBAcGFyYW0ge2FueX0gZGF0YVNvdXJjZT8uIENoYXJ0J3MgZGF0YSBzb3VyY2Vcblx0Ki9cbiAgICBwdWJsaWMgY3JlYXRlQ2hhcnQodHlwZTogc3RyaW5nLCBkYXRhU291cmNlPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNyZWF0ZUNoYXJ0KHR5cGUsIGRhdGFTb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNyZWF0ZUNoYXJ0KHR5cGUsIGRhdGFTb3VyY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWxldGUgYSByb3cuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3socm93OiBHcmlkUm93KTogdm9pZH19IGNhbGxiYWNrPy4gU2V0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHJvdyBpcyBkZWxldGVkLiBUaGUgY2FsbGJhY2sncyBhcmd1bWVudCBpcyB0aGUgZGVsZXRlZCByb3cuXG5cdCovXG4gICAgcHVibGljIGRlbGV0ZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBjYWxsYmFjaz86IHsocm93OiBHcmlkUm93KTogdm9pZH0pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVsZXRlUm93KHJvd0lkLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVsZXRlUm93KHJvd0lkLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNjcm9sbHMgdG8gYSByb3cgb3IgY2VsbC4gVGhpcyBtZXRob2Qgc2Nyb2xscyB0byBhIHJvdyBvciBjZWxsLCB3aGVuIHNjcm9sbGluZyBpcyBuZWNlc3NhcnkuIElmIHBhZ2luYXRpb24gaXMgZW5hYmxlZCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGNoYW5nZSB0aGUgcGFnZS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGQuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhIGNvbHVtbiB3aXRoIGRhdGFGaWVsZDogJ2ZpcnN0TmFtZScsIHNldCAnZmlyc3ROYW1lJyBoZXJlLlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZW5zdXJlVmlzaWJsZShyb3dJZCwgZGF0YUZpZWxkPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgZWRpdGluZy4gVGhpcyBtZXRob2QgY29uZmlybXMgYWxsIGNoYW5nZXMgYW5kIGNsb3NlcyB0aGUgb3BlbmVkIGNlbGwgZWRpdG9yKHMpLiBcblx0Ki9cbiAgICBwdWJsaWMgZW5kRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXN1bWUgdGhlIHJlbmRlcmluZyBhbmQgd2lsbCByZWZyZXNoIHRoZSBHcmlkLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2g/LiBUaGUgZmxhZyB0aGF0IGNvbnRyb2wgdGhlIGNhbGxzIG9mIHRoZSByZWZyZXNoIG1ldGhvZC5cblx0Ki9cbiAgICBwdWJsaWMgZW5kVXBkYXRlKHJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZShyZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUocmVmcmVzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBUcmVlR3JpZCBvciBHcm91cGluZyByb3cuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCB0byBleHBhbmQgdGhlIGZpcnN0IGdyb3VwLCB0aGVuIGl0cyBzZWNvbmQgc3ViIGdydXAsIHRoZW4gdGhlIGZpcnN0IHN1YiBzdWIgZ3JvdXAsIHlvdSBjYW4gdXNlOiBncmlkLmV4cGFuZFJvdygnMC4xLjAnKTsgXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRSb3cocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIHJvd3MgdG8gYSBnaXZlbiBncm91cCBsZXZlbC4gRm9yIGV4YW1wbGUgJ2dyaWQuZXhwYW5kUm93c1RvR3JvdXBMZXZlbCgxKTsnIG1lYW5zIHRoYXQgYWxsIGdyb3VwcyBhdCB0aGUgcm9vdCBsZXZlbCB3aWxsIGJlIGV4cGFuZGVkLiBcblx0KiBAcGFyYW0ge251bWJlcn0gbGV2ZWwuIHJvdyBncm91cCBsZXZlbFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRSb3dzVG9Hcm91cExldmVsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93c1RvR3JvdXBMZXZlbChsZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93c1RvR3JvdXBMZXZlbChsZXZlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYWxsIFRyZWVHcmlkIG9yIEdyb3VwaW5nIHJvd3MuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBHcmlkIGRhdGEgdG8gLlhMU1gsIC5QREYsIC5KU09OLCAuWE1MLCAuQ1NWLCAuVFNWLCAuSFRNTCwgLkpQRUcgb3IgLlBORy4gVGhlIG1ldGhvZCB1c2VzIHRoZSBvcHRpb25zIG9mIHRoZSBkYXRhRXhwb3J0IHByb3BlcnR5LiBcblx0KiBAcGFyYW0ge3N0cmluZ30gRGF0YWZvcm1hdC4gJ3hsc3gnLCAncGRmJywgJ2pzb24nLCAneG1sJywgJ2NzdicsICd0c3YnLCAnaHRtbCcsICdwbmcnLCAnanBlZycuXG5cdCovXG4gICAgcHVibGljIGV4cG9ydERhdGEoRGF0YWZvcm1hdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoRGF0YWZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShEYXRhZm9ybWF0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRmluZHMgZW50cmllcyBieSB1c2luZyBhIHF1ZXJ5IGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHJvdyBpZHMuIEV4YW1wbGU6IGNvbnN0IHJvd3MgPSBncmlkLmZpbmQoJ25hbmN5Jyk7IHJldHVybnMgYWxsIHJvd3MgdGhhdCBoYXZlICduYW5jeScgdmFsdWUuIEV4YW1wbGUgMjogY29uc3Qgcm93cyA9IGdyaWQuZmluZCgnbmFuY3ksIGRhdm9saW8nKTsgcmV0dXJucyBhbGwgcm93cyB0aGF0IGhhdmUgJ25hbmN5JyBhbmQgJ2Rhdm9saW8nIHZhbHVlcyBpbiB0aGUgc2FtZSByb3cuIEV4YW1wbGUgMzogY29uc3Qgcm93cyA9IGdyaWQuZmluZCg1LCAncXVhbnRpdHknLCAnPicpOyByZXR1cm5zIGFsbCByb3dzIHdoZXJlIHRoZSB2YWx1ZSBvZiB0aGUgJ3F1YW50aXR5JyBmaWVsZCBpcyA+IDUuICBcblx0KiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuIFNlYXJjaCBxdWVyeVxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBDb2x1bW4gZGF0YSBmaWVsZC5cblx0KiBAcGFyYW0ge3N0cmluZ30gY29uZGl0aW9uPy4gQ29uZGl0aW9ucyB3aGljaCB5b3UgY2FuIHVzZSBpbiB0aGUgZXhwcmVzc2lvbnM6ICc9JywgJ0VRVUFMJywnJmx0OyZndDsnLCAnTk9UX0VRVUFMJywgJyE9JywgJyZsdDsnLCAnTEVTU19USEFOJywnJmd0OycsICdHUkVBVEVSX1RIQU4nLCAnJmx0Oz0nLCAnTEVTU19USEFOX09SX0VRVUFMJywgJyZndDs9JywgJ0dSRUFURVJfVEhBTl9PUl9FUVVBTCcsJ3N0YXJ0cyB3aXRoJywgJ1NUQVJUU19XSVRIJywnZW5kcyB3aXRoJywgJ0VORFNfV0lUSCcsICcnLCAnRU1QVFknLCAnQ09OVEFJTlMnLCdET0VTX05PVF9DT05UQUlOJywgJ05VTEwnLCdOT1RfTlVMTCdcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBmaW5kKHF1ZXJ5LCBkYXRhRmllbGQ/LCBjb25kaXRpb24/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmZpbmQocXVlcnksIGRhdGFGaWVsZCwgY29uZGl0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEZpbmRzIGVudHJpZXMgYnkgdXNpbmcgYSBxdWVyeSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBjZWxscy4gRWFjaCBjZWxsIGluIHRoZSBhcnJheSBpcyBhbHNvIGFuIGFycmF5IGluIHRoaXMgZm9ybWF0OiBbaWQsIGRhdGFGaWVsZCwgdmFsdWVdLiBFeGFtcGxlOiBjb25zdCBjZWxscyA9IGdyaWQuZmluZENlbGxzKCduYW5jeScpOyByZXR1cm5zIGFsbCBjZWxscyB0aGF0IGhhdmUgJ25hbmN5JyB2YWx1ZS4gRXhhbXBsZSAyOiBjb25zdCBjZWxscyA9IGdyaWQuZmluZENlbGxzKCduYW5jeSwgZGF2b2xpbycpOyByZXR1cm5zIGFsbCBjZWxscyB0aGF0IGhhdmUgJ25hbmN5JyBhbmQgJ2Rhdm9saW8nIHZhbHVlcy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LiBTZWFyY2ggcXVlcnkuIFlvdSBjYW4gZW50ZXIgbXVsdGlwbGUgc2VhcmNoIHN0cmluZ3MsIGJ5IHVzaW5nICcsJy4gRXhhbXBsZTogJ25hbmN5LCBkYXZvbGlvJ1xuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGZpbmRDZWxscyhxdWVyeSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5maW5kQ2VsbHMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIGEgcGFnZSwgd2hlbiBwYWdpbmcgaXMgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4LiBwYWdlIGluZGV4XG5cdCovXG4gICAgcHVibGljIGdvVG9QYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZ29Ub1BhZ2UoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmdvVG9QYWdlKGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIHRoZSBuZXh0IHBhZ2UsIHdoZW4gZ3JpZCBwYWdpbmcgaXMgZW5hYmxlZC4gXG5cdCovXG4gICAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5uZXh0UGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm5leHRQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0byB0aGUgcHJldiBwYWdlLCB3aGVuIGdyaWQgcGFnaW5nIGlzIGVuYWJsZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmV2UGFnZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJldlBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmV2UGFnZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBOYXZpZ2F0ZXMgdG8gdGhlIGZpcnN0IHBhZ2UsIHdoZW4gZ3JpZCBwYWdpbmcgaXMgZW5hYmxlZC4gXG5cdCovXG4gICAgcHVibGljIGZpcnN0UGFnZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlyc3RQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlyc3RQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0byB0aGUgbGFzdCBwYWdlLCB3aGVuIGdyaWQgcGFnaW5nIGlzIGVuYWJsZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBsYXN0UGFnZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubGFzdFBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sYXN0UGFnZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBGb2N1c2VzIGFuZCBzZWxlY3RzIGEgY2VsbCBvciByb3cuIFRoZSBrZXlib2FyZCBuYXZpZ2F0aW9uIHN0YXJ0cyBmcm9tIHRoZSBmb2N1c2VkIGNlbGwgb3Igcm93LiBBbnkgcHJldmlvdXNseSBhcHBsaWVkIHNlbGVjdGlvbiB3aWxsIGJlIGNsZWFyZWQgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgZm9jdXNBbmRTZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzQW5kU2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzQW5kU2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggcm93IGluIHRoZSBncmlkIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggcm93LiBUaGlzIGlzIHNpbWlsYXIgdG8gdGhlIGZvckVhY2ggbWV0aG9kIG9uIGEgSmF2YVNjcmlwdCBhcnJheS4gVGhpcyBpcyBjYWxsZWQgZm9yIGVhY2ggcm93LCBpZ25vcmluZyBncm91cGluZywgZmlsdGVyaW5nIG9yIHNvcnRpbmcgYXBwbGllZCBpbiB0aGUgR3JpZC4gXG5cdCogQHBhcmFtIHthbnl9IHJvd0NhbGxiYWNrLiBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIGEgcm93IG9iamVjdCBhcyBwYXJhbWV0ZXIuIEV4YW1wbGU6IGdyaWQuZm9yRWFjaFJvdygocm93KSA9PiB7IGNvbnNvbGUubG9nKHJvdy5pZCkgfSk7XG5cdCovXG4gICAgcHVibGljIGZvckVhY2hSb3cocm93Q2FsbGJhY2s6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb3JFYWNoUm93KHJvd0NhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb3JFYWNoUm93KHJvd0NhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2ltaWxhciB0byBmb3JFYWNoUm93LiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggcm93IGluIHRoZSBncmlkIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggcm93LiBUaGlzIG1ldGhvZCB0YWtlcyBpbnRvIGFjY291bnQgZmlsdGVyaW5nIGFuZCBzb3J0aW5nIGFwcGxpZWQgdG8gdGhlIEdyaWQuIFxuXHQqIEBwYXJhbSB7YW55fSByb3dDYWxsYmFjay4gQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIHJvdyBvYmplY3QgYXMgcGFyYW1ldGVyLiBFeGFtcGxlOiBncmlkLmZvckVhY2hSb3coKHJvdykgPT4geyBjb25zb2xlLmxvZyhyb3cuaWQpIH0pO1xuXHQqL1xuICAgIHB1YmxpYyBmb3JFYWNoUm93QWZ0ZXJGaWx0ZXJBbmRTb3J0KHJvd0NhbGxiYWNrOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9yRWFjaFJvd0FmdGVyRmlsdGVyQW5kU29ydChyb3dDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9yRWFjaFJvd0FmdGVyRmlsdGVyQW5kU29ydChyb3dDYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIG1heGltdW0gcG9zaXRpb24gb2YgdGhlIHZlcnRpY2FsIHNjcm9sbGJhci4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgc2V0VmVydGljYWxTY3JvbGxWYWx1ZSB0byBhcHBseSBhIG5ldyBzY3JvbGwgcG9zaXRpb24uIFxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWZXJ0aWNhbFNjcm9sbE1heCgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VmVydGljYWxTY3JvbGxNYXgoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXIuIFxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWZXJ0aWNhbFNjcm9sbFZhbHVlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWZXJ0aWNhbFNjcm9sbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBtYXhpbXVtIHBvc2l0aW9uIG9mIHRoZSBob3Jpem9udGFsIHNjcm9sbGJhci4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgc2V0SG9yaXpvbnRhbFNjcm9sbFZhbHVlIHRvIGFwcGx5IGEgbmV3IHNjcm9sbCBwb3NpdGlvbi4gXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEhvcml6b250YWxTY3JvbGxNYXgoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEhvcml6b250YWxTY3JvbGxNYXgoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBob3Jpem9udGFsIHNjcm9sbGJhci4gXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEhvcml6b250YWxTY3JvbGxWYWx1ZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SG9yaXpvbnRhbFNjcm9sbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBjb2x1bW5zIGFycmF5LiBFYWNoIGl0ZW0gaW4gdGhlIGFycmF5IGNvbnRhaW5zIHRoZSBjb2x1bW4gcHJvcGVydGllcyB3aGljaCBhcmUgZHluYW1pY2FsbHkgc2V0IGJ5IHRoZSB1c2VyIGludGVyYWN0aW9uIGFuZCB0aGUgY29sdW1ucyBpbml0aWFsaXphdGlvbiBkYXRhIHByb3BlcnRpZXMgc3VjaCBhczogJ2xhYmVsJywgJ2RhdGFGaWVsZCcsICdkYXRhVHlwZScsICd2aXNpYmxlJy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENvbHVtbnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGVkaXRpbmcgY2VsbChzKSwgd2hlbiB0aGUgZ3JpZCBpcyBlZGl0aW5nLiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRFZGl0Q2VsbHMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEVkaXRDZWxscygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZ3JvdXBzIGFycmF5LiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRHcm91cHMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEdyb3VwcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhbiBhcnJheSBvZiBjb2x1bW5zIHdpdGggYXBwbGllZCBzb3J0aW5nLiBFYWNoIG1lbWJlciBpbiB0aGUgYXJyYXkgaXMgd2l0aCBjb2x1bW4ncyBkYXRhIGZpZWxkIHVzZWQgYXMgYSBrZXkgYW5kICdzb3J0T3JkZXInIGFuZCAnc29ydEluZGV4JyBhcyBhIHZhbHVlLiBcblx0KiBAcmV0dXJucyB7e1tkYXRhRmllbGQ6IHN0cmluZ106IHsgc29ydE9yZGVyOiBzdHJpbmcsIHNvcnRJbmRleDogbnVtYmVyIH19fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U29ydGVkQ29sdW1ucygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U29ydGVkQ29sdW1ucygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgc2VsZWN0aW9uLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0aW9uKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYW4gQXJyYXkgd2hlcmUgZWFjaCBpdGVtIGlzIGFuIEFycmF5IG9mIHJvdyBpZCBhbmQgcm93IGRhdGEuIElmIHRoZSBHcmlkIGlzIHVzZWQgaW4gdmlydHVhbCBtb2RlLCB0aGUgcm93IGRhdGEgcGFyYW1ldGVyIGlzIGVtcHR5IG9iamVjdCwgYmVjYXVzZSB0aGUgZGF0YSBpcyBsb2FkZWQgb24gZGVtYW5kLiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTZWxlY3RlZFJvd3MoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGVkUm93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgc2VsZWN0ZWQgcm93IGlkcy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0ZWRSb3dJZHMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGVkUm93SWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBzZWxlY3RlZCByb3cgaW5kZXhlcy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0ZWRSb3dJbmRleGVzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZFJvd0luZGV4ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHNlbGVjdGVkIGNlbGxzLiBUaGUgbWV0aG9kIHJldHVybnMgYW4gYXJyYXkgb2YgY2VsbC4gRWFjaCBjZWxsIGlzIGFuIGFycmF5IHdpdGggcm93IGlkLCBjb2x1bW4gZGF0YSBmaWVsZCBhbmQgY2VsbCB2YWx1ZS4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0ZWRDZWxscygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U2VsZWN0ZWRDZWxscygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhbiBhcnJheSBvZiBjb2x1bW5zIHdpdGggYXBwbGllZCBmaWx0ZXJzLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RmlsdGVyZWRDb2x1bW5zKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRGaWx0ZXJlZENvbHVtbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYW4gYXJyYXkgb2Ygcm93cywgd2hpY2ggYXJlIHZpc2libGUgYW5kIG1hdGNoIHRoZSBhcHBsaWVkIGZpbHRlci4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZpc2libGVSb3dzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWaXNpYmxlUm93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVzdWx0IG9mIHRoZSBnZXRWaXNpYmxlUm93cyBvciB0aGUgcm93cyBoaWVyYXJjaHksIHdoZW4gdGhlIEdyaWQgaXMgaW4gVHJlZUdyaWQvR3JvdXBpbmcgbW9kZS4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZpZXdSb3dzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWaWV3Um93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhIEpTT04gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBmaWVsZHM6ICdzb3J0JywgJ2NvbHVtbnMnLCAnZXhwYW5kZWRSb3dzJywgJ2ZpbHRlcicsICdncm91cHMnLCAncGFnaW5nJywgJ3NlbGVjdGVkQ2VsbHMnLCAnc2VsZWN0ZWRyb3dzJy4gVGhlICdzb3J0JyByZXByZXNlbnRzIGFuIG9iamVjdCB3aGljaCBjb250YWlucyB0aGUgc29ydGVkIGNvbHVtbnMuIEVhY2gga2V5IGluIHRoYXQganNvbiBvYmplY3QgaXMgdGhlIGNvbHVtbidzIGRhdGFGaWVsZCBpdGVtIHdoaWNoIGhhcyBzb3J0T3JkZXI6IHN0cmluZyBhbmQgc29ydEluZGV4OiBpbnQgcHJvcGVydGllcy4gVGhlIHNvcnRPcmRlciBjb3VsZCBiZSBlaXRoZXIgJ2FzYycgb3IgJ2Rlc2MnLiBTaW1pbGFybHksIHRoZSBmaWx0ZXIgb2JqZWN0IGNvbnRhaW5zIHRoZSBmaWx0ZXJlZCBjb2x1bW5zLiBFYWNoIGtleSBpbiB0aGF0IG9iamVjdCBpcyBhIGNvbHVtbiBkYXRhIGZpZWxkIGFuZCBlYWNoIHZhbHVlIGhhcyAnZmlsdGVycycgYXJyYXkgcHJvcGVydHkgd2l0aCB0aGUgYXBwbGllZCBmaWx0ZXJzIHRvIHRoZSBjb2x1bW4uIFRoZSAnY29sdW1ucycgcHJvcGVydHkgY29udGFpbnMgYW4gYXJyYXkgb2YgY29sdW1ucyB3aXRoIHNhdmVkIHByb3BlcnRpZXMgc3VjaCBhcyB2aXNpYmxlLCB3aWR0aCBhbmQgZnJlZXplLiBUaGUgJ2V4cGFuZGVkUm93cycgcHJvcGVydHkgY29udGFpbnMgdGhlIGluZGV4ZXMgb2YgdGhlIGV4cGFuZGVkIHJvd3MuIFRoZSAnZ3JvdXBzJyBwcm9wZXJ0eSBjb250YWlucyB0aGUgZ3JvdXBlZCBjb2x1bW4gZGF0YSBmaWVsZHMgYW5kIHRoZSBzZWxlY3RlZENlbGxzIGFuZCBzZWxlY3RlZFJvd3MgaW5jbHVkZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2VsbHMgb3Igcm93cyBzZWxlY3Rpb24uIFRoZXNlIGRlcGVuZCBvbiB0aGUgc2VsZWN0aW9uIG1vZGUgdXNlZCBpbiB0aGUgR3JpZC4gVGhlICdwYWdpbmcnIG9iamVjdCBpbmNsdWRlcyB0aGUgc3ViLXByb3BlcnRpZXMgJ2NvdW50JywgJ2luZGV4JyBhbmQgJ3NpemUnIHdoaWNoIGRldGVybWluZSB0aGUgY291bnQgb2YgcGFnZXMsIHRoZSBjdXJyZW50IHBhZ2UncyBpbmRleCBhbmQgdGhlIHBhZ2Ugc2l6ZS4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFN0YXRlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIEdyaWQgc3RhdGUgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgZmllbGRzOiAnc29ydCcsICdjb2x1bW5zJywgJ2V4cGFuZGVkUm93cycsICdmaWx0ZXInLCAnZ3JvdXBzJywgJ3BhZ2luZycsICdzZWxlY3RlZENlbGxzJywgJ3NlbGVjdGVkcm93cycuIFRoZSAnc29ydCcgcmVwcmVzZW50cyBhbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgdGhlIHNvcnRlZCBjb2x1bW5zLiBFYWNoIGtleSBpbiB0aGF0IGpzb24gb2JqZWN0IGlzIHRoZSBjb2x1bW4ncyBkYXRhRmllbGQgaXRlbSB3aGljaCBoYXMgc29ydE9yZGVyOiBzdHJpbmcgYW5kIHNvcnRJbmRleDogaW50IHByb3BlcnRpZXMuIFRoZSBzb3J0T3JkZXIgY291bGQgYmUgZWl0aGVyICdhc2MnIG9yICdkZXNjJy4gU2ltaWxhcmx5LCB0aGUgZmlsdGVyIG9iamVjdCBjb250YWlucyB0aGUgZmlsdGVyZWQgY29sdW1ucy4gRWFjaCBrZXkgaW4gdGhhdCBvYmplY3QgaXMgYSBjb2x1bW4gZGF0YSBmaWVsZCBhbmQgZWFjaCB2YWx1ZSBoYXMgJ2ZpbHRlcnMnIGFycmF5IHByb3BlcnR5IHdpdGggdGhlIGFwcGxpZWQgZmlsdGVycyB0byB0aGUgY29sdW1uLiBUaGUgJ2NvbHVtbnMnIHByb3BlcnR5IGNvbnRhaW5zIGFuIGFycmF5IG9mIGNvbHVtbnMgd2l0aCBzYXZlZCBwcm9wZXJ0aWVzIHN1Y2ggYXMgdmlzaWJsZSwgd2lkdGggYW5kIGZyZWV6ZS4gVGhlICdleHBhbmRlZFJvd3MnIHByb3BlcnR5IGNvbnRhaW5zIHRoZSBpbmRleGVzIG9mIHRoZSBleHBhbmRlZCByb3dzLiBUaGUgJ2dyb3VwcycgcHJvcGVydHkgY29udGFpbnMgdGhlIGdyb3VwZWQgY29sdW1uIGRhdGEgZmllbGRzIGFuZCB0aGUgc2VsZWN0ZWRDZWxscyBhbmQgc2VsZWN0ZWRSb3dzIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNlbGxzIG9yIHJvd3Mgc2VsZWN0aW9uLiBUaGVzZSBkZXBlbmQgb24gdGhlIHNlbGVjdGlvbiBtb2RlIHVzZWQgaW4gdGhlIEdyaWQuIFRoZSAncGFnaW5nJyBvYmplY3QgaW5jbHVkZXMgdGhlIHN1Yi1wcm9wZXJ0aWVzICdjb3VudCcsICdpbmRleCcgYW5kICdzaXplJyB3aGljaCBkZXRlcm1pbmUgdGhlIGNvdW50IG9mIHBhZ2VzLCB0aGUgY3VycmVudCBwYWdlJ3MgaW5kZXggYW5kIHRoZSBwYWdlIHNpemUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lPy4gc3RhdGUgbmFtZVxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBzYXZlU3RhdGUobmFtZT8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIEdyaWQgc3RhdGUuIFlvdSBjYW4gcGFzcyBhIHN0YXRlIG5hbWUgd2hlbiB0aGVyZSBpcyBhIHN0YXRlIHdoaWNoIHdhcyBwcmV2aW91c2x5IHNhdmVkIHdpdGggdGhlIHNhdmVTdGF0ZShzdGF0ZU5hbWUpIG1ldGhvZCBjYWxsIG9yIGEgc3RhdGUgb2JqZWN0IHJldHVybmVkIGJ5IHRoZSBzYXZlU3RhdGUgb3IgZ2V0U3RhdGUgbWV0aG9kIGNhbGxzLiBUaGUgc3RhdGUgb2JqZWN0IGlzIHJlcXVpcmVkIHRvIGJlIGEgSlNPTiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGZpZWxkczogJ3NvcnQnLCAnY29sdW1ucycsICdleHBhbmRlZFJvd3MnLCAnZmlsdGVyJywgJ2dyb3VwcycsICdwYWdpbmcnLCAnc2VsZWN0ZWRDZWxscycsICdzZWxlY3RlZHJvd3MnLiBUaGUgJ3NvcnQnIHJlcHJlc2VudHMgYW4gb2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBzb3J0ZWQgY29sdW1ucy4gRWFjaCBrZXkgaW4gdGhhdCBqc29uIG9iamVjdCBpcyB0aGUgY29sdW1uJ3MgZGF0YUZpZWxkIGl0ZW0gd2hpY2ggaGFzIHNvcnRPcmRlcjogc3RyaW5nIGFuZCBzb3J0SW5kZXg6IGludCBwcm9wZXJ0aWVzLiBUaGUgc29ydE9yZGVyIGNvdWxkIGJlIGVpdGhlciAnYXNjJyBvciAnZGVzYycuIFNpbWlsYXJseSwgdGhlIGZpbHRlciBvYmplY3QgY29udGFpbnMgdGhlIGZpbHRlcmVkIGNvbHVtbnMuIEVhY2gga2V5IGluIHRoYXQgb2JqZWN0IGlzIGEgY29sdW1uIGRhdGEgZmllbGQgYW5kIGVhY2ggdmFsdWUgaGFzICdmaWx0ZXJzJyBhcnJheSBwcm9wZXJ0eSB3aXRoIHRoZSBhcHBsaWVkIGZpbHRlcnMgdG8gdGhlIGNvbHVtbi4gVGhlICdjb2x1bW5zJyBwcm9wZXJ0eSBjb250YWlucyBhbiBhcnJheSBvZiBjb2x1bW5zIHdpdGggc2F2ZWQgcHJvcGVydGllcyBzdWNoIGFzIHZpc2libGUsIHdpZHRoIGFuZCBmcmVlemUuIFRoZSAnZXhwYW5kZWRSb3dzJyBwcm9wZXJ0eSBjb250YWlucyB0aGUgaW5kZXhlcyBvZiB0aGUgZXhwYW5kZWQgcm93cy4gVGhlICdncm91cHMnIHByb3BlcnR5IGNvbnRhaW5zIHRoZSBncm91cGVkIGNvbHVtbiBkYXRhIGZpZWxkcyBhbmQgdGhlIHNlbGVjdGVkQ2VsbHMgYW5kIHNlbGVjdGVkUm93cyBpbmNsdWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjZWxscyBvciByb3dzIHNlbGVjdGlvbi4gVGhlc2UgZGVwZW5kIG9uIHRoZSBzZWxlY3Rpb24gbW9kZSB1c2VkIGluIHRoZSBHcmlkLiBUaGUgJ3BhZ2luZycgb2JqZWN0IGluY2x1ZGVzIHRoZSBzdWItcHJvcGVydGllcyAnY291bnQnLCAnaW5kZXgnIGFuZCAnc2l6ZScgd2hpY2ggZGV0ZXJtaW5lIHRoZSBjb3VudCBvZiBwYWdlcywgdGhlIGN1cnJlbnQgcGFnZSdzIGluZGV4IGFuZCB0aGUgcGFnZSBzaXplLiBcblx0KiBAcGFyYW0ge2FueX0gc3RhdGUuIHN0YXRlIG5hbWUgb3Igc3RhdGUgb2JqZWN0XG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGxvYWRTdGF0ZShzdGF0ZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVzZXRzIHRoZSBHcmlkIHN0YXRlLiBcblx0Ki9cbiAgICBwdWJsaWMgcmVzZXRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzZXRTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlc2V0U3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgY2hhbmdlcyBmcm9tIHRoZSBiYXRjaCBlZGl0LiBcblx0KiBAcmV0dXJucyB7eyB1cERhdGVkOiBbeyBpZDogc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZywgb2xkVmFsdWU6IE9iamVjdCwgbmV3VmFsdWU6IE9iamVjdCB9XSwgZGVsZXRlZDogW3tpZDogc3RyaW5nLCBkYXRhOiBPYmplY3R9XSwgYWRkZWQ6IFt7aWQ6IHN0cmluZywgZGF0YTogT2JqZWN0fV0gfX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEJhdGNoRWRpdENoYW5nZXMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEJhdGNoRWRpdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSB2YWx1ZSBvZiBhIGNlbGwuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGQuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhIGNvbHVtbiB3aXRoIGRhdGFGaWVsZDogJ2ZpcnN0TmFtZScsIHNldCAnZmlyc3ROYW1lJyBoZXJlLlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDZWxsVmFsdWUocm93SWQsIGRhdGFGaWVsZCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDZWxsVmFsdWUocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGEgY29sdW1uLiBSZXR1cm5zIGEgR3JpZCBjb2x1bW4gb2JqZWN0LiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGEgY29sdW1uIHdpdGggZGF0YUZpZWxkOiAnZmlyc3ROYW1lJywgc2V0ICdmaXJzdE5hbWUnIGhlcmUuXG5cdCogQHJldHVybnMge0dyaWRDb2x1bW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDb2x1bW4oZGF0YUZpZWxkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtbihkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhIHZhbHVlIG9mIGEgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGEgY29sdW1uIHdpdGggZGF0YUZpZWxkOiAnZmlyc3ROYW1lJywgc2V0ICdmaXJzdE5hbWUnIGhlcmUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZS4gVGhlIHByb3BlcnR5IG5hbWUuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSB2YWx1ZSBvZiBhIHJvdy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lLiBUaGUgcHJvcGVydHkgbmFtZS5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Um93UHJvcGVydHkocm93SWQsIHByb3BlcnR5TmFtZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRSb3dQcm9wZXJ0eShyb3dJZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSByb3cuIFJldHVybnMgYSBHcmlkIHJvdyBvYmplY3QuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHJldHVybnMge0dyaWRSb3d9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSb3cocm93SWQpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Um93KHJvd0lkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSByb3cgYnkgaXRzIGluZGV4LiBSZXR1cm5zIGEgR3JpZCByb3cgb2JqZWN0LiBcblx0KiBAcGFyYW0ge251bWJlcn0gcm93SW5kZXguIHJvdyBib3VuZCBpbmRleFxuXHQqIEByZXR1cm5zIHtHcmlkUm93fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Um93QnlJbmRleChyb3dJbmRleCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRSb3dCeUluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIERhdGEgc291cmNlIGRhdGEgYXNzb2NpYXRlZCB0byB0aGUgcm93LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSb3dEYXRhKHJvd0lkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJvd0RhdGEocm93SWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgUm93J3MgaWQgYnkgYSByb3cgaW5kZXguIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSByb3dJbmRleC4gcm93IGluZGV4XG5cdCogQHJldHVybnMge3N0cmluZyB8IG51bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJvd0lkKHJvd0luZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJvd0lkKHJvd0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgd2hldGhlciBhIGNvbHVtbidzIGRyb3AtZG93biBtZW51IGlzIG9wZW5lZC4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBoYXNNZW51KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5oYXNNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIGFueSByb3dzIGluIHRoZSBHcmlkIGFyZSBzZWxlY3RlZC4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBoYXNTZWxlY3RlZFJvd3MoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50Lmhhc1NlbGVjdGVkUm93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIERldGFpbHMgb2YgYSBSb3csIHdoZW4gcm93IGRldGFpbHMgYXJlIGVuYWJsZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGhpZGVEZXRhaWwocm93SWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGV0YWlsKHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGV0YWlsKHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlnaGxpZ2h0cyBhIGNvbHVtbi4gSGlnaGxpZ2h0cyBhIEdyaWQgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGEgY29sdW1uIHdpdGggZGF0YUZpZWxkOiAnZmlyc3ROYW1lJywgc2V0ICdmaXJzdE5hbWUnIGhlcmUuXG5cdCovXG4gICAgcHVibGljIGhpZ2hsaWdodENvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWdobGlnaHRDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWdobGlnaHRDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlnaGxpZ2h0cyBhIGNlbGwuIENhbGxpbmcgdGhlIG1ldGhvZCBhIHNlY29uZCB0aW1lIHRvZ2dsZSB0aGUgaGlnaGxpZ2h0IHN0YXRlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYSBjb2x1bW4gd2l0aCBkYXRhRmllbGQ6ICdmaXJzdE5hbWUnLCBzZXQgJ2ZpcnN0TmFtZScgaGVyZS5cblx0KiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lPy4gQ1NTIENsYXNzIE5hbWVcblx0Ki9cbiAgICBwdWJsaWMgaGlnaGxpZ2h0Q2VsbChyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZywgY2xhc3NOYW1lPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZ2hsaWdodENlbGwocm93SWQsIGRhdGFGaWVsZCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWdobGlnaHRDZWxsKHJvd0lkLCBkYXRhRmllbGQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZ2hsaWdodHMgYSByb3cuIENhbGxpbmcgdGhlIG1ldGhvZCBhIHNlY29uZCB0aW1lIHRvZ2dsZSB0aGUgaGlnaGxpZ2h0IHN0YXRlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWU/LiBDU1MgQ2xhc3MgTmFtZVxuXHQqL1xuICAgIHB1YmxpYyBoaWdobGlnaHRSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlciwgY2xhc3NOYW1lPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZ2hsaWdodFJvdyhyb3dJZCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWdobGlnaHRSb3cocm93SWQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSByb3cuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHthbnl9IGRhdGEuIHJvdyBkYXRhIG1hdGNoaW5nIHRoZSBkYXRhIHNvdXJjZVxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleD8uIERldGVybWluZXMgdGhlIGluc2VydCBpbmRleC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgdGhlIGxhc3QgaW5kZXguXG5cdCogQHBhcmFtIHt7KHJvdzogR3JpZFJvdyk6IHZvaWR9fSBjYWxsYmFjaz8uIFNldHMgYSBjYWxsYmFjayBmdW5jdGlvbiwgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHRoZSBuZXcgcm93IGlzIGFkZGVkLiBUaGUgY2FsbGJhY2sncyBhcmd1bWVudCBpcyB0aGUgbmV3IHJvdy5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0Um93KGRhdGE6IGFueSwgaW5kZXg/OiBudW1iZXIsIGNhbGxiYWNrPzogeyhyb3c6IEdyaWRSb3cpOiB2b2lkfSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRSb3coZGF0YSwgaW5kZXgsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRSb3coZGF0YSwgaW5kZXgsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgYSBjb2x1bW4gZHJvcC1kb3duIG1lbnUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYSBjb2x1bW4gd2l0aCBkYXRhRmllbGQ6ICdmaXJzdE5hbWUnLCBzZXQgJ2ZpcnN0TmFtZScgaGVyZS5cblx0Ki9cbiAgICBwdWJsaWMgb3Blbk1lbnUoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3Blbk1lbnUoZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuTWVudShkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyBhIGNvbnRleHQgbWVudS4gTm90ZSB0aGF0IGNvbnRleHQgbWVudSBzaG91bGQgYmUgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGxlZnQuIExlZnQgUG9zaXRpb24uXG5cdCogQHBhcmFtIHtudW1iZXJ9IHRvcC4gVG9wIFBvc2l0aW9uLlxuXHQqL1xuICAgIHB1YmxpYyBvcGVuQ29udGV4dE1lbnUobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuQ29udGV4dE1lbnUobGVmdCwgdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuQ29udGV4dE1lbnUobGVmdCwgdG9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUHJpbnRzIHRoZSBHcmlkIGRhdGEuIFRoZSBtZXRob2QgdXNlcyB0aGUgb3B0aW9ucyBvZiB0aGUgZGF0YUV4cG9ydCBwcm9wZXJ0eS4gV2hlbiBwcmludGVkLCB0aGUgR3JpZCB3aWxsIG5vdCBkaXNwbGF5IGFueSBzY3JvbGxiYXJzIHNvIGFsbCByb3dzIGFuZCBjb2x1bW5zIHdpbGwgYmUgZGlzcGxheWVkLiBUaGUgZ3JpZCB3aWxsIGF1dG8gcmVzaXplIHdpZHRoIGFuZCBoZWlnaHQgdG8gZml0IGFsbCBjb250ZW50cy4gVG8gY3VzdG9taXplIHRoZSBwcmludGluZyBvcHRpb25zLCB5b3UgY2FuIHVzZSAgdGhlIGRhdGFFeHBvcnQgcHJvcGVydHkuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW5kZXJzIHRoZSBncmlkLiBUaGlzIG1ldGhvZCB3aWxsIG1ha2UgYSBmdWxsLXJlZnJlc2ggbGlrZSBpbiB0aGUgaW5pdGlhbCBHcmlkIGNyZWF0aW9uLiBJdCB3aWxsIGNyZWF0ZSBSb3dzLCBDb2x1bW5zIGFuZCBDZWxscyBIVE1MIEVsZW1lbnRzIGFuZCB0aGVuIHJlZnJlc2ggdGhlIEdyaWQgbGF5b3V0LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBncmlkIHdpdGggdGhlIGN1cnJlbnQgcHJvcGVydHkgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIHJlZnJlc2ggdGhlIEdyaWQgbGF5b3V0LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2hWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBncmlkIGNlbGxzIGluIHZpZXcuIFRoZSBtZXRob2QgaXMgdXNlZnVsIGZvciBsaXZlLXVwZGF0ZXMgb2YgY2VsbCB2YWx1ZXMuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYSBjb2x1bW4gd2l0aCBkYXRhRmllbGQ6ICdmaXJzdE5hbWUnLCBzZXQgJ2ZpcnN0TmFtZScgaGVyZS5cblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2hGaWx0ZXJzPy4gU2V0IHRoaXMgdG8gZmFsc2UsIGlmIHlvdSBuZWVkIHRvIG1ha2UgbXVsdGlwbGUgcmVtb3ZlRmlsdGVyIGNhbGxzLlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIHJlZnJlc2hGaWx0ZXJzPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoZGF0YUZpZWxkLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKGRhdGFGaWVsZCwgcmVmcmVzaEZpbHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgY29sdW1uIGZpbHRlci4gIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYSBjb2x1bW4gd2l0aCBkYXRhRmllbGQ6ICdmaXJzdE5hbWUnLCBzZXQgJ2ZpcnN0TmFtZScgaGVyZS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlR3JvdXAoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlR3JvdXAoZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVHcm91cChkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgZ3JvdXAgYnkgZGF0YSBmaWVsZC4gVGhpcyBtZXRob2Qgd2lsbCByZW1vdmUgYSBncm91cCB0byB0aGUgR3JpZCB3aGVuIGdyb3VwaW5nIGlzIGVuYWJsZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYSBjb2x1bW4gd2l0aCBkYXRhRmllbGQ6ICdmaXJzdE5hbWUnLCBzZXQgJ2ZpcnN0TmFtZScgaGVyZS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlU29ydChkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVTb3J0KGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlU29ydChkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgc29ydGluZyBieSBkYXRhIGZpZWxkLiBUaGlzIG1ldGhvZCB3aWxsIHJlbW92ZSBhIHNvcnRpbmcgZnJvbSBhIEdyaWQgY29sdW1uLiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaFNvcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2hTb3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaFNvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmUtc29ydHMgdGhlIEdyaWQgYnkgdXNpbmcgdGhlIGFscmVhZHkgYXBwbGllZCBjb2x1bW4gc29ydGluZ3MgYW5kIHJlLXJlbmRlcnMgdGhlIEdyaWQuIFxuXHQqL1xuICAgIHB1YmxpYyByZXZlcnRCYXRjaEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJldmVydEJhdGNoRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJldmVydEJhdGNoRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXZlcnRzIHRoZSBiYXRjaCBlZGl0IGNoYW5nZXMuIFRoaXMgbWV0aG9kIGNhbmNlbHMgYWxsIGNoYW5nZXMgbWFkZSBieSB0aGUgZW5kLXVzZXIuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBkYXRhRmllbGQuIFRoZSBkYXRhIGZpZWxkIG9yIGNvbHVtbiBpbmRleCBvZiB0aGUgZmlyc3QgZ3JpZCBjb2x1bW4uXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJlZmVyZW5jZURhdGFGaWVsZC4gVGhlIGRhdGEgZmllbGQgb3IgY29sdW1uIGluZGV4IG9mIHRoZSBzZWNvbmQgZ3JpZCBjb2x1bW4uXG5cdCogQHBhcmFtIHtib29sZWFufSBpbnNlcnRBZnRlcj8uIERldGVybWluZXMgd2hldGhlciB0byBpbnNlcnQgdGhlIGZpcnN0IGNvbHVtbiBhZnRlciB0aGUgcmVmZXJlbmNlIGNvbHVtbi5cblx0Ki9cbiAgICBwdWJsaWMgcmVvcmRlckNvbHVtbnMoZGF0YUZpZWxkOiBzdHJpbmcgfCBudW1iZXIsIHJlZmVyZW5jZURhdGFGaWVsZDogc3RyaW5nIHwgbnVtYmVyLCBpbnNlcnRBZnRlcj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVvcmRlckNvbHVtbnMoZGF0YUZpZWxkLCByZWZlcmVuY2VEYXRhRmllbGQsIGluc2VydEFmdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW9yZGVyQ29sdW1ucyhkYXRhRmllbGQsIHJlZmVyZW5jZURhdGFGaWVsZCwgaW5zZXJ0QWZ0ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW9yZGVycyB0d28gRGF0YUdyaWQgY29sdW1ucy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGQuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhIGNvbHVtbiB3aXRoIGRhdGFGaWVsZDogJ2ZpcnN0TmFtZScsIHNldCAnZmlyc3ROYW1lJyBoZXJlLlxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gc29ydE9yZGVyLiBjb2x1bW4ncyBzb3J0IG9yZGVyLiBVc2UgJ2FzYycsICdkZXNjJyBvciBudWxsLlxuXHQqL1xuICAgIHB1YmxpYyBzb3J0QnkoZGF0YUZpZWxkOiBzdHJpbmcsIHNvcnRPcmRlcjogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zb3J0QnkoZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRCeShkYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNvcnRzIHRoZSBHcmlkIGJ5IGEgZGF0YSBmaWVsZC4gVGhpcyBtZXRob2Qgd2lsbCBhZGQgb3IgcmVtb3ZlIHNvcnRpbmcsIHdoZW4gc29ydGluZyBpcyBlbmFibGVkLiBUbyByZW1vdmUgdGhlIHNvcnRpbmcsIHVzZSAnbnVsbCcgZm9yIHRoZSBzb3J0T3JkZXIgcGFyYW1ldGVyLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gZGF0YUZpZWxkLiBUaGUgZGF0YSBmaWVsZCBvciBjb2x1bW4gaW5kZXggb2YgdGhlIGZpcnN0IGdyaWQgY29sdW1uLlxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByZWZlcmVuY2VEYXRhRmllbGQuIFRoZSBkYXRhIGZpZWxkIG9yIGNvbHVtbiBpbmRleCBvZiB0aGUgc2Vjb25kIGdyaWQgY29sdW1uLlxuXHQqL1xuICAgIHB1YmxpYyBzd2FwQ29sdW1ucyhkYXRhRmllbGQ6IHN0cmluZyB8IG51bWJlciwgcmVmZXJlbmNlRGF0YUZpZWxkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dhcENvbHVtbnMoZGF0YUZpZWxkLCByZWZlcmVuY2VEYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnN3YXBDb2x1bW5zKGRhdGFGaWVsZCwgcmVmZXJlbmNlRGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3dhcHMgdHdvIERhdGFHcmlkIGNvbHVtbnMuIFxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQmF0Y2hFZGl0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQmF0Y2hFZGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUJhdGNoRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgYmF0Y2ggZWRpdCBjaGFuZ2VzLiBUaGlzIG1ldGhvZCBjb25maXJtcyB0aGUgZWRpdGluZyBjaGFuZ2VzIG1hZGUgYnkgdGhlIGVuZC11c2VyLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgYSByb3csIGNlbGwgb3IgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGVuZFJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZW5kRGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RSYW5nZShyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZywgZW5kUm93SWQ6IHN0cmluZyB8IG51bWJlciwgZW5kRGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0UmFuZ2Uocm93SWQsIGRhdGFGaWVsZCwgZW5kUm93SWQsIGVuZERhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0UmFuZ2Uocm93SWQsIGRhdGFGaWVsZCwgZW5kUm93SWQsIGVuZERhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgYSByYW5nZSBvZiByb3dzLCBjZWxscyBvciBjb2x1bW5zLiBUaGUgcmVzdWx0IG9mIHRoZSBtZXRob2QgZGVwZW5kcyBvbiB0aGUgc2VsZWN0aW9uIGNvbmZpZ3VyYXRpb24gb2YgdGhlIEdyaWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGVuZFJvd0lkLiByb3cgYm91bmQgaWRcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0Um93c1JhbmdlKHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGVuZFJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Um93c1JhbmdlKHJvd0lkLCBlbmRSb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Um93c1JhbmdlKHJvd0lkLCBlbmRSb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgYSByYW5nZSBvZiByb3dzLiBcblx0KiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpW119IHJvd0lkLiBBcnJheSBvZiByb3cgaWRzXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJvd3Mocm93SWQ6IChzdHJpbmcgfCBudW1iZXIpW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Um93cyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Um93cyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgbXVsdGlwbGUgcm93cyBieSB0aGVpciBpZHMuIFxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGFsbCByb3dzLiBcblx0KiBAcGFyYW0ge251bWJlcltdfSByb3dJbmRleC4gQXJyYXkgb2Ygcm93IGluZGV4ZXNcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0Um93c0J5SW5kZXgocm93SW5kZXg6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3NCeUluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSb3dzQnlJbmRleChyb3dJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgbXVsdGlwbGUgcm93cyBieSB0aGVpciBpbmRleC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LiBTZWFyY2ggcXVlcnlcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gQ29sdW1uIGRhdGEgZmllbGQuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGNvbmRpdGlvbj8uIENvbmRpdGlvbnMgd2hpY2ggeW91IGNhbiB1c2UgaW4gdGhlIGV4cHJlc3Npb25zOiAnPScsICdFUVVBTCcsJyZsdDsmZ3Q7JywgJ05PVF9FUVVBTCcsICchPScsICcmbHQ7JywgJ0xFU1NfVEhBTicsJyZndDsnLCAnR1JFQVRFUl9USEFOJywgJyZsdDs9JywgJ0xFU1NfVEhBTl9PUl9FUVVBTCcsICcmZ3Q7PScsICdHUkVBVEVSX1RIQU5fT1JfRVFVQUwnLCdzdGFydHMgd2l0aCcsICdTVEFSVFNfV0lUSCcsJ2VuZHMgd2l0aCcsICdFTkRTX1dJVEgnLCAnJywgJ0VNUFRZJywgJ0NPTlRBSU5TJywnRE9FU19OT1RfQ09OVEFJTicsICdOVUxMJywnTk9UX05VTEwnXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJvd3NCeVF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIGRhdGFGaWVsZD86IHN0cmluZywgY29uZGl0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3NCeVF1ZXJ5KHF1ZXJ5LCBkYXRhRmllbGQsIGNvbmRpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Um93c0J5UXVlcnkocXVlcnksIGRhdGFGaWVsZCwgY29uZGl0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyByb3dzIGJ5IHVzaW5nIGEgcXVlcnkuIEV4YW1wbGU6IGdyaWQuc2VsZWN0Um93c0J5UXVlcnkoJ25hbmN5Jyk7IHNlbGVjdHMgYWxsIHJvd3MgdGhhdCBoYXZlICduYW5jeScgdmFsdWUuIEV4YW1wbGUgMjogZ3JpZC5zZWxlY3RSb3dzQnlRdWVyeSgnbmFuY3ksIGRhdm9saW8nKTsgc2VsZWN0cyBhbGwgcm93cyB0aGF0IGhhdmUgJ25hbmN5JyBhbmQgJ2Rhdm9saW8nIHZhbHVlcyBpbiB0aGUgc2FtZSByb3cuIEV4YW1wbGUgMzogZ3JpZC5zZWxlY3RSb3dzQnlRdWVyeSg1LCAncXVhbnRpdHknLCAnPicpOyBzZWxlY3RzIGFsbCByb3dzIHdoZXJlIHRoZSB2YWx1ZSBvZiB0aGUgJ3F1YW50aXR5JyBmaWVsZCBpcyA+IDUuICBcblx0KiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpW119IHJvd0lkcy4gQXJyYXkgb2Ygcm93IGlkc1xuXHQqIEBwYXJhbSB7c3RyaW5nW119IGRhdGFGaWVsZHMuIEFycmF5IG9mIGRhdGEgZmllbGRzLlxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RDZWxscyhyb3dJZHM6IChzdHJpbmcgfCBudW1iZXIpW10sIGRhdGFGaWVsZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdENlbGxzKHJvd0lkcywgZGF0YUZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Q2VsbHMocm93SWRzLCBkYXRhRmllbGRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBtdWx0aXBsZSBjZWxscyBieSB0aGVpciBpZHMgYW5kIGRhdGFGaWVsZHMuIEV4YW1wbGU6IGdyaWQuc2VsZWN0Q2VsbHMoWzAsIDEsIDJdLCBbJ2ZpcnN0TmFtZScsICdxdWFudGl0eScsICdkYXRlJ10pOyAtIHNlbGVjdHMgdGhlICdmaXJzdE5hbWUnLCAncXVhbnRpdHknIGFuZCAnZGF0ZScgY2VsbHMgZnJvbSB0aGUgZmlyc3QsIHNlY29uZCBhbmQgdGhpcmQgcm93cy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LiBTZWFyY2ggcXVlcnlcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0Q2VsbHNCeVF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Q2VsbHNCeVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RDZWxsc0J5UXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGNlbGxzIGJ5IHVzaW5nIGEgcXVlcnkuIEV4YW1wbGU6IGdyaWQuc2VsZWN0Q2VsbHNCeVF1ZXJ5KCduYW5jeScpOyBzZWxlY3RzIGFsbCBjZWxscyB0aGF0IGhhdmUgJ25hbmN5JyB2YWx1ZS4gRXhhbXBsZSAyOiBncmlkLnNlbGVjdENlbGxzQnlRdWVyeSgnbmFuY3ksIGRhdm9saW8nKTsgc2VsZWN0cyBhbGwgY2VsbHMgdGhhdCBoYXZlICduYW5jeScgYW5kICdkYXZvbGlvJyB2YWx1ZXMgaW4gdGhlIHNhbWUgcm93LiAgXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGEgY29sdW1uIHdpdGggZGF0YUZpZWxkOiAnZmlyc3ROYW1lJywgc2V0ICdmaXJzdE5hbWUnIGhlcmUuXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBEYXRlIHwgYm9vbGVhbn0gdmFsdWUuIE5ldyBDZWxsIHZhbHVlLlxuXHQqL1xuICAgIHB1YmxpYyBzZXRDZWxsVmFsdWUocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDZWxsVmFsdWUocm93SWQsIGRhdGFGaWVsZCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldENlbGxWYWx1ZShyb3dJZCwgZGF0YUZpZWxkLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYSBuZXcgdmFsdWUgdG8gYSBjZWxsLiBcblx0KiBAcGFyYW0ge0dyaWRDb2x1bW5bXX0gY29sdW1ucy4gQ29sdW1ucyBhcnJheS5cblx0Ki9cbiAgICBwdWJsaWMgc2V0Q29sdW1ucyhjb2x1bW5zOiBHcmlkQ29sdW1uW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q29sdW1ucyhjb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDb2x1bW5zKGNvbHVtbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG5ldyBjb2x1bW5zIHRvIHRoZSBHcmlkLiBUaGUgZ3JpZCB3aWxsIHJlZHJhdyBhbGwgdGhlIGNvbHVtbiBoZWFkZXJzLCBhbmQgdGhlbiByZWRyYXcgYWxsIG9mIHRoZSByb3dzLiBCeSB1c2luZyAnc2V0Q29sdW1ucycsIHRoZSBncmlkIHdpbGwgY29tcGFyZSB0aGUgbmV3IGNvbHVtbnMgcGFzc2VkIGFzIGFyZ3VtZW50IHRvIHRoZSBtZXRob2Qgd2l0aCBleGlzdGluZyBjb2x1bW5zLiBUaGUgR3JpZCB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIG5ldyBjb2x1bW5zLCBrZWVwIG9sZCBjb2x1bW5zIGlmIHRoZXkgYWxyZWFkeSBleGlzdCBhbmQgcmVtb3ZlIGNvbHVtbnMgd2hpY2ggYXJlIG5vdCBpbiB0aGUgJ3NldENvbHVtbnMnIG1ldGhvZCBhcmd1bWVudC4gVGhlIGJlbmVmaXQgb2YgdGhhdCBpcyB0aGF0IHRoZSBzdGF0ZSBvZiB0aGUgY29sdW1uIGxpa2Uoc29ydCwgZmlsdGVyLCB3aWR0aCBvciBvdGhlcikgd2lsbCBiZSBrZXB0LCBpZiB0aGUgY29sdW1uIGV4c2l0cyBhZnRlciB0aGUgbmV3IGNvbHVtbnMgYXJlIGFwcGxpZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYSBjb2x1bW4gd2l0aCBkYXRhRmllbGQ6ICdmaXJzdE5hbWUnLCBzZXQgJ2ZpcnN0TmFtZScgaGVyZS5cblx0KiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lLiBUaGUgY29sdW1uIHByb3BlcnR5J3MgbmFtZS5cblx0KiBAcGFyYW0ge2FueX0gdmFsdWUuIFRoZSBuZXcgcHJvcGVydHkgdmFsdWUuXG5cdCovXG4gICAgcHVibGljIHNldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDb2x1bW5Qcm9wZXJ0eShkYXRhRmllbGQsIHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYSBwcm9wZXJ0eSB0byBhIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lLiBUaGUgcm93IHByb3BlcnR5J3MgbmFtZS5cblx0KiBAcGFyYW0ge2FueX0gdmFsdWUuIFRoZSBuZXcgcHJvcGVydHkgdmFsdWUuXG5cdCovXG4gICAgcHVibGljIHNldFJvd1Byb3BlcnR5KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIHByb3BlcnR5TmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFJvd1Byb3BlcnR5KHJvd0lkLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRSb3dQcm9wZXJ0eShyb3dJZCwgcHJvcGVydHlOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYSBwcm9wZXJ0eSB0byBhIHJvdy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3tiYWNrZ3JvdW5kPzogc3RyaW5nLCBjb2xvcj86IHN0cmluZywgZm9udFNpemU/OiBzdHJpbmcsIGZvbnRGYW1pbHk/OiBzdHJpbmcsIHRleHREZWNvcmF0aW9uPzogc3RyaW5nLCBmb250U3R5bGU/OiBzdHJpbmcsIGZvbnRXZWlnaHQ/OiBzdHJpbmd9fSByb3dTdHlsZS4gVGhlIHJvdyBzdHlsZSBvYmplY3QuIFRoZSBvYmplY3QgbWF5IGhhdmUgb25lIG9yIGFsbCBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6ICdiYWNrZ3JvdW5kJywgJ2NvbG9yJywgJ2ZvbnRTaXplJywgJ2ZvbnRGYW1pbHknLCAndGV4dERlY29yYXRpb24nLCAnZm9udFN0eWxlJywgJ2ZvbnRXZWlnaHQnLlxuXHQqL1xuICAgIHB1YmxpYyBzZXRSb3dTdHlsZShyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCByb3dTdHlsZToge2JhY2tncm91bmQ/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBmb250U2l6ZT86IHN0cmluZywgZm9udEZhbWlseT86IHN0cmluZywgdGV4dERlY29yYXRpb24/OiBzdHJpbmcsIGZvbnRTdHlsZT86IHN0cmluZywgZm9udFdlaWdodD86IHN0cmluZ30pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Um93U3R5bGUocm93SWQsIHJvd1N0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRSb3dTdHlsZShyb3dJZCwgcm93U3R5bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgc3R5bGUgdG8gYSByb3cuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gQ29sdW1uIGJvdW5kIGZpZWxkIG5hbWUuXG5cdCogQHBhcmFtIHt7YmFja2dyb3VuZD86IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIGZvbnRTaXplPzogc3RyaW5nLCBmb250RmFtaWx5Pzogc3RyaW5nLCB0ZXh0RGVjb3JhdGlvbj86IHN0cmluZywgZm9udFN0eWxlPzogc3RyaW5nLCBmb250V2VpZ2h0Pzogc3RyaW5nfX0gcm93U3R5bGUuIFRoZSBjZWxsIHN0eWxlIG9iamVjdC4gVGhlIG9iamVjdCBtYXkgaGF2ZSBvbmUgb3IgYWxsIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogJ2JhY2tncm91bmQnLCAnY29sb3InLCAnZm9udFNpemUnLCAnZm9udEZhbWlseScsICd0ZXh0RGVjb3JhdGlvbicsICdmb250U3R5bGUnLCAnZm9udFdlaWdodCcuXG5cdCovXG4gICAgcHVibGljIHNldENlbGxTdHlsZShyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZywgcm93U3R5bGU6IHtiYWNrZ3JvdW5kPzogc3RyaW5nLCBjb2xvcj86IHN0cmluZywgZm9udFNpemU/OiBzdHJpbmcsIGZvbnRGYW1pbHk/OiBzdHJpbmcsIHRleHREZWNvcmF0aW9uPzogc3RyaW5nLCBmb250U3R5bGU/OiBzdHJpbmcsIGZvbnRXZWlnaHQ/OiBzdHJpbmd9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldENlbGxTdHlsZShyb3dJZCwgZGF0YUZpZWxkLCByb3dTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q2VsbFN0eWxlKHJvd0lkLCBkYXRhRmllbGQsIHJvd1N0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIHN0eWxlIHRvIGEgcm93LiBcblx0KiBAcGFyYW0ge251bWJlcn0gdmFsdWUuIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG5cdCovXG4gICAgcHVibGljIHNldFZlcnRpY2FsU2Nyb2xsVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRWZXJ0aWNhbFNjcm9sbFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRWZXJ0aWNhbFNjcm9sbFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHZlcnRpY2FsIHNjcm9sbGJhci4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgZ2V0VmVydGljYWxTY3JvbGxWYWx1ZSBhbmQgZ2V0VmVydGljYWxTY3JvbGxNYXguIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZS4gVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cblx0Ki9cbiAgICBwdWJsaWMgc2V0SG9yaXpvbnRhbFNjcm9sbFZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0SG9yaXpvbnRhbFNjcm9sbFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRIb3Jpem9udGFsU2Nyb2xsVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIuIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIGdldEhvcml6b250YWxTY3JvbGxWYWx1ZSBhbmQgZ2V0SG9yaXpvbnRhbFNjcm9sbE1heC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0Ki9cbiAgICBwdWJsaWMgc2hvd0RldGFpbChyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dEZXRhaWwocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dEZXRhaWwocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyB0aGUgRGV0YWlscyBvZiBhIFJvdywgd2hlbiByb3cgZGV0YWlscyBhcmUgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge2FueX0gZGF0YS4gcm93IGRhdGEgbWF0Y2hpbmcgdGhlIGRhdGEgc291cmNlXG5cdCogQHBhcmFtIHt7KHJvdzogR3JpZFJvdyk6IHZvaWR9fSBjYWxsYmFjaz8uIFNldHMgYSBjYWxsYmFjayBmdW5jdGlvbiwgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHRoZSByb3cgaXMgdXBkYXRlZC4gVGhlIGNhbGxiYWNrJ3MgYXJndW1lbnQgaXMgdGhlIHVwZGF0ZWQgcm93LlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YTogYW55LCBjYWxsYmFjaz86IHsocm93OiBHcmlkUm93KTogdm9pZH0pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUm93KHJvd0lkLCBkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUm93KHJvd0lkLCBkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSByb3cuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGQuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhIGNvbHVtbiB3aXRoIGRhdGFGaWVsZDogJ2ZpcnN0TmFtZScsIHNldCAnZmlyc3ROYW1lJyBoZXJlLlxuXHQqL1xuICAgIHB1YmxpYyB1bnNlbGVjdChyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBkYXRhRmllbGQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuc2VsZWN0cyBhIHJvdywgY2VsbCBvciBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIHVuY2hlY2tSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmNoZWNrUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmNoZWNrUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVW5jaGVja3MgYSBUcmVlR3JpZCByb3cuIFNldHMgaXRzIGNoZWNrLWJveCB0byBmYWxzZS4gXG5cdCovXG4gICAgcHVibGljIHVuY2hlY2tBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmNoZWNrQWxsUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuY2hlY2tBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuY2hlY2tzIGFsbCBUcmVlR3JpZCBvciBHcm91cGluZyByb3dzLiBTZXRzIGFsbCBjaGVjay1ib3hlcyB0byBmYWxzZS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0Ki9cbiAgICBwdWJsaWMgdG9nZ2xlUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudG9nZ2xlUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC50b2dnbGVSb3cocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQmVnaW5FZGl0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25CYXRjaENoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdiYXRjaENoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydiYXRjaENhbmNlbEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkJhdGNoQ2FuY2VsLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JhdGNoQ2FuY2VsJywgdGhhdC5ldmVudEhhbmRsZXJzWydiYXRjaENhbmNlbEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5Eb3VibGVDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZXNpemVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5SZXNpemUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uUmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZXNpemVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnZ2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRyYWdnaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkRyYWdnaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnZ2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5EcmFnRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkRyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uUmVvcmRlci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5SZW9yZGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29tbWVudEFkZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbW1lbnRBZGQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tbWVudEFkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29tbWVudEFkZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRSZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db21tZW50UmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbW1lbnRSZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRSZW1vdmVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51SXRlbUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51SXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dEcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93RHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlb3JkZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dSZW9yZGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd1Jlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlb3JkZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dFeHBhbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dFeHBhbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dFeHBhbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0NvbGxhcHNlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd0NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93Q2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93Q2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RG91YmxlQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dEb3VibGVDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dEb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dSZXNpemUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93UmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dTdGFycmVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93U3RhcnJlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dTdGFycmVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dTdGFycmVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2VsbENsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbERvdWJsZUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2VsbERvdWJsZUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxEb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbERvdWJsZUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kRWRpdEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVuZEVkaXQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kRWRpdEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkZpbHRlci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmaWx0ZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2dyb3VwSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uR3JvdXAuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ3JvdXAnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2dyb3VwSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkNvbHVtbkRpYWxvZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW5Db2x1bW5EaWFsb2cuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbkNvbHVtbkRpYWxvZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkNvbHVtbkRpYWxvZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlQ29sdW1uRGlhbG9nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2VDb2x1bW5EaWFsb2cuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2VDb2x1bW5EaWFsb2cnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlQ29sdW1uRGlhbG9nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93VGFwLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd1RhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbFRhcEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxUYXAuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2VsbFRhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbFRhcEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25QYWdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU29ydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbEJvdHRvbVJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxUb3BSZWFjaGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZ2luRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydiYXRjaENoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JhdGNoQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydiYXRjaENoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDYW5jZWxIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdiYXRjaENhbmNlbCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDYW5jZWxIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uUmVvcmRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29tbWVudEFkZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbW1lbnRBZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRBZGRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRSZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21tZW50UmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb21tZW50UmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51SXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ1N0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93UmVvcmRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd1Jlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlb3JkZXJIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd0V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RXhwYW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd0NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RvdWJsZUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RvdWJsZUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dSZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlc2l6ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93U3RhcnJlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd1N0YXJyZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1N0YXJyZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NlbGxDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZEVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZEVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50Lm9uZmlsdGVySGFuZGxlciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZ3JvdXBIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdncm91cCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZ3JvdXBIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5Db2x1bW5EaWFsb2dIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuQ29sdW1uRGlhbG9nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuQ29sdW1uRGlhbG9nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUNvbHVtbkRpYWxvZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlQ29sdW1uRGlhbG9nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUNvbHVtbkRpYWxvZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1RhcEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd1RhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2VsbFRhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbFRhcEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=