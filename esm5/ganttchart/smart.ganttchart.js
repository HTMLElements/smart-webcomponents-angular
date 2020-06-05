import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var GanttChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GanttChartComponent, _super);
    function GanttChartComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a Task is selected/unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
        *   value - The index of the new selected task.
        *   oldValue - The index of the previously selected task.
        */
        _this.onChange = new EventEmitter();
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
        /** @description This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that is going to be dragged.
        *   dateStart - The start date of the task that is going to be dragged.
        *   dateEnd - The end date of the task that is going to be dragged.
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when dragging of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that is was dragged.
        *   dateStart - The start date of the task that is was dragged.
        *   dateEnd - The end date of the task that is was dragged.
        */
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that is going to be resized.
        *   dateStart - The start date of the task that is going to be resized.
        *   dateEnd - The end date of the task that is going to be resized.
        */
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that was resized.
        *   dateStart - The start date of the task that was resized.
        *   dateEnd - The end date of the task that was resized.
        */
        _this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
        *   startIndex - The index of the task that a connection is started from.
        */
        _this.onConnectionStart = new EventEmitter();
        /** @description This event is triggered when the user completes a connection between two tasks.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex, 	endIndex, 	type)
        *   startIndex - The index of the task that a connection is started from.
        *   endIndex - The index of the task that a connection is started from.
        *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
        */
        _this.onConnectionEnd = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the bottom.
        *  @param event. The custom event. 	*/
        _this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the top.
        *  @param event. The custom event. 	*/
        _this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to open.
        *   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window for task editing is opened( visible ).
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to close.
        *   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when the window for task editing is closed( hidden )
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when a Project is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	label, 	value)
        *   index - The index of the collapsed project.
        *   label - The label of the collapsed project.
        *   value - The value of the collapsed project.
        */
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when a Project is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
        *   item - The index of the expanded project.
        *   label - The label of the expanded project.
        *   value - The value of the expanded project.
        */
        _this.onExpand = new EventEmitter();
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
        /** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks.. */
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
        /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations. */
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
        /** @description Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest. */
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
    Object.defineProperty(GanttChartComponent.prototype, "selectedIndexes", {
        /** @description Determines the selected task(s). If empty no tasks are selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
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
    Object.defineProperty(GanttChartComponent.prototype, "sortable", {
        /** @description Determines whether the GanttChart can be sorted or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GanttChartComponent.prototype, "sortMode", {
        /** @description Determines whether the GanttChart can be sorted by one or more columns. */
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
        /** @description Determines the min width of the task tree. */
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
        /** @description Determines the size(width) of the task tree. */
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
        /** @description A format function for the Header of the Timeline. */
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
    /** @description Adds a task as the last item of a Project.
    * @param {string | number} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    GanttChartComponent.prototype.addTaskTo = function (taskIndex, projectIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTaskTo(taskIndex, projectIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addTaskTo(taskIndex, projectIndex);
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
    * @param {number} taskStartIndex. The index of the start task.
    * @param {number} taskEndIndex?. The index of the end task.
    * @returns {string}
  */
    GanttChartComponent.prototype.removeTaskConnection = function (taskStartIndex, taskEndIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.removeTaskConnection(taskStartIndex, taskEndIndex);
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
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    */
    GanttChartComponent.prototype.createConnection = function (startTaskIndex, taskEndIndex, connectionType) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
            });
        }
    };
    /** @description Collapses an expanded project with tasks.
    * @param {string | number} index. The index of a project task that should be collapsed.
    */
    GanttChartComponent.prototype.collapse = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapse(index);
            });
        }
    };
    /** @description Makes sure a Task is visible by scrolling to it.
    * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
    */
    GanttChartComponent.prototype.ensureVisible = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible(item);
            });
        }
    };
    /** @description Expands a collapsed project with tasks.
    * @param {string | number} index. The index of a project task that should be expanded.
    */
    GanttChartComponent.prototype.expand = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expand(index);
            });
        }
    };
    /** @description Exports the data of Tree of the GanttChart.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
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
    /** @description Returns the index of a task.
    * @param {HTMLElement} task. A GattChartTask object.
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
    /** @description Returns the tree path of a task.
    * @param {GanttChartTask} task. Returns the Tree path of the task as a string.
    * @returns {string}
  */
    GanttChartComponent.prototype.getTaskPath = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getTaskPath(task);
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
    /** @description Inserts a new task in the timeline.
    * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task.
    */
    GanttChartComponent.prototype.insertTask = function (index, taskObject) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertTask(index, taskObject);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertTask(index, taskObject);
            });
        }
    };
    /** @description Updates a task inside the timeline.
    * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    GanttChartComponent.prototype.updateTask = function (index, taskObject) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(index, taskObject);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateTask(index, taskObject);
            });
        }
    };
    /** @description Removes a task from the timeline.
    * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    GanttChartComponent.prototype.removeTask = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeTask(index);
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
    /** @description Opens the popup Window for specific task Editing.
    * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
    */
    GanttChartComponent.prototype.openWindow = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openWindow(index);
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
    /** @description Sorts the GanttChart tasks/resources if sortable is enabled.
    * @param {any} columns?. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
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
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['progressChangeStartHandler'] = function (event) { that.onProgressChangeStart.emit(event); };
        that.nativeElement.addEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
        that.eventHandlers['progressChangeEndHandler'] = function (event) { that.onProgressChangeEnd.emit(event); };
        that.nativeElement.addEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['connectionStartHandler'] = function (event) { that.onConnectionStart.emit(event); };
        that.nativeElement.addEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
        that.eventHandlers['connectionEndHandler'] = function (event) { that.onConnectionEnd.emit(event); };
        that.nativeElement.addEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
    };
    /** @description Remove event listeners. */
    GanttChartComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['progressChangeStartHandler']) {
            that.nativeElement.removeEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
        }
        if (that.eventHandlers['progressChangeEndHandler']) {
            that.nativeElement.removeEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
        if (that.eventHandlers['connectionStartHandler']) {
            that.nativeElement.removeEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
        }
        if (that.eventHandlers['connectionEndHandler']) {
            that.nativeElement.removeEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
        }
        if (that.eventHandlers['scrollBottomReachedHandler']) {
            that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        }
        if (that.eventHandlers['scrollTopReachedHandler']) {
            that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
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
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
    };
    GanttChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    ], GanttChartComponent.prototype, "headerTemplate", null);
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
    ], GanttChartComponent.prototype, "inverted", null);
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
    ], GanttChartComponent.prototype, "resources", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "resourceColumns", null);
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
    ], GanttChartComponent.prototype, "selectedIndexes", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "snapToNearest", null);
    tslib_1.__decorate([
        Input()
    ], GanttChartComponent.prototype, "sortable", null);
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
    ], GanttChartComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onProgressChangeStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onProgressChangeEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onResizeStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onResizeEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onConnectionStart", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onConnectionEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onScrollBottomReached", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onScrollTopReached", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onOpening", void 0);
    tslib_1.__decorate([
        Output()
    ], GanttChartComponent.prototype, "onOpen", void 0);
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
    ], GanttChartComponent.prototype, "onExpand", void 0);
    GanttChartComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-gantt-chart, [smart-gantt-chart]'
        })
    ], GanttChartComponent);
    return GanttChartComponent;
}(BaseElement));
export { GanttChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ2FudHRjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9nYW50dGNoYXJ0LyIsInNvdXJjZXMiOlsic21hcnQuZ2FudHRjaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBeUMsK0NBQVc7SUFDbkQsNkJBQVksR0FBMkI7UUFBdkMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBOGdCbEM7Ozs7VUFJRTtRQUNRLGNBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7OztVQUlFO1FBQ1EsMkJBQXFCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEY7Ozs7VUFJRTtRQUNRLHlCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7OztVQUtFO1FBQ1EsaUJBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7Ozs7VUFLRTtRQUNRLGVBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs7Ozs7VUFLRTtRQUNRLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7Ozs7O1VBS0U7UUFDUSxpQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzs7VUFHRTtRQUNRLHVCQUFpQixHQUE4QixJQUFJLFlBQVksRUFBRSxD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QUU7a0VBQW1FO0lBUWxFO1FBQVQsTUFBTSxFQUFFO2dFQUFpRTtJQUloRTtRQUFULE1BQU0sRUFBRTtzRUFBdUU7SUFJdEU7UUFBVCxNQUFNLEVBQUU7bUVBQW9FO0lBT25FO1FBQVQsTUFBTSxFQUFFOzBEQUEyRDtJQUkxRDtRQUFULE1BQU0sRUFBRTt1REFBd0Q7SUFPdkQ7UUFBVCxNQUFNLEVBQUU7MERBQTJEO0lBSTFEO1FBQVQsTUFBTSxFQUFFO3dEQUF5RDtJQVF4RDtRQUFULE1BQU0sRUFBRTsyREFBNEQ7SUFRM0Q7UUFBVCxNQUFNLEVBQUU7eURBQTBEO0lBbm9CdkQsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSx3Q0FBd0M7U0FDbEQsQ0FBQztPQUVXLG1CQUFtQixDQXl4Qy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXp4Q0QsQ0FBeUMsV0FBVyxHQXl4Q25EO1NBenhDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW50dENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBHYW50dENoYXJ0RGF0YUV4cG9ydEl0ZW1UeXBlLCBHYW50dERheUZvcm1hdCwgRHVyYXRpb24sIEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBIb3VyRm9ybWF0LCBNb250aEZvcm1hdCwgR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVNb2RlLCBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZVZpZXcsIEdhbnR0Q2hhcnRTb3J0TW9kZSwgR2FudHRDaGFydFRhc2tUeXBlLCBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHksIEdhbnR0Q2hhcnRWaWV3LCBZZWFyRm9ybWF0LCBXZWVrRm9ybWF0LCBHYW50dENoYXJ0RGF0YUV4cG9ydCwgR2FudHRDaGFydERhdGFTb3VyY2UsIEdhbnR0Q2hhcnREYXRhU291cmNlQ29ubmVjdGlvbiwgR2FudHRDaGFydERhdGFTb3VyY2VSZXNvdXJjZSwgR2FudHRDaGFydFJlc291cmNlLCBHYW50dENoYXJ0UmVzb3VyY2VDb2x1bW4sIEdhbnR0Q2hhcnRUYXNrLCBHYW50dENoYXJ0VGFza0Nvbm5lY3Rpb24sIEdhbnR0Q2hhcnRUYXNrUmVzb3VyY2UsIEdhbnR0Q2hhcnRUYXNrQ29sdW1uLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgR2FudHRDaGFydERhdGFFeHBvcnRJdGVtVHlwZSwgR2FudHREYXlGb3JtYXQsIER1cmF0aW9uLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgSG91ckZvcm1hdCwgTW9udGhGb3JtYXQsIEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSwgR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVWaWV3LCBHYW50dENoYXJ0U29ydE1vZGUsIEdhbnR0Q2hhcnRUYXNrVHlwZSwgVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBHYW50dENoYXJ0VmlldywgWWVhckZvcm1hdCwgV2Vla0Zvcm1hdCwgR2FudHRDaGFydERhdGFFeHBvcnQsIEdhbnR0Q2hhcnREYXRhU291cmNlLCBHYW50dENoYXJ0RGF0YVNvdXJjZUNvbm5lY3Rpb24sIEdhbnR0Q2hhcnREYXRhU291cmNlUmVzb3VyY2UsIEdhbnR0Q2hhcnRSZXNvdXJjZSwgR2FudHRDaGFydFJlc291cmNlQ29sdW1uLCBHYW50dENoYXJ0VGFzaywgR2FudHRDaGFydFRhc2tDb25uZWN0aW9uLCBHYW50dENoYXJ0VGFza1Jlc291cmNlLCBHYW50dENoYXJ0VGFza0NvbHVtbiwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgR2FudHRDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWdhbnR0LWNoYXJ0LCBbc21hcnQtZ2FudHQtY2hhcnRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIEdhbnR0Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8R2FudHRDaGFydD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEdhbnR0Q2hhcnQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IEdhbnR0Q2hhcnQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEdhbnR0Q2hhcnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZ2FudHQtY2hhcnQnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFJlY2FsY3VsYXRlcyB0aGUgdGFza3MgdGhhdCBhcmUgY29ubmVjdGVkIGFuZCByZS1zY2hlZHVsZXMgdGhlbSBhY2NvcmRpbmcgdG8gdGhlaXIgY29ubmVjdGlvbnMuIElmIG5vIGNvbm5lY3Rpb25zIGFyZSBwcmVzZW50LCBhdXRvU2NoZWR1bGluZyBoYXMgbm8gZWZmZWN0IHVudGlsIGEgY29ubmVjdGlvbiBpcyBjcmVhdGVkLiBDb25uZWN0aW9uIHR5cGVzIGRldGVybWluZXMgdGhlIHN0YXJ0L2VuZCBkYXRlIGxpbWl0cyBvZiB0aGUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2NoZWR1bGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2NoZWR1bGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TY2hlZHVsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2NoZWR1bGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWZmZWN0cyB0aGUgdGFza3Mgb25seSB3aGVuIGF1dG9TY2hlZHVsZSBpcyBlbmFibGVkLiBXaGVuIHNldCB0byB0cnVlLCB0aGUgdGFza3MgYXJlIHN0cmljdGx5IHNjaGVkdWxlZCAoIGFjY29yZGluZyB0byB0aGVpciBjb25uZWN0aW9ucyApIGFuZCBkcmFnZ2luZyBpcyBub3QgYWxsb3dlZC4gIFVzZXJzIGNhbiBzZXQgbGFnIHRvIHNwZWNpZmljIGNvbm5lY3Rpb25zIHRvIGRldGVybWluZSBhIGRlbGF5IG9mIG92ZXJsYXAgb2YgYmV0d2VlbiB0aGUgdHdvIHRhc2tzICggaW50ZXJ2YWwgb2YgdGltZSBpbiBtaWxpc2Vjb25kcyApLiBMYWcgb25lIG9mIHRoZSBhdHRyaWJ1dGVzIG9mIGEgdGFzayBjb25uZWN0aW9uIGFuZCBzaG91bGQgYmUgc2V0IGluIHRoZSBkYXRhU291cmNlIHdoZXJlIHRoZSB0YXNrIGNvbm5lY3Rpb25zIGFyZSBkZWZpbmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY2hlZHVsZVN0cmljdE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TY2hlZHVsZVN0cmljdE1vZGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzY3JvbGwgc3BlZWQgd2hlbiBkcmFnZ2luZyB3aGVuIGF1dG9TY3JvbGwgcHJvcGVydHkgaXMgc2V0LiAgKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TY3JvbGxTdGVwKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1Njcm9sbFN0ZXAodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBHYW50dENoYXJ0J3MgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogR2FudHRDaGFydERhdGFFeHBvcnQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YUV4cG9ydCh2YWx1ZTogR2FudHRDaGFydERhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0YXNrcyB0aGF0IHdpbGwgYmUgbG9hZGVkIGluc2lkZSB0aGUgVGltZWxpbmUuIEVhY2ggaXRlbSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogbGFiZWwgLSB0aGUgbGFiZWwgb2YgdGhlIFRhc2tkYXRlU3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZSBvZiB0aGUgVGFzay4gU2hvdWxkIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHZhbGlkIGRhdGUuZGF0ZUVuZCAtIHRoZSBlbmRpbmcgZGF0ZSBvZiB0aGUgVGFzay4gU2hvdWxkIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHZhbGlkIGRhdGUudHlwZSAtIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIHRhc2suIFdoZXRoZXIgaXQncyBhIHNpbXBsZSB0YXNrLCBhIHByb2plY3Qgb3IgYSBtaWxlc3RvbmUuIEVhY2ggdHlwZSBvZiB0YXNrIGhhcyBzcGVjaWZpYyBiZWhhdmlvciBhbmQgYWRkaXRpb25hbCBhdHRyaWJ1dGVzLi4gIEFkZGl0aW9uYWwgcHJvcGVydGllczogY29ubmVjdGlvbnMgLSBhbiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byB0YXNrcy4gRWFjaCBjb25uZWN0aW9uIChvYmplY3QpIHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyA6IHRhcmdldCAtIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCB0YXNrdHlwZSAtIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiB0aGUgY29ubmVjdGlvbi4gRm91ciB0eXBlcyBvZiBjb25uZWN0aW9ucyBhcmUgYXZhaWxhYmxlOiAwIC0gaXMgYSBjb25uZWN0aW9uIG9mIHR5cGUgU3RhcnQtdG8tU3RhcnQgMSAtIGlzIGEgY29ubmVjdGlvbiBvZiB0eXBlIEVuZC10by1TdGFydCAyIC0gaXMgYSBjb25uZWN0aW9uIG9mIHR5cGUgRW5kLXRvLUVuZDMgLSBpcyBhIGNvbm5lY3Rpb24gb2YgdHlwZSBTdGFydC10by1FbmQgbGFnIC0gYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBkZWxheSBiZXR3ZWVuIHR3byBjb25uZWN0ZWQgYXV0byBzY2hlZHVsZWQgdGFza3MuIExhZyBwcm9wZXJ0eSBjYW4gYmUgYSBwb3NpdGl2ZSBvciBhIG5lZ2F0aXZlIG51bWJlci4gV2hlbiBuZWdhdGl2ZSBpdCBkZXRlcm1pbmVzIHRoZSBvdmVybGFwIGJldHdlZW4gdHdvIGNvbm5lY3RlZCB0YXNrcy4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGluIGNvbmp1Y3Rpb24gd2l0aCBhdXRvU2NoZWR1bGUuZHVyYXRpb24gLSBkZXRlcm1pbmVzIHRoZSBkdXJhdGlvbiBvZiBhIFRhc2sgaW4gZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgb3IgbWlsaXNlY29uZHMuIFZlcnkgdXNlZnVsbCB3aGVuIHRoZSB0aGUgZGF0ZUVuZCBvZiBhIFRhc2sgaXMgdW5rbm93bi5taW5EdXJhdGlvbiAtIHNldHMgdGhlIG1pbmltdW0gZHVyYXRpb24gb2YgYSB0YXNrLiBtYXhEdXJhdGlvbiAtIHNldHMgdGhlIG1heGltdW0gZHVyYXRpb24gb2YgYSB0YXNrLm1pbkRhdGVTdGFydCAtIGRldGVybWluZXMgdGhlIG1pbmludW0gZGF0ZSB0aGF0IGEgdGFzayBjYW4gc3RhcnQgZnJvbS4gTXVzdCBiZSBpZiB0eXBlIHN0cmluZyBhbmQgc2hvdWxkIHJlcHJlc2VudCBhIHZhbGlkIGRhdGUubWF4RGF0ZVN0YXJ0IC0gZGV0ZXJtaW5lcyB0aGUgbWF4aW11bSBkYXRlIHRoYXQgYSB0YXNrIGNhbiBzdGFydCBmcm9tLiBNdXN0IGJlIGlmIHR5cGUgc3RyaW5nIGFuZCBzaG91bGQgcmVwcmVzZW50IGEgdmFsaWQgZGF0ZS5taW5EYXRlRW5kIC0gZGV0ZXJtaW5lcyB0aGUgbWluaW51bSBkYXRlIHRoYXQgYSB0YXNrIGNhbiBlbmQuIE11c3QgYmUgaWYgdHlwZSBzdHJpbmcgYW5kIHNob3VsZCByZXByZXNlbnQgYSB2YWxpZCBkYXRlLm1heERhdGVFbmQgLSBkZXRlcm1pbmVzIHRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHRhc2sgY2FuIGVuZC4gTXVzdCBiZSBpZiB0eXBlIHN0cmluZyBhbmQgc2hvdWxkIHJlcHJlc2VudCBhIHZhbGlkIGRhdGUucHJvZ3Jlc3MgLSBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIHByb2dyZXNzIG9mIGEgdGFzayAoIGZyb20gMCB0byAxMDAgKS5kaXNhYmxlRHJhZyAtIGEgYm9vbGVhbiBwcm9wZXJ0eSB0aGF0IGRpc2FibGVzIHRoZSBkcmFnZ2luZyBvZiBhIHRhc2sgd2hlbiBzZXQgdG8gdHJ1ZS5kaXNhYmxlUmVzaXplIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgZGlzYWJsZXMgdGhlIHJlc2l6aW5nIG9mIGEgdGFzayB3aGVuIHNldCB0byB0cnVlLmRyYWdQcm9qZWN0IC0gYSBib29sZWFuIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2hvbGUgcHJvamVjdCAoYWxvbmcgd2l0aCB0aGUgdGFza3MpIGNhbiBiZSBkcmFnZ2VkIHdoaWxlIGRyYWdnaW5nIHRoZSBwcm9qZWN0IHRhc2suIEFwcGxpY2FsYmUgb25seSB0byBQcm9qZWN0cy5zeW5jaHJvbml6ZWQgLSBhIGJvb2xlYW4gdGhhdCBpZiBzZXQgdGhlIHByb2plY3QgdGFzaydzIHN0YXJ0L2VuZCBkYXRlcyBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSB0YXNrcy4gQnkgZGVmYXVsdCBhIHN5bmNocm9uaXplZCBwcm9qZWN0IHRhc2sgY2FuJ3QgYmUgZHJhZ2dlZCBhbG9uZS4gQXBwbGljYWJsZSBvbmx5IHRvIFByb2plY3QgdGFza3MuZXhwYW5kZWQgLSBhIGJvb2xlYW4gdGhhdCBkZXRlcm1pbmVzIGlmIGEgcHJvamVjdCBpcyBleHBhbmRlZCBvciBub3QuIElmIG5vdCBhbGwgb2YgaXQncyBzdWItdGFza3MgYXJlIG5vdCB2aXNpYmxlLiBPbmx5IHRoZSBwcm9qZWN0IHRhc2sgaXRzZWxmIGlzIHZpc2libGUuIEJ5IGRlZmF1bHQgbm8gcHJvamVjdHMgYXJlIGV4cGFuZGVkLiBBcHBsaWNhYmxlIG9ubHkgdG8gcHJvamVjdCB0YXNrcy4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IEdhbnR0Q2hhcnREYXRhU291cmNlW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZSh2YWx1ZTogR2FudHRDaGFydERhdGFTb3VyY2VbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW4gdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IGRheXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXlGb3JtYXQoKTogR2FudHREYXlGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF5Rm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXlGb3JtYXQodmFsdWU6IEdhbnR0RGF5Rm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGEgc3BlY2lmaWMgZW5kIGRhdGUgZm9yIHRoZSBUaW1lbGluZS4gVXNlZnVsbCB3aGVuIHRoZSB1c2VyIHdhbnRzIGN1c3RvbSBlbmRpbmcgZGF0ZSBmb3IgdGhlIFRpbWVsaW5lLiBJZiBubyBkYXRlIGlzIHNldCB0aGUgZW5kIGRhdGUgb2YgdGhlIHRpbWVsaW5lIGlzIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lZCBmcm9tIHRoZSB0YXNrcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGVFbmQoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlRW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRlRW5kKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVFbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBhIHNwZWNpZmljIHN0YXJ0aW5nIGRhdGUgZm9yIHRoZSBUaW1lbGluZS4gVXNlZnVsbCB3aGVuIHRoZSB1c2VyIHdhbnRzIGN1c3RvbSBzdGFydGluZyBkYXRlIGZvciB0aGUgVGltZWxpbmUuIElmIG5vIGRhdGUgaXMgc2V0IHRoZSBzdGFydCBkYXRlIG9mIHRoZSB0aW1lbGluZSBpcyBhdXRvbWF0aWNhbGx5IGRldGVybWluZWQgZnJvbSB0aGUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlU3RhcnQoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU3RhcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVTdGFydCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU3RhcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGF1dG8gc2Nyb2xsaW5nIHdoaWxlIGRyYWdnaW5nL3Jlc2l6aW5nIGEgdGFzayBiYXIgaW5zaWRlIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVBdXRvU2Nyb2xsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUF1dG9TY3JvbGwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVBdXRvU2Nyb2xsKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVBdXRvU2Nyb2xsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGRyYWdnaW5nIG9mIHRhc2tzIGluIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVUYXNrRHJhZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrRHJhZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVRhc2tEcmFnKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrRHJhZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0YXNrIHByb2dyZXNzIGNoYW5naW5nIGluIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVUYXNrUHJvZ3Jlc3NDaGFuZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza1Byb2dyZXNzQ2hhbmdlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlVGFza1Byb2dyZXNzQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrUHJvZ3Jlc3NDaGFuZ2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgcmVzaXppbmcgb2YgdGFza3MgaW4gdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVRhc2tSZXNpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza1Jlc2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVRhc2tSZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRhc2tSZXNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIHNlbGVjdGlvbiBpbnNpZGUgdGhlIEdhbnR0Q2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVNlbGVjdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VsZWN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSB3aW5kb3cgZWRpdG9yIGZvciB0aGUgR2FudHRDaGFydC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVXaW5kb3dFZGl0b3IoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlV2luZG93RWRpdG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlV2luZG93RWRpdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVXaW5kb3dFZGl0b3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpbiB3aGF0IHVuaXQgaXMgdGFzayBkdXJhdGlvbiBwcm9wZXJ0eSBtZWFzdXJlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGR1cmF0aW9uVW5pdCgpOiBEdXJhdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kdXJhdGlvblVuaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGR1cmF0aW9uVW5pdCh2YWx1ZTogRHVyYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHVyYXRpb25Vbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjcmVhdGUgYSBjdXN0b20gaGVhZGVyIGNvbnRlbnQgZm9yIHRoZSBUYXNrIFBhbmVsLiBUaGUgYXR0cmlidXRlIGFjY2VwdHMgYW4gSFRNTFRlbXBsYXRlIGVsZW1lbnQsIGl0J3MgaWQgb3IgYSBmdW5jdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyB0aGUgUmVzb3VyY2UgcGFuZWwgcmVnYXJkbGVzcyBvZiB0aGUgcmVzb3VyY2VzIGF2YWlsYWJpbGl0eSBCeSBkZWZhdWx0IHRoZSBSZXNvdXJjZSBwYW5lbCBpcyB2aXNpYmxlIGlmIHJlc291cmNlcyBhcmUgYWRkZWQgdG8gdGhlIEdhbnR0Q2hhcnQuIFRoaXMgcHJvcGVydHkgYWxsb3dzIHRvIGhpZGUgdGhlIFJlc291cmNlIHBhbmVsIHBlcm1hbmVudGx5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVJlc291cmNlUGFuZWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlUmVzb3VyY2VQYW5lbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVJlc291cmNlUGFuZWwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVJlc291cmNlUGFuZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3ZWF0aGVyIG9yIG5vdCBob3Jpem9udGFsIHNjcm9sbGJhciBpcyBzaG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KCk6IEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSh2YWx1ZTogSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXRlcyBpbnNpZGUgdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IGhvdXJzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG91ckZvcm1hdCgpOiBIb3VyRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhvdXJGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhvdXJGb3JtYXQodmFsdWU6IEhvdXJGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBXaGVuIHNldCB0aGUgVGltZWxpbmUgaXMgcG9zaXRpb25lZCBvbiB0aGUgbGVmdCBzaWRlIHdoaWxlIHRoZSBUYXNrIFRyZWUgaXMgcG9zaXRpb25lZCBvbiB0aGUgcmlnaHQuIEJ5IGRlZmF1bHQgaXQncyB2aWNlIHZlcnNhLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW52ZXJ0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnZlcnRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW52ZXJ0ZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW52ZXJ0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIGxhbmd1YWdlIG9mIHRoZSBHYW50dENoYXJ0LiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWF4aW11bSBwb3NzaWJsZSBkYXRlIG9mIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IG1heCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXgodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWluaW11bSBwb3NzaWJsZSBkYXRlIG9mIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW4odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IG1vbnRocy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1vbnRoRm9ybWF0KCk6IE1vbnRoRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vbnRoRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtb250aEZvcm1hdCh2YWx1ZTogTW9udGhGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBkYXlzIG9mIHRoZSB3ZWVrIGZyb20gMCB0byA2LCB3aGVyZSAwIGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgYW5kIDYgaXMgdGhlIGxhc3QgZGF5LiBOb253b3JraW5nIGRheXMgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aCBjb2xvcmVkIGNlbGxzIGluc2lkZSB0aGUgdGltZWxpbmUgYW5kIHdpbGwgYmUgaWdub3JlZCBkdXJpbmcgdGFzayByYW5nZSBjYWxjdWxhdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nRGF5cygpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ub253b3JraW5nRGF5cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm9ud29ya2luZ0RheXModmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdEYXlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG5vbndvcmtpbmcgaG91cnMgb2YgYSBkYXkuIEhvdXJzIGFyZSByZXByZXNlbnRlZCBhcyBudW1iZXJzIGluc2lkZSBhbiBhcnJheS4gSW4gdGhlIHRpbWxpbmUgdGhlIGNlbGxzIHRoYXQgcmVwcmVzZW50IG5vbndvcmtpbmcgZGF5cyBhcmUgY29sb3JlZCBkaWZmZXJlbnRseSBmcm9tIHRoZSByZXN0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbm9ud29ya2luZ0hvdXJzKCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdIb3VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm9ud29ya2luZ0hvdXJzKHZhbHVlOiBudW1iZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ub253b3JraW5nSG91cnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbXBsZXRseSBjdXN0b21pemUgdGhlIHBvcHVwIFdpbmRvdyB0aGF0IGlzIHVzZWQgdG8gaW50ZXJhY3Qgd2lkdGggdGFza3MgYnkgY2hhbmdpbmcgdGhlaXIgcHJvcGVydGllcy4gVGhlIGZ1bmN0aW9uIGFzIHRocmVlIGFyZ3VtZW50czogdGFyZ2V0IC0gdGhlIHRhcmdldCBwb3B1cCBXaW5kb3cgdGhhdCBpcyBhYm91dCB0byBiZSBvcGVuZWQudHlwZSAtIHRoZSB0eXBlIG9mIHRoZSB3aW5kb3cuIFRoZSB0eXBlIGRldGVybWluZXMgdGhlIHB1cnBvc2Ugb2YgdGhlIHdpbmRvdy4gVGhyZWUgcG9zc2libGUgdmFsdWVzOiAndGFzaycgKHRhc2sgZWRpdGluZyksICdjb25maXJtJyAoIGNvbmZpcm1hdGlvbiB3aW5kb3cpLCAnY29ubmVjdGlvbicgKHVzZWQgd2hlbiBkZWxldGluZyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0YXNrcykuIHRhc2tJbmRleCAtIHRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGlzIGJlaW5nIGVkaXRlZC4gSXQgd2lsbCBiZSB1bmRlZmluZWQgaWYgdGhlIHR5cGUgb2YgdGhlIHdpbmRvdyBpcyBub3QgJ3Rhc2snLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcG9wdXBXaW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBvcHVwV2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwb3B1cFdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBvcHVwV2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhIGZsYXQgc3RydWN0dXJlIGFzIGFuIGFycmF5IG9mIGFsbCByZXNvdXJjZXMgaW5zaWRlIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VzKCk6IEdhbnR0Q2hhcnRSZXNvdXJjZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VzKHZhbHVlOiBHYW50dENoYXJ0UmVzb3VyY2VbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJlbWluZXMgdGhlIGNvbHVtbnMgdGhhdCB3aWxsIGJlIHZpc2libGUgaW4gdGhlIFJlc291cmNlIFRyZWUuIEVhY2ggZW50cnkgaW4gdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgbXVzdCBiZSBvZiB0eXBlIE9iamVjdC4gIEl0IHNob3VsZCBjb250YWluIHRoZSBsYWJlbCBhbmQgdmFsdWUga2V5cy4gVGhlIHZhbHVlIG9mIGxhYmVsIGRldGVybWluZXMgdGhlIGNvbHVtbiBoZWFkZXIgbGFiZWwgaW5zaWRlIHRoZSBUYXNrIFRyZWUuIFRoZSB2YWx1ZSBvZiB2YWx1ZSBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjZWxscyBpbiB0aGUgY29sdW1uLiBCeSBkZWZhdWx0LCBvbmUgY29sdW1uIHdpdGggYWxsIHJlc291cmNlIGxhYmVscyBpcyB2aXNpYmxlLiAgQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiBmb3JtYXRGdW5jdGlvbiAtIGEgZnVuY3Rpb24gdGhhdCBhbGxvd3MgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIGVhY2ggcmVjb3JkIGluIHRoZSBjb2x1bW4uIFRoZSBmdW5jdGlvbiBhY2NlcHRzIHR3byBhcmd1bWVudHMgLSB0aGUgYWN0dWFsIGxhYmVsIGFzIHN0cmluZyB0aGF0IGlzIGdvaW5nIHRvIGJlIGluc2VydGVkIGFuZCB0aGUgaW5kZXggb2YgdGhlIHJlc291cmNlLiBUaGUgZnVuY3Rpb24gbXVzdCByZXR1cm4gYSBzdHJpbmcgYXMgdGhlIG5ldyBjb250ZW50LiBtaW4gLSBjb250cm9scyB0aGUgbWluIHNpemUgb2YgdGhlIGNvbHVtbiBtYXggLSBjb250cm9scyB0aGUgbWF4IHNpemUgb2YgdGhlIGNvbHVtbnNpemUgLSBjb250cm9scyB0aGUgYWN0dWFsIHNpemUgb2YgdGhlIGNvbHVtbiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VDb2x1bW5zKCk6IEdhbnR0Q2hhcnRSZXNvdXJjZUNvbHVtbltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlQ29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VDb2x1bW5zKHZhbHVlOiBHYW50dENoYXJ0UmVzb3VyY2VDb2x1bW5bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZUNvbHVtbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGNyZWF0ZSBhIGN1c3RvbSBoZWFkZXIgY29udGVudCBmb3IgdGhlIFJlc291cmNlIFBhbmVsLiBUaGUgYXR0cmlidXRlIGFjY2VwdHMgYW4gSFRNTFRlbXBsYXRlIGVsZW1lbnQsIGl0J3MgaWQgb3IgYSBmdW5jdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlUGFuZWxIZWFkZXJUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbEhlYWRlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVBhbmVsSGVhZGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsSGVhZGVyVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWluIHNpemUgb2YgdGhlIFJlc291cmNlIFBhbmVsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VQYW5lbE1pbigpOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbE1pbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VQYW5lbE1pbih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxNaW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2l6ZSBvZiB0aGUgUmVzb3VyY2UgUGFuZWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVBhbmVsU2l6ZSgpOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbFNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlUGFuZWxTaXplKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbFNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmVmcmVzaCByYXRlIG9mIHRoZSBSZXNvdXJjZSBQYW5lbCB3aGVuIGRyYWdnaW5nL3Jlc2l6aW5nL3Byb2dyZXNzIGNoYW5naW5nIGEgVGFzayBmcm9tIHRoZSBUaW1lbGluZS4gVGhpcyBwcm9wZXJ0eSBhbGxvd3MgdG8gY3VzdG9taXplIHRoZSBpbnRlcnZhbCBiZXR3ZWVuIHJlc291cmNlIFRyZWUvVGltZWxpbmUgcmVmcmVzaGVzLiBCeSBkZWZhdWx0IHRoZXkgcmVmcmVzaCBpbW1lZGlhdGVseSBhZnRlciBhIGNoYW5nZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlUGFuZWxSZWZyZXNoUmF0ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbFJlZnJlc2hSYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVBhbmVsUmVmcmVzaFJhdGUodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsUmVmcmVzaFJhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBjYWxsYmFjayB0aGF0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiB0aGUgcmVzb3VyY2UgVGltZWxpbmUgY2VsbHMuIFRoZSBjYWxsYmFjayBhY2NlcHRzIHRocmVlIGFyZ3VtZW50czogdGFza0luZGV4ZXMgLSBhbiBhcnJheSBvZiB0YXNrIGluZGV4ZXMgdGhhdCBhcmUgYXNzaWduZWQgdG8gdGhlIHJlc291cmNlIGZvciB0aGUgY3VycmVudCBjZWxsLnJlc291cmNlSW5kZXggLSB0aGUgaW5kZXggb2YgdGhlIHJlc291cmNlLmNlbGxEYXRlIC0gdGhlIGRhdGUgb2YgdGhlIGN1cnJlbnQgY2VsbC4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIHdoZW4gcmVzb3VyY2VUaW1lbGluZVZpZXcgaXMgc2V0IHRvIGN1c3RvbS4gRGVwZW5kaW5nIG9uIHRoZSByZXNvdXJjZVRpbWVsaW5lTW9kZSwgaXQgc2hvdWxkIHJldHVybjogc3RyaW5nIC0gd2hlbiB0aGUgcmVzb3VyY2VUaW1lbGluZU1vZGUgaXMgc2V0IHRvICdkaWFncmFtJy5vYmplY3QgLSB3aGVuIHRoZSByZXNvdXJjZVRpbWVsaW5lTW9kZSBpcyBzZXQgdG8gJ2hpc3RvZ3JhbScuIFRoZSBvYmplY3Qgc2hvdWxkIGhhdmUgdHdvIGF0dHJpYnV0ZXM6IGNhcGFjaXR5IGFuZCBtYXhDYXBhY2l0eSwgaW4gb3JkZXIgdG8gYmUgdmlzdWFsaXplZCBhcyBhIGhpc3RvZ3JhbS4uIEFub3RoZXIgdXNhZ2Ugb2YgdGhpcyBjYWxsYmFjayBpcyB0byBjdXN0b21pemUgdGhlIHRpbWVsaW5lIHJlc291cmNlIHJlcHJlc2VudGF0aW9uIGNvbXBsZXRlbHkgaWYgcmVzb3VyY2VUaW1lbGluZU1vZGUgaXMgc2V0IHRvIGN1c3RvbS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlVGltZWxpbmVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZUZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVRpbWVsaW5lRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBob3cgdGhlIGNhcGFjaXR5IG9mIHRoZSByZXNvdXJjZXMgd2lsbCBiZSB2aXN1YWxpemVkIGluc2lkZSB0aGUgcmVzb3VyY2UgdGltZWxpbmUuIEJ5IGRlZmF1bHQsIHRoZSBjYXBhY2l0eSBpcyBtZWFzdXJlZCBpbiBob3VycyBkZXBlbmRpbmcgb24gdGhlIHZpZXcgcHJvcGVydHkgb2YgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVRpbWVsaW5lTW9kZSgpOiBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZU1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlVGltZWxpbmVNb2RlKHZhbHVlOiBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZU1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBob3cgdGhlIHJlc291cmNlcyB3aWxsIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIHJlc291cmNlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VUaW1lbGluZVZpZXcoKTogR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlVGltZWxpbmVWaWV3IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVRpbWVsaW5lVmlldyh2YWx1ZTogR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVWaWV3KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlVGltZWxpbmVWaWV3ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzZWxlY3RlZCB0YXNrKHMpLiBJZiBlbXB0eSBubyB0YXNrcyBhcmUgc2VsZWN0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3RlZEluZGV4ZXMoKTogbnVtYmVyW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZEluZGV4ZXModmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXhlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBzZXQgdGhlIGRhdGVTdGFydC9kYXRlRW5kIG9mIHRoZSB0YXNrcyB3aWxsIGJlIGNvZXJjZWQgdG8gdGhlIG5lYXJlc3QgdGltZWxpbmUgY2VsbCBkYXRlICggYWNjb3JkaW5nIHRvIHRoZSB2aWV3ICkuIEFmZmVjdHMgdGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBhcyB3ZWxsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc25hcFRvTmVhcmVzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNuYXBUb05lYXJlc3QgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNuYXBUb05lYXJlc3QodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc25hcFRvTmVhcmVzdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIEdhbnR0Q2hhcnQgY2FuIGJlIHNvcnRlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0YWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIEdhbnR0Q2hhcnQgY2FuIGJlIHNvcnRlZCBieSBvbmUgb3IgbW9yZSBjb2x1bW5zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydE1vZGUoKTogR2FudHRDaGFydFNvcnRNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0TW9kZSh2YWx1ZTogR2FudHRDaGFydFNvcnRNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhIGZsYXQgc3RydWN0dXJlIGFzIGFuIGFycmF5IG9mIGFsbCB0YXNrcyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrcygpOiBHYW50dENoYXJ0VGFza1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrcyh2YWx1ZTogR2FudHRDaGFydFRhc2tbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcmVtaW5lcyB0aGUgY29sdW1ucyB0aGF0IHdpbGwgYmUgdmlzaWJsZSBpbiB0aGUgVGFzayBUcmVlLiBFYWNoIGVudHJ5IGluIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IG11c3QgYmUgb2YgdHlwZSBPYmplY3QuICBJdCBzaG91bGQgY29udGFpbiB0aGUgbGFiZWwgYW5kIHZhbHVlIGtleXMuIFRoZSB2YWx1ZSBvZiBsYWJlbCBkZXRlcm1pbmVzIHRoZSBjb2x1bW4gaGVhZGVyIGxhYmVsIGluc2lkZSB0aGUgVGFzayBUcmVlLiBUaGUgdmFsdWUgb2YgdmFsdWUgZGV0ZXJtaW5lcyB0aGUgY29udGVudCBvZiB0aGUgY2VsbHMgaW4gdGhlIGNvbHVtbi4gSXQgc2hvdWxkIHJlZmVyZW5jZSBhIHRhc2sgYXR0cmlidXRlIGZyb20gdGhlIGRhdGFTb3VyY2UuIEJ5IGRlZmF1bHQsIG9uZSBjb2x1bW4gd2l0aCBhbGwgdGFzayBsYWJlbHMgaXMgdmlzaWJsZS4gIEFkZGl0aW9uYWwgcHJvcGVydGllczogZm9ybWF0RnVuY3Rpb24gLSBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiBlYWNoIHJlY29yZCBpbiB0aGUgY29sdW1uLiBUaGUgZnVuY3Rpb24gYWNjZXB0cyBvbmUgYXJndW1lbnQgLSB0aGUgYWN0dWFsIGxhYmVsIGFzIHN0cmluZyB0aGF0IGlzIGdvaW5nIHRvIGJlIGluc2VydGVkIGFuZCBtdXN0IHJldHVybiBzb21lIGNvbnRlbnQuIG1pbiAtIGNvbnRyb2xzIHRoZSBtaW4gc2l6ZSBvZiB0aGUgY29sdW1uIG1heCAtIGNvbnRyb2xzIHRoZSBtYXggc2l6ZSBvZiB0aGUgY29sdW1uIHNpemUgLSBjb250cm9scyB0aGUgYWN0dWFsIHNpemUgb2YgdGhlIGNvbHVtbmN1c3RvbUVkaXRvciAtIGEgY2FsbGJhY2sgdGhhdCBjYW4gYmUgdXNlZCB0byBzZXQgYSBjdXN0b20gZWRpdG9yIGZvciB0aGUgY29sdW1uIHdoZW4gZWRpdGluZyB2aWEgdGhlIHdpbmRvdy4gSXQgYWNjZXB0cyB0d28gYXJndW1lbnRzIGxhYmVsIC0gdGhlIGxhYmVsIG9mIHRoZSBjb2x1bW52YWx1ZSAtIHRoZSB2YWx1ZSBvZiB0aGUgY29sdW1uLiBUaGUgY2FsbGJhY2sgbXVzdCByZXR1cm4gdGhlIGVkaXRvci5zZXRDdXN0b21FZGl0b3JWYWx1ZSAtIGEgY2FsbGJhY2sgdGhhdCBpcyB1c2VkIHRvIHNldCB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbSBlZGl0b3IuZ2V0Q3VzdG9tRWRpdG9yVmFsdWUgLSBhIGNhbGxiYWNrIHRoYXQgaXMgdXNlZCB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBjdXN0b20gZWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza0NvbHVtbnMoKTogR2FudHRDaGFydFRhc2tDb2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza0NvbHVtbnModmFsdWU6IEdhbnR0Q2hhcnRUYXNrQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbHVtbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWluIHNpemUgb2YgdGhlIFRhc2sgUGFuZWwuIFVzZWQgd2hlbiBSZXNvdXJjZSBQYW5lbCBpcyB2aXNpYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1BhbmVsTWluKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUGFuZWxNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQYW5lbE1pbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQYW5lbE1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzaXplIG9mIHRoZSBUYXNrIFBhbmVsLiBVc2VkIHdoZW4gUmVzb3VyY2UgUGFuZWwgaXMgdmlzaWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQYW5lbFNpemUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQYW5lbFNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQYW5lbFNpemUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUGFuZWxTaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbiB3aWR0aCBvZiB0aGUgdGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZU1pbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVsaW5lTWluKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWluIHdpZHRoIG9mIHRoZSB0YXNrIHRyZWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0cmVlTWluKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50cmVlTWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0cmVlTWluKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudHJlZU1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzaXplKHdpZHRoKSBvZiB0aGUgdGFzayB0cmVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdHJlZVNpemUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRyZWVTaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0cmVlU2l6ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRyZWVTaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZm9ybWF0IGZ1bmN0aW9uIGZvciB0aGUgSGVhZGVyIG9mIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2VhdGhlciBvciBub3QgdmVydGljYWwgc2Nyb2xsYmFyIGlzIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KCk6IFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSh2YWx1ZTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2aWV3aW5nIGRhdGUgcmFuZ2Ugb2YgdGhlIHRpbWVsaW5lLiBQb3NzaWJsZSB2YWx1ZXM6IGRheSAtIFRoZSB0aW1lbGluZSBzaG93IHRoZSBob3VycyBvZiB0aGUgZGF5LndlZWsgLSB0aGUgdGltZWxpbmUgc2hvd3MgdGhlIGRheXMgb2YgdGhlIHdlZWsubW9udGggLSB0aGUgdGltZWxpbmUgc2hvd3MgdGhlIGRheXMgb2YgdGhlIG1vbnRoLnllYXIgLSB0aGUgdGltZWxpbmUgc2hvd3MgdGhlIG1vbnRocyBvZiB0aGUgeWVhci5yZXNvdXJjZSAtIGRpc3BsYXlzIHRoZSBjdXJyZW50IHRhc2tzIGJ5IGdyb3VwaW5nIHRoZW0gYWNjb3JkaW5nIHRvIHRoZSByZXNvdXJjZXMgdGhleSBoYXZlIGFzc2lnbmVkLiBUaGUgdW5hc3NpZ25lZCB0YXNrcyB3aWxsIGJlIHBsYWNlZCBpbiBhIHNlcGFyYXRlIGdyb3VwIGNhbGxlZCAnVW5hc3NpZ25lZCcuICBUaGUgdGltZWxpbmUgaGFzIGEgaGVhZGVyIHNlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgbGFiZWxzIG9mIGVhY2ggY2VsbCBhY2NvcmRpbmcgdG8gdGhlIGRhdGUgaW5zaWRlIHRoZW0uIFRoZSBoZWFkZXIgaXMgc3BsaXR0ZWQgaW4gdHdvIHNlY3Rpb25zIGluIG9yZGVyIHRvIGdpdmUgYSBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uIG9mIHRoZSBkYXRlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXcoKTogR2FudHRDaGFydFZpZXcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlldyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlldyh2YWx1ZTogR2FudHRDaGFydFZpZXcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlldyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluc2lkZSB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgeWVhcnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB5ZWFyRm9ybWF0KCk6IFllYXJGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueWVhckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgeWVhckZvcm1hdCh2YWx1ZTogWWVhckZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC55ZWFyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW5zaWRlIHRoZSB0aW1lbGluZSBoZWFkZXIgd2hlbiB0aGV5IHJlcHJlc2VudCB3ZWVrcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCB3ZWVrRm9ybWF0KCk6IFdlZWtGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2Vla0Zvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgd2Vla0Zvcm1hdCh2YWx1ZTogV2Vla0Zvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZWxlbWVudCdzIHZpc3VhbCB0aGVtZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGlmIHRoZSBlbGVtZW50IGNhbiBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRhc2sgaXMgc2VsZWN0ZWQvdW5zZWxlY3RlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHRvbGRWYWx1ZSlcblx0KiAgIHZhbHVlIC0gVGhlIGluZGV4IG9mIHRoZSBuZXcgc2VsZWN0ZWQgdGFzay5cblx0KiAgIG9sZFZhbHVlIC0gVGhlIGluZGV4IG9mIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIHRhc2suXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHByb2dyZXNzIG9mIGEgdGFzayBiYXIgc3RhcnRzIHRvIGNoYW5nZSBhcyBhIHJlc3VsdCBvZiB1c2VyIGludGVyYWN0aW9uLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5kZXgsIFx0cHJvZ3Jlc3MpXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB3aGljaCBwcm9ncmVzcyBpcyBnb2luZyB0byBiZSBjaGFuZ2VkLlxuXHQqICAgcHJvZ3Jlc3MgLSBUaGUgcHJvZ3Jlc3Mgb2YgdGhlIHRhc2sgYmVmb3JlIGl0IGlzIGNoYW5nZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblByb2dyZXNzQ2hhbmdlU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBwcm9ncmVzcyBvZiBhIHRhc2sgaXMgY2hhbmdlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbmRleCwgXHRwcm9ncmVzcylcblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSB0YXNrIHdoaWNoIHByb2dyZXNzIGlzIGhhcyBiZWVuIGNoYW5nZWQuXG5cdCogICBwcm9ncmVzcyAtIFRoZSBwcm9ncmVzcyBvZiB0aGUgdGFzayBhZnRlciBpdCB3YXMgY2hhbmdlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUHJvZ3Jlc3NDaGFuZ2VFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGRyYWdnaW5nIG9mIGEgdGFzayBzdGFydHMuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbmRleCwgXHRkYXRlU3RhcnQsIFx0ZGF0ZUVuZClcblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0KiAgIGRhdGVTdGFydCAtIFRoZSBzdGFydCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0KiAgIGRhdGVFbmQgLSBUaGUgZW5kIGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyBnb2luZyB0byBiZSBkcmFnZ2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGRyYWdnaW5nIG9mIGEgdGFzayBmaW5pc2hlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbmRleCwgXHRkYXRlU3RhcnQsIFx0ZGF0ZUVuZClcblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSB0YXNrIHRoYXQgaXMgd2FzIGRyYWdnZWQuXG5cdCogICBkYXRlU3RhcnQgLSBUaGUgc3RhcnQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIHdhcyBkcmFnZ2VkLlxuXHQqICAgZGF0ZUVuZCAtIFRoZSBlbmQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIHdhcyBkcmFnZ2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiByZXNpemluZyBvZiBhIHRhc2sgc3RhcnRzLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5kZXgsIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQpXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBkYXRlU3RhcnQgLSBUaGUgc3RhcnQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBkYXRlRW5kIC0gVGhlIGVuZCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgcmVzaXplZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSByZXNpemluZyBvZiBhIHRhc2sgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5kZXgsIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQpXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IHdhcyByZXNpemVkLlxuXHQqICAgZGF0ZVN0YXJ0IC0gVGhlIHN0YXJ0IGRhdGUgb2YgdGhlIHRhc2sgdGhhdCB3YXMgcmVzaXplZC5cblx0KiAgIGRhdGVFbmQgLSBUaGUgZW5kIGRhdGUgb2YgdGhlIHRhc2sgdGhhdCB3YXMgcmVzaXplZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgY29ubmVjdGluZyBvbmUgdGFzayB0byBhbm90aGVyLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0c3RhcnRJbmRleClcblx0KiAgIHN0YXJ0SW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBhIGNvbm5lY3Rpb24gaXMgc3RhcnRlZCBmcm9tLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db25uZWN0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGNvbXBsZXRlcyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0d28gdGFza3MuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0c3RhcnRJbmRleCwgXHRlbmRJbmRleCwgXHR0eXBlKVxuXHQqICAgc3RhcnRJbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGEgY29ubmVjdGlvbiBpcyBzdGFydGVkIGZyb20uXG5cdCogICBlbmRJbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGEgY29ubmVjdGlvbiBpcyBzdGFydGVkIGZyb20uXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgY29ubmVjdGlvbi4gRm91cnMgdHlwZXMgYXJlIGF2YWlsYWJsZTogPHVsPjxsaT48Yj4wPC9iPiAtIHN0YXJ0LXRvLXN0YXJ0PC9saT48bGk+PGI+MTwvYj4gLSBlbmQtdG8tc3RhcnQ8L2xpPjxsaT48Yj4yPC9iPiAtIGVuZC10by1lbmQ8L2xpPjxsaT48Yj4zPC9iPiAtIHN0YXJ0LXRvLWVuZDwvbGk+PC91bD5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29ubmVjdGlvbkVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIFRpbWVsaW5lIGhhcyBiZWVuIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxCb3R0b21SZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgVGltZWxpbmUgaGFzIGJlZW4gc2Nyb2xsZWQgdG8gdGhlIHRvcC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbFRvcFJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBqdXN0IGJlZm9yZSB0aGUgd2luZG93IGZvciB0YXNrIGVkaXRpbmcgc3RhcnRzIG9wZW5pbmcuIFRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHR0eXBlKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGluc3RhbmNlIG9mIHRoZSB3aW5kb3cgdGhhdCBpcyBnb2luZyB0byBvcGVuLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdyB0aGF0IGlzIGdvaW5nIHRvIG9wZW4uIFRoZXJlIGFyZSB0aHJlZSB0eXBlcyBvZiB3aW5kb3dzIGluc2lkZSBHYW50dENoYXJ0OiA8dWw+PGxpPjxiPmNvbmZpcm08L2I+IC0gYSBjb25maXJtIHdpbmRvdy4gVGhpcyB0eXBlIG9mIHdpbmRvdyBpcyB1c3VhbGx5IHVzZWQgdG8gY29uZmlybSB0aGUgZGVsZXRpb24gb2YgYSB0YXNrLjwvbGk+PGxpPjxiPnRhc2s8L2I+IC0gYSB3aW5kb3cgdXNlZCBmb3IgdGFzayBlZGl0aW5nLjwvbGk+PGxpPjxiPmNvbm5lY3Rpb248L2I+IC0gYSB3aW5kb3cgdXNlZCB0byBkZWxldGUgYSBjb25uZWN0aW9uLjwvbGk+PC91bD5cblx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHdpbmRvdyBmb3IgdGFzayBlZGl0aW5nIGlzIG9wZW5lZCggdmlzaWJsZSApLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGp1c3QgYmVmb3JlIHRoZSB3aW5kb3cgZm9yIHRhc2sgZWRpdGluZyBzdGFydHMgY2xvc2luZy4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdHR5cGUpXG5cdCogICB0YXJnZXQgLSBUaGUgaW5zdGFuY2Ugb2YgdGhlIHdpbmRvdyB0aGF0IGlzIGdvaW5nIHRvIGNsb3NlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdyB0aGF0IGlzIGdvaW5nIHRvIGNsb3NlLiBUaGVyZSBhcmUgdGhyZWUgdHlwZXMgb2Ygd2luZG93cyBpbnNpZGUgR2FudHRDaGFydDogPHVsPjxsaT48Yj5jb25maXJtPC9iPiAtIGEgY29uZmlybSB3aW5kb3cuIFRoaXMgdHlwZSBvZiB3aW5kb3cgaXMgdXN1YWxseSB1c2VkIHRvIGNvbmZpcm0gdGhlIGRlbGV0aW9uIG9mIGEgdGFzay48L2xpPjxsaT48Yj50YXNrPC9iPiAtIGEgd2luZG93IHVzZWQgZm9yIHRhc2sgZWRpdGluZy48L2xpPjxsaT48Yj5jb25uZWN0aW9uPC9iPiAtIGEgd2luZG93IHVzZWQgdG8gZGVsZXRlIGEgY29ubmVjdGlvbi48L2xpPjwvdWw+XG5cdCovXG5cdEBPdXRwdXQoKSBvbkNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB3aW5kb3cgZm9yIHRhc2sgZWRpdGluZyBpcyBjbG9zZWQoIGhpZGRlbiApXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBQcm9qZWN0IGlzIGNvbGxhcHNlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbmRleCwgXHRsYWJlbCwgXHR2YWx1ZSlcblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBjb2xsYXBzZWQgcHJvamVjdC5cblx0KiAgIGxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBjb2xsYXBzZWQgcHJvamVjdC5cblx0KiAgIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBjb2xsYXBzZWQgcHJvamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgUHJvamVjdCBpcyBleHBhbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdGxhYmVsLCBcdHZhbHVlKVxuXHQqICAgaXRlbSAtIFRoZSBpbmRleCBvZiB0aGUgZXhwYW5kZWQgcHJvamVjdC5cblx0KiAgIGxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBleHBhbmRlZCBwcm9qZWN0LlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGV4cGFuZGVkIHByb2plY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSB0YXNrIGFzIHRoZSBsYXN0IGl0ZW0gb2YgYSBQcm9qZWN0LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdGFza0luZGV4LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgdGFzayBvciBhIHN0cmluZyB0aGF0IG1hdGNoZXMgdGhlIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLlxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBwcm9qZWN0SW5kZXguIEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYSBwcm9qZWN0IG9yIGEgc3RyaW5nIHRoYXQgbWF0Y2hlcyB0aGUgaGllcmFyY2hpY2FsIHBvc2l0aW9uIG9mIHRoZSBpdGVtLCBlLmcuICcwJyAoIGZvbGxvd2luZyBqcXhUcmVlIHN5bnRheCkuXG5cdCovXG4gICAgcHVibGljIGFkZFRhc2tUbyh0YXNrSW5kZXg6IHN0cmluZyB8IG51bWJlciwgcHJvamVjdEluZGV4OiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVGFza1RvKHRhc2tJbmRleCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRUYXNrVG8odGFza0luZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTdGFydHMgYW4gdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBpcyBhcHByb3ByaWF0ZSB3aGVuIGNhbGxpbmcgbXVsdGlwbGUgbWV0aG9kcyBvciBzZXQgbXVsdGlwbGUgcHJvcGVydGllcyBhdCBvbmNlLiBcblx0Ki9cbiAgICBwdWJsaWMgYmVnaW5VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXN1bWUgdGhlIHJlbmRlcmluZyBhbmQgd2lsbCByZWZyZXNoIHRoZSBHYW50dENoYXJ0LiBcblx0Ki9cbiAgICBwdWJsaWMgZW5kVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmZXJlc2hlcyB0aGUgR2FudHRDaGFydCBhZnRlciByZXNpemluZyBieSByZWNhbGN1bGF0aW5nIHRoZSBTY3JvbGxiYXJzLiAgXG5cdCogQHBhcmFtIHtib29sZWFufSBmdWxsUmVmcmVzaD8uIElmIHNldCB0aGUgR2FudHRDaGFydCB3aWxsIGJlIHJlLXJlbmRlcmVkIGNvbXBsZXRlbHkuXG5cdCovXG4gICAgcHVibGljIHJlZnJlc2goZnVsbFJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goZnVsbFJlZnJlc2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goZnVsbFJlZnJlc2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFsbCBjb25uZWN0aW9ucyBiZXR3ZWVuIHRhc2tzLiAgXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUFsbENvbm5lY3Rpb25zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGxDb25uZWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUFsbENvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBjb25uZWN0aW9uIGJldHdlZW4gdGFza3MuIFRoZSBmdW5jdGlvbiBhY2NlcHRzIHRocmVlIGFyZ3VtZW50cyh0YXNrJ3Mgc3RhcnQgaW5kZXgsIGVuZCBpbmRleCBhbmQgY29ubmVjdGlvbiB0eXBlKSBvciBvbmUgY29ubmVjdGlvbiBzdHJpbmcgYXJndW1lbnQgd2hpY2ggZGVzY3JpYmVzIHRoZSBjb25uZWN0aW9uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gc3RhcnRUYXNrSW5kZXguIFRoZSBpbmRleCBvZiB0aGUgc3RhcnQgdGFzayBvciB0aGUgY29ubmVjdGlvbiBzdHJpbmcgbGlrZSAnMi0zLTAuXG5cdCogQHBhcmFtIHtudW1iZXJ9IHRhc2tFbmRJbmRleD8uIFRoZSBpbmRleCBvZiB0aGUgZW5kIHRhc2suXG5cdCogQHBhcmFtIHtudW1iZXJ9IGNvbm5lY3Rpb25UeXBlPy4gVGhlIHR5cGUgb2YgdGhlIGNvbm5lY3Rpb24uIEEgbnVtZXJpYyB2YWx1ZSBmcm9tIDAgdG8gMy5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgcmVtb3ZlQ29ubmVjdGlvbihzdGFydFRhc2tJbmRleCwgdGFza0VuZEluZGV4PywgY29ubmVjdGlvblR5cGU/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbm5lY3Rpb24oc3RhcnRUYXNrSW5kZXgsIHRhc2tFbmRJbmRleCwgY29ubmVjdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgY29ubmVjdGlvbnMgb2YgYSB0YXNrIG9yIGJldHdlZW4gdHdvIHRhc2tzIGlmIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgcHJvdmlkZWQgYW5kIHZhbGlkLiBcblx0KiBAcGFyYW0ge251bWJlcn0gdGFza1N0YXJ0SW5kZXguIFRoZSBpbmRleCBvZiB0aGUgc3RhcnQgdGFzay4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHRhc2tFbmRJbmRleD8uIFRoZSBpbmRleCBvZiB0aGUgZW5kIHRhc2suXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIHJlbW92ZVRhc2tDb25uZWN0aW9uKHRhc2tTdGFydEluZGV4LCB0YXNrRW5kSW5kZXg/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2tDb25uZWN0aW9uKHRhc2tTdGFydEluZGV4LCB0YXNrRW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgdGFza3MuICBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJUYXNrcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJUYXNrcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgcmVzb3VyY2VzLiAgXG5cdCovXG4gICAgcHVibGljIGNsZWFyUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJlc291cmNlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHRhc2tzLiAgXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IHN0YXJ0VGFza0luZGV4LiBUaGUgaW5kZXggb2YgdGhlIHN0YXJ0IHRhc2sgb3IgdGhlIGNvbm5lY3Rpb24gc3RyaW5nIGxpa2UgJzItMy0wLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSB0YXNrRW5kSW5kZXg/LiBUaGUgaW5kZXggb2YgdGhlIGVuZCB0YXNrLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBjb25uZWN0aW9uVHlwZT8uIFRoZSB0eXBlIG9mIHRoZSBjb25uZWN0aW9uLiBBIG51bWVyaWMgdmFsdWUgZnJvbSAwIHRvIDMuXG5cdCovXG4gICAgcHVibGljIGNyZWF0ZUNvbm5lY3Rpb24oc3RhcnRUYXNrSW5kZXg6IG51bWJlciB8IHN0cmluZywgdGFza0VuZEluZGV4PzogbnVtYmVyLCBjb25uZWN0aW9uVHlwZT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4LCB0YXNrRW5kSW5kZXgsIGNvbm5lY3Rpb25UeXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4LCB0YXNrRW5kSW5kZXgsIGNvbm5lY3Rpb25UeXBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGFuIGV4cGFuZGVkIHByb2plY3Qgd2l0aCB0YXNrcy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGluZGV4LiBUaGUgaW5kZXggb2YgYSBwcm9qZWN0IHRhc2sgdGhhdCBzaG91bGQgYmUgY29sbGFwc2VkLlxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZShpbmRleDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZShpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIHN1cmUgYSBUYXNrIGlzIHZpc2libGUgYnkgc2Nyb2xsaW5nIHRvIGl0LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaXRlbS4gVGhlIGluZGV4IG9mIHRoZSB0YXJnZXQgVGFzay4gQ2FuIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIFRyZWUgaW5kZXggKCBzaW1pbGFyIHRvIGpxeFRyZWUgKVxuXHQqL1xuICAgIHB1YmxpYyBlbnN1cmVWaXNpYmxlKGl0ZW06IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuc3VyZVZpc2libGUoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBjb2xsYXBzZWQgcHJvamVjdCB3aXRoIHRhc2tzLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaW5kZXguIFRoZSBpbmRleCBvZiBhIHByb2plY3QgdGFzayB0aGF0IHNob3VsZCBiZSBleHBhbmRlZC5cblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kKGluZGV4OiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBkYXRhIG9mIFRyZWUgb2YgdGhlIEdhbnR0Q2hhcnQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRm9ybWF0LiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGV4cG9ydGVkIGZpbGUuIFRocmVlIHBvc3NpYmxlIHZhbHVlcyBhcmUgYXZhaWxhYmxlOiA8dWw+PGxpPjxiPnBkZjwvYj48L2xpPjxsaT48Yj54bHN4PC9iPjwvbGk+PGxpPjxiPmh0bWw8L2I+PC9saT48L3VsPlxuXHQqIEBwYXJhbSB7YW55fSBjYWxsYmFjaz8uIEEgY2FsbGJhY2sgdGhhdCBhbGxvd3MgdG8gZm9ybWF0IHRoZSBleHBvcnRlZCBkYXRhIGJhc2VkIG9uIGEgY29uZGl0aW9uLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzLCByZWZlciBybyB0aGUgU21hcnQgRXhwb3J0IERvY3VtZW50YXRpb24uXG5cdCovXG4gICAgcHVibGljIGV4cG9ydERhdGEoZGF0YUZvcm1hdDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYWxsIHRhc2tzIGluc2lkZSB0aGUgZWxlbWVudCBhbG9uZyB3aXRoIHRoZWlyIGNvbm5lY3Rpb25zIGFuZCBzZXR0aW5ncy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBpbmRleCBvZiBhIHRhc2suIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhc2suIEEgR2F0dENoYXJ0VGFzayBvYmplY3QuXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFRhc2tJbmRleCh0YXNrKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRhc2tJbmRleCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHRyZWUgcGF0aCBvZiBhIHRhc2suIFxuXHQqIEBwYXJhbSB7R2FudHRDaGFydFRhc2t9IHRhc2suIFJldHVybnMgdGhlIFRyZWUgcGF0aCBvZiB0aGUgdGFzayBhcyBhIHN0cmluZy5cblx0KiBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VGFza1BhdGgodGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUYXNrUGF0aCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGluZGV4IG9mIGEgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZS4gQSBHYW50dENoYXJ0UmVzb3VyY2Ugb2JqZWN0LlxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZUluZGV4KHJlc291cmNlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJlc291cmNlSW5kZXgocmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVW5zZWxlY3RzIGFsbCBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMgaW5zaWRlIHRoZSBHYW50dENoYXJ0IGluY2x1ZGluZyBUYXNrcyBhbmQgUmVzb3VyY2VzLiBJdCBhbHNvIGNsZWFycyB0aGUgYXNzaWdubWVudCBoaWdobGdpaHRlcnMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBmb3JtIExvY2FsU3RvcmFnZSBhY2NvcmRpbmcgdG8gaXQncyBpZC4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50IG9yIGNoZWNrcyBMb2NhbFN0b3JhZ2UgZm9yIGFueSBzYXZlZCBzdGF0ZXMgaWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBHYW50dCBDaGFydCB0YXNrcy5cblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgY3VycmVudCBzZXR0aW5ncyBvZiB0aGUgZWxlbWVudCB0byBMb2NhbFN0b3JhZ2UuIFJlcXVpcmVzIGFuIGlkIHRvIGJlIHNldCB0byB0aGUgZWxlbWVudC4gXG5cdCogQHBhcmFtIHthbnlbXX0gc3RhdGU/LiBBbiBBcnJheSBjb250YWluaW5nIGEgdmFsaWQgc3RydWN0dXJlIG9mIEdhbnR0IENoYXJ0IHRhc2tzLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlU3RhdGUoc3RhdGU/OiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgdGFzayBpbiB0aGUgdGltZWxpbmUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHRhc2sgb3IgYSBzdHJpbmcgdGhhdCBtYXRjaGVzIHRoZSBoaWVyYXJjaGljYWwgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KS5cblx0KiBAcGFyYW0ge2FueX0gdGFza09iamVjdC4gQW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBHYW50dCBDaGFydCB0YXNrLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRUYXNrKGluZGV4OiBzdHJpbmcgfCBudW1iZXIsIHRhc2tPYmplY3Q6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhIHRhc2sgaW5zaWRlIHRoZSB0aW1lbGluZS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGluZGV4LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgdGFzayBvciBhIHN0cmluZyB0aGF0IG1hdGNoZXMgdGhlIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLlxuXHQqIEBwYXJhbSB7YW55fSB0YXNrT2JqZWN0LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHRhc2suIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZGVzaXJlZCB0YXNrLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVUYXNrKGluZGV4OiBzdHJpbmcgfCBudW1iZXIsIHRhc2tPYmplY3Q6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIHRhc2sgZnJvbSB0aGUgdGltZWxpbmUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHRhc2sgb3IgYSBzdHJpbmcgdGhhdCBtYXRjaGVzIHRoZSBoaWVyYXJjaGljYWwgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlVGFzayhpbmRleDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2soaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2soaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IHJlc291cmNlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcmVzb3VyY2VJZC4gQSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhIHJlc291cmNlIG9yIGl0J3MgaGllcmFyY2hpY2FsIHBvc2l0aW9uLCBlLmcuICcwJyAoIGZvbGxvd2luZyBqcXhUcmVlIHN5bnRheCksIG9yIGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYSByZXNvdXJjZS5cblx0KiBAcGFyYW0ge2FueX0gcmVzb3VyY2VPYmplY3Q/LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHJlc291cmNlLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRSZXNvdXJjZShyZXNvdXJjZUlkOiBzdHJpbmcgfCBudW1iZXIsIHJlc291cmNlT2JqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydFJlc291cmNlKHJlc291cmNlSWQsIHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRSZXNvdXJjZShyZXNvdXJjZUlkLCByZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYW4gZXhpc3RpbmcgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZUlkLiBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgcmVzb3VyY2Ugb3IgaXQncyBoaWVyYXJjaGljYWwgcG9zaXRpb24sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KSwgb3IgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHJlc291cmNlLlxuXHQqIEBwYXJhbSB7YW55fSB0YXNrT2JqZWN0LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHJlc291cmNlLiBUaGUgcHJvcGVydGllcyBvZiB0aGlzIG9iamVjdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHRhcmdldCByZXNvdXJjZS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZDogYW55LCB0YXNrT2JqZWN0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZCwgdGFza09iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZCwgdGFza09iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSByZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IHJlc291cmNlSWQuIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYSByZXNvdXJjZSBvciBpdCdzIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLCBvciBhIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgcmVzb3VyY2UuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZVJlc291cmNlKHJlc291cmNlSWQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSZXNvdXJjZShyZXNvdXJjZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSZXNvdXJjZShyZXNvdXJjZUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIHBvcHVwIFdpbmRvdyBmb3Igc3BlY2lmaWMgdGFzayBFZGl0aW5nLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaW5kZXguIEEgc3RyaW5nIG9yIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIGVkaXRlZC5cblx0Ki9cbiAgICBwdWJsaWMgb3BlbldpbmRvdyhpbmRleDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbG9zZXMgYW4gb3BlbmVkIHBvcHVwIFdpbmRvdy4gVGhlIG1ldGhvZCB3aWxsIGNsb3NlIGFueSBvcGVuZWQgcG9wdXAgd2luZG93IGluc2lkZSB0aGUgZWxlbWVudC4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlV2luZG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVdpbmRvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlV2luZG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFByZXBhcmVzIHRoZSBHYW50dENoYXJ0IGZvciBwcmludGluZyBieSBvcGVuaW5nIHRoZSBicm93c2VyJ3MgUHJpbnQgUHJldmlldy4gXG5cdCovXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNvcnRzIHRoZSBHYW50dENoYXJ0IHRhc2tzL3Jlc291cmNlcyBpZiBzb3J0YWJsZSBpcyBlbmFibGVkLiBcblx0KiBAcGFyYW0ge2FueX0gY29sdW1ucz8uIEFuIEFycmF5IG9mIG9iamVjdHMgd2hpY2ggZGV0ZXJtaW5lIHdoaWNoIGNvbHVtbnMgdG8gYmUgc29ydGVkLCB0aGUgc29ydCBvcmRlciBhbmQgdGhlIHR5cGUgb2YgaXRlbSB0byBzb3J0OiB0YXNrIG9yIHJlc291cmNlLiBJZiBubyBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIHNvcnRpbmcgd2lsbCBiZSByZW1vdmVkLiA8YnIgLz4gQW4gb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogPHVsPjxsaT48Yj52YWx1ZTwvYj4gLSBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHZhbHVlIG9mIGEgPGI+dGFza0NvbHVtbjwvYj4gdG8gc29ydC48L2xpPjxsaT48Yj5zb3J0T3JkZXI8L2I+IC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBzb3J0aW5nIG9yZGVyIGZvciB0aGUgY29sdW1uOiAnYXNjJyAoYXNzY2VuZGluZyBzb3J0aW5nKSBvciAnZGVzYycgKGRlc2NlbmRpbmcpIGFyZSBwb3NzaWJsZSB2YWx1ZXMuIDwvbGk+PGxpPjxiPnR5cGU8L2I+IC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSB0eXBlIG9mIGl0ZW0gdG8gc29ydC4gVGhpcyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHdoaWNoIHBhbmVsIHdpbGwgYmUgc29ydGVkLiBUd28gcG9zc2libGUgdmFsdWVzOiAndGFzaycsICdyZXNvdXJjZScuPC9saT48L3VsPlxuXHQqL1xuICAgIHB1YmxpYyBzb3J0KGNvbHVtbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydChjb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zb3J0KGNvbHVtbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUHJvZ3Jlc3NDaGFuZ2VTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzc0NoYW5nZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Qcm9ncmVzc0NoYW5nZUVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzc0NoYW5nZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db25uZWN0aW9uU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29ubmVjdGlvblN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29ubmVjdGlvbkVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb25uZWN0aW9uRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbEJvdHRvbVJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxUb3BSZWFjaGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sbGFwc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXhwYW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzQ2hhbmdlU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3NDaGFuZ2VFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29ubmVjdGlvblN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29ubmVjdGlvblN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25FbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb25uZWN0aW9uRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=