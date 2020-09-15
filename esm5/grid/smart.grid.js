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
        /** @description Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter. */
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
    * @param {any[]} dataSource?. Chart's data source
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
    */
    GridComponent.prototype.deleteRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.deleteRow(rowId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9ncmlkLyIsInNvdXJjZXMiOlsic21hcnQuZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEM7SUFBbUMseUNBQVc7SUFDN0MsdUJBQVksR0FBcUI7UUFBakMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBc2NsQzs7Ozs7VUFLRTtRQUNRLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7O1VBS0U7UUFDUSxjQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7Ozs7VUFJRTtRQUNRLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7Ozs7VUFJRTtRQUNRLHlCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7OztVQUtFO1FBQ1Esb0JBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7Ozs7VUFLRTtRQUNRLHVCQUFpQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVFOzs7Ozs7VUFNRTtRQUNRLHNCQUFnQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNFOzs7Ozs7O1VBT0U7UUFDUSxxQkFBZSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFOzs7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d0RBQStEO0lBTzlEO1FBQVQsTUFBTSxFQUFFOzhEQUFxRTtJQVFwRTtRQUFULE1BQU0sRUFBRTt5REFBZ0U7SUFRL0Q7UUFBVCxNQUFNLEVBQUU7NERBQW1FO0lBU2xFO1FBQVQsTUFBTSxFQUFFOzJEQUFrRTtJQVVqRTtRQUFULE1BQU0sRUFBRTswREFBaUU7SUFRaEU7UUFBVCxNQUFNLEVBQUU7eURBQWdFO0lBUy9EO1FBQVQsTUFBTSxFQUFFO3dEQUErRDtJQVU5RDtRQUFULE1BQU0sRUFBRTt1REFBOEQ7SUFPN0Q7UUFBVCxNQUFNLEVBQUU7c0RBQTZEO0lBTzVEO1FBQVQsTUFBTSxFQUFFO3dEQUErRDtJQU85RDtRQUFULE1BQU0sRUFBRTtxREFBNEQ7SUFPM0Q7UUFBVCxNQUFNLEVBQUU7MkRBQWtFO0lBUWpFO1FBQVQsTUFBTSxFQUFFO3NEQUE2RDtJQU81RDtRQUFULE1BQU0sRUFBRTtzREFBNkQ7SUFPNUQ7UUFBVCxNQUFNLEVBQUU7NERBQW1FO0lBUWxFO1FBQVQsTUFBTSxFQUFFO29EQUEyRDtJQU8xRDtRQUFULE1BQU0sRUFBRTttREFBMEQ7SUFJekQ7UUFBVCxNQUFNLEVBQUU7bURBQTBEO0lBT3pEO1FBQVQsTUFBTSxFQUFFO21EQUEwRDtJQU96RDtRQUFULE1BQU0sRUFBRTtvREFBMkQ7SUFJMUQ7UUFBVCxNQUFNLEVBQUU7aURBQXdEO0lBT3ZEO1FBQVQsTUFBTSxFQUFFO2lEQUF3RDtJQUl2RDtRQUFULE1BQU0sRUFBRTtnRUFBdUU7SUFJdEU7UUFBVCxNQUFNLEVBQUU7NkRBQW9FO0lBNW9CakUsYUFBYTtRQUp6QixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsMEJBQTBCO1NBQ3BDLENBQUM7T0FFVyxhQUFhLENBMmpEekI7SUFBRCxvQkFBQztDQUFBLEFBM2pERCxDQUFtQyxXQUFXLEdBMmpEN0M7U0EzakRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBHcmlkUmVzaXplTW9kZSwgR3JpZENsaXBib2FyZEF1dG9GaWxsTW9kZSwgSG9yaXpvbnRhbEFsaWdubWVudCwgVmVydGljYWxBbGlnbm1lbnQsIFBvc2l0aW9uLCBHcmlkQ29sdW1uU29ydE9yZGVyLCBHcmlkQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBHcmlkQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udEZhbWlseSwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRTaXplLCBHcmlkRWRpdGluZ0FjdGlvbiwgTGF5b3V0UG9zaXRpb24sIEdyaWRDb21tYW5kRGlzcGxheU1vZGUsIEdyaWRFZGl0aW5nTW9kZSwgR3JpZEZpbHRlcmluZ0ZpbHRlclJvd0FwcGx5TW9kZSwgR3JpZEdyb3VwaW5nRXhwYW5kTW9kZSwgR3JpZEdyb3VwaW5nUmVuZGVyTW9kZSwgR3JpZFBhZ2VyQXV0b0VsbGlwc2lzLCBTY3JvbGxpbmcsIEdyaWRTZWxlY3Rpb25Nb2RlLCBHcmlkU2VsZWN0aW9uQWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlc1NlbGVjdEFsbE1vZGUsIEdyaWRTb3J0aW5nTW9kZSwgR3JpZEFwcGVhcmFuY2UsIEdyaWRCZWhhdmlvciwgR3JpZExheW91dCwgR3JpZENsaXBib2FyZCwgR3JpZENvbHVtbiwgR3JpZENvbHVtbk1lbnUsIEdyaWRDb2x1bW5NZW51RGF0YVNvdXJjZSwgR3JpZENvbW1hbmQsIEdyaWRDb2x1bW5Hcm91cCwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZywgR3JpZENoYXJ0aW5nLCBEaWFsb2csIEdyaWRDaGVja0JveGVzLCBHcmlkRGF0YUV4cG9ydCwgR3JpZEVkaXRpbmcsIEdyaWRFZGl0aW5nQ29tbWFuZEtleXMsIEdyaWRDb21tYW5kS2V5LCBHcmlkRWRpdGluZ0NvbW1hbmRCYXIsIEdyaWRFZGl0aW5nQ29tbWFuZEJhckRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbiwgR3JpZEVkaXRpbmdDb21tYW5kQ29sdW1uRGF0YVNvdXJjZSwgR3JpZEVkaXRpbmdBZGROZXdSb3csIEdyaWRGaWx0ZXJpbmcsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3csIEdyaWRGaWx0ZXJpbmdGaWx0ZXJNZW51LCBHcmlkRmlsdGVyaW5nRmlsdGVyQnVpbGRlciwgR3JpZEdyb3VwaW5nLCBHcmlkR3JvdXBpbmdHcm91cEJhciwgR3JpZEdyb3VwaW5nU3VtbWFyeVJvdywgR3JpZFBhZ2luZywgR3JpZFBhZ2luZ1NwaW5uZXIsIEdyaWRQYWdlciwgR3JpZFBhZ2VyUGFnZVNpemVTZWxlY3RvciwgR3JpZFBhZ2VyU3VtbWFyeSwgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zUHJldk5leHRCdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc0ZpcnN0TGFzdEJ1dHRvbnMsIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zTGFiZWxzLCBHcmlkUGFnZXJOYXZpZ2F0aW9uSW5wdXQsIEdyaWRQYWdlclBhZ2VJbmRleFNlbGVjdG9ycywgR3JpZFJvd0RldGFpbCwgR3JpZENvbHVtbkhlYWRlciwgR3JpZFN1bW1hcnlSb3csIEdyaWRHcm91cEhlYWRlciwgR3JpZEhlYWRlciwgR3JpZEZvb3RlciwgR3JpZFJvdywgR3JpZENlbGwsIEdyaWRTZWxlY3Rpb24sIEdyaWRTZWxlY3Rpb25DaGVja0JveGVzLCBHcmlkU29ydGluZywgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgRGF0YUFkYXB0ZXIsIENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgR3JpZFJlc2l6ZU1vZGUsIEdyaWRDbGlwYm9hcmRBdXRvRmlsbE1vZGUsIEhvcml6b250YWxBbGlnbm1lbnQsIFZlcnRpY2FsQWxpZ25tZW50LCBQb3NpdGlvbiwgR3JpZENvbHVtblNvcnRPcmRlciwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZ0NvbmRpdGlvbiwgR3JpZENvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRGYW1pbHksIEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmdGb250U2l6ZSwgR3JpZEVkaXRpbmdBY3Rpb24sIExheW91dFBvc2l0aW9uLCBHcmlkQ29tbWFuZERpc3BsYXlNb2RlLCBHcmlkRWRpdGluZ01vZGUsIEdyaWRGaWx0ZXJpbmdGaWx0ZXJSb3dBcHBseU1vZGUsIEdyaWRHcm91cGluZ0V4cGFuZE1vZGUsIEdyaWRHcm91cGluZ1JlbmRlck1vZGUsIEdyaWRQYWdlckF1dG9FbGxpcHNpcywgU2Nyb2xsaW5nLCBHcmlkU2VsZWN0aW9uTW9kZSwgR3JpZFNlbGVjdGlvbkFjdGlvbiwgR3JpZFNlbGVjdGlvbkNoZWNrQm94ZXNTZWxlY3RBbGxNb2RlLCBHcmlkU29ydGluZ01vZGUsIEdyaWRBcHBlYXJhbmNlLCBHcmlkQmVoYXZpb3IsIEdyaWRMYXlvdXQsIEdyaWRDbGlwYm9hcmQsIEdyaWRDb2x1bW4sIEdyaWRDb2x1bW5NZW51LCBHcmlkQ29sdW1uTWVudURhdGFTb3VyY2UsIEdyaWRDb21tYW5kLCBHcmlkQ29sdW1uR3JvdXAsIEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmcsIEdyaWRDaGFydGluZywgRGlhbG9nLCBHcmlkQ2hlY2tCb3hlcywgR3JpZERhdGFFeHBvcnQsIEdyaWRFZGl0aW5nLCBHcmlkRWRpdGluZ0NvbW1hbmRLZXlzLCBHcmlkQ29tbWFuZEtleSwgR3JpZEVkaXRpbmdDb21tYW5kQmFyLCBHcmlkRWRpdGluZ0NvbW1hbmRCYXJEYXRhU291cmNlLCBHcmlkRWRpdGluZ0NvbW1hbmRDb2x1bW4sIEdyaWRFZGl0aW5nQ29tbWFuZENvbHVtbkRhdGFTb3VyY2UsIEdyaWRFZGl0aW5nQWRkTmV3Um93LCBHcmlkRmlsdGVyaW5nLCBHcmlkRmlsdGVyaW5nRmlsdGVyUm93LCBHcmlkRmlsdGVyaW5nRmlsdGVyTWVudSwgR3JpZEZpbHRlcmluZ0ZpbHRlckJ1aWxkZXIsIEdyaWRHcm91cGluZywgR3JpZEdyb3VwaW5nR3JvdXBCYXIsIEdyaWRHcm91cGluZ1N1bW1hcnlSb3csIEdyaWRQYWdpbmcsIEdyaWRQYWdpbmdTcGlubmVyLCBHcmlkUGFnZXIsIEdyaWRQYWdlclBhZ2VTaXplU2VsZWN0b3IsIEdyaWRQYWdlclN1bW1hcnksIEdyaWRQYWdlck5hdmlnYXRpb25CdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc1ByZXZOZXh0QnV0dG9ucywgR3JpZFBhZ2VyTmF2aWdhdGlvbkJ1dHRvbnNGaXJzdExhc3RCdXR0b25zLCBHcmlkUGFnZXJOYXZpZ2F0aW9uQnV0dG9uc0xhYmVscywgR3JpZFBhZ2VyTmF2aWdhdGlvbklucHV0LCBHcmlkUGFnZXJQYWdlSW5kZXhTZWxlY3RvcnMsIEdyaWRSb3dEZXRhaWwsIEdyaWRDb2x1bW5IZWFkZXIsIEdyaWRTdW1tYXJ5Um93LCBHcmlkR3JvdXBIZWFkZXIsIEdyaWRIZWFkZXIsIEdyaWRGb290ZXIsIEdyaWRSb3csIEdyaWRDZWxsLCBHcmlkU2VsZWN0aW9uLCBHcmlkU2VsZWN0aW9uQ2hlY2tCb3hlcywgR3JpZFNvcnRpbmcsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEdyaWQgfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IERhdGFBZGFwdGVyLCBDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWdyaWQsIFtzbWFydC1ncmlkXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEdyaWQ+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBHcmlkO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBHcmlkO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxHcmlkPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWdyaWQnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIEFuIG9iamVjdCBjb250YWluaW5nIHNldHRpbmdzIHJlbGF0ZWQgdG8gdGhlIGdyaWQncyBhcHBlYXJhbmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXBwZWFyYW5jZSgpOiBHcmlkQXBwZWFyYW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcHBlYXJhbmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhcHBlYXJhbmNlKHZhbHVlOiBHcmlkQXBwZWFyYW5jZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcHBlYXJhbmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFuIG9iamVjdCBjb250YWluaW5nIHNldHRpbmdzIHJlbGF0ZWQgdG8gdGhlIGdyaWQncyBiZWhhdmlvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGJlaGF2aW9yKCk6IEdyaWRCZWhhdmlvciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iZWhhdmlvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYmVoYXZpb3IodmFsdWU6IEdyaWRCZWhhdmlvcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iZWhhdmlvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBvYmplY3QgY29udGFpbmluZyBzZXR0aW5ncyByZWxhdGVkIHRvIHRoZSBncmlkJ3MgbGF5b3V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGF5b3V0KCk6IEdyaWRMYXlvdXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGF5b3V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYXlvdXQodmFsdWU6IEdyaWRMYXlvdXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGF5b3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBjbGlwYm9hcmQgcHJvcGVydHkgaXMgdXNlZCB0byBlbmFibGUvZGlzYWJsZSBjbGlwYm9hcmQgb3BlcmF0aW9ucyB3aXRoIEN0cmwrQywgQ3RybCtYIGFuZCBDdHJsK1Yga2V5Ym9hcmQgbmF2aWdhdGlvbnMuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2xpcGJvYXJkKCk6IEdyaWRDbGlwYm9hcmQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xpcGJvYXJkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjbGlwYm9hcmQodmFsdWU6IEdyaWRDbGlwYm9hcmQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xpcGJvYXJkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBjb2x1bW5zIHByb3BlcnR5IGlzIHVzZWQgdG8gZGVzY3JpYmUgYWxsIGNvbHVtbnMgZGlzcGxheWVkIGluIHRoZSBncmlkLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbnMoKToge2xhYmVsOiBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nfVtdIHwgc3RyaW5nW10gfCBudW1iZXIgfCBHcmlkQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1ucyh2YWx1ZToge2xhYmVsOiBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nfVtdIHwgc3RyaW5nW10gfCBudW1iZXIgfCBHcmlkQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2x1bW4gTWVudSBpcyB0aGUgZHJvcC1kb3duIG1lbnUgZGlzcGxheWVkIGFmdGVyIGNsaWNraW5nIHRoZSBjb2x1bW4gaGVhZGVyJ3MgZHJvcC1kb3duIGJ1dHRvbiwgd2hpY2ggaXMgZGlzcGxheWVkIHdoZW4geW91IGhvdmVyIHRoZSBjb2x1bW4gaGVhZGVyLiBJdCBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSBjb2x1bW4gc2V0dGluZ3MuIEZvciBleGFtcGxlOiBTb3J0LCBGaWx0ZXIgb3IgR3JvdXAgdGhlIEdyaWQgYnkgdGhlIGN1cnJlbnQgY29sdW1uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uTWVudSgpOiBHcmlkQ29sdW1uTWVudSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5NZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5NZW51KHZhbHVlOiBHcmlkQ29sdW1uTWVudSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5NZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGNvbHVtbiBncm91cHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5Hcm91cHMoKTogR3JpZENvbHVtbkdyb3VwW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uR3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5Hcm91cHModmFsdWU6IEdyaWRDb2x1bW5Hcm91cFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkdyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgZGV0YWlscyBhYm91dCBjb25kaXRpb25hbCBmb3JtYXR0aW5nIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEdyaWQncyBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZygpOiBHcmlkQ29uZGl0aW9uYWxGb3JtYXR0aW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29uZGl0aW9uYWxGb3JtYXR0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb25kaXRpb25hbEZvcm1hdHRpbmcodmFsdWU6IEdyaWRDb25kaXRpb25hbEZvcm1hdHRpbmdbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgR3JpZCBDaGFydGluZyBEYXRhIFZpc3VhbGl6YXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjaGFydGluZygpOiBHcmlkQ2hhcnRpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hhcnRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNoYXJ0aW5nKHZhbHVlOiBHcmlkQ2hhcnRpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hhcnRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgVHJlZUdyaWQgY2hlY2tib3hlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNoZWNrQm94ZXMoKTogR3JpZENoZWNrQm94ZXMge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tCb3hlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2hlY2tCb3hlcyh2YWx1ZTogR3JpZENoZWNrQm94ZXMpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tCb3hlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBHcmlkIERhdGEgRXhwb3J0IG9wdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhRXhwb3J0KCk6IEdyaWREYXRhRXhwb3J0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFFeHBvcnQodmFsdWU6IEdyaWREYXRhRXhwb3J0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZ3JpZCdzIGRhdGEgc291cmNlLiBUaGUgdmFsdWUgb2YgZGF0YVNvdXJjZSBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgSlFYLkRhdGFBZGFwdGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBEYXRhQWRhcHRlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBEYXRhQWRhcHRlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgZ3JpZCdzIGVkaXRpbmcgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0aW5nKCk6IEdyaWRFZGl0aW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVkaXRpbmcodmFsdWU6IEdyaWRFZGl0aW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBncmlkJ3MgZmlsdGVyaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyaW5nKCk6IEdyaWRGaWx0ZXJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJpbmcodmFsdWU6IEdyaWRGaWx0ZXJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgZ3JpZCdzIGdyb3VwaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBpbmcoKTogR3JpZEdyb3VwaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cGluZyh2YWx1ZTogR3JpZEdyb3VwaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIG1lc3NhZ2VzIHZhbHVlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbihjaGFydDogSlFYLkNoYXJ0KSBjYWxsZWQgd2hlbiB0aGUgY2hhcnQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuIFlvdSBjYW4gdXNlIHRoaXMgZnVuY3Rpb24gdG8gY3VzdG9taXplIHRoZSBDaGFydCBlbGVtZW50IHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsVmFsdWUoKTogeyhjZWxsOiBHcmlkQ2VsbCk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNlbGxWYWx1ZSh2YWx1ZTogeyhjZWxsOiBHcmlkQ2VsbCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIGZ1bmN0aW9uKCkgY2FsbGVkIHdoZW4gdGhlIGdyaWQgaGFzIGJlZW4gcmVuZGVyZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNlbGxVcGRhdGUoKTogeyhjZWxsOiBHcmlkQ2VsbCwgb2xkVmFsdWU6IGFueSwgdmFsdWU6IGFueSwgY29uZmlybTogeyhjb21taXQ6IGJvb2xlYW4pOiB2b2lkfSk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFVwZGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25DZWxsVXBkYXRlKHZhbHVlOiB7KGNlbGw6IEdyaWRDZWxsLCBvbGRWYWx1ZTogYW55LCB2YWx1ZTogYW55LCBjb25maXJtOiB7KGNvbW1pdDogYm9vbGVhbik6IHZvaWR9KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25DZWxsVXBkYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgcGFnaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsUmVuZGVyKCk6IHsoY2VsbDogR3JpZENlbGwpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxSZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbFJlbmRlcih2YWx1ZTogeyhjZWxsOiBHcmlkQ2VsbCk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFJlbmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIHBhZ2VyIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25CZWZvcmVJbml0KCk6IHsoKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25CZWZvcmVJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkJlZm9yZUluaXQodmFsdWU6IHsoKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25CZWZvcmVJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHJvdyBkZXRhaWxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Jbml0KCk6IHsoKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Jbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkluaXQodmFsdWU6IHsoKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Jbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHNjcm9sbCBtb2RlIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25BZnRlckluaXQoKTogeygpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkFmdGVySW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25BZnRlckluaXQodmFsdWU6IHsoKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25BZnRlckluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBjb2x1bW4gaGVhZGVyIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DaGFydEluaXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2hhcnRJbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNoYXJ0SW5pdCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2hhcnRJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc3VtbWFyeSByb3cgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJlbmRlcigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25SZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUmVuZGVyKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25SZW5kZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBzZXR0aW5ncyBmb3IgdGhlIGdyb3VwIGhlYWRlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uS2V5KCk6IHsoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbktleSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25LZXkodmFsdWU6IHsoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbktleSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGhlYWRlciBzZXR0aW5ncyBvZiB0aGUgZ3JpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93SW5pdCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93SW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dJbml0KHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdyk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93SW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGZvb3RlciBzZXR0aW5ncyBvZiB0aGUgZ3JpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uUm93RGV0YWlsSW5pdCgpOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgZGV0YWlsczogSFRNTEVsZW1lbnQpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0RldGFpbEluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93RGV0YWlsSW5pdCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIGRldGFpbHM6IEhUTUxFbGVtZW50KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dEZXRhaWxJbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSByb3dzIHByb3BlcnR5IGlzIHVzZWQgdG8gZGVzY3JpYmUgYWxsIHJvd3MgZGlzcGxheWVkIGluIHRoZSBncmlkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dEZXRhaWxVcGRhdGVkKCk6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93LCBkZXRhaWxzOiBIVE1MRWxlbWVudCk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uUm93RGV0YWlsVXBkYXRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dEZXRhaWxVcGRhdGVkKHZhbHVlOiB7KGluZGV4OiBudW1iZXIsIHJvdzogR3JpZFJvdywgZGV0YWlsczogSFRNTEVsZW1lbnQpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0RldGFpbFVwZGF0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBzZWxlY3Rpb24gc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd0luc2VydGVkKCk6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dJbnNlcnRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dJbnNlcnRlZCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd0luc2VydGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyBzb3J0aW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dSZW1vdmVkKCk6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dSZW1vdmVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblJvd1JlbW92ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dSZW1vdmVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Sb3dVcGRhdGUoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3csIG9sZFZhbHVlczogYW55W10sIHZhbHVlczogYW55W10sIGNvbmZpcm06IHsoY29tbWl0OiBib29sZWFuKTogdm9pZH0pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1VwZGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Sb3dVcGRhdGUodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgcm93OiBHcmlkUm93LCBvbGRWYWx1ZXM6IGFueVtdLCB2YWx1ZXM6IGFueVtdLCBjb25maXJtOiB7KGNvbW1pdDogYm9vbGVhbik6IHZvaWR9KTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Sb3dVcGRhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblJvd1VwZGF0ZWQoKTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1VwZGF0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uUm93VXBkYXRlZCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCByb3c6IEdyaWRSb3cpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblJvd1VwZGF0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNvbHVtbkluaXQoKTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtbkluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29sdW1uSW5pdCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtbkluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNvbHVtbkluc2VydGVkKCk6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5JbnNlcnRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db2x1bW5JbnNlcnRlZCh2YWx1ZTogeyhpbmRleDogbnVtYmVyLCBjb2x1bW46IEdyaWRDb2x1bW4pOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtbkluc2VydGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5SZW1vdmVkKCk6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5SZW1vdmVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtblJlbW92ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5SZW1vdmVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5VcGRhdGVkKCk6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5VcGRhdGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtblVwZGF0ZWQodmFsdWU6IHsoaW5kZXg6IG51bWJlciwgY29sdW1uOiBHcmlkQ29sdW1uKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5VcGRhdGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db21tYW5kKCk6IHsobmFtZTogc3RyaW5nLCBjb21tYW5kOiBhbnksIGRldGFpbHM6IEdyaWRDZWxsLCBldmVudDogRXZlbnQgfCBLZXlib2FyZEV2ZW50IHwgUG9pbnRlckV2ZW50LCBoYW5kbGVkOiBib29sZWFuKTogdm9pZH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db21tYW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbW1hbmQodmFsdWU6IHsobmFtZTogc3RyaW5nLCBjb21tYW5kOiBhbnksIGRldGFpbHM6IEdyaWRDZWxsLCBldmVudDogRXZlbnQgfCBLZXlib2FyZEV2ZW50IHwgUG9pbnRlckV2ZW50LCBoYW5kbGVkOiBib29sZWFuKTogdm9pZH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db21tYW5kID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFnaW5nKCk6IEdyaWRQYWdpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYWdpbmcodmFsdWU6IEdyaWRQYWdpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFnZXIoKTogR3JpZFBhZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2VyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYWdlcih2YWx1ZTogR3JpZFBhZ2VyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2VyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcm93RGV0YWlsKCk6IEdyaWRSb3dEZXRhaWwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93RGV0YWlsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dEZXRhaWwodmFsdWU6IEdyaWRSb3dEZXRhaWwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93RGV0YWlsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2Nyb2xsaW5nKCk6IFNjcm9sbGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNjcm9sbGluZyh2YWx1ZTogU2Nyb2xsaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkhlYWRlcigpOiBHcmlkQ29sdW1uSGVhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkhlYWRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uSGVhZGVyKHZhbHVlOiBHcmlkQ29sdW1uSGVhZGVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkhlYWRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHN1bW1hcnlSb3coKTogR3JpZFN1bW1hcnlSb3cge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3VtbWFyeVJvdyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3VtbWFyeVJvdyh2YWx1ZTogR3JpZFN1bW1hcnlSb3cpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3VtbWFyeVJvdyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwSGVhZGVyKCk6IEdyaWRHcm91cEhlYWRlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEhlYWRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBIZWFkZXIodmFsdWU6IEdyaWRHcm91cEhlYWRlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEhlYWRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlcigpOiBHcmlkSGVhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyKHZhbHVlOiBHcmlkSGVhZGVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IGZvb3RlcigpOiBHcmlkRm9vdGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9vdGVyKHZhbHVlOiBHcmlkRm9vdGVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHJvd3MoKTogR3JpZFJvd1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJvd3ModmFsdWU6IEdyaWRSb3dbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uKCk6IEdyaWRTZWxlY3Rpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb24odmFsdWU6IEdyaWRTZWxlY3Rpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydGluZygpOiBHcmlkU29ydGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0aW5nKHZhbHVlOiBHcmlkU29ydGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0aW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBlZGl0IGJlZ2lucy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0Y29sdW1uLCBcdGNlbGwpXG5cdCogICByb3cgLSBUaGUgZWRpdGVkIHJvdy5cblx0KiAgIGNvbHVtbiAtIFRoZSBlZGl0ZWQgY29sdW1uLlxuXHQqICAgY2VsbCAtIFRoZSBlZGl0ZWQgY2VsbC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQmVnaW5FZGl0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLiBXaGVuIHlvdSBzZWxlY3Qgd2l0aCBhIGRyYWcsIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZHJhZyBzdGFydHMgYW5kIGVuZHMuIFxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHN0YXJ0ZWQsIFx0ZmluaXNoZWQsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHN0YXJ0ZWQgLSBUaGUgZmxhZyBpcyA8ZW0+dHJ1ZTwvZW0+LCB3aGVuIHRoZSBzZWxlY3Rpb24gc3RhcnRzLiBUaGUgZmxhZyBpcyA8ZW0+ZmFsc2U8L2VtPiwgd2hlbiB0aGUgc2VsZWN0aW9uIGVuZHMgYW5kIHdoZW4gdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uIGJ5IGRyYWdnaW5nLlxuXHQqICAgZmluaXNoZWQgLSBUaGUgZmxhZyBpcyA8ZW0+dHJ1ZTwvZW0+LCB3aGVuIHRoZSBzZWxlY3Rpb24gZW5kcy4gVGhlIGZsYWcgaXMgPGVtPmZhbHNlPC9lbT4sIHdoZW4gdGhlIHNlbGVjdGlvbiBzdGFydHMgYW5kIHdoZW4gdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uIGJ5IGRyYWdnaW5nLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBoZWFkZXIgb2YgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjb2x1bW4gLSBUaGUgY2xpY2tlZCBjb2x1bW4uXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGRvdWJsZSBjbGlja3Mgb24gdGhlIGhlYWRlciBvZiBhIGNvbHVtbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW4sIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNvbHVtbiAtIFRoZSBkb3VibGUtY2xpY2tlZCBjb2x1bW4uXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgd2hpY2ggaXMgJ3BvaW50ZXInLCAndG91Y2gnIG9yICdtb3VzZScgRXZlbnQgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGRldmljZSB0eXBlIGFuZCB3ZWIgYnJvd3NlclxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5Eb3VibGVDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHJlc2l6ZWQgYSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdG9sZFdpZHRoLCBcdHdpZHRoKVxuXHQqICAgY29sdW1uIC0gVGhlIHJlc2l6ZWQgY29sdW1uLlxuXHQqICAgb2xkV2lkdGggLSBUaGUgb2xkIHdpZHRoIG9mIHRoZSBjb2x1bW4uXG5cdCogICB3aWR0aCAtIFRoZSBuZXcgd2lkdGggb2YgdGhlIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uUmVzaXplOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGEgY29sdW1uIGRyYWcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uLCBcdGluZGV4LCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjb2x1bW4gLSBUaGUgY29sdW1uLlxuXHQqICAgaW5kZXggLSBUaGUgY29sdW1uJ3MgaW5kZXhcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIGNvbHVtbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW4sIFx0aW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbi5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIGluZGV4XG5cdCogICBkYXRhIC0gVGhlIGRyYWdnaW5nIG9iamVjdC4gZGF0YS5mZWVkYmFjayBhbmQgZGF0YS5mZWVkYmFja0xpbmUgYXJlIEhUTUwgRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXllZCB3aGlsZSB0aGUgdXNlciBkcmFncy4gVGhlIG9iamVjdCBoYXMgZXJyb3IoKSwgc3VjY2VzcygpIGFuZCBkYXRhKCkgbWV0aG9kcyB3aGljaCB5b3UgY2FuIGNhbGwgdG8gc2V0IHRoZSBmZWVkYmFjayBzdGF0ZS5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2lhbmwgRXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5EcmFnZ2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGRyYWdzIGEgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbiwgXHRpbmRleCwgXHRuZXdJbmRleCwgXHRkYXRhLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBjb2x1bW4gLSBUaGUgY29sdW1uLlxuXHQqICAgaW5kZXggLSBUaGUgY29sdW1uJ3MgaW5kZXhcblx0KiAgIG5ld0luZGV4IC0gVGhlIGNvbHVtbidzIG5ldyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBhIHJvdyBkcmFnLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRpbmRleCwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIHJvdy5cblx0KiAgIGluZGV4IC0gVGhlIHJvdydzIGluZGV4XG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93RHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSByb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGluZGV4LCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSByb3cuXG5cdCogICBpbmRleCAtIFRoZSByb3cncyBpbmRleFxuXHQqICAgZGF0YSAtIFRoZSBkcmFnZ2luZyBvYmplY3QuIGRhdGEuZmVlZGJhY2sgYW5kIGRhdGEuZmVlZGJhY2tMaW5lIGFyZSBIVE1MIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5ZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MuIFRoZSBvYmplY3QgaGFzIGVycm9yKCksIHN1Y2Nlc3MoKSBhbmQgZGF0YSgpIG1ldGhvZHMgd2hpY2ggeW91IGNhbiBjYWxsIHRvIHNldCB0aGUgZmVlZGJhY2sgc3RhdGUuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpYW5sIEV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93RHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkcmFncyBhIHJvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0aW5kZXgsIFx0bmV3SW5kZXgsIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIHJvdy5cblx0KiAgIGluZGV4IC0gVGhlIHJvdydzIGluZGV4XG5cdCogICBuZXdJbmRleCAtIFRoZSByb3cncyBuZXcgaW5kZXhcblx0KiAgIGRhdGEgLSBUaGUgZHJhZ2dpbmcgb2JqZWN0LiBkYXRhLmZlZWRiYWNrIGFuZCBkYXRhLmZlZWRiYWNrTGluZSBhcmUgSFRNTCBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheWVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzLiBUaGUgb2JqZWN0IGhhcyBlcnJvcigpLCBzdWNjZXNzKCkgYW5kIGRhdGEoKSBtZXRob2RzIHdoaWNoIHlvdSBjYW4gY2FsbCB0byBzZXQgdGhlIGZlZWRiYWNrIHN0YXRlLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaWFubCBFdmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0RyYWdFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBleHBhbmRzIGEgcm93IG9mIHRoZSBncmlkLiBUaGUgR3JpZCBpcyBpbiBUcmVlR3JpZC9Hcm91cGluZyBtb2RlLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIGV4cGFuZGVkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0V4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIGNvbGxhcHNlZCBhIHJvdyBvZiB0aGUgZ3JpZC4gVGhlIEdyaWQgaXMgaW4gVHJlZUdyaWQvR3JvdXBpbmcgbW9kZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHJvdyAtIFRoZSBjb2xsYXBzZWQgcm93LiBcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0NvbGxhcHNlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgcm93IG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIGNsaWNrZWQgcm93LlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBkb3VibGUgY2xpY2tzIG9uIGEgcm93IG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJvdywgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgcm93IC0gVGhlIGRvdWJsZS1jbGlja2VkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0RvdWJsZUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgcmVzaXplZCBhIHJvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyb3csIFx0b2xkSGVpZ2h0LCBcdGhlaWdodClcblx0KiAgIHJvdyAtIFRoZSByZXNpemVkIHJvdy5cblx0KiAgIG9sZEhlaWdodCAtIFRoZSBvbGQgaGVpZ2h0IG9mIHRoZSByb3cuXG5cdCogICBoZWlnaHQgLSBUaGUgbmV3IGhlaWdodCBvZiB0aGUgcm93LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dSZXNpemU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBjZWxsIG9mIHRoZSBncmlkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNlbGwsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNlbGwgLSBUaGUgY2xpY2tlZCBjZWxsLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QsIHdoaWNoIGlzICdwb2ludGVyJywgJ3RvdWNoJyBvciAnbW91c2UnIEV2ZW50IG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UgdHlwZSBhbmQgd2ViIGJyb3dzZXJcblx0Ki9cblx0QE91dHB1dCgpIG9uQ2VsbENsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIHVzZXIgZG91YmxlIGNsaWNrcyBvbiBhIGNlbGwgb2YgdGhlIGdyaWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y2VsbCwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgY2VsbCAtIFRoZSBkb3VibGUtY2xpY2tlZCBjZWxsLiBcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxEb3VibGVDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSBlZGl0IGVuZHMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdGNvbHVtbiwgXHRjZWxsKVxuXHQqICAgcm93IC0gVGhlIGVkaXRlZCByb3cuXG5cdCogICBjb2x1bW4gLSBUaGUgZWRpdGVkIGNvbHVtbi5cblx0KiAgIGNlbGwgLSBUaGUgZWRpdGVkIGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVuZEVkaXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiBhIGZpbHRlciBpcyBhZGRlZCBvciByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbnMsIFx0ZGF0YSlcblx0KiAgIGNvbHVtbnMgLSBBcnJheSBvZiBjb2x1bW5zLlxuXHQqICAgZGF0YSAtIEFycmF5IG9mIHtkYXRhRmllbGQ6IHN0cmluZywgZmlsdGVyOiBzdHJpbmd9LiA8ZW0+ZGF0YUZpZWxkPC9lbT4gaXMgdGhlIGNvbHVtbidzIGRhdGEgZmllbGQuIDxlbT5maWx0ZXI8L2VtPiBpcyBhIGZpbHRlciBleHByZXNzaW9uIGxpa2UgJ3N0YXJ0c1dpdGggQidcblx0Ki9cblx0QE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQsIHdoZW4gdGhlIGdyaWQgaXMgcmVzaXplZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdG91Y2hlcyBhbmQgaG9sZHMgb24gdGhlIHJvdyBmb3IgYXQgbGVhc3QgMzAwbXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cm93LCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICByb3cgLSBUaGUgdGFwcGVkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd1RhcDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdG91Y2hlcyBhbmQgaG9sZHMgb24gdGhlIGNlbGwgZm9yIGF0IGxlYXN0IDMwMG1zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNlbGwsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGNlbGwgLSBUaGUgdGFwcGVkIHJvdy5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCB3aGljaCBpcyAncG9pbnRlcicsICd0b3VjaCcgb3IgJ21vdXNlJyBFdmVudCBvYmplY3QsIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlIHR5cGUgYW5kIHdlYiBicm93c2VyXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxUYXA6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBwYWdlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblBhZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiBhIHNvcnRpbmcgY29sdW1uIGlzIGFkZGVkIG9yIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1ucywgXHRkYXRhKVxuXHQqICAgY29sdW1ucyAtIEFycmF5IG9mIGNvbHVtbnMuXG5cdCogICBkYXRhIC0gQXJyYXkgb2Yge2RhdGFGaWVsZDogc3RyaW5nLCBzb3J0T3JkZXI6IHN0cmluZywgc29ydEluZGV4OiBudW1iZXJ9LiA8ZW0+ZGF0YUZpZWxkPC9lbT4gaXMgdGhlIGNvbHVtbidzIGRhdGEgZmllbGQuIDxlbT5zb3J0T3JkZXI8L2VtPiBpcyAnYXNjJyBvciAnZGVzYycsIDxlbT5zb3J0SW5kZXg8L2VtPiBpcyB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiBpbiBtdWx0aSBjb2x1bW4gc29ydGluZy5cblx0Ki9cblx0QE91dHB1dCgpIG9uU29ydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkLCB3aGVuIHRoZSB1c2VyIHJlYWNoZXMgdGhlIGJvdHRvbSBvZiB0aGUgZ3JpZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbEJvdHRvbVJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCwgd2hlbiB0aGUgdXNlciByZWFjaGVzIHRoZSB0b3Agb2YgdGhlIGdyaWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxUb3BSZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyByb3cgYW5kIHB1dHMgaXQgaW50byBlZGl0IG1vZGUuIFdoZW4gYmF0Y2ggZWRpdGluZyBpcyBlbmFibGVkLCB0aGUgcm93IGlzIG5vdCBzYXZlZCB1bnRpbCB0aGUgYmF0Y2ggZWRpdCBpcyBzYXZlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHBvc2l0aW9uPy4gJ25lYXInIG9yICdmYXInXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhZGROZXdSb3cocG9zaXRpb24/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld1Jvdyhwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHVuYm91bmQgcm93IHRvIHRoZSB0b3Agb3IgYm90dG9tLiBVbmJvdW5kIHJvd3MgYXJlIG5vdCBwYXJ0IG9mIHRoZSBHcmlkJ3MgZGF0YVNvdXJjZS4gVGhleSBiZWNvbWUgcGFydCBvZiB0aGUgZGF0YVNvdXJjZSwgYWZ0ZXIgYW4gdW5ib3VuZCByb3cgaXMgZWRpdGVkLiBcblx0KiBAcGFyYW0ge251bWJlcn0gY291bnQuIFRoZSBjb3VudCBvZiB1bmJvdW5kIHJvd3MuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHBvc2l0aW9uPy4gJ25lYXInIG9yICdmYXInXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBhZGRVbmJvdW5kUm93KGNvdW50LCBwb3NpdGlvbj8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVW5ib3VuZFJvdyhjb3VudCwgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGZpbHRlciB0byBhIGNvbHVtbi4gVGhpcyBtZXRob2Qgd2lsbCBhcHBseSBhIGZpbHRlciB0byB0aGUgR3JpZCBkYXRhLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWx0ZXIuIEZpbHRlciBleHByZXNzaW9uIGxpa2U6ICdzdGFydHNXaXRoIEInXG5cdCogQHBhcmFtIHtib29sZWFufSByZWZyZXNoRmlsdGVycz8uIFxuXHQqL1xuICAgIHB1YmxpYyBhZGRGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIGZpbHRlcjogc3RyaW5nLCByZWZyZXNoRmlsdGVycz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGRhdGFGaWVsZCwgZmlsdGVyLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGRhdGFGaWVsZCwgZmlsdGVyLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG8tc2l6ZXMgZ3JpZCByb3dzLiBUaGlzIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgaGVpZ2h0IG9mIGFsbCBHcmlkIHJvd3MuIFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvU2l6ZVJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBdXRvLXNpemVzIGdyaWQgY29sdW1ucy4gVGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgdGhlIHdpZHRoIG9mIGFsbCBHcmlkIGNvbHVtbnMuIFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvU2l6ZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplQ29sdW1ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TaXplQ29sdW1ucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTdGFydHMgYW4gdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBpcyBhcHByb3ByaWF0ZSB3aGVuIGNhbGxpbmcgbXVsdGlwbGUgbWV0aG9kcyBvciBzZXQgbXVsdGlwbGUgcHJvcGVydGllcyBhdCBvbmNlLiBcblx0Ki9cbiAgICBwdWJsaWMgYmVnaW5VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmVnaW5zIHJvdywgY2VsbCBvciBjb2x1bW4uIFRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gcHJvZ3JhbW1hdGljYWxseSBzdGFydCBhIGNlbGwsIHJvdyBvciBjb2x1bW4gZWRpdGluZy4gQWZ0ZXIgY2FsbGluZyBpdCwgYW4gZWRpdG9yIEhUTUxFbGVtZW50IHdpbGwgYmUgY3JlYXRlZCBhbmQgZGlzcGxheWVkIGluIHRoZSBHcmlkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgYmVnaW5FZGl0KHJvd0lkLCBkYXRhRmllbGQ/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luRWRpdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyBhbGwgZmlsdGVycy4gUmVmcmVzaGVzIHRoZSB2aWV3IGFuZCB1cGRhdGVzIGFsbCBmaWx0ZXIgaW5wdXQgY29tcG9uZW50cy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyRmlsdGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgc2VsZWN0aW9uIHRoYXQgdXNlciBoYXZlIG1hZGUuIEFsbCByb3csIGNlbGwgYW5kIGNvbHVtbiBzZWxlY3Rpb24gaGlnaGxpZ2h0cyB3aWxsIGJlIHJlbW92ZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYW5jZWxzIHRoZSBlZGl0aW5nLiBUaGlzIG1ldGhvZCBjbG9zZXMgdGhlIGNlbGwgZWRpdG9yIGFuZCBjYW5jZWxzIHRoZSBjaGFuZ2VzLiBcblx0Ki9cbiAgICBwdWJsaWMgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGEgVHJlZUdyaWQgcm93LiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSByb3cncyBjaGVjay1ib3guIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGNoZWNrUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tSb3cocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoZWNrUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGFsbCBUcmVlR3JpZCBvciBHcm91cGluZyByb3dzLiBUaGlzIG1ldGhvZCB1cGRhdGVzIGFsbCBjaGVjay1ib3hlcyBpbiB0aGUgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gXG5cdCovXG4gICAgcHVibGljIGNoZWNrQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgdXNlciBzZWxlY3Rpb24gYW5kIGVtcHRpZXMgdGhlIGRhdGEgc291cmNlLiBUaGUgR3JpZCB3aWxsIGRpc3BsYXkgJ05vIFJvd3MnIGluIHRoZSB2aWV3LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBjb2x1bW4gZHJvcC1kb3duIG1lbnUuIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYSBUcmVlR3JpZCBvciBHcm91cGluZyByb3cuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VSb3cocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGFsbCBUcmVlR3JpZCBvciBHcm91cGluZyByb3dzLiBcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIENoYXJ0LCB3aGVuIGNoYXJ0aW5nIGlzIGVuYWJsZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB0eXBlLiBDaGFydCdzIHR5cGVcblx0KiBAcGFyYW0ge2FueVtdfSBkYXRhU291cmNlPy4gQ2hhcnQncyBkYXRhIHNvdXJjZVxuXHQqL1xuICAgIHB1YmxpYyBjcmVhdGVDaGFydCh0eXBlOiBzdHJpbmcsIGRhdGFTb3VyY2U/OiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDaGFydCh0eXBlLCBkYXRhU291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDaGFydCh0eXBlLCBkYXRhU291cmNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVsZXRlIGEgcm93LiBXaGVuIGJhdGNoIGVkaXRpbmcgaXMgZW5hYmxlZCwgdGhlIHJvdyBpcyBub3Qgc2F2ZWQgdW50aWwgdGhlIGJhdGNoIGVkaXQgaXMgc2F2ZWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGRlbGV0ZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRlbGV0ZVJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVsZXRlUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2Nyb2xscyB0byBhIHJvdyBvciBjZWxsLiBUaGlzIG1ldGhvZCBzY3JvbGxzIHRvIGEgcm93IG9yIGNlbGwsIHdoZW4gc2Nyb2xsaW5nIGlzIG5lY2Vzc2FyeS4gSWYgcGFnaW5hdGlvbiBpcyBlbmFibGVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgY2hhbmdlIHRoZSBwYWdlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBjb2x1bW4gYm91bmQgZGF0YSBmaWVsZFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZW5zdXJlVmlzaWJsZShyb3dJZCwgZGF0YUZpZWxkPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgZWRpdGluZy4gVGhpcyBtZXRob2QgY29uZmlybXMgYWxsIGNoYW5nZXMgYW5kIGNsb3NlcyB0aGUgb3BlbmVkIGNlbGwgZWRpdG9yKHMpLiBcblx0Ki9cbiAgICBwdWJsaWMgZW5kRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXN1bWUgdGhlIHJlbmRlcmluZyBhbmQgd2lsbCByZWZyZXNoIHRoZSBHcmlkLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2g/LiBUaGUgZmxhZyB0aGF0IGNvbnRyb2wgdGhlIGNhbGxzIG9mIHRoZSByZWZyZXNoIG1ldGhvZC5cblx0Ki9cbiAgICBwdWJsaWMgZW5kVXBkYXRlKHJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZShyZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUocmVmcmVzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBUcmVlR3JpZCBvciBHcm91cGluZyByb3cuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIGV4cGFuZFJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZEFsbFJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIEdyaWQgZGF0YSB0byAuWExTWCwgLlBERiwgLkpTT04sIC5YTUwsIC5DU1YsIC5UU1YsIC5IVE1MLCAuSlBFRyBvciAuUE5HLiBUaGUgbWV0aG9kIHVzZXMgdGhlIG9wdGlvbnMgb2YgdGhlIGRhdGFFeHBvcnQgcHJvcGVydHkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBEYXRhZm9ybWF0LiAneGxzeCcsICdwZGYnLCAnanNvbicsICd4bWwnLCAnY3N2JywgJ3RzdicsICdodG1sJywgJ3BuZycsICdqcGVnJy5cblx0Ki9cbiAgICBwdWJsaWMgZXhwb3J0RGF0YShEYXRhZm9ybWF0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShEYXRhZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKERhdGFmb3JtYXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGFuIGFycmF5IG9mIGNvbHVtbnMgd2l0aCBhcHBsaWVkIHNvcnRpbmcuIFxuXHQqIEByZXR1cm5zIHt7W2RhdGFGaWVsZDogc3RyaW5nXTogeyBzb3J0T3JkZXI6IHN0cmluZywgc29ydEluZGV4OiBudW1iZXIgfX19XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTb3J0ZWRDb2x1bW5zKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTb3J0ZWRDb2x1bW5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBzZWxlY3Rpb24uIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTZWxlY3Rpb24oKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhbiBhcnJheSBvZiBjb2x1bW5zIHdpdGggYXBwbGllZCBmaWx0ZXJzLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RmlsdGVyZWRDb2x1bW5zKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRGaWx0ZXJlZENvbHVtbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYW4gYXJyYXkgb2Ygcm93cywgd2hpY2ggYXJlIHZpc2libGUgYW5kIG1hdGNoIHRoZSBhcHBsaWVkIGZpbHRlci4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZpc2libGVSb3dzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWaXNpYmxlUm93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVzdWx0IG9mIHRoZSBnZXRWaXNpYmxlUm93cyBvciB0aGUgcm93cyBoaWVyYXJjaHksIHdoZW4gdGhlIEdyaWQgaXMgaW4gVHJlZUdyaWQvR3JvdXBpbmcgbW9kZS4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZpZXdSb3dzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWaWV3Um93cygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgY2hhbmdlcyBmcm9tIHRoZSBiYXRjaCBlZGl0LiBcblx0KiBAcmV0dXJucyB7eyB1cERhdGVkOiBbeyBpZDogc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZywgb2xkVmFsdWU6IE9iamVjdCwgbmV3VmFsdWU6IE9iamVjdCB9XSwgZGVsZXRlZDogW3tpZDogc3RyaW5nLCBkYXRhOiBPYmplY3R9XSwgYWRkZWQ6IFt7aWQ6IHN0cmluZywgZGF0YTogT2JqZWN0fV0gfX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEJhdGNoRWRpdENoYW5nZXMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEJhdGNoRWRpdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgd2hldGhlciBhIGNvbHVtbidzIGRyb3AtZG93biBtZW51IGlzIG9wZW5lZC4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBoYXNNZW51KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5oYXNNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyB0aGUgRGV0YWlscyBvZiBhIFJvdywgd2hlbiByb3cgZGV0YWlscyBhcmUgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0Ki9cbiAgICBwdWJsaWMgaGlkZURldGFpbChyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVEZXRhaWwocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVEZXRhaWwocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyBhIGNvbHVtbiBkcm9wLWRvd24gbWVudS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgb3Blbk1lbnUoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3Blbk1lbnUoZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuTWVudShkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQcmludHMgdGhlIEdyaWQgZGF0YS4gVGhlIG1ldGhvZCB1c2VzIHRoZSBvcHRpb25zIG9mIHRoZSBkYXRhRXhwb3J0IHByb3BlcnR5LiBXaGVuIHByaW50ZWQsIHRoZSBHcmlkIHdpbGwgbm90IGRpc3BsYXkgYW55IHNjcm9sbGJhcnMgc28gYWxsIHJvd3MgYW5kIGNvbHVtbnMgd2lsbCBiZSBkaXNwbGF5ZWQuIFRoZSBncmlkIHdpbGwgYXV0byByZXNpemUgd2lkdGggYW5kIGhlaWdodCB0byBmaXQgYWxsIGNvbnRlbnRzLiBUbyBjdXN0b21pemUgdGhlIHByaW50aW5nIG9wdGlvbnMsIHlvdSBjYW4gdXNlICB0aGUgZGF0YUV4cG9ydCBwcm9wZXJ0eS4gXG5cdCovXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbmRlcnMgdGhlIGdyaWQuIFRoaXMgbWV0aG9kIHdpbGwgbWFrZSBhIGZ1bGwtcmVmcmVzaCBsaWtlIGluIHRoZSBpbml0aWFsIEdyaWQgY3JlYXRpb24uIEl0IHdpbGwgY3JlYXRlIFJvd3MsIENvbHVtbnMgYW5kIENlbGxzIEhUTUwgRWxlbWVudHMgYW5kIHRoZW4gcmVmcmVzaCB0aGUgR3JpZCBsYXlvdXQuIFxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZyZXNoZXMgdGhlIGdyaWQgd2l0aCB0aGUgY3VycmVudCBwcm9wZXJ0eSB2YWx1ZXMuIFRoaXMgbWV0aG9kIHdpbGwgcmVmcmVzaCB0aGUgR3JpZCBsYXlvdXQuIFxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoVmlldygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZyZXNoZXMgdGhlIGdyaWQgY2VsbHMgaW4gdmlldy4gVGhlIG1ldGhvZCBpcyB1c2VmdWwgZm9yIGxpdmUtdXBkYXRlcyBvZiBjZWxsIHZhbHVlcy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2hGaWx0ZXJzPy4gXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcihkYXRhRmllbGQ6IHN0cmluZywgcmVmcmVzaEZpbHRlcnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUZpbHRlcihkYXRhRmllbGQsIHJlZnJlc2hGaWx0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoZGF0YUZpZWxkLCByZWZyZXNoRmlsdGVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBjb2x1bW4gZmlsdGVyLiAgXG5cdCovXG4gICAgcHVibGljIHJldmVydEJhdGNoRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmV2ZXJ0QmF0Y2hFZGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmV2ZXJ0QmF0Y2hFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldmVydHMgdGhlIGJhdGNoIGVkaXQgY2hhbmdlcy4gVGhpcyBtZXRob2QgY2FuY2VscyBhbGwgY2hhbmdlcyBtYWRlIGJ5IHRoZSBlbmQtdXNlci4gXG5cdCovXG4gICAgcHVibGljIHNhdmVCYXRjaEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVCYXRjaEVkaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQmF0Y2hFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNhdmVzIHRoZSBiYXRjaCBlZGl0IGNoYW5nZXMuIFRoaXMgbWV0aG9kIGNvbmZpcm1zIHRoZSBlZGl0aW5nIGNoYW5nZXMgbWFkZSBieSB0aGUgZW5kLXVzZXIuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZD8uIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCovXG4gICAgcHVibGljIHNlbGVjdChyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBkYXRhRmllbGQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhIHJvdywgY2VsbCBvciBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gZW5kUm93SWQuIHJvdyBib3VuZCBpZFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBlbmREYXRhRmllbGQuIGNvbHVtbiBib3VuZCBkYXRhIGZpZWxkXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJhbmdlKHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nLCBlbmRSb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBlbmREYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSYW5nZShyb3dJZCwgZGF0YUZpZWxkLCBlbmRSb3dJZCwgZW5kRGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSYW5nZShyb3dJZCwgZGF0YUZpZWxkLCBlbmRSb3dJZCwgZW5kRGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhIHJhbmdlIG9mIHJvd3MsIGNlbGxzIG9yIGNvbHVtbnMuIFRoZSByZXN1bHQgb2YgdGhlIG1ldGhvZCBkZXBlbmRzIG9uIHRoZSBzZWxlY3Rpb24gY29uZmlndXJhdGlvbiBvZiB0aGUgR3JpZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0Ki9cbiAgICBwdWJsaWMgc2hvd0RldGFpbChyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dEZXRhaWwocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dEZXRhaWwocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyB0aGUgRGV0YWlscyBvZiBhIFJvdywgd2hlbiByb3cgZGV0YWlscyBhcmUgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiByb3cgYm91bmQgaWRcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gY29sdW1uIGJvdW5kIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgYSByb3csIGNlbGwgb3IgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIHJvdyBib3VuZCBpZFxuXHQqL1xuICAgIHB1YmxpYyB1bmNoZWNrUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja1Jvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuY2hlY2tzIGEgVHJlZUdyaWQgcm93LiBTZXRzIGl0cyBjaGVjay1ib3ggdG8gZmFsc2UuIFxuXHQqL1xuICAgIHB1YmxpYyB1bmNoZWNrQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5jaGVja0FsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmNoZWNrQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbmNoZWNrcyBhbGwgVHJlZUdyaWQgb3IgR3JvdXBpbmcgcm93cy4gU2V0cyBhbGwgY2hlY2stYm94ZXMgdG8gZmFsc2UuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gcm93IGJvdW5kIGlkXG5cdCovXG4gICAgcHVibGljIHRvZ2dsZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnRvZ2dsZVJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudG9nZ2xlUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQmVnaW5FZGl0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRvdWJsZUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkRvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblJlc2l6ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5SZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uRHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dEcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93RHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0V4cGFuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dFeHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NvbGxhcHNlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93Q29sbGFwc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93Q29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NvbGxhcHNlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0RvdWJsZUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd0RvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlc2l6ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd1Jlc2l6ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dSZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1Jlc2l6ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxEb3VibGVDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZEVkaXRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FbmRFZGl0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VuZEVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZEVkaXRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWx0ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsdGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dUYXBIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dUYXAuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93VGFwJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dUYXBIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2VsbFRhcC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsVGFwJywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblBhZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFnZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Tb3J0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NvcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsQm90dG9tUmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbFRvcFJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5FZGl0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVnaW5FZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydiZWdpbkVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRHJhZ2dpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5EcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5EcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dEcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ2dpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dEcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RHJhZ2dpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0RyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dEcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dFeHBhbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dFeHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0V4cGFuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q29sbGFwc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dDb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93Q29sbGFwc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93Q2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0NsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd0RvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93UmVzaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93UmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dSZXNpemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NlbGxDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxEb3VibGVDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZEVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZEVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50Lm9uZmlsdGVySGFuZGxlciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd1RhcEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd1RhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93VGFwSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsVGFwSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2VsbFRhcCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbFRhcEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=