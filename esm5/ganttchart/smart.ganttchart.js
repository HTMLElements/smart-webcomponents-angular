import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var GanttChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GanttChartComponent, _super);
    function GanttChartComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a batch update was started after executing the beginUpdate method.
        *  @param event. The custom event. 	*/
        _this.onBeginUpdate = new EventEmitter();
        /** @description This event is triggered when a batch update was ended from after executing the endUpdate method.
        *  @param event. The custom event. 	*/
        _this.onEndUpdate = new EventEmitter();
        /** @description This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
        *   startIndex - The index of the task that a connection is started from.
        */
        _this.onConnectionStart = new EventEmitter();
        /** @description This event is triggered when the user completes a connection between two tasks.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	startIndex, 	endIndex, 	type)
        *   id - The id of the connection that was created.
        *   startIndex - The index of the task that a connection is started from.
        *   endIndex - The index of the task that a connection is started from.
        *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
        */
        _this.onConnectionEnd = new EventEmitter();
        /** @description This event is triggered when a Task is selected/unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
        *   value - The index of the new selected task.
        *   oldValue - The index of the previously selected task.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when a Tree column is resized. Column resizing is controled by the columnResize property.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	widthInPercentages, 	width)
        *   dataField - The name of the column. Corresponds to the <b>value</b> attribute of a <b>taskColumns/resourceColumns</b> object.
        *   headerCellElement - The HTMLElement column cell element that was resized.
        *   widthInPercentages - The new width of the column in percentages.
        *   width - The new width of the column in pixels.
        */
        _this.onColumnResize = new EventEmitter();
        /** @description This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to close.
        *   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when the window for task editing is closed( hidden )
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when an item is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
        *   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
        *   item - The object details of the collapsed item.
        *   index - The index of the collapsed item.
        *   label - The label of the collapsed item.
        *   value - The value of the collapsed item.
        */
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that is going to be dragged.
        *   item - The object of the task that is going to be dragged.
        *   dateStart - The start date of the task that is going to be dragged.
        *   dateEnd - The end date of the task that is going to be dragged.
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when dragging of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that is was dragged.
        *   item - The object of the task that is was dragged.
        *   dateStart - The start date of the task that is was dragged.
        *   dateEnd - The end date of the task that is was dragged.
        */
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when an item is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
        *   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
        *   item - The index of the expanded item.
        *   index - The index of the expanded item.
        *   label - The label of the expanded item.
        *   value - The value of the expanded item.
        */
        _this.onExpand = new EventEmitter();
        /** @description This event is triggered when the GanttChart is filtered.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	action, 	filters)
        *   type - The type of items that have been filtered ( task or resource ).
        *   action - The name of the filtering action (whether filtering is added or removed).
        *   filters - The filters that have been applied. Filters represent JQX.Utilities.FilterGroup objects.
        */
        _this.onFilter = new EventEmitter();
        /** @description This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	originalEvent)
        *   item - The item that was clicked. It cam be a task, resource or connection.
        *   type - The type of item. Possible values are: 'task', 'resource', 'connection'.
        *   originalEvent - The original DOM event.
        */
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is inserted.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        _this.onItemInsert = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        _this.onItemRemove = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        _this.onItemUpdate = new EventEmitter();
        /** @description This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to open.
        *   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window for task editing is opened( visible ).
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
        *   index - The index of the task which progress is going to be changed.
        *   progress - The progress of the task before it is changed.
        */
        _this.onProgressChangeStart = new EventEmitter();
        /** @description This event is triggered when the progress of a task is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
        *   index - The index of the task which progress is has been changed.
        *   progress - The progress of the task after it was changed.
        */
        _this.onProgressChangeEnd = new EventEmitter();
        /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that is going to be resized.
        *   item - The object of the task that is going to be resized.
        *   dateStart - The start date of the task that is going to be resized.
        *   dateEnd - The end date of the task that is going to be resized.
        */
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that was resized.
        *   item - The object of the task that was resized.
        *   dateStart - The start date of the task that was resized.
        *   dateEnd - The end date of the task that was resized.
        */
        _this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the GanttChart is sorted by some column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes)
        *   type - The type of columns that have been sorted ( task or resource column ).
        *   columns - An array of objects that contains the currently sorted column objects.
        *   sortDataFields - The dataFields of the columns that have been sorted. The dataField corresponds to the <b>value</b> property of a <b>taskColumns/resourceColumns</b> object.
        *   sortOrders - The orders of the columns that have been sorted.
        *   sortDataTypes - The data types of the columns that have been sorted.
        */
        _this.onSort = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the bottom.
        *  @param event. The custom event. 	*/
        _this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the top.
        *  @param event. The custom event. 	*/
        _this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the beginning (horizontally).
        *  @param event. The custom event. 	*/
        _this.onScrollLeftReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the end (horizontally).
        *  @param event. The custom event. 	*/
        _this.onScrollRightReached = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    GanttChartComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-gantt-chart');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(GanttChartComponent.prototype, "adjustToNonworkingTime", {
        /** @description Determines whether nonworkingDays/nonworkingHours are taken into considuration when determining the dateEnd of the tasks. When this property is enabled the dateEnd of the tasks is calculated to include only the actual working time. By default it's disabled and only calendar time is used. */
        get: function () {
            return this.nativeElement ? this.nativeElement.adjustToNonworkingTime : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.adjustToNonworkingTime = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "autoSchedule", {
        /** @description Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSchedule : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSchedule = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "autoScheduleStrictMode", {
        /** @description Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoScheduleStrictMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoScheduleStrictMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "autoScrollStep", {
        /** @description Determines the scroll speed when dragging when autoScroll property is set.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoScrollStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "columnResize", {
        /** @description Determines whether the Table columns are resizable or not. When enabled it is possible to resize the columns from the header cells of the Table in both Task and Resource timelines. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "columnResizeFeedback", {
        /** @description Determines resize feedback is used during column resizing. This property is applicable only when columnResize is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnResizeFeedback = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "dataExport", {
        /** @description Sets the GanttChart's Data Export options. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataExport : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataExport = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "dataSource", {
        /** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown. The duration always shows the calendar time whether it is in days/hours or other.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..  GanttChart also accepts a DataAdapter instance as dataSource. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "dayFormat", {
        /** @description Determines the format of the dates in the timeline header when they represent days. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dayFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dayFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "dateEnd", {
        /** @description Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dateEnd : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dateEnd = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "dateStart", {
        /** @description Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dateStart : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dateStart = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "disabled", {
        /** @description Enables or disables the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "disableAutoScroll", {
        /** @description Disables auto scrolling while dragging/resizing a task bar inside the Timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableAutoScroll = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "disableTaskDrag", {
        /** @description Disables dragging of tasks in the Timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableTaskDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableTaskDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "disableTaskProgressChange", {
        /** @description Disables task progress changing in the Timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableTaskProgressChange : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableTaskProgressChange = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "disableTaskResize", {
        /** @description Disables resizing of tasks in the Timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableTaskResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableTaskResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "disableSelection", {
        /** @description Disables the selection inside the GanttChart. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableSelection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableSelection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "disableWindowEditor", {
        /** @description Disables the window editor for the GanttChart. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableWindowEditor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "durationUnit", {
        /** @description Determines in what unit is task duration property measured. */
        get: function () {
            return this.nativeElement ? this.nativeElement.durationUnit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.durationUnit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "filterRow", {
        /** @description Determines whether a dedicated filter row is used for Table filtering instead of the default filter input. This property has no effect if filtering is not enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "groupByResources", {
        /** @description Groups the tasks inside the Task timeline according to the resources they are assigned to. Unassigned tasks are placed in a default group labeled 'Unassigned'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupByResources : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupByResources = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "headerTemplate", {
        /** @description Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "hideTimelineHeaderDetails", {
        /** @description By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ). */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "hideResourcePanel", {
        /** @description Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideResourcePanel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideResourcePanel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "horizontalScrollBarVisibility", {
        /** @description Determines weather or not horizontal scrollbar is shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "hourFormat", {
        /** @description Determines the format of the dates inside the timeline header when they represent hours. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hourFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hourFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "infiniteTimeline", {
        /** @description When enabled, scrolling to the end of the horizotal timeline, triggers the creation of additional to extend the time range. The number of cells to be added when the scrollbar reaches the end position is determined by the infiniteTimelineStep. */
        get: function () {
            return this.nativeElement ? this.nativeElement.infiniteTimeline : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.infiniteTimeline = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "infiniteTimelineStep", {
        /** @description Determines the number of cells to be added when the horizontal scroll bar of the Timeline reaches it's end position when infiniteTimeline is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.infiniteTimelineStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.infiniteTimelineStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "inverted", {
        /** @description When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inverted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inverted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "keyboardNavigation", {
        /** @description Determines whether keyboard navigation inside the Table is enabled or not. Keyboard navigation affects both Task and Resource Tables. It allows to navigate between items. the following keyboard shortcut keys are available for focused tasks inside the Task Table: Enter - opens the Window editor to edit the currently focused task.Delete - opens a confirmation window regarding the deletion of the currently focused task. */
        get: function () {
            return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "locale", {
        /** @description  Determines the language of the GanttChart.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "max", {
        /** @description Detetmines the maximum possible date of the Timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "min", {
        /** @description Detetmines the minimum possible date of the Timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "monthFormat", {
        /** @description Determines the format of the dates the timeline header when they represent months. */
        get: function () {
            return this.nativeElement ? this.nativeElement.monthFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.monthFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "nonworkingDays", {
        /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "nonworkingHours", {
        /** @description Determines the nonworking hours of a day. Hours are represented as numbers inside an array (e.g. [1,2,3] - means 1,2 and 3 AM) or number ranges represented as nested arrays(e.g. [[0,6]] - means from 0 to 6 AM). In the timline the cells that represent nonworking days are colored differently from the rest and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.nonworkingHours = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "popupWindowCustomizationFunction", {
        /** @description A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "progressLabelFormatFunction", {
        /** @description A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.progressLabelFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.progressLabelFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resources", {
        /** @description A getter that returns a flat structure as an array of all resources inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resources : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resources = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourceColumns", {
        /** @description Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourceColumns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourceColumns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourceFiltering", {
        /** @description Determines whether the Resource Table is filterable or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourceFiltering : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourceFiltering = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourceGroupFormatFunction", {
        /** @description A format function that allows to re-format the group row labels when groupByResources is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourceGroupFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourceGroupFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourcePanelHeaderTemplate", {
        /** @description Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourcePanelMin", {
        /** @description Determines the min size of the Resource Panel. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourcePanelMin : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourcePanelMin = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourcePanelSize", {
        /** @description Determines the size of the Resource Panel. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourcePanelSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourcePanelSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourcePanelRefreshRate", {
        /** @description Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourcePanelRefreshRate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourcePanelRefreshRate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourceTimelineFormatFunction", {
        /** @description A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourceTimelineMode", {
        /** @description Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourceTimelineMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "resourceTimelineView", {
        /** @description Determines how the resources will be displayed inside the resource Timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resourceTimelineView = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "selectedTaskIds", {
        /** @description Sets which tasks to select by their id or gets the currently selected task ids. If no id is provided for the task, an internal id is generated for each task according to it's index(tree path). */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedTaskIds : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedTaskIds = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "selectedResourceIds", {
        /** @description Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path). */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedResourceIds : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedResourceIds = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "showProgressLabel", {
        /** @description Shows the progress label inside the progress bars of the Timeline tasks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showProgressLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showProgressLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "snapToNearest", {
        /** @description If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well. */
        get: function () {
            return this.nativeElement ? this.nativeElement.snapToNearest : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.snapToNearest = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "sortMode", {
        /** @description Determines whether the GanttChart can be sorted by one, more then one or no columns. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "tasks", {
        /** @description A getter that returns a flat structure as an array of all tasks inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tasks : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tasks = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "taskColumns", {
        /** @description Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskColumns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskColumns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "taskFiltering", {
        /** @description Determines whether the Task Table is filterable or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskFiltering : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskFiltering = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "taskPanelMin", {
        /** @description Determines the min size of the Task Panel. Used when Resource Panel is visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskPanelMin = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "taskPanelSize", {
        /** @description Determines the size of the Task Panel. Used when Resource Panel is visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskPanelSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "timelineMin", {
        /** @description Determines the min width of the timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.timelineMin : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.timelineMin = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "treeMin", {
        /** @description Determines the min width of the task table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.treeMin : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.treeMin = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "treeSize", {
        /** @description Determines the size(width) of the task table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.treeSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.treeSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "timelineHeaderFormatFunction", {
        /** @description A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "verticalScrollBarVisibility", {
        /** @description Determines weather or not vertical scrollbar is shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "view", {
        /** @description Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
        get: function () {
            return this.nativeElement ? this.nativeElement.view : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.view = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "yearFormat", {
        /** @description Determines the format of the dates inside the timeline header when they represent years. */
        get: function () {
            return this.nativeElement ? this.nativeElement.yearFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "weekFormat", {
        /** @description Determines the format of the dates inside the timeline header when they represent weeks.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.weekFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.weekFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "theme", {
        /** @description Sets or gets the element's visual theme.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "unfocusable", {
        /** @description Sets or gets if the element can be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a custom filter to a specific column (task or resource column).
    * @param {any} columns. An object or an array of objects with the following syntax: <ul><li><b>type</b> - indicates the type of column to filter. Possible values are 'task' or 'resource'.</li><li><b>value</b> - the value of the column that must match the value attribute of a taskColumns/resourceColumns object(e.g. 'label', 'dateStart', etc).</li></ul>.
    * @param {any} filterGroup. A JQX.Utilities.FilterGroup object. Here's an example for creating a FilterGroup object: <pre>const filterGroup = new window.JQX.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'Task B', 'STARTS_WITH_CASE_SENSITIVE'); filterGroup.addFilter('or', filterObject); gantt.addFilter({ type: 'task', value: 'label' }, filterGroup);</pre>
    */
    GanttChartComponent.prototype.addFilter = function (columns, filterGroup) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(columns, filterGroup);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addFilter(columns, filterGroup);
            });
        }
    };
    /** @description Clears the currently applied filters.
    */
    GanttChartComponent.prototype.clearFilters = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearFilters();
            });
        }
    };
    /** @description Clears the currently applied column sorting.
    */
    GanttChartComponent.prototype.clearSort = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSort();
            });
        }
    };
    /** @description Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
    */
    GanttChartComponent.prototype.clearSelection = function () {
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
    /** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    GanttChartComponent.prototype.clearState = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearState();
            });
        }
    };
    /** @description Removes all tasks.
    */
    GanttChartComponent.prototype.clearTasks = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearTasks();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearTasks();
            });
        }
    };
    /** @description Removes all resources.
    */
    GanttChartComponent.prototype.clearResources = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearResources();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearResources();
            });
        }
    };
    /** @description Creates a connection between two tasks.
    * @param {number | string} startTaskIndex. The id of the start task or the connection string like '2-3-0'. <b>If the complete connections string is provided as the first argument, the rest of the method arguments are not necessary</b>
    * @param {number | string} taskEndIndex?. The id of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3. The connection type can be: <ul><li><b>0</b> - Start-to-Start connection.</li><li><b>1</b> - End-to-Start connection.</li><li><b>2</b> - End-to-End connection.</li><li><b>3</b> - Start-to-End connection.</li></ul>
    * @param {number} lag?. The connection lag in miliseconds. Used by the Auto scheduling algorithm in order allow some slack time slack time before or after the next task begins/ends. Lag is measured in miliseconds. It can be a negative (lead) or a positive (lag) number.
    */
    GanttChartComponent.prototype.createConnection = function (startTaskIndex, taskEndIndex, connectionType, lag) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
            });
        }
    };
    /** @description Collapses an expanded project.
    * @param {string | number} id. The id of a project item that should be collapsed.
    */
    GanttChartComponent.prototype.collapse = function (id) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(id);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapse(id);
            });
        }
    };
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    GanttChartComponent.prototype.beginUpdate = function () {
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
    /** @description Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
    */
    GanttChartComponent.prototype.endUpdate = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endUpdate();
            });
        }
    };
    /** @description Refereshes the GanttChart after resizing by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
    */
    GanttChartComponent.prototype.refresh = function (fullRefresh) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refresh(fullRefresh);
            });
        }
    };
    /** @description Makes sure a Task is visible by scrolling to it.
    * @param {string | number} taskId. The id of the target Task.
    */
    GanttChartComponent.prototype.ensureVisible = function (taskId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(taskId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible(taskId);
            });
        }
    };
    /** @description Expands a collapsed project with tasks.
    * @param {string | number} id. The id of a project task that should be expanded.
    */
    GanttChartComponent.prototype.expand = function (id) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(id);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expand(id);
            });
        }
    };
    /** @description Exports the data of Tree of the GanttChart.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>tsv</b></li><li><b>csv</b></li><li><b>xml</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the JQX Export Documentation.
    */
    GanttChartComponent.prototype.exportData = function (dataFormat, callback) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.exportData(dataFormat, callback);
            });
        }
    };
    /** @description Returns a JSON representation of all tasks inside the element along with their connections and settings.
    * @returns {any[]}
  */
    GanttChartComponent.prototype.getState = function () {
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
    /** @description Returns the Tree path of a task/resource. The tree path is used as task/resource id if no id is provided by the user.
    * @param {any} item. A GattChartTask/GanttChartResource item object.
    * @returns {string}
  */
    GanttChartComponent.prototype.getItemPath = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItemPath(item);
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
    /** @description Returns the task object that corresponds to the id/path.
    * @param {string | number} itemId. The id/path of a task.
    * @returns {any}
  */
    GanttChartComponent.prototype.getTask = function (itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getTask(itemId);
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
    /** @description Returns an array of all GanttChart tasks.
    * @returns {any[]}
  */
    GanttChartComponent.prototype.getTasks = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getTasks();
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
    /** @description Returns the index of a task.
    * @param {any} task. A GattChartTask object.
    * @returns {number}
  */
    GanttChartComponent.prototype.getTaskIndex = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getTaskIndex(task);
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
    /** @description Returns the connections definitions of a task.
    * @param {any} taskId. A GanttChartTask object or it's id.
    * @returns {any}
  */
    GanttChartComponent.prototype.getTaskConnections = function (taskId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getTaskConnections(taskId);
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
    /** @description Returns the Project of a task or undefined if it does not have one.
    * @param {any} task. A GantChartTask object.
    * @returns {any}
  */
    GanttChartComponent.prototype.getTaskProject = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getTaskProject(task);
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
    /** @description Returns the resource object that corresponds to the id/path.
    * @param {string | number} itemId. The id/path of a resource.
    * @returns {any}
  */
    GanttChartComponent.prototype.getResource = function (itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getResource(itemId);
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
    /** @description Returns an array of all GanttChart resources.
    * @returns {any[]}
  */
    GanttChartComponent.prototype.getResources = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getResources();
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
    /** @description Returns the index of a resource.
    * @param {any} resource. A GanttChartResource object.
    * @returns {number}
  */
    GanttChartComponent.prototype.getResourceIndex = function (resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getResourceIndex(resource);
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
    /** @description Returns the tasks that are assigned to the resource.
    * @param {any} resource. A GanttChartResource object or it's id.
    * @returns {any}
  */
    GanttChartComponent.prototype.getResourceTasks = function (resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getResourceTasks(resource);
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
    /** @description Returns the currently selected tasks/resource ids. If selection is disabled or no items are selected returns null.
    * @returns {any}
  */
    GanttChartComponent.prototype.getSelectedIds = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectedIds();
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
    /** @description Returns the currently selected tasks.
    * @returns {any}
  */
    GanttChartComponent.prototype.getSelectedTasks = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectedTasks();
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
    /** @description Returns the currently selected resources.
    * @returns {any}
  */
    GanttChartComponent.prototype.getSelectedResources = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectedResources();
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
    /** @description Returns the working hours of the day as numbers.
    * @returns {any}
  */
    GanttChartComponent.prototype.getWorkingHours = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getWorkingHours();
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
    /** @description Depending on the nonworkingDays property, returns true or false whether the target date is on a working day or not.
    * @param {Date} date. A javascript Date object or a string/number which represents a valid JS Date.
    */
    GanttChartComponent.prototype.isWorkingDay = function (date) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.isWorkingDay(date);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.isWorkingDay(date);
            });
        }
    };
    /** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    GanttChartComponent.prototype.loadState = function (state) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.loadState(state);
            });
        }
    };
    /** @description Removes all connections between tasks.
    */
    GanttChartComponent.prototype.removeAllConnections = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAllConnections();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAllConnections();
            });
        }
    };
    /** @description Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    * @returns {any}
  */
    GanttChartComponent.prototype.removeConnection = function (startTaskIndex, taskEndIndex, connectionType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.removeConnection(startTaskIndex, taskEndIndex, connectionType);
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
    /** @description Removes all connections of a task or between two tasks if the second argument is provided and valid.
    * @param {any} taskStart. The start task object or it's id.
    * @param {any} taskEnd?. The end task object or it's id.
    */
    GanttChartComponent.prototype.removeTaskConnection = function (taskStart, taskEnd) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTaskConnection(taskStart, taskEnd);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeTaskConnection(taskStart, taskEnd);
            });
        }
    };
    /** @description Saves the current settings of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    GanttChartComponent.prototype.saveState = function (state) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveState(state);
            });
        }
    };
    /** @description Inserts a new task in the timeline. The new task can be inserted as a sub task of a project by passing the appropriate argument for the project id or as a root level item.
    * @param {any} taskObject. An object describing a Gantt Chart task.
    * @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
    * @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
    * @returns {string | number | undefined}
  */
    GanttChartComponent.prototype.insertTask = function (taskObject, project, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.insertTask(taskObject, project, index);
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
    /** @description Updates a task/project/milestone.
    * @param {any} taskId. A number or string that represents the id of a task/project(e.g. '0') or the object definition of the task/project.
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    GanttChartComponent.prototype.updateTask = function (taskId, taskObject) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(taskId, taskObject);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateTask(taskId, taskObject);
            });
        }
    };
    /** @description Removes a task from the timeline.
    * @param {any} taskId. A number or string that represents the id of a task or the actual item object.
    */
    GanttChartComponent.prototype.removeTask = function (taskId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(taskId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeTask(taskId);
            });
        }
    };
    /** @description Inserts a new resource.
    * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} resourceObject?. An object describing a Gantt Chart resource.
    */
    GanttChartComponent.prototype.insertResource = function (resourceId, resourceObject) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertResource(resourceId, resourceObject);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertResource(resourceId, resourceObject);
            });
        }
    };
    /** @description Updates an existing resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
    */
    GanttChartComponent.prototype.updateResource = function (resourceId, taskObject) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateResource(resourceId, taskObject);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateResource(resourceId, taskObject);
            });
        }
    };
    /** @description Removes a resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    */
    GanttChartComponent.prototype.removeResource = function (resourceId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeResource(resourceId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeResource(resourceId);
            });
        }
    };
    /** @description Opens the popup Window for specific task to edit or to delete a connection if a connection string is passed.
    * @param {any} taskId. A string or number that represents the id of a task or the task object that is going to be edited or a connection string(e.g. '2-0-0').
    */
    GanttChartComponent.prototype.openWindow = function (taskId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(taskId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openWindow(taskId);
            });
        }
    };
    /** @description Closes an opened popup Window. The method will close any opened popup window inside the element.
    */
    GanttChartComponent.prototype.closeWindow = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeWindow();
            });
        }
    };
    /** @description Prepares the GanttChart for printing by opening the browser's Print Preview.
    */
    GanttChartComponent.prototype.print = function () {
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
    /** @description Allows to sets the working days and hours at once.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    GanttChartComponent.prototype.setWorkTime = function (settings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setWorkTime(settings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setWorkTime(settings);
            });
        }
    };
    /** @description Allows to select a task based on it's id.
    * @param {string | number} id. The id of the task to select.
    */
    GanttChartComponent.prototype.selectTask = function (id) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTask(id);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectTask(id);
            });
        }
    };
    /** @description Allows to select a resource based on it's id.
    * @param {string | number} id. The id of the resource to select.
    */
    GanttChartComponent.prototype.selectResource = function (id) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectResource(id);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectResource(id);
            });
        }
    };
    /** @description Allows to unselect a task based on it's id.
    * @param {string | number} id. The id of the task to unselect.
    */
    GanttChartComponent.prototype.unselectTask = function (id) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectTask(id);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselectTask(id);
            });
        }
    };
    /** @description Allows to unselect a resource based on it's id.
    * @param {string | number} id. The id of the resource to unselect.
    */
    GanttChartComponent.prototype.unselectResource = function (id) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectResource(id);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselectResource(id);
            });
        }
    };
    /** @description Allows to unset previously set working time. The opposte method for setWorkingTime.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should not be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    GanttChartComponent.prototype.unsetWorkTime = function (settings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unsetWorkTime(settings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unsetWorkTime(settings);
            });
        }
    };
    /** @description Sorts the GanttChart tasks/resources if sortable is enabled.
    * @param {any} columns. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
    */
    GanttChartComponent.prototype.sort = function (columns) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.sort(columns);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.sort(columns);
            });
        }
    };
    Object.defineProperty(GanttChartComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    GanttChartComponent.prototype.ngOnInit = function () {
    };
    GanttChartComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    GanttChartComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    GanttChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    GanttChartComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['beginUpdateHandler'] = function (event) { that.onBeginUpdate.emit(event); };
        that.nativeElement.addEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);
        that.eventHandlers['endUpdateHandler'] = function (event) { that.onEndUpdate.emit(event); };
        that.nativeElement.addEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);
        that.eventHandlers['connectionStartHandler'] = function (event) { that.onConnectionStart.emit(event); };
        that.nativeElement.addEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
        that.eventHandlers['connectionEndHandler'] = function (event) { that.onConnectionEnd.emit(event); };
        that.nativeElement.addEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['columnResizeHandler'] = function (event) { that.onColumnResize.emit(event); };
        that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['itemInsertHandler'] = function (event) { that.onItemInsert.emit(event); };
        that.nativeElement.addEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);
        that.eventHandlers['itemRemoveHandler'] = function (event) { that.onItemRemove.emit(event); };
        that.nativeElement.addEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);
        that.eventHandlers['itemUpdateHandler'] = function (event) { that.onItemUpdate.emit(event); };
        that.nativeElement.addEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['progressChangeStartHandler'] = function (event) { that.onProgressChangeStart.emit(event); };
        that.nativeElement.addEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
        that.eventHandlers['progressChangeEndHandler'] = function (event) { that.onProgressChangeEnd.emit(event); };
        that.nativeElement.addEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['scrollLeftReachedHandler'] = function (event) { that.onScrollLeftReached.emit(event); };
        that.nativeElement.addEventListener('scrollLeftReached', that.eventHandlers['scrollLeftReachedHandler']);
        that.eventHandlers['scrollRightReachedHandler'] = function (event) { that.onScrollRightReached.emit(event); };
        that.nativeElement.addEventListener('scrollRightReached', that.eventHandlers['scrollRightReachedHandler']);
    };
    /** @description Remove event listeners. */
    GanttChartComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['beginUpdateHandler']) {
            that.nativeElement.removeEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);
        }
        if (that.eventHandlers['endUpdateHandler']) {
            that.nativeElement.removeEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);
        }
        if (that.eventHandlers['connectionStartHandler']) {
            that.nativeElement.removeEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
        }
        if (that.eventHandlers['connectionEndHandler']) {
            that.nativeElement.removeEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['columnResizeHandler']) {
            that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['itemInsertHandler']) {
            that.nativeElement.removeEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);
        }
        if (that.eventHandlers['itemRemoveHandler']) {
            that.nativeElement.removeEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);
        }
        if (that.eventHandlers['itemUpdateHandler']) {
            that.nativeElement.removeEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['progressChangeStartHandler']) {
            that.nativeElement.removeEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
        }
        if (that.eventHandlers['progressChangeEndHandler']) {
            that.nativeElement.removeEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
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
        if (that.eventHandlers['scrollLeftReachedHandler']) {
            that.nativeElement.removeEventListener('scrollLeftReached', that.eventHandlers['scrollLeftReachedHandler']);
        }
        if (that.eventHandlers['scrollRightReachedHandler']) {
            that.nativeElement.removeEventListener('scrollRightReached', that.eventHandlers['scrollRightReachedHandler']);
        }
    };
    GanttChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "adjustToNonworkingTime", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "autoSchedule", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "autoScheduleStrictMode", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "autoScrollStep", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "columnResize", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "columnResizeFeedback", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "dataExport", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "dayFormat", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "dateEnd", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "dateStart", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "disableAutoScroll", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "disableTaskDrag", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "disableTaskProgressChange", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "disableTaskResize", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "disableSelection", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "disableWindowEditor", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "durationUnit", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "filterRow", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "groupByResources", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "headerTemplate", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "hideTimelineHeaderDetails", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "hideResourcePanel", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "horizontalScrollBarVisibility", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "hourFormat", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "infiniteTimeline", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "infiniteTimelineStep", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "inverted", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "keyboardNavigation", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "max", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "min", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "monthFormat", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "nonworkingDays", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "nonworkingHours", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "popupWindowCustomizationFunction", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "progressLabelFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resources", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourceColumns", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourceFiltering", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourceGroupFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourcePanelHeaderTemplate", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourcePanelMin", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourcePanelSize", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourcePanelRefreshRate", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourceTimelineFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourceTimelineMode", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourceTimelineView", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "selectedTaskIds", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "selectedResourceIds", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "showProgressLabel", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "snapToNearest", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "sortMode", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "tasks", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "taskColumns", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "taskFiltering", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "taskPanelMin", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "taskPanelSize", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "timelineMin", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "treeMin", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "treeSize", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "timelineHeaderFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "verticalScrollBarVisibility", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "view", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "yearFormat", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "weekFormat", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onBeginUpdate", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onEndUpdate", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onConnectionStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onConnectionEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onColumnResize", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onClosing", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onCollapse", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onExpand", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onFilter", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onItemClick", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onItemInsert", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onItemRemove", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onItemUpdate", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onOpening", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onProgressChangeStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onProgressChangeEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onResizeStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onResizeEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onSort", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onScrollBottomReached", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onScrollTopReached", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onScrollLeftReached", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onScrollRightReached", void 0);
    GanttChartComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-gantt-chart, [smart-gantt-chart]'
        })
    ], GanttChartComponent);
    return GanttChartComponent;
}(BaseElement));
export { GanttChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ2FudHRjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9nYW50dGNoYXJ0LyIsInNvdXJjZXMiOlsic21hcnQuZ2FudHRjaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBeUMsK0NBQVc7SUFDbkQsNkJBQVksR0FBMkI7UUFBdkMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBNG9CbEM7OENBQ3NDO1FBQzVCLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7OENBQ3NDO1FBQzVCLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7OztVQUdFO1FBQ1EsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7Ozs7OztVQU1FO1FBQ1EscUJBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7OztVQUlFO1FBQ1EsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7Ozs7VUFNRTtRQUNRLG9CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7Ozs7VUFJRTtRQUNRLGVBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs4Q0FDc0M7UUFDNUIsYUFBTyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFD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QURDLEtBQUssRUFBRTt3RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7K0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzJEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzZEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtnRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzRFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21FQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtpRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3FEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7a0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs2REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7K0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTswRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7OERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtnRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzBFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MEVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dUVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs2RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21FQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7bUVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTswREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7a0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtnRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzBEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsyREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MkVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTswRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFPUztRQUFULE1BQU0sRUFBRTs4REFBK0Q7SUFJOUQ7UUFBVCxNQUFNLEVBQUU7NERBQTZEO0lBTTVEO1FBQVQsTUFBTSxFQUFFO2tFQUFtRTtJQVNsRTtRQUFULE1BQU0sRUFBRTtnRUFBaUU7SUFPaEU7UUFBVCxNQUFNLEVBQUU7eURBQTBEO0lBU3pEO1FBQVQsTUFBTSxFQUFFOytEQUFnRTtJQU8vRDtRQUFULE1BQU0sRUFBRTswREFBMkQ7SUFJMUQ7UUFBVCxNQUFNLEVBQUU7d0RBQXlEO0lBVXhEO1FBQVQsTUFBTSxFQUFFOzJEQUE0RDtJQVMzRDtRQUFULE1BQU0sRUFBRTs0REFBNkQ7SUFTNUQ7UUFBVCxNQUFNLEVBQUU7MERBQTJEO0lBVTFEO1FBQVQsTUFBTSxFQUFFO3lEQUEwRDtJQVF6RDtRQUFULE1BQU0sRUFBRTt5REFBMEQ7SUFRekQ7UUFBVCxNQUFNLEVBQUU7NERBQTZEO0lBTzVEO1FBQVQsTUFBTSxFQUFFOzZEQUE4RDtJQU83RDtRQUFULE1BQU0sRUFBRTs2REFBOEQ7SUFPN0Q7UUFBVCxNQUFNLEVBQUU7NkRBQThEO0lBTzdEO1FBQVQsTUFBTSxFQUFFOzBEQUEyRDtJQUkxRDtRQUFULE1BQU0sRUFBRTt1REFBd0Q7SUFPdkQ7UUFBVCxNQUFNLEVBQUU7c0VBQXVFO0lBT3RFO1FBQVQsTUFBTSxFQUFFO29FQUFxRTtJQVNwRTtRQUFULE1BQU0sRUFBRTs4REFBK0Q7SUFTOUQ7UUFBVCxNQUFNLEVBQUU7NERBQTZEO0lBVTVEO1FBQVQsTUFBTSxFQUFFO3VEQUF3RDtJQUl2RDtRQUFULE1BQU0sRUFBRTtzRUFBdUU7SUFJdEU7UUFBVCxNQUFNLEVBQUU7bUVBQW9FO0lBSW5FO1FBQVQsTUFBTSxFQUFFO29FQUFxRTtJQUlwRTtRQUFULE1BQU0sRUFBRTtxRUFBc0U7SUFsMUJuRSxtQkFBbUI7UUFKL0IsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLHdDQUF3QztTQUNsRCxDQUFDO09BRVcsbUJBQW1CLENBODNEL0I7SUFBRCwwQkFBQztDQUFBLEFBOTNERCxDQUF5QyxXQUFXLEdBODNEbkQ7U0E5M0RZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbnR0Q2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEdhbnR0Q2hhcnREYXRhRXhwb3J0SXRlbVR5cGUsIEdhbnR0RGF5Rm9ybWF0LCBEdXJhdGlvbiwgSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHksIEhvdXJGb3JtYXQsIE1vbnRoRm9ybWF0LCBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZU1vZGUsIEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lVmlldywgR2FudHRDaGFydFNvcnRNb2RlLCBHYW50dENoYXJ0VGFza1R5cGUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgR2FudHRDaGFydFZpZXcsIFllYXJGb3JtYXQsIFdlZWtGb3JtYXQsIEdhbnR0Q2hhcnREYXRhRXhwb3J0LCBHYW50dENoYXJ0UmVzb3VyY2UsIEdhbnR0Q2hhcnRSZXNvdXJjZUNvbHVtbiwgR2FudHRDaGFydFRhc2ssIEdhbnR0Q2hhcnRUYXNrQ29sdW1uLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgR2FudHRDaGFydERhdGFFeHBvcnRJdGVtVHlwZSwgR2FudHREYXlGb3JtYXQsIER1cmF0aW9uLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgSG91ckZvcm1hdCwgTW9udGhGb3JtYXQsIEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSwgR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVWaWV3LCBHYW50dENoYXJ0U29ydE1vZGUsIEdhbnR0Q2hhcnRUYXNrVHlwZSwgVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBHYW50dENoYXJ0VmlldywgWWVhckZvcm1hdCwgV2Vla0Zvcm1hdCwgR2FudHRDaGFydERhdGFFeHBvcnQsIEdhbnR0Q2hhcnRSZXNvdXJjZSwgR2FudHRDaGFydFJlc291cmNlQ29sdW1uLCBHYW50dENoYXJ0VGFzaywgR2FudHRDaGFydFRhc2tDb2x1bW4sIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEdhbnR0Q2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1nYW50dC1jaGFydCwgW3NtYXJ0LWdhbnR0LWNoYXJ0XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBHYW50dENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEdhbnR0Q2hhcnQ+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBHYW50dENoYXJ0O1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBHYW50dENoYXJ0O1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxHYW50dENoYXJ0PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWdhbnR0LWNoYXJ0Jyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgbm9ud29ya2luZ0RheXMvbm9ud29ya2luZ0hvdXJzIGFyZSB0YWtlbiBpbnRvIGNvbnNpZHVyYXRpb24gd2hlbiBkZXRlcm1pbmluZyB0aGUgZGF0ZUVuZCBvZiB0aGUgdGFza3MuIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBlbmFibGVkIHRoZSBkYXRlRW5kIG9mIHRoZSB0YXNrcyBpcyBjYWxjdWxhdGVkIHRvIGluY2x1ZGUgb25seSB0aGUgYWN0dWFsIHdvcmtpbmcgdGltZS4gQnkgZGVmYXVsdCBpdCdzIGRpc2FibGVkIGFuZCBvbmx5IGNhbGVuZGFyIHRpbWUgaXMgdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGFkanVzdFRvTm9ud29ya2luZ1RpbWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGp1c3RUb05vbndvcmtpbmdUaW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGp1c3RUb05vbndvcmtpbmdUaW1lKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkanVzdFRvTm9ud29ya2luZ1RpbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVjYWxjdWxhdGVzIHRoZSB0YXNrcyB0aGF0IGFyZSBjb25uZWN0ZWQgYW5kIHJlLXNjaGVkdWxlcyB0aGVtIGFjY29yZGluZyB0byB0aGVpciBjb25uZWN0aW9ucy4gSWYgbm8gY29ubmVjdGlvbnMgYXJlIHByZXNlbnQsIGF1dG9TY2hlZHVsaW5nIGhhcyBubyBlZmZlY3QgdW50aWwgYSBjb25uZWN0aW9uIGlzIGNyZWF0ZWQuIENvbm5lY3Rpb24gdHlwZXMgZGV0ZXJtaW5lcyB0aGUgc3RhcnQvZW5kIGRhdGUgbGltaXRzIG9mIHRoZSB0YXNrcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TY2hlZHVsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY2hlZHVsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NjaGVkdWxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY2hlZHVsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZmZlY3RzIHRoZSB0YXNrcyBvbmx5IHdoZW4gYXV0b1NjaGVkdWxlIGlzIGVuYWJsZWQuIFdoZW4gc2V0IHRvIHRydWUsIHRoZSB0YXNrcyBhcmUgc3RyaWN0bHkgc2NoZWR1bGVkICggYWNjb3JkaW5nIHRvIHRoZWlyIGNvbm5lY3Rpb25zICkgYW5kIGRyYWdnaW5nIGlzIG5vdCBhbGxvd2VkLiAgVXNlcnMgY2FuIHNldCBsYWcgdG8gc3BlY2lmaWMgY29ubmVjdGlvbnMgdG8gZGV0ZXJtaW5lIGEgZGVsYXkgb2Ygb3ZlcmxhcCBvZiBiZXR3ZWVuIHRoZSB0d28gdGFza3MgKCBpbnRlcnZhbCBvZiB0aW1lIGluIG1pbGlzZWNvbmRzICkuIExhZyBvbmUgb2YgdGhlIGF0dHJpYnV0ZXMgb2YgYSB0YXNrIGNvbm5lY3Rpb24gYW5kIHNob3VsZCBiZSBzZXQgaW4gdGhlIGRhdGFTb3VyY2Ugd2hlcmUgdGhlIHRhc2sgY29ubmVjdGlvbnMgYXJlIGRlZmluZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2NoZWR1bGVTdHJpY3RNb2RlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2NoZWR1bGVTdHJpY3RNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNjcm9sbCBzcGVlZCB3aGVuIGRyYWdnaW5nIHdoZW4gYXV0b1Njcm9sbCBwcm9wZXJ0eSBpcyBzZXQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1Njcm9sbFN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY3JvbGxTdGVwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2Nyb2xsU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY3JvbGxTdGVwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgVGFibGUgY29sdW1ucyBhcmUgcmVzaXphYmxlIG9yIG5vdC4gV2hlbiBlbmFibGVkIGl0IGlzIHBvc3NpYmxlIHRvIHJlc2l6ZSB0aGUgY29sdW1ucyBmcm9tIHRoZSBoZWFkZXIgY2VsbHMgb2YgdGhlIFRhYmxlIGluIGJvdGggVGFzayBhbmQgUmVzb3VyY2UgdGltZWxpbmVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uUmVzaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5SZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgcmVzaXplIGZlZWRiYWNrIGlzIHVzZWQgZHVyaW5nIGNvbHVtbiByZXNpemluZy4gVGhpcyBwcm9wZXJ0eSBpcyBhcHBsaWNhYmxlIG9ubHkgd2hlbiBjb2x1bW5SZXNpemUgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblJlc2l6ZUZlZWRiYWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplRmVlZGJhY2sgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblJlc2l6ZUZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblJlc2l6ZUZlZWRiYWNrID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIEdhbnR0Q2hhcnQncyBEYXRhIEV4cG9ydCBvcHRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YUV4cG9ydCgpOiBHYW50dENoYXJ0RGF0YUV4cG9ydCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhRXhwb3J0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhRXhwb3J0KHZhbHVlOiBHYW50dENoYXJ0RGF0YUV4cG9ydCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhRXhwb3J0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRhc2tzIHRoYXQgd2lsbCBiZSBsb2FkZWQgaW5zaWRlIHRoZSBUaW1lbGluZS4gRWFjaCBpdGVtIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiBsYWJlbCAtIHRoZSBsYWJlbCBvZiB0aGUgVGFza2RhdGVTdGFydCAtIHRoZSBzdGFydGluZyBkYXRlIG9mIHRoZSBUYXNrLiBTaG91bGQgYmUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgdmFsaWQgZGF0ZS5kYXRlRW5kIC0gdGhlIGVuZGluZyBkYXRlIG9mIHRoZSBUYXNrLiBTaG91bGQgYmUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgdmFsaWQgZGF0ZS50eXBlIC0gZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgdGFzay4gV2hldGhlciBpdCdzIGEgc2ltcGxlIHRhc2ssIGEgcHJvamVjdCBvciBhIG1pbGVzdG9uZS4gRWFjaCB0eXBlIG9mIHRhc2sgaGFzIHNwZWNpZmljIGJlaGF2aW9yIGFuZCBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMuLiAgQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiBjb25uZWN0aW9ucyAtIGFuIGFycmF5IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHRhc2tzLiBFYWNoIGNvbm5lY3Rpb24gKG9iamVjdCkgc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIDogdGFyZ2V0IC0gYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBpbmRleCBvZiB0aGUgdGFyZ2V0IHRhc2t0eXBlIC0gYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG9mIHRoZSBjb25uZWN0aW9uLiBGb3VyIHR5cGVzIG9mIGNvbm5lY3Rpb25zIGFyZSBhdmFpbGFibGU6IDAgLSBpcyBhIGNvbm5lY3Rpb24gb2YgdHlwZSBTdGFydC10by1TdGFydCAxIC0gaXMgYSBjb25uZWN0aW9uIG9mIHR5cGUgRW5kLXRvLVN0YXJ0IDIgLSBpcyBhIGNvbm5lY3Rpb24gb2YgdHlwZSBFbmQtdG8tRW5kMyAtIGlzIGEgY29ubmVjdGlvbiBvZiB0eXBlIFN0YXJ0LXRvLUVuZCBsYWcgLSBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIGRlbGF5IGJldHdlZW4gdHdvIGNvbm5lY3RlZCBhdXRvIHNjaGVkdWxlZCB0YXNrcy4gTGFnIHByb3BlcnR5IGNhbiBiZSBhIHBvc2l0aXZlIG9yIGEgbmVnYXRpdmUgbnVtYmVyLiBXaGVuIG5lZ2F0aXZlIGl0IGRldGVybWluZXMgdGhlIG92ZXJsYXAgYmV0d2VlbiB0d28gY29ubmVjdGVkIHRhc2tzLiBUaGlzIHByb3BlcnR5IGlzIHVzZWQgaW4gY29uanVjdGlvbiB3aXRoIGF1dG9TY2hlZHVsZS5kdXJhdGlvbiAtIGRldGVybWluZXMgdGhlIGR1cmF0aW9uIG9mIGEgVGFzayBpbiBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyBvciBtaWxpc2Vjb25kcy4gVmVyeSB1c2VmdWxsIHdoZW4gdGhlIHRoZSBkYXRlRW5kIG9mIGEgVGFzayBpcyB1bmtub3duLiBUaGUgZHVyYXRpb24gYWx3YXlzIHNob3dzIHRoZSBjYWxlbmRhciB0aW1lIHdoZXRoZXIgaXQgaXMgaW4gZGF5cy9ob3VycyBvciBvdGhlci5taW5EdXJhdGlvbiAtIHNldHMgdGhlIG1pbmltdW0gZHVyYXRpb24gb2YgYSB0YXNrLiBtYXhEdXJhdGlvbiAtIHNldHMgdGhlIG1heGltdW0gZHVyYXRpb24gb2YgYSB0YXNrLm1pbkRhdGVTdGFydCAtIGRldGVybWluZXMgdGhlIG1pbmludW0gZGF0ZSB0aGF0IGEgdGFzayBjYW4gc3RhcnQgZnJvbS4gTXVzdCBiZSBpZiB0eXBlIHN0cmluZyBhbmQgc2hvdWxkIHJlcHJlc2VudCBhIHZhbGlkIGRhdGUubWF4RGF0ZVN0YXJ0IC0gZGV0ZXJtaW5lcyB0aGUgbWF4aW11bSBkYXRlIHRoYXQgYSB0YXNrIGNhbiBzdGFydCBmcm9tLiBNdXN0IGJlIGlmIHR5cGUgc3RyaW5nIGFuZCBzaG91bGQgcmVwcmVzZW50IGEgdmFsaWQgZGF0ZS5taW5EYXRlRW5kIC0gZGV0ZXJtaW5lcyB0aGUgbWluaW51bSBkYXRlIHRoYXQgYSB0YXNrIGNhbiBlbmQuIE11c3QgYmUgaWYgdHlwZSBzdHJpbmcgYW5kIHNob3VsZCByZXByZXNlbnQgYSB2YWxpZCBkYXRlLm1heERhdGVFbmQgLSBkZXRlcm1pbmVzIHRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHRhc2sgY2FuIGVuZC4gTXVzdCBiZSBpZiB0eXBlIHN0cmluZyBhbmQgc2hvdWxkIHJlcHJlc2VudCBhIHZhbGlkIGRhdGUucHJvZ3Jlc3MgLSBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIHByb2dyZXNzIG9mIGEgdGFzayAoIGZyb20gMCB0byAxMDAgKS5kaXNhYmxlRHJhZyAtIGEgYm9vbGVhbiBwcm9wZXJ0eSB0aGF0IGRpc2FibGVzIHRoZSBkcmFnZ2luZyBvZiBhIHRhc2sgd2hlbiBzZXQgdG8gdHJ1ZS5kaXNhYmxlUmVzaXplIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgZGlzYWJsZXMgdGhlIHJlc2l6aW5nIG9mIGEgdGFzayB3aGVuIHNldCB0byB0cnVlLmRyYWdQcm9qZWN0IC0gYSBib29sZWFuIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2hvbGUgcHJvamVjdCAoYWxvbmcgd2l0aCB0aGUgdGFza3MpIGNhbiBiZSBkcmFnZ2VkIHdoaWxlIGRyYWdnaW5nIHRoZSBwcm9qZWN0IHRhc2suIEFwcGxpY2FsYmUgb25seSB0byBQcm9qZWN0cy5zeW5jaHJvbml6ZWQgLSBhIGJvb2xlYW4gdGhhdCBpZiBzZXQgdGhlIHByb2plY3QgdGFzaydzIHN0YXJ0L2VuZCBkYXRlcyBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSB0YXNrcy4gQnkgZGVmYXVsdCBhIHN5bmNocm9uaXplZCBwcm9qZWN0IHRhc2sgY2FuJ3QgYmUgZHJhZ2dlZCBhbG9uZS4gQXBwbGljYWJsZSBvbmx5IHRvIFByb2plY3QgdGFza3MuZXhwYW5kZWQgLSBhIGJvb2xlYW4gdGhhdCBkZXRlcm1pbmVzIGlmIGEgcHJvamVjdCBpcyBleHBhbmRlZCBvciBub3QuIElmIG5vdCBhbGwgb2YgaXQncyBzdWItdGFza3MgYXJlIG5vdCB2aXNpYmxlLiBPbmx5IHRoZSBwcm9qZWN0IHRhc2sgaXRzZWxmIGlzIHZpc2libGUuIEJ5IGRlZmF1bHQgbm8gcHJvamVjdHMgYXJlIGV4cGFuZGVkLiBBcHBsaWNhYmxlIG9ubHkgdG8gcHJvamVjdCB0YXNrcy4uICBHYW50dENoYXJ0IGFsc28gYWNjZXB0cyBhIERhdGFBZGFwdGVyIGluc3RhbmNlIGFzIGRhdGFTb3VyY2UuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBkYXRhQWRhcHRlciBoZXJlIC0gaHR0cHM6Ly93d3cuaHRtbGVsZW1lbnRzLmNvbS9kb2NzL2RhdGEtYWRhcHRlci8uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluIHRoZSB0aW1lbGluZSBoZWFkZXIgd2hlbiB0aGV5IHJlcHJlc2VudCBkYXlzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF5Rm9ybWF0KCk6IEdhbnR0RGF5Rm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheUZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF5Rm9ybWF0KHZhbHVlOiBHYW50dERheUZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXlGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBhIHNwZWNpZmljIGVuZCBkYXRlIGZvciB0aGUgVGltZWxpbmUuIFVzZWZ1bGwgd2hlbiB0aGUgdXNlciB3YW50cyBjdXN0b20gZW5kaW5nIGRhdGUgZm9yIHRoZSBUaW1lbGluZS4gSWYgbm8gZGF0ZSBpcyBzZXQgdGhlIGVuZCBkYXRlIG9mIHRoZSB0aW1lbGluZSBpcyBhdXRvbWF0aWNhbGx5IGRldGVybWluZWQgZnJvbSB0aGUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlRW5kKCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZUVuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0ZUVuZCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlRW5kID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgYSBzcGVjaWZpYyBzdGFydGluZyBkYXRlIGZvciB0aGUgVGltZWxpbmUuIFVzZWZ1bGwgd2hlbiB0aGUgdXNlciB3YW50cyBjdXN0b20gc3RhcnRpbmcgZGF0ZSBmb3IgdGhlIFRpbWVsaW5lLiBJZiBubyBkYXRlIGlzIHNldCB0aGUgc3RhcnQgZGF0ZSBvZiB0aGUgdGltZWxpbmUgaXMgYXV0b21hdGljYWxseSBkZXRlcm1pbmVkIGZyb20gdGhlIHRhc2tzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0ZVN0YXJ0KCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZVN0YXJ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRlU3RhcnQodmFsdWU6IHN0cmluZyB8IERhdGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZVN0YXJ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBhdXRvIHNjcm9sbGluZyB3aGlsZSBkcmFnZ2luZy9yZXNpemluZyBhIHRhc2sgYmFyIGluc2lkZSB0aGUgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlQXV0b1Njcm9sbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVBdXRvU2Nyb2xsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlQXV0b1Njcm9sbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQXV0b1Njcm9sbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBkcmFnZ2luZyBvZiB0YXNrcyBpbiB0aGUgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlVGFza0RyYWcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza0RyYWcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVUYXNrRHJhZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza0RyYWcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGFzayBwcm9ncmVzcyBjaGFuZ2luZyBpbiB0aGUgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlVGFza1Byb2dyZXNzQ2hhbmdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRhc2tQcm9ncmVzc0NoYW5nZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVRhc2tQcm9ncmVzc0NoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza1Byb2dyZXNzQ2hhbmdlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHJlc2l6aW5nIG9mIHRhc2tzIGluIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVUYXNrUmVzaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRhc2tSZXNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVUYXNrUmVzaXplKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrUmVzaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBzZWxlY3Rpb24gaW5zaWRlIHRoZSBHYW50dENoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVNlbGVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWxlY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVTZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgd2luZG93IGVkaXRvciBmb3IgdGhlIEdhbnR0Q2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlV2luZG93RWRpdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVdpbmRvd0VkaXRvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVdpbmRvd0VkaXRvcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlV2luZG93RWRpdG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaW4gd2hhdCB1bml0IGlzIHRhc2sgZHVyYXRpb24gcHJvcGVydHkgbWVhc3VyZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkdXJhdGlvblVuaXQoKTogRHVyYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHVyYXRpb25Vbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkdXJhdGlvblVuaXQodmFsdWU6IER1cmF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmR1cmF0aW9uVW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBkZWRpY2F0ZWQgZmlsdGVyIHJvdyBpcyB1c2VkIGZvciBUYWJsZSBmaWx0ZXJpbmcgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBmaWx0ZXIgaW5wdXQuIFRoaXMgcHJvcGVydHkgaGFzIG5vIGVmZmVjdCBpZiBmaWx0ZXJpbmcgaXMgbm90IGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJSb3coKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJSb3cgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlclJvdyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJSb3cgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR3JvdXBzIHRoZSB0YXNrcyBpbnNpZGUgdGhlIFRhc2sgdGltZWxpbmUgYWNjb3JkaW5nIHRvIHRoZSByZXNvdXJjZXMgdGhleSBhcmUgYXNzaWduZWQgdG8uIFVuYXNzaWduZWQgdGFza3MgYXJlIHBsYWNlZCBpbiBhIGRlZmF1bHQgZ3JvdXAgbGFiZWxlZCAnVW5hc3NpZ25lZCcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cEJ5UmVzb3VyY2VzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBCeVJlc291cmNlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBCeVJlc291cmNlcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEJ5UmVzb3VyY2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjcmVhdGUgYSBjdXN0b20gaGVhZGVyIGNvbnRlbnQgZm9yIHRoZSBUYXNrIFBhbmVsLiBUaGUgYXR0cmlidXRlIGFjY2VwdHMgYW4gSFRNTFRlbXBsYXRlIGVsZW1lbnQsIGl0J3MgaWQgb3IgYSBmdW5jdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBCeSBkZWZhdWx0IHRoZSBUaW1lbGluZSBoYXMgYSB0d28gbGV2ZWwgaGVhZGVyIC0gdGltZWxpbmUgZGV0YWlscyBhbmQgdGltZWxpbmUgaGVhZGVyLiBUaGlzIHByb3BlcnR5IGhpZGVzIHRoZSBoZWFkZXIgZGV0YWlscyBjb250YWluZXIoIHRoZSB0b3AgY29udGFpbmVyICkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlVGltZWxpbmVIZWFkZXJEZXRhaWxzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRpbWVsaW5lSGVhZGVyRGV0YWlscyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVRpbWVsaW5lSGVhZGVyRGV0YWlscyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVGltZWxpbmVIZWFkZXJEZXRhaWxzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIHRoZSBSZXNvdXJjZSBwYW5lbCByZWdhcmRsZXNzIG9mIHRoZSByZXNvdXJjZXMgYXZhaWxhYmlsaXR5IEJ5IGRlZmF1bHQgdGhlIFJlc291cmNlIHBhbmVsIGlzIHZpc2libGUgaWYgcmVzb3VyY2VzIGFyZSBhZGRlZCB0byB0aGUgR2FudHRDaGFydC4gVGhpcyBwcm9wZXJ0eSBhbGxvd3MgdG8gaGlkZSB0aGUgUmVzb3VyY2UgcGFuZWwgcGVybWFuZW50bHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlUmVzb3VyY2VQYW5lbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVSZXNvdXJjZVBhbmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlUmVzb3VyY2VQYW5lbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlUmVzb3VyY2VQYW5lbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdlYXRoZXIgb3Igbm90IGhvcml6b250YWwgc2Nyb2xsYmFyIGlzIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluc2lkZSB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgaG91cnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRm9ybWF0KCk6IEhvdXJGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG91ckZvcm1hdCh2YWx1ZTogSG91ckZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gZW5hYmxlZCwgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGhvcml6b3RhbCB0aW1lbGluZSwgdHJpZ2dlcnMgdGhlIGNyZWF0aW9uIG9mIGFkZGl0aW9uYWwgdG8gZXh0ZW5kIHRoZSB0aW1lIHJhbmdlLiBUaGUgbnVtYmVyIG9mIGNlbGxzIHRvIGJlIGFkZGVkIHdoZW4gdGhlIHNjcm9sbGJhciByZWFjaGVzIHRoZSBlbmQgcG9zaXRpb24gaXMgZGV0ZXJtaW5lZCBieSB0aGUgaW5maW5pdGVUaW1lbGluZVN0ZXAuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbmZpbml0ZVRpbWVsaW5lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5maW5pdGVUaW1lbGluZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW5maW5pdGVUaW1lbGluZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmZpbml0ZVRpbWVsaW5lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG51bWJlciBvZiBjZWxscyB0byBiZSBhZGRlZCB3aGVuIHRoZSBob3Jpem9udGFsIHNjcm9sbCBiYXIgb2YgdGhlIFRpbWVsaW5lIHJlYWNoZXMgaXQncyBlbmQgcG9zaXRpb24gd2hlbiBpbmZpbml0ZVRpbWVsaW5lIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbmZpbml0ZVRpbWVsaW5lU3RlcCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5maW5pdGVUaW1lbGluZVN0ZXAgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGluZmluaXRlVGltZWxpbmVTdGVwKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5maW5pdGVUaW1lbGluZVN0ZXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gV2hlbiBzZXQgdGhlIFRpbWVsaW5lIGlzIHBvc2l0aW9uZWQgb24gdGhlIGxlZnQgc2lkZSB3aGlsZSB0aGUgVGFzayBUcmVlIGlzIHBvc2l0aW9uZWQgb24gdGhlIHJpZ2h0LiBCeSBkZWZhdWx0IGl0J3MgdmljZSB2ZXJzYS4gKi9cblx0QElucHV0KClcblx0Z2V0IGludmVydGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW52ZXJ0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGludmVydGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmludmVydGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBrZXlib2FyZCBuYXZpZ2F0aW9uIGluc2lkZSB0aGUgVGFibGUgaXMgZW5hYmxlZCBvciBub3QuIEtleWJvYXJkIG5hdmlnYXRpb24gYWZmZWN0cyBib3RoIFRhc2sgYW5kIFJlc291cmNlIFRhYmxlcy4gSXQgYWxsb3dzIHRvIG5hdmlnYXRlIGJldHdlZW4gaXRlbXMuIHRoZSBmb2xsb3dpbmcga2V5Ym9hcmQgc2hvcnRjdXQga2V5cyBhcmUgYXZhaWxhYmxlIGZvciBmb2N1c2VkIHRhc2tzIGluc2lkZSB0aGUgVGFzayBUYWJsZTogRW50ZXIgLSBvcGVucyB0aGUgV2luZG93IGVkaXRvciB0byBlZGl0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCB0YXNrLkRlbGV0ZSAtIG9wZW5zIGEgY29uZmlybWF0aW9uIHdpbmRvdyByZWdhcmRpbmcgdGhlIGRlbGV0aW9uIG9mIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB0YXNrLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQga2V5Ym9hcmROYXZpZ2F0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQua2V5Ym9hcmROYXZpZ2F0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBrZXlib2FyZE5hdmlnYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQua2V5Ym9hcmROYXZpZ2F0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBsYW5ndWFnZSBvZiB0aGUgR2FudHRDaGFydC4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGV0bWluZXMgdGhlIG1heGltdW0gcG9zc2libGUgZGF0ZSBvZiB0aGUgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXgoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1heCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWluaW11bSBwb3NzaWJsZSBkYXRlIG9mIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbigpOiBzdHJpbmcgfCBEYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWluKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXRlcyB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgbW9udGhzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9udGhGb3JtYXQoKTogTW9udGhGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1vbnRoRm9ybWF0KHZhbHVlOiBNb250aEZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb250aEZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBub253b3JraW5nIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwIHRvIDYsIHdoZXJlIDAgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBhbmQgNiBpcyB0aGUgbGFzdCBkYXkuIE5vbndvcmtpbmcgZGF5cyB3aWxsIGJlIGRpc3BsYXllZCB3aXRoIGNvbG9yZWQgY2VsbHMgaW5zaWRlIHRoZSB0aW1lbGluZSBhbmQgd2lsbCBub3QgYWZmZWN0IHRoZSBkYXRlRW5kIG9mIHRoZSB0YXNrcyB1bmxlc3MgdGhlIGFkanVzdFRvTm9ud29ya2luZ1RpbWUgcHJvcGVydHkgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG5vbndvcmtpbmdEYXlzKCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdEYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub253b3JraW5nRGF5cyh2YWx1ZTogbnVtYmVyW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBob3VycyBvZiBhIGRheS4gSG91cnMgYXJlIHJlcHJlc2VudGVkIGFzIG51bWJlcnMgaW5zaWRlIGFuIGFycmF5IChlLmcuIFsxLDIsM10gLSBtZWFucyAxLDIgYW5kIDMgQU0pIG9yIG51bWJlciByYW5nZXMgcmVwcmVzZW50ZWQgYXMgbmVzdGVkIGFycmF5cyhlLmcuIFtbMCw2XV0gLSBtZWFucyBmcm9tIDAgdG8gNiBBTSkuIEluIHRoZSB0aW1saW5lIHRoZSBjZWxscyB0aGF0IHJlcHJlc2VudCBub253b3JraW5nIGRheXMgYXJlIGNvbG9yZWQgZGlmZmVyZW50bHkgZnJvbSB0aGUgcmVzdCBhbmQgd2lsbCBub3QgYWZmZWN0IHRoZSBkYXRlRW5kIG9mIHRoZSB0YXNrcyB1bmxlc3MgdGhlIGFkanVzdFRvTm9ud29ya2luZ1RpbWUgcHJvcGVydHkgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG5vbndvcmtpbmdIb3VycygpOiBudW1iZXJbXSB8IG51bWJlcltdW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0hvdXJzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub253b3JraW5nSG91cnModmFsdWU6IG51bWJlcltdIHwgbnVtYmVyW11bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ub253b3JraW5nSG91cnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbXBsZXRseSBjdXN0b21pemUgdGhlIHBvcHVwIFdpbmRvdyB0aGF0IGlzIHVzZWQgdG8gaW50ZXJhY3Qgd2lkdGggdGFza3MgYnkgY2hhbmdpbmcgdGhlaXIgcHJvcGVydGllcy4gVGhlIGZ1bmN0aW9uIGFzIHRocmVlIGFyZ3VtZW50czogdGFyZ2V0IC0gdGhlIHRhcmdldCBwb3B1cCBXaW5kb3cgdGhhdCBpcyBhYm91dCB0byBiZSBvcGVuZWQudHlwZSAtIHRoZSB0eXBlIG9mIHRoZSB3aW5kb3cuIFRoZSB0eXBlIGRldGVybWluZXMgdGhlIHB1cnBvc2Ugb2YgdGhlIHdpbmRvdy4gVGhyZWUgcG9zc2libGUgdmFsdWVzOiAndGFzaycgKHRhc2sgZWRpdGluZyksICdjb25maXJtJyAoIGNvbmZpcm1hdGlvbiB3aW5kb3cpLCAnY29ubmVjdGlvbicgKHVzZWQgd2hlbiBkZWxldGluZyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0YXNrcykuIHRhc2tJbmRleCAtIHRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGlzIGJlaW5nIGVkaXRlZC4gSXQgd2lsbCBiZSB1bmRlZmluZWQgaWYgdGhlIHR5cGUgb2YgdGhlIHdpbmRvdyBpcyBub3QgJ3Rhc2snLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcG9wdXBXaW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBvcHVwV2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwb3B1cFdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBvcHVwV2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZm9ybWF0IGZ1bmN0aW9uIGZvciB0aGUgVGltZWxpbmUgdGFzayBwcm9ncmVzcyBsYWJlbC4gVGhlIGV4cGVjdGVkIHJlc3VsdCBmcm9tIHRoZSBmdW5jdGlvbiBpcyBhIHN0cmluZy4gVGhlIGxhYmVsIGlzIGhpZGRlbiBieSBkZWZhdWx0IGNhbiBiZSBzaG93biB3aXRoIHRoZSBzaG93UHJvZ3Jlc3NMYWJlbCBwcm9wZXJ0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IHByb2dyZXNzTGFiZWxGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJvZ3Jlc3NMYWJlbEZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwcm9ncmVzc0xhYmVsRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wcm9ncmVzc0xhYmVsRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGEgZmxhdCBzdHJ1Y3R1cmUgYXMgYW4gYXJyYXkgb2YgYWxsIHJlc291cmNlcyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZXMoKTogR2FudHRDaGFydFJlc291cmNlW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZXModmFsdWU6IEdhbnR0Q2hhcnRSZXNvdXJjZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcmVtaW5lcyB0aGUgY29sdW1ucyB0aGF0IHdpbGwgYmUgdmlzaWJsZSBpbiB0aGUgUmVzb3VyY2UgVHJlZS4gRWFjaCBlbnRyeSBpbiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBtdXN0IGJlIG9mIHR5cGUgT2JqZWN0LiAgSXQgc2hvdWxkIGNvbnRhaW4gdGhlIGxhYmVsIGFuZCB2YWx1ZSBrZXlzLiBUaGUgdmFsdWUgb2YgbGFiZWwgZGV0ZXJtaW5lcyB0aGUgY29sdW1uIGhlYWRlciBsYWJlbCBpbnNpZGUgdGhlIFRhc2sgVHJlZS4gVGhlIHZhbHVlIG9mIHZhbHVlIGRldGVybWluZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNlbGxzIGluIHRoZSBjb2x1bW4uIEJ5IGRlZmF1bHQsIG9uZSBjb2x1bW4gd2l0aCBhbGwgcmVzb3VyY2UgbGFiZWxzIGlzIHZpc2libGUuICBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IGZvcm1hdEZ1bmN0aW9uIC0gYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgZWFjaCByZWNvcmQgaW4gdGhlIGNvbHVtbi4gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50cyAtIHRoZSBhY3R1YWwgbGFiZWwgYXMgc3RyaW5nIHRoYXQgaXMgZ29pbmcgdG8gYmUgaW5zZXJ0ZWQgYW5kIHRoZSBpbmRleCBvZiB0aGUgcmVzb3VyY2UuIFRoZSBmdW5jdGlvbiBtdXN0IHJldHVybiBhIHN0cmluZyBhcyB0aGUgbmV3IGNvbnRlbnQuIG1pbiAtIGNvbnRyb2xzIHRoZSBtaW4gc2l6ZSBvZiB0aGUgY29sdW1uIG1heCAtIGNvbnRyb2xzIHRoZSBtYXggc2l6ZSBvZiB0aGUgY29sdW1uc2l6ZSAtIGNvbnRyb2xzIHRoZSBhY3R1YWwgc2l6ZSBvZiB0aGUgY29sdW1uICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZUNvbHVtbnMoKTogR2FudHRDaGFydFJlc291cmNlQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VDb2x1bW5zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZUNvbHVtbnModmFsdWU6IEdhbnR0Q2hhcnRSZXNvdXJjZUNvbHVtbltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlQ29sdW1ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFJlc291cmNlIFRhYmxlIGlzIGZpbHRlcmFibGUgb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZUZpbHRlcmluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VGaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VGaWx0ZXJpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmb3JtYXQgZnVuY3Rpb24gdGhhdCBhbGxvd3MgdG8gcmUtZm9ybWF0IHRoZSBncm91cCByb3cgbGFiZWxzIHdoZW4gZ3JvdXBCeVJlc291cmNlcyBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VHcm91cEZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZUdyb3VwRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlR3JvdXBGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlR3JvdXBGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3JlYXRlIGEgY3VzdG9tIGhlYWRlciBjb250ZW50IGZvciB0aGUgUmVzb3VyY2UgUGFuZWwuIFRoZSBhdHRyaWJ1dGUgYWNjZXB0cyBhbiBIVE1MVGVtcGxhdGUgZWxlbWVudCwgaXQncyBpZCBvciBhIGZ1bmN0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VQYW5lbEhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsSGVhZGVyVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlUGFuZWxIZWFkZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxIZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW4gc2l6ZSBvZiB0aGUgUmVzb3VyY2UgUGFuZWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVBhbmVsTWluKCk6IG51bWJlciB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsTWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVBhbmVsTWluKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbE1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzaXplIG9mIHRoZSBSZXNvdXJjZSBQYW5lbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlUGFuZWxTaXplKCk6IG51bWJlciB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsU2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VQYW5lbFNpemUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsU2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZWZyZXNoIHJhdGUgb2YgdGhlIFJlc291cmNlIFBhbmVsIHdoZW4gZHJhZ2dpbmcvcmVzaXppbmcvcHJvZ3Jlc3MgY2hhbmdpbmcgYSBUYXNrIGZyb20gdGhlIFRpbWVsaW5lLiBUaGlzIHByb3BlcnR5IGFsbG93cyB0byBjdXN0b21pemUgdGhlIGludGVydmFsIGJldHdlZW4gcmVzb3VyY2UgVHJlZS9UaW1lbGluZSByZWZyZXNoZXMuIEJ5IGRlZmF1bHQgdGhleSByZWZyZXNoIGltbWVkaWF0ZWx5IGFmdGVyIGEgY2hhbmdlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VQYW5lbFJlZnJlc2hSYXRlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsUmVmcmVzaFJhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlUGFuZWxSZWZyZXNoUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxSZWZyZXNoUmF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSByZXNvdXJjZSBUaW1lbGluZSBjZWxscy4gVGhlIGNhbGxiYWNrIGFjY2VwdHMgdGhyZWUgYXJndW1lbnRzOiB0YXNrSW5kZXhlcyAtIGFuIGFycmF5IG9mIHRhc2sgaW5kZXhlcyB0aGF0IGFyZSBhc3NpZ25lZCB0byB0aGUgcmVzb3VyY2UgZm9yIHRoZSBjdXJyZW50IGNlbGwucmVzb3VyY2VJbmRleCAtIHRoZSBpbmRleCBvZiB0aGUgcmVzb3VyY2UuY2VsbERhdGUgLSB0aGUgZGF0ZSBvZiB0aGUgY3VycmVudCBjZWxsLiBUaGlzIHByb3BlcnR5IGlzIHVzZWQgd2hlbiByZXNvdXJjZVRpbWVsaW5lVmlldyBpcyBzZXQgdG8gY3VzdG9tLiBEZXBlbmRpbmcgb24gdGhlIHJlc291cmNlVGltZWxpbmVNb2RlLCBpdCBzaG91bGQgcmV0dXJuOiBzdHJpbmcgLSB3aGVuIHRoZSByZXNvdXJjZVRpbWVsaW5lTW9kZSBpcyBzZXQgdG8gJ2RpYWdyYW0nLm9iamVjdCAtIHdoZW4gdGhlIHJlc291cmNlVGltZWxpbmVNb2RlIGlzIHNldCB0byAnaGlzdG9ncmFtJy4gVGhlIG9iamVjdCBzaG91bGQgaGF2ZSB0d28gYXR0cmlidXRlczogY2FwYWNpdHkgYW5kIG1heENhcGFjaXR5LCBpbiBvcmRlciB0byBiZSB2aXN1YWxpemVkIGFzIGEgaGlzdG9ncmFtLi4gQW5vdGhlciB1c2FnZSBvZiB0aGlzIGNhbGxiYWNrIGlzIHRvIGN1c3RvbWl6ZSB0aGUgdGltZWxpbmUgcmVzb3VyY2UgcmVwcmVzZW50YXRpb24gY29tcGxldGVseSBpZiByZXNvdXJjZVRpbWVsaW5lTW9kZSBpcyBzZXQgdG8gY3VzdG9tLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VUaW1lbGluZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlVGltZWxpbmVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlVGltZWxpbmVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGhvdyB0aGUgY2FwYWNpdHkgb2YgdGhlIHJlc291cmNlcyB3aWxsIGJlIHZpc3VhbGl6ZWQgaW5zaWRlIHRoZSByZXNvdXJjZSB0aW1lbGluZS4gQnkgZGVmYXVsdCwgdGhlIGNhcGFjaXR5IGlzIG1lYXN1cmVkIGluIGhvdXJzIGRlcGVuZGluZyBvbiB0aGUgdmlldyBwcm9wZXJ0eSBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlVGltZWxpbmVNb2RlKCk6IEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VUaW1lbGluZU1vZGUodmFsdWU6IEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGhvdyB0aGUgcmVzb3VyY2VzIHdpbGwgYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgcmVzb3VyY2UgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVRpbWVsaW5lVmlldygpOiBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZVZpZXcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZVZpZXcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlVGltZWxpbmVWaWV3KHZhbHVlOiBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZVZpZXcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZVZpZXcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgd2hpY2ggdGFza3MgdG8gc2VsZWN0IGJ5IHRoZWlyIGlkIG9yIGdldHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YXNrIGlkcy4gSWYgbm8gaWQgaXMgcHJvdmlkZWQgZm9yIHRoZSB0YXNrLCBhbiBpbnRlcm5hbCBpZCBpcyBnZW5lcmF0ZWQgZm9yIGVhY2ggdGFzayBhY2NvcmRpbmcgdG8gaXQncyBpbmRleCh0cmVlIHBhdGgpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0ZWRUYXNrSWRzKCk6IG51bWJlcltdIHwgc3RyaW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRUYXNrSWRzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZFRhc2tJZHModmFsdWU6IG51bWJlcltdIHwgc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRUYXNrSWRzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgd2hpY2ggcmVzb3VyY2VzIHRvIHNlbGVjdCBieSB0aGVpciBpZCBvciBnZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcmVzb3VyY2UgaWRzLiBJZiBubyBpZCBpcyBwcm92aWRlZCBmb3IgdGhlIHJlc291cmNlLCBhbiBpbnRlcm5hbCBpZCBpcyBnZW5lcmF0ZWQgZm9yIGVhY2ggcmVzb3VyY2UgYWNjb3JkaW5nIHRvIGl0J3MgaW5kZXgodHJlZSBwYXRoKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGVkUmVzb3VyY2VJZHMoKTogbnVtYmVyW10gfCBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZFJlc291cmNlSWRzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZFJlc291cmNlSWRzKHZhbHVlOiBudW1iZXJbXSB8IHN0cmluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkUmVzb3VyY2VJZHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgdGhlIHByb2dyZXNzIGxhYmVsIGluc2lkZSB0aGUgcHJvZ3Jlc3MgYmFycyBvZiB0aGUgVGltZWxpbmUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93UHJvZ3Jlc3NMYWJlbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dQcm9ncmVzc0xhYmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93UHJvZ3Jlc3NMYWJlbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93UHJvZ3Jlc3NMYWJlbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBzZXQgdGhlIGRhdGVTdGFydC9kYXRlRW5kIG9mIHRoZSB0YXNrcyB3aWxsIGJlIGNvZXJjZWQgdG8gdGhlIG5lYXJlc3QgdGltZWxpbmUgY2VsbCBkYXRlICggYWNjb3JkaW5nIHRvIHRoZSB2aWV3ICkuIEFmZmVjdHMgdGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBhcyB3ZWxsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc25hcFRvTmVhcmVzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNuYXBUb05lYXJlc3QgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNuYXBUb05lYXJlc3QodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc25hcFRvTmVhcmVzdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIEdhbnR0Q2hhcnQgY2FuIGJlIHNvcnRlZCBieSBvbmUsIG1vcmUgdGhlbiBvbmUgb3Igbm8gY29sdW1ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnRNb2RlKCk6IEdhbnR0Q2hhcnRTb3J0TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydE1vZGUodmFsdWU6IEdhbnR0Q2hhcnRTb3J0TW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgYSBmbGF0IHN0cnVjdHVyZSBhcyBhbiBhcnJheSBvZiBhbGwgdGFza3MgaW5zaWRlIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza3MoKTogR2FudHRDaGFydFRhc2tbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza3ModmFsdWU6IEdhbnR0Q2hhcnRUYXNrW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJlbWluZXMgdGhlIGNvbHVtbnMgdGhhdCB3aWxsIGJlIHZpc2libGUgaW4gdGhlIFRhc2sgVHJlZS4gRWFjaCBlbnRyeSBpbiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBtdXN0IGJlIG9mIHR5cGUgT2JqZWN0LiAgSXQgc2hvdWxkIGNvbnRhaW4gdGhlIGxhYmVsIGFuZCB2YWx1ZSBrZXlzLiBUaGUgdmFsdWUgb2YgbGFiZWwgZGV0ZXJtaW5lcyB0aGUgY29sdW1uIGhlYWRlciBsYWJlbCBpbnNpZGUgdGhlIFRhc2sgVHJlZS4gVGhlIHZhbHVlIG9mIHZhbHVlIGRldGVybWluZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNlbGxzIGluIHRoZSBjb2x1bW4uIEl0IHNob3VsZCByZWZlcmVuY2UgYSB0YXNrIGF0dHJpYnV0ZSBmcm9tIHRoZSBkYXRhU291cmNlLiBCeSBkZWZhdWx0LCBvbmUgY29sdW1uIHdpdGggYWxsIHRhc2sgbGFiZWxzIGlzIHZpc2libGUuICBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IGZvcm1hdEZ1bmN0aW9uIC0gYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgZWFjaCByZWNvcmQgaW4gdGhlIGNvbHVtbi4gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGFyZ3VtZW50IC0gdGhlIGFjdHVhbCBsYWJlbCBhcyBzdHJpbmcgdGhhdCBpcyBnb2luZyB0byBiZSBpbnNlcnRlZCBhbmQgbXVzdCByZXR1cm4gc29tZSBjb250ZW50LiBtaW4gLSBjb250cm9scyB0aGUgbWluIHNpemUgb2YgdGhlIGNvbHVtbiBtYXggLSBjb250cm9scyB0aGUgbWF4IHNpemUgb2YgdGhlIGNvbHVtbiBzaXplIC0gY29udHJvbHMgdGhlIGFjdHVhbCBzaXplIG9mIHRoZSBjb2x1bW5jdXN0b21FZGl0b3IgLSBhIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2V0IGEgY3VzdG9tIGVkaXRvciBmb3IgdGhlIGNvbHVtbiB3aGVuIGVkaXRpbmcgdmlhIHRoZSB3aW5kb3cuIEl0IGFjY2VwdHMgdHdvIGFyZ3VtZW50cyBsYWJlbCAtIHRoZSBsYWJlbCBvZiB0aGUgY29sdW1udmFsdWUgLSB0aGUgdmFsdWUgb2YgdGhlIGNvbHVtbi4gVGhlIGNhbGxiYWNrIG11c3QgcmV0dXJuIHRoZSBlZGl0b3Iuc2V0Q3VzdG9tRWRpdG9yVmFsdWUgLSBhIGNhbGxiYWNrIHRoYXQgaXMgdXNlZCB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSBjdXN0b20gZWRpdG9yLmdldEN1c3RvbUVkaXRvclZhbHVlIC0gYSBjYWxsYmFjayB0aGF0IGlzIHVzZWQgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIGVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tDb2x1bW5zKCk6IEdhbnR0Q2hhcnRUYXNrQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbHVtbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tDb2x1bW5zKHZhbHVlOiBHYW50dENoYXJ0VGFza0NvbHVtbltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgVGFzayBUYWJsZSBpcyBmaWx0ZXJhYmxlIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrRmlsdGVyaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrRmlsdGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tGaWx0ZXJpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWluIHNpemUgb2YgdGhlIFRhc2sgUGFuZWwuIFVzZWQgd2hlbiBSZXNvdXJjZSBQYW5lbCBpcyB2aXNpYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1BhbmVsTWluKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUGFuZWxNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQYW5lbE1pbih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQYW5lbE1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzaXplIG9mIHRoZSBUYXNrIFBhbmVsLiBVc2VkIHdoZW4gUmVzb3VyY2UgUGFuZWwgaXMgdmlzaWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQYW5lbFNpemUoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQYW5lbFNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQYW5lbFNpemUodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUGFuZWxTaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbiB3aWR0aCBvZiB0aGUgdGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZU1pbigpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVsaW5lTWluKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWluIHdpZHRoIG9mIHRoZSB0YXNrIHRhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdHJlZU1pbigpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudHJlZU1pbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdHJlZU1pbih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRyZWVNaW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2l6ZSh3aWR0aCkgb2YgdGhlIHRhc2sgdGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0cmVlU2l6ZSgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudHJlZVNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRyZWVTaXplKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudHJlZVNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmb3JtYXQgZnVuY3Rpb24gZm9yIHRoZSBIZWFkZXIgb2YgdGhlIFRpbWVsaW5lLiBUaGUgZnVuY3Rpb24gcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6IGRhdGUgLSBhIERhdGUgb2JqZWN0IHRoYXQgcmVwcmVzZXRzIHRoZSBkYXRlIGZvciB0aGUgY3VycmVudCBjZWxsLnR5cGUgLSBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHR5cGUgb2YgZGF0ZSB0aGF0IHRoZSBjZWxsIGlzIHNob3dpbmcsIGUuZy4gJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgZXRjLmlzSGVhZGVyRGV0YWlscyAtIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGNlbGwgaXMgcGFydCBvZiB0aGUgSGVhZGVyIERldGFpbHMgQ29udGFpbmVyIG9yIG5vdC52YWx1ZSAtIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGNlbGwgcHJvdmlkZWQgYnkgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdlYXRoZXIgb3Igbm90IHZlcnRpY2FsIHNjcm9sbGJhciBpcyBzaG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IHZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSgpOiBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkodmFsdWU6IFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdmlld2luZyBkYXRlIHJhbmdlIG9mIHRoZSB0aW1lbGluZS4gUG9zc2libGUgdmFsdWVzOiBkYXkgLSBUaGUgdGltZWxpbmUgc2hvdyB0aGUgaG91cnMgb2YgdGhlIGRheS53ZWVrIC0gdGhlIHRpbWVsaW5lIHNob3dzIHRoZSBkYXlzIG9mIHRoZSB3ZWVrLm1vbnRoIC0gdGhlIHRpbWVsaW5lIHNob3dzIHRoZSBkYXlzIG9mIHRoZSBtb250aC55ZWFyIC0gdGhlIHRpbWVsaW5lIHNob3dzIHRoZSBtb250aHMgb2YgdGhlIHllYXIucmVzb3VyY2UgLSBkaXNwbGF5cyB0aGUgY3VycmVudCB0YXNrcyBieSBncm91cGluZyB0aGVtIGFjY29yZGluZyB0byB0aGUgcmVzb3VyY2VzIHRoZXkgaGF2ZSBhc3NpZ25lZC4gVGhlIHVuYXNzaWduZWQgdGFza3Mgd2lsbCBiZSBwbGFjZWQgaW4gYSBzZXBhcmF0ZSBncm91cCBjYWxsZWQgJ1VuYXNzaWduZWQnLiAgVGhlIHRpbWVsaW5lIGhhcyBhIGhlYWRlciBzZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGxhYmVscyBvZiBlYWNoIGNlbGwgYWNjb3JkaW5nIHRvIHRoZSBkYXRlIGluc2lkZSB0aGVtLiBUaGUgaGVhZGVyIGlzIHNwbGl0dGVkIGluIHR3byBzZWN0aW9ucyBpbiBvcmRlciB0byBnaXZlIGEgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvZiB0aGUgZGF0ZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3KCk6IEdhbnR0Q2hhcnRWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZpZXcodmFsdWU6IEdhbnR0Q2hhcnRWaWV3KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXRlcyBpbnNpZGUgdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IHllYXJzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgeWVhckZvcm1hdCgpOiBZZWFyRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnllYXJGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHllYXJGb3JtYXQodmFsdWU6IFllYXJGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueWVhckZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluc2lkZSB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgd2Vla3MuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2Vla0Zvcm1hdCgpOiBXZWVrRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndlZWtGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHdlZWtGb3JtYXQodmFsdWU6IFdlZWtGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2Vla0Zvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGVsZW1lbnQncyB2aXN1YWwgdGhlbWUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBpZiB0aGUgZWxlbWVudCBjYW4gYmUgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZm9jdXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBiYXRjaCB1cGRhdGUgd2FzIHN0YXJ0ZWQgYWZ0ZXIgZXhlY3V0aW5nIHRoZSBiZWdpblVwZGF0ZSBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25CZWdpblVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBiYXRjaCB1cGRhdGUgd2FzIGVuZGVkIGZyb20gYWZ0ZXIgZXhlY3V0aW5nIHRoZSBlbmRVcGRhdGUgbWV0aG9kLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRW5kVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgY29ubmVjdGluZyBvbmUgdGFzayB0byBhbm90aGVyLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0c3RhcnRJbmRleClcblx0KiAgIHN0YXJ0SW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBhIGNvbm5lY3Rpb24gaXMgc3RhcnRlZCBmcm9tLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db25uZWN0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGNvbXBsZXRlcyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0d28gdGFza3MuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0c3RhcnRJbmRleCwgXHRlbmRJbmRleCwgXHR0eXBlKVxuXHQqICAgaWQgLSBUaGUgaWQgb2YgdGhlIGNvbm5lY3Rpb24gdGhhdCB3YXMgY3JlYXRlZC5cblx0KiAgIHN0YXJ0SW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBhIGNvbm5lY3Rpb24gaXMgc3RhcnRlZCBmcm9tLlxuXHQqICAgZW5kSW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBhIGNvbm5lY3Rpb24gaXMgc3RhcnRlZCBmcm9tLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGNvbm5lY3Rpb24uIEZvdXJzIHR5cGVzIGFyZSBhdmFpbGFibGU6IDx1bD48bGk+PGI+MDwvYj4gLSBzdGFydC10by1zdGFydDwvbGk+PGxpPjxiPjE8L2I+IC0gZW5kLXRvLXN0YXJ0PC9saT48bGk+PGI+MjwvYj4gLSBlbmQtdG8tZW5kPC9saT48bGk+PGI+MzwvYj4gLSBzdGFydC10by1lbmQ8L2xpPjwvdWw+XG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbm5lY3Rpb25FbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVGFzayBpcyBzZWxlY3RlZC91bnNlbGVjdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHZhbHVlLCBcdG9sZFZhbHVlKVxuXHQqICAgdmFsdWUgLSBUaGUgaW5kZXggb2YgdGhlIG5ldyBzZWxlY3RlZCB0YXNrLlxuXHQqICAgb2xkVmFsdWUgLSBUaGUgaW5kZXggb2YgdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgdGFzay5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRyZWUgY29sdW1uIGlzIHJlc2l6ZWQuIENvbHVtbiByZXNpemluZyBpcyBjb250cm9sZWQgYnkgdGhlIGNvbHVtblJlc2l6ZSBwcm9wZXJ0eS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRkYXRhRmllbGQsIFx0aGVhZGVyQ2VsbEVsZW1lbnQsIFx0d2lkdGhJblBlcmNlbnRhZ2VzLCBcdHdpZHRoKVxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIG5hbWUgb2YgdGhlIGNvbHVtbi4gQ29ycmVzcG9uZHMgdG8gdGhlIDxiPnZhbHVlPC9iPiBhdHRyaWJ1dGUgb2YgYSA8Yj50YXNrQ29sdW1ucy9yZXNvdXJjZUNvbHVtbnM8L2I+IG9iamVjdC5cblx0KiAgIGhlYWRlckNlbGxFbGVtZW50IC0gVGhlIEhUTUxFbGVtZW50IGNvbHVtbiBjZWxsIGVsZW1lbnQgdGhhdCB3YXMgcmVzaXplZC5cblx0KiAgIHdpZHRoSW5QZXJjZW50YWdlcyAtIFRoZSBuZXcgd2lkdGggb2YgdGhlIGNvbHVtbiBpbiBwZXJjZW50YWdlcy5cblx0KiAgIHdpZHRoIC0gVGhlIG5ldyB3aWR0aCBvZiB0aGUgY29sdW1uIGluIHBpeGVscy5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uUmVzaXplOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQganVzdCBiZWZvcmUgdGhlIHdpbmRvdyBmb3IgdGFzayBlZGl0aW5nIHN0YXJ0cyBjbG9zaW5nLiBUaGUgY2xvc2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0dHlwZSlcblx0KiAgIHRhcmdldCAtIFRoZSBpbnN0YW5jZSBvZiB0aGUgd2luZG93IHRoYXQgaXMgZ29pbmcgdG8gY2xvc2UuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2Ygd2luZG93IHRoYXQgaXMgZ29pbmcgdG8gY2xvc2UuIFRoZXJlIGFyZSB0aHJlZSB0eXBlcyBvZiB3aW5kb3dzIGluc2lkZSBHYW50dENoYXJ0OiA8dWw+PGxpPjxiPmNvbmZpcm08L2I+IC0gYSBjb25maXJtIHdpbmRvdy4gVGhpcyB0eXBlIG9mIHdpbmRvdyBpcyB1c3VhbGx5IHVzZWQgdG8gY29uZmlybSB0aGUgZGVsZXRpb24gb2YgYSB0YXNrLjwvbGk+PGxpPjxiPnRhc2s8L2I+IC0gYSB3aW5kb3cgdXNlZCBmb3IgdGFzayBlZGl0aW5nLjwvbGk+PGxpPjxiPmNvbm5lY3Rpb248L2I+IC0gYSB3aW5kb3cgdXNlZCB0byBkZWxldGUgYSBjb25uZWN0aW9uLjwvbGk+PC91bD5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHdpbmRvdyBmb3IgdGFzayBlZGl0aW5nIGlzIGNsb3NlZCggaGlkZGVuIClcblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpdGVtIGlzIGNvbGxhcHNlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpc0dyb3VwLCBcdGl0ZW0sIFx0aW5kZXgsIFx0bGFiZWwsIFx0dmFsdWUpXG5cdCogICBpc0dyb3VwIC0gQSBib29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbSBpcyBhIHJlc291cmNlIGdyb3VwLiBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gPGI+Z3JvdXBCeVJlc29ydWNlczwvYj4gaXMgZW5hYmxlZC5cblx0KiAgIGl0ZW0gLSBUaGUgb2JqZWN0IGRldGFpbHMgb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqICAgbGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gZHJhZ2dpbmcgb2YgYSB0YXNrIHN0YXJ0cy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGl0ZW0sIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBpdGVtIC0gVGhlIG9iamVjdCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBkYXRlU3RhcnQgLSBUaGUgc3RhcnQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBkYXRlRW5kIC0gVGhlIGVuZCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2luZyBvZiBhIHRhc2sgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0aXRlbSwgXHRkYXRlU3RhcnQsIFx0ZGF0ZUVuZClcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSB0YXNrIHRoYXQgaXMgd2FzIGRyYWdnZWQuXG5cdCogICBpdGVtIC0gVGhlIG9iamVjdCBvZiB0aGUgdGFzayB0aGF0IGlzIHdhcyBkcmFnZ2VkLlxuXHQqICAgZGF0ZVN0YXJ0IC0gVGhlIHN0YXJ0IGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyB3YXMgZHJhZ2dlZC5cblx0KiAgIGRhdGVFbmQgLSBUaGUgZW5kIGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyB3YXMgZHJhZ2dlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gaXRlbSBpcyBleHBhbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpc0dyb3VwLCBcdGl0ZW0sIFx0aW5kZXgsIFx0bGFiZWwsIFx0dmFsdWUpXG5cdCogICBpc0dyb3VwIC0gQSBib29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbSBpcyBhIHJlc291cmNlIGdyb3VwLiBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gPGI+Z3JvdXBCeVJlc29ydWNlczwvYj4gaXMgZW5hYmxlZC5cblx0KiAgIGl0ZW0gLSBUaGUgaW5kZXggb2YgdGhlIGV4cGFuZGVkIGl0ZW0uXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgZXhwYW5kZWQgaXRlbS5cblx0KiAgIGxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBleHBhbmRlZCBpdGVtLlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGV4cGFuZGVkIGl0ZW0uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIEdhbnR0Q2hhcnQgaXMgZmlsdGVyZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSwgXHRhY3Rpb24sIFx0ZmlsdGVycylcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtcyB0aGF0IGhhdmUgYmVlbiBmaWx0ZXJlZCAoIHRhc2sgb3IgcmVzb3VyY2UgKS5cblx0KiAgIGFjdGlvbiAtIFRoZSBuYW1lIG9mIHRoZSBmaWx0ZXJpbmcgYWN0aW9uICh3aGV0aGVyIGZpbHRlcmluZyBpcyBhZGRlZCBvciByZW1vdmVkKS5cblx0KiAgIGZpbHRlcnMgLSBUaGUgZmlsdGVycyB0aGF0IGhhdmUgYmVlbiBhcHBsaWVkLiBGaWx0ZXJzIHJlcHJlc2VudCBKUVguVXRpbGl0aWVzLkZpbHRlckdyb3VwIG9iamVjdHMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSB0YXNrLCByZXNvdXJjZSBvciBjb25uZWN0aW9uIGlzIGNsaWNrZWQgaW5zaWRlIHRoZSBUaW1lbGluZSBvciB0aGUgVHJlZSBjb2x1bW5zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0dHlwZSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuIEl0IGNhbSBiZSBhIHRhc2ssIHJlc291cmNlIG9yIGNvbm5lY3Rpb24uXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgaXRlbS4gUG9zc2libGUgdmFsdWVzIGFyZTogJ3Rhc2snLCAncmVzb3VyY2UnLCAnY29ubmVjdGlvbicuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIERPTSBldmVudC5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRhc2svUmVzb3VyY2UvQ29ubmVjdGlvbiBpcyBpbnNlcnRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0eXBlLCBcdGl0ZW0pXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgaXRlbSB0aGF0IGhhcyBiZWVuIG1vZGlmaWVkLlxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtSW5zZXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRhc2svUmVzb3VyY2UvQ29ubmVjdGlvbiBpcyByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHR5cGUsIFx0aXRlbSlcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtIHRoYXQgaGFzIGJlZW4gbW9kaWZpZWQuXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1SZW1vdmU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVGFzay9SZXNvdXJjZS9Db25uZWN0aW9uIGlzIHVwZGF0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSwgXHRpdGVtKVxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGl0ZW0gdGhhdCBoYXMgYmVlbiBtb2RpZmllZC5cblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbVVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGp1c3QgYmVmb3JlIHRoZSB3aW5kb3cgZm9yIHRhc2sgZWRpdGluZyBzdGFydHMgb3BlbmluZy4gVGhlIG9wZW5pbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdHR5cGUpXG5cdCogICB0YXJnZXQgLSBUaGUgaW5zdGFuY2Ugb2YgdGhlIHdpbmRvdyB0aGF0IGlzIGdvaW5nIHRvIG9wZW4uXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2Ygd2luZG93IHRoYXQgaXMgZ29pbmcgdG8gb3Blbi4gVGhlcmUgYXJlIHRocmVlIHR5cGVzIG9mIHdpbmRvd3MgaW5zaWRlIEdhbnR0Q2hhcnQ6IDx1bD48bGk+PGI+Y29uZmlybTwvYj4gLSBhIGNvbmZpcm0gd2luZG93LiBUaGlzIHR5cGUgb2Ygd2luZG93IGlzIHVzdWFsbHkgdXNlZCB0byBjb25maXJtIHRoZSBkZWxldGlvbiBvZiBhIHRhc2suPC9saT48bGk+PGI+dGFzazwvYj4gLSBhIHdpbmRvdyB1c2VkIGZvciB0YXNrIGVkaXRpbmcuPC9saT48bGk+PGI+Y29ubmVjdGlvbjwvYj4gLSBhIHdpbmRvdyB1c2VkIHRvIGRlbGV0ZSBhIGNvbm5lY3Rpb24uPC9saT48L3VsPlxuXHQqL1xuXHRAT3V0cHV0KCkgb25PcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgd2luZG93IGZvciB0YXNrIGVkaXRpbmcgaXMgb3BlbmVkKCB2aXNpYmxlICkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25PcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcHJvZ3Jlc3Mgb2YgYSB0YXNrIGJhciBzdGFydHMgdG8gY2hhbmdlIGFzIGEgcmVzdWx0IG9mIHVzZXIgaW50ZXJhY3Rpb24uIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbmRleCwgXHRwcm9ncmVzcylcblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSB0YXNrIHdoaWNoIHByb2dyZXNzIGlzIGdvaW5nIHRvIGJlIGNoYW5nZWQuXG5cdCogICBwcm9ncmVzcyAtIFRoZSBwcm9ncmVzcyBvZiB0aGUgdGFzayBiZWZvcmUgaXQgaXMgY2hhbmdlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUHJvZ3Jlc3NDaGFuZ2VTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHByb2dyZXNzIG9mIGEgdGFzayBpcyBjaGFuZ2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluZGV4LCBcdHByb2dyZXNzKVxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgd2hpY2ggcHJvZ3Jlc3MgaXMgaGFzIGJlZW4gY2hhbmdlZC5cblx0KiAgIHByb2dyZXNzIC0gVGhlIHByb2dyZXNzIG9mIHRoZSB0YXNrIGFmdGVyIGl0IHdhcyBjaGFuZ2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Qcm9ncmVzc0NoYW5nZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gcmVzaXppbmcgb2YgYSB0YXNrIHN0YXJ0cy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGl0ZW0sIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBpdGVtIC0gVGhlIG9iamVjdCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBkYXRlU3RhcnQgLSBUaGUgc3RhcnQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBkYXRlRW5kIC0gVGhlIGVuZCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgcmVzaXplZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSByZXNpemluZyBvZiBhIHRhc2sgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0aXRlbSwgXHRkYXRlU3RhcnQsIFx0ZGF0ZUVuZClcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSB0YXNrIHRoYXQgd2FzIHJlc2l6ZWQuXG5cdCogICBpdGVtIC0gVGhlIG9iamVjdCBvZiB0aGUgdGFzayB0aGF0IHdhcyByZXNpemVkLlxuXHQqICAgZGF0ZVN0YXJ0IC0gVGhlIHN0YXJ0IGRhdGUgb2YgdGhlIHRhc2sgdGhhdCB3YXMgcmVzaXplZC5cblx0KiAgIGRhdGVFbmQgLSBUaGUgZW5kIGRhdGUgb2YgdGhlIHRhc2sgdGhhdCB3YXMgcmVzaXplZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgR2FudHRDaGFydCBpcyBzb3J0ZWQgYnkgc29tZSBjb2x1bW4uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSwgXHRjb2x1bW5zLCBcdHNvcnREYXRhRmllbGRzLCBcdHNvcnRPcmRlcnMsIFx0c29ydERhdGFUeXBlcylcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBjb2x1bW5zIHRoYXQgaGF2ZSBiZWVuIHNvcnRlZCAoIHRhc2sgb3IgcmVzb3VyY2UgY29sdW1uICkuXG5cdCogICBjb2x1bW5zIC0gQW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGNvbnRhaW5zIHRoZSBjdXJyZW50bHkgc29ydGVkIGNvbHVtbiBvYmplY3RzLlxuXHQqICAgc29ydERhdGFGaWVsZHMgLSBUaGUgZGF0YUZpZWxkcyBvZiB0aGUgY29sdW1ucyB0aGF0IGhhdmUgYmVlbiBzb3J0ZWQuIFRoZSBkYXRhRmllbGQgY29ycmVzcG9uZHMgdG8gdGhlIDxiPnZhbHVlPC9iPiBwcm9wZXJ0eSBvZiBhIDxiPnRhc2tDb2x1bW5zL3Jlc291cmNlQ29sdW1uczwvYj4gb2JqZWN0LlxuXHQqICAgc29ydE9yZGVycyAtIFRoZSBvcmRlcnMgb2YgdGhlIGNvbHVtbnMgdGhhdCBoYXZlIGJlZW4gc29ydGVkLlxuXHQqICAgc29ydERhdGFUeXBlcyAtIFRoZSBkYXRhIHR5cGVzIG9mIHRoZSBjb2x1bW5zIHRoYXQgaGF2ZSBiZWVuIHNvcnRlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uU29ydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIFRpbWVsaW5lIGhhcyBiZWVuIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxCb3R0b21SZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgVGltZWxpbmUgaGFzIGJlZW4gc2Nyb2xsZWQgdG8gdGhlIHRvcC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbFRvcFJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBUaW1lbGluZSBoYXMgYmVlbiBzY3JvbGxlZCB0byB0aGUgYmVnaW5uaW5nIChob3Jpem9udGFsbHkpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsTGVmdFJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBUaW1lbGluZSBoYXMgYmVlbiBzY3JvbGxlZCB0byB0aGUgZW5kIChob3Jpem9udGFsbHkpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsUmlnaHRSZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGN1c3RvbSBmaWx0ZXIgdG8gYSBzcGVjaWZpYyBjb2x1bW4gKHRhc2sgb3IgcmVzb3VyY2UgY29sdW1uKS4gXG5cdCogQHBhcmFtIHthbnl9IGNvbHVtbnMuIEFuIG9iamVjdCBvciBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIGZvbGxvd2luZyBzeW50YXg6IDx1bD48bGk+PGI+dHlwZTwvYj4gLSBpbmRpY2F0ZXMgdGhlIHR5cGUgb2YgY29sdW1uIHRvIGZpbHRlci4gUG9zc2libGUgdmFsdWVzIGFyZSAndGFzaycgb3IgJ3Jlc291cmNlJy48L2xpPjxsaT48Yj52YWx1ZTwvYj4gLSB0aGUgdmFsdWUgb2YgdGhlIGNvbHVtbiB0aGF0IG11c3QgbWF0Y2ggdGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiBhIHRhc2tDb2x1bW5zL3Jlc291cmNlQ29sdW1ucyBvYmplY3QoZS5nLiAnbGFiZWwnLCAnZGF0ZVN0YXJ0JywgZXRjKS48L2xpPjwvdWw+LlxuXHQqIEBwYXJhbSB7YW55fSBmaWx0ZXJHcm91cC4gQSBKUVguVXRpbGl0aWVzLkZpbHRlckdyb3VwIG9iamVjdC4gSGVyZSdzIGFuIGV4YW1wbGUgZm9yIGNyZWF0aW5nIGEgRmlsdGVyR3JvdXAgb2JqZWN0OiA8cHJlPmNvbnN0IGZpbHRlckdyb3VwID0gbmV3IHdpbmRvdy5KUVguVXRpbGl0aWVzLkZpbHRlckdyb3VwKCksIGZpbHRlck9iamVjdCA9IGZpbHRlckdyb3VwLmNyZWF0ZUZpbHRlcignc3RyaW5nJywgJ1Rhc2sgQicsICdTVEFSVFNfV0lUSF9DQVNFX1NFTlNJVElWRScpOyBmaWx0ZXJHcm91cC5hZGRGaWx0ZXIoJ29yJywgZmlsdGVyT2JqZWN0KTsgZ2FudHQuYWRkRmlsdGVyKHsgdHlwZTogJ3Rhc2snLCB2YWx1ZTogJ2xhYmVsJyB9LCBmaWx0ZXJHcm91cCk7PC9wcmU+XG5cdCovXG4gICAgcHVibGljIGFkZEZpbHRlcihjb2x1bW5zOiBhbnksIGZpbHRlckdyb3VwOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGNvbHVtbnMsIGZpbHRlckdyb3VwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRGaWx0ZXIoY29sdW1ucywgZmlsdGVyR3JvdXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGN1cnJlbnRseSBhcHBsaWVkIGZpbHRlcnMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyRmlsdGVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyRmlsdGVycygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGN1cnJlbnRseSBhcHBsaWVkIGNvbHVtbiBzb3J0aW5nLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTb3J0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVW5zZWxlY3RzIGFsbCBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMgaW5zaWRlIHRoZSBHYW50dENoYXJ0IGluY2x1ZGluZyBUYXNrcyBhbmQgUmVzb3VyY2VzLiBJdCBhbHNvIGNsZWFycyB0aGUgYXNzaWdubWVudCBoaWdobGdpaHRlcnMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBmb3JtIExvY2FsU3RvcmFnZSBhY2NvcmRpbmcgdG8gaXQncyBpZC4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgdGFza3MuICBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJUYXNrcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJUYXNrcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgcmVzb3VyY2VzLiAgXG5cdCovXG4gICAgcHVibGljIGNsZWFyUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJlc291cmNlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHRhc2tzLiAgXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IHN0YXJ0VGFza0luZGV4LiBUaGUgaWQgb2YgdGhlIHN0YXJ0IHRhc2sgb3IgdGhlIGNvbm5lY3Rpb24gc3RyaW5nIGxpa2UgJzItMy0wJy4gPGI+SWYgdGhlIGNvbXBsZXRlIGNvbm5lY3Rpb25zIHN0cmluZyBpcyBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIHRoZSByZXN0IG9mIHRoZSBtZXRob2QgYXJndW1lbnRzIGFyZSBub3QgbmVjZXNzYXJ5PC9iPlxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSB0YXNrRW5kSW5kZXg/LiBUaGUgaWQgb2YgdGhlIGVuZCB0YXNrLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBjb25uZWN0aW9uVHlwZT8uIFRoZSB0eXBlIG9mIHRoZSBjb25uZWN0aW9uLiBBIG51bWVyaWMgdmFsdWUgZnJvbSAwIHRvIDMuIFRoZSBjb25uZWN0aW9uIHR5cGUgY2FuIGJlOiA8dWw+PGxpPjxiPjA8L2I+IC0gU3RhcnQtdG8tU3RhcnQgY29ubmVjdGlvbi48L2xpPjxsaT48Yj4xPC9iPiAtIEVuZC10by1TdGFydCBjb25uZWN0aW9uLjwvbGk+PGxpPjxiPjI8L2I+IC0gRW5kLXRvLUVuZCBjb25uZWN0aW9uLjwvbGk+PGxpPjxiPjM8L2I+IC0gU3RhcnQtdG8tRW5kIGNvbm5lY3Rpb24uPC9saT48L3VsPlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBsYWc/LiBUaGUgY29ubmVjdGlvbiBsYWcgaW4gbWlsaXNlY29uZHMuIFVzZWQgYnkgdGhlIEF1dG8gc2NoZWR1bGluZyBhbGdvcml0aG0gaW4gb3JkZXIgYWxsb3cgc29tZSBzbGFjayB0aW1lIHNsYWNrIHRpbWUgYmVmb3JlIG9yIGFmdGVyIHRoZSBuZXh0IHRhc2sgYmVnaW5zL2VuZHMuIExhZyBpcyBtZWFzdXJlZCBpbiBtaWxpc2Vjb25kcy4gSXQgY2FuIGJlIGEgbmVnYXRpdmUgKGxlYWQpIG9yIGEgcG9zaXRpdmUgKGxhZykgbnVtYmVyLlxuXHQqL1xuICAgIHB1YmxpYyBjcmVhdGVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4OiBudW1iZXIgfCBzdHJpbmcsIHRhc2tFbmRJbmRleD86IG51bWJlciB8IHN0cmluZywgY29ubmVjdGlvblR5cGU/OiBudW1iZXIsIGxhZz86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4LCB0YXNrRW5kSW5kZXgsIGNvbm5lY3Rpb25UeXBlLCBsYWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNyZWF0ZUNvbm5lY3Rpb24oc3RhcnRUYXNrSW5kZXgsIHRhc2tFbmRJbmRleCwgY29ubmVjdGlvblR5cGUsIGxhZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbiBleHBhbmRlZCBwcm9qZWN0LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaWQuIFRoZSBpZCBvZiBhIHByb2plY3QgaXRlbSB0aGF0IHNob3VsZCBiZSBjb2xsYXBzZWQuXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlKGlkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3RhcnRzIGFuIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgaXMgYXBwcm9wcmlhdGUgd2hlbiBjYWxsaW5nIG11bHRpcGxlIG1ldGhvZHMgb3Igc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYXQgb25jZS4gXG5cdCovXG4gICAgcHVibGljIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuZHMgdGhlIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgbWV0aG9kIHdpbGwgcmVzdW1lIHRoZSByZW5kZXJpbmcgYW5kIHdpbGwgcmVmcmVzaCB0aGUgR2FudHRDaGFydC4gXG5cdCovXG4gICAgcHVibGljIGVuZFVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlZmVyZXNoZXMgdGhlIEdhbnR0Q2hhcnQgYWZ0ZXIgcmVzaXppbmcgYnkgcmVjYWxjdWxhdGluZyB0aGUgU2Nyb2xsYmFycy4gIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gZnVsbFJlZnJlc2g/LiBJZiBzZXQgdGhlIEdhbnR0Q2hhcnQgd2lsbCBiZSByZS1yZW5kZXJlZCBjb21wbGV0ZWx5LlxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKGZ1bGxSZWZyZXNoPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgc3VyZSBhIFRhc2sgaXMgdmlzaWJsZSBieSBzY3JvbGxpbmcgdG8gaXQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB0YXNrSWQuIFRoZSBpZCBvZiB0aGUgdGFyZ2V0IFRhc2suXG5cdCovXG4gICAgcHVibGljIGVuc3VyZVZpc2libGUodGFza0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5zdXJlVmlzaWJsZSh0YXNrSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuc3VyZVZpc2libGUodGFza0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhIGNvbGxhcHNlZCBwcm9qZWN0IHdpdGggdGFza3MuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpZC4gVGhlIGlkIG9mIGEgcHJvamVjdCB0YXNrIHRoYXQgc2hvdWxkIGJlIGV4cGFuZGVkLlxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmQoaWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZChpZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIGRhdGEgb2YgVHJlZSBvZiB0aGUgR2FudHRDaGFydC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGb3JtYXQuIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZXhwb3J0ZWQgZmlsZS4gVGhyZWUgcG9zc2libGUgdmFsdWVzIGFyZSBhdmFpbGFibGU6IDx1bD48bGk+PGI+cGRmPC9iPjwvbGk+PGxpPjxiPnhsc3g8L2I+PC9saT48bGk+PGI+aHRtbDwvYj48L2xpPjxsaT48Yj50c3Y8L2I+PC9saT48bGk+PGI+Y3N2PC9iPjwvbGk+PGxpPjxiPnhtbDwvYj48L2xpPjwvdWw+XG5cdCogQHBhcmFtIHthbnl9IGNhbGxiYWNrPy4gQSBjYWxsYmFjayB0aGF0IGFsbG93cyB0byBmb3JtYXQgdGhlIGV4cG9ydGVkIGRhdGEgYmFzZWQgb24gYSBjb25kaXRpb24uIEZvciBhZGRpdGlvbmFsIGRldGFpbHMsIHJlZmVyIHJvIHRoZSBKUVggRXhwb3J0IERvY3VtZW50YXRpb24uXG5cdCovXG4gICAgcHVibGljIGV4cG9ydERhdGEoZGF0YUZvcm1hdDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYWxsIHRhc2tzIGluc2lkZSB0aGUgZWxlbWVudCBhbG9uZyB3aXRoIHRoZWlyIGNvbm5lY3Rpb25zIGFuZCBzZXR0aW5ncy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBUcmVlIHBhdGggb2YgYSB0YXNrL3Jlc291cmNlLiBUaGUgdHJlZSBwYXRoIGlzIHVzZWQgYXMgdGFzay9yZXNvdXJjZSBpZCBpZiBubyBpZCBpcyBwcm92aWRlZCBieSB0aGUgdXNlci4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEEgR2F0dENoYXJ0VGFzay9HYW50dENoYXJ0UmVzb3VyY2UgaXRlbSBvYmplY3QuXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEl0ZW1QYXRoKGl0ZW0pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SXRlbVBhdGgoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB0YXNrIG9iamVjdCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBpZC9wYXRoLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaXRlbUlkLiBUaGUgaWQvcGF0aCBvZiBhIHRhc2suXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFRhc2soaXRlbUlkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRhc2soaXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEdhbnR0Q2hhcnQgdGFza3MuIFxuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFRhc2tzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgaW5kZXggb2YgYSB0YXNrLiBcblx0KiBAcGFyYW0ge2FueX0gdGFzay4gQSBHYXR0Q2hhcnRUYXNrIG9iamVjdC5cblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VGFza0luZGV4KHRhc2spOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VGFza0luZGV4KHRhc2spO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY29ubmVjdGlvbnMgZGVmaW5pdGlvbnMgb2YgYSB0YXNrLiBcblx0KiBAcGFyYW0ge2FueX0gdGFza0lkLiBBIEdhbnR0Q2hhcnRUYXNrIG9iamVjdCBvciBpdCdzIGlkLlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRUYXNrQ29ubmVjdGlvbnModGFza0lkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRhc2tDb25uZWN0aW9ucyh0YXNrSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgUHJvamVjdCBvZiBhIHRhc2sgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90IGhhdmUgb25lLiBcblx0KiBAcGFyYW0ge2FueX0gdGFzay4gQSBHYW50Q2hhcnRUYXNrIG9iamVjdC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VGFza1Byb2plY3QodGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUYXNrUHJvamVjdCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHJlc291cmNlIG9iamVjdCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBpZC9wYXRoLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaXRlbUlkLiBUaGUgaWQvcGF0aCBvZiBhIHJlc291cmNlLlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZShpdGVtSWQpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2UoaXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEdhbnR0Q2hhcnQgcmVzb3VyY2VzLiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZXMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJlc291cmNlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgaW5kZXggb2YgYSByZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IHJlc291cmNlLiBBIEdhbnR0Q2hhcnRSZXNvdXJjZSBvYmplY3QuXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJlc291cmNlSW5kZXgocmVzb3VyY2UpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2VJbmRleChyZXNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB0YXNrcyB0aGF0IGFyZSBhc3NpZ25lZCB0byB0aGUgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZS4gQSBHYW50dENoYXJ0UmVzb3VyY2Ugb2JqZWN0IG9yIGl0J3MgaWQuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJlc291cmNlVGFza3MocmVzb3VyY2UpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2VUYXNrcyhyZXNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFza3MvcmVzb3VyY2UgaWRzLiBJZiBzZWxlY3Rpb24gaXMgZGlzYWJsZWQgb3Igbm8gaXRlbXMgYXJlIHNlbGVjdGVkIHJldHVybnMgbnVsbC4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGVkSWRzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZElkcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhc2tzLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0ZWRUYXNrcygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U2VsZWN0ZWRUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJlc291cmNlcy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGVkUmVzb3VyY2VzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZFJlc291cmNlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgd29ya2luZyBob3VycyBvZiB0aGUgZGF5IGFzIG51bWJlcnMuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFdvcmtpbmdIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVwZW5kaW5nIG9uIHRoZSBub253b3JraW5nRGF5cyBwcm9wZXJ0eSwgcmV0dXJucyB0cnVlIG9yIGZhbHNlIHdoZXRoZXIgdGhlIHRhcmdldCBkYXRlIGlzIG9uIGEgd29ya2luZyBkYXkgb3Igbm90LiBcblx0KiBAcGFyYW0ge0RhdGV9IGRhdGUuIEEgamF2YXNjcmlwdCBEYXRlIG9iamVjdCBvciBhIHN0cmluZy9udW1iZXIgd2hpY2ggcmVwcmVzZW50cyBhIHZhbGlkIEpTIERhdGUuXG5cdCovXG4gICAgcHVibGljIGlzV29ya2luZ0RheShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmlzV29ya2luZ0RheShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pc1dvcmtpbmdEYXkoZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvYWRzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBvciBjaGVja3MgTG9jYWxTdG9yYWdlIGZvciBhbnkgc2F2ZWQgc3RhdGVzIGlmIG5vIGFyZ3VtZW50IGlzIHBhc3NlZCB0byB0aGUgbWV0aG9kLiBcblx0KiBAcGFyYW0ge2FueVtdfSBzdGF0ZT8uIEFuIEFycmF5IGNvbnRhaW5pbmcgYSB2YWxpZCBzdHJ1Y3R1cmUgb2YgR2FudHQgQ2hhcnQgdGFza3MuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgY29ubmVjdGlvbnMgYmV0d2VlbiB0YXNrcy4gIFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVBbGxDb25uZWN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQWxsQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGxDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgY29ubmVjdGlvbiBiZXR3ZWVuIHRhc2tzLiBUaGUgZnVuY3Rpb24gYWNjZXB0cyB0aHJlZSBhcmd1bWVudHModGFzaydzIHN0YXJ0IGluZGV4LCBlbmQgaW5kZXggYW5kIGNvbm5lY3Rpb24gdHlwZSkgb3Igb25lIGNvbm5lY3Rpb24gc3RyaW5nIGFyZ3VtZW50IHdoaWNoIGRlc2NyaWJlcyB0aGUgY29ubmVjdGlvbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IHN0YXJ0VGFza0luZGV4LiBUaGUgaW5kZXggb2YgdGhlIHN0YXJ0IHRhc2sgb3IgdGhlIGNvbm5lY3Rpb24gc3RyaW5nIGxpa2UgJzItMy0wLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSB0YXNrRW5kSW5kZXg/LiBUaGUgaW5kZXggb2YgdGhlIGVuZCB0YXNrLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBjb25uZWN0aW9uVHlwZT8uIFRoZSB0eXBlIG9mIHRoZSBjb25uZWN0aW9uLiBBIG51bWVyaWMgdmFsdWUgZnJvbSAwIHRvIDMuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIHJlbW92ZUNvbm5lY3Rpb24oc3RhcnRUYXNrSW5kZXgsIHRhc2tFbmRJbmRleD8sIGNvbm5lY3Rpb25UeXBlPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4LCB0YXNrRW5kSW5kZXgsIGNvbm5lY3Rpb25UeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIGNvbm5lY3Rpb25zIG9mIGEgdGFzayBvciBiZXR3ZWVuIHR3byB0YXNrcyBpZiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHByb3ZpZGVkIGFuZCB2YWxpZC4gXG5cdCogQHBhcmFtIHthbnl9IHRhc2tTdGFydC4gVGhlIHN0YXJ0IHRhc2sgb2JqZWN0IG9yIGl0J3MgaWQuXG5cdCogQHBhcmFtIHthbnl9IHRhc2tFbmQ/LiBUaGUgZW5kIHRhc2sgb2JqZWN0IG9yIGl0J3MgaWQuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZVRhc2tDb25uZWN0aW9uKHRhc2tTdGFydDogYW55LCB0YXNrRW5kPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2tDb25uZWN0aW9uKHRhc2tTdGFydCwgdGFza0VuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlVGFza0Nvbm5lY3Rpb24odGFza1N0YXJ0LCB0YXNrRW5kKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGN1cnJlbnQgc2V0dGluZ3Mgb2YgdGhlIGVsZW1lbnQgdG8gTG9jYWxTdG9yYWdlLiBSZXF1aXJlcyBhbiBpZCB0byBiZSBzZXQgdG8gdGhlIGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBHYW50dCBDaGFydCB0YXNrcy5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IHRhc2sgaW4gdGhlIHRpbWVsaW5lLiBUaGUgbmV3IHRhc2sgY2FuIGJlIGluc2VydGVkIGFzIGEgc3ViIHRhc2sgb2YgYSBwcm9qZWN0IGJ5IHBhc3NpbmcgdGhlIGFwcHJvcHJpYXRlIGFyZ3VtZW50IGZvciB0aGUgcHJvamVjdCBpZCBvciBhcyBhIHJvb3QgbGV2ZWwgaXRlbS4gXG5cdCogQHBhcmFtIHthbnl9IHRhc2tPYmplY3QuIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgR2FudHQgQ2hhcnQgdGFzay5cblx0KiBAcGFyYW0ge2FueX0gcHJvamVjdD8uIEEgbnVtYmVyIG9yIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgcHJvamVjdCAoZS5nLiAnMCcpIG9yIGEgcHJvamVjdCBvYmplY3QgZGVmaW5pdGlvbiBwcmVzZW50IGluIHRoZSBHYW50dENoYXJ0LiBUaGlzIHBhcmFtZXRlciBkZXRlcm1pbmVzIHRoZSBwYXJlbnQgcHJvamVjdCBvZiB0aGUgdGFzayB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQuIElmIDxiPm51bGw8L2I+IGlzIHBhc3NlZCBhcyBhbiBhcmd1ZW1udCB0aGUgbmV3IHRhc2sgd2lsbCBiZSBpbnNlcnRlZCBhdCByb290IGxldmVsIHdpdGhvdXQgYSBwYXJlbnQgcHJvamVjdC5cblx0KiBAcGFyYW0ge251bWJlcn0gaW5kZXg/LiBUaGUgaW5kZXggd2hlcmUgdGhlIG5ldyBpdGVtIHNob3VsZCBiZSBpbnNlcnRlZChlLmcuIDIpLiBUaGlzIGluZGV4IHdpbGwgZGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV3bHkgaW5zZXJ0ZWQgdGFzay5cblx0KiBAcmV0dXJucyB7c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaW5zZXJ0VGFzayh0YXNrT2JqZWN0LCBwcm9qZWN0PywgaW5kZXg/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydFRhc2sodGFza09iamVjdCwgcHJvamVjdCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhIHRhc2svcHJvamVjdC9taWxlc3RvbmUuIFxuXHQqIEBwYXJhbSB7YW55fSB0YXNrSWQuIEEgbnVtYmVyIG9yIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgdGFzay9wcm9qZWN0KGUuZy4gJzAnKSBvciB0aGUgb2JqZWN0IGRlZmluaXRpb24gb2YgdGhlIHRhc2svcHJvamVjdC5cblx0KiBAcGFyYW0ge2FueX0gdGFza09iamVjdC4gQW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBHYW50dCBDaGFydCB0YXNrLiBUaGUgcHJvcGVydGllcyBvZiB0aGlzIG9iamVjdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGRlc2lyZWQgdGFzay5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlVGFzayh0YXNrSWQ6IGFueSwgdGFza09iamVjdDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZVRhc2sodGFza0lkLCB0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKHRhc2tJZCwgdGFza09iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSB0YXNrIGZyb20gdGhlIHRpbWVsaW5lLiBcblx0KiBAcGFyYW0ge2FueX0gdGFza0lkLiBBIG51bWJlciBvciBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhIHRhc2sgb3IgdGhlIGFjdHVhbCBpdGVtIG9iamVjdC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlVGFzayh0YXNrSWQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVUYXNrKHRhc2tJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlVGFzayh0YXNrSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IHJlc291cmNlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcmVzb3VyY2VJZC4gQSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhIHJlc291cmNlIG9yIGl0J3MgaGllcmFyY2hpY2FsIHBvc2l0aW9uLCBlLmcuICcwJyAoIGZvbGxvd2luZyBqcXhUcmVlIHN5bnRheCksIG9yIGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYSByZXNvdXJjZS5cblx0KiBAcGFyYW0ge2FueX0gcmVzb3VyY2VPYmplY3Q/LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHJlc291cmNlLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRSZXNvdXJjZShyZXNvdXJjZUlkOiBzdHJpbmcgfCBudW1iZXIsIHJlc291cmNlT2JqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydFJlc291cmNlKHJlc291cmNlSWQsIHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRSZXNvdXJjZShyZXNvdXJjZUlkLCByZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYW4gZXhpc3RpbmcgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZUlkLiBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgcmVzb3VyY2Ugb3IgaXQncyBoaWVyYXJjaGljYWwgcG9zaXRpb24sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KSwgb3IgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHJlc291cmNlLlxuXHQqIEBwYXJhbSB7YW55fSB0YXNrT2JqZWN0LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHJlc291cmNlLiBUaGUgcHJvcGVydGllcyBvZiB0aGlzIG9iamVjdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHRhcmdldCByZXNvdXJjZS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZDogYW55LCB0YXNrT2JqZWN0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZCwgdGFza09iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZCwgdGFza09iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSByZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IHJlc291cmNlSWQuIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYSByZXNvdXJjZSBvciBpdCdzIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLCBvciBhIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgcmVzb3VyY2UuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZVJlc291cmNlKHJlc291cmNlSWQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSZXNvdXJjZShyZXNvdXJjZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSZXNvdXJjZShyZXNvdXJjZUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIHBvcHVwIFdpbmRvdyBmb3Igc3BlY2lmaWMgdGFzayB0byBlZGl0IG9yIHRvIGRlbGV0ZSBhIGNvbm5lY3Rpb24gaWYgYSBjb25uZWN0aW9uIHN0cmluZyBpcyBwYXNzZWQuIFxuXHQqIEBwYXJhbSB7YW55fSB0YXNrSWQuIEEgc3RyaW5nIG9yIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgdGFzayBvciB0aGUgdGFzayBvYmplY3QgdGhhdCBpcyBnb2luZyB0byBiZSBlZGl0ZWQgb3IgYSBjb25uZWN0aW9uIHN0cmluZyhlLmcuICcyLTAtMCcpLlxuXHQqL1xuICAgIHB1YmxpYyBvcGVuV2luZG93KHRhc2tJZDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3codGFza0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuV2luZG93KHRhc2tJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsb3NlcyBhbiBvcGVuZWQgcG9wdXAgV2luZG93LiBUaGUgbWV0aG9kIHdpbGwgY2xvc2UgYW55IG9wZW5lZCBwb3B1cCB3aW5kb3cgaW5zaWRlIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2VXaW5kb3coKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlV2luZG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VXaW5kb3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUHJlcGFyZXMgdGhlIEdhbnR0Q2hhcnQgZm9yIHByaW50aW5nIGJ5IG9wZW5pbmcgdGhlIGJyb3dzZXIncyBQcmludCBQcmV2aWV3LiBcblx0Ki9cbiAgICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIHNldHMgdGhlIHdvcmtpbmcgZGF5cyBhbmQgaG91cnMgYXQgb25jZS4gXG5cdCogQHBhcmFtIHt7IGRheXM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSwgaG91cnM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSB9fSBzZXR0aW5ncy4gQW4gb2JqZWN0IGRlZmluaXRpb24gdGhhdCBjb250YWlucyB0aGUgZGF5cyBhbmQgaG91cnMgdGhhdCBzaG91bGQgYmUgd29ya2luZy4gVGhlIGRheXMgYW5kIGhvdXJzIGNhbiBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IG9mIG51bWJlcnMgd2hlcmUgZWFjaCBudW1iZXIgaXMgYSBkYXkvaG91ciwgc3RyaW5ncyB3aGVyZSBlYWNoIHN0cmluZyByZXByZXNlbnRzIGEgcmFuZ2Ugb2YgZGF5cy9ob3VycyAoZS5nLiAnMS01JyBvciAnMjowMC04OjAwJykgb3IgbmVzdGVkIGFycmF5IG9mIG51bWJlcnMgKGUuZy4gW1sxLDVdXSBvciBbWzIsIDhdXSkgd2hpY2ggbWVhbnMgZnJvbSAxIHRvIDUgb3IgMiB0byA4LlxuXHQqL1xuICAgIHB1YmxpYyBzZXRXb3JrVGltZShzZXR0aW5nczogeyBkYXlzOiAobnVtYmVyIHwgc3RyaW5nIHwgbnVtYmVyW10pW10sIGhvdXJzOiAobnVtYmVyIHwgc3RyaW5nIHwgbnVtYmVyW10pW10gfSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRXb3JrVGltZShzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0V29ya1RpbWUoc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gc2VsZWN0IGEgdGFzayBiYXNlZCBvbiBpdCdzIGlkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaWQuIFRoZSBpZCBvZiB0aGUgdGFzayB0byBzZWxlY3QuXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFRhc2soaWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RUYXNrKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RUYXNrKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIHNlbGVjdCBhIHJlc291cmNlIGJhc2VkIG9uIGl0J3MgaWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpZC4gVGhlIGlkIG9mIHRoZSByZXNvdXJjZSB0byBzZWxlY3QuXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJlc291cmNlKGlkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0UmVzb3VyY2UoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJlc291cmNlKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIHVuc2VsZWN0IGEgdGFzayBiYXNlZCBvbiBpdCdzIGlkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaWQuIFRoZSBpZCBvZiB0aGUgdGFzayB0byB1bnNlbGVjdC5cblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3RUYXNrKGlkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3RUYXNrKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdFRhc2soaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gdW5zZWxlY3QgYSByZXNvdXJjZSBiYXNlZCBvbiBpdCdzIGlkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaWQuIFRoZSBpZCBvZiB0aGUgcmVzb3VyY2UgdG8gdW5zZWxlY3QuXG5cdCovXG4gICAgcHVibGljIHVuc2VsZWN0UmVzb3VyY2UoaWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdFJlc291cmNlKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdFJlc291cmNlKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIHVuc2V0IHByZXZpb3VzbHkgc2V0IHdvcmtpbmcgdGltZS4gVGhlIG9wcG9zdGUgbWV0aG9kIGZvciBzZXRXb3JraW5nVGltZS4gXG5cdCogQHBhcmFtIHt7IGRheXM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSwgaG91cnM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSB9fSBzZXR0aW5ncy4gQW4gb2JqZWN0IGRlZmluaXRpb24gdGhhdCBjb250YWlucyB0aGUgZGF5cyBhbmQgaG91cnMgdGhhdCBzaG91bGQgbm90IGJlIHdvcmtpbmcuIFRoZSBkYXlzIGFuZCBob3VycyBjYW4gYmUgZGVmaW5lZCBhcyBhbiBhcnJheSBvZiBudW1iZXJzIHdoZXJlIGVhY2ggbnVtYmVyIGlzIGEgZGF5L2hvdXIsIHN0cmluZ3Mgd2hlcmUgZWFjaCBzdHJpbmcgcmVwcmVzZW50cyBhIHJhbmdlIG9mIGRheXMvaG91cnMgKGUuZy4gJzEtNScgb3IgJzI6MDAtODowMCcpIG9yIG5lc3RlZCBhcnJheSBvZiBudW1iZXJzIChlLmcuIFtbMSw1XV0gb3IgW1syLCA4XV0pIHdoaWNoIG1lYW5zIGZyb20gMSB0byA1IG9yIDIgdG8gOC5cblx0Ki9cbiAgICBwdWJsaWMgdW5zZXRXb3JrVGltZShzZXR0aW5nczogeyBkYXlzOiAobnVtYmVyIHwgc3RyaW5nIHwgbnVtYmVyW10pW10sIGhvdXJzOiAobnVtYmVyIHwgc3RyaW5nIHwgbnVtYmVyW10pW10gfSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNldFdvcmtUaW1lKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNldFdvcmtUaW1lKHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU29ydHMgdGhlIEdhbnR0Q2hhcnQgdGFza3MvcmVzb3VyY2VzIGlmIHNvcnRhYmxlIGlzIGVuYWJsZWQuIFxuXHQqIEBwYXJhbSB7YW55fSBjb2x1bW5zLiBBbiBBcnJheSBvZiBvYmplY3RzIHdoaWNoIGRldGVybWluZSB3aGljaCBjb2x1bW5zIHRvIGJlIHNvcnRlZCwgdGhlIHNvcnQgb3JkZXIgYW5kIHRoZSB0eXBlIG9mIGl0ZW0gdG8gc29ydDogdGFzayBvciByZXNvdXJjZS4gSWYgbm8gYXJndW1lbnRzIGFyZSBwcm92aWRlZCBzb3J0aW5nIHdpbGwgYmUgcmVtb3ZlZC4gPGJyIC8+IEFuIG9iamVjdCBzaG91bGQgaGF2ZSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IDx1bD48bGk+PGI+dmFsdWU8L2I+IC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSB2YWx1ZSBvZiBhIDxiPnRhc2tDb2x1bW48L2I+IHRvIHNvcnQuPC9saT48bGk+PGI+c29ydE9yZGVyPC9iPiAtIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgc29ydGluZyBvcmRlciBmb3IgdGhlIGNvbHVtbjogJ2FzYycgKGFzc2NlbmRpbmcgc29ydGluZykgb3IgJ2Rlc2MnIChkZXNjZW5kaW5nKSBhcmUgcG9zc2libGUgdmFsdWVzLiA8L2xpPjxsaT48Yj50eXBlPC9iPiAtIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgdHlwZSBvZiBpdGVtIHRvIHNvcnQuIFRoaXMgcHJvcGVydHkgZGV0ZXJtaW5lcyB3aGljaCBwYW5lbCB3aWxsIGJlIHNvcnRlZC4gVHdvIHBvc3NpYmxlIHZhbHVlczogJ3Rhc2snLCAncmVzb3VyY2UnLjwvbGk+PC91bD5cblx0Ki9cbiAgICBwdWJsaWMgc29ydChjb2x1bW5zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydChjb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zb3J0KGNvbHVtbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25CZWdpblVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdiZWdpblVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FbmRVcGRhdGUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db25uZWN0aW9uU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29ubmVjdGlvblN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29ubmVjdGlvbkVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb25uZWN0aW9uRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uUmVzaXplLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2xsYXBzZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXhwYW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRmlsdGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbHRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1JbnNlcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUluc2VydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtUmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbVVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25PcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUHJvZ3Jlc3NDaGFuZ2VTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzc0NoYW5nZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Qcm9ncmVzc0NoYW5nZUVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzc0NoYW5nZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZVN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZUVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Tb3J0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NvcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsQm90dG9tUmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbFRvcFJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbExlZnRSZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsTGVmdFJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsTGVmdFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbExlZnRSZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsUmlnaHRSZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsUmlnaHRSZWFjaGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbFJpZ2h0UmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsUmlnaHRSZWFjaGVkSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZ2luVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25TdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3Rpb25TdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29ubmVjdGlvblN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29ubmVjdGlvbkVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29ubmVjdGlvbkVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5vbmZpbHRlckhhbmRsZXIgPSBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbUluc2VydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9ncmVzc0NoYW5nZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZUVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzQ2hhbmdlRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbEJvdHRvbVJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGxUb3BSZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxMZWZ0UmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbExlZnRSZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxMZWZ0UmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsUmlnaHRSZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsUmlnaHRSZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxSaWdodFJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=