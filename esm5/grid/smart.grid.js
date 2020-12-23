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
        /** @description This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
        *   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
        *   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered, when the user clicks on the header of a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
        *   column - The clicked column.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onColumnClick = new EventEmitter();
        /** @description This event is triggered, when the user double clicks on the header of a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
        *   column - The double-clicked column.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onColumnDoubleClick = new EventEmitter();
        /** @description This event is triggered, when the user resized a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	oldWidth, 	width)
        *   column - The resized column.
        *   oldWidth - The old width of the column.
        *   width - The new width of the column.
        */
        _this.onColumnResize = new EventEmitter();
        /** @description This event is triggered, when the user starts a column drag.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	originalEvent)
        *   column - The column.
        *   index - The column's index
        *   originalEvent - The origianl Event object.
        */
        _this.onColumnDragStart = new EventEmitter();
        /** @description This event is triggered, when the user drags a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	data, 	originalEvent)
        *   column - The column.
        *   index - The column's index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onColumnDragging = new EventEmitter();
        /** @description This event is triggered, when the user drags a column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	newIndex, 	data, 	originalEvent)
        *   column - The column.
        *   index - The column's index
        *   newIndex - The column's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onColumnDragEnd = new EventEmitter();
        /** @description This event is triggered, when the user starts a row drag.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	originalEvent)
        *   row - The row.
        *   index - The row's index
        *   originalEvent - The origianl Event object.
        */
        _this.onRowDragStart = new EventEmitter();
        /** @description This event is triggered, when the user drags a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	data, 	originalEvent)
        *   row - The row.
        *   index - The row's index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onRowDragging = new EventEmitter();
        /** @description This event is triggered, when the user drags a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	newIndex, 	data, 	originalEvent)
        *   row - The row.
        *   index - The row's index
        *   newIndex - The row's new index
        *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
        *   originalEvent - The origianl Event object.
        */
        _this.onRowDragEnd = new EventEmitter();
        /** @description This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
        *   row - The expanded row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onRowExpand = new EventEmitter();
        /** @description This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
        *   row - The collapsed row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onRowCollapse = new EventEmitter();
        /** @description This event is triggered, when the user clicks on a row of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
        *   row - The clicked row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onRowClick = new EventEmitter();
        /** @description This event is triggered, when the user double clicks on a row of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
        *   row - The double-clicked row.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onRowDoubleClick = new EventEmitter();
        /** @description This event is triggered, when the user resized a row.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	oldHeight, 	height)
        *   row - The resized row.
        *   oldHeight - The old height of the row.
        *   height - The new height of the row.
        */
        _this.onRowResize = new EventEmitter();
        /** @description This event is triggered, when the user clicks on a cell of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
        *   cell - The clicked cell.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
        */
        _this.onCellClick = new EventEmitter();
        /** @description This event is triggered, when the user double clicks on a cell of the grid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
        *   cell - The double-clicked cell.
        *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
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
        /** @description The rows property is used to describe all rows displayed in the grid. */
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
        /** @description Describes the selection settings. */
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
        /** @description Describes sorting settings. */
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
        /** @description undefined */
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
    * @returns {boolean}
  */
    GridComponent.prototype.beginEdit = function (rowId, dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.beginEdit(rowId, dataField);
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
    /** @description Gets an array of columns with applied sorting.
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
        that.eventHandlers['rowDragStartHandler'] = function (event) { that.onRowDragStart.emit(event); };
        that.nativeElement.addEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
        that.eventHandlers['rowDraggingHandler'] = function (event) { that.onRowDragging.emit(event); };
        that.nativeElement.addEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
        that.eventHandlers['rowDragEndHandler'] = function (event) { that.onRowDragEnd.emit(event); };
        that.nativeElement.addEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
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
        if (that.eventHandlers['rowDragStartHandler']) {
            that.nativeElement.removeEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
        }
        if (that.eventHandlers['rowDraggingHandler']) {
            that.nativeElement.removeEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
        }
        if (that.eventHandlers['rowDragEndHandler']) {
            that.nativeElement.removeEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
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
    ], GridComponent.prototype, "onRowDragStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GridComponent.prototype, "onRowDragging", void 0);
    tslib_1.__decorate([
        Output()
    ], GridComponent.prototype, "onRowDragEnd", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9ncmlkLyIsInNvdXJjZXMiOlsic21hcnQuZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEM7SUFBbUMseUNBQVc7SUFDN0MsdUJBQVksR0FBcUI7UUFBakMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBc2NsQzs7Ozs7VUFLRTtRQUNRLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7O1VBS0U7UUFDUSxjQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7Ozs7VUFJRTtRQUNRLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7Ozs7VUFJRTtRQUNRLHlCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7OztVQUtFO1FBQ1Esb0JBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7Ozs7VUFLRTtRQUNRLHVCQUFpQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVFOzs7Ozs7VUFNRTtRQUNRLHNCQUFnQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNFOzs7Ozs7O1VBT0U7UUFDUSxxQkFBZSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFOzs7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QUM7Q0FBQSxBQTdwREQsQ0FBbUMsV0FBVyxHQTZwRDdDO1NBN3BEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgR3JpZEFwcGVhcmFuY2VBdXRvR2VuZXJhdGVSb3dMYWJlbE1vZGUsIEdyaWRBcHBlYXJhbmNlQXV0b0dlbmVyYXRlQ29sdW1uTGFiZWxNb2RlLCBHcmlkUmVzaXplTW9kZSwgR3JpZENsaXBib2FyZEF1dG9GaWxsTW9kZSwgSG9yaXpvbnRhbEFsaWdubWVudCwgVmVydGljYWxBbGlnbm1lbnQsIFBvc2l0aW9uLCBHcmlkQ29sdW1uU29ydE9yZGVyLCBHcmlkQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBHcmlkRGF0YUV4cG9ydFBhZ2VPcmllbnRhdGlvbiwgR3JpZEVkaXRpbmdBY3Rpb24sIExheW91dFBvc2l0aW9uLCBHcmlkQ29tbWFuZERpc3BsYXlNb2RlLCBHcmlkRWRpdGluZ01vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3dBcHBseU1vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJNZW51TW9kZSwgR3JpZEdyb3VwaW5nRXhwYW5kTW9kZSwgR3JpZEdyb3VwaW5nUmVuZGVyTW9kZSwgR3JpZFBhZ2VyQXV0b0VsbGlwc2lzLCBTY3JvbGxpbmcsIEdyaWRTZWxlY3Rpb25Nb2RlLCBHcmlkU2VsZWN0aW9uQWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlc1NlbGVjdEFsbE1vZGUsIEdyaWRTb3J0aW5nTW9kZSwgR3JpZEFwcGVhcmFuY2UsIEdyaWRCZWhhdmlvciwgR3JpZExheW91dCwgR3JpZENsaXBib2FyZCwgR3JpZENvbHVtbiwgR3JpZENvbHVtbk1lbnUsIEdyaWRDb2x1bW5NZW51RGF0YVNvdXJjZSwgR3JpZENvbW1hbmQsIEdyaWRDb2x1bW5Hcm91cCwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZywgR3JpZENoYXJ0aW5nLCBEaWFsb2csIEdyaWRDaGVja0JveGVzLCBHcmlkRGF0YUV4cG9ydCwgR3JpZEVkaXRpbmcsIEdyaWRFZGl0aW5nQ29tbWFuZEtleXMsIEdyaWRDb21tYW5kS2V5LCBHcmlkRWRpdGluZ0NvbW1hbmRCYXIsIEdyaWRFZGl0aW5nQ29tbWFuZEJhckRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbiwgR3JpZEVkaXRpbmdDb21tYW5kQ29sdW1uRGF0YVNvdXJjZSwgR3JpZEVkaXRpbmdBZGROZXdSb3csIEdyaWRGaWx0ZXJpbmcsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3csIEdyaWRGaWx0ZXJpbmdGaWx0ZXJNZW51LCBHcmlkRmlsdGVyaW5nRmlsdGVyQnVpbGRlciwgR3JpZEdyb3VwaW5nLCBHcmlkR3JvdXBpbmdHcm91cEJhciwgR3JpZEdyb3VwaW5nU3VtbWFyeVJvdywgR3JpZFBhZ2luZywgR3JpZFBhZ2luZ1NwaW5uZXIsIEdyaWRQYWdlciwgR3JpZFBhZ2VyUGFnZVNpemVTZWxlY3RvciwgR3JpZFBhZ2VyU3VtbWFyeSwgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zUHJldk5leHRCdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc0ZpcnN0TGFzdEJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zTGFiZWxzLCBHcmlkUGFnZXJOYXZpZ2F0aW9uSW5wdXQsIEdyaWRQYWdlclBhZ2VJbmRleFNlbGVjdG9ycywgR3JpZFJvd0RldGFpbCwgR3JpZENvbHVtbkhlYWRlciwgR3JpZFN1bW1hcnlSb3csIEdyaWRHcm91cEhlYWRlciwgR3JpZEhlYWRlciwgR3JpZEZvb3RlciwgR3JpZFJvdywgR3JpZENlbGwsIEdyaWRTZWxlY3Rpb24sIEdyaWRTZWxlY3Rpb25DaGVja0JveGVzLCBHcmlkU29ydGluZywgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgRGF0YUFkYXB0ZXIsIENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgR3JpZEFwcGVhcmFuY2VBdXRvR2VuZXJhdGVSb3dMYWJlbE1vZGUsIEdyaWRBcHBlYXJhbmNlQXV0b0dlbmVyYXRlQ29sdW1uTGFiZWxNb2RlLCBHcmlkUmVzaXplTW9kZSwgR3JpZENsaXBib2FyZEF1dG9GaWxsTW9kZSwgSG9yaXpvbnRhbEFsaWdubWVudCwgVmVydGljYWxBbGlnbm1lbnQsIFBvc2l0aW9uLCBHcmlkQ29sdW1uU29ydE9yZGVyLCBHcmlkQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBHcmlkRGF0YUV4cG9ydFBhZ2VPcmllbnRhdGlvbiwgR3JpZEVkaXRpbmdBY3Rpb24sIExheW91dFBvc2l0aW9uLCBHcmlkQ29tbWFuZERpc3BsYXlNb2RlLCBHcmlkRWRpdGluZ01vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3dBcHBseU1vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJNZW51TW9kZSwgR3JpZEdyb3VwaW5nRXhwYW5kTW9kZSwgR3JpZEdyb3VwaW5nUmVuZGVyTW9kZSwgR3JpZFBhZ2VyQXV0b0VsbGlwc2lzLCBTY3JvbGxpbmcsIEdyaWRTZWxlY3Rpb25Nb2RlLCBHcmlkU2VsZWN0aW9uQWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlc1NlbGVjdEFsbE1vZGUsIEdyaWRTb3J0aW5nTW9kZSwgR3JpZEFwcGVhcmFuY2UsIEdyaWRCZWhhdmlvciwgR3JpZExheW91dCwgR3JpZENsaXBib2FyZCwgR3JpZENvbHVtbiwgR3JpZENvbHVtbk1lbnUsIEdyaWRDb2x1bW5NZW51RGF0YVNvdXJjZSwgR3JpZENvbW1hbmQsIEdyaWRDb2x1bW5Hcm91cCwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZywgR3JpZENoYXJ0aW5nLCBEaWFsb2csIEdyaWRDaGVja0JveGVzLCBHcmlkRGF0YUV4cG9ydCwgR3JpZEVkaXRpbmcsIEdyaWRFZGl0aW5nQ29tbWFuZEtleXMsIEdyaWRDb21tYW5kS2V5LCBHcmlkRWRpdGluZ0NvbW1hbmRCYXIsIEdyaWRFZGl0aW5nQ29tbWFuZEJhckRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbiwgR3JpZEVkaXRpbmdDb21tYW5kQ29sdW1uRGF0YVNvdXJjZSwgR3JpZEVkaXRpbmdBZGROZXdSb3csIEdyaWRGaWx0ZXJpbmcsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3csIEdyaWRGaWx0ZXJpbmdGaWx0ZXJNZW51LCBHcmlkRmlsdGVyaW5nRmlsdGVyQnVpbGRlciwgR3JpZEdyb3VwaW5nLCBHcmlkR3JvdXBpbmdHcm91cEJhciwgR3JpZEdyb3VwaW5nU3VtbWFyeVJvdywgR3JpZFBhZ2luZywgR3JpZFBhZ2luZ1NwaW5uZXIsIEdyaWRQYWdlciwgR3JpZFBhZ2VyUGFnZVNpemVTZWxlY3RvciwgR3JpZFBhZ2VyU3VtbWFyeSwgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zUHJldk5leHRCdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc0ZpcnN0TGFzdEJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zTGFiZWxzLCBHcmlkUGFnZXJOYXZpZ2F0aW9uSW5wdXQsIEdyaWRQYWdlclBhZ2VJbmRleFNlbGVjdG9ycywgR3JpZFJvd0RldGFpbCwgR3JpZENvbHVtbkhlYWRlciwgR3JpZFN1bW1hcnlSb3csIEdyaWRHcm91cEhlYWRlciwgR3JpZEhlYWRlciwgR3JpZEZvb3RlciwgR3JpZFJvdywgR3JpZENlbGwsIEdyaWRTZWxlY3Rpb24sIEdyaWRTZWxlY3Rpb25DaGVja0JveGVzLCBHcmlkU29ydGluZywgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgR3JpZCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgRGF0YUFkYXB0ZXIsIENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtZ3JpZCwgW3NtYXJ0LWdyaWRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8R3JpZD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEdyaWQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IEdyaWQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEdyaWQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZ3JpZCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gQW4gb2JqZWN0IGNvbnRhaW5pbmcgc2V0dGluZ3MgcmVsYXRlZCB0byB0aGUgZ3JpZCdzIGFwcGVhcmFuY2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhcHBlYXJhbmNlKCk6IEdyaWRBcHBlYXJhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVhcmFuY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFwcGVhcmFuY2UodmFsdWU6IEdyaWRBcHBlYXJhbmNlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVhcmFuY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQW4gb2JqZWN0IGNvbnRhaW5pbmcgc2V0dGluZ3MgcmVsYXRlZCB0byB0aGUgZ3JpZCdzIGJlaGF2aW9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYmVoYXZpb3IoKTogR3JpZEJlaGF2aW9yIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJlaGF2aW9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBiZWhhdmlvcih2YWx1ZTogR3JpZEJlaGF2aW9yKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJlaGF2aW9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFuIG9iamVjdCBjb250YWluaW5nIHNldHRpbmdzIHJlbGF0ZWQgdG8gdGhlIGdyaWQncyBsYXlvdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYXlvdXQoKTogR3JpZExheW91dCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYXlvdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxheW91dCh2YWx1ZTogR3JpZExheW91dCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYXlvdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGNsaXBib2FyZCBwcm9wZXJ0eSBpcyB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGNsaXBib2FyZCBvcGVyYXRpb25zIHdpdGggQ3RybCtDLCBDdHJsK1ggYW5kIEN0cmwrViBrZXlib2FyZCBuYXZpZ2F0aW9ucy4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjbGlwYm9hcmQoKTogR3JpZENsaXBib2FyZCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwYm9hcmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNsaXBib2FyZCh2YWx1ZTogR3JpZENsaXBib2FyZCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwYm9hcmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGNvbHVtbnMgcHJvcGVydHkgaXMgdXNlZCB0byBkZXNjcmliZSBhbGwgY29sdW1ucyBkaXNwbGF5ZWQgaW4gdGhlIGdyaWQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiB7bGFiZWw6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmd9W10gfCBzdHJpbmdbXSB8IG51bWJlciB8IEdyaWRDb2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5zKHZhbHVlOiB7bGFiZWw6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmd9W10gfCBzdHJpbmdbXSB8IG51bWJlciB8IEdyaWRDb2x1bW5bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbHVtbiBNZW51IGlzIHRoZSBkcm9wLWRvd24gbWVudSBkaXNwbGF5ZWQgYWZ0ZXIgY2xpY2tpbmcgdGhlIGNvbHVtbiBoZWFkZXIncyBkcm9wLWRvd24gYnV0dG9uLCB3aGljaCBpcyBkaXNwbGF5ZWQgd2hlbiB5b3UgaG92ZXIgdGhlIGNvbHVtbiBoZWFkZXIuIEl0IGFsbG93cyB5b3UgdG8gY3VzdG9taXplIGNvbHVtbiBzZXR0aW5ncy4gRm9yIGV4YW1wbGU6IFNvcnQsIEZpbHRlciBvciBHcm91cCB0aGUgR3JpZCBieSB0aGUgY3VycmVudCBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5NZW51KCk6IEdyaWRDb2x1bW5NZW51IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbk1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbk1lbnUodmFsdWU6IEdyaWRDb2x1bW5NZW51KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbk1lbnUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBzZXR0aW5ncyBvZiB0aGUgY29sdW1uIGdyb3Vwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkdyb3VwcygpOiBHcmlkQ29sdW1uR3JvdXBbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Hcm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkdyb3Vwcyh2YWx1ZTogR3JpZENvbHVtbkdyb3VwW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uR3JvdXBzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBkZXRhaWxzIGFib3V0IGNvbmRpdGlvbmFsIGZvcm1hdHRpbmcgdG8gYmUgYXBwbGllZCB0byB0aGUgR3JpZCdzIGNlbGxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29uZGl0aW9uYWxGb3JtYXR0aW5nKCk6IEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZyh2YWx1ZTogR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbmRpdGlvbmFsRm9ybWF0dGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBHcmlkIENoYXJ0aW5nIERhdGEgVmlzdWFsaXphdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGNoYXJ0aW5nKCk6IEdyaWRDaGFydGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFydGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2hhcnRpbmcodmFsdWU6IEdyaWRDaGFydGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFydGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBUcmVlR3JpZCBjaGVja2JveGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2hlY2tCb3hlcygpOiBHcmlkQ2hlY2tCb3hlcyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGVja0JveGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjaGVja0JveGVzKHZhbHVlOiBHcmlkQ2hlY2tCb3hlcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGVja0JveGVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIEdyaWQgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogR3JpZERhdGFFeHBvcnQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YUV4cG9ydCh2YWx1ZTogR3JpZERhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBncmlkJ3MgZGF0YSBzb3VyY2UuIFRoZSB2YWx1ZSBvZiBkYXRhU291cmNlIGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBKUVguRGF0YUFkYXB0ZXIgb3IgYW4gQXJyYXkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGdyaWQncyBlZGl0aW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZWRpdGluZygpOiBHcmlkRWRpdGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlZGl0aW5nKHZhbHVlOiBHcmlkRWRpdGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0aW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgZ3JpZCdzIGZpbHRlcmluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlcmluZygpOiBHcmlkRmlsdGVyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyaW5nKHZhbHVlOiBHcmlkRmlsdGVyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGdyaWQncyBncm91cGluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwaW5nKCk6IEdyaWRHcm91cGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBpbmcodmFsdWU6IEdyaWRHcm91cGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBtZXNzYWdlcyB2YWx1ZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgZnVuY3Rpb24oY2hhcnQ6IEpRWC5DaGFydCkgY2FsbGVkIHdoZW4gdGhlIGNoYXJ0IGhhcyBiZWVuIGluaXRpYWxpemVkLiBZb3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSB0aGUgQ2hhcnQgZWxlbWVudCBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ2VsbFZhbHVlKCk6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxWYWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25DZWxsVmFsdWUodmFsdWU6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxWYWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbigpIGNhbGxlZCB3aGVuIHRoZSBncmlkIGhhcyBiZWVuIHJlbmRlcmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsVXBkYXRlKCk6IHsoY2VsbDogR3JpZENlbGwsIG9sZFZhbHVlOiBhbnksIHZhbHVlOiBhbnksIGNvbmZpcm06IHsoY29tbWl0OiBib29sZWFuKTogdm9pZH0pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxVcGRhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbFVwZGF0ZSh2YWx1ZTogeyhjZWxsOiBHcmlkQ2VsbCwgb2xkVmFsdWU6IGFueSwgdmFsdWU6IGFueSwgY29uZmlybTogeyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkfSk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFVwZGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIHBhZ2luZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ2VsbFJlbmRlcigpOiB7KGNlbGw6IEdyaWRDZWxsKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25DZWxsUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNlbGxSZW5kZXIodmFsdWU6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxSZW5kZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBwYWdlciBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQmVmb3JlSW5pdCgpOiB7KCk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQmVmb3JlSW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25CZWZvcmVJbml0KHZhbHVlOiB7KCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQmVmb3JlSW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSByb3cgZGV0YWlscy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uSW5pdCgpOiB7KCk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uSW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Jbml0KHZhbHVlOiB7KCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uSW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBzY3JvbGwgbW9kZSBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQWZ0ZXJJbml0KCk6IHsoKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25BZnRlckluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQWZ0ZXJJbml0KHZhbHVlOiB7KCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQWZ0ZXJJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgY29sdW1uIGhlYWRlciBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ2hhcnRJbml0KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNoYXJ0SW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25DaGFydEluaXQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNoYXJ0SW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIHN1bW1hcnkgcm93IHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25SZW5kZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJlbmRlcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUmVuZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc2V0dGluZ3MgZm9yIHRoZSBncm91cCBoZWFkZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbktleSgpOiB7KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25LZXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uS2V5KHZhbHVlOiB7KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25LZXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBoZWFkZXIgc2V0dGluZ3Mgb2YgdGhlIGdyaWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd0luaXQoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0luaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93SW5pdCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0luaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBmb290ZXIgc2V0dGluZ3Mgb2YgdGhlIGdyaWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd0RldGFpbEluaXQoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGRldGFpbHM6IEhUTUxFbGVtZW50KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dEZXRhaWxJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd0RldGFpbEluaXQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93LCBkZXRhaWxzOiBIVE1MRWxlbWVudCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93RGV0YWlsSW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgcm93cyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRlc2NyaWJlIGFsbCByb3dzIGRpc3BsYXllZCBpbiB0aGUgZ3JpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93RGV0YWlsVXBkYXRlZCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgZGV0YWlsczogSFRNTEVsZW1lbnQpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0RldGFpbFVwZGF0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93RGV0YWlsVXBkYXRlZCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGRldGFpbHM6IEhUTUxFbGVtZW50KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dEZXRhaWxVcGRhdGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc2VsZWN0aW9uIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dJbnNlcnRlZCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93SW5zZXJ0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93SW5zZXJ0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dJbnNlcnRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgc29ydGluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93UmVtb3ZlZCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93UmVtb3ZlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dSZW1vdmVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93UmVtb3ZlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93VXBkYXRlKCk6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93LCBvbGRWYWx1ZXM6IGFueVtdLCB2YWx1ZXM6IGFueVtdLCBjb25maXJtOiB7KGNvbW1pdDogYm9vbGVhbik6IHZvaWR9KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dVcGRhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93VXBkYXRlKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgb2xkVmFsdWVzOiBhbnlbXSwgdmFsdWVzOiBhbnlbXSwgY29uZmlybTogeyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkfSk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93VXBkYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dVcGRhdGVkKCk6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dVcGRhdGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd1VwZGF0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dVcGRhdGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5Jbml0KCk6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5Jbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtbkluaXQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5Jbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5JbnNlcnRlZCgpOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uSW5zZXJ0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29sdW1uSW5zZXJ0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5JbnNlcnRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uUmVtb3ZlZCgpOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVtb3ZlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db2x1bW5SZW1vdmVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVtb3ZlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uVXBkYXRlZCgpOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uVXBkYXRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db2x1bW5VcGRhdGVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIGNvbHVtbjogR3JpZENvbHVtbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uVXBkYXRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29tbWFuZCgpOiB7KG5hbWU6IHN0cmluZywgY29tbWFuZDogYW55LCBkZXRhaWxzOiBHcmlkQ2VsbCwgZXZlbnQ6IEV2ZW50IHwgS2V5Ym9hcmRFdmVudCB8IFBvaW50ZXJFdmVudCwgaGFuZGxlZDogYm9vbGVhbik6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29tbWFuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db21tYW5kKHZhbHVlOiB7KG5hbWU6IHN0cmluZywgY29tbWFuZDogYW55LCBkZXRhaWxzOiBHcmlkQ2VsbCwgZXZlbnQ6IEV2ZW50IHwgS2V5Ym9hcmRFdmVudCB8IFBvaW50ZXJFdmVudCwgaGFuZGxlZDogYm9vbGVhbik6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29tbWFuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHBhZ2luZygpOiBHcmlkUGFnaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2luZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGFnaW5nKHZhbHVlOiBHcmlkUGFnaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2luZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHBhZ2VyKCk6IEdyaWRQYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYWdlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGFnZXIodmFsdWU6IEdyaWRQYWdlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYWdlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHJvd0RldGFpbCgpOiBHcmlkUm93RGV0YWlsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd0RldGFpbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93RGV0YWlsKHZhbHVlOiBHcmlkUm93RGV0YWlsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd0RldGFpbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNjcm9sbGluZygpOiBTY3JvbGxpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzY3JvbGxpbmcodmFsdWU6IFNjcm9sbGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5IZWFkZXIoKTogR3JpZENvbHVtbkhlYWRlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5IZWFkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkhlYWRlcih2YWx1ZTogR3JpZENvbHVtbkhlYWRlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5IZWFkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBzdW1tYXJ5Um93KCk6IEdyaWRTdW1tYXJ5Um93IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN1bW1hcnlSb3cgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN1bW1hcnlSb3codmFsdWU6IEdyaWRTdW1tYXJ5Um93KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN1bW1hcnlSb3cgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cEhlYWRlcigpOiBHcmlkR3JvdXBIZWFkZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBIZWFkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3VwSGVhZGVyKHZhbHVlOiBHcmlkR3JvdXBIZWFkZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBIZWFkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkZXIoKTogR3JpZEhlYWRlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhlYWRlcih2YWx1ZTogR3JpZEhlYWRlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBmb290ZXIoKTogR3JpZEZvb3RlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb290ZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvb3Rlcih2YWx1ZTogR3JpZEZvb3Rlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb290ZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCByb3dzKCk6IEdyaWRSb3dbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dzKHZhbHVlOiBHcmlkUm93W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbigpOiBHcmlkU2VsZWN0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uKHZhbHVlOiBHcmlkU2VsZWN0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnRpbmcoKTogR3JpZFNvcnRpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydGluZyh2YWx1ZTogR3JpZFNvcnRpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgZWRpdCBiZWdpbnMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGNvbHVtbiwgXHRjZWxsKVxuXHQqICAgcm93IC0gVGhlIGVkaXRlZCByb3cuXG5cdCogICBjb2x1bW4gLSBUaGUgZWRpdGVkIGNvbHVtbi5cblx0KiAgIGNlbGwgLSBUaGUgZWRpdGVkIGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkJlZ2luRWRpdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC4gV2hlbiB5b3Ugc2VsZWN0IHdpdGggYSBkcmFnLCB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyYWcgc3RhcnRzIGFuZCBlbmRzLiBcblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRzdGFydGVkLCBcdGZpbmlzaGVkLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBzdGFydGVkIC0gVGhlIGZsYWcgaXMgPGVtPnRydWU8L2VtPiwgd2hlbiB0aGUgc2VsZWN0aW9uIHN0YXJ0cy4gVGhlIGZsYWcgaXMgPGVtPmZhbHNlPC9lbT4sIHdoZW4gdGhlIHNlbGVjdGlvbiBlbmRzIGFuZCB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGlvbiBieSBkcmFnZ2luZy5cblx0KiAgIGZpbmlzaGVkIC0gVGhlIGZsYWcgaXMgPGVtPnRydWU8L2VtPiwgd2hlbiB0aGUgc2VsZWN0aW9uIGVuZHMuIFRoZSBmbGFnIGlzIDxlbT5mYWxzZTwvZW0+LCB3aGVuIHRoZSBzZWxlY3Rpb24gc3RhcnRzIGFuZCB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGlvbiBieSBkcmFnZ2luZy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaGVhZGVyIG9mIGEgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNsaWNrZWQgY29sdW1uLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkb3VibGUgY2xpY2tzIG9uIHRoZSBoZWFkZXIgb2YgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjb2x1bW4gLSBUaGUgZG91YmxlLWNsaWNrZWQgY29sdW1uLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRG91YmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZXNpemVkIGEgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRvbGRXaWR0aCwgXHR3aWR0aClcblx0KiAgIGNvbHVtbiAtIFRoZSByZXNpemVkIGNvbHVtbi5cblx0KiAgIG9sZFdpZHRoIC0gVGhlIG9sZCB3aWR0aCBvZiB0aGUgY29sdW1uLlxuXHQqICAgd2lkdGggLSBUaGUgbmV3IHdpZHRoIG9mIHRoZSBjb2x1bW4uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlc2l6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBhIGNvbHVtbiBkcmFnLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRpbmRleCwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbi5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIGluZGV4XG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdGluZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4uXG5cdCogICBpbmRleCAtIFRoZSBjb2x1bW4ncyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIGNvbHVtbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW4sIFx0aW5kZXgsIFx0bmV3SW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbi5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIGluZGV4XG5cdCogICBuZXdJbmRleCAtIFRoZSBjb2x1bW4ncyBuZXcgaW5kZXhcblx0KiAgIGRhdGEgLSBUaGUgZHJhZ2dpbmcgb2JqZWN0LiBkYXRhLmZlZWRiYWNrIGFuZCBkYXRhLmZlZWRiYWNrTGluZSBhcmUgSFRNTCBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheWVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzLiBUaGUgb2JqZWN0IGhhcyBlcnJvcigpLCBzdWNjZXNzKCkgYW5kIGRhdGEoKSBtZXRob2RzIHdoaWNoIHlvdSBjYW4gY2FsbCB0byBzZXQgdGhlIGZlZWRiYWNrIHN0YXRlLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaWFubCBFdmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBzdGFydHMgYSByb3cgZHJhZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aW5kZXgsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSByb3cuXG5cdCogICBpbmRleCAtIFRoZSByb3cncyBpbmRleFxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaWFubCBFdmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0RyYWdTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGRyYWdzIGEgcm93LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRpbmRleCwgXHRkYXRhLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICByb3cgLSBUaGUgcm93LlxuXHQqICAgaW5kZXggLSBUaGUgcm93J3MgaW5kZXhcblx0KiAgIGRhdGEgLSBUaGUgZHJhZ2dpbmcgb2JqZWN0LiBkYXRhLmZlZWRiYWNrIGFuZCBkYXRhLmZlZWRiYWNrTGluZSBhcmUgSFRNTCBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheWVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzLiBUaGUgb2JqZWN0IGhhcyBlcnJvcigpLCBzdWNjZXNzKCkgYW5kIGRhdGEoKSBtZXRob2RzIHdoaWNoIHlvdSBjYW4gY2FsbCB0byBzZXQgdGhlIGZlZWRiYWNrIHN0YXRlLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaWFubCBFdmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0RyYWdnaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSByb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGluZGV4LCBcdG5ld0luZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSByb3cuXG5cdCogICBpbmRleCAtIFRoZSByb3cncyBpbmRleFxuXHQqICAgbmV3SW5kZXggLSBUaGUgcm93J3MgbmV3IGluZGV4XG5cdCogICBkYXRhIC0gVGhlIGRyYWdnaW5nIG9iamVjdC4gZGF0YS5mZWVkYmFjayBhbmQgZGF0YS5mZWVkYmFja0xpbmUgYXJlIEhUTUwgRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXllZCB3aGlsZSB0aGUgdXNlciBkcmFncy4gVGhlIG9iamVjdCBoYXMgZXJyb3IoKSwgc3VjY2VzcygpIGFuZCBkYXRhKCkgbWV0aG9kcyB3aGljaCB5b3UgY2FuIGNhbGwgdG8gc2V0IHRoZSBmZWVkYmFjayBzdGF0ZS5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dEcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgZXhwYW5kcyBhIHJvdyBvZiB0aGUgZ3JpZC4gVGhlIEdyaWQgaXMgaW4gVHJlZUdyaWQvR3JvdXBpbmcgbW9kZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSBleHBhbmRlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dFeHBhbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBjb2xsYXBzZWQgYSByb3cgb2YgdGhlIGdyaWQuIFRoZSBHcmlkIGlzIGluIFRyZWVHcmlkL0dyb3VwaW5nIG1vZGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICByb3cgLSBUaGUgY29sbGFwc2VkIHJvdy4gXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dDb2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHJvdyBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSBjbGlja2VkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgZG91YmxlIGNsaWNrcyBvbiBhIHJvdyBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSBkb3VibGUtY2xpY2tlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dEb3VibGVDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHJlc2l6ZWQgYSByb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdG9sZEhlaWdodCwgXHRoZWlnaHQpXG5cdCogICByb3cgLSBUaGUgcmVzaXplZCByb3cuXG5cdCogICBvbGRIZWlnaHQgLSBUaGUgb2xkIGhlaWdodCBvZiB0aGUgcm93LlxuXHQqICAgaGVpZ2h0IC0gVGhlIG5ldyBoZWlnaHQgb2YgdGhlIHJvdy5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93UmVzaXplOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgY2VsbCBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjZWxsLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjZWxsIC0gVGhlIGNsaWNrZWQgY2VsbC5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGRvdWJsZSBjbGlja3Mgb24gYSBjZWxsIG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNlbGwsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNlbGwgLSBUaGUgZG91YmxlLWNsaWNrZWQgY2VsbC4gXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25DZWxsRG91YmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgZWRpdCBlbmRzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRjb2x1bW4sIFx0Y2VsbClcblx0KiAgIHJvdyAtIFRoZSBlZGl0ZWQgcm93LlxuXHQqICAgY29sdW1uIC0gVGhlIGVkaXRlZCBjb2x1bW4uXG5cdCogICBjZWxsIC0gVGhlIGVkaXRlZCBjZWxsLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FbmRFZGl0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gYSBmaWx0ZXIgaXMgYWRkZWQgb3IgcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW5zLCBcdGRhdGEpXG5cdCogICBjb2x1bW5zIC0gQXJyYXkgb2YgY29sdW1ucy5cblx0KiAgIGRhdGEgLSBBcnJheSBvZiB7ZGF0YUZpZWxkOiBzdHJpbmcsIGZpbHRlcjogc3RyaW5nfS4gPGVtPmRhdGFGaWVsZDwvZW0+IGlzIHRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLiA8ZW0+ZmlsdGVyPC9lbT4gaXMgYSBmaWx0ZXIgZXhwcmVzc2lvbiBsaWtlICdzdGFydHNXaXRoIEInXG5cdCovXG5cdEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBncmlkIGlzIHJlc2l6ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHRvdWNoZXMgYW5kIGhvbGRzIG9uIHRoZSByb3cgZm9yIGF0IGxlYXN0IDMwMG1zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIHRhcHBlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dUYXA6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHRvdWNoZXMgYW5kIGhvbGRzIG9uIHRoZSBjZWxsIGZvciBhdCBsZWFzdCAzMDBtcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjZWxsLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjZWxsIC0gVGhlIHRhcHBlZCByb3cuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25DZWxsVGFwOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgY2hhbmdlcyB0aGUgcGFnZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25QYWdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gYSBzb3J0aW5nIGNvbHVtbiBpcyBhZGRlZCBvciByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbnMsIFx0ZGF0YSlcblx0KiAgIGNvbHVtbnMgLSBBcnJheSBvZiBjb2x1bW5zLlxuXHQqICAgZGF0YSAtIEFycmF5IG9mIHtkYXRhRmllbGQ6IHN0cmluZywgc29ydE9yZGVyOiBzdHJpbmcsIHNvcnRJbmRleDogbnVtYmVyfS4gPGVtPmRhdGFGaWVsZDwvZW0+IGlzIHRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLiA8ZW0+c29ydE9yZGVyPC9lbT4gaXMgJ2FzYycgb3IgJ2Rlc2MnLCA8ZW0+c29ydEluZGV4PC9lbT4gaXMgdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gaW4gbXVsdGkgY29sdW1uIHNvcnRpbmcuXG5cdCovXG5cdEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZWFjaGVzIHRoZSBib3R0b20gb2YgdGhlIGdyaWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxCb3R0b21SZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgcmVhY2hlcyB0aGUgdG9wIG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsVG9wUmVhY2hlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSByb3cuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHthbnl9IGRhdGEuIHJvdyBkYXRhIG1hdGNoaW5nIHRoZSBkYXRhIHNvdXJjZVxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaW5zZXJ0QXRCb3R0b20/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWRkIHRoZSBuZXcgcm93IHRvIHRoZSBib3R0b20gb3IgdG9wIG9mIHRoZSBjb2xsZWN0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAndHJ1ZSdcblx0KiBAcGFyYW0ge2FueX0gY2FsbGJhY2s/LiBTZXRzIGEgY2FsbGJhY2sgZnVuY3Rpb24sIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgbmV3IHJvdyBpcyBhZGRlZC4gVGhlIGNhbGxiYWNrJ3MgYXJndW1lbnQgaXMgdGhlIG5ldyByb3cuXG5cdCovXG4gICAgcHVibGljIGFkZFJvdyhkYXRhOiBhbnksIGluc2VydEF0Qm90dG9tPzogYm9vbGVhbiwgY2FsbGJhY2s/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkUm93KGRhdGEsIGluc2VydEF0Qm90dG9tLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkUm93KGRhdGEsIGluc2VydEF0Qm90dG9tLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBuZXcgcm93IGFuZCBwdXRzIGl0IGludG8gZWRpdCBtb2RlLiBXaGVuIGJhdGNoIGVkaXRpbmcgaXMgZW5hYmxlZCwgdGhlIHJvdyBpcyBub3Qgc2F2ZWQgdW50aWwgdGhlIGJhdGNoIGVkaXQgaXMgc2F2ZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBwb3NpdGlvbj8uICduZWFyJyBvciAnZmFyJ1xuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgYWRkTmV3Um93KHBvc2l0aW9uPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5hZGROZXdSb3cocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyB1bmJvdW5kIHJvdyB0byB0aGUgdG9wIG9yIGJvdHRvbS4gVW5ib3VuZCByb3dzIGFyZSBub3QgcGFydCBvZiB0aGUgR3JpZCdzIGRhdGFTb3VyY2UuIFRoZXkgYmVjb21lIHBhcnQgb2YgdGhlIGRhdGFTb3VyY2UsIGFmdGVyIGFuIHVuYm91bmQgcm93IGlzIGVkaXRlZC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGNvdW50LiBUaGUgY291bnQgb2YgdW5ib3VuZCByb3dzLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBwb3NpdGlvbj8uICduZWFyJyBvciAnZmFyJ1xuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgYWRkVW5ib3VuZFJvdyhjb3VudCwgcG9zaXRpb24/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFkZFVuYm91bmRSb3coY291bnQsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBmaWx0ZXIgdG8gYSBjb2x1bW4uIFRoaXMgbWV0aG9kIHdpbGwgYXBwbHkgYSBmaWx0ZXIgdG8gdGhlIEdyaWQgZGF0YS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsdGVyLiBGaWx0ZXIgZXhwcmVzc2lvbiBsaWtlOiAnc3RhcnRzV2l0aCBCJ1xuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcmVmcmVzaEZpbHRlcnM/LiBcblx0Ki9cbiAgICBwdWJsaWMgYWRkRmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nLCBmaWx0ZXI6IHN0cmluZywgcmVmcmVzaEZpbHRlcnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihkYXRhRmllbGQsIGZpbHRlciwgcmVmcmVzaEZpbHRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihkYXRhRmllbGQsIGZpbHRlciwgcmVmcmVzaEZpbHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBdXRvLXNpemVzIGdyaWQgcm93cy4gVGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgdGhlIGhlaWdodCBvZiBhbGwgR3JpZCByb3dzLiBcblx0Ki9cbiAgICBwdWJsaWMgYXV0b1NpemVSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2l6ZVJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2l6ZVJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXV0by1zaXplcyBncmlkIGNvbHVtbnMuIFRoaXMgbWV0aG9kIHdpbGwgdXBkYXRlIHRoZSB3aWR0aCBvZiBhbGwgR3JpZCBjb2x1bW5zLiBcblx0Ki9cbiAgICBwdWJsaWMgYXV0b1NpemVDb2x1bW5zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2l6ZUNvbHVtbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2l6ZUNvbHVtbnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3RhcnRzIGFuIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgaXMgYXBwcm9wcmlhdGUgd2hlbiBjYWxsaW5nIG11bHRpcGxlIG1ldGhvZHMgb3Igc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYXQgb25jZS4gXG5cdCovXG4gICAgcHVibGljIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEJlZ2lucyByb3csIGNlbGwgb3IgY29sdW1uLiBUaGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIHByb2dyYW1tYXRpY2FsbHkgc3RhcnQgYSBjZWxsLCByb3cgb3IgY29sdW1uIGVkaXRpbmcuIEFmdGVyIGNhbGxpbmcgaXQsIGFuIGVkaXRvciBIVE1MRWxlbWVudCB3aWxsIGJlIGNyZWF0ZWQgYW5kIGRpc3BsYXllZCBpbiB0aGUgR3JpZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGJlZ2luRWRpdChyb3dJZCwgZGF0YUZpZWxkPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5iZWdpbkVkaXQocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgYWxsIGZpbHRlcnMuIFJlZnJlc2hlcyB0aGUgdmlldyBhbmQgdXBkYXRlcyBhbGwgZmlsdGVyIGlucHV0IGNvbXBvbmVudHMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJGaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIHNlbGVjdGlvbiB0aGF0IHVzZXIgaGF2ZSBtYWRlLiBBbGwgcm93LCBjZWxsIGFuZCBjb2x1bW4gc2VsZWN0aW9uIGhpZ2hsaWdodHMgd2lsbCBiZSByZW1vdmVkLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FuY2VscyB0aGUgZWRpdGluZy4gVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBjZWxsIGVkaXRvciBhbmQgY2FuY2VscyB0aGUgY2hhbmdlcy4gXG5cdCovXG4gICAgcHVibGljIGNhbmNlbEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jYW5jZWxFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENoZWNrcyBhIFRyZWVHcmlkIHJvdy4gVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgcm93J3MgY2hlY2stYm94LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyBjaGVja1Jvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENoZWNrcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gVGhpcyBtZXRob2QgdXBkYXRlcyBhbGwgY2hlY2stYm94ZXMgaW4gdGhlIFRyZWVHcmlkIG9yIEdyb3VwaW5nIHJvd3MuIFxuXHQqL1xuICAgIHB1YmxpYyBjaGVja0FsbFJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrQWxsUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIHVzZXIgc2VsZWN0aW9uIGFuZCBlbXB0aWVzIHRoZSBkYXRhIHNvdXJjZS4gVGhlIEdyaWQgd2lsbCBkaXNwbGF5ICdObyBSb3dzJyBpbiB0aGUgdmlldy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsb3NlcyB0aGUgY29sdW1uIGRyb3AtZG93biBtZW51LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU1lbnUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGEgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZVJvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBDaGFydCwgd2hlbiBjaGFydGluZyBpcyBlbmFibGVkLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gdHlwZS4gQ2hhcnQncyB0eXBlXG5cdCogQHBhcmFtIHthbnl9IGRhdGFTb3VyY2U/LiBDaGFydCdzIGRhdGEgc291cmNlXG5cdCovXG4gICAgcHVibGljIGNyZWF0ZUNoYXJ0KHR5cGU6IHN0cmluZywgZGF0YVNvdXJjZT86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDaGFydCh0eXBlLCBkYXRhU291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDaGFydCh0eXBlLCBkYXRhU291cmNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVsZXRlIGEgcm93LiBXaGVuIGJhdGNoIGVkaXRpbmcgaXMgZW5hYmxlZCwgdGhlIHJvdyBpcyBub3Qgc2F2ZWQgdW50aWwgdGhlIGJhdGNoIGVkaXQgaXMgc2F2ZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHthbnl9IGNhbGxiYWNrPy4gU2V0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHJvdyBpcyBkZWxldGVkLiBUaGUgY2FsbGJhY2sncyBhcmd1bWVudCBpcyB0aGUgZGVsZXRlZCByb3cuXG5cdCovXG4gICAgcHVibGljIGRlbGV0ZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5kZWxldGVSb3cocm93SWQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5kZWxldGVSb3cocm93SWQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2Nyb2xscyB0byBhIHJvdyBvciBjZWxsLiBUaGlzIG1ldGhvZCBzY3JvbGxzIHRvIGEgcm93IG9yIGNlbGwsIHdoZW4gc2Nyb2xsaW5nIGlzIG5lY2Vzc2FyeS4gSWYgcGFnaW5hdGlvbiBpcyBlbmFibGVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgY2hhbmdlIHRoZSBwYWdlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZW5zdXJlVmlzaWJsZShyb3dJZCwgZGF0YUZpZWxkPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgZWRpdGluZy4gVGhpcyBtZXRob2QgY29uZmlybXMgYWxsIGNoYW5nZXMgYW5kIGNsb3NlcyB0aGUgb3BlbmVkIGNlbGwgZWRpdG9yKHMpLiBcblx0Ki9cbiAgICBwdWJsaWMgZW5kRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXN1bWUgdGhlIHJlbmRlcmluZyBhbmQgd2lsbCByZWZyZXNoIHRoZSBHcmlkLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2g/LiBUaGUgZmxhZyB0aGF0IGNvbnRyb2wgdGhlIGNhbGxzIG9mIHRoZSByZWZyZXNoIG1ldGhvZC5cblx0Ki9cbiAgICBwdWJsaWMgZW5kVXBkYXRlKHJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZShyZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUocmVmcmVzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBUcmVlR3JpZCBvciBHcm91cGluZyByb3cuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGV4cGFuZFJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZEFsbFJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIEdyaWQgZGF0YSB0byAuWExTWCwgLlBERiwgLkpTT04sIC5YTUwsIC5DU1YsIC5UU1YsIC5IVE1MLCAuSlBFRyBvciAuUE5HLiBUaGUgbWV0aG9kIHVzZXMgdGhlIG9wdGlvbnMgb2YgdGhlIGRhdGFFeHBvcnQgcHJvcGVydHkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBEYXRhZm9ybWF0LiAneGxzeCcsICdwZGYnLCAnanNvbicsICd4bWwnLCAnY3N2JywgJ3RzdicsICdodG1sJywgJ3BuZycsICdqcGVnJy5cblx0Ki9cbiAgICBwdWJsaWMgZXhwb3J0RGF0YShEYXRhZm9ybWF0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShEYXRhZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKERhdGFmb3JtYXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGFuIGFycmF5IG9mIGNvbHVtbnMgd2l0aCBhcHBsaWVkIHNvcnRpbmcuIFxuXHQqIEByZXR1cm5zIHt7W2RhdGFGaWVsZDogc3RyaW5nXTogeyBzb3J0T3JkZXI6IHN0cmluZywgc29ydEluZGV4OiBudW1iZXIgfX19XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTb3J0ZWRDb2x1bW5zKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTb3J0ZWRDb2x1bW5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBzZWxlY3Rpb24uIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTZWxlY3Rpb24oKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgc2VsZWN0ZWQgcm93IGlkcy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0ZWRSb3dzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYW4gYXJyYXkgb2YgY29sdW1ucyB3aXRoIGFwcGxpZWQgZmlsdGVycy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEZpbHRlcmVkQ29sdW1ucygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RmlsdGVyZWRDb2x1bW5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGFuIGFycmF5IG9mIHJvd3MsIHdoaWNoIGFyZSB2aXNpYmxlIGFuZCBtYXRjaCB0aGUgYXBwbGllZCBmaWx0ZXIuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWaXNpYmxlUm93cygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VmlzaWJsZVJvd3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlc3VsdCBvZiB0aGUgZ2V0VmlzaWJsZVJvd3Mgb3IgdGhlIHJvd3MgaGllcmFyY2h5LCB3aGVuIHRoZSBHcmlkIGlzIGluIFRyZWVHcmlkL0dyb3VwaW5nIG1vZGUuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWaWV3Um93cygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Vmlld1Jvd3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGNoYW5nZXMgZnJvbSB0aGUgYmF0Y2ggZWRpdC4gXG5cdCogQHJldHVybnMge3sgdXBEYXRlZDogW3sgaWQ6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcsIG9sZFZhbHVlOiBPYmplY3QsIG5ld1ZhbHVlOiBPYmplY3QgfV0sIGRlbGV0ZWQ6IFt7aWQ6IHN0cmluZywgZGF0YTogT2JqZWN0fV0sIGFkZGVkOiBbe2lkOiBzdHJpbmcsIGRhdGE6IE9iamVjdH1dIH19XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRCYXRjaEVkaXRDaGFuZ2VzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRCYXRjaEVkaXRDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgYSBjb2x1bW4ncyBkcm9wLWRvd24gbWVudSBpcyBvcGVuZWQuIFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaGFzTWVudSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaGFzTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIERldGFpbHMgb2YgYSBSb3csIHdoZW4gcm93IGRldGFpbHMgYXJlIGVuYWJsZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGhpZGVEZXRhaWwocm93SWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGV0YWlsKHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGV0YWlsKHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgYSBjb2x1bW4gZHJvcC1kb3duIG1lbnUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCovXG4gICAgcHVibGljIG9wZW5NZW51KGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5NZW51KGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3Blbk1lbnUoZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUHJpbnRzIHRoZSBHcmlkIGRhdGEuIFRoZSBtZXRob2QgdXNlcyB0aGUgb3B0aW9ucyBvZiB0aGUgZGF0YUV4cG9ydCBwcm9wZXJ0eS4gV2hlbiBwcmludGVkLCB0aGUgR3JpZCB3aWxsIG5vdCBkaXNwbGF5IGFueSBzY3JvbGxiYXJzIHNvIGFsbCByb3dzIGFuZCBjb2x1bW5zIHdpbGwgYmUgZGlzcGxheWVkLiBUaGUgZ3JpZCB3aWxsIGF1dG8gcmVzaXplIHdpZHRoIGFuZCBoZWlnaHQgdG8gZml0IGFsbCBjb250ZW50cy4gVG8gY3VzdG9taXplIHRoZSBwcmludGluZyBvcHRpb25zLCB5b3UgY2FuIHVzZSAgdGhlIGRhdGFFeHBvcnQgcHJvcGVydHkuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW5kZXJzIHRoZSBncmlkLiBUaGlzIG1ldGhvZCB3aWxsIG1ha2UgYSBmdWxsLXJlZnJlc2ggbGlrZSBpbiB0aGUgaW5pdGlhbCBHcmlkIGNyZWF0aW9uLiBJdCB3aWxsIGNyZWF0ZSBSb3dzLCBDb2x1bW5zIGFuZCBDZWxscyBIVE1MIEVsZW1lbnRzIGFuZCB0aGVuIHJlZnJlc2ggdGhlIEdyaWQgbGF5b3V0LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBncmlkIHdpdGggdGhlIGN1cnJlbnQgcHJvcGVydHkgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIHJlZnJlc2ggdGhlIEdyaWQgbGF5b3V0LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2hWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBncmlkIGNlbGxzIGluIHZpZXcuIFRoZSBtZXRob2QgaXMgdXNlZnVsIGZvciBsaXZlLXVwZGF0ZXMgb2YgY2VsbCB2YWx1ZXMuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCogQHBhcmFtIHtib29sZWFufSByZWZyZXNoRmlsdGVycz8uIFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIHJlZnJlc2hGaWx0ZXJzPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoZGF0YUZpZWxkLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKGRhdGFGaWVsZCwgcmVmcmVzaEZpbHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgY29sdW1uIGZpbHRlci4gIFxuXHQqL1xuICAgIHB1YmxpYyByZXZlcnRCYXRjaEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJldmVydEJhdGNoRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJldmVydEJhdGNoRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXZlcnRzIHRoZSBiYXRjaCBlZGl0IGNoYW5nZXMuIFRoaXMgbWV0aG9kIGNhbmNlbHMgYWxsIGNoYW5nZXMgbWFkZSBieSB0aGUgZW5kLXVzZXIuIFxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQmF0Y2hFZGl0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQmF0Y2hFZGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUJhdGNoRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgYmF0Y2ggZWRpdCBjaGFuZ2VzLiBUaGlzIG1ldGhvZCBjb25maXJtcyB0aGUgZWRpdGluZyBjaGFuZ2VzIG1hZGUgYnkgdGhlIGVuZC11c2VyLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7YW55fSBkYXRhLiByb3cgZGF0YSBtYXRjaGluZyB0aGUgZGF0YSBzb3VyY2Vcblx0KiBAcGFyYW0ge2FueX0gY2FsbGJhY2s/LiBTZXRzIGEgY2FsbGJhY2sgZnVuY3Rpb24sIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgcm93IGlzIHVwZGF0ZWQuIFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50IGlzIHRoZSB1cGRhdGVkIHJvdy5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGE6IGFueSwgY2FsbGJhY2s/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUm93KHJvd0lkLCBkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUm93KHJvd0lkLCBkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSByb3cuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGFGaWVsZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgcm93LCBjZWxsIG9yIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBlbmRSb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGVuZERhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0UmFuZ2Uocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIGVuZFJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGVuZERhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJhbmdlKHJvd0lkLCBkYXRhRmllbGQsIGVuZFJvd0lkLCBlbmREYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJhbmdlKHJvd0lkLCBkYXRhRmllbGQsIGVuZFJvd0lkLCBlbmREYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgcmFuZ2Ugb2Ygcm93cywgY2VsbHMgb3IgY29sdW1ucy4gVGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHNlbGVjdGlvbiBjb25maWd1cmF0aW9uIG9mIHRoZSBHcmlkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBlbmRSb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJvd3NSYW5nZShyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBlbmRSb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3NSYW5nZShyb3dJZCwgZW5kUm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3NSYW5nZShyb3dJZCwgZW5kUm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgcmFuZ2Ugb2Ygcm93cy4gXG5cdCogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdfSByb3dJZC4gQXJyYXkgb2Ygcm93IGlkc1xuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RSb3dzKHJvd0lkOiAoc3RyaW5nIHwgbnVtYmVyKVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3Mocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3Mocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIG11bHRpcGxlIHJvd3MgYnkgdGhlaXIgaWRzLiBcblx0KiBAcGFyYW0ge251bWJlcltdfSByb3dJbmRleC4gQXJyYXkgb2Ygcm93IGluZGV4ZXNcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0Um93c0J5SW5kZXgocm93SW5kZXg6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJvd3NCeUluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSb3dzQnlJbmRleChyb3dJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgbXVsdGlwbGUgcm93cyBieSB0aGVpciBpbmRleC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0Ki9cbiAgICBwdWJsaWMgc2hvd0RldGFpbChyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dEZXRhaWwocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dEZXRhaWwocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyB0aGUgRGV0YWlscyBvZiBhIFJvdywgd2hlbiByb3cgZGV0YWlscyBhcmUgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgYSByb3csIGNlbGwgb3IgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyB1bmNoZWNrUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuY2hlY2tzIGEgVHJlZUdyaWQgcm93LiBTZXRzIGl0cyBjaGVjay1ib3ggdG8gZmFsc2UuIFxuXHQqL1xuICAgIHB1YmxpYyB1bmNoZWNrQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja0FsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmNoZWNrQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbmNoZWNrcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gU2V0cyBhbGwgY2hlY2stYm94ZXMgdG8gZmFsc2UuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIHRvZ2dsZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnRvZ2dsZVJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudG9nZ2xlUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQmVnaW5FZGl0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRvdWJsZUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkRvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblJlc2l6ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5SZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uRHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dEcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93RHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0V4cGFuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dFeHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NvbGxhcHNlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93Q29sbGFwc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93Q29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NvbGxhcHNlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RvdWJsZUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd0RvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlc2l6ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd1Jlc2l6ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dSZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlc2l6ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxEb3VibGVDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZEVkaXRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FbmRFZGl0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VuZEVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZEVkaXRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWx0ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsdGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dUYXBIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dUYXAuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93VGFwJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dUYXBIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2VsbFRhcC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsVGFwJywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblBhZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFnZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Tb3J0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NvcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsQm90dG9tUmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbFRvcFJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVnaW5FZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydiZWdpbkVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dEcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ2dpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dEcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ2dpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dEcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dFeHBhbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dFeHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q29sbGFwc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dDb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q29sbGFwc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93Q2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd0RvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93UmVzaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93UmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NlbGxDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZEVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZEVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50Lm9uZmlsdGVySGFuZGxlciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1RhcEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd1RhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2VsbFRhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbFRhcEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=