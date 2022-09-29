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
        /** @description This event is triggered when a column is shown by using the column's action menu or the Kanban's 'show' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        this.onColumnShow = new EventEmitter();
        /** @description This event is triggered when a column is hidden by using the column's action menu or the Kanban's 'hide' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        this.onColumnHide = new EventEmitter();
        /** @description This event is triggered when a column is collapsed  by using the column's action menu or the Kanban's 'collapse' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        this.onColumnCollapse = new EventEmitter();
        /** @description This event is triggered when a column is expanded by using the column's action menu or the Kanban's 'expand' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        this.onColumnExpand = new EventEmitter();
        /** @description This event is triggered when a comment is added to the Kanban Task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
        *   id - The task's id.
        *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
        */
        this.onCommentAdd = new EventEmitter();
        /** @description This event is triggered when a comment is removed from the Kanban Task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
        *   id - The task's id.
        *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
        */
        this.onCommentRemove = new EventEmitter();
        /** @description This event is triggered when a comment is updated in the Kanban Task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
        *   id - The task's id.
        *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
        */
        this.onCommentUpdate = new EventEmitter();
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
        /** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. If you want to cancel the default Kanban dialog, call event.preventDefault();
        *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
        *   comment - The comment that is about to be removed (if applicable).
        *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
        *   task - The task that is about to be edited or removed (if applicable).
        */
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when sorting has been applied.
        *  @param event. The custom event. 	*/
        this.onSort = new EventEmitter();
        /** @description This event is triggered before a new task is added. You can use the event.detail.value and event.detail.id to customize the new Task before adding it to the Kanban. Example: kanban.onTaskBeforeAdd = (event) => { const data = event.detail.value; const id = event.detail.id; event.detail.id = 'BG12';}
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data that is added to the Kanban.
        *   id - The task data id.
        */
        this.onTaskBeforeAdd = new EventEmitter();
        /** @description This event is triggered when a new task is added. Example: kanban.onTaskAdd = (event) => { const data = event.detail.value; const id = event.detail.id; }
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data that is added to the Kanban.
        *   id - The task data id.
        */
        this.onTaskAdd = new EventEmitter();
        /** @description This event is triggered when a task is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data that is removed from the Kanban.
        *   id - The task data id.
        */
        this.onTaskRemove = new EventEmitter();
        /** @description This event is triggered when a task is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	id)
        *   value - The task data that is updated.
        *   oldValue - The update task's old data.
        *   id - The task data id.
        */
        this.onTaskUpdate = new EventEmitter();
        /** @description This event is triggered when a task is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data.
        *   id - The task data id.
        */
        this.onTaskClick = new EventEmitter();
        /** @description This event is triggered when a task is double clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data.
        *   id - The task data id.
        */
        this.onTaskDoubleClick = new EventEmitter();
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
    /** @description Sets the width of the add new column. The property is used, if the 'columnWidth' property is set, too. It specifies the width of the dynamic new column. */
    get addNewColumnWidth() {
        return this.nativeElement ? this.nativeElement.addNewColumnWidth : undefined;
    }
    set addNewColumnWidth(value) {
        this.nativeElement ? this.nativeElement.addNewColumnWidth = value : undefined;
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
    /** @description This property changes the visual appeal of the Kanban columns and tasks. When set to true and the Kanban columns have their 'color' property set, the color is also applied to the tasks and edit dialog. */
    get applyColumnColorToTasks() {
        return this.nativeElement ? this.nativeElement.applyColumnColorToTasks : undefined;
    }
    set applyColumnColorToTasks(value) {
        this.nativeElement ? this.nativeElement.applyColumnColorToTasks = value : undefined;
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
    /** @description Automatically updates the columns height depending on the tasks inside the column. The effect of this property is observed when 'columnColorEntireSurface' is true. */
    get autoColumnHeight() {
        return this.nativeElement ? this.nativeElement.autoColumnHeight : undefined;
    }
    set autoColumnHeight(value) {
        this.nativeElement ? this.nativeElement.autoColumnHeight = value : undefined;
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
    /** @description Sets the Kanban columns width. When this property is set, the kanban columns width is set and a horizontal scrollbar may appear. */
    get columnWidth() {
        return this.nativeElement ? this.nativeElement.columnWidth : undefined;
    }
    set columnWidth(value) {
        this.nativeElement ? this.nativeElement.columnWidth = value : undefined;
    }
    /** @description Displays background in the Kanban column. */
    get columnColorEntireSurface() {
        return this.nativeElement ? this.nativeElement.columnColorEntireSurface : undefined;
    }
    set columnColorEntireSurface(value) {
        this.nativeElement ? this.nativeElement.columnColorEntireSurface = value : undefined;
    }
    /** @description Displays a column footer which shows the summary of the column. */
    get columnFooter() {
        return this.nativeElement ? this.nativeElement.columnFooter : undefined;
    }
    set columnFooter(value) {
        this.nativeElement ? this.nativeElement.columnFooter = value : undefined;
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
    /** @description Sets or gets whether the default dialog for adding/removing tasks or comments is disabled. */
    get disableDialog() {
        return this.nativeElement ? this.nativeElement.disableDialog : undefined;
    }
    set disableDialog(value) {
        this.nativeElement ? this.nativeElement.disableDialog = value : undefined;
    }
    /** @description Sets or gets a customization function for the dialog. This function can be used to customize the dialog look or to replace it. The Kanban calls this function with 5 arguments - 'dialog', 'taskOrComment', 'editors', 'purpose' and 'type'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'purpose' could be 'add' or 'edit' and 'type' could be 'task' or 'column' depending on the action. */
    get dialogCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.dialogCustomizationFunction : undefined;
    }
    set dialogCustomizationFunction(value) {
        this.nativeElement ? this.nativeElement.dialogCustomizationFunction = value : undefined;
    }
    /** @description Sets or gets a function called when the dialog is rendered. The Kanban calls this function with 6 arguments - 'dialog', 'editors', 'labels', 'tabs', 'layout', 'taskOrComment'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'editors', 'labels', 'tabs' and 'layout' are JSON objects with key which describes the element type and value which is HTML Element. */
    get dialogRendered() {
        return this.nativeElement ? this.nativeElement.dialogRendered : undefined;
    }
    set dialogRendered(value) {
        this.nativeElement ? this.nativeElement.dialogRendered = value : undefined;
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
    /** @description Callback function which can be used for customizing the tasks rendering. The Kanban calls it with 2 arguments - task html element and task data. */
    get onTaskRender() {
        return this.nativeElement ? this.nativeElement.onTaskRender : undefined;
    }
    set onTaskRender(value) {
        this.nativeElement ? this.nativeElement.onTaskRender = value : undefined;
    }
    /** @description Callback function which can be used for customizing the filter items. The function is called with 1 argument - Array of items which will be displayed in the filter drop down. You can modify that array to remove or update items to filter by. */
    get onFilterPrepare() {
        return this.nativeElement ? this.nativeElement.onFilterPrepare : undefined;
    }
    set onFilterPrepare(value) {
        this.nativeElement ? this.nativeElement.onFilterPrepare = value : undefined;
    }
    /** @description Callback function which can be used for customizing the sort items. The function is called with 1 argument - Array of items which will be displayed in the sort drop down. You can modify that array to remove or update items to sort by. */
    get onSortPrepare() {
        return this.nativeElement ? this.nativeElement.onSortPrepare : undefined;
    }
    set onSortPrepare(value) {
        this.nativeElement ? this.nativeElement.onSortPrepare = value : undefined;
    }
    /** @description Callback function which can be used for customizing the column header rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field. */
    get onColumnHeaderRender() {
        return this.nativeElement ? this.nativeElement.onColumnHeaderRender : undefined;
    }
    set onColumnHeaderRender(value) {
        this.nativeElement ? this.nativeElement.onColumnHeaderRender = value : undefined;
    }
    /** @description Callback function which can be used for customizing the column footer rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field. */
    get onColumnFooterRender() {
        return this.nativeElement ? this.nativeElement.onColumnFooterRender : undefined;
    }
    set onColumnFooterRender(value) {
        this.nativeElement ? this.nativeElement.onColumnFooterRender = value : undefined;
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
    /** @description Sets or gets whether the edit dialog is displayed in readonly mode. In that mode it shows only the task details, but the editing is disabled. However, if comments are enabled, you will be able to add comments in the dialog. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
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
    /** @description Represents a callback function which is called when the task actions menu is created. The task actions element is passed as parameter and allows you to customize the menu. Example: (list) => { list.innerHTML = 'Custom Item'; list.onclick = () => { alert('clicked'); }} */
    get taskActionsRendered() {
        return this.nativeElement ? this.nativeElement.taskActionsRendered : undefined;
    }
    set taskActionsRendered(value) {
        this.nativeElement ? this.nativeElement.taskActionsRendered = value : undefined;
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
    /** @description Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible', 'image' and 'cover' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. If your string represents an image either URL or Base64, set image: true. If you want to display that image as a cover image, set cover:true, too. */
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
    /** @description Adds filtering. Example: const filterGroup = new Smart.FilterGroup(); const filterObject = filterGroup.createFilter('string', 'Italy', 'contains'); filterGroup.addFilter('and', filterObject); kanban.addFilter([['Country', filterGroup]]);
    * @param {any} filters. Filter information. Example: kanban.addFilter([['Country', filterGroup]]);. Each array item is a sub array with two items - 'dataField' and 'filterGroup' object. The 'dataField' is any valid data field from the data source bound to the Kanban like 'dueDate', 'startDate' or custom fields like 'Country'. Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @param {string} operator?. Logical operator between the filters of different fields. Possible values are: 'and', 'or'.
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
    /** @description Adds sorting. Example: kanban.addSort(['Country'], 'ascending');
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by. Possible values are: 'ascending' and 'descending'.
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
    /** @description Clears the Kanban's selection.
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
    /** @description Gets the data of a task. The returned value is a JSON object with the following fields: 'checklist', 'id', 'color', 'comments', 'history', 'dueDate', 'startDate', 'priority', 'progress', 'status', 'swimlane', 'tags', 'text', 'description', 'userId', 'createdUserId', 'createdDate', 'updatedUserId', 'updatedDate'
    * @param {number} id. The task's id
    * @returns {any}
  */
    getTask(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTask(id);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selected ids. The returned value is an array. Each item in the array is the 'id' of a selected task.
    * @param {number} id. The task's id
    * @returns {any}
  */
    getSelectedTasks(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedTasks(id);
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
    /** @description Selects a task.
    * @param {number | string} task. The task's id.
    */
    selectTask(task) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTask(task);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectTask(task);
            });
        }
    }
    /** @description Unselects a task.
    * @param {number | string} task. The task's id.
    */
    unselectTask(task) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectTask(task);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectTask(task);
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
        that.eventHandlers['columnShowHandler'] = (event) => { that.onColumnShow.emit(event); };
        that.nativeElement.addEventListener('columnShow', that.eventHandlers['columnShowHandler']);
        that.eventHandlers['columnHideHandler'] = (event) => { that.onColumnHide.emit(event); };
        that.nativeElement.addEventListener('columnHide', that.eventHandlers['columnHideHandler']);
        that.eventHandlers['columnCollapseHandler'] = (event) => { that.onColumnCollapse.emit(event); };
        that.nativeElement.addEventListener('columnCollapse', that.eventHandlers['columnCollapseHandler']);
        that.eventHandlers['columnExpandHandler'] = (event) => { that.onColumnExpand.emit(event); };
        that.nativeElement.addEventListener('columnExpand', that.eventHandlers['columnExpandHandler']);
        that.eventHandlers['commentAddHandler'] = (event) => { that.onCommentAdd.emit(event); };
        that.nativeElement.addEventListener('commentAdd', that.eventHandlers['commentAddHandler']);
        that.eventHandlers['commentRemoveHandler'] = (event) => { that.onCommentRemove.emit(event); };
        that.nativeElement.addEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);
        that.eventHandlers['commentUpdateHandler'] = (event) => { that.onCommentUpdate.emit(event); };
        that.nativeElement.addEventListener('commentUpdate', that.eventHandlers['commentUpdateHandler']);
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
        that.eventHandlers['taskBeforeAddHandler'] = (event) => { that.onTaskBeforeAdd.emit(event); };
        that.nativeElement.addEventListener('taskBeforeAdd', that.eventHandlers['taskBeforeAddHandler']);
        that.eventHandlers['taskAddHandler'] = (event) => { that.onTaskAdd.emit(event); };
        that.nativeElement.addEventListener('taskAdd', that.eventHandlers['taskAddHandler']);
        that.eventHandlers['taskRemoveHandler'] = (event) => { that.onTaskRemove.emit(event); };
        that.nativeElement.addEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);
        that.eventHandlers['taskUpdateHandler'] = (event) => { that.onTaskUpdate.emit(event); };
        that.nativeElement.addEventListener('taskUpdate', that.eventHandlers['taskUpdateHandler']);
        that.eventHandlers['taskClickHandler'] = (event) => { that.onTaskClick.emit(event); };
        that.nativeElement.addEventListener('taskClick', that.eventHandlers['taskClickHandler']);
        that.eventHandlers['taskDoubleClickHandler'] = (event) => { that.onTaskDoubleClick.emit(event); };
        that.nativeElement.addEventListener('taskDoubleClick', that.eventHandlers['taskDoubleClickHandler']);
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
        if (that.eventHandlers['columnShowHandler']) {
            that.nativeElement.removeEventListener('columnShow', that.eventHandlers['columnShowHandler']);
        }
        if (that.eventHandlers['columnHideHandler']) {
            that.nativeElement.removeEventListener('columnHide', that.eventHandlers['columnHideHandler']);
        }
        if (that.eventHandlers['columnCollapseHandler']) {
            that.nativeElement.removeEventListener('columnCollapse', that.eventHandlers['columnCollapseHandler']);
        }
        if (that.eventHandlers['columnExpandHandler']) {
            that.nativeElement.removeEventListener('columnExpand', that.eventHandlers['columnExpandHandler']);
        }
        if (that.eventHandlers['commentAddHandler']) {
            that.nativeElement.removeEventListener('commentAdd', that.eventHandlers['commentAddHandler']);
        }
        if (that.eventHandlers['commentRemoveHandler']) {
            that.nativeElement.removeEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);
        }
        if (that.eventHandlers['commentUpdateHandler']) {
            that.nativeElement.removeEventListener('commentUpdate', that.eventHandlers['commentUpdateHandler']);
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
        if (that.eventHandlers['taskBeforeAddHandler']) {
            that.nativeElement.removeEventListener('taskBeforeAdd', that.eventHandlers['taskBeforeAddHandler']);
        }
        if (that.eventHandlers['taskAddHandler']) {
            that.nativeElement.removeEventListener('taskAdd', that.eventHandlers['taskAddHandler']);
        }
        if (that.eventHandlers['taskRemoveHandler']) {
            that.nativeElement.removeEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);
        }
        if (that.eventHandlers['taskUpdateHandler']) {
            that.nativeElement.removeEventListener('taskUpdate', that.eventHandlers['taskUpdateHandler']);
        }
        if (that.eventHandlers['taskClickHandler']) {
            that.nativeElement.removeEventListener('taskClick', that.eventHandlers['taskClickHandler']);
        }
        if (that.eventHandlers['taskDoubleClickHandler']) {
            that.nativeElement.removeEventListener('taskDoubleClick', that.eventHandlers['taskDoubleClickHandler']);
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
], KanbanComponent.prototype, "addNewColumnWidth", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowDrag", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "allowDrop", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "applyColumnColorToTasks", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "autoLoadState", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "autoSaveState", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "autoColumnHeight", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "collapsible", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnColors", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnWidth", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnColorEntireSurface", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnFooter", null);
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
], KanbanComponent.prototype, "disableDialog", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "dialogCustomizationFunction", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "dialogRendered", null);
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
], KanbanComponent.prototype, "onTaskRender", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "onFilterPrepare", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "onSortPrepare", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "onColumnHeaderRender", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "onColumnFooterRender", null);
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
], KanbanComponent.prototype, "readonly", null);
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
], KanbanComponent.prototype, "taskActionsRendered", null);
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
], KanbanComponent.prototype, "onColumnShow", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnHide", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnCollapse", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onColumnExpand", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onCommentAdd", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onCommentRemove", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onCommentUpdate", void 0);
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
], KanbanComponent.prototype, "onTaskBeforeAdd", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onTaskAdd", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onTaskRemove", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onTaskUpdate", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onTaskClick", void 0);
tslib_1.__decorate([
    Output()
], KanbanComponent.prototype, "onTaskDoubleClick", void 0);
KanbanComponent = tslib_1.__decorate([
    Directive({
        exportAs: 'smart-kanban', selector: 'smart-kanban, [smart-kanban]'
    })
], KanbanComponent);
export { KanbanComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQua2FuYmFuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2thbmJhbi8iLCJzb3VyY2VzIjpbInNtYXJ0LmthbmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0lBQy9DLFlBQVksR0FBdUI7UUFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUE0b0JsQzs7Ozs7VUFLRTtRQUNRLGFBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs4Q0FDc0M7UUFDNUIsWUFBTyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxFOzhDQUNzQztRQUM1QixjQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEU7Ozs7O1VBS0U7UUFDUSxnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzs7OztVQUtFO1FBQ1EsbUJBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7Ozs7VUFLRTtRQUNRLG9CQUFlLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUU7Ozs7O1VBS0U7UUFDUSxtQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7OztVQUtFO1FBQ1Esa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7Ozs7VUFLRTtRQUNRLHdCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7O1VBSUU7UUFDUSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7O1VBSUU7UUFDUSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7O1VBSUU7UUFDUSxxQkFBZ0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzRTs7OztVQUlFO1FBQ1EsbUJBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7OztVQUlFO1FBQ1EsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7OztVQUlFO1FBQ1Esb0JBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7OztVQUlFO1FBQ1Esb0JBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7Ozs7Ozs7O1VBU0U7UUFDUSxjQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEU7Ozs7OztVQU1FO1FBQ1EsZUFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzs7Ozs7OztVQVFFO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs4Q0FDc0M7UUFDNUIsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzhDQUNzQztRQUM1QixXQUFNLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakU7Ozs7O1VBS0U7UUFDUSxjQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEU7OENBQ3NDO1FBQzVCLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRTs7OztVQUlFO1FBQ1Esb0JBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7OztVQUlFO1FBQ1EsY0FBUyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBFOzs7O1VBSUU7UUFDUSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7OztVQUtFO1FBQ1EsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7OztVQUlFO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7OztVQUlFO1FBQ1Esc0JBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUE3MUIzRSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUF1QixDQUFDO0lBQ2xELENBQUM7SUFLRDs7T0FFRztJQUNJLGVBQWUsQ0FBQyxVQUFVLEdBQUcsRUFBRTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFXLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkUsS0FBSyxJQUFJLFlBQVksSUFBSSxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUNELHVRQUF1UTtJQUV2USxJQUFJLGtCQUFrQjtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsSUFBSSxrQkFBa0IsQ0FBQyxLQUFjO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEYsQ0FBQztJQUVELHVMQUF1TDtJQUV2TCxJQUFJLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVFLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFjO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdFLENBQUM7SUFFRCwyTkFBMk47SUFFM04sSUFBSSxpQkFBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9FLENBQUM7SUFFRCx1TkFBdU47SUFFdk4sSUFBSSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsbUxBQW1MO0lBRW5MLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsMkhBQTJIO0lBRTNILElBQUksdUJBQXVCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxJQUFJLHVCQUF1QixDQUFDLEtBQTZDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckYsQ0FBQztJQUVELDhIQUE4SDtJQUU5SCxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELDRLQUE0SztJQUU1SyxJQUFJLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RSxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFvQjtRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9FLENBQUM7SUFFRCxpREFBaUQ7SUFFakQsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxpREFBaUQ7SUFFakQsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw2TkFBNk47SUFFN04sSUFBSSx1QkFBdUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEYsQ0FBQztJQUNELElBQUksdUJBQXVCLENBQUMsS0FBYztRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JGLENBQUM7SUFFRCw0VUFBNFU7SUFFNVUsSUFBSSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMzRSxDQUFDO0lBRUQseVVBQXlVO0lBRXpVLElBQUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUVELHVMQUF1TDtJQUV2TCxJQUFJLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFjO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUVELHVEQUF1RDtJQUV2RCxJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUVELGtHQUFrRztJQUVsRyxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELG9KQUFvSjtJQUVwSixJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQW9CO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFRCw2REFBNkQ7SUFFN0QsSUFBSSx3QkFBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckYsQ0FBQztJQUNELElBQUksd0JBQXdCLENBQUMsS0FBYztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxtRkFBbUY7SUFFbkYsSUFBSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCxxREFBcUQ7SUFFckQsSUFBSSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFxQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsc0VBQXNFO0lBRXRFLElBQUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUVELDZGQUE2RjtJQUU3RixJQUFJLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNFLENBQUM7SUFFRCwySUFBMkk7SUFFM0ksSUFBSSxvQkFBb0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakYsQ0FBQztJQUNELElBQUksb0JBQW9CLENBQUMsS0FBVTtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxxUUFBcVE7SUFFclEsSUFBSSxjQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBb0M7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUUsQ0FBQztJQUVELDZRQUE2UTtJQUU3USxJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFRCw4R0FBOEc7SUFFOUcsSUFBSSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsK2VBQStlO0lBRS9lLElBQUksMkJBQTJCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxJQUFJLDJCQUEyQixDQUFDLEtBQVU7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RixDQUFDO0lBRUQsb2RBQW9kO0lBRXBkLElBQUksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUUsQ0FBQztJQUVELG9GQUFvRjtJQUVwRixJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkUsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxvT0FBb087SUFFcE8sSUFBSSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBbVQ7UUFDcFUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUVELHlTQUF5UztJQUV6UyxJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkUsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUVELHlHQUF5RztJQUV6RyxJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUVELHVIQUF1SDtJQUV2SCxJQUFJLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUVELDBFQUEwRTtJQUUxRSxJQUFJLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUVELDBIQUEwSDtJQUUxSCxJQUFJLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNFLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFvQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBRUQseUVBQXlFO0lBRXpFLElBQUksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBK0I7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkUsQ0FBQztJQUVELDRGQUE0RjtJQUU1RixJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEUsQ0FBQztJQUVELHNKQUFzSjtJQUV0SixJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUVELG9LQUFvSztJQUVwSyxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELG9RQUFvUTtJQUVwUSxJQUFJLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVFLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFVO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdFLENBQUM7SUFFRCw4UEFBOFA7SUFFOVAsSUFBSSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBVTtRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsNk1BQTZNO0lBRTdNLElBQUksb0JBQW9CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQVU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRixDQUFDO0lBRUQsNk1BQTZNO0lBRTdNLElBQUksb0JBQW9CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQVU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRixDQUFDO0lBRUQsOENBQThDO0lBRTlDLElBQUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQW1DO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNFLENBQUM7SUFFRCwyR0FBMkc7SUFFM0csSUFBSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCx5R0FBeUc7SUFFekcsSUFBSSxpQkFBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9FLENBQUM7SUFFRCxrSUFBa0k7SUFFbEksSUFBSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxtUEFBbVA7SUFFblAsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFFRCwySEFBMkg7SUFFM0gsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUF1QjtRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RSxDQUFDO0lBRUQseUZBQXlGO0lBRXpGLElBQUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUVELHFJQUFxSTtJQUVySSxJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUVELG9IQUFvSDtJQUVwSCxJQUFJLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUVELG9FQUFvRTtJQUVwRSxJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUVELGdTQUFnUztJQUVoUyxJQUFJLG1CQUFtQjtRQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoRixDQUFDO0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxLQUFVO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakYsQ0FBQztJQUVELHFFQUFxRTtJQUVyRSxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELGdFQUFnRTtJQUVoRSxJQUFJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEUsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUVELHNIQUFzSDtJQUV0SCxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWtDO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCwwR0FBMEc7SUFFMUcsSUFBSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCxrR0FBa0c7SUFFbEcsSUFBSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCxzZkFBc2Y7SUFFdGYsSUFBSSxnQkFBZ0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDN0UsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBVTtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlFLENBQUM7SUFFRCxxSkFBcUo7SUFFckosSUFBSSxzQkFBc0I7UUFDekIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkYsQ0FBQztJQUNELElBQUksc0JBQXNCLENBQUMsS0FBYztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BGLENBQUM7SUFFRCx1S0FBdUs7SUFFdkssSUFBSSxpQkFBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9FLENBQUM7SUFFRCx3UkFBd1I7SUFFeFIsSUFBSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFrQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsd0RBQXdEO0lBRXhELElBQUksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsaUVBQWlFO0lBRWpFLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsbVNBQW1TO0lBRW5TLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsK0VBQStFO0lBRS9FLElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsaU1BQWlNO0lBRWpNLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsb0pBQW9KO0lBRXBKLElBQUksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBdUI7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUVELHNMQUFzTDtJQUV0TCxJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUVELGtIQUFrSDtJQUVsSCxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQW1CO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ25FLENBQUM7SUFrTkQ7OztNQUdFO0lBQ1EsU0FBUyxDQUFDLE9BQVksRUFBRSxRQUFpQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNuRDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxPQUFPLENBQUMsVUFBdUIsRUFBRSxPQUFvQjtRQUN4RCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLE9BQU8sQ0FBQyxJQUFVO1FBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFNBQVMsQ0FBQyxJQUFVO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFNBQVMsQ0FBQyxJQUFtQztRQUNoRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLFVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxVQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25DO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFFBQVEsQ0FBQyxNQUF1QjtRQUNuQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLGNBQWM7UUFDakIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLElBQUksQ0FBQyxNQUF1QjtRQUMvQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxRQUFRLENBQUMsSUFBbUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxPQUFPO1FBQ1YsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O0lBR0c7SUFDVSxhQUFhLENBQUMsSUFBSTs7WUFDOUIsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7O01BRUU7SUFDUSxNQUFNLENBQUMsTUFBdUI7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxTQUFTO1FBQ1osSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7Ozs7SUFLRztJQUNVLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVM7O1lBQ3RELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQzdFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7OztJQUdHO0lBQ1UsU0FBUyxDQUFDLFNBQVM7O1lBQy9CLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN2RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKOzs7SUFHRztJQUNVLE9BQU8sQ0FBQyxFQUFFOztZQUN0QixNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtnQkFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO3dCQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7O0lBR0c7SUFDVSxnQkFBZ0IsQ0FBQyxFQUFFOztZQUMvQixNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtnQkFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO3dCQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKOztJQUVHO0lBQ1UsUUFBUTs7WUFDcEIsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7TUFFRTtJQUNRLFNBQVMsQ0FBQyxLQUE2YTtRQUMxYixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztNQUdFO0lBQ1EsUUFBUSxDQUFDLElBQW1DLEVBQUUsU0FBaUI7UUFDbEUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLGtCQUFrQjtRQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsZUFBZTtRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxhQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLFlBQVk7UUFDZixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxVQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25DO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxVQUFVLENBQUMsSUFBbUMsRUFBRSxNQUFnQjtRQUNuRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMvQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFlBQVksQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLFNBQVM7UUFDWixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsSUFBSSxDQUFDLE1BQXVCO1FBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsY0FBYztRQUNqQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsVUFBVSxDQUFDLElBQXFCO1FBQ25DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFlBQVksQ0FBQyxJQUFxQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztNQUdFO0lBQ1EsVUFBVSxDQUFDLElBQW1DLEVBQUUsT0FBVztRQUM5RCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxZQUFZLENBQUMsU0FBaUIsRUFBRSxPQUFXO1FBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUdKLElBQUksVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRSxlQUFlO1FBQ2IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDeEQsS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7Z0JBQy9CLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDO2lCQUM5RDthQUNEO1NBQ0Q7SUFDRixDQUFDO0lBRUQsd0NBQXdDO0lBQ2hDLE1BQU07UUFDUCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRWpGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBRWpHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUV6RyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFFbkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFFakcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFFakcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FB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M0Q7SUFBVCxNQUFNLEVBQUU7b0RBQTZEO0FBSTVEO0lBQVQsTUFBTSxFQUFFO2lEQUEwRDtBQUl6RDtJQUFULE1BQU0sRUFBRTsrQ0FBd0Q7QUFRdkQ7SUFBVCxNQUFNLEVBQUU7a0RBQTJEO0FBSTFEO0lBQVQsTUFBTSxFQUFFOytDQUF3RDtBQU92RDtJQUFULE1BQU0sRUFBRTt3REFBaUU7QUFPaEU7SUFBVCxNQUFNLEVBQUU7a0RBQTJEO0FBTzFEO0lBQVQsTUFBTSxFQUFFO3FEQUE4RDtBQVE3RDtJQUFULE1BQU0sRUFBRTtxREFBOEQ7QUFPN0Q7SUFBVCxNQUFNLEVBQUU7b0RBQTZEO0FBTzVEO0lBQVQsTUFBTSxFQUFFOzBEQUFtRTtBQWgyQmhFLGVBQWU7SUFKM0IsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsOEJBQThCO0tBQ2xFLENBQUM7R0FFVyxlQUFlLENBa29EM0I7U0Fsb0RZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLYW5iYW4gfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEthbmJhbkFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlLCBLYW5iYW5Db2x1bW5PcmllbnRhdGlvbiwgS2FuYmFuQ29sdW1uRWRpdE1vZGUsIEthbmJhbkhlYWRlclBvc2l0aW9uLCBLYW5iYW5IaWVyYXJjaHksIEthbmJhblNlbGVjdGlvbk1vZGUsIEthbmJhblRhc2tQb3NpdGlvbiwgS2FuYmFuVGFza1N1YlRhc2tzLCBLYW5iYW5Db2x1bW4sIEthbmJhbkRhdGFTb3VyY2UsIEthbmJhblN3aW1sYW5lLCBLYW5iYW5Qcmlvcml0eSwgS2FuYmFuVXNlciwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBLYW5iYW5BZGROZXdCdXR0b25EaXNwbGF5TW9kZSwgS2FuYmFuQ29sdW1uT3JpZW50YXRpb24sIEthbmJhbkNvbHVtbkVkaXRNb2RlLCBLYW5iYW5IZWFkZXJQb3NpdGlvbiwgS2FuYmFuSGllcmFyY2h5LCBLYW5iYW5TZWxlY3Rpb25Nb2RlLCBLYW5iYW5UYXNrUG9zaXRpb24sIEthbmJhblRhc2tTdWJUYXNrcywgS2FuYmFuQ29sdW1uLCBLYW5iYW5EYXRhU291cmNlLCBLYW5iYW5Td2ltbGFuZSwgS2FuYmFuUHJpb3JpdHksIEthbmJhblVzZXIsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEthbmJhbiB9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0ZXhwb3J0QXM6ICdzbWFydC1rYW5iYW4nLFx0c2VsZWN0b3I6ICdzbWFydC1rYW5iYW4sIFtzbWFydC1rYW5iYW5dJ1xufSlcblxuZXhwb3J0IGNsYXNzIEthbmJhbkNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxLYW5iYW4+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBLYW5iYW47XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IEthbmJhbjtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8S2FuYmFuPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWthbmJhbicpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBjb2x1bW4gcmVvcmRlcmluZy4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlIGFuZCBhbGxvd0RyYWcgaXMgZW5hYmxlZCwgdXNlcnMgd2lsbCBiZSBhYmxlIHRvIHJlb2RlciBjb2x1bW5zIHRocm91Z2ggZHJhZyAmIGRyb3AuIEZvciBleGFtcGxlOiBDbGljayBhbmQgZHJhZyB0aGUgZmlyc3QgY29sdW1uJ3MgaGVhZGVyIGFuZCBkcm9wIGl0IG92ZXIgYW5vdGhlciBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0NvbHVtblJlb3JkZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtblJlb3JkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93Q29sdW1uUmVvcmRlcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtblJlb3JkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBjb2x1bW4gZWRpdGluZy4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB1c2VycyB3aWxsIGJlIGFibGUgdG8gZHluYW1pY2FsbHkgY2hhbmdlIHRoZSBjb2x1bW4ncyBoZWFkZXIgbGFiZWwgYnkgZG91YmxlIGNsaWNraW5nIG9uIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dDb2x1bW5FZGl0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5FZGl0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0NvbHVtbkVkaXQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5FZGl0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgY29sdW1uIHJlbW92aW5nLiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHVzZXJzIHdpbGwgYmUgYWJsZSB0byBkeW5hbWljYWxseSByZW1vdmUgYSBjb2x1bW4gdGhyb3VnaCB0aGUgY29sdW1uIGFjdGlvbnMgbWVudS4gdGhlICdjb2x1bW5BY3Rpb25zJyBwcm9wZXJ0eSBzaG91bGQgYmUgdHJ1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93Q29sdW1uUmVtb3ZlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5SZW1vdmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93Q29sdW1uUmVtb3ZlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uUmVtb3ZlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgY29sdW1uIGhpZGluZy4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB1c2VycyB3aWxsIGJlIGFibGUgdG8gZHluYW1pY2FsbHkgaGlkZSBhIGNvbHVtbiB0aHJvdWdoIHRoZSBjb2x1bW4gYWN0aW9ucyBtZW51LiB0aGUgJ2NvbHVtbkFjdGlvbnMnIHByb3BlcnR5IHNob3VsZCBiZSB0cnVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dDb2x1bW5IaWRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5IaWRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0NvbHVtbkhpZGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5IaWRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNvbHVtbiBidXR0b25zIGZvciBhZGRpbmcgdGFza3MuIEEgcGFydGljdWxhciBidXR0b24gY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgYWRkTmV3QnV0dG9uIGluIHRoZSBjb2x1bW4ncyBkZWZpbml0aW9uIHRvIGZhbHNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWRkTmV3QnV0dG9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3QnV0dG9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3QnV0dG9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgYWRkIGJ1dHRvbiBpcyB2aXNpYmxlIGluIHRoZSBjb2x1bW4gaGVhZGVyIGFuZC9vciBhZnRlciB0aGUgdGFza3MgaW4gdGhlIGNvbHVtbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlKCk6IEthbmJhbkFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdCdXR0b25EaXNwbGF5TW9kZSh2YWx1ZTogS2FuYmFuQWRkTmV3QnV0dG9uRGlzcGxheU1vZGUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3QnV0dG9uRGlzcGxheU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgYSBjb2x1bW4gd2l0aCBhIGJ1dHRvbiBmb3IgYWRkaW5nIG5ldyBzdGF0dXMgY29sdW1ucyB0byB0aGUgS2FuYmFuIHdpbGwgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWRkTmV3Q29sdW1uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3Q29sdW1uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdDb2x1bW4odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3Q29sdW1uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHdpZHRoIG9mIHRoZSBhZGQgbmV3IGNvbHVtbi4gVGhlIHByb3BlcnR5IGlzIHVzZWQsIGlmIHRoZSAnY29sdW1uV2lkdGgnIHByb3BlcnR5IGlzIHNldCwgdG9vLiBJdCBzcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBkeW5hbWljIG5ldyBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBhZGROZXdDb2x1bW5XaWR0aCgpOiBudW1iZXIgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0NvbHVtbldpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdDb2x1bW5XaWR0aCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGROZXdDb2x1bW5XaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdGhlIGRyYWdnaW5nIG9mIHRhc2tzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dEcmFnKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dEcmFnIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0RyYWcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dEcmFnID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0aGUgZHJvcHBpbmcgb2YgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0Ryb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0Ryb3AgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93RHJvcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0Ryb3AgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBwcm9wZXJ0eSBjaGFuZ2VzIHRoZSB2aXN1YWwgYXBwZWFsIG9mIHRoZSBLYW5iYW4gY29sdW1ucyBhbmQgdGFza3MuIFdoZW4gc2V0IHRvIHRydWUgYW5kIHRoZSBLYW5iYW4gY29sdW1ucyBoYXZlIHRoZWlyICdjb2xvcicgcHJvcGVydHkgc2V0LCB0aGUgY29sb3IgaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSB0YXNrcyBhbmQgZWRpdCBkaWFsb2cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhcHBseUNvbHVtbkNvbG9yVG9UYXNrcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGx5Q29sdW1uQ29sb3JUb1Rhc2tzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhcHBseUNvbHVtbkNvbG9yVG9UYXNrcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcHBseUNvbHVtbkNvbG9yVG9UYXNrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGF1dG8gbG9hZCBzdGF0ZSBmcm9tIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBJbmZvcm1hdGlvbiBhYm91dCB0YXNrcyBhbmQgdGhlaXIgcG9zaXRpb24gYW5kIHNlbGVjdGVkIHN0YXRlLCBmaWx0ZXJpbmcsIHNvcnRpbmcsIGNvbGxhcHNlZCBjb2x1bW5zLCBhcyB3ZWxsIGFzIHRoZSB2YWx1ZXMgb2YgdGhlIHByb3BlcnRpZXMgdGFza0FjdGlvbnMsIHRhc2tDb21tZW50cywgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvZ3Jlc3MsIHRhc2tUYWdzLCBhbmQgdGFza1VzZXJJY29uIGlzIGxvYWRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvTG9hZFN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBhdXRvIHNhdmUgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuIEluZm9ybWF0aW9uIGFib3V0IHRhc2tzIGFuZCB0aGVpciBwb3NpdGlvbiBhbmQgc2VsZWN0ZWQgc3RhdGUsIGZpbHRlcmluZywgc29ydGluZywgY29sbGFwc2VkIGNvbHVtbnMsIGFzIHdlbGwgYXMgdGhlIHZhbHVlcyBvZiB0aGUgcHJvcGVydGllcyB0YXNrQWN0aW9ucywgdGFza0NvbW1lbnRzLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksIHRhc2tQcm9ncmVzcywgdGFza1RhZ3MsIGFuZCB0YXNrVXNlckljb24gaXMgc2F2ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2F2ZVN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NhdmVTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgY29sdW1ucyBoZWlnaHQgZGVwZW5kaW5nIG9uIHRoZSB0YXNrcyBpbnNpZGUgdGhlIGNvbHVtbi4gVGhlIGVmZmVjdCBvZiB0aGlzIHByb3BlcnR5IGlzIG9ic2VydmVkIHdoZW4gJ2NvbHVtbkNvbG9yRW50aXJlU3VyZmFjZScgaXMgdHJ1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Db2x1bW5IZWlnaHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ29sdW1uSGVpZ2h0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvQ29sdW1uSGVpZ2h0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Db2x1bW5IZWlnaHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIGNvbGxhcHNpbmcgdGhlIGNhcmQgY29udGVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbGxhcHNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2libGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbGxhcHNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNpYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc3BsYXlzIGNvbG9ycyBpbiB0aGUgY29sdW1uIGhlYWRlciwgd2hlbiB0aGUgY29sdW1uJ3MgY29sb3IgcHJvcGVydHkgaXMgc2V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uQ29sb3JzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uQ29sb3JzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5Db2xvcnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uQ29sb3JzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIEthbmJhbiBjb2x1bW5zIHdpZHRoLiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgc2V0LCB0aGUga2FuYmFuIGNvbHVtbnMgd2lkdGggaXMgc2V0IGFuZCBhIGhvcml6b250YWwgc2Nyb2xsYmFyIG1heSBhcHBlYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5XaWR0aCgpOiBudW1iZXIgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbldpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5XaWR0aCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5XaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBiYWNrZ3JvdW5kIGluIHRoZSBLYW5iYW4gY29sdW1uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uQ29sb3JFbnRpcmVTdXJmYWNlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uQ29sb3JFbnRpcmVTdXJmYWNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5Db2xvckVudGlyZVN1cmZhY2UodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uQ29sb3JFbnRpcmVTdXJmYWNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc3BsYXlzIGEgY29sdW1uIGZvb3RlciB3aGljaCBzaG93cyB0aGUgc3VtbWFyeSBvZiB0aGUgY29sdW1uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uRm9vdGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uRm9vdGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5Gb290ZXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uRm9vdGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgY29sdW1ucyBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiBLYW5iYW5Db2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5zKHZhbHVlOiBLYW5iYW5Db2x1bW5bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNvbHVtbiBhY3Rpb25zIGljb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5BY3Rpb25zKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uQWN0aW9ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uQWN0aW9ucyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5BY3Rpb25zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0YXNrIGNvdW50IGluZm9ybWF0aW9uIGlzIGRpc3BsYXllZCBpbiBjb2x1bW4gaGVhZGVycy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblN1bW1hcnkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5TdW1tYXJ5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5TdW1tYXJ5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblN1bW1hcnkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY29sdW1uIGhlYWRlciBoYXMgYSB0ZW1wbGF0ZS4gWW91IGNhbiBwYXNzICdzdHJpbmcnLCAnZnVuY3Rpb24nIG9yIEhUTUxUZW1wbGF0ZUVsZW1lbnQgYXMgYSB2YWx1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5IZWFkZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uSGVhZGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5IZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb2x1bW4gZWRpdCBiZWhhdmlvci4gV2l0aCB0aGUgJ2hlYWRlcicgb3B0aW9uLCBlZGl0IHN0YXJ0cyBvbiBkb3VibGUgY2xpY2sgb24gdGhlIGNvbHVtbidzIGxhYmVsLiBJbiAnbWVudScgbW9kZSwgZWRpdCBpcyBhbGxvd2VkIGZyb20gdGhlICdjb2x1bW5BY3Rpb25zJyBtZW51LiBJbiAnaGVhZGVyQW5kTWVudScgb3B0aW9uLCBjb2x1bW4gZWRpdGluZyBpbmNsdWRlcyBib3RoIG9wdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5FZGl0TW9kZSgpOiBLYW5iYW5Db2x1bW5FZGl0TW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5FZGl0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uRWRpdE1vZGUodmFsdWU6IEthbmJhbkNvbHVtbkVkaXRNb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkVkaXRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgdXNlci4gSGFzIHRvIGNvcnJlc3BvbmQgdG8gdGhlIGlkIG9mIGFuIGl0ZW0gZnJvbSB0aGUgdXNlcnMgcHJvcGVydHkvYXJyYXkuIERlcGVuZGluZyBvbiB0aGUgY3VycmVudCB1c2VyLCBkaWZmZXJlbnQgcHJpdmlsZWdlcyBhcmUgZW5hYmxlZC4gSWYgbm8gY3VycmVudCB1c2VyIGlzIHNldCwgcHJpdmlsZWdlcyBkZXBlbmQgb24gdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY3VycmVudFVzZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRVc2VyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXJyZW50VXNlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRVc2VyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBkZWZhdWx0IGRpYWxvZyBmb3IgYWRkaW5nL3JlbW92aW5nIHRhc2tzIG9yIGNvbW1lbnRzIGlzIGRpc2FibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZURpYWxvZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEaWFsb2cgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVEaWFsb2codmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURpYWxvZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYSBjdXN0b21pemF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgZGlhbG9nLiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgZGlhbG9nIGxvb2sgb3IgdG8gcmVwbGFjZSBpdC4gVGhlIEthbmJhbiBjYWxscyB0aGlzIGZ1bmN0aW9uIHdpdGggNSBhcmd1bWVudHMgLSAnZGlhbG9nJywgJ3Rhc2tPckNvbW1lbnQnLCAnZWRpdG9ycycsICdwdXJwb3NlJyBhbmQgJ3R5cGUnLiBUaGUgZGlhbG9nIGlzIHRoZSAnc21hcnQtd2luZG93JyBpbnN0YW5jZSB1c2VkIGFzIGEgZGVmYXVsdCBLYW5iYW4gZGlhbG9nLiAndGFza09yQ29tbWVudCcgaXMgb2JqZWN0IHdoaWNoIGNvdWxkIGJlIEthbmJhbiB0YXNrIG9yIGNvbW1lbnQuICdwdXJwb3NlJyBjb3VsZCBiZSAnYWRkJyBvciAnZWRpdCcgYW5kICd0eXBlJyBjb3VsZCBiZSAndGFzaycgb3IgJ2NvbHVtbicgZGVwZW5kaW5nIG9uIHRoZSBhY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaWFsb2dDdXN0b21pemF0aW9uRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpYWxvZ0N1c3RvbWl6YXRpb25GdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlhbG9nQ3VzdG9taXphdGlvbkZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlhbG9nQ3VzdG9taXphdGlvbkZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkaWFsb2cgaXMgcmVuZGVyZWQuIFRoZSBLYW5iYW4gY2FsbHMgdGhpcyBmdW5jdGlvbiB3aXRoIDYgYXJndW1lbnRzIC0gJ2RpYWxvZycsICdlZGl0b3JzJywgJ2xhYmVscycsICd0YWJzJywgJ2xheW91dCcsICd0YXNrT3JDb21tZW50Jy4gVGhlIGRpYWxvZyBpcyB0aGUgJ3NtYXJ0LXdpbmRvdycgaW5zdGFuY2UgdXNlZCBhcyBhIGRlZmF1bHQgS2FuYmFuIGRpYWxvZy4gJ3Rhc2tPckNvbW1lbnQnIGlzIG9iamVjdCB3aGljaCBjb3VsZCBiZSBLYW5iYW4gdGFzayBvciBjb21tZW50LiAnZWRpdG9ycycsICdsYWJlbHMnLCAndGFicycgYW5kICdsYXlvdXQnIGFyZSBKU09OIG9iamVjdHMgd2l0aCBrZXkgd2hpY2ggZGVzY3JpYmVzIHRoZSBlbGVtZW50IHR5cGUgYW5kIHZhbHVlIHdoaWNoIGlzIEhUTUwgRWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpYWxvZ1JlbmRlcmVkKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaWFsb2dSZW5kZXJlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlhbG9nUmVuZGVyZWQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaWFsb2dSZW5kZXJlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRhIHNvdXJjZSB0byBiZSB2aXN1YWxpemVkIGluIHRoZSBrYW5iYW4gYm9hcmQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IEthbmJhbkRhdGFTb3VyY2VbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBLYW5iYW5EYXRhU291cmNlW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGUgcmVsYXRpb24gKG1hcHBpbmcpIGJldHdlZW4gdGhlIEthbmJhbidzIGRlZmF1bHQgZmllbGRzIChrZXl3b3JkcykgYW5kIHRoZSBkYXRhIGZpZWxkcyBmcm9tIHRoZSBkYXRhIHNvdXJjZS4gTm90IG5lY2Vzc2FyeSBpZiBib3RoIG1hdGNoLiBPbmx5IHNvbWUgb2YgdGhlIGRlZmF1bHQgbWFwcGluZyBjYW4gYmUgb3ZlcndyaXR0ZW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlTWFwKCk6IHsgY2hlY2tsaXN0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmc7IGNvbW1lbnRzOiBzdHJpbmc7IGR1ZURhdGU6IHN0cmluZzsgaWQ6IHN0cmluZzsgcHJpb3JpdHk6IHN0cmluZzsgcHJvZ3Jlc3M6IHN0cmluZzsgc3RhcnREYXRlOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nOyBzd2ltbGFuZTogc3RyaW5nOyB0YWdzOiBzdHJpbmc7IHRleHQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmc7IGNyZWF0ZWRVc2VySWQ6IHN0cmluZzsgdXBEYXRlZFVzZXJJZDogc3RyaW5nOyBjcmVhdGVkRGF0ZTogRGF0ZTsgdXBEYXRlZERhdGU6IERhdGU7fSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlTWFwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlTWFwKHZhbHVlOiB7IGNoZWNrbGlzdDogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBjb21tZW50czogc3RyaW5nOyBkdWVEYXRlOiBzdHJpbmc7IGlkOiBzdHJpbmc7IHByaW9yaXR5OiBzdHJpbmc7IHByb2dyZXNzOiBzdHJpbmc7IHN0YXJ0RGF0ZTogc3RyaW5nOyBzdGF0dXM6IHN0cmluZzsgc3dpbWxhbmU6IHN0cmluZzsgdGFnczogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nOyBjcmVhdGVkVXNlcklkOiBzdHJpbmc7IHVwRGF0ZWRVc2VySWQ6IHN0cmluZzsgY3JlYXRlZERhdGU6IERhdGU7IHVwRGF0ZWREYXRlOiBEYXRlO30pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZU1hcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBvZmZzZXQgb2YgdGhlIGRyYWcgZmVlZGJhY2sgZWxlbWVudCBmcm9tIHRoZSBtb3VzZSBjdXJzb3Igd2hlbiBkcmFnZ2luZyB0YXNrcy4gVGhlIGZpcnN0IG1lbWJlciBvZiB0aGUgYXJyYXkgaXMgdGhlIGhvcml6b250YWwgb2Zmc2V0IGFuZCB0aGUgc2Vjb25kIG9uZSAtIHRoZSB2ZXJ0aWNhbCBvZmZzZXQuIElmIHNldCB0byAnYXV0bycsIHRoZSBvZmZzZXQgaXMgYmFzZWQgb24gdGhlIG1vdXNlIHBvc2l0aW9uIHdoZW4gdGhlIGRyYWdnaW5nIHN0YXJ0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmFnT2Zmc2V0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhZ09mZnNldCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnT2Zmc2V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRhc2tzIGNhbiBiZSBlZGl0ZWQgKGluY2x1ZGluZyB0aGUgYXNzaWduaW5nIG9mIHVzZXJzIHRvIHRhc2tzKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGVkaXRhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWRpdGFibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZm9ybWF0IHN0cmluZyBvZiB0aGUgXCJEdWUgZGF0ZVwiIGxhYmVsIGFuZCB0aGUgXCJTdGFydCBkYXRlXCIgYW5kIFwiRHVlIGRhdGVcIiBlZGl0b3JzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9ybWF0U3RyaW5nRGF0ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0U3RyaW5nRGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9ybWF0U3RyaW5nRGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ0RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBmb3JtYXQgc3RyaW5nIG9mIGNvbW1lbnRzIHRpbWUgc3RhbXAuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmb3JtYXRTdHJpbmdUaW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb3JtYXRTdHJpbmdUaW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmb3JtYXRTdHJpbmdUaW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0U3RyaW5nVGltZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGhlYWRlciBwb3NpdGlvbi4gVGhlIGhlYWRlciBjb250YWlucyB0aGUgQ3VzdG9taXplLCBGaWx0ZXIsIFNvcnQsIGFuZCBTZWFyY2ggYnV0dG9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclBvc2l0aW9uKCk6IEthbmJhbkhlYWRlclBvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJQb3NpdGlvbih2YWx1ZTogS2FuYmFuSGVhZGVyUG9zaXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB3YXkgY29sdW1uIGhpZXJhcmNoeSBpcyByZXByZXNlbnRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZXJhcmNoeSgpOiBLYW5iYW5IaWVyYXJjaHkgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGllcmFyY2h5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWVyYXJjaHkodmFsdWU6IEthbmJhbkhpZXJhcmNoeSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWVyYXJjaHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsb2NhbGUuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIHdpZGdldCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBjYW4gYmUgdXNlZCBmb3IgY3VzdG9taXppbmcgdGhlIHRhc2tzIHJlbmRlcmluZy4gVGhlIEthbmJhbiBjYWxscyBpdCB3aXRoIDIgYXJndW1lbnRzIC0gdGFzayBodG1sIGVsZW1lbnQgYW5kIHRhc2sgZGF0YS4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uVGFza1JlbmRlcigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25UYXNrUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblRhc2tSZW5kZXIodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblRhc2tSZW5kZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggY2FuIGJlIHVzZWQgZm9yIGN1c3RvbWl6aW5nIHRoZSBmaWx0ZXIgaXRlbXMuIFRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCAxIGFyZ3VtZW50IC0gQXJyYXkgb2YgaXRlbXMgd2hpY2ggd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGZpbHRlciBkcm9wIGRvd24uIFlvdSBjYW4gbW9kaWZ5IHRoYXQgYXJyYXkgdG8gcmVtb3ZlIG9yIHVwZGF0ZSBpdGVtcyB0byBmaWx0ZXIgYnkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkZpbHRlclByZXBhcmUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uRmlsdGVyUHJlcGFyZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25GaWx0ZXJQcmVwYXJlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25GaWx0ZXJQcmVwYXJlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBjdXN0b21pemluZyB0aGUgc29ydCBpdGVtcy4gVGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIDEgYXJndW1lbnQgLSBBcnJheSBvZiBpdGVtcyB3aGljaCB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgc29ydCBkcm9wIGRvd24uIFlvdSBjYW4gbW9kaWZ5IHRoYXQgYXJyYXkgdG8gcmVtb3ZlIG9yIHVwZGF0ZSBpdGVtcyB0byBzb3J0IGJ5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Tb3J0UHJlcGFyZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Tb3J0UHJlcGFyZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Tb3J0UHJlcGFyZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uU29ydFByZXBhcmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggY2FuIGJlIHVzZWQgZm9yIGN1c3RvbWl6aW5nIHRoZSBjb2x1bW4gaGVhZGVyIHJlbmRlcmluZy4gVGhlIEthbmJhbiBjYWxscyBpdCB3aXRoIDMgYXJndW1lbnRzIC0gY29sdW1uIGhlYWRlciBodG1sIGVsZW1lbnQgYW5kIGNvbHVtbiBkYXRhIGFuZCBjb2x1bW4gZGF0YSBmaWVsZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ29sdW1uSGVhZGVyUmVuZGVyKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtbkhlYWRlclJlbmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25Db2x1bW5IZWFkZXJSZW5kZXIodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtbkhlYWRlclJlbmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBjYW4gYmUgdXNlZCBmb3IgY3VzdG9taXppbmcgdGhlIGNvbHVtbiBmb290ZXIgcmVuZGVyaW5nLiBUaGUgS2FuYmFuIGNhbGxzIGl0IHdpdGggMyBhcmd1bWVudHMgLSBjb2x1bW4gaGVhZGVyIGh0bWwgZWxlbWVudCBhbmQgY29sdW1uIGRhdGEgYW5kIGNvbHVtbiBkYXRhIGZpZWxkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5Gb290ZXJSZW5kZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uRm9vdGVyUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtbkZvb3RlclJlbmRlcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uRm9vdGVyUmVuZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgc2VsZWN0aW9uIG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25Nb2RlKCk6IEthbmJhblNlbGVjdGlvbk1vZGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogS2FuYmFuU2VsZWN0aW9uTW9kZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSB0YXNrcyBoaXN0b3J5IHdpbGwgYmUgc3RvcmVkIGFuZCBkaXNwbGF5ZWQgaW4gdGhlIHRhc2sgZGlhbG9nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3RvcmVIaXN0b3J5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RvcmVIaXN0b3J5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzdG9yZUhpc3RvcnkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RvcmVIaXN0b3J5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdGFzayBoaXN0b3J5IGl0ZW1zIHRoYXQgd2lsbCBiZSBzdG9yZWQgd2hlbiBzdG9yZUhpc3RvcnkgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHN0b3JlSGlzdG9yeUl0ZW1zKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdG9yZUhpc3RvcnlJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3RvcmVIaXN0b3J5SXRlbXModmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdG9yZUhpc3RvcnlJdGVtcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGhlIGVkaXQgZGlhbG9nIGlzIGRpc3BsYXllZCBpbiByZWFkb25seSBtb2RlLiBJbiB0aGF0IG1vZGUgaXQgc2hvd3Mgb25seSB0aGUgdGFzayBkZXRhaWxzLCBidXQgdGhlIGVkaXRpbmcgaXMgZGlzYWJsZWQuIEhvd2V2ZXIsIGlmIGNvbW1lbnRzIGFyZSBlbmFibGVkLCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFkZCBjb21tZW50cyBpbiB0aGUgZGlhbG9nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBzd2ltbGFuZXMgaW4gdGhlIGthbmJhbiBib2FyZC4gU3ViLWNvbHVtbnMgYXJlIG5vdCBhcHBsaWNhYmxlIHdoZW4gc3dpbWxhbmVzIGFyZSBwcmVzZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3dpbWxhbmVzKCk6IEthbmJhblN3aW1sYW5lW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzd2ltbGFuZXModmFsdWU6IEthbmJhblN3aW1sYW5lW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiBhdCB3aGljaCB0byBzdGFydCB0aGUgc3dpbWxhbmVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3dpbWxhbmVzRnJvbSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzRnJvbSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3dpbWxhbmVzRnJvbSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lc0Zyb20gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBpbmRleCBvZiB0aGUgY29sdW1uIGF0IHdoaWNoIHRvIGVuZCB0aGUgc3dpbWxhbmVzLiBCeSBkZWZhdWx0LCBzd2ltbGFuZXMgZW5kIGF0IHRoZSBsYXN0IGNvbHVtbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHN3aW1sYW5lc1RvKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2ltbGFuZXNUbyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3dpbWxhbmVzVG8odmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2ltbGFuZXNUbyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFsbG93ZWQgdGFncy4gSWYgbm8gdGFncyBhcmUgbGlzdGVkLCBhbGwgdGFncyBmcm9tIHRoZSBkYXRhIHNvdXJjZSBhcmUgYWxsb3dlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhZ3MoKTogYW55W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFncyh2YWx1ZTogYW55W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0YXNrIGFjdGlvbnMgaWNvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tBY3Rpb25zKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0FjdGlvbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tBY3Rpb25zKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tBY3Rpb25zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlcHJlc2VudHMgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgdGFzayBhY3Rpb25zIG1lbnUgaXMgY3JlYXRlZC4gVGhlIHRhc2sgYWN0aW9ucyBlbGVtZW50IGlzIHBhc3NlZCBhcyBwYXJhbWV0ZXIgYW5kIGFsbG93cyB5b3UgdG8gY3VzdG9taXplIHRoZSBtZW51LiBFeGFtcGxlOiAobGlzdCkgPT4geyBsaXN0LmlubmVySFRNTCA9ICdDdXN0b20gSXRlbSc7IGxpc3Qub25jbGljayA9ICgpID0+IHsgYWxlcnQoJ2NsaWNrZWQnKTsgfX0gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tBY3Rpb25zUmVuZGVyZWQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tBY3Rpb25zUmVuZGVyZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tBY3Rpb25zUmVuZGVyZWQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQWN0aW9uc1JlbmRlcmVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRhc2sgY29tbWVudHMgaWNvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tDb21tZW50cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDb21tZW50cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza0NvbW1lbnRzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDb21tZW50cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0YXNrIGR1ZSBpY29uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza0R1ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tEdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tEdWUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0R1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0YXNrcyBjYW4gYmUgc2hvd24gaW4gYWxsIGxldmVscyBvZiBjb2x1bW4gaGllcmFyY2h5IG9yIG9ubHkgb24gbGVhZiBjb2x1bW5zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1Bvc2l0aW9uKCk6IEthbmJhblRhc2tQb3NpdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQb3NpdGlvbih2YWx1ZTogS2FuYmFuVGFza1Bvc2l0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0YXNrIHByaW9yaXR5IGljb24gKHNob3duIHdoZW4gcHJpb3JpdHkgaXMgbG93IG9yIGhpZ2gpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1ByaW9yaXR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1ByaW9yaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrUHJpb3JpdHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1ByaW9yaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGFzayBwcm9ncmVzcyBiYXIgYW5kIHRoZSBjb21wbGV0ZWQgc3ViLXRhc2tzIGxhYmVsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1Byb2dyZXNzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1Byb2dyZXNzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrUHJvZ3Jlc3ModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1Byb2dyZXNzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHRhc2sgY3VzdG9tIGZpZWxkcyBkaXNwbGF5ZWQgaW4gdGhlIGNhcmQuIEVhY2ggYXJyYXkgaXRlbSBzaG91bGQgaGF2ZSAnZGF0YUZpZWxkJywgJ2xhYmVsJyAnZGF0YVR5cGUnIGFuZCBvcHRpb25hbGx5ICd2aXNpYmxlJywgJ2ltYWdlJyBhbmQgJ2NvdmVyJyBwcm9wZXJ0aWVzLiBUaGUgJ2RhdGFGaWVsZCcgZGV0ZXJtaW5lcyB0aGUgdmFsdWUsIHRoZSBsYWJlbCBpcyBkaXNwbGF5ZWQgYXMgdGl0bGUsICdkYXRhVHlwZScgaXMgdXNlZCBmb3IgZm9ybWF0dGluZyBhbmQgJ3Zpc2libGUnIGRldGVybWluZXMgd2hldGhlciB0aGUgZmllbGQgd2lsbCBiZSBkaXNwbGF5ZWQuIElmIHlvdXIgc3RyaW5nIHJlcHJlc2VudHMgYW4gaW1hZ2UgZWl0aGVyIFVSTCBvciBCYXNlNjQsIHNldCBpbWFnZTogdHJ1ZS4gSWYgeW91IHdhbnQgdG8gZGlzcGxheSB0aGF0IGltYWdlIGFzIGEgY292ZXIgaW1hZ2UsIHNldCBjb3Zlcjp0cnVlLCB0b28uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrQ3VzdG9tRmllbGRzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ3VzdG9tRmllbGRzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrQ3VzdG9tRmllbGRzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0N1c3RvbUZpZWxkcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgdGFzaydzIGJhY2tncm91bmQgY29sb3IgZGVwZW5kcyBvbiB0aGUgdGFzaydzIGNvbG9yIHByb3BlcnR5LiBCeSBkZWZhdWx0IHRoZSBjb2xvciBpcyByZW5kZXJlZCB3aXRoaW4gdGhlIHRhc2sncyBsZWZ0IGJvcmRlci4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tDb2xvckVudGlyZVN1cmZhY2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29sb3JFbnRpcmVTdXJmYWNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrQ29sb3JFbnRpcmVTdXJmYWNlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDb2xvckVudGlyZVN1cmZhY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgYW4gaW5wdXQgaW4gdGhlIHRhc2sncyBjYXJkIGZvciBhZGRpbmcgZHluYW1pY2FsbHkgYSBzdWIgdGFzay4gVGhlICd0YXNrU3ViVGFza3MnIHByb3BlcnR5IHNob3VsZCBiZSBzZXQgdG8gYSB2YWx1ZSBkaWZmZXJlbnQgdGhhbiAnbm9uZScuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrU3ViVGFza3NJbnB1dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tTdWJUYXNrc0lucHV0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrU3ViVGFza3NJbnB1dCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrU3ViVGFza3NJbnB1dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSByZW5kZXJpbmcgbW9kZSBvZiBzdWIgdGFza3MuICdub25lJyAtIGRlZmF1bHQgdmFsdWUuIFN1YiB0YXNrcyBhcmUgZGlzcGxheWVkIG9ubHkgaW4gdGhlIGVkaXQgZGlhbG9nLiAnb25lUGVyUm93JyAtIGFsbCBzdWIgdGFza3MgYXJlIGRpc3BsYXllZCBpbiB0aGUgdGFzaydzIGNhcmQuICdvbmx5VW5maW5pc2hlZCcgLSBvbmx5IHRhc2tzIHdoaWNoIGFyZSBub3QgY29tcGxldGVkIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIHRhc2sncyBjYXJkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1N1YlRhc2tzKCk6IEthbmJhblRhc2tTdWJUYXNrcyB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrU3ViVGFza3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tTdWJUYXNrcyh2YWx1ZTogS2FuYmFuVGFza1N1YlRhc2tzIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tTdWJUYXNrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRhc2sgdGFncy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tUYWdzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1RhZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tUYWdzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tUYWdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRhc2sgdXNlciBpY29uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1VzZXJJY29uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1VzZXJJY29uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrVXNlckljb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1VzZXJJY29uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhIHRlbXBsYXRlIHRvIGJlIGFwcGxpZWQgdG8gdGFzayB0ZXh0LiBDYW4gYmUgYSBzdHJpbmcgYmVnaW5uaW5nIHdpdGggIyBhbmQgcmVmZXJlbmNpbmcgdGhlIGlkIG9mIGEgdGVtcGxhdGUgZWxlbWVudCBvbiB0aGUgcGFnZS4gQ2FuIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IG1vZGlmaWVzIHRoZSB0YXNrIHRleHQgb3IgdGhlIHRlbXBsYXRlIGl0c2VsZi4gRmluYWxseSwgaXQgY2FuIGFsc28gYmUgYSBzdHJpbmcgdGhhdCB3aWxsIGJlIHBhcnNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRleHRUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGV4dFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0ZXh0VGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50ZXh0VGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHByaW9yaXR5IGxpc3QgKGFzIGRlZmluZWQgYnkgdGhlIHByaW9yaXR5IHByb3BlcnR5KSB3aWxsIGJlIHNob3duIHdoZW4gY2xpY2tpbmcgdGhlIHByaW9yaXR5IGljb24uIE9ubHkgYXBwbGljYWJsZSBpZiBlZGl0YWJsZSBwcml2aWxlZ2VzIGFyZSBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcHJpb3JpdHlMaXN0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpb3JpdHlMaXN0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwcmlvcml0eUxpc3QodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpb3JpdHlMaXN0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHByaW9yaXR5IEthbmJhbiB0YXNrcyBjYW4gYmUgYXNzaWduZWQgdG8uIEV4YW1wbGU6IFt7bGFiZWw6ICdsb3cnLCB2YWx1ZTogJ2xvdyd9LCB7bGFiZWw6ICdoaWdoJywgdmFsdWU6ICdoaWdoJ31dICovXG5cdEBJbnB1dCgpXG5cdGdldCBwcmlvcml0eSgpOiBLYW5iYW5Qcmlvcml0eVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnByaW9yaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwcmlvcml0eSh2YWx1ZTogS2FuYmFuUHJpb3JpdHlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wcmlvcml0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVzZXIgbGlzdCAoYXMgZGVmaW5lZCBieSB0aGUgdXNlcnMgcHJvcGVydHkpIHdpbGwgYmUgc2hvd24gd2hlbiBjbGlja2luZyB0aGUgdXNlciBpY29uLiBPbmx5IGFwcGxpY2FibGUgaWYgZWRpdGFibGUgcHJpdmlsZWdlcyBhcmUgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVzZXJMaXN0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudXNlckxpc3QgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVzZXJMaXN0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVzZXJMaXN0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHVzZXJzIEthbmJhbiB0YXNrcyBjYW4gYmUgYXNzaWduZWQgdG8gYW5kIHRoZWlyIGNoYXJhY3RlcmlzdGljcyBhbmQgcHJpdmlsZWdlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHVzZXJzKCk6IEthbmJhblVzZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51c2VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdXNlcnModmFsdWU6IEthbmJhblVzZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51c2VycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgdGFzayBoYXMgYmVlbiB1cGRhdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHRhc2ssIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBvbGQgZGF0YSBvZiB0aGUgdGFza1xuXHQqICAgdGFzayAtIFRoZSBIVE1MIGVsZW1lbnQgb2YgdGhlIHRhc2sgd2hvc2UgZGF0YSBoYXMgYmVlbiBjaGFuZ2VkXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgZGF0YSBvZiB0aGUgdGFza1xuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBlZGl0L3Byb21wdCBkaWFsb2cgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBlZGl0L3Byb21wdCBkaWFsb2cgaXMgYWJvdXQgdG8gYmUgY2xvc2VkLiBUaGUgY2xvc2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIGFkZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGxhYmVsLCBcdGRhdGFGaWVsZCwgXHRjb2xsYXBzZWQpXG5cdCogICBsYWJlbCAtIFRoZSBjb2x1bW4gbGFiZWwuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCogICBjb2xsYXBzZWQgLSBUaGUgY29sdW1uJ3MgY29sbGFwc2VkIHN0YXRlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5BZGQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlbW92ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaXMgcmVvcmRlcmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZEluZGV4LCBcdGluZGV4LCBcdGNvbHVtbilcblx0KiAgIG9sZEluZGV4IC0gVGhlIGNvbHVtbidzIG9sZCBpbmRleC5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIG5ldyBpbmRleC5cblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4ncyBkYXRhIG9iamVjdCB3aXRoICdsYWJlbCcsICdkYXRhRmllbGQnIGFuZCAnY29sbGFwc2VkJyBmaWVsZHMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlb3JkZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIHVwZGF0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUsIFx0Y29sdW1uKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgY29sdW1uJ3Mgb2xkIGxhYmVsLlxuXHQqICAgdmFsdWUgLSBUaGUgY29sdW1uJ3MgbmV3IGxhYmVsLlxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbidzIGRhdGEgb2JqZWN0IHdpdGggJ2xhYmVsJywgJ2RhdGFGaWVsZCcgYW5kICdjb2xsYXBzZWQnIGZpZWxkcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBoZWFkZXIgaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRsYWJlbCwgXHRkYXRhRmllbGQsIFx0Y29sbGFwc2VkKVxuXHQqICAgbGFiZWwgLSBUaGUgY29sdW1uIGxhYmVsLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqICAgY29sbGFwc2VkIC0gVGhlIGNvbHVtbidzIGNvbGxhcHNlZCBzdGF0ZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGhlYWRlciBpcyBkb3VibGUgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRsYWJlbCwgXHRkYXRhRmllbGQsIFx0Y29sbGFwc2VkKVxuXHQqICAgbGFiZWwgLSBUaGUgY29sdW1uIGxhYmVsLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqICAgY29sbGFwc2VkIC0gVGhlIGNvbHVtbidzIGNvbGxhcHNlZCBzdGF0ZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uRG91YmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIHNob3duIGJ5IHVzaW5nIHRoZSBjb2x1bW4ncyBhY3Rpb24gbWVudSBvciB0aGUgS2FuYmFuJ3MgJ3Nob3cnIG1ldGhvZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRsYWJlbCwgXHRkYXRhRmllbGQpXG5cdCogICBsYWJlbCAtIFRoZSBjb2x1bW4gbGFiZWwuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblNob3c6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIGhpZGRlbiBieSB1c2luZyB0aGUgY29sdW1uJ3MgYWN0aW9uIG1lbnUgb3IgdGhlIEthbmJhbidzICdoaWRlJyBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkKVxuXHQqICAgbGFiZWwgLSBUaGUgY29sdW1uIGxhYmVsLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5IaWRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBpcyBjb2xsYXBzZWQgIGJ5IHVzaW5nIHRoZSBjb2x1bW4ncyBhY3Rpb24gbWVudSBvciB0aGUgS2FuYmFuJ3MgJ2NvbGxhcHNlJyBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkKVxuXHQqICAgbGFiZWwgLSBUaGUgY29sdW1uIGxhYmVsLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5Db2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaXMgZXhwYW5kZWQgYnkgdXNpbmcgdGhlIGNvbHVtbidzIGFjdGlvbiBtZW51IG9yIHRoZSBLYW5iYW4ncyAnZXhwYW5kJyBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkKVxuXHQqICAgbGFiZWwgLSBUaGUgY29sdW1uIGxhYmVsLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5FeHBhbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29tbWVudCBpcyBhZGRlZCB0byB0aGUgS2FuYmFuIFRhc2suXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0dmFsdWUpXG5cdCogICBpZCAtIFRoZSB0YXNrJ3MgaWQuXG5cdCogICB2YWx1ZSAtIFRoZSBjb21tZW50IG9iamVjdC4gSXQgaGFzICd0ZXh0OiBzdHJpbmcsIHRpbWU6IERhdGUgYW5kIHVzZXJJZDpudW1iZXInIHByb3BlcnRpZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbW1lbnRBZGQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29tbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIEthbmJhbiBUYXNrLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdHZhbHVlKVxuXHQqICAgaWQgLSBUaGUgdGFzaydzIGlkLlxuXHQqICAgdmFsdWUgLSBUaGUgY29tbWVudCBvYmplY3QuIEl0IGhhcyAndGV4dDogc3RyaW5nLCB0aW1lOiBEYXRlIGFuZCB1c2VySWQ6bnVtYmVyJyBwcm9wZXJ0aWVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db21tZW50UmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbW1lbnQgaXMgdXBkYXRlZCBpbiB0aGUgS2FuYmFuIFRhc2suXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0dmFsdWUpXG5cdCogICBpZCAtIFRoZSB0YXNrJ3MgaWQuXG5cdCogICB2YWx1ZSAtIFRoZSBjb21tZW50IG9iamVjdC4gSXQgaGFzICd0ZXh0OiBzdHJpbmcsIHRpbWU6IERhdGUgYW5kIHVzZXJJZDpudW1iZXInIHByb3BlcnRpZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbW1lbnRVcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgdGFzayBpcyBkcm9wcGVkIHNvbWV3aGVyZSBpbiB0aGUgRE9NLiBUaGUgZHJhZ2dpbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29udGFpbmVyLCBcdGRhdGEsIFx0aXRlbSwgXHRpdGVtcywgXHRvcmlnaW5hbEV2ZW50LCBcdHByZXZpb3VzQ29udGFpbmVyLCBcdHRhcmdldClcblx0KiAgIGNvbnRhaW5lciAtIHRoZSBLYW5iYW4gdGhlIGRyYWdnZWQgdGFzayhzKSBpcyBkcm9wcGVkIHRvXG5cdCogICBkYXRhIC0gYW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBkcmFnIGRldGFpbHNcblx0KiAgIGl0ZW0gLSB0aGUgdGFzayB0aGF0IGlzIGRyYWdnZWQ7IGlmIG11bHRpcGxlIHRhc2tzIGFyZSBkcmFnZ2VkLCB0aGlzIGlzIHRoZSB0YXNrIHRoYXQgaGFzIGJlZW4gY2xpY2tlZCB3aGVuIGluaXRpYXRpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCogICBpdGVtcyAtIGFuIGFycmF5IHdpdGggYWxsIGRyYWdnZWQgdGFza3Ncblx0KiAgIG9yaWdpbmFsRXZlbnQgLSB0aGUgb3JpZ2luYWwsIGJyb3dzZXIsIGV2ZW50IHRoYXQgaW5pdGlhdGVzIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgcHJldmlvdXNDb250YWluZXIgLSB0aGUgS2FuYmFuIHRoZSBkcmFnZ2VkIGl0ZW0ocykgaXMgZHJhZ2dlZCBmcm9tXG5cdCogICB0YXJnZXQgLSB0aGUgZWxlbWVudCB0aGUgZHJhZ2dlZCB0YXNrcyBhcmUgZHJvcHBlZCB0b1xuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBpcyBkcmFnZ2luZyBhIHRhc2suXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZGF0YSwgXHRpdGVtLCBcdGl0ZW1zLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBkYXRhIC0gYW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBkcmFnIGRldGFpbHNcblx0KiAgIGl0ZW0gLSB0aGUgdGFzayB0aGF0IGlzIGRyYWdnZWQ7IGlmIG11bHRpcGxlIHRhc2tzIGFyZSBkcmFnZ2VkLCB0aGlzIGlzIHRoZSB0YXNrIHRoYXQgaGFzIGJlZW4gY2xpY2tlZCB3aGVuIGluaXRpYXRpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCogICBpdGVtcyAtIGFuIGFycmF5IHdpdGggYWxsIGRyYWdnZWQgdGFza3Ncblx0KiAgIG9yaWdpbmFsRXZlbnQgLSB0aGUgb3JpZ2luYWwsIGJyb3dzZXIsIGV2ZW50IHRoYXQgaW5pdGlhdGVzIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnZ2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRhc2socykuIFRoZSBkcmFnZ2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb250YWluZXIsIFx0ZGF0YSwgXHRpdGVtLCBcdGl0ZW1zLCBcdG9yaWdpbmFsRXZlbnQsIFx0cHJldmlvdXNDb250YWluZXIpXG5cdCogICBjb250YWluZXIgLSB0aGUgS2FuYmFuIHRoZSBkcmFnZ2VkIHRhc2socykgaXMgZHJhZ2dlZCBmcm9tXG5cdCogICBkYXRhIC0gYW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBkcmFnIGRldGFpbHNcblx0KiAgIGl0ZW0gLSB0aGUgdGFzayB0aGF0IGlzIGRyYWdnZWQ7IGlmIG11bHRpcGxlIHRhc2tzIGFyZSBkcmFnZ2VkLCB0aGlzIGlzIHRoZSB0YXNrIHRoYXQgaGFzIGJlZW4gY2xpY2tlZCB3aGVuIGluaXRpYXRpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCogICBpdGVtcyAtIGFuIGFycmF5IHdpdGggYWxsIGRyYWdnZWQgdGFza3Ncblx0KiAgIG9yaWdpbmFsRXZlbnQgLSB0aGUgb3JpZ2luYWwsIGJyb3dzZXIsIGV2ZW50IHRoYXQgaW5pdGlhdGVzIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgcHJldmlvdXNDb250YWluZXIgLSB0aGUgS2FuYmFuIHRoZSBkcmFnZ2VkIGl0ZW0ocykgaXMgZHJhZ2dlZCBmcm9tXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWx0ZXIgaGFzIGJlZW4gYXBwbGllZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVkaXQvcHJvbXB0IGRpYWxvZyBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25PcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZWRpdC9wcm9tcHQgZGlhbG9nIGlzIGFib3V0IHRvIGJlIG9wZW5lZC4gVGhlIG9wZW5pbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uIElmIHlvdSB3YW50IHRvIGNhbmNlbCB0aGUgZGVmYXVsdCBLYW5iYW4gZGlhbG9nLCBjYWxsIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29tbWVudCwgXHRwdXJwb3NlLCBcdHRhc2spXG5cdCogICBjb21tZW50IC0gVGhlIGNvbW1lbnQgdGhhdCBpcyBhYm91dCB0byBiZSByZW1vdmVkIChpZiBhcHBsaWNhYmxlKS5cblx0KiAgIHB1cnBvc2UgLSBUaGUgcHVycG9zZSBvZiB0aGUgZGlhbG9nIHRvIGJlIG9wZW5lZCAtIDxlbT4nZWRpdCc8L2VtPiBvciA8ZW0+J3Byb21wdCc8L2VtPi5cblx0KiAgIHRhc2sgLSBUaGUgdGFzayB0aGF0IGlzIGFib3V0IHRvIGJlIGVkaXRlZCBvciByZW1vdmVkIChpZiBhcHBsaWNhYmxlKS5cblx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gc29ydGluZyBoYXMgYmVlbiBhcHBsaWVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU29ydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSBhIG5ldyB0YXNrIGlzIGFkZGVkLiBZb3UgY2FuIHVzZSB0aGUgZXZlbnQuZGV0YWlsLnZhbHVlIGFuZCBldmVudC5kZXRhaWwuaWQgdG8gY3VzdG9taXplIHRoZSBuZXcgVGFzayBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBLYW5iYW4uIEV4YW1wbGU6IGthbmJhbi5vblRhc2tCZWZvcmVBZGQgPSAoZXZlbnQpID0+IHsgY29uc3QgZGF0YSA9IGV2ZW50LmRldGFpbC52YWx1ZTsgY29uc3QgaWQgPSBldmVudC5kZXRhaWwuaWQ7IGV2ZW50LmRldGFpbC5pZCA9ICdCRzEyJzt9XG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUsIFx0aWQpXG5cdCogICB2YWx1ZSAtIFRoZSB0YXNrIGRhdGEgdGhhdCBpcyBhZGRlZCB0byB0aGUgS2FuYmFuLlxuXHQqICAgaWQgLSBUaGUgdGFzayBkYXRhIGlkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrQmVmb3JlQWRkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5ldyB0YXNrIGlzIGFkZGVkLiBFeGFtcGxlOiBrYW5iYW4ub25UYXNrQWRkID0gKGV2ZW50KSA9PiB7IGNvbnN0IGRhdGEgPSBldmVudC5kZXRhaWwudmFsdWU7IGNvbnN0IGlkID0gZXZlbnQuZGV0YWlsLmlkOyB9XG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUsIFx0aWQpXG5cdCogICB2YWx1ZSAtIFRoZSB0YXNrIGRhdGEgdGhhdCBpcyBhZGRlZCB0byB0aGUgS2FuYmFuLlxuXHQqICAgaWQgLSBUaGUgdGFzayBkYXRhIGlkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrQWRkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHRpZClcblx0KiAgIHZhbHVlIC0gVGhlIHRhc2sgZGF0YSB0aGF0IGlzIHJlbW92ZWQgZnJvbSB0aGUgS2FuYmFuLlxuXHQqICAgaWQgLSBUaGUgdGFzayBkYXRhIGlkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrUmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgdXBkYXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHRvbGRWYWx1ZSwgXHRpZClcblx0KiAgIHZhbHVlIC0gVGhlIHRhc2sgZGF0YSB0aGF0IGlzIHVwZGF0ZWQuXG5cdCogICBvbGRWYWx1ZSAtIFRoZSB1cGRhdGUgdGFzaydzIG9sZCBkYXRhLlxuXHQqICAgaWQgLSBUaGUgdGFzayBkYXRhIGlkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHRpZClcblx0KiAgIHZhbHVlIC0gVGhlIHRhc2sgZGF0YS5cblx0KiAgIGlkIC0gVGhlIHRhc2sgZGF0YSBpZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uVGFza0NsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgZG91YmxlIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUsIFx0aWQpXG5cdCogICB2YWx1ZSAtIFRoZSB0YXNrIGRhdGEuXG5cdCogICBpZCAtIFRoZSB0YXNrIGRhdGEgaWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblRhc2tEb3VibGVDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgZmlsdGVyaW5nLiBFeGFtcGxlOiBjb25zdCBmaWx0ZXJHcm91cCA9IG5ldyBTbWFydC5GaWx0ZXJHcm91cCgpOyBjb25zdCBmaWx0ZXJPYmplY3QgPSBmaWx0ZXJHcm91cC5jcmVhdGVGaWx0ZXIoJ3N0cmluZycsICdJdGFseScsICdjb250YWlucycpOyBmaWx0ZXJHcm91cC5hZGRGaWx0ZXIoJ2FuZCcsIGZpbHRlck9iamVjdCk7IGthbmJhbi5hZGRGaWx0ZXIoW1snQ291bnRyeScsIGZpbHRlckdyb3VwXV0pOyBcblx0KiBAcGFyYW0ge2FueX0gZmlsdGVycy4gRmlsdGVyIGluZm9ybWF0aW9uLiBFeGFtcGxlOiBrYW5iYW4uYWRkRmlsdGVyKFtbJ0NvdW50cnknLCBmaWx0ZXJHcm91cF1dKTsuIEVhY2ggYXJyYXkgaXRlbSBpcyBhIHN1YiBhcnJheSB3aXRoIHR3byBpdGVtcyAtICdkYXRhRmllbGQnIGFuZCAnZmlsdGVyR3JvdXAnIG9iamVjdC4gVGhlICdkYXRhRmllbGQnIGlzIGFueSB2YWxpZCBkYXRhIGZpZWxkIGZyb20gdGhlIGRhdGEgc291cmNlIGJvdW5kIHRvIHRoZSBLYW5iYW4gbGlrZSAnZHVlRGF0ZScsICdzdGFydERhdGUnIG9yIGN1c3RvbSBmaWVsZHMgbGlrZSAnQ291bnRyeScuIEZpbHRlciBjb25kaXRpb25zIHdoaWNoIHlvdSBjYW4gdXNlIGluIHRoZSBleHByZXNzaW9uczogJz0nLCAnRVFVQUwnLCcmbHQ7Jmd0OycsICdOT1RfRVFVQUwnLCAnIT0nLCAnJmx0OycsICdMRVNTX1RIQU4nLCcmZ3Q7JywgJ0dSRUFURVJfVEhBTicsICcmbHQ7PScsICdMRVNTX1RIQU5fT1JfRVFVQUwnLCAnJmd0Oz0nLCAnR1JFQVRFUl9USEFOX09SX0VRVUFMJywnc3RhcnRzIHdpdGgnLCAnU1RBUlRTX1dJVEgnLCdlbmRzIHdpdGgnLCAnRU5EU19XSVRIJywgJycsICdFTVBUWScsICdDT05UQUlOUycsJ0RPRVNfTk9UX0NPTlRBSU4nLCAnTlVMTCcsJ05PVF9OVUxMJ1xuXHQqIEBwYXJhbSB7c3RyaW5nfSBvcGVyYXRvcj8uIExvZ2ljYWwgb3BlcmF0b3IgYmV0d2VlbiB0aGUgZmlsdGVycyBvZiBkaWZmZXJlbnQgZmllbGRzLiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiAnYW5kJywgJ29yJy4gXG5cdCovXG4gICAgcHVibGljIGFkZEZpbHRlcihmaWx0ZXJzOiBhbnksIG9wZXJhdG9yPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihmaWx0ZXJzLCBvcGVyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGZpbHRlcnMsIG9wZXJhdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBzb3J0aW5nLiBFeGFtcGxlOiBrYW5iYW4uYWRkU29ydChbJ0NvdW50cnknXSwgJ2FzY2VuZGluZycpOyBcblx0KiBAcGFyYW0ge1tdIHwgc3RyaW5nfSBkYXRhRmllbGRzLiBUaGUgZGF0YSBmaWVsZChzKSB0byBzb3J0IGJ5XG5cdCogQHBhcmFtIHtbXSB8IHN0cmluZ30gb3JkZXJCeS4gVGhlIHNvcnQgZGlyZWN0aW9uKHMpIHRvIHNvcnQgdGhlIGRhdGEgZmllbGQocykgYnkuIFBvc3NpYmxlIHZhbHVlcyBhcmU6ICdhc2NlbmRpbmcnIGFuZCAnZGVzY2VuZGluZycuXG5cdCovXG4gICAgcHVibGljIGFkZFNvcnQoZGF0YUZpZWxkczogW10gfCBzdHJpbmcsIG9yZGVyQnk6IFtdIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFNvcnQoZGF0YUZpZWxkcywgb3JkZXJCeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkU29ydChkYXRhRmllbGRzLCBvcmRlckJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIHRhc2sgdG8gYSBLYW5iYW4gY29sdW1uLiBJZiBubyBkYXRhIGlzIHNwZWNpZmllZCwgYW4gZW1wdHkgdGFzayBpcyBhZGRlZCB0byB0aGUgZmlyc3QgY29sdW1uLiBcblx0KiBAcGFyYW0ge2FueX0gZGF0YT8uIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZXcgdGFzaydzIGRhdGFcblx0Ki9cbiAgICBwdWJsaWMgYWRkVGFzayhkYXRhPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFRhc2soZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVGFzayhkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGNvbHVtbiB0byBhIEthbmJhbi4gSWYgbm8gZGF0YSBpcyBzcGVjaWZpZWQsIGFuIGVtcHR5IGNvbHVtbiBpcyBhZGRlZC4gXG5cdCogQHBhcmFtIHthbnl9IGRhdGE/LiBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmV3IGNvbHVtbidzIGRhdGFcblx0Ki9cbiAgICBwdWJsaWMgYWRkQ29sdW1uKGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29sdW1uKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZENvbHVtbihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmVnaW5zIGFuIGVkaXQgb3BlcmF0aW9uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqL1xuICAgIHB1YmxpYyBiZWdpbkVkaXQodGFzazogbnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5FZGl0KHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luRWRpdCh0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgY3VycmVudCBlZGl0IG9wZXJhdGlvbiBhbmQgZGlzY2FyZHMgY2hhbmdlcyBcblx0Ki9cbiAgICBwdWJsaWMgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIGFueSBvcGVuIGhlYWRlciBwYW5lbCAoZHJvcCBkb3duKSBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VQYW5lbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlUGFuZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGEgS2FuYmFuIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IGNvbHVtbi4gVGhlIGluZGV4IG9yIGRhdGFGaWVsZCBvZiB0aGUgY29sdW1uIHRvIGNvbGxhcHNlXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlKGNvbHVtbjogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UoY29sdW1uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBLYW5iYW4ncyBzZWxlY3Rpb24uIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyBhIEthbmJhbiBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSBjb2x1bW4uIFRoZSBpbmRleCBvciBkYXRhRmllbGQgb2YgdGhlIGNvbHVtbiB0byBoaWRlXG5cdCovXG4gICAgcHVibGljIGhpZGUoY29sdW1uOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZShjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGUoY29sdW1uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIGNvcHkgb2YgYSB0YXNrIGluIHRoZSBzYW1lIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCovXG4gICAgcHVibGljIGNvcHlUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvcHlUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvcHlUYXNrKHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSBjdXJyZW50IGVkaXQgb3BlcmF0aW9uIGFuZCBzYXZlcyBjaGFuZ2VzIFxuXHQqL1xuICAgIHB1YmxpYyBlbmRFZGl0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRFZGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNYWtlcyBzdXJlIGEgdGFzayBpcyB2aXNpYmxlIGJ5IHNjcm9sbGluZyB0byBpdC4gSWYgc3VjY2Nlc3NmdWwsIHRoZSBtZXRob2QgcmV0dXJucyB0aGUgSFRNTCBlbGVtZW50IG9mIHRoZSB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50fSB0YXNrLiBUaGUgdGFzaydzIGlkIG9yIGNvcnJlc3BvbmRpbmcgSFRNTEVsZW1lbnRcblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBlbnN1cmVWaXNpYmxlKHRhc2spOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5zdXJlVmlzaWJsZSh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSBLYW5iYW4gY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gY29sdW1uLiBUaGUgaW5kZXggb3IgZGF0YUZpZWxkIG9mIHRoZSBjb2x1bW4gdG8gZXhwYW5kXG5cdCovXG4gICAgcHVibGljIGV4cGFuZChjb2x1bW46IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoY29sdW1uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhbGwgS2FuYmFuIGNvbHVtbnMuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBLYW5iYW4ncyBkYXRhLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZvcm1hdC4gVGhlIGZpbGUgZm9ybWF0IHRvIGV4cG9ydCB0by4gU3VwcG9ydGVkIGZvcm1hdHM6ICdjc3YnLCAnaHRtbCcsICdqc29uJywgJ3BkZicsICd0c3YnLCAneGxzeCcsICd4bWwnLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gZXhwb3J0IHRvXG5cdCogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2s/LiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHBhc3MgdGhlIGV4cG9ydGVkIGRhdGEgdG8gKGlmIGZpbGVOYW1lIGlzIG5vdCBwcm92aWRlZClcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBmaWxlTmFtZSwgY2FsbGJhY2s/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgZmlsZU5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGRhdGEgb2YgYSBjb2x1bW4uIFRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIEpTT04gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBmaWVsZHM6ICdsYWJlbCcsICdkYXRhRmllbGQnLCAnY29sbGFwc2VkJywgJ2NvbGxhcHNpYmxlJywgJ2FsbG93UmVtb3ZlJywgJ2VkaXRhYmxlJywgJ3Jlb3JkZXInLCAnb3JpZW50YXRpb24nLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDb2x1bW4oZGF0YUZpZWxkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtbihkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZGF0YSBvZiBhIHRhc2suIFRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIEpTT04gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBmaWVsZHM6ICdjaGVja2xpc3QnLCAnaWQnLCAnY29sb3InLCAnY29tbWVudHMnLCAnaGlzdG9yeScsICdkdWVEYXRlJywgJ3N0YXJ0RGF0ZScsICdwcmlvcml0eScsICdwcm9ncmVzcycsICdzdGF0dXMnLCAnc3dpbWxhbmUnLCAndGFncycsICd0ZXh0JywgJ2Rlc2NyaXB0aW9uJywgJ3VzZXJJZCcsICdjcmVhdGVkVXNlcklkJywgJ2NyZWF0ZWREYXRlJywgJ3VwZGF0ZWRVc2VySWQnLCAndXBkYXRlZERhdGUnIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpZC4gVGhlIHRhc2sncyBpZFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRUYXNrKGlkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRhc2soaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgc2VsZWN0ZWQgaWRzLiBUaGUgcmV0dXJuZWQgdmFsdWUgaXMgYW4gYXJyYXkuIEVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgaXMgdGhlICdpZCcgb2YgYSBzZWxlY3RlZCB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlcn0gaWQuIFRoZSB0YXNrJ3MgaWRcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0ZWRUYXNrcyhpZCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3RlZFRhc2tzKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIEthbmJhbidzIHN0YXRlLiBcblx0KiBAcmV0dXJucyB7eyBjb2xsYXBzZWQ6IHt9LCBkYXRhU291cmNlOiBbXSwgZmlsdGVyaW5nOiB7IGZpbHRlcnM6IFtdLCBvcGVyYXRvcjogc3RyaW5nIH0sIHNlbGVjdGlvbjogeyBzZWxlY3RlZDogW10sIHNlbGVjdGlvblN0YXJ0OiBudW1iZXIgfCBzdHJpbmcsIHNlbGVjdGlvbkluQ29sdW1uOiBzdHJpbmcsIHN3aW1sYW5lOiBzdHJpbmcgfSwgc29ydGluZzogeyBkYXRhRmllbGRzOiBbXSwgZGF0YVR5cGVzOiBbXSwgb3JkZXJCeTogW10gfSwgdGFiczogW10sIHZpc2liaWxpdHk6IHsgdGFza0FjdGlvbnM6IGJvb2xlYW4sIHRhc2tDb21tZW50czogYm9vbGVhbiwgdGFza0R1ZTogYm9vbGVhbiwgdGFza1ByaW9yaXR5OiBib29sZWFuLCB0YXNrUHJvZ3Jlc3M6IGJvb2xlYW4sIHRhc2tUYWdzOiBib29sZWFuLCB0YXNrVXNlckljb246IGJvb2xlYW4gfSB9fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2FkcyB0aGUgS2FuYmFuJ3Mgc3RhdGUuIFxuXHQqIEBwYXJhbSB7eyBjb2xsYXBzZWQ6IHt9LCBkYXRhU291cmNlOiBbXSwgZmlsdGVyaW5nOiB7IGZpbHRlcnM6IFtdLCBvcGVyYXRvcjogc3RyaW5nIH0sIHNlbGVjdGlvbjogeyBzZWxlY3RlZDogW10sIHNlbGVjdGlvblN0YXJ0PzogbnVtYmVyIHwgc3RyaW5nLCBzZWxlY3Rpb25JbkNvbHVtbjogc3RyaW5nLCBzd2ltbGFuZTogc3RyaW5nIH0sIHNvcnRpbmc6IHsgZGF0YUZpZWxkczogW10sIGRhdGFUeXBlczogW10sIG9yZGVyQnk6IFtdIH0sIHRhYnM6IFtdLCB2aXNpYmlsaXR5OiB7IHRhc2tBY3Rpb25zOiBib29sZWFuLCB0YXNrQ29tbWVudHM6IGJvb2xlYW4sIHRhc2tEdWU6IGJvb2xlYW4sIHRhc2tQcmlvcml0eTogYm9vbGVhbiwgdGFza1Byb2dyZXNzOiBib29sZWFuLCB0YXNrVGFnczogYm9vbGVhbiwgdGFza1VzZXJJY29uOiBib29sZWFuIH0gfX0gc3RhdGU/LiBBbiBvYmplY3QgcmV0dXJuZWQgYnkgb25lIG9mIHRoZSBtZXRob2RzIGdldFN0YXRlIG9yIHNhdmVTdGF0ZS4gSWYgbm90IHBhc3NlZCwgZ2V0cyBzYXZlZCBzdGF0ZSBmcm9tIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLlxuXHQqL1xuICAgIHB1YmxpYyBsb2FkU3RhdGUoc3RhdGU/OiB7IGNvbGxhcHNlZDoge30sIGRhdGFTb3VyY2U6IFtdLCBmaWx0ZXJpbmc6IHsgZmlsdGVyczogW10sIG9wZXJhdG9yOiBzdHJpbmcgfSwgc2VsZWN0aW9uOiB7IHNlbGVjdGVkOiBbXSwgc2VsZWN0aW9uU3RhcnQ/OiBudW1iZXIgfCBzdHJpbmcsIHNlbGVjdGlvbkluQ29sdW1uOiBzdHJpbmcsIHN3aW1sYW5lOiBzdHJpbmcgfSwgc29ydGluZzogeyBkYXRhRmllbGRzOiBbXSwgZGF0YVR5cGVzOiBbXSwgb3JkZXJCeTogW10gfSwgdGFiczogW10sIHZpc2liaWxpdHk6IHsgdGFza0FjdGlvbnM6IGJvb2xlYW4sIHRhc2tDb21tZW50czogYm9vbGVhbiwgdGFza0R1ZTogYm9vbGVhbiwgdGFza1ByaW9yaXR5OiBib29sZWFuLCB0YXNrUHJvZ3Jlc3M6IGJvb2xlYW4sIHRhc2tUYWdzOiBib29sZWFuLCB0YXNrVXNlckljb246IGJvb2xlYW4gfSB9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTW92ZXMgYSB0YXNrIHRvIGEgZGlmZmVyZW50IGNvbHVtbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCogQHBhcmFtIHtzdHJpbmd9IG5ld1N0YXR1cy4gVGhlIG5ldyBzdGF0dXMgb2YgdGhlIHRhc2sgKGl0cyBuZXcgY29sdW1uJ3MgZGF0YUZpZWxkKVxuXHQqL1xuICAgIHB1YmxpYyBtb3ZlVGFzayh0YXNrOiBudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudCwgbmV3U3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubW92ZVRhc2sodGFzaywgbmV3U3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5tb3ZlVGFzayh0YXNrLCBuZXdTdGF0dXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgXCJDdXN0b21pemUgdGFza3NcIiBoZWFkZXIgcGFuZWwgKGRyb3AgZG93bikgXG5cdCovXG4gICAgcHVibGljIG9wZW5DdXN0b21pemVQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkN1c3RvbWl6ZVBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkN1c3RvbWl6ZVBhbmVsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBcIkZpbHRlclwiIGhlYWRlciBwYW5lbCAoZHJvcCBkb3duKSBcblx0Ki9cbiAgICBwdWJsaWMgb3BlbkZpbHRlclBhbmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRmlsdGVyUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRmlsdGVyUGFuZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIFwiU29ydFwiIGhlYWRlciBwYW5lbCAoZHJvcCBkb3duKSBcblx0Ki9cbiAgICBwdWJsaWMgb3BlblNvcnRQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlblNvcnRQYW5lbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5Tb3J0UGFuZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBmaWx0ZXJpbmcgXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgc29ydGluZyBcblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlU29ydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlU29ydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVNvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIHRhc2suIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcHJvbXB0Py4gV2hldGhlciBvciBub3QgdG8gcHJvbXB0IHRoZSB1c2VyIGJlZm9yZSByZW1vdmluZyB0aGUgdGFza1xuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50LCBwcm9tcHQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2sodGFzaywgcHJvbXB0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVUYXNrKHRhc2ssIHByb21wdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIEthbmJhbidzIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBcblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBLYW5iYW4gY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gY29sdW1uLiBUaGUgaW5kZXggb3IgZGF0YUZpZWxkIG9mIHRoZSBjb2x1bW4gdG8gc2hvd1xuXHQqL1xuICAgIHB1YmxpYyBzaG93KGNvbHVtbjogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3coY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93KGNvbHVtbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIGFsbCBLYW5iYW4gY29sdW1ucy4gXG5cdCovXG4gICAgcHVibGljIHNob3dBbGxDb2x1bW5zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93QWxsQ29sdW1ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dBbGxDb2x1bW5zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgYSB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gdGFzay4gVGhlIHRhc2sncyBpZC5cblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0VGFzayh0YXNrOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0VGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RUYXNrKHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgYSB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gdGFzay4gVGhlIHRhc2sncyBpZC5cblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3RUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdFRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3RUYXNrKHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGEgdGFzay4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCogQHBhcmFtIHt7fX0gbmV3RGF0YS4gVGhlIG5ldyBkYXRhIHRvIHZpc3VhbGl6ZSBpbiB0aGUgdGFzay5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlVGFzayh0YXNrOiBudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudCwgbmV3RGF0YToge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlVGFzayh0YXNrLCBuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKHRhc2ssIG5ld0RhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGEgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgbmV3IGNvbHVtbidzIGRhdGEgZmllbGRcblx0KiBAcGFyYW0ge3t9fSBuZXdEYXRhLiBUaGUgbmV3IGRhdGEgdG8gdmlzdWFsaXplIGluIHRoZSBjb2x1bW4uXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZUNvbHVtbihkYXRhRmllbGQ6IHN0cmluZywgbmV3RGF0YToge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlQ29sdW1uKGRhdGFGaWVsZCwgbmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlQ29sdW1uKGRhdGFGaWVsZCwgbmV3RGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5BZGRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5BZGQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uQWRkJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5BZGRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5SZW1vdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW1vdmVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uUmVvcmRlci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5SZW9yZGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uVXBkYXRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uVXBkYXRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkRvdWJsZUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkRvdWJsZUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5Eb3VibGVDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblNob3dIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5TaG93LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblNob3cnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblNob3dIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5IaWRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uSGlkZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5IaWRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5IaWRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ29sbGFwc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5Db2xsYXBzZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5Db2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ29sbGFwc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5FeHBhbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5FeHBhbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5FeHBhbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb21tZW50QWRkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29tbWVudEFkZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21tZW50QWRkJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb21tZW50QWRkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29tbWVudFJlbW92ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbW1lbnRSZW1vdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tbWVudFJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29tbWVudFJlbW92ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRVcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db21tZW50VXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbW1lbnRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRVcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ2dpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ2dpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWx0ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsdGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Tb3J0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NvcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrQmVmb3JlQWRkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVGFza0JlZm9yZUFkZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0YXNrQmVmb3JlQWRkJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrQmVmb3JlQWRkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblRhc2tBZGQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGFza0FkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25UYXNrUmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tSZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrVXBkYXRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVGFza1VwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0YXNrVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrVXBkYXRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0NsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVGFza0NsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0NsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0RvdWJsZUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVGFza0RvdWJsZUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tEb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0RvdWJsZUNsaWNrSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5BZGRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5BZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkFkZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVtb3ZlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW1vdmVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlb3JkZXJIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5SZW9yZGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW9yZGVySGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5VcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5TaG93SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uU2hvdycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uU2hvd0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uSGlkZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkhpZGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkhpZGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNvbGxhcHNlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uQ29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNvbGxhcHNlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5FeHBhbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5FeHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkV4cGFuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29tbWVudEFkZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbW1lbnRBZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRBZGRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbW1lbnRSZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21tZW50UmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb21tZW50UmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb21tZW50VXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tbWVudFVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29tbWVudFVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQub25maWx0ZXJIYW5kbGVyID0gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrQmVmb3JlQWRkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGFza0JlZm9yZUFkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0JlZm9yZUFkZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rhc2tBZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tBZGRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0YXNrUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrUmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGFza1VwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza1VwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0NsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGFza0NsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tEb3VibGVDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rhc2tEb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0RvdWJsZUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19