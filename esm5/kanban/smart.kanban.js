import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var KanbanComponent = /** @class */ (function (_super) {
    tslib_1.__extends(KanbanComponent, _super);
    function KanbanComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a task has been updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
        *   oldValue - The old data of the task
        *   task - The HTML element of the task whose data has been changed
        *   value - The new data of the task
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when a column is added.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        _this.onColumnAdd = new EventEmitter();
        /** @description This event is triggered when a column is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        _this.onColumnRemove = new EventEmitter();
        /** @description This event is triggered when a column is reordered.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index, 	column)
        *   oldIndex - The column's old index.
        *   index - The column's new index.
        *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
        */
        _this.onColumnReorder = new EventEmitter();
        /** @description This event is triggered when a column is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	column)
        *   oldValue - The column's old label.
        *   value - The column's new label.
        *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
        */
        _this.onColumnUpdate = new EventEmitter();
        /** @description This event is triggered when a column header is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        _this.onColumnClick = new EventEmitter();
        /** @description This event is triggered when a column header is double clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
        *   label - The column label.
        *   dataField - The column data field.
        *   collapsed - The column's collapsed state.
        */
        _this.onColumnDoubleClick = new EventEmitter();
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
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when the user is dragging a task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
        *   data - an object with additional drag details
        *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
        *   items - an array with all dragged tasks
        *   originalEvent - the original, browser, event that initiates the drag operation
        */
        _this.onDragging = new EventEmitter();
        /** @description This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
        *   container - the Kanban the dragged task(s) is dragged from
        *   data - an object with additional drag details
        *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
        *   items - an array with all dragged tasks
        *   originalEvent - the original, browser, event that initiates the drag operation
        *   previousContainer - the Kanban the dragged item(s) is dragged from
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when a filter has been applied.
        *  @param event. The custom event. 	*/
        _this.onFilter = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
        *   comment - The comment that is about to be removed (if applicable).
        *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
        *   task - The task that is about to be edited or removed (if applicable).
        */
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when sorting has been applied.
        *  @param event. The custom event. 	*/
        _this.onSort = new EventEmitter();
        /** @description This event is triggered when a new task is added.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
        *   value - The task data that is added to the Kanban.
        */
        _this.onTaskAdd = new EventEmitter();
        /** @description This event is triggered when a task is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
        *   value - The task data that is removed from the Kanban.
        */
        _this.onTaskRemove = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    KanbanComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-kanban');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(KanbanComponent.prototype, "allowColumnReorder", {
        /** @description Enables or disables column reordering. When this property is set to true and allowDrag is enabled, users will be able to reoder columns through drag & drop. For example: Click and drag the first column's header and drop it over another column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowColumnReorder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowColumnReorder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "allowColumnEdit", {
        /** @description Enables or disables column editing. When this property is set to true, users will be able to dynamically change the column's header label by double clicking on it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowColumnEdit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowColumnEdit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "allowColumnRemove", {
        /** @description Enables or disables column removing. When this property is set to true, users will be able to dynamically remove a column through the column actions menu. the 'columnActions' property should be true. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowColumnRemove : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowColumnRemove = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "allowColumnHide", {
        /** @description Enables or disables column hiding. When this property is set to true, users will be able to dynamically hide a column through the column actions menu. the 'columnActions' property should be true. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowColumnHide : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowColumnHide = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "addNewButton", {
        /** @description Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false. */
        get: function () {
            return this.nativeElement ? this.nativeElement.addNewButton : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "addNewButtonDisplayMode", {
        /** @description Determines whether the add button is visible in the column header and/or after the tasks in the column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.addNewButtonDisplayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.addNewButtonDisplayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "addNewColumn", {
        /** @description Sets or gets whether a column with a button for adding new status columns to the Kanban will be displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.addNewColumn : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.addNewColumn = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "allowDrag", {
        /** @description Allows the dragging of tasks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "allowDrop", {
        /** @description Allows the dropping of tasks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "autoLoadState", {
        /** @description Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "autoSaveState", {
        /** @description Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "collapsible", {
        /** @description Allows collapsing the card content. */
        get: function () {
            return this.nativeElement ? this.nativeElement.collapsible : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.collapsible = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columnColors", {
        /** @description Displays colors in the column header, when the column's color property is set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnColors : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnColors = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columns", {
        /** @description Describes the columns properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columnActions", {
        /** @description Toggles the visibility of the column actions icon. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnActions : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnActions = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columnSummary", {
        /** @description Determines whether task count information is displayed in column headers. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnSummary : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnSummary = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columnHeaderTemplate", {
        /** @description Determines whether a column header has a template. You can pass 'string', 'function' or HTMLTemplateElement as a value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnHeaderTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnHeaderTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columnEditMode", {
        /** @description Determines the column edit behavior. With the 'header' option, edit starts on double click on the column's label. In 'menu' mode, edit is allowed from the 'columnActions' menu. In 'headerAndMenu' option, column editing includes both options. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnEditMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnEditMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "currentUser", {
        /** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.currentUser : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.currentUser = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "dataSource", {
        /** @description Determines the data source to be visualized in the kanban board. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "dataSourceMap", {
        /** @description Determines the the relation (mapping) between the Kanban's default fields (keywords) and the data fields from the data source. Not necessary if both match. Only some of the default mapping can be overwritten. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSourceMap : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSourceMap = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "dragOffset", {
        /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dragOffset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "editable", {
        /** @description Sets or gets whether tasks can be edited (including the assigning of users to tasks). */
        get: function () {
            return this.nativeElement ? this.nativeElement.editable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "formatStringDate", {
        /** @description Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "formatStringTime", {
        /** @description Sets or gets the format string of comments time stamp. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatStringTime = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "headerPosition", {
        /** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "hierarchy", {
        /** @description Sets or gets the way column hierarchy is represented. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hierarchy : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hierarchy = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "locale", {
        /** @description Sets or gets the locale. Used in conjunction with the property messages. */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "messages", {
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
    Object.defineProperty(KanbanComponent.prototype, "selectionMode", {
        /** @description Determines selection mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "storeHistory", {
        /** @description Sets or gets whether the tasks history will be stored and displayed in the task dialog. */
        get: function () {
            return this.nativeElement ? this.nativeElement.storeHistory : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.storeHistory = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "storeHistoryItems", {
        /** @description Sets or gets the task history items that will be stored when storeHistory is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.storeHistoryItems : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.storeHistoryItems = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(KanbanComponent.prototype, "swimlanes", {
        /** @description Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present. */
        get: function () {
            return this.nativeElement ? this.nativeElement.swimlanes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.swimlanes = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "swimlanesFrom", {
        /** @description Sets or gets the index of the column at which to start the swimlanes. */
        get: function () {
            return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.swimlanesFrom = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "swimlanesTo", {
        /** @description Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.swimlanesTo = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "tags", {
        /** @description Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tags : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tags = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskActions", {
        /** @description Toggles the visibility of the task actions icon. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskActions : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskActions = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskComments", {
        /** @description Toggles the visibility of the task comments icon. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskComments : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskComments = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskDue", {
        /** @description Toggles the visibility of the task due icon. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskDue : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskDue = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskPosition", {
        /** @description Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskPriority", {
        /** @description Toggles the visibility of the task priority icon (shown when priority is low or high). */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskPriority : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskPriority = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskProgress", {
        /** @description Toggles the visibility of task progress bar and the completed sub-tasks label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskProgress : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskProgress = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskCustomFields", {
        /** @description Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskCustomFields : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskCustomFields = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskColorEntireSurface", {
        /** @description The task's background color depends on the task's color property. By default the color is rendered within the task's left border. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskColorEntireSurface : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskColorEntireSurface = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskSubTasksInput", {
        /** @description Displays an input in the task's card for adding dynamically a sub task. The 'taskSubTasks' property should be set to a value different than 'none'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskSubTasksInput : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskSubTasksInput = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskSubTasks", {
        /** @description Sets the rendering mode of sub tasks. 'none' - default value. Sub tasks are displayed only in the edit dialog. 'onePerRow' - all sub tasks are displayed in the task's card. 'onlyUnfinished' - only tasks which are not completed are displayed in the task's card. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskSubTasks : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskSubTasks = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskTags", {
        /** @description Toggles the visibility of task tags. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskTags : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskTags = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "taskUserIcon", {
        /** @description Toggles the visibility of the task user icon. */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskUserIcon = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "textTemplate", {
        /** @description Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.textTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.textTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "priorityList", {
        /** @description Determines whether the priority list (as defined by the priority property) will be shown when clicking the priority icon. Only applicable if editable privileges are enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.priorityList : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.priorityList = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "priority", {
        /** @description Determines the priority Kanban tasks can be assigned to. Example: [{label: 'low', value: 'low'}, {label: 'high', value: 'high'}] */
        get: function () {
            return this.nativeElement ? this.nativeElement.priority : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.priority = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "userList", {
        /** @description Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.userList : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.userList = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "users", {
        /** @description Determines the users Kanban tasks can be assigned to and their characteristics and privileges. */
        get: function () {
            return this.nativeElement ? this.nativeElement.users : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.users = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    KanbanComponent.prototype.addFilter = function (filters, operator) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(filters, operator);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addFilter(filters, operator);
            });
        }
    };
    /** @description Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    KanbanComponent.prototype.addSort = function (dataFields, orderBy) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataFields, orderBy);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addSort(dataFields, orderBy);
            });
        }
    };
    /** @description Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
    * @param {any} data?. An object containing the new task's data
    */
    KanbanComponent.prototype.addTask = function (data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTask(data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addTask(data);
            });
        }
    };
    /** @description Adds a column to a Kanban. If no data is specified, an empty column is added.
    * @param {any} data?. An object containing the new column's data
    */
    KanbanComponent.prototype.addColumn = function (data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColumn(data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addColumn(data);
            });
        }
    };
    /** @description Begins an edit operation
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    KanbanComponent.prototype.beginEdit = function (task) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(task);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginEdit(task);
            });
        }
    };
    /** @description Ends the current edit operation and discards changes
    */
    KanbanComponent.prototype.cancelEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.cancelEdit();
            });
        }
    };
    /** @description Closes any open header panel (drop down)
    */
    KanbanComponent.prototype.closePanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closePanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closePanel();
            });
        }
    };
    /** @description Collapses a Kanban column.
    * @param {number | string} column. The index or dataField of the column to collapse
    */
    KanbanComponent.prototype.collapse = function (column) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(column);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapse(column);
            });
        }
    };
    /** @description Hides a Kanban column.
    * @param {number | string} column. The index or dataField of the column to hide
    */
    KanbanComponent.prototype.hide = function (column) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide(column);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hide(column);
            });
        }
    };
    /** @description Creates a copy of a task in the same column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    KanbanComponent.prototype.copyTask = function (task) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyTask(task);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.copyTask(task);
            });
        }
    };
    /** @description Ends the current edit operation and saves changes
    */
    KanbanComponent.prototype.endEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endEdit();
            });
        }
    };
    /** @description Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @returns {HTMLElement}
  */
    KanbanComponent.prototype.ensureVisible = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.ensureVisible(task);
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
    /** @description Expands a Kanban column.
    * @param {number | string} column. The index or dataField of the column to expand
    */
    KanbanComponent.prototype.expand = function (column) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(column);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expand(column);
            });
        }
    };
    /** @description Expands all Kanban columns.
    */
    KanbanComponent.prototype.expandAll = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandAll();
            });
        }
    };
    /** @description Exports the Kanban's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    KanbanComponent.prototype.exportData = function (dataFormat, fileName, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.exportData(dataFormat, fileName, callback);
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
    /** @description Gets the data of a column. The returned value is a JSON object with the following fields: 'label', 'dataField', 'collapsed', 'collapsible', 'allowRemove', 'editable', 'reorder', 'orientation'.
    * @param {string} dataField. The column's data field
    * @returns {any}
  */
    KanbanComponent.prototype.getColumn = function (dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getColumn(dataField);
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
    /** @description Gets the Kanban's state.
    * @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
  */
    KanbanComponent.prototype.getState = function () {
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
    /** @description Loads the Kanban's state.
    * @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
    */
    KanbanComponent.prototype.loadState = function (state) {
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
    /** @description Moves a task to a different column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {string} newStatus. The new status of the task (its new column's dataField)
    */
    KanbanComponent.prototype.moveTask = function (task, newStatus) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveTask(task, newStatus);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.moveTask(task, newStatus);
            });
        }
    };
    /** @description Opens the "Customize tasks" header panel (drop down)
    */
    KanbanComponent.prototype.openCustomizePanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openCustomizePanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openCustomizePanel();
            });
        }
    };
    /** @description Opens the "Filter" header panel (drop down)
    */
    KanbanComponent.prototype.openFilterPanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openFilterPanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openFilterPanel();
            });
        }
    };
    /** @description Opens the "Sort" header panel (drop down)
    */
    KanbanComponent.prototype.openSortPanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openSortPanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openSortPanel();
            });
        }
    };
    /** @description Removes filtering
    */
    KanbanComponent.prototype.removeFilter = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeFilter();
            });
        }
    };
    /** @description Removes sorting
    */
    KanbanComponent.prototype.removeSort = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeSort();
            });
        }
    };
    /** @description Removes a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
    */
    KanbanComponent.prototype.removeTask = function (task, prompt) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(task, prompt);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeTask(task, prompt);
            });
        }
    };
    /** @description Removes a column.
    * @param {string} dataField. The column's data field
    */
    KanbanComponent.prototype.removeColumn = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeColumn(dataField);
            });
        }
    };
    /** @description Saves the Kanban's state to the browser's localStorage.
    */
    KanbanComponent.prototype.saveState = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveState();
            });
        }
    };
    /** @description Shows a Kanban column.
    * @param {number | string} column. The index or dataField of the column to show
    */
    KanbanComponent.prototype.show = function (column) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.show(column);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.show(column);
            });
        }
    };
    /** @description Shows all Kanban columns.
    */
    KanbanComponent.prototype.showAllColumns = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showAllColumns();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showAllColumns();
            });
        }
    };
    /** @description Updates a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {{}} newData. The new data to visualize in the task.
    */
    KanbanComponent.prototype.updateTask = function (task, newData) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(task, newData);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateTask(task, newData);
            });
        }
    };
    /** @description Updates a column.
    * @param {string} dataField. The new column's data field
    * @param {{}} newData. The new data to visualize in the column.
    */
    KanbanComponent.prototype.updateColumn = function (dataField, newData) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateColumn(dataField, newData);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateColumn(dataField, newData);
            });
        }
    };
    Object.defineProperty(KanbanComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    KanbanComponent.prototype.ngOnInit = function () {
    };
    KanbanComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    KanbanComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    KanbanComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    KanbanComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['columnAddHandler'] = function (event) { that.onColumnAdd.emit(event); };
        that.nativeElement.addEventListener('columnAdd', that.eventHandlers['columnAddHandler']);
        that.eventHandlers['columnRemoveHandler'] = function (event) { that.onColumnRemove.emit(event); };
        that.nativeElement.addEventListener('columnRemove', that.eventHandlers['columnRemoveHandler']);
        that.eventHandlers['columnReorderHandler'] = function (event) { that.onColumnReorder.emit(event); };
        that.nativeElement.addEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
        that.eventHandlers['columnUpdateHandler'] = function (event) { that.onColumnUpdate.emit(event); };
        that.nativeElement.addEventListener('columnUpdate', that.eventHandlers['columnUpdateHandler']);
        that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['columnDoubleClickHandler'] = function (event) { that.onColumnDoubleClick.emit(event); };
        that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        that.eventHandlers['taskAddHandler'] = function (event) { that.onTaskAdd.emit(event); };
        that.nativeElement.addEventListener('taskAdd', that.eventHandlers['taskAddHandler']);
        that.eventHandlers['taskRemoveHandler'] = function (event) { that.onTaskRemove.emit(event); };
        that.nativeElement.addEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);
    };
    /** @description Remove event listeners. */
    KanbanComponent.prototype.unlisten = function () {
        var that = this;
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
    };
    KanbanComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return KanbanComponent;
}(BaseElement));
export { KanbanComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQua2FuYmFuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2thbmJhbi8iLCJzb3VyY2VzIjpbInNtYXJ0LmthbmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEM7SUFBcUMsMkNBQVc7SUFDL0MseUJBQVksR0FBdUI7UUFBbkMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBNGZsQzs7Ozs7VUFLRTtRQUNRLGNBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs4Q0FDc0M7UUFDNUIsYUFBTyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxFOzhDQUNzQztRQUM1QixlQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEU7Ozs7O1VBS0U7UUFDUSxpQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzs7OztVQUtFO1FBQ1Esb0JBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7Ozs7VUFLRTtRQUNRLHFCQUFlLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUU7Ozs7O1VBS0U7UUFDUSxvQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7OztVQUtFO1FBQ1EsbUJBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7Ozs7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QTtRQUM1RixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFB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UUFBVCxNQUFNLEVBQUU7Z0VBQXFFO0lBWXBFO1FBQVQsTUFBTSxFQUFFO3NEQUEyRDtJQVMxRDtRQUFULE1BQU0sRUFBRTt1REFBNEQ7SUFXM0Q7UUFBVCxNQUFNLEVBQUU7d0RBQTZEO0lBSTVEO1FBQVQsTUFBTSxFQUFFO3FEQUEwRDtJQUl6RDtRQUFULE1BQU0sRUFBRTttREFBd0Q7SUFRdkQ7UUFBVCxNQUFNLEVBQUU7c0RBQTJEO0lBSTFEO1FBQVQsTUFBTSxFQUFFO21EQUF3RDtJQU12RDtRQUFULE1BQU0sRUFBRTtzREFBMkQ7SUFNMUQ7UUFBVCxNQUFNLEVBQUU7eURBQThEO0lBaG9CM0QsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsOEJBQThCO1NBQ3hDLENBQUM7T0FFVyxlQUFlLENBcXdDM0I7SUFBRCxzQkFBQztDQUFBLEFBcndDRCxDQUFxQyxXQUFXLEdBcXdDL0M7U0Fyd0NZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLYW5iYW4gfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEthbmJhbkFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlLCBLYW5iYW5Db2x1bW5PcmllbnRhdGlvbiwgS2FuYmFuQ29sdW1uRWRpdE1vZGUsIEthbmJhbkRhdGFTb3VyY2VQcmlvcml0eSwgS2FuYmFuSGVhZGVyUG9zaXRpb24sIEthbmJhbkhpZXJhcmNoeSwgS2FuYmFuU2VsZWN0aW9uTW9kZSwgS2FuYmFuVGFza1Bvc2l0aW9uLCBLYW5iYW5UYXNrU3ViVGFza3MsIEthbmJhbkNvbHVtbiwgS2FuYmFuRGF0YVNvdXJjZSwgS2FuYmFuU3dpbWxhbmUsIEthbmJhblByaW9yaXR5LCBLYW5iYW5Vc2VyLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBEYXRhQWRhcHRlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEthbmJhbkFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlLCBLYW5iYW5Db2x1bW5PcmllbnRhdGlvbiwgS2FuYmFuQ29sdW1uRWRpdE1vZGUsIEthbmJhbkRhdGFTb3VyY2VQcmlvcml0eSwgS2FuYmFuSGVhZGVyUG9zaXRpb24sIEthbmJhbkhpZXJhcmNoeSwgS2FuYmFuU2VsZWN0aW9uTW9kZSwgS2FuYmFuVGFza1Bvc2l0aW9uLCBLYW5iYW5UYXNrU3ViVGFza3MsIEthbmJhbkNvbHVtbiwgS2FuYmFuRGF0YVNvdXJjZSwgS2FuYmFuU3dpbWxhbmUsIEthbmJhblByaW9yaXR5LCBLYW5iYW5Vc2VyLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBLYW5iYW4gfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IERhdGFBZGFwdGVyIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQta2FuYmFuLCBbc21hcnQta2FuYmFuXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBLYW5iYW5Db21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8S2FuYmFuPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgS2FuYmFuO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBLYW5iYW47XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEthbmJhbj5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1rYW5iYW4nKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgY29sdW1uIHJlb3JkZXJpbmcuIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSBhbmQgYWxsb3dEcmFnIGlzIGVuYWJsZWQsIHVzZXJzIHdpbGwgYmUgYWJsZSB0byByZW9kZXIgY29sdW1ucyB0aHJvdWdoIGRyYWcgJiBkcm9wLiBGb3IgZXhhbXBsZTogQ2xpY2sgYW5kIGRyYWcgdGhlIGZpcnN0IGNvbHVtbidzIGhlYWRlciBhbmQgZHJvcCBpdCBvdmVyIGFub3RoZXIgY29sdW1uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dDb2x1bW5SZW9yZGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5SZW9yZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0NvbHVtblJlb3JkZXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dDb2x1bW5SZW9yZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgY29sdW1uIGVkaXRpbmcuIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdXNlcnMgd2lsbCBiZSBhYmxlIHRvIGR5bmFtaWNhbGx5IGNoYW5nZSB0aGUgY29sdW1uJ3MgaGVhZGVyIGxhYmVsIGJ5IGRvdWJsZSBjbGlja2luZyBvbiBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93Q29sdW1uRWRpdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uRWRpdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dDb2x1bW5FZGl0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uRWRpdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGNvbHVtbiByZW1vdmluZy4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB1c2VycyB3aWxsIGJlIGFibGUgdG8gZHluYW1pY2FsbHkgcmVtb3ZlIGEgY29sdW1uIHRocm91Z2ggdGhlIGNvbHVtbiBhY3Rpb25zIG1lbnUuIHRoZSAnY29sdW1uQWN0aW9ucycgcHJvcGVydHkgc2hvdWxkIGJlIHRydWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0NvbHVtblJlbW92ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uUmVtb3ZlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0NvbHVtblJlbW92ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0NvbHVtblJlbW92ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGNvbHVtbiBoaWRpbmcuIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdXNlcnMgd2lsbCBiZSBhYmxlIHRvIGR5bmFtaWNhbGx5IGhpZGUgYSBjb2x1bW4gdGhyb3VnaCB0aGUgY29sdW1uIGFjdGlvbnMgbWVudS4gdGhlICdjb2x1bW5BY3Rpb25zJyBwcm9wZXJ0eSBzaG91bGQgYmUgdHJ1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93Q29sdW1uSGlkZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uSGlkZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dDb2x1bW5IaWRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93Q29sdW1uSGlkZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb2x1bW4gYnV0dG9ucyBmb3IgYWRkaW5nIHRhc2tzLiBBIHBhcnRpY3VsYXIgYnV0dG9uIGNhbiBiZSBkaXNhYmxlZCBieSBzZXR0aW5nIGFkZE5ld0J1dHRvbiBpbiB0aGUgY29sdW1uJ3MgZGVmaW5pdGlvbiB0byBmYWxzZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFkZE5ld0J1dHRvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0J1dHRvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWRkTmV3QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0J1dHRvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGFkZCBidXR0b24gaXMgdmlzaWJsZSBpbiB0aGUgY29sdW1uIGhlYWRlciBhbmQvb3IgYWZ0ZXIgdGhlIHRhc2tzIGluIHRoZSBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBhZGROZXdCdXR0b25EaXNwbGF5TW9kZSgpOiBLYW5iYW5BZGROZXdCdXR0b25EaXNwbGF5TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGROZXdCdXR0b25EaXNwbGF5TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWRkTmV3QnV0dG9uRGlzcGxheU1vZGUodmFsdWU6IEthbmJhbkFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0J1dHRvbkRpc3BsYXlNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIGEgY29sdW1uIHdpdGggYSBidXR0b24gZm9yIGFkZGluZyBuZXcgc3RhdHVzIGNvbHVtbnMgdG8gdGhlIEthbmJhbiB3aWxsIGJlIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGFkZE5ld0NvbHVtbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0NvbHVtbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWRkTmV3Q29sdW1uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFkZE5ld0NvbHVtbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdGhlIGRyYWdnaW5nIG9mIHRhc2tzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYWxsb3dEcmFnKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dEcmFnIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbGxvd0RyYWcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYWxsb3dEcmFnID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0aGUgZHJvcHBpbmcgb2YgdGFza3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0Ryb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0Ryb3AgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93RHJvcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0Ryb3AgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBhdXRvIGxvYWQgc3RhdGUgZnJvbSB0aGUgYnJvd3NlcidzIGxvY2FsU3RvcmFnZS4gSW5mb3JtYXRpb24gYWJvdXQgdGFza3MgYW5kIHRoZWlyIHBvc2l0aW9uIGFuZCBzZWxlY3RlZCBzdGF0ZSwgZmlsdGVyaW5nLCBzb3J0aW5nLCBjb2xsYXBzZWQgY29sdW1ucywgYXMgd2VsbCBhcyB0aGUgdmFsdWVzIG9mIHRoZSBwcm9wZXJ0aWVzIHRhc2tBY3Rpb25zLCB0YXNrQ29tbWVudHMsIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgdGFza1Byb2dyZXNzLCB0YXNrVGFncywgYW5kIHRhc2tVc2VySWNvbiBpcyBsb2FkZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvTG9hZFN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWRTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0xvYWRTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgYXV0byBzYXZlIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBJbmZvcm1hdGlvbiBhYm91dCB0YXNrcyBhbmQgdGhlaXIgcG9zaXRpb24gYW5kIHNlbGVjdGVkIHN0YXRlLCBmaWx0ZXJpbmcsIHNvcnRpbmcsIGNvbGxhcHNlZCBjb2x1bW5zLCBhcyB3ZWxsIGFzIHRoZSB2YWx1ZXMgb2YgdGhlIHByb3BlcnRpZXMgdGFza0FjdGlvbnMsIHRhc2tDb21tZW50cywgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCB0YXNrUHJvZ3Jlc3MsIHRhc2tUYWdzLCBhbmQgdGFza1VzZXJJY29uIGlzIHNhdmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NhdmVTdGF0ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlU3RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TYXZlU3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVTdGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgY29sbGFwc2luZyB0aGUgY2FyZCBjb250ZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sbGFwc2libGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzaWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sbGFwc2libGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2libGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgY29sb3JzIGluIHRoZSBjb2x1bW4gaGVhZGVyLCB3aGVuIHRoZSBjb2x1bW4ncyBjb2xvciBwcm9wZXJ0eSBpcyBzZXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5Db2xvcnMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Db2xvcnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkNvbG9ycyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Db2xvcnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBjb2x1bW5zIHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5zKCk6IEthbmJhbkNvbHVtbltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbnModmFsdWU6IEthbmJhbkNvbHVtbltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY29sdW1uIGFjdGlvbnMgaWNvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkFjdGlvbnMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5BY3Rpb25zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5BY3Rpb25zKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkFjdGlvbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRhc2sgY291bnQgaW5mb3JtYXRpb24gaXMgZGlzcGxheWVkIGluIGNvbHVtbiBoZWFkZXJzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uU3VtbWFyeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblN1bW1hcnkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblN1bW1hcnkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uU3VtbWFyeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjb2x1bW4gaGVhZGVyIGhhcyBhIHRlbXBsYXRlLiBZb3UgY2FuIHBhc3MgJ3N0cmluZycsICdmdW5jdGlvbicgb3IgSFRNTFRlbXBsYXRlRWxlbWVudCBhcyBhIHZhbHVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uSGVhZGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkhlYWRlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5IZWFkZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkhlYWRlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGNvbHVtbiBlZGl0IGJlaGF2aW9yLiBXaXRoIHRoZSAnaGVhZGVyJyBvcHRpb24sIGVkaXQgc3RhcnRzIG9uIGRvdWJsZSBjbGljayBvbiB0aGUgY29sdW1uJ3MgbGFiZWwuIEluICdtZW51JyBtb2RlLCBlZGl0IGlzIGFsbG93ZWQgZnJvbSB0aGUgJ2NvbHVtbkFjdGlvbnMnIG1lbnUuIEluICdoZWFkZXJBbmRNZW51JyBvcHRpb24sIGNvbHVtbiBlZGl0aW5nIGluY2x1ZGVzIGJvdGggb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbkVkaXRNb2RlKCk6IEthbmJhbkNvbHVtbkVkaXRNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkVkaXRNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5FZGl0TW9kZSh2YWx1ZTogS2FuYmFuQ29sdW1uRWRpdE1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uRWRpdE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBpZCBvZiB0aGUgY3VycmVudCB1c2VyLiBIYXMgdG8gY29ycmVzcG9uZCB0byB0aGUgaWQgb2YgYW4gaXRlbSBmcm9tIHRoZSB1c2VycyBwcm9wZXJ0eS9hcnJheS4gRGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHVzZXIsIGRpZmZlcmVudCBwcml2aWxlZ2VzIGFyZSBlbmFibGVkLiBJZiBubyBjdXJyZW50IHVzZXIgaXMgc2V0LCBwcml2aWxlZ2VzIGRlcGVuZCBvbiB0aGUgZWxlbWVudCdzIHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjdXJyZW50VXNlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFVzZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRVc2VyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFVzZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGF0YSBzb3VyY2UgdG8gYmUgdmlzdWFsaXplZCBpbiB0aGUga2FuYmFuIGJvYXJkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBLYW5iYW5EYXRhU291cmNlW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZSh2YWx1ZTogS2FuYmFuRGF0YVNvdXJjZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlIHJlbGF0aW9uIChtYXBwaW5nKSBiZXR3ZWVuIHRoZSBLYW5iYW4ncyBkZWZhdWx0IGZpZWxkcyAoa2V5d29yZHMpIGFuZCB0aGUgZGF0YSBmaWVsZHMgZnJvbSB0aGUgZGF0YSBzb3VyY2UuIE5vdCBuZWNlc3NhcnkgaWYgYm90aCBtYXRjaC4gT25seSBzb21lIG9mIHRoZSBkZWZhdWx0IG1hcHBpbmcgY2FuIGJlIG92ZXJ3cml0dGVuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZU1hcCgpOiB7IGNoZWNrbGlzdDogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBjb21tZW50czogc3RyaW5nOyBkdWVEYXRlOiBzdHJpbmc7IGlkOiBzdHJpbmc7IHByaW9yaXR5OiBzdHJpbmc7IHByb2dyZXNzOiBzdHJpbmc7IHN0YXJ0RGF0ZTogc3RyaW5nOyBzdGF0dXM6IHN0cmluZzsgc3dpbWxhbmU6IHN0cmluZzsgdGFnczogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nOyBjcmVhdGVkVXNlcklkOiBzdHJpbmc7IHVwRGF0ZWRVc2VySWQ6IHN0cmluZzsgY3JlYXRlZERhdGU6IERhdGU7IHVwRGF0ZWREYXRlOiBEYXRlO30ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZU1hcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZU1hcCh2YWx1ZTogeyBjaGVja2xpc3Q6IHN0cmluZzsgY29sb3I6IHN0cmluZzsgY29tbWVudHM6IHN0cmluZzsgZHVlRGF0ZTogc3RyaW5nOyBpZDogc3RyaW5nOyBwcmlvcml0eTogc3RyaW5nOyBwcm9ncmVzczogc3RyaW5nOyBzdGFydERhdGU6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmc7IHN3aW1sYW5lOiBzdHJpbmc7IHRhZ3M6IHN0cmluZzsgdGV4dDogc3RyaW5nOyB1c2VySWQ6IHN0cmluZzsgY3JlYXRlZFVzZXJJZDogc3RyaW5nOyB1cERhdGVkVXNlcklkOiBzdHJpbmc7IGNyZWF0ZWREYXRlOiBEYXRlOyB1cERhdGVkRGF0ZTogRGF0ZTt9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2VNYXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgb2Zmc2V0IG9mIHRoZSBkcmFnIGZlZWRiYWNrIGVsZW1lbnQgZnJvbSB0aGUgbW91c2UgY3Vyc29yIHdoZW4gZHJhZ2dpbmcgdGFza3MuIFRoZSBmaXJzdCBtZW1iZXIgb2YgdGhlIGFycmF5IGlzIHRoZSBob3Jpem9udGFsIG9mZnNldCBhbmQgdGhlIHNlY29uZCBvbmUgLSB0aGUgdmVydGljYWwgb2Zmc2V0LiBJZiBzZXQgdG8gJ2F1dG8nLCB0aGUgb2Zmc2V0IGlzIGJhc2VkIG9uIHRoZSBtb3VzZSBwb3NpdGlvbiB3aGVuIHRoZSBkcmFnZ2luZyBzdGFydGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ09mZnNldCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYWdPZmZzZXQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0YXNrcyBjYW4gYmUgZWRpdGVkIChpbmNsdWRpbmcgdGhlIGFzc2lnbmluZyBvZiB1c2VycyB0byB0YXNrcykuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlZGl0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0YWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGZvcm1hdCBzdHJpbmcgb2YgdGhlIFwiRHVlIGRhdGVcIiBsYWJlbCBhbmQgdGhlIFwiU3RhcnQgZGF0ZVwiIGFuZCBcIkR1ZSBkYXRlXCIgZWRpdG9ycy4gKi9cblx0QElucHV0KClcblx0Z2V0IGZvcm1hdFN0cmluZ0RhdGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ0RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvcm1hdFN0cmluZ0RhdGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb3JtYXRTdHJpbmdEYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZm9ybWF0IHN0cmluZyBvZiBjb21tZW50cyB0aW1lIHN0YW1wLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9ybWF0U3RyaW5nVGltZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0U3RyaW5nVGltZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9ybWF0U3RyaW5nVGltZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ1RpbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBoZWFkZXIgcG9zaXRpb24uIFRoZSBoZWFkZXIgY29udGFpbnMgdGhlIEN1c3RvbWl6ZSwgRmlsdGVyLCBTb3J0LCBhbmQgU2VhcmNoIGJ1dHRvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkZXJQb3NpdGlvbigpOiBLYW5iYW5IZWFkZXJQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyUG9zaXRpb24odmFsdWU6IEthbmJhbkhlYWRlclBvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgd2F5IGNvbHVtbiBoaWVyYXJjaHkgaXMgcmVwcmVzZW50ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWVyYXJjaHkoKTogS2FuYmFuSGllcmFyY2h5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZXJhcmNoeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGllcmFyY2h5KHZhbHVlOiBLYW5iYW5IaWVyYXJjaHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGllcmFyY2h5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbG9jYWxlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBzZWxlY3Rpb24gbW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbk1vZGUoKTogS2FuYmFuU2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25Nb2RlKHZhbHVlOiBLYW5iYW5TZWxlY3Rpb25Nb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGhlIHRhc2tzIGhpc3Rvcnkgd2lsbCBiZSBzdG9yZWQgYW5kIGRpc3BsYXllZCBpbiB0aGUgdGFzayBkaWFsb2cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzdG9yZUhpc3RvcnkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdG9yZUhpc3RvcnkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN0b3JlSGlzdG9yeSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdG9yZUhpc3RvcnkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB0YXNrIGhpc3RvcnkgaXRlbXMgdGhhdCB3aWxsIGJlIHN0b3JlZCB3aGVuIHN0b3JlSGlzdG9yeSBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3RvcmVIaXN0b3J5SXRlbXMoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0b3JlSGlzdG9yeUl0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzdG9yZUhpc3RvcnlJdGVtcyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0b3JlSGlzdG9yeUl0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXNjcmliZXMgdGhlIHN3aW1sYW5lcyBpbiB0aGUga2FuYmFuIGJvYXJkLiBTdWItY29sdW1ucyBhcmUgbm90IGFwcGxpY2FibGUgd2hlbiBzd2ltbGFuZXMgYXJlIHByZXNlbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzd2ltbGFuZXMoKTogS2FuYmFuU3dpbWxhbmVbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2ltbGFuZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN3aW1sYW5lcyh2YWx1ZTogS2FuYmFuU3dpbWxhbmVbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2ltbGFuZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBpbmRleCBvZiB0aGUgY29sdW1uIGF0IHdoaWNoIHRvIHN0YXJ0IHRoZSBzd2ltbGFuZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzd2ltbGFuZXNGcm9tKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2ltbGFuZXNGcm9tIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzd2ltbGFuZXNGcm9tKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpbWxhbmVzRnJvbSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gYXQgd2hpY2ggdG8gZW5kIHRoZSBzd2ltbGFuZXMuIEJ5IGRlZmF1bHQsIHN3aW1sYW5lcyBlbmQgYXQgdGhlIGxhc3QgY29sdW1uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3dpbWxhbmVzVG8oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lc1RvIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzd2ltbGFuZXNUbyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN3aW1sYW5lc1RvID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYWxsb3dlZCB0YWdzLiBJZiBubyB0YWdzIGFyZSBsaXN0ZWQsIGFsbCB0YWdzIGZyb20gdGhlIGRhdGEgc291cmNlIGFyZSBhbGxvd2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFncygpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YWdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YWdzKHZhbHVlOiBhbnlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YWdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRhc2sgYWN0aW9ucyBpY29uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza0FjdGlvbnMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQWN0aW9ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza0FjdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0FjdGlvbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayBjb21tZW50cyBpY29uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza0NvbW1lbnRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbW1lbnRzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YXNrQ29tbWVudHModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbW1lbnRzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRhc2sgZHVlIGljb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrRHVlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0R1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza0R1ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrRHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRhc2tzIGNhbiBiZSBzaG93biBpbiBhbGwgbGV2ZWxzIG9mIGNvbHVtbiBoaWVyYXJjaHkgb3Igb25seSBvbiBsZWFmIGNvbHVtbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrUG9zaXRpb24oKTogS2FuYmFuVGFza1Bvc2l0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1Bvc2l0aW9uKHZhbHVlOiBLYW5iYW5UYXNrUG9zaXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1Bvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRhc2sgcHJpb3JpdHkgaWNvbiAoc2hvd24gd2hlbiBwcmlvcml0eSBpcyBsb3cgb3IgaGlnaCkuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrUHJpb3JpdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUHJpb3JpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQcmlvcml0eSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUHJpb3JpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0YXNrIHByb2dyZXNzIGJhciBhbmQgdGhlIGNvbXBsZXRlZCBzdWItdGFza3MgbGFiZWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUHJvZ3Jlc3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tQcm9ncmVzcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrUHJvZ3Jlc3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgdGFzayBjdXN0b20gZmllbGRzIGRpc3BsYXllZCBpbiB0aGUgY2FyZC4gRWFjaCBhcnJheSBpdGVtIHNob3VsZCBoYXZlICdkYXRhRmllbGQnLCAnbGFiZWwnICdkYXRhVHlwZScgYW5kIG9wdGlvbmFsbHkgJ3Zpc2libGUnIHByb3BlcnRpZXMuIFRoZSAnZGF0YUZpZWxkJyBkZXRlcm1pbmVzIHRoZSB2YWx1ZSwgdGhlIGxhYmVsIGlzIGRpc3BsYXllZCBhcyB0aXRsZSwgJ2RhdGFUeXBlJyBpcyB1c2VkIGZvciBmb3JtYXR0aW5nIGFuZCAndmlzaWJsZScgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBmaWVsZCB3aWxsIGJlIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tDdXN0b21GaWVsZHMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDdXN0b21GaWVsZHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tDdXN0b21GaWVsZHModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrQ3VzdG9tRmllbGRzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSB0YXNrJ3MgYmFja2dyb3VuZCBjb2xvciBkZXBlbmRzIG9uIHRoZSB0YXNrJ3MgY29sb3IgcHJvcGVydHkuIEJ5IGRlZmF1bHQgdGhlIGNvbG9yIGlzIHJlbmRlcmVkIHdpdGhpbiB0aGUgdGFzaydzIGxlZnQgYm9yZGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza0NvbG9yRW50aXJlU3VyZmFjZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tDb2xvckVudGlyZVN1cmZhY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tDb2xvckVudGlyZVN1cmZhY2UodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza0NvbG9yRW50aXJlU3VyZmFjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBhbiBpbnB1dCBpbiB0aGUgdGFzaydzIGNhcmQgZm9yIGFkZGluZyBkeW5hbWljYWxseSBhIHN1YiB0YXNrLiBUaGUgJ3Rhc2tTdWJUYXNrcycgcHJvcGVydHkgc2hvdWxkIGJlIHNldCB0byBhIHZhbHVlIGRpZmZlcmVudCB0aGFuICdub25lJy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRhc2tTdWJUYXNrc0lucHV0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1N1YlRhc2tzSW5wdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tTdWJUYXNrc0lucHV0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tTdWJUYXNrc0lucHV0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHJlbmRlcmluZyBtb2RlIG9mIHN1YiB0YXNrcy4gJ25vbmUnIC0gZGVmYXVsdCB2YWx1ZS4gU3ViIHRhc2tzIGFyZSBkaXNwbGF5ZWQgb25seSBpbiB0aGUgZWRpdCBkaWFsb2cuICdvbmVQZXJSb3cnIC0gYWxsIHN1YiB0YXNrcyBhcmUgZGlzcGxheWVkIGluIHRoZSB0YXNrJ3MgY2FyZC4gJ29ubHlVbmZpbmlzaGVkJyAtIG9ubHkgdGFza3Mgd2hpY2ggYXJlIG5vdCBjb21wbGV0ZWQgYXJlIGRpc3BsYXllZCBpbiB0aGUgdGFzaydzIGNhcmQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrU3ViVGFza3MoKTogS2FuYmFuVGFza1N1YlRhc2tzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhc2tTdWJUYXNrcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1N1YlRhc2tzKHZhbHVlOiBLYW5iYW5UYXNrU3ViVGFza3MpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1N1YlRhc2tzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGFzayB0YWdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFza1RhZ3MoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrVGFncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFza1RhZ3ModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFza1RhZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGFzayB1c2VyIGljb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YXNrVXNlckljb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrVXNlckljb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhc2tVc2VySWNvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YXNrVXNlckljb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGEgdGVtcGxhdGUgdG8gYmUgYXBwbGllZCB0byB0YXNrIHRleHQuIENhbiBiZSBhIHN0cmluZyBiZWdpbm5pbmcgd2l0aCAjIGFuZCByZWZlcmVuY2luZyB0aGUgaWQgb2YgYSB0ZW1wbGF0ZSBlbGVtZW50IG9uIHRoZSBwYWdlLiBDYW4gYWxzbyBiZSBhIGZ1bmN0aW9uIHRoYXQgbW9kaWZpZXMgdGhlIHRhc2sgdGV4dCBvciB0aGUgdGVtcGxhdGUgaXRzZWxmLiBGaW5hbGx5LCBpdCBjYW4gYWxzbyBiZSBhIHN0cmluZyB0aGF0IHdpbGwgYmUgcGFyc2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGV4dFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50ZXh0VGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRleHRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRleHRUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgcHJpb3JpdHkgbGlzdCAoYXMgZGVmaW5lZCBieSB0aGUgcHJpb3JpdHkgcHJvcGVydHkpIHdpbGwgYmUgc2hvd24gd2hlbiBjbGlja2luZyB0aGUgcHJpb3JpdHkgaWNvbi4gT25seSBhcHBsaWNhYmxlIGlmIGVkaXRhYmxlIHByaXZpbGVnZXMgYXJlIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwcmlvcml0eUxpc3QoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wcmlvcml0eUxpc3QgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHByaW9yaXR5TGlzdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wcmlvcml0eUxpc3QgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcHJpb3JpdHkgS2FuYmFuIHRhc2tzIGNhbiBiZSBhc3NpZ25lZCB0by4gRXhhbXBsZTogW3tsYWJlbDogJ2xvdycsIHZhbHVlOiAnbG93J30sIHtsYWJlbDogJ2hpZ2gnLCB2YWx1ZTogJ2hpZ2gnfV0gKi9cblx0QElucHV0KClcblx0Z2V0IHByaW9yaXR5KCk6IEthbmJhblByaW9yaXR5W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpb3JpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHByaW9yaXR5KHZhbHVlOiBLYW5iYW5Qcmlvcml0eVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnByaW9yaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgdXNlciBsaXN0IChhcyBkZWZpbmVkIGJ5IHRoZSB1c2VycyBwcm9wZXJ0eSkgd2lsbCBiZSBzaG93biB3aGVuIGNsaWNraW5nIHRoZSB1c2VyIGljb24uIE9ubHkgYXBwbGljYWJsZSBpZiBlZGl0YWJsZSBwcml2aWxlZ2VzIGFyZSBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdXNlckxpc3QoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51c2VyTGlzdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdXNlckxpc3QodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudXNlckxpc3QgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdXNlcnMgS2FuYmFuIHRhc2tzIGNhbiBiZSBhc3NpZ25lZCB0byBhbmQgdGhlaXIgY2hhcmFjdGVyaXN0aWNzIGFuZCBwcml2aWxlZ2VzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdXNlcnMoKTogS2FuYmFuVXNlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVzZXJzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1c2Vycyh2YWx1ZTogS2FuYmFuVXNlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVzZXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSB0YXNrIGhhcyBiZWVuIHVwZGF0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dGFzaywgXHR2YWx1ZSlcblx0KiAgIG9sZFZhbHVlIC0gVGhlIG9sZCBkYXRhIG9mIHRoZSB0YXNrXG5cdCogICB0YXNrIC0gVGhlIEhUTUwgZWxlbWVudCBvZiB0aGUgdGFzayB3aG9zZSBkYXRhIGhhcyBiZWVuIGNoYW5nZWRcblx0KiAgIHZhbHVlIC0gVGhlIG5ldyBkYXRhIG9mIHRoZSB0YXNrXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVkaXQvcHJvbXB0IGRpYWxvZyBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVkaXQvcHJvbXB0IGRpYWxvZyBpcyBhYm91dCB0byBiZSBjbG9zZWQuIFRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaXMgYWRkZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0bGFiZWwsIFx0ZGF0YUZpZWxkLCBcdGNvbGxhcHNlZClcblx0KiAgIGxhYmVsIC0gVGhlIGNvbHVtbiBsYWJlbC5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBjb2x1bW4gZGF0YSBmaWVsZC5cblx0KiAgIGNvbGxhcHNlZCAtIFRoZSBjb2x1bW4ncyBjb2xsYXBzZWQgc3RhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkFkZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaXMgcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRsYWJlbCwgXHRkYXRhRmllbGQsIFx0Y29sbGFwc2VkKVxuXHQqICAgbGFiZWwgLSBUaGUgY29sdW1uIGxhYmVsLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGNvbHVtbiBkYXRhIGZpZWxkLlxuXHQqICAgY29sbGFwc2VkIC0gVGhlIGNvbHVtbidzIGNvbGxhcHNlZCBzdGF0ZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBpcyByZW9yZGVyZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkSW5kZXgsIFx0aW5kZXgsIFx0Y29sdW1uKVxuXHQqICAgb2xkSW5kZXggLSBUaGUgY29sdW1uJ3Mgb2xkIGluZGV4LlxuXHQqICAgaW5kZXggLSBUaGUgY29sdW1uJ3MgbmV3IGluZGV4LlxuXHQqICAgY29sdW1uIC0gVGhlIGNvbHVtbidzIGRhdGEgb2JqZWN0IHdpdGggJ2xhYmVsJywgJ2RhdGFGaWVsZCcgYW5kICdjb2xsYXBzZWQnIGZpZWxkcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uUmVvcmRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaXMgdXBkYXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGRWYWx1ZSwgXHR2YWx1ZSwgXHRjb2x1bW4pXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBjb2x1bW4ncyBvbGQgbGFiZWwuXG5cdCogICB2YWx1ZSAtIFRoZSBjb2x1bW4ncyBuZXcgbGFiZWwuXG5cdCogICBjb2x1bW4gLSBUaGUgY29sdW1uJ3MgZGF0YSBvYmplY3Qgd2l0aCAnbGFiZWwnLCAnZGF0YUZpZWxkJyBhbmQgJ2NvbGxhcHNlZCcgZmllbGRzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5VcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGhlYWRlciBpcyBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGxhYmVsLCBcdGRhdGFGaWVsZCwgXHRjb2xsYXBzZWQpXG5cdCogICBsYWJlbCAtIFRoZSBjb2x1bW4gbGFiZWwuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCogICBjb2xsYXBzZWQgLSBUaGUgY29sdW1uJ3MgY29sbGFwc2VkIHN0YXRlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaGVhZGVyIGlzIGRvdWJsZSBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGxhYmVsLCBcdGRhdGFGaWVsZCwgXHRjb2xsYXBzZWQpXG5cdCogICBsYWJlbCAtIFRoZSBjb2x1bW4gbGFiZWwuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgY29sdW1uIGRhdGEgZmllbGQuXG5cdCogICBjb2xsYXBzZWQgLSBUaGUgY29sdW1uJ3MgY29sbGFwc2VkIHN0YXRlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5Eb3VibGVDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSB0YXNrIGlzIGRyb3BwZWQgc29tZXdoZXJlIGluIHRoZSBET00uIFRoZSBkcmFnZ2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb250YWluZXIsIFx0ZGF0YSwgXHRpdGVtLCBcdGl0ZW1zLCBcdG9yaWdpbmFsRXZlbnQsIFx0cHJldmlvdXNDb250YWluZXIsIFx0dGFyZ2V0KVxuXHQqICAgY29udGFpbmVyIC0gdGhlIEthbmJhbiB0aGUgZHJhZ2dlZCB0YXNrKHMpIGlzIGRyb3BwZWQgdG9cblx0KiAgIGRhdGEgLSBhbiBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIGRyYWcgZGV0YWlsc1xuXHQqICAgaXRlbSAtIHRoZSB0YXNrIHRoYXQgaXMgZHJhZ2dlZDsgaWYgbXVsdGlwbGUgdGFza3MgYXJlIGRyYWdnZWQsIHRoaXMgaXMgdGhlIHRhc2sgdGhhdCBoYXMgYmVlbiBjbGlja2VkIHdoZW4gaW5pdGlhdGluZyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIGl0ZW1zIC0gYW4gYXJyYXkgd2l0aCBhbGwgZHJhZ2dlZCB0YXNrc1xuXHQqICAgb3JpZ2luYWxFdmVudCAtIHRoZSBvcmlnaW5hbCwgYnJvd3NlciwgZXZlbnQgdGhhdCBpbml0aWF0ZXMgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCogICBwcmV2aW91c0NvbnRhaW5lciAtIHRoZSBLYW5iYW4gdGhlIGRyYWdnZWQgaXRlbShzKSBpcyBkcmFnZ2VkIGZyb21cblx0KiAgIHRhcmdldCAtIHRoZSBlbGVtZW50IHRoZSBkcmFnZ2VkIHRhc2tzIGFyZSBkcm9wcGVkIHRvXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGlzIGRyYWdnaW5nIGEgdGFzay5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRkYXRhLCBcdGl0ZW0sIFx0aXRlbXMsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGRhdGEgLSBhbiBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIGRyYWcgZGV0YWlsc1xuXHQqICAgaXRlbSAtIHRoZSB0YXNrIHRoYXQgaXMgZHJhZ2dlZDsgaWYgbXVsdGlwbGUgdGFza3MgYXJlIGRyYWdnZWQsIHRoaXMgaXMgdGhlIHRhc2sgdGhhdCBoYXMgYmVlbiBjbGlja2VkIHdoZW4gaW5pdGlhdGluZyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIGl0ZW1zIC0gYW4gYXJyYXkgd2l0aCBhbGwgZHJhZ2dlZCB0YXNrc1xuXHQqICAgb3JpZ2luYWxFdmVudCAtIHRoZSBvcmlnaW5hbCwgYnJvd3NlciwgZXZlbnQgdGhhdCBpbml0aWF0ZXMgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdnaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGFzayhzKS4gVGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbnRhaW5lciwgXHRkYXRhLCBcdGl0ZW0sIFx0aXRlbXMsIFx0b3JpZ2luYWxFdmVudCwgXHRwcmV2aW91c0NvbnRhaW5lcilcblx0KiAgIGNvbnRhaW5lciAtIHRoZSBLYW5iYW4gdGhlIGRyYWdnZWQgdGFzayhzKSBpcyBkcmFnZ2VkIGZyb21cblx0KiAgIGRhdGEgLSBhbiBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIGRyYWcgZGV0YWlsc1xuXHQqICAgaXRlbSAtIHRoZSB0YXNrIHRoYXQgaXMgZHJhZ2dlZDsgaWYgbXVsdGlwbGUgdGFza3MgYXJlIGRyYWdnZWQsIHRoaXMgaXMgdGhlIHRhc2sgdGhhdCBoYXMgYmVlbiBjbGlja2VkIHdoZW4gaW5pdGlhdGluZyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIGl0ZW1zIC0gYW4gYXJyYXkgd2l0aCBhbGwgZHJhZ2dlZCB0YXNrc1xuXHQqICAgb3JpZ2luYWxFdmVudCAtIHRoZSBvcmlnaW5hbCwgYnJvd3NlciwgZXZlbnQgdGhhdCBpbml0aWF0ZXMgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCogICBwcmV2aW91c0NvbnRhaW5lciAtIHRoZSBLYW5iYW4gdGhlIGRyYWdnZWQgaXRlbShzKSBpcyBkcmFnZ2VkIGZyb21cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGZpbHRlciBoYXMgYmVlbiBhcHBsaWVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZWRpdC9wcm9tcHQgZGlhbG9nIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBlZGl0L3Byb21wdCBkaWFsb2cgaXMgYWJvdXQgdG8gYmUgb3BlbmVkLiBUaGUgb3BlbmluZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb21tZW50LCBcdHB1cnBvc2UsIFx0dGFzaylcblx0KiAgIGNvbW1lbnQgLSBUaGUgY29tbWVudCB0aGF0IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQgKGlmIGFwcGxpY2FibGUpLlxuXHQqICAgcHVycG9zZSAtIFRoZSBwdXJwb3NlIG9mIHRoZSBkaWFsb2cgdG8gYmUgb3BlbmVkIC0gPGVtPidlZGl0JzwvZW0+IG9yIDxlbT4ncHJvbXB0JzwvZW0+LlxuXHQqICAgdGFzayAtIFRoZSB0YXNrIHRoYXQgaXMgYWJvdXQgdG8gYmUgZWRpdGVkIG9yIHJlbW92ZWQgKGlmIGFwcGxpY2FibGUpLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25PcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBzb3J0aW5nIGhhcyBiZWVuIGFwcGxpZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Tb3J0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5ldyB0YXNrIGlzIGFkZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHZhbHVlKVxuXHQqICAgdmFsdWUgLSBUaGUgdGFzayBkYXRhIHRoYXQgaXMgYWRkZWQgdG8gdGhlIEthbmJhbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uVGFza0FkZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSB0YXNrIGlzIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUpXG5cdCogICB2YWx1ZSAtIFRoZSB0YXNrIGRhdGEgdGhhdCBpcyByZW1vdmVkIGZyb20gdGhlIEthbmJhbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uVGFza1JlbW92ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgZmlsdGVyaW5nIFxuXHQqIEBwYXJhbSB7c3RyaW5nW119IGZpbHRlcnMuIEZpbHRlciBpbmZvcm1hdGlvblxuXHQqIEBwYXJhbSB7c3RyaW5nfSBvcGVyYXRvcj8uIExvZ2ljYWwgb3BlcmF0b3IgYmV0d2VlbiB0aGUgZmlsdGVycyBvZiBkaWZmZXJlbnQgZmllbGRzXG5cdCovXG4gICAgcHVibGljIGFkZEZpbHRlcihmaWx0ZXJzOiBzdHJpbmdbXSwgb3BlcmF0b3I/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGZpbHRlcnMsIG9wZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRGaWx0ZXIoZmlsdGVycywgb3BlcmF0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIHNvcnRpbmcgXG5cdCogQHBhcmFtIHtbXSB8IHN0cmluZ30gZGF0YUZpZWxkcy4gVGhlIGRhdGEgZmllbGQocykgdG8gc29ydCBieVxuXHQqIEBwYXJhbSB7W10gfCBzdHJpbmd9IG9yZGVyQnkuIFRoZSBzb3J0IGRpcmVjdGlvbihzKSB0byBzb3J0IHRoZSBkYXRhIGZpZWxkKHMpIGJ5XG5cdCovXG4gICAgcHVibGljIGFkZFNvcnQoZGF0YUZpZWxkczogW10gfCBzdHJpbmcsIG9yZGVyQnk6IFtdIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFNvcnQoZGF0YUZpZWxkcywgb3JkZXJCeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkU29ydChkYXRhRmllbGRzLCBvcmRlckJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIHRhc2sgdG8gYSBLYW5iYW4gY29sdW1uLiBJZiBubyBkYXRhIGlzIHNwZWNpZmllZCwgYW4gZW1wdHkgdGFzayBpcyBhZGRlZCB0byB0aGUgZmlyc3QgY29sdW1uLiBcblx0KiBAcGFyYW0ge2FueX0gZGF0YT8uIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZXcgdGFzaydzIGRhdGFcblx0Ki9cbiAgICBwdWJsaWMgYWRkVGFzayhkYXRhPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFRhc2soZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVGFzayhkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGNvbHVtbiB0byBhIEthbmJhbi4gSWYgbm8gZGF0YSBpcyBzcGVjaWZpZWQsIGFuIGVtcHR5IGNvbHVtbiBpcyBhZGRlZC4gXG5cdCogQHBhcmFtIHthbnl9IGRhdGE/LiBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmV3IGNvbHVtbidzIGRhdGFcblx0Ki9cbiAgICBwdWJsaWMgYWRkQ29sdW1uKGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29sdW1uKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZENvbHVtbihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmVnaW5zIGFuIGVkaXQgb3BlcmF0aW9uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqL1xuICAgIHB1YmxpYyBiZWdpbkVkaXQodGFzazogbnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5FZGl0KHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luRWRpdCh0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgY3VycmVudCBlZGl0IG9wZXJhdGlvbiBhbmQgZGlzY2FyZHMgY2hhbmdlcyBcblx0Ki9cbiAgICBwdWJsaWMgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIGFueSBvcGVuIGhlYWRlciBwYW5lbCAoZHJvcCBkb3duKSBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VQYW5lbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlUGFuZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGEgS2FuYmFuIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IGNvbHVtbi4gVGhlIGluZGV4IG9yIGRhdGFGaWVsZCBvZiB0aGUgY29sdW1uIHRvIGNvbGxhcHNlXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlKGNvbHVtbjogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UoY29sdW1uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgYSBLYW5iYW4gY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gY29sdW1uLiBUaGUgaW5kZXggb3IgZGF0YUZpZWxkIG9mIHRoZSBjb2x1bW4gdG8gaGlkZVxuXHQqL1xuICAgIHB1YmxpYyBoaWRlKGNvbHVtbjogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGUoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlKGNvbHVtbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBjb3B5IG9mIGEgdGFzayBpbiB0aGUgc2FtZSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqL1xuICAgIHB1YmxpYyBjb3B5VGFzayh0YXNrOiBudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb3B5VGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb3B5VGFzayh0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgY3VycmVudCBlZGl0IG9wZXJhdGlvbiBhbmQgc2F2ZXMgY2hhbmdlcyBcblx0Ki9cbiAgICBwdWJsaWMgZW5kRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgc3VyZSBhIHRhc2sgaXMgdmlzaWJsZSBieSBzY3JvbGxpbmcgdG8gaXQuIElmIHN1Y2NjZXNzZnVsLCB0aGUgbWV0aG9kIHJldHVybnMgdGhlIEhUTUwgZWxlbWVudCBvZiB0aGUgdGFzay4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZW5zdXJlVmlzaWJsZSh0YXNrKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmVuc3VyZVZpc2libGUodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGEgS2FuYmFuIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IGNvbHVtbi4gVGhlIGluZGV4IG9yIGRhdGFGaWVsZCBvZiB0aGUgY29sdW1uIHRvIGV4cGFuZFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmQoY29sdW1uOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKGNvbHVtbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYWxsIEthbmJhbiBjb2x1bW5zLiBcblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgS2FuYmFuJ3MgZGF0YS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGb3JtYXQuIFRoZSBmaWxlIGZvcm1hdCB0byBleHBvcnQgdG8uIFN1cHBvcnRlZCBmb3JtYXRzOiAnY3N2JywgJ2h0bWwnLCAnanNvbicsICdwZGYnLCAndHN2JywgJ3hsc3gnLCAneG1sJy5cblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUuIFRoZSBuYW1lIG9mIHRoZSBmaWxlIHRvIGV4cG9ydCB0b1xuXHQqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrPy4gQSBjYWxsYmFjayBmdW5jdGlvbiB0byBwYXNzIHRoZSBleHBvcnRlZCBkYXRhIHRvIChpZiBmaWxlTmFtZSBpcyBub3QgcHJvdmlkZWQpXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGV4cG9ydERhdGEoZGF0YUZvcm1hdCwgZmlsZU5hbWUsIGNhbGxiYWNrPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGZpbGVOYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBkYXRhIG9mIGEgY29sdW1uLiBUaGUgcmV0dXJuZWQgdmFsdWUgaXMgYSBKU09OIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgZmllbGRzOiAnbGFiZWwnLCAnZGF0YUZpZWxkJywgJ2NvbGxhcHNlZCcsICdjb2xsYXBzaWJsZScsICdhbGxvd1JlbW92ZScsICdlZGl0YWJsZScsICdyZW9yZGVyJywgJ29yaWVudGF0aW9uJy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gVGhlIGNvbHVtbidzIGRhdGEgZmllbGRcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q29sdW1uKGRhdGFGaWVsZCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIEthbmJhbidzIHN0YXRlLiBcblx0KiBAcmV0dXJucyB7eyBjb2xsYXBzZWQ6IHt9LCBkYXRhU291cmNlOiBbXSwgZmlsdGVyaW5nOiB7IGZpbHRlcnM6IFtdLCBvcGVyYXRvcjogc3RyaW5nIH0sIHNlbGVjdGlvbjogeyBzZWxlY3RlZDogW10sIHNlbGVjdGlvblN0YXJ0OiBudW1iZXIgfCBzdHJpbmcsIHNlbGVjdGlvbkluQ29sdW1uOiBzdHJpbmcsIHN3aW1sYW5lOiBzdHJpbmcgfSwgc29ydGluZzogeyBkYXRhRmllbGRzOiBbXSwgZGF0YVR5cGVzOiBbXSwgb3JkZXJCeTogW10gfSwgdGFiczogW10sIHZpc2liaWxpdHk6IHsgdGFza0FjdGlvbnM6IGJvb2xlYW4sIHRhc2tDb21tZW50czogYm9vbGVhbiwgdGFza0R1ZTogYm9vbGVhbiwgdGFza1ByaW9yaXR5OiBib29sZWFuLCB0YXNrUHJvZ3Jlc3M6IGJvb2xlYW4sIHRhc2tUYWdzOiBib29sZWFuLCB0YXNrVXNlckljb246IGJvb2xlYW4gfSB9fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2FkcyB0aGUgS2FuYmFuJ3Mgc3RhdGUuIFxuXHQqIEBwYXJhbSB7eyBjb2xsYXBzZWQ6IHt9LCBkYXRhU291cmNlOiBbXSwgZmlsdGVyaW5nOiB7IGZpbHRlcnM6IFtdLCBvcGVyYXRvcjogc3RyaW5nIH0sIHNlbGVjdGlvbjogeyBzZWxlY3RlZDogW10sIHNlbGVjdGlvblN0YXJ0PzogbnVtYmVyIHwgc3RyaW5nLCBzZWxlY3Rpb25JbkNvbHVtbjogc3RyaW5nLCBzd2ltbGFuZTogc3RyaW5nIH0sIHNvcnRpbmc6IHsgZGF0YUZpZWxkczogW10sIGRhdGFUeXBlczogW10sIG9yZGVyQnk6IFtdIH0sIHRhYnM6IFtdLCB2aXNpYmlsaXR5OiB7IHRhc2tBY3Rpb25zOiBib29sZWFuLCB0YXNrQ29tbWVudHM6IGJvb2xlYW4sIHRhc2tEdWU6IGJvb2xlYW4sIHRhc2tQcmlvcml0eTogYm9vbGVhbiwgdGFza1Byb2dyZXNzOiBib29sZWFuLCB0YXNrVGFnczogYm9vbGVhbiwgdGFza1VzZXJJY29uOiBib29sZWFuIH0gfX0gc3RhdGU/LiBBbiBvYmplY3QgcmV0dXJuZWQgYnkgb25lIG9mIHRoZSBtZXRob2RzIGdldFN0YXRlIG9yIHNhdmVTdGF0ZS4gSWYgbm90IHBhc3NlZCwgZ2V0cyBzYXZlZCBzdGF0ZSBmcm9tIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLlxuXHQqL1xuICAgIHB1YmxpYyBsb2FkU3RhdGUoc3RhdGU/OiB7IGNvbGxhcHNlZDoge30sIGRhdGFTb3VyY2U6IFtdLCBmaWx0ZXJpbmc6IHsgZmlsdGVyczogW10sIG9wZXJhdG9yOiBzdHJpbmcgfSwgc2VsZWN0aW9uOiB7IHNlbGVjdGVkOiBbXSwgc2VsZWN0aW9uU3RhcnQ/OiBudW1iZXIgfCBzdHJpbmcsIHNlbGVjdGlvbkluQ29sdW1uOiBzdHJpbmcsIHN3aW1sYW5lOiBzdHJpbmcgfSwgc29ydGluZzogeyBkYXRhRmllbGRzOiBbXSwgZGF0YVR5cGVzOiBbXSwgb3JkZXJCeTogW10gfSwgdGFiczogW10sIHZpc2liaWxpdHk6IHsgdGFza0FjdGlvbnM6IGJvb2xlYW4sIHRhc2tDb21tZW50czogYm9vbGVhbiwgdGFza0R1ZTogYm9vbGVhbiwgdGFza1ByaW9yaXR5OiBib29sZWFuLCB0YXNrUHJvZ3Jlc3M6IGJvb2xlYW4sIHRhc2tUYWdzOiBib29sZWFuLCB0YXNrVXNlckljb246IGJvb2xlYW4gfSB9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTW92ZXMgYSB0YXNrIHRvIGEgZGlmZmVyZW50IGNvbHVtbi4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFzay4gVGhlIHRhc2sncyBpZCBvciBjb3JyZXNwb25kaW5nIEhUTUxFbGVtZW50XG5cdCogQHBhcmFtIHtzdHJpbmd9IG5ld1N0YXR1cy4gVGhlIG5ldyBzdGF0dXMgb2YgdGhlIHRhc2sgKGl0cyBuZXcgY29sdW1uJ3MgZGF0YUZpZWxkKVxuXHQqL1xuICAgIHB1YmxpYyBtb3ZlVGFzayh0YXNrOiBudW1iZXIgfCBzdHJpbmcgfCBIVE1MRWxlbWVudCwgbmV3U3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubW92ZVRhc2sodGFzaywgbmV3U3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5tb3ZlVGFzayh0YXNrLCBuZXdTdGF0dXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgXCJDdXN0b21pemUgdGFza3NcIiBoZWFkZXIgcGFuZWwgKGRyb3AgZG93bikgXG5cdCovXG4gICAgcHVibGljIG9wZW5DdXN0b21pemVQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkN1c3RvbWl6ZVBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkN1c3RvbWl6ZVBhbmVsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBcIkZpbHRlclwiIGhlYWRlciBwYW5lbCAoZHJvcCBkb3duKSBcblx0Ki9cbiAgICBwdWJsaWMgb3BlbkZpbHRlclBhbmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRmlsdGVyUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRmlsdGVyUGFuZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIFwiU29ydFwiIGhlYWRlciBwYW5lbCAoZHJvcCBkb3duKSBcblx0Ki9cbiAgICBwdWJsaWMgb3BlblNvcnRQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlblNvcnRQYW5lbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5Tb3J0UGFuZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBmaWx0ZXJpbmcgXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgc29ydGluZyBcblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlU29ydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlU29ydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVNvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIHRhc2suIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhc2suIFRoZSB0YXNrJ3MgaWQgb3IgY29ycmVzcG9uZGluZyBIVE1MRWxlbWVudFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gcHJvbXB0Py4gV2hldGhlciBvciBub3QgdG8gcHJvbXB0IHRoZSB1c2VyIGJlZm9yZSByZW1vdmluZyB0aGUgdGFza1xuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50LCBwcm9tcHQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVRhc2sodGFzaywgcHJvbXB0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVUYXNrKHRhc2ssIHByb21wdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2x1bW4oZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIEthbmJhbidzIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBcblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBLYW5iYW4gY29sdW1uLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gY29sdW1uLiBUaGUgaW5kZXggb3IgZGF0YUZpZWxkIG9mIHRoZSBjb2x1bW4gdG8gc2hvd1xuXHQqL1xuICAgIHB1YmxpYyBzaG93KGNvbHVtbjogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3coY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93KGNvbHVtbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIGFsbCBLYW5iYW4gY29sdW1ucy4gXG5cdCovXG4gICAgcHVibGljIHNob3dBbGxDb2x1bW5zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93QWxsQ29sdW1ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dBbGxDb2x1bW5zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSB0YXNrLiBcblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50fSB0YXNrLiBUaGUgdGFzaydzIGlkIG9yIGNvcnJlc3BvbmRpbmcgSFRNTEVsZW1lbnRcblx0KiBAcGFyYW0ge3t9fSBuZXdEYXRhLiBUaGUgbmV3IGRhdGEgdG8gdmlzdWFsaXplIGluIHRoZSB0YXNrLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVUYXNrKHRhc2s6IG51bWJlciB8IHN0cmluZyB8IEhUTUxFbGVtZW50LCBuZXdEYXRhOiB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUYXNrKHRhc2ssIG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZVRhc2sodGFzaywgbmV3RGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBuZXcgY29sdW1uJ3MgZGF0YSBmaWVsZFxuXHQqIEBwYXJhbSB7e319IG5ld0RhdGEuIFRoZSBuZXcgZGF0YSB0byB2aXN1YWxpemUgaW4gdGhlIGNvbHVtbi5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlQ29sdW1uKGRhdGFGaWVsZDogc3RyaW5nLCBuZXdEYXRhOiB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVDb2x1bW4oZGF0YUZpZWxkLCBuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVDb2x1bW4oZGF0YUZpZWxkLCBuZXdEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkFkZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkFkZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5BZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkFkZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlbW92ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblJlbW92ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlbW92ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlb3JkZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5SZW9yZGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlb3JkZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5VcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2x1bW5VcGRhdGUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5VcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uRG91YmxlQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uRG91YmxlQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkRvdWJsZUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ2dpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRmlsdGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbHRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25PcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU29ydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblRhc2tBZGQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGFza0FkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25UYXNrUmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tSZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkFkZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkFkZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQWRkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlbW92ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVvcmRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlb3JkZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlb3JkZXJIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblVwZGF0ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtblVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5Eb3VibGVDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uRG91YmxlQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdnaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnZ2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50Lm9uZmlsdGVySGFuZGxlciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndGFza0FkZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rhc2tBZGQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tBZGRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rhc2tSZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0YXNrUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0YXNrUmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19