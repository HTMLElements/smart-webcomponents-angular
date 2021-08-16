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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
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
    /** @description Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false. */
    get addNewButton() {
        return this.nativeElement ? this.nativeElement.addNewButton : undefined;
    }
    set addNewButton(value) {
        this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
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
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
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
    * @param {string} fileName?. The name of the file to export to
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
], KanbanComponent.prototype, "addNewButton", null);
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
], KanbanComponent.prototype, "animation", null);
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
], KanbanComponent.prototype, "columns", null);
tslib_1.__decorate([
    Input()
], KanbanComponent.prototype, "columnActions", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQua2FuYmFuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2thbmJhbi8iLCJzb3VyY2VzIjpbInNtYXJ0LmthbmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0lBQy9DLFlBQVksR0FBdUI7UUFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFnWmxDOzs7OztVQUtFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzhDQUNzQztRQUM1QixZQUFPLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEU7OENBQ3NDO1FBQzVCLGNBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs7Ozs7VUFLRTtRQUNRLGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7O1VBS0U7UUFDUSxtQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7OztVQUtFO1FBQ1Esb0JBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7Ozs7VUFLRTtRQUNRLG1CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7Ozs7O1VBS0U7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlB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IHsgQW5pbWF0aW9uLCBLYW5iYW5Db2x1bW5PcmllbnRhdGlvbiwgS2FuYmFuQ29sdW1uRWRpdE1vZGUsIEthbmJhbkRhdGFTb3VyY2VQcmlvcml0eSwgS2FuYmFuSGVhZGVyUG9zaXRpb24sIEthbmJhbkhpZXJhcmNoeSwgS2FuYmFuU2VsZWN0aW9uTW9kZSwgS2FuYmFuVGFza1Bvc2l0aW9uLCBLYW5iYW5Db2x1bW4sIEthbmJhbkRhdGFTb3VyY2UsIEthbmJhblN3aW1sYW5lLCBLYW5iYW5Vc2VyLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBEYXRhQWRhcHRlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgS2FuYmFuQ29sdW1uT3JpZW50YXRpb24sIEthbmJhbkNvbHVtbkVkaXRNb2RlLCBLYW5iYW5EYXRhU291cmNlUHJpb3JpdHksIEthbmJhbkhlYWRlclBvc2l0aW9uLCBLYW5iYW5IaWVyYXJjaHksIEthbmJhblNlbGVjdGlvbk1vZGUsIEthbmJhblRhc2tQb3NpdGlvbiwgS2FuYmFuQ29sdW1uLCBLYW5iYW5EYXRhU291cmNlLCBLYW5iYW5Td2ltbGFuZSwgS2FuYmFuVXNlciwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgS2FuYmFuIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBEYXRhQWRhcHRlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWthbmJhbiwgW3NtYXJ0LWthbmJhbl0nXG59KVxuXG5leHBvcnQgY2xhc3MgS2FuYmFuQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEthbmJhbj4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEthbmJhbjtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogS2FuYmFuO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxLYW5iYW4+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQta2FuYmFuJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGNvbHVtbiByZW9yZGVyaW5nLiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUgYW5kIGFsbG93RHJhZyBpcyBlbmFibGVkLCB1c2VycyB3aWxsIGJlIGFibGUgdG8gcmVvZGVyIGNvbHVtbnMgdGhyb3VnaCBkcmFnICYgZHJvcC4gRm9yIGV4YW1wbGU6IENsaWNrIGFuZCBkcmFnIHRoZSBmaXJzdCBjb2x1bW4ncyBoZWFkZXIgYW5kIGRyb3AgaXQgb3ZlciBhbm90aGVyIGNvbHVtbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93Q29sdW1uUmVvcmRlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uUmVvcmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dDb2x1bW5SZW9yZGVyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uUmVvcmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGNvbHVtbiBlZGl0aW5nLiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHVzZXJzIHdpbGwgYmUgYWJsZSB0byBkeW5hbWljYWxseSBjaGFuZ2UgdGhlIGNvbHVtbidzIGhlYWRlciBsYWJlbCBieSBkb3VibGUgY2xpY2tpbmcgb24gaXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0NvbHVtbkVkaXQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtbkVkaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93Q29sdW1uRWRpdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtbkVkaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBjb2x1bW4gcmVtb3ZpbmcuIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdXNlcnMgd2lsbCBiZSBhYmxlIHRvIGR5bmFtaWNhbGx5IHJlbW92ZSBhIGNvbHVtbiB0aHJvdWdoIHRoZSBjb2x1bW4gYWN0aW9ucyBtZW51LiB0aGUgJ2NvbHVtbkFjdGlvbnMnIHByb3BlcnR5IHNob3VsZCBiZSB0cnVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dDb2x1bW5SZW1vdmUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtblJlbW92ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dDb2x1bW5SZW1vdmUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5SZW1vdmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY29sdW1uIGJ1dHRvbnMgZm9yIGFkZGluZyB0YXNrcy4gQSBwYXJ0aWN1bGFyIGJ1dHRvbiBjYW4gYmUgZGlzYWJsZWQgYnkgc2V0dGluZyBhZGROZXdCdXR0b24gaW4gdGhlIGNvbHVtbidzIGRlZmluaXRpb24gdG8gZmFsc2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhZGROZXdCdXR0b24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGROZXdCdXR0b24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFkZE5ld0J1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGROZXdCdXR0b24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgYSBjb2x1bW4gd2l0aCBhIGJ1dHRvbiBmb3IgYWRkaW5nIG5ldyBzdGF0dXMgY29sdW1ucyB0byB0aGUgS2FuYmFuIHdpbGwgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWRkTmV3Q29sdW1uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3Q29sdW1uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhZGROZXdDb2x1bW4odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkTmV3Q29sdW1uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0aGUgZHJhZ2dpbmcgb2YgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0RyYWcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0RyYWcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93RHJhZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0RyYWcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRoZSBkcm9wcGluZyBvZiB0YXNrcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93RHJvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJvcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dEcm9wKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJvcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGF1dG8gbG9hZCBzdGF0ZSBmcm9tIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBJbmZvcm1hdGlvbiBhYm91dCB0YXNrcyBhbmQgdGhlaXIgcG9zaXRpb24gYW5kIHNlbGVjdGVkIHN0YXRlLCBmaWx0ZXJpbmcsIHNvcnRpbmcsIGNvbGxhcHNlZCBjb2x1bW5zLCBhcyB3ZWxsIGFzIHRoZSB2YWx1ZXMgb2YgdGhlIHByb3BlcnRpZXMgdGFza0FjdGlvbnMsIHRhc2tDb21tZW50cywgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvZ3Jlc3MsIHRhc2tUYWdzLCBhbmQgdGFza1VzZXJJY29uIGlzIGxvYWRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvTG9hZFN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBhdXRvIHNhdmUgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuIEluZm9ybWF0aW9uIGFib3V0IHRhc2tzIGFuZCB0aGVpciBwb3NpdGlvbiBhbmQgc2VsZWN0ZWQgc3RhdGUsIGZpbHRlcmluZywgc29ydGluZywgY29sbGFwc2VkIGNvbHVtbnMsIGFzIHdlbGwgYXMgdGhlIHZhbHVlcyBvZiB0aGUgcHJvcGVydGllcyB0YXNrQWN0aW9ucywgdGFza0NvbW1lbnRzLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksIHRhc2tQcm9ncmVzcywgdGFza1RhZ3MsIGFuZCB0YXNrVXNlckljb24gaXMgc2F2ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2F2ZVN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NhdmVTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyBjb2xsYXBzaW5nIHRoZSBjYXJkIGNvbnRlbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2xsYXBzaWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNpYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xsYXBzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzaWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIGNvbHVtbnMgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbnMoKTogS2FuYmFuQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1ucyh2YWx1ZTogS2FuYmFuQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb2x1bW4gYWN0aW9ucyBpY29uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uQWN0aW9ucygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkFjdGlvbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkFjdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uQWN0aW9ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb2x1bW4gZWRpdCBiZWhhdmlvci4gV2l0aCB0aGUgJ2hlYWRlcicgb3B0aW9uLCBlZGl0IHN0YXJ0cyBvbiBkb3VibGUgY2xpY2sgb24gdGhlIGNvbHVtbidzIGxhYmVsLiBJbiAnbWVudScgbW9kZSwgZWRpdCBpcyBhbGxvd2VkIGZyb20gdGhlICdjb2x1bW5BY3Rpb25zJyBtZW51LiBJbiAnaGVhZGVyQW5kTWVudScgb3B0aW9uLCBjb2x1bW4gZWRpdGluZyBpbmNsdWRlcyBib3RoIG9wdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5FZGl0TW9kZSgpOiBLYW5iYW5Db2x1bW5FZGl0TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5FZGl0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uRWRpdE1vZGUodmFsdWU6IEthbmJhbkNvbHVtbkVkaXRNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkVkaXRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgdXNlci4gSGFzIHRvIGNvcnJlc3BvbmQgdG8gdGhlIGlkIG9mIGFuIGl0ZW0gZnJvbSB0aGUgdXNlcnMgcHJvcGVydHkvYXJyYXkuIERlcGVuZGluZyBvbiB0aGUgY3VycmVudCB1c2VyLCBkaWZmZXJlbnQgcHJpdmlsZWdlcyBhcmUgZW5hYmxlZC4gSWYgbm8gY3VycmVudCB1c2VyIGlzIHNldCwgcHJpdmlsZWdlcyBkZXBlbmQgb24gdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY3VycmVudFVzZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRVc2VyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXJyZW50VXNlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRVc2VyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRhdGEgc291cmNlIHRvIGJlIHZpc3VhbGl6ZWQgaW4gdGhlIGthbmJhbiBib2FyZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2UoKTogS2FuYmFuRGF0YVNvdXJjZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IEthbmJhbkRhdGFTb3VyY2VbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZSByZWxhdGlvbiAobWFwcGluZykgYmV0d2VlbiB0aGUgS2FuYmFuJ3MgZGVmYXVsdCBmaWVsZHMgKGtleXdvcmRzKSBhbmQgdGhlIGRhdGEgZmllbGRzIGZyb20gdGhlIGRhdGEgc291cmNlLiBOb3QgbmVjZXNzYXJ5IGlmIGJvdGggbWF0Y2guIE9ubHkgc29tZSBvZiB0aGUgZGVmYXVsdCBtYXBwaW5nIGNhbiBiZSBvdmVyd3JpdHRlbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2VNYXAoKTogeyBjaGVja2xpc3Q6IHN0cmluZzsgY29sb3I6IHN0cmluZzsgY29tbWVudHM6IHN0cmluZzsgZHVlRGF0ZTogc3RyaW5nOyBpZDogc3RyaW5nOyBwcmlvcml0eTogc3RyaW5nOyBwcm9ncmVzczogc3RyaW5nOyBzdGFydERhdGU6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmc7IHN3aW1sYW5lOiBzdHJpbmc7IHRhZ3M6IHN0cmluZzsgdGV4dDogc3RyaW5nOyB1c2VySWQ6IHN0cmluZzsgfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlTWFwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlTWFwKHZhbHVlOiB7IGNoZWNrbGlzdDogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBjb21tZW50czogc3RyaW5nOyBkdWVEYXRlOiBzdHJpbmc7IGlkOiBzdHJpbmc7IHByaW9yaXR5OiBzdHJpbmc7IHByb2dyZXNzOiBzdHJpbmc7IHN0YXJ0RGF0ZTogc3RyaW5nOyBzdGF0dXM6IHN0cmluZzsgc3dpbWxhbmU6IHN0cmluZzsgdGFnczogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nOyB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2VNYXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgb2Zmc2V0IG9mIHRoZSBkcmFnIGZlZWRiYWNrIGVsZW1lbnQgZnJvbSB0aGUgbW91c2UgY3Vyc29yIHdoZW4gZHJhZ2dpbmcgdGFza3MuIFRoZSBmaXJzdCBtZW1iZXIgb2YgdGhlIGFycmF5IGlzIHRoZSBob3Jpem9udGFsIG9mZnNldCBhbmQgdGhlIHNlY29uZCBvbmUgLSB0aGUgdmVydGljYWwgb2Zmc2V0LiBJZiBzZXQgdG8gJ2F1dG8nLCB0aGUgb2Zmc2V0IGlzIGJhc2VkIG9uIHRoZSBtb3VzZSBwb3NpdGlvbiB3aGVuIHRoZSBkcmFnZ2luZyBzdGFydGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ09mZnNldCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYWdPZmZzZXQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0YXNrcyBjYW4gYmUgZWRpdGVkIChpbmNsdWRpbmcgdGhlIGFzc2lnbmluZyBvZiB1c2VycyB0byB0YXNrcykuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlZGl0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0YWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGZvcm1hdCBzdHJpbmcgb2YgdGhlIFwiRHVlIGRhdGVcIiBsYWJlbCBhbmQgdGhlIFwiU3RhcnQgZGF0ZVwiIGFuZCBcIkR1ZSBkYXRlXCIgZWRpdG9ycy4gKi9cblx0QElucHV0KClcblx0Z2V0IGZvcm1hdFN0cmluZ0RhdGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ0RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvcm1hdFN0cmluZ0RhdGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb3JtYXRTdHJpbmdEYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZm9ybWF0IHN0cmluZyBvZiBjb21tZW50cyB0aW1lIHN0YW1wLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9ybWF0U3RyaW5nVGltZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0U3RyaW5nVGltZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9ybWF0U3RyaW5nVGltZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ1RpbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBoZWFkZXIgcG9zaXRpb24uIFRoZSBoZWFkZXIgY29udGFpbnMgdGhlIEN1c3RvbWl6ZSwgRmlsdGVyLCBTb3J0LCBhbmQgU2VhcmNoIGJ1dHRvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkZXJQb3NpdGlvbigpOiBLYW5iYW5IZWFkZXJQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyUG9zaXRpb24odmFsdWU6IEthbmJhbkhlYWRlclBvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgd2F5IGNvbHVtbiBoaWVyYXJjaHkgaXMgcmVwcmVzZW50ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWVyYXJjaHkoKTogS2FuYmFuSGllcmFyY2h5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZXJhcmNoeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGllcmFyY2h5KHZhbHVlOiBLYW5iYW5IaWVyYXJjaHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGllcmFyY2h5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbG9jYWxlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBzZWxlY3Rpb24gbW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbk1vZGUoKTogS2FuYmFuU2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25Nb2RlKHZhbHVlOiBLYW5iYW5TZWxlY3Rpb25Nb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgc3dpbWxhbmVzIGluIHRoZSBrYW5iYW4gYm9hcmQuIFN1Yi1jb2x1bW5zIGFyZSBub3QgYXBwbGljYWJsZSB3aGVuIHN3aW1sYW5lcyBhcmUgcHJlc2VudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHN3aW1sYW5lcygpOiBLYW5iYW5Td2ltbGFuZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3dpbWxhbmVzKHZhbHVlOiBLYW5iYW5Td2ltbGFuZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHN3aW1sYW5lcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHN3aW1sYW5lc0Zyb20oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lc0Zyb20gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN3aW1sYW5lc0Zyb20odmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2ltbGFuZXNGcm9tID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiBhdCB3aGljaCB0byBlbmQgdGhlIHN3aW1sYW5lcy4gQnkgZGVmYXVsdCwgc3dpbWxhbmVzIGVuZCBhdCB0aGUgbGFzdCBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzd2ltbGFuZXNUbygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzVG8gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN3aW1sYW5lc1RvKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzVG8gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbGxvd2VkIHRhZ3MuIElmIG5vIHRhZ3MgYXJlIGxpc3RlZCwgYWxsIHRhZ3MgZnJvbSB0aGUgZGF0YSBzb3VyY2UgYXJlIGFsbG93ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YWdzKCk6IGFueVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhZ3ModmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayBhY3Rpb25zIGljb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrQWN0aW9ucygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tBY3Rpb25zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrQWN0aW9ucyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQWN0aW9ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0YXNrIGNvbW1lbnRzIGljb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrQ29tbWVudHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29tbWVudHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tDb21tZW50cyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ29tbWVudHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayBkdWUgaWNvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tEdWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrRHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrRHVlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tEdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGFza3MgY2FuIGJlIHNob3duIGluIGFsbCBsZXZlbHMgb2YgY29sdW1uIGhpZXJhcmNoeSBvciBvbmx5IG9uIGxlYWYgY29sdW1ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQb3NpdGlvbigpOiBLYW5iYW5UYXNrUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1Bvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrUG9zaXRpb24odmFsdWU6IEthbmJhblRhc2tQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayBwcmlvcml0eSBpY29uIChzaG93biB3aGVuIHByaW9yaXR5IGlzIGxvdyBvciBoaWdoKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQcmlvcml0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcmlvcml0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1ByaW9yaXR5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcmlvcml0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRhc2sgcHJvZ3Jlc3MgYmFyIGFuZCB0aGUgY29tcGxldGVkIHN1Yi10YXNrcyBsYWJlbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tQcm9ncmVzcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcm9ncmVzcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1Byb2dyZXNzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQcm9ncmVzcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRhc2sgdGFncy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tUYWdzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1RhZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tUYWdzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tUYWdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRhc2sgdXNlciBpY29uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1VzZXJJY29uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1VzZXJJY29uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrVXNlckljb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1VzZXJJY29uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhIHRlbXBsYXRlIHRvIGJlIGFwcGxpZWQgdG8gdGFzayB0ZXh0LiBDYW4gYmUgYSBzdHJpbmcgYmVnaW5uaW5nIHdpdGggIyBhbmQgcmVmZXJlbmNpbmcgdGhlIGlkIG9mIGEgdGVtcGxhdGUgZWxlbWVudCBvbiB0aGUgcGFnZS4gQ2FuIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IG1vZGlmaWVzIHRoZSB0YXNrIHRleHQgb3IgdGhlIHRlbXBsYXRlIGl0c2VsZi4gRmluYWxseSwgaXQgY2FuIGFsc28gYmUgYSBzdHJpbmcgdGhhdCB3aWxsIGJlIHBhcnNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRleHRUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGV4dFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0ZXh0VGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50ZXh0VGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVzZXIgbGlzdCAoYXMgZGVmaW5lZCBieSB0aGUgdXNlcnMgcHJvcGVydHkpIHdpbGwgYmUgc2hvd24gd2hlbiBjbGlja2luZyB0aGUgdXNlciBpY29uLiBPbmx5IGFwcGxpY2FibGUgaWYgZWRpdGFibGUgcHJpdmlsZWdlcyBhcmUgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVzZXJMaXN0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudXNlckxpc3QgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVzZXJMaXN0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVzZXJMaXN0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHVzZXJzIEthbmJhbiB0YXNrcyBjYW4gYmUgYXNzaWduZWQgdG8gYW5kIHRoZWlyIGNoYXJhY3RlcmlzdGljcyBhbmQgcHJpdmlsZWdlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHVzZXJzKCk6IEthbmJhblVzZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51c2VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdXNlcnModmFsdWU6IEthbmJhblVzZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51c2VycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgdGFzayBoYXMgYmVlbiB1cGRhdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHRhc2ssIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBvbGQgZGF0YSBvZiB0aGUgdGFza1xuXHQqICAgdGFzayAtIFRoZSBIVE1MIGVsZW1lbnQgb2YgdGhlIHRhc2sgd2hvc2UgZGF0YSBoYXMgYmVlbiBjaGFuZ2VkXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgZGF0YSBvZiB0aGUgdGFza1xuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBlZGl0L3Byb21wdCBkaWFsb2cgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBlZGl0L3Byb21wdCBkaWFsb2cgaXMgYWJvdXQgdG8gYmUgY2xvc2VkLiBUaGUgY2xvc2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIGFkZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGxhYmVsLCBcdGRhdGFGaWVsZCwgXHRjb2xsYXBzZWQpXG5cdCogICBsYWJlbCAtIFRoZSBjb2x1bW4gbGFiZWwuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCogICBjb2xsYXBzZWQgLSBUaGUgY29sdW1uJ3MgY29sbGFwc2VkIHN0YXRlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5BZGQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlbW92ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaXMgcmVvcmRlcmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZEluZGV4LCBcdGluZGV4LCBcdGNvbHVtbilcblx0KiAgIG9sZEluZGV4IC0gVGhlIGNvbHVtbidzIG9sZCBpbmRleC5cblx0KiAgIGluZGV4IC0gVGhlIGNvbHVtbidzIG5ldyBpbmRleC5cblx0KiAgIGNvbHVtbiAtIFRoZSBjb2x1bW4ncyBkYXRhIG9iamVjdCB3aXRoICdsYWJlbCcsICdkYXRhRmllbGQnIGFuZCAnY29sbGFwc2VkJyBmaWVsZHMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblJlb3JkZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGlzIHVwZGF0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtblVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaGVhZGVyIGlzIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBoZWFkZXIgaXMgZG91YmxlIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkRvdWJsZUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgZHJvcHBlZCBzb21ld2hlcmUgaW4gdGhlIERPTS4gVGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbnRhaW5lciwgXHRkYXRhLCBcdGl0ZW0sIFx0aXRlbXMsIFx0b3JpZ2luYWxFdmVudCwgXHRwcmV2aW91c0NvbnRhaW5lciwgXHR0YXJnZXQpXG5cdCogICBjb250YWluZXIgLSB0aGUgS2FuYmFuIHRoZSBkcmFnZ2VkIHRhc2socykgaXMgZHJvcHBlZCB0b1xuXHQqICAgZGF0YSAtIGFuIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgZHJhZyBkZXRhaWxzXG5cdCogICBpdGVtIC0gdGhlIHRhc2sgdGhhdCBpcyBkcmFnZ2VkOyBpZiBtdWx0aXBsZSB0YXNrcyBhcmUgZHJhZ2dlZCwgdGhpcyBpcyB0aGUgdGFzayB0aGF0IGhhcyBiZWVuIGNsaWNrZWQgd2hlbiBpbml0aWF0aW5nIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgaXRlbXMgLSBhbiBhcnJheSB3aXRoIGFsbCBkcmFnZ2VkIHRhc2tzXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gdGhlIG9yaWdpbmFsLCBicm93c2VyLCBldmVudCB0aGF0IGluaXRpYXRlcyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIHByZXZpb3VzQ29udGFpbmVyIC0gdGhlIEthbmJhbiB0aGUgZHJhZ2dlZCBpdGVtKHMpIGlzIGRyYWdnZWQgZnJvbVxuXHQqICAgdGFyZ2V0IC0gdGhlIGVsZW1lbnQgdGhlIGRyYWdnZWQgdGFza3MgYXJlIGRyb3BwZWQgdG9cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYSB0YXNrLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGRhdGEsIFx0aXRlbSwgXHRpdGVtcywgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgZGF0YSAtIGFuIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgZHJhZyBkZXRhaWxzXG5cdCogICBpdGVtIC0gdGhlIHRhc2sgdGhhdCBpcyBkcmFnZ2VkOyBpZiBtdWx0aXBsZSB0YXNrcyBhcmUgZHJhZ2dlZCwgdGhpcyBpcyB0aGUgdGFzayB0aGF0IGhhcyBiZWVuIGNsaWNrZWQgd2hlbiBpbml0aWF0aW5nIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgaXRlbXMgLSBhbiBhcnJheSB3aXRoIGFsbCBkcmFnZ2VkIHRhc2tzXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gdGhlIG9yaWdpbmFsLCBicm93c2VyLCBldmVudCB0aGF0IGluaXRpYXRlcyB0aGUgZHJhZyBvcGVyYXRpb25cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0YXNrKHMpLiBUaGUgZHJhZ2dpbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29udGFpbmVyLCBcdGRhdGEsIFx0aXRlbSwgXHRpdGVtcywgXHRvcmlnaW5hbEV2ZW50LCBcdHByZXZpb3VzQ29udGFpbmVyKVxuXHQqICAgY29udGFpbmVyIC0gdGhlIEthbmJhbiB0aGUgZHJhZ2dlZCB0YXNrKHMpIGlzIGRyYWdnZWQgZnJvbVxuXHQqICAgZGF0YSAtIGFuIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgZHJhZyBkZXRhaWxzXG5cdCogICBpdGVtIC0gdGhlIHRhc2sgdGhhdCBpcyBkcmFnZ2VkOyBpZiBtdWx0aXBsZSB0YXNrcyBhcmUgZHJhZ2dlZCwgdGhpcyBpcyB0aGUgdGFzayB0aGF0IGhhcyBiZWVuIGNsaWNrZWQgd2hlbiBpbml0aWF0aW5nIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgaXRlbXMgLSBhbiBhcnJheSB3aXRoIGFsbCBkcmFnZ2VkIHRhc2tzXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gdGhlIG9yaWdpbmFsLCBicm93c2VyLCBldmVudCB0aGF0IGluaXRpYXRlcyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIHByZXZpb3VzQ29udGFpbmVyIC0gdGhlIEthbmJhbiB0aGUgZHJhZ2dlZCBpdGVtKHMpIGlzIGRyYWdnZWQgZnJvbVxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZmlsdGVyIGhhcyBiZWVuIGFwcGxpZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBlZGl0L3Byb21wdCBkaWFsb2cgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVkaXQvcHJvbXB0IGRpYWxvZyBpcyBhYm91dCB0byBiZSBvcGVuZWQuIFRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbW1lbnQsIFx0cHVycG9zZSwgXHR0YXNrKVxuXHQqICAgY29tbWVudCAtIFRoZSBjb21tZW50IHRoYXQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZCAoaWYgYXBwbGljYWJsZSkuXG5cdCogICBwdXJwb3NlIC0gVGhlIHB1cnBvc2Ugb2YgdGhlIGRpYWxvZyB0byBiZSBvcGVuZWQgLSA8ZW0+J2VkaXQnPC9lbT4gb3IgPGVtPidwcm9tcHQnPC9lbT4uXG5cdCogICB0YXNrIC0gVGhlIHRhc2sgdGhhdCBpcyBhYm91dCB0byBiZSBlZGl0ZWQgb3IgcmVtb3ZlZCAoaWYgYXBwbGljYWJsZSkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbk9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHNvcnRpbmcgaGFzIGJlZW4gYXBwbGllZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbmV3IHRhc2sgaXMgYWRkZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUpXG5cdCogICB2YWx1ZSAtIFRoZSB0YXNrIGRhdGEgdGhhdCBpcyBhZGRlZCB0byB0aGUgS2FuYmFuLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrQWRkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRhc2sgaXMgcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSlcblx0KiAgIHZhbHVlIC0gVGhlIHRhc2sgZGF0YSB0aGF0IGlzIHJlbW92ZWQgZnJvbSB0aGUgS2FuYmFuLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25UYXNrUmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBmaWx0ZXJpbmcgXG5cdCogQHBhcmFtIHtzdHJpbmdbXX0gZmlsdGVycy4gRmlsdGVyIGluZm9ybWF0aW9uXG5cdCogQHBhcmFtIHtzdHJpbmd9IG9wZXJhdG9yPy4gTG9naWNhbCBvcGVyYXRvciBiZXR3ZWVuIHRoZSBmaWx0ZXJzIG9mIGRpZmZlcmVudCBmaWVsZHNcblx0Ki9cbiAgICBwdWJsaWMgYWRkRmlsdGVyKGZpbHRlcnM6IHN0cmluZ1tdLCBvcGVyYXRvcj86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRGaWx0ZXIoZmlsdGVycywgb3BlcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihmaWx0ZXJzLCBvcGVyYXRvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgc29ydGluZyBcblx0KiBAcGFyYW0ge1tdIHwgc3RyaW5nfSBkYXRhRmllbGRzLiBUaGUgZGF0YSBmaWVsZChzKSB0byBzb3J0IGJ5XG5cdCogQHBhcmFtIHtbXSB8IHN0cmluZ30gb3JkZXJCeS4gVGhlIHNvcnQgZGlyZWN0aW9uKHMpIHRvIHNvcnQgdGhlIGRhdGEgZmllbGQocykgYnlcblx0Ki9cbiAgICBwdWJsaWMgYWRkU29ydChkYXRhRmllbGRzOiBbXSB8IHN0cmluZywgb3JkZXJCeTogW10gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkU29ydChkYXRhRmllbGRzLCBvcmRlckJ5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRTb3J0KGRhdGFGaWVsZHMsIG9yZGVyQnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgdGFzayB0byBhIEthbmJhbiBjb2x1bW4uIElmIG5vIGRhdGEgaXMgc3BlY2lmaWVkLCBhbiBlbXB0eSB0YXNrIGlzIGFkZGVkIHRvIHRoZSBmaXJzdCBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7YW55fSBkYXRhPy4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5ldyB0YXNrJ3MgZGF0YVxuXHQqL1xuICAgIHB1YmxpYyBhZGRUYXNrKGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVGFzayhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRUYXNrKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgY29sdW1uIHRvIGEgS2FuYmFuLiBJZiBubyBkYXRhIGlzIHNwZWNpZmllZCwgYW4gZW1wdHkgY29sdW1uIGlzIGFkZGVkLiBcblx0KiBAcGFyYW0ge2FueX0gZGF0YT8uIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZXcgY29sdW1uJ3MgZGF0YVxuXHQqL1xuICAgIHB1YmxpYyBhZGRDb2x1bW4oZGF0YT86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRDb2x1bW4oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29sdW1uKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBCZWdpbnMgYW4gZWRpdCBvcGVyYXRpb24gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCovXG4gICAgcHVibGljIGJlZ2luRWRpdCh0YXNrOiBudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpbkVkaXQodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5FZGl0KHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSBjdXJyZW50IGVkaXQgb3BlcmF0aW9uIGFuZCBkaXNjYXJkcyBjaGFuZ2VzIFxuXHQqL1xuICAgIHB1YmxpYyBjYW5jZWxFZGl0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jYW5jZWxFZGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbG9zZXMgYW55IG9wZW4gaGVhZGVyIHBhbmVsIChkcm9wIGRvd24pIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VQYW5lbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYSBLYW5iYW4gY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gY29sdW1uLiBUaGUgaW5kZXggb3IgZGF0YUZpZWxkIG9mIHRoZSBjb2x1bW4gdG8gY29sbGFwc2Vcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2UoY29sdW1uOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZShjb2x1bW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgY29weSBvZiBhIHRhc2sgaW4gdGhlIHNhbWUgY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50fSB0YXNrLiBUaGUgdGFzaydzIGlkIG9yIGNvcnJlc3BvbmRpbmcgSFRNTEVsZW1lbnRcblx0Ki9cbiAgICBwdWJsaWMgY29weVRhc2sodGFzazogbnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29weVRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29weVRhc2sodGFzayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuZHMgdGhlIGN1cnJlbnQgZWRpdCBvcGVyYXRpb24gYW5kIHNhdmVzIGNoYW5nZXMgXG5cdCovXG4gICAgcHVibGljIGVuZEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIHN1cmUgYSB0YXNrIGlzIHZpc2libGUgYnkgc2Nyb2xsaW5nIHRvIGl0LiBJZiBzdWNjY2Vzc2Z1bCwgdGhlIG1ldGhvZCByZXR1cm5zIHRoZSBIVE1MIGVsZW1lbnQgb2YgdGhlIHRhc2suIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgKi9cblx0cHVibGljIGFzeW5jIGVuc3VyZVZpc2libGUodGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhIEthbmJhbiBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSBjb2x1bW4uIFRoZSBpbmRleCBvciBkYXRhRmllbGQgb2YgdGhlIGNvbHVtbiB0byBleHBhbmRcblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kKGNvbHVtbjogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZChjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZChjb2x1bW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGFsbCBLYW5iYW4gY29sdW1ucy4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZEFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIEthbmJhbidzIGRhdGEuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRm9ybWF0LiBUaGUgZmlsZSBmb3JtYXQgdG8gZXhwb3J0IHRvLiBTdXBwb3J0ZWQgZm9ybWF0czogJ2NzdicsICdodG1sJywgJ2pzb24nLCAncGRmJywgJ3RzdicsICd4bHN4JywgJ3htbCcuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gZXhwb3J0IHRvXG5cdCogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2s/LiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHBhc3MgdGhlIGV4cG9ydGVkIGRhdGEgdG8gKGlmIGZpbGVOYW1lIGlzIG5vdCBwcm92aWRlZClcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBmaWxlTmFtZT8sIGNhbGxiYWNrPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGZpbGVOYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBLYW5iYW4ncyBzdGF0ZS4gXG5cdCogQHJldHVybnMge3sgY29sbGFwc2VkOiB7fSwgZGF0YVNvdXJjZTogW10sIGZpbHRlcmluZzogeyBmaWx0ZXJzOiBbXSwgb3BlcmF0b3I6IHN0cmluZyB9LCBzZWxlY3Rpb246IHsgc2VsZWN0ZWQ6IFtdLCBzZWxlY3Rpb25TdGFydDogbnVtYmVyIHwgc3RyaW5nLCBzZWxlY3Rpb25JbkNvbHVtbjogc3RyaW5nLCBzd2ltbGFuZTogc3RyaW5nIH0sIHNvcnRpbmc6IHsgZGF0YUZpZWxkczogW10sIGRhdGFUeXBlczogW10sIG9yZGVyQnk6IFtdIH0sIHRhYnM6IFtdLCB2aXNpYmlsaXR5OiB7IHRhc2tBY3Rpb25zOiBib29sZWFuLCB0YXNrQ29tbWVudHM6IGJvb2xlYW4sIHRhc2tEdWU6IGJvb2xlYW4sIHRhc2tQcmlvcml0eTogYm9vbGVhbiwgdGFza1Byb2dyZXNzOiBib29sZWFuLCB0YXNrVGFnczogYm9vbGVhbiwgdGFza1VzZXJJY29uOiBib29sZWFuIH0gfX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFN0YXRlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgdGhlIEthbmJhbidzIHN0YXRlLiBcblx0KiBAcGFyYW0ge3sgY29sbGFwc2VkOiB7fSwgZGF0YVNvdXJjZTogW10sIGZpbHRlcmluZzogeyBmaWx0ZXJzOiBbXSwgb3BlcmF0b3I6IHN0cmluZyB9LCBzZWxlY3Rpb246IHsgc2VsZWN0ZWQ6IFtdLCBzZWxlY3Rpb25TdGFydD86IG51bWJlciB8IHN0cmluZywgc2VsZWN0aW9uSW5Db2x1bW46IHN0cmluZywgc3dpbWxhbmU6IHN0cmluZyB9LCBzb3J0aW5nOiB7IGRhdGFGaWVsZHM6IFtdLCBkYXRhVHlwZXM6IFtdLCBvcmRlckJ5OiBbXSB9LCB0YWJzOiBbXSwgdmlzaWJpbGl0eTogeyB0YXNrQWN0aW9uczogYm9vbGVhbiwgdGFza0NvbW1lbnRzOiBib29sZWFuLCB0YXNrRHVlOiBib29sZWFuLCB0YXNrUHJpb3JpdHk6IGJvb2xlYW4sIHRhc2tQcm9ncmVzczogYm9vbGVhbiwgdGFza1RhZ3M6IGJvb2xlYW4sIHRhc2tVc2VySWNvbjogYm9vbGVhbiB9IH19IHN0YXRlPy4gQW4gb2JqZWN0IHJldHVybmVkIGJ5IG9uZSBvZiB0aGUgbWV0aG9kcyBnZXRTdGF0ZSBvciBzYXZlU3RhdGUuIElmIG5vdCBwYXNzZWQsIGdldHMgc2F2ZWQgc3RhdGUgZnJvbSB0aGUgYnJvd3NlcidzIGxvY2FsU3RvcmFnZS5cblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKHN0YXRlPzogeyBjb2xsYXBzZWQ6IHt9LCBkYXRhU291cmNlOiBbXSwgZmlsdGVyaW5nOiB7IGZpbHRlcnM6IFtdLCBvcGVyYXRvcjogc3RyaW5nIH0sIHNlbGVjdGlvbjogeyBzZWxlY3RlZDogW10sIHNlbGVjdGlvblN0YXJ0PzogbnVtYmVyIHwgc3RyaW5nLCBzZWxlY3Rpb25JbkNvbHVtbjogc3RyaW5nLCBzd2ltbGFuZTogc3RyaW5nIH0sIHNvcnRpbmc6IHsgZGF0YUZpZWxkczogW10sIGRhdGFUeXBlczogW10sIG9yZGVyQnk6IFtdIH0sIHRhYnM6IFtdLCB2aXNpYmlsaXR5OiB7IHRhc2tBY3Rpb25zOiBib29sZWFuLCB0YXNrQ29tbWVudHM6IGJvb2xlYW4sIHRhc2tEdWU6IGJvb2xlYW4sIHRhc2tQcmlvcml0eTogYm9vbGVhbiwgdGFza1Byb2dyZXNzOiBib29sZWFuLCB0YXNrVGFnczogYm9vbGVhbiwgdGFza1VzZXJJY29uOiBib29sZWFuIH0gfSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1vdmVzIGEgdGFzayB0byBhIGRpZmZlcmVudCBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuZXdTdGF0dXMuIFRoZSBuZXcgc3RhdHVzIG9mIHRoZSB0YXNrIChpdHMgbmV3IGNvbHVtbidzIGRhdGFGaWVsZClcblx0Ki9cbiAgICBwdWJsaWMgbW92ZVRhc2sodGFzazogbnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnQsIG5ld1N0YXR1czogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm1vdmVUYXNrKHRhc2ssIG5ld1N0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubW92ZVRhc2sodGFzaywgbmV3U3RhdHVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIFwiQ3VzdG9taXplIHRhc2tzXCIgaGVhZGVyIHBhbmVsIChkcm9wIGRvd24pIFxuXHQqL1xuICAgIHB1YmxpYyBvcGVuQ3VzdG9taXplUGFuZWwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5DdXN0b21pemVQYW5lbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5DdXN0b21pemVQYW5lbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgXCJGaWx0ZXJcIiBoZWFkZXIgcGFuZWwgKGRyb3AgZG93bikgXG5cdCovXG4gICAgcHVibGljIG9wZW5GaWx0ZXJQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkZpbHRlclBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkZpbHRlclBhbmVsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBcIlNvcnRcIiBoZWFkZXIgcGFuZWwgKGRyb3AgZG93bikgXG5cdCovXG4gICAgcHVibGljIG9wZW5Tb3J0UGFuZWwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5Tb3J0UGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuU29ydFBhbmVsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgZmlsdGVyaW5nIFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUZpbHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUZpbHRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIHNvcnRpbmcgXG5cdCovXG4gICAgcHVibGljIHJlbW92ZVNvcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVTb3J0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50fSB0YXNrLiBUaGUgdGFzaydzIGlkIG9yIGNvcnJlc3BvbmRpbmcgSFRNTEVsZW1lbnRcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHByb21wdD8uIFdoZXRoZXIgb3Igbm90IHRvIHByb21wdCB0aGUgdXNlciBiZWZvcmUgcmVtb3ZpbmcgdGhlIHRhc2tcblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlVGFzayh0YXNrOiBudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudCwgcHJvbXB0PzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVUYXNrKHRhc2ssIHByb21wdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlVGFzayh0YXNrLCBwcm9tcHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVDb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ29sdW1uKGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ29sdW1uKGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNhdmVzIHRoZSBLYW5iYW4ncyBzdGF0ZSB0byB0aGUgYnJvd3NlcidzIGxvY2FsU3RvcmFnZS4gXG5cdCovXG4gICAgcHVibGljIHNhdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50fSB0YXNrLiBUaGUgdGFzaydzIGlkIG9yIGNvcnJlc3BvbmRpbmcgSFRNTEVsZW1lbnRcblx0KiBAcGFyYW0ge3t9fSBuZXdEYXRhLiBUaGUgbmV3IGRhdGEgdG8gdmlzdWFsaXplIGluIHRoZSB0YXNrLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50LCBuZXdEYXRhOiB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKHRhc2ssIG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZVRhc2sodGFzaywgbmV3RGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBuZXcgY29sdW1uJ3MgZGF0YSBmaWVsZFxuXHQqIEBwYXJhbSB7e319IG5ld0RhdGEuIFRoZSBuZXcgZGF0YSB0byB2aXN1YWxpemUgaW4gdGhlIGNvbHVtbi5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlQ29sdW1uKGRhdGFGaWVsZDogc3RyaW5nLCBuZXdEYXRhOiB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVDb2x1bW4oZGF0YUZpZWxkLCBuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVDb2x1bW4oZGF0YUZpZWxkLCBuZXdEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkFkZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkFkZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5BZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkFkZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlbW92ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblJlbW92ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlbW92ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlb3JkZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5SZW9yZGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlb3JkZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5VcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5VcGRhdGUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5VcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uRG91YmxlQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRmlsdGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbHRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25PcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU29ydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblRhc2tBZGQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGFza0FkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25UYXNrUmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tSZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkFkZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkFkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQWRkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlbW92ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlb3JkZXJIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblVwZGF0ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdnaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnZ2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50Lm9uZmlsdGVySGFuZGxlciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rhc2tBZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tBZGRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0YXNrUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrUmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19