import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let GanttChartComponent = class GanttChartComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a batch update was started after executing the beginUpdate method.
        *  @param event. The custom event. 	*/
        this.onBeginUpdate = new EventEmitter();
        /** @description This event is triggered when a batch update was ended from after executing the endUpdate method.
        *  @param event. The custom event. 	*/
        this.onEndUpdate = new EventEmitter();
        /** @description This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
        *   startIndex - The index of the task that a connection is started from.
        */
        this.onConnectionStart = new EventEmitter();
        /** @description This event is triggered when the user completes a connection between two tasks.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	startTaskId, 	startIndex, 	endIndex, 	endTaskId, 	type)
        *   id - The id of the connection that was created.
        *   startTaskId - The id of the task that a connection is started from.
        *   startIndex - The index of the task that a connection is started from.
        *   endIndex - The index of the task that a connection ended to.
        *   endTaskId - The id of the task that a connection ended to.
        *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
        */
        this.onConnectionEnd = new EventEmitter();
        /** @description This event is triggered when a Task is selected/unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
        *   value - The index of the new selected task.
        *   oldValue - The index of the previously selected task.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a Tree column is resized. Column resizing is controled by the columnResize property.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	widthInPercentages, 	width)
        *   dataField - The name of the column. Corresponds to the <b>value</b> attribute of a <b>taskColumns/resourceColumns</b> object.
        *   headerCellElement - The HTMLElement column cell element that was resized.
        *   widthInPercentages - The new width of the column in percentages.
        *   width - The new width of the column in pixels.
        */
        this.onColumnResize = new EventEmitter();
        /** @description This event is triggered just before the window for task editing or tooltip is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
        *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip.
        *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
        *   target - The instance of the window/tooltip that is going to close.
        *   type - The type of window/tooltip that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
        */
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when the window for task editing is closed( hidden )
        *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
        *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
        *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
        *   target - The instance of the window/tooltip that is closed.
        *   type - The type of window/tooltip that is closed. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
        */
        this.onClose = new EventEmitter();
        /** @description This event is triggered when an item is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
        *   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
        *   item - The object details of the collapsed item.
        *   index - The index of the collapsed item.
        *   label - The label of the collapsed item.
        *   value - The value of the collapsed item.
        */
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
        *   id - The id of the task that is going to be dragged.
        *   item - The object of the task that is going to be dragged.
        *   dateStart - The start date of the task that is going to be dragged.
        *   dateEnd - The end date of the task that is going to be dragged.
        *   segment - The segment object that is going to be dragged. This attribute is undefined if a segment is not going to be dragged.
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when dragging of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
        *   id - The id of the task that is was dragged.
        *   item - The object of the task that is was dragged.
        *   dateStart - The start date of the task that is was dragged.
        *   dateEnd - The end date of the task that is was dragged.
        *   segment - The segment object that was dragged. This attribute is undefined if a segment has not been dragged.
        */
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when an item is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
        *   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
        *   item - The index of the expanded item.
        *   index - The index of the expanded item.
        *   label - The label of the expanded item.
        *   value - The value of the expanded item.
        */
        this.onExpand = new EventEmitter();
        /** @description This event is triggered when the GanttChart is filtered.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	action, 	filters)
        *   type - The type of items that have been filtered ( task or resource ).
        *   action - The name of the filtering action (whether filtering is added or removed).
        *   filters - The filters that have been applied. Filters represent JQX.Utilities.FilterGroup objects.
        */
        this.onFilter = new EventEmitter();
        /** @description This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	type, 	originalEvent)
        *   id - The id of the task.
        *   item - The item that was clicked. It can be a task, resource or connection.
        *   type - The type of item. Possible values are: 'task', 'project', 'resource', 'connection'.
        *   originalEvent - The original DOM event.
        */
        this.onItemClick = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is inserted.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemInsert = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	item)
        *   id - The id of the task.
        *   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemRemove = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	item)
        *   id - The id of the task.
        *   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemUpdate = new EventEmitter();
        /** @description This event is triggered just before the window for task editing or tooltip is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
        *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
        *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
        *   target - The instance of the window/tooltip that is going to open.
        *   type - The type of window/tooltip that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
        */
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window for task editing is opened( visible ) or when the tooltip is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
        *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
        *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
        *   target - The instance of the window/tooltip that is opened.
        *   type - The type of window/tooltip that is opened. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
        */
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	index, 	progress)
        *   id - The id of the task.
        *   index - The index of the task which progress is going to be changed.
        *   progress - The progress of the task before it is changed.
        */
        this.onProgressChangeStart = new EventEmitter();
        /** @description This event is triggered when the progress of a task is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	index, 	progress)
        *   id - The id of the task.
        *   index - The index of the task which progress is has been changed.
        *   progress - The progress of the task after it was changed.
        */
        this.onProgressChangeEnd = new EventEmitter();
        /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
        *   id - The id of the task that is going to be resized.
        *   item - The object of the task that is going to be resized.
        *   dateStart - The start date of the task that is going to be resized.
        *   dateEnd - The end date of the task that is going to be resized.
        *   segment - The segment object that is going to be resized. This attribute is undefined if a segment is not going to be resized.
        */
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
        *   id - The id of the task that was resized.
        *   item - The object of the task that was resized.
        *   dateStart - The start date of the task that was resized.
        *   dateEnd - The end date of the task that was resized.
        *   segment - The segment object that was resized. This attribute is undefined if a segment has not been resized.
        */
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the GanttChart is sorted by some column.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes)
        *   type - The type of columns that have been sorted ( task or resource column ).
        *   columns - An array of objects that contains the currently sorted column objects.
        *   sortDataFields - The dataFields of the columns that have been sorted. The dataField corresponds to the <b>value</b> property of a <b>taskColumns/resourceColumns</b> object.
        *   sortOrders - The orders of the columns that have been sorted.
        *   sortDataTypes - The data types of the columns that have been sorted.
        */
        this.onSort = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the bottom.
        *  @param event. The custom event. 	*/
        this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the top.
        *  @param event. The custom event. 	*/
        this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the beginning (horizontally).
        *  @param event. The custom event. 	*/
        this.onScrollLeftReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the end (horizontally).
        *  @param event. The custom event. 	*/
        this.onScrollRightReached = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-gantt-chart');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Determines whether nonworkingDays/nonworkingHours are taken into considuration when determining the dateEnd of the tasks. When this property is enabled the dateEnd of the tasks is calculated to include only the actual working time. By default it's disabled and only calendar time is used. */
    get adjustToNonworkingTime() {
        return this.nativeElement ? this.nativeElement.adjustToNonworkingTime : undefined;
    }
    set adjustToNonworkingTime(value) {
        this.nativeElement ? this.nativeElement.adjustToNonworkingTime = value : undefined;
    }
    /** @description Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks. */
    get autoSchedule() {
        return this.nativeElement ? this.nativeElement.autoSchedule : undefined;
    }
    set autoSchedule(value) {
        this.nativeElement ? this.nativeElement.autoSchedule = value : undefined;
    }
    /** @description Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined. */
    get autoScheduleStrictMode() {
        return this.nativeElement ? this.nativeElement.autoScheduleStrictMode : undefined;
    }
    set autoScheduleStrictMode(value) {
        this.nativeElement ? this.nativeElement.autoScheduleStrictMode = value : undefined;
    }
    /** @description Determines the scroll speed when dragging when autoScroll property is set.  */
    get autoScrollStep() {
        return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
    }
    set autoScrollStep(value) {
        this.nativeElement ? this.nativeElement.autoScrollStep = value : undefined;
    }
    /** @description Enabled/Disables the colummn header menu. When enabled and the user hovers a column header, a drop down button will appear that triggers a column menu for quick actions like sorting, filtering, etc. The actions depend on the enabled Gantt features, for example the filtering action will be available only if filtering is enabled for the element. */
    get columnMenu() {
        return this.nativeElement ? this.nativeElement.columnMenu : undefined;
    }
    set columnMenu(value) {
        this.nativeElement ? this.nativeElement.columnMenu = value : undefined;
    }
    /** @description Determines whether the Table columns are resizable or not. When enabled it is possible to resize the columns from the header cells of the Table in both Task and Resource timelines. */
    get columnResize() {
        return this.nativeElement ? this.nativeElement.columnResize : undefined;
    }
    set columnResize(value) {
        this.nativeElement ? this.nativeElement.columnResize = value : undefined;
    }
    /** @description Determines resize feedback is used during column resizing. This property is applicable only when columnResize is enabled. */
    get columnResizeFeedback() {
        return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
    }
    set columnResizeFeedback(value) {
        this.nativeElement ? this.nativeElement.columnResizeFeedback = value : undefined;
    }
    /** @description Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells. */
    get currentTimeIndicator() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
    }
    set currentTimeIndicator(value) {
        this.nativeElement ? this.nativeElement.currentTimeIndicator = value : undefined;
    }
    /** @description Determines the refresh interval in seconds for the currentTimeIndicator.  */
    get currentTimeIndicatorInterval() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
    }
    set currentTimeIndicatorInterval(value) {
        this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval = value : undefined;
    }
    /** @description Sets the GanttChart's Data Export options. */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        this.nativeElement ? this.nativeElement.dataExport = value : undefined;
    }
    /** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown. The duration always shows the calendar time whether it is in days/hours or other.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).overdue - a boolean that indicates whether the task's dateEnd has surpassed it's deadline date.disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.segments - an array of objects that allows to devide a task into multiple segements. Each segment (except the first) can have a different starting date, duration and label.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..GanttChart also accepts a DataAdapter instance as dataSource. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Determines the format of the dates in the timeline header when they represent days. */
    get dayFormat() {
        return this.nativeElement ? this.nativeElement.dayFormat : undefined;
    }
    set dayFormat(value) {
        this.nativeElement ? this.nativeElement.dayFormat = value : undefined;
    }
    /** @description Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks. */
    get dateEnd() {
        return this.nativeElement ? this.nativeElement.dateEnd : undefined;
    }
    set dateEnd(value) {
        this.nativeElement ? this.nativeElement.dateEnd = value : undefined;
    }
    /** @description Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks. */
    get dateStart() {
        return this.nativeElement ? this.nativeElement.dateStart : undefined;
    }
    set dateStart(value) {
        this.nativeElement ? this.nativeElement.dateStart = value : undefined;
    }
    /** @description Determines the date markers that will be displayed inside the timeline. Date markers allow to mark and even label specific dates (including time) inside the GanttChart timeline. */
    get dateMarkers() {
        return this.nativeElement ? this.nativeElement.dateMarkers : undefined;
    }
    set dateMarkers(value) {
        this.nativeElement ? this.nativeElement.dateMarkers = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Disables auto scrolling while dragging/resizing a task bar inside the Timeline. */
    get disableAutoScroll() {
        return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
    }
    set disableAutoScroll(value) {
        this.nativeElement ? this.nativeElement.disableAutoScroll = value : undefined;
    }
    /** @description Disables dragging of tasks in the Timeline. */
    get disableTaskDrag() {
        return this.nativeElement ? this.nativeElement.disableTaskDrag : undefined;
    }
    set disableTaskDrag(value) {
        this.nativeElement ? this.nativeElement.disableTaskDrag = value : undefined;
    }
    /** @description Disables task progress changing in the Timeline. */
    get disableTaskProgressChange() {
        return this.nativeElement ? this.nativeElement.disableTaskProgressChange : undefined;
    }
    set disableTaskProgressChange(value) {
        this.nativeElement ? this.nativeElement.disableTaskProgressChange = value : undefined;
    }
    /** @description Disables resizing of tasks in the Timeline. */
    get disableTaskResize() {
        return this.nativeElement ? this.nativeElement.disableTaskResize : undefined;
    }
    set disableTaskResize(value) {
        this.nativeElement ? this.nativeElement.disableTaskResize = value : undefined;
    }
    /** @description Disables the selection inside the GanttChart. */
    get disableSelection() {
        return this.nativeElement ? this.nativeElement.disableSelection : undefined;
    }
    set disableSelection(value) {
        this.nativeElement ? this.nativeElement.disableSelection = value : undefined;
    }
    /** @description Disables the task segment dragging. */
    get disableSegmentDrag() {
        return this.nativeElement ? this.nativeElement.disableSegmentDrag : undefined;
    }
    set disableSegmentDrag(value) {
        this.nativeElement ? this.nativeElement.disableSegmentDrag = value : undefined;
    }
    /** @description Disables the task segment resizing. */
    get disableSegmentResize() {
        return this.nativeElement ? this.nativeElement.disableSegmentResize : undefined;
    }
    set disableSegmentResize(value) {
        this.nativeElement ? this.nativeElement.disableSegmentResize = value : undefined;
    }
    /** @description Disables the window editor for the GanttChart. */
    get disableWindowEditor() {
        return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
    }
    set disableWindowEditor(value) {
        this.nativeElement ? this.nativeElement.disableWindowEditor = value : undefined;
    }
    /** @description Determines in what unit is task duration property measured. */
    get durationUnit() {
        return this.nativeElement ? this.nativeElement.durationUnit : undefined;
    }
    set durationUnit(value) {
        this.nativeElement ? this.nativeElement.durationUnit = value : undefined;
    }
    /** @description Determines whether a dedicated filter row is used for Table filtering instead of the default filter input. This property has no effect if filtering is not enabled. */
    get filterRow() {
        return this.nativeElement ? this.nativeElement.filterRow : undefined;
    }
    set filterRow(value) {
        this.nativeElement ? this.nativeElement.filterRow = value : undefined;
    }
    /** @description Groups the tasks inside the Task timeline according to the resources they are assigned to. Unassigned tasks are placed in a default group labeled 'Unassigned'. */
    get groupByResources() {
        return this.nativeElement ? this.nativeElement.groupByResources : undefined;
    }
    set groupByResources(value) {
        this.nativeElement ? this.nativeElement.groupByResources = value : undefined;
    }
    /** @description Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
    get headerTemplate() {
        return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
    }
    set headerTemplate(value) {
        this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
    }
    /** @description Determines whether the dateMarkers are visible or not. */
    get hideDateMarkers() {
        return this.nativeElement ? this.nativeElement.hideDateMarkers : undefined;
    }
    set hideDateMarkers(value) {
        this.nativeElement ? this.nativeElement.hideDateMarkers = value : undefined;
    }
    /** @description By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ). */
    get hideTimelineHeaderDetails() {
        return this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails : undefined;
    }
    set hideTimelineHeaderDetails(value) {
        this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails = value : undefined;
    }
    /** @description Shows the selection column of the Task/Resource Table. When applied a checkbox column is displayed that allows to select tasks/resources. */
    get showSelectionColumn() {
        return this.nativeElement ? this.nativeElement.showSelectionColumn : undefined;
    }
    set showSelectionColumn(value) {
        this.nativeElement ? this.nativeElement.showSelectionColumn = value : undefined;
    }
    /** @description Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently. */
    get hideResourcePanel() {
        return this.nativeElement ? this.nativeElement.hideResourcePanel : undefined;
    }
    set hideResourcePanel(value) {
        this.nativeElement ? this.nativeElement.hideResourcePanel = value : undefined;
    }
    /** @description Determines weather or not horizontal scrollbar is shown. */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
    }
    /** @description Determines the format of the dates inside the timeline header when they represent hours. */
    get hourFormat() {
        return this.nativeElement ? this.nativeElement.hourFormat : undefined;
    }
    set hourFormat(value) {
        this.nativeElement ? this.nativeElement.hourFormat = value : undefined;
    }
    /** @description When enabled, scrolling to the end of the horizotal timeline, triggers the creation of additional to extend the time range. The number of cells to be added when the scrollbar reaches the end position is determined by the infiniteTimelineStep. */
    get infiniteTimeline() {
        return this.nativeElement ? this.nativeElement.infiniteTimeline : undefined;
    }
    set infiniteTimeline(value) {
        this.nativeElement ? this.nativeElement.infiniteTimeline = value : undefined;
    }
    /** @description Determines the number of cells to be added when the horizontal scroll bar of the Timeline reaches it's end position when infiniteTimeline is enabled. */
    get infiniteTimelineStep() {
        return this.nativeElement ? this.nativeElement.infiniteTimelineStep : undefined;
    }
    set infiniteTimelineStep(value) {
        this.nativeElement ? this.nativeElement.infiniteTimelineStep = value : undefined;
    }
    /** @description When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa. */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        this.nativeElement ? this.nativeElement.inverted = value : undefined;
    }
    /** @description Determines whether keyboard navigation inside the Table is enabled or not. Keyboard navigation affects both Task and Resource Tables. It allows to navigate between items. the following keyboard shortcut keys are available for focused tasks inside the Task Table: Enter - opens the Window editor to edit the currently focused task.Delete - opens a confirmation window regarding the deletion of the currently focused task. */
    get keyboardNavigation() {
        return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
    }
    set keyboardNavigation(value) {
        this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
    }
    /** @description  Determines the language of the GanttChart.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Detetmines the maximum possible date of the Timeline. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Detetmines the minimum possible date of the Timeline. */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines the format of the dates the timeline header when they represent months. */
    get monthFormat() {
        return this.nativeElement ? this.nativeElement.monthFormat : undefined;
    }
    set monthFormat(value) {
        this.nativeElement ? this.nativeElement.monthFormat = value : undefined;
    }
    /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled. */
    get nonworkingDays() {
        return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
    }
    set nonworkingDays(value) {
        this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
    }
    /** @description Determines the nonworking hours of a day. Hours are represented as numbers inside an array (e.g. [1,2,3] - means 1,2 and 3 AM) or number ranges represented as nested arrays(e.g. [[0,6]] - means from 0 to 6 AM). In the timline the cells that represent nonworking days are colored differently from the rest and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled. */
    get nonworkingHours() {
        return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
    }
    set nonworkingHours(value) {
        this.nativeElement ? this.nativeElement.nonworkingHours = value : undefined;
    }
    /** @description A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). item - the connection/task object that is the target of the window. */
    get popupWindowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
    }
    set popupWindowCustomizationFunction(value) {
        this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction = value : undefined;
    }
    /** @description Determines which Tab items are visible inside the popup window. Three possible values are allowed: general - the general tab with task properties determines by the taskColumns property.dependency - the dependency tab which shows the connections to the task and allows to create/delete connections.segments - the segments tab which shows the segments of the task and allows to created/delete segments.. */
    get popupWindowTabs() {
        return this.nativeElement ? this.nativeElement.popupWindowTabs : undefined;
    }
    set popupWindowTabs(value) {
        this.nativeElement ? this.nativeElement.popupWindowTabs = value : undefined;
    }
    /** @description A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property. */
    get progressLabelFormatFunction() {
        return this.nativeElement ? this.nativeElement.progressLabelFormatFunction : undefined;
    }
    set progressLabelFormatFunction(value) {
        this.nativeElement ? this.nativeElement.progressLabelFormatFunction = value : undefined;
    }
    /** @description A getter that returns a flat structure as an array of all resources inside the element. */
    get resources() {
        return this.nativeElement ? this.nativeElement.resources : undefined;
    }
    set resources(value) {
        this.nativeElement ? this.nativeElement.resources = value : undefined;
    }
    /** @description Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column */
    get resourceColumns() {
        return this.nativeElement ? this.nativeElement.resourceColumns : undefined;
    }
    set resourceColumns(value) {
        this.nativeElement ? this.nativeElement.resourceColumns = value : undefined;
    }
    /** @description Determines whether the Resource Table is filterable or not. */
    get resourceFiltering() {
        return this.nativeElement ? this.nativeElement.resourceFiltering : undefined;
    }
    set resourceFiltering(value) {
        this.nativeElement ? this.nativeElement.resourceFiltering = value : undefined;
    }
    /** @description A format function that allows to re-format the group row labels when groupByResources is enabled. */
    get resourceGroupFormatFunction() {
        return this.nativeElement ? this.nativeElement.resourceGroupFormatFunction : undefined;
    }
    set resourceGroupFormatFunction(value) {
        this.nativeElement ? this.nativeElement.resourceGroupFormatFunction = value : undefined;
    }
    /** @description Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
    get resourcePanelHeaderTemplate() {
        return this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate : undefined;
    }
    set resourcePanelHeaderTemplate(value) {
        this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate = value : undefined;
    }
    /** @description Determines the min size of the Resource Panel. */
    get resourcePanelMin() {
        return this.nativeElement ? this.nativeElement.resourcePanelMin : undefined;
    }
    set resourcePanelMin(value) {
        this.nativeElement ? this.nativeElement.resourcePanelMin = value : undefined;
    }
    /** @description Determines the size of the Resource Panel. */
    get resourcePanelSize() {
        return this.nativeElement ? this.nativeElement.resourcePanelSize : undefined;
    }
    set resourcePanelSize(value) {
        this.nativeElement ? this.nativeElement.resourcePanelSize = value : undefined;
    }
    /** @description Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change. */
    get resourcePanelRefreshRate() {
        return this.nativeElement ? this.nativeElement.resourcePanelRefreshRate : undefined;
    }
    set resourcePanelRefreshRate(value) {
        this.nativeElement ? this.nativeElement.resourcePanelRefreshRate = value : undefined;
    }
    /** @description A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom. */
    get resourceTimelineFormatFunction() {
        return this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction : undefined;
    }
    set resourceTimelineFormatFunction(value) {
        this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction = value : undefined;
    }
    /** @description Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element. */
    get resourceTimelineMode() {
        return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
    }
    set resourceTimelineMode(value) {
        this.nativeElement ? this.nativeElement.resourceTimelineMode = value : undefined;
    }
    /** @description Determines how the resources will be displayed inside the resource Timeline. */
    get resourceTimelineView() {
        return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
    }
    set resourceTimelineView(value) {
        this.nativeElement ? this.nativeElement.resourceTimelineView = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Sets which tasks to select by their id or gets the currently selected task ids. If no id is provided for the task, an internal id is generated for each task according to it's index(tree path). */
    get selectedTaskIds() {
        return this.nativeElement ? this.nativeElement.selectedTaskIds : undefined;
    }
    set selectedTaskIds(value) {
        this.nativeElement ? this.nativeElement.selectedTaskIds = value : undefined;
    }
    /** @description Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path). */
    get selectedResourceIds() {
        return this.nativeElement ? this.nativeElement.selectedResourceIds : undefined;
    }
    set selectedResourceIds(value) {
        this.nativeElement ? this.nativeElement.selectedResourceIds = value : undefined;
    }
    /** @description Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded. */
    get shadeUntilCurrentTime() {
        return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
    }
    set shadeUntilCurrentTime(value) {
        this.nativeElement ? this.nativeElement.shadeUntilCurrentTime = value : undefined;
    }
    /** @description Determines whether the baselnes of the tasks are visible or not. Baselines are defined via the 'planned' attribute on the task objects of the dataSource property. */
    get showBaseline() {
        return this.nativeElement ? this.nativeElement.showBaseline : undefined;
    }
    set showBaseline(value) {
        this.nativeElement ? this.nativeElement.showBaseline = value : undefined;
    }
    /** @description Shows the progress label inside the progress bars of the Timeline tasks. */
    get showProgressLabel() {
        return this.nativeElement ? this.nativeElement.showProgressLabel : undefined;
    }
    set showProgressLabel(value) {
        this.nativeElement ? this.nativeElement.showProgressLabel = value : undefined;
    }
    /** @description If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well. */
    get snapToNearest() {
        return this.nativeElement ? this.nativeElement.snapToNearest : undefined;
    }
    set snapToNearest(value) {
        this.nativeElement ? this.nativeElement.snapToNearest = value : undefined;
    }
    /** @description Determines whether the GanttChart can be sorted by one, more then one or no columns. */
    get sortFunction() {
        return this.nativeElement ? this.nativeElement.sortFunction : undefined;
    }
    set sortFunction(value) {
        this.nativeElement ? this.nativeElement.sortFunction = value : undefined;
    }
    /** @description A getter that returns a flat structure as an array of all tasks inside the element. */
    get sortMode() {
        return this.nativeElement ? this.nativeElement.sortMode : undefined;
    }
    set sortMode(value) {
        this.nativeElement ? this.nativeElement.sortMode = value : undefined;
    }
    /** @description Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor. */
    get tasks() {
        return this.nativeElement ? this.nativeElement.tasks : undefined;
    }
    set tasks(value) {
        this.nativeElement ? this.nativeElement.tasks = value : undefined;
    }
    /** @description Determines whether the Task Table is filterable or not. */
    get taskColumns() {
        return this.nativeElement ? this.nativeElement.taskColumns : undefined;
    }
    set taskColumns(value) {
        this.nativeElement ? this.nativeElement.taskColumns = value : undefined;
    }
    /** @description Determines the min size of the Task Panel. Used when Resource Panel is visible. */
    get taskFiltering() {
        return this.nativeElement ? this.nativeElement.taskFiltering : undefined;
    }
    set taskFiltering(value) {
        this.nativeElement ? this.nativeElement.taskFiltering = value : undefined;
    }
    /** @description Determines the size of the Task Panel. Used when Resource Panel is visible. */
    get taskPanelMin() {
        return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
    }
    set taskPanelMin(value) {
        this.nativeElement ? this.nativeElement.taskPanelMin = value : undefined;
    }
    /** @description Determines the min width of the timeline. */
    get taskPanelSize() {
        return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
    }
    set taskPanelSize(value) {
        this.nativeElement ? this.nativeElement.taskPanelSize = value : undefined;
    }
    /** @description Determines the min width of the task table. */
    get timelineMin() {
        return this.nativeElement ? this.nativeElement.timelineMin : undefined;
    }
    set timelineMin(value) {
        this.nativeElement ? this.nativeElement.timelineMin = value : undefined;
    }
    /** @description Determines the size(width) of the task table. */
    get treeMin() {
        return this.nativeElement ? this.nativeElement.treeMin : undefined;
    }
    set treeMin(value) {
        this.nativeElement ? this.nativeElement.treeMin = value : undefined;
    }
    /** @description A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element. */
    get treeSize() {
        return this.nativeElement ? this.nativeElement.treeSize : undefined;
    }
    set treeSize(value) {
        this.nativeElement ? this.nativeElement.treeSize = value : undefined;
    }
    /** @description Determines whether the tooltips are enabled or not. Tooltips are available for timeline tasks, resources, connections, indicators and segments. */
    get timelineHeaderFormatFunction() {
        return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
    }
    set timelineHeaderFormatFunction(value) {
        this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
    }
    /** @description Determines weather or not vertical scrollbar is shown. */
    get tooltip() {
        return this.nativeElement ? this.nativeElement.tooltip : undefined;
    }
    set tooltip(value) {
        this.nativeElement ? this.nativeElement.tooltip = value : undefined;
    }
    /** @description Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
    }
    /** @description Determines the format of the dates inside the timeline header when they represent years. */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        this.nativeElement ? this.nativeElement.view = value : undefined;
    }
    /** @description Determines the format of the dates inside the timeline header when they represent weeks.  */
    get yearFormat() {
        return this.nativeElement ? this.nativeElement.yearFormat : undefined;
    }
    set yearFormat(value) {
        this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
    }
    /** @description Sets or gets the element's visual theme.  */
    get weekFormat() {
        return this.nativeElement ? this.nativeElement.weekFormat : undefined;
    }
    set weekFormat(value) {
        this.nativeElement ? this.nativeElement.weekFormat = value : undefined;
    }
    /** @description Sets or gets if the element can be focused. */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description undefined */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Adds a custom filter to a specific column (task or resource column).
    * @param {any} columns. An object or an array of objects with the following syntax: <ul><li><b>type</b> - indicates the type of column to filter. Possible values are 'task' or 'resource'.</li><li><b>value</b> - the value of the column that must match the value attribute of a taskColumns/resourceColumns object(e.g. 'label', 'dateStart', etc).</li></ul>.
    * @param {any} filterGroup. A JQX.Utilities.FilterGroup object. Here's an example for creating a FilterGroup object: <pre>const filterGroup = new window.JQX.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'Task B', 'STARTS_WITH_CASE_SENSITIVE'); filterGroup.addFilter('or', filterObject); gantt.addFilter({ type: 'task', value: 'label' }, filterGroup);</pre>
    */
    addFilter(columns, filterGroup) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(columns, filterGroup);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(columns, filterGroup);
            });
        }
    }
    /** @description Clears the currently applied filters.
    */
    clearFilters() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilters();
            });
        }
    }
    /** @description Clears the currently applied column sorting.
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
    /** @description Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
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
    /** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    clearState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }
    /** @description Removes all tasks.
    */
    clearTasks() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearTasks();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearTasks();
            });
        }
    }
    /** @description Removes all resources.
    */
    clearResources() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearResources();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearResources();
            });
        }
    }
    /** @description Creates a connection between two tasks.
    * @param {number | string} startTaskIndex. The id of the start task or the connection string like '2-3-0'. <b>If the complete connections string is provided as the first argument, the rest of the method arguments are not necessary</b>
    * @param {number | string} taskEndIndex?. The id of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3. The connection type can be: <ul><li><b>0</b> - Start-to-Start connection.</li><li><b>1</b> - End-to-Start connection.</li><li><b>2</b> - End-to-End connection.</li><li><b>3</b> - Start-to-End connection.</li></ul>
    * @param {number} lag?. The connection lag in miliseconds. Used by the Auto scheduling algorithm in order allow some slack time slack time before or after the next task begins/ends. Lag is measured in miliseconds. It can be a negative (lead) or a positive (lag) number.
    */
    createConnection(startTaskIndex, taskEndIndex, connectionType, lag) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
            });
        }
    }
    /** @description Collapses an expanded project.
    * @param {string | number} id. The id of a project item that should be collapsed.
    */
    collapse(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(id);
            });
        }
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
    /** @description Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
    */
    endUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate();
            });
        }
    }
    /** @description Refereshes the GanttChart after resizing by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
    */
    refresh(fullRefresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh(fullRefresh);
            });
        }
    }
    /** @description Makes sure a Task is visible by scrolling to it.
    * @param {string | number} taskId. The id of the target Task.
    */
    ensureVisible(taskId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(taskId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(taskId);
            });
        }
    }
    /** @description Expands a collapsed project with tasks.
    * @param {string | number} id. The id of a project task that should be expanded.
    */
    expand(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(id);
            });
        }
    }
    /** @description Exports the data of Tree of the GanttChart.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>tsv</b></li><li><b>csv</b></li><li><b>xml</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the JQX Export Documentation.
    */
    exportData(dataFormat, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback);
            });
        }
    }
    /** @description Returns all existing connections. The connections are returned as objects that contain detailed information. Each object in the array has the following keys: 'id' - connection id, 'type' - connection type, 'startTaskId' - connection's start task id, 'endTaskId' - connection's end task id, 'startIndex' - connection's start task index, 'endIndex' - connection's end task index, 'lag' - lag time.
    * @returns {any}
  */
    getConnections() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getConnections();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the connection details for the target connection which includes: startTask, endTask, startTaskId, endTaskId and type of the corresponding connection. Connection types are described in detail under the `connectionEnd` event description in this document and in a dedicated topic available on the website.
    * @param {string} connectionId. A connection id. Each connection has a unique id that is assigned when a connection is created.
    * @returns {any}
  */
    getConnectionDetails(connectionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getConnectionDetails(connectionId);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns a JSON representation of all tasks inside the element along with their connections and settings.
    * @returns {any[]}
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
    /** @description Returns the Tree path of a task/resource. The tree path is used as task/resource id if no id is provided by the user.
    * @param {any} item. A GattChartTask/GanttChartResource item object.
    * @returns {string}
  */
    getItemPath(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItemPath(item);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the task object that corresponds to the id/path.
    * @param {string | number} itemId. The id/path of a task.
    * @returns {any}
  */
    getTask(itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTask(itemId);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns an array of all GanttChart tasks.
    * @returns {any[]}
  */
    getTasks() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTasks();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the index of a task.
    * @param {any} task. A GattChartTask object.
    * @returns {number}
  */
    getTaskIndex(task) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTaskIndex(task);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the connections definitions of a task.
    * @param {any} taskId. A GanttChartTask object or it's id.
    * @returns {any}
  */
    getTaskConnections(taskId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTaskConnections(taskId);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the Project of a task or undefined if it does not have one.
    * @param {any} task. A GantChartTask object.
    * @returns {any}
  */
    getTaskProject(task) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTaskProject(task);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the resource object that corresponds to the id/path.
    * @param {string | number} itemId. The id/path of a resource.
    * @returns {any}
  */
    getResource(itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getResource(itemId);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns an array of all GanttChart resources.
    * @returns {any[]}
  */
    getResources() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getResources();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the index of a resource.
    * @param {any} resource. A GanttChartResource object.
    * @returns {number}
  */
    getResourceIndex(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getResourceIndex(resource);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the tasks that are assigned to the resource.
    * @param {any} resource. A GanttChartResource object or it's id.
    * @returns {any}
  */
    getResourceTasks(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getResourceTasks(resource);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the currently selected tasks/resource ids. If selection is disabled or no items are selected returns null.
    * @returns {any}
  */
    getSelectedIds() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedIds();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the currently selected tasks.
    * @returns {any}
  */
    getSelectedTasks() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedTasks();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the currently selected resources.
    * @returns {any}
  */
    getSelectedResources() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedResources();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the working hours of the day as numbers.
    * @returns {any}
  */
    getWorkingHours() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getWorkingHours();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Hides the tooltip if it's visible.
    * @returns {any}
  */
    hideTooltip() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.hideTooltip();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Depending on the nonworkingDays property, returns true or false whether the target date is on a working day or not.
    * @param {Date} date. A javascript Date object or a string/number which represents a valid JS Date.
    */
    isWorkingDay(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.isWorkingDay(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.isWorkingDay(date);
            });
        }
    }
    /** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    loadState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }
    /** @description Removes all connections between tasks.
    */
    removeAllConnections() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAllConnections();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAllConnections();
            });
        }
    }
    /** @description Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    * @returns {any}
  */
    removeConnection(startTaskIndex, taskEndIndex, connectionType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.removeConnection(startTaskIndex, taskEndIndex, connectionType);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Removes all connections of a task or between two tasks if the second argument is provided and valid.
    * @param {any} taskStart. The start task object or it's id.
    * @param {any} taskEnd?. The end task object or it's id.
    */
    removeTaskConnection(taskStart, taskEnd) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTaskConnection(taskStart, taskEnd);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTaskConnection(taskStart, taskEnd);
            });
        }
    }
    /** @description Shows the tooltip for a specific element.
    * @param {HTMLElement} target. The HTMLElement that will be the target of the tooltip.
    * @param {string} content?. Allows to set a custom content for the Tooltip.
    */
    showTooltip(target, content) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showTooltip(target, content);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showTooltip(target, content);
            });
        }
    }
    /** @description Saves the current settings of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    saveState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState(state);
            });
        }
    }
    /** @description Inserts a new task in the timeline. The new task can be inserted as a sub task of a project by passing the appropriate argument for the project id or as a root level item.
    * @param {any} taskObject. An object describing a Gantt Chart task.
    * @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
    * @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
    * @returns {string | number | undefined}
  */
    insertTask(taskObject, project, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.insertTask(taskObject, project, index);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Updates a task/project/milestone.
    * @param {any} taskId. A number or string that represents the id of a task/project(e.g. '0') or the object definition of the task/project.
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    updateTask(taskId, taskObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(taskId, taskObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(taskId, taskObject);
            });
        }
    }
    /** @description Removes a task from the timeline.
    * @param {any} taskId. A number or string that represents the id of a task or the actual item object.
    */
    removeTask(taskId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(taskId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(taskId);
            });
        }
    }
    /** @description Inserts a new resource.
    * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} resourceObject?. An object describing a Gantt Chart resource.
    */
    insertResource(resourceId, resourceObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertResource(resourceId, resourceObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertResource(resourceId, resourceObject);
            });
        }
    }
    /** @description Updates an existing resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
    */
    updateResource(resourceId, taskObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateResource(resourceId, taskObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateResource(resourceId, taskObject);
            });
        }
    }
    /** @description Removes a resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    */
    removeResource(resourceId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeResource(resourceId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeResource(resourceId);
            });
        }
    }
    /** @description Opens the popup Window for specific task to edit or to delete a connection if a connection string is passed.
    * @param {any} taskId. A string or number that represents the id of a task or the task object that is going to be edited or a connection string(e.g. '2-0-0').
    */
    openWindow(taskId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(taskId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(taskId);
            });
        }
    }
    /** @description Closes an opened popup Window. The method will close any opened popup window inside the element.
    */
    closeWindow() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeWindow();
            });
        }
    }
    /** @description Prepares the GanttChart for printing by opening the browser's Print Preview.
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
    /** @description Allows to sets the working days and hours at once.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    setWorkTime(settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setWorkTime(settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setWorkTime(settings);
            });
        }
    }
    /** @description Allows to select a task based on it's id.
    * @param {string | number} id. The id of the task to select.
    */
    selectTask(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTask(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectTask(id);
            });
        }
    }
    /** @description Allows to select a resource based on it's id.
    * @param {string | number} id. The id of the resource to select.
    */
    selectResource(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectResource(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectResource(id);
            });
        }
    }
    /** @description Allows to unselect a task based on it's id.
    * @param {string | number} id. The id of the task to unselect.
    */
    unselectTask(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectTask(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectTask(id);
            });
        }
    }
    /** @description Allows to unselect a resource based on it's id.
    * @param {string | number} id. The id of the resource to unselect.
    */
    unselectResource(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectResource(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectResource(id);
            });
        }
    }
    /** @description Allows to unset previously set working time. The opposte method for setWorkingTime.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should not be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    unsetWorkTime(settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unsetWorkTime(settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unsetWorkTime(settings);
            });
        }
    }
    /** @description Sorts the GanttChart tasks/resources if sortable is enabled.
    * @param {any} columns. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
    */
    sort(columns) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sort(columns);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sort(columns);
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
        that.eventHandlers['beginUpdateHandler'] = (event) => { that.onBeginUpdate.emit(event); };
        that.nativeElement.addEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);
        that.eventHandlers['endUpdateHandler'] = (event) => { that.onEndUpdate.emit(event); };
        that.nativeElement.addEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);
        that.eventHandlers['connectionStartHandler'] = (event) => { that.onConnectionStart.emit(event); };
        that.nativeElement.addEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
        that.eventHandlers['connectionEndHandler'] = (event) => { that.onConnectionEnd.emit(event); };
        that.nativeElement.addEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['columnResizeHandler'] = (event) => { that.onColumnResize.emit(event); };
        that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['collapseHandler'] = (event) => { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['filterHandler'] = (event) => { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['itemInsertHandler'] = (event) => { that.onItemInsert.emit(event); };
        that.nativeElement.addEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);
        that.eventHandlers['itemRemoveHandler'] = (event) => { that.onItemRemove.emit(event); };
        that.nativeElement.addEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);
        that.eventHandlers['itemUpdateHandler'] = (event) => { that.onItemUpdate.emit(event); };
        that.nativeElement.addEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['progressChangeStartHandler'] = (event) => { that.onProgressChangeStart.emit(event); };
        that.nativeElement.addEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
        that.eventHandlers['progressChangeEndHandler'] = (event) => { that.onProgressChangeEnd.emit(event); };
        that.nativeElement.addEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['sortHandler'] = (event) => { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = (event) => { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = (event) => { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['scrollLeftReachedHandler'] = (event) => { that.onScrollLeftReached.emit(event); };
        that.nativeElement.addEventListener('scrollLeftReached', that.eventHandlers['scrollLeftReachedHandler']);
        that.eventHandlers['scrollRightReachedHandler'] = (event) => { that.onScrollRightReached.emit(event); };
        that.nativeElement.addEventListener('scrollRightReached', that.eventHandlers['scrollRightReachedHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
GanttChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
], GanttChartComponent.prototype, "columnMenu", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "columnResize", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "columnResizeFeedback", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "currentTimeIndicator", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "currentTimeIndicatorInterval", null);
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
], GanttChartComponent.prototype, "dateMarkers", null);
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
], GanttChartComponent.prototype, "disableSegmentDrag", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "disableSegmentResize", null);
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
], GanttChartComponent.prototype, "hideDateMarkers", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "hideTimelineHeaderDetails", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "showSelectionColumn", null);
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
], GanttChartComponent.prototype, "popupWindowTabs", null);
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
], GanttChartComponent.prototype, "shadeUntilCurrentTime", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "showBaseline", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "showProgressLabel", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "snapToNearest", null);
tslib_1.__decorate([
    Input()
], GanttChartComponent.prototype, "sortFunction", null);
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
], GanttChartComponent.prototype, "tooltip", null);
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
export { GanttChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ2FudHRjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9nYW50dGNoYXJ0LyIsInNvdXJjZXMiOlsic21hcnQuZ2FudHRjaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxXQUFXO0lBQ25ELFlBQVksR0FBMkI7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFpd0JsQzs4Q0FDc0M7UUFDNUIsa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs4Q0FDc0M7UUFDNUIsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7O1VBR0U7UUFDUSxzQkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RTs7Ozs7Ozs7VUFRRTtRQUNRLG9CQUFlLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUU7Ozs7VUFJRTtRQUNRLGFBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7Ozs7O1VBTUU7UUFDUSxtQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7Ozs7VUFNRTtRQUNRLGNBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs7Ozs7O1VBTUU7UUFD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LENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM5RixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUVyRixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FB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QUssRUFBRTs2REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7OENBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs4Q0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO21EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt5REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzBEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MkVBR1A7QUFPRDtJQURDLEtBQUssRUFBRTswREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NFQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTswREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzREQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0VBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtzRUFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzJEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTttRUFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3lFQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7K0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTsrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs4REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dFQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7dURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs0REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7dURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTttREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt3REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7d0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2tEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt1RUFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2tEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0VBR1A7QUFPRDtJQURDLEtBQUssRUFBRTsrQ0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7cURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT1M7SUFBVCxNQUFNLEVBQUU7MERBQStEO0FBSTlEO0lBQVQsTUFBTSxFQUFFO3dEQUE2RDtBQU01RDtJQUFULE1BQU0sRUFBRTs4REFBbUU7QUFXbEU7SUFBVCxNQUFNLEVBQUU7NERBQWlFO0FBT2hFO0lBQVQsTUFBTSxFQUFFO3FEQUEwRDtBQVN6RDtJQUFULE1BQU0sRUFBRTsyREFBZ0U7QUFTL0Q7SUFBVCxNQUFNLEVBQUU7c0RBQTJEO0FBUzFEO0lBQVQsTUFBTSxFQUFFO29EQUF5RDtBQVV4RDtJQUFULE1BQU0sRUFBRTt1REFBNEQ7QUFVM0Q7SUFBVCxNQUFNLEVBQUU7d0RBQTZEO0FBVTVEO0lBQVQsTUFBTSxFQUFFO3NEQUEyRDtBQVUxRDtJQUFULE1BQU0sRUFBRTtxREFBMEQ7QUFRekQ7SUFBVCxNQUFNLEVBQUU7cURBQTBEO0FBU3pEO0lBQVQsTUFBTSxFQUFFO3dEQUE2RDtBQU81RDtJQUFULE1BQU0sRUFBRTt5REFBOEQ7QUFRN0Q7SUFBVCxNQUFNLEVBQUU7eURBQThEO0FBUTdEO0lBQVQsTUFBTSxFQUFFO3lEQUE4RDtBQVM3RDtJQUFULE1BQU0sRUFBRTtzREFBMkQ7QUFTMUQ7SUFBVCxNQUFNLEVBQUU7bURBQXdEO0FBUXZEO0lBQVQsTUFBTSxFQUFFO2tFQUF1RTtBQVF0RTtJQUFULE1BQU0sRUFBRTtnRUFBcUU7QUFVcEU7SUFBVCxNQUFNLEVBQUU7MERBQStEO0FBVTlEO0lBQVQsTUFBTSxFQUFFO3dEQUE2RDtBQVU1RDtJQUFULE1BQU0sRUFBRTttREFBd0Q7QUFJdkQ7SUFBVCxNQUFNLEVBQUU7a0VBQXVFO0FBSXRFO0lBQVQsTUFBTSxFQUFFOytEQUFvRTtBQUluRTtJQUFULE1BQU0sRUFBRTtnRUFBcUU7QUFJcEU7SUFBVCxNQUFNLEVBQUU7aUVBQXNFO0FBaCtCbkUsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSx3Q0FBd0M7S0FDbEQsQ0FBQztHQUVXLG1CQUFtQixDQWdsRS9CO1NBaGxFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW50dENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBHYW50dENoYXJ0RGF0YUV4cG9ydEl0ZW1UeXBlLCBHYW50dERheUZvcm1hdCwgRHVyYXRpb24sIEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBIb3VyRm9ybWF0LCBNb250aEZvcm1hdCwgR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVNb2RlLCBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZVZpZXcsIEdhbnR0Q2hhcnRTb3J0TW9kZSwgR2FudHRDaGFydFRhc2tUeXBlLCBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHksIEdhbnR0Q2hhcnRWaWV3LCBZZWFyRm9ybWF0LCBXZWVrRm9ybWF0LCBHYW50dENoYXJ0RGF0YUV4cG9ydCwgR2FudHRDaGFydERhdGVNYXJrZXIsIEdhbnR0Q2hhcnRSZXNvdXJjZSwgR2FudHRDaGFydFJlc291cmNlQ29sdW1uLCBHYW50dENoYXJ0VGFzaywgR2FudHRDaGFydFRhc2tJbmRpY2F0b3IsIEdhbnR0Q2hhcnRUYXNrUGxhbm5lZCwgR2FudHRDaGFydFRhc2tTZWdtZW50LCBHYW50dENoYXJ0VGFza0NvbHVtbiwgR2FudHRDaGFydFRvb2x0aXAsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBHYW50dENoYXJ0RGF0YUV4cG9ydEl0ZW1UeXBlLCBHYW50dERheUZvcm1hdCwgRHVyYXRpb24sIEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBIb3VyRm9ybWF0LCBNb250aEZvcm1hdCwgR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVNb2RlLCBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZVZpZXcsIEdhbnR0Q2hhcnRTb3J0TW9kZSwgR2FudHRDaGFydFRhc2tUeXBlLCBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHksIEdhbnR0Q2hhcnRWaWV3LCBZZWFyRm9ybWF0LCBXZWVrRm9ybWF0LCBHYW50dENoYXJ0RGF0YUV4cG9ydCwgR2FudHRDaGFydERhdGVNYXJrZXIsIEdhbnR0Q2hhcnRSZXNvdXJjZSwgR2FudHRDaGFydFJlc291cmNlQ29sdW1uLCBHYW50dENoYXJ0VGFzaywgR2FudHRDaGFydFRhc2tJbmRpY2F0b3IsIEdhbnR0Q2hhcnRUYXNrUGxhbm5lZCwgR2FudHRDaGFydFRhc2tTZWdtZW50LCBHYW50dENoYXJ0VGFza0NvbHVtbiwgR2FudHRDaGFydFRvb2x0aXAsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEdhbnR0Q2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1nYW50dC1jaGFydCwgW3NtYXJ0LWdhbnR0LWNoYXJ0XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBHYW50dENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEdhbnR0Q2hhcnQ+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBHYW50dENoYXJ0O1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBHYW50dENoYXJ0O1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxHYW50dENoYXJ0PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWdhbnR0LWNoYXJ0Jyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgbm9ud29ya2luZ0RheXMvbm9ud29ya2luZ0hvdXJzIGFyZSB0YWtlbiBpbnRvIGNvbnNpZHVyYXRpb24gd2hlbiBkZXRlcm1pbmluZyB0aGUgZGF0ZUVuZCBvZiB0aGUgdGFza3MuIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBlbmFibGVkIHRoZSBkYXRlRW5kIG9mIHRoZSB0YXNrcyBpcyBjYWxjdWxhdGVkIHRvIGluY2x1ZGUgb25seSB0aGUgYWN0dWFsIHdvcmtpbmcgdGltZS4gQnkgZGVmYXVsdCBpdCdzIGRpc2FibGVkIGFuZCBvbmx5IGNhbGVuZGFyIHRpbWUgaXMgdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGFkanVzdFRvTm9ud29ya2luZ1RpbWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGp1c3RUb05vbndvcmtpbmdUaW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGp1c3RUb05vbndvcmtpbmdUaW1lKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkanVzdFRvTm9ud29ya2luZ1RpbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVjYWxjdWxhdGVzIHRoZSB0YXNrcyB0aGF0IGFyZSBjb25uZWN0ZWQgYW5kIHJlLXNjaGVkdWxlcyB0aGVtIGFjY29yZGluZyB0byB0aGVpciBjb25uZWN0aW9ucy4gSWYgbm8gY29ubmVjdGlvbnMgYXJlIHByZXNlbnQsIGF1dG9TY2hlZHVsaW5nIGhhcyBubyBlZmZlY3QgdW50aWwgYSBjb25uZWN0aW9uIGlzIGNyZWF0ZWQuIENvbm5lY3Rpb24gdHlwZXMgZGV0ZXJtaW5lcyB0aGUgc3RhcnQvZW5kIGRhdGUgbGltaXRzIG9mIHRoZSB0YXNrcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TY2hlZHVsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY2hlZHVsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NjaGVkdWxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY2hlZHVsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZmZlY3RzIHRoZSB0YXNrcyBvbmx5IHdoZW4gYXV0b1NjaGVkdWxlIGlzIGVuYWJsZWQuIFdoZW4gc2V0IHRvIHRydWUsIHRoZSB0YXNrcyBhcmUgc3RyaWN0bHkgc2NoZWR1bGVkICggYWNjb3JkaW5nIHRvIHRoZWlyIGNvbm5lY3Rpb25zICkgYW5kIGRyYWdnaW5nIGlzIG5vdCBhbGxvd2VkLiAgVXNlcnMgY2FuIHNldCBsYWcgdG8gc3BlY2lmaWMgY29ubmVjdGlvbnMgdG8gZGV0ZXJtaW5lIGEgZGVsYXkgb2Ygb3ZlcmxhcCBvZiBiZXR3ZWVuIHRoZSB0d28gdGFza3MgKCBpbnRlcnZhbCBvZiB0aW1lIGluIG1pbGlzZWNvbmRzICkuIExhZyBvbmUgb2YgdGhlIGF0dHJpYnV0ZXMgb2YgYSB0YXNrIGNvbm5lY3Rpb24gYW5kIHNob3VsZCBiZSBzZXQgaW4gdGhlIGRhdGFTb3VyY2Ugd2hlcmUgdGhlIHRhc2sgY29ubmVjdGlvbnMgYXJlIGRlZmluZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2NoZWR1bGVTdHJpY3RNb2RlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2NoZWR1bGVTdHJpY3RNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNjcm9sbCBzcGVlZCB3aGVuIGRyYWdnaW5nIHdoZW4gYXV0b1Njcm9sbCBwcm9wZXJ0eSBpcyBzZXQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1Njcm9sbFN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY3JvbGxTdGVwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2Nyb2xsU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY3JvbGxTdGVwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZWQvRGlzYWJsZXMgdGhlIGNvbHVtbW4gaGVhZGVyIG1lbnUuIFdoZW4gZW5hYmxlZCBhbmQgdGhlIHVzZXIgaG92ZXJzIGEgY29sdW1uIGhlYWRlciwgYSBkcm9wIGRvd24gYnV0dG9uIHdpbGwgYXBwZWFyIHRoYXQgdHJpZ2dlcnMgYSBjb2x1bW4gbWVudSBmb3IgcXVpY2sgYWN0aW9ucyBsaWtlIHNvcnRpbmcsIGZpbHRlcmluZywgZXRjLiBUaGUgYWN0aW9ucyBkZXBlbmQgb24gdGhlIGVuYWJsZWQgR2FudHQgZmVhdHVyZXMsIGZvciBleGFtcGxlIHRoZSBmaWx0ZXJpbmcgYWN0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIG9ubHkgaWYgZmlsdGVyaW5nIGlzIGVuYWJsZWQgZm9yIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uTWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbk1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbk1lbnUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uTWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFRhYmxlIGNvbHVtbnMgYXJlIHJlc2l6YWJsZSBvciBub3QuIFdoZW4gZW5hYmxlZCBpdCBpcyBwb3NzaWJsZSB0byByZXNpemUgdGhlIGNvbHVtbnMgZnJvbSB0aGUgaGVhZGVyIGNlbGxzIG9mIHRoZSBUYWJsZSBpbiBib3RoIFRhc2sgYW5kIFJlc291cmNlIHRpbWVsaW5lcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblJlc2l6ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblJlc2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uUmVzaXplKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblJlc2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHJlc2l6ZSBmZWVkYmFjayBpcyB1c2VkIGR1cmluZyBjb2x1bW4gcmVzaXppbmcuIFRoaXMgcHJvcGVydHkgaXMgYXBwbGljYWJsZSBvbmx5IHdoZW4gY29sdW1uUmVzaXplIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5SZXNpemVGZWVkYmFjaygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblJlc2l6ZUZlZWRiYWNrIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5SZXNpemVGZWVkYmFjayh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZXNpemVGZWVkYmFjayA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzL0Rpc2FibGVzIHRoZSBjdXJyZW50IHRpbWUgaW5kaWNhdG9yLiBDdXJyZW50IHRpbWUgaW5kaWNhdG9yIHNob3dzIHRoZSBjdXJyZW50IHRpbWUgaW4gdGhlIGFwcHJvcHJpYXRlIHZpZXcgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjdXJyZW50VGltZUluZGljYXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXJyZW50VGltZUluZGljYXRvcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZUluZGljYXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZWZyZXNoIGludGVydmFsIGluIHNlY29uZHMgZm9yIHRoZSBjdXJyZW50VGltZUluZGljYXRvci4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBjdXJyZW50VGltZUluZGljYXRvckludGVydmFsKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZUluZGljYXRvckludGVydmFsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXJyZW50VGltZUluZGljYXRvckludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWVJbmRpY2F0b3JJbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBHYW50dENoYXJ0J3MgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogR2FudHRDaGFydERhdGFFeHBvcnQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YUV4cG9ydCh2YWx1ZTogR2FudHRDaGFydERhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0YXNrcyB0aGF0IHdpbGwgYmUgbG9hZGVkIGluc2lkZSB0aGUgVGltZWxpbmUuIEVhY2ggaXRlbSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogbGFiZWwgLSB0aGUgbGFiZWwgb2YgdGhlIFRhc2tkYXRlU3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZSBvZiB0aGUgVGFzay4gU2hvdWxkIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHZhbGlkIGRhdGUuZGF0ZUVuZCAtIHRoZSBlbmRpbmcgZGF0ZSBvZiB0aGUgVGFzay4gU2hvdWxkIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHZhbGlkIGRhdGUudHlwZSAtIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIHRhc2suIFdoZXRoZXIgaXQncyBhIHNpbXBsZSB0YXNrLCBhIHByb2plY3Qgb3IgYSBtaWxlc3RvbmUuIEVhY2ggdHlwZSBvZiB0YXNrIGhhcyBzcGVjaWZpYyBiZWhhdmlvciBhbmQgYWRkaXRpb25hbCBhdHRyaWJ1dGVzLi4gIEFkZGl0aW9uYWwgcHJvcGVydGllczogY29ubmVjdGlvbnMgLSBhbiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byB0YXNrcy4gRWFjaCBjb25uZWN0aW9uIChvYmplY3QpIHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyA6IHRhcmdldCAtIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCB0YXNrdHlwZSAtIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiB0aGUgY29ubmVjdGlvbi4gRm91ciB0eXBlcyBvZiBjb25uZWN0aW9ucyBhcmUgYXZhaWxhYmxlOiAwIC0gaXMgYSBjb25uZWN0aW9uIG9mIHR5cGUgU3RhcnQtdG8tU3RhcnQgMSAtIGlzIGEgY29ubmVjdGlvbiBvZiB0eXBlIEVuZC10by1TdGFydCAyIC0gaXMgYSBjb25uZWN0aW9uIG9mIHR5cGUgRW5kLXRvLUVuZDMgLSBpcyBhIGNvbm5lY3Rpb24gb2YgdHlwZSBTdGFydC10by1FbmQgbGFnIC0gYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBkZWxheSBiZXR3ZWVuIHR3byBjb25uZWN0ZWQgYXV0byBzY2hlZHVsZWQgdGFza3MuIExhZyBwcm9wZXJ0eSBjYW4gYmUgYSBwb3NpdGl2ZSBvciBhIG5lZ2F0aXZlIG51bWJlci4gV2hlbiBuZWdhdGl2ZSBpdCBkZXRlcm1pbmVzIHRoZSBvdmVybGFwIGJldHdlZW4gdHdvIGNvbm5lY3RlZCB0YXNrcy4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGluIGNvbmp1Y3Rpb24gd2l0aCBhdXRvU2NoZWR1bGUuZHVyYXRpb24gLSBkZXRlcm1pbmVzIHRoZSBkdXJhdGlvbiBvZiBhIFRhc2sgaW4gZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgb3IgbWlsaXNlY29uZHMuIFZlcnkgdXNlZnVsbCB3aGVuIHRoZSB0aGUgZGF0ZUVuZCBvZiBhIFRhc2sgaXMgdW5rbm93bi4gVGhlIGR1cmF0aW9uIGFsd2F5cyBzaG93cyB0aGUgY2FsZW5kYXIgdGltZSB3aGV0aGVyIGl0IGlzIGluIGRheXMvaG91cnMgb3Igb3RoZXIubWluRHVyYXRpb24gLSBzZXRzIHRoZSBtaW5pbXVtIGR1cmF0aW9uIG9mIGEgdGFzay4gbWF4RHVyYXRpb24gLSBzZXRzIHRoZSBtYXhpbXVtIGR1cmF0aW9uIG9mIGEgdGFzay5taW5EYXRlU3RhcnQgLSBkZXRlcm1pbmVzIHRoZSBtaW5pbnVtIGRhdGUgdGhhdCBhIHRhc2sgY2FuIHN0YXJ0IGZyb20uIE11c3QgYmUgaWYgdHlwZSBzdHJpbmcgYW5kIHNob3VsZCByZXByZXNlbnQgYSB2YWxpZCBkYXRlLm1heERhdGVTdGFydCAtIGRldGVybWluZXMgdGhlIG1heGltdW0gZGF0ZSB0aGF0IGEgdGFzayBjYW4gc3RhcnQgZnJvbS4gTXVzdCBiZSBpZiB0eXBlIHN0cmluZyBhbmQgc2hvdWxkIHJlcHJlc2VudCBhIHZhbGlkIGRhdGUubWluRGF0ZUVuZCAtIGRldGVybWluZXMgdGhlIG1pbmludW0gZGF0ZSB0aGF0IGEgdGFzayBjYW4gZW5kLiBNdXN0IGJlIGlmIHR5cGUgc3RyaW5nIGFuZCBzaG91bGQgcmVwcmVzZW50IGEgdmFsaWQgZGF0ZS5tYXhEYXRlRW5kIC0gZGV0ZXJtaW5lcyB0aGUgbWF4aW11bSBkYXRlIHRoYXQgYSB0YXNrIGNhbiBlbmQuIE11c3QgYmUgaWYgdHlwZSBzdHJpbmcgYW5kIHNob3VsZCByZXByZXNlbnQgYSB2YWxpZCBkYXRlLnByb2dyZXNzIC0gYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBwcm9ncmVzcyBvZiBhIHRhc2sgKCBmcm9tIDAgdG8gMTAwICkub3ZlcmR1ZSAtIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSB0YXNrJ3MgZGF0ZUVuZCBoYXMgc3VycGFzc2VkIGl0J3MgZGVhZGxpbmUgZGF0ZS5kaXNhYmxlRHJhZyAtIGEgYm9vbGVhbiBwcm9wZXJ0eSB0aGF0IGRpc2FibGVzIHRoZSBkcmFnZ2luZyBvZiBhIHRhc2sgd2hlbiBzZXQgdG8gdHJ1ZS5kaXNhYmxlUmVzaXplIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgZGlzYWJsZXMgdGhlIHJlc2l6aW5nIG9mIGEgdGFzayB3aGVuIHNldCB0byB0cnVlLmRyYWdQcm9qZWN0IC0gYSBib29sZWFuIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2hvbGUgcHJvamVjdCAoYWxvbmcgd2l0aCB0aGUgdGFza3MpIGNhbiBiZSBkcmFnZ2VkIHdoaWxlIGRyYWdnaW5nIHRoZSBwcm9qZWN0IHRhc2suIEFwcGxpY2FsYmUgb25seSB0byBQcm9qZWN0cy5zZWdtZW50cyAtIGFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBhbGxvd3MgdG8gZGV2aWRlIGEgdGFzayBpbnRvIG11bHRpcGxlIHNlZ2VtZW50cy4gRWFjaCBzZWdtZW50IChleGNlcHQgdGhlIGZpcnN0KSBjYW4gaGF2ZSBhIGRpZmZlcmVudCBzdGFydGluZyBkYXRlLCBkdXJhdGlvbiBhbmQgbGFiZWwuc3luY2hyb25pemVkIC0gYSBib29sZWFuIHRoYXQgaWYgc2V0IHRoZSBwcm9qZWN0IHRhc2sncyBzdGFydC9lbmQgZGF0ZXMgYXJlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgdGFza3MuIEJ5IGRlZmF1bHQgYSBzeW5jaHJvbml6ZWQgcHJvamVjdCB0YXNrIGNhbid0IGJlIGRyYWdnZWQgYWxvbmUuIEFwcGxpY2FibGUgb25seSB0byBQcm9qZWN0IHRhc2tzLmV4cGFuZGVkIC0gYSBib29sZWFuIHRoYXQgZGV0ZXJtaW5lcyBpZiBhIHByb2plY3QgaXMgZXhwYW5kZWQgb3Igbm90LiBJZiBub3QgYWxsIG9mIGl0J3Mgc3ViLXRhc2tzIGFyZSBub3QgdmlzaWJsZS4gT25seSB0aGUgcHJvamVjdCB0YXNrIGl0c2VsZiBpcyB2aXNpYmxlLiBCeSBkZWZhdWx0IG5vIHByb2plY3RzIGFyZSBleHBhbmRlZC4gQXBwbGljYWJsZSBvbmx5IHRvIHByb2plY3QgdGFza3MuLkdhbnR0Q2hhcnQgYWxzbyBhY2NlcHRzIGEgRGF0YUFkYXB0ZXIgaW5zdGFuY2UgYXMgZGF0YVNvdXJjZS4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIGRhdGFBZGFwdGVyIGhlcmUgLSBodHRwczovL3d3dy5odG1sZWxlbWVudHMuY29tL2RvY3MvZGF0YS1hZGFwdGVyLy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2UoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW4gdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IGRheXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXlGb3JtYXQoKTogR2FudHREYXlGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF5Rm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXlGb3JtYXQodmFsdWU6IEdhbnR0RGF5Rm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGEgc3BlY2lmaWMgZW5kIGRhdGUgZm9yIHRoZSBUaW1lbGluZS4gVXNlZnVsbCB3aGVuIHRoZSB1c2VyIHdhbnRzIGN1c3RvbSBlbmRpbmcgZGF0ZSBmb3IgdGhlIFRpbWVsaW5lLiBJZiBubyBkYXRlIGlzIHNldCB0aGUgZW5kIGRhdGUgb2YgdGhlIHRpbWVsaW5lIGlzIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lZCBmcm9tIHRoZSB0YXNrcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGVFbmQoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlRW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRlRW5kKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVFbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBhIHNwZWNpZmljIHN0YXJ0aW5nIGRhdGUgZm9yIHRoZSBUaW1lbGluZS4gVXNlZnVsbCB3aGVuIHRoZSB1c2VyIHdhbnRzIGN1c3RvbSBzdGFydGluZyBkYXRlIGZvciB0aGUgVGltZWxpbmUuIElmIG5vIGRhdGUgaXMgc2V0IHRoZSBzdGFydCBkYXRlIG9mIHRoZSB0aW1lbGluZSBpcyBhdXRvbWF0aWNhbGx5IGRldGVybWluZWQgZnJvbSB0aGUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlU3RhcnQoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU3RhcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVTdGFydCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU3RhcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGF0ZSBtYXJrZXJzIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSB0aW1lbGluZS4gRGF0ZSBtYXJrZXJzIGFsbG93IHRvIG1hcmsgYW5kIGV2ZW4gbGFiZWwgc3BlY2lmaWMgZGF0ZXMgKGluY2x1ZGluZyB0aW1lKSBpbnNpZGUgdGhlIEdhbnR0Q2hhcnQgdGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlTWFya2VycygpOiBHYW50dENoYXJ0RGF0ZU1hcmtlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVNYXJrZXJzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRlTWFya2Vycyh2YWx1ZTogR2FudHRDaGFydERhdGVNYXJrZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlTWFya2VycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgYXV0byBzY3JvbGxpbmcgd2hpbGUgZHJhZ2dpbmcvcmVzaXppbmcgYSB0YXNrIGJhciBpbnNpZGUgdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUF1dG9TY3JvbGwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQXV0b1Njcm9sbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZUF1dG9TY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUF1dG9TY3JvbGwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgZHJhZ2dpbmcgb2YgdGFza3MgaW4gdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVRhc2tEcmFnKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRhc2tEcmFnIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlVGFza0RyYWcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRhc2tEcmFnID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRhc2sgcHJvZ3Jlc3MgY2hhbmdpbmcgaW4gdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVRhc2tQcm9ncmVzc0NoYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrUHJvZ3Jlc3NDaGFuZ2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVUYXNrUHJvZ3Jlc3NDaGFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRhc2tQcm9ncmVzc0NoYW5nZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyByZXNpemluZyBvZiB0YXNrcyBpbiB0aGUgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlVGFza1Jlc2l6ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrUmVzaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlVGFza1Jlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza1Jlc2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgc2VsZWN0aW9uIGluc2lkZSB0aGUgR2FudHRDaGFydC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VsZWN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlU2VsZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWxlY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIHRhc2sgc2VnbWVudCBkcmFnZ2luZy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVTZWdtZW50RHJhZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWdtZW50RHJhZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVNlZ21lbnREcmFnKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWdtZW50RHJhZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgdGFzayBzZWdtZW50IHJlc2l6aW5nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVNlZ21lbnRSZXNpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VnbWVudFJlc2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVNlZ21lbnRSZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlZ21lbnRSZXNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIHdpbmRvdyBlZGl0b3IgZm9yIHRoZSBHYW50dENoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVdpbmRvd0VkaXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVXaW5kb3dFZGl0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVXaW5kb3dFZGl0b3IodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVdpbmRvd0VkaXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGluIHdoYXQgdW5pdCBpcyB0YXNrIGR1cmF0aW9uIHByb3BlcnR5IG1lYXN1cmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHVyYXRpb25Vbml0KCk6IER1cmF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmR1cmF0aW9uVW5pdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHVyYXRpb25Vbml0KHZhbHVlOiBEdXJhdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kdXJhdGlvblVuaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZGVkaWNhdGVkIGZpbHRlciByb3cgaXMgdXNlZCBmb3IgVGFibGUgZmlsdGVyaW5nIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgZmlsdGVyIGlucHV0LiBUaGlzIHByb3BlcnR5IGhhcyBubyBlZmZlY3QgaWYgZmlsdGVyaW5nIGlzIG5vdCBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyUm93KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyUm93IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJSb3codmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyUm93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdyb3VwcyB0aGUgdGFza3MgaW5zaWRlIHRoZSBUYXNrIHRpbWVsaW5lIGFjY29yZGluZyB0byB0aGUgcmVzb3VyY2VzIHRoZXkgYXJlIGFzc2lnbmVkIHRvLiBVbmFzc2lnbmVkIHRhc2tzIGFyZSBwbGFjZWQgaW4gYSBkZWZhdWx0IGdyb3VwIGxhYmVsZWQgJ1VuYXNzaWduZWQnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBCeVJlc291cmNlcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwQnlSZXNvdXJjZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3VwQnlSZXNvdXJjZXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBCeVJlc291cmNlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3JlYXRlIGEgY3VzdG9tIGhlYWRlciBjb250ZW50IGZvciB0aGUgVGFzayBQYW5lbC4gVGhlIGF0dHJpYnV0ZSBhY2NlcHRzIGFuIEhUTUxUZW1wbGF0ZSBlbGVtZW50LCBpdCdzIGlkIG9yIGEgZnVuY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkZXJUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhlYWRlclRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkYXRlTWFya2VycyBhcmUgdmlzaWJsZSBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlRGF0ZU1hcmtlcnMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGF0ZU1hcmtlcnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVEYXRlTWFya2Vycyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGF0ZU1hcmtlcnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQnkgZGVmYXVsdCB0aGUgVGltZWxpbmUgaGFzIGEgdHdvIGxldmVsIGhlYWRlciAtIHRpbWVsaW5lIGRldGFpbHMgYW5kIHRpbWVsaW5lIGhlYWRlci4gVGhpcyBwcm9wZXJ0eSBoaWRlcyB0aGUgaGVhZGVyIGRldGFpbHMgY29udGFpbmVyKCB0aGUgdG9wIGNvbnRhaW5lciApLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVRpbWVsaW5lSGVhZGVyRGV0YWlscygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUaW1lbGluZUhlYWRlckRldGFpbHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVUaW1lbGluZUhlYWRlckRldGFpbHModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRpbWVsaW5lSGVhZGVyRGV0YWlscyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyB0aGUgc2VsZWN0aW9uIGNvbHVtbiBvZiB0aGUgVGFzay9SZXNvdXJjZSBUYWJsZS4gV2hlbiBhcHBsaWVkIGEgY2hlY2tib3ggY29sdW1uIGlzIGRpc3BsYXllZCB0aGF0IGFsbG93cyB0byBzZWxlY3QgdGFza3MvcmVzb3VyY2VzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd1NlbGVjdGlvbkNvbHVtbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTZWxlY3Rpb25Db2x1bW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dTZWxlY3Rpb25Db2x1bW4odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1NlbGVjdGlvbkNvbHVtbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyB0aGUgUmVzb3VyY2UgcGFuZWwgcmVnYXJkbGVzcyBvZiB0aGUgcmVzb3VyY2VzIGF2YWlsYWJpbGl0eSBCeSBkZWZhdWx0IHRoZSBSZXNvdXJjZSBwYW5lbCBpcyB2aXNpYmxlIGlmIHJlc291cmNlcyBhcmUgYWRkZWQgdG8gdGhlIEdhbnR0Q2hhcnQuIFRoaXMgcHJvcGVydHkgYWxsb3dzIHRvIGhpZGUgdGhlIFJlc291cmNlIHBhbmVsIHBlcm1hbmVudGx5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVJlc291cmNlUGFuZWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlUmVzb3VyY2VQYW5lbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVJlc291cmNlUGFuZWwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVJlc291cmNlUGFuZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3ZWF0aGVyIG9yIG5vdCBob3Jpem9udGFsIHNjcm9sbGJhciBpcyBzaG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KCk6IEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSh2YWx1ZTogSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXRlcyBpbnNpZGUgdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IGhvdXJzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG91ckZvcm1hdCgpOiBIb3VyRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhvdXJGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhvdXJGb3JtYXQodmFsdWU6IEhvdXJGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBXaGVuIGVuYWJsZWQsIHNjcm9sbGluZyB0byB0aGUgZW5kIG9mIHRoZSBob3Jpem90YWwgdGltZWxpbmUsIHRyaWdnZXJzIHRoZSBjcmVhdGlvbiBvZiBhZGRpdGlvbmFsIHRvIGV4dGVuZCB0aGUgdGltZSByYW5nZS4gVGhlIG51bWJlciBvZiBjZWxscyB0byBiZSBhZGRlZCB3aGVuIHRoZSBzY3JvbGxiYXIgcmVhY2hlcyB0aGUgZW5kIHBvc2l0aW9uIGlzIGRldGVybWluZWQgYnkgdGhlIGluZmluaXRlVGltZWxpbmVTdGVwLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5maW5pdGVUaW1lbGluZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluZmluaXRlVGltZWxpbmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGluZmluaXRlVGltZWxpbmUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5maW5pdGVUaW1lbGluZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBudW1iZXIgb2YgY2VsbHMgdG8gYmUgYWRkZWQgd2hlbiB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgYmFyIG9mIHRoZSBUaW1lbGluZSByZWFjaGVzIGl0J3MgZW5kIHBvc2l0aW9uIHdoZW4gaW5maW5pdGVUaW1lbGluZSBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5maW5pdGVUaW1lbGluZVN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluZmluaXRlVGltZWxpbmVTdGVwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbmZpbml0ZVRpbWVsaW5lU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluZmluaXRlVGltZWxpbmVTdGVwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gc2V0IHRoZSBUaW1lbGluZSBpcyBwb3NpdGlvbmVkIG9uIHRoZSBsZWZ0IHNpZGUgd2hpbGUgdGhlIFRhc2sgVHJlZSBpcyBwb3NpdGlvbmVkIG9uIHRoZSByaWdodC4gQnkgZGVmYXVsdCBpdCdzIHZpY2UgdmVyc2EuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbnZlcnRlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmludmVydGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbnZlcnRlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnZlcnRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIga2V5Ym9hcmQgbmF2aWdhdGlvbiBpbnNpZGUgdGhlIFRhYmxlIGlzIGVuYWJsZWQgb3Igbm90LiBLZXlib2FyZCBuYXZpZ2F0aW9uIGFmZmVjdHMgYm90aCBUYXNrIGFuZCBSZXNvdXJjZSBUYWJsZXMuIEl0IGFsbG93cyB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGl0ZW1zLiB0aGUgZm9sbG93aW5nIGtleWJvYXJkIHNob3J0Y3V0IGtleXMgYXJlIGF2YWlsYWJsZSBmb3IgZm9jdXNlZCB0YXNrcyBpbnNpZGUgdGhlIFRhc2sgVGFibGU6IEVudGVyIC0gb3BlbnMgdGhlIFdpbmRvdyBlZGl0b3IgdG8gZWRpdCB0aGUgY3VycmVudGx5IGZvY3VzZWQgdGFzay5EZWxldGUgLSBvcGVucyBhIGNvbmZpcm1hdGlvbiB3aW5kb3cgcmVnYXJkaW5nIHRoZSBkZWxldGlvbiBvZiB0aGUgY3VycmVudGx5IGZvY3VzZWQgdGFzay4gKi9cblx0QElucHV0KClcblx0Z2V0IGtleWJvYXJkTmF2aWdhdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmtleWJvYXJkTmF2aWdhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQga2V5Ym9hcmROYXZpZ2F0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmtleWJvYXJkTmF2aWdhdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIEdhbnR0Q2hhcnQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRldG1pbmVzIHRoZSBtYXhpbXVtIHBvc3NpYmxlIGRhdGUgb2YgdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4KCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXgodmFsdWU6IHN0cmluZyB8IERhdGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGV0bWluZXMgdGhlIG1pbmltdW0gcG9zc2libGUgZGF0ZSBvZiB0aGUgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtaW4oKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1pbih2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IG1vbnRocy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1vbnRoRm9ybWF0KCk6IE1vbnRoRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vbnRoRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtb250aEZvcm1hdCh2YWx1ZTogTW9udGhGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBkYXlzIG9mIHRoZSB3ZWVrIGZyb20gMCB0byA2LCB3aGVyZSAwIGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgYW5kIDYgaXMgdGhlIGxhc3QgZGF5LiBOb253b3JraW5nIGRheXMgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aCBjb2xvcmVkIGNlbGxzIGluc2lkZSB0aGUgdGltZWxpbmUgYW5kIHdpbGwgbm90IGFmZmVjdCB0aGUgZGF0ZUVuZCBvZiB0aGUgdGFza3MgdW5sZXNzIHRoZSBhZGp1c3RUb05vbndvcmtpbmdUaW1lIHByb3BlcnR5IGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nRGF5cygpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ub253b3JraW5nRGF5cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm9ud29ya2luZ0RheXModmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdEYXlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG5vbndvcmtpbmcgaG91cnMgb2YgYSBkYXkuIEhvdXJzIGFyZSByZXByZXNlbnRlZCBhcyBudW1iZXJzIGluc2lkZSBhbiBhcnJheSAoZS5nLiBbMSwyLDNdIC0gbWVhbnMgMSwyIGFuZCAzIEFNKSBvciBudW1iZXIgcmFuZ2VzIHJlcHJlc2VudGVkIGFzIG5lc3RlZCBhcnJheXMoZS5nLiBbWzAsNl1dIC0gbWVhbnMgZnJvbSAwIHRvIDYgQU0pLiBJbiB0aGUgdGltbGluZSB0aGUgY2VsbHMgdGhhdCByZXByZXNlbnQgbm9ud29ya2luZyBkYXlzIGFyZSBjb2xvcmVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHJlc3QgYW5kIHdpbGwgbm90IGFmZmVjdCB0aGUgZGF0ZUVuZCBvZiB0aGUgdGFza3MgdW5sZXNzIHRoZSBhZGp1c3RUb05vbndvcmtpbmdUaW1lIHByb3BlcnR5IGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nSG91cnMoKTogbnVtYmVyW10gfCBudW1iZXJbXVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdIb3VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm9ud29ya2luZ0hvdXJzKHZhbHVlOiBudW1iZXJbXSB8IG51bWJlcltdW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0hvdXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBjb21wbGV0bHkgY3VzdG9taXplIHRoZSBwb3B1cCBXaW5kb3cgdGhhdCBpcyB1c2VkIHRvIGludGVyYWN0IHdpZHRoIHRhc2tzIGJ5IGNoYW5naW5nIHRoZWlyIHByb3BlcnRpZXMuIFRoZSBmdW5jdGlvbiBhcyB0aHJlZSBhcmd1bWVudHM6IHRhcmdldCAtIHRoZSB0YXJnZXQgcG9wdXAgV2luZG93IHRoYXQgaXMgYWJvdXQgdG8gYmUgb3BlbmVkLnR5cGUgLSB0aGUgdHlwZSBvZiB0aGUgd2luZG93LiBUaGUgdHlwZSBkZXRlcm1pbmVzIHRoZSBwdXJwb3NlIG9mIHRoZSB3aW5kb3cuIFRocmVlIHBvc3NpYmxlIHZhbHVlczogJ3Rhc2snICh0YXNrIGVkaXRpbmcpLCAnY29uZmlybScgKCBjb25maXJtYXRpb24gd2luZG93KSwgJ2Nvbm5lY3Rpb24nICh1c2VkIHdoZW4gZGVsZXRpbmcgYSBjb25uZWN0aW9uIGJldHdlZW4gdGFza3MpLiBpdGVtIC0gdGhlIGNvbm5lY3Rpb24vdGFzayBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSB3aW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwb3B1cFdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucG9wdXBXaW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBvcHVwV2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucG9wdXBXaW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGljaCBUYWIgaXRlbXMgYXJlIHZpc2libGUgaW5zaWRlIHRoZSBwb3B1cCB3aW5kb3cuIFRocmVlIHBvc3NpYmxlIHZhbHVlcyBhcmUgYWxsb3dlZDogZ2VuZXJhbCAtIHRoZSBnZW5lcmFsIHRhYiB3aXRoIHRhc2sgcHJvcGVydGllcyBkZXRlcm1pbmVzIGJ5IHRoZSB0YXNrQ29sdW1ucyBwcm9wZXJ0eS5kZXBlbmRlbmN5IC0gdGhlIGRlcGVuZGVuY3kgdGFiIHdoaWNoIHNob3dzIHRoZSBjb25uZWN0aW9ucyB0byB0aGUgdGFzayBhbmQgYWxsb3dzIHRvIGNyZWF0ZS9kZWxldGUgY29ubmVjdGlvbnMuc2VnbWVudHMgLSB0aGUgc2VnbWVudHMgdGFiIHdoaWNoIHNob3dzIHRoZSBzZWdtZW50cyBvZiB0aGUgdGFzayBhbmQgYWxsb3dzIHRvIGNyZWF0ZWQvZGVsZXRlIHNlZ21lbnRzLi4gKi9cblx0QElucHV0KClcblx0Z2V0IHBvcHVwV2luZG93VGFicygpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wb3B1cFdpbmRvd1RhYnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBvcHVwV2luZG93VGFicyh2YWx1ZTogc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucG9wdXBXaW5kb3dUYWJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZm9ybWF0IGZ1bmN0aW9uIGZvciB0aGUgVGltZWxpbmUgdGFzayBwcm9ncmVzcyBsYWJlbC4gVGhlIGV4cGVjdGVkIHJlc3VsdCBmcm9tIHRoZSBmdW5jdGlvbiBpcyBhIHN0cmluZy4gVGhlIGxhYmVsIGlzIGhpZGRlbiBieSBkZWZhdWx0IGNhbiBiZSBzaG93biB3aXRoIHRoZSBzaG93UHJvZ3Jlc3NMYWJlbCBwcm9wZXJ0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IHByb2dyZXNzTGFiZWxGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJvZ3Jlc3NMYWJlbEZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwcm9ncmVzc0xhYmVsRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wcm9ncmVzc0xhYmVsRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGEgZmxhdCBzdHJ1Y3R1cmUgYXMgYW4gYXJyYXkgb2YgYWxsIHJlc291cmNlcyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZXMoKTogR2FudHRDaGFydFJlc291cmNlW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZXModmFsdWU6IEdhbnR0Q2hhcnRSZXNvdXJjZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcmVtaW5lcyB0aGUgY29sdW1ucyB0aGF0IHdpbGwgYmUgdmlzaWJsZSBpbiB0aGUgUmVzb3VyY2UgVHJlZS4gRWFjaCBlbnRyeSBpbiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBtdXN0IGJlIG9mIHR5cGUgT2JqZWN0LiAgSXQgc2hvdWxkIGNvbnRhaW4gdGhlIGxhYmVsIGFuZCB2YWx1ZSBrZXlzLiBUaGUgdmFsdWUgb2YgbGFiZWwgZGV0ZXJtaW5lcyB0aGUgY29sdW1uIGhlYWRlciBsYWJlbCBpbnNpZGUgdGhlIFRhc2sgVHJlZS4gVGhlIHZhbHVlIG9mIHZhbHVlIGRldGVybWluZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNlbGxzIGluIHRoZSBjb2x1bW4uIEJ5IGRlZmF1bHQsIG9uZSBjb2x1bW4gd2l0aCBhbGwgcmVzb3VyY2UgbGFiZWxzIGlzIHZpc2libGUuICBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IGZvcm1hdEZ1bmN0aW9uIC0gYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgZWFjaCByZWNvcmQgaW4gdGhlIGNvbHVtbi4gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50cyAtIHRoZSBhY3R1YWwgbGFiZWwgYXMgc3RyaW5nIHRoYXQgaXMgZ29pbmcgdG8gYmUgaW5zZXJ0ZWQgYW5kIHRoZSBpbmRleCBvZiB0aGUgcmVzb3VyY2UuIFRoZSBmdW5jdGlvbiBtdXN0IHJldHVybiBhIHN0cmluZyBhcyB0aGUgbmV3IGNvbnRlbnQuIG1pbiAtIGNvbnRyb2xzIHRoZSBtaW4gc2l6ZSBvZiB0aGUgY29sdW1uIG1heCAtIGNvbnRyb2xzIHRoZSBtYXggc2l6ZSBvZiB0aGUgY29sdW1uc2l6ZSAtIGNvbnRyb2xzIHRoZSBhY3R1YWwgc2l6ZSBvZiB0aGUgY29sdW1uICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZUNvbHVtbnMoKTogR2FudHRDaGFydFJlc291cmNlQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VDb2x1bW5zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZUNvbHVtbnModmFsdWU6IEdhbnR0Q2hhcnRSZXNvdXJjZUNvbHVtbltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlQ29sdW1ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFJlc291cmNlIFRhYmxlIGlzIGZpbHRlcmFibGUgb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZUZpbHRlcmluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VGaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VGaWx0ZXJpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmb3JtYXQgZnVuY3Rpb24gdGhhdCBhbGxvd3MgdG8gcmUtZm9ybWF0IHRoZSBncm91cCByb3cgbGFiZWxzIHdoZW4gZ3JvdXBCeVJlc291cmNlcyBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VHcm91cEZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZUdyb3VwRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlR3JvdXBGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlR3JvdXBGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3JlYXRlIGEgY3VzdG9tIGhlYWRlciBjb250ZW50IGZvciB0aGUgUmVzb3VyY2UgUGFuZWwuIFRoZSBhdHRyaWJ1dGUgYWNjZXB0cyBhbiBIVE1MVGVtcGxhdGUgZWxlbWVudCwgaXQncyBpZCBvciBhIGZ1bmN0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VQYW5lbEhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsSGVhZGVyVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlUGFuZWxIZWFkZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxIZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW4gc2l6ZSBvZiB0aGUgUmVzb3VyY2UgUGFuZWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVBhbmVsTWluKCk6IG51bWJlciB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsTWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVBhbmVsTWluKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbE1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzaXplIG9mIHRoZSBSZXNvdXJjZSBQYW5lbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlUGFuZWxTaXplKCk6IG51bWJlciB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsU2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VQYW5lbFNpemUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsU2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZWZyZXNoIHJhdGUgb2YgdGhlIFJlc291cmNlIFBhbmVsIHdoZW4gZHJhZ2dpbmcvcmVzaXppbmcvcHJvZ3Jlc3MgY2hhbmdpbmcgYSBUYXNrIGZyb20gdGhlIFRpbWVsaW5lLiBUaGlzIHByb3BlcnR5IGFsbG93cyB0byBjdXN0b21pemUgdGhlIGludGVydmFsIGJldHdlZW4gcmVzb3VyY2UgVHJlZS9UaW1lbGluZSByZWZyZXNoZXMuIEJ5IGRlZmF1bHQgdGhleSByZWZyZXNoIGltbWVkaWF0ZWx5IGFmdGVyIGEgY2hhbmdlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VQYW5lbFJlZnJlc2hSYXRlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsUmVmcmVzaFJhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlUGFuZWxSZWZyZXNoUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxSZWZyZXNoUmF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSByZXNvdXJjZSBUaW1lbGluZSBjZWxscy4gVGhlIGNhbGxiYWNrIGFjY2VwdHMgdGhyZWUgYXJndW1lbnRzOiB0YXNrSW5kZXhlcyAtIGFuIGFycmF5IG9mIHRhc2sgaW5kZXhlcyB0aGF0IGFyZSBhc3NpZ25lZCB0byB0aGUgcmVzb3VyY2UgZm9yIHRoZSBjdXJyZW50IGNlbGwucmVzb3VyY2VJbmRleCAtIHRoZSBpbmRleCBvZiB0aGUgcmVzb3VyY2UuY2VsbERhdGUgLSB0aGUgZGF0ZSBvZiB0aGUgY3VycmVudCBjZWxsLiBUaGlzIHByb3BlcnR5IGlzIHVzZWQgd2hlbiByZXNvdXJjZVRpbWVsaW5lVmlldyBpcyBzZXQgdG8gY3VzdG9tLiBEZXBlbmRpbmcgb24gdGhlIHJlc291cmNlVGltZWxpbmVNb2RlLCBpdCBzaG91bGQgcmV0dXJuOiBzdHJpbmcgLSB3aGVuIHRoZSByZXNvdXJjZVRpbWVsaW5lTW9kZSBpcyBzZXQgdG8gJ2RpYWdyYW0nLm9iamVjdCAtIHdoZW4gdGhlIHJlc291cmNlVGltZWxpbmVNb2RlIGlzIHNldCB0byAnaGlzdG9ncmFtJy4gVGhlIG9iamVjdCBzaG91bGQgaGF2ZSB0d28gYXR0cmlidXRlczogY2FwYWNpdHkgYW5kIG1heENhcGFjaXR5LCBpbiBvcmRlciB0byBiZSB2aXN1YWxpemVkIGFzIGEgaGlzdG9ncmFtLi4gQW5vdGhlciB1c2FnZSBvZiB0aGlzIGNhbGxiYWNrIGlzIHRvIGN1c3RvbWl6ZSB0aGUgdGltZWxpbmUgcmVzb3VyY2UgcmVwcmVzZW50YXRpb24gY29tcGxldGVseSBpZiByZXNvdXJjZVRpbWVsaW5lTW9kZSBpcyBzZXQgdG8gY3VzdG9tLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VUaW1lbGluZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlVGltZWxpbmVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlVGltZWxpbmVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGhvdyB0aGUgY2FwYWNpdHkgb2YgdGhlIHJlc291cmNlcyB3aWxsIGJlIHZpc3VhbGl6ZWQgaW5zaWRlIHRoZSByZXNvdXJjZSB0aW1lbGluZS4gQnkgZGVmYXVsdCwgdGhlIGNhcGFjaXR5IGlzIG1lYXN1cmVkIGluIGhvdXJzIGRlcGVuZGluZyBvbiB0aGUgdmlldyBwcm9wZXJ0eSBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlVGltZWxpbmVNb2RlKCk6IEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VUaW1lbGluZU1vZGUodmFsdWU6IEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGhvdyB0aGUgcmVzb3VyY2VzIHdpbGwgYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgcmVzb3VyY2UgVGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVRpbWVsaW5lVmlldygpOiBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZVZpZXcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZVZpZXcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlVGltZWxpbmVWaWV3KHZhbHVlOiBHYW50dENoYXJ0UmVzb3VyY2VUaW1lbGluZVZpZXcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZVZpZXcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgd2hpY2ggdGFza3MgdG8gc2VsZWN0IGJ5IHRoZWlyIGlkIG9yIGdldHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YXNrIGlkcy4gSWYgbm8gaWQgaXMgcHJvdmlkZWQgZm9yIHRoZSB0YXNrLCBhbiBpbnRlcm5hbCBpZCBpcyBnZW5lcmF0ZWQgZm9yIGVhY2ggdGFzayBhY2NvcmRpbmcgdG8gaXQncyBpbmRleCh0cmVlIHBhdGgpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0ZWRUYXNrSWRzKCk6IG51bWJlcltdIHwgc3RyaW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRUYXNrSWRzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZFRhc2tJZHModmFsdWU6IG51bWJlcltdIHwgc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRUYXNrSWRzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgd2hpY2ggcmVzb3VyY2VzIHRvIHNlbGVjdCBieSB0aGVpciBpZCBvciBnZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcmVzb3VyY2UgaWRzLiBJZiBubyBpZCBpcyBwcm92aWRlZCBmb3IgdGhlIHJlc291cmNlLCBhbiBpbnRlcm5hbCBpZCBpcyBnZW5lcmF0ZWQgZm9yIGVhY2ggcmVzb3VyY2UgYWNjb3JkaW5nIHRvIGl0J3MgaW5kZXgodHJlZSBwYXRoKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGVkUmVzb3VyY2VJZHMoKTogbnVtYmVyW10gfCBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZFJlc291cmNlSWRzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZFJlc291cmNlSWRzKHZhbHVlOiBudW1iZXJbXSB8IHN0cmluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkUmVzb3VyY2VJZHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy9EaXNhYmxlcyB0aGUgY3VycmVudCB0aW1lIHNoYWRlci4gSWYgZW5hYmxlZCBhbGwgY2VsbHMgdGhhdCByZXByZXNlbnQgcGFzdCB0aW1lIHdpbGwgYmUgc2hhZGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hhZGVVbnRpbEN1cnJlbnRUaW1lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hhZGVVbnRpbEN1cnJlbnRUaW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaGFkZVVudGlsQ3VycmVudFRpbWUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hhZGVVbnRpbEN1cnJlbnRUaW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgYmFzZWxuZXMgb2YgdGhlIHRhc2tzIGFyZSB2aXNpYmxlIG9yIG5vdC4gQmFzZWxpbmVzIGFyZSBkZWZpbmVkIHZpYSB0aGUgJ3BsYW5uZWQnIGF0dHJpYnV0ZSBvbiB0aGUgdGFzayBvYmplY3RzIG9mIHRoZSBkYXRhU291cmNlIHByb3BlcnR5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd0Jhc2VsaW5lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0Jhc2VsaW5lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93QmFzZWxpbmUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0Jhc2VsaW5lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIHRoZSBwcm9ncmVzcyBsYWJlbCBpbnNpZGUgdGhlIHByb2dyZXNzIGJhcnMgb2YgdGhlIFRpbWVsaW5lIHRhc2tzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd1Byb2dyZXNzTGFiZWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93UHJvZ3Jlc3NMYWJlbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd1Byb2dyZXNzTGFiZWwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Byb2dyZXNzTGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgc2V0IHRoZSBkYXRlU3RhcnQvZGF0ZUVuZCBvZiB0aGUgdGFza3Mgd2lsbCBiZSBjb2VyY2VkIHRvIHRoZSBuZWFyZXN0IHRpbWVsaW5lIGNlbGwgZGF0ZSAoIGFjY29yZGluZyB0byB0aGUgdmlldyApLiBBZmZlY3RzIHRoZSBkcmFnZ2luZyBvcGVyYXRpb24gYXMgd2VsbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNuYXBUb05lYXJlc3QoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zbmFwVG9OZWFyZXN0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzbmFwVG9OZWFyZXN0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNuYXBUb05lYXJlc3QgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBHYW50dENoYXJ0IGNhbiBiZSBzb3J0ZWQgYnkgb25lLCBtb3JlIHRoZW4gb25lIG9yIG5vIGNvbHVtbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0RnVuY3Rpb24oKTogeyAoZGF0YVNvdXJjZTogYW55LCBzb3J0Q29sdW1uczogc3RyaW5nW10sIGRpcmVjdGlvbnM6IHN0cmluZ1tdLCBkZWZhdWx0Q29tcGFyZUZ1bmN0aW9uczogeyAoZmlyc3RSZWNvcmQ6IGFueSwgc2Vjb25kUmVjb3JkOiBhbnkpOiBudW1iZXIgfVtdKTogdm9pZCB9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydEZ1bmN0aW9uKHZhbHVlOiB7IChkYXRhU291cmNlOiBhbnksIHNvcnRDb2x1bW5zOiBzdHJpbmdbXSwgZGlyZWN0aW9uczogc3RyaW5nW10sIGRlZmF1bHRDb21wYXJlRnVuY3Rpb25zOiB7IChmaXJzdFJlY29yZDogYW55LCBzZWNvbmRSZWNvcmQ6IGFueSk6IG51bWJlciB9W10pOiB2b2lkIH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhIGZsYXQgc3RydWN0dXJlIGFzIGFuIGFycmF5IG9mIGFsbCB0YXNrcyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0TW9kZSgpOiBHYW50dENoYXJ0U29ydE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRNb2RlKHZhbHVlOiBHYW50dENoYXJ0U29ydE1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJlbWluZXMgdGhlIGNvbHVtbnMgdGhhdCB3aWxsIGJlIHZpc2libGUgaW4gdGhlIFRhc2sgVHJlZS4gRWFjaCBlbnRyeSBpbiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBtdXN0IGJlIG9mIHR5cGUgT2JqZWN0LiAgSXQgc2hvdWxkIGNvbnRhaW4gdGhlIGxhYmVsIGFuZCB2YWx1ZSBrZXlzLiBUaGUgdmFsdWUgb2YgbGFiZWwgZGV0ZXJtaW5lcyB0aGUgY29sdW1uIGhlYWRlciBsYWJlbCBpbnNpZGUgdGhlIFRhc2sgVHJlZS4gVGhlIHZhbHVlIG9mIHZhbHVlIGRldGVybWluZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNlbGxzIGluIHRoZSBjb2x1bW4uIEl0IHNob3VsZCByZWZlcmVuY2UgYSB0YXNrIGF0dHJpYnV0ZSBmcm9tIHRoZSBkYXRhU291cmNlLiBCeSBkZWZhdWx0LCBvbmUgY29sdW1uIHdpdGggYWxsIHRhc2sgbGFiZWxzIGlzIHZpc2libGUuICBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IGZvcm1hdEZ1bmN0aW9uIC0gYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgZWFjaCByZWNvcmQgaW4gdGhlIGNvbHVtbi4gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGFyZ3VtZW50IC0gdGhlIGFjdHVhbCBsYWJlbCBhcyBzdHJpbmcgdGhhdCBpcyBnb2luZyB0byBiZSBpbnNlcnRlZCBhbmQgbXVzdCByZXR1cm4gc29tZSBjb250ZW50LiBtaW4gLSBjb250cm9scyB0aGUgbWluIHNpemUgb2YgdGhlIGNvbHVtbiBtYXggLSBjb250cm9scyB0aGUgbWF4IHNpemUgb2YgdGhlIGNvbHVtbiBzaXplIC0gY29udHJvbHMgdGhlIGFjdHVhbCBzaXplIG9mIHRoZSBjb2x1bW5jdXN0b21FZGl0b3IgLSBhIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2V0IGEgY3VzdG9tIGVkaXRvciBmb3IgdGhlIGNvbHVtbiB3aGVuIGVkaXRpbmcgdmlhIHRoZSB3aW5kb3cuIEl0IGFjY2VwdHMgdHdvIGFyZ3VtZW50cyBsYWJlbCAtIHRoZSBsYWJlbCBvZiB0aGUgY29sdW1udmFsdWUgLSB0aGUgdmFsdWUgb2YgdGhlIGNvbHVtbi4gVGhlIGNhbGxiYWNrIG11c3QgcmV0dXJuIHRoZSBlZGl0b3Iuc2V0Q3VzdG9tRWRpdG9yVmFsdWUgLSBhIGNhbGxiYWNrIHRoYXQgaXMgdXNlZCB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSBjdXN0b20gZWRpdG9yLmdldEN1c3RvbUVkaXRvclZhbHVlIC0gYSBjYWxsYmFjayB0aGF0IGlzIHVzZWQgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIGVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tzKCk6IEdhbnR0Q2hhcnRUYXNrW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tzKHZhbHVlOiBHYW50dENoYXJ0VGFza1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgVGFzayBUYWJsZSBpcyBmaWx0ZXJhYmxlIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tDb2x1bW5zKCk6IEdhbnR0Q2hhcnRUYXNrQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbHVtbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tDb2x1bW5zKHZhbHVlOiBHYW50dENoYXJ0VGFza0NvbHVtbltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbiBzaXplIG9mIHRoZSBUYXNrIFBhbmVsLiBVc2VkIHdoZW4gUmVzb3VyY2UgUGFuZWwgaXMgdmlzaWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrRmlsdGVyaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrRmlsdGVyaW5nKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tGaWx0ZXJpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2l6ZSBvZiB0aGUgVGFzayBQYW5lbC4gVXNlZCB3aGVuIFJlc291cmNlIFBhbmVsIGlzIHZpc2libGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrUGFuZWxNaW4oKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQYW5lbE1pbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1BhbmVsTWluKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1BhbmVsTWluID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbiB3aWR0aCBvZiB0aGUgdGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrUGFuZWxTaXplKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUGFuZWxTaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrUGFuZWxTaXplKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1BhbmVsU2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW4gd2lkdGggb2YgdGhlIHRhc2sgdGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZU1pbigpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVsaW5lTWluKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2l6ZSh3aWR0aCkgb2YgdGhlIHRhc2sgdGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0cmVlTWluKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50cmVlTWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0cmVlTWluKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudHJlZU1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZvcm1hdCBmdW5jdGlvbiBmb3IgdGhlIEhlYWRlciBvZiB0aGUgVGltZWxpbmUuIFRoZSBmdW5jdGlvbiBwcm92aWRlcyB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czogZGF0ZSAtIGEgRGF0ZSBvYmplY3QgdGhhdCByZXByZXNldHMgdGhlIGRhdGUgZm9yIHRoZSBjdXJyZW50IGNlbGwudHlwZSAtIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgdHlwZSBvZiBkYXRlIHRoYXQgdGhlIGNlbGwgaXMgc2hvd2luZywgZS5nLiAnbW9udGgnLCAnd2VlaycsICdkYXknLCBldGMuaXNIZWFkZXJEZXRhaWxzIC0gYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgY2VsbCBpcyBwYXJ0IG9mIHRoZSBIZWFkZXIgRGV0YWlscyBDb250YWluZXIgb3Igbm90LnZhbHVlIC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgY2VsbCBwcm92aWRlZCBieSB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRyZWVTaXplKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50cmVlU2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdHJlZVNpemUodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50cmVlU2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHRvb2x0aXBzIGFyZSBlbmFibGVkIG9yIG5vdC4gVG9vbHRpcHMgYXJlIGF2YWlsYWJsZSBmb3IgdGltZWxpbmUgdGFza3MsIHJlc291cmNlcywgY29ubmVjdGlvbnMsIGluZGljYXRvcnMgYW5kIHNlZ21lbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3ZWF0aGVyIG9yIG5vdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgc2hvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwKCk6IEdhbnR0Q2hhcnRUb29sdGlwIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXAgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXAodmFsdWU6IEdhbnR0Q2hhcnRUb29sdGlwKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdmlld2luZyBkYXRlIHJhbmdlIG9mIHRoZSB0aW1lbGluZS4gUG9zc2libGUgdmFsdWVzOiBkYXkgLSBUaGUgdGltZWxpbmUgc2hvdyB0aGUgaG91cnMgb2YgdGhlIGRheS53ZWVrIC0gdGhlIHRpbWVsaW5lIHNob3dzIHRoZSBkYXlzIG9mIHRoZSB3ZWVrLm1vbnRoIC0gdGhlIHRpbWVsaW5lIHNob3dzIHRoZSBkYXlzIG9mIHRoZSBtb250aC55ZWFyIC0gdGhlIHRpbWVsaW5lIHNob3dzIHRoZSBtb250aHMgb2YgdGhlIHllYXIucmVzb3VyY2UgLSBkaXNwbGF5cyB0aGUgY3VycmVudCB0YXNrcyBieSBncm91cGluZyB0aGVtIGFjY29yZGluZyB0byB0aGUgcmVzb3VyY2VzIHRoZXkgaGF2ZSBhc3NpZ25lZC4gVGhlIHVuYXNzaWduZWQgdGFza3Mgd2lsbCBiZSBwbGFjZWQgaW4gYSBzZXBhcmF0ZSBncm91cCBjYWxsZWQgJ1VuYXNzaWduZWQnLiAgVGhlIHRpbWVsaW5lIGhhcyBhIGhlYWRlciBzZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGxhYmVscyBvZiBlYWNoIGNlbGwgYWNjb3JkaW5nIHRvIHRoZSBkYXRlIGluc2lkZSB0aGVtLiBUaGUgaGVhZGVyIGlzIHNwbGl0dGVkIGluIHR3byBzZWN0aW9ucyBpbiBvcmRlciB0byBnaXZlIGEgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvZiB0aGUgZGF0ZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW5zaWRlIHRoZSB0aW1lbGluZSBoZWFkZXIgd2hlbiB0aGV5IHJlcHJlc2VudCB5ZWFycy4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXcoKTogR2FudHRDaGFydFZpZXcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlldyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlldyh2YWx1ZTogR2FudHRDaGFydFZpZXcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlldyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluc2lkZSB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgd2Vla3MuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgeWVhckZvcm1hdCgpOiBZZWFyRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnllYXJGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHllYXJGb3JtYXQodmFsdWU6IFllYXJGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueWVhckZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGVsZW1lbnQncyB2aXN1YWwgdGhlbWUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2Vla0Zvcm1hdCgpOiBXZWVrRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndlZWtGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHdlZWtGb3JtYXQodmFsdWU6IFdlZWtGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2Vla0Zvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgaWYgdGhlIGVsZW1lbnQgY2FuIGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgYmF0Y2ggdXBkYXRlIHdhcyBzdGFydGVkIGFmdGVyIGV4ZWN1dGluZyB0aGUgYmVnaW5VcGRhdGUgbWV0aG9kLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQmVnaW5VcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgYmF0Y2ggdXBkYXRlIHdhcyBlbmRlZCBmcm9tIGFmdGVyIGV4ZWN1dGluZyB0aGUgZW5kVXBkYXRlIG1ldGhvZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkVuZFVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGNvbm5lY3Rpbmcgb25lIHRhc2sgdG8gYW5vdGhlci4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHN0YXJ0SW5kZXgpXG5cdCogICBzdGFydEluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSB0YXNrIHRoYXQgYSBjb25uZWN0aW9uIGlzIHN0YXJ0ZWQgZnJvbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29ubmVjdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjb21wbGV0ZXMgYSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHRhc2tzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdHN0YXJ0VGFza0lkLCBcdHN0YXJ0SW5kZXgsIFx0ZW5kSW5kZXgsIFx0ZW5kVGFza0lkLCBcdHR5cGUpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgY29ubmVjdGlvbiB0aGF0IHdhcyBjcmVhdGVkLlxuXHQqICAgc3RhcnRUYXNrSWQgLSBUaGUgaWQgb2YgdGhlIHRhc2sgdGhhdCBhIGNvbm5lY3Rpb24gaXMgc3RhcnRlZCBmcm9tLlxuXHQqICAgc3RhcnRJbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGEgY29ubmVjdGlvbiBpcyBzdGFydGVkIGZyb20uXG5cdCogICBlbmRJbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGEgY29ubmVjdGlvbiBlbmRlZCB0by5cblx0KiAgIGVuZFRhc2tJZCAtIFRoZSBpZCBvZiB0aGUgdGFzayB0aGF0IGEgY29ubmVjdGlvbiBlbmRlZCB0by5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBjb25uZWN0aW9uLiBGb3VycyB0eXBlcyBhcmUgYXZhaWxhYmxlOiA8dWw+PGxpPjxiPjA8L2I+IC0gc3RhcnQtdG8tc3RhcnQ8L2xpPjxsaT48Yj4xPC9iPiAtIGVuZC10by1zdGFydDwvbGk+PGxpPjxiPjI8L2I+IC0gZW5kLXRvLWVuZDwvbGk+PGxpPjxiPjM8L2I+IC0gc3RhcnQtdG8tZW5kPC9saT48L3VsPlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db25uZWN0aW9uRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRhc2sgaXMgc2VsZWN0ZWQvdW5zZWxlY3RlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHRvbGRWYWx1ZSlcblx0KiAgIHZhbHVlIC0gVGhlIGluZGV4IG9mIHRoZSBuZXcgc2VsZWN0ZWQgdGFzay5cblx0KiAgIG9sZFZhbHVlIC0gVGhlIGluZGV4IG9mIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIHRhc2suXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUcmVlIGNvbHVtbiBpcyByZXNpemVkLiBDb2x1bW4gcmVzaXppbmcgaXMgY29udHJvbGVkIGJ5IHRoZSBjb2x1bW5SZXNpemUgcHJvcGVydHkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZGF0YUZpZWxkLCBcdGhlYWRlckNlbGxFbGVtZW50LCBcdHdpZHRoSW5QZXJjZW50YWdlcywgXHR3aWR0aClcblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4uIENvcnJlc3BvbmRzIHRvIHRoZSA8Yj52YWx1ZTwvYj4gYXR0cmlidXRlIG9mIGEgPGI+dGFza0NvbHVtbnMvcmVzb3VyY2VDb2x1bW5zPC9iPiBvYmplY3QuXG5cdCogICBoZWFkZXJDZWxsRWxlbWVudCAtIFRoZSBIVE1MRWxlbWVudCBjb2x1bW4gY2VsbCBlbGVtZW50IHRoYXQgd2FzIHJlc2l6ZWQuXG5cdCogICB3aWR0aEluUGVyY2VudGFnZXMgLSBUaGUgbmV3IHdpZHRoIG9mIHRoZSBjb2x1bW4gaW4gcGVyY2VudGFnZXMuXG5cdCogICB3aWR0aCAtIFRoZSBuZXcgd2lkdGggb2YgdGhlIGNvbHVtbiBpbiBwaXhlbHMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlc2l6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGp1c3QgYmVmb3JlIHRoZSB3aW5kb3cgZm9yIHRhc2sgZWRpdGluZyBvciB0b29sdGlwIGlzIGNsb3NpbmcuIFRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG93bmVyLCBcdGl0ZW0sIFx0dGFyZ2V0LCBcdHR5cGUpXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGlzIHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcC4gVGhpcyBhdHRyaWJ1dGUgaXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGV2ZW50IGlzIHJlbGF0ZWQgdG8gdGhlIHRvb2x0aXAuXG5cdCogICBpdGVtIC0gVGhlIGl0ZW0gb2JqZWN0IHRoYXQgaXMgcmVsYXRlZCB0byB0aGUgdG9vbHRpcCBvd25lci4gSXQgY2FuIGJlIGEgdGFzay9zZWdtZW50L3Jlc291cmNlL2luZGljYXRvciBvYmplY3QuIFRoaXMgYXR0cmlidXRlIGlzIGRlZmluZWQgb25seSB3aGVuIHRoZSBldmVudCBpcyByZWxhdGVkIHRvIHRoZSB0b29sdGlwLlxuXHQqICAgdGFyZ2V0IC0gVGhlIGluc3RhbmNlIG9mIHRoZSB3aW5kb3cvdG9vbHRpcCB0aGF0IGlzIGdvaW5nIHRvIGNsb3NlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdy90b29sdGlwIHRoYXQgaXMgZ29pbmcgdG8gY2xvc2UuIFRoZXJlIGFyZSB0aHJlZSB0eXBlcyBvZiB3aW5kb3dzIGluc2lkZSBHYW50dENoYXJ0OiA8dWw+PGxpPjxiPmNvbmZpcm08L2I+IC0gYSBjb25maXJtIHdpbmRvdy4gVGhpcyB0eXBlIG9mIHdpbmRvdyBpcyB1c3VhbGx5IHVzZWQgdG8gY29uZmlybSB0aGUgZGVsZXRpb24gb2YgYSB0YXNrLjwvbGk+PGxpPjxiPnRhc2s8L2I+IC0gYSB3aW5kb3cgdXNlZCBmb3IgdGFzayBlZGl0aW5nLjwvbGk+PGxpPjxiPmNvbm5lY3Rpb248L2I+IC0gYSB3aW5kb3cgdXNlZCB0byBkZWxldGUgYSBjb25uZWN0aW9uLjwvbGk+PC91bD4uIElmIHRoZSBldmVudCBpcyBhIHRvb2x0aXAgZXZlbnQsIHRoZXJlIGFyZSBzZXZlcmFsIHRvb2x0aXAgdHlwZXM6IDx1bD48bGk+aW5kaWNhdG9yIC0gd2hlbiB0aGUgdG9vbHRpcCBvd25lciBpcyBhbiBpbmRpY2F0b3IuPC9saT48bGk+c2VnbWVudCAtIHdoZW4gdGhlIHRvb2x0aXAgb3duZXIgaXMgYSB0YXNrIHNlZ21lbnQuPC9saT48bGk+dGFzayAtIHdoZW4gdGhlIHRvb2x0aXAgb3duZXIgaXMgYSB0YXNrLjwvbGk+PGxpPnJlc291cmNlIC0gd2hlbiB0aGUgdG9vbHRpcCB0YXJnZXQgaXMgYSByZXNvdXJjZS48L2xpPjwvdWw+XG5cdCovXG5cdEBPdXRwdXQoKSBvbkNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB3aW5kb3cgZm9yIHRhc2sgZWRpdGluZyBpcyBjbG9zZWQoIGhpZGRlbiApXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b3duZXIsIFx0aXRlbSwgXHR0YXJnZXQsIFx0dHlwZSlcblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgaXMgdGhlIG93bmVyIG9mIHRoZSB0b29sdGlwLiBUaGlzIGF0dHJpYnV0ZSBpcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgZXZlbnQgaXMgcmVsYXRlZCB0byB0aGUgdG9vbHRpcFxuXHQqICAgaXRlbSAtIFRoZSBpdGVtIG9iamVjdCB0aGF0IGlzIHJlbGF0ZWQgdG8gdGhlIHRvb2x0aXAgb3duZXIuIEl0IGNhbiBiZSBhIHRhc2svc2VnbWVudC9yZXNvdXJjZS9pbmRpY2F0b3Igb2JqZWN0LiBUaGlzIGF0dHJpYnV0ZSBpcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgZXZlbnQgaXMgcmVsYXRlZCB0byB0aGUgdG9vbHRpcC5cblx0KiAgIHRhcmdldCAtIFRoZSBpbnN0YW5jZSBvZiB0aGUgd2luZG93L3Rvb2x0aXAgdGhhdCBpcyBjbG9zZWQuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2Ygd2luZG93L3Rvb2x0aXAgdGhhdCBpcyBjbG9zZWQuIFRoZXJlIGFyZSB0aHJlZSB0eXBlcyBvZiB3aW5kb3dzIGluc2lkZSBHYW50dENoYXJ0OiA8dWw+PGxpPjxiPmNvbmZpcm08L2I+IC0gYSBjb25maXJtIHdpbmRvdy4gVGhpcyB0eXBlIG9mIHdpbmRvdyBpcyB1c3VhbGx5IHVzZWQgdG8gY29uZmlybSB0aGUgZGVsZXRpb24gb2YgYSB0YXNrLjwvbGk+PGxpPjxiPnRhc2s8L2I+IC0gYSB3aW5kb3cgdXNlZCBmb3IgdGFzayBlZGl0aW5nLjwvbGk+PGxpPjxiPmNvbm5lY3Rpb248L2I+IC0gYSB3aW5kb3cgdXNlZCB0byBkZWxldGUgYSBjb25uZWN0aW9uLjwvbGk+PC91bD4uIElmIHRoZSBldmVudCBpcyBhIHRvb2x0aXAgZXZlbnQsIHRoZXJlIGFyZSBzZXZlcmFsIHRvb2x0aXAgdHlwZXM6IDx1bD48bGk+aW5kaWNhdG9yIC0gd2hlbiB0aGUgdG9vbHRpcCBvd25lciBpcyBhbiBpbmRpY2F0b3IuPC9saT48bGk+c2VnbWVudCAtIHdoZW4gdGhlIHRvb2x0aXAgb3duZXIgaXMgYSB0YXNrIHNlZ21lbnQuPC9saT48bGk+dGFzayAtIHdoZW4gdGhlIHRvb2x0aXAgb3duZXIgaXMgYSB0YXNrLjwvbGk+PGxpPnJlc291cmNlIC0gd2hlbiB0aGUgdG9vbHRpcCB0YXJnZXQgaXMgYSByZXNvdXJjZS48L2xpPjwvdWw+XG5cdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpdGVtIGlzIGNvbGxhcHNlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpc0dyb3VwLCBcdGl0ZW0sIFx0aW5kZXgsIFx0bGFiZWwsIFx0dmFsdWUpXG5cdCogICBpc0dyb3VwIC0gQSBib29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbSBpcyBhIHJlc291cmNlIGdyb3VwLiBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gPGI+Z3JvdXBCeVJlc29ydWNlczwvYj4gaXMgZW5hYmxlZC5cblx0KiAgIGl0ZW0gLSBUaGUgb2JqZWN0IGRldGFpbHMgb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqICAgbGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGNvbGxhcHNlZCBpdGVtLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gZHJhZ2dpbmcgb2YgYSB0YXNrIHN0YXJ0cy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGl0ZW0sIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQsIFx0c2VnbWVudClcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0KiAgIGl0ZW0gLSBUaGUgb2JqZWN0IG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0KiAgIGRhdGVTdGFydCAtIFRoZSBzdGFydCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0KiAgIGRhdGVFbmQgLSBUaGUgZW5kIGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyBnb2luZyB0byBiZSBkcmFnZ2VkLlxuXHQqICAgc2VnbWVudCAtIFRoZSBzZWdtZW50IG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuIFRoaXMgYXR0cmlidXRlIGlzIHVuZGVmaW5lZCBpZiBhIHNlZ21lbnQgaXMgbm90IGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gZHJhZ2dpbmcgb2YgYSB0YXNrIGZpbmlzaGVzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGl0ZW0sIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQsIFx0c2VnbWVudClcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSB0YXNrIHRoYXQgaXMgd2FzIGRyYWdnZWQuXG5cdCogICBpdGVtIC0gVGhlIG9iamVjdCBvZiB0aGUgdGFzayB0aGF0IGlzIHdhcyBkcmFnZ2VkLlxuXHQqICAgZGF0ZVN0YXJ0IC0gVGhlIHN0YXJ0IGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyB3YXMgZHJhZ2dlZC5cblx0KiAgIGRhdGVFbmQgLSBUaGUgZW5kIGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyB3YXMgZHJhZ2dlZC5cblx0KiAgIHNlZ21lbnQgLSBUaGUgc2VnbWVudCBvYmplY3QgdGhhdCB3YXMgZHJhZ2dlZC4gVGhpcyBhdHRyaWJ1dGUgaXMgdW5kZWZpbmVkIGlmIGEgc2VnbWVudCBoYXMgbm90IGJlZW4gZHJhZ2dlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gaXRlbSBpcyBleHBhbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpc0dyb3VwLCBcdGl0ZW0sIFx0aW5kZXgsIFx0bGFiZWwsIFx0dmFsdWUpXG5cdCogICBpc0dyb3VwIC0gQSBib29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbSBpcyBhIHJlc291cmNlIGdyb3VwLiBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gPGI+Z3JvdXBCeVJlc29ydWNlczwvYj4gaXMgZW5hYmxlZC5cblx0KiAgIGl0ZW0gLSBUaGUgaW5kZXggb2YgdGhlIGV4cGFuZGVkIGl0ZW0uXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgZXhwYW5kZWQgaXRlbS5cblx0KiAgIGxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBleHBhbmRlZCBpdGVtLlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGV4cGFuZGVkIGl0ZW0uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIEdhbnR0Q2hhcnQgaXMgZmlsdGVyZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSwgXHRhY3Rpb24sIFx0ZmlsdGVycylcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtcyB0aGF0IGhhdmUgYmVlbiBmaWx0ZXJlZCAoIHRhc2sgb3IgcmVzb3VyY2UgKS5cblx0KiAgIGFjdGlvbiAtIFRoZSBuYW1lIG9mIHRoZSBmaWx0ZXJpbmcgYWN0aW9uICh3aGV0aGVyIGZpbHRlcmluZyBpcyBhZGRlZCBvciByZW1vdmVkKS5cblx0KiAgIGZpbHRlcnMgLSBUaGUgZmlsdGVycyB0aGF0IGhhdmUgYmVlbiBhcHBsaWVkLiBGaWx0ZXJzIHJlcHJlc2VudCBKUVguVXRpbGl0aWVzLkZpbHRlckdyb3VwIG9iamVjdHMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSB0YXNrLCByZXNvdXJjZSBvciBjb25uZWN0aW9uIGlzIGNsaWNrZWQgaW5zaWRlIHRoZSBUaW1lbGluZSBvciB0aGUgVHJlZSBjb2x1bW5zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGl0ZW0sIFx0dHlwZSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgaWQgLSBUaGUgaWQgb2YgdGhlIHRhc2suXG5cdCogICBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgY2xpY2tlZC4gSXQgY2FuIGJlIGEgdGFzaywgcmVzb3VyY2Ugb3IgY29ubmVjdGlvbi5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtLiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiAndGFzaycsICdwcm9qZWN0JywgJ3Jlc291cmNlJywgJ2Nvbm5lY3Rpb24nLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBET00gZXZlbnQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYXNrL1Jlc291cmNlL0Nvbm5lY3Rpb24gaXMgaW5zZXJ0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSwgXHRpdGVtKVxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGl0ZW0gdGhhdCBoYXMgYmVlbiBtb2RpZmllZC4gVGhlIHR5cGUgY291bGQgYmU6ICdjb25uZWN0aW9uJywgJ3Rhc2snLCAncHJvamVjdCcsICdyZXNvdXJjZScuXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1JbnNlcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVGFzay9SZXNvdXJjZS9Db25uZWN0aW9uIGlzIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0dHlwZSwgXHRpdGVtKVxuXHQqICAgaWQgLSBUaGUgaWQgb2YgdGhlIHRhc2suXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgaXRlbSB0aGF0IGhhcyBiZWVuIG1vZGlmaWVkLiBUaGUgdHlwZSBjb3VsZCBiZTogJ2Nvbm5lY3Rpb24nLCAndGFzaycsICdwcm9qZWN0JywgJ3Jlc291cmNlJy5cblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbVJlbW92ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYXNrL1Jlc291cmNlL0Nvbm5lY3Rpb24gaXMgdXBkYXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHR0eXBlLCBcdGl0ZW0pXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgdGFzay5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtIHRoYXQgaGFzIGJlZW4gbW9kaWZpZWQuIFRoZSB0eXBlIGNvdWxkIGJlOiAnY29ubmVjdGlvbicsICd0YXNrJywgJ3Byb2plY3QnLCAncmVzb3VyY2UnLlxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQganVzdCBiZWZvcmUgdGhlIHdpbmRvdyBmb3IgdGFzayBlZGl0aW5nIG9yIHRvb2x0aXAgaXMgb3BlbmluZy4gVGhlIG9wZW5pbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b3duZXIsIFx0aXRlbSwgXHR0YXJnZXQsIFx0dHlwZSlcblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgaXMgdGhlIG93bmVyIG9mIHRoZSB0b29sdGlwLiBUaGlzIGF0dHJpYnV0ZSBpcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgZXZlbnQgaXMgcmVsYXRlZCB0byB0aGUgdG9vbHRpcFxuXHQqICAgaXRlbSAtIFRoZSBpdGVtIG9iamVjdCB0aGF0IGlzIHJlbGF0ZWQgdG8gdGhlIHRvb2x0aXAgb3duZXIuIEl0IGNhbiBiZSBhIHRhc2svc2VnbWVudC9yZXNvdXJjZS9pbmRpY2F0b3Igb2JqZWN0LiBUaGlzIGF0dHJpYnV0ZSBpcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgZXZlbnQgaXMgcmVsYXRlZCB0byB0aGUgdG9vbHRpcC5cblx0KiAgIHRhcmdldCAtIFRoZSBpbnN0YW5jZSBvZiB0aGUgd2luZG93L3Rvb2x0aXAgdGhhdCBpcyBnb2luZyB0byBvcGVuLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdy90b29sdGlwIHRoYXQgaXMgZ29pbmcgdG8gb3Blbi4gVGhlcmUgYXJlIHRocmVlIHR5cGVzIG9mIHdpbmRvd3MgaW5zaWRlIEdhbnR0Q2hhcnQ6IDx1bD48bGk+PGI+Y29uZmlybTwvYj4gLSBhIGNvbmZpcm0gd2luZG93LiBUaGlzIHR5cGUgb2Ygd2luZG93IGlzIHVzdWFsbHkgdXNlZCB0byBjb25maXJtIHRoZSBkZWxldGlvbiBvZiBhIHRhc2suPC9saT48bGk+PGI+dGFzazwvYj4gLSBhIHdpbmRvdyB1c2VkIGZvciB0YXNrIGVkaXRpbmcuPC9saT48bGk+PGI+Y29ubmVjdGlvbjwvYj4gLSBhIHdpbmRvdyB1c2VkIHRvIGRlbGV0ZSBhIGNvbm5lY3Rpb24uPC9saT48L3VsPi4gSWYgdGhlIGV2ZW50IGlzIGEgdG9vbHRpcCBldmVudCwgdGhlcmUgYXJlIHNldmVyYWwgdG9vbHRpcCB0eXBlczogPHVsPjxsaT5pbmRpY2F0b3IgLSB3aGVuIHRoZSB0b29sdGlwIG93bmVyIGlzIGFuIGluZGljYXRvci48L2xpPjxsaT5zZWdtZW50IC0gd2hlbiB0aGUgdG9vbHRpcCBvd25lciBpcyBhIHRhc2sgc2VnbWVudC48L2xpPjxsaT50YXNrIC0gd2hlbiB0aGUgdG9vbHRpcCBvd25lciBpcyBhIHRhc2suPC9saT48bGk+cmVzb3VyY2UgLSB3aGVuIHRoZSB0b29sdGlwIHRhcmdldCBpcyBhIHJlc291cmNlLjwvbGk+PC91bD5cblx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHdpbmRvdyBmb3IgdGFzayBlZGl0aW5nIGlzIG9wZW5lZCggdmlzaWJsZSApIG9yIHdoZW4gdGhlIHRvb2x0aXAgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG93bmVyLCBcdGl0ZW0sIFx0dGFyZ2V0LCBcdHR5cGUpXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGlzIHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcC4gVGhpcyBhdHRyaWJ1dGUgaXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGV2ZW50IGlzIHJlbGF0ZWQgdG8gdGhlIHRvb2x0aXBcblx0KiAgIGl0ZW0gLSBUaGUgaXRlbSBvYmplY3QgdGhhdCBpcyByZWxhdGVkIHRvIHRoZSB0b29sdGlwIG93bmVyLiBJdCBjYW4gYmUgYSB0YXNrL3NlZ21lbnQvcmVzb3VyY2UvaW5kaWNhdG9yIG9iamVjdC4gVGhpcyBhdHRyaWJ1dGUgaXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGV2ZW50IGlzIHJlbGF0ZWQgdG8gdGhlIHRvb2x0aXAuXG5cdCogICB0YXJnZXQgLSBUaGUgaW5zdGFuY2Ugb2YgdGhlIHdpbmRvdy90b29sdGlwIHRoYXQgaXMgb3BlbmVkLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdy90b29sdGlwIHRoYXQgaXMgb3BlbmVkLiBUaGVyZSBhcmUgdGhyZWUgdHlwZXMgb2Ygd2luZG93cyBpbnNpZGUgR2FudHRDaGFydDogPHVsPjxsaT48Yj5jb25maXJtPC9iPiAtIGEgY29uZmlybSB3aW5kb3cuIFRoaXMgdHlwZSBvZiB3aW5kb3cgaXMgdXN1YWxseSB1c2VkIHRvIGNvbmZpcm0gdGhlIGRlbGV0aW9uIG9mIGEgdGFzay48L2xpPjxsaT48Yj50YXNrPC9iPiAtIGEgd2luZG93IHVzZWQgZm9yIHRhc2sgZWRpdGluZy48L2xpPjxsaT48Yj5jb25uZWN0aW9uPC9iPiAtIGEgd2luZG93IHVzZWQgdG8gZGVsZXRlIGEgY29ubmVjdGlvbi48L2xpPjwvdWw+LiBJZiB0aGUgZXZlbnQgaXMgYSB0b29sdGlwIGV2ZW50LCB0aGVyZSBhcmUgc2V2ZXJhbCB0b29sdGlwIHR5cGVzOiA8dWw+PGxpPmluZGljYXRvciAtIHdoZW4gdGhlIHRvb2x0aXAgb3duZXIgaXMgYW4gaW5kaWNhdG9yLjwvbGk+PGxpPnNlZ21lbnQgLSB3aGVuIHRoZSB0b29sdGlwIG93bmVyIGlzIGEgdGFzayBzZWdtZW50LjwvbGk+PGxpPnRhc2sgLSB3aGVuIHRoZSB0b29sdGlwIG93bmVyIGlzIGEgdGFzay48L2xpPjxsaT5yZXNvdXJjZSAtIHdoZW4gdGhlIHRvb2x0aXAgdGFyZ2V0IGlzIGEgcmVzb3VyY2UuPC9saT48L3VsPlxuXHQqL1xuXHRAT3V0cHV0KCkgb25PcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcHJvZ3Jlc3Mgb2YgYSB0YXNrIGJhciBzdGFydHMgdG8gY2hhbmdlIGFzIGEgcmVzdWx0IG9mIHVzZXIgaW50ZXJhY3Rpb24uIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRpbmRleCwgXHRwcm9ncmVzcylcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSB0YXNrLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgd2hpY2ggcHJvZ3Jlc3MgaXMgZ29pbmcgdG8gYmUgY2hhbmdlZC5cblx0KiAgIHByb2dyZXNzIC0gVGhlIHByb2dyZXNzIG9mIHRoZSB0YXNrIGJlZm9yZSBpdCBpcyBjaGFuZ2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Qcm9ncmVzc0NoYW5nZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcHJvZ3Jlc3Mgb2YgYSB0YXNrIGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0aW5kZXgsIFx0cHJvZ3Jlc3MpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgdGFzay5cblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSB0YXNrIHdoaWNoIHByb2dyZXNzIGlzIGhhcyBiZWVuIGNoYW5nZWQuXG5cdCogICBwcm9ncmVzcyAtIFRoZSBwcm9ncmVzcyBvZiB0aGUgdGFzayBhZnRlciBpdCB3YXMgY2hhbmdlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUHJvZ3Jlc3NDaGFuZ2VFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHJlc2l6aW5nIG9mIGEgdGFzayBzdGFydHMuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRpdGVtLCBcdGRhdGVTdGFydCwgXHRkYXRlRW5kLCBcdHNlZ21lbnQpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBpdGVtIC0gVGhlIG9iamVjdCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBkYXRlU3RhcnQgLSBUaGUgc3RhcnQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBkYXRlRW5kIC0gVGhlIGVuZCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgcmVzaXplZC5cblx0KiAgIHNlZ21lbnQgLSBUaGUgc2VnbWVudCBvYmplY3QgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLiBUaGlzIGF0dHJpYnV0ZSBpcyB1bmRlZmluZWQgaWYgYSBzZWdtZW50IGlzIG5vdCBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHJlc2l6aW5nIG9mIGEgdGFzayBmaW5pc2hlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRpdGVtLCBcdGRhdGVTdGFydCwgXHRkYXRlRW5kLCBcdHNlZ21lbnQpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgdGFzayB0aGF0IHdhcyByZXNpemVkLlxuXHQqICAgaXRlbSAtIFRoZSBvYmplY3Qgb2YgdGhlIHRhc2sgdGhhdCB3YXMgcmVzaXplZC5cblx0KiAgIGRhdGVTdGFydCAtIFRoZSBzdGFydCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgd2FzIHJlc2l6ZWQuXG5cdCogICBkYXRlRW5kIC0gVGhlIGVuZCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgd2FzIHJlc2l6ZWQuXG5cdCogICBzZWdtZW50IC0gVGhlIHNlZ21lbnQgb2JqZWN0IHRoYXQgd2FzIHJlc2l6ZWQuIFRoaXMgYXR0cmlidXRlIGlzIHVuZGVmaW5lZCBpZiBhIHNlZ21lbnQgaGFzIG5vdCBiZWVuIHJlc2l6ZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIEdhbnR0Q2hhcnQgaXMgc29ydGVkIGJ5IHNvbWUgY29sdW1uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHR5cGUsIFx0Y29sdW1ucywgXHRzb3J0RGF0YUZpZWxkcywgXHRzb3J0T3JkZXJzLCBcdHNvcnREYXRhVHlwZXMpXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgY29sdW1ucyB0aGF0IGhhdmUgYmVlbiBzb3J0ZWQgKCB0YXNrIG9yIHJlc291cmNlIGNvbHVtbiApLlxuXHQqICAgY29sdW1ucyAtIEFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBjb250YWlucyB0aGUgY3VycmVudGx5IHNvcnRlZCBjb2x1bW4gb2JqZWN0cy5cblx0KiAgIHNvcnREYXRhRmllbGRzIC0gVGhlIGRhdGFGaWVsZHMgb2YgdGhlIGNvbHVtbnMgdGhhdCBoYXZlIGJlZW4gc29ydGVkLiBUaGUgZGF0YUZpZWxkIGNvcnJlc3BvbmRzIHRvIHRoZSA8Yj52YWx1ZTwvYj4gcHJvcGVydHkgb2YgYSA8Yj50YXNrQ29sdW1ucy9yZXNvdXJjZUNvbHVtbnM8L2I+IG9iamVjdC5cblx0KiAgIHNvcnRPcmRlcnMgLSBUaGUgb3JkZXJzIG9mIHRoZSBjb2x1bW5zIHRoYXQgaGF2ZSBiZWVuIHNvcnRlZC5cblx0KiAgIHNvcnREYXRhVHlwZXMgLSBUaGUgZGF0YSB0eXBlcyBvZiB0aGUgY29sdW1ucyB0aGF0IGhhdmUgYmVlbiBzb3J0ZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBUaW1lbGluZSBoYXMgYmVlbiBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsQm90dG9tUmVhY2hlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIFRpbWVsaW5lIGhhcyBiZWVuIHNjcm9sbGVkIHRvIHRoZSB0b3AuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxUb3BSZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgVGltZWxpbmUgaGFzIGJlZW4gc2Nyb2xsZWQgdG8gdGhlIGJlZ2lubmluZyAoaG9yaXpvbnRhbGx5KS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbExlZnRSZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgVGltZWxpbmUgaGFzIGJlZW4gc2Nyb2xsZWQgdG8gdGhlIGVuZCAoaG9yaXpvbnRhbGx5KS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbFJpZ2h0UmVhY2hlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBjdXN0b20gZmlsdGVyIHRvIGEgc3BlY2lmaWMgY29sdW1uICh0YXNrIG9yIHJlc291cmNlIGNvbHVtbikuIFxuXHQqIEBwYXJhbSB7YW55fSBjb2x1bW5zLiBBbiBvYmplY3Qgb3IgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBmb2xsb3dpbmcgc3ludGF4OiA8dWw+PGxpPjxiPnR5cGU8L2I+IC0gaW5kaWNhdGVzIHRoZSB0eXBlIG9mIGNvbHVtbiB0byBmaWx0ZXIuIFBvc3NpYmxlIHZhbHVlcyBhcmUgJ3Rhc2snIG9yICdyZXNvdXJjZScuPC9saT48bGk+PGI+dmFsdWU8L2I+IC0gdGhlIHZhbHVlIG9mIHRoZSBjb2x1bW4gdGhhdCBtdXN0IG1hdGNoIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgYSB0YXNrQ29sdW1ucy9yZXNvdXJjZUNvbHVtbnMgb2JqZWN0KGUuZy4gJ2xhYmVsJywgJ2RhdGVTdGFydCcsIGV0YykuPC9saT48L3VsPi5cblx0KiBAcGFyYW0ge2FueX0gZmlsdGVyR3JvdXAuIEEgSlFYLlV0aWxpdGllcy5GaWx0ZXJHcm91cCBvYmplY3QuIEhlcmUncyBhbiBleGFtcGxlIGZvciBjcmVhdGluZyBhIEZpbHRlckdyb3VwIG9iamVjdDogPHByZT5jb25zdCBmaWx0ZXJHcm91cCA9IG5ldyB3aW5kb3cuSlFYLlV0aWxpdGllcy5GaWx0ZXJHcm91cCgpLCBmaWx0ZXJPYmplY3QgPSBmaWx0ZXJHcm91cC5jcmVhdGVGaWx0ZXIoJ3N0cmluZycsICdUYXNrIEInLCAnU1RBUlRTX1dJVEhfQ0FTRV9TRU5TSVRJVkUnKTsgZmlsdGVyR3JvdXAuYWRkRmlsdGVyKCdvcicsIGZpbHRlck9iamVjdCk7IGdhbnR0LmFkZEZpbHRlcih7IHR5cGU6ICd0YXNrJywgdmFsdWU6ICdsYWJlbCcgfSwgZmlsdGVyR3JvdXApOzwvcHJlPlxuXHQqL1xuICAgIHB1YmxpYyBhZGRGaWx0ZXIoY29sdW1uczogYW55LCBmaWx0ZXJHcm91cDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihjb2x1bW5zLCBmaWx0ZXJHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGNvbHVtbnMsIGZpbHRlckdyb3VwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBjdXJyZW50bHkgYXBwbGllZCBmaWx0ZXJzLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBjdXJyZW50bHkgYXBwbGllZCBjb2x1bW4gc29ydGluZy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU29ydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTb3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTb3J0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuc2VsZWN0cyBhbGwgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zIGluc2lkZSB0aGUgR2FudHRDaGFydCBpbmNsdWRpbmcgVGFza3MgYW5kIFJlc291cmNlcy4gSXQgYWxzbyBjbGVhcnMgdGhlIGFzc2lnbm1lbnQgaGlnaGxnaWh0ZXJzLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIHByZXZpb3VzbHkgc2F2ZWQgc3RhdGUgb2YgdGhlIGVsZW1lbnQgZm9ybSBMb2NhbFN0b3JhZ2UgYWNjb3JkaW5nIHRvIGl0J3MgaWQuIFJlcXVpcmVzIGFuIGlkIHRvIGJlIHNldCB0byB0aGUgZWxlbWVudC4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIHRhc2tzLiAgXG5cdCovXG4gICAgcHVibGljIGNsZWFyVGFza3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyVGFza3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclRhc2tzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIHJlc291cmNlcy4gIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJSZXNvdXJjZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJlc291cmNlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byB0YXNrcy4gIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSBzdGFydFRhc2tJbmRleC4gVGhlIGlkIG9mIHRoZSBzdGFydCB0YXNrIG9yIHRoZSBjb25uZWN0aW9uIHN0cmluZyBsaWtlICcyLTMtMCcuIDxiPklmIHRoZSBjb21wbGV0ZSBjb25uZWN0aW9ucyBzdHJpbmcgaXMgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCB0aGUgcmVzdCBvZiB0aGUgbWV0aG9kIGFyZ3VtZW50cyBhcmUgbm90IG5lY2Vzc2FyeTwvYj5cblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gdGFza0VuZEluZGV4Py4gVGhlIGlkIG9mIHRoZSBlbmQgdGFzay5cblx0KiBAcGFyYW0ge251bWJlcn0gY29ubmVjdGlvblR5cGU/LiBUaGUgdHlwZSBvZiB0aGUgY29ubmVjdGlvbi4gQSBudW1lcmljIHZhbHVlIGZyb20gMCB0byAzLiBUaGUgY29ubmVjdGlvbiB0eXBlIGNhbiBiZTogPHVsPjxsaT48Yj4wPC9iPiAtIFN0YXJ0LXRvLVN0YXJ0IGNvbm5lY3Rpb24uPC9saT48bGk+PGI+MTwvYj4gLSBFbmQtdG8tU3RhcnQgY29ubmVjdGlvbi48L2xpPjxsaT48Yj4yPC9iPiAtIEVuZC10by1FbmQgY29ubmVjdGlvbi48L2xpPjxsaT48Yj4zPC9iPiAtIFN0YXJ0LXRvLUVuZCBjb25uZWN0aW9uLjwvbGk+PC91bD5cblx0KiBAcGFyYW0ge251bWJlcn0gbGFnPy4gVGhlIGNvbm5lY3Rpb24gbGFnIGluIG1pbGlzZWNvbmRzLiBVc2VkIGJ5IHRoZSBBdXRvIHNjaGVkdWxpbmcgYWxnb3JpdGhtIGluIG9yZGVyIGFsbG93IHNvbWUgc2xhY2sgdGltZSBzbGFjayB0aW1lIGJlZm9yZSBvciBhZnRlciB0aGUgbmV4dCB0YXNrIGJlZ2lucy9lbmRzLiBMYWcgaXMgbWVhc3VyZWQgaW4gbWlsaXNlY29uZHMuIEl0IGNhbiBiZSBhIG5lZ2F0aXZlIChsZWFkKSBvciBhIHBvc2l0aXZlIChsYWcpIG51bWJlci5cblx0Ki9cbiAgICBwdWJsaWMgY3JlYXRlQ29ubmVjdGlvbihzdGFydFRhc2tJbmRleDogbnVtYmVyIHwgc3RyaW5nLCB0YXNrRW5kSW5kZXg/OiBudW1iZXIgfCBzdHJpbmcsIGNvbm5lY3Rpb25UeXBlPzogbnVtYmVyLCBsYWc/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY3JlYXRlQ29ubmVjdGlvbihzdGFydFRhc2tJbmRleCwgdGFza0VuZEluZGV4LCBjb25uZWN0aW9uVHlwZSwgbGFnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4LCB0YXNrRW5kSW5kZXgsIGNvbm5lY3Rpb25UeXBlLCBsYWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYW4gZXhwYW5kZWQgcHJvamVjdC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGlkLiBUaGUgaWQgb2YgYSBwcm9qZWN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgY29sbGFwc2VkLlxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZShpZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZShpZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFN0YXJ0cyBhbiB1cGRhdGUgb3BlcmF0aW9uLiBUaGlzIGlzIGFwcHJvcHJpYXRlIHdoZW4gY2FsbGluZyBtdWx0aXBsZSBtZXRob2RzIG9yIHNldCBtdWx0aXBsZSBwcm9wZXJ0aWVzIGF0IG9uY2UuIFxuXHQqL1xuICAgIHB1YmxpYyBiZWdpblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSB1cGRhdGUgb3BlcmF0aW9uLiBUaGlzIG1ldGhvZCB3aWxsIHJlc3VtZSB0aGUgcmVuZGVyaW5nIGFuZCB3aWxsIHJlZnJlc2ggdGhlIEdhbnR0Q2hhcnQuIFxuXHQqL1xuICAgIHB1YmxpYyBlbmRVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZlcmVzaGVzIHRoZSBHYW50dENoYXJ0IGFmdGVyIHJlc2l6aW5nIGJ5IHJlY2FsY3VsYXRpbmcgdGhlIFNjcm9sbGJhcnMuICBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IGZ1bGxSZWZyZXNoPy4gSWYgc2V0IHRoZSBHYW50dENoYXJ0IHdpbGwgYmUgcmUtcmVuZGVyZWQgY29tcGxldGVseS5cblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaChmdWxsUmVmcmVzaD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaChmdWxsUmVmcmVzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaChmdWxsUmVmcmVzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIHN1cmUgYSBUYXNrIGlzIHZpc2libGUgYnkgc2Nyb2xsaW5nIHRvIGl0LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdGFza0lkLiBUaGUgaWQgb2YgdGhlIHRhcmdldCBUYXNrLlxuXHQqL1xuICAgIHB1YmxpYyBlbnN1cmVWaXNpYmxlKHRhc2tJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuc3VyZVZpc2libGUodGFza0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKHRhc2tJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBjb2xsYXBzZWQgcHJvamVjdCB3aXRoIHRhc2tzLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaWQuIFRoZSBpZCBvZiBhIHByb2plY3QgdGFzayB0aGF0IHNob3VsZCBiZSBleHBhbmRlZC5cblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kKGlkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBkYXRhIG9mIFRyZWUgb2YgdGhlIEdhbnR0Q2hhcnQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRm9ybWF0LiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGV4cG9ydGVkIGZpbGUuIFRocmVlIHBvc3NpYmxlIHZhbHVlcyBhcmUgYXZhaWxhYmxlOiA8dWw+PGxpPjxiPnBkZjwvYj48L2xpPjxsaT48Yj54bHN4PC9iPjwvbGk+PGxpPjxiPmh0bWw8L2I+PC9saT48bGk+PGI+dHN2PC9iPjwvbGk+PGxpPjxiPmNzdjwvYj48L2xpPjxsaT48Yj54bWw8L2I+PC9saT48L3VsPlxuXHQqIEBwYXJhbSB7YW55fSBjYWxsYmFjaz8uIEEgY2FsbGJhY2sgdGhhdCBhbGxvd3MgdG8gZm9ybWF0IHRoZSBleHBvcnRlZCBkYXRhIGJhc2VkIG9uIGEgY29uZGl0aW9uLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzLCByZWZlciBybyB0aGUgSlFYIEV4cG9ydCBEb2N1bWVudGF0aW9uLlxuXHQqL1xuICAgIHB1YmxpYyBleHBvcnREYXRhKGRhdGFGb3JtYXQ6IHN0cmluZywgY2FsbGJhY2s/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYWxsIGV4aXN0aW5nIGNvbm5lY3Rpb25zLiBUaGUgY29ubmVjdGlvbnMgYXJlIHJldHVybmVkIGFzIG9iamVjdHMgdGhhdCBjb250YWluIGRldGFpbGVkIGluZm9ybWF0aW9uLiBFYWNoIG9iamVjdCBpbiB0aGUgYXJyYXkgaGFzIHRoZSBmb2xsb3dpbmcga2V5czogJ2lkJyAtIGNvbm5lY3Rpb24gaWQsICd0eXBlJyAtIGNvbm5lY3Rpb24gdHlwZSwgJ3N0YXJ0VGFza0lkJyAtIGNvbm5lY3Rpb24ncyBzdGFydCB0YXNrIGlkLCAnZW5kVGFza0lkJyAtIGNvbm5lY3Rpb24ncyBlbmQgdGFzayBpZCwgJ3N0YXJ0SW5kZXgnIC0gY29ubmVjdGlvbidzIHN0YXJ0IHRhc2sgaW5kZXgsICdlbmRJbmRleCcgLSBjb25uZWN0aW9uJ3MgZW5kIHRhc2sgaW5kZXgsICdsYWcnIC0gbGFnIHRpbWUuICBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q29ubmVjdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjb25uZWN0aW9uIGRldGFpbHMgZm9yIHRoZSB0YXJnZXQgY29ubmVjdGlvbiB3aGljaCBpbmNsdWRlczogc3RhcnRUYXNrLCBlbmRUYXNrLCBzdGFydFRhc2tJZCwgZW5kVGFza0lkIGFuZCB0eXBlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNvbm5lY3Rpb24uIENvbm5lY3Rpb24gdHlwZXMgYXJlIGRlc2NyaWJlZCBpbiBkZXRhaWwgdW5kZXIgdGhlIGBjb25uZWN0aW9uRW5kYCBldmVudCBkZXNjcmlwdGlvbiBpbiB0aGlzIGRvY3VtZW50IGFuZCBpbiBhIGRlZGljYXRlZCB0b3BpYyBhdmFpbGFibGUgb24gdGhlIHdlYnNpdGUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBjb25uZWN0aW9uSWQuIEEgY29ubmVjdGlvbiBpZC4gRWFjaCBjb25uZWN0aW9uIGhhcyBhIHVuaXF1ZSBpZCB0aGF0IGlzIGFzc2lnbmVkIHdoZW4gYSBjb25uZWN0aW9uIGlzIGNyZWF0ZWQuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENvbm5lY3Rpb25EZXRhaWxzKGNvbm5lY3Rpb25JZCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDb25uZWN0aW9uRGV0YWlscyhjb25uZWN0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYWxsIHRhc2tzIGluc2lkZSB0aGUgZWxlbWVudCBhbG9uZyB3aXRoIHRoZWlyIGNvbm5lY3Rpb25zIGFuZCBzZXR0aW5ncy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBUcmVlIHBhdGggb2YgYSB0YXNrL3Jlc291cmNlLiBUaGUgdHJlZSBwYXRoIGlzIHVzZWQgYXMgdGFzay9yZXNvdXJjZSBpZCBpZiBubyBpZCBpcyBwcm92aWRlZCBieSB0aGUgdXNlci4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEEgR2F0dENoYXJ0VGFzay9HYW50dENoYXJ0UmVzb3VyY2UgaXRlbSBvYmplY3QuXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEl0ZW1QYXRoKGl0ZW0pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SXRlbVBhdGgoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB0YXNrIG9iamVjdCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBpZC9wYXRoLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaXRlbUlkLiBUaGUgaWQvcGF0aCBvZiBhIHRhc2suXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFRhc2soaXRlbUlkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRhc2soaXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEdhbnR0Q2hhcnQgdGFza3MuIFxuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFRhc2tzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgaW5kZXggb2YgYSB0YXNrLiBcblx0KiBAcGFyYW0ge2FueX0gdGFzay4gQSBHYXR0Q2hhcnRUYXNrIG9iamVjdC5cblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VGFza0luZGV4KHRhc2spOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VGFza0luZGV4KHRhc2spO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY29ubmVjdGlvbnMgZGVmaW5pdGlvbnMgb2YgYSB0YXNrLiBcblx0KiBAcGFyYW0ge2FueX0gdGFza0lkLiBBIEdhbnR0Q2hhcnRUYXNrIG9iamVjdCBvciBpdCdzIGlkLlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRUYXNrQ29ubmVjdGlvbnModGFza0lkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRhc2tDb25uZWN0aW9ucyh0YXNrSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgUHJvamVjdCBvZiBhIHRhc2sgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90IGhhdmUgb25lLiBcblx0KiBAcGFyYW0ge2FueX0gdGFzay4gQSBHYW50Q2hhcnRUYXNrIG9iamVjdC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VGFza1Byb2plY3QodGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUYXNrUHJvamVjdCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHJlc291cmNlIG9iamVjdCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBpZC9wYXRoLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaXRlbUlkLiBUaGUgaWQvcGF0aCBvZiBhIHJlc291cmNlLlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZShpdGVtSWQpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2UoaXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEdhbnR0Q2hhcnQgcmVzb3VyY2VzLiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZXMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJlc291cmNlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgaW5kZXggb2YgYSByZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IHJlc291cmNlLiBBIEdhbnR0Q2hhcnRSZXNvdXJjZSBvYmplY3QuXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJlc291cmNlSW5kZXgocmVzb3VyY2UpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2VJbmRleChyZXNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB0YXNrcyB0aGF0IGFyZSBhc3NpZ25lZCB0byB0aGUgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZS4gQSBHYW50dENoYXJ0UmVzb3VyY2Ugb2JqZWN0IG9yIGl0J3MgaWQuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJlc291cmNlVGFza3MocmVzb3VyY2UpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2VUYXNrcyhyZXNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFza3MvcmVzb3VyY2UgaWRzLiBJZiBzZWxlY3Rpb24gaXMgZGlzYWJsZWQgb3Igbm8gaXRlbXMgYXJlIHNlbGVjdGVkIHJldHVybnMgbnVsbC4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGVkSWRzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZElkcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhc2tzLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0ZWRUYXNrcygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U2VsZWN0ZWRUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJlc291cmNlcy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGVkUmVzb3VyY2VzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZFJlc291cmNlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgd29ya2luZyBob3VycyBvZiB0aGUgZGF5IGFzIG51bWJlcnMuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFdvcmtpbmdIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIHRvb2x0aXAgaWYgaXQncyB2aXNpYmxlLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaGlkZVRvb2x0aXAoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXBlbmRpbmcgb24gdGhlIG5vbndvcmtpbmdEYXlzIHByb3BlcnR5LCByZXR1cm5zIHRydWUgb3IgZmFsc2Ugd2hldGhlciB0aGUgdGFyZ2V0IGRhdGUgaXMgb24gYSB3b3JraW5nIGRheSBvciBub3QuIFxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZS4gQSBqYXZhc2NyaXB0IERhdGUgb2JqZWN0IG9yIGEgc3RyaW5nL251bWJlciB3aGljaCByZXByZXNlbnRzIGEgdmFsaWQgSlMgRGF0ZS5cblx0Ki9cbiAgICBwdWJsaWMgaXNXb3JraW5nRGF5KGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNXb3JraW5nRGF5KGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmlzV29ya2luZ0RheShkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50IG9yIGNoZWNrcyBMb2NhbFN0b3JhZ2UgZm9yIGFueSBzYXZlZCBzdGF0ZXMgaWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBHYW50dCBDaGFydCB0YXNrcy5cblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFsbCBjb25uZWN0aW9ucyBiZXR3ZWVuIHRhc2tzLiAgXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUFsbENvbm5lY3Rpb25zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGxDb25uZWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUFsbENvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBjb25uZWN0aW9uIGJldHdlZW4gdGFza3MuIFRoZSBmdW5jdGlvbiBhY2NlcHRzIHRocmVlIGFyZ3VtZW50cyh0YXNrJ3Mgc3RhcnQgaW5kZXgsIGVuZCBpbmRleCBhbmQgY29ubmVjdGlvbiB0eXBlKSBvciBvbmUgY29ubmVjdGlvbiBzdHJpbmcgYXJndW1lbnQgd2hpY2ggZGVzY3JpYmVzIHRoZSBjb25uZWN0aW9uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gc3RhcnRUYXNrSW5kZXguIFRoZSBpbmRleCBvZiB0aGUgc3RhcnQgdGFzayBvciB0aGUgY29ubmVjdGlvbiBzdHJpbmcgbGlrZSAnMi0zLTAuXG5cdCogQHBhcmFtIHtudW1iZXJ9IHRhc2tFbmRJbmRleD8uIFRoZSBpbmRleCBvZiB0aGUgZW5kIHRhc2suXG5cdCogQHBhcmFtIHtudW1iZXJ9IGNvbm5lY3Rpb25UeXBlPy4gVGhlIHR5cGUgb2YgdGhlIGNvbm5lY3Rpb24uIEEgbnVtZXJpYyB2YWx1ZSBmcm9tIDAgdG8gMy5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgcmVtb3ZlQ29ubmVjdGlvbihzdGFydFRhc2tJbmRleCwgdGFza0VuZEluZGV4PywgY29ubmVjdGlvblR5cGU/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbm5lY3Rpb24oc3RhcnRUYXNrSW5kZXgsIHRhc2tFbmRJbmRleCwgY29ubmVjdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgY29ubmVjdGlvbnMgb2YgYSB0YXNrIG9yIGJldHdlZW4gdHdvIHRhc2tzIGlmIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgcHJvdmlkZWQgYW5kIHZhbGlkLiBcblx0KiBAcGFyYW0ge2FueX0gdGFza1N0YXJ0LiBUaGUgc3RhcnQgdGFzayBvYmplY3Qgb3IgaXQncyBpZC5cblx0KiBAcGFyYW0ge2FueX0gdGFza0VuZD8uIFRoZSBlbmQgdGFzayBvYmplY3Qgb3IgaXQncyBpZC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlVGFza0Nvbm5lY3Rpb24odGFza1N0YXJ0OiBhbnksIHRhc2tFbmQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlVGFza0Nvbm5lY3Rpb24odGFza1N0YXJ0LCB0YXNrRW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVUYXNrQ29ubmVjdGlvbih0YXNrU3RhcnQsIHRhc2tFbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyB0aGUgdG9vbHRpcCBmb3IgYSBzcGVjaWZpYyBlbGVtZW50LiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQuIFRoZSBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdGhlIHRhcmdldCBvZiB0aGUgdG9vbHRpcC5cblx0KiBAcGFyYW0ge3N0cmluZ30gY29udGVudD8uIEFsbG93cyB0byBzZXQgYSBjdXN0b20gY29udGVudCBmb3IgdGhlIFRvb2x0aXAuXG5cdCovXG4gICAgcHVibGljIHNob3dUb29sdGlwKHRhcmdldDogSFRNTEVsZW1lbnQsIGNvbnRlbnQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Rvb2x0aXAodGFyZ2V0LCBjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93VG9vbHRpcCh0YXJnZXQsIGNvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgY3VycmVudCBzZXR0aW5ncyBvZiB0aGUgZWxlbWVudCB0byBMb2NhbFN0b3JhZ2UuIFJlcXVpcmVzIGFuIGlkIHRvIGJlIHNldCB0byB0aGUgZWxlbWVudC4gXG5cdCogQHBhcmFtIHthbnlbXX0gc3RhdGU/LiBBbiBBcnJheSBjb250YWluaW5nIGEgdmFsaWQgc3RydWN0dXJlIG9mIEdhbnR0IENoYXJ0IHRhc2tzLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlU3RhdGUoc3RhdGU/OiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgdGFzayBpbiB0aGUgdGltZWxpbmUuIFRoZSBuZXcgdGFzayBjYW4gYmUgaW5zZXJ0ZWQgYXMgYSBzdWIgdGFzayBvZiBhIHByb2plY3QgYnkgcGFzc2luZyB0aGUgYXBwcm9wcmlhdGUgYXJndW1lbnQgZm9yIHRoZSBwcm9qZWN0IGlkIG9yIGFzIGEgcm9vdCBsZXZlbCBpdGVtLiBcblx0KiBAcGFyYW0ge2FueX0gdGFza09iamVjdC4gQW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBHYW50dCBDaGFydCB0YXNrLlxuXHQqIEBwYXJhbSB7YW55fSBwcm9qZWN0Py4gQSBudW1iZXIgb3Igc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYSBwcm9qZWN0IChlLmcuICcwJykgb3IgYSBwcm9qZWN0IG9iamVjdCBkZWZpbml0aW9uIHByZXNlbnQgaW4gdGhlIEdhbnR0Q2hhcnQuIFRoaXMgcGFyYW1ldGVyIGRldGVybWluZXMgdGhlIHBhcmVudCBwcm9qZWN0IG9mIHRoZSB0YXNrIHRoYXQgd2lsbCBiZSBpbnNlcnRlZC4gSWYgPGI+bnVsbDwvYj4gaXMgcGFzc2VkIGFzIGFuIGFyZ3VlbW50IHRoZSBuZXcgdGFzayB3aWxsIGJlIGluc2VydGVkIGF0IHJvb3QgbGV2ZWwgd2l0aG91dCBhIHBhcmVudCBwcm9qZWN0LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleD8uIFRoZSBpbmRleCB3aGVyZSB0aGUgbmV3IGl0ZW0gc2hvdWxkIGJlIGluc2VydGVkKGUuZy4gMikuIFRoaXMgaW5kZXggd2lsbCBkZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXdseSBpbnNlcnRlZCB0YXNrLlxuXHQqIEByZXR1cm5zIHtzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBpbnNlcnRUYXNrKHRhc2tPYmplY3QsIHByb2plY3Q/LCBpbmRleD8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0VGFzayh0YXNrT2JqZWN0LCBwcm9qZWN0LCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGEgdGFzay9wcm9qZWN0L21pbGVzdG9uZS4gXG5cdCogQHBhcmFtIHthbnl9IHRhc2tJZC4gQSBudW1iZXIgb3Igc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYSB0YXNrL3Byb2plY3QoZS5nLiAnMCcpIG9yIHRoZSBvYmplY3QgZGVmaW5pdGlvbiBvZiB0aGUgdGFzay9wcm9qZWN0LlxuXHQqIEBwYXJhbSB7YW55fSB0YXNrT2JqZWN0LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHRhc2suIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZGVzaXJlZCB0YXNrLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVUYXNrKHRhc2tJZDogYW55LCB0YXNrT2JqZWN0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlVGFzayh0YXNrSWQsIHRhc2tPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZVRhc2sodGFza0lkLCB0YXNrT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIHRhc2sgZnJvbSB0aGUgdGltZWxpbmUuIFxuXHQqIEBwYXJhbSB7YW55fSB0YXNrSWQuIEEgbnVtYmVyIG9yIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgdGFzayBvciB0aGUgYWN0dWFsIGl0ZW0gb2JqZWN0LlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVUYXNrKHRhc2tJZDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2sodGFza0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVUYXNrKHRhc2tJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByZXNvdXJjZUlkLiBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgcmVzb3VyY2Ugb3IgaXQncyBoaWVyYXJjaGljYWwgcG9zaXRpb24sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KSwgb3IgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHJlc291cmNlLlxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZU9iamVjdD8uIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgR2FudHQgQ2hhcnQgcmVzb3VyY2UuXG5cdCovXG4gICAgcHVibGljIGluc2VydFJlc291cmNlKHJlc291cmNlSWQ6IHN0cmluZyB8IG51bWJlciwgcmVzb3VyY2VPYmplY3Q/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0UmVzb3VyY2UocmVzb3VyY2VJZCwgcmVzb3VyY2VPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydFJlc291cmNlKHJlc291cmNlSWQsIHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhbiBleGlzdGluZyByZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IHJlc291cmNlSWQuIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYSByZXNvdXJjZSBvciBpdCdzIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLCBvciBhIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgcmVzb3VyY2UuXG5cdCogQHBhcmFtIHthbnl9IHRhc2tPYmplY3QuIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgR2FudHQgQ2hhcnQgcmVzb3VyY2UuIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgdGFyZ2V0IHJlc291cmNlLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVSZXNvdXJjZShyZXNvdXJjZUlkOiBhbnksIHRhc2tPYmplY3Q6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVSZXNvdXJjZShyZXNvdXJjZUlkLCB0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVSZXNvdXJjZShyZXNvdXJjZUlkLCB0YXNrT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIHJlc291cmNlLiBcblx0KiBAcGFyYW0ge2FueX0gcmVzb3VyY2VJZC4gQSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhIHJlc291cmNlIG9yIGl0J3MgaGllcmFyY2hpY2FsIHBvc2l0aW9uLCBlLmcuICcwJyAoIGZvbGxvd2luZyBqcXhUcmVlIHN5bnRheCksIG9yIGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYSByZXNvdXJjZS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlUmVzb3VyY2UocmVzb3VyY2VJZDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVJlc291cmNlKHJlc291cmNlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVJlc291cmNlKHJlc291cmNlSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgcG9wdXAgV2luZG93IGZvciBzcGVjaWZpYyB0YXNrIHRvIGVkaXQgb3IgdG8gZGVsZXRlIGEgY29ubmVjdGlvbiBpZiBhIGNvbm5lY3Rpb24gc3RyaW5nIGlzIHBhc3NlZC4gXG5cdCogQHBhcmFtIHthbnl9IHRhc2tJZC4gQSBzdHJpbmcgb3IgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYSB0YXNrIG9yIHRoZSB0YXNrIG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGVkaXRlZCBvciBhIGNvbm5lY3Rpb24gc3RyaW5nKGUuZy4gJzItMC0wJykuXG5cdCovXG4gICAgcHVibGljIG9wZW5XaW5kb3codGFza0lkOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbldpbmRvdyh0YXNrSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3codGFza0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIGFuIG9wZW5lZCBwb3B1cCBXaW5kb3cuIFRoZSBtZXRob2Qgd2lsbCBjbG9zZSBhbnkgb3BlbmVkIHBvcHVwIHdpbmRvdyBpbnNpZGUgdGhlIGVsZW1lbnQuIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZVdpbmRvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VXaW5kb3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVdpbmRvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQcmVwYXJlcyB0aGUgR2FudHRDaGFydCBmb3IgcHJpbnRpbmcgYnkgb3BlbmluZyB0aGUgYnJvd3NlcidzIFByaW50IFByZXZpZXcuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gc2V0cyB0aGUgd29ya2luZyBkYXlzIGFuZCBob3VycyBhdCBvbmNlLiBcblx0KiBAcGFyYW0ge3sgZGF5czogKG51bWJlciB8IHN0cmluZyB8IG51bWJlcltdKVtdLCBob3VyczogKG51bWJlciB8IHN0cmluZyB8IG51bWJlcltdKVtdIH19IHNldHRpbmdzLiBBbiBvYmplY3QgZGVmaW5pdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBkYXlzIGFuZCBob3VycyB0aGF0IHNob3VsZCBiZSB3b3JraW5nLiBUaGUgZGF5cyBhbmQgaG91cnMgY2FuIGJlIGRlZmluZWQgYXMgYW4gYXJyYXkgb2YgbnVtYmVycyB3aGVyZSBlYWNoIG51bWJlciBpcyBhIGRheS9ob3VyLCBzdHJpbmdzIHdoZXJlIGVhY2ggc3RyaW5nIHJlcHJlc2VudHMgYSByYW5nZSBvZiBkYXlzL2hvdXJzIChlLmcuICcxLTUnIG9yICcyOjAwLTg6MDAnKSBvciBuZXN0ZWQgYXJyYXkgb2YgbnVtYmVycyAoZS5nLiBbWzEsNV1dIG9yIFtbMiwgOF1dKSB3aGljaCBtZWFucyBmcm9tIDEgdG8gNSBvciAyIHRvIDguXG5cdCovXG4gICAgcHVibGljIHNldFdvcmtUaW1lKHNldHRpbmdzOiB7IGRheXM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSwgaG91cnM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSB9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFdvcmtUaW1lKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRXb3JrVGltZShzZXR0aW5ncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBzZWxlY3QgYSB0YXNrIGJhc2VkIG9uIGl0J3MgaWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpZC4gVGhlIGlkIG9mIHRoZSB0YXNrIHRvIHNlbGVjdC5cblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0VGFzayhpZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFRhc2soaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFRhc2soaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gc2VsZWN0IGEgcmVzb3VyY2UgYmFzZWQgb24gaXQncyBpZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGlkLiBUaGUgaWQgb2YgdGhlIHJlc291cmNlIHRvIHNlbGVjdC5cblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0UmVzb3VyY2UoaWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSZXNvdXJjZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0UmVzb3VyY2UoaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gdW5zZWxlY3QgYSB0YXNrIGJhc2VkIG9uIGl0J3MgaWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpZC4gVGhlIGlkIG9mIHRoZSB0YXNrIHRvIHVuc2VsZWN0LlxuXHQqL1xuICAgIHB1YmxpYyB1bnNlbGVjdFRhc2soaWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdFRhc2soaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0VGFzayhpZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byB1bnNlbGVjdCBhIHJlc291cmNlIGJhc2VkIG9uIGl0J3MgaWQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpZC4gVGhlIGlkIG9mIHRoZSByZXNvdXJjZSB0byB1bnNlbGVjdC5cblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3RSZXNvdXJjZShpZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0UmVzb3VyY2UoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0UmVzb3VyY2UoaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gdW5zZXQgcHJldmlvdXNseSBzZXQgd29ya2luZyB0aW1lLiBUaGUgb3Bwb3N0ZSBtZXRob2QgZm9yIHNldFdvcmtpbmdUaW1lLiBcblx0KiBAcGFyYW0ge3sgZGF5czogKG51bWJlciB8IHN0cmluZyB8IG51bWJlcltdKVtdLCBob3VyczogKG51bWJlciB8IHN0cmluZyB8IG51bWJlcltdKVtdIH19IHNldHRpbmdzLiBBbiBvYmplY3QgZGVmaW5pdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBkYXlzIGFuZCBob3VycyB0aGF0IHNob3VsZCBub3QgYmUgd29ya2luZy4gVGhlIGRheXMgYW5kIGhvdXJzIGNhbiBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IG9mIG51bWJlcnMgd2hlcmUgZWFjaCBudW1iZXIgaXMgYSBkYXkvaG91ciwgc3RyaW5ncyB3aGVyZSBlYWNoIHN0cmluZyByZXByZXNlbnRzIGEgcmFuZ2Ugb2YgZGF5cy9ob3VycyAoZS5nLiAnMS01JyBvciAnMjowMC04OjAwJykgb3IgbmVzdGVkIGFycmF5IG9mIG51bWJlcnMgKGUuZy4gW1sxLDVdXSBvciBbWzIsIDhdXSkgd2hpY2ggbWVhbnMgZnJvbSAxIHRvIDUgb3IgMiB0byA4LlxuXHQqL1xuICAgIHB1YmxpYyB1bnNldFdvcmtUaW1lKHNldHRpbmdzOiB7IGRheXM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSwgaG91cnM6IChudW1iZXIgfCBzdHJpbmcgfCBudW1iZXJbXSlbXSB9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2V0V29ya1RpbWUoc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2V0V29ya1RpbWUoc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTb3J0cyB0aGUgR2FudHRDaGFydCB0YXNrcy9yZXNvdXJjZXMgaWYgc29ydGFibGUgaXMgZW5hYmxlZC4gXG5cdCogQHBhcmFtIHthbnl9IGNvbHVtbnMuIEFuIEFycmF5IG9mIG9iamVjdHMgd2hpY2ggZGV0ZXJtaW5lIHdoaWNoIGNvbHVtbnMgdG8gYmUgc29ydGVkLCB0aGUgc29ydCBvcmRlciBhbmQgdGhlIHR5cGUgb2YgaXRlbSB0byBzb3J0OiB0YXNrIG9yIHJlc291cmNlLiBJZiBubyBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIHNvcnRpbmcgd2lsbCBiZSByZW1vdmVkLiA8YnIgLz4gQW4gb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogPHVsPjxsaT48Yj52YWx1ZTwvYj4gLSBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHZhbHVlIG9mIGEgPGI+dGFza0NvbHVtbjwvYj4gdG8gc29ydC48L2xpPjxsaT48Yj5zb3J0T3JkZXI8L2I+IC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBzb3J0aW5nIG9yZGVyIGZvciB0aGUgY29sdW1uOiAnYXNjJyAoYXNzY2VuZGluZyBzb3J0aW5nKSBvciAnZGVzYycgKGRlc2NlbmRpbmcpIGFyZSBwb3NzaWJsZSB2YWx1ZXMuIDwvbGk+PGxpPjxiPnR5cGU8L2I+IC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSB0eXBlIG9mIGl0ZW0gdG8gc29ydC4gVGhpcyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHdoaWNoIHBhbmVsIHdpbGwgYmUgc29ydGVkLiBUd28gcG9zc2libGUgdmFsdWVzOiAndGFzaycsICdyZXNvdXJjZScuPC9saT48L3VsPlxuXHQqL1xuICAgIHB1YmxpYyBzb3J0KGNvbHVtbnM6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zb3J0KGNvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNvcnQoY29sdW1ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkJlZ2luVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVuZFVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25TdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbm5lY3Rpb25TdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb25uZWN0aW9uU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25TdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25FbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db25uZWN0aW9uRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3Rpb25FbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25FbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZXNpemVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5SZXNpemUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uUmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZXNpemVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbGxhcHNlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FeHBhbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWx0ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsdGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUluc2VydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtSW5zZXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1SZW1vdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbVJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Qcm9ncmVzc0NoYW5nZVN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzQ2hhbmdlU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZUVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblByb2dyZXNzQ2hhbmdlRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzQ2hhbmdlRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZUVuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNvcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxCb3R0b21SZWFjaGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbEJvdHRvbVJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsVG9wUmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxUb3BSZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsTGVmdFJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxMZWZ0UmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxMZWZ0UmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsTGVmdFJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxSaWdodFJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxSaWdodFJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsUmlnaHRSZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxSaWdodFJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVnaW5VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29ubmVjdGlvblN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29ubmVjdGlvblN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25FbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb25uZWN0aW9uRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uUmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZXNpemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50Lm9uZmlsdGVySGFuZGxlciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1JbnNlcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtSW5zZXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtUmVtb3ZlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbVJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVVwZGF0ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzQ2hhbmdlU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3NDaGFuZ2VFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbExlZnRSZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsTGVmdFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbExlZnRSZWFjaGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxSaWdodFJlYWNoZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGxSaWdodFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFJpZ2h0UmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==