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
        /** @description This event is triggered when a Task is selected/unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
        *   value - The index of the new selected task.
        *   oldValue - The index of the previously selected task.
        */
        this.onChange = new EventEmitter();
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
        /** @description This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that is going to be dragged.
        *   dateStart - The start date of the task that is going to be dragged.
        *   dateEnd - The end date of the task that is going to be dragged.
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when dragging of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that is was dragged.
        *   dateStart - The start date of the task that is was dragged.
        *   dateEnd - The end date of the task that is was dragged.
        */
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that is going to be resized.
        *   dateStart - The start date of the task that is going to be resized.
        *   dateEnd - The end date of the task that is going to be resized.
        */
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of a task finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
        *   index - The index of the task that was resized.
        *   dateStart - The start date of the task that was resized.
        *   dateEnd - The end date of the task that was resized.
        */
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
        *   startIndex - The index of the task that a connection is started from.
        */
        this.onConnectionStart = new EventEmitter();
        /** @description This event is triggered when the user completes a connection between two tasks.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex, 	endIndex, 	type)
        *   startIndex - The index of the task that a connection is started from.
        *   endIndex - The index of the task that a connection is started from.
        *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
        */
        this.onConnectionEnd = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the bottom.
        *  @param event. The custom event. 	*/
        this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the Timeline has been scrolled to the top.
        *  @param event. The custom event. 	*/
        this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to open.
        *   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window for task editing is opened( visible ).
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
        *   target - The instance of the window that is going to close.
        *   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
        */
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when the window for task editing is closed( hidden )
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when a Project is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	label, 	value)
        *   index - The index of the collapsed project.
        *   label - The label of the collapsed project.
        *   value - The value of the collapsed project.
        */
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when a Project is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
        *   item - The index of the expanded project.
        *   label - The label of the expanded project.
        *   value - The value of the expanded project.
        */
        this.onExpand = new EventEmitter();
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
    /** @description Sets the GanttChart's Data Export options. */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        this.nativeElement ? this.nativeElement.dataExport = value : undefined;
    }
    /** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks.. */
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
    /** @description When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa. */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        this.nativeElement ? this.nativeElement.inverted = value : undefined;
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
    /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations. */
    get nonworkingDays() {
        return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
    }
    set nonworkingDays(value) {
        this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
    }
    /** @description Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest. */
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
    /** @description Determines the selected task(s). If empty no tasks are selected. */
    get selectedIndexes() {
        return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
    }
    set selectedIndexes(value) {
        this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
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
    /** @description Determines whether the GanttChart can be sorted or not. */
    get sortable() {
        return this.nativeElement ? this.nativeElement.sortable : undefined;
    }
    set sortable(value) {
        this.nativeElement ? this.nativeElement.sortable = value : undefined;
    }
    /** @description Determines whether the GanttChart can be sorted by one or more columns. */
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
    /** @description Determines the min width of the task tree. */
    get treeMin() {
        return this.nativeElement ? this.nativeElement.treeMin : undefined;
    }
    set treeMin(value) {
        this.nativeElement ? this.nativeElement.treeMin = value : undefined;
    }
    /** @description Determines the size(width) of the task tree. */
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
    /** @description Adds a task as the last item of a Project.
    * @param {any} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    addTaskTo(taskIndex, projectIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTaskTo(taskIndex, projectIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTaskTo(taskIndex, projectIndex);
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
    * @param {number} taskStartIndex. The index of the start task.
    * @param {number} taskEndIndex?. The index of the end task.
    * @returns {string}
  */
    removeTaskConnection(taskStartIndex, taskEndIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.removeTaskConnection(taskStartIndex, taskEndIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
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
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    */
    createConnection(startTaskIndex, taskEndIndex, connectionType) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
            });
        }
    }
    /** @description Collapses an expanded project with tasks.
    * @param {string | number} index. The index of a project task that should be collapsed.
    */
    collapse(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(index);
            });
        }
    }
    /** @description Makes sure a Task is visible by scrolling to it.
    * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
    */
    ensureVisible(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(item);
            });
        }
    }
    /** @description Expands a collapsed project with tasks.
    * @param {string | number} index. The index of a project task that should be expanded.
    */
    expand(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(index);
            });
        }
    }
    /** @description Exports the data of Tree of the GanttChart.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
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
    /** @description Returns the Tree path of a task/resource.
    * @param {any} item. A GattChartTask/GanttChartResource item object or index.
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
    /** @description Returns the tree path of a task.
    * @param {any} task. A GanttChartTask object.
    * @returns {string}
  */
    getTaskPath(task) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTaskPath(task);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns teh Project of a task if any.
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
    * @param {any} resource. A GanttChartResource object.
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
    /** @description Inserts a new task in the timeline.
    * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task.
    */
    insertTask(index, taskObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertTask(index, taskObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertTask(index, taskObject);
            });
        }
    }
    /** @description Updates a task inside the timeline.
    * @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    updateTask(index, taskObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(index, taskObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(index, taskObject);
            });
        }
    }
    /** @description Removes a task from the timeline.
    * @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    removeTask(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(index);
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
    /** @description Opens the popup Window for specific task Editing.
    * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
    */
    openWindow(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(index);
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
    /** @description Sorts the GanttChart tasks/resources if sortable is enabled.
    * @param {any} columns?. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['itemInsertHandler'] = (event) => { that.onItemInsert.emit(event); };
        that.nativeElement.addEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);
        that.eventHandlers['itemRemoveHandler'] = (event) => { that.onItemRemove.emit(event); };
        that.nativeElement.addEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);
        that.eventHandlers['itemUpdateHandler'] = (event) => { that.onItemUpdate.emit(event); };
        that.nativeElement.addEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);
        that.eventHandlers['progressChangeStartHandler'] = (event) => { that.onProgressChangeStart.emit(event); };
        that.nativeElement.addEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
        that.eventHandlers['progressChangeEndHandler'] = (event) => { that.onProgressChangeEnd.emit(event); };
        that.nativeElement.addEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['connectionStartHandler'] = (event) => { that.onConnectionStart.emit(event); };
        that.nativeElement.addEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
        that.eventHandlers['connectionEndHandler'] = (event) => { that.onConnectionEnd.emit(event); };
        that.nativeElement.addEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = (event) => { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = (event) => { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['collapseHandler'] = (event) => { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
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
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
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
    }
};
GanttChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
], GanttChartComponent.prototype, "progressLabelFormatFunction", null);
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
], GanttChartComponent.prototype, "showProgressLabel", null);
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
], GanttChartComponent.prototype, "onBeginUpdate", void 0);
tslib_1.__decorate([
    Output()
], GanttChartComponent.prototype, "onEndUpdate", void 0);
tslib_1.__decorate([
    Output()
], GanttChartComponent.prototype, "onChange", void 0);
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
export { GanttChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZ2FudHRjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9nYW50dGNoYXJ0LyIsInNvdXJjZXMiOlsic21hcnQuZ2FudHRjaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxXQUFXO0lBQ25ELFlBQVksR0FBMkI7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUF5aUJsQzs4Q0FDc0M7UUFDNUIsa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs4Q0FDc0M7UUFDNUIsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7OztVQUlFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7OztVQUtFO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7OztVQUlFO1FBQ1EsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7OztVQUlFO1FBQ1EsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7OztVQUlFO1FBQ1EsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7OztVQUlFO1FBQ1EsMEJBQXFC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Q0FBQztJQUVELHlFQUF5RTtJQUV6RSxJQUFJLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEUsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUVELHlFQUF5RTtJQUV6RSxJQUFJLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEUsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUVELHNKQUFzSjtJQUV0SixJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUVELHNHQUFzRztJQUV0RyxJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWtCO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxvUUFBb1E7SUFFcFEsSUFBSSxjQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBZTtRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsOE1BQThNO0lBRTlNLElBQUksZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUUsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDN0UsQ0FBQztJQUVELHlrQkFBeWtCO0lBRXprQixJQUFJLGdDQUFnQztRQUNuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RixDQUFDO0lBQ0QsSUFBSSxnQ0FBZ0MsQ0FBQyxLQUFVO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUYsQ0FBQztJQUVELCtNQUErTTtJQUUvTSxJQUFJLDJCQUEyQjtRQUM5QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RixDQUFDO0lBQ0QsSUFBSSwyQkFBMkIsQ0FBQyxLQUFVO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekYsQ0FBQztJQUVELDJHQUEyRztJQUUzRyxJQUFJLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQTJCO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw0ekJBQTR6QjtJQUU1ekIsSUFBSSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBaUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDN0UsQ0FBQztJQUVELDBKQUEwSjtJQUUxSixJQUFJLDJCQUEyQjtRQUM5QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RixDQUFDO0lBQ0QsSUFBSSwyQkFBMkIsQ0FBQyxLQUFVO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekYsQ0FBQztJQUVELGtFQUFrRTtJQUVsRSxJQUFJLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFzQjtRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlFLENBQUM7SUFFRCw4REFBOEQ7SUFFOUQsSUFBSSxpQkFBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsS0FBc0I7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRSxDQUFDO0lBRUQscVJBQXFSO0lBRXJSLElBQUksd0JBQXdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JGLENBQUM7SUFDRCxJQUFJLHdCQUF3QixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0RixDQUFDO0lBRUQsd3lCQUF3eUI7SUFFeHlCLElBQUksOEJBQThCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNGLENBQUM7SUFDRCxJQUFJLDhCQUE4QixDQUFDLEtBQVU7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RixDQUFDO0lBRUQsOE1BQThNO0lBRTlNLElBQUksb0JBQW9CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQXFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEYsQ0FBQztJQUVELGdHQUFnRztJQUVoRyxJQUFJLG9CQUFvQjtRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRixDQUFDO0lBQ0QsSUFBSSxvQkFBb0IsQ0FBQyxLQUFxQztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxrSUFBa0k7SUFFbEksSUFBSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxvRkFBb0Y7SUFFcEYsSUFBSSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsNEZBQTRGO0lBRTVGLElBQUksaUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlFLENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUFDLEtBQWM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsa0xBQWtMO0lBRWxMLElBQUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUVELDJFQUEyRTtJQUUzRSxJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUVELDJGQUEyRjtJQUUzRixJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQXlCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFFRCx1R0FBdUc7SUFFdkcsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUF1QjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsNHNDQUE0c0M7SUFFNXNDLElBQUksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBNkI7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUVELG1HQUFtRztJQUVuRyxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELCtGQUErRjtJQUUvRixJQUFJLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNFLENBQUM7SUFFRCw2REFBNkQ7SUFFN0QsSUFBSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFRCw4REFBOEQ7SUFFOUQsSUFBSSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxnRUFBZ0U7SUFFaEUsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFFRCw4ZUFBOGU7SUFFOWUsSUFBSSw0QkFBNEI7UUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekYsQ0FBQztJQUNELElBQUksNEJBQTRCLENBQUMsS0FBVTtRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFGLENBQUM7SUFFRCwwRUFBMEU7SUFFMUUsSUFBSSwyQkFBMkI7UUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEYsQ0FBQztJQUNELElBQUksMkJBQTJCLENBQUMsS0FBa0M7UUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RixDQUFDO0lBRUQsc3BCQUFzcEI7SUFFdHBCLElBQUksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBcUI7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUVELDRHQUE0RztJQUU1RyxJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkUsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWlCO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFFRCw2R0FBNkc7SUFFN0csSUFBSSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFpQjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsNkRBQTZEO0lBRTdELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsK0RBQStEO0lBRS9ELElBQUksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBd0pEOzs7TUFHRTtJQUNRLFNBQVMsQ0FBQyxTQUFjLEVBQUUsWUFBNkI7UUFDMUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDekQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLFdBQVc7UUFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxTQUFTO1FBQ1osSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLE9BQU8sQ0FBQyxXQUFxQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLG9CQUFvQjtRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7Ozs7SUFLRztJQUNVLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFhLEVBQUUsY0FBZTs7WUFDM0UsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO3dCQUNqRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKOzs7O0lBSUc7SUFDVSxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsWUFBYTs7WUFDOUQsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7d0JBQ3JGLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7TUFDRTtJQUNRLFVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxjQUFjO1FBQ2pCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7Ozs7TUFJRTtJQUNRLGdCQUFnQixDQUFDLGNBQStCLEVBQUUsWUFBcUIsRUFBRSxjQUF1QjtRQUNuRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNyRjthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDdEYsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFFBQVEsQ0FBQyxLQUFzQjtRQUNsQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxhQUFhLENBQUMsSUFBcUI7UUFDdEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsTUFBTSxDQUFDLEtBQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxVQUFVLENBQUMsVUFBa0IsRUFBRSxRQUFjO1FBQ2hELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztJQUVHO0lBQ1UsUUFBUTs7WUFDcEIsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7O0lBR0c7SUFDVSxXQUFXLENBQUMsSUFBSTs7WUFDNUIsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7OztJQUdHO0lBQ1UsWUFBWSxDQUFDLElBQUk7O1lBQzdCLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKOzs7SUFHRztJQUNVLFdBQVcsQ0FBQyxJQUFJOztZQUM1QixNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtnQkFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO3dCQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7O0lBR0c7SUFDVSxjQUFjLENBQUMsSUFBSTs7WUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7OztJQUdHO0lBQ1UsZ0JBQWdCLENBQUMsUUFBUTs7WUFDckMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7O0lBR0c7SUFDVSxnQkFBZ0IsQ0FBQyxRQUFROztZQUNyQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtnQkFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO3dCQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM3RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKO01BQ0U7SUFDUSxjQUFjO1FBQ2pCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLFVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsU0FBUyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsU0FBUyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7TUFHRTtJQUNRLFVBQVUsQ0FBQyxLQUFzQixFQUFFLFVBQWU7UUFDckQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztNQUdFO0lBQ1EsVUFBVSxDQUFDLEtBQVUsRUFBRSxVQUFlO1FBQ3pDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsVUFBVSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7TUFHRTtJQUNRLGNBQWMsQ0FBQyxVQUEyQixFQUFFLGNBQW9CO1FBQ25FLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ2pFO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7TUFHRTtJQUNRLGNBQWMsQ0FBQyxVQUFlLEVBQUUsVUFBZTtRQUNsRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUM3RDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLGNBQWMsQ0FBQyxVQUFlO1FBQ2pDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFVBQVUsQ0FBQyxLQUFzQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLFdBQVc7UUFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxLQUFLO1FBQ1IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlCO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLElBQUksQ0FBQyxPQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFHSixJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUUsZUFBZTtRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDeEQsS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7Z0JBQy9CLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDO2lCQUM5RDthQUNEO1NBQ0Q7SUFDRixDQUFDO0lBRUQsd0NBQXdDO0lBQ2hDLE1BQU07UUFDUCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJ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bEU7SUFBVCxNQUFNLEVBQUU7NERBQWlFO0FBSWhFO0lBQVQsTUFBTSxFQUFFO2tFQUF1RTtBQUl0RTtJQUFULE1BQU0sRUFBRTsrREFBb0U7QUFPbkU7SUFBVCxNQUFNLEVBQUU7c0RBQTJEO0FBSTFEO0lBQVQsTUFBTSxFQUFFO21EQUF3RDtBQU92RDtJQUFULE1BQU0sRUFBRTtzREFBMkQ7QUFJMUQ7SUFBVCxNQUFNLEVBQUU7b0RBQXlEO0FBUXhEO0lBQVQsTUFBTSxFQUFFO3VEQUE0RDtBQVEzRDtJQUFULE1BQU0sRUFBRTtxREFBMEQ7QUFuc0J2RCxtQkFBbUI7SUFKL0IsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLHdDQUF3QztLQUNsRCxDQUFDO0dBRVcsbUJBQW1CLENBeTdDL0I7U0F6N0NZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbnR0Q2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEdhbnR0Q2hhcnREYXRhRXhwb3J0SXRlbVR5cGUsIEdhbnR0Q2hhcnRUYXNrVHlwZSwgR2FudHREYXlGb3JtYXQsIER1cmF0aW9uLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgSG91ckZvcm1hdCwgTW9udGhGb3JtYXQsIEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSwgR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVWaWV3LCBHYW50dENoYXJ0U29ydE1vZGUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgR2FudHRDaGFydFZpZXcsIFllYXJGb3JtYXQsIFdlZWtGb3JtYXQsIEdhbnR0Q2hhcnREYXRhRXhwb3J0LCBHYW50dENoYXJ0RGF0YVNvdXJjZSwgR2FudHRDaGFydERhdGFTb3VyY2VSZXNvdXJjZSwgR2FudHRDaGFydFJlc291cmNlLCBHYW50dENoYXJ0UmVzb3VyY2VDb2x1bW4sIEdhbnR0Q2hhcnRUYXNrLCBHYW50dENoYXJ0VGFza0NvbHVtbiwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEdhbnR0Q2hhcnREYXRhRXhwb3J0SXRlbVR5cGUsIEdhbnR0Q2hhcnRUYXNrVHlwZSwgR2FudHREYXlGb3JtYXQsIER1cmF0aW9uLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgSG91ckZvcm1hdCwgTW9udGhGb3JtYXQsIEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lTW9kZSwgR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVWaWV3LCBHYW50dENoYXJ0U29ydE1vZGUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgR2FudHRDaGFydFZpZXcsIFllYXJGb3JtYXQsIFdlZWtGb3JtYXQsIEdhbnR0Q2hhcnREYXRhRXhwb3J0LCBHYW50dENoYXJ0RGF0YVNvdXJjZSwgR2FudHRDaGFydERhdGFTb3VyY2VSZXNvdXJjZSwgR2FudHRDaGFydFJlc291cmNlLCBHYW50dENoYXJ0UmVzb3VyY2VDb2x1bW4sIEdhbnR0Q2hhcnRUYXNrLCBHYW50dENoYXJ0VGFza0NvbHVtbiwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgR2FudHRDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWdhbnR0LWNoYXJ0LCBbc21hcnQtZ2FudHQtY2hhcnRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIEdhbnR0Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8R2FudHRDaGFydD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEdhbnR0Q2hhcnQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IEdhbnR0Q2hhcnQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEdhbnR0Q2hhcnQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZ2FudHQtY2hhcnQnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFJlY2FsY3VsYXRlcyB0aGUgdGFza3MgdGhhdCBhcmUgY29ubmVjdGVkIGFuZCByZS1zY2hlZHVsZXMgdGhlbSBhY2NvcmRpbmcgdG8gdGhlaXIgY29ubmVjdGlvbnMuIElmIG5vIGNvbm5lY3Rpb25zIGFyZSBwcmVzZW50LCBhdXRvU2NoZWR1bGluZyBoYXMgbm8gZWZmZWN0IHVudGlsIGEgY29ubmVjdGlvbiBpcyBjcmVhdGVkLiBDb25uZWN0aW9uIHR5cGVzIGRldGVybWluZXMgdGhlIHN0YXJ0L2VuZCBkYXRlIGxpbWl0cyBvZiB0aGUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2NoZWR1bGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2NoZWR1bGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TY2hlZHVsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2NoZWR1bGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWZmZWN0cyB0aGUgdGFza3Mgb25seSB3aGVuIGF1dG9TY2hlZHVsZSBpcyBlbmFibGVkLiBXaGVuIHNldCB0byB0cnVlLCB0aGUgdGFza3MgYXJlIHN0cmljdGx5IHNjaGVkdWxlZCAoIGFjY29yZGluZyB0byB0aGVpciBjb25uZWN0aW9ucyApIGFuZCBkcmFnZ2luZyBpcyBub3QgYWxsb3dlZC4gIFVzZXJzIGNhbiBzZXQgbGFnIHRvIHNwZWNpZmljIGNvbm5lY3Rpb25zIHRvIGRldGVybWluZSBhIGRlbGF5IG9mIG92ZXJsYXAgb2YgYmV0d2VlbiB0aGUgdHdvIHRhc2tzICggaW50ZXJ2YWwgb2YgdGltZSBpbiBtaWxpc2Vjb25kcyApLiBMYWcgb25lIG9mIHRoZSBhdHRyaWJ1dGVzIG9mIGEgdGFzayBjb25uZWN0aW9uIGFuZCBzaG91bGQgYmUgc2V0IGluIHRoZSBkYXRhU291cmNlIHdoZXJlIHRoZSB0YXNrIGNvbm5lY3Rpb25zIGFyZSBkZWZpbmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY2hlZHVsZVN0cmljdE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TY2hlZHVsZVN0cmljdE1vZGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NjaGVkdWxlU3RyaWN0TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzY3JvbGwgc3BlZWQgd2hlbiBkcmFnZ2luZyB3aGVuIGF1dG9TY3JvbGwgcHJvcGVydHkgaXMgc2V0LiAgKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TY3JvbGxTdGVwKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1Njcm9sbFN0ZXAodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBHYW50dENoYXJ0J3MgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogR2FudHRDaGFydERhdGFFeHBvcnQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YUV4cG9ydCh2YWx1ZTogR2FudHRDaGFydERhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0YXNrcyB0aGF0IHdpbGwgYmUgbG9hZGVkIGluc2lkZSB0aGUgVGltZWxpbmUuIEVhY2ggaXRlbSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogbGFiZWwgLSB0aGUgbGFiZWwgb2YgdGhlIFRhc2tkYXRlU3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZSBvZiB0aGUgVGFzay4gU2hvdWxkIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHZhbGlkIGRhdGUuZGF0ZUVuZCAtIHRoZSBlbmRpbmcgZGF0ZSBvZiB0aGUgVGFzay4gU2hvdWxkIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHZhbGlkIGRhdGUudHlwZSAtIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIHRhc2suIFdoZXRoZXIgaXQncyBhIHNpbXBsZSB0YXNrLCBhIHByb2plY3Qgb3IgYSBtaWxlc3RvbmUuIEVhY2ggdHlwZSBvZiB0YXNrIGhhcyBzcGVjaWZpYyBiZWhhdmlvciBhbmQgYWRkaXRpb25hbCBhdHRyaWJ1dGVzLi4gIEFkZGl0aW9uYWwgcHJvcGVydGllczogY29ubmVjdGlvbnMgLSBhbiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byB0YXNrcy4gRWFjaCBjb25uZWN0aW9uIChvYmplY3QpIHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyA6IHRhcmdldCAtIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCB0YXNrdHlwZSAtIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiB0aGUgY29ubmVjdGlvbi4gRm91ciB0eXBlcyBvZiBjb25uZWN0aW9ucyBhcmUgYXZhaWxhYmxlOiAwIC0gaXMgYSBjb25uZWN0aW9uIG9mIHR5cGUgU3RhcnQtdG8tU3RhcnQgMSAtIGlzIGEgY29ubmVjdGlvbiBvZiB0eXBlIEVuZC10by1TdGFydCAyIC0gaXMgYSBjb25uZWN0aW9uIG9mIHR5cGUgRW5kLXRvLUVuZDMgLSBpcyBhIGNvbm5lY3Rpb24gb2YgdHlwZSBTdGFydC10by1FbmQgbGFnIC0gYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBkZWxheSBiZXR3ZWVuIHR3byBjb25uZWN0ZWQgYXV0byBzY2hlZHVsZWQgdGFza3MuIExhZyBwcm9wZXJ0eSBjYW4gYmUgYSBwb3NpdGl2ZSBvciBhIG5lZ2F0aXZlIG51bWJlci4gV2hlbiBuZWdhdGl2ZSBpdCBkZXRlcm1pbmVzIHRoZSBvdmVybGFwIGJldHdlZW4gdHdvIGNvbm5lY3RlZCB0YXNrcy4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGluIGNvbmp1Y3Rpb24gd2l0aCBhdXRvU2NoZWR1bGUuZHVyYXRpb24gLSBkZXRlcm1pbmVzIHRoZSBkdXJhdGlvbiBvZiBhIFRhc2sgaW4gZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgb3IgbWlsaXNlY29uZHMuIFZlcnkgdXNlZnVsbCB3aGVuIHRoZSB0aGUgZGF0ZUVuZCBvZiBhIFRhc2sgaXMgdW5rbm93bi5taW5EdXJhdGlvbiAtIHNldHMgdGhlIG1pbmltdW0gZHVyYXRpb24gb2YgYSB0YXNrLiBtYXhEdXJhdGlvbiAtIHNldHMgdGhlIG1heGltdW0gZHVyYXRpb24gb2YgYSB0YXNrLm1pbkRhdGVTdGFydCAtIGRldGVybWluZXMgdGhlIG1pbmludW0gZGF0ZSB0aGF0IGEgdGFzayBjYW4gc3RhcnQgZnJvbS4gTXVzdCBiZSBpZiB0eXBlIHN0cmluZyBhbmQgc2hvdWxkIHJlcHJlc2VudCBhIHZhbGlkIGRhdGUubWF4RGF0ZVN0YXJ0IC0gZGV0ZXJtaW5lcyB0aGUgbWF4aW11bSBkYXRlIHRoYXQgYSB0YXNrIGNhbiBzdGFydCBmcm9tLiBNdXN0IGJlIGlmIHR5cGUgc3RyaW5nIGFuZCBzaG91bGQgcmVwcmVzZW50IGEgdmFsaWQgZGF0ZS5taW5EYXRlRW5kIC0gZGV0ZXJtaW5lcyB0aGUgbWluaW51bSBkYXRlIHRoYXQgYSB0YXNrIGNhbiBlbmQuIE11c3QgYmUgaWYgdHlwZSBzdHJpbmcgYW5kIHNob3VsZCByZXByZXNlbnQgYSB2YWxpZCBkYXRlLm1heERhdGVFbmQgLSBkZXRlcm1pbmVzIHRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHRhc2sgY2FuIGVuZC4gTXVzdCBiZSBpZiB0eXBlIHN0cmluZyBhbmQgc2hvdWxkIHJlcHJlc2VudCBhIHZhbGlkIGRhdGUucHJvZ3Jlc3MgLSBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIHByb2dyZXNzIG9mIGEgdGFzayAoIGZyb20gMCB0byAxMDAgKS5kaXNhYmxlRHJhZyAtIGEgYm9vbGVhbiBwcm9wZXJ0eSB0aGF0IGRpc2FibGVzIHRoZSBkcmFnZ2luZyBvZiBhIHRhc2sgd2hlbiBzZXQgdG8gdHJ1ZS5kaXNhYmxlUmVzaXplIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgZGlzYWJsZXMgdGhlIHJlc2l6aW5nIG9mIGEgdGFzayB3aGVuIHNldCB0byB0cnVlLmRyYWdQcm9qZWN0IC0gYSBib29sZWFuIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgd2hvbGUgcHJvamVjdCAoYWxvbmcgd2l0aCB0aGUgdGFza3MpIGNhbiBiZSBkcmFnZ2VkIHdoaWxlIGRyYWdnaW5nIHRoZSBwcm9qZWN0IHRhc2suIEFwcGxpY2FsYmUgb25seSB0byBQcm9qZWN0cy5zeW5jaHJvbml6ZWQgLSBhIGJvb2xlYW4gdGhhdCBpZiBzZXQgdGhlIHByb2plY3QgdGFzaydzIHN0YXJ0L2VuZCBkYXRlcyBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSB0YXNrcy4gQnkgZGVmYXVsdCBhIHN5bmNocm9uaXplZCBwcm9qZWN0IHRhc2sgY2FuJ3QgYmUgZHJhZ2dlZCBhbG9uZS4gQXBwbGljYWJsZSBvbmx5IHRvIFByb2plY3QgdGFza3MuZXhwYW5kZWQgLSBhIGJvb2xlYW4gdGhhdCBkZXRlcm1pbmVzIGlmIGEgcHJvamVjdCBpcyBleHBhbmRlZCBvciBub3QuIElmIG5vdCBhbGwgb2YgaXQncyBzdWItdGFza3MgYXJlIG5vdCB2aXNpYmxlLiBPbmx5IHRoZSBwcm9qZWN0IHRhc2sgaXRzZWxmIGlzIHZpc2libGUuIEJ5IGRlZmF1bHQgbm8gcHJvamVjdHMgYXJlIGV4cGFuZGVkLiBBcHBsaWNhYmxlIG9ubHkgdG8gcHJvamVjdCB0YXNrcy4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IEdhbnR0Q2hhcnREYXRhU291cmNlW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZSh2YWx1ZTogR2FudHRDaGFydERhdGFTb3VyY2VbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW4gdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IGRheXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXlGb3JtYXQoKTogR2FudHREYXlGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF5Rm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXlGb3JtYXQodmFsdWU6IEdhbnR0RGF5Rm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGEgc3BlY2lmaWMgZW5kIGRhdGUgZm9yIHRoZSBUaW1lbGluZS4gVXNlZnVsbCB3aGVuIHRoZSB1c2VyIHdhbnRzIGN1c3RvbSBlbmRpbmcgZGF0ZSBmb3IgdGhlIFRpbWVsaW5lLiBJZiBubyBkYXRlIGlzIHNldCB0aGUgZW5kIGRhdGUgb2YgdGhlIHRpbWVsaW5lIGlzIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lZCBmcm9tIHRoZSB0YXNrcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGVFbmQoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlRW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRlRW5kKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVFbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBhIHNwZWNpZmljIHN0YXJ0aW5nIGRhdGUgZm9yIHRoZSBUaW1lbGluZS4gVXNlZnVsbCB3aGVuIHRoZSB1c2VyIHdhbnRzIGN1c3RvbSBzdGFydGluZyBkYXRlIGZvciB0aGUgVGltZWxpbmUuIElmIG5vIGRhdGUgaXMgc2V0IHRoZSBzdGFydCBkYXRlIG9mIHRoZSB0aW1lbGluZSBpcyBhdXRvbWF0aWNhbGx5IGRldGVybWluZWQgZnJvbSB0aGUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlU3RhcnQoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU3RhcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVTdGFydCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU3RhcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGF1dG8gc2Nyb2xsaW5nIHdoaWxlIGRyYWdnaW5nL3Jlc2l6aW5nIGEgdGFzayBiYXIgaW5zaWRlIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVBdXRvU2Nyb2xsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUF1dG9TY3JvbGwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVBdXRvU2Nyb2xsKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVBdXRvU2Nyb2xsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGRyYWdnaW5nIG9mIHRhc2tzIGluIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVUYXNrRHJhZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrRHJhZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVRhc2tEcmFnKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrRHJhZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0YXNrIHByb2dyZXNzIGNoYW5naW5nIGluIHRoZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVUYXNrUHJvZ3Jlc3NDaGFuZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza1Byb2dyZXNzQ2hhbmdlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlVGFza1Byb2dyZXNzQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUYXNrUHJvZ3Jlc3NDaGFuZ2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgcmVzaXppbmcgb2YgdGFza3MgaW4gdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVRhc2tSZXNpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVGFza1Jlc2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVRhc2tSZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRhc2tSZXNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIHNlbGVjdGlvbiBpbnNpZGUgdGhlIEdhbnR0Q2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVNlbGVjdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VsZWN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSB3aW5kb3cgZWRpdG9yIGZvciB0aGUgR2FudHRDaGFydC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVXaW5kb3dFZGl0b3IoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlV2luZG93RWRpdG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlV2luZG93RWRpdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVXaW5kb3dFZGl0b3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpbiB3aGF0IHVuaXQgaXMgdGFzayBkdXJhdGlvbiBwcm9wZXJ0eSBtZWFzdXJlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGR1cmF0aW9uVW5pdCgpOiBEdXJhdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kdXJhdGlvblVuaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGR1cmF0aW9uVW5pdCh2YWx1ZTogRHVyYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHVyYXRpb25Vbml0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjcmVhdGUgYSBjdXN0b20gaGVhZGVyIGNvbnRlbnQgZm9yIHRoZSBUYXNrIFBhbmVsLiBUaGUgYXR0cmlidXRlIGFjY2VwdHMgYW4gSFRNTFRlbXBsYXRlIGVsZW1lbnQsIGl0J3MgaWQgb3IgYSBmdW5jdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBCeSBkZWZhdWx0IHRoZSBUaW1lbGluZSBoYXMgYSB0d28gbGV2ZWwgaGVhZGVyIC0gdGltZWxpbmUgZGV0YWlscyBhbmQgdGltZWxpbmUgaGVhZGVyLiBUaGlzIHByb3BlcnR5IGhpZGVzIHRoZSBoZWFkZXIgZGV0YWlscyBjb250YWluZXIoIHRoZSB0b3AgY29udGFpbmVyICkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlVGltZWxpbmVIZWFkZXJEZXRhaWxzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRpbWVsaW5lSGVhZGVyRGV0YWlscyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVRpbWVsaW5lSGVhZGVyRGV0YWlscyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVGltZWxpbmVIZWFkZXJEZXRhaWxzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIHRoZSBSZXNvdXJjZSBwYW5lbCByZWdhcmRsZXNzIG9mIHRoZSByZXNvdXJjZXMgYXZhaWxhYmlsaXR5IEJ5IGRlZmF1bHQgdGhlIFJlc291cmNlIHBhbmVsIGlzIHZpc2libGUgaWYgcmVzb3VyY2VzIGFyZSBhZGRlZCB0byB0aGUgR2FudHRDaGFydC4gVGhpcyBwcm9wZXJ0eSBhbGxvd3MgdG8gaGlkZSB0aGUgUmVzb3VyY2UgcGFuZWwgcGVybWFuZW50bHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlUmVzb3VyY2VQYW5lbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVSZXNvdXJjZVBhbmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlUmVzb3VyY2VQYW5lbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlUmVzb3VyY2VQYW5lbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdlYXRoZXIgb3Igbm90IGhvcml6b250YWwgc2Nyb2xsYmFyIGlzIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluc2lkZSB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgaG91cnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRm9ybWF0KCk6IEhvdXJGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG91ckZvcm1hdCh2YWx1ZTogSG91ckZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gc2V0IHRoZSBUaW1lbGluZSBpcyBwb3NpdGlvbmVkIG9uIHRoZSBsZWZ0IHNpZGUgd2hpbGUgdGhlIFRhc2sgVHJlZSBpcyBwb3NpdGlvbmVkIG9uIHRoZSByaWdodC4gQnkgZGVmYXVsdCBpdCdzIHZpY2UgdmVyc2EuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbnZlcnRlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmludmVydGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbnZlcnRlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnZlcnRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIEdhbnR0Q2hhcnQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRldG1pbmVzIHRoZSBtYXhpbXVtIHBvc3NpYmxlIGRhdGUgb2YgdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1heCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRldG1pbmVzIHRoZSBtaW5pbXVtIHBvc3NpYmxlIGRhdGUgb2YgdGhlIFRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWluKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1pbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXRlcyB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgbW9udGhzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9udGhGb3JtYXQoKTogTW9udGhGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1vbnRoRm9ybWF0KHZhbHVlOiBNb250aEZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb250aEZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBub253b3JraW5nIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwIHRvIDYsIHdoZXJlIDAgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBhbmQgNiBpcyB0aGUgbGFzdCBkYXkuIE5vbndvcmtpbmcgZGF5cyB3aWxsIGJlIGRpc3BsYXllZCB3aXRoIGNvbG9yZWQgY2VsbHMgaW5zaWRlIHRoZSB0aW1lbGluZSBhbmQgd2lsbCBiZSBpZ25vcmVkIGR1cmluZyB0YXNrIHJhbmdlIGNhbGN1bGF0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IG5vbndvcmtpbmdEYXlzKCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdEYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub253b3JraW5nRGF5cyh2YWx1ZTogbnVtYmVyW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBob3VycyBvZiBhIGRheS4gSG91cnMgYXJlIHJlcHJlc2VudGVkIGFzIG51bWJlcnMgaW5zaWRlIGFuIGFycmF5LiBJbiB0aGUgdGltbGluZSB0aGUgY2VsbHMgdGhhdCByZXByZXNlbnQgbm9ud29ya2luZyBkYXlzIGFyZSBjb2xvcmVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHJlc3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nSG91cnMoKTogbnVtYmVyW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0hvdXJzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub253b3JraW5nSG91cnModmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdIb3VycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29tcGxldGx5IGN1c3RvbWl6ZSB0aGUgcG9wdXAgV2luZG93IHRoYXQgaXMgdXNlZCB0byBpbnRlcmFjdCB3aWR0aCB0YXNrcyBieSBjaGFuZ2luZyB0aGVpciBwcm9wZXJ0aWVzLiBUaGUgZnVuY3Rpb24gYXMgdGhyZWUgYXJndW1lbnRzOiB0YXJnZXQgLSB0aGUgdGFyZ2V0IHBvcHVwIFdpbmRvdyB0aGF0IGlzIGFib3V0IHRvIGJlIG9wZW5lZC50eXBlIC0gdGhlIHR5cGUgb2YgdGhlIHdpbmRvdy4gVGhlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgcHVycG9zZSBvZiB0aGUgd2luZG93LiBUaHJlZSBwb3NzaWJsZSB2YWx1ZXM6ICd0YXNrJyAodGFzayBlZGl0aW5nKSwgJ2NvbmZpcm0nICggY29uZmlybWF0aW9uIHdpbmRvdyksICdjb25uZWN0aW9uJyAodXNlZCB3aGVuIGRlbGV0aW5nIGEgY29ubmVjdGlvbiBiZXR3ZWVuIHRhc2tzKS4gdGFza0luZGV4IC0gdGhlIGluZGV4IG9mIHRoZSB0YXNrIHRoYXQgaXMgYmVpbmcgZWRpdGVkLiBJdCB3aWxsIGJlIHVuZGVmaW5lZCBpZiB0aGUgdHlwZSBvZiB0aGUgd2luZG93IGlzIG5vdCAndGFzaycuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwb3B1cFdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucG9wdXBXaW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBvcHVwV2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucG9wdXBXaW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmb3JtYXQgZnVuY3Rpb24gZm9yIHRoZSBUaW1lbGluZSB0YXNrIHByb2dyZXNzIGxhYmVsLiBUaGUgZXhwZWN0ZWQgcmVzdWx0IGZyb20gdGhlIGZ1bmN0aW9uIGlzIGEgc3RyaW5nLiBUaGUgbGFiZWwgaXMgaGlkZGVuIGJ5IGRlZmF1bHQgY2FuIGJlIHNob3duIHdpdGggdGhlIHNob3dQcm9ncmVzc0xhYmVsIHByb3BlcnR5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcHJvZ3Jlc3NMYWJlbEZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wcm9ncmVzc0xhYmVsRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHByb2dyZXNzTGFiZWxGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnByb2dyZXNzTGFiZWxGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgYSBmbGF0IHN0cnVjdHVyZSBhcyBhbiBhcnJheSBvZiBhbGwgcmVzb3VyY2VzIGluc2lkZSB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlcygpOiBHYW50dENoYXJ0UmVzb3VyY2VbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlcyh2YWx1ZTogR2FudHRDaGFydFJlc291cmNlW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVyZW1pbmVzIHRoZSBjb2x1bW5zIHRoYXQgd2lsbCBiZSB2aXNpYmxlIGluIHRoZSBSZXNvdXJjZSBUcmVlLiBFYWNoIGVudHJ5IGluIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IG11c3QgYmUgb2YgdHlwZSBPYmplY3QuICBJdCBzaG91bGQgY29udGFpbiB0aGUgbGFiZWwgYW5kIHZhbHVlIGtleXMuIFRoZSB2YWx1ZSBvZiBsYWJlbCBkZXRlcm1pbmVzIHRoZSBjb2x1bW4gaGVhZGVyIGxhYmVsIGluc2lkZSB0aGUgVGFzayBUcmVlLiBUaGUgdmFsdWUgb2YgdmFsdWUgZGV0ZXJtaW5lcyB0aGUgY29udGVudCBvZiB0aGUgY2VsbHMgaW4gdGhlIGNvbHVtbi4gQnkgZGVmYXVsdCwgb25lIGNvbHVtbiB3aXRoIGFsbCByZXNvdXJjZSBsYWJlbHMgaXMgdmlzaWJsZS4gIEFkZGl0aW9uYWwgcHJvcGVydGllczogZm9ybWF0RnVuY3Rpb24gLSBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiBlYWNoIHJlY29yZCBpbiB0aGUgY29sdW1uLiBUaGUgZnVuY3Rpb24gYWNjZXB0cyB0d28gYXJndW1lbnRzIC0gdGhlIGFjdHVhbCBsYWJlbCBhcyBzdHJpbmcgdGhhdCBpcyBnb2luZyB0byBiZSBpbnNlcnRlZCBhbmQgdGhlIGluZGV4IG9mIHRoZSByZXNvdXJjZS4gVGhlIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgc3RyaW5nIGFzIHRoZSBuZXcgY29udGVudC4gbWluIC0gY29udHJvbHMgdGhlIG1pbiBzaXplIG9mIHRoZSBjb2x1bW4gbWF4IC0gY29udHJvbHMgdGhlIG1heCBzaXplIG9mIHRoZSBjb2x1bW5zaXplIC0gY29udHJvbHMgdGhlIGFjdHVhbCBzaXplIG9mIHRoZSBjb2x1bW4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlQ29sdW1ucygpOiBHYW50dENoYXJ0UmVzb3VyY2VDb2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZUNvbHVtbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlQ29sdW1ucyh2YWx1ZTogR2FudHRDaGFydFJlc291cmNlQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VDb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjcmVhdGUgYSBjdXN0b20gaGVhZGVyIGNvbnRlbnQgZm9yIHRoZSBSZXNvdXJjZSBQYW5lbC4gVGhlIGF0dHJpYnV0ZSBhY2NlcHRzIGFuIEhUTUxUZW1wbGF0ZSBlbGVtZW50LCBpdCdzIGlkIG9yIGEgZnVuY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVBhbmVsSGVhZGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxIZWFkZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VQYW5lbEhlYWRlclRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbEhlYWRlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbiBzaXplIG9mIHRoZSBSZXNvdXJjZSBQYW5lbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlUGFuZWxNaW4oKTogbnVtYmVyIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlUGFuZWxNaW4odmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVBhbmVsTWluID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNpemUgb2YgdGhlIFJlc291cmNlIFBhbmVsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VQYW5lbFNpemUoKTogbnVtYmVyIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxTaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVBhbmVsU2l6ZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxTaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlZnJlc2ggcmF0ZSBvZiB0aGUgUmVzb3VyY2UgUGFuZWwgd2hlbiBkcmFnZ2luZy9yZXNpemluZy9wcm9ncmVzcyBjaGFuZ2luZyBhIFRhc2sgZnJvbSB0aGUgVGltZWxpbmUuIFRoaXMgcHJvcGVydHkgYWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgaW50ZXJ2YWwgYmV0d2VlbiByZXNvdXJjZSBUcmVlL1RpbWVsaW5lIHJlZnJlc2hlcy4gQnkgZGVmYXVsdCB0aGV5IHJlZnJlc2ggaW1tZWRpYXRlbHkgYWZ0ZXIgYSBjaGFuZ2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVBhbmVsUmVmcmVzaFJhdGUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlUGFuZWxSZWZyZXNoUmF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VQYW5lbFJlZnJlc2hSYXRlKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VQYW5lbFJlZnJlc2hSYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgdGhhdCBjYW4gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIHJlc291cmNlIFRpbWVsaW5lIGNlbGxzLiBUaGUgY2FsbGJhY2sgYWNjZXB0cyB0aHJlZSBhcmd1bWVudHM6IHRhc2tJbmRleGVzIC0gYW4gYXJyYXkgb2YgdGFzayBpbmRleGVzIHRoYXQgYXJlIGFzc2lnbmVkIHRvIHRoZSByZXNvdXJjZSBmb3IgdGhlIGN1cnJlbnQgY2VsbC5yZXNvdXJjZUluZGV4IC0gdGhlIGluZGV4IG9mIHRoZSByZXNvdXJjZS5jZWxsRGF0ZSAtIHRoZSBkYXRlIG9mIHRoZSBjdXJyZW50IGNlbGwuIFRoaXMgcHJvcGVydHkgaXMgdXNlZCB3aGVuIHJlc291cmNlVGltZWxpbmVWaWV3IGlzIHNldCB0byBjdXN0b20uIERlcGVuZGluZyBvbiB0aGUgcmVzb3VyY2VUaW1lbGluZU1vZGUsIGl0IHNob3VsZCByZXR1cm46IHN0cmluZyAtIHdoZW4gdGhlIHJlc291cmNlVGltZWxpbmVNb2RlIGlzIHNldCB0byAnZGlhZ3JhbScub2JqZWN0IC0gd2hlbiB0aGUgcmVzb3VyY2VUaW1lbGluZU1vZGUgaXMgc2V0IHRvICdoaXN0b2dyYW0nLiBUaGUgb2JqZWN0IHNob3VsZCBoYXZlIHR3byBhdHRyaWJ1dGVzOiBjYXBhY2l0eSBhbmQgbWF4Q2FwYWNpdHksIGluIG9yZGVyIHRvIGJlIHZpc3VhbGl6ZWQgYXMgYSBoaXN0b2dyYW0uLiBBbm90aGVyIHVzYWdlIG9mIHRoaXMgY2FsbGJhY2sgaXMgdG8gY3VzdG9taXplIHRoZSB0aW1lbGluZSByZXNvdXJjZSByZXByZXNlbnRhdGlvbiBjb21wbGV0ZWx5IGlmIHJlc291cmNlVGltZWxpbmVNb2RlIGlzIHNldCB0byBjdXN0b20uICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZVRpbWVsaW5lRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlVGltZWxpbmVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VUaW1lbGluZUZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzb3VyY2VUaW1lbGluZUZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaG93IHRoZSBjYXBhY2l0eSBvZiB0aGUgcmVzb3VyY2VzIHdpbGwgYmUgdmlzdWFsaXplZCBpbnNpZGUgdGhlIHJlc291cmNlIHRpbWVsaW5lLiBCeSBkZWZhdWx0LCB0aGUgY2FwYWNpdHkgaXMgbWVhc3VyZWQgaW4gaG91cnMgZGVwZW5kaW5nIG9uIHRoZSB2aWV3IHByb3BlcnR5IG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzb3VyY2VUaW1lbGluZU1vZGUoKTogR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlVGltZWxpbmVNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNvdXJjZVRpbWVsaW5lTW9kZSh2YWx1ZTogR2FudHRDaGFydFJlc291cmNlVGltZWxpbmVNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlVGltZWxpbmVNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaG93IHRoZSByZXNvdXJjZXMgd2lsbCBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSByZXNvdXJjZSBUaW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlVGltZWxpbmVWaWV3KCk6IEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lVmlldyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lVmlldyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VUaW1lbGluZVZpZXcodmFsdWU6IEdhbnR0Q2hhcnRSZXNvdXJjZVRpbWVsaW5lVmlldykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZVRpbWVsaW5lVmlldyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2VsZWN0ZWQgdGFzayhzKS4gSWYgZW1wdHkgbm8gdGFza3MgYXJlIHNlbGVjdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0ZWRJbmRleGVzKCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXhlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0ZWRJbmRleGVzKHZhbHVlOiBudW1iZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgdGhlIHByb2dyZXNzIGxhYmVsIGluc2lkZSB0aGUgcHJvZ3Jlc3MgYmFycyBvZiB0aGUgVGltZWxpbmUgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93UHJvZ3Jlc3NMYWJlbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dQcm9ncmVzc0xhYmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93UHJvZ3Jlc3NMYWJlbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93UHJvZ3Jlc3NMYWJlbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBzZXQgdGhlIGRhdGVTdGFydC9kYXRlRW5kIG9mIHRoZSB0YXNrcyB3aWxsIGJlIGNvZXJjZWQgdG8gdGhlIG5lYXJlc3QgdGltZWxpbmUgY2VsbCBkYXRlICggYWNjb3JkaW5nIHRvIHRoZSB2aWV3ICkuIEFmZmVjdHMgdGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBhcyB3ZWxsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc25hcFRvTmVhcmVzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNuYXBUb05lYXJlc3QgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNuYXBUb05lYXJlc3QodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc25hcFRvTmVhcmVzdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIEdhbnR0Q2hhcnQgY2FuIGJlIHNvcnRlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0YWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIEdhbnR0Q2hhcnQgY2FuIGJlIHNvcnRlZCBieSBvbmUgb3IgbW9yZSBjb2x1bW5zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydE1vZGUoKTogR2FudHRDaGFydFNvcnRNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0TW9kZSh2YWx1ZTogR2FudHRDaGFydFNvcnRNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhIGZsYXQgc3RydWN0dXJlIGFzIGFuIGFycmF5IG9mIGFsbCB0YXNrcyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrcygpOiBHYW50dENoYXJ0VGFza1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrcyh2YWx1ZTogR2FudHRDaGFydFRhc2tbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcmVtaW5lcyB0aGUgY29sdW1ucyB0aGF0IHdpbGwgYmUgdmlzaWJsZSBpbiB0aGUgVGFzayBUcmVlLiBFYWNoIGVudHJ5IGluIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IG11c3QgYmUgb2YgdHlwZSBPYmplY3QuICBJdCBzaG91bGQgY29udGFpbiB0aGUgbGFiZWwgYW5kIHZhbHVlIGtleXMuIFRoZSB2YWx1ZSBvZiBsYWJlbCBkZXRlcm1pbmVzIHRoZSBjb2x1bW4gaGVhZGVyIGxhYmVsIGluc2lkZSB0aGUgVGFzayBUcmVlLiBUaGUgdmFsdWUgb2YgdmFsdWUgZGV0ZXJtaW5lcyB0aGUgY29udGVudCBvZiB0aGUgY2VsbHMgaW4gdGhlIGNvbHVtbi4gSXQgc2hvdWxkIHJlZmVyZW5jZSBhIHRhc2sgYXR0cmlidXRlIGZyb20gdGhlIGRhdGFTb3VyY2UuIEJ5IGRlZmF1bHQsIG9uZSBjb2x1bW4gd2l0aCBhbGwgdGFzayBsYWJlbHMgaXMgdmlzaWJsZS4gIEFkZGl0aW9uYWwgcHJvcGVydGllczogZm9ybWF0RnVuY3Rpb24gLSBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiBlYWNoIHJlY29yZCBpbiB0aGUgY29sdW1uLiBUaGUgZnVuY3Rpb24gYWNjZXB0cyBvbmUgYXJndW1lbnQgLSB0aGUgYWN0dWFsIGxhYmVsIGFzIHN0cmluZyB0aGF0IGlzIGdvaW5nIHRvIGJlIGluc2VydGVkIGFuZCBtdXN0IHJldHVybiBzb21lIGNvbnRlbnQuIG1pbiAtIGNvbnRyb2xzIHRoZSBtaW4gc2l6ZSBvZiB0aGUgY29sdW1uIG1heCAtIGNvbnRyb2xzIHRoZSBtYXggc2l6ZSBvZiB0aGUgY29sdW1uIHNpemUgLSBjb250cm9scyB0aGUgYWN0dWFsIHNpemUgb2YgdGhlIGNvbHVtbmN1c3RvbUVkaXRvciAtIGEgY2FsbGJhY2sgdGhhdCBjYW4gYmUgdXNlZCB0byBzZXQgYSBjdXN0b20gZWRpdG9yIGZvciB0aGUgY29sdW1uIHdoZW4gZWRpdGluZyB2aWEgdGhlIHdpbmRvdy4gSXQgYWNjZXB0cyB0d28gYXJndW1lbnRzIGxhYmVsIC0gdGhlIGxhYmVsIG9mIHRoZSBjb2x1bW52YWx1ZSAtIHRoZSB2YWx1ZSBvZiB0aGUgY29sdW1uLiBUaGUgY2FsbGJhY2sgbXVzdCByZXR1cm4gdGhlIGVkaXRvci5zZXRDdXN0b21FZGl0b3JWYWx1ZSAtIGEgY2FsbGJhY2sgdGhhdCBpcyB1c2VkIHRvIHNldCB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbSBlZGl0b3IuZ2V0Q3VzdG9tRWRpdG9yVmFsdWUgLSBhIGNhbGxiYWNrIHRoYXQgaXMgdXNlZCB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBjdXN0b20gZWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza0NvbHVtbnMoKTogR2FudHRDaGFydFRhc2tDb2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza0NvbHVtbnModmFsdWU6IEdhbnR0Q2hhcnRUYXNrQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbHVtbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWluIHNpemUgb2YgdGhlIFRhc2sgUGFuZWwuIFVzZWQgd2hlbiBSZXNvdXJjZSBQYW5lbCBpcyB2aXNpYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1BhbmVsTWluKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUGFuZWxNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQYW5lbE1pbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQYW5lbE1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzaXplIG9mIHRoZSBUYXNrIFBhbmVsLiBVc2VkIHdoZW4gUmVzb3VyY2UgUGFuZWwgaXMgdmlzaWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQYW5lbFNpemUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQYW5lbFNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQYW5lbFNpemUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUGFuZWxTaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbiB3aWR0aCBvZiB0aGUgdGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZU1pbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVsaW5lTWluKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVNaW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWluIHdpZHRoIG9mIHRoZSB0YXNrIHRyZWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0cmVlTWluKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50cmVlTWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0cmVlTWluKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudHJlZU1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzaXplKHdpZHRoKSBvZiB0aGUgdGFzayB0cmVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdHJlZVNpemUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRyZWVTaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0cmVlU2l6ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRyZWVTaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZm9ybWF0IGZ1bmN0aW9uIGZvciB0aGUgSGVhZGVyIG9mIHRoZSBUaW1lbGluZS4gVGhlIGZ1bmN0aW9uIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOiBkYXRlIC0gYSBEYXRlIG9iamVjdCB0aGF0IHJlcHJlc2V0cyB0aGUgZGF0ZSBmb3IgdGhlIGN1cnJlbnQgY2VsbC50eXBlIC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSB0eXBlIG9mIGRhdGUgdGhhdCB0aGUgY2VsbCBpcyBzaG93aW5nLCBlLmcuICdtb250aCcsICd3ZWVrJywgJ2RheScsIGV0Yy5pc0hlYWRlckRldGFpbHMgLSBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBjZWxsIGlzIHBhcnQgb2YgdGhlIEhlYWRlciBEZXRhaWxzIENvbnRhaW5lciBvciBub3QudmFsdWUgLSBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBjZWxsIHByb3ZpZGVkIGJ5IHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3ZWF0aGVyIG9yIG5vdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgc2hvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB2ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHZpZXdpbmcgZGF0ZSByYW5nZSBvZiB0aGUgdGltZWxpbmUuIFBvc3NpYmxlIHZhbHVlczogZGF5IC0gVGhlIHRpbWVsaW5lIHNob3cgdGhlIGhvdXJzIG9mIHRoZSBkYXkud2VlayAtIHRoZSB0aW1lbGluZSBzaG93cyB0aGUgZGF5cyBvZiB0aGUgd2Vlay5tb250aCAtIHRoZSB0aW1lbGluZSBzaG93cyB0aGUgZGF5cyBvZiB0aGUgbW9udGgueWVhciAtIHRoZSB0aW1lbGluZSBzaG93cyB0aGUgbW9udGhzIG9mIHRoZSB5ZWFyLnJlc291cmNlIC0gZGlzcGxheXMgdGhlIGN1cnJlbnQgdGFza3MgYnkgZ3JvdXBpbmcgdGhlbSBhY2NvcmRpbmcgdG8gdGhlIHJlc291cmNlcyB0aGV5IGhhdmUgYXNzaWduZWQuIFRoZSB1bmFzc2lnbmVkIHRhc2tzIHdpbGwgYmUgcGxhY2VkIGluIGEgc2VwYXJhdGUgZ3JvdXAgY2FsbGVkICdVbmFzc2lnbmVkJy4gIFRoZSB0aW1lbGluZSBoYXMgYSBoZWFkZXIgc2VjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBsYWJlbHMgb2YgZWFjaCBjZWxsIGFjY29yZGluZyB0byB0aGUgZGF0ZSBpbnNpZGUgdGhlbS4gVGhlIGhlYWRlciBpcyBzcGxpdHRlZCBpbiB0d28gc2VjdGlvbnMgaW4gb3JkZXIgdG8gZ2l2ZSBhIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24gb2YgdGhlIGRhdGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmlldygpOiBHYW50dENoYXJ0VmlldyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3KHZhbHVlOiBHYW50dENoYXJ0Vmlldykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW5zaWRlIHRoZSB0aW1lbGluZSBoZWFkZXIgd2hlbiB0aGV5IHJlcHJlc2VudCB5ZWFycy4gKi9cblx0QElucHV0KClcblx0Z2V0IHllYXJGb3JtYXQoKTogWWVhckZvcm1hdCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC55ZWFyRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB5ZWFyRm9ybWF0KHZhbHVlOiBZZWFyRm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnllYXJGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXRlcyBpbnNpZGUgdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IHdlZWtzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHdlZWtGb3JtYXQoKTogV2Vla0Zvcm1hdCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3ZWVrRm9ybWF0KHZhbHVlOiBXZWVrRm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndlZWtGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBlbGVtZW50J3MgdmlzdWFsIHRoZW1lLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgaWYgdGhlIGVsZW1lbnQgY2FuIGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgYmF0Y2ggdXBkYXRlIHdhcyBzdGFydGVkIGFmdGVyIGV4ZWN1dGluZyB0aGUgYmVnaW5VcGRhdGUgbWV0aG9kLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQmVnaW5VcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgYmF0Y2ggdXBkYXRlIHdhcyBlbmRlZCBmcm9tIGFmdGVyIGV4ZWN1dGluZyB0aGUgZW5kVXBkYXRlIG1ldGhvZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkVuZFVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYXNrIGlzIHNlbGVjdGVkL3Vuc2VsZWN0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUsIFx0b2xkVmFsdWUpXG5cdCogICB2YWx1ZSAtIFRoZSBpbmRleCBvZiB0aGUgbmV3IHNlbGVjdGVkIHRhc2suXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBpbmRleCBvZiB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCB0YXNrLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgdGFzaywgcmVzb3VyY2Ugb3IgY29ubmVjdGlvbiBpcyBjbGlja2VkIGluc2lkZSB0aGUgVGltZWxpbmUgb3IgdGhlIFRyZWUgY29sdW1ucy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdHR5cGUsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGl0ZW0gLSBUaGUgaXRlbSB0aGF0IHdhcyBjbGlja2VkLiBJdCBjYW0gYmUgYSB0YXNrLCByZXNvdXJjZSBvciBjb25uZWN0aW9uLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGl0ZW0uIFBvc3NpYmxlIHZhbHVlcyBhcmU6ICd0YXNrJywgJ3Jlc291cmNlJywgJ2Nvbm5lY3Rpb24nLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBET00gZXZlbnQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYXNrL1Jlc291cmNlL0Nvbm5lY3Rpb24gaXMgaW5zZXJ0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSwgXHRpdGVtKVxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGl0ZW0gdGhhdCBoYXMgYmVlbiBtb2RpZmllZC5cblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbUluc2VydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYXNrL1Jlc291cmNlL0Nvbm5lY3Rpb24gaXMgcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0eXBlLCBcdGl0ZW0pXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgaXRlbSB0aGF0IGhhcyBiZWVuIG1vZGlmaWVkLlxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtUmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRhc2svUmVzb3VyY2UvQ29ubmVjdGlvbiBpcyB1cGRhdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHR5cGUsIFx0aXRlbSlcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtIHRoYXQgaGFzIGJlZW4gbW9kaWZpZWQuXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1VcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBwcm9ncmVzcyBvZiBhIHRhc2sgYmFyIHN0YXJ0cyB0byBjaGFuZ2UgYXMgYSByZXN1bHQgb2YgdXNlciBpbnRlcmFjdGlvbi4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluZGV4LCBcdHByb2dyZXNzKVxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgd2hpY2ggcHJvZ3Jlc3MgaXMgZ29pbmcgdG8gYmUgY2hhbmdlZC5cblx0KiAgIHByb2dyZXNzIC0gVGhlIHByb2dyZXNzIG9mIHRoZSB0YXNrIGJlZm9yZSBpdCBpcyBjaGFuZ2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Qcm9ncmVzc0NoYW5nZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcHJvZ3Jlc3Mgb2YgYSB0YXNrIGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5kZXgsIFx0cHJvZ3Jlc3MpXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB3aGljaCBwcm9ncmVzcyBpcyBoYXMgYmVlbiBjaGFuZ2VkLlxuXHQqICAgcHJvZ3Jlc3MgLSBUaGUgcHJvZ3Jlc3Mgb2YgdGhlIHRhc2sgYWZ0ZXIgaXQgd2FzIGNoYW5nZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblByb2dyZXNzQ2hhbmdlRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2luZyBvZiBhIHRhc2sgc3RhcnRzLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5kZXgsIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQpXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBkYXRlU3RhcnQgLSBUaGUgc3RhcnQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBkYXRlRW5kIC0gVGhlIGVuZCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2luZyBvZiBhIHRhc2sgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5kZXgsIFx0ZGF0ZVN0YXJ0LCBcdGRhdGVFbmQpXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdGFzayB0aGF0IGlzIHdhcyBkcmFnZ2VkLlxuXHQqICAgZGF0ZVN0YXJ0IC0gVGhlIHN0YXJ0IGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyB3YXMgZHJhZ2dlZC5cblx0KiAgIGRhdGVFbmQgLSBUaGUgZW5kIGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyB3YXMgZHJhZ2dlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gcmVzaXppbmcgb2YgYSB0YXNrIHN0YXJ0cy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluZGV4LCBcdGRhdGVTdGFydCwgXHRkYXRlRW5kKVxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqICAgZGF0ZVN0YXJ0IC0gVGhlIHN0YXJ0IGRhdGUgb2YgdGhlIHRhc2sgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqICAgZGF0ZUVuZCAtIFRoZSBlbmQgZGF0ZSBvZiB0aGUgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcmVzaXppbmcgb2YgYSB0YXNrIGZpbmlzaGVzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluZGV4LCBcdGRhdGVTdGFydCwgXHRkYXRlRW5kKVxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCB3YXMgcmVzaXplZC5cblx0KiAgIGRhdGVTdGFydCAtIFRoZSBzdGFydCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgd2FzIHJlc2l6ZWQuXG5cdCogICBkYXRlRW5kIC0gVGhlIGVuZCBkYXRlIG9mIHRoZSB0YXNrIHRoYXQgd2FzIHJlc2l6ZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGNvbm5lY3Rpbmcgb25lIHRhc2sgdG8gYW5vdGhlci4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHN0YXJ0SW5kZXgpXG5cdCogICBzdGFydEluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSB0YXNrIHRoYXQgYSBjb25uZWN0aW9uIGlzIHN0YXJ0ZWQgZnJvbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29ubmVjdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjb21wbGV0ZXMgYSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHRhc2tzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHN0YXJ0SW5kZXgsIFx0ZW5kSW5kZXgsIFx0dHlwZSlcblx0KiAgIHN0YXJ0SW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBhIGNvbm5lY3Rpb24gaXMgc3RhcnRlZCBmcm9tLlxuXHQqICAgZW5kSW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHRhc2sgdGhhdCBhIGNvbm5lY3Rpb24gaXMgc3RhcnRlZCBmcm9tLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGNvbm5lY3Rpb24uIEZvdXJzIHR5cGVzIGFyZSBhdmFpbGFibGU6IDx1bD48bGk+PGI+MDwvYj4gLSBzdGFydC10by1zdGFydDwvbGk+PGxpPjxiPjE8L2I+IC0gZW5kLXRvLXN0YXJ0PC9saT48bGk+PGI+MjwvYj4gLSBlbmQtdG8tZW5kPC9saT48bGk+PGI+MzwvYj4gLSBzdGFydC10by1lbmQ8L2xpPjwvdWw+XG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbm5lY3Rpb25FbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBUaW1lbGluZSBoYXMgYmVlbiBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsQm90dG9tUmVhY2hlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIFRpbWVsaW5lIGhhcyBiZWVuIHNjcm9sbGVkIHRvIHRoZSB0b3AuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxUb3BSZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQganVzdCBiZWZvcmUgdGhlIHdpbmRvdyBmb3IgdGFzayBlZGl0aW5nIHN0YXJ0cyBvcGVuaW5nLiBUaGUgb3BlbmluZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0dHlwZSlcblx0KiAgIHRhcmdldCAtIFRoZSBpbnN0YW5jZSBvZiB0aGUgd2luZG93IHRoYXQgaXMgZ29pbmcgdG8gb3Blbi5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB3aW5kb3cgdGhhdCBpcyBnb2luZyB0byBvcGVuLiBUaGVyZSBhcmUgdGhyZWUgdHlwZXMgb2Ygd2luZG93cyBpbnNpZGUgR2FudHRDaGFydDogPHVsPjxsaT48Yj5jb25maXJtPC9iPiAtIGEgY29uZmlybSB3aW5kb3cuIFRoaXMgdHlwZSBvZiB3aW5kb3cgaXMgdXN1YWxseSB1c2VkIHRvIGNvbmZpcm0gdGhlIGRlbGV0aW9uIG9mIGEgdGFzay48L2xpPjxsaT48Yj50YXNrPC9iPiAtIGEgd2luZG93IHVzZWQgZm9yIHRhc2sgZWRpdGluZy48L2xpPjxsaT48Yj5jb25uZWN0aW9uPC9iPiAtIGEgd2luZG93IHVzZWQgdG8gZGVsZXRlIGEgY29ubmVjdGlvbi48L2xpPjwvdWw+XG5cdCovXG5cdEBPdXRwdXQoKSBvbk9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB3aW5kb3cgZm9yIHRhc2sgZWRpdGluZyBpcyBvcGVuZWQoIHZpc2libGUgKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBqdXN0IGJlZm9yZSB0aGUgd2luZG93IGZvciB0YXNrIGVkaXRpbmcgc3RhcnRzIGNsb3NpbmcuIFRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHR0eXBlKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGluc3RhbmNlIG9mIHRoZSB3aW5kb3cgdGhhdCBpcyBnb2luZyB0byBjbG9zZS5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB3aW5kb3cgdGhhdCBpcyBnb2luZyB0byBjbG9zZS4gVGhlcmUgYXJlIHRocmVlIHR5cGVzIG9mIHdpbmRvd3MgaW5zaWRlIEdhbnR0Q2hhcnQ6IDx1bD48bGk+PGI+Y29uZmlybTwvYj4gLSBhIGNvbmZpcm0gd2luZG93LiBUaGlzIHR5cGUgb2Ygd2luZG93IGlzIHVzdWFsbHkgdXNlZCB0byBjb25maXJtIHRoZSBkZWxldGlvbiBvZiBhIHRhc2suPC9saT48bGk+PGI+dGFzazwvYj4gLSBhIHdpbmRvdyB1c2VkIGZvciB0YXNrIGVkaXRpbmcuPC9saT48bGk+PGI+Y29ubmVjdGlvbjwvYj4gLSBhIHdpbmRvdyB1c2VkIHRvIGRlbGV0ZSBhIGNvbm5lY3Rpb24uPC9saT48L3VsPlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgd2luZG93IGZvciB0YXNrIGVkaXRpbmcgaXMgY2xvc2VkKCBoaWRkZW4gKVxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgUHJvamVjdCBpcyBjb2xsYXBzZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5kZXgsIFx0bGFiZWwsIFx0dmFsdWUpXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgY29sbGFwc2VkIHByb2plY3QuXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgY29sbGFwc2VkIHByb2plY3QuXG5cdCogICB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgY29sbGFwc2VkIHByb2plY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbGxhcHNlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFByb2plY3QgaXMgZXhwYW5kZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSwgXHRsYWJlbCwgXHR2YWx1ZSlcblx0KiAgIGl0ZW0gLSBUaGUgaW5kZXggb2YgdGhlIGV4cGFuZGVkIHByb2plY3QuXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgZXhwYW5kZWQgcHJvamVjdC5cblx0KiAgIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBleHBhbmRlZCBwcm9qZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FeHBhbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgdGFzayBhcyB0aGUgbGFzdCBpdGVtIG9mIGEgUHJvamVjdC4gXG5cdCogQHBhcmFtIHthbnl9IHRhc2tJbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHRhc2sgb3IgYSBzdHJpbmcgdGhhdCBtYXRjaGVzIHRoZSBoaWVyYXJjaGljYWwgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KS5cblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcHJvamVjdEluZGV4LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgcHJvamVjdCBvciBhIHN0cmluZyB0aGF0IG1hdGNoZXMgdGhlIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLlxuXHQqL1xuICAgIHB1YmxpYyBhZGRUYXNrVG8odGFza0luZGV4OiBhbnksIHByb2plY3RJbmRleDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFRhc2tUbyh0YXNrSW5kZXgsIHByb2plY3RJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVGFza1RvKHRhc2tJbmRleCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3RhcnRzIGFuIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgaXMgYXBwcm9wcmlhdGUgd2hlbiBjYWxsaW5nIG11bHRpcGxlIG1ldGhvZHMgb3Igc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYXQgb25jZS4gXG5cdCovXG4gICAgcHVibGljIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuZHMgdGhlIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgbWV0aG9kIHdpbGwgcmVzdW1lIHRoZSByZW5kZXJpbmcgYW5kIHdpbGwgcmVmcmVzaCB0aGUgR2FudHRDaGFydC4gXG5cdCovXG4gICAgcHVibGljIGVuZFVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlZmVyZXNoZXMgdGhlIEdhbnR0Q2hhcnQgYWZ0ZXIgcmVzaXppbmcgYnkgcmVjYWxjdWxhdGluZyB0aGUgU2Nyb2xsYmFycy4gIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gZnVsbFJlZnJlc2g/LiBJZiBzZXQgdGhlIEdhbnR0Q2hhcnQgd2lsbCBiZSByZS1yZW5kZXJlZCBjb21wbGV0ZWx5LlxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKGZ1bGxSZWZyZXNoPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgY29ubmVjdGlvbnMgYmV0d2VlbiB0YXNrcy4gIFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVBbGxDb25uZWN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQWxsQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGxDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgY29ubmVjdGlvbiBiZXR3ZWVuIHRhc2tzLiBUaGUgZnVuY3Rpb24gYWNjZXB0cyB0aHJlZSBhcmd1bWVudHModGFzaydzIHN0YXJ0IGluZGV4LCBlbmQgaW5kZXggYW5kIGNvbm5lY3Rpb24gdHlwZSkgb3Igb25lIGNvbm5lY3Rpb24gc3RyaW5nIGFyZ3VtZW50IHdoaWNoIGRlc2NyaWJlcyB0aGUgY29ubmVjdGlvbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IHN0YXJ0VGFza0luZGV4LiBUaGUgaW5kZXggb2YgdGhlIHN0YXJ0IHRhc2sgb3IgdGhlIGNvbm5lY3Rpb24gc3RyaW5nIGxpa2UgJzItMy0wLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSB0YXNrRW5kSW5kZXg/LiBUaGUgaW5kZXggb2YgdGhlIGVuZCB0YXNrLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBjb25uZWN0aW9uVHlwZT8uIFRoZSB0eXBlIG9mIHRoZSBjb25uZWN0aW9uLiBBIG51bWVyaWMgdmFsdWUgZnJvbSAwIHRvIDMuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIHJlbW92ZUNvbm5lY3Rpb24oc3RhcnRUYXNrSW5kZXgsIHRhc2tFbmRJbmRleD8sIGNvbm5lY3Rpb25UeXBlPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4LCB0YXNrRW5kSW5kZXgsIGNvbm5lY3Rpb25UeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIGNvbm5lY3Rpb25zIG9mIGEgdGFzayBvciBiZXR3ZWVuIHR3byB0YXNrcyBpZiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHByb3ZpZGVkIGFuZCB2YWxpZC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHRhc2tTdGFydEluZGV4LiBUaGUgaW5kZXggb2YgdGhlIHN0YXJ0IHRhc2suIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB0YXNrRW5kSW5kZXg/LiBUaGUgaW5kZXggb2YgdGhlIGVuZCB0YXNrLlxuXHQqIEByZXR1cm5zIHtzdHJpbmd9XG4gICovXG5cdHB1YmxpYyBhc3luYyByZW1vdmVUYXNrQ29ubmVjdGlvbih0YXNrU3RhcnRJbmRleCwgdGFza0VuZEluZGV4Pyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVUYXNrQ29ubmVjdGlvbih0YXNrU3RhcnRJbmRleCwgdGFza0VuZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIHRhc2tzLiAgXG5cdCovXG4gICAgcHVibGljIGNsZWFyVGFza3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyVGFza3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclRhc2tzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIHJlc291cmNlcy4gIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJSZXNvdXJjZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclJlc291cmNlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byB0YXNrcy4gIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSBzdGFydFRhc2tJbmRleC4gVGhlIGluZGV4IG9mIHRoZSBzdGFydCB0YXNrIG9yIHRoZSBjb25uZWN0aW9uIHN0cmluZyBsaWtlICcyLTMtMC5cblx0KiBAcGFyYW0ge251bWJlcn0gdGFza0VuZEluZGV4Py4gVGhlIGluZGV4IG9mIHRoZSBlbmQgdGFzay5cblx0KiBAcGFyYW0ge251bWJlcn0gY29ubmVjdGlvblR5cGU/LiBUaGUgdHlwZSBvZiB0aGUgY29ubmVjdGlvbi4gQSBudW1lcmljIHZhbHVlIGZyb20gMCB0byAzLlxuXHQqL1xuICAgIHB1YmxpYyBjcmVhdGVDb25uZWN0aW9uKHN0YXJ0VGFza0luZGV4OiBudW1iZXIgfCBzdHJpbmcsIHRhc2tFbmRJbmRleD86IG51bWJlciwgY29ubmVjdGlvblR5cGU/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY3JlYXRlQ29ubmVjdGlvbihzdGFydFRhc2tJbmRleCwgdGFza0VuZEluZGV4LCBjb25uZWN0aW9uVHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY3JlYXRlQ29ubmVjdGlvbihzdGFydFRhc2tJbmRleCwgdGFza0VuZEluZGV4LCBjb25uZWN0aW9uVHlwZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbiBleHBhbmRlZCBwcm9qZWN0IHdpdGggdGFza3MuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpbmRleC4gVGhlIGluZGV4IG9mIGEgcHJvamVjdCB0YXNrIHRoYXQgc2hvdWxkIGJlIGNvbGxhcHNlZC5cblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2UoaW5kZXg6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNYWtlcyBzdXJlIGEgVGFzayBpcyB2aXNpYmxlIGJ5IHNjcm9sbGluZyB0byBpdC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGl0ZW0uIFRoZSBpbmRleCBvZiB0aGUgdGFyZ2V0IFRhc2suIENhbiBiZSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBUcmVlIGluZGV4ICggc2ltaWxhciB0byBqcXhUcmVlIClcblx0Ki9cbiAgICBwdWJsaWMgZW5zdXJlVmlzaWJsZShpdGVtOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5zdXJlVmlzaWJsZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGEgY29sbGFwc2VkIHByb2plY3Qgd2l0aCB0YXNrcy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGluZGV4LiBUaGUgaW5kZXggb2YgYSBwcm9qZWN0IHRhc2sgdGhhdCBzaG91bGQgYmUgZXhwYW5kZWQuXG5cdCovXG4gICAgcHVibGljIGV4cGFuZChpbmRleDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgZGF0YSBvZiBUcmVlIG9mIHRoZSBHYW50dENoYXJ0LiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZvcm1hdC4gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBleHBvcnRlZCBmaWxlLiBUaHJlZSBwb3NzaWJsZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZTogPHVsPjxsaT48Yj5wZGY8L2I+PC9saT48bGk+PGI+eGxzeDwvYj48L2xpPjxsaT48Yj5odG1sPC9iPjwvbGk+PC91bD5cblx0KiBAcGFyYW0ge2FueX0gY2FsbGJhY2s/LiBBIGNhbGxiYWNrIHRoYXQgYWxsb3dzIHRvIGZvcm1hdCB0aGUgZXhwb3J0ZWQgZGF0YSBiYXNlZCBvbiBhIGNvbmRpdGlvbi4gRm9yIGFkZGl0aW9uYWwgZGV0YWlscywgcmVmZXIgcm8gdGhlIFNtYXJ0IEV4cG9ydCBEb2N1bWVudGF0aW9uLlxuXHQqL1xuICAgIHB1YmxpYyBleHBvcnREYXRhKGRhdGFGb3JtYXQ6IHN0cmluZywgY2FsbGJhY2s/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGFsbCB0YXNrcyBpbnNpZGUgdGhlIGVsZW1lbnQgYWxvbmcgd2l0aCB0aGVpciBjb25uZWN0aW9ucyBhbmQgc2V0dGluZ3MuIFxuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFN0YXRlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgVHJlZSBwYXRoIG9mIGEgdGFzay9yZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEEgR2F0dENoYXJ0VGFzay9HYW50dENoYXJ0UmVzb3VyY2UgaXRlbSBvYmplY3Qgb3IgaW5kZXguXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEl0ZW1QYXRoKGl0ZW0pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SXRlbVBhdGgoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBpbmRleCBvZiBhIHRhc2suIFxuXHQqIEBwYXJhbSB7YW55fSB0YXNrLiBBIEdhdHRDaGFydFRhc2sgb2JqZWN0LlxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRUYXNrSW5kZXgodGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUYXNrSW5kZXgodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB0cmVlIHBhdGggb2YgYSB0YXNrLiBcblx0KiBAcGFyYW0ge2FueX0gdGFzay4gQSBHYW50dENoYXJ0VGFzayBvYmplY3QuXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFRhc2tQYXRoKHRhc2spOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VGFza1BhdGgodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRlaCBQcm9qZWN0IG9mIGEgdGFzayBpZiBhbnkuIFxuXHQqIEBwYXJhbSB7YW55fSB0YXNrLiBBIEdhbnRDaGFydFRhc2sgb2JqZWN0LlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRUYXNrUHJvamVjdCh0YXNrKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRhc2tQcm9qZWN0KHRhc2spO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgaW5kZXggb2YgYSByZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IHJlc291cmNlLiBBIEdhbnR0Q2hhcnRSZXNvdXJjZSBvYmplY3QuXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJlc291cmNlSW5kZXgocmVzb3VyY2UpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2VJbmRleChyZXNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB0YXNrcyB0aGF0IGFyZSBhc3NpZ25lZCB0byB0aGUgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZS4gQSBHYW50dENoYXJ0UmVzb3VyY2Ugb2JqZWN0LlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZVRhc2tzKHJlc291cmNlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJlc291cmNlVGFza3MocmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVW5zZWxlY3RzIGFsbCBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMgaW5zaWRlIHRoZSBHYW50dENoYXJ0IGluY2x1ZGluZyBUYXNrcyBhbmQgUmVzb3VyY2VzLiBJdCBhbHNvIGNsZWFycyB0aGUgYXNzaWdubWVudCBoaWdobGdpaHRlcnMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBmb3JtIExvY2FsU3RvcmFnZSBhY2NvcmRpbmcgdG8gaXQncyBpZC4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50IG9yIGNoZWNrcyBMb2NhbFN0b3JhZ2UgZm9yIGFueSBzYXZlZCBzdGF0ZXMgaWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBHYW50dCBDaGFydCB0YXNrcy5cblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgY3VycmVudCBzZXR0aW5ncyBvZiB0aGUgZWxlbWVudCB0byBMb2NhbFN0b3JhZ2UuIFJlcXVpcmVzIGFuIGlkIHRvIGJlIHNldCB0byB0aGUgZWxlbWVudC4gXG5cdCogQHBhcmFtIHthbnlbXX0gc3RhdGU/LiBBbiBBcnJheSBjb250YWluaW5nIGEgdmFsaWQgc3RydWN0dXJlIG9mIEdhbnR0IENoYXJ0IHRhc2tzLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlU3RhdGUoc3RhdGU/OiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgdGFzayBpbiB0aGUgdGltZWxpbmUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHRhc2sgb3IgYSBzdHJpbmcgdGhhdCBtYXRjaGVzIHRoZSBoaWVyYXJjaGljYWwgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KS5cblx0KiBAcGFyYW0ge2FueX0gdGFza09iamVjdC4gQW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBHYW50dCBDaGFydCB0YXNrLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRUYXNrKGluZGV4OiBzdHJpbmcgfCBudW1iZXIsIHRhc2tPYmplY3Q6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhIHRhc2sgaW5zaWRlIHRoZSB0aW1lbGluZS4gXG5cdCogQHBhcmFtIHthbnl9IGluZGV4LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgdGFzayBvciBhIHN0cmluZyB0aGF0IG1hdGNoZXMgdGhlIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLlxuXHQqIEBwYXJhbSB7YW55fSB0YXNrT2JqZWN0LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHRhc2suIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZGVzaXJlZCB0YXNrLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVUYXNrKGluZGV4OiBhbnksIHRhc2tPYmplY3Q6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKGluZGV4LCB0YXNrT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIHRhc2sgZnJvbSB0aGUgdGltZWxpbmUuIFxuXHQqIEBwYXJhbSB7YW55fSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHRhc2sgb3IgYSBzdHJpbmcgdGhhdCBtYXRjaGVzIHRoZSBoaWVyYXJjaGljYWwgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlVGFzayhpbmRleDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2soaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2soaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IHJlc291cmNlLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcmVzb3VyY2VJZC4gQSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhIHJlc291cmNlIG9yIGl0J3MgaGllcmFyY2hpY2FsIHBvc2l0aW9uLCBlLmcuICcwJyAoIGZvbGxvd2luZyBqcXhUcmVlIHN5bnRheCksIG9yIGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYSByZXNvdXJjZS5cblx0KiBAcGFyYW0ge2FueX0gcmVzb3VyY2VPYmplY3Q/LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHJlc291cmNlLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRSZXNvdXJjZShyZXNvdXJjZUlkOiBzdHJpbmcgfCBudW1iZXIsIHJlc291cmNlT2JqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydFJlc291cmNlKHJlc291cmNlSWQsIHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRSZXNvdXJjZShyZXNvdXJjZUlkLCByZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYW4gZXhpc3RpbmcgcmVzb3VyY2UuIFxuXHQqIEBwYXJhbSB7YW55fSByZXNvdXJjZUlkLiBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkIG9mIGEgcmVzb3VyY2Ugb3IgaXQncyBoaWVyYXJjaGljYWwgcG9zaXRpb24sIGUuZy4gJzAnICggZm9sbG93aW5nIGpxeFRyZWUgc3ludGF4KSwgb3IgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIHJlc291cmNlLlxuXHQqIEBwYXJhbSB7YW55fSB0YXNrT2JqZWN0LiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIEdhbnR0IENoYXJ0IHJlc291cmNlLiBUaGUgcHJvcGVydGllcyBvZiB0aGlzIG9iamVjdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHRhcmdldCByZXNvdXJjZS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZDogYW55LCB0YXNrT2JqZWN0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZCwgdGFza09iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUmVzb3VyY2UocmVzb3VyY2VJZCwgdGFza09iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSByZXNvdXJjZS4gXG5cdCogQHBhcmFtIHthbnl9IHJlc291cmNlSWQuIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYSByZXNvdXJjZSBvciBpdCdzIGhpZXJhcmNoaWNhbCBwb3NpdGlvbiwgZS5nLiAnMCcgKCBmb2xsb3dpbmcganF4VHJlZSBzeW50YXgpLCBvciBhIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgcmVzb3VyY2UuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZVJlc291cmNlKHJlc291cmNlSWQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSZXNvdXJjZShyZXNvdXJjZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSZXNvdXJjZShyZXNvdXJjZUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIHBvcHVwIFdpbmRvdyBmb3Igc3BlY2lmaWMgdGFzayBFZGl0aW5nLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaW5kZXguIEEgc3RyaW5nIG9yIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGEgdGFzayB0aGF0IGlzIGdvaW5nIHRvIGJlIGVkaXRlZC5cblx0Ki9cbiAgICBwdWJsaWMgb3BlbldpbmRvdyhpbmRleDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbG9zZXMgYW4gb3BlbmVkIHBvcHVwIFdpbmRvdy4gVGhlIG1ldGhvZCB3aWxsIGNsb3NlIGFueSBvcGVuZWQgcG9wdXAgd2luZG93IGluc2lkZSB0aGUgZWxlbWVudC4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlV2luZG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVdpbmRvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlV2luZG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFByZXBhcmVzIHRoZSBHYW50dENoYXJ0IGZvciBwcmludGluZyBieSBvcGVuaW5nIHRoZSBicm93c2VyJ3MgUHJpbnQgUHJldmlldy4gXG5cdCovXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNvcnRzIHRoZSBHYW50dENoYXJ0IHRhc2tzL3Jlc291cmNlcyBpZiBzb3J0YWJsZSBpcyBlbmFibGVkLiBcblx0KiBAcGFyYW0ge2FueX0gY29sdW1ucz8uIEFuIEFycmF5IG9mIG9iamVjdHMgd2hpY2ggZGV0ZXJtaW5lIHdoaWNoIGNvbHVtbnMgdG8gYmUgc29ydGVkLCB0aGUgc29ydCBvcmRlciBhbmQgdGhlIHR5cGUgb2YgaXRlbSB0byBzb3J0OiB0YXNrIG9yIHJlc291cmNlLiBJZiBubyBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIHNvcnRpbmcgd2lsbCBiZSByZW1vdmVkLiA8YnIgLz4gQW4gb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogPHVsPjxsaT48Yj52YWx1ZTwvYj4gLSBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHZhbHVlIG9mIGEgPGI+dGFza0NvbHVtbjwvYj4gdG8gc29ydC48L2xpPjxsaT48Yj5zb3J0T3JkZXI8L2I+IC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBzb3J0aW5nIG9yZGVyIGZvciB0aGUgY29sdW1uOiAnYXNjJyAoYXNzY2VuZGluZyBzb3J0aW5nKSBvciAnZGVzYycgKGRlc2NlbmRpbmcpIGFyZSBwb3NzaWJsZSB2YWx1ZXMuIDwvbGk+PGxpPjxiPnR5cGU8L2I+IC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSB0eXBlIG9mIGl0ZW0gdG8gc29ydC4gVGhpcyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHdoaWNoIHBhbmVsIHdpbGwgYmUgc29ydGVkLiBUd28gcG9zc2libGUgdmFsdWVzOiAndGFzaycsICdyZXNvdXJjZScuPC9saT48L3VsPlxuXHQqL1xuICAgIHB1YmxpYyBzb3J0KGNvbHVtbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydChjb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zb3J0KGNvbHVtbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkJlZ2luVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVuZFVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1JbnNlcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtSW5zZXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1JbnNlcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1JbnNlcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtUmVtb3ZlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbVJlbW92ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtUmVtb3ZlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1VcGRhdGUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbVVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Qcm9ncmVzc0NoYW5nZVN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzQ2hhbmdlU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb2dyZXNzQ2hhbmdlU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZUVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblByb2dyZXNzQ2hhbmdlRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzQ2hhbmdlRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZUVuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZVN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZUVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25TdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbm5lY3Rpb25TdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb25uZWN0aW9uU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25TdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25FbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db25uZWN0aW9uRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3Rpb25FbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25FbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsQm90dG9tUmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbFRvcFJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25PcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2xsYXBzZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FeHBhbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVnaW5VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbUluc2VydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydwcm9ncmVzc0NoYW5nZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3NDaGFuZ2VTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9ncmVzc0NoYW5nZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncHJvZ3Jlc3NDaGFuZ2VFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb25uZWN0aW9uU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb25uZWN0aW9uU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25TdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29ubmVjdGlvbkVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3Rpb25FbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nvbm5lY3Rpb25FbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdleHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==