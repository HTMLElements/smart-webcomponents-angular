
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.ganttchart';

import { __decorate, __awaiter } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
__decorate([
    Output()
], BaseElement.prototype, "onCreate", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onReady", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onAttach", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onDetach", void 0);
__decorate([
    Input()
], BaseElement.prototype, "locale", null);
__decorate([
    Input()
], BaseElement.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], BaseElement.prototype, "messages", null);
__decorate([
    Input()
], BaseElement.prototype, "rightToLeft", null);
__decorate([
    Input()
], BaseElement.prototype, "theme", null);
const Smart = window.Smart;

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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	startIndex, 	endIndex, 	type)
        *   id - The id of the connection that was created.
        *   startIndex - The index of the task that a connection is started from.
        *   endIndex - The index of the task that a connection is started from.
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
        /** @description This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to close.
        *   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when the window for task editing is closed( hidden )
        *  @param event. The custom event. 	*/
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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that is going to be dragged.
        *   item - The object of the task that is going to be dragged.
        *   dateStart - The start date of the task that is going to be dragged.
        *   dateEnd - The end date of the task that is going to be dragged.
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when dragging of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that is was dragged.
        *   item - The object of the task that is was dragged.
        *   dateStart - The start date of the task that is was dragged.
        *   dateEnd - The end date of the task that is was dragged.
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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	originalEvent)
        *   item - The item that was clicked. It cam be a task, resource or connection.
        *   type - The type of item. Possible values are: 'task', 'resource', 'connection'.
        *   originalEvent - The original DOM event.
        */
        this.onItemClick = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is inserted.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemInsert = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemRemove = new EventEmitter();
        /** @description This event is triggered when a Task/Resource/Connection is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemUpdate = new EventEmitter();
        /** @description This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to open.
        *   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window for task editing is opened( visible ).
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
        *   index - The index of the task which progress is going to be changed.
        *   progress - The progress of the task before it is changed.
        */
        this.onProgressChangeStart = new EventEmitter();
        /** @description This event is triggered when the progress of a task is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
        *   index - The index of the task which progress is has been changed.
        *   progress - The progress of the task after it was changed.
        */
        this.onProgressChangeEnd = new EventEmitter();
        /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that is going to be resized.
        *   item - The object of the task that is going to be resized.
        *   dateStart - The start date of the task that is going to be resized.
        *   dateEnd - The end date of the task that is going to be resized.
        */
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd)
        *   id - The id of the task that was resized.
        *   item - The object of the task that was resized.
        *   dateStart - The start date of the task that was resized.
        *   dateEnd - The end date of the task that was resized.
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
    /** @description Sets the GanttChart's Data Export options. */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        this.nativeElement ? this.nativeElement.dataExport = value : undefined;
    }
    /** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown. The duration always shows the calendar time whether it is in days/hours or other.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..  GanttChart also accepts a DataAdapter instance as dataSource. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/. */
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
    /** @description By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ). */
    get hideTimelineHeaderDetails() {
        return this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails : undefined;
    }
    set hideTimelineHeaderDetails(value) {
        this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails = value : undefined;
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
    /** @description A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'. */
    get popupWindowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
    }
    set popupWindowCustomizationFunction(value) {
        this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction = value : undefined;
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
    get sortMode() {
        return this.nativeElement ? this.nativeElement.sortMode : undefined;
    }
    set sortMode(value) {
        this.nativeElement ? this.nativeElement.sortMode = value : undefined;
    }
    /** @description A getter that returns a flat structure as an array of all tasks inside the element. */
    get tasks() {
        return this.nativeElement ? this.nativeElement.tasks : undefined;
    }
    set tasks(value) {
        this.nativeElement ? this.nativeElement.tasks = value : undefined;
    }
    /** @description Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor. */
    get taskColumns() {
        return this.nativeElement ? this.nativeElement.taskColumns : undefined;
    }
    set taskColumns(value) {
        this.nativeElement ? this.nativeElement.taskColumns = value : undefined;
    }
    /** @description Determines whether the Task Table is filterable or not. */
    get taskFiltering() {
        return this.nativeElement ? this.nativeElement.taskFiltering : undefined;
    }
    set taskFiltering(value) {
        this.nativeElement ? this.nativeElement.taskFiltering = value : undefined;
    }
    /** @description Determines the min size of the Task Panel. Used when Resource Panel is visible. */
    get taskPanelMin() {
        return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
    }
    set taskPanelMin(value) {
        this.nativeElement ? this.nativeElement.taskPanelMin = value : undefined;
    }
    /** @description Determines the size of the Task Panel. Used when Resource Panel is visible. */
    get taskPanelSize() {
        return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
    }
    set taskPanelSize(value) {
        this.nativeElement ? this.nativeElement.taskPanelSize = value : undefined;
    }
    /** @description Determines the min width of the timeline. */
    get timelineMin() {
        return this.nativeElement ? this.nativeElement.timelineMin : undefined;
    }
    set timelineMin(value) {
        this.nativeElement ? this.nativeElement.timelineMin = value : undefined;
    }
    /** @description Determines the min width of the task table. */
    get treeMin() {
        return this.nativeElement ? this.nativeElement.treeMin : undefined;
    }
    set treeMin(value) {
        this.nativeElement ? this.nativeElement.treeMin = value : undefined;
    }
    /** @description Determines the size(width) of the task table. */
    get treeSize() {
        return this.nativeElement ? this.nativeElement.treeSize : undefined;
    }
    set treeSize(value) {
        this.nativeElement ? this.nativeElement.treeSize = value : undefined;
    }
    /** @description A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element. */
    get timelineHeaderFormatFunction() {
        return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
    }
    set timelineHeaderFormatFunction(value) {
        this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
    }
    /** @description Determines weather or not vertical scrollbar is shown. */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
    }
    /** @description Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        this.nativeElement ? this.nativeElement.view = value : undefined;
    }
    /** @description Determines the format of the dates inside the timeline header when they represent years. */
    get yearFormat() {
        return this.nativeElement ? this.nativeElement.yearFormat : undefined;
    }
    set yearFormat(value) {
        this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
    }
    /** @description Determines the format of the dates inside the timeline header when they represent weeks.  */
    get weekFormat() {
        return this.nativeElement ? this.nativeElement.weekFormat : undefined;
    }
    set weekFormat(value) {
        this.nativeElement ? this.nativeElement.weekFormat = value : undefined;
    }
    /** @description Sets or gets the element's visual theme.  */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets or gets if the element can be focused. */
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
    /** @description Returns a JSON representation of all tasks inside the element along with their connections and settings.
    * @returns {any[]}
  */
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
__decorate([
    Input()
], GanttChartComponent.prototype, "adjustToNonworkingTime", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "autoSchedule", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "autoScheduleStrictMode", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "autoScrollStep", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "columnResize", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "columnResizeFeedback", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "dataExport", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "dataSource", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "dayFormat", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "dateEnd", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "dateStart", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "disabled", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "disableAutoScroll", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "disableTaskDrag", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "disableTaskProgressChange", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "disableTaskResize", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "disableSelection", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "disableWindowEditor", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "durationUnit", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "filterRow", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "groupByResources", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "headerTemplate", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "hideTimelineHeaderDetails", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "hideResourcePanel", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "horizontalScrollBarVisibility", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "hourFormat", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "infiniteTimeline", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "infiniteTimelineStep", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "inverted", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "keyboardNavigation", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "locale", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "max", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "min", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "messages", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "monthFormat", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "nonworkingDays", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "nonworkingHours", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "popupWindowCustomizationFunction", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "progressLabelFormatFunction", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resources", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourceColumns", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourceFiltering", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourceGroupFormatFunction", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourcePanelHeaderTemplate", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourcePanelMin", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourcePanelSize", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourcePanelRefreshRate", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourceTimelineFormatFunction", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourceTimelineMode", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "resourceTimelineView", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "selectedTaskIds", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "selectedResourceIds", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "showProgressLabel", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "snapToNearest", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "sortMode", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "tasks", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "taskColumns", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "taskFiltering", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "taskPanelMin", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "taskPanelSize", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "timelineMin", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "treeMin", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "treeSize", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "timelineHeaderFormatFunction", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "verticalScrollBarVisibility", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "view", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "yearFormat", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "weekFormat", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "theme", null);
__decorate([
    Input()
], GanttChartComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], GanttChartComponent.prototype, "onBeginUpdate", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onEndUpdate", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onConnectionStart", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onConnectionEnd", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onColumnResize", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onClosing", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onCollapse", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onDragStart", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onDragEnd", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onExpand", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onFilter", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onItemInsert", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onItemRemove", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onItemUpdate", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onOpening", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onProgressChangeStart", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onProgressChangeEnd", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onResizeStart", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onResizeEnd", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onSort", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onScrollBottomReached", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onScrollTopReached", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onScrollLeftReached", void 0);
__decorate([
    Output()
], GanttChartComponent.prototype, "onScrollRightReached", void 0);
GanttChartComponent = __decorate([
    Directive({
        selector: 'smart-gantt-chart, [smart-gantt-chart]'
    })
], GanttChartComponent);

let GanttChartModule = class GanttChartModule {
};
GanttChartModule = __decorate([
    NgModule({
        declarations: [GanttChartComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [GanttChartComponent]
    })
], GanttChartModule);

/**
 * Generated bundle index. Do not edit.
 */

export { GanttChartComponent, GanttChartModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-ganttchart.js.map
