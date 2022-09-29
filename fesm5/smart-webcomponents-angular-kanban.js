
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.kanban';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
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
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
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
    Object.defineProperty(BaseElement.prototype, "theme", {
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
    return BaseElement;
}());
var Smart = window.Smart;

var KanbanComponent = /** @class */ (function (_super) {
    __extends(KanbanComponent, _super);
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
        /** @description This event is triggered when a column is shown by using the column's action menu or the Kanban's 'show' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        _this.onColumnShow = new EventEmitter();
        /** @description This event is triggered when a column is hidden by using the column's action menu or the Kanban's 'hide' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        _this.onColumnHide = new EventEmitter();
        /** @description This event is triggered when a column is collapsed  by using the column's action menu or the Kanban's 'collapse' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        _this.onColumnCollapse = new EventEmitter();
        /** @description This event is triggered when a column is expanded by using the column's action menu or the Kanban's 'expand' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
        *   label - The column label.
        *   dataField - The column data field.
        */
        _this.onColumnExpand = new EventEmitter();
        /** @description This event is triggered when a comment is added to the Kanban Task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
        *   id - The task's id.
        *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
        */
        _this.onCommentAdd = new EventEmitter();
        /** @description This event is triggered when a comment is removed from the Kanban Task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
        *   id - The task's id.
        *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
        */
        _this.onCommentRemove = new EventEmitter();
        /** @description This event is triggered when a comment is updated in the Kanban Task.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
        *   id - The task's id.
        *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
        */
        _this.onCommentUpdate = new EventEmitter();
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
        /** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. If you want to cancel the default Kanban dialog, call event.preventDefault();
        *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
        *   comment - The comment that is about to be removed (if applicable).
        *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
        *   task - The task that is about to be edited or removed (if applicable).
        */
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when sorting has been applied.
        *  @param event. The custom event. 	*/
        _this.onSort = new EventEmitter();
        /** @description This event is triggered before a new task is added. You can use the event.detail.value and event.detail.id to customize the new Task before adding it to the Kanban. Example: kanban.onTaskBeforeAdd = (event) => { const data = event.detail.value; const id = event.detail.id; event.detail.id = 'BG12';}
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data that is added to the Kanban.
        *   id - The task data id.
        */
        _this.onTaskBeforeAdd = new EventEmitter();
        /** @description This event is triggered when a new task is added. Example: kanban.onTaskAdd = (event) => { const data = event.detail.value; const id = event.detail.id; }
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data that is added to the Kanban.
        *   id - The task data id.
        */
        _this.onTaskAdd = new EventEmitter();
        /** @description This event is triggered when a task is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data that is removed from the Kanban.
        *   id - The task data id.
        */
        _this.onTaskRemove = new EventEmitter();
        /** @description This event is triggered when a task is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	id)
        *   value - The task data that is updated.
        *   oldValue - The update task's old data.
        *   id - The task data id.
        */
        _this.onTaskUpdate = new EventEmitter();
        /** @description This event is triggered when a task is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data.
        *   id - The task data id.
        */
        _this.onTaskClick = new EventEmitter();
        /** @description This event is triggered when a task is double clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
        *   value - The task data.
        *   id - The task data id.
        */
        _this.onTaskDoubleClick = new EventEmitter();
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
    Object.defineProperty(KanbanComponent.prototype, "addNewColumnWidth", {
        /** @description Sets the width of the add new column. The property is used, if the 'columnWidth' property is set, too. It specifies the width of the dynamic new column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.addNewColumnWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.addNewColumnWidth = value : undefined;
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
    Object.defineProperty(KanbanComponent.prototype, "applyColumnColorToTasks", {
        /** @description This property changes the visual appeal of the Kanban columns and tasks. When set to true and the Kanban columns have their 'color' property set, the color is also applied to the tasks and edit dialog. */
        get: function () {
            return this.nativeElement ? this.nativeElement.applyColumnColorToTasks : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.applyColumnColorToTasks = value : undefined;
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
    Object.defineProperty(KanbanComponent.prototype, "autoColumnHeight", {
        /** @description Automatically updates the columns height depending on the tasks inside the column. The effect of this property is observed when 'columnColorEntireSurface' is true. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoColumnHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoColumnHeight = value : undefined;
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
    Object.defineProperty(KanbanComponent.prototype, "columnWidth", {
        /** @description Sets the Kanban columns width. When this property is set, the kanban columns width is set and a horizontal scrollbar may appear. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columnColorEntireSurface", {
        /** @description Displays background in the Kanban column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnColorEntireSurface : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnColorEntireSurface = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "columnFooter", {
        /** @description Displays a column footer which shows the summary of the column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnFooter : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnFooter = value : undefined;
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
    Object.defineProperty(KanbanComponent.prototype, "disableDialog", {
        /** @description Sets or gets whether the default dialog for adding/removing tasks or comments is disabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableDialog : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableDialog = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "dialogCustomizationFunction", {
        /** @description Sets or gets a customization function for the dialog. This function can be used to customize the dialog look or to replace it. The Kanban calls this function with 5 arguments - 'dialog', 'taskOrComment', 'editors', 'purpose' and 'type'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'purpose' could be 'add' or 'edit' and 'type' could be 'task' or 'column' depending on the action. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dialogCustomizationFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dialogCustomizationFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "dialogRendered", {
        /** @description Sets or gets a function called when the dialog is rendered. The Kanban calls this function with 6 arguments - 'dialog', 'editors', 'labels', 'tabs', 'layout', 'taskOrComment'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'editors', 'labels', 'tabs' and 'layout' are JSON objects with key which describes the element type and value which is HTML Element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dialogRendered : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dialogRendered = value : undefined;
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
    Object.defineProperty(KanbanComponent.prototype, "onTaskRender", {
        /** @description Callback function which can be used for customizing the tasks rendering. The Kanban calls it with 2 arguments - task html element and task data. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onTaskRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onTaskRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "onFilterPrepare", {
        /** @description Callback function which can be used for customizing the filter items. The function is called with 1 argument - Array of items which will be displayed in the filter drop down. You can modify that array to remove or update items to filter by. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onFilterPrepare : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onFilterPrepare = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "onSortPrepare", {
        /** @description Callback function which can be used for customizing the sort items. The function is called with 1 argument - Array of items which will be displayed in the sort drop down. You can modify that array to remove or update items to sort by. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onSortPrepare : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onSortPrepare = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "onColumnHeaderRender", {
        /** @description Callback function which can be used for customizing the column header rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnHeaderRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnHeaderRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanbanComponent.prototype, "onColumnFooterRender", {
        /** @description Callback function which can be used for customizing the column footer rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnFooterRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnFooterRender = value : undefined;
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
    Object.defineProperty(KanbanComponent.prototype, "readonly", {
        /** @description Sets or gets whether the edit dialog is displayed in readonly mode. In that mode it shows only the task details, but the editing is disabled. However, if comments are enabled, you will be able to add comments in the dialog. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
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
    Object.defineProperty(KanbanComponent.prototype, "taskActionsRendered", {
        /** @description Represents a callback function which is called when the task actions menu is created. The task actions element is passed as parameter and allows you to customize the menu. Example: (list) => { list.innerHTML = 'Custom Item'; list.onclick = () => { alert('clicked'); }} */
        get: function () {
            return this.nativeElement ? this.nativeElement.taskActionsRendered : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.taskActionsRendered = value : undefined;
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
        /** @description Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible', 'image' and 'cover' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. If your string represents an image either URL or Base64, set image: true. If you want to display that image as a cover image, set cover:true, too. */
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
    /** @description Adds filtering. Example: const filterGroup = new Smart.FilterGroup(); const filterObject = filterGroup.createFilter('string', 'Italy', 'contains'); filterGroup.addFilter('and', filterObject); kanban.addFilter([['Country', filterGroup]]);
    * @param {any} filters. Filter information. Example: kanban.addFilter([['Country', filterGroup]]);. Each array item is a sub array with two items - 'dataField' and 'filterGroup' object. The 'dataField' is any valid data field from the data source bound to the Kanban like 'dueDate', 'startDate' or custom fields like 'Country'. Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @param {string} operator?. Logical operator between the filters of different fields. Possible values are: 'and', 'or'.
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
    /** @description Adds sorting. Example: kanban.addSort(['Country'], 'ascending');
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by. Possible values are: 'ascending' and 'descending'.
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
    /** @description Clears the Kanban's selection.
    */
    KanbanComponent.prototype.clearSelection = function () {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    /** @description Gets the data of a task. The returned value is a JSON object with the following fields: 'checklist', 'id', 'color', 'comments', 'history', 'dueDate', 'startDate', 'priority', 'progress', 'status', 'swimlane', 'tags', 'text', 'description', 'userId', 'createdUserId', 'createdDate', 'updatedUserId', 'updatedDate'
    * @param {number} id. The task's id
    * @returns {any}
  */
    KanbanComponent.prototype.getTask = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getTask(id);
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
    /** @description Gets the selected ids. The returned value is an array. Each item in the array is the 'id' of a selected task.
    * @param {number} id. The task's id
    * @returns {any}
  */
    KanbanComponent.prototype.getSelectedTasks = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectedTasks(id);
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    /** @description Selects a task.
    * @param {number | string} task. The task's id.
    */
    KanbanComponent.prototype.selectTask = function (task) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTask(task);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectTask(task);
            });
        }
    };
    /** @description Unselects a task.
    * @param {number | string} task. The task's id.
    */
    KanbanComponent.prototype.unselectTask = function (task) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectTask(task);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselectTask(task);
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
        that.eventHandlers['columnShowHandler'] = function (event) { that.onColumnShow.emit(event); };
        that.nativeElement.addEventListener('columnShow', that.eventHandlers['columnShowHandler']);
        that.eventHandlers['columnHideHandler'] = function (event) { that.onColumnHide.emit(event); };
        that.nativeElement.addEventListener('columnHide', that.eventHandlers['columnHideHandler']);
        that.eventHandlers['columnCollapseHandler'] = function (event) { that.onColumnCollapse.emit(event); };
        that.nativeElement.addEventListener('columnCollapse', that.eventHandlers['columnCollapseHandler']);
        that.eventHandlers['columnExpandHandler'] = function (event) { that.onColumnExpand.emit(event); };
        that.nativeElement.addEventListener('columnExpand', that.eventHandlers['columnExpandHandler']);
        that.eventHandlers['commentAddHandler'] = function (event) { that.onCommentAdd.emit(event); };
        that.nativeElement.addEventListener('commentAdd', that.eventHandlers['commentAddHandler']);
        that.eventHandlers['commentRemoveHandler'] = function (event) { that.onCommentRemove.emit(event); };
        that.nativeElement.addEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);
        that.eventHandlers['commentUpdateHandler'] = function (event) { that.onCommentUpdate.emit(event); };
        that.nativeElement.addEventListener('commentUpdate', that.eventHandlers['commentUpdateHandler']);
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
        that.eventHandlers['taskBeforeAddHandler'] = function (event) { that.onTaskBeforeAdd.emit(event); };
        that.nativeElement.addEventListener('taskBeforeAdd', that.eventHandlers['taskBeforeAddHandler']);
        that.eventHandlers['taskAddHandler'] = function (event) { that.onTaskAdd.emit(event); };
        that.nativeElement.addEventListener('taskAdd', that.eventHandlers['taskAddHandler']);
        that.eventHandlers['taskRemoveHandler'] = function (event) { that.onTaskRemove.emit(event); };
        that.nativeElement.addEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);
        that.eventHandlers['taskUpdateHandler'] = function (event) { that.onTaskUpdate.emit(event); };
        that.nativeElement.addEventListener('taskUpdate', that.eventHandlers['taskUpdateHandler']);
        that.eventHandlers['taskClickHandler'] = function (event) { that.onTaskClick.emit(event); };
        that.nativeElement.addEventListener('taskClick', that.eventHandlers['taskClickHandler']);
        that.eventHandlers['taskDoubleClickHandler'] = function (event) { that.onTaskDoubleClick.emit(event); };
        that.nativeElement.addEventListener('taskDoubleClick', that.eventHandlers['taskDoubleClickHandler']);
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
    };
    KanbanComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], KanbanComponent.prototype, "allowColumnReorder", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "allowColumnEdit", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "allowColumnRemove", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "allowColumnHide", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "addNewButton", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "addNewButtonDisplayMode", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "addNewColumn", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "addNewColumnWidth", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "allowDrag", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "allowDrop", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "applyColumnColorToTasks", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "autoLoadState", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "autoSaveState", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "autoColumnHeight", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "collapsible", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnColors", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnWidth", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnColorEntireSurface", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnFooter", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnActions", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnSummary", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnHeaderTemplate", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "columnEditMode", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "currentUser", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "disableDialog", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "dialogCustomizationFunction", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "dialogRendered", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "dataSourceMap", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "dragOffset", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "editable", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "formatStringDate", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "formatStringTime", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "headerPosition", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "hierarchy", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "onTaskRender", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "onFilterPrepare", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "onSortPrepare", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "onColumnHeaderRender", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "onColumnFooterRender", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "storeHistory", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "storeHistoryItems", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "swimlanes", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "swimlanesFrom", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "swimlanesTo", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "tags", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskActions", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskActionsRendered", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskComments", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskDue", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskPosition", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskPriority", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskProgress", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskCustomFields", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskColorEntireSurface", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskSubTasksInput", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskSubTasks", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskTags", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "taskUserIcon", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "textTemplate", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "priorityList", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "priority", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "userList", null);
    __decorate([
        Input()
    ], KanbanComponent.prototype, "users", null);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnAdd", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnRemove", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnReorder", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnUpdate", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnClick", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnDoubleClick", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnShow", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnHide", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnCollapse", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onColumnExpand", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onCommentAdd", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onCommentRemove", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onCommentUpdate", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onDragging", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onFilter", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onOpening", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onSort", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onTaskBeforeAdd", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onTaskAdd", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onTaskRemove", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onTaskUpdate", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onTaskClick", void 0);
    __decorate([
        Output()
    ], KanbanComponent.prototype, "onTaskDoubleClick", void 0);
    KanbanComponent = __decorate([
        Directive({
            exportAs: 'smart-kanban', selector: 'smart-kanban, [smart-kanban]'
        })
    ], KanbanComponent);
    return KanbanComponent;
}(BaseElement));

var KanbanModule = /** @class */ (function () {
    function KanbanModule() {
    }
    KanbanModule = __decorate([
        NgModule({
            declarations: [KanbanComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [KanbanComponent]
        })
    ], KanbanModule);
    return KanbanModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { KanbanComponent, KanbanModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-kanban.js.map
