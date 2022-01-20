import { Kanban } from './../index';
import { KanbanAddNewButtonDisplayMode, KanbanColumnEditMode, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { KanbanAddNewButtonDisplayMode, KanbanColumnOrientation, KanbanColumnEditMode, KanbanDataSourcePriority, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Kanban } from './../index';
export { DataAdapter } from './../index';
export declare class KanbanComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Kanban>);
    private eventHandlers;
    nativeElement: Kanban;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables column reordering. When this property is set to true and allowDrag is enabled, users will be able to reoder columns through drag & drop. For example: Click and drag the first column's header and drop it over another column. */
    allowColumnReorder: boolean;
    /** @description Enables or disables column editing. When this property is set to true, users will be able to dynamically change the column's header label by double clicking on it. */
    allowColumnEdit: boolean;
    /** @description Enables or disables column removing. When this property is set to true, users will be able to dynamically remove a column through the column actions menu. the 'columnActions' property should be true. */
    allowColumnRemove: boolean;
    /** @description Enables or disables column hiding. When this property is set to true, users will be able to dynamically hide a column through the column actions menu. the 'columnActions' property should be true. */
    allowColumnHide: boolean;
    /** @description Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false. */
    addNewButton: boolean;
    /** @description Determines whether the add button is visible in the column header and/or after the tasks in the column. */
    addNewButtonDisplayMode: KanbanAddNewButtonDisplayMode;
    /** @description Sets or gets whether a column with a button for adding new status columns to the Kanban will be displayed. */
    addNewColumn: boolean;
    /** @description Allows the dragging of tasks. */
    allowDrag: boolean;
    /** @description Allows the dropping of tasks. */
    allowDrop: boolean;
    /** @description Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded. */
    autoLoadState: boolean;
    /** @description Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved. */
    autoSaveState: boolean;
    /** @description Allows collapsing the card content. */
    collapsible: boolean;
    /** @description Displays colors in the column header, when the column's color property is set. */
    columnColors: boolean;
    /** @description Describes the columns properties. */
    columns: KanbanColumn[];
    /** @description Toggles the visibility of the column actions icon. */
    columnActions: boolean;
    /** @description Determines whether task count information is displayed in column headers. */
    columnSummary: boolean;
    /** @description Determines whether a column header has a template. You can pass 'string', 'function' or HTMLTemplateElement as a value. */
    columnHeaderTemplate: any;
    /** @description Determines the column edit behavior. With the 'header' option, edit starts on double click on the column's label. In 'menu' mode, edit is allowed from the 'columnActions' menu. In 'headerAndMenu' option, column editing includes both options. */
    columnEditMode: KanbanColumnEditMode;
    /** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
    currentUser: string | number;
    /** @description Determines the data source to be visualized in the kanban board. */
    dataSource: KanbanDataSource[];
    /** @description Determines the the relation (mapping) between the Kanban's default fields (keywords) and the data fields from the data source. Not necessary if both match. Only some of the default mapping can be overwritten. */
    dataSourceMap: {
        checklist: string;
        color: string;
        comments: string;
        dueDate: string;
        id: string;
        priority: string;
        progress: string;
        startDate: string;
        status: string;
        swimlane: string;
        tags: string;
        text: string;
        userId: string;
        createdUserId: string;
        upDatedUserId: string;
        createdDate: Date;
        upDatedDate: Date;
    };
    /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started. */
    dragOffset: boolean;
    /** @description Sets or gets whether tasks can be edited (including the assigning of users to tasks). */
    editable: boolean;
    /** @description Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors. */
    formatStringDate: string;
    /** @description Sets or gets the format string of comments time stamp. */
    formatStringTime: string;
    /** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
    headerPosition: KanbanHeaderPosition;
    /** @description Sets or gets the way column hierarchy is represented. */
    hierarchy: KanbanHierarchy;
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    locale: string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines selection mode. */
    selectionMode: KanbanSelectionMode;
    /** @description Sets or gets whether the tasks history will be stored and displayed in the task dialog. */
    storeHistory: boolean;
    /** @description Sets or gets the task history items that will be stored when storeHistory is enabled. */
    storeHistoryItems: number;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present. */
    swimlanes: KanbanSwimlane[];
    /** @description Sets or gets the index of the column at which to start the swimlanes. */
    swimlanesFrom: number;
    /** @description Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column. */
    swimlanesTo: number;
    /** @description Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed. */
    tags: any[];
    /** @description Toggles the visibility of the task actions icon. */
    taskActions: boolean;
    /** @description Toggles the visibility of the task comments icon. */
    taskComments: boolean;
    /** @description Toggles the visibility of the task due icon. */
    taskDue: boolean;
    /** @description Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
    taskPosition: KanbanTaskPosition;
    /** @description Toggles the visibility of the task priority icon (shown when priority is low or high). */
    taskPriority: boolean;
    /** @description Toggles the visibility of task progress bar and the completed sub-tasks label. */
    taskProgress: boolean;
    /** @description Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. */
    taskCustomFields: any;
    /** @description The task's background color depends on the task's color property. By default the color is rendered within the task's left border. */
    taskColorEntireSurface: boolean;
    /** @description Displays an input in the task's card for adding dynamically a sub task. The 'taskSubTasks' property should be set to a value different than 'none'. */
    taskSubTasksInput: boolean;
    /** @description Sets the rendering mode of sub tasks. 'none' - default value. Sub tasks are displayed only in the edit dialog. 'onePerRow' - all sub tasks are displayed in the task's card. 'onlyUnfinished' - only tasks which are not completed are displayed in the task's card. */
    taskSubTasks: KanbanTaskSubTasks;
    /** @description Toggles the visibility of task tags. */
    taskTags: boolean;
    /** @description Toggles the visibility of the task user icon. */
    taskUserIcon: boolean;
    /** @description Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed. */
    textTemplate: any;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Determines whether the priority list (as defined by the priority property) will be shown when clicking the priority icon. Only applicable if editable privileges are enabled. */
    priorityList: boolean;
    /** @description Determines the priority Kanban tasks can be assigned to. Example: [{label: 'low', value: 'low'}, {label: 'high', value: 'high'}] */
    priority: KanbanPriority[];
    /** @description Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled. */
    userList: boolean;
    /** @description Determines the users Kanban tasks can be assigned to and their characteristics and privileges. */
    users: KanbanUser[];
    /** @description This event is triggered when a task has been updated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
    *   oldValue - The old data of the task
    *   task - The HTML element of the task whose data has been changed
    *   value - The new data of the task
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the edit/prompt dialog is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column is added.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnAdd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column is removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnRemove: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column is reordered.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index, 	column)
    *   oldIndex - The column's old index.
    *   index - The column's new index.
    *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
    */
    onColumnReorder: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column is updated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	column)
    *   oldValue - The column's old label.
    *   value - The column's new label.
    *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
    */
    onColumnUpdate: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column header is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column header is double clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnDoubleClick: EventEmitter<CustomEvent>;
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
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user is dragging a task.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
    *   data - an object with additional drag details
    *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
    *   items - an array with all dragged tasks
    *   originalEvent - the original, browser, event that initiates the drag operation
    */
    onDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
    *   container - the Kanban the dragged task(s) is dragged from
    *   data - an object with additional drag details
    *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
    *   items - an array with all dragged tasks
    *   originalEvent - the original, browser, event that initiates the drag operation
    *   previousContainer - the Kanban the dragged item(s) is dragged from
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a filter has been applied.
    *  @param event. The custom event. 	*/
    onFilter: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the edit/prompt dialog is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
    *   comment - The comment that is about to be removed (if applicable).
    *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
    *   task - The task that is about to be edited or removed (if applicable).
    */
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when sorting has been applied.
    *  @param event. The custom event. 	*/
    onSort: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a new task is added.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - The task data that is added to the Kanban.
    */
    onTaskAdd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a task is removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - The task data that is removed from the Kanban.
    */
    onTaskRemove: EventEmitter<CustomEvent>;
    /** @description Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    addFilter(filters: string[], operator?: string): void;
    /** @description Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    addSort(dataFields: [] | string, orderBy: [] | string): void;
    /** @description Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
    * @param {any} data?. An object containing the new task's data
    */
    addTask(data?: any): void;
    /** @description Adds a column to a Kanban. If no data is specified, an empty column is added.
    * @param {any} data?. An object containing the new column's data
    */
    addColumn(data?: any): void;
    /** @description Begins an edit operation
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    beginEdit(task: number | string | HTMLElement): void;
    /** @description Ends the current edit operation and discards changes
    */
    cancelEdit(): void;
    /** @description Closes any open header panel (drop down)
    */
    closePanel(): void;
    /** @description Collapses a Kanban column.
    * @param {number | string} column. The index or dataField of the column to collapse
    */
    collapse(column: number | string): void;
    /** @description Hides a Kanban column.
    * @param {number | string} column. The index or dataField of the column to hide
    */
    hide(column: number | string): void;
    /** @description Creates a copy of a task in the same column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    copyTask(task: number | string | HTMLElement): void;
    /** @description Ends the current edit operation and saves changes
    */
    endEdit(): void;
    /** @description Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @returns {HTMLElement}
  */
    ensureVisible(task: any): Promise<any>;
    /** @description Expands a Kanban column.
    * @param {number | string} column. The index or dataField of the column to expand
    */
    expand(column: number | string): void;
    /** @description Expands all Kanban columns.
    */
    expandAll(): void;
    /** @description Exports the Kanban's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: any, fileName: any, callback?: any): Promise<any>;
    /** @description Gets the data of a column. The returned value is a JSON object with the following fields: 'label', 'dataField', 'collapsed', 'collapsible', 'allowRemove', 'editable', 'reorder', 'orientation'.
    * @param {string} dataField. The column's data field
    * @returns {any}
  */
    getColumn(dataField: any): Promise<any>;
    /** @description Gets the Kanban's state.
    * @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
  */
    getState(): Promise<any>;
    /** @description Loads the Kanban's state.
    * @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
    */
    loadState(state?: {
        collapsed: {};
        dataSource: [];
        filtering: {
            filters: [];
            operator: string;
        };
        selection: {
            selected: [];
            selectionStart?: number | string;
            selectionInColumn: string;
            swimlane: string;
        };
        sorting: {
            dataFields: [];
            dataTypes: [];
            orderBy: [];
        };
        tabs: [];
        visibility: {
            taskActions: boolean;
            taskComments: boolean;
            taskDue: boolean;
            taskPriority: boolean;
            taskProgress: boolean;
            taskTags: boolean;
            taskUserIcon: boolean;
        };
    }): void;
    /** @description Moves a task to a different column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {string} newStatus. The new status of the task (its new column's dataField)
    */
    moveTask(task: number | string | HTMLElement, newStatus: string): void;
    /** @description Opens the "Customize tasks" header panel (drop down)
    */
    openCustomizePanel(): void;
    /** @description Opens the "Filter" header panel (drop down)
    */
    openFilterPanel(): void;
    /** @description Opens the "Sort" header panel (drop down)
    */
    openSortPanel(): void;
    /** @description Removes filtering
    */
    removeFilter(): void;
    /** @description Removes sorting
    */
    removeSort(): void;
    /** @description Removes a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
    */
    removeTask(task: number | string | HTMLElement, prompt?: boolean): void;
    /** @description Removes a column.
    * @param {string} dataField. The column's data field
    */
    removeColumn(dataField: string): void;
    /** @description Saves the Kanban's state to the browser's localStorage.
    */
    saveState(): void;
    /** @description Shows a Kanban column.
    * @param {number | string} column. The index or dataField of the column to show
    */
    show(column: number | string): void;
    /** @description Shows all Kanban columns.
    */
    showAllColumns(): void;
    /** @description Updates a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {{}} newData. The new data to visualize in the task.
    */
    updateTask(task: number | string | HTMLElement, newData: {}): void;
    /** @description Updates a column.
    * @param {string} dataField. The new column's data field
    * @param {{}} newData. The new data to visualize in the column.
    */
    updateColumn(dataField: string, newData: {}): void;
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
