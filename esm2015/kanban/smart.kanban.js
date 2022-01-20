import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let KanbanComponent = class KanbanComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a task has been updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
        *   oldValue - The old data of the task
        *   task - The HTML element of the task whose data has been changed
        *   value - The new data of the task
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when a column is added.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        this.onColumnAdd = new EventEmitter();
        /** @description This event is triggered when a column is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        this.onColumnRemove = new EventEmitter();
        /** @description This event is triggered when a column is reordered.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index, 	column)
        *   oldIndex - The column's old index.
        *   index - The column's new index.
        *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
        */
        this.onColumnReorder = new EventEmitter();
        /** @description This event is triggered when a column is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	column)
        *   oldValue - The column's old label.
        *   value - The column's new label.
        *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
        */
        this.onColumnUpdate = new EventEmitter();
        /** @description This event is triggered when a column header is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        this.onColumnClick = new EventEmitter();
        /** @description This event is triggered when a column header is double clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        this.onColumnDoubleClick = new EventEmitter();
        /** @description This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
        *   container - the Kanban the dragged task(s) is dropped to
        *   data - an object with additional drag details
        *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
        *   items - an array with all dragged tasks
        *   originalEvent - the original, browser, event that initiates the drag operation
        *   previousContainer - the Kanban the dragged item(s) is dragged from
        *   target - the element the dragged tasks are dropped to
        */
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when the user is dragging a task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
        *   data - an object with additional drag details
        *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
        *   items - an array with all dragged tasks
        *   originalEvent - the original, browser, event that initiates the drag operation
        */
        this.onDragging = new EventEmitter();
        /** @description This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
        *   container - the Kanban the dragged task(s) is dragged from
        *   data - an object with additional drag details
        *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
        *   items - an array with all dragged tasks
        *   originalEvent - the original, browser, event that initiates the drag operation
        *   previousContainer - the Kanban the dragged item(s) is dragged from
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when a filter has been applied.
        *  @param event. The custom event. 	*/
        this.onFilter = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
        *   comment - The comment that is about to be removed (if applicable).
        *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
        *   task - The task that is about to be edited or removed (if applicable).
        */
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when sorting has been applied.
        *  @param event. The custom event. 	*/
        this.onSort = new EventEmitter();
        /** @description This event is triggered when a new task is added.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
        *   value - The task data that is added to the Kanban.
        */
        this.onTaskAdd = new EventEmitter();
        /** @description This event is triggered when a task is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
        *   value - The task data that is removed from the Kanban.
        */
        this.onTaskRemove = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-kanban');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables column reordering. When this property is set to true and allowDrag is enabled, users will be able to reoder columns through drag & drop. For example: Click and drag the first column's header and drop it over another column. */
    get allowColumnReorder() {
        return this.nativeElement ? this.nativeElement.allowColumnReorder : undefined;
    }
    set allowColumnReorder(value) {
        this.nativeElement ? this.nativeElement.allowColumnReorder = value : undefined;
    }
    /** @description Enables or disables column editing. When this property is set to true, users will be able to dynamically change the column's header label by double clicking on it. */
    get allowColumnEdit() {
        return this.nativeElement ? this.nativeElement.allowColumnEdit : undefined;
    }
    set allowColumnEdit(value) {
        this.nativeElement ? this.nativeElement.allowColumnEdit = value : undefined;
    }
    /** @description Enables or disables column removing. When this property is set to true, users will be able to dynamically remove a column through the column actions menu. the 'columnActions' property should be true. */
    get allowColumnRemove() {
        return this.nativeElement ? this.nativeElement.allowColumnRemove : undefined;
    }
    set allowColumnRemove(value) {
        this.nativeElement ? this.nativeElement.allowColumnRemove = value : undefined;
    }
    /** @description Enables or disables column hiding. When this property is set to true, users will be able to dynamically hide a column through the column actions menu. the 'columnActions' property should be true. */
    get allowColumnHide() {
        return this.nativeElement ? this.nativeElement.allowColumnHide : undefined;
    }
    set allowColumnHide(value) {
        this.nativeElement ? this.nativeElement.allowColumnHide = value : undefined;
    }
    /** @description Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false. */
    get addNewButton() {
        return this.nativeElement ? this.nativeElement.addNewButton : undefined;
    }
    set addNewButton(value) {
        this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
    }
    /** @description Determines whether the add button is visible in the column header and/or after the tasks in the column. */
    get addNewButtonDisplayMode() {
        return this.nativeElement ? this.nativeElement.addNewButtonDisplayMode : undefined;
    }
    set addNewButtonDisplayMode(value) {
        this.nativeElement ? this.nativeElement.addNewButtonDisplayMode = value : undefined;
    }
    /** @description Sets or gets whether a column with a button for adding new status columns to the Kanban will be displayed. */
    get addNewColumn() {
        return this.nativeElement ? this.nativeElement.addNewColumn : undefined;
    }
    set addNewColumn(value) {
        this.nativeElement ? this.nativeElement.addNewColumn = value : undefined;
    }
    /** @description Allows the dragging of tasks. */
    get allowDrag() {
        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
    }
    set allowDrag(value) {
        this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
    }
    /** @description Allows the dropping of tasks. */
    get allowDrop() {
        return this.nativeElement ? this.nativeElement.allowDrop : undefined;
    }
    set allowDrop(value) {
        this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
    }
    /** @description Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded. */
    get autoLoadState() {
        return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
    }
    set autoLoadState(value) {
        this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
    }
    /** @description Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved. */
    get autoSaveState() {
        return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
    }
    set autoSaveState(value) {
        this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
    }
    /** @description Allows collapsing the card content. */
    get collapsible() {
        return this.nativeElement ? this.nativeElement.collapsible : undefined;
    }
    set collapsible(value) {
        this.nativeElement ? this.nativeElement.collapsible = value : undefined;
    }
    /** @description Displays colors in the column header, when the column's color property is set. */
    get columnColors() {
        return this.nativeElement ? this.nativeElement.columnColors : undefined;
    }
    set columnColors(value) {
        this.nativeElement ? this.nativeElement.columnColors = value : undefined;
    }
    /** @description Describes the columns properties. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Toggles the visibility of the column actions icon. */
    get columnActions() {
        return this.nativeElement ? this.nativeElement.columnActions : undefined;
    }
    set columnActions(value) {
        this.nativeElement ? this.nativeElement.columnActions = value : undefined;
    }
    /** @description Determines whether task count information is displayed in column headers. */
    get columnSummary() {
        return this.nativeElement ? this.nativeElement.columnSummary : undefined;
    }
    set columnSummary(value) {
        this.nativeElement ? this.nativeElement.columnSummary = value : undefined;
    }
    /** @description Determines whether a column header has a template. You can pass 'string', 'function' or HTMLTemplateElement as a value. */
    get columnHeaderTemplate() {
        return this.nativeElement ? this.nativeElement.columnHeaderTemplate : undefined;
    }
    set columnHeaderTemplate(value) {
        this.nativeElement ? this.nativeElement.columnHeaderTemplate = value : undefined;
    }
    /** @description Determines the column edit behavior. With the 'header' option, edit starts on double click on the column's label. In 'menu' mode, edit is allowed from the 'columnActions' menu. In 'headerAndMenu' option, column editing includes both options. */
    get columnEditMode() {
        return this.nativeElement ? this.nativeElement.columnEditMode : undefined;
    }
    set columnEditMode(value) {
        this.nativeElement ? this.nativeElement.columnEditMode = value : undefined;
    }
    /** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
    get currentUser() {
        return this.nativeElement ? this.nativeElement.currentUser : undefined;
    }
    set currentUser(value) {
        this.nativeElement ? this.nativeElement.currentUser = value : undefined;
    }
    /** @description Determines the data source to be visualized in the kanban board. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Determines the the relation (mapping) between the Kanban's default fields (keywords) and the data fields from the data source. Not necessary if both match. Only some of the default mapping can be overwritten. */
    get dataSourceMap() {
        return this.nativeElement ? this.nativeElement.dataSourceMap : undefined;
    }
    set dataSourceMap(value) {
        this.nativeElement ? this.nativeElement.dataSourceMap = value : undefined;
    }
    /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started. */
    get dragOffset() {
        return this.nativeElement ? this.nativeElement.dragOffset : undefined;
    }
    set dragOffset(value) {
        this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
    }
    /** @description Sets or gets whether tasks can be edited (including the assigning of users to tasks). */
    get editable() {
        return this.nativeElement ? this.nativeElement.editable : undefined;
    }
    set editable(value) {
        this.nativeElement ? this.nativeElement.editable = value : undefined;
    }
    /** @description Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors. */
    get formatStringDate() {
        return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
    }
    set formatStringDate(value) {
        this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
    }
    /** @description Sets or gets the format string of comments time stamp. */
    get formatStringTime() {
        return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
    }
    set formatStringTime(value) {
        this.nativeElement ? this.nativeElement.formatStringTime = value : undefined;
    }
    /** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
    get headerPosition() {
        return this.nativeElement ? this.nativeElement.headerPosition : undefined;
    }
    set headerPosition(value) {
        this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
    }
    /** @description Sets or gets the way column hierarchy is represented. */
    get hierarchy() {
        return this.nativeElement ? this.nativeElement.hierarchy : undefined;
    }
    set hierarchy(value) {
        this.nativeElement ? this.nativeElement.hierarchy = value : undefined;
    }
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines selection mode. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Sets or gets whether the tasks history will be stored and displayed in the task dialog. */
    get storeHistory() {
        return this.nativeElement ? this.nativeElement.storeHistory : undefined;
    }
    set storeHistory(value) {
        this.nativeElement ? this.nativeElement.storeHistory = value : undefined;
    }
    /** @description Sets or gets the task history items that will be stored when storeHistory is enabled. */
    get storeHistoryItems() {
        return this.nativeElement ? this.nativeElement.storeHistoryItems : undefined;
    }
    set storeHistoryItems(value) {
        this.nativeElement ? this.nativeElement.storeHistoryItems = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present. */
    get swimlanes() {
        return this.nativeElement ? this.nativeElement.swimlanes : undefined;
    }
    set swimlanes(value) {
        this.nativeElement ? this.nativeElement.swimlanes = value : undefined;
    }
    /** @description Sets or gets the index of the column at which to start the swimlanes. */
    get swimlanesFrom() {
        return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
    }
    set swimlanesFrom(value) {
        this.nativeElement ? this.nativeElement.swimlanesFrom = value : undefined;
    }
    /** @description Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column. */
    get swimlanesTo() {
        return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
    }
    set swimlanesTo(value) {
        this.nativeElement ? this.nativeElement.swimlanesTo = value : undefined;
    }
    /** @description Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed. */
    get tags() {
        return this.nativeElement ? this.nativeElement.tags : undefined;
    }
    set tags(value) {
        this.nativeElement ? this.nativeElement.tags = value : undefined;
    }
    /** @description Toggles the visibility of the task actions icon. */
    get taskActions() {
        return this.nativeElement ? this.nativeElement.taskActions : undefined;
    }
    set taskActions(value) {
        this.nativeElement ? this.nativeElement.taskActions = value : undefined;
    }
    /** @description Toggles the visibility of the task comments icon. */
    get taskComments() {
        return this.nativeElement ? this.nativeElement.taskComments : undefined;
    }
    set taskComments(value) {
        this.nativeElement ? this.nativeElement.taskComments = value : undefined;
    }
    /** @description Toggles the visibility of the task due icon. */
    get taskDue() {
        return this.nativeElement ? this.nativeElement.taskDue : undefined;
    }
    set taskDue(value) {
        this.nativeElement ? this.nativeElement.taskDue = value : undefined;
    }
    /** @description Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
    get taskPosition() {
        return this.nativeElement ? this.nativeElement.taskPosition : undefined;
    }
    set taskPosition(value) {
        this.nativeElement ? this.nativeElement.taskPosition = value : undefined;
    }
    /** @description Toggles the visibility of the task priority icon (shown when priority is low or high). */
    get taskPriority() {
        return this.nativeElement ? this.nativeElement.taskPriority : undefined;
    }
    set taskPriority(value) {
        this.nativeElement ? this.nativeElement.taskPriority = value : undefined;
    }
    /** @description Toggles the visibility of task progress bar and the completed sub-tasks label. */
    get taskProgress() {
        return this.nativeElement ? this.nativeElement.taskProgress : undefined;
    }
    set taskProgress(value) {
        this.nativeElement ? this.nativeElement.taskProgress = value : undefined;
    }
    /** @description Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. */
    get taskCustomFields() {
        return this.nativeElement ? this.nativeElement.taskCustomFields : undefined;
    }
    set taskCustomFields(value) {
        this.nativeElement ? this.nativeElement.taskCustomFields = value : undefined;
    }
    /** @description The task's background color depends on the task's color property. By default the color is rendered within the task's left border. */
    get taskColorEntireSurface() {
        return this.nativeElement ? this.nativeElement.taskColorEntireSurface : undefined;
    }
    set taskColorEntireSurface(value) {
        this.nativeElement ? this.nativeElement.taskColorEntireSurface = value : undefined;
    }
    /** @description Displays an input in the task's card for adding dynamically a sub task. The 'taskSubTasks' property should be set to a value different than 'none'. */
    get taskSubTasksInput() {
        return this.nativeElement ? this.nativeElement.taskSubTasksInput : undefined;
    }
    set taskSubTasksInput(value) {
        this.nativeElement ? this.nativeElement.taskSubTasksInput = value : undefined;
    }
    /** @description Sets the rendering mode of sub tasks. 'none' - default value. Sub tasks are displayed only in the edit dialog. 'onePerRow' - all sub tasks are displayed in the task's card. 'onlyUnfinished' - only tasks which are not completed are displayed in the task's card. */
    get taskSubTasks() {
        return this.nativeElement ? this.nativeElement.taskSubTasks : undefined;
    }
    set taskSubTasks(value) {
        this.nativeElement ? this.nativeElement.taskSubTasks = value : undefined;
    }
    /** @description Toggles the visibility of task tags. */
    get taskTags() {
        return this.nativeElement ? this.nativeElement.taskTags : undefined;
    }
    set taskTags(value) {
        this.nativeElement ? this.nativeElement.taskTags = value : undefined;
    }
    /** @description Toggles the visibility of the task user icon. */
    get taskUserIcon() {
        return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
    }
    set taskUserIcon(value) {
        this.nativeElement ? this.nativeElement.taskUserIcon = value : undefined;
    }
    /** @description Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed. */
    get textTemplate() {
        return this.nativeElement ? this.nativeElement.textTemplate : undefined;
    }
    set textTemplate(value) {
        this.nativeElement ? this.nativeElement.textTemplate = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Determines whether the priority list (as defined by the priority property) will be shown when clicking the priority icon. Only applicable if editable privileges are enabled. */
    get priorityList() {
        return this.nativeElement ? this.nativeElement.priorityList : undefined;
    }
    set priorityList(value) {
        this.nativeElement ? this.nativeElement.priorityList = value : undefined;
    }
    /** @description Determines the priority Kanban tasks can be assigned to. Example: [{label: 'low', value: 'low'}, {label: 'high', value: 'high'}] */
    get priority() {
        return this.nativeElement ? this.nativeElement.priority : undefined;
    }
    set priority(value) {
        this.nativeElement ? this.nativeElement.priority = value : undefined;
    }
    /** @description Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled. */
    get userList() {
        return this.nativeElement ? this.nativeElement.userList : undefined;
    }
    set userList(value) {
        this.nativeElement ? this.nativeElement.userList = value : undefined;
    }
    /** @description Determines the users Kanban tasks can be assigned to and their characteristics and privileges. */
    get users() {
        return this.nativeElement ? this.nativeElement.users : undefined;
    }
    set users(value) {
        this.nativeElement ? this.nativeElement.users = value : undefined;
    }
    /** @description Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    addFilter(filters, operator) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(filters, operator);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(filters, operator);
            });
        }
    }
    /** @description Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    addSort(dataFields, orderBy) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataFields, orderBy);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataFields, orderBy);
            });
        }
    }
    /** @description Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
    * @param {any} data?. An object containing the new task's data
    */
    addTask(data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTask(data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTask(data);
            });
        }
    }
    /** @description Adds a column to a Kanban. If no data is specified, an empty column is added.
    * @param {any} data?. An object containing the new column's data
    */
    addColumn(data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColumn(data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addColumn(data);
            });
        }
    }
    /** @description Begins an edit operation
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    beginEdit(task) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(task);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(task);
            });
        }
    }
    /** @description Ends the current edit operation and discards changes
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
    /** @description Closes any open header panel (drop down)
    */
    closePanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closePanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closePanel();
            });
        }
    }
    /** @description Collapses a Kanban column.
    * @param {number | string} column. The index or dataField of the column to collapse
    */
    collapse(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(column);
            });
        }
    }
    /** @description Hides a Kanban column.
    * @param {number | string} column. The index or dataField of the column to hide
    */
    hide(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide(column);
            });
        }
    }
    /** @description Creates a copy of a task in the same column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    copyTask(task) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyTask(task);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.copyTask(task);
            });
        }
    }
    /** @description Ends the current edit operation and saves changes
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
    /** @description Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @returns {HTMLElement}
  */
    ensureVisible(task) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.ensureVisible(task);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Expands a Kanban column.
    * @param {number | string} column. The index or dataField of the column to expand
    */
    expand(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(column);
            });
        }
    }
    /** @description Expands all Kanban columns.
    */
    expandAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAll();
            });
        }
    }
    /** @description Exports the Kanban's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat, fileName, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.exportData(dataFormat, fileName, callback);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the data of a column. The returned value is a JSON object with the following fields: 'label', 'dataField', 'collapsed', 'collapsible', 'allowRemove', 'editable', 'reorder', 'orientation'.
    * @param {string} dataField. The column's data field
    * @returns {any}
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
    /** @description Gets the Kanban's state.
    * @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
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
    /** @description Loads the Kanban's state.
    * @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
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
    /** @description Moves a task to a different column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {string} newStatus. The new status of the task (its new column's dataField)
    */
    moveTask(task, newStatus) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveTask(task, newStatus);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveTask(task, newStatus);
            });
        }
    }
    /** @description Opens the "Customize tasks" header panel (drop down)
    */
    openCustomizePanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openCustomizePanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openCustomizePanel();
            });
        }
    }
    /** @description Opens the "Filter" header panel (drop down)
    */
    openFilterPanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openFilterPanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openFilterPanel();
            });
        }
    }
    /** @description Opens the "Sort" header panel (drop down)
    */
    openSortPanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openSortPanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openSortPanel();
            });
        }
    }
    /** @description Removes filtering
    */
    removeFilter() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter();
            });
        }
    }
    /** @description Removes sorting
    */
    removeSort() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort();
            });
        }
    }
    /** @description Removes a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
    */
    removeTask(task, prompt) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(task, prompt);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(task, prompt);
            });
        }
    }
    /** @description Removes a column.
    * @param {string} dataField. The column's data field
    */
    removeColumn(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeColumn(dataField);
            });
        }
    }
    /** @description Saves the Kanban's state to the browser's localStorage.
    */
    saveState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }
    /** @description Shows a Kanban column.
    * @param {number | string} column. The index or dataField of the column to show
    */
    show(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show(column);
            });
        }
    }
    /** @description Shows all Kanban columns.
    */
    showAllColumns() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showAllColumns();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showAllColumns();
            });
        }
    }
    /** @description Updates a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {{}} newData. The new data to visualize in the task.
    */
    updateTask(task, newData) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(task, newData);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(task, newData);
            });
        }
    }
    /** @description Updates a column.
    * @param {string} dataField. The new column's data field
    * @param {{}} newData. The new data to visualize in the column.
    */
    updateColumn(dataField, newData) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateColumn(dataField, newData);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateColumn(dataField, newData);
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['columnAddHandler'] = (event) => { that.onColumnAdd.emit(event); };
        that.nativeElement.addEventListener('columnAdd', that.eventHandlers['columnAddHandler']);
        that.eventHandlers['columnRemoveHandler'] = (event) => { that.onColumnRemove.emit(event); };
        that.nativeElement.addEventListener('columnRemove', that.eventHandlers['columnRemoveHandler']);
        that.eventHandlers['columnReorderHandler'] = (event) => { that.onColumnReorder.emit(event); };
        that.nativeElement.addEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
        that.eventHandlers['columnUpdateHandler'] = (event) => { that.onColumnUpdate.emit(event); };
        that.nativeElement.addEventListener('columnUpdate', that.eventHandlers['columnUpdateHandler']);
        that.eventHandlers['columnClickHandler'] = (event) => { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['columnDoubleClickHandler'] = (event) => { that.onColumnDoubleClick.emit(event); };
        that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = (event) => { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['filterHandler'] = (event) => { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['sortHandler'] = (event) => { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        that.eventHandlers['taskAddHandler'] = (event) => { that.onTaskAdd.emit(event); };
        that.nativeElement.addEventListener('taskAdd', that.eventHandlers['taskAddHandler']);
        that.eventHandlers['taskRemoveHandler'] = (event) => { that.onTaskRemove.emit(event); };
        that.nativeElement.addEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['columnAddHandler']) {
            that.nativeElement.removeEventListener('columnAdd', that.eventHandlers['columnAddHandler']);
        }
        if (that.eventHandlers['columnRemoveHandler']) {
            that.nativeElement.removeEventListener('columnRemove', that.eventHandlers['columnRemoveHandler']);
        }
        if (that.eventHandlers['columnReorderHandler']) {
            that.nativeElement.removeEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
        }
        if (that.eventHandlers['columnUpdateHandler']) {
            that.nativeElement.removeEventListener('columnUpdate', that.eventHandlers['columnUpdateHandler']);
        }
        if (that.eventHandlers['columnClickHandler']) {
            that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        }
        if (that.eventHandlers['columnDoubleClickHandler']) {
            that.nativeElement.removeEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['draggingHandler']) {
            that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['sortHandler']) {
            that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
        }
        if (that.eventHandlers['taskAddHandler']) {
            that.nativeElement.removeEventListener('taskAdd', that.eventHandlers['taskAddHandler']);
        }
        if (that.eventHandlers['taskRemoveHandler']) {
            that.nativeElement.removeEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);
        }
    }
};
KanbanComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowColumnReorder", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowColumnEdit", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowColumnRemove", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowColumnHide", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "addNewButton", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "addNewButtonDisplayMode", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "addNewColumn", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowDrag", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowDrop", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "autoLoadState", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "autoSaveState", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "collapsible", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnColors", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columns", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnActions", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnSummary", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnHeaderTemplate", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnEditMode", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "currentUser", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "dataSourceMap", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "dragOffset", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "editable", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "formatStringDate", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "formatStringTime", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "headerPosition", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "hierarchy", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "selectionMode", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "storeHistory", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "storeHistoryItems", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "swimlanes", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "swimlanesFrom", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "swimlanesTo", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "tags", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskActions", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskComments", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskDue", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskPosition", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskPriority", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskProgress", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskCustomFields", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskColorEntireSurface", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskSubTasksInput", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskSubTasks", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskTags", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "taskUserIcon", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "textTemplate", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "priorityList", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "priority", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "userList", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "users", null);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onClose", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onClosing", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnAdd", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnRemove", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnReorder", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnUpdate", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnClick", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnDoubleClick", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onDragEnd", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onDragging", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onDragStart", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onFilter", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onOpen", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onOpening", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onSort", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onTaskAdd", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onTaskRemove", void 0);
KanbanComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-kanban, [smart-kanban]'
    })
], KanbanComponent);
export { KanbanComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQua2FuYmFuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2thbmJhbi8iLCJzb3VyY2VzIjpbInNtYXJ0LmthbmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0lBQy9DLFlBQVksR0FBdUI7UUFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUE0ZmxDOzs7OztVQUtFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzhDQUNzQztRQUM1QixZQUFPLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEU7OENBQ3NDO1FBQzVCLGNBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs7Ozs7VUFLRTtRQUNRLGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7O1VBS0U7UUFDUSxtQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7OztVQUtFO1FBQ1Esb0JBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7Ozs7VUFLRTtRQUNRLG1CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7Ozs7O1VBS0U7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlB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QUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsbVNBQW1TO0lBRW5TLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsK0VBQStFO0lBRS9FLElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsaU1BQWlNO0lBRWpNLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFB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RTtxREFBOEQ7QUFob0IzRCxlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw4QkFBOEI7S0FDeEMsQ0FBQztHQUVXLGVBQWUsQ0Fxd0MzQjtTQXJ3Q1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbmJhbiB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgS2FuYmFuQWRkTmV3QnV0dG9uRGlzcGxheU1vZGUsIEthbmJhbkNvbHVtbk9yaWVudGF0aW9uLCBLYW5iYW5Db2x1bW5FZGl0TW9kZSwgS2FuYmFuRGF0YVNvdXJjZVByaW9yaXR5LCBLYW5iYW5IZWFkZXJQb3NpdGlvbiwgS2FuYmFuSGllcmFyY2h5LCBLYW5iYW5TZWxlY3Rpb25Nb2RlLCBLYW5iYW5UYXNrUG9zaXRpb24sIEthbmJhblRhc2tTdWJUYXNrcywgS2FuYmFuQ29sdW1uLCBLYW5iYW5EYXRhU291cmNlLCBLYW5iYW5Td2ltbGFuZSwgS2FuYmFuUHJpb3JpdHksIEthbmJhblVzZXIsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IERhdGFBZGFwdGVyIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgS2FuYmFuQWRkTmV3QnV0dG9uRGlzcGxheU1vZGUsIEthbmJhbkNvbHVtbk9yaWVudGF0aW9uLCBLYW5iYW5Db2x1bW5FZGl0TW9kZSwgS2FuYmFuRGF0YVNvdXJjZVByaW9yaXR5LCBLYW5iYW5IZWFkZXJQb3NpdGlvbiwgS2FuYmFuSGllcmFyY2h5LCBLYW5iYW5TZWxlY3Rpb25Nb2RlLCBLYW5iYW5UYXNrUG9zaXRpb24sIEthbmJhblRhc2tTdWJUYXNrcywgS2FuYmFuQ29sdW1uLCBLYW5iYW5EYXRhU291cmNlLCBLYW5iYW5Td2ltbGFuZSwgS2FuYmFuUHJpb3JpdHksIEthbmJhblVzZXIsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEthbmJhbiB9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1rYW5iYW4sIFtzbWFydC1rYW5iYW5dJ1xufSlcblxuZXhwb3J0IGNsYXNzIEthbmJhbkNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxLYW5iYW4+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBLYW5iYW47XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IEthbmJhbjtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8S2FuYmFuPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWthbmJhbicpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBjb2x1bW4gcmVvcmRlcmluZy4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlIGFuZCBhbGxvd0RyYWcgaXMgZW5hYmxlZCwgdXNlcnMgd2lsbCBiZSBhYmxlIHRvIHJlb2RlciBjb2x1bW5zIHRocm91Z2ggZHJhZyAmIGRyb3AuIEZvciBleGFtcGxlOiBDbGljayBhbmQgZHJhZyB0aGUgZmlyc3QgY29sdW1uJ3MgaGVhZGVyIGFuZCBkcm9wIGl0IG92ZXIgYW5vdGhlciBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0NvbHVtblJlb3JkZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtblJlb3JkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93Q29sdW1uUmVvcmRlcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtblJlb3JkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBjb2x1bW4gZWRpdGluZy4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB1c2VycyB3aWxsIGJlIGFibGUgdG8gZHluYW1pY2FsbHkgY2hhbmdlIHRoZSBjb2x1bW4ncyBoZWFkZXIgbGFiZWwgYnkgZG91YmxlIGNsaWNraW5nIG9uIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dDb2x1bW5FZGl0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5FZGl0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0NvbHVtbkVkaXQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5FZGl0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgY29sdW1uIHJlbW92aW5nLiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHVzZXJzIHdpbGwgYmUgYWJsZSB0byBkeW5hbWljYWxseSByZW1vdmUgYSBjb2x1bW4gdGhyb3VnaCB0aGUgY29sdW1uIGFjdGlvbnMgbWVudS4gdGhlICdjb2x1bW5BY3Rpb25zJyBwcm9wZXJ0eSBzaG91bGQgYmUgdHJ1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93Q29sdW1uUmVtb3ZlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5SZW1vdmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93Q29sdW1uUmVtb3ZlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uUmVtb3ZlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgY29sdW1uIGhpZGluZy4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB1c2VycyB3aWxsIGJlIGFibGUgdG8gZHluYW1pY2FsbHkgaGlkZSBhIGNvbHVtbiB0aHJvdWdoIHRoZSBjb2x1bW4gYWN0aW9ucyBtZW51LiB0aGUgJ2NvbHVtbkFjdGlvbnMnIHByb3BlcnR5IHNob3VsZCBiZSB0cnVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dDb2x1bW5IaWRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5IaWRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0NvbHVtbkhpZGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5IaWRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNvbHVtbiBidXR0b25zIGZvciBhZGRpbmcgdGFza3MuIEEgcGFydGljdWxhciBidXR0b24gY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgYWRkTmV3QnV0dG9uIGluIHRoZSBjb2x1bW4ncyBkZWZpbml0aW9uIHRvIGZhbHNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWRkTmV3QnV0dG9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3QnV0dG9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3QnV0dG9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgYWRkIGJ1dHRvbiBpcyB2aXNpYmxlIGluIHRoZSBjb2x1bW4gaGVhZGVyIGFuZC9vciBhZnRlciB0aGUgdGFza3MgaW4gdGhlIGNvbHVtbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlKCk6IEthbmJhbkFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdCdXR0b25EaXNwbGF5TW9kZSh2YWx1ZTogS2FuYmFuQWRkTmV3QnV0dG9uRGlzcGxheU1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3QnV0dG9uRGlzcGxheU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgYSBjb2x1bW4gd2l0aCBhIGJ1dHRvbiBmb3IgYWRkaW5nIG5ldyBzdGF0dXMgY29sdW1ucyB0byB0aGUgS2FuYmFuIHdpbGwgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWRkTmV3Q29sdW1uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3Q29sdW1uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdDb2x1bW4odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3Q29sdW1uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0aGUgZHJhZ2dpbmcgb2YgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0RyYWcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0RyYWcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93RHJhZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0RyYWcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRoZSBkcm9wcGluZyBvZiB0YXNrcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93RHJvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJvcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dEcm9wKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJvcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGF1dG8gbG9hZCBzdGF0ZSBmcm9tIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBJbmZvcm1hdGlvbiBhYm91dCB0YXNrcyBhbmQgdGhlaXIgcG9zaXRpb24gYW5kIHNlbGVjdGVkIHN0YXRlLCBmaWx0ZXJpbmcsIHNvcnRpbmcsIGNvbGxhcHNlZCBjb2x1bW5zLCBhcyB3ZWxsIGFzIHRoZSB2YWx1ZXMgb2YgdGhlIHByb3BlcnRpZXMgdGFza0FjdGlvbnMsIHRhc2tDb21tZW50cywgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvZ3Jlc3MsIHRhc2tUYWdzLCBhbmQgdGFza1VzZXJJY29uIGlzIGxvYWRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvTG9hZFN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBhdXRvIHNhdmUgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuIEluZm9ybWF0aW9uIGFib3V0IHRhc2tzIGFuZCB0aGVpciBwb3NpdGlvbiBhbmQgc2VsZWN0ZWQgc3RhdGUsIGZpbHRlcmluZywgc29ydGluZywgY29sbGFwc2VkIGNvbHVtbnMsIGFzIHdlbGwgYXMgdGhlIHZhbHVlcyBvZiB0aGUgcHJvcGVydGllcyB0YXNrQWN0aW9ucywgdGFza0NvbW1lbnRzLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksIHRhc2tQcm9ncmVzcywgdGFza1RhZ3MsIGFuZCB0YXNrVXNlckljb24gaXMgc2F2ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2F2ZVN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NhdmVTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyBjb2xsYXBzaW5nIHRoZSBjYXJkIGNvbnRlbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2xsYXBzaWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNpYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xsYXBzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzaWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBjb2xvcnMgaW4gdGhlIGNvbHVtbiBoZWFkZXIsIHdoZW4gdGhlIGNvbHVtbidzIGNvbG9yIHByb3BlcnR5IGlzIHNldC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkNvbG9ycygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkNvbG9ycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uQ29sb3JzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkNvbG9ycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGNvbHVtbnMgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbnMoKTogS2FuYmFuQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1ucyh2YWx1ZTogS2FuYmFuQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb2x1bW4gYWN0aW9ucyBpY29uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uQWN0aW9ucygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkFjdGlvbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkFjdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uQWN0aW9ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGFzayBjb3VudCBpbmZvcm1hdGlvbiBpcyBkaXNwbGF5ZWQgaW4gY29sdW1uIGhlYWRlcnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5TdW1tYXJ5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uU3VtbWFyeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uU3VtbWFyeSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5TdW1tYXJ5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBhIGNvbHVtbiBoZWFkZXIgaGFzIGEgdGVtcGxhdGUuIFlvdSBjYW4gcGFzcyAnc3RyaW5nJywgJ2Z1bmN0aW9uJyBvciBIVE1MVGVtcGxhdGVFbGVtZW50IGFzIGEgdmFsdWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5IZWFkZXJUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uSGVhZGVyVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkhlYWRlclRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uSGVhZGVyVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY29sdW1uIGVkaXQgYmVoYXZpb3IuIFdpdGggdGhlICdoZWFkZXInIG9wdGlvbiwgZWRpdCBzdGFydHMgb24gZG91YmxlIGNsaWNrIG9uIHRoZSBjb2x1bW4ncyBsYWJlbC4gSW4gJ21lbnUnIG1vZGUsIGVkaXQgaXMgYWxsb3dlZCBmcm9tIHRoZSAnY29sdW1uQWN0aW9ucycgbWVudS4gSW4gJ2hlYWRlckFuZE1lbnUnIG9wdGlvbiwgY29sdW1uIGVkaXRpbmcgaW5jbHVkZXMgYm90aCBvcHRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uRWRpdE1vZGUoKTogS2FuYmFuQ29sdW1uRWRpdE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uRWRpdE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkVkaXRNb2RlKHZhbHVlOiBLYW5iYW5Db2x1bW5FZGl0TW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5FZGl0TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGlkIG9mIHRoZSBjdXJyZW50IHVzZXIuIEhhcyB0byBjb3JyZXNwb25kIHRvIHRoZSBpZCBvZiBhbiBpdGVtIGZyb20gdGhlIHVzZXJzIHByb3BlcnR5L2FycmF5LiBEZXBlbmRpbmcgb24gdGhlIGN1cnJlbnQgdXNlciwgZGlmZmVyZW50IHByaXZpbGVnZXMgYXJlIGVuYWJsZWQuIElmIG5vIGN1cnJlbnQgdXNlciBpcyBzZXQsIHByaXZpbGVnZXMgZGVwZW5kIG9uIHRoZSBlbGVtZW50J3MgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGN1cnJlbnRVc2VyKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VXNlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY3VycmVudFVzZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VXNlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRhIHNvdXJjZSB0byBiZSB2aXN1YWxpemVkIGluIHRoZSBrYW5iYW4gYm9hcmQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IEthbmJhbkRhdGFTb3VyY2VbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBLYW5iYW5EYXRhU291cmNlW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGUgcmVsYXRpb24gKG1hcHBpbmcpIGJldHdlZW4gdGhlIEthbmJhbidzIGRlZmF1bHQgZmllbGRzIChrZXl3b3JkcykgYW5kIHRoZSBkYXRhIGZpZWxkcyBmcm9tIHRoZSBkYXRhIHNvdXJjZS4gTm90IG5lY2Vzc2FyeSBpZiBib3RoIG1hdGNoLiBPbmx5IHNvbWUgb2YgdGhlIGRlZmF1bHQgbWFwcGluZyBjYW4gYmUgb3ZlcndyaXR0ZW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlTWFwKCk6IHsgY2hlY2tsaXN0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmc7IGNvbW1lbnRzOiBzdHJpbmc7IGR1ZURhdGU6IHN0cmluZzsgaWQ6IHN0cmluZzsgcHJpb3JpdHk6IHN0cmluZzsgcHJvZ3Jlc3M6IHN0cmluZzsgc3RhcnREYXRlOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nOyBzd2ltbGFuZTogc3RyaW5nOyB0YWdzOiBzdHJpbmc7IHRleHQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmc7IGNyZWF0ZWRVc2VySWQ6IHN0cmluZzsgdXBEYXRlZFVzZXJJZDogc3RyaW5nOyBjcmVhdGVkRGF0ZTogRGF0ZTsgdXBEYXRlZERhdGU6IERhdGU7fSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlTWFwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlTWFwKHZhbHVlOiB7IGNoZWNrbGlzdDogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBjb21tZW50czogc3RyaW5nOyBkdWVEYXRlOiBzdHJpbmc7IGlkOiBzdHJpbmc7IHByaW9yaXR5OiBzdHJpbmc7IHByb2dyZXNzOiBzdHJpbmc7IHN0YXJ0RGF0ZTogc3RyaW5nOyBzdGF0dXM6IHN0cmluZzsgc3dpbWxhbmU6IHN0cmluZzsgdGFnczogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nOyBjcmVhdGVkVXNlcklkOiBzdHJpbmc7IHVwRGF0ZWRVc2VySWQ6IHN0cmluZzsgY3JlYXRlZERhdGU6IERhdGU7IHVwRGF0ZWREYXRlOiBEYXRlO30pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZU1hcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBvZmZzZXQgb2YgdGhlIGRyYWcgZmVlZGJhY2sgZWxlbWVudCBmcm9tIHRoZSBtb3VzZSBjdXJzb3Igd2hlbiBkcmFnZ2luZyB0YXNrcy4gVGhlIGZpcnN0IG1lbWJlciBvZiB0aGUgYXJyYXkgaXMgdGhlIGhvcml6b250YWwgb2Zmc2V0IGFuZCB0aGUgc2Vjb25kIG9uZSAtIHRoZSB2ZXJ0aWNhbCBvZmZzZXQuIElmIHNldCB0byAnYXV0bycsIHRoZSBvZmZzZXQgaXMgYmFzZWQgb24gdGhlIG1vdXNlIHBvc2l0aW9uIHdoZW4gdGhlIGRyYWdnaW5nIHN0YXJ0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmFnT2Zmc2V0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhZ09mZnNldCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnT2Zmc2V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRhc2tzIGNhbiBiZSBlZGl0ZWQgKGluY2x1ZGluZyB0aGUgYXNzaWduaW5nIG9mIHVzZXJzIHRvIHRhc2tzKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGVkaXRhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWRpdGFibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZm9ybWF0IHN0cmluZyBvZiB0aGUgXCJEdWUgZGF0ZVwiIGxhYmVsIGFuZCB0aGUgXCJTdGFydCBkYXRlXCIgYW5kIFwiRHVlIGRhdGVcIiBlZGl0b3JzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9ybWF0U3RyaW5nRGF0ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0U3RyaW5nRGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9ybWF0U3RyaW5nRGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ0RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBmb3JtYXQgc3RyaW5nIG9mIGNvbW1lbnRzIHRpbWUgc3RhbXAuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmb3JtYXRTdHJpbmdUaW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb3JtYXRTdHJpbmdUaW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmb3JtYXRTdHJpbmdUaW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0U3RyaW5nVGltZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGhlYWRlciBwb3NpdGlvbi4gVGhlIGhlYWRlciBjb250YWlucyB0aGUgQ3VzdG9taXplLCBGaWx0ZXIsIFNvcnQsIGFuZCBTZWFyY2ggYnV0dG9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclBvc2l0aW9uKCk6IEthbmJhbkhlYWRlclBvc2l0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJQb3NpdGlvbih2YWx1ZTogS2FuYmFuSGVhZGVyUG9zaXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB3YXkgY29sdW1uIGhpZXJhcmNoeSBpcyByZXByZXNlbnRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZXJhcmNoeSgpOiBLYW5iYW5IaWVyYXJjaHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGllcmFyY2h5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWVyYXJjaHkodmFsdWU6IEthbmJhbkhpZXJhcmNoeSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWVyYXJjaHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsb2NhbGUuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIHdpZGdldCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHNlbGVjdGlvbiBtb2RlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uTW9kZSgpOiBLYW5iYW5TZWxlY3Rpb25Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGlvbk1vZGUodmFsdWU6IEthbmJhblNlbGVjdGlvbk1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgdGFza3MgaGlzdG9yeSB3aWxsIGJlIHN0b3JlZCBhbmQgZGlzcGxheWVkIGluIHRoZSB0YXNrIGRpYWxvZy4gKi9cblx0QElucHV0KClcblx0Z2V0IHN0b3JlSGlzdG9yeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0b3JlSGlzdG9yeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3RvcmVIaXN0b3J5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0b3JlSGlzdG9yeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHRhc2sgaGlzdG9yeSBpdGVtcyB0aGF0IHdpbGwgYmUgc3RvcmVkIHdoZW4gc3RvcmVIaXN0b3J5IGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzdG9yZUhpc3RvcnlJdGVtcygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RvcmVIaXN0b3J5SXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN0b3JlSGlzdG9yeUl0ZW1zKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RvcmVIaXN0b3J5SXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc3dpbWxhbmVzIGluIHRoZSBrYW5iYW4gYm9hcmQuIFN1Yi1jb2x1bW5zIGFyZSBub3QgYXBwbGljYWJsZSB3aGVuIHN3aW1sYW5lcyBhcmUgcHJlc2VudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHN3aW1sYW5lcygpOiBLYW5iYW5Td2ltbGFuZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3dpbWxhbmVzKHZhbHVlOiBLYW5iYW5Td2ltbGFuZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHN3aW1sYW5lcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHN3aW1sYW5lc0Zyb20oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lc0Zyb20gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN3aW1sYW5lc0Zyb20odmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2ltbGFuZXNGcm9tID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiBhdCB3aGljaCB0byBlbmQgdGhlIHN3aW1sYW5lcy4gQnkgZGVmYXVsdCwgc3dpbWxhbmVzIGVuZCBhdCB0aGUgbGFzdCBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzd2ltbGFuZXNUbygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzVG8gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN3aW1sYW5lc1RvKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzVG8gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbGxvd2VkIHRhZ3MuIElmIG5vIHRhZ3MgYXJlIGxpc3RlZCwgYWxsIHRhZ3MgZnJvbSB0aGUgZGF0YSBzb3VyY2UgYXJlIGFsbG93ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YWdzKCk6IGFueVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhZ3ModmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayBhY3Rpb25zIGljb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrQWN0aW9ucygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tBY3Rpb25zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrQWN0aW9ucyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQWN0aW9ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0YXNrIGNvbW1lbnRzIGljb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrQ29tbWVudHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29tbWVudHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tDb21tZW50cyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29tbWVudHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayBkdWUgaWNvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tEdWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrRHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrRHVlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tEdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGFza3MgY2FuIGJlIHNob3duIGluIGFsbCBsZXZlbHMgb2YgY29sdW1uIGhpZXJhcmNoeSBvciBvbmx5IG9uIGxlYWYgY29sdW1ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQb3NpdGlvbigpOiBLYW5iYW5UYXNrUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1Bvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrUG9zaXRpb24odmFsdWU6IEthbmJhblRhc2tQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayBwcmlvcml0eSBpY29uIChzaG93biB3aGVuIHByaW9yaXR5IGlzIGxvdyBvciBoaWdoKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQcmlvcml0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcmlvcml0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1ByaW9yaXR5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcmlvcml0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRhc2sgcHJvZ3Jlc3MgYmFyIGFuZCB0aGUgY29tcGxldGVkIHN1Yi10YXNrcyBsYWJlbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQcm9ncmVzcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcm9ncmVzcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1Byb2dyZXNzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcm9ncmVzcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSB0YXNrIGN1c3RvbSBmaWVsZHMgZGlzcGxheWVkIGluIHRoZSBjYXJkLiBFYWNoIGFycmF5IGl0ZW0gc2hvdWxkIGhhdmUgJ2RhdGFGaWVsZCcsICdsYWJlbCcgJ2RhdGFUeXBlJyBhbmQgb3B0aW9uYWxseSAndmlzaWJsZScgcHJvcGVydGllcy4gVGhlICdkYXRhRmllbGQnIGRldGVybWluZXMgdGhlIHZhbHVlLCB0aGUgbGFiZWwgaXMgZGlzcGxheWVkIGFzIHRpdGxlLCAnZGF0YVR5cGUnIGlzIHVzZWQgZm9yIGZvcm1hdHRpbmcgYW5kICd2aXNpYmxlJyBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGZpZWxkIHdpbGwgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza0N1c3RvbUZpZWxkcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0N1c3RvbUZpZWxkcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza0N1c3RvbUZpZWxkcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDdXN0b21GaWVsZHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHRhc2sncyBiYWNrZ3JvdW5kIGNvbG9yIGRlcGVuZHMgb24gdGhlIHRhc2sncyBjb2xvciBwcm9wZXJ0eS4gQnkgZGVmYXVsdCB0aGUgY29sb3IgaXMgcmVuZGVyZWQgd2l0aGluIHRoZSB0YXNrJ3MgbGVmdCBib3JkZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrQ29sb3JFbnRpcmVTdXJmYWNlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbG9yRW50aXJlU3VyZmFjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza0NvbG9yRW50aXJlU3VyZmFjZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29sb3JFbnRpcmVTdXJmYWNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc3BsYXlzIGFuIGlucHV0IGluIHRoZSB0YXNrJ3MgY2FyZCBmb3IgYWRkaW5nIGR5bmFtaWNhbGx5IGEgc3ViIHRhc2suIFRoZSAndGFza1N1YlRhc2tzJyBwcm9wZXJ0eSBzaG91bGQgYmUgc2V0IHRvIGEgdmFsdWUgZGlmZmVyZW50IHRoYW4gJ25vbmUnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1N1YlRhc2tzSW5wdXQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrU3ViVGFza3NJbnB1dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1N1YlRhc2tzSW5wdXQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1N1YlRhc2tzSW5wdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcmVuZGVyaW5nIG1vZGUgb2Ygc3ViIHRhc2tzLiAnbm9uZScgLSBkZWZhdWx0IHZhbHVlLiBTdWIgdGFza3MgYXJlIGRpc3BsYXllZCBvbmx5IGluIHRoZSBlZGl0IGRpYWxvZy4gJ29uZVBlclJvdycgLSBhbGwgc3ViIHRhc2tzIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIHRhc2sncyBjYXJkLiAnb25seVVuZmluaXNoZWQnIC0gb25seSB0YXNrcyB3aGljaCBhcmUgbm90IGNvbXBsZXRlZCBhcmUgZGlzcGxheWVkIGluIHRoZSB0YXNrJ3MgY2FyZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tTdWJUYXNrcygpOiBLYW5iYW5UYXNrU3ViVGFza3Mge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1N1YlRhc2tzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrU3ViVGFza3ModmFsdWU6IEthbmJhblRhc2tTdWJUYXNrcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrU3ViVGFza3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0YXNrIHRhZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrVGFncygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tUYWdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrVGFncyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrVGFncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0YXNrIHVzZXIgaWNvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tVc2VySWNvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tVc2VySWNvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1VzZXJJY29uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tVc2VySWNvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYSB0ZW1wbGF0ZSB0byBiZSBhcHBsaWVkIHRvIHRhc2sgdGV4dC4gQ2FuIGJlIGEgc3RyaW5nIGJlZ2lubmluZyB3aXRoICMgYW5kIHJlZmVyZW5jaW5nIHRoZSBpZCBvZiBhIHRlbXBsYXRlIGVsZW1lbnQgb24gdGhlIHBhZ2UuIENhbiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCBtb2RpZmllcyB0aGUgdGFzayB0ZXh0IG9yIHRoZSB0ZW1wbGF0ZSBpdHNlbGYuIEZpbmFsbHksIGl0IGNhbiBhbHNvIGJlIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSBwYXJzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0ZXh0VGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRleHRUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGV4dFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGV4dFRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwcmlvcml0eSBsaXN0IChhcyBkZWZpbmVkIGJ5IHRoZSBwcmlvcml0eSBwcm9wZXJ0eSkgd2lsbCBiZSBzaG93biB3aGVuIGNsaWNraW5nIHRoZSBwcmlvcml0eSBpY29uLiBPbmx5IGFwcGxpY2FibGUgaWYgZWRpdGFibGUgcHJpdmlsZWdlcyBhcmUgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHByaW9yaXR5TGlzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnByaW9yaXR5TGlzdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcHJpb3JpdHlMaXN0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnByaW9yaXR5TGlzdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwcmlvcml0eSBLYW5iYW4gdGFza3MgY2FuIGJlIGFzc2lnbmVkIHRvLiBFeGFtcGxlOiBbe2xhYmVsOiAnbG93JywgdmFsdWU6ICdsb3cnfSwge2xhYmVsOiAnaGlnaCcsIHZhbHVlOiAnaGlnaCd9XSAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcHJpb3JpdHkoKTogS2FuYmFuUHJpb3JpdHlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wcmlvcml0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcHJpb3JpdHkodmFsdWU6IEthbmJhblByaW9yaXR5W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpb3JpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1c2VyIGxpc3QgKGFzIGRlZmluZWQgYnkgdGhlIHVzZXJzIHByb3BlcnR5KSB3aWxsIGJlIHNob3duIHdoZW4gY2xpY2tpbmcgdGhlIHVzZXIgaWNvbi4gT25seSBhcHBsaWNhYmxlIGlmIGVkaXRhYmxlIHByaXZpbGVnZXMgYXJlIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1c2VyTGlzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVzZXJMaXN0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1c2VyTGlzdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51c2VyTGlzdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB1c2VycyBLYW5iYW4gdGFza3MgY2FuIGJlIGFzc2lnbmVkIHRvIGFuZCB0aGVpciBjaGFyYWN0ZXJpc3RpY3MgYW5kIHByaXZpbGVnZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1c2VycygpOiBLYW5iYW5Vc2VyW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudXNlcnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVzZXJzKHZhbHVlOiBLYW5iYW5Vc2VyW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudXNlcnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaGFzIGJlZW4gdXBkYXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGRWYWx1ZSwgXHR0YXNrLCBcdHZhbHVlKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgb2xkIGRhdGEgb2YgdGhlIHRhc2tcblx0KiAgIHRhc2sgLSBUaGUgSFRNTCBlbGVtZW50IG9mIHRoZSB0YXNrIHdob3NlIGRhdGEgaGFzIGJlZW4gY2hhbmdlZFxuXHQqICAgdmFsdWUgLSBUaGUgbmV3IGRhdGEgb2YgdGhlIHRhc2tcblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZWRpdC9wcm9tcHQgZGlhbG9nIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZWRpdC9wcm9tcHQgZGlhbG9nIGlzIGFib3V0IHRvIGJlIGNsb3NlZC4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBpcyBhZGRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRsYWJlbCwgXHRkYXRhRmllbGQsIFx0Y29sbGFwc2VkKVxuXHQqICAgbGFiZWwgLSBUaGUgY29sdW1uIGxhYmVsLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqICAgY29sbGFwc2VkIC0gVGhlIGNvbHVtbidzIGNvbGxhcHNlZCBzdGF0ZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uQWRkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBpcyByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGxhYmVsLCBcdGRhdGFGaWVsZCwgXHRjb2xsYXBzZWQpXG5cdCogICBsYWJlbCAtIFRoZSBjb2x1bW4gbGFiZWwuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCogICBjb2xsYXBzZWQgLSBUaGUgY29sdW1uJ3MgY29sbGFwc2VkIHN0YXRlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5SZW1vdmU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIHJlb3JkZXJlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGRJbmRleCwgXHRpbmRleCwgXHRjb2x1bW4pXG5cdCogICBvbGRJbmRleCAtIFRoZSBjb2x1bW4ncyBvbGQgaW5kZXguXG5cdCogICBpbmRleCAtIFRoZSBjb2x1bW4ncyBuZXcgaW5kZXguXG5cdCogICBjb2x1bW4gLSBUaGUgY29sdW1uJ3MgZGF0YSBvYmplY3Qgd2l0aCAnbGFiZWwnLCAnZGF0YUZpZWxkJyBhbmQgJ2NvbGxhcHNlZCcgZmllbGRzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5SZW9yZGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBpcyB1cGRhdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlLCBcdGNvbHVtbilcblx0KiAgIG9sZFZhbHVlIC0gVGhlIGNvbHVtbidzIG9sZCBsYWJlbC5cblx0KiAgIHZhbHVlIC0gVGhlIGNvbHVtbidzIG5ldyBsYWJlbC5cblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4ncyBkYXRhIG9iamVjdCB3aXRoICdsYWJlbCcsICdkYXRhRmllbGQnIGFuZCAnY29sbGFwc2VkJyBmaWVsZHMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaGVhZGVyIGlzIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBoZWFkZXIgaXMgZG91YmxlIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkRvdWJsZUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgZHJvcHBlZCBzb21ld2hlcmUgaW4gdGhlIERPTS4gVGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbnRhaW5lciwgXHRkYXRhLCBcdGl0ZW0sIFx0aXRlbXMsIFx0b3JpZ2luYWxFdmVudCwgXHRwcmV2aW91c0NvbnRhaW5lciwgXHR0YXJnZXQpXG5cdCogICBjb250YWluZXIgLSB0aGUgS2FuYmFuIHRoZSBkcmFnZ2VkIHRhc2socykgaXMgZHJvcHBlZCB0b1xuXHQqICAgZGF0YSAtIGFuIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgZHJhZyBkZXRhaWxzXG5cdCogICBpdGVtIC0gdGhlIHRhc2sgdGhhdCBpcyBkcmFnZ2VkOyBpZiBtdWx0aXBsZSB0YXNrcyBhcmUgZHJhZ2dlZCwgdGhpcyBpcyB0aGUgdGFzayB0aGF0IGhhcyBiZWVuIGNsaWNrZWQgd2hlbiBpbml0aWF0aW5nIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgaXRlbXMgLSBhbiBhcnJheSB3aXRoIGFsbCBkcmFnZ2VkIHRhc2tzXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gdGhlIG9yaWdpbmFsLCBicm93c2VyLCBldmVudCB0aGF0IGluaXRpYXRlcyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIHByZXZpb3VzQ29udGFpbmVyIC0gdGhlIEthbmJhbiB0aGUgZHJhZ2dlZCBpdGVtKHMpIGlzIGRyYWdnZWQgZnJvbVxuXHQqICAgdGFyZ2V0IC0gdGhlIGVsZW1lbnQgdGhlIGRyYWdnZWQgdGFza3MgYXJlIGRyb3BwZWQgdG9cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYSB0YXNrLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGRhdGEsIFx0aXRlbSwgXHRpdGVtcywgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgZGF0YSAtIGFuIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgZHJhZyBkZXRhaWxzXG5cdCogICBpdGVtIC0gdGhlIHRhc2sgdGhhdCBpcyBkcmFnZ2VkOyBpZiBtdWx0aXBsZSB0YXNrcyBhcmUgZHJhZ2dlZCwgdGhpcyBpcyB0aGUgdGFzayB0aGF0IGhhcyBiZWVuIGNsaWNrZWQgd2hlbiBpbml0aWF0aW5nIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgaXRlbXMgLSBhbiBhcnJheSB3aXRoIGFsbCBkcmFnZ2VkIHRhc2tzXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gdGhlIG9yaWdpbmFsLCBicm93c2VyLCBldmVudCB0aGF0IGluaXRpYXRlcyB0aGUgZHJhZyBvcGVyYXRpb25cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0YXNrKHMpLiBUaGUgZHJhZ2dpbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29udGFpbmVyLCBcdGRhdGEsIFx0aXRlbSwgXHRpdGVtcywgXHRvcmlnaW5hbEV2ZW50LCBcdHByZXZpb3VzQ29udGFpbmVyKVxuXHQqICAgY29udGFpbmVyIC0gdGhlIEthbmJhbiB0aGUgZHJhZ2dlZCB0YXNrKHMpIGlzIGRyYWdnZWQgZnJvbVxuXHQqICAgZGF0YSAtIGFuIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgZHJhZyBkZXRhaWxzXG5cdCogICBpdGVtIC0gdGhlIHRhc2sgdGhhdCBpcyBkcmFnZ2VkOyBpZiBtdWx0aXBsZSB0YXNrcyBhcmUgZHJhZ2dlZCwgdGhpcyBpcyB0aGUgdGFzayB0aGF0IGhhcyBiZWVuIGNsaWNrZWQgd2hlbiBpbml0aWF0aW5nIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgaXRlbXMgLSBhbiBhcnJheSB3aXRoIGFsbCBkcmFnZ2VkIHRhc2tzXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gdGhlIG9yaWdpbmFsLCBicm93c2VyLCBldmVudCB0aGF0IGluaXRpYXRlcyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIHByZXZpb3VzQ29udGFpbmVyIC0gdGhlIEthbmJhbiB0aGUgZHJhZ2dlZCBpdGVtKHMpIGlzIGRyYWdnZWQgZnJvbVxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZmlsdGVyIGhhcyBiZWVuIGFwcGxpZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBlZGl0L3Byb21wdCBkaWFsb2cgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVkaXQvcHJvbXB0IGRpYWxvZyBpcyBhYm91dCB0byBiZSBvcGVuZWQuIFRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbW1lbnQsIFx0cHVycG9zZSwgXHR0YXNrKVxuXHQqICAgY29tbWVudCAtIFRoZSBjb21tZW50IHRoYXQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZCAoaWYgYXBwbGljYWJsZSkuXG5cdCogICBwdXJwb3NlIC0gVGhlIHB1cnBvc2Ugb2YgdGhlIGRpYWxvZyB0byBiZSBvcGVuZWQgLSA8ZW0+J2VkaXQnPC9lbT4gb3IgPGVtPidwcm9tcHQnPC9lbT4uXG5cdCogICB0YXNrIC0gVGhlIHRhc2sgdGhhdCBpcyBhYm91dCB0byBiZSBlZGl0ZWQgb3IgcmVtb3ZlZCAoaWYgYXBwbGljYWJsZSkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbk9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHNvcnRpbmcgaGFzIGJlZW4gYXBwbGllZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbmV3IHRhc2sgaXMgYWRkZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUpXG5cdCogICB2YWx1ZSAtIFRoZSB0YXNrIGRhdGEgdGhhdCBpcyBhZGRlZCB0byB0aGUgS2FuYmFuLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrQWRkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSlcblx0KiAgIHZhbHVlIC0gVGhlIHRhc2sgZGF0YSB0aGF0IGlzIHJlbW92ZWQgZnJvbSB0aGUgS2FuYmFuLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrUmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBmaWx0ZXJpbmcgXG5cdCogQHBhcmFtIHtzdHJpbmdbXX0gZmlsdGVycy4gRmlsdGVyIGluZm9ybWF0aW9uXG5cdCogQHBhcmFtIHtzdHJpbmd9IG9wZXJhdG9yPy4gTG9naWNhbCBvcGVyYXRvciBiZXR3ZWVuIHRoZSBmaWx0ZXJzIG9mIGRpZmZlcmVudCBmaWVsZHNcblx0Ki9cbiAgICBwdWJsaWMgYWRkRmlsdGVyKGZpbHRlcnM6IHN0cmluZ1tdLCBvcGVyYXRvcj86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRGaWx0ZXIoZmlsdGVycywgb3BlcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihmaWx0ZXJzLCBvcGVyYXRvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgc29ydGluZyBcblx0KiBAcGFyYW0ge1tdIHwgc3RyaW5nfSBkYXRhRmllbGRzLiBUaGUgZGF0YSBmaWVsZChzKSB0byBzb3J0IGJ5XG5cdCogQHBhcmFtIHtbXSB8IHN0cmluZ30gb3JkZXJCeS4gVGhlIHNvcnQgZGlyZWN0aW9uKHMpIHRvIHNvcnQgdGhlIGRhdGEgZmllbGQocykgYnlcblx0Ki9cbiAgICBwdWJsaWMgYWRkU29ydChkYXRhRmllbGRzOiBbXSB8IHN0cmluZywgb3JkZXJCeTogW10gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkU29ydChkYXRhRmllbGRzLCBvcmRlckJ5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRTb3J0KGRhdGFGaWVsZHMsIG9yZGVyQnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgdGFzayB0byBhIEthbmJhbiBjb2x1bW4uIElmIG5vIGRhdGEgaXMgc3BlY2lmaWVkLCBhbiBlbXB0eSB0YXNrIGlzIGFkZGVkIHRvIHRoZSBmaXJzdCBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7YW55fSBkYXRhPy4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5ldyB0YXNrJ3MgZGF0YVxuXHQqL1xuICAgIHB1YmxpYyBhZGRUYXNrKGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVGFzayhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRUYXNrKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgY29sdW1uIHRvIGEgS2FuYmFuLiBJZiBubyBkYXRhIGlzIHNwZWNpZmllZCwgYW4gZW1wdHkgY29sdW1uIGlzIGFkZGVkLiBcblx0KiBAcGFyYW0ge2FueX0gZGF0YT8uIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZXcgY29sdW1uJ3MgZGF0YVxuXHQqL1xuICAgIHB1YmxpYyBhZGRDb2x1bW4oZGF0YT86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRDb2x1bW4oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29sdW1uKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBCZWdpbnMgYW4gZWRpdCBvcGVyYXRpb24gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCovXG4gICAgcHVibGljIGJlZ2luRWRpdCh0YXNrOiBudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpbkVkaXQodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5FZGl0KHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSBjdXJyZW50IGVkaXQgb3BlcmF0aW9uIGFuZCBkaXNjYXJkcyBjaGFuZ2VzIFxuXHQqL1xuICAgIHB1YmxpYyBjYW5jZWxFZGl0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jYW5jZWxFZGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbG9zZXMgYW55IG9wZW4gaGVhZGVyIHBhbmVsIChkcm9wIGRvd24pIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VQYW5lbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYSBLYW5iYW4gY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gY29sdW1uLiBUaGUgaW5kZXggb3IgZGF0YUZpZWxkIG9mIHRoZSBjb2x1bW4gdG8gY29sbGFwc2Vcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2UoY29sdW1uOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZShjb2x1bW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyBhIEthbmJhbiBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSBjb2x1bW4uIFRoZSBpbmRleCBvciBkYXRhRmllbGQgb2YgdGhlIGNvbHVtbiB0byBoaWRlXG5cdCovXG4gICAgcHVibGljIGhpZGUoY29sdW1uOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZShjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGUoY29sdW1uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIGNvcHkgb2YgYSB0YXNrIGluIHRoZSBzYW1lIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCovXG4gICAgcHVibGljIGNvcHlUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvcHlUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvcHlUYXNrKHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSBjdXJyZW50IGVkaXQgb3BlcmF0aW9uIGFuZCBzYXZlcyBjaGFuZ2VzIFxuXHQqL1xuICAgIHB1YmxpYyBlbmRFZGl0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRFZGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNYWtlcyBzdXJlIGEgdGFzayBpcyB2aXNpYmxlIGJ5IHNjcm9sbGluZyB0byBpdC4gSWYgc3VjY2Nlc3NmdWwsIHRoZSBtZXRob2QgcmV0dXJucyB0aGUgSFRNTCBlbGVtZW50IG9mIHRoZSB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50fSB0YXNrLiBUaGUgdGFzaydzIGlkIG9yIGNvcnJlc3BvbmRpbmcgSFRNTEVsZW1lbnRcblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBlbnN1cmVWaXNpYmxlKHRhc2spOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5zdXJlVmlzaWJsZSh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBLYW5iYW4gY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gY29sdW1uLiBUaGUgaW5kZXggb3IgZGF0YUZpZWxkIG9mIHRoZSBjb2x1bW4gdG8gZXhwYW5kXG5cdCovXG4gICAgcHVibGljIGV4cGFuZChjb2x1bW46IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoY29sdW1uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhbGwgS2FuYmFuIGNvbHVtbnMuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBLYW5iYW4ncyBkYXRhLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZvcm1hdC4gVGhlIGZpbGUgZm9ybWF0IHRvIGV4cG9ydCB0by4gU3VwcG9ydGVkIGZvcm1hdHM6ICdjc3YnLCAnaHRtbCcsICdqc29uJywgJ3BkZicsICd0c3YnLCAneGxzeCcsICd4bWwnLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gZXhwb3J0IHRvXG5cdCogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2s/LiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHBhc3MgdGhlIGV4cG9ydGVkIGRhdGEgdG8gKGlmIGZpbGVOYW1lIGlzIG5vdCBwcm92aWRlZClcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBmaWxlTmFtZSwgY2FsbGJhY2s/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgZmlsZU5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGRhdGEgb2YgYSBjb2x1bW4uIFRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIEpTT04gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBmaWVsZHM6ICdsYWJlbCcsICdkYXRhRmllbGQnLCAnY29sbGFwc2VkJywgJ2NvbGxhcHNpYmxlJywgJ2FsbG93UmVtb3ZlJywgJ2VkaXRhYmxlJywgJ3Jlb3JkZXInLCAnb3JpZW50YXRpb24nLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDb2x1bW4oZGF0YUZpZWxkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtbihkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgS2FuYmFuJ3Mgc3RhdGUuIFxuXHQqIEByZXR1cm5zIHt7IGNvbGxhcHNlZDoge30sIGRhdGFTb3VyY2U6IFtdLCBmaWx0ZXJpbmc6IHsgZmlsdGVyczogW10sIG9wZXJhdG9yOiBzdHJpbmcgfSwgc2VsZWN0aW9uOiB7IHNlbGVjdGVkOiBbXSwgc2VsZWN0aW9uU3RhcnQ6IG51bWJlciB8IHN0cmluZywgc2VsZWN0aW9uSW5Db2x1bW46IHN0cmluZywgc3dpbWxhbmU6IHN0cmluZyB9LCBzb3J0aW5nOiB7IGRhdGFGaWVsZHM6IFtdLCBkYXRhVHlwZXM6IFtdLCBvcmRlckJ5OiBbXSB9LCB0YWJzOiBbXSwgdmlzaWJpbGl0eTogeyB0YXNrQWN0aW9uczogYm9vbGVhbiwgdGFza0NvbW1lbnRzOiBib29sZWFuLCB0YXNrRHVlOiBib29sZWFuLCB0YXNrUHJpb3JpdHk6IGJvb2xlYW4sIHRhc2tQcm9ncmVzczogYm9vbGVhbiwgdGFza1RhZ3M6IGJvb2xlYW4sIHRhc2tVc2VySWNvbjogYm9vbGVhbiB9IH19XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTdGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBLYW5iYW4ncyBzdGF0ZS4gXG5cdCogQHBhcmFtIHt7IGNvbGxhcHNlZDoge30sIGRhdGFTb3VyY2U6IFtdLCBmaWx0ZXJpbmc6IHsgZmlsdGVyczogW10sIG9wZXJhdG9yOiBzdHJpbmcgfSwgc2VsZWN0aW9uOiB7IHNlbGVjdGVkOiBbXSwgc2VsZWN0aW9uU3RhcnQ/OiBudW1iZXIgfCBzdHJpbmcsIHNlbGVjdGlvbkluQ29sdW1uOiBzdHJpbmcsIHN3aW1sYW5lOiBzdHJpbmcgfSwgc29ydGluZzogeyBkYXRhRmllbGRzOiBbXSwgZGF0YVR5cGVzOiBbXSwgb3JkZXJCeTogW10gfSwgdGFiczogW10sIHZpc2liaWxpdHk6IHsgdGFza0FjdGlvbnM6IGJvb2xlYW4sIHRhc2tDb21tZW50czogYm9vbGVhbiwgdGFza0R1ZTogYm9vbGVhbiwgdGFza1ByaW9yaXR5OiBib29sZWFuLCB0YXNrUHJvZ3Jlc3M6IGJvb2xlYW4sIHRhc2tUYWdzOiBib29sZWFuLCB0YXNrVXNlckljb246IGJvb2xlYW4gfSB9fSBzdGF0ZT8uIEFuIG9iamVjdCByZXR1cm5lZCBieSBvbmUgb2YgdGhlIG1ldGhvZHMgZ2V0U3RhdGUgb3Igc2F2ZVN0YXRlLiBJZiBub3QgcGFzc2VkLCBnZXRzIHNhdmVkIHN0YXRlIGZyb20gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IHsgY29sbGFwc2VkOiB7fSwgZGF0YVNvdXJjZTogW10sIGZpbHRlcmluZzogeyBmaWx0ZXJzOiBbXSwgb3BlcmF0b3I6IHN0cmluZyB9LCBzZWxlY3Rpb246IHsgc2VsZWN0ZWQ6IFtdLCBzZWxlY3Rpb25TdGFydD86IG51bWJlciB8IHN0cmluZywgc2VsZWN0aW9uSW5Db2x1bW46IHN0cmluZywgc3dpbWxhbmU6IHN0cmluZyB9LCBzb3J0aW5nOiB7IGRhdGFGaWVsZHM6IFtdLCBkYXRhVHlwZXM6IFtdLCBvcmRlckJ5OiBbXSB9LCB0YWJzOiBbXSwgdmlzaWJpbGl0eTogeyB0YXNrQWN0aW9uczogYm9vbGVhbiwgdGFza0NvbW1lbnRzOiBib29sZWFuLCB0YXNrRHVlOiBib29sZWFuLCB0YXNrUHJpb3JpdHk6IGJvb2xlYW4sIHRhc2tQcm9ncmVzczogYm9vbGVhbiwgdGFza1RhZ3M6IGJvb2xlYW4sIHRhc2tVc2VySWNvbjogYm9vbGVhbiB9IH0pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNb3ZlcyBhIHRhc2sgdG8gYSBkaWZmZXJlbnQgY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50fSB0YXNrLiBUaGUgdGFzaydzIGlkIG9yIGNvcnJlc3BvbmRpbmcgSFRNTEVsZW1lbnRcblx0KiBAcGFyYW0ge3N0cmluZ30gbmV3U3RhdHVzLiBUaGUgbmV3IHN0YXR1cyBvZiB0aGUgdGFzayAoaXRzIG5ldyBjb2x1bW4ncyBkYXRhRmllbGQpXG5cdCovXG4gICAgcHVibGljIG1vdmVUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50LCBuZXdTdGF0dXM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5tb3ZlVGFzayh0YXNrLCBuZXdTdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm1vdmVUYXNrKHRhc2ssIG5ld1N0YXR1cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBcIkN1c3RvbWl6ZSB0YXNrc1wiIGhlYWRlciBwYW5lbCAoZHJvcCBkb3duKSBcblx0Ki9cbiAgICBwdWJsaWMgb3BlbkN1c3RvbWl6ZVBhbmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuQ3VzdG9taXplUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuQ3VzdG9taXplUGFuZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIFwiRmlsdGVyXCIgaGVhZGVyIHBhbmVsIChkcm9wIGRvd24pIFxuXHQqL1xuICAgIHB1YmxpYyBvcGVuRmlsdGVyUGFuZWwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5GaWx0ZXJQYW5lbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5GaWx0ZXJQYW5lbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgXCJTb3J0XCIgaGVhZGVyIHBhbmVsIChkcm9wIGRvd24pIFxuXHQqL1xuICAgIHB1YmxpYyBvcGVuU29ydFBhbmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuU29ydFBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlblNvcnRQYW5lbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGZpbHRlcmluZyBcblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlRmlsdGVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBzb3J0aW5nIFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVTb3J0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVTb3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlU29ydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgdGFzay4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCogQHBhcmFtIHtib29sZWFufSBwcm9tcHQ/LiBXaGV0aGVyIG9yIG5vdCB0byBwcm9tcHQgdGhlIHVzZXIgYmVmb3JlIHJlbW92aW5nIHRoZSB0YXNrXG5cdCovXG4gICAgcHVibGljIHJlbW92ZVRhc2sodGFzazogbnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnQsIHByb21wdD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlVGFzayh0YXNrLCBwcm9tcHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2sodGFzaywgcHJvbXB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gVGhlIGNvbHVtbidzIGRhdGEgZmllbGRcblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQ29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbHVtbihkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbHVtbihkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgS2FuYmFuJ3Mgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuIFxuXHQqL1xuICAgIHB1YmxpYyBzYXZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBhIEthbmJhbiBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSBjb2x1bW4uIFRoZSBpbmRleCBvciBkYXRhRmllbGQgb2YgdGhlIGNvbHVtbiB0byBzaG93XG5cdCovXG4gICAgcHVibGljIHNob3coY29sdW1uOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvdyhjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3coY29sdW1uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYWxsIEthbmJhbiBjb2x1bW5zLiBcblx0Ki9cbiAgICBwdWJsaWMgc2hvd0FsbENvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dBbGxDb2x1bW5zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0FsbENvbHVtbnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhIHRhc2suIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqIEBwYXJhbSB7e319IG5ld0RhdGEuIFRoZSBuZXcgZGF0YSB0byB2aXN1YWxpemUgaW4gdGhlIHRhc2suXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZVRhc2sodGFzazogbnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnQsIG5ld0RhdGE6IHt9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZVRhc2sodGFzaywgbmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlVGFzayh0YXNrLCBuZXdEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gVGhlIG5ldyBjb2x1bW4ncyBkYXRhIGZpZWxkXG5cdCogQHBhcmFtIHt7fX0gbmV3RGF0YS4gVGhlIG5ldyBkYXRhIHRvIHZpc3VhbGl6ZSBpbiB0aGUgY29sdW1uLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVDb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcsIG5ld0RhdGE6IHt9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUNvbHVtbihkYXRhRmllbGQsIG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUNvbHVtbihkYXRhRmllbGQsIG5ld0RhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQWRkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uQWRkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkFkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQWRkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVtb3ZlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uUmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVtb3ZlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblJlb3JkZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uUmVvcmRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5Eb3VibGVDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ2dpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ2dpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWx0ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsdGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Tb3J0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NvcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrQWRkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVGFza0FkZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0YXNrQWRkJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrQWRkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza1JlbW92ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblRhc2tSZW1vdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGFza1JlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza1JlbW92ZUhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQWRkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uQWRkJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5BZGRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlbW92ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uUmVvcmRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5VcGRhdGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkRvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQub25maWx0ZXJIYW5kbGVyID0gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrQWRkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGFza0FkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza1JlbW92ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rhc2tSZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=