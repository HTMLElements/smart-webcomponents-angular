import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var SchedulerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SchedulerComponent, _super);
    function SchedulerComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a batch update was started after executing the beginUpdate method.
        *  @param event. The custom event. 	*/
        _this.onBeginUpdate = new EventEmitter();
        /** @description This event is triggered when a batch update was ended from after executing the endUpdate method.
        *  @param event. The custom event. 	*/
        _this.onEndUpdate = new EventEmitter();
        /** @description This event is triggered when a new cell is selected/unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
        *   value - The new selected Date.
        *   oldValue - The previously selected Date.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when an Event has been updated/inserted/removed/dragged/resized or an exception of a repeating event has been added/updated/removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
        *   item - An object that represents the actual item with it's attributes.
        *   type - The type of change that is being done to the item.
        */
        _this.onItemChange = new EventEmitter();
        /** @description This event is triggered when an Event is going to be updated/inserted/removed. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
        *   item - An object that represents the actual item with it's attributes.
        *   type - The type of change that is going to be made to the item (e.g. 'inserting', 'removing', 'updating', 'exceptionInserting', 'exceptionUpdating', 'exceptionRemoving').
        */
        _this.onItemChanging = new EventEmitter();
        /** @description This event is triggered when en event, event item or a context menu item is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	itemObj)
        *   item - The HTMLElement for the event.
        *   type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
        *   itemObj - The event object.
        */
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when an Event is inserted.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - An object that represents the actual item with it's attributes.
        */
        _this.onItemInsert = new EventEmitter();
        /** @description This event is triggered when an Event is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - An object that represents the actual item with it's attributes.
        */
        _this.onItemRemove = new EventEmitter();
        /** @description This event is triggered when an Event is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        _this.onItemUpdate = new EventEmitter();
        /** @description This event is triggered when the view is changed via user interaction.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The value of the previously selected view.
        *   value - The value of the new selected view.
        */
        _this.onViewChange = new EventEmitter();
        /** @description This event is triggered before the view is changed via user interaction. The view change action can be canceled if event.preventDefault() is called on the event.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The value of the previously selected view.
        *   value - The value of the new selected view.
        */
        _this.onViewChanging = new EventEmitter();
        /** @description This event is triggered when a shortcut key for an event is pressed. By default only 'Delete' key is used.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	key, 	target, 	eventObj)
        *   key - The shortcut key that was pressed.
        *   target - The event target (HTMLElement).
        *   eventObj - The scheduler Event object that affected by the keypress.
        */
        _this.onEventShortcutKey = new EventEmitter();
        /** @description This event is triggered when the 'dateCurrent' property is changed. This can be caused by navigating to a different date.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous current date that was in view.
        *   value - The current date in view.
        */
        _this.onDateChange = new EventEmitter();
        /** @description This event is triggered when dragging of an event begins. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is going to be dragged.
        *   item - The scheduler Event object that is going to be dragged.
        *   itemDateRange - The start/end dates for the Scheduler Event.
        *   originalEvent - The original event object.
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when dragging of an event finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is dragged.
        *   item - The scheduler Event object that is dragged.
        *   itemDateRange - The new start/end dates for the dragged Scheduler Event.
        *   originalEvent - The original event object.
        */
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when the user drops an item over a cell.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	date, 	allDay)
        *   target - The HTMLElement that corresponds to the event that is dragged.
        *   date - The cell's date under the pointer.
        *   allDay - Boolean value, which is true when the cell under the pointer is all day cell.
        */
        _this.onDropoverCell = new EventEmitter();
        /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is going to be resized.
        *   item - The scheduler Event object that is going to be resized.
        *   itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
        *   originalEvent - The original event object.
        */
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of an event finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is resized.
        *   item - The scheduler Event object that is resized.
        *   itemDateRange - The new start/end dates for the resized Scheduler Event.
        *   originalEvent - The original event object.
        */
        _this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the user starts top open the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
        *   target - The dialog window that is opening.
        *   item - The event object that is going to be edited.
        *   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEditDialogOpening = new EventEmitter();
        /** @description This event is triggered when the user opens the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
        *   target - The dialog window that is opened.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEditDialogOpen = new EventEmitter();
        /** @description This event is triggered when the user closes the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
        *   target - The dialog window that is closed.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEditDialogClose = new EventEmitter();
        /** @description This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
        *   target - The dialog window that is closing.
        *   item - The event object that is edited.
        *   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEditDialogClosing = new EventEmitter();
        /** @description This event is triggered when the user begins to open the context menu on a timeline cell or an event element. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        _this.onContextMenuOpening = new EventEmitter();
        /** @description This event is triggered when the context menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        _this.onContextMenuOpen = new EventEmitter();
        /** @description This event is triggered when the context menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        _this.onContextMenuClose = new EventEmitter();
        /** @description This event is triggered when the user is about to close the context menu. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        _this.onContextMenuClosing = new EventEmitter();
        /** @description This event is triggered when the event menu is about to open. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEventMenuOpening = new EventEmitter();
        /** @description This event is triggered when the event menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEventMenuOpen = new EventEmitter();
        /** @description This event is triggered when the event menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEventMenuClose = new EventEmitter();
        /** @description This event is triggered when the evet menu is about to close. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        _this.onEventMenuClosing = new EventEmitter();
        /** @description This event is triggered when the date selection menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        _this.onDateMenuOpen = new EventEmitter();
        /** @description This event is triggered when the date selection menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        _this.onDateMenuClose = new EventEmitter();
        /** @description This event is triggered when the view selection menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        _this.onViewMenuOpen = new EventEmitter();
        /** @description This event is triggered when the view selection menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        _this.onViewMenuClose = new EventEmitter();
        /** @description This event is triggered when a notification is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
        *   instance - The toast item instance that is opened.
        */
        _this.onNotificationOpen = new EventEmitter();
        /** @description This event is triggered when a notification is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
        *   instance - The toast item instance that is closed.
        */
        _this.onNotificationClose = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    SchedulerComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-scheduler');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(SchedulerComponent.prototype, "autoScrollStep", {
        /** @description Determines the scroll speed while dragging an event.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoScrollStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "colorScheme", {
        /** @description Determines the color scheme for the event background selector in the event window editor.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.colorScheme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "currentTimeIndicator", {
        /** @description Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.currentTimeIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "currentTimeIndicatorInterval", {
        /** @description Determines the refresh interval in seconds for the currentTimeIndicator.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "contextMenuDataSource", {
        /** @description Determines the context menu items that are visible when the Context Menu is opened. */
        get: function () {
            return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "contextMenuClipboardActions", {
        /** @description Determines whether the clipboard shortcuts for copy/paste/cut action of events are visible in the Scheduler context menu or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.contextMenuClipboardActions : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.contextMenuClipboardActions = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "eventTemplate", {
        /** @description Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.eventTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.eventTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "eventCollectorTemplate", {
        /** @description Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.eventCollectorTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.eventCollectorTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "eventRenderMode", {
        /** @description  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created. */
        get: function () {
            return this.nativeElement ? this.nativeElement.eventRenderMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.eventRenderMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "eventTooltipTemplate", {
        /** @description Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.eventTooltipTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.eventTooltipTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "cellTemplate", {
        /** @description Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell. */
        get: function () {
            return this.nativeElement ? this.nativeElement.cellTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cellTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "dateCurrent", {
        /** @description Determines the currently visible date for the Scheduler. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dateCurrent : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dateCurrent = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "dataExport", {
        /** @description Sets the Schedulers's Data Export options. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataExport : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataExport = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "dataSource", {
        /** @description Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties: */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "dateSelectorFormatFunction", {
        /** @description A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dateSelectorFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dateSelectorFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "dayFormat", {
        /** @description Determines the day format of the dates in the timeline. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dayFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dayFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disabled", {
        /** @description Enables or disables the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableAutoScroll", {
        /** @description Disables auto scrolling of the timeline while dragging/resizing an event. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableAutoScroll = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableDrag", {
        /** @description Disables dragging of events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableDrop", {
        /** @description Disables dropping of events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableDrop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableDrop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableResize", {
        /** @description Disables resizing of events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableSelection", {
        /** @description Disables the cell selection. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableSelection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableSelection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableWindowEditor", {
        /** @description Disables the window editor for the events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableWindowEditor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableContextMenu", {
        /** @description Disables the context menu of the events and cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableContextMenu = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableEventMenu", {
        /** @description Disables the event menu that appears when an event/collector has been clicked. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableEventMenu : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableEventMenu = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableViewMenu", {
        /** @description Disables the view menu that allows to select the current Scheduler view. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableViewMenu : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableViewMenu = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "disableDateMenu", {
        /** @description Disables the date menu that allows to select the current Scheduler date. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableDateMenu : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableDateMenu = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "dragFeedbackFormatFunction", {
        /** @description A callback that can be used to customize the drag feedback that appears when an event is dragged. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "dragOffset", {
        /** @description Determines the offset for the drag feedback from the pointer. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dragOffset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "filter", {
        /** @description Determines the filtering condition for the events.The filter property takes an array of objects or a function. Each object represents a single filtering condition with the following attributes: name - the name of the Scheduler event property that will be filtered by.value - the filtering condition value. The value will be used to compare the events based on the filterMode, for example: [{ name: 'price', value: 25 }]. The value can also be a function. The function accepts a single arguemnt - the value that corresponds to the filtered attribute. The function allows to apply custom condition that is different from the default filter modes. It should return true ( if the evnet passes the filtering condition ) or false ( if the event does not meet the filtering condition ). Here's an example: [{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]. In the example the events that do not have a 'roomId' property that is equal to '2' or '3' will be filtered out.. If a function is set to the filter property instead, it allows to completely customize the filtering logic. The function passes a single argument - each Scheduler event that will be displayed. The function should return true ( if the condition is met ) or false ( if not ). */
        get: function () {
            return this.nativeElement ? this.nativeElement.filter : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filter = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "filterable", {
        /** @description Determines whether Scheduler's filtering is enabled or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "filterMode", {
        /** @description Determines the filter mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "events", {
        /** @description A getter that returns  an array of all Scheduler events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.events : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.events = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "firstDayOfWeek", {
        /** @description Determines the first day of week for the Scheduler. By default it's Sunday. */
        get: function () {
            return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "footerTemplate", {
        /** @description Allows to customize the footer of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: footerContainer - the footer container.. */
        get: function () {
            return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "groupByDate", {
        /** @description Determines whether the events will be grouped by date. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupByDate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupByDate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "groupOrientation", {
        /** @description Determines the grouping orientation. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupOrientation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupOrientation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "groupTemplate", {
        /** @description Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "groups", {
        /** @description Determines the resources that the events are grouped by. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groups : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groups = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hourEnd", {
        /** @description Determines the end hour that will be displayed in 'day' and 'week' views. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hourEnd : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hourEnd = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hourStart", {
        /** @description Determines the start hour that will be displayed in 'day' and 'week' views. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hourStart : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hourStart = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hourFormat", {
        /** @description Determines the formatting of hours inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hourFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hourFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "headerTemplate", {
        /** @description Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container.. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "headerDatePosition", {
        /** @description  Determines the position of the Date selector inside the Header of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerDatePosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerDatePosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "headerNavigationStyle", {
        /** @description  Determines the styling of the Header navigation controls. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerNavigationStyle : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerNavigationStyle = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "headerViewPosition", {
        /** @description  Determines the position of the view selector control inside the Header of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerViewPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerViewPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hideAllDay", {
        /** @description Determines whether the 'All Day' container with the all day events is hidden or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideAllDay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideAllDay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hideNonworkingWeekdays", {
        /** @description Determines whether the days set by 'nonworkingDays' property are hidden or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideNonworkingWeekdays : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideNonworkingWeekdays = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hideOtherMonthDays", {
        /** @description Determines whether other month days are visible when view is set to month. When enabled, events that start on other month days are not displayed and the cells that represent such days do not allow the creation of new events on them. Also dragging and droping an event on other month days is not allowed. Reszing is also affected. Events can end on other month days, but cannot start on one. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideOtherMonthDays = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hideTodayButton", {
        /** @description Determines whether the 'Today' button is hidden or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideTodayButton : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideTodayButton = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hideViewMenuCheckableItems", {
        /** @description Determines whether the checkable items in the view selection menu are hidden or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "hideWeekend", {
        /** @description Determines whether the weekend days are hidden or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideWeekend : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideWeekend = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "legendLocation", {
        /** @description Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header. */
        get: function () {
            return this.nativeElement ? this.nativeElement.legendLocation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.legendLocation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "legendPosition", {
        /** @description Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that. */
        get: function () {
            return this.nativeElement ? this.nativeElement.legendPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.legendPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "mouseWheelStep", {
        /** @description Determines the mouse wheel step. When this property is set to a positive number, the scroll step with mouse wheel or trackpad will depend on the property value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mouseWheelStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mouseWheelStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "horizontalScrollBarVisibility", {
        /** @description Determines weather or not horizontal scrollbar is shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "locale", {
        /** @description  Determines the language of the Scheduler.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "max", {
        /** @description Detetmines the maximum view date for the Scheduler. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "maxEventsPerCell", {
        /** @description Detetmines the maximum number of events per Scheduler cell. By default this property is null which means that the number of events per cell is automatically determined by the size of the events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxEventsPerCell : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxEventsPerCell = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "min", {
        /** @description Detetmines the minimum view date for the Scheduler. */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "minuteFormat", {
        /** @description Determines the minute formatting inside the Scheduler. */
        get: function () {
            return this.nativeElement ? this.nativeElement.minuteFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.minuteFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "monthFormat", {
        /** @description Determines the month name formatting inside the Scheduler. */
        get: function () {
            return this.nativeElement ? this.nativeElement.monthFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.monthFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "nonworkingDays", {
        /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "nonworkingHours", {
        /** @description Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest. */
        get: function () {
            return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.nonworkingHours = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "notificationInterval", {
        /** @description Determines the interval (in seconds) at which the element will check for notifications. */
        get: function () {
            return this.nativeElement ? this.nativeElement.notificationInterval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.notificationInterval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "resizeHandlesVisibility", {
        /** @description Determines the visibility of the resize handles. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeHandlesVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeHandlesVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "resizeInterval", {
        /** @description Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeInterval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeInterval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "resources", {
        /** @description An array of resources that can be assigned to the events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resources : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resources = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "restrictedDates", {
        /** @description Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.restrictedDates = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "restrictedHours", {
        /** @description Defines an array of hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.restrictedHours : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.restrictedHours = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(SchedulerComponent.prototype, "scrollButtonsPosition", {
        /** @description  Determines the position of the date navigation navigation buttons inside the header of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "shadeUntilCurrentTime", {
        /** @description Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.shadeUntilCurrentTime = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "showLegend", {
        /** @description Determines whether the resource legend is visible or not. The Legend shows the resources and their items in the footer section of the Scheduler. If filterable is enabled it is possible to filter by resource items by clicking on the corresponding resource item from the legend. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showLegend : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showLegend = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "sortBy", {
        /** @description Determines the name of the resource data item property that will be used for sorting the resource data defined as the resource.dataSource. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortBy : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortBy = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "sortFunction", {
        /** @description Allows to define a custom sorting function that will be used to sort the resource data. The sortFunction is used when sortOrder is set to custom. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "sortOrder", {
        /** @description Determines the sorting order of the resource data items. When set to custom, a custom sorting function has to be defined for the sortFunction property. The asc stands for 'ascending' while desc means 'descending' sorting order. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortOrder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortOrder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "spinButtonsDelay", {
        /** @description Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "spinButtonsInitialDelay", {
        /** @description Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "statuses", {
        /** @description Defines the statuses that will be available for selection thourgh the window editor for the events. */
        get: function () {
            return this.nativeElement ? this.nativeElement.statuses : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.statuses = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "theme", {
        /** @description Sets or gets the element's visual theme.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "timelineHeaderFormatFunction", {
        /** @description A format function for the Header of the Timeline. Allows to modify the date labels in the header cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "timelineDayScale", {
        /** @description Determines the date scale for the timeline cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.timelineDayScale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.timelineDayScale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "timeRulerTicks", {
        /** @description Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views. */
        get: function () {
            return this.nativeElement ? this.nativeElement.timeRulerTicks : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.timeRulerTicks = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "timeZone", {
        /** @description Determines the timeZone for the element. By default if the local time zone is used if the property is not set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.timeZone : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.timeZone = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "timeZones", {
        /** @description Allows to display additional timeZones at once along with the default that is set via the timeZone property. Accepts an array values that represent the ids of valid time zones. The possbile time zones can be viewed in the timeZone property description. By default the local time zone is displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.timeZones : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.timeZones = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "tooltipDelay", {
        /** @description Determines the delay ( in miliseconds) before the tooltip/menu appears. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "tooltipOffset", {
        /** @description Determines the offset ot the tooltip/menu. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltipOffset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "verticalScrollBarVisibility", {
        /** @description Determines weather or not vertical scrollbar is shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "view", {
        /** @description Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view. */
        get: function () {
            return this.nativeElement ? this.nativeElement.view : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.view = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "viewType", {
        /** @description Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.viewType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.viewType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "views", {
        /** @description Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.hideHours - an Optional property applicable only to timelineWeek view that allows to hide the hour cells and only show the day cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.views : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.views = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "viewSelectorType", {
        /** @description Determines type of the view selector located in the header of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.viewSelectorType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.viewSelectorType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "weekdayFormat", {
        /** @description Determines the format of the week days inside the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.weekdayFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.weekdayFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "yearFormat", {
        /** @description Determines the format of the dates inside the timeline header when they represent years. */
        get: function () {
            return this.nativeElement ? this.nativeElement.yearFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "unfocusable", {
        /** @description Sets or gets if the element can be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "undoRedoSteps", {
        /** @description Determines the maximum number of redo/undo steps that will be remembered by the Scheduler. When the number is reached the oldest records are removed in order to add new. */
        get: function () {
            return this.nativeElement ? this.nativeElement.undoRedoSteps : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.undoRedoSteps = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchedulerComponent.prototype, "windowCustomizationFunction", {
        /** @description A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited. */
        get: function () {
            return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.windowCustomizationFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds an event to the Scheduler. Accepts an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    */
    SchedulerComponent.prototype.addEvent = function (eventObj) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEvent(eventObj);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addEvent(eventObj);
            });
        }
    };
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    SchedulerComponent.prototype.beginUpdate = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginUpdate();
            });
        }
    };
    /** @description Creates an event and adds it to the Scheduler.
    * @param {string} label. Event label.
    * @param {string} value. Event value.
    * @param {string} dateStart. Event date start.
    * @param {string} dateEnd. Event date end.
    * @param {boolean} allDay. Event all day. Set it to true to create all day event.
    */
    SchedulerComponent.prototype.createEvent = function (label, value, dateStart, dateEnd, allDay) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
            });
        }
    };
    /** @description Ends the update operation. This method will resume the rendering and will refresh the element.
    */
    SchedulerComponent.prototype.endUpdate = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endUpdate();
            });
        }
    };
    /** @description Refereshes the Scheduler by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
    */
    SchedulerComponent.prototype.refresh = function (fullRefresh) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refresh(fullRefresh);
            });
        }
    };
    /** @description Exports the events from the Scheduler.
    * @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
    */
    SchedulerComponent.prototype.exportData = function (dataFormat, callback) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.exportData(dataFormat, callback);
            });
        }
    };
    /** @description Returns a JSON representation of the events inside the Scheduler.
    * @returns {any}
  */
    SchedulerComponent.prototype.getDataSource = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getDataSource();
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
    /** @description Returns a JSON representation of the resources inside the Scheduler.
    * @returns {any}
  */
    SchedulerComponent.prototype.getResources = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getResources();
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
    /** @description Gets a date from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {string}
  */
    SchedulerComponent.prototype.getDateFromCoordinates = function (x, y) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getDateFromCoordinates(x, y);
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
    /** @description Gets whether a cell is all day cell from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.getIsAllDayCellFromCoordinates = function (x, y) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getIsAllDayCellFromCoordinates(x, y);
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
    /** @description Returns the current state of the Scheduler. Includes the current dateCurernt, dataSource and timeZone properties.
    * @returns {any}
  */
    SchedulerComponent.prototype.getState = function () {
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
    /** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    SchedulerComponent.prototype.clearState = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearState();
            });
        }
    };
    /** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
    */
    SchedulerComponent.prototype.loadState = function (state) {
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
    /** @description Saves the current events of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events.
    */
    SchedulerComponent.prototype.saveState = function (state) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveState(state);
            });
        }
    };
    /** @description Checks whether the Scheduler contains the event.
    * @param {any} eventObj. A Scheduler event object.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.containsEvent = function (eventObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.containsEvent(eventObj);
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
    /** @description Inserts an event as object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
    */
    SchedulerComponent.prototype.insertEvent = function (eventObj, index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertEvent(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertEvent(eventObj, index);
            });
        }
    };
    /** @description Updates an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} index. A number that represents the index of an event or a Scheduler event object.
    * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
    */
    SchedulerComponent.prototype.updateEvent = function (index, eventObj) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEvent(index, eventObj);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateEvent(index, eventObj);
            });
        }
    };
    /** @description Removes an existing event.
    * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
    */
    SchedulerComponent.prototype.removeEvent = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEvent(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeEvent(index);
            });
        }
    };
    /** @description Returns an array of all exceptions of the target repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @returns {any}
  */
    SchedulerComponent.prototype.getEventExceptions = function (eventObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getEventExceptions(eventObj);
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
    /** @description Adds an event exception to a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.addEventException(eventObj, { date: occuranceDate, dateStart: newDateStart, dateEnd: newDateEnd, label: 'Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
    */
    SchedulerComponent.prototype.addEventException = function (eventObj, exceptionObj) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEventException(eventObj, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addEventException(eventObj, exceptionObj);
            });
        }
    };
    /** @description Updates an event exception of a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.updateEventException(eventObj, dateOfOccurance, { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
    * @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
    */
    SchedulerComponent.prototype.updateEventException = function (eventObj, exceptionRef, exceptionObj) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
            });
        }
    };
    /** @description Removes an exception from a repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
    */
    SchedulerComponent.prototype.removeEventException = function (eventObj, index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEventException(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeEventException(eventObj, index);
            });
        }
    };
    /** @description Opens the popup Window for specific event Editing.
    * @param {any} index. A number that represents the index of a event or the actual event object to be edited.
    */
    SchedulerComponent.prototype.openWindow = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openWindow(index);
            });
        }
    };
    /** @description Closes the popup window.
    */
    SchedulerComponent.prototype.closeWindow = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeWindow();
            });
        }
    };
    /** @description Prepares the Scheduler for printing by opening the browser's Print Preview.
    */
    SchedulerComponent.prototype.print = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.print();
            });
        }
    };
    /** @description Scrolls the Scheduler to a Date.
    * @param {Date} date. The date to scroll to.
    * @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
    * @param {boolean} autoScroll?. Calculates the scroll positions and element bounds, then adds an offset to scroll within the middle of the view.
    */
    SchedulerComponent.prototype.scrollToDate = function (date, strictScroll, autoScroll) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
            });
        }
    };
    /** @description Navigates the Scheduler to a Date.
    * @param {Date} date. The date to navigate to.
    */
    SchedulerComponent.prototype.navigateToDate = function (date) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateToDate(date);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.navigateToDate(date);
            });
        }
    };
    /** @description Scrolls the Scheduler to an event.
    * @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
    */
    SchedulerComponent.prototype.scrollToEvent = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToEvent(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.scrollToEvent(index);
            });
        }
    };
    /** @description Opens a custom notification.
    * @param {string} message. The notification message.
    * @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
    */
    SchedulerComponent.prototype.openNotification = function (message, toastSettings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openNotification(message, toastSettings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openNotification(message, toastSettings);
            });
        }
    };
    /** @description Closes all notifications.
    */
    SchedulerComponent.prototype.closeNotifications = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeNotifications();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeNotifications();
            });
        }
    };
    /** @description Returns all occurances of an event.
    * @param {any} eventObj. A Scheduler evnet object.
    * @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
    */
    SchedulerComponent.prototype.occurrences = function (eventObj, count) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrences(eventObj, count);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.occurrences(eventObj, count);
            });
        }
    };
    /** @description Returns all occurances of an event between two dates.
    * @param {any} eventObj. A Scheduler event object.
    * @param {Date} dateFrom. The start date.
    * @param {Date} dateTo. The end date.
    */
    SchedulerComponent.prototype.occurrencesBetween = function (eventObj, dateFrom, dateTo) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
            });
        }
    };
    /** @description Returns the first occurance of an event after a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date after which the first occurance of the event will be returned.
    */
    SchedulerComponent.prototype.occurrenceAfter = function (eventObj, date) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceAfter(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.occurrenceAfter(eventObj, date);
            });
        }
    };
    /** @description Returns the last occurance of an event before a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date before which the first occurance of the event will be returned.
    */
    SchedulerComponent.prototype.occurrenceBefore = function (eventObj, date) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceBefore(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.occurrenceBefore(eventObj, date);
            });
        }
    };
    /** @description Returns the dateStart/dateEnd of a timeline cell.
    * @param {HTMLElement} cell. A Scheduler timeline cell element.
    * @returns {any}
  */
    SchedulerComponent.prototype.getCellDateRange = function (cell) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getCellDateRange(cell);
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
    /** @description Opens the tooltip(event menu) for an event.
    * @param {any} eventObj. A Scheduler event object or it's index.
    */
    SchedulerComponent.prototype.openEventTooltip = function (eventObj) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openEventTooltip(eventObj);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openEventTooltip(eventObj);
            });
        }
    };
    /** @description Closes the event tooltip (event menu).
    */
    SchedulerComponent.prototype.closeEventTooltip = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeEventTooltip();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeEventTooltip();
            });
        }
    };
    /** @description Returns true or false whether the date is restricted or not.
    * @param {Date} date. A Date object.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.isDateRestricted = function (date) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.isDateRestricted(date);
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
    /** @description Returns true or false whether the hour is restricted or not.
    * @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.isHourRestricted = function (hour) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.isHourRestricted(hour);
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
    /** @description Returns true or false whether the event is restricted or not.
    * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.isEventRestricted = function (eventObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.isEventRestricted(eventObj);
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
    /** @description Deletes the current undo/redo history.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.deleteUndoRedoHistory = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.deleteUndoRedoHistory();
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
    /** @description Indicates whether it is possible to redo an action.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.canRedo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.canRedo();
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
    /** @description Indicates whether it is possbile to undo an action.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.canUndo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.canUndo();
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
    /** @description Redo the next event modification.
    * @param {number} step?. A step to redo to.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.redo = function (step) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.redo(step);
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
    /** @description Undo the last event modification.
    * @param {number} step?. A step to undo to.
    * @returns {boolean}
  */
    SchedulerComponent.prototype.undo = function (step) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.undo(step);
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
    Object.defineProperty(SchedulerComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    SchedulerComponent.prototype.ngOnInit = function () {
    };
    SchedulerComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    SchedulerComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    SchedulerComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    SchedulerComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['beginUpdateHandler'] = function (event) { that.onBeginUpdate.emit(event); };
        that.nativeElement.addEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);
        that.eventHandlers['endUpdateHandler'] = function (event) { that.onEndUpdate.emit(event); };
        that.nativeElement.addEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['itemChangeHandler'] = function (event) { that.onItemChange.emit(event); };
        that.nativeElement.addEventListener('itemChange', that.eventHandlers['itemChangeHandler']);
        that.eventHandlers['itemChangingHandler'] = function (event) { that.onItemChanging.emit(event); };
        that.nativeElement.addEventListener('itemChanging', that.eventHandlers['itemChangingHandler']);
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['itemInsertHandler'] = function (event) { that.onItemInsert.emit(event); };
        that.nativeElement.addEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);
        that.eventHandlers['itemRemoveHandler'] = function (event) { that.onItemRemove.emit(event); };
        that.nativeElement.addEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);
        that.eventHandlers['itemUpdateHandler'] = function (event) { that.onItemUpdate.emit(event); };
        that.nativeElement.addEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);
        that.eventHandlers['viewChangeHandler'] = function (event) { that.onViewChange.emit(event); };
        that.nativeElement.addEventListener('viewChange', that.eventHandlers['viewChangeHandler']);
        that.eventHandlers['viewChangingHandler'] = function (event) { that.onViewChanging.emit(event); };
        that.nativeElement.addEventListener('viewChanging', that.eventHandlers['viewChangingHandler']);
        that.eventHandlers['eventShortcutKeyHandler'] = function (event) { that.onEventShortcutKey.emit(event); };
        that.nativeElement.addEventListener('eventShortcutKey', that.eventHandlers['eventShortcutKeyHandler']);
        that.eventHandlers['dateChangeHandler'] = function (event) { that.onDateChange.emit(event); };
        that.nativeElement.addEventListener('dateChange', that.eventHandlers['dateChangeHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['dropoverCellHandler'] = function (event) { that.onDropoverCell.emit(event); };
        that.nativeElement.addEventListener('dropoverCell', that.eventHandlers['dropoverCellHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['editDialogOpeningHandler'] = function (event) { that.onEditDialogOpening.emit(event); };
        that.nativeElement.addEventListener('editDialogOpening', that.eventHandlers['editDialogOpeningHandler']);
        that.eventHandlers['editDialogOpenHandler'] = function (event) { that.onEditDialogOpen.emit(event); };
        that.nativeElement.addEventListener('editDialogOpen', that.eventHandlers['editDialogOpenHandler']);
        that.eventHandlers['editDialogCloseHandler'] = function (event) { that.onEditDialogClose.emit(event); };
        that.nativeElement.addEventListener('editDialogClose', that.eventHandlers['editDialogCloseHandler']);
        that.eventHandlers['editDialogClosingHandler'] = function (event) { that.onEditDialogClosing.emit(event); };
        that.nativeElement.addEventListener('editDialogClosing', that.eventHandlers['editDialogClosingHandler']);
        that.eventHandlers['contextMenuOpeningHandler'] = function (event) { that.onContextMenuOpening.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
        that.eventHandlers['contextMenuOpenHandler'] = function (event) { that.onContextMenuOpen.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
        that.eventHandlers['contextMenuCloseHandler'] = function (event) { that.onContextMenuClose.emit(event); };
        that.nativeElement.addEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
        that.eventHandlers['contextMenuClosingHandler'] = function (event) { that.onContextMenuClosing.emit(event); };
        that.nativeElement.addEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
        that.eventHandlers['eventMenuOpeningHandler'] = function (event) { that.onEventMenuOpening.emit(event); };
        that.nativeElement.addEventListener('eventMenuOpening', that.eventHandlers['eventMenuOpeningHandler']);
        that.eventHandlers['eventMenuOpenHandler'] = function (event) { that.onEventMenuOpen.emit(event); };
        that.nativeElement.addEventListener('eventMenuOpen', that.eventHandlers['eventMenuOpenHandler']);
        that.eventHandlers['eventMenuCloseHandler'] = function (event) { that.onEventMenuClose.emit(event); };
        that.nativeElement.addEventListener('eventMenuClose', that.eventHandlers['eventMenuCloseHandler']);
        that.eventHandlers['eventMenuClosingHandler'] = function (event) { that.onEventMenuClosing.emit(event); };
        that.nativeElement.addEventListener('eventMenuClosing', that.eventHandlers['eventMenuClosingHandler']);
        that.eventHandlers['dateMenuOpenHandler'] = function (event) { that.onDateMenuOpen.emit(event); };
        that.nativeElement.addEventListener('dateMenuOpen', that.eventHandlers['dateMenuOpenHandler']);
        that.eventHandlers['dateMenuCloseHandler'] = function (event) { that.onDateMenuClose.emit(event); };
        that.nativeElement.addEventListener('dateMenuClose', that.eventHandlers['dateMenuCloseHandler']);
        that.eventHandlers['viewMenuOpenHandler'] = function (event) { that.onViewMenuOpen.emit(event); };
        that.nativeElement.addEventListener('viewMenuOpen', that.eventHandlers['viewMenuOpenHandler']);
        that.eventHandlers['viewMenuCloseHandler'] = function (event) { that.onViewMenuClose.emit(event); };
        that.nativeElement.addEventListener('viewMenuClose', that.eventHandlers['viewMenuCloseHandler']);
        that.eventHandlers['notificationOpenHandler'] = function (event) { that.onNotificationOpen.emit(event); };
        that.nativeElement.addEventListener('notificationOpen', that.eventHandlers['notificationOpenHandler']);
        that.eventHandlers['notificationCloseHandler'] = function (event) { that.onNotificationClose.emit(event); };
        that.nativeElement.addEventListener('notificationClose', that.eventHandlers['notificationCloseHandler']);
    };
    /** @description Remove event listeners. */
    SchedulerComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['beginUpdateHandler']) {
            that.nativeElement.removeEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);
        }
        if (that.eventHandlers['endUpdateHandler']) {
            that.nativeElement.removeEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['itemChangeHandler']) {
            that.nativeElement.removeEventListener('itemChange', that.eventHandlers['itemChangeHandler']);
        }
        if (that.eventHandlers['itemChangingHandler']) {
            that.nativeElement.removeEventListener('itemChanging', that.eventHandlers['itemChangingHandler']);
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
        if (that.eventHandlers['viewChangeHandler']) {
            that.nativeElement.removeEventListener('viewChange', that.eventHandlers['viewChangeHandler']);
        }
        if (that.eventHandlers['viewChangingHandler']) {
            that.nativeElement.removeEventListener('viewChanging', that.eventHandlers['viewChangingHandler']);
        }
        if (that.eventHandlers['eventShortcutKeyHandler']) {
            that.nativeElement.removeEventListener('eventShortcutKey', that.eventHandlers['eventShortcutKeyHandler']);
        }
        if (that.eventHandlers['dateChangeHandler']) {
            that.nativeElement.removeEventListener('dateChange', that.eventHandlers['dateChangeHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['dropoverCellHandler']) {
            that.nativeElement.removeEventListener('dropoverCell', that.eventHandlers['dropoverCellHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
        if (that.eventHandlers['editDialogOpeningHandler']) {
            that.nativeElement.removeEventListener('editDialogOpening', that.eventHandlers['editDialogOpeningHandler']);
        }
        if (that.eventHandlers['editDialogOpenHandler']) {
            that.nativeElement.removeEventListener('editDialogOpen', that.eventHandlers['editDialogOpenHandler']);
        }
        if (that.eventHandlers['editDialogCloseHandler']) {
            that.nativeElement.removeEventListener('editDialogClose', that.eventHandlers['editDialogCloseHandler']);
        }
        if (that.eventHandlers['editDialogClosingHandler']) {
            that.nativeElement.removeEventListener('editDialogClosing', that.eventHandlers['editDialogClosingHandler']);
        }
        if (that.eventHandlers['contextMenuOpeningHandler']) {
            that.nativeElement.removeEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
        }
        if (that.eventHandlers['contextMenuOpenHandler']) {
            that.nativeElement.removeEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
        }
        if (that.eventHandlers['contextMenuCloseHandler']) {
            that.nativeElement.removeEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
        }
        if (that.eventHandlers['contextMenuClosingHandler']) {
            that.nativeElement.removeEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
        }
        if (that.eventHandlers['eventMenuOpeningHandler']) {
            that.nativeElement.removeEventListener('eventMenuOpening', that.eventHandlers['eventMenuOpeningHandler']);
        }
        if (that.eventHandlers['eventMenuOpenHandler']) {
            that.nativeElement.removeEventListener('eventMenuOpen', that.eventHandlers['eventMenuOpenHandler']);
        }
        if (that.eventHandlers['eventMenuCloseHandler']) {
            that.nativeElement.removeEventListener('eventMenuClose', that.eventHandlers['eventMenuCloseHandler']);
        }
        if (that.eventHandlers['eventMenuClosingHandler']) {
            that.nativeElement.removeEventListener('eventMenuClosing', that.eventHandlers['eventMenuClosingHandler']);
        }
        if (that.eventHandlers['dateMenuOpenHandler']) {
            that.nativeElement.removeEventListener('dateMenuOpen', that.eventHandlers['dateMenuOpenHandler']);
        }
        if (that.eventHandlers['dateMenuCloseHandler']) {
            that.nativeElement.removeEventListener('dateMenuClose', that.eventHandlers['dateMenuCloseHandler']);
        }
        if (that.eventHandlers['viewMenuOpenHandler']) {
            that.nativeElement.removeEventListener('viewMenuOpen', that.eventHandlers['viewMenuOpenHandler']);
        }
        if (that.eventHandlers['viewMenuCloseHandler']) {
            that.nativeElement.removeEventListener('viewMenuClose', that.eventHandlers['viewMenuCloseHandler']);
        }
        if (that.eventHandlers['notificationOpenHandler']) {
            that.nativeElement.removeEventListener('notificationOpen', that.eventHandlers['notificationOpenHandler']);
        }
        if (that.eventHandlers['notificationCloseHandler']) {
            that.nativeElement.removeEventListener('notificationClose', that.eventHandlers['notificationCloseHandler']);
        }
    };
    SchedulerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "autoScrollStep", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "colorScheme", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "currentTimeIndicator", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "currentTimeIndicatorInterval", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "contextMenuDataSource", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "contextMenuClipboardActions", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "eventTemplate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "eventCollectorTemplate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "eventRenderMode", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "eventTooltipTemplate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "cellTemplate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "dateCurrent", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "dataExport", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "dateSelectorFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "dayFormat", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableAutoScroll", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableDrag", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableDrop", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableResize", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableSelection", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableWindowEditor", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableContextMenu", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableEventMenu", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableViewMenu", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "disableDateMenu", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "dragFeedbackFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "dragOffset", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "filter", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "filterable", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "filterMode", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "events", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "firstDayOfWeek", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "footerTemplate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "groupByDate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "groupOrientation", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "groupTemplate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "groups", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hourEnd", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hourStart", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hourFormat", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "headerTemplate", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "headerDatePosition", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "headerNavigationStyle", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "headerViewPosition", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hideAllDay", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hideNonworkingWeekdays", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hideOtherMonthDays", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hideTodayButton", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hideViewMenuCheckableItems", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "hideWeekend", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "legendLocation", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "legendPosition", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "mouseWheelStep", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "horizontalScrollBarVisibility", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "max", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "maxEventsPerCell", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "min", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "minuteFormat", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "monthFormat", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "nonworkingDays", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "nonworkingHours", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "notificationInterval", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "resizeHandlesVisibility", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "resizeInterval", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "resources", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "restrictedDates", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "restrictedHours", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "scrollButtonsPosition", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "shadeUntilCurrentTime", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "showLegend", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "sortBy", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "sortFunction", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "sortOrder", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "spinButtonsDelay", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "spinButtonsInitialDelay", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "statuses", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "timelineHeaderFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "timelineDayScale", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "timeRulerTicks", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "timeZone", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "timeZones", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "tooltipDelay", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "tooltipOffset", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "verticalScrollBarVisibility", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "view", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "viewType", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "views", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "viewSelectorType", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "weekdayFormat", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "yearFormat", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "undoRedoSteps", null);
    tslib_1.__decorate([
        Input()
    ], SchedulerComponent.prototype, "windowCustomizationFunction", null);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onBeginUpdate", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEndUpdate", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemChange", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemChanging", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemClick", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemInsert", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemRemove", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemUpdate", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewChange", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewChanging", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventShortcutKey", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onDateChange", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onDropoverCell", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onResizeStart", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onResizeEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogOpening", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogClose", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogClosing", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuOpening", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuClose", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuClosing", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuOpening", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuClose", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuClosing", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onDateMenuOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onDateMenuClose", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewMenuOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewMenuClose", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onNotificationOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], SchedulerComponent.prototype, "onNotificationClose", void 0);
    SchedulerComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-scheduler, [smart-scheduler]'
        })
    ], SchedulerComponent);
    return SchedulerComponent;
}(BaseElement));
export { SchedulerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuc2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3NjaGVkdWxlci8iLCJzb3VyY2VzIjpbInNtYXJ0LnNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEM7SUFBd0MsOENBQVc7SUFDbEQsNEJBQVksR0FBMEI7UUFBdEMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBdzRCbEM7OENBQ3NDO1FBQzVCLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7OENBQ3NDO1FBQzVCLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7VUFJRTtRQUNRLGNBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7OztVQUlFO1FBQ1Esa0JBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7OztVQUlFO1FBQ1Esb0JBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7Ozs7VUFLRTtRQUNRLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7OztVQUdFO1FBQ1Esa0JBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7O1VBR0U7UUFDUSxrQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7O1VBSUU7UUFDUSxrQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7O1VBSUU7UUFDUSxrQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7O1VBSUU7UUFDUSxvQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7OztVQUtFO1FBQ1Esd0JBQWtCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0U7Ozs7VUFJRTtRQUNRLGtCQUFZLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkU7Ozs7OztVQU1FO1FBQ1EsaUJBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7Ozs7O1VBTUU7UUFDUSxlQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEU7Ozs7O1VBS0U7UUFDUSxvQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7Ozs7VUFNRTtRQUNRLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7Ozs7OztVQU1FO1FBQ1EsaUJBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7Ozs7O1VBTUU7UUFDUSx5QkFBbUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RTs7Ozs7O1VBTUU7UUFDUSxzQkFBZ0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzRTs7Ozs7O1VBTUU7UUFDUSx1QkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RTs7Ozs7O1VBTUU7UUFDUSx5QkFBbUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RTs7Ozs7O1VBTUU7UUFDUSwwQkFBb0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRTs7Ozs7O1VBTUU7UUFDUSx1QkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RTs7Ozs7O1VBTUU7UUFDUSx3QkFBa0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RTs7Ozs7O1VBTUU7UUFDUSwwQkFBb0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRTs7Ozs7VUFLRTtRQUNRLHdCQUFrQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdFOzs7OztVQUtFO1FBQ1EscUJBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7Ozs7VUFLRTtRQUNRLHNCQUFnQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNFOzs7OztVQUtFO1FBQ1Esd0JBQWtCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0U7OztVQUdFO1FBQ1Esb0JBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7O1VBR0U7UUFDUSxxQkFBZSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFOzs7VUFHRTtRQUNRLG9CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7OztVQUdFO1FBQ1EscUJBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7O1VBR0U7UUFDUSx3QkFBa0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RTs7O1VBR0U7UUFDUSx5QkFBbUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXRwQzdFLEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQTBCLENBQUM7O0lBQ3JELENBQUM7SUFLRDs7T0FFRztJQUNJLDRDQUFlLEdBQXRCLFVBQXVCLFVBQWU7UUFBZiwyQkFBQSxFQUFBLGVBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBYyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0UsS0FBSyxJQUFJLFlBQVksSUFBSSxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUdELHNCQUFJLDhDQUFjO1FBRmxCLHlFQUF5RTthQUV6RTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDO2FBQ0QsVUFBbUIsS0FBYTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDJDQUFXO1FBRmYsOEdBQThHO2FBRTlHO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7YUFDRCxVQUFnQixLQUFlO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksb0RBQW9CO1FBRnhCLDhJQUE4STthQUU5STtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pGLENBQUM7YUFDRCxVQUF5QixLQUFjO1lBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw0REFBNEI7UUFGaEMsNkZBQTZGO2FBRTdGO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekYsQ0FBQzthQUNELFVBQWlDLEtBQWE7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFEQUFxQjtRQUZ6Qix1R0FBdUc7YUFFdkc7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRixDQUFDO2FBQ0QsVUFBMEIsS0FBWTtZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25GLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMkRBQTJCO1FBRi9CLG9KQUFvSjthQUVwSjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hGLENBQUM7YUFDRCxVQUFnQyxLQUFjO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw2Q0FBYTtRQUZqQiw0ZEFBNGQ7YUFFNWQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzthQUNELFVBQWtCLEtBQVU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxzREFBc0I7UUFGMUIsc2VBQXNlO2FBRXRlO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkYsQ0FBQzthQUNELFVBQTJCLEtBQVU7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLCtDQUFlO1FBRm5CLGdhQUFnYTthQUVoYTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDO2FBQ0QsVUFBb0IsS0FBK0I7WUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxvREFBb0I7UUFGeEIsMmlCQUEyaUI7YUFFM2lCO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDakYsQ0FBQzthQUNELFVBQXlCLEtBQVU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDRDQUFZO1FBRmhCLHVjQUF1YzthQUV2YztZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDO2FBQ0QsVUFBaUIsS0FBVTtZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDJDQUFXO1FBRmYsNEVBQTRFO2FBRTVFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7YUFDRCxVQUFnQixLQUFvQjtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDBDQUFVO1FBRmQsOERBQThEO2FBRTlEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLENBQUM7YUFDRCxVQUFlLEtBQTBCO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMENBQVU7UUFGZCxnS0FBZ0s7YUFFaEs7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzthQUNELFVBQWUsS0FBdUI7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwwREFBMEI7UUFGOUIsd0tBQXdLO2FBRXhLO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkYsQ0FBQzthQUNELFVBQStCLEtBQVU7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHlDQUFTO1FBRmIsMkVBQTJFO2FBRTNFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7YUFDRCxVQUFjLEtBQXlCO1lBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksd0NBQVE7UUFGWixvREFBb0Q7YUFFcEQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckUsQ0FBQzthQUNELFVBQWEsS0FBYztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGlEQUFpQjtRQUZyQiw2RkFBNkY7YUFFN0Y7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM5RSxDQUFDO2FBQ0QsVUFBc0IsS0FBYztZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQy9FLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMkNBQVc7UUFGZixnREFBZ0Q7YUFFaEQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBVztRQUZmLGdEQUFnRDthQUVoRDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDO2FBQ0QsVUFBZ0IsS0FBYztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDZDQUFhO1FBRmpCLGdEQUFnRDthQUVoRDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDO2FBQ0QsVUFBa0IsS0FBYztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGdEQUFnQjtRQUZwQixnREFBZ0Q7YUFFaEQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDO2FBQ0QsVUFBcUIsS0FBYztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksbURBQW1CO1FBRnZCLDhEQUE4RDthQUU5RDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hGLENBQUM7YUFDRCxVQUF3QixLQUFjO1lBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDakYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxrREFBa0I7UUFGdEIsc0VBQXNFO2FBRXRFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDL0UsQ0FBQzthQUNELFVBQXVCLEtBQWM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNoRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGdEQUFnQjtRQUZwQixrR0FBa0c7YUFFbEc7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDO2FBQ0QsVUFBcUIsS0FBYztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksK0NBQWU7UUFGbkIsNEZBQTRGO2FBRTVGO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7YUFDRCxVQUFvQixLQUFjO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksK0NBQWU7UUFGbkIsNEZBQTRGO2FBRTVGO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7YUFDRCxVQUFvQixLQUFjO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMERBQTBCO1FBRjlCLHFIQUFxSDthQUVySDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZGLENBQUM7YUFDRCxVQUErQixLQUFVO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwwQ0FBVTtRQUZkLGlGQUFpRjthQUVqRjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxDQUFDO2FBQ0QsVUFBZSxLQUFVO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksc0NBQU07UUFGViw2dkNBQTZ2QzthQUU3dkM7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkUsQ0FBQzthQUNELFVBQVcsS0FBVTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDBDQUFVO1FBRmQsK0VBQStFO2FBRS9FO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLENBQUM7YUFDRCxVQUFlLEtBQVU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwwQ0FBVTtRQUZkLCtDQUErQzthQUUvQztZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxDQUFDO2FBQ0QsVUFBZSxLQUFpQjtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHNDQUFNO1FBRlYsNEVBQTRFO2FBRTVFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25FLENBQUM7YUFDRCxVQUFXLEtBQXVCO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksOENBQWM7UUFGbEIsK0ZBQStGO2FBRS9GO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNFLENBQUM7YUFDRCxVQUFtQixLQUFhO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksOENBQWM7UUFGbEIsZ05BQWdOO2FBRWhOO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNFLENBQUM7YUFDRCxVQUFtQixLQUFVO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMkNBQVc7UUFGZiwwRUFBMEU7YUFFMUU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxnREFBZ0I7UUFGcEIsd0RBQXdEO2FBRXhEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzthQUNELFVBQXFCLEtBQWdDO1lBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw2Q0FBYTtRQUZqQix3Z0JBQXdnQjthQUV4Z0I7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzthQUNELFVBQWtCLEtBQVU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxzQ0FBTTtRQUZWLDRFQUE0RTthQUU1RTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRSxDQUFDO2FBQ0QsVUFBVyxLQUFVO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksdUNBQU87UUFGWCw2RkFBNkY7YUFFN0Y7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEUsQ0FBQzthQUNELFVBQVksS0FBYTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHlDQUFTO1FBRmIsK0ZBQStGO2FBRS9GO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7YUFDRCxVQUFjLEtBQWE7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwwQ0FBVTtRQUZkLDBFQUEwRTthQUUxRTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxDQUFDO2FBQ0QsVUFBZSxLQUEwQjtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDhDQUFjO1FBRmxCLDhNQUE4TTthQUU5TTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDO2FBQ0QsVUFBbUIsS0FBVTtZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGtEQUFrQjtRQUZ0QixtR0FBbUc7YUFFbkc7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMvRSxDQUFDO2FBQ0QsVUFBdUIsS0FBa0M7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNoRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFEQUFxQjtRQUZ6Qiw4RUFBOEU7YUFFOUU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRixDQUFDO2FBQ0QsVUFBMEIsS0FBcUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGtEQUFrQjtRQUZ0QiwyR0FBMkc7YUFFM0c7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMvRSxDQUFDO2FBQ0QsVUFBdUIsS0FBa0M7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNoRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDBDQUFVO1FBRmQsd0dBQXdHO2FBRXhHO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLENBQUM7YUFDRCxVQUFlLEtBQWM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxzREFBc0I7UUFGMUIsbUdBQW1HO2FBRW5HO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkYsQ0FBQzthQUNELFVBQTJCLEtBQWM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGtEQUFrQjtRQUZ0QiwwWkFBMFo7YUFFMVo7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMvRSxDQUFDO2FBQ0QsVUFBdUIsS0FBYztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hGLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksK0NBQWU7UUFGbkIsMkVBQTJFO2FBRTNFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7YUFDRCxVQUFvQixLQUFjO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMERBQTBCO1FBRjlCLHdHQUF3RzthQUV4RztZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZGLENBQUM7YUFDRCxVQUErQixLQUFjO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBVztRQUZmLDBFQUEwRTthQUUxRTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDO2FBQ0QsVUFBZ0IsS0FBYztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDhDQUFjO1FBRmxCLGtLQUFrSzthQUVsSztZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDO2FBQ0QsVUFBbUIsS0FBOEI7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw4Q0FBYztRQUZsQixnSkFBZ0o7YUFFaEo7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzthQUNELFVBQW1CLEtBQThCO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksOENBQWM7UUFGbEIsb0xBQW9MO2FBRXBMO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNFLENBQUM7YUFDRCxVQUFtQixLQUFhO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksNkRBQTZCO1FBRmpDLDRFQUE0RTthQUU1RTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFGLENBQUM7YUFDRCxVQUFrQyxLQUFvQztZQUNyRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNGLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksc0NBQU07UUFGViwrREFBK0Q7YUFFL0Q7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkUsQ0FBQzthQUNELFVBQVcsS0FBYTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLG1DQUFHO1FBRlAsdUVBQXVFO2FBRXZFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hFLENBQUM7YUFDRCxVQUFRLEtBQW9CO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksZ0RBQWdCO1FBRnBCLHNOQUFzTjthQUV0TjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdFLENBQUM7YUFDRCxVQUFxQixLQUFvQjtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksbUNBQUc7UUFGUCx1RUFBdUU7YUFFdkU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDaEUsQ0FBQzthQUNELFVBQVEsS0FBb0I7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDakUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx3Q0FBUTtRQUZaLHVKQUF1SjthQUV2SjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRSxDQUFDO2FBQ0QsVUFBYSxLQUFVO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksNENBQVk7UUFGaEIsMEVBQTBFO2FBRTFFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pFLENBQUM7YUFDRCxVQUFpQixLQUFtQjtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDJDQUFXO1FBRmYsOEVBQThFO2FBRTlFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7YUFDRCxVQUFnQixLQUFrQjtZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDhDQUFjO1FBRmxCLG1QQUFtUDthQUVuUDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDO2FBQ0QsVUFBbUIsS0FBVTtZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLCtDQUFlO1FBRm5CLHVUQUF1VDthQUV2VDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDO2FBQ0QsVUFBb0IsS0FBVTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLG9EQUFvQjtRQUZ4QiwyR0FBMkc7YUFFM0c7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRixDQUFDO2FBQ0QsVUFBeUIsS0FBYTtZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xGLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksdURBQXVCO1FBRjNCLG9FQUFvRTthQUVwRTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BGLENBQUM7YUFDRCxVQUE0QixLQUE4QjtZQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JGLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksOENBQWM7UUFGbEIsa01BQWtNO2FBRWxNO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNFLENBQUM7YUFDRCxVQUFtQixLQUFhO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUkseUNBQVM7UUFGYiw2RUFBNkU7YUFFN0U7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQzthQUNELFVBQWMsS0FBMEI7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwrQ0FBZTtRQUZuQixzS0FBc0s7YUFFdEs7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzthQUNELFVBQW9CLEtBQVU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwrQ0FBZTtRQUZuQixzS0FBc0s7YUFFdEs7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzthQUNELFVBQW9CLEtBQVU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBVztRQUZmLGtJQUFrSTthQUVsSTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDO2FBQ0QsVUFBZ0IsS0FBYztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFEQUFxQjtRQUZ6Qix3SEFBd0g7YUFFeEg7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRixDQUFDO2FBQ0QsVUFBMEIsS0FBcUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFEQUFxQjtRQUZ6QiwySEFBMkg7YUFFM0g7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRixDQUFDO2FBQ0QsVUFBMEIsS0FBYztZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25GLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMENBQVU7UUFGZCx3U0FBd1M7YUFFeFM7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzthQUNELFVBQWUsS0FBYztZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHNDQUFNO1FBRlYsOEpBQThKO2FBRTlKO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25FLENBQUM7YUFDRCxVQUFXLEtBQWE7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw0Q0FBWTtRQUZoQixxS0FBcUs7YUFFcks7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzthQUNELFVBQWlCLEtBQVU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx5Q0FBUztRQUZiLHVQQUF1UDthQUV2UDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDO2FBQ0QsVUFBYyxLQUF5QjtZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGdEQUFnQjtRQUZwQixvTEFBb0w7YUFFcEw7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDO2FBQ0QsVUFBcUIsS0FBYTtZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksdURBQXVCO1FBRjNCLGtMQUFrTDthQUVsTDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BGLENBQUM7YUFDRCxVQUE0QixLQUFhO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx3Q0FBUTtRQUZaLHVIQUF1SDthQUV2SDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRSxDQUFDO2FBQ0QsVUFBYSxLQUF5QjtZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFDQUFLO1FBRlQsNkRBQTZEO2FBRTdEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xFLENBQUM7YUFDRCxVQUFVLEtBQWE7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw0REFBNEI7UUFGaEMsMkhBQTJIO2FBRTNIO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekYsQ0FBQzthQUNELFVBQWlDLEtBQVU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGdEQUFnQjtRQUZwQixxRUFBcUU7YUFFckU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDO2FBQ0QsVUFBcUIsS0FBZ0M7WUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM5RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDhDQUFjO1FBRmxCLGdLQUFnSzthQUVoSztZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHdDQUFRO1FBRlosa0lBQWtJO2FBRWxJO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JFLENBQUM7YUFDRCxVQUFhLEtBQXdCO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUkseUNBQVM7UUFGYiw2VEFBNlQ7YUFFN1Q7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQzthQUNELFVBQWMsS0FBVTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDRDQUFZO1FBRmhCLDJGQUEyRjthQUUzRjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDO2FBQ0QsVUFBaUIsS0FBYTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDZDQUFhO1FBRmpCLDhEQUE4RDthQUU5RDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDO2FBQ0QsVUFBa0IsS0FBZTtZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDJEQUEyQjtRQUYvQiwwRUFBMEU7YUFFMUU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RixDQUFDO2FBQ0QsVUFBZ0MsS0FBa0M7WUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLG9DQUFJO1FBRlIseU1BQXlNO2FBRXpNO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pFLENBQUM7YUFDRCxVQUFTLEtBQWE7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx3Q0FBUTtRQUZaLHlMQUF5TDthQUV6TDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRSxDQUFDO2FBQ0QsVUFBYSxLQUF3QjtZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFDQUFLO1FBRlQsdWdDQUF1Z0M7YUFFdmdDO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xFLENBQUM7YUFDRCxVQUFVLEtBQXFCO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25FLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksZ0RBQWdCO1FBRnBCLDhGQUE4RjthQUU5RjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdFLENBQUM7YUFDRCxVQUFxQixLQUFnQztZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksNkNBQWE7UUFGakIsK0VBQStFO2FBRS9FO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLENBQUM7YUFDRCxVQUFrQixLQUFvQjtZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDBDQUFVO1FBRmQsNEdBQTRHO2FBRTVHO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLENBQUM7YUFDRCxVQUFlLEtBQWlCO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMkNBQVc7UUFGZiwrREFBK0Q7YUFFL0Q7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw2Q0FBYTtRQUZqQiw2TEFBNkw7YUFFN0w7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzthQUNELFVBQWtCLEtBQWE7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyREFBMkI7UUFGL0IsZ2lCQUFnaUI7YUFFaGlCO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsQ0FBQzthQUNELFVBQWdDLEtBQVU7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RixDQUFDOzs7T0FIQTtJQWtSRDs7TUFFRTtJQUNRLHFDQUFRLEdBQWYsVUFBZ0IsUUFBYTtRQUE3QixpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSx3Q0FBVyxHQUFsQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7Ozs7TUFNRTtJQUNRLHdDQUFXLEdBQWxCLFVBQW1CLEtBQWEsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxPQUFlLEVBQUUsTUFBZTtRQUFwRyxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLHNDQUFTLEdBQWhCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxvQ0FBTyxHQUFkLFVBQWUsV0FBcUI7UUFBcEMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSx1Q0FBVSxHQUFqQixVQUFrQixVQUFrQixFQUFFLFFBQWM7UUFBcEQsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN2RDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztJQUVHO0lBQ1UsMENBQWEsR0FBMUI7Ozs7Ozs7d0JBQ08saUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQ0FDbEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7O0lBRUc7SUFDVSx5Q0FBWSxHQUF6Qjs7Ozs7Ozt3QkFDTyxpQkFBaUIsR0FBRzs0QkFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29DQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO29DQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjs7OztJQUlHO0lBQ1UsbURBQXNCLEdBQW5DLFVBQW9DLENBQUMsRUFBRSxDQUFDOzs7Ozs7O3dCQUNqQyxpQkFBaUIsR0FBRzs0QkFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29DQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQ0FDL0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7Ozs7SUFJRztJQUNVLDJEQUE4QixHQUEzQyxVQUE0QyxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozt3QkFDekMsaUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ3ZFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDbkIsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDO3dCQUNhLHFCQUFNLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBRXhDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVKOztJQUVHO0lBQ1UscUNBQVEsR0FBckI7Ozs7Ozs7d0JBQ08saUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQ0FDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7TUFDRTtJQUNRLHVDQUFVLEdBQWpCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxzQ0FBUyxHQUFoQixVQUFpQixLQUFhO1FBQTlCLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxzQ0FBUyxHQUFoQixVQUFpQixLQUFhO1FBQTlCLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztJQUdHO0lBQ1UsMENBQWEsR0FBMUIsVUFBMkIsUUFBUTs7Ozs7Ozt3QkFDNUIsaUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0NBQzFELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDbkIsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDO3dCQUNhLHFCQUFNLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBRXhDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVKOzs7TUFHRTtJQUNRLHdDQUFXLEdBQWxCLFVBQW1CLFFBQWEsRUFBRSxLQUFjO1FBQWhELGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSx3Q0FBVyxHQUFsQixVQUFtQixLQUFVLEVBQUUsUUFBYTtRQUE1QyxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ25EO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSx3Q0FBVyxHQUFsQixVQUFtQixLQUFVO1FBQTdCLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztJQUdHO0lBQ1UsK0NBQWtCLEdBQS9CLFVBQWdDLFFBQVE7Ozs7Ozs7d0JBQ2pDLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7b0NBQy9ELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDbkIsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDO3dCQUNhLHFCQUFNLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBRXhDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVKOzs7TUFHRTtJQUNRLDhDQUFpQixHQUF4QixVQUF5QixRQUFhLEVBQUUsWUFBaUI7UUFBekQsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7OztNQUlFO0lBQ1EsaURBQW9CLEdBQTNCLFVBQTRCLFFBQWEsRUFBRSxZQUFpQixFQUFFLFlBQWlCO1FBQS9FLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakY7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbEYsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxpREFBb0IsR0FBM0IsVUFBNEIsUUFBYSxFQUFFLEtBQVU7UUFBckQsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLHVDQUFVLEdBQWpCLFVBQWtCLEtBQVU7UUFBNUIsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1Esd0NBQVcsR0FBbEI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1Esa0NBQUssR0FBWjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlCO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7O01BSUU7SUFDUSx5Q0FBWSxHQUFuQixVQUFvQixJQUFVLEVBQUUsWUFBc0IsRUFBRSxVQUFvQjtRQUE1RSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNuRTthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLDJDQUFjLEdBQXJCLFVBQXNCLElBQVU7UUFBaEMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLDBDQUFhLEdBQXBCLFVBQXFCLEtBQVU7UUFBL0IsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSw2Q0FBZ0IsR0FBdkIsVUFBd0IsT0FBZSxFQUFFLGFBQWtCO1FBQTNELGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMvRDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLCtDQUFrQixHQUF6QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0M7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSx3Q0FBVyxHQUFsQixVQUFtQixRQUFhLEVBQUUsS0FBYTtRQUEvQyxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25EO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7Ozs7TUFJRTtJQUNRLCtDQUFrQixHQUF6QixVQUEwQixRQUFhLEVBQUUsUUFBYyxFQUFFLE1BQVk7UUFBckUsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNyRTthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7TUFHRTtJQUNRLDRDQUFlLEdBQXRCLFVBQXVCLFFBQWEsRUFBRSxJQUFZO1FBQWxELGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSw2Q0FBZ0IsR0FBdkIsVUFBd0IsUUFBYSxFQUFFLElBQVk7UUFBbkQsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O0lBR0c7SUFDVSw2Q0FBZ0IsR0FBN0IsVUFBOEIsSUFBSTs7Ozs7Ozt3QkFDM0IsaUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDekQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7O01BRUU7SUFDUSw2Q0FBZ0IsR0FBdkIsVUFBd0IsUUFBYTtRQUFyQyxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsOENBQWlCLEdBQXhCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7SUFHRztJQUNVLDZDQUFnQixHQUE3QixVQUE4QixJQUFJOzs7Ozs7O3dCQUMzQixpQkFBaUIsR0FBRzs0QkFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29DQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29DQUN6RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjs7O0lBR0c7SUFDVSw2Q0FBZ0IsR0FBN0IsVUFBOEIsSUFBSTs7Ozs7Ozt3QkFDM0IsaUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDekQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7OztJQUdHO0lBQ1UsOENBQWlCLEdBQTlCLFVBQStCLFFBQVE7Ozs7Ozs7d0JBQ2hDLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7b0NBQzlELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDbkIsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDO3dCQUNhLHFCQUFNLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBRXhDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVKOztJQUVHO0lBQ1Usa0RBQXFCLEdBQWxDOzs7Ozs7O3dCQUNPLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQ0FDMUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7O0lBRUc7SUFDVSxvQ0FBTyxHQUFwQjs7Ozs7Ozt3QkFDTyxpQkFBaUIsR0FBRzs0QkFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29DQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO29DQUM1QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjs7SUFFRztJQUNVLG9DQUFPLEdBQXBCOzs7Ozs7O3dCQUNPLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7b0NBQzVDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDbkIsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDO3dCQUNhLHFCQUFNLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBRXhDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVKOzs7SUFHRztJQUNVLGlDQUFJLEdBQWpCLFVBQWtCLElBQUs7Ozs7Ozs7d0JBQ2hCLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUM3QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjs7O0lBR0c7SUFDVSxpQ0FBSSxHQUFqQixVQUFrQixJQUFLOzs7Ozs7O3dCQUNoQixpQkFBaUIsR0FBRzs0QkFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29DQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBR0osc0JBQUksMENBQVU7YUFBZDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRSxDQUFDOzs7T0FBQTtJQUVELHFDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUUsNENBQWUsR0FBZjtRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGNBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDeEQsS0FBSyxJQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7Z0JBQy9CLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDO2lCQUM5RDthQUNEO1NBQ0Q7SUFDRixDQUFDO0lBRUQsd0NBQXdDO0lBQ2hDLG1DQUFNLEdBQWQ7UUFDTyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0RyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUU3RixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4RyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFFekcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFFbkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFFekcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFFM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFFM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUVqRyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUVuRyxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUV2RyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFFakcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4RyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBRWpHLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoSCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBRXZHLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsSCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0lBRTFHLENBQUM7SUFFRCwyQ0FBMkM7SUFDbkMscUNBQVEsR0FBaEI7UUFDTyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7U0FDaEc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUM1RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDdEY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7U0FDOUY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztTQUMxRztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztTQUN4RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7U0FDaEc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUM1RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7U0FDNUc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1NBQ3RHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztTQUN4RztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7U0FDNUc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1NBQzlHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztTQUN4RztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7U0FDMUc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1NBQzlHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztTQUMxRztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztTQUN0RztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7U0FDMUc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztTQUNsRztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7U0FDbEc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztTQUNwRztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7U0FDMUc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1NBQzVHO0lBRUYsQ0FBQzs7Z0JBNXBFZ0IsVUFBVTs7SUFvQjNCO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzBFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7bUVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzJEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7b0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs2REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2tFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7c0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3lEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsyREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7aUVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtnRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs2REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3dFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3FEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTttRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtvRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3lEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs0REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MkVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2lEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7OERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtpREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3FFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzZEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21FQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7bUVBR1A7SUFP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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IFNjaGVkdWxlckV2ZW50UmVuZGVyTW9kZSwgU2NoZWR1bGVyUmVwZWF0RnJlcSwgU2NoZWR1bGVyTm90aWZpY2F0aW9uVHlwZSwgU2NoZWR1bGVyRGF5Rm9ybWF0LCBGaWx0ZXJNb2RlLCBTY2hlZHVsZXJHcm91cE9yaWVudGF0aW9uLCBTY2hlZHVsZXJIb3VyRm9ybWF0LCBTY2hlZHVsZXJIZWFkZXJEYXRlUG9zaXRpb24sIFNjaGVkdWxlckhlYWRlck5hdmlnYXRpb25TdHlsZSwgU2NoZWR1bGVySGVhZGVyVmlld1Bvc2l0aW9uLCBTY2hlZHVsZXJMZWdlbmRMb2NhdGlvbiwgU2NoZWR1bGVyTGVnZW5kUG9zaXRpb24sIEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBNaW51dGVGb3JtYXQsIE1vbnRoRm9ybWF0LCBSZXNpemVIYW5kbGVzVmlzaWJpbGl0eSwgU2NoZWR1bGVyUmVzb3VyY2VTb3J0T3JkZXIsIFNjaGVkdWxlclNjcm9sbEJ1dHRvbnNQb3NpdGlvbiwgU2NoZWR1bGVyU29ydE9yZGVyLCBTY2hlZHVsZXJUaW1lbGluZURheVNjYWxlLCBTY2hlZHVsZXJUaW1lWm9uZSwgVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBTY2hlZHVsZXJWaWV3VHlwZSwgU2NoZWR1bGVyVmlld3MsIFNjaGVkdWxlclZpZXdTZWxlY3RvclR5cGUsIFdlZWtEYXlGb3JtYXQsIFllYXJGb3JtYXQsIFNjaGVkdWxlckRhdGFFeHBvcnQsIFNjaGVkdWxlckV2ZW50LCBTY2hlZHVsZXJFdmVudFJlcGVhdCwgU2NoZWR1bGVyTm90aWZpY2F0aW9uLCBTY2hlZHVsZXJSZXNvdXJjZSwgU2NoZWR1bGVyU3RhdHVzZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBTY2hlZHVsZXJFdmVudFJlbmRlck1vZGUsIFNjaGVkdWxlclJlcGVhdEZyZXEsIFNjaGVkdWxlck5vdGlmaWNhdGlvblR5cGUsIFNjaGVkdWxlckRheUZvcm1hdCwgRmlsdGVyTW9kZSwgU2NoZWR1bGVyR3JvdXBPcmllbnRhdGlvbiwgU2NoZWR1bGVySG91ckZvcm1hdCwgU2NoZWR1bGVySGVhZGVyRGF0ZVBvc2l0aW9uLCBTY2hlZHVsZXJIZWFkZXJOYXZpZ2F0aW9uU3R5bGUsIFNjaGVkdWxlckhlYWRlclZpZXdQb3NpdGlvbiwgU2NoZWR1bGVyTGVnZW5kTG9jYXRpb24sIFNjaGVkdWxlckxlZ2VuZFBvc2l0aW9uLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgTWludXRlRm9ybWF0LCBNb250aEZvcm1hdCwgUmVzaXplSGFuZGxlc1Zpc2liaWxpdHksIFNjaGVkdWxlclJlc291cmNlU29ydE9yZGVyLCBTY2hlZHVsZXJTY3JvbGxCdXR0b25zUG9zaXRpb24sIFNjaGVkdWxlclNvcnRPcmRlciwgU2NoZWR1bGVyVGltZWxpbmVEYXlTY2FsZSwgU2NoZWR1bGVyVGltZVpvbmUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgU2NoZWR1bGVyVmlld1R5cGUsIFNjaGVkdWxlclZpZXdzLCBTY2hlZHVsZXJWaWV3U2VsZWN0b3JUeXBlLCBXZWVrRGF5Rm9ybWF0LCBZZWFyRm9ybWF0LCBTY2hlZHVsZXJEYXRhRXhwb3J0LCBTY2hlZHVsZXJFdmVudCwgU2NoZWR1bGVyRXZlbnRSZXBlYXQsIFNjaGVkdWxlck5vdGlmaWNhdGlvbiwgU2NoZWR1bGVyUmVzb3VyY2UsIFNjaGVkdWxlclN0YXR1c2UsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1zY2hlZHVsZXIsIFtzbWFydC1zY2hlZHVsZXJdJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlckNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxTY2hlZHVsZXI+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBTY2hlZHVsZXI7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFNjaGVkdWxlcjtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8U2NoZWR1bGVyPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LXNjaGVkdWxlcicpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2Nyb2xsIHNwZWVkIHdoaWxlIGRyYWdnaW5nIGFuIGV2ZW50LiAgKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TY3JvbGxTdGVwKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1Njcm9sbFN0ZXAodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb2xvciBzY2hlbWUgZm9yIHRoZSBldmVudCBiYWNrZ3JvdW5kIHNlbGVjdG9yIGluIHRoZSBldmVudCB3aW5kb3cgZWRpdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGNvbG9yU2NoZW1lKCk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbG9yU2NoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xvclNjaGVtZSh2YWx1ZTogc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sb3JTY2hlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy9EaXNhYmxlcyB0aGUgY3VycmVudCB0aW1lIGluZGljYXRvci4gQ3VycmVudCB0aW1lIGluZGljYXRvciBzaG93cyB0aGUgY3VycmVudCB0aW1lIGluIHRoZSBhcHByb3ByaWF0ZSB2aWV3IGNlbGxzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWVJbmRpY2F0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlZnJlc2ggaW50ZXJ2YWwgaW4gc2Vjb25kcyBmb3IgdGhlIGN1cnJlbnRUaW1lSW5kaWNhdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZUluZGljYXRvckludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGNvbnRleHQgbWVudSBpdGVtcyB0aGF0IGFyZSB2aXNpYmxlIHdoZW4gdGhlIENvbnRleHQgTWVudSBpcyBvcGVuZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZXh0TWVudURhdGFTb3VyY2UoKTogYW55W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVEYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZXh0TWVudURhdGFTb3VyY2UodmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51RGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNsaXBib2FyZCBzaG9ydGN1dHMgZm9yIGNvcHkvcGFzdGUvY3V0IGFjdGlvbiBvZiBldmVudHMgYXJlIHZpc2libGUgaW4gdGhlIFNjaGVkdWxlciBjb250ZXh0IG1lbnUgb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udGV4dE1lbnVDbGlwYm9hcmRBY3Rpb25zKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVDbGlwYm9hcmRBY3Rpb25zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZXh0TWVudUNsaXBib2FyZEFjdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVDbGlwYm9hcmRBY3Rpb25zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGV2ZW50IGVsZW1lbnRzLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgZXZlbnRzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGV2ZW50IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBldmVudENvbnRlbnQgLSB0aGUgY29udGVudCBob2xkZXIgZm9yIHRoZSBldmVudCxldmVudE9iaiAtIHRoZSBldmVudCBvYmplY3QuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50VGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiB0aGUgZXZlbnQgY29sbGVjdG9yIGVsZW1lbnRzLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgZXZlbnRzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGV2ZW50IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBldmVudENvbnRlbnQgLSB0aGUgY29udGVudCBob2xkZXIgZm9yIHRoZSBldmVudCxldmVudE9iaiAtIHRoZSBldmVudCBvYmplY3QuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50Q29sbGVjdG9yVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgaG93IHRoZSBldmVudHMgaW5zaWRlIHRoZSBTY2hlZHVsZXIgYXJlIHJlbmRlcmVkLmNsYXNzaWMgLSB0aGUgZXZlbnRzIGFyZSBhcnJhbmdlZCBuZXh0IHRvIGVhY2ggb3RoZXIgYW5kIHRyeSB0byBmaXQgaW5zaWRlIHRoZSBjZWxscy5tb2Rlcm4gLSB0aGUgZXZlbnRzIG9iZXkgdGhlIENTUyBwcm9wZXJ0eSB0aGF0IGRldGVybWluZXMgdGhlaXIgc2l6ZSBhbmQgaWYgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIGluc2lkZSB0aGUgY2VsbCBmb3IgYWxsIGV2ZW50cyB0byBhcHBlYXIsIGFuIGV2ZW50IGNvbGxlY3RvciBpcyBjcmVhdGVkIHRvIGhvbGQgdGhlIHJlc3Qgb2YgdGhlIGV2ZW50cy4gT24gbW9iaWxlIHBob25lcyBvbmx5IGNvbGxlY3RvcnMgYXJlIGNyZWF0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBldmVudFJlbmRlck1vZGUoKTogU2NoZWR1bGVyRXZlbnRSZW5kZXJNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50UmVuZGVyTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRSZW5kZXJNb2RlKHZhbHVlOiBTY2hlZHVsZXJFdmVudFJlbmRlck1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRSZW5kZXJNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGV2ZW50IG1lbnUgaXRlbXMgKHRvb2x0aXApLiBXaGVuIGNsaWNrZWQgb24gYW4gZXZlbnQgZWxlbWVudCBhbiBldmVudCBtZW51IHdpdGggZGV0YWlscyBvcGVucy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGV2ZW50cyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBldmVudCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogZXZlbnRDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgZXZlbnQsZXZlbnRPYmogLSB0aGUgZXZlbnQgb2JqZWN0Li4gV2hlbiB1c2luZyBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGl0J3MgcG9zc2libGUgdG8gYWRkIHByb3BlcnR5IGJpbmRpbmdzIGluc2lkZSB0aGUgdGVtcGxhdGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byB0aGUgY29ycmVzcG9uZGluZyBvYmplY3QgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGV2ZW50VG9vbHRpcFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFRvb2x0aXBUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRUb29sdGlwVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFRvb2x0aXBUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSB0aW1lbGluZSBjZWxscy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGNlbGxzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGNlbGwgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGNlbGxDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgY2VsbCxjZWxsRGF0ZSAtIHRoZSBjZWxsIGRhdGUuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNlbGxUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2VsbFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jZWxsVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY3VycmVudGx5IHZpc2libGUgZGF0ZSBmb3IgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGVDdXJyZW50KCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZUN1cnJlbnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVDdXJyZW50KHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVDdXJyZW50ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIFNjaGVkdWxlcnMncyBEYXRhIEV4cG9ydCBvcHRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YUV4cG9ydCgpOiBTY2hlZHVsZXJEYXRhRXhwb3J0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFFeHBvcnQodmFsdWU6IFNjaGVkdWxlckRhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBldmVudHMgdGhhdCB3aWxsIGJlIGxvYWRlZCBpbnNpZGUgdGhlIFRpbWVsaW5lLiBFYWNoIGV2ZW50IHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBTY2hlZHVsZXJFdmVudFtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IFNjaGVkdWxlckV2ZW50W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSB0ZXh0IGluc2lkZSB0aGUgZGF0ZSBzZWxlY3RvciBsb2NhdGVkIGluIHRoZSBoZWFkZXIuIFRoZSBjYWxsYmFjayBoYXMgb25lIHBhcmFtZXRlciAtIHRoZSBjdXJyZW50IGRhdGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlU2VsZWN0b3JGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZVNlbGVjdG9yRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVTZWxlY3RvckZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZVNlbGVjdG9yRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGF5IGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW4gdGhlIHRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF5Rm9ybWF0KCk6IFNjaGVkdWxlckRheUZvcm1hdCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXlGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRheUZvcm1hdCh2YWx1ZTogU2NoZWR1bGVyRGF5Rm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgYXV0byBzY3JvbGxpbmcgb2YgdGhlIHRpbWVsaW5lIHdoaWxlIGRyYWdnaW5nL3Jlc2l6aW5nIGFuIGV2ZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUF1dG9TY3JvbGwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQXV0b1Njcm9sbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZUF1dG9TY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUF1dG9TY3JvbGwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgZHJhZ2dpbmcgb2YgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZURyYWcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRHJhZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZURyYWcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURyYWcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgZHJvcHBpbmcgb2YgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZURyb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRHJvcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZURyb3AodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURyb3AgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgcmVzaXppbmcgb2YgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVJlc2l6ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVSZXNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVSZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVJlc2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgY2VsbCBzZWxlY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVNlbGVjdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VsZWN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSB3aW5kb3cgZWRpdG9yIGZvciB0aGUgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVdpbmRvd0VkaXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVXaW5kb3dFZGl0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVXaW5kb3dFZGl0b3IodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVdpbmRvd0VkaXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgY29udGV4dCBtZW51IG9mIHRoZSBldmVudHMgYW5kIGNlbGxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUNvbnRleHRNZW51KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUNvbnRleHRNZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlQ29udGV4dE1lbnUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUNvbnRleHRNZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBldmVudCBtZW51IHRoYXQgYXBwZWFycyB3aGVuIGFuIGV2ZW50L2NvbGxlY3RvciBoYXMgYmVlbiBjbGlja2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUV2ZW50TWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVFdmVudE1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVFdmVudE1lbnUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUV2ZW50TWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgdmlldyBtZW51IHRoYXQgYWxsb3dzIHRvIHNlbGVjdCB0aGUgY3VycmVudCBTY2hlZHVsZXIgdmlldy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVWaWV3TWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVWaWV3TWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVZpZXdNZW51KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVWaWV3TWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgZGF0ZSBtZW51IHRoYXQgYWxsb3dzIHRvIHNlbGVjdCB0aGUgY3VycmVudCBTY2hlZHVsZXIgZGF0ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVEYXRlTWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEYXRlTWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZURhdGVNZW51KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEYXRlTWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBkcmFnIGZlZWRiYWNrIHRoYXQgYXBwZWFycyB3aGVuIGFuIGV2ZW50IGlzIGRyYWdnZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmFnRmVlZGJhY2tGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ0ZlZWRiYWNrRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYWdGZWVkYmFja0Zvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ0ZlZWRiYWNrRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgb2Zmc2V0IGZvciB0aGUgZHJhZyBmZWVkYmFjayBmcm9tIHRoZSBwb2ludGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ09mZnNldCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhZ09mZnNldCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdPZmZzZXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZmlsdGVyaW5nIGNvbmRpdGlvbiBmb3IgdGhlIGV2ZW50cy5UaGUgZmlsdGVyIHByb3BlcnR5IHRha2VzIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBmdW5jdGlvbi4gRWFjaCBvYmplY3QgcmVwcmVzZW50cyBhIHNpbmdsZSBmaWx0ZXJpbmcgY29uZGl0aW9uIHdpdGggdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOiBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIFNjaGVkdWxlciBldmVudCBwcm9wZXJ0eSB0aGF0IHdpbGwgYmUgZmlsdGVyZWQgYnkudmFsdWUgLSB0aGUgZmlsdGVyaW5nIGNvbmRpdGlvbiB2YWx1ZS4gVGhlIHZhbHVlIHdpbGwgYmUgdXNlZCB0byBjb21wYXJlIHRoZSBldmVudHMgYmFzZWQgb24gdGhlIGZpbHRlck1vZGUsIGZvciBleGFtcGxlOiBbeyBuYW1lOiAncHJpY2UnLCB2YWx1ZTogMjUgfV0uIFRoZSB2YWx1ZSBjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gYWNjZXB0cyBhIHNpbmdsZSBhcmd1ZW1udCAtIHRoZSB2YWx1ZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBmaWx0ZXJlZCBhdHRyaWJ1dGUuIFRoZSBmdW5jdGlvbiBhbGxvd3MgdG8gYXBwbHkgY3VzdG9tIGNvbmRpdGlvbiB0aGF0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0IGZpbHRlciBtb2Rlcy4gSXQgc2hvdWxkIHJldHVybiB0cnVlICggaWYgdGhlIGV2bmV0IHBhc3NlcyB0aGUgZmlsdGVyaW5nIGNvbmRpdGlvbiApIG9yIGZhbHNlICggaWYgdGhlIGV2ZW50IGRvZXMgbm90IG1lZXQgdGhlIGZpbHRlcmluZyBjb25kaXRpb24gKS4gSGVyZSdzIGFuIGV4YW1wbGU6IFt7IG5hbWU6ICdyb29tSWQnLCB2YWx1ZTogKGlkKSA9PiBbJzInLCAnMyddLmluZGV4T2YoaWQgKyAnJykgPiAtMSB9XS4gSW4gdGhlIGV4YW1wbGUgdGhlIGV2ZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgJ3Jvb21JZCcgcHJvcGVydHkgdGhhdCBpcyBlcXVhbCB0byAnMicgb3IgJzMnIHdpbGwgYmUgZmlsdGVyZWQgb3V0Li4gSWYgYSBmdW5jdGlvbiBpcyBzZXQgdG8gdGhlIGZpbHRlciBwcm9wZXJ0eSBpbnN0ZWFkLCBpdCBhbGxvd3MgdG8gY29tcGxldGVseSBjdXN0b21pemUgdGhlIGZpbHRlcmluZyBsb2dpYy4gVGhlIGZ1bmN0aW9uIHBhc3NlcyBhIHNpbmdsZSBhcmd1bWVudCAtIGVhY2ggU2NoZWR1bGVyIGV2ZW50IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQuIFRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIHRydWUgKCBpZiB0aGUgY29uZGl0aW9uIGlzIG1ldCApIG9yIGZhbHNlICggaWYgbm90ICkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBTY2hlZHVsZXIncyBmaWx0ZXJpbmcgaXMgZW5hYmxlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJhYmxlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJhYmxlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmaWx0ZXIgbW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlck1vZGUoKTogRmlsdGVyTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJNb2RlKHZhbHVlOiBGaWx0ZXJNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlck1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zICBhbiBhcnJheSBvZiBhbGwgU2NoZWR1bGVyIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGV2ZW50cygpOiBTY2hlZHVsZXJFdmVudFtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRzKHZhbHVlOiBTY2hlZHVsZXJFdmVudFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmaXJzdCBkYXkgb2Ygd2VlayBmb3IgdGhlIFNjaGVkdWxlci4gQnkgZGVmYXVsdCBpdCdzIFN1bmRheS4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maXJzdERheU9mV2VlayA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlyc3REYXlPZldlZWsodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maXJzdERheU9mV2VlayA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBmb290ZXIgb2YgdGhlIFNjaGVkdWxlci4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQsIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogZm9vdGVyQ29udGFpbmVyIC0gdGhlIGZvb3RlciBjb250YWluZXIuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9vdGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmb290ZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZXZlbnRzIHdpbGwgYmUgZ3JvdXBlZCBieSBkYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBCeURhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEJ5RGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBCeURhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBCeURhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZ3JvdXBpbmcgb3JpZW50YXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cE9yaWVudGF0aW9uKCk6IFNjaGVkdWxlckdyb3VwT3JpZW50YXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBPcmllbnRhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBPcmllbnRhdGlvbih2YWx1ZTogU2NoZWR1bGVyR3JvdXBPcmllbnRhdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cE9yaWVudGF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGdyb3VwIGNlbGxzIHRoYXQgYXJlIHZpc2libGUgaW5zaWRlIHRoZSBoZWFkZXIuIEl0IGNhbiBiZSBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBjZWxscyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBncm91cCBjZWxsIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBjZWxsQ29udGVudCAtIHRoZSBjb250ZW50IGhvbGRlciBmb3IgdGhlIGdyb3VwIGNlbGwuY2VsbE9iaiAtIHRoZSBncm91cCBjZWxsIG9iamVjdC4uIFdoZW4gdXNpbmcgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCBpdCdzIHBvc3NpYmxlIHRvIGFkZCBwcm9wZXJ0eSBiaW5kaW5ncyBpbnNpZGUgdGhlIHRlbXBsYXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZXNvdXJjZXMgdGhhdCB0aGUgZXZlbnRzIGFyZSBncm91cGVkIGJ5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3Vwcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBlbmQgaG91ciB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluICdkYXknIGFuZCAnd2Vlaycgdmlld3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRW5kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3VyRW5kKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckVuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzdGFydCBob3VyIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gJ2RheScgYW5kICd3ZWVrJyB2aWV3cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhvdXJTdGFydCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91clN0YXJ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3VyU3RhcnQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyU3RhcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0dGluZyBvZiBob3VycyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRm9ybWF0KCk6IFNjaGVkdWxlckhvdXJGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG91ckZvcm1hdCh2YWx1ZTogU2NoZWR1bGVySG91ckZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGhlYWRlciBvZiB0aGUgU2NoZWR1bGVyLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCwgaXQncyBpZCBhcyBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBoZWFkZXJDb250ZW50IC0gdGhlIGhlYWRlciBjb250YWluZXIuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgRGF0ZSBzZWxlY3RvciBpbnNpZGUgdGhlIEhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlckRhdGVQb3NpdGlvbigpOiBTY2hlZHVsZXJIZWFkZXJEYXRlUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyRGF0ZVBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJEYXRlUG9zaXRpb24odmFsdWU6IFNjaGVkdWxlckhlYWRlckRhdGVQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJEYXRlUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHN0eWxpbmcgb2YgdGhlIEhlYWRlciBuYXZpZ2F0aW9uIGNvbnRyb2xzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyTmF2aWdhdGlvblN0eWxlKCk6IFNjaGVkdWxlckhlYWRlck5hdmlnYXRpb25TdHlsZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJOYXZpZ2F0aW9uU3R5bGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhlYWRlck5hdmlnYXRpb25TdHlsZSh2YWx1ZTogU2NoZWR1bGVySGVhZGVyTmF2aWdhdGlvblN0eWxlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlck5hdmlnYXRpb25TdHlsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIHZpZXcgc2VsZWN0b3IgY29udHJvbCBpbnNpZGUgdGhlIEhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclZpZXdQb3NpdGlvbigpOiBTY2hlZHVsZXJIZWFkZXJWaWV3UG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyVmlld1Bvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJWaWV3UG9zaXRpb24odmFsdWU6IFNjaGVkdWxlckhlYWRlclZpZXdQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJWaWV3UG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSAnQWxsIERheScgY29udGFpbmVyIHdpdGggdGhlIGFsbCBkYXkgZXZlbnRzIGlzIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlQWxsRGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUFsbERheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZUFsbERheSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlQWxsRGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZGF5cyBzZXQgYnkgJ25vbndvcmtpbmdEYXlzJyBwcm9wZXJ0eSBhcmUgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVOb253b3JraW5nV2Vla2RheXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTm9ud29ya2luZ1dlZWtkYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlTm9ud29ya2luZ1dlZWtkYXlzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVOb253b3JraW5nV2Vla2RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIG90aGVyIG1vbnRoIGRheXMgYXJlIHZpc2libGUgd2hlbiB2aWV3IGlzIHNldCB0byBtb250aC4gV2hlbiBlbmFibGVkLCBldmVudHMgdGhhdCBzdGFydCBvbiBvdGhlciBtb250aCBkYXlzIGFyZSBub3QgZGlzcGxheWVkIGFuZCB0aGUgY2VsbHMgdGhhdCByZXByZXNlbnQgc3VjaCBkYXlzIGRvIG5vdCBhbGxvdyB0aGUgY3JlYXRpb24gb2YgbmV3IGV2ZW50cyBvbiB0aGVtLiBBbHNvIGRyYWdnaW5nIGFuZCBkcm9waW5nIGFuIGV2ZW50IG9uIG90aGVyIG1vbnRoIGRheXMgaXMgbm90IGFsbG93ZWQuIFJlc3ppbmcgaXMgYWxzbyBhZmZlY3RlZC4gRXZlbnRzIGNhbiBlbmQgb24gb3RoZXIgbW9udGggZGF5cywgYnV0IGNhbm5vdCBzdGFydCBvbiBvbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlT3RoZXJNb250aERheXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlT3RoZXJNb250aERheXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVPdGhlck1vbnRoRGF5cyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlT3RoZXJNb250aERheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSAnVG9kYXknIGJ1dHRvbiBpcyBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVRvZGF5QnV0dG9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvZGF5QnV0dG9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlVG9kYXlCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvZGF5QnV0dG9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgY2hlY2thYmxlIGl0ZW1zIGluIHRoZSB2aWV3IHNlbGVjdGlvbiBtZW51IGFyZSBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVmlld01lbnVDaGVja2FibGVJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB3ZWVrZW5kIGRheXMgYXJlIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlV2Vla2VuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVXZWVrZW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlV2Vla2VuZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlV2Vla2VuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgbGVnZW5kIGluc2lkZSB0aGUgU2NoZWR1bGVyLiBCeSBkZWZhdWx0IHRoZSBsb2NhdGlvbiBpcyBpbnNpZGUgdGhlIGZvb3RlciBidXQgaXQgY2FuIGFsc28gcmVzaWRlIGluIHRoZSBoZWFkZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsZWdlbmRMb2NhdGlvbigpOiBTY2hlZHVsZXJMZWdlbmRMb2NhdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sZWdlbmRMb2NhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGVnZW5kTG9jYXRpb24odmFsdWU6IFNjaGVkdWxlckxlZ2VuZExvY2F0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZExvY2F0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBsZWdlbmQuIEJ5IGRlZmF1bHQgaXQncyBwb3NpdGlvbmVkIHRvIHRoZSBuZWFyIHNpZGUgYnV0IHNldHRpbmcgaXQgdG8gJ2Zhcicgd2lsbCBjaGFuZ2UgdGhhdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxlZ2VuZFBvc2l0aW9uKCk6IFNjaGVkdWxlckxlZ2VuZFBvc2l0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZFBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsZWdlbmRQb3NpdGlvbih2YWx1ZTogU2NoZWR1bGVyTGVnZW5kUG9zaXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGVnZW5kUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbW91c2Ugd2hlZWwgc3RlcC4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byBhIHBvc2l0aXZlIG51bWJlciwgdGhlIHNjcm9sbCBzdGVwIHdpdGggbW91c2Ugd2hlZWwgb3IgdHJhY2twYWQgd2lsbCBkZXBlbmQgb24gdGhlIHByb3BlcnR5IHZhbHVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW91c2VXaGVlbFN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vdXNlV2hlZWxTdGVwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtb3VzZVdoZWVsU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vdXNlV2hlZWxTdGVwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2VhdGhlciBvciBub3QgaG9yaXpvbnRhbCBzY3JvbGxiYXIgaXMgc2hvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSgpOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkodmFsdWU6IEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBsYW5ndWFnZSBvZiB0aGUgU2NoZWR1bGVyLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWF4aW11bSB2aWV3IGRhdGUgZm9yIHRoZSBTY2hlZHVsZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXgoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1heCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZXZlbnRzIHBlciBTY2hlZHVsZXIgY2VsbC4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG51bGwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgbnVtYmVyIG9mIGV2ZW50cyBwZXIgY2VsbCBpcyBhdXRvbWF0aWNhbGx5IGRldGVybWluZWQgYnkgdGhlIHNpemUgb2YgdGhlIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1heEV2ZW50c1BlckNlbGwoKTogbnVtYmVyIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXhFdmVudHNQZXJDZWxsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXhFdmVudHNQZXJDZWxsKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heEV2ZW50c1BlckNlbGwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWluaW11bSB2aWV3IGRhdGUgZm9yIHRoZSBTY2hlZHVsZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtaW4oKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1pbih2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgZWxlbWVudCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW51dGUgZm9ybWF0dGluZyBpbnNpZGUgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbnV0ZUZvcm1hdCgpOiBNaW51dGVGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWludXRlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW51dGVGb3JtYXQodmFsdWU6IE1pbnV0ZUZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW51dGVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbW9udGggbmFtZSBmb3JtYXR0aW5nIGluc2lkZSB0aGUgU2NoZWR1bGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9udGhGb3JtYXQoKTogTW9udGhGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1vbnRoRm9ybWF0KHZhbHVlOiBNb250aEZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb250aEZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBub253b3JraW5nIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwIHRvIDYsIHdoZXJlIDAgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBhbmQgNiBpcyB0aGUgbGFzdCBkYXkuIE5vbndvcmtpbmcgZGF5cyB3aWxsIGJlIGNvbG9yZWQgZGlmZmVyZW50bHkgaW5zaWRlIHRoZSBUaW1lbGluZS4gVGhlIGNvbG9yIGlzIGRldGVybWluZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nRGF5cygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5vbndvcmtpbmdEYXlzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBob3VycyBvZiB0aGUgZGF5LiBIb3VycyBhcmUgcmVwcmVzZW50ZWQgYXMgbnVtYmVycyBpbnNpZGUgYW4gYXJyYXksIGhvd2V2ZXIgcmFuZ2VzIG9mIGhvdXJzIGNhbiBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IHdpdGggc3RhcnRpbmcgYW5kIGVuZGluZyBob3VyIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBJbiB0aGUgdGltbGluZSB0aGUgY2VsbHMgdGhhdCByZXByZXNlbnQgbm9ud29ya2luZyBkYXlzIGFyZSBjb2xvcmVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHJlc3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nSG91cnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdIb3VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm9ud29ya2luZ0hvdXJzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0hvdXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGludGVydmFsIChpbiBzZWNvbmRzKSBhdCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGNoZWNrIGZvciBub3RpZmljYXRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbm90aWZpY2F0aW9uSW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vdGlmaWNhdGlvbkludGVydmFsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub3RpZmljYXRpb25JbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vdGlmaWNhdGlvbkludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHJlc2l6ZSBoYW5kbGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzaXplSGFuZGxlc1Zpc2liaWxpdHkoKTogUmVzaXplSGFuZGxlc1Zpc2liaWxpdHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplSGFuZGxlc1Zpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5KHZhbHVlOiBSZXNpemVIYW5kbGVzVmlzaWJpbGl0eSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVIYW5kbGVzVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByYXRlIGF0IHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgcmVmcmVzaCBpdCdzIGNvbnRlbnQgb24gZWxlbWVudCByZXNpemUuIEJ5IGRlZmF1bHQgaXQncyByZWZyZXNoIGltbWVkaWF0ZWx5LiBUaGlzIHByb3BlcnR5IGlzIHVzZWQgZm9yIGVsZW1lbnQgcmVzaXplIHRocm90dGxpbmcgKi9cblx0QElucHV0KClcblx0Z2V0IHJlc2l6ZUludGVydmFsKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbnRlcnZhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplSW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBvZiByZXNvdXJjZXMgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlcygpOiBTY2hlZHVsZXJSZXNvdXJjZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VzKHZhbHVlOiBTY2hlZHVsZXJSZXNvdXJjZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGFuIGFycmF5IG9mIGRhdGVzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIHRvIGhhdmUgZXZlbnRzIG9uLiBFdmVudHMgdGhhdCBvdmVybGFwIHJlc3RyaWN0ZWQgRGF0ZXMgb3Igc3RhcnQvZW5kIG9uIHRoZW0gd2lsbCBub3QgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzdHJpY3RlZERhdGVzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkRGF0ZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc3RyaWN0ZWREYXRlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc3RyaWN0ZWREYXRlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGFuIGFycmF5IG9mIGhvdXJzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIHRvIGhhdmUgZXZlbnRzIG9uLiBFdmVudHMgdGhhdCBvdmVybGFwIHJlc3RyaWN0ZWQgSG91cnMgb3Igc3RhcnQvZW5kIG9uIHRoZW0gd2lsbCBub3QgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzdHJpY3RlZEhvdXJzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkSG91cnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc3RyaWN0ZWRIb3Vycyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc3RyaWN0ZWRIb3VycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBkYXRlIG5hdmlnYXRpb24gbmF2aWdhdGlvbiBidXR0b25zIGluc2lkZSB0aGUgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2Nyb2xsQnV0dG9uc1Bvc2l0aW9uKCk6IFNjaGVkdWxlclNjcm9sbEJ1dHRvbnNQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxCdXR0b25zUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNjcm9sbEJ1dHRvbnNQb3NpdGlvbih2YWx1ZTogU2NoZWR1bGVyU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbEJ1dHRvbnNQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzL0Rpc2FibGVzIHRoZSBjdXJyZW50IHRpbWUgc2hhZGVyLiBJZiBlbmFibGVkIGFsbCBjZWxscyB0aGF0IHJlcHJlc2VudCBwYXN0IHRpbWUgd2lsbCBiZSBzaGFkZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaGFkZVVudGlsQ3VycmVudFRpbWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaGFkZVVudGlsQ3VycmVudFRpbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNoYWRlVW50aWxDdXJyZW50VGltZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaGFkZVVudGlsQ3VycmVudFRpbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXNvdXJjZSBsZWdlbmQgaXMgdmlzaWJsZSBvciBub3QuIFRoZSBMZWdlbmQgc2hvd3MgdGhlIHJlc291cmNlcyBhbmQgdGhlaXIgaXRlbXMgaW4gdGhlIGZvb3RlciBzZWN0aW9uIG9mIHRoZSBTY2hlZHVsZXIuIElmIGZpbHRlcmFibGUgaXMgZW5hYmxlZCBpdCBpcyBwb3NzaWJsZSB0byBmaWx0ZXIgYnkgcmVzb3VyY2UgaXRlbXMgYnkgY2xpY2tpbmcgb24gdGhlIGNvcnJlc3BvbmRpbmcgcmVzb3VyY2UgaXRlbSBmcm9tIHRoZSBsZWdlbmQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93TGVnZW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0xlZ2VuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0xlZ2VuZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93TGVnZW5kID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG5hbWUgb2YgdGhlIHJlc291cmNlIGRhdGEgaXRlbSBwcm9wZXJ0eSB0aGF0IHdpbGwgYmUgdXNlZCBmb3Igc29ydGluZyB0aGUgcmVzb3VyY2UgZGF0YSBkZWZpbmVkIGFzIHRoZSByZXNvdXJjZS5kYXRhU291cmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydEJ5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0QnkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRCeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gZGVmaW5lIGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gc29ydCB0aGUgcmVzb3VyY2UgZGF0YS4gVGhlIHNvcnRGdW5jdGlvbiBpcyB1c2VkIHdoZW4gc29ydE9yZGVyIGlzIHNldCB0byBjdXN0b20uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNvcnRpbmcgb3JkZXIgb2YgdGhlIHJlc291cmNlIGRhdGEgaXRlbXMuIFdoZW4gc2V0IHRvIGN1c3RvbSwgYSBjdXN0b20gc29ydGluZyBmdW5jdGlvbiBoYXMgdG8gYmUgZGVmaW5lZCBmb3IgdGhlIHNvcnRGdW5jdGlvbiBwcm9wZXJ0eS4gVGhlIGFzYyBzdGFuZHMgZm9yICdhc2NlbmRpbmcnIHdoaWxlIGRlc2MgbWVhbnMgJ2Rlc2NlbmRpbmcnIHNvcnRpbmcgb3JkZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0T3JkZXIoKTogU2NoZWR1bGVyU29ydE9yZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRPcmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydE9yZGVyKHZhbHVlOiBTY2hlZHVsZXJTb3J0T3JkZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE9yZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlcGVhdGluZyBkZWxheSBvZiB0aGUgcmVwZWF0IGJ1dHRvbnMgaW5zaWRlIHRoZSBoZWFkZXIgb2YgdGhlIGVsZW1lbnQuIFN1Y2ggYnV0dG9ucyBhcmUgdGhlIERhdGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgdmlldyBzY3JvbGwgYnV0dG9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNwaW5CdXR0b25zRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwaW5CdXR0b25zRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNwaW5CdXR0b25zRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0RlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGluaXRpYWwgZGVsYXkgb2YgdGhlIHJlcGVhdCBidXR0b25zIGluc2lkZSB0aGUgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiBTdWNoIGJ1dHRvbnMgYXJlIHRoZSBEYXRlIG5hdmlnYXRpb24gYnV0dG9ucyBhbmQgdGhlIHZpZXcgc2Nyb2xsIGJ1dHRvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcGluQnV0dG9uc0luaXRpYWxEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BpbkJ1dHRvbnNJbml0aWFsRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNwaW5CdXR0b25zSW5pdGlhbERlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BpbkJ1dHRvbnNJbml0aWFsRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyB0aGUgc3RhdHVzZXMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uIHRob3VyZ2ggdGhlIHdpbmRvdyBlZGl0b3IgZm9yIHRoZSBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzdGF0dXNlcygpOiBTY2hlZHVsZXJTdGF0dXNlW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdHVzZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN0YXR1c2VzKHZhbHVlOiBTY2hlZHVsZXJTdGF0dXNlW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdHVzZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBlbGVtZW50J3MgdmlzdWFsIHRoZW1lLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZvcm1hdCBmdW5jdGlvbiBmb3IgdGhlIEhlYWRlciBvZiB0aGUgVGltZWxpbmUuIEFsbG93cyB0byBtb2RpZnkgdGhlIGRhdGUgbGFiZWxzIGluIHRoZSBoZWFkZXIgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRlIHNjYWxlIGZvciB0aGUgdGltZWxpbmUgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZURheVNjYWxlKCk6IFNjaGVkdWxlclRpbWVsaW5lRGF5U2NhbGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVEYXlTY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZWxpbmVEYXlTY2FsZSh2YWx1ZTogU2NoZWR1bGVyVGltZWxpbmVEYXlTY2FsZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZURheVNjYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMvRGlzYWJsZXMgdGhlIHRpY2sgbWFya3MgbmV4dCB0byB0aGUgdGltZSBjZWxscyBpbiB0aGUgdmVydGljYWwgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiBUaW1lIGhlYWRlciBhcHBlYXJzIGluICdkYXknIGFuZCAnd2Vlaycgdmlld3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lUnVsZXJUaWNrcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVSdWxlclRpY2tzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lUnVsZXJUaWNrcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lUnVsZXJUaWNrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aW1lWm9uZSBmb3IgdGhlIGVsZW1lbnQuIEJ5IGRlZmF1bHQgaWYgdGhlIGxvY2FsIHRpbWUgem9uZSBpcyB1c2VkIGlmIHRoZSBwcm9wZXJ0eSBpcyBub3Qgc2V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZVpvbmUoKTogU2NoZWR1bGVyVGltZVpvbmUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVpvbmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVab25lKHZhbHVlOiBTY2hlZHVsZXJUaW1lWm9uZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lWm9uZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gZGlzcGxheSBhZGRpdGlvbmFsIHRpbWVab25lcyBhdCBvbmNlIGFsb25nIHdpdGggdGhlIGRlZmF1bHQgdGhhdCBpcyBzZXQgdmlhIHRoZSB0aW1lWm9uZSBwcm9wZXJ0eS4gQWNjZXB0cyBhbiBhcnJheSB2YWx1ZXMgdGhhdCByZXByZXNlbnQgdGhlIGlkcyBvZiB2YWxpZCB0aW1lIHpvbmVzLiBUaGUgcG9zc2JpbGUgdGltZSB6b25lcyBjYW4gYmUgdmlld2VkIGluIHRoZSB0aW1lWm9uZSBwcm9wZXJ0eSBkZXNjcmlwdGlvbi4gQnkgZGVmYXVsdCB0aGUgbG9jYWwgdGltZSB6b25lIGlzIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpbWVab25lcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVpvbmVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lWm9uZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lWm9uZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGVsYXkgKCBpbiBtaWxpc2Vjb25kcykgYmVmb3JlIHRoZSB0b29sdGlwL21lbnUgYXBwZWFycy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2x0aXBEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcERlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sdGlwRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgb2Zmc2V0IG90IHRoZSB0b29sdGlwL21lbnUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwT2Zmc2V0KCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXBPZmZzZXQodmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBPZmZzZXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3ZWF0aGVyIG9yIG5vdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgc2hvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB2ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGN1cnJlbnQgdmlldy4gVGhlIHByb3BlcnR5IGFjY2VwdHMgdmlldyB2YWx1ZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgdmlld3MgcHJvcGVydHkuIEN1c3RvbSB2aWV3cyBzaG91bGQgY29udGFpbiBhIHZhbGlkIHZhbHVlIHRoYXQgd2lsbCBiZSBzZXQgYXMgdGhlIGN1cnJlbnQgdmlldy4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZpZXcodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB0aGUgY3VycmVudCBTY2hlZHVsZXIgdmlld1R5cGUuIEN1c3RvbSB2aWV3cyBtdXN0IGNvbnRhaW4gYSB2YWxpZCB0eXBlIHByb3BlcnR5IHRoYXQgY29ycmVzcG9uZHMgdG8gb25lIG9mIHRoZSB2aWV3IHR5cGVzLiBUaGlzIHByb3BlcnR5IHNob3VsZCBub3QgYmUgc2V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmlld1R5cGUoKTogU2NoZWR1bGVyVmlld1R5cGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld1R5cGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZpZXdUeXBlKHZhbHVlOiBTY2hlZHVsZXJWaWV3VHlwZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3VHlwZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2aWV3aW5nIGRhdGUgcmFuZ2Ugb2YgdGhlIHRpbWVsaW5lLiBUaGUgcHJvcGVydHkgc2hvdWxkIGJlIHNldCB0byBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHZpZXcgb2JqZWN0cy4gV2hlbiB5b3Ugc2V0IGl0IHRvIGEgc3RyaW5nLCB5b3Ugc2hvdWxkIHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZzogJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ2FnZW5kYScsICd0aW1lbGluZURheScsICd0aW1lbGluZVdlZWsnLCAndGltZWxpbmVNb250aCcuIEN1c3RvbSB2aWV3cyBjYW4gYmUgZGVmaW5lZCBhcyBvYmplY3RzIGluc3RlYWQgb2Ygc3RyaW5ncy4gVGhlIHZpZXcgb2JqZWN0IHNob3VsZCBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogbGFiZWwgLSB0aGUgbGFiZWwgZm9yIHRoZSB2aWV3LnZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgdmlldy4gVGhlIHZhbHVlIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHZpZXcudHlwZSAtIHRoZSB0eXBlIG9mIHZpZXcuIFRoZSB0eXBlIHNob3VsZCBiZSBvbmUgb2YgdGhlIGRlZmF1bHQgYWxsb3dlZCB2YWx1ZXMgZm9yIGEgdmlldy5oaWRlV2Vla2VuZCAtIGFuIE9wdGlvbmFsIHByb3BlcnR5IHRoYXQgYWxsb3dzIHRvIGhpZGUgdGhlIHdlZWtlbmQgb25seSBmb3IgdGhpcyBzcGVjaWZpYyB2aWV3LmhpZGVOb253b3JraW5nV2Vla2RheXMgLSBhbiBPcHRpb25hbCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB0byBoaWRlIHRoZSBub253cmtpbmcgd2Vla2RheXMgZm9yIHRoaXMgc3BlY2lmaWMgdmlldy5zaG9ydGN1dEtleSAtIGFuIE9wdGlvbmFsIHByb3BlcnR5IHRoYXQgYWxsb3dzIHRvIHNldCBhIGN1c3RvbSBzaG9ydGN1dCBrZXkgZm9yIHRoZSB2aWV3LmhpZGVIb3VycyAtIGFuIE9wdGlvbmFsIHByb3BlcnR5IGFwcGxpY2FibGUgb25seSB0byB0aW1lbGluZVdlZWsgdmlldyB0aGF0IGFsbG93cyB0byBoaWRlIHRoZSBob3VyIGNlbGxzIGFuZCBvbmx5IHNob3cgdGhlIGRheSBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXdzKCk6IFNjaGVkdWxlclZpZXdzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3cyh2YWx1ZTogU2NoZWR1bGVyVmlld3MpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0eXBlIG9mIHRoZSB2aWV3IHNlbGVjdG9yIGxvY2F0ZWQgaW4gdGhlIGhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXdTZWxlY3RvclR5cGUoKTogU2NoZWR1bGVyVmlld1NlbGVjdG9yVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3U2VsZWN0b3JUeXBlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3U2VsZWN0b3JUeXBlKHZhbHVlOiBTY2hlZHVsZXJWaWV3U2VsZWN0b3JUeXBlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdTZWxlY3RvclR5cGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSB3ZWVrIGRheXMgaW5zaWRlIHRoZSBlbGVtZW50LiAgKi9cblx0QElucHV0KClcblx0Z2V0IHdlZWtkYXlGb3JtYXQoKTogV2Vla0RheUZvcm1hdCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrZGF5Rm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3ZWVrZGF5Rm9ybWF0KHZhbHVlOiBXZWVrRGF5Rm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndlZWtkYXlGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXRlcyBpbnNpZGUgdGhlIHRpbWVsaW5lIGhlYWRlciB3aGVuIHRoZXkgcmVwcmVzZW50IHllYXJzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgeWVhckZvcm1hdCgpOiBZZWFyRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnllYXJGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHllYXJGb3JtYXQodmFsdWU6IFllYXJGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueWVhckZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgaWYgdGhlIGVsZW1lbnQgY2FuIGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZWRvL3VuZG8gc3RlcHMgdGhhdCB3aWxsIGJlIHJlbWVtYmVyZWQgYnkgdGhlIFNjaGVkdWxlci4gV2hlbiB0aGUgbnVtYmVyIGlzIHJlYWNoZWQgdGhlIG9sZGVzdCByZWNvcmRzIGFyZSByZW1vdmVkIGluIG9yZGVyIHRvIGFkZCBuZXcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmRvUmVkb1N0ZXBzKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmRvUmVkb1N0ZXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmRvUmVkb1N0ZXBzKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb1JlZG9TdGVwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29tcGxldGx5IGN1c3RvbWl6ZSB0aGUgcG9wdXAgV2luZG93IHRoYXQgaXMgdXNlZCB0byBlZGl0IGV2ZW50cy4gVGhlIGZ1bmN0aW9uIGhhcyB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czogdGFyZ2V0IC0gdGhlIHRhcmdldCBwb3B1cCBXaW5kb3cgdGhhdCBpcyBhYm91dCB0byBiZSBvcGVuZWQudHlwZSAtIHRoZSB0eXBlIG9mIHRoZSB3aW5kb3cuIFRoZSB0eXBlIGRldGVybWluZXMgdGhlIHB1cnBvc2Ugb2YgdGhlIHdpbmRvdy4gVGhlIGRlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBzdHJpbmcgd2hpY2ggbWVhbnMgdGhhdCBpdCdzIHRoZSBkZWZhdWx0IGV2ZW50IGVkaXRpbmcgd2luZG93LiBUaGUgb3RoZXIgdHlwZSBpcyAnY29uZmlybScgKCBjb25maXJtYXRpb24gd2luZG93KSB0aGF0IGFwcGVhcnMgd2hlbiBjbGlja2luZyBvbiBhIHJlcGVhdGluZyBldmVudC4gZXZlbnRPYmogLSB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgZ29pbmcgdG8gYmUgZWRpdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgYmF0Y2ggdXBkYXRlIHdhcyBzdGFydGVkIGFmdGVyIGV4ZWN1dGluZyB0aGUgYmVnaW5VcGRhdGUgbWV0aG9kLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQmVnaW5VcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgYmF0Y2ggdXBkYXRlIHdhcyBlbmRlZCBmcm9tIGFmdGVyIGV4ZWN1dGluZyB0aGUgZW5kVXBkYXRlIG1ldGhvZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkVuZFVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBuZXcgY2VsbCBpcyBzZWxlY3RlZC91bnNlbGVjdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHZhbHVlLCBcdG9sZFZhbHVlKVxuXHQqICAgdmFsdWUgLSBUaGUgbmV3IHNlbGVjdGVkIERhdGUuXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIERhdGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gRXZlbnQgaGFzIGJlZW4gdXBkYXRlZC9pbnNlcnRlZC9yZW1vdmVkL2RyYWdnZWQvcmVzaXplZCBvciBhbiBleGNlcHRpb24gb2YgYSByZXBlYXRpbmcgZXZlbnQgaGFzIGJlZW4gYWRkZWQvdXBkYXRlZC9yZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0dHlwZSlcblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBjaGFuZ2UgdGhhdCBpcyBiZWluZyBkb25lIHRvIHRoZSBpdGVtLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBFdmVudCBpcyBnb2luZyB0byBiZSB1cGRhdGVkL2luc2VydGVkL3JlbW92ZWQuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdHR5cGUpXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgY2hhbmdlIHRoYXQgaXMgZ29pbmcgdG8gYmUgbWFkZSB0byB0aGUgaXRlbSAoZS5nLiAnaW5zZXJ0aW5nJywgJ3JlbW92aW5nJywgJ3VwZGF0aW5nJywgJ2V4Y2VwdGlvbkluc2VydGluZycsICdleGNlcHRpb25VcGRhdGluZycsICdleGNlcHRpb25SZW1vdmluZycpLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGVuIGV2ZW50LCBldmVudCBpdGVtIG9yIGEgY29udGV4dCBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdHR5cGUsIFx0aXRlbU9iailcblx0KiAgIGl0ZW0gLSBUaGUgSFRNTEVsZW1lbnQgZm9yIHRoZSBldmVudC5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtIHRoYXQgaXMgY2xpY2tlZC4gVGhlIHBvc3NpYmxlIHZhbHVlcyBhcmU6IDx1bD48bGk+ZXZlbnQgLSB3aGVuIGFuIGV2ZW50IGl0ZW0gaXMgY2xpY2tlZC48L2xpPjxsaT5jb250ZXh0IC0gd2hlbiBhIGNvbnRleHQgbWVudSBpdGVtIGlzIGNsaWNrZWQuPC9saT48L3VsPi5cblx0KiAgIGl0ZW1PYmogLSBUaGUgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEV2ZW50IGlzIGluc2VydGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0pXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1JbnNlcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEV2ZW50IGlzIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSlcblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbVJlbW92ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gRXZlbnQgaXMgdXBkYXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0eXBlLCBcdGl0ZW0pXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgaXRlbSB0aGF0IGhhcyBiZWVuIG1vZGlmaWVkLlxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlldyBpcyBjaGFuZ2VkIHZpYSB1c2VyIGludGVyYWN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgdmlldy5cblx0KiAgIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBuZXcgc2VsZWN0ZWQgdmlldy5cblx0Ki9cblx0QE91dHB1dCgpIG9uVmlld0NoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgdmlldyBpcyBjaGFuZ2VkIHZpYSB1c2VyIGludGVyYWN0aW9uLiBUaGUgdmlldyBjaGFuZ2UgYWN0aW9uIGNhbiBiZSBjYW5jZWxlZCBpZiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCB2aWV3LlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIG5ldyBzZWxlY3RlZCB2aWV3LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25WaWV3Q2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgc2hvcnRjdXQga2V5IGZvciBhbiBldmVudCBpcyBwcmVzc2VkLiBCeSBkZWZhdWx0IG9ubHkgJ0RlbGV0ZScga2V5IGlzIHVzZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0a2V5LCBcdHRhcmdldCwgXHRldmVudE9iailcblx0KiAgIGtleSAtIFRoZSBzaG9ydGN1dCBrZXkgdGhhdCB3YXMgcHJlc3NlZC5cblx0KiAgIHRhcmdldCAtIFRoZSBldmVudCB0YXJnZXQgKEhUTUxFbGVtZW50KS5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIHNjaGVkdWxlciBFdmVudCBvYmplY3QgdGhhdCBhZmZlY3RlZCBieSB0aGUga2V5cHJlc3MuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV2ZW50U2hvcnRjdXRLZXk6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSAnZGF0ZUN1cnJlbnQnIHByb3BlcnR5IGlzIGNoYW5nZWQuIFRoaXMgY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIHRvIGEgZGlmZmVyZW50IGRhdGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBwcmV2aW91cyBjdXJyZW50IGRhdGUgdGhhdCB3YXMgaW4gdmlldy5cblx0KiAgIHZhbHVlIC0gVGhlIGN1cnJlbnQgZGF0ZSBpbiB2aWV3LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2luZyBvZiBhbiBldmVudCBiZWdpbnMuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRpdGVtRGF0ZVJhbmdlLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICB0YXJnZXQgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZXZlbnQgdGhhdCBpcyBnb2luZyB0byBiZSBkcmFnZ2VkLlxuXHQqICAgaXRlbSAtIFRoZSBzY2hlZHVsZXIgRXZlbnQgb2JqZWN0IHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0KiAgIGl0ZW1EYXRlUmFuZ2UgLSBUaGUgc3RhcnQvZW5kIGRhdGVzIGZvciB0aGUgU2NoZWR1bGVyIEV2ZW50LlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gZHJhZ2dpbmcgb2YgYW4gZXZlbnQgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0aXRlbURhdGVSYW5nZSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgdGFyZ2V0IC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGV2ZW50IHRoYXQgaXMgZHJhZ2dlZC5cblx0KiAgIGl0ZW0gLSBUaGUgc2NoZWR1bGVyIEV2ZW50IG9iamVjdCB0aGF0IGlzIGRyYWdnZWQuXG5cdCogICBpdGVtRGF0ZVJhbmdlIC0gVGhlIG5ldyBzdGFydC9lbmQgZGF0ZXMgZm9yIHRoZSBkcmFnZ2VkIFNjaGVkdWxlciBFdmVudC5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBkcm9wcyBhbiBpdGVtIG92ZXIgYSBjZWxsLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRkYXRlLCBcdGFsbERheSlcblx0KiAgIHRhcmdldCAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBldmVudCB0aGF0IGlzIGRyYWdnZWQuXG5cdCogICBkYXRlIC0gVGhlIGNlbGwncyBkYXRlIHVuZGVyIHRoZSBwb2ludGVyLlxuXHQqICAgYWxsRGF5IC0gQm9vbGVhbiB2YWx1ZSwgd2hpY2ggaXMgdHJ1ZSB3aGVuIHRoZSBjZWxsIHVuZGVyIHRoZSBwb2ludGVyIGlzIGFsbCBkYXkgY2VsbC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJvcG92ZXJDZWxsOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiByZXNpemluZyBvZiBhIHRhc2sgc3RhcnRzLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0aXRlbURhdGVSYW5nZSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgdGFyZ2V0IC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGV2ZW50IHRoYXQgaXMgZ29pbmcgdG8gYmUgcmVzaXplZC5cblx0KiAgIGl0ZW0gLSBUaGUgc2NoZWR1bGVyIEV2ZW50IG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBpdGVtRGF0ZVJhbmdlIC0gVGhlIHN0YXJ0L2VuZCBkYXRlcyBmb3IgU2NoZWR1bGVyIEV2ZW50IHRoYXQgaXMgZ29pbmcgdG8gYmUgcmVzaXplZC5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHJlc2l6aW5nIG9mIGFuIGV2ZW50IGZpbmlzaGVzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdGl0ZW1EYXRlUmFuZ2UsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHRhcmdldCAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBldmVudCB0aGF0IGlzIHJlc2l6ZWQuXG5cdCogICBpdGVtIC0gVGhlIHNjaGVkdWxlciBFdmVudCBvYmplY3QgdGhhdCBpcyByZXNpemVkLlxuXHQqICAgaXRlbURhdGVSYW5nZSAtIFRoZSBuZXcgc3RhcnQvZW5kIGRhdGVzIGZvciB0aGUgcmVzaXplZCBTY2hlZHVsZXIgRXZlbnQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgdG9wIG9wZW4gdGhlIGV2ZW50IGRpYWxvZyB3aW5kb3cuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHR0eXBlLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGRpYWxvZyB3aW5kb3cgdGhhdCBpcyBvcGVuaW5nLlxuXHQqICAgaXRlbSAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBnb2luZyB0byBiZSBlZGl0ZWQuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2Ygd2luZG93IHRoYXQgaXMgZ29pbmcgdG8gb3Blbi4gVHdvIHdpbmRvdyB0eXBlcyBhcmUgYXZhaWxhYmxlLCB0aGUgZGFmYXVsdCB3aGljaCBpcyBhbiBlbXB0eSBzdHJpbmcgKCBkb2VzIG5vdCBoYXZlIGEgdHlwZSkgYW5kICdjb25maXJtJyB3aGljaCBpcyBkaXNwbGF5ZWQgd2hlbiBjbGlja2VkIG9uIGEgcmVwZWF0aW5nIGV2ZW50LlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRWRpdERpYWxvZ09wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIG9wZW5zIHRoZSBldmVudCBkaWFsb2cgd2luZG93LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRlZGl0b3JzLCBcdGl0ZW0sIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgZGlhbG9nIHdpbmRvdyB0aGF0IGlzIG9wZW5lZC5cblx0KiAgIGVkaXRvcnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgZXZlbnQgZWRpdG9ycyB0aGF0IGFyZSBwcmVzZW50IGluc2lkZSB0aGUgd2luZG93LiBUaGlzIHByb3BlcnR5IGlzIHVuZGVmaW5lZCB3aGVuIHRoZSB3aW5kb3cgaXMgb2YgdHlwZSAnY29uZmlybScsIGJlY2F1c2UgY29uZmlybSB3aW5kb3dzIGRvIG5vdCBjb250YWluIGVkaXRvcnMuXG5cdCogICBpdGVtIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGJlaW5nIGVkaXRlZC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVkaXREaWFsb2dPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIGV2ZW50IGRpYWxvZyB3aW5kb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGVkaXRvcnMsIFx0aXRlbSwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBkaWFsb2cgd2luZG93IHRoYXQgaXMgY2xvc2VkLlxuXHQqICAgZWRpdG9ycyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBldmVudCBlZGl0b3JzIHRoYXQgYXJlIHByZXNlbnQgaW5zaWRlIHRoZSB3aW5kb3cuIFRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkIHdoZW4gdGhlIHdpbmRvdyBpcyBvZiB0eXBlICdjb25maXJtJywgYmVjYXVzZSBjb25maXJtIHdpbmRvd3MgZG8gbm90IGNvbnRhaW4gZWRpdG9ycy5cblx0KiAgIGl0ZW0gLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgYmVpbmcgZWRpdGVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRWRpdERpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBpcyBhYm91dCB0byBjbG9zZSB0aGUgZXZlbnQgZGlhbG9nIHdpbmRvdy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdHR5cGUsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgZGlhbG9nIHdpbmRvdyB0aGF0IGlzIGNsb3NpbmcuXG5cdCogICBpdGVtIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGVkaXRlZC5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB3aW5kb3cgdGhhdCBpcyBnb2luZyB0byBiZSBjbG9zZWQuIFR3byB3aW5kb3cgdHlwZXMgYXJlIGF2YWlsYWJsZSwgdGhlIGRhZmF1bHQgd2hpY2ggaXMgYW4gZW1wdHkgc3RyaW5nICggZG9lcyBub3QgaGF2ZSBhIHR5cGUpIGFuZCAnY29uZmlybScgd2hpY2ggaXMgZGlzcGxheWVkIHdoZW4gY2xpY2tlZCBvbiBhIHJlcGVhdGluZyBldmVudC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVkaXREaWFsb2dDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBiZWdpbnMgdG8gb3BlbiB0aGUgY29udGV4dCBtZW51IG9uIGEgdGltZWxpbmUgY2VsbCBvciBhbiBldmVudCBlbGVtZW50LiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGNlbGxPYmosIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgY29udGV4dCBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgY2VsbE9iaiAtIFRoZSBjZWxsIG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYW4gZXZlbnQgaW5zdGVhZCBvZiBhIGNlbGwgdGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGEgY2VsbCBpbnN0ZWFkIG9mIGFuIGV2ZW50IHRoaXMgcGFyYW10ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51T3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRleHQgbWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGNlbGxPYmosIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgY29udGV4dCBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgY2VsbE9iaiAtIFRoZSBjZWxsIG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYW4gZXZlbnQgaW5zdGVhZCBvZiBhIGNlbGwgdGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGEgY2VsbCBpbnN0ZWFkIG9mIGFuIGV2ZW50IHRoaXMgcGFyYW10ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRleHQgbWVudSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGNlbGxPYmosIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgY29udGV4dCBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgY2VsbE9iaiAtIFRoZSBjZWxsIG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYW4gZXZlbnQgaW5zdGVhZCBvZiBhIGNlbGwgdGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGEgY2VsbCBpbnN0ZWFkIG9mIGFuIGV2ZW50IHRoaXMgcGFyYW10ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGlzIGFib3V0IHRvIGNsb3NlIHRoZSBjb250ZXh0IG1lbnUuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0Y2VsbE9iaiwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBjb250ZXh0IG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBjZWxsT2JqIC0gVGhlIGNlbGwgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhbiBldmVudCBpbnN0ZWFkIG9mIGEgY2VsbCB0aGlzIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYSBjZWxsIGluc3RlYWQgb2YgYW4gZXZlbnQgdGhpcyBwYXJhbXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZXZlbnQgbWVudSBpcyBhYm91dCB0byBvcGVuLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCBvZiB0aGUgZXZlbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXZlbnRNZW51T3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGV2ZW50IG1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgb2YgdGhlIGV2ZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV2ZW50TWVudU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBldmVudCBtZW51IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IG9mIHRoZSBldmVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FdmVudE1lbnVDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGV2ZXQgbWVudSBpcyBhYm91dCB0byBjbG9zZS4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgb2YgdGhlIGV2ZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV2ZW50TWVudUNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBkYXRlIHNlbGVjdGlvbiBtZW51IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRGF0ZU1lbnVPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZGF0ZSBzZWxlY3Rpb24gbWVudSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRhdGVNZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB2aWV3IHNlbGVjdGlvbiBtZW51IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uVmlld01lbnVPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlldyBzZWxlY3Rpb24gbWVudSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvblZpZXdNZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbm90aWZpY2F0aW9uIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbnN0YW5jZSlcblx0KiAgIGluc3RhbmNlIC0gVGhlIHRvYXN0IGl0ZW0gaW5zdGFuY2UgdGhhdCBpcyBvcGVuZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbk5vdGlmaWNhdGlvbk9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbm90aWZpY2F0aW9uIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbnN0YW5jZSlcblx0KiAgIGluc3RhbmNlIC0gVGhlIHRvYXN0IGl0ZW0gaW5zdGFuY2UgdGhhdCBpcyBjbG9zZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbk5vdGlmaWNhdGlvbkNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhbiBldmVudCB0byB0aGUgU2NoZWR1bGVyLiBBY2NlcHRzIGFuIGV2ZW50IG9iamVjdCBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdCAoc2FtZSBhcyB0aGUgZGF0YVNvdXJjZSBmb3JtYXQpOiB7IGxhYmVsPzogc3RyaW5nLCBkYXRlU3RhcnQ6IGRhdGUsIGRhdGVFbmQ6IGRhdGUsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBpZD86IHN0cmluZyB8IG51bWJlciwgY2xhc3M/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIG5vdGlmaWNhdGlvbnM/OiB7IGludGVydmFsOiBudW1lcmljLCB0eXBlPzogc3RyaW5nLCB0aW1lOiBudW1iZXJbXSB9W10sIGFsbERheT86IGJvb2xlYW4sIGRpc2FibGVEcmFnPzogYm9vbGVhbiwgZGlzYWJsZVJlc2l6ZT86IGJvb2xlYW4sIHJlcGVhdD86IHsgcmVwZWF0RnJlcTogc3RyaW5nLCByZXBlYXRJbnRlcnZhbDogbnVtYmVyLCByZXBlYXRPbj86IG51bWJlciB8IG51bWJlcltdIHwgZGF0ZSwgcmVwZWF0RW5kPzogbnVtYmVyIHwgZGF0ZSwgZXhjZXB0aW9ucz86IHsgZGF0ZTogZGF0ZSwgZGF0ZVN0YXJ0PzogZGF0ZSwgZGF0ZUVuZD86IGRhdGUsIGhpZGRlbj86IGJvb2xlYW4sIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcsIG5vdGlmaWNhdGlvbnM/OiB7IGludGVydmFsOiBudW1lcmljLCB0eXBlPzogc3RyaW5nLCB0aW1lOiBudW1iZXJbXSB9W10sIGRpc2FibGVEcmFnPzogYm9vbGVhbiwgZGlzYWJsZVJlc2l6ZT86IGJvb2xlYW4gfVtdIH0sIHN0YXR1cz86IHN0cmluZyB9IFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBTY2hlZHVsZXIgZXZlbnQgdGhhdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBlbGVtZW50LlxuXHQqL1xuICAgIHB1YmxpYyBhZGRFdmVudChldmVudE9iajogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50KGV2ZW50T2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudChldmVudE9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFN0YXJ0cyBhbiB1cGRhdGUgb3BlcmF0aW9uLiBUaGlzIGlzIGFwcHJvcHJpYXRlIHdoZW4gY2FsbGluZyBtdWx0aXBsZSBtZXRob2RzIG9yIHNldCBtdWx0aXBsZSBwcm9wZXJ0aWVzIGF0IG9uY2UuIFxuXHQqL1xuICAgIHB1YmxpYyBiZWdpblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGFuIGV2ZW50IGFuZCBhZGRzIGl0IHRvIHRoZSBTY2hlZHVsZXIuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbC4gRXZlbnQgbGFiZWwuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlLiBFdmVudCB2YWx1ZS5cblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0ZVN0YXJ0LiBFdmVudCBkYXRlIHN0YXJ0LlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRW5kLiBFdmVudCBkYXRlIGVuZC5cblx0KiBAcGFyYW0ge2Jvb2xlYW59IGFsbERheS4gRXZlbnQgYWxsIGRheS4gU2V0IGl0IHRvIHRydWUgdG8gY3JlYXRlIGFsbCBkYXkgZXZlbnQuXG5cdCovXG4gICAgcHVibGljIGNyZWF0ZUV2ZW50KGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRhdGVTdGFydDogc3RyaW5nLCBkYXRlRW5kOiBzdHJpbmcsIGFsbERheTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVFdmVudChsYWJlbCwgdmFsdWUsIGRhdGVTdGFydCwgZGF0ZUVuZCwgYWxsRGF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jcmVhdGVFdmVudChsYWJlbCwgdmFsdWUsIGRhdGVTdGFydCwgZGF0ZUVuZCwgYWxsRGF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXN1bWUgdGhlIHJlbmRlcmluZyBhbmQgd2lsbCByZWZyZXNoIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgZW5kVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmZXJlc2hlcyB0aGUgU2NoZWR1bGVyIGJ5IHJlY2FsY3VsYXRpbmcgdGhlIFNjcm9sbGJhcnMuICBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IGZ1bGxSZWZyZXNoPy4gSWYgc2V0IHRoZSBTY2hlZHVsZXIgd2lsbCBiZSByZS1yZW5kZXJlZCBjb21wbGV0ZWx5LlxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKGZ1bGxSZWZyZXNoPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgZXZlbnRzIGZyb20gdGhlIFNjaGVkdWxlci4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGb3JtYXQuIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZXhwb3J0ZWQgZmlsZS4gVGhlIGZvbGxvd2luZyB2YWx1ZXMgYXJlIGF2YWlsYWJsZTogPHVsPjxsaT48Yj5wZGY8L2I+PC9saT48bGk+PGI+eGxzeDwvYj48L2xpPjxsaT48Yj5odG1sPC9iPjwvbGk+PGxpPjxiPmlDYWw8L2I+PC9saT48L3VsPlxuXHQqIEBwYXJhbSB7YW55fSBjYWxsYmFjaz8uIEEgY2FsbGJhY2sgdGhhdCBhbGxvd3MgdG8gZm9ybWF0IHRoZSBleHBvcnRlZCBkYXRhIGJhc2VkIG9uIGEgY29uZGl0aW9uLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzLCByZWZlciBybyB0aGUgU21hcnQgRXhwb3J0IERvY3VtZW50YXRpb24uXG5cdCovXG4gICAgcHVibGljIGV4cG9ydERhdGEoZGF0YUZvcm1hdDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGV2ZW50cyBpbnNpZGUgdGhlIFNjaGVkdWxlci4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldERhdGFTb3VyY2UoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldERhdGFTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZXNvdXJjZXMgaW5zaWRlIHRoZSBTY2hlZHVsZXIuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZXMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJlc291cmNlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhIGRhdGUgZnJvbSBjb29yZGluYXRlcyBcblx0KiBAcGFyYW0ge251bWJlcn0geC4gWCBjb29yZGluYXRlLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSB5LiBZIGNvb3JkaW5hdGUuXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldERhdGVGcm9tQ29vcmRpbmF0ZXMoeCwgeSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXREYXRlRnJvbUNvb3JkaW5hdGVzKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB3aGV0aGVyIGEgY2VsbCBpcyBhbGwgZGF5IGNlbGwgZnJvbSBjb29yZGluYXRlcyBcblx0KiBAcGFyYW0ge251bWJlcn0geC4gWCBjb29yZGluYXRlLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSB5LiBZIGNvb3JkaW5hdGUuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJc0FsbERheUNlbGxGcm9tQ29vcmRpbmF0ZXMoeCwgeSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJc0FsbERheUNlbGxGcm9tQ29vcmRpbmF0ZXMoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBTY2hlZHVsZXIuIEluY2x1ZGVzIHRoZSBjdXJyZW50IGRhdGVDdXJlcm50LCBkYXRhU291cmNlIGFuZCB0aW1lWm9uZSBwcm9wZXJ0aWVzLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBmb3JtIExvY2FsU3RvcmFnZSBhY2NvcmRpbmcgdG8gaXQncyBpZC4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50IG9yIGNoZWNrcyBMb2NhbFN0b3JhZ2UgZm9yIGFueSBzYXZlZCBzdGF0ZXMgaWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBTY2hlZHVsZXIgZXZlbnRzLiBJZiBubyBzdGF0ZSBpcyBwcm92aWRlZCwgdGhlIGVsZW1lbnQgd2lsbCBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGEgc2F2ZWQgc3RhdGUuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGN1cnJlbnQgZXZlbnRzIG9mIHRoZSBlbGVtZW50IHRvIExvY2FsU3RvcmFnZS4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0KiBAcGFyYW0ge2FueVtdfSBzdGF0ZT8uIEFuIEFycmF5IGNvbnRhaW5pbmcgYSB2YWxpZCBzdHJ1Y3R1cmUgb2YgU2NoZWR1bGVyIGV2ZW50cy5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgU2NoZWR1bGVyIGNvbnRhaW5zIHRoZSBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBjb250YWluc0V2ZW50KGV2ZW50T2JqKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zRXZlbnQoZXZlbnRPYmopO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhbiBldmVudCBhcyBvYmplY3Qgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXQgKHNhbWUgYXMgdGhlIGRhdGFTb3VyY2UgZm9ybWF0KTogeyBsYWJlbD86IHN0cmluZywgZGF0ZVN0YXJ0OiBkYXRlLCBkYXRlRW5kOiBkYXRlLCBkZXNjcmlwdGlvbj86IHN0cmluZywgaWQ/OiBzdHJpbmcgfCBudW1iZXIsIGNsYXNzPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBhbGxEYXk/OiBib29sZWFuLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuLCByZXBlYXQ/OiB7IHJlcGVhdEZyZXE6IHN0cmluZywgcmVwZWF0SW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0T24/OiBudW1iZXIgfCBudW1iZXJbXSB8IGRhdGUsIHJlcGVhdEVuZD86IG51bWJlciB8IGRhdGUsIGV4Y2VwdGlvbnM/OiB7IGRhdGU6IGRhdGUsIGRhdGVTdGFydD86IGRhdGUsIGRhdGVFbmQ/OiBkYXRlLCBoaWRkZW4/OiBib29sZWFuLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuIH1bXSB9LCBzdGF0dXM/OiBzdHJpbmcgfSBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgU2NoZWR1bGVyIGV2ZW50IHRoYXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBpbiB0aGUgZWxlbWVudC5cblx0KiBAcGFyYW0ge251bWJlcn0gaW5kZXg/LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IHRvIGluc2VydCB0aGUgZXZlbnQgYXQuIElmIG5vdCBwcm92aWRlZCB0aGUgZXZlbnQgaXMgaW5zZXJ0ZWQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0RXZlbnQoZXZlbnRPYmo6IGFueSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0RXZlbnQoZXZlbnRPYmosIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRFdmVudChldmVudE9iaiwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGFuIGV2ZW50IG9iamVjdCBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdCAoc2FtZSBhcyB0aGUgZGF0YVNvdXJjZSBmb3JtYXQpOiB7IGxhYmVsPzogc3RyaW5nLCBkYXRlU3RhcnQ6IGRhdGUsIGRhdGVFbmQ6IGRhdGUsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBpZD86IHN0cmluZyB8IG51bWJlciwgY2xhc3M/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIG5vdGlmaWNhdGlvbnM/OiB7IGludGVydmFsOiBudW1lcmljLCB0eXBlPzogc3RyaW5nLCB0aW1lOiBudW1iZXJbXSB9W10sIGFsbERheT86IGJvb2xlYW4sIGRpc2FibGVEcmFnPzogYm9vbGVhbiwgZGlzYWJsZVJlc2l6ZT86IGJvb2xlYW4sIHJlcGVhdD86IHsgcmVwZWF0RnJlcTogc3RyaW5nLCByZXBlYXRJbnRlcnZhbDogbnVtYmVyLCByZXBlYXRPbj86IG51bWJlciB8IG51bWJlcltdIHwgZGF0ZSwgcmVwZWF0RW5kPzogbnVtYmVyIHwgZGF0ZSwgZXhjZXB0aW9ucz86IHsgZGF0ZTogZGF0ZSwgZGF0ZVN0YXJ0PzogZGF0ZSwgZGF0ZUVuZD86IGRhdGUsIGhpZGRlbj86IGJvb2xlYW4sIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcsIG5vdGlmaWNhdGlvbnM/OiB7IGludGVydmFsOiBudW1lcmljLCB0eXBlPzogc3RyaW5nLCB0aW1lOiBudW1iZXJbXSB9W10sIGRpc2FibGVEcmFnPzogYm9vbGVhbiwgZGlzYWJsZVJlc2l6ZT86IGJvb2xlYW4gfVtdIH0sIHN0YXR1cz86IHN0cmluZyB9IFxuXHQqIEBwYXJhbSB7YW55fSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhbiBldmVudCBvciBhIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIFNjaGVkdWxlciBldmVudC4gVGhlIHByb3BlcnRpZXMgb2YgdGhpcyBvYmplY3Qgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBkZXNpcmVkIGV2ZW50LlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVFdmVudChpbmRleDogYW55LCBldmVudE9iajogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUV2ZW50KGluZGV4LCBldmVudE9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlRXZlbnQoaW5kZXgsIGV2ZW50T2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbiBleGlzdGluZyBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGluZGV4LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGFuIGV2ZW50IG9yIHRoZSBhY3R1YWwgZXZlbnQgb2JqZWN0IHRvIGJlIHJlbW92ZWQuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUV2ZW50KGluZGV4OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgZXhjZXB0aW9ucyBvZiB0aGUgdGFyZ2V0IHJlcGVhdGluZyBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBUaGUgaW5kZXgsIGlkIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXhpc3RpbmcgcmVwZWF0aW5nIFNjaGVkdWxlciBldmVudC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RXZlbnRFeGNlcHRpb25zKGV2ZW50T2JqKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEV2ZW50RXhjZXB0aW9ucyhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGFuIGV2ZW50IGV4Y2VwdGlvbiB0byBhIHJlcGVhdGluZyBldmVudC4gVGhlIGV4Y2VwdGlvbiBvY2N1cmVuY2VzIGZvciBhIHJlcGVhdGluZyBldmVudCBjYW4gYmUgZ2F0aGVyZWQgdmlhIHRoZSBmb2xsb3dpbmcgbWV0aG9kczogb2NjdXJlbmNlc29jY3VycmVuY2VzQmV0d2Vlbm9jY3VycmVuY2VBZnRlcm9jY3VycmVuY2VCZWZvcmUuICBFeGFtcGxlIHVzYWdlOiBzY2hlZHVsZXIuYWRkRXZlbnRFeGNlcHRpb24oZXZlbnRPYmosIHsgZGF0ZTogb2NjdXJhbmNlRGF0ZSwgZGF0ZVN0YXJ0OiBuZXdEYXRlU3RhcnQsIGRhdGVFbmQ6IG5ld0RhdGVFbmQsIGxhYmVsOiAnRXhjZXB0aW9uJyB9KTsgXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBUaGUgaW5kZXgsIGlkIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXhpc3RpbmcgcmVwZWF0aW5nIFNjaGVkdWxlciBldmVudC5cblx0KiBAcGFyYW0ge2FueX0gZXhjZXB0aW9uT2JqLiBBbiBldmVudCBvYmplY3QgdGhhdCBkZXNjcmliZXMgYW4gZXhjZXB0aW9uLiBFeGNlcHRpb24gZXZlbnQgb2JqZWN0cyBtdXN0IGhhdmUgYSA8Yj5kYXRlPC9iPiBhdHRyaWJ1dGUgb2YgdHlwZSBEYXRlIHdoaWNoIGluZGljYXRlcyB0aGUgZGF0ZSBvZiBvY2N1cmVuY2UuXG5cdCovXG4gICAgcHVibGljIGFkZEV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqOiBhbnksIGV4Y2VwdGlvbk9iajogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBleGNlcHRpb25PYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBleGNlcHRpb25PYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGFuIGV2ZW50IGV4Y2VwdGlvbiBvZiBhIHJlcGVhdGluZyBldmVudC4gVGhlIGV4Y2VwdGlvbiBvY2N1cmVuY2VzIGZvciBhIHJlcGVhdGluZyBldmVudCBjYW4gYmUgZ2F0aGVyZWQgdmlhIHRoZSBmb2xsb3dpbmcgbWV0aG9kczogb2NjdXJlbmNlc29jY3VycmVuY2VzQmV0d2Vlbm9jY3VycmVuY2VBZnRlcm9jY3VycmVuY2VCZWZvcmUuICBFeGFtcGxlIHVzYWdlOiBzY2hlZHVsZXIudXBkYXRlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmosIGRhdGVPZk9jY3VyYW5jZSwgeyBkYXRlU3RhcnQ6IG5ld0RhdGVTdGFydCwgZGF0ZUVuZDogbmV3RGF0ZUVuZCwgbGFiZWw6ICdVcGRhdGVkIEV4Y2VwdGlvbicgfSk7IFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gVGhlIGluZGV4LCBpZCBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV4aXN0aW5nIHJlcGVhdGluZyBTY2hlZHVsZXIgZXZlbnQuXG5cdCogQHBhcmFtIHthbnl9IGV4Y2VwdGlvblJlZi4gVGhlIGluZGV4LCBpZCwgYW4gb2NjdXJlbmNlIGRhdGUgb2YgdGhlIGV4Y2VwdGlvbiBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV4aXN0aW5nIFNjaGVkdWxlciByZXBlYXRpbmcgZXZlbnQgZXhjZXB0aW9uLlxuXHQqIEBwYXJhbSB7YW55fSBleGNlcHRpb25PYmouIEFuIGV2ZW50IG9iamVjdCB0aGF0IGRlc2NyaWJlcyBhbiBleGNlcHRpb24uIEFsbCBhdHRyaWJ1dGVzIG9mIGFuIGV4Y2VwdGlvbiBjYW4gYmUgdXBkYXRlZCBleGNlcHQgdGhlIG9jY3VyYW5jZSBkYXRlICh0aGUgPGI+ZGF0ZTwvYj4gYXR0cmlidXRlKS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmo6IGFueSwgZXhjZXB0aW9uUmVmOiBhbnksIGV4Y2VwdGlvbk9iajogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBleGNlcHRpb25SZWYsIGV4Y2VwdGlvbk9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmosIGV4Y2VwdGlvblJlZiwgZXhjZXB0aW9uT2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbiBleGNlcHRpb24gZnJvbSBhIHJlcGVhdGluZyBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBUaGUgaW5kZXgsIGlkIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXhpc3RpbmcgcmVwZWF0aW5nIFNjaGVkdWxlciBldmVudC5cblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIFRoZSBpbmRleCwgaWQsIG9jY3VyYW5jZSBkYXRlIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXZlbnQgZXhjZXB0aW9uIHRoYXQgYmVsb25ncyB0byB0aGUgdGFyZ2V0IHJlcGVhdGluZyBldmVudC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmo6IGFueSwgaW5kZXg6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudEV4Y2VwdGlvbihldmVudE9iaiwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBwb3B1cCBXaW5kb3cgZm9yIHNwZWNpZmljIGV2ZW50IEVkaXRpbmcuIFxuXHQqIEBwYXJhbSB7YW55fSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIGV2ZW50IG9yIHRoZSBhY3R1YWwgZXZlbnQgb2JqZWN0IHRvIGJlIGVkaXRlZC5cblx0Ki9cbiAgICBwdWJsaWMgb3BlbldpbmRvdyhpbmRleDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbG9zZXMgdGhlIHBvcHVwIHdpbmRvdy4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlV2luZG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVdpbmRvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlV2luZG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFByZXBhcmVzIHRoZSBTY2hlZHVsZXIgZm9yIHByaW50aW5nIGJ5IG9wZW5pbmcgdGhlIGJyb3dzZXIncyBQcmludCBQcmV2aWV3LiBcblx0Ki9cbiAgICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2Nyb2xscyB0aGUgU2NoZWR1bGVyIHRvIGEgRGF0ZS4gXG5cdCogQHBhcmFtIHtEYXRlfSBkYXRlLiBUaGUgZGF0ZSB0byBzY3JvbGwgdG8uXG5cdCogQHBhcmFtIHtib29sZWFufSBzdHJpY3RTY3JvbGw/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2Nyb2xsIHN0cmljdGx5IHRvIHRoZSBkYXRlIG9yIG5vdC4gVGhpcyBtZWFuIHN0aGF0IHRoZSBTY2hlZHVsZXIgd2xsIHNjcm9sbCB0byB0aGUgYmVnaW5pbmcgb2YgdGhlIGNlbGwgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgdGFyZ2V0IGRhdGUuXG5cdCogQHBhcmFtIHtib29sZWFufSBhdXRvU2Nyb2xsPy4gQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBhbmQgZWxlbWVudCBib3VuZHMsIHRoZW4gYWRkcyBhbiBvZmZzZXQgdG8gc2Nyb2xsIHdpdGhpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aWV3LlxuXHQqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0RhdGUoZGF0ZTogRGF0ZSwgc3RyaWN0U2Nyb2xsPzogYm9vbGVhbiwgYXV0b1Njcm9sbD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9EYXRlKGRhdGUsIHN0cmljdFNjcm9sbCwgYXV0b1Njcm9sbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9EYXRlKGRhdGUsIHN0cmljdFNjcm9sbCwgYXV0b1Njcm9sbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0aGUgU2NoZWR1bGVyIHRvIGEgRGF0ZS4gXG5cdCogQHBhcmFtIHtEYXRlfSBkYXRlLiBUaGUgZGF0ZSB0byBuYXZpZ2F0ZSB0by5cblx0Ki9cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0RhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5uYXZpZ2F0ZVRvRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5uYXZpZ2F0ZVRvRGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2Nyb2xscyB0aGUgU2NoZWR1bGVyIHRvIGFuIGV2ZW50LiBcblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIFRoZSBpbmRleCBvZiBhIFNjaGVkdWxlciBldmVudCBvciB0aGUgYWN0dWFsIGV2ZW50IG9iamVjdCB0byBzY3JvbGwgdG8uXG5cdCovXG4gICAgcHVibGljIHNjcm9sbFRvRXZlbnQoaW5kZXg6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxUb0V2ZW50KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxUb0V2ZW50KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgYSBjdXN0b20gbm90aWZpY2F0aW9uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS4gVGhlIG5vdGlmaWNhdGlvbiBtZXNzYWdlLlxuXHQqIEBwYXJhbSB7YW55fSB0b2FzdFNldHRpbmdzLiBTbWFydC5Ub2FzdCBzZXR0aW5ncyB0byBiZSBhcHBsaWVkIHRvIHRoZSBUb2FzdCBlbGVtZW50IHdoZW4gb3BlbmluZyB0aGUgbm90aWZpY2F0aW9uLlxuXHQqL1xuICAgIHB1YmxpYyBvcGVuTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgdG9hc3RTZXR0aW5nczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5Ob3RpZmljYXRpb24obWVzc2FnZSwgdG9hc3RTZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3Blbk5vdGlmaWNhdGlvbihtZXNzYWdlLCB0b2FzdFNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIGFsbCBub3RpZmljYXRpb25zLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2VOb3RpZmljYXRpb25zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbGwgb2NjdXJhbmNlcyBvZiBhbiBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldm5ldCBvYmplY3QuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGNvdW50LiBUaGUgbnVtYmVyIG9mIG9jY3VyYW5jZXMgdG8gcmV0dXJuLiBCeSBkZWZhdWx0IDEwMCBkYXRlIG9jY3VyYW5jZXMgb2YgdGhlIGV2ZW50IGFyZSByZXR1cm5lZC5cblx0Ki9cbiAgICBwdWJsaWMgb2NjdXJyZW5jZXMoZXZlbnRPYmo6IGFueSwgY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlcyhldmVudE9iaiwgY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VzKGV2ZW50T2JqLCBjb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYWxsIG9jY3VyYW5jZXMgb2YgYW4gZXZlbnQgYmV0d2VlbiB0d28gZGF0ZXMuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0LlxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZUZyb20uIFRoZSBzdGFydCBkYXRlLlxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZVRvLiBUaGUgZW5kIGRhdGUuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VzQmV0d2VlbihldmVudE9iajogYW55LCBkYXRlRnJvbTogRGF0ZSwgZGF0ZVRvOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VzQmV0d2VlbihldmVudE9iaiwgZGF0ZUZyb20sIGRhdGVUbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZXNCZXR3ZWVuKGV2ZW50T2JqLCBkYXRlRnJvbSwgZGF0ZVRvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZmlyc3Qgb2NjdXJhbmNlIG9mIGFuIGV2ZW50IGFmdGVyIGEgZGF0ZS4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGRhdGUuIFRoZSBkYXRlIGFmdGVyIHdoaWNoIHRoZSBmaXJzdCBvY2N1cmFuY2Ugb2YgdGhlIGV2ZW50IHdpbGwgYmUgcmV0dXJuZWQuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VBZnRlcihldmVudE9iajogYW55LCBkYXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZUFmdGVyKGV2ZW50T2JqLCBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlQWZ0ZXIoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBsYXN0IG9jY3VyYW5jZSBvZiBhbiBldmVudCBiZWZvcmUgYSBkYXRlLiBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdC5cblx0KiBAcGFyYW0ge251bWJlcn0gZGF0ZS4gVGhlIGRhdGUgYmVmb3JlIHdoaWNoIHRoZSBmaXJzdCBvY2N1cmFuY2Ugb2YgdGhlIGV2ZW50IHdpbGwgYmUgcmV0dXJuZWQuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmo6IGFueSwgZGF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkYXRlU3RhcnQvZGF0ZUVuZCBvZiBhIHRpbWVsaW5lIGNlbGwuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNlbGwuIEEgU2NoZWR1bGVyIHRpbWVsaW5lIGNlbGwgZWxlbWVudC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q2VsbERhdGVSYW5nZShjZWxsKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENlbGxEYXRlUmFuZ2UoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgdG9vbHRpcChldmVudCBtZW51KSBmb3IgYW4gZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0IG9yIGl0J3MgaW5kZXguXG5cdCovXG4gICAgcHVibGljIG9wZW5FdmVudFRvb2x0aXAoZXZlbnRPYmo6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRXZlbnRUb29sdGlwKGV2ZW50T2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRXZlbnRUb29sdGlwKGV2ZW50T2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBldmVudCB0b29sdGlwIChldmVudCBtZW51KS4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlRXZlbnRUb29sdGlwKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZUV2ZW50VG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlRXZlbnRUb29sdGlwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBvciBmYWxzZSB3aGV0aGVyIHRoZSBkYXRlIGlzIHJlc3RyaWN0ZWQgb3Igbm90LiBcblx0KiBAcGFyYW0ge0RhdGV9IGRhdGUuIEEgRGF0ZSBvYmplY3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBpc0RhdGVSZXN0cmljdGVkKGRhdGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNEYXRlUmVzdHJpY3RlZChkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBvciBmYWxzZSB3aGV0aGVyIHRoZSBob3VyIGlzIHJlc3RyaWN0ZWQgb3Igbm90LiBcblx0KiBAcGFyYW0ge251bWJlciB8IERhdGV9IGhvdXIuIEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyBhbiBob3VyICggMCB0byAyMyApIG9yIGEgRGF0ZSBvYmplY3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBpc0hvdXJSZXN0cmljdGVkKGhvdXIpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNIb3VyUmVzdHJpY3RlZChob3VyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBvciBmYWxzZSB3aGV0aGVyIHRoZSBldmVudCBpcyByZXN0cmljdGVkIG9yIG5vdC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCAgb2JqZWN0IG9yIGEgZGlyZWN0IGV2ZW50IEhUTUxFbGVtZW50IGluc3RhbmNlLlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaXNFdmVudFJlc3RyaWN0ZWQoZXZlbnRPYmopOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNFdmVudFJlc3RyaWN0ZWQoZXZlbnRPYmopO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVsZXRlcyB0aGUgY3VycmVudCB1bmRvL3JlZG8gaGlzdG9yeS4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBkZWxldGVVbmRvUmVkb0hpc3RvcnkoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmRlbGV0ZVVuZG9SZWRvSGlzdG9yeSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgcG9zc2libGUgdG8gcmVkbyBhbiBhY3Rpb24uIFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgY2FuUmVkbygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuUmVkbygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgcG9zc2JpbGUgdG8gdW5kbyBhbiBhY3Rpb24uIFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgY2FuVW5kbygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuVW5kbygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVkbyB0aGUgbmV4dCBldmVudCBtb2RpZmljYXRpb24uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzdGVwPy4gQSBzdGVwIHRvIHJlZG8gdG8uXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyByZWRvKHN0ZXA/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlZG8oc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbmRvIHRoZSBsYXN0IGV2ZW50IG1vZGlmaWNhdGlvbi4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHN0ZXA/LiBBIHN0ZXAgdG8gdW5kbyB0by5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIHVuZG8oc3RlcD8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kbyhzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkJlZ2luVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVuZFVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1DaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2hhbmdpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUNoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUluc2VydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtSW5zZXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1SZW1vdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbVJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3Q2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVmlld0NoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd2aWV3Q2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3Q2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5naW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVmlld0NoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdDaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5naW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV2ZW50U2hvcnRjdXRLZXkuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXZlbnRTaG9ydGN1dEtleScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EYXRlQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcG92ZXJDZWxsSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJvcG92ZXJDZWxsLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BvdmVyQ2VsbCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcG92ZXJDZWxsSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVkaXREaWFsb2dPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXREaWFsb2dPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRWRpdERpYWxvZ09wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRWRpdERpYWxvZ0Nsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXREaWFsb2dDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FZGl0RGlhbG9nQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV2ZW50TWVudU9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV2ZW50TWVudUNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EYXRlTWVudU9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGF0ZU1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkYXRlTWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVmlld01lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZpZXdNZW51Q2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld01lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ25vdGlmaWNhdGlvbk9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ob3RpZmljYXRpb25PcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbk9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ25vdGlmaWNhdGlvbk9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk5vdGlmaWNhdGlvbkNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbkNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWdpblVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZFVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1JbnNlcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1JbnNlcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtUmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbVVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZpZXdDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZpZXdDaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudFNob3J0Y3V0S2V5SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRTaG9ydGN1dEtleScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RhdGVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcG92ZXJDZWxsSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcG92ZXJDZWxsJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wb3ZlckNlbGxIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVNZW51Q2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYXRlTWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aWV3TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51T3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZpZXdNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ25vdGlmaWNhdGlvbk9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25PcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbkNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==