import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var GridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GridComponent, _super);
    function GridComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered, when the edit begins.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
        *   row - The edited row.
        *   column - The edited column.
        *   cell - The edited cell.
        */
        _this.onBeginEdit = new EventEmitter();
        /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
        *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
        */
        _this.onBatchChange = new EventEmitter();
        /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
        *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
        */
        _this.onBatchCancel = new EventEmitter();
        /** @description This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
        *   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
        *   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered, when the user clicks on the header of a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
        *   column - The clicked column.
        *   dataField - The column's data field.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onColumnClick = new EventEmitter();
        /** @description This event is triggered, when the user double clicks on the header of a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
        *   column - The double-clicked column.
        *   dataField - The column's data field.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onColumnDoubleClick = new EventEmitter();
        /** @description This event is triggered, when the user resized a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
        *   column - The resized column.
        *   dataField - The column's data field.
        *   oldWidth - The old width of the column.
        *   width - The new width of the column.
        */
        _this.onColumnResize = new EventEmitter();
        /** @description This event is triggered, when the user starts a column drag.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   originalEvent - The origianl Event object.
        */
        _this.onColumnDragStart = new EventEmitter();
        /** @description This event is triggered, when the user drags a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onColumnDragging = new EventEmitter();
        /** @description This event is triggered, when the user drops a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   newIndex - The column's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onColumnDragEnd = new EventEmitter();
        /** @description This event is triggered, when the user reorders a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
        *   column - The column.
        *   dataField - The column's data field.
        *   index - The column's index
        *   newIndex - The column's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onColumnReorder = new EventEmitter();
        /** @description This event is triggered, when the user starts a row drag.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   originalEvent - The origianl Event object.
        */
        _this.onRowDragStart = new EventEmitter();
        /** @description This event is triggered, when the user drags a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onRowDragging = new EventEmitter();
        /** @description This event is triggered, when the user drags a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   newIndex - The row's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onRowDragEnd = new EventEmitter();
        /** @description This event is triggered, when the user reorders a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
        *   row - The row.
        *   id - The row's id
        *   index - The row's index
        *   newIndex - The row's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onRowReorder = new EventEmitter();
        /** @description This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
        *   row - The expanded row.
        *   id - The row's id
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onRowExpand = new EventEmitter();
        /** @description This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
        *   row - The collapsed row.
        *   id - The row's id
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onRowCollapse = new EventEmitter();
        /** @description This event is triggered, when the user clicks on a row of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
        *   row - The clicked row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        *   id - Gets the row id.
        *   isRightClick - Gets whether the pointing device's right button is clicked.
        *   pageX - Gets the click's X position.
        *   pageY - Gets the click's Y position.
        */
        _this.onRowClick = new EventEmitter();
        /** @description This event is triggered, when the user double clicks on a row of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
        *   row - The double-clicked row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        *   id - Gets the row id.
        *   isRightClick - Gets whether the pointing device's right button is clicked.
        *   pageX - Gets the click's X position.
        *   pageY - Gets the click's Y position.
        */
        _this.onRowDoubleClick = new EventEmitter();
        /** @description This event is triggered, when the user resized a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
        *   row - The resized row.
        *   id - Gets the row id.
        *   oldHeight - The old height of the row.
        *   height - The new height of the row.
        */
        _this.onRowResize = new EventEmitter();
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
        _this.onCellClick = new EventEmitter();
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
        _this.onCellDoubleClick = new EventEmitter();
        /** @description This event is triggered, when the edit ends.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
        *   row - The edited row.
        *   column - The edited column.
        *   cell - The edited cell.
        */
        _this.onEndEdit = new EventEmitter();
        /** @description This event is triggered, when a filter is added or removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
        *   columns - Array of columns.
        *   data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
        */
        _this.onFilter = new EventEmitter();
        /** @description This event is triggered, when the grid is resized.
        *  @param event. The custom event. 	*/
        _this.onResize = new EventEmitter();
        /** @description This event is triggered when the user touches and holds on the row for at least 300ms.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
        *   row - The tapped row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onRowTap = new EventEmitter();
        /** @description This event is triggered when the user touches and holds on the cell for at least 300ms.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
        *   cell - The tapped row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onCellTap = new EventEmitter();
        /** @description This event is triggered, when the user changes the pages.
        *  @param event. The custom event. 	*/
        _this.onPage = new EventEmitter();
        /** @description This event is triggered, when a sorting column is added or removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
        *   columns - Array of columns.
        *   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
        */
        _this.onSort = new EventEmitter();
        /** @description This event is triggered, when the user reaches the bottom of the grid.
        *  @param event. The custom event. 	*/
        _this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered, when the user reaches the top of the grid.
        *  @param event. The custom event. 	*/
        _this.onScrollTopReached = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    GridComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-grid');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(GridComponent.prototype, "appearance", {
        /** @description An object containing settings related to the grid's appearance. */
        get: function () {
            return this.nativeElement ? this.nativeElement.appearance : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.appearance = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "behavior", {
        /** @description An object containing settings related to the grid's behavior. */
        get: function () {
            return this.nativeElement ? this.nativeElement.behavior : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.behavior = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "layout", {
        /** @description An object containing settings related to the grid's layout. */
        get: function () {
            return this.nativeElement ? this.nativeElement.layout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.layout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "clipboard", {
        /** @description The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
        get: function () {
            return this.nativeElement ? this.nativeElement.clipboard : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.clipboard = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "columns", {
        /** @description The columns property is used to describe all columns displayed in the grid.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "columnMenu", {
        /** @description Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnMenu : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnMenu = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "columnGroups", {
        /** @description Describes the settings of the column groups. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnGroups : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "conditionalFormatting", {
        /** @description Sets or gets details about conditional formatting to be applied to the Grid's cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "charting", {
        /** @description Sets the Grid Charting Data Visualization. */
        get: function () {
            return this.nativeElement ? this.nativeElement.charting : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.charting = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "checkBoxes", {
        /** @description Sets the TreeGrid checkboxes. */
        get: function () {
            return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.checkBoxes = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "dataExport", {
        /** @description Sets the Grid Data Export options. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataExport : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataExport = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "dataSource", {
        /** @description Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "dataSourceSettings", {
        /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSourceSettings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "editing", {
        /** @description Describes the grid's editing settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editing : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editing = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "filtering", {
        /** @description Describes the grid's filtering settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filtering : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filtering = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "grouping", {
        /** @description Describes the grid's grouping settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouping : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouping = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "messages", {
        /** @description Sets the messages values. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onCellValue", {
        /** @description Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onCellValue : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onCellValue = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onCellUpdate", {
        /** @description Callback function() called when the grid has been rendered. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onCellUpdate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onCellRender", {
        /** @description Describes the paging settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onCellRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onBeforeInit", {
        /** @description Describes the pager settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onBeforeInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onInit", {
        /** @description Sets the row details. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onAfterInit", {
        /** @description Sets the scroll mode settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onAfterInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onChartInit", {
        /** @description Describes the column header settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onChartInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onChartInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRender", {
        /** @description Describes the summary row settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onKey", {
        /** @description Describes the settings for the group header. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onKey : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onKey = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRowInit", {
        /** @description Describes the header settings of the grid. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRowInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRowInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRowDetailInit", {
        /** @description Describes the footer settings of the grid. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRowDetailInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRowDetailUpdated", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRowDetailUpdated = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRowInserted", {
        /** @description The rows property is used to describe all rows displayed in the grid. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRowInserted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRowRemoved", {
        /** @description Describes the selection settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRowRemoved = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRowUpdate", {
        /** @description Describes sorting settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRowUpdate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onRowUpdated", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onRowUpdated = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onColumnInit", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onColumnInserted", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnInserted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onColumnRemoved", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnRemoved = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onColumnUpdated", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnUpdated = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "onCommand", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.onCommand : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onCommand = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "paging", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.paging : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.paging = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "pager", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.pager : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pager = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "rowDetail", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.rowDetail : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rowDetail = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "scrolling", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.scrolling : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scrolling = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "columnHeader", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnHeader : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnHeader = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "summaryRow", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.summaryRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.summaryRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "groupHeader", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupHeader : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupHeader = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "header", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.header : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.header = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "footer", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.footer : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.footer = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "rightToLeft", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "rows", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.rows : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rows = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "selection", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.selection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "sorting", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.sorting : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sorting = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {any} data. row data matching the data source
    * @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
    * @param {any} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    GridComponent.prototype.addRow = function (data, insertAtBottom, callback) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRow(data, insertAtBottom, callback);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addRow(data, insertAtBottom, callback);
            });
        }
    };
    /** @description Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    GridComponent.prototype.addNewRow = function (position) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.addNewRow(position);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
    * @param {number} count. The count of unbound rows.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    GridComponent.prototype.addUnboundRow = function (count, position) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.addUnboundRow(count, position);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Adds a filter to a column. This method will apply a filter to the Grid data.
    * @param {string} dataField. column bound data field
    * @param {string} filter. Filter expression like: 'startsWith B'
    * @param {boolean} refreshFilters?.
    */
    GridComponent.prototype.addFilter = function (dataField, filter, refreshFilters) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter, refreshFilters);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addFilter(dataField, filter, refreshFilters);
            });
        }
    };
    /** @description Auto-sizes grid rows. This method will update the height of all Grid rows.
    */
    GridComponent.prototype.autoSizeRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.autoSizeRows();
            });
        }
    };
    /** @description Auto-sizes grid columns. This method will update the width of all Grid columns.
    */
    GridComponent.prototype.autoSizeColumns = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeColumns();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.autoSizeColumns();
            });
        }
    };
    /** @description This method returns true, if all rows in the Grid are selected.
    * @returns {boolean}
  */
    GridComponent.prototype.areAllRowsSelected = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.areAllRowsSelected();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    GridComponent.prototype.beginUpdate = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginUpdate();
            });
        }
    };
    /** @description Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    GridComponent.prototype.beginEdit = function (rowId, dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginEdit(rowId, dataField);
            });
        }
    };
    /** @description Clears all filters. Refreshes the view and updates all filter input components.
    */
    GridComponent.prototype.clearFilter = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilter();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearFilter();
            });
        }
    };
    /** @description Clears the selection that user have made. All row, cell and column selection highlights will be removed.
    */
    GridComponent.prototype.clearSelection = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSelection();
            });
        }
    };
    /** @description Cancels the editing. This method closes the cell editor and cancels the changes.
    */
    GridComponent.prototype.cancelEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.cancelEdit();
            });
        }
    };
    /** @description Checks a TreeGrid row. This method updates the row's check-box.
    * @param {string | number} rowId. row bound id
    */
    GridComponent.prototype.checkRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.checkRow(rowId);
            });
        }
    };
    /** @description Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
    */
    GridComponent.prototype.checkAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.checkAllRows();
            });
        }
    };
    /** @description Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
    */
    GridComponent.prototype.clearRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearRows();
            });
        }
    };
    /** @description Closes the column drop-down menu.
    */
    GridComponent.prototype.closeMenu = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeMenu();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeMenu();
            });
        }
    };
    /** @description Collapses a TreeGrid or Grouping row.
    * @param {string | number} rowId. row bound id
    */
    GridComponent.prototype.collapseRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseRow(rowId);
            });
        }
    };
    /** @description Collapses all TreeGrid or Grouping rows.
    */
    GridComponent.prototype.collapseAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseAllRows();
            });
        }
    };
    /** @description Creates a Chart, when charting is enabled.
    * @param {string} type. Chart's type
    * @param {any} dataSource?. Chart's data source
    */
    GridComponent.prototype.createChart = function (type, dataSource) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.createChart(type, dataSource);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.createChart(type, dataSource);
            });
        }
    };
    /** @description Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {any} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
    */
    GridComponent.prototype.deleteRow = function (rowId, callback) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(rowId, callback);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.deleteRow(rowId, callback);
            });
        }
    };
    /** @description Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    * @returns {boolean}
  */
    GridComponent.prototype.ensureVisible = function (rowId, dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.ensureVisible(rowId, dataField);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Ends the editing. This method confirms all changes and closes the opened cell editor(s).
    */
    GridComponent.prototype.endEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endEdit();
            });
        }
    };
    /** @description Ends the update operation. This method will resume the rendering and will refresh the Grid.
    * @param {boolean} refresh?. The flag that control the calls of the refresh method.
    */
    GridComponent.prototype.endUpdate = function (refresh) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endUpdate(refresh);
            });
        }
    };
    /** @description Expands a TreeGrid or Grouping row.
    * @param {string | number} rowId. row bound id
    */
    GridComponent.prototype.expandRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandRow(rowId);
            });
        }
    };
    /** @description Expands all TreeGrid or Grouping rows.
    */
    GridComponent.prototype.expandAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandAllRows();
            });
        }
    };
    /** @description Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
    * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    */
    GridComponent.prototype.exportData = function (Dataformat) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(Dataformat);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.exportData(Dataformat);
            });
        }
    };
    /** @description Navigates to a page, when paging is enabled.
    * @param {number} index. page index
    */
    GridComponent.prototype.goToPage = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.goToPage(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.goToPage(index);
            });
        }
    };
    /** @description Navigates to the next page, when grid paging is enabled.
    */
    GridComponent.prototype.nextPage = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.nextPage();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.nextPage();
            });
        }
    };
    /** @description Navigates to the prev page, when grid paging is enabled.
    */
    GridComponent.prototype.prevPage = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.prevPage();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.prevPage();
            });
        }
    };
    /** @description Navigates to the first page, when grid paging is enabled.
    */
    GridComponent.prototype.firstPage = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.firstPage();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.firstPage();
            });
        }
    };
    /** @description Navigates to the last page, when grid paging is enabled.
    */
    GridComponent.prototype.lastPage = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.lastPage();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.lastPage();
            });
        }
    };
    /** @description Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    GridComponent.prototype.getVerticalScrollMax = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getVerticalScrollMax();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the position of the vertical scrollbar.
    * @returns {number}
  */
    GridComponent.prototype.getVerticalScrollValue = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getVerticalScrollValue();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    GridComponent.prototype.getHorizontalScrollMax = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getHorizontalScrollMax();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the position of the horizontal scrollbar.
    * @returns {number}
  */
    GridComponent.prototype.getHorizontalScrollValue = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getHorizontalScrollValue();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'.
    * @returns {any}
  */
    GridComponent.prototype.getColumns = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getColumns();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the groups array.
    * @returns {any[]}
  */
    GridComponent.prototype.getGroups = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getGroups();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value.
    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
    GridComponent.prototype.getSortedColumns = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSortedColumns();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the selection.
    * @returns {any}
  */
    GridComponent.prototype.getSelection = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelection();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the selected row ids.
    * @returns {any[]}
  */
    GridComponent.prototype.getSelectedRows = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectedRows();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value.
    * @returns {any[]}
  */
    GridComponent.prototype.getSelectedCells = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectedCells();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets an array of columns with applied filters.
    * @returns {any}
  */
    GridComponent.prototype.getFilteredColumns = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getFilteredColumns();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets an array of rows, which are visible and match the applied filter.
    * @returns {any}
  */
    GridComponent.prototype.getVisibleRows = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getVisibleRows();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
    * @returns {any}
  */
    GridComponent.prototype.getViewRows = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getViewRows();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets a JSON object with the following fields: 'sort', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'.
    * @returns {any}
  */
    GridComponent.prototype.getState = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getState();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the changes from the batch edit.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    GridComponent.prototype.getBatchEditChanges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getBatchEditChanges();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets a value of a cell.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @returns {any}
  */
    GridComponent.prototype.getCellValue = function (rowId, dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getCellValue(rowId, dataField);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets a value of a column.
    * @param {string} dataField. column bound data field
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    GridComponent.prototype.getColumnProperty = function (dataField, propertyName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getColumnProperty(dataField, propertyName);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets a value of a row.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    GridComponent.prototype.getRowProperty = function (rowId, propertyName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getRowProperty(rowId, propertyName);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the Data source data associated to the row.
    * @param {string | number} rowId. row bound id
    * @returns {any}
  */
    GridComponent.prototype.getRowData = function (rowId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getRowData(rowId);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the Row's id.
    * @param {number} rowIndex. row index
    * @returns {any}
  */
    GridComponent.prototype.getRowId = function (rowIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getRowId(rowIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets whether a column's drop-down menu is opened.
    * @returns {boolean}
  */
    GridComponent.prototype.hasMenu = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.hasMenu();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description This method returns true, if any rows in the Grid are selected.
    * @returns {boolean}
  */
    GridComponent.prototype.hasSelectedRows = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.hasSelectedRows();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Hides the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    */
    GridComponent.prototype.hideDetail = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideDetail(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideDetail(rowId);
            });
        }
    };
    /** @description Highlights a column. Highlights a Grid column.
    * @param {string} dataField. column bound data field
    */
    GridComponent.prototype.highlightColumn = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.highlightColumn(dataField);
            });
        }
    };
    /** @description Highlights a cell. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string} className?. CSS Class Name
    */
    GridComponent.prototype.highlightCell = function (rowId, dataField, className) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightCell(rowId, dataField, className);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.highlightCell(rowId, dataField, className);
            });
        }
    };
    /** @description Highlights a row. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} className?. CSS Class Name
    */
    GridComponent.prototype.highlightRow = function (rowId, className) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightRow(rowId, className);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.highlightRow(rowId, className);
            });
        }
    };
    /** @description Opens a column drop-down menu.
    * @param {string} dataField. column bound data field
    */
    GridComponent.prototype.openMenu = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openMenu(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openMenu(dataField);
            });
        }
    };
    /** @description Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property.
    */
    GridComponent.prototype.print = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.print();
            });
        }
    };
    /** @description Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
    */
    GridComponent.prototype.refresh = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refresh();
            });
        }
    };
    /** @description Refreshes the grid with the current property values. This method will refresh the Grid layout.
    */
    GridComponent.prototype.refreshView = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshView();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refreshView();
            });
        }
    };
    /** @description Refreshes the grid cells in view. The method is useful for live-updates of cell values.
    * @param {string} dataField. column bound data field
    * @param {boolean} refreshFilters?.
    */
    GridComponent.prototype.removeFilter = function (dataField, refreshFilters) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField, refreshFilters);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeFilter(dataField, refreshFilters);
            });
        }
    };
    /** @description Removes a column filter.
    */
    GridComponent.prototype.revertBatchEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.revertBatchEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.revertBatchEdit();
            });
        }
    };
    /** @description Reverts the batch edit changes. This method cancels all changes made by the end-user.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
    */
    GridComponent.prototype.reorderColumns = function (dataField, referenceDataField, insertAfter) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
            });
        }
    };
    /** @description Reorders two DataGrid columns.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    */
    GridComponent.prototype.swapColumns = function (dataField, referenceDataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.swapColumns(dataField, referenceDataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.swapColumns(dataField, referenceDataField);
            });
        }
    };
    /** @description Swaps two DataGrid columns.
    */
    GridComponent.prototype.saveBatchEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveBatchEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveBatchEdit();
            });
        }
    };
    /** @description Saves the batch edit changes. This method confirms the editing changes made by the end-user.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    GridComponent.prototype.select = function (rowId, dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(rowId, dataField);
            });
        }
    };
    /** @description Selects a row, cell or column.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string | number} endRowId. row bound id
    * @param {string} endDataField. column bound data field
    */
    GridComponent.prototype.selectRange = function (rowId, dataField, endRowId, endDataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
            });
        }
    };
    /** @description Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string | number} endRowId. row bound id
    */
    GridComponent.prototype.selectRowsRange = function (rowId, endRowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsRange(rowId, endRowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectRowsRange(rowId, endRowId);
            });
        }
    };
    /** @description Selects a range of rows.
    * @param {(string | number)[]} rowId. Array of row ids
    */
    GridComponent.prototype.selectRows = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRows(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectRows(rowId);
            });
        }
    };
    /** @description Selects multiple rows by their ids.
    */
    GridComponent.prototype.selectAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectAllRows();
            });
        }
    };
    /** @description Selects all rows.
    * @param {number[]} rowIndex. Array of row indexes
    */
    GridComponent.prototype.selectRowsByIndex = function (rowIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsByIndex(rowIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectRowsByIndex(rowIndex);
            });
        }
    };
    /** @description Selects multiple rows by their index.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string | number | Date | boolean} value. New Cell value.
    */
    GridComponent.prototype.setCellValue = function (rowId, dataField, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCellValue(rowId, dataField, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setCellValue(rowId, dataField, value);
            });
        }
    };
    /** @description Sets a new value to a cell.
    * @param {string} dataField. column bound data field
    * @param {string} propertyName. The column property's name.
    * @param {any} value. The new property value.
    */
    GridComponent.prototype.setColumnProperty = function (dataField, propertyName, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnProperty(dataField, propertyName, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setColumnProperty(dataField, propertyName, value);
            });
        }
    };
    /** @description Sets a property to a column.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The row property's name.
    * @param {any} value. The new property value.
    */
    GridComponent.prototype.setRowProperty = function (rowId, propertyName, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowProperty(rowId, propertyName, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setRowProperty(rowId, propertyName, value);
            });
        }
    };
    /** @description Sets a property to a row.
    * @param {number} value. The new scroll position
    */
    GridComponent.prototype.setVerticalScrollValue = function (value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setVerticalScrollValue(value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setVerticalScrollValue(value);
            });
        }
    };
    /** @description Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax.
    * @param {number} value. The new scroll position
    */
    GridComponent.prototype.setHorizontalScrollValue = function (value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setHorizontalScrollValue(value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setHorizontalScrollValue(value);
            });
        }
    };
    /** @description Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax.
    * @param {string | number} rowId. row bound id
    */
    GridComponent.prototype.showDetail = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showDetail(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showDetail(rowId);
            });
        }
    };
    /** @description Shows the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    * @param {any} data. row data matching the data source
    * @param {any} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
    */
    GridComponent.prototype.updateRow = function (rowId, data, callback) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateRow(rowId, data, callback);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateRow(rowId, data, callback);
            });
        }
    };
    /** @description Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    GridComponent.prototype.unselect = function (rowId, dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselect(rowId, dataField);
            });
        }
    };
    /** @description Unselects a row, cell or column.
    * @param {string | number} rowId. row bound id
    */
    GridComponent.prototype.uncheckRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.uncheckRow(rowId);
            });
        }
    };
    /** @description Unchecks a TreeGrid row. Sets its check-box to false.
    */
    GridComponent.prototype.uncheckAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.uncheckAllRows();
            });
        }
    };
    /** @description Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
    * @param {string | number} rowId. row bound id
    */
    GridComponent.prototype.toggleRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggleRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggleRow(rowId);
            });
        }
    };
    Object.defineProperty(GridComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    GridComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    GridComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    GridComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['beginEditHandler'] = function (event) { that.onBeginEdit.emit(event); };
        that.nativeElement.addEventListener('beginEdit', that.eventHandlers['beginEditHandler']);
        that.eventHandlers['batchChangeHandler'] = function (event) { that.onBatchChange.emit(event); };
        that.nativeElement.addEventListener('batchChange', that.eventHandlers['batchChangeHandler']);
        that.eventHandlers['batchCancelHandler'] = function (event) { that.onBatchCancel.emit(event); };
        that.nativeElement.addEventListener('batchCancel', that.eventHandlers['batchCancelHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['columnDoubleClickHandler'] = function (event) { that.onColumnDoubleClick.emit(event); };
        that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
        that.eventHandlers['columnResizeHandler'] = function (event) { that.onColumnResize.emit(event); };
        that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        that.eventHandlers['columnDragStartHandler'] = function (event) { that.onColumnDragStart.emit(event); };
        that.nativeElement.addEventListener('columnDragStart', that.eventHandlers['columnDragStartHandler']);
        that.eventHandlers['columnDraggingHandler'] = function (event) { that.onColumnDragging.emit(event); };
        that.nativeElement.addEventListener('columnDragging', that.eventHandlers['columnDraggingHandler']);
        that.eventHandlers['columnDragEndHandler'] = function (event) { that.onColumnDragEnd.emit(event); };
        that.nativeElement.addEventListener('columnDragEnd', that.eventHandlers['columnDragEndHandler']);
        that.eventHandlers['columnReorderHandler'] = function (event) { that.onColumnReorder.emit(event); };
        that.nativeElement.addEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
        that.eventHandlers['rowDragStartHandler'] = function (event) { that.onRowDragStart.emit(event); };
        that.nativeElement.addEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
        that.eventHandlers['rowDraggingHandler'] = function (event) { that.onRowDragging.emit(event); };
        that.nativeElement.addEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
        that.eventHandlers['rowDragEndHandler'] = function (event) { that.onRowDragEnd.emit(event); };
        that.nativeElement.addEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
        that.eventHandlers['rowReorderHandler'] = function (event) { that.onRowReorder.emit(event); };
        that.nativeElement.addEventListener('rowReorder', that.eventHandlers['rowReorderHandler']);
        that.eventHandlers['rowExpandHandler'] = function (event) { that.onRowExpand.emit(event); };
        that.nativeElement.addEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);
        that.eventHandlers['rowCollapseHandler'] = function (event) { that.onRowCollapse.emit(event); };
        that.nativeElement.addEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);
        that.eventHandlers['rowClickHandler'] = function (event) { that.onRowClick.emit(event); };
        that.nativeElement.addEventListener('rowClick', that.eventHandlers['rowClickHandler']);
        that.eventHandlers['rowDoubleClickHandler'] = function (event) { that.onRowDoubleClick.emit(event); };
        that.nativeElement.addEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);
        that.eventHandlers['rowResizeHandler'] = function (event) { that.onRowResize.emit(event); };
        that.nativeElement.addEventListener('rowResize', that.eventHandlers['rowResizeHandler']);
        that.eventHandlers['cellClickHandler'] = function (event) { that.onCellClick.emit(event); };
        that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        that.eventHandlers['cellDoubleClickHandler'] = function (event) { that.onCellDoubleClick.emit(event); };
        that.nativeElement.addEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);
        that.eventHandlers['endEditHandler'] = function (event) { that.onEndEdit.emit(event); };
        that.nativeElement.addEventListener('endEdit', that.eventHandlers['endEditHandler']);
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['resizeHandler'] = function (event) { that.onResize.emit(event); };
        that.nativeElement.addEventListener('resize', that.eventHandlers['resizeHandler']);
        that.eventHandlers['rowTapHandler'] = function (event) { that.onRowTap.emit(event); };
        that.nativeElement.addEventListener('rowTap', that.eventHandlers['rowTapHandler']);
        that.eventHandlers['cellTapHandler'] = function (event) { that.onCellTap.emit(event); };
        that.nativeElement.addEventListener('cellTap', that.eventHandlers['cellTapHandler']);
        that.eventHandlers['pageHandler'] = function (event) { that.onPage.emit(event); };
        that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);
        that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
    };
    /** @description Remove event listeners. */
    GridComponent.prototype.unlisten = function () {
        var that = this;
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
    };
    GridComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    ], GridComponent.prototype, "onCommand", null);
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
            selector: 'smart-grid, [smart-grid]'
        })
    ], GridComponent);
    return GridComponent;
}(BaseElement));
export { GridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9ncmlkLyIsInNvdXJjZXMiOlsic21hcnQuZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEM7SUFBbUMseUNBQVc7SUFDN0MsdUJBQVksR0FBcUI7UUFBakMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBaWVsQzs7Ozs7VUFLRTtRQUNRLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7OztVQUdFO1FBQ1EsbUJBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7O1VBR0U7UUFDUSxtQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzs7OztVQUtFO1FBQ1EsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7OztVQUtFO1FBQ1EsbUJBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7Ozs7VUFLRTtRQUNRLHlCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7Ozs7VUFNRTtRQUNRLG9CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7Ozs7OztVQU1FO1FBQ1EsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7Ozs7Ozs7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QU96RDtRQUFULE1BQU0sRUFBRTttREFBMEQ7SUFPekQ7UUFBVCxNQUFNLEVBQUU7b0RBQTJEO0lBSTFEO1FBQVQsTUFBTSxFQUFFO2lEQUF3RDtJQU92RDtRQUFULE1BQU0sRUFBRTtpREFBd0Q7SUFJdkQ7UUFBVCxNQUFNLEVBQUU7Z0VBQXVFO0lBSXRFO1FBQVQsTUFBTSxFQUFFOzZEQUFvRTtJQXZ1QmpFLGFBQWE7UUFKekIsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLDBCQUEwQjtTQUNwQyxDQUFDO09BRVcsYUFBYSxDQWl4RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWp4RUQsQ0FBbUMsV0FBVyxHQWl4RTdDO1NBanhFWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgR3JpZEFwcGVhcmFuY2VBdXRvR2VuZXJhdGVSb3dMYWJlbE1vZGUsIEdyaWRBcHBlYXJhbmNlQXV0b0dlbmVyYXRlQ29sdW1uTGFiZWxNb2RlLCBHcmlkUmVzaXplTW9kZSwgR3JpZENsaXBib2FyZEF1dG9GaWxsTW9kZSwgSG9yaXpvbnRhbEFsaWdubWVudCwgVmVydGljYWxBbGlnbm1lbnQsIFBvc2l0aW9uLCBHcmlkQ29sdW1uRmlsdGVyTWVudU1vZGUsIEdyaWRDb2x1bW5Tb3J0T3JkZXIsIEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmdDb25kaXRpb24sIEdyaWREYXRhRXhwb3J0UGFnZU9yaWVudGF0aW9uLCBHcmlkRGF0YVNvdXJjZVNldHRpbmdzU2FuaXRpemVIVE1MLCBHcmlkRGF0YVNvdXJjZVNldHRpbmdzRGF0YUZpZWxkRGF0YVR5cGUsIEdyaWREYXRhU291cmNlU2V0dGluZ3NEYXRhU291cmNlVHlwZSwgR3JpZEVkaXRpbmdBY3Rpb24sIExheW91dFBvc2l0aW9uLCBHcmlkQ29tbWFuZERpc3BsYXlNb2RlLCBHcmlkRWRpdGluZ01vZGUsIEdyaWRFZGl0aW5nQWRkTmV3Um93RGlzcGxheU1vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3dBcHBseU1vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJNZW51TW9kZSwgR3JpZEdyb3VwaW5nRXhwYW5kTW9kZSwgR3JpZEdyb3VwaW5nUmVuZGVyTW9kZSwgR3JpZFBhZ2VyQXV0b0VsbGlwc2lzLCBTY3JvbGxpbmcsIEdyaWRTZWxlY3Rpb25Nb2RlLCBHcmlkU2VsZWN0aW9uQWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlc1NlbGVjdEFsbE1vZGUsIEdyaWRTb3J0aW5nTW9kZSwgR3JpZEFwcGVhcmFuY2UsIEdyaWRCZWhhdmlvciwgR3JpZExheW91dCwgR3JpZENsaXBib2FyZCwgR3JpZENvbHVtbiwgR3JpZENvbHVtbk1lbnUsIEdyaWRDb2x1bW5NZW51RGF0YVNvdXJjZSwgR3JpZENvbW1hbmQsIEdyaWRDb2x1bW5Hcm91cCwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZywgR3JpZENoYXJ0aW5nLCBEaWFsb2csIEdyaWRDaGVja0JveGVzLCBHcmlkRGF0YUV4cG9ydCwgR3JpZERhdGFTb3VyY2VTZXR0aW5ncywgR3JpZERhdGFTb3VyY2VTZXR0aW5nc0RhdGFGaWVsZCwgR3JpZEVkaXRpbmcsIEdyaWRFZGl0aW5nQ29tbWFuZEtleXMsIEdyaWRDb21tYW5kS2V5LCBHcmlkRWRpdGluZ0NvbW1hbmRCYXIsIEdyaWRFZGl0aW5nQ29tbWFuZEJhckRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbiwgR3JpZEVkaXRpbmdDb21tYW5kQ29sdW1uRGF0YVNvdXJjZSwgR3JpZEVkaXRpbmdBZGROZXdSb3csIEdyaWRFZGl0aW5nQWRkTmV3Q29sdW1uLCBHcmlkRmlsdGVyaW5nLCBHcmlkRmlsdGVyaW5nRmlsdGVyUm93LCBHcmlkRmlsdGVyaW5nRmlsdGVyTWVudSwgR3JpZEZpbHRlcmluZ0ZpbHRlckJ1aWxkZXIsIEdyaWRHcm91cGluZywgR3JpZEdyb3VwaW5nR3JvdXBCYXIsIEdyaWRHcm91cGluZ1N1bW1hcnlSb3csIEdyaWRQYWdpbmcsIEdyaWRQYWdpbmdTcGlubmVyLCBHcmlkUGFnZXIsIEdyaWRQYWdlclBhZ2VTaXplU2VsZWN0b3IsIEdyaWRQYWdlclN1bW1hcnksIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc1ByZXZOZXh0QnV0dG9ucywgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnNGaXJzdExhc3RCdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc0xhYmVscywgR3JpZFBhZ2VyTmF2aWdhdGlvbklucHV0LCBHcmlkUGFnZXJQYWdlSW5kZXhTZWxlY3RvcnMsIEdyaWRSb3dEZXRhaWwsIEdyaWRDb2x1bW5IZWFkZXIsIEdyaWRTdW1tYXJ5Um93LCBHcmlkR3JvdXBIZWFkZXIsIEdyaWRIZWFkZXIsIEdyaWRGb290ZXIsIEdyaWRSb3csIEdyaWRDZWxsLCBHcmlkU2VsZWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlcywgR3JpZFNvcnRpbmcsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IERhdGFBZGFwdGVyLCBDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEdyaWRBcHBlYXJhbmNlQXV0b0dlbmVyYXRlUm93TGFiZWxNb2RlLCBHcmlkQXBwZWFyYW5jZUF1dG9HZW5lcmF0ZUNvbHVtbkxhYmVsTW9kZSwgR3JpZFJlc2l6ZU1vZGUsIEdyaWRDbGlwYm9hcmRBdXRvRmlsbE1vZGUsIEhvcml6b250YWxBbGlnbm1lbnQsIFZlcnRpY2FsQWxpZ25tZW50LCBQb3NpdGlvbiwgR3JpZENvbHVtbkZpbHRlck1lbnVNb2RlLCBHcmlkQ29sdW1uU29ydE9yZGVyLCBHcmlkQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBHcmlkRGF0YUV4cG9ydFBhZ2VPcmllbnRhdGlvbiwgR3JpZERhdGFTb3VyY2VTZXR0aW5nc1Nhbml0aXplSFRNTCwgR3JpZERhdGFTb3VyY2VTZXR0aW5nc0RhdGFGaWVsZERhdGFUeXBlLCBHcmlkRGF0YVNvdXJjZVNldHRpbmdzRGF0YVNvdXJjZVR5cGUsIEdyaWRFZGl0aW5nQWN0aW9uLCBMYXlvdXRQb3NpdGlvbiwgR3JpZENvbW1hbmREaXNwbGF5TW9kZSwgR3JpZEVkaXRpbmdNb2RlLCBHcmlkRWRpdGluZ0FkZE5ld1Jvd0Rpc3BsYXlNb2RlLCBHcmlkRmlsdGVyaW5nRmlsdGVyUm93QXBwbHlNb2RlLCBHcmlkRmlsdGVyaW5nRmlsdGVyTWVudU1vZGUsIEdyaWRHcm91cGluZ0V4cGFuZE1vZGUsIEdyaWRHcm91cGluZ1JlbmRlck1vZGUsIEdyaWRQYWdlckF1dG9FbGxpcHNpcywgU2Nyb2xsaW5nLCBHcmlkU2VsZWN0aW9uTW9kZSwgR3JpZFNlbGVjdGlvbkFjdGlvbiwgR3JpZFNlbGVjdGlvbkNoZWNrQm94ZXNTZWxlY3RBbGxNb2RlLCBHcmlkU29ydGluZ01vZGUsIEdyaWRBcHBlYXJhbmNlLCBHcmlkQmVoYXZpb3IsIEdyaWRMYXlvdXQsIEdyaWRDbGlwYm9hcmQsIEdyaWRDb2x1bW4sIEdyaWRDb2x1bW5NZW51LCBHcmlkQ29sdW1uTWVudURhdGFTb3VyY2UsIEdyaWRDb21tYW5kLCBHcmlkQ29sdW1uR3JvdXAsIEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmcsIEdyaWRDaGFydGluZywgRGlhbG9nLCBHcmlkQ2hlY2tCb3hlcywgR3JpZERhdGFFeHBvcnQsIEdyaWREYXRhU291cmNlU2V0dGluZ3MsIEdyaWREYXRhU291cmNlU2V0dGluZ3NEYXRhRmllbGQsIEdyaWRFZGl0aW5nLCBHcmlkRWRpdGluZ0NvbW1hbmRLZXlzLCBHcmlkQ29tbWFuZEtleSwgR3JpZEVkaXRpbmdDb21tYW5kQmFyLCBHcmlkRWRpdGluZ0NvbW1hbmRCYXJEYXRhU291cmNlLCBHcmlkRWRpdGluZ0NvbW1hbmRDb2x1bW4sIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbkRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQWRkTmV3Um93LCBHcmlkRWRpdGluZ0FkZE5ld0NvbHVtbiwgR3JpZEZpbHRlcmluZywgR3JpZEZpbHRlcmluZ0ZpbHRlclJvdywgR3JpZEZpbHRlcmluZ0ZpbHRlck1lbnUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJCdWlsZGVyLCBHcmlkR3JvdXBpbmcsIEdyaWRHcm91cGluZ0dyb3VwQmFyLCBHcmlkR3JvdXBpbmdTdW1tYXJ5Um93LCBHcmlkUGFnaW5nLCBHcmlkUGFnaW5nU3Bpbm5lciwgR3JpZFBhZ2VyLCBHcmlkUGFnZXJQYWdlU2l6ZVNlbGVjdG9yLCBHcmlkUGFnZXJTdW1tYXJ5LCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9ucywgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnNQcmV2TmV4dEJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zRmlyc3RMYXN0QnV0dG9ucywgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnNMYWJlbHMsIEdyaWRQYWdlck5hdmlnYXRpb25JbnB1dCwgR3JpZFBhZ2VyUGFnZUluZGV4U2VsZWN0b3JzLCBHcmlkUm93RGV0YWlsLCBHcmlkQ29sdW1uSGVhZGVyLCBHcmlkU3VtbWFyeVJvdywgR3JpZEdyb3VwSGVhZGVyLCBHcmlkSGVhZGVyLCBHcmlkRm9vdGVyLCBHcmlkUm93LCBHcmlkQ2VsbCwgR3JpZFNlbGVjdGlvbiwgR3JpZFNlbGVjdGlvbkNoZWNrQm94ZXMsIEdyaWRTb3J0aW5nLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBHcmlkIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBEYXRhQWRhcHRlciwgQ2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1ncmlkLCBbc21hcnQtZ3JpZF0nXG59KVxuXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxHcmlkPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgR3JpZDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogR3JpZDtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8R3JpZD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1ncmlkJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBvYmplY3QgY29udGFpbmluZyBzZXR0aW5ncyByZWxhdGVkIHRvIHRoZSBncmlkJ3MgYXBwZWFyYW5jZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFwcGVhcmFuY2UoKTogR3JpZEFwcGVhcmFuY2Uge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZWFyYW5jZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXBwZWFyYW5jZSh2YWx1ZTogR3JpZEFwcGVhcmFuY2UpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZWFyYW5jZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBvYmplY3QgY29udGFpbmluZyBzZXR0aW5ncyByZWxhdGVkIHRvIHRoZSBncmlkJ3MgYmVoYXZpb3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBiZWhhdmlvcigpOiBHcmlkQmVoYXZpb3Ige1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVoYXZpb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJlaGF2aW9yKHZhbHVlOiBHcmlkQmVoYXZpb3IpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVoYXZpb3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQW4gb2JqZWN0IGNvbnRhaW5pbmcgc2V0dGluZ3MgcmVsYXRlZCB0byB0aGUgZ3JpZCdzIGxheW91dC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxheW91dCgpOiBHcmlkTGF5b3V0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGF5b3V0KHZhbHVlOiBHcmlkTGF5b3V0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxheW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGNsaXBib2FyZCBwcm9wZXJ0eSBpcyB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGNsaXBib2FyZCBvcGVyYXRpb25zIHdpdGggQ3RybCtDLCBDdHJsK1ggYW5kIEN0cmwrViBrZXlib2FyZCBuYXZpZ2F0aW9ucy4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjbGlwYm9hcmQoKTogR3JpZENsaXBib2FyZCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwYm9hcmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNsaXBib2FyZCh2YWx1ZTogR3JpZENsaXBib2FyZCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwYm9hcmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGNvbHVtbnMgcHJvcGVydHkgaXMgdXNlZCB0byBkZXNjcmliZSBhbGwgY29sdW1ucyBkaXNwbGF5ZWQgaW4gdGhlIGdyaWQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiB7bGFiZWw6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmd9W10gfCBzdHJpbmdbXSB8IG51bWJlciB8IEdyaWRDb2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5zKHZhbHVlOiB7bGFiZWw6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmd9W10gfCBzdHJpbmdbXSB8IG51bWJlciB8IEdyaWRDb2x1bW5bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbHVtbiBNZW51IGlzIHRoZSBkcm9wLWRvd24gbWVudSBkaXNwbGF5ZWQgYWZ0ZXIgY2xpY2tpbmcgdGhlIGNvbHVtbiBoZWFkZXIncyBkcm9wLWRvd24gYnV0dG9uLCB3aGljaCBpcyBkaXNwbGF5ZWQgd2hlbiB5b3UgaG92ZXIgdGhlIGNvbHVtbiBoZWFkZXIuIEl0IGFsbG93cyB5b3UgdG8gY3VzdG9taXplIGNvbHVtbiBzZXR0aW5ncy4gRm9yIGV4YW1wbGU6IFNvcnQsIEZpbHRlciBvciBHcm91cCB0aGUgR3JpZCBieSB0aGUgY3VycmVudCBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5NZW51KCk6IEdyaWRDb2x1bW5NZW51IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbk1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbk1lbnUodmFsdWU6IEdyaWRDb2x1bW5NZW51KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbk1lbnUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBzZXR0aW5ncyBvZiB0aGUgY29sdW1uIGdyb3Vwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkdyb3VwcygpOiBHcmlkQ29sdW1uR3JvdXBbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Hcm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkdyb3Vwcyh2YWx1ZTogR3JpZENvbHVtbkdyb3VwW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uR3JvdXBzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBkZXRhaWxzIGFib3V0IGNvbmRpdGlvbmFsIGZvcm1hdHRpbmcgdG8gYmUgYXBwbGllZCB0byB0aGUgR3JpZCdzIGNlbGxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29uZGl0aW9uYWxGb3JtYXR0aW5nKCk6IEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZyh2YWx1ZTogR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbmRpdGlvbmFsRm9ybWF0dGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBHcmlkIENoYXJ0aW5nIERhdGEgVmlzdWFsaXphdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGNoYXJ0aW5nKCk6IEdyaWRDaGFydGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFydGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2hhcnRpbmcodmFsdWU6IEdyaWRDaGFydGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFydGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBUcmVlR3JpZCBjaGVja2JveGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2hlY2tCb3hlcygpOiBHcmlkQ2hlY2tCb3hlcyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGVja0JveGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjaGVja0JveGVzKHZhbHVlOiBHcmlkQ2hlY2tCb3hlcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGVja0JveGVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIEdyaWQgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogR3JpZERhdGFFeHBvcnQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YUV4cG9ydCh2YWx1ZTogR3JpZERhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBncmlkJ3MgZGF0YSBzb3VyY2UuIFRoZSB2YWx1ZSBvZiBkYXRhU291cmNlIGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBKUVguRGF0YUFkYXB0ZXIgb3IgYW4gQXJyYXkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBncmlkJ3MgZGF0YSBzb3VyY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgZGF0YVNvdXJjZSBwcm9wZXJ0eSBpcyBzZXQgdG8gYW4gQXJyYXkgb3IgVVJMLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZVNldHRpbmdzKCk6IEdyaWREYXRhU291cmNlU2V0dGluZ3Mge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZVNldHRpbmdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlU2V0dGluZ3ModmFsdWU6IEdyaWREYXRhU291cmNlU2V0dGluZ3MpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZVNldHRpbmdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgZ3JpZCdzIGVkaXRpbmcgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0aW5nKCk6IEdyaWRFZGl0aW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVkaXRpbmcodmFsdWU6IEdyaWRFZGl0aW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBncmlkJ3MgZmlsdGVyaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyaW5nKCk6IEdyaWRGaWx0ZXJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJpbmcodmFsdWU6IEdyaWRGaWx0ZXJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgZ3JpZCdzIGdyb3VwaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBpbmcoKTogR3JpZEdyb3VwaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cGluZyh2YWx1ZTogR3JpZEdyb3VwaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIG1lc3NhZ2VzIHZhbHVlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbihjaGFydDogSlFYLkNoYXJ0KSBjYWxsZWQgd2hlbiB0aGUgY2hhcnQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuIFlvdSBjYW4gdXNlIHRoaXMgZnVuY3Rpb24gdG8gY3VzdG9taXplIHRoZSBDaGFydCBlbGVtZW50IHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsVmFsdWUoKTogeyhjZWxsOiBHcmlkQ2VsbCk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNlbGxWYWx1ZSh2YWx1ZTogeyhjZWxsOiBHcmlkQ2VsbCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIGZ1bmN0aW9uKCkgY2FsbGVkIHdoZW4gdGhlIGdyaWQgaGFzIGJlZW4gcmVuZGVyZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNlbGxVcGRhdGUoKTogeyhjZWxsOiBHcmlkQ2VsbCwgb2xkVmFsdWU6IGFueSwgdmFsdWU6IGFueSwgY29uZmlybTogeyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkfSk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFVwZGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25DZWxsVXBkYXRlKHZhbHVlOiB7KGNlbGw6IEdyaWRDZWxsLCBvbGRWYWx1ZTogYW55LCB2YWx1ZTogYW55LCBjb25maXJtOiB7KGNvbW1pdDogYm9vbGVhbik6IHZvaWR9KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25DZWxsVXBkYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgcGFnaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsUmVuZGVyKCk6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxSZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbFJlbmRlcih2YWx1ZTogeyhjZWxsOiBHcmlkQ2VsbCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFJlbmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIHBhZ2VyIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25CZWZvcmVJbml0KCk6IHsoKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25CZWZvcmVJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkJlZm9yZUluaXQodmFsdWU6IHsoKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25CZWZvcmVJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHJvdyBkZXRhaWxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Jbml0KCk6IHsoKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Jbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkluaXQodmFsdWU6IHsoKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Jbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHNjcm9sbCBtb2RlIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25BZnRlckluaXQoKTogeygpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkFmdGVySW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25BZnRlckluaXQodmFsdWU6IHsoKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25BZnRlckluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBjb2x1bW4gaGVhZGVyIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DaGFydEluaXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2hhcnRJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNoYXJ0SW5pdCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2hhcnRJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc3VtbWFyeSByb3cgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJlbmRlcigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25SZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUmVuZGVyKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25SZW5kZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBzZXR0aW5ncyBmb3IgdGhlIGdyb3VwIGhlYWRlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uS2V5KCk6IHsoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbktleSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25LZXkodmFsdWU6IHsoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbktleSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGhlYWRlciBzZXR0aW5ncyBvZiB0aGUgZ3JpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93SW5pdCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93SW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dJbml0KHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93SW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGZvb3RlciBzZXR0aW5ncyBvZiB0aGUgZ3JpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93RGV0YWlsSW5pdCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgZGV0YWlsczogSFRNTEVsZW1lbnQpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0RldGFpbEluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93RGV0YWlsSW5pdCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGRldGFpbHM6IEhUTUxFbGVtZW50KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dEZXRhaWxJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd0RldGFpbFVwZGF0ZWQoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGRldGFpbHM6IEhUTUxFbGVtZW50KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dEZXRhaWxVcGRhdGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd0RldGFpbFVwZGF0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93LCBkZXRhaWxzOiBIVE1MRWxlbWVudCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93RGV0YWlsVXBkYXRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgcm93cyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRlc2NyaWJlIGFsbCByb3dzIGRpc3BsYXllZCBpbiB0aGUgZ3JpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93SW5zZXJ0ZWQoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0luc2VydGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd0luc2VydGVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93SW5zZXJ0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBzZWxlY3Rpb24gc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd1JlbW92ZWQoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1JlbW92ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93UmVtb3ZlZCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1JlbW92ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHNvcnRpbmcgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd1VwZGF0ZSgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgb2xkVmFsdWVzOiBhbnlbXSwgdmFsdWVzOiBhbnlbXSwgY29uZmlybTogeyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkfSk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93VXBkYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd1VwZGF0ZSh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIG9sZFZhbHVlczogYW55W10sIHZhbHVlczogYW55W10sIGNvbmZpcm06IHsoY29tbWl0OiBib29sZWFuKTogdm9pZH0pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1VwZGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93VXBkYXRlZCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93VXBkYXRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dVcGRhdGVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93VXBkYXRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uSW5pdCgpOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uSW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db2x1bW5Jbml0KHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uSW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uSW5zZXJ0ZWQoKTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtbkluc2VydGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtbkluc2VydGVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uSW5zZXJ0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNvbHVtblJlbW92ZWQoKTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtblJlbW92ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29sdW1uUmVtb3ZlZCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtblJlbW92ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNvbHVtblVwZGF0ZWQoKTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtblVwZGF0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29sdW1uVXBkYXRlZCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtblVwZGF0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNvbW1hbmQoKTogeyhuYW1lOiBzdHJpbmcsIGNvbW1hbmQ6IGFueSwgZGV0YWlsczogR3JpZENlbGwsIGV2ZW50OiBFdmVudCB8IEtleWJvYXJkRXZlbnQgfCBQb2ludGVyRXZlbnQsIGhhbmRsZWQ6IGJvb2xlYW4pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbW1hbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29tbWFuZCh2YWx1ZTogeyhuYW1lOiBzdHJpbmcsIGNvbW1hbmQ6IGFueSwgZGV0YWlsczogR3JpZENlbGwsIGV2ZW50OiBFdmVudCB8IEtleWJvYXJkRXZlbnQgfCBQb2ludGVyRXZlbnQsIGhhbmRsZWQ6IGJvb2xlYW4pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbW1hbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBwYWdpbmcoKTogR3JpZFBhZ2luZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYWdpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBhZ2luZyh2YWx1ZTogR3JpZFBhZ2luZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYWdpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBwYWdlcigpOiBHcmlkUGFnZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBhZ2VyKHZhbHVlOiBHcmlkUGFnZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCByb3dEZXRhaWwoKTogR3JpZFJvd0RldGFpbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dEZXRhaWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJvd0RldGFpbCh2YWx1ZTogR3JpZFJvd0RldGFpbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dEZXRhaWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBzY3JvbGxpbmcoKTogU2Nyb2xsaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2Nyb2xsaW5nKHZhbHVlOiBTY3JvbGxpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uSGVhZGVyKCk6IEdyaWRDb2x1bW5IZWFkZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uSGVhZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5IZWFkZXIodmFsdWU6IEdyaWRDb2x1bW5IZWFkZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uSGVhZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3VtbWFyeVJvdygpOiBHcmlkU3VtbWFyeVJvdyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdW1tYXJ5Um93IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzdW1tYXJ5Um93KHZhbHVlOiBHcmlkU3VtbWFyeVJvdykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdW1tYXJ5Um93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBIZWFkZXIoKTogR3JpZEdyb3VwSGVhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwSGVhZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cEhlYWRlcih2YWx1ZTogR3JpZEdyb3VwSGVhZGVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwSGVhZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyKCk6IEdyaWRIZWFkZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXIodmFsdWU6IEdyaWRIZWFkZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9vdGVyKCk6IEdyaWRGb290ZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9vdGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmb290ZXIodmFsdWU6IEdyaWRGb290ZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9vdGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCByb3dzKCk6IEdyaWRSb3dbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dzKHZhbHVlOiBHcmlkUm93W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbigpOiBHcmlkU2VsZWN0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uKHZhbHVlOiBHcmlkU2VsZWN0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnRpbmcoKTogR3JpZFNvcnRpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydGluZyh2YWx1ZTogR3JpZFNvcnRpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgZWRpdCBiZWdpbnMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGNvbHVtbiwgXHRjZWxsKVxuXHQqICAgcm93IC0gVGhlIGVkaXRlZCByb3cuXG5cdCogICBjb2x1bW4gLSBUaGUgZWRpdGVkIGNvbHVtbi5cblx0KiAgIGNlbGwgLSBUaGUgZWRpdGVkIGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkJlZ2luRWRpdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBHcmlkJ3MgaGVhZGVyIHRvb2xiYXIgaXMgZGlzcGxheWVkIGFuZCB0aGUgJ09LJyBidXR0b24gb2YgYSBoZWFkZXIgZHJvcGRvd24gaXMgY2xpY2tlZC4gRm9yIGV4YW1wbGUsIHdoZW4geW91IG9wZW4gdGhlIGNvbHVtbnMgY3VzdG9taXplIHBhbmVsLCByZW9yZGVyIGNvbHVtbnMgYW5kIGNsaWNrIHRoZSAnT0snIGJ1dHRvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0eXBlKVxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGRyb3Bkb3duLiBQb3NzaWJsZSB2YWx1ZXM6ICdmaWx0ZXInLCAnc29ydCcsICdzZWFyY2gnLCAnZ3JvdXAnLCAnZm9ybWF0JywgJ2N1c3RvbWl6ZSdcblx0Ki9cblx0QE91dHB1dCgpIG9uQmF0Y2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgR3JpZCdzIGhlYWRlciB0b29sYmFyIGlzIGRpc3BsYXllZCBhbmQgdGhlICdDYW5jZWwnIGJ1dHRvbiBvZiBhIGhlYWRlciBkcm9wZG93biBpcyBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHR5cGUpXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgZHJvcGRvd24uIFBvc3NpYmxlIHZhbHVlczogJ2ZpbHRlcicsICdzb3J0JywgJ3NlYXJjaCcsICdncm91cCcsICdmb3JtYXQnLCAnY3VzdG9taXplJ1xuXHQqL1xuXHRAT3V0cHV0KCkgb25CYXRjaENhbmNlbDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC4gV2hlbiB5b3Ugc2VsZWN0IHdpdGggYSBkcmFnLCB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyYWcgc3RhcnRzIGFuZCBlbmRzLiBcblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRzdGFydGVkLCBcdGZpbmlzaGVkLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBzdGFydGVkIC0gVGhlIGZsYWcgaXMgPGVtPnRydWU8L2VtPiwgd2hlbiB0aGUgc2VsZWN0aW9uIHN0YXJ0cy4gVGhlIGZsYWcgaXMgPGVtPmZhbHNlPC9lbT4sIHdoZW4gdGhlIHNlbGVjdGlvbiBlbmRzIGFuZCB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGlvbiBieSBkcmFnZ2luZy5cblx0KiAgIGZpbmlzaGVkIC0gVGhlIGZsYWcgaXMgPGVtPnRydWU8L2VtPiwgd2hlbiB0aGUgc2VsZWN0aW9uIGVuZHMuIFRoZSBmbGFnIGlzIDxlbT5mYWxzZTwvZW0+LCB3aGVuIHRoZSBzZWxlY3Rpb24gc3RhcnRzIGFuZCB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGlvbiBieSBkcmFnZ2luZy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaGVhZGVyIG9mIGEgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRkYXRhRmllbGQsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNvbHVtbiAtIFRoZSBjbGlja2VkIGNvbHVtbi5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkb3VibGUgY2xpY2tzIG9uIHRoZSBoZWFkZXIgb2YgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdGRhdGFGaWVsZCwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGRvdWJsZS1jbGlja2VkIGNvbHVtbi5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRG91YmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZXNpemVkIGEgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRkYXRhRmllbGQsIFx0b2xkV2lkdGgsIFx0d2lkdGgpXG5cdCogICBjb2x1bW4gLSBUaGUgcmVzaXplZCBjb2x1bW4uXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0KiAgIG9sZFdpZHRoIC0gVGhlIG9sZCB3aWR0aCBvZiB0aGUgY29sdW1uLlxuXHQqICAgd2lkdGggLSBUaGUgbmV3IHdpZHRoIG9mIHRoZSBjb2x1bW4uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlc2l6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBhIGNvbHVtbiBkcmFnLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRkYXRhRmllbGQsIFx0aW5kZXgsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4uXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIGluZGV4XG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdGRhdGFGaWVsZCwgXHRpbmRleCwgXHRkYXRhLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjb2x1bW4gLSBUaGUgY29sdW1uLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbidzIGRhdGEgZmllbGQuXG5cdCogICBpbmRleCAtIFRoZSBjb2x1bW4ncyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcm9wcyBhIGNvbHVtbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW4sIFx0ZGF0YUZpZWxkLCBcdGluZGV4LCBcdG5ld0luZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4uXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIGluZGV4XG5cdCogICBuZXdJbmRleCAtIFRoZSBjb2x1bW4ncyBuZXcgaW5kZXhcblx0KiAgIGRhdGEgLSBUaGUgZHJhZ2dpbmcgb2JqZWN0LiBkYXRhLmZlZWRiYWNrIGFuZCBkYXRhLmZlZWRiYWNrTGluZSBhcmUgSFRNTCBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheWVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzLiBUaGUgb2JqZWN0IGhhcyBlcnJvcigpLCBzdWNjZXNzKCkgYW5kIGRhdGEoKSBtZXRob2RzIHdoaWNoIHlvdSBjYW4gY2FsbCB0byBzZXQgdGhlIGZlZWRiYWNrIHN0YXRlLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaWFubCBFdmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZW9yZGVycyBhIGNvbHVtbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW4sIFx0ZGF0YUZpZWxkLCBcdGluZGV4LCBcdG5ld0luZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4uXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIGluZGV4XG5cdCogICBuZXdJbmRleCAtIFRoZSBjb2x1bW4ncyBuZXcgaW5kZXhcblx0KiAgIGRhdGEgLSBUaGUgZHJhZ2dpbmcgb2JqZWN0LiBkYXRhLmZlZWRiYWNrIGFuZCBkYXRhLmZlZWRiYWNrTGluZSBhcmUgSFRNTCBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheWVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzLiBUaGUgb2JqZWN0IGhhcyBlcnJvcigpLCBzdWNjZXNzKCkgYW5kIGRhdGEoKSBtZXRob2RzIHdoaWNoIHlvdSBjYW4gY2FsbCB0byBzZXQgdGhlIGZlZWRiYWNrIHN0YXRlLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaWFubCBFdmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlb3JkZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBzdGFydHMgYSByb3cgZHJhZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0aW5kZXgsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSByb3cuXG5cdCogICBpZCAtIFRoZSByb3cncyBpZFxuXHQqICAgaW5kZXggLSBUaGUgcm93J3MgaW5kZXhcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIHJvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0aW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIHJvdy5cblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkXG5cdCogICBpbmRleCAtIFRoZSByb3cncyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93RHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIHJvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0aW5kZXgsIFx0bmV3SW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIHJvdy5cblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkXG5cdCogICBpbmRleCAtIFRoZSByb3cncyBpbmRleFxuXHQqICAgbmV3SW5kZXggLSBUaGUgcm93J3MgbmV3IGluZGV4XG5cdCogICBkYXRhIC0gVGhlIGRyYWdnaW5nIG9iamVjdC4gZGF0YS5mZWVkYmFjayBhbmQgZGF0YS5mZWVkYmFja0xpbmUgYXJlIEhUTUwgRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXllZCB3aGlsZSB0aGUgdXNlciBkcmFncy4gVGhlIG9iamVjdCBoYXMgZXJyb3IoKSwgc3VjY2VzcygpIGFuZCBkYXRhKCkgbWV0aG9kcyB3aGljaCB5b3UgY2FuIGNhbGwgdG8gc2V0IHRoZSBmZWVkYmFjayBzdGF0ZS5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dEcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgcmVvcmRlcnMgYSByb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGlkLCBcdGluZGV4LCBcdG5ld0luZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSByb3cuXG5cdCogICBpZCAtIFRoZSByb3cncyBpZFxuXHQqICAgaW5kZXggLSBUaGUgcm93J3MgaW5kZXhcblx0KiAgIG5ld0luZGV4IC0gVGhlIHJvdydzIG5ldyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93UmVvcmRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGV4cGFuZHMgYSByb3cgb2YgdGhlIGdyaWQuIFRoZSBHcmlkIGlzIGluIFRyZWVHcmlkL0dyb3VwaW5nIG1vZGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGlkLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICByb3cgLSBUaGUgZXhwYW5kZWQgcm93LlxuXHQqICAgaWQgLSBUaGUgcm93J3MgaWRcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0V4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNvbGxhcHNlZCBhIHJvdyBvZiB0aGUgZ3JpZC4gVGhlIEdyaWQgaXMgaW4gVHJlZUdyaWQvR3JvdXBpbmcgbW9kZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aWQsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSBjb2xsYXBzZWQgcm93LiBcblx0KiAgIGlkIC0gVGhlIHJvdydzIGlkXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dDb2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHJvdyBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b3JpZ2luYWxFdmVudCwgXHRpZCwgXHRpc1JpZ2h0Q2xpY2ssIFx0cGFnZVgsIFx0cGFnZVkpXG5cdCogICByb3cgLSBUaGUgY2xpY2tlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBpc1JpZ2h0Q2xpY2sgLSBHZXRzIHdoZXRoZXIgdGhlIHBvaW50aW5nIGRldmljZSdzIHJpZ2h0IGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQqICAgcGFnZVggLSBHZXRzIHRoZSBjbGljaydzIFggcG9zaXRpb24uXG5cdCogICBwYWdlWSAtIEdldHMgdGhlIGNsaWNrJ3MgWSBwb3NpdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkb3VibGUgY2xpY2tzIG9uIGEgcm93IG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRvcmlnaW5hbEV2ZW50LCBcdGlkLCBcdGlzUmlnaHRDbGljaywgXHRwYWdlWCwgXHRwYWdlWSlcblx0KiAgIHJvdyAtIFRoZSBkb3VibGUtY2xpY2tlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBpc1JpZ2h0Q2xpY2sgLSBHZXRzIHdoZXRoZXIgdGhlIHBvaW50aW5nIGRldmljZSdzIHJpZ2h0IGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQqICAgcGFnZVggLSBHZXRzIHRoZSBjbGljaydzIFggcG9zaXRpb24uXG5cdCogICBwYWdlWSAtIEdldHMgdGhlIGNsaWNrJ3MgWSBwb3NpdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93RG91YmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZXNpemVkIGEgcm93LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRpZCwgXHRvbGRIZWlnaHQsIFx0aGVpZ2h0KVxuXHQqICAgcm93IC0gVGhlIHJlc2l6ZWQgcm93LlxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBvbGRIZWlnaHQgLSBUaGUgb2xkIGhlaWdodCBvZiB0aGUgcm93LlxuXHQqICAgaGVpZ2h0IC0gVGhlIG5ldyBoZWlnaHQgb2YgdGhlIHJvdy5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93UmVzaXplOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgY2VsbCBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjZWxsLCBcdG9yaWdpbmFsRXZlbnQsIFx0aWQsIFx0ZGF0YUZpZWxkLCBcdGlzUmlnaHRDbGljaywgXHRwYWdlWCwgXHRwYWdlWSlcblx0KiAgIGNlbGwgLSBUaGUgY2xpY2tlZCBjZWxsLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0KiAgIGlkIC0gR2V0cyB0aGUgcm93IGlkLlxuXHQqICAgZGF0YUZpZWxkIC0gR2V0cyB0aGUgY29sdW1uIGRhdGFGaWVsZC5cblx0KiAgIGlzUmlnaHRDbGljayAtIEdldHMgd2hldGhlciB0aGUgcG9pbnRpbmcgZGV2aWNlJ3MgcmlnaHQgYnV0dG9uIGlzIGNsaWNrZWQuXG5cdCogICBwYWdlWCAtIEdldHMgdGhlIGNsaWNrJ3MgWCBwb3NpdGlvbi5cblx0KiAgIHBhZ2VZIC0gR2V0cyB0aGUgY2xpY2sncyBZIHBvc2l0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkb3VibGUgY2xpY2tzIG9uIGEgY2VsbCBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjZWxsLCBcdG9yaWdpbmFsRXZlbnQsIFx0aWQsIFx0ZGF0YUZpZWxkLCBcdGlzUmlnaHRDbGljaywgXHRwYWdlWCwgXHRwYWdlWSlcblx0KiAgIGNlbGwgLSBUaGUgZG91YmxlLWNsaWNrZWQgY2VsbC4gXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqICAgaWQgLSBHZXRzIHRoZSByb3cgaWQuXG5cdCogICBkYXRhRmllbGQgLSBHZXRzIHRoZSBjb2x1bW4gZGF0YUZpZWxkLlxuXHQqICAgaXNSaWdodENsaWNrIC0gR2V0cyB3aGV0aGVyIHRoZSBwb2ludGluZyBkZXZpY2UncyByaWdodCBidXR0b24gaXMgY2xpY2tlZC5cblx0KiAgIHBhZ2VYIC0gR2V0cyB0aGUgY2xpY2sncyBYIHBvc2l0aW9uLlxuXHQqICAgcGFnZVkgLSBHZXRzIHRoZSBjbGljaydzIFkgcG9zaXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxEb3VibGVDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBlZGl0IGVuZHMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGNvbHVtbiwgXHRjZWxsKVxuXHQqICAgcm93IC0gVGhlIGVkaXRlZCByb3cuXG5cdCogICBjb2x1bW4gLSBUaGUgZWRpdGVkIGNvbHVtbi5cblx0KiAgIGNlbGwgLSBUaGUgZWRpdGVkIGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVuZEVkaXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiBhIGZpbHRlciBpcyBhZGRlZCBvciByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbnMsIFx0ZGF0YSlcblx0KiAgIGNvbHVtbnMgLSBBcnJheSBvZiBjb2x1bW5zLlxuXHQqICAgZGF0YSAtIEFycmF5IG9mIHtkYXRhRmllbGQ6IHN0cmluZywgZmlsdGVyOiBzdHJpbmd9LiA8ZW0+ZGF0YUZpZWxkPC9lbT4gaXMgdGhlIGNvbHVtbidzIGRhdGEgZmllbGQuIDxlbT5maWx0ZXI8L2VtPiBpcyBhIGZpbHRlciBleHByZXNzaW9uIGxpa2UgJ3N0YXJ0c1dpdGggQidcblx0Ki9cblx0QE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIGdyaWQgaXMgcmVzaXplZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdG91Y2hlcyBhbmQgaG9sZHMgb24gdGhlIHJvdyBmb3IgYXQgbGVhc3QgMzAwbXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICByb3cgLSBUaGUgdGFwcGVkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd1RhcDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdG91Y2hlcyBhbmQgaG9sZHMgb24gdGhlIGNlbGwgZm9yIGF0IGxlYXN0IDMwMG1zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNlbGwsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNlbGwgLSBUaGUgdGFwcGVkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxUYXA6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBwYWdlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblBhZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiBhIHNvcnRpbmcgY29sdW1uIGlzIGFkZGVkIG9yIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1ucywgXHRkYXRhKVxuXHQqICAgY29sdW1ucyAtIEFycmF5IG9mIGNvbHVtbnMuXG5cdCogICBkYXRhIC0gQXJyYXkgb2Yge2RhdGFGaWVsZDogc3RyaW5nLCBzb3J0T3JkZXI6IHN0cmluZywgc29ydEluZGV4OiBudW1iZXJ9LiA8ZW0+ZGF0YUZpZWxkPC9lbT4gaXMgdGhlIGNvbHVtbidzIGRhdGEgZmllbGQuIDxlbT5zb3J0T3JkZXI8L2VtPiBpcyAnYXNjJyBvciAnZGVzYycsIDxlbT5zb3J0SW5kZXg8L2VtPiBpcyB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiBpbiBtdWx0aSBjb2x1bW4gc29ydGluZy5cblx0Ki9cblx0QE91dHB1dCgpIG9uU29ydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHJlYWNoZXMgdGhlIGJvdHRvbSBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbEJvdHRvbVJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZWFjaGVzIHRoZSB0b3Agb2YgdGhlIGdyaWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxUb3BSZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIHJvdy4gV2hlbiBiYXRjaCBlZGl0aW5nIGlzIGVuYWJsZWQsIHRoZSByb3cgaXMgbm90IHNhdmVkIHVudGlsIHRoZSBiYXRjaCBlZGl0IGlzIHNhdmVkLiBcblx0KiBAcGFyYW0ge2FueX0gZGF0YS4gcm93IGRhdGEgbWF0Y2hpbmcgdGhlIGRhdGEgc291cmNlXG5cdCogQHBhcmFtIHtib29sZWFufSBpbnNlcnRBdEJvdHRvbT8uIERldGVybWluZXMgd2hldGhlciB0byBhZGQgdGhlIG5ldyByb3cgdG8gdGhlIGJvdHRvbSBvciB0b3Agb2YgdGhlIGNvbGxlY3Rpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzICd0cnVlJ1xuXHQqIEBwYXJhbSB7YW55fSBjYWxsYmFjaz8uIFNldHMgYSBjYWxsYmFjayBmdW5jdGlvbiwgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHRoZSBuZXcgcm93IGlzIGFkZGVkLiBUaGUgY2FsbGJhY2sncyBhcmd1bWVudCBpcyB0aGUgbmV3IHJvdy5cblx0Ki9cbiAgICBwdWJsaWMgYWRkUm93KGRhdGE6IGFueSwgaW5zZXJ0QXRCb3R0b20/OiBib29sZWFuLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRSb3coZGF0YSwgaW5zZXJ0QXRCb3R0b20sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRSb3coZGF0YSwgaW5zZXJ0QXRCb3R0b20sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyByb3cgYW5kIHB1dHMgaXQgaW50byBlZGl0IG1vZGUuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHBvc2l0aW9uPy4gJ25lYXInIG9yICdmYXInXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhZGROZXdSb3cocG9zaXRpb24/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld1Jvdyhwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHVuYm91bmQgcm93IHRvIHRoZSB0b3Agb3IgYm90dG9tLiBVbmJvdW5kIHJvd3MgYXJlIG5vdCBwYXJ0IG9mIHRoZSBHcmlkJ3MgZGF0YVNvdXJjZS4gVGhleSBiZWNvbWUgcGFydCBvZiB0aGUgZGF0YVNvdXJjZSwgYWZ0ZXIgYW4gdW5ib3VuZCByb3cgaXMgZWRpdGVkLiBcblx0KiBAcGFyYW0ge251bWJlcn0gY291bnQuIFRoZSBjb3VudCBvZiB1bmJvdW5kIHJvd3MuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHBvc2l0aW9uPy4gJ25lYXInIG9yICdmYXInXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhZGRVbmJvdW5kUm93KGNvdW50LCBwb3NpdGlvbj8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVW5ib3VuZFJvdyhjb3VudCwgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGZpbHRlciB0byBhIGNvbHVtbi4gVGhpcyBtZXRob2Qgd2lsbCBhcHBseSBhIGZpbHRlciB0byB0aGUgR3JpZCBkYXRhLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWx0ZXIuIEZpbHRlciBleHByZXNzaW9uIGxpa2U6ICdzdGFydHNXaXRoIEInXG5cdCogQHBhcmFtIHtib29sZWFufSByZWZyZXNoRmlsdGVycz8uIFxuXHQqL1xuICAgIHB1YmxpYyBhZGRGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIGZpbHRlcjogc3RyaW5nLCByZWZyZXNoRmlsdGVycz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGRhdGFGaWVsZCwgZmlsdGVyLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGRhdGFGaWVsZCwgZmlsdGVyLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG8tc2l6ZXMgZ3JpZCByb3dzLiBUaGlzIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgaGVpZ2h0IG9mIGFsbCBHcmlkIHJvd3MuIFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvU2l6ZVJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBdXRvLXNpemVzIGdyaWQgY29sdW1ucy4gVGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgdGhlIHdpZHRoIG9mIGFsbCBHcmlkIGNvbHVtbnMuIFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvU2l6ZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplQ29sdW1ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplQ29sdW1ucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIGFsbCByb3dzIGluIHRoZSBHcmlkIGFyZSBzZWxlY3RlZC4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhcmVBbGxSb3dzU2VsZWN0ZWQoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFyZUFsbFJvd3NTZWxlY3RlZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3RhcnRzIGFuIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgaXMgYXBwcm9wcmlhdGUgd2hlbiBjYWxsaW5nIG11bHRpcGxlIG1ldGhvZHMgb3Igc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYXQgb25jZS4gXG5cdCovXG4gICAgcHVibGljIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEJlZ2lucyByb3csIGNlbGwgb3IgY29sdW1uLiBUaGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIHByb2dyYW1tYXRpY2FsbHkgc3RhcnQgYSBjZWxsLCByb3cgb3IgY29sdW1uIGVkaXRpbmcuIEFmdGVyIGNhbGxpbmcgaXQsIGFuIGVkaXRvciBIVE1MRWxlbWVudCB3aWxsIGJlIGNyZWF0ZWQgYW5kIGRpc3BsYXllZCBpbiB0aGUgR3JpZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgYmVnaW5FZGl0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGFGaWVsZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpbkVkaXQocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5FZGl0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgYWxsIGZpbHRlcnMuIFJlZnJlc2hlcyB0aGUgdmlldyBhbmQgdXBkYXRlcyBhbGwgZmlsdGVyIGlucHV0IGNvbXBvbmVudHMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJGaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIHNlbGVjdGlvbiB0aGF0IHVzZXIgaGF2ZSBtYWRlLiBBbGwgcm93LCBjZWxsIGFuZCBjb2x1bW4gc2VsZWN0aW9uIGhpZ2hsaWdodHMgd2lsbCBiZSByZW1vdmVkLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FuY2VscyB0aGUgZWRpdGluZy4gVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBjZWxsIGVkaXRvciBhbmQgY2FuY2VscyB0aGUgY2hhbmdlcy4gXG5cdCovXG4gICAgcHVibGljIGNhbmNlbEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jYW5jZWxFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENoZWNrcyBhIFRyZWVHcmlkIHJvdy4gVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgcm93J3MgY2hlY2stYm94LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyBjaGVja1Jvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENoZWNrcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gVGhpcyBtZXRob2QgdXBkYXRlcyBhbGwgY2hlY2stYm94ZXMgaW4gdGhlIFRyZWVHcmlkIG9yIEdyb3VwaW5nIHJvd3MuIFxuXHQqL1xuICAgIHB1YmxpYyBjaGVja0FsbFJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrQWxsUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIHVzZXIgc2VsZWN0aW9uIGFuZCBlbXB0aWVzIHRoZSBkYXRhIHNvdXJjZS4gVGhlIEdyaWQgd2lsbCBkaXNwbGF5ICdObyBSb3dzJyBpbiB0aGUgdmlldy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsb3NlcyB0aGUgY29sdW1uIGRyb3AtZG93biBtZW51LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU1lbnUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGEgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZVJvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBDaGFydCwgd2hlbiBjaGFydGluZyBpcyBlbmFibGVkLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gdHlwZS4gQ2hhcnQncyB0eXBlXG5cdCogQHBhcmFtIHthbnl9IGRhdGFTb3VyY2U/LiBDaGFydCdzIGRhdGEgc291cmNlXG5cdCovXG4gICAgcHVibGljIGNyZWF0ZUNoYXJ0KHR5cGU6IHN0cmluZywgZGF0YVNvdXJjZT86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDaGFydCh0eXBlLCBkYXRhU291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDaGFydCh0eXBlLCBkYXRhU291cmNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVsZXRlIGEgcm93LiBXaGVuIGJhdGNoIGVkaXRpbmcgaXMgZW5hYmxlZCwgdGhlIHJvdyBpcyBub3Qgc2F2ZWQgdW50aWwgdGhlIGJhdGNoIGVkaXQgaXMgc2F2ZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHthbnl9IGNhbGxiYWNrPy4gU2V0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHJvdyBpcyBkZWxldGVkLiBUaGUgY2FsbGJhY2sncyBhcmd1bWVudCBpcyB0aGUgZGVsZXRlZCByb3cuXG5cdCovXG4gICAgcHVibGljIGRlbGV0ZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5kZWxldGVSb3cocm93SWQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5kZWxldGVSb3cocm93SWQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2Nyb2xscyB0byBhIHJvdyBvciBjZWxsLiBUaGlzIG1ldGhvZCBzY3JvbGxzIHRvIGEgcm93IG9yIGNlbGwsIHdoZW4gc2Nyb2xsaW5nIGlzIG5lY2Vzc2FyeS4gSWYgcGFnaW5hdGlvbiBpcyBlbmFibGVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgY2hhbmdlIHRoZSBwYWdlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZW5zdXJlVmlzaWJsZShyb3dJZCwgZGF0YUZpZWxkPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgZWRpdGluZy4gVGhpcyBtZXRob2QgY29uZmlybXMgYWxsIGNoYW5nZXMgYW5kIGNsb3NlcyB0aGUgb3BlbmVkIGNlbGwgZWRpdG9yKHMpLiBcblx0Ki9cbiAgICBwdWJsaWMgZW5kRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXN1bWUgdGhlIHJlbmRlcmluZyBhbmQgd2lsbCByZWZyZXNoIHRoZSBHcmlkLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2g/LiBUaGUgZmxhZyB0aGF0IGNvbnRyb2wgdGhlIGNhbGxzIG9mIHRoZSByZWZyZXNoIG1ldGhvZC5cblx0Ki9cbiAgICBwdWJsaWMgZW5kVXBkYXRlKHJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZShyZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUocmVmcmVzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBUcmVlR3JpZCBvciBHcm91cGluZyByb3cuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGV4cGFuZFJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZEFsbFJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIEdyaWQgZGF0YSB0byAuWExTWCwgLlBERiwgLkpTT04sIC5YTUwsIC5DU1YsIC5UU1YsIC5IVE1MLCAuSlBFRyBvciAuUE5HLiBUaGUgbWV0aG9kIHVzZXMgdGhlIG9wdGlvbnMgb2YgdGhlIGRhdGFFeHBvcnQgcHJvcGVydHkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBEYXRhZm9ybWF0LiAneGxzeCcsICdwZGYnLCAnanNvbicsICd4bWwnLCAnY3N2JywgJ3RzdicsICdodG1sJywgJ3BuZycsICdqcGVnJy5cblx0Ki9cbiAgICBwdWJsaWMgZXhwb3J0RGF0YShEYXRhZm9ybWF0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShEYXRhZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKERhdGFmb3JtYXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBOYXZpZ2F0ZXMgdG8gYSBwYWdlLCB3aGVuIHBhZ2luZyBpcyBlbmFibGVkLiBcblx0KiBAcGFyYW0ge251bWJlcn0gaW5kZXguIHBhZ2UgaW5kZXhcblx0Ki9cbiAgICBwdWJsaWMgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5nb1RvUGFnZShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZ29Ub1BhZ2UoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBOYXZpZ2F0ZXMgdG8gdGhlIG5leHQgcGFnZSwgd2hlbiBncmlkIHBhZ2luZyBpcyBlbmFibGVkLiBcblx0Ki9cbiAgICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm5leHRQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIHRoZSBwcmV2IHBhZ2UsIHdoZW4gZ3JpZCBwYWdpbmcgaXMgZW5hYmxlZC4gXG5cdCovXG4gICAgcHVibGljIHByZXZQYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmV2UGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByZXZQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0byB0aGUgZmlyc3QgcGFnZSwgd2hlbiBncmlkIHBhZ2luZyBpcyBlbmFibGVkLiBcblx0Ki9cbiAgICBwdWJsaWMgZmlyc3RQYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5maXJzdFBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5maXJzdFBhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIHRoZSBsYXN0IHBhZ2UsIHdoZW4gZ3JpZCBwYWdpbmcgaXMgZW5hYmxlZC4gXG5cdCovXG4gICAgcHVibGljIGxhc3RQYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sYXN0UGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmxhc3RQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIG1heGltdW0gcG9zaXRpb24gb2YgdGhlIHZlcnRpY2FsIHNjcm9sbGJhci4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgc2V0VmVydGljYWxTY3JvbGxWYWx1ZSB0byBhcHBseSBhIG5ldyBzY3JvbGwgcG9zaXRpb24uIFxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWZXJ0aWNhbFNjcm9sbE1heCgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VmVydGljYWxTY3JvbGxNYXgoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXIuIFxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWZXJ0aWNhbFNjcm9sbFZhbHVlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWZXJ0aWNhbFNjcm9sbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBtYXhpbXVtIHBvc2l0aW9uIG9mIHRoZSBob3Jpem9udGFsIHNjcm9sbGJhci4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgc2V0SG9yaXpvbnRhbFNjcm9sbFZhbHVlIHRvIGFwcGx5IGEgbmV3IHNjcm9sbCBwb3NpdGlvbi4gXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEhvcml6b250YWxTY3JvbGxNYXgoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEhvcml6b250YWxTY3JvbGxNYXgoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBob3Jpem9udGFsIHNjcm9sbGJhci4gXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEhvcml6b250YWxTY3JvbGxWYWx1ZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SG9yaXpvbnRhbFNjcm9sbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBjb2x1bW5zIGFycmF5LiBFYWNoIGl0ZW0gaW4gdGhlIGFycmF5IGNvbnRhaW5zIHRoZSBjb2x1bW4gcHJvcGVydGllcyB3aGljaCBhcmUgZHluYW1pY2FsbHkgc2V0IGJ5IHRoZSB1c2VyIGludGVyYWN0aW9uIGFuZCB0aGUgY29sdW1ucyBpbml0aWFsaXphdGlvbiBkYXRhIHByb3BlcnRpZXMgc3VjaCBhczogJ2xhYmVsJywgJ2RhdGFGaWVsZCcsICdkYXRhVHlwZScsICd2aXNpYmxlJy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENvbHVtbnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGdyb3VwcyBhcnJheS4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0R3JvdXBzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRHcm91cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYW4gYXJyYXkgb2YgY29sdW1ucyB3aXRoIGFwcGxpZWQgc29ydGluZy4gRWFjaCBtZW1iZXIgaW4gdGhlIGFycmF5IGlzIHdpdGggY29sdW1uJ3MgZGF0YSBmaWVsZCB1c2VkIGFzIGEga2V5IGFuZCAnc29ydE9yZGVyJyBhbmQgJ3NvcnRJbmRleCcgYXMgYSB2YWx1ZS4gXG5cdCogQHJldHVybnMge3tbZGF0YUZpZWxkOiBzdHJpbmddOiB7IHNvcnRPcmRlcjogc3RyaW5nLCBzb3J0SW5kZXg6IG51bWJlciB9fX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNvcnRlZENvbHVtbnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNvcnRlZENvbHVtbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHNlbGVjdGlvbi4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGlvbigpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBzZWxlY3RlZCByb3cgaWRzLiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTZWxlY3RlZFJvd3MoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGVkUm93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgc2VsZWN0ZWQgY2VsbHMuIFRoZSBtZXRob2QgcmV0dXJucyBhbiBhcnJheSBvZiBjZWxsLiBFYWNoIGNlbGwgaXMgYW4gYXJyYXkgd2l0aCByb3cgaWQsIGNvbHVtbiBkYXRhIGZpZWxkIGFuZCBjZWxsIHZhbHVlLiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTZWxlY3RlZENlbGxzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZENlbGxzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGFuIGFycmF5IG9mIGNvbHVtbnMgd2l0aCBhcHBsaWVkIGZpbHRlcnMuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRGaWx0ZXJlZENvbHVtbnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEZpbHRlcmVkQ29sdW1ucygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhbiBhcnJheSBvZiByb3dzLCB3aGljaCBhcmUgdmlzaWJsZSBhbmQgbWF0Y2ggdGhlIGFwcGxpZWQgZmlsdGVyLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VmlzaWJsZVJvd3MoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZpc2libGVSb3dzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZXN1bHQgb2YgdGhlIGdldFZpc2libGVSb3dzIG9yIHRoZSByb3dzIGhpZXJhcmNoeSwgd2hlbiB0aGUgR3JpZCBpcyBpbiBUcmVlR3JpZC9Hcm91cGluZyBtb2RlLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Vmlld1Jvd3MoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZpZXdSb3dzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGEgSlNPTiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGZpZWxkczogJ3NvcnQnLCAnZmlsdGVyJywgJ2dyb3VwcycsICdwYWdpbmcnLCAnc2VsZWN0ZWRDZWxscycsICdzZWxlY3RlZHJvd3MnLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBjaGFuZ2VzIGZyb20gdGhlIGJhdGNoIGVkaXQuIFxuXHQqIEByZXR1cm5zIHt7IHVwRGF0ZWQ6IFt7IGlkOiBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nLCBvbGRWYWx1ZTogT2JqZWN0LCBuZXdWYWx1ZTogT2JqZWN0IH1dLCBkZWxldGVkOiBbe2lkOiBzdHJpbmcsIGRhdGE6IE9iamVjdH1dLCBhZGRlZDogW3tpZDogc3RyaW5nLCBkYXRhOiBPYmplY3R9XSB9fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0QmF0Y2hFZGl0Q2hhbmdlcygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QmF0Y2hFZGl0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhIHZhbHVlIG9mIGEgY2VsbC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDZWxsVmFsdWUocm93SWQsIGRhdGFGaWVsZCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDZWxsVmFsdWUocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGEgdmFsdWUgb2YgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZS4gVGhlIHByb3BlcnR5IG5hbWUuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSB2YWx1ZSBvZiBhIHJvdy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lLiBUaGUgcHJvcGVydHkgbmFtZS5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Um93UHJvcGVydHkocm93SWQsIHByb3BlcnR5TmFtZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRSb3dQcm9wZXJ0eShyb3dJZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIERhdGEgc291cmNlIGRhdGEgYXNzb2NpYXRlZCB0byB0aGUgcm93LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSb3dEYXRhKHJvd0lkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJvd0RhdGEocm93SWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgUm93J3MgaWQuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSByb3dJbmRleC4gcm93IGluZGV4XG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJvd0lkKHJvd0luZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJvd0lkKHJvd0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgd2hldGhlciBhIGNvbHVtbidzIGRyb3AtZG93biBtZW51IGlzIG9wZW5lZC4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBoYXNNZW51KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5oYXNNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIGFueSByb3dzIGluIHRoZSBHcmlkIGFyZSBzZWxlY3RlZC4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBoYXNTZWxlY3RlZFJvd3MoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50Lmhhc1NlbGVjdGVkUm93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIERldGFpbHMgb2YgYSBSb3csIHdoZW4gcm93IGRldGFpbHMgYXJlIGVuYWJsZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGhpZGVEZXRhaWwocm93SWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGV0YWlsKHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGV0YWlsKHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlnaGxpZ2h0cyBhIGNvbHVtbi4gSGlnaGxpZ2h0cyBhIEdyaWQgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqL1xuICAgIHB1YmxpYyBoaWdobGlnaHRDb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlnaGxpZ2h0Q29sdW1uKGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlnaGxpZ2h0Q29sdW1uKGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZ2hsaWdodHMgYSBjZWxsLiBDYWxsaW5nIHRoZSBtZXRob2QgYSBzZWNvbmQgdGltZSB0b2dnbGUgdGhlIGhpZ2hsaWdodCBzdGF0ZS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWU/LiBDU1MgQ2xhc3MgTmFtZVxuXHQqL1xuICAgIHB1YmxpYyBoaWdobGlnaHRDZWxsKHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nLCBjbGFzc05hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlnaGxpZ2h0Q2VsbChyb3dJZCwgZGF0YUZpZWxkLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZ2hsaWdodENlbGwocm93SWQsIGRhdGFGaWVsZCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlnaGxpZ2h0cyBhIHJvdy4gQ2FsbGluZyB0aGUgbWV0aG9kIGEgc2Vjb25kIHRpbWUgdG9nZ2xlIHRoZSBoaWdobGlnaHQgc3RhdGUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZT8uIENTUyBDbGFzcyBOYW1lXG5cdCovXG4gICAgcHVibGljIGhpZ2hsaWdodFJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBjbGFzc05hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlnaGxpZ2h0Um93KHJvd0lkLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZ2hsaWdodFJvdyhyb3dJZCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgYSBjb2x1bW4gZHJvcC1kb3duIG1lbnUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCovXG4gICAgcHVibGljIG9wZW5NZW51KGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5NZW51KGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3Blbk1lbnUoZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUHJpbnRzIHRoZSBHcmlkIGRhdGEuIFRoZSBtZXRob2QgdXNlcyB0aGUgb3B0aW9ucyBvZiB0aGUgZGF0YUV4cG9ydCBwcm9wZXJ0eS4gV2hlbiBwcmludGVkLCB0aGUgR3JpZCB3aWxsIG5vdCBkaXNwbGF5IGFueSBzY3JvbGxiYXJzIHNvIGFsbCByb3dzIGFuZCBjb2x1bW5zIHdpbGwgYmUgZGlzcGxheWVkLiBUaGUgZ3JpZCB3aWxsIGF1dG8gcmVzaXplIHdpZHRoIGFuZCBoZWlnaHQgdG8gZml0IGFsbCBjb250ZW50cy4gVG8gY3VzdG9taXplIHRoZSBwcmludGluZyBvcHRpb25zLCB5b3UgY2FuIHVzZSAgdGhlIGRhdGFFeHBvcnQgcHJvcGVydHkuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW5kZXJzIHRoZSBncmlkLiBUaGlzIG1ldGhvZCB3aWxsIG1ha2UgYSBmdWxsLXJlZnJlc2ggbGlrZSBpbiB0aGUgaW5pdGlhbCBHcmlkIGNyZWF0aW9uLiBJdCB3aWxsIGNyZWF0ZSBSb3dzLCBDb2x1bW5zIGFuZCBDZWxscyBIVE1MIEVsZW1lbnRzIGFuZCB0aGVuIHJlZnJlc2ggdGhlIEdyaWQgbGF5b3V0LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBncmlkIHdpdGggdGhlIGN1cnJlbnQgcHJvcGVydHkgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIHJlZnJlc2ggdGhlIEdyaWQgbGF5b3V0LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2hWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBncmlkIGNlbGxzIGluIHZpZXcuIFRoZSBtZXRob2QgaXMgdXNlZnVsIGZvciBsaXZlLXVwZGF0ZXMgb2YgY2VsbCB2YWx1ZXMuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCogQHBhcmFtIHtib29sZWFufSByZWZyZXNoRmlsdGVycz8uIFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIHJlZnJlc2hGaWx0ZXJzPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoZGF0YUZpZWxkLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKGRhdGFGaWVsZCwgcmVmcmVzaEZpbHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgY29sdW1uIGZpbHRlci4gIFxuXHQqL1xuICAgIHB1YmxpYyByZXZlcnRCYXRjaEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJldmVydEJhdGNoRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJldmVydEJhdGNoRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXZlcnRzIHRoZSBiYXRjaCBlZGl0IGNoYW5nZXMuIFRoaXMgbWV0aG9kIGNhbmNlbHMgYWxsIGNoYW5nZXMgbWFkZSBieSB0aGUgZW5kLXVzZXIuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBkYXRhRmllbGQuIFRoZSBkYXRhIGZpZWxkIG9yIGNvbHVtbiBpbmRleCBvZiB0aGUgZmlyc3QgZ3JpZCBjb2x1bW4uXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJlZmVyZW5jZURhdGFGaWVsZC4gVGhlIGRhdGEgZmllbGQgb3IgY29sdW1uIGluZGV4IG9mIHRoZSBzZWNvbmQgZ3JpZCBjb2x1bW4uXG5cdCogQHBhcmFtIHtib29sZWFufSBpbnNlcnRBZnRlcj8uIERldGVybWluZXMgd2hldGhlciB0byBpbnNlcnQgdGhlIGZpcnN0IGNvbHVtbiBhZnRlciB0aGUgcmVmZXJlbmNlIGNvbHVtbi5cblx0Ki9cbiAgICBwdWJsaWMgcmVvcmRlckNvbHVtbnMoZGF0YUZpZWxkOiBzdHJpbmcgfCBudW1iZXIsIHJlZmVyZW5jZURhdGFGaWVsZDogc3RyaW5nIHwgbnVtYmVyLCBpbnNlcnRBZnRlcj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVvcmRlckNvbHVtbnMoZGF0YUZpZWxkLCByZWZlcmVuY2VEYXRhRmllbGQsIGluc2VydEFmdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW9yZGVyQ29sdW1ucyhkYXRhRmllbGQsIHJlZmVyZW5jZURhdGFGaWVsZCwgaW5zZXJ0QWZ0ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW9yZGVycyB0d28gRGF0YUdyaWQgY29sdW1ucy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGRhdGFGaWVsZC4gVGhlIGRhdGEgZmllbGQgb3IgY29sdW1uIGluZGV4IG9mIHRoZSBmaXJzdCBncmlkIGNvbHVtbi5cblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcmVmZXJlbmNlRGF0YUZpZWxkLiBUaGUgZGF0YSBmaWVsZCBvciBjb2x1bW4gaW5kZXggb2YgdGhlIHNlY29uZCBncmlkIGNvbHVtbi5cblx0Ki9cbiAgICBwdWJsaWMgc3dhcENvbHVtbnMoZGF0YUZpZWxkOiBzdHJpbmcgfCBudW1iZXIsIHJlZmVyZW5jZURhdGFGaWVsZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnN3YXBDb2x1bW5zKGRhdGFGaWVsZCwgcmVmZXJlbmNlRGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zd2FwQ29sdW1ucyhkYXRhRmllbGQsIHJlZmVyZW5jZURhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFN3YXBzIHR3byBEYXRhR3JpZCBjb2x1bW5zLiBcblx0Ki9cbiAgICBwdWJsaWMgc2F2ZUJhdGNoRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUJhdGNoRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVCYXRjaEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGJhdGNoIGVkaXQgY2hhbmdlcy4gVGhpcyBtZXRob2QgY29uZmlybXMgdGhlIGVkaXRpbmcgY2hhbmdlcyBtYWRlIGJ5IHRoZSBlbmQtdXNlci4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGFGaWVsZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgcm93LCBjZWxsIG9yIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBlbmRSb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGVuZERhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0UmFuZ2Uocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIGVuZFJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGVuZERhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJhbmdlKHJvd0lkLCBkYXRhRmllbGQsIGVuZFJvd0lkLCBlbmREYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJhbmdlKHJvd0lkLCBkYXRhRmllbGQsIGVuZFJvd0lkLCBlbmREYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgcmFuZ2Ugb2Ygcm93cywgY2VsbHMgb3IgY29sdW1ucy4gVGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHNlbGVjdGlvbiBjb25maWd1cmF0aW9uIG9mIHRoZSBHcmlkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBlbmRSb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJvd3NSYW5nZShyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBlbmRSb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3NSYW5nZShyb3dJZCwgZW5kUm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3NSYW5nZShyb3dJZCwgZW5kUm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgcmFuZ2Ugb2Ygcm93cy4gXG5cdCogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdfSByb3dJZC4gQXJyYXkgb2Ygcm93IGlkc1xuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RSb3dzKHJvd0lkOiAoc3RyaW5nIHwgbnVtYmVyKVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3Mocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3Mocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIG11bHRpcGxlIHJvd3MgYnkgdGhlaXIgaWRzLiBcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0QWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdEFsbFJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhbGwgcm93cy4gXG5cdCogQHBhcmFtIHtudW1iZXJbXX0gcm93SW5kZXguIEFycmF5IG9mIHJvdyBpbmRleGVzXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJvd3NCeUluZGV4KHJvd0luZGV4OiBudW1iZXJbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSb3dzQnlJbmRleChyb3dJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0Um93c0J5SW5kZXgocm93SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIG11bHRpcGxlIHJvd3MgYnkgdGhlaXIgaW5kZXguIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IERhdGUgfCBib29sZWFufSB2YWx1ZS4gTmV3IENlbGwgdmFsdWUuXG5cdCovXG4gICAgcHVibGljIHNldENlbGxWYWx1ZShyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IERhdGUgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldENlbGxWYWx1ZShyb3dJZCwgZGF0YUZpZWxkLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q2VsbFZhbHVlKHJvd0lkLCBkYXRhRmllbGQsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIG5ldyB2YWx1ZSB0byBhIGNlbGwuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZS4gVGhlIGNvbHVtbiBwcm9wZXJ0eSdzIG5hbWUuXG5cdCogQHBhcmFtIHthbnl9IHZhbHVlLiBUaGUgbmV3IHByb3BlcnR5IHZhbHVlLlxuXHQqL1xuICAgIHB1YmxpYyBzZXRDb2x1bW5Qcm9wZXJ0eShkYXRhRmllbGQ6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q29sdW1uUHJvcGVydHkoZGF0YUZpZWxkLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDb2x1bW5Qcm9wZXJ0eShkYXRhRmllbGQsIHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgcHJvcGVydHkgdG8gYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZS4gVGhlIHJvdyBwcm9wZXJ0eSdzIG5hbWUuXG5cdCogQHBhcmFtIHthbnl9IHZhbHVlLiBUaGUgbmV3IHByb3BlcnR5IHZhbHVlLlxuXHQqL1xuICAgIHB1YmxpYyBzZXRSb3dQcm9wZXJ0eShyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRSb3dQcm9wZXJ0eShyb3dJZCwgcHJvcGVydHlOYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Um93UHJvcGVydHkocm93SWQsIHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgcHJvcGVydHkgdG8gYSByb3cuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZS4gVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cblx0Ki9cbiAgICBwdWJsaWMgc2V0VmVydGljYWxTY3JvbGxWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFZlcnRpY2FsU2Nyb2xsVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFZlcnRpY2FsU2Nyb2xsVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgdmVydGljYWwgc2Nyb2xsYmFyLiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCBpbiBjb21iaW5hdGlvbiB3aXRoIHRoZSBnZXRWZXJ0aWNhbFNjcm9sbFZhbHVlIGFuZCBnZXRWZXJ0aWNhbFNjcm9sbE1heC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHZhbHVlLiBUaGUgbmV3IHNjcm9sbCBwb3NpdGlvblxuXHQqL1xuICAgIHB1YmxpYyBzZXRIb3Jpem9udGFsU2Nyb2xsVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRIb3Jpem9udGFsU2Nyb2xsVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEhvcml6b250YWxTY3JvbGxWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBob3Jpem9udGFsIHNjcm9sbGJhci4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgaW4gY29tYmluYXRpb24gd2l0aCB0aGUgZ2V0SG9yaXpvbnRhbFNjcm9sbFZhbHVlIGFuZCBnZXRIb3Jpem9udGFsU2Nyb2xsTWF4LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyBzaG93RGV0YWlsKHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0RldGFpbChyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0RldGFpbChyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIHRoZSBEZXRhaWxzIG9mIGEgUm93LCB3aGVuIHJvdyBkZXRhaWxzIGFyZSBlbmFibGVkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7YW55fSBkYXRhLiByb3cgZGF0YSBtYXRjaGluZyB0aGUgZGF0YSBzb3VyY2Vcblx0KiBAcGFyYW0ge2FueX0gY2FsbGJhY2s/LiBTZXRzIGEgY2FsbGJhY2sgZnVuY3Rpb24sIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgcm93IGlzIHVwZGF0ZWQuIFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50IGlzIHRoZSB1cGRhdGVkIHJvdy5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGE6IGFueSwgY2FsbGJhY2s/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUm93KHJvd0lkLCBkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUm93KHJvd0lkLCBkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSByb3cuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgYSByb3csIGNlbGwgb3IgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyB1bmNoZWNrUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuY2hlY2tzIGEgVHJlZUdyaWQgcm93LiBTZXRzIGl0cyBjaGVjay1ib3ggdG8gZmFsc2UuIFxuXHQqL1xuICAgIHB1YmxpYyB1bmNoZWNrQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja0FsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmNoZWNrQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbmNoZWNrcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gU2V0cyBhbGwgY2hlY2stYm94ZXMgdG8gZmFsc2UuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIHRvZ2dsZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnRvZ2dsZVJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudG9nZ2xlUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luRWRpdEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkJlZ2luRWRpdC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdiZWdpbkVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luRWRpdEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2JhdGNoQ2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQmF0Y2hDaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmF0Y2hDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JhdGNoQ2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDYW5jZWxIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25CYXRjaENhbmNlbC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdiYXRjaENhbmNlbCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDYW5jZWxIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uRG91YmxlQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uUmVzaXplLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ1N0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkRyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ1N0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5EcmFnZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblJlb3JkZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uUmVvcmRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dEcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93RHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlb3JkZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dSZW9yZGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd1Jlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlb3JkZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dFeHBhbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dFeHBhbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dFeHBhbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0NvbGxhcHNlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd0NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93Q2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93Q2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RG91YmxlQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dEb3VibGVDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dEb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dSZXNpemUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93UmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DZWxsQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2VsbENsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjZWxsRG91YmxlQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DZWxsRG91YmxlQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2VsbERvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydlbmRFZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRW5kRWRpdC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRFZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydlbmRFZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRmlsdGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbHRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93VGFwLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd1RhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbFRhcEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxUYXAuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2VsbFRhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbFRhcEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25QYWdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU29ydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbEJvdHRvbVJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxUb3BSZWFjaGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZ2luRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydiYXRjaENoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JhdGNoQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydiYXRjaENoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDYW5jZWxIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdiYXRjaENhbmNlbCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmF0Y2hDYW5jZWxIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uUmVvcmRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ1N0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93UmVvcmRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd1Jlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlb3JkZXJIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd0V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RXhwYW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd0NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dDb2xsYXBzZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RvdWJsZUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93RG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RvdWJsZUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dSZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlc2l6ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2VsbENsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NlbGxEb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbERvdWJsZUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlbmRFZGl0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kRWRpdEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQub25maWx0ZXJIYW5kbGVyID0gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93VGFwJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dUYXBIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxUYXBIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsVGFwJywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydwYWdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFnZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NvcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==