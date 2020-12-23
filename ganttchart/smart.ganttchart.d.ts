import { GanttChart } from './../index';
import { GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSortMode, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDataSource, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskColumn } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { GanttChartDataExportItemType, GanttChartTaskType, GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSortMode, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDataSource, GanttChartDataSourceResource, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskColumn, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { GanttChart } from './../index';
export declare class GanttChartComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<GanttChart>);
    private eventHandlers;
    nativeElement: GanttChart;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks. */
    autoSchedule: boolean;
    /** @description Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined. */
    autoScheduleStrictMode: boolean;
    /** @description Determines the scroll speed when dragging when autoScroll property is set.  */
    autoScrollStep: number;
    /** @description Sets the GanttChart's Data Export options. */
    dataExport: GanttChartDataExport;
    /** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks.. */
    dataSource: GanttChartDataSource[];
    /** @description Determines the format of the dates in the timeline header when they represent days. */
    dayFormat: GanttDayFormat;
    /** @description Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks. */
    dateEnd: string | Date;
    /** @description Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks. */
    dateStart: string | Date;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Disables auto scrolling while dragging/resizing a task bar inside the Timeline. */
    disableAutoScroll: boolean;
    /** @description Disables dragging of tasks in the Timeline. */
    disableTaskDrag: boolean;
    /** @description Disables task progress changing in the Timeline. */
    disableTaskProgressChange: boolean;
    /** @description Disables resizing of tasks in the Timeline. */
    disableTaskResize: boolean;
    /** @description Disables the selection inside the GanttChart. */
    disableSelection: boolean;
    /** @description Disables the window editor for the GanttChart. */
    disableWindowEditor: boolean;
    /** @description Determines in what unit is task duration property measured. */
    durationUnit: Duration;
    /** @description Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
    headerTemplate: any;
    /** @description By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ). */
    hideTimelineHeaderDetails: boolean;
    /** @description Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently. */
    hideResourcePanel: boolean;
    /** @description Determines weather or not horizontal scrollbar is shown. */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility;
    /** @description Determines the format of the dates inside the timeline header when they represent hours. */
    hourFormat: HourFormat;
    /** @description When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa. */
    inverted: boolean;
    /** @description  Determines the language of the GanttChart.  */
    locale: string;
    /** @description Detetmines the maximum possible date of the Timeline. */
    max: any;
    /** @description Detetmines the minimum possible date of the Timeline. */
    min: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the format of the dates the timeline header when they represent months. */
    monthFormat: MonthFormat;
    /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations. */
    nonworkingDays: number[];
    /** @description Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest. */
    nonworkingHours: number[];
    /** @description A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'. */
    popupWindowCustomizationFunction: any;
    /** @description A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property. */
    progressLabelFormatFunction: any;
    /** @description A getter that returns a flat structure as an array of all resources inside the element. */
    resources: GanttChartResource[];
    /** @description Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column */
    resourceColumns: GanttChartResourceColumn[];
    /** @description Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
    resourcePanelHeaderTemplate: any;
    /** @description Determines the min size of the Resource Panel. */
    resourcePanelMin: number | string;
    /** @description Determines the size of the Resource Panel. */
    resourcePanelSize: number | string;
    /** @description Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change. */
    resourcePanelRefreshRate: number;
    /** @description A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom. */
    resourceTimelineFormatFunction: any;
    /** @description Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element. */
    resourceTimelineMode: GanttChartResourceTimelineMode;
    /** @description Determines how the resources will be displayed inside the resource Timeline. */
    resourceTimelineView: GanttChartResourceTimelineView;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the selected task(s). If empty no tasks are selected. */
    selectedIndexes: number[];
    /** @description Shows the progress label inside the progress bars of the Timeline tasks. */
    showProgressLabel: boolean;
    /** @description If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well. */
    snapToNearest: boolean;
    /** @description Determines whether the GanttChart can be sorted or not. */
    sortable: boolean;
    /** @description Determines whether the GanttChart can be sorted by one or more columns. */
    sortMode: GanttChartSortMode;
    /** @description A getter that returns a flat structure as an array of all tasks inside the element. */
    tasks: GanttChartTask[];
    /** @description Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor. */
    taskColumns: GanttChartTaskColumn[];
    /** @description Determines the min size of the Task Panel. Used when Resource Panel is visible. */
    taskPanelMin: any;
    /** @description Determines the size of the Task Panel. Used when Resource Panel is visible. */
    taskPanelSize: any;
    /** @description Determines the min width of the timeline. */
    timelineMin: any;
    /** @description Determines the min width of the task tree. */
    treeMin: any;
    /** @description Determines the size(width) of the task tree. */
    treeSize: any;
    /** @description A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element. */
    timelineHeaderFormatFunction: any;
    /** @description Determines weather or not vertical scrollbar is shown. */
    verticalScrollBarVisibility: VerticalScrollBarVisibility;
    /** @description Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
    view: GanttChartView;
    /** @description Determines the format of the dates inside the timeline header when they represent years. */
    yearFormat: YearFormat;
    /** @description Determines the format of the dates inside the timeline header when they represent weeks.  */
    weekFormat: WeekFormat;
    /** @description Sets or gets the element's visual theme.  */
    theme: string;
    /** @description Sets or gets if the element can be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when a batch update was started after executing the beginUpdate method.
    *  @param event. The custom event. 	*/
    onBeginUpdate: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a batch update was ended from after executing the endUpdate method.
    *  @param event. The custom event. 	*/
    onEndUpdate: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Task is selected/unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
    *   value - The index of the new selected task.
    *   oldValue - The index of the previously selected task.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	originalEvent)
    *   item - The item that was clicked. It cam be a task, resource or connection.
    *   type - The type of item. Possible values are: 'task', 'resource', 'connection'.
    *   originalEvent - The original DOM event.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Task/Resource/Connection is inserted.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemInsert: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Task/Resource/Connection is removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemRemove: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Task/Resource/Connection is updated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemUpdate: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
    *   index - The index of the task which progress is going to be changed.
    *   progress - The progress of the task before it is changed.
    */
    onProgressChangeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the progress of a task is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
    *   index - The index of the task which progress is has been changed.
    *   progress - The progress of the task after it was changed.
    */
    onProgressChangeEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that is going to be dragged.
    *   dateStart - The start date of the task that is going to be dragged.
    *   dateEnd - The end date of the task that is going to be dragged.
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when dragging of a task finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that is was dragged.
    *   dateStart - The start date of the task that is was dragged.
    *   dateEnd - The end date of the task that is was dragged.
    */
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that is going to be resized.
    *   dateStart - The start date of the task that is going to be resized.
    *   dateEnd - The end date of the task that is going to be resized.
    */
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the resizing of a task finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that was resized.
    *   dateStart - The start date of the task that was resized.
    *   dateEnd - The end date of the task that was resized.
    */
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
    *   startIndex - The index of the task that a connection is started from.
    */
    onConnectionStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user completes a connection between two tasks.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex, 	endIndex, 	type)
    *   startIndex - The index of the task that a connection is started from.
    *   endIndex - The index of the task that a connection is started from.
    *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
    */
    onConnectionEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the Timeline has been scrolled to the bottom.
    *  @param event. The custom event. 	*/
    onScrollBottomReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the Timeline has been scrolled to the top.
    *  @param event. The custom event. 	*/
    onScrollTopReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
    *   target - The instance of the window that is going to open.
    *   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
    */
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window for task editing is opened( visible ).
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
    *   target - The instance of the window that is going to close.
    *   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
    */
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window for task editing is closed( hidden )
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Project is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	label, 	value)
    *   index - The index of the collapsed project.
    *   label - The label of the collapsed project.
    *   value - The value of the collapsed project.
    */
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Project is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The index of the expanded project.
    *   label - The label of the expanded project.
    *   value - The value of the expanded project.
    */
    onExpand: EventEmitter<CustomEvent>;
    /** @description Adds a task as the last item of a Project.
    * @param {any} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    addTaskTo(taskIndex: any, projectIndex: string | number): void;
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** @description Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
    */
    endUpdate(): void;
    /** @description Refereshes the GanttChart after resizing by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
    */
    refresh(fullRefresh?: boolean): void;
    /** @description Removes all connections between tasks.
    */
    removeAllConnections(): void;
    /** @description Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    * @returns {any}
  */
    removeConnection(startTaskIndex: any, taskEndIndex?: any, connectionType?: any): Promise<any>;
    /** @description Removes all connections of a task or between two tasks if the second argument is provided and valid.
    * @param {number} taskStartIndex. The index of the start task.
    * @param {number} taskEndIndex?. The index of the end task.
    * @returns {string}
  */
    removeTaskConnection(taskStartIndex: any, taskEndIndex?: any): Promise<any>;
    /** @description Removes all tasks.
    */
    clearTasks(): void;
    /** @description Removes all resources.
    */
    clearResources(): void;
    /** @description Creates a connection between two tasks.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    */
    createConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): void;
    /** @description Collapses an expanded project with tasks.
    * @param {string | number} index. The index of a project task that should be collapsed.
    */
    collapse(index: string | number): void;
    /** @description Makes sure a Task is visible by scrolling to it.
    * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
    */
    ensureVisible(item: string | number): void;
    /** @description Expands a collapsed project with tasks.
    * @param {string | number} index. The index of a project task that should be expanded.
    */
    expand(index: string | number): void;
    /** @description Exports the data of Tree of the GanttChart.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
    */
    exportData(dataFormat: string, callback?: any): void;
    /** @description Returns a JSON representation of all tasks inside the element along with their connections and settings.
    * @returns {any[]}
  */
    getState(): Promise<any>;
    /** @description Returns the Tree path of a task/resource.
    * @param {any} item. A GattChartTask/GanttChartResource item object or index.
    * @returns {string}
  */
    getItemPath(item: any): Promise<any>;
    /** @description Returns the index of a task.
    * @param {any} task. A GattChartTask object.
    * @returns {number}
  */
    getTaskIndex(task: any): Promise<any>;
    /** @description Returns the tree path of a task.
    * @param {any} task. A GanttChartTask object.
    * @returns {string}
  */
    getTaskPath(task: any): Promise<any>;
    /** @description Returns teh Project of a task if any.
    * @param {any} task. A GantChartTask object.
    * @returns {any}
  */
    getTaskProject(task: any): Promise<any>;
    /** @description Returns the index of a resource.
    * @param {any} resource. A GanttChartResource object.
    * @returns {number}
  */
    getResourceIndex(resource: any): Promise<any>;
    /** @description Returns the tasks that are assigned to the resource.
    * @param {any} resource. A GanttChartResource object.
    * @returns {any}
  */
    getResourceTasks(resource: any): Promise<any>;
    /** @description Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
    */
    clearSelection(): void;
    /** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    clearState(): void;
    /** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    loadState(state?: any[]): void;
    /** @description Saves the current settings of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    saveState(state?: any[]): void;
    /** @description Inserts a new task in the timeline.
    * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task.
    */
    insertTask(index: string | number, taskObject: any): void;
    /** @description Updates a task inside the timeline.
    * @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    updateTask(index: any, taskObject: any): void;
    /** @description Removes a task from the timeline.
    * @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    removeTask(index: any): void;
    /** @description Inserts a new resource.
    * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} resourceObject?. An object describing a Gantt Chart resource.
    */
    insertResource(resourceId: string | number, resourceObject?: any): void;
    /** @description Updates an existing resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
    */
    updateResource(resourceId: any, taskObject: any): void;
    /** @description Removes a resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    */
    removeResource(resourceId: any): void;
    /** @description Opens the popup Window for specific task Editing.
    * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
    */
    openWindow(index: string | number): void;
    /** @description Closes an opened popup Window. The method will close any opened popup window inside the element.
    */
    closeWindow(): void;
    /** @description Prepares the GanttChart for printing by opening the browser's Print Preview.
    */
    print(): void;
    /** @description Sorts the GanttChart tasks/resources if sortable is enabled.
    * @param {any} columns?. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
    */
    sort(columns?: any): void;
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
