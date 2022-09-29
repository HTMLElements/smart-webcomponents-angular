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
    Object.defineProperty(SchedulerComponent.prototype, "autoHeightAllDayCells", {
        /** @description Determines whether the all day cells in Day and Week views automatically change their height depending on the events count in these cells.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoHeightAllDayCells : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoHeightAllDayCells = value : undefined;
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
    Object.defineProperty(SchedulerComponent.prototype, "viewStartDay", {
        /** @description Determines the Start Date rule. The Week and TimelineWeek views start by default from the current date taking into account the firstDayOfWeek property. When this property is set to 'dateCurrent', these views will start from the value of the 'dateCurrent'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.viewStartDay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.viewStartDay = value : undefined;
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
    /** @description Adds a new view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} type. The view type.
    * @param {string} label. The view's label displayed in the header.
    * @param {string} value. The view's value used to identify the view.
    * @param {boolean} hideWeekend. Determines whether to hide the weekend.
    * @param {boolean} hideNonworkingWeekdays. Determines whether to hide the non working days.
    * @param {number} additionalDays. Determines whether to add additional days to the view.
    */
    SchedulerComponent.prototype.addView = function (type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
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
    /** @description Returns an array of the start and end view dates.
    * @returns {Date[]}
  */
    SchedulerComponent.prototype.getViewDates = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getViewDates();
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
    /** @description Sets the Scheduler's view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} view?. The view's value. For example: 'day'.
    */
    SchedulerComponent.prototype.setView = function (view) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setView(view);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setView(view);
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
    ], SchedulerComponent.prototype, "autoHeightAllDayCells", null);
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
    ], SchedulerComponent.prototype, "viewStartDay", null);
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
            exportAs: 'smart-scheduler', selector: 'smart-scheduler, [smart-scheduler]'
        })
    ], SchedulerComponent);
    return SchedulerComponent;
}(BaseElement));
export { SchedulerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuc2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3NjaGVkdWxlci8iLCJzb3VyY2VzIjpbInNtYXJ0LnNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEM7SUFBd0MsOENBQVc7SUFDbEQsNEJBQVksR0FBMEI7UUFBdEMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBMDVCbEM7OENBQ3NDO1FBQzVCLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7OENBQ3NDO1FBQzVCLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7VUFJRTtRQUNRLGNBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7OztVQUlFO1FBQ1Esa0JBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7OztVQUlFO1FBQ1Esb0JBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7Ozs7VUFLRTtRQUNRLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7OztVQUdFO1FBQ1Esa0JBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7O1VBR0U7UUFDUSxrQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZF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UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7K0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3lEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs4REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2lFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs4REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzZEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7b0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7b0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs0REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs4REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzJEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7b0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtxREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs0REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7bUVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtn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SUFTNUQ7UUFBVCxNQUFNLEVBQUU7eURBQTJEO0lBUTFEO1FBQVQsTUFBTSxFQUFFOzhEQUFnRTtJQVMvRDtRQUFULE1BQU0sRUFBRTs2REFBK0Q7SUFTOUQ7UUFBVCxNQUFNLEVBQUU7MkRBQTZEO0lBUzVEO1FBQVQsTUFBTSxFQUFFO21FQUFxRTtJQVNwRTtRQUFULE1BQU0sRUFBRTtnRUFBa0U7SUFTakU7UUFBVCxNQUFNLEVBQUU7aUVBQW1FO0lBU2xFO1FBQVQsTUFBTSxFQUFFO21FQUFxRTtJQVNwRTtRQUFULE1BQU0sRUFBRTtvRUFBc0U7SUFTckU7UUFBVCxNQUFNLEVBQUU7aUVBQW1FO0lBU2xFO1FBQVQsTUFBTSxFQUFFO2tFQUFvRTtJQVNuRTtRQUFULE1BQU0sRUFBRTtvRUFBc0U7SUFRckU7UUFBVCxNQUFNLEVBQUU7a0VBQW9FO0lBUW5FO1FBQVQsTUFBTSxFQUFFOytEQUFpRTtJQVFoRTtRQUFULE1BQU0sRUFBRTtnRUFBa0U7SUFRakU7UUFBVCxNQUFNLEVBQUU7a0VBQW9FO0lBTW5FO1FBQVQsTUFBTSxFQUFFOzhEQUFnRTtJQU0vRDtRQUFULE1BQU0sRUFBRTsrREFBaUU7SUFNaEU7UUFBVCxNQUFNLEVBQUU7OERBQWdFO0lBTS9EO1FBQVQsTUFBTSxFQUFFOytEQUFpRTtJQU1oRTtRQUFULE1BQU0sRUFBRTtrRUFBb0U7SUFNbkU7UUFBVCxNQUFNLEVBQUU7bUVBQXFFO0lBM3FDbEUsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsb0NBQW9DO1NBQzNFLENBQUM7T0FFVyxrQkFBa0IsQ0FvdUU5QjtJQUFELHlCQUFDO0NBQUEsQUFwdUVELENBQXdDLFdBQVcsR0FvdUVsRDtTQXB1RVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBTY2hlZHVsZXJFdmVudFJlbmRlck1vZGUsIFNjaGVkdWxlclJlcGVhdEZyZXEsIFNjaGVkdWxlck5vdGlmaWNhdGlvblR5cGUsIFNjaGVkdWxlckRheUZvcm1hdCwgRmlsdGVyTW9kZSwgU2NoZWR1bGVyR3JvdXBPcmllbnRhdGlvbiwgU2NoZWR1bGVySG91ckZvcm1hdCwgU2NoZWR1bGVySGVhZGVyRGF0ZVBvc2l0aW9uLCBTY2hlZHVsZXJIZWFkZXJOYXZpZ2F0aW9uU3R5bGUsIFNjaGVkdWxlckhlYWRlclZpZXdQb3NpdGlvbiwgU2NoZWR1bGVyTGVnZW5kTG9jYXRpb24sIFNjaGVkdWxlckxlZ2VuZFBvc2l0aW9uLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgTWludXRlRm9ybWF0LCBNb250aEZvcm1hdCwgUmVzaXplSGFuZGxlc1Zpc2liaWxpdHksIFNjaGVkdWxlclJlc291cmNlU29ydE9yZGVyLCBTY2hlZHVsZXJTY3JvbGxCdXR0b25zUG9zaXRpb24sIFNjaGVkdWxlclNvcnRPcmRlciwgU2NoZWR1bGVyVGltZWxpbmVEYXlTY2FsZSwgU2NoZWR1bGVyVGltZVpvbmUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgU2NoZWR1bGVyVmlld1R5cGUsIFNjaGVkdWxlclZpZXdzLCBTY2hlZHVsZXJWaWV3U2VsZWN0b3JUeXBlLCBTY2hlZHVsZXJWaWV3U3RhcnREYXksIFdlZWtEYXlGb3JtYXQsIFllYXJGb3JtYXQsIFNjaGVkdWxlckRhdGFFeHBvcnQsIFNjaGVkdWxlckV2ZW50LCBTY2hlZHVsZXJFdmVudFJlcGVhdCwgU2NoZWR1bGVyTm90aWZpY2F0aW9uLCBTY2hlZHVsZXJSZXNvdXJjZSwgU2NoZWR1bGVyU3RhdHVzZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBTY2hlZHVsZXJFdmVudFJlbmRlck1vZGUsIFNjaGVkdWxlclJlcGVhdEZyZXEsIFNjaGVkdWxlck5vdGlmaWNhdGlvblR5cGUsIFNjaGVkdWxlckRheUZvcm1hdCwgRmlsdGVyTW9kZSwgU2NoZWR1bGVyR3JvdXBPcmllbnRhdGlvbiwgU2NoZWR1bGVySG91ckZvcm1hdCwgU2NoZWR1bGVySGVhZGVyRGF0ZVBvc2l0aW9uLCBTY2hlZHVsZXJIZWFkZXJOYXZpZ2F0aW9uU3R5bGUsIFNjaGVkdWxlckhlYWRlclZpZXdQb3NpdGlvbiwgU2NoZWR1bGVyTGVnZW5kTG9jYXRpb24sIFNjaGVkdWxlckxlZ2VuZFBvc2l0aW9uLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgTWludXRlRm9ybWF0LCBNb250aEZvcm1hdCwgUmVzaXplSGFuZGxlc1Zpc2liaWxpdHksIFNjaGVkdWxlclJlc291cmNlU29ydE9yZGVyLCBTY2hlZHVsZXJTY3JvbGxCdXR0b25zUG9zaXRpb24sIFNjaGVkdWxlclNvcnRPcmRlciwgU2NoZWR1bGVyVGltZWxpbmVEYXlTY2FsZSwgU2NoZWR1bGVyVGltZVpvbmUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgU2NoZWR1bGVyVmlld1R5cGUsIFNjaGVkdWxlclZpZXdzLCBTY2hlZHVsZXJWaWV3U2VsZWN0b3JUeXBlLCBTY2hlZHVsZXJWaWV3U3RhcnREYXksIFdlZWtEYXlGb3JtYXQsIFllYXJGb3JtYXQsIFNjaGVkdWxlckRhdGFFeHBvcnQsIFNjaGVkdWxlckV2ZW50LCBTY2hlZHVsZXJFdmVudFJlcGVhdCwgU2NoZWR1bGVyTm90aWZpY2F0aW9uLCBTY2hlZHVsZXJSZXNvdXJjZSwgU2NoZWR1bGVyU3RhdHVzZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBEYXRhQWRhcHRlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRleHBvcnRBczogJ3NtYXJ0LXNjaGVkdWxlcicsXHRzZWxlY3RvcjogJ3NtYXJ0LXNjaGVkdWxlciwgW3NtYXJ0LXNjaGVkdWxlcl0nXG59KVxuXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPFNjaGVkdWxlcj4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIFNjaGVkdWxlcjtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogU2NoZWR1bGVyO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxTY2hlZHVsZXI+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtc2NoZWR1bGVyJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzY3JvbGwgc3BlZWQgd2hpbGUgZHJhZ2dpbmcgYW4gZXZlbnQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1Njcm9sbFN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY3JvbGxTdGVwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2Nyb2xsU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TY3JvbGxTdGVwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgYWxsIGRheSBjZWxscyBpbiBEYXkgYW5kIFdlZWsgdmlld3MgYXV0b21hdGljYWxseSBjaGFuZ2UgdGhlaXIgaGVpZ2h0IGRlcGVuZGluZyBvbiB0aGUgZXZlbnRzIGNvdW50IGluIHRoZXNlIGNlbGxzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9IZWlnaHRBbGxEYXlDZWxscygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IZWlnaHRBbGxEYXlDZWxscyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0hlaWdodEFsbERheUNlbGxzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IZWlnaHRBbGxEYXlDZWxscyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb2xvciBzY2hlbWUgZm9yIHRoZSBldmVudCBiYWNrZ3JvdW5kIHNlbGVjdG9yIGluIHRoZSBldmVudCB3aW5kb3cgZWRpdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGNvbG9yU2NoZW1lKCk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbG9yU2NoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xvclNjaGVtZSh2YWx1ZTogc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sb3JTY2hlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy9EaXNhYmxlcyB0aGUgY3VycmVudCB0aW1lIGluZGljYXRvci4gQ3VycmVudCB0aW1lIGluZGljYXRvciBzaG93cyB0aGUgY3VycmVudCB0aW1lIGluIHRoZSBhcHByb3ByaWF0ZSB2aWV3IGNlbGxzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWVJbmRpY2F0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlZnJlc2ggaW50ZXJ2YWwgaW4gc2Vjb25kcyBmb3IgdGhlIGN1cnJlbnRUaW1lSW5kaWNhdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZUluZGljYXRvckludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGNvbnRleHQgbWVudSBpdGVtcyB0aGF0IGFyZSB2aXNpYmxlIHdoZW4gdGhlIENvbnRleHQgTWVudSBpcyBvcGVuZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZXh0TWVudURhdGFTb3VyY2UoKTogYW55W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVEYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZXh0TWVudURhdGFTb3VyY2UodmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51RGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNsaXBib2FyZCBzaG9ydGN1dHMgZm9yIGNvcHkvcGFzdGUvY3V0IGFjdGlvbiBvZiBldmVudHMgYXJlIHZpc2libGUgaW4gdGhlIFNjaGVkdWxlciBjb250ZXh0IG1lbnUgb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udGV4dE1lbnVDbGlwYm9hcmRBY3Rpb25zKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVDbGlwYm9hcmRBY3Rpb25zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZXh0TWVudUNsaXBib2FyZEFjdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVDbGlwYm9hcmRBY3Rpb25zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGV2ZW50IGVsZW1lbnRzLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgZXZlbnRzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGV2ZW50IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBldmVudENvbnRlbnQgLSB0aGUgY29udGVudCBob2xkZXIgZm9yIHRoZSBldmVudCxldmVudE9iaiAtIHRoZSBldmVudCBvYmplY3QuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50VGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiB0aGUgZXZlbnQgY29sbGVjdG9yIGVsZW1lbnRzLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgZXZlbnRzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGV2ZW50IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBldmVudENvbnRlbnQgLSB0aGUgY29udGVudCBob2xkZXIgZm9yIHRoZSBldmVudCxldmVudE9iaiAtIHRoZSBldmVudCBvYmplY3QuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50Q29sbGVjdG9yVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgaG93IHRoZSBldmVudHMgaW5zaWRlIHRoZSBTY2hlZHVsZXIgYXJlIHJlbmRlcmVkLmNsYXNzaWMgLSB0aGUgZXZlbnRzIGFyZSBhcnJhbmdlZCBuZXh0IHRvIGVhY2ggb3RoZXIgYW5kIHRyeSB0byBmaXQgaW5zaWRlIHRoZSBjZWxscy5tb2Rlcm4gLSB0aGUgZXZlbnRzIG9iZXkgdGhlIENTUyBwcm9wZXJ0eSB0aGF0IGRldGVybWluZXMgdGhlaXIgc2l6ZSBhbmQgaWYgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIGluc2lkZSB0aGUgY2VsbCBmb3IgYWxsIGV2ZW50cyB0byBhcHBlYXIsIGFuIGV2ZW50IGNvbGxlY3RvciBpcyBjcmVhdGVkIHRvIGhvbGQgdGhlIHJlc3Qgb2YgdGhlIGV2ZW50cy4gT24gbW9iaWxlIHBob25lcyBvbmx5IGNvbGxlY3RvcnMgYXJlIGNyZWF0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBldmVudFJlbmRlck1vZGUoKTogU2NoZWR1bGVyRXZlbnRSZW5kZXJNb2RlIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50UmVuZGVyTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRSZW5kZXJNb2RlKHZhbHVlOiBTY2hlZHVsZXJFdmVudFJlbmRlck1vZGUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRSZW5kZXJNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGV2ZW50IG1lbnUgaXRlbXMgKHRvb2x0aXApLiBXaGVuIGNsaWNrZWQgb24gYW4gZXZlbnQgZWxlbWVudCBhbiBldmVudCBtZW51IHdpdGggZGV0YWlscyBvcGVucy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGV2ZW50cyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBldmVudCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogZXZlbnRDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgZXZlbnQsZXZlbnRPYmogLSB0aGUgZXZlbnQgb2JqZWN0Li4gV2hlbiB1c2luZyBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGl0J3MgcG9zc2libGUgdG8gYWRkIHByb3BlcnR5IGJpbmRpbmdzIGluc2lkZSB0aGUgdGVtcGxhdGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byB0aGUgY29ycmVzcG9uZGluZyBvYmplY3QgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGV2ZW50VG9vbHRpcFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFRvb2x0aXBUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRUb29sdGlwVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFRvb2x0aXBUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSB0aW1lbGluZSBjZWxscy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGNlbGxzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGNlbGwgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGNlbGxDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgY2VsbCxjZWxsRGF0ZSAtIHRoZSBjZWxsIGRhdGUuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNlbGxUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2VsbFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jZWxsVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY3VycmVudGx5IHZpc2libGUgZGF0ZSBmb3IgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGVDdXJyZW50KCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZUN1cnJlbnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVDdXJyZW50KHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVDdXJyZW50ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIFNjaGVkdWxlcnMncyBEYXRhIEV4cG9ydCBvcHRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YUV4cG9ydCgpOiBTY2hlZHVsZXJEYXRhRXhwb3J0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFFeHBvcnQodmFsdWU6IFNjaGVkdWxlckRhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBldmVudHMgdGhhdCB3aWxsIGJlIGxvYWRlZCBpbnNpZGUgdGhlIFRpbWVsaW5lLiBFYWNoIGV2ZW50IHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBTY2hlZHVsZXJFdmVudFtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IFNjaGVkdWxlckV2ZW50W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSB0ZXh0IGluc2lkZSB0aGUgZGF0ZSBzZWxlY3RvciBsb2NhdGVkIGluIHRoZSBoZWFkZXIuIFRoZSBjYWxsYmFjayBoYXMgb25lIHBhcmFtZXRlciAtIHRoZSBjdXJyZW50IGRhdGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlU2VsZWN0b3JGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZVNlbGVjdG9yRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVTZWxlY3RvckZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0ZVNlbGVjdG9yRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGF5IGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW4gdGhlIHRpbWVsaW5lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF5Rm9ybWF0KCk6IFNjaGVkdWxlckRheUZvcm1hdCB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXlGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRheUZvcm1hdCh2YWx1ZTogU2NoZWR1bGVyRGF5Rm9ybWF0IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgYXV0byBzY3JvbGxpbmcgb2YgdGhlIHRpbWVsaW5lIHdoaWxlIGRyYWdnaW5nL3Jlc2l6aW5nIGFuIGV2ZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUF1dG9TY3JvbGwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQXV0b1Njcm9sbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZUF1dG9TY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUF1dG9TY3JvbGwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgZHJhZ2dpbmcgb2YgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZURyYWcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRHJhZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZURyYWcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURyYWcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgZHJvcHBpbmcgb2YgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZURyb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRHJvcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZURyb3AodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURyb3AgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgcmVzaXppbmcgb2YgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVJlc2l6ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVSZXNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVSZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVJlc2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgY2VsbCBzZWxlY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVNlbGVjdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VsZWN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSB3aW5kb3cgZWRpdG9yIGZvciB0aGUgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVdpbmRvd0VkaXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVXaW5kb3dFZGl0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVXaW5kb3dFZGl0b3IodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVdpbmRvd0VkaXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgY29udGV4dCBtZW51IG9mIHRoZSBldmVudHMgYW5kIGNlbGxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUNvbnRleHRNZW51KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUNvbnRleHRNZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlQ29udGV4dE1lbnUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUNvbnRleHRNZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBldmVudCBtZW51IHRoYXQgYXBwZWFycyB3aGVuIGFuIGV2ZW50L2NvbGxlY3RvciBoYXMgYmVlbiBjbGlja2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUV2ZW50TWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVFdmVudE1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVFdmVudE1lbnUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUV2ZW50TWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgdmlldyBtZW51IHRoYXQgYWxsb3dzIHRvIHNlbGVjdCB0aGUgY3VycmVudCBTY2hlZHVsZXIgdmlldy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVWaWV3TWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVWaWV3TWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVZpZXdNZW51KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVWaWV3TWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgZGF0ZSBtZW51IHRoYXQgYWxsb3dzIHRvIHNlbGVjdCB0aGUgY3VycmVudCBTY2hlZHVsZXIgZGF0ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVEYXRlTWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEYXRlTWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZURhdGVNZW51KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEYXRlTWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBkcmFnIGZlZWRiYWNrIHRoYXQgYXBwZWFycyB3aGVuIGFuIGV2ZW50IGlzIGRyYWdnZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmFnRmVlZGJhY2tGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ0ZlZWRiYWNrRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYWdGZWVkYmFja0Zvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ0ZlZWRiYWNrRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgb2Zmc2V0IGZvciB0aGUgZHJhZyBmZWVkYmFjayBmcm9tIHRoZSBwb2ludGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ09mZnNldCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhZ09mZnNldCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdPZmZzZXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZmlsdGVyaW5nIGNvbmRpdGlvbiBmb3IgdGhlIGV2ZW50cy5UaGUgZmlsdGVyIHByb3BlcnR5IHRha2VzIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBmdW5jdGlvbi4gRWFjaCBvYmplY3QgcmVwcmVzZW50cyBhIHNpbmdsZSBmaWx0ZXJpbmcgY29uZGl0aW9uIHdpdGggdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOiBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIFNjaGVkdWxlciBldmVudCBwcm9wZXJ0eSB0aGF0IHdpbGwgYmUgZmlsdGVyZWQgYnkudmFsdWUgLSB0aGUgZmlsdGVyaW5nIGNvbmRpdGlvbiB2YWx1ZS4gVGhlIHZhbHVlIHdpbGwgYmUgdXNlZCB0byBjb21wYXJlIHRoZSBldmVudHMgYmFzZWQgb24gdGhlIGZpbHRlck1vZGUsIGZvciBleGFtcGxlOiBbeyBuYW1lOiAncHJpY2UnLCB2YWx1ZTogMjUgfV0uIFRoZSB2YWx1ZSBjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gYWNjZXB0cyBhIHNpbmdsZSBhcmd1ZW1udCAtIHRoZSB2YWx1ZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBmaWx0ZXJlZCBhdHRyaWJ1dGUuIFRoZSBmdW5jdGlvbiBhbGxvd3MgdG8gYXBwbHkgY3VzdG9tIGNvbmRpdGlvbiB0aGF0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0IGZpbHRlciBtb2Rlcy4gSXQgc2hvdWxkIHJldHVybiB0cnVlICggaWYgdGhlIGV2bmV0IHBhc3NlcyB0aGUgZmlsdGVyaW5nIGNvbmRpdGlvbiApIG9yIGZhbHNlICggaWYgdGhlIGV2ZW50IGRvZXMgbm90IG1lZXQgdGhlIGZpbHRlcmluZyBjb25kaXRpb24gKS4gSGVyZSdzIGFuIGV4YW1wbGU6IFt7IG5hbWU6ICdyb29tSWQnLCB2YWx1ZTogKGlkKSA9PiBbJzInLCAnMyddLmluZGV4T2YoaWQgKyAnJykgPiAtMSB9XS4gSW4gdGhlIGV4YW1wbGUgdGhlIGV2ZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgJ3Jvb21JZCcgcHJvcGVydHkgdGhhdCBpcyBlcXVhbCB0byAnMicgb3IgJzMnIHdpbGwgYmUgZmlsdGVyZWQgb3V0Li4gSWYgYSBmdW5jdGlvbiBpcyBzZXQgdG8gdGhlIGZpbHRlciBwcm9wZXJ0eSBpbnN0ZWFkLCBpdCBhbGxvd3MgdG8gY29tcGxldGVseSBjdXN0b21pemUgdGhlIGZpbHRlcmluZyBsb2dpYy4gVGhlIGZ1bmN0aW9uIHBhc3NlcyBhIHNpbmdsZSBhcmd1bWVudCAtIGVhY2ggU2NoZWR1bGVyIGV2ZW50IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQuIFRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIHRydWUgKCBpZiB0aGUgY29uZGl0aW9uIGlzIG1ldCApIG9yIGZhbHNlICggaWYgbm90ICkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBTY2hlZHVsZXIncyBmaWx0ZXJpbmcgaXMgZW5hYmxlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJhYmxlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJhYmxlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmaWx0ZXIgbW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlck1vZGUoKTogRmlsdGVyTW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJNb2RlKHZhbHVlOiBGaWx0ZXJNb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlck1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zICBhbiBhcnJheSBvZiBhbGwgU2NoZWR1bGVyIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGV2ZW50cygpOiBTY2hlZHVsZXJFdmVudFtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRzKHZhbHVlOiBTY2hlZHVsZXJFdmVudFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmaXJzdCBkYXkgb2Ygd2VlayBmb3IgdGhlIFNjaGVkdWxlci4gQnkgZGVmYXVsdCBpdCdzIFN1bmRheS4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maXJzdERheU9mV2VlayA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlyc3REYXlPZldlZWsodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maXJzdERheU9mV2VlayA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBmb290ZXIgb2YgdGhlIFNjaGVkdWxlci4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQsIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogZm9vdGVyQ29udGFpbmVyIC0gdGhlIGZvb3RlciBjb250YWluZXIuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9vdGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmb290ZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZXZlbnRzIHdpbGwgYmUgZ3JvdXBlZCBieSBkYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBCeURhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEJ5RGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBCeURhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBCeURhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZ3JvdXBpbmcgb3JpZW50YXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cE9yaWVudGF0aW9uKCk6IFNjaGVkdWxlckdyb3VwT3JpZW50YXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBPcmllbnRhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBPcmllbnRhdGlvbih2YWx1ZTogU2NoZWR1bGVyR3JvdXBPcmllbnRhdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cE9yaWVudGF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGdyb3VwIGNlbGxzIHRoYXQgYXJlIHZpc2libGUgaW5zaWRlIHRoZSBoZWFkZXIuIEl0IGNhbiBiZSBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBjZWxscyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBncm91cCBjZWxsIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBjZWxsQ29udGVudCAtIHRoZSBjb250ZW50IGhvbGRlciBmb3IgdGhlIGdyb3VwIGNlbGwuY2VsbE9iaiAtIHRoZSBncm91cCBjZWxsIG9iamVjdC4uIFdoZW4gdXNpbmcgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCBpdCdzIHBvc3NpYmxlIHRvIGFkZCBwcm9wZXJ0eSBiaW5kaW5ncyBpbnNpZGUgdGhlIHRlbXBsYXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZXNvdXJjZXMgdGhhdCB0aGUgZXZlbnRzIGFyZSBncm91cGVkIGJ5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3Vwcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBlbmQgaG91ciB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluICdkYXknIGFuZCAnd2Vlaycgdmlld3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRW5kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3VyRW5kKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckVuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzdGFydCBob3VyIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gJ2RheScgYW5kICd3ZWVrJyB2aWV3cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhvdXJTdGFydCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91clN0YXJ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3VyU3RhcnQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyU3RhcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0dGluZyBvZiBob3VycyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRm9ybWF0KCk6IFNjaGVkdWxlckhvdXJGb3JtYXQgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG91ckZvcm1hdCh2YWx1ZTogU2NoZWR1bGVySG91ckZvcm1hdCB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGhlYWRlciBvZiB0aGUgU2NoZWR1bGVyLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCwgaXQncyBpZCBhcyBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBoZWFkZXJDb250ZW50IC0gdGhlIGhlYWRlciBjb250YWluZXIuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgRGF0ZSBzZWxlY3RvciBpbnNpZGUgdGhlIEhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlckRhdGVQb3NpdGlvbigpOiBTY2hlZHVsZXJIZWFkZXJEYXRlUG9zaXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyRGF0ZVBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJEYXRlUG9zaXRpb24odmFsdWU6IFNjaGVkdWxlckhlYWRlckRhdGVQb3NpdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJEYXRlUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHN0eWxpbmcgb2YgdGhlIEhlYWRlciBuYXZpZ2F0aW9uIGNvbnRyb2xzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyTmF2aWdhdGlvblN0eWxlKCk6IFNjaGVkdWxlckhlYWRlck5hdmlnYXRpb25TdHlsZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJOYXZpZ2F0aW9uU3R5bGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhlYWRlck5hdmlnYXRpb25TdHlsZSh2YWx1ZTogU2NoZWR1bGVySGVhZGVyTmF2aWdhdGlvblN0eWxlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlck5hdmlnYXRpb25TdHlsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIHZpZXcgc2VsZWN0b3IgY29udHJvbCBpbnNpZGUgdGhlIEhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclZpZXdQb3NpdGlvbigpOiBTY2hlZHVsZXJIZWFkZXJWaWV3UG9zaXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyVmlld1Bvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJWaWV3UG9zaXRpb24odmFsdWU6IFNjaGVkdWxlckhlYWRlclZpZXdQb3NpdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJWaWV3UG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSAnQWxsIERheScgY29udGFpbmVyIHdpdGggdGhlIGFsbCBkYXkgZXZlbnRzIGlzIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlQWxsRGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUFsbERheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZUFsbERheSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlQWxsRGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZGF5cyBzZXQgYnkgJ25vbndvcmtpbmdEYXlzJyBwcm9wZXJ0eSBhcmUgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVOb253b3JraW5nV2Vla2RheXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTm9ud29ya2luZ1dlZWtkYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlTm9ud29ya2luZ1dlZWtkYXlzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVOb253b3JraW5nV2Vla2RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIG90aGVyIG1vbnRoIGRheXMgYXJlIHZpc2libGUgd2hlbiB2aWV3IGlzIHNldCB0byBtb250aC4gV2hlbiBlbmFibGVkLCBldmVudHMgdGhhdCBzdGFydCBvbiBvdGhlciBtb250aCBkYXlzIGFyZSBub3QgZGlzcGxheWVkIGFuZCB0aGUgY2VsbHMgdGhhdCByZXByZXNlbnQgc3VjaCBkYXlzIGRvIG5vdCBhbGxvdyB0aGUgY3JlYXRpb24gb2YgbmV3IGV2ZW50cyBvbiB0aGVtLiBBbHNvIGRyYWdnaW5nIGFuZCBkcm9waW5nIGFuIGV2ZW50IG9uIG90aGVyIG1vbnRoIGRheXMgaXMgbm90IGFsbG93ZWQuIFJlc3ppbmcgaXMgYWxzbyBhZmZlY3RlZC4gRXZlbnRzIGNhbiBlbmQgb24gb3RoZXIgbW9udGggZGF5cywgYnV0IGNhbm5vdCBzdGFydCBvbiBvbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlT3RoZXJNb250aERheXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlT3RoZXJNb250aERheXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVPdGhlck1vbnRoRGF5cyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlT3RoZXJNb250aERheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSAnVG9kYXknIGJ1dHRvbiBpcyBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVRvZGF5QnV0dG9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvZGF5QnV0dG9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlVG9kYXlCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvZGF5QnV0dG9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgY2hlY2thYmxlIGl0ZW1zIGluIHRoZSB2aWV3IHNlbGVjdGlvbiBtZW51IGFyZSBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVmlld01lbnVDaGVja2FibGVJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB3ZWVrZW5kIGRheXMgYXJlIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlV2Vla2VuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVXZWVrZW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlV2Vla2VuZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlV2Vla2VuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgbGVnZW5kIGluc2lkZSB0aGUgU2NoZWR1bGVyLiBCeSBkZWZhdWx0IHRoZSBsb2NhdGlvbiBpcyBpbnNpZGUgdGhlIGZvb3RlciBidXQgaXQgY2FuIGFsc28gcmVzaWRlIGluIHRoZSBoZWFkZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsZWdlbmRMb2NhdGlvbigpOiBTY2hlZHVsZXJMZWdlbmRMb2NhdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sZWdlbmRMb2NhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGVnZW5kTG9jYXRpb24odmFsdWU6IFNjaGVkdWxlckxlZ2VuZExvY2F0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZExvY2F0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBsZWdlbmQuIEJ5IGRlZmF1bHQgaXQncyBwb3NpdGlvbmVkIHRvIHRoZSBuZWFyIHNpZGUgYnV0IHNldHRpbmcgaXQgdG8gJ2Zhcicgd2lsbCBjaGFuZ2UgdGhhdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxlZ2VuZFBvc2l0aW9uKCk6IFNjaGVkdWxlckxlZ2VuZFBvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZFBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsZWdlbmRQb3NpdGlvbih2YWx1ZTogU2NoZWR1bGVyTGVnZW5kUG9zaXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGVnZW5kUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbW91c2Ugd2hlZWwgc3RlcC4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byBhIHBvc2l0aXZlIG51bWJlciwgdGhlIHNjcm9sbCBzdGVwIHdpdGggbW91c2Ugd2hlZWwgb3IgdHJhY2twYWQgd2lsbCBkZXBlbmQgb24gdGhlIHByb3BlcnR5IHZhbHVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW91c2VXaGVlbFN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vdXNlV2hlZWxTdGVwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtb3VzZVdoZWVsU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vdXNlV2hlZWxTdGVwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2VhdGhlciBvciBub3QgaG9yaXpvbnRhbCBzY3JvbGxiYXIgaXMgc2hvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSgpOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkodmFsdWU6IEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBsYW5ndWFnZSBvZiB0aGUgU2NoZWR1bGVyLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWF4aW11bSB2aWV3IGRhdGUgZm9yIHRoZSBTY2hlZHVsZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXgoKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1heCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZXZlbnRzIHBlciBTY2hlZHVsZXIgY2VsbC4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG51bGwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgbnVtYmVyIG9mIGV2ZW50cyBwZXIgY2VsbCBpcyBhdXRvbWF0aWNhbGx5IGRldGVybWluZWQgYnkgdGhlIHNpemUgb2YgdGhlIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1heEV2ZW50c1BlckNlbGwoKTogbnVtYmVyIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXhFdmVudHNQZXJDZWxsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXhFdmVudHNQZXJDZWxsKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heEV2ZW50c1BlckNlbGwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXRtaW5lcyB0aGUgbWluaW11bSB2aWV3IGRhdGUgZm9yIHRoZSBTY2hlZHVsZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtaW4oKTogc3RyaW5nIHwgRGF0ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1pbih2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgZWxlbWVudCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW51dGUgZm9ybWF0dGluZyBpbnNpZGUgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbnV0ZUZvcm1hdCgpOiBNaW51dGVGb3JtYXQgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWludXRlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW51dGVGb3JtYXQodmFsdWU6IE1pbnV0ZUZvcm1hdCB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW51dGVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbW9udGggbmFtZSBmb3JtYXR0aW5nIGluc2lkZSB0aGUgU2NoZWR1bGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9udGhGb3JtYXQoKTogTW9udGhGb3JtYXQgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1vbnRoRm9ybWF0KHZhbHVlOiBNb250aEZvcm1hdCB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb250aEZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBub253b3JraW5nIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwIHRvIDYsIHdoZXJlIDAgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBhbmQgNiBpcyB0aGUgbGFzdCBkYXkuIE5vbndvcmtpbmcgZGF5cyB3aWxsIGJlIGNvbG9yZWQgZGlmZmVyZW50bHkgaW5zaWRlIHRoZSBUaW1lbGluZS4gVGhlIGNvbG9yIGlzIGRldGVybWluZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nRGF5cygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5vbndvcmtpbmdEYXlzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBob3VycyBvZiB0aGUgZGF5LiBIb3VycyBhcmUgcmVwcmVzZW50ZWQgYXMgbnVtYmVycyBpbnNpZGUgYW4gYXJyYXksIGhvd2V2ZXIgcmFuZ2VzIG9mIGhvdXJzIGNhbiBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IHdpdGggc3RhcnRpbmcgYW5kIGVuZGluZyBob3VyIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBJbiB0aGUgdGltbGluZSB0aGUgY2VsbHMgdGhhdCByZXByZXNlbnQgbm9ud29ya2luZyBkYXlzIGFyZSBjb2xvcmVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHJlc3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nSG91cnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdIb3VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm9ud29ya2luZ0hvdXJzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0hvdXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGludGVydmFsIChpbiBzZWNvbmRzKSBhdCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGNoZWNrIGZvciBub3RpZmljYXRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbm90aWZpY2F0aW9uSW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vdGlmaWNhdGlvbkludGVydmFsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub3RpZmljYXRpb25JbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vdGlmaWNhdGlvbkludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHJlc2l6ZSBoYW5kbGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzaXplSGFuZGxlc1Zpc2liaWxpdHkoKTogUmVzaXplSGFuZGxlc1Zpc2liaWxpdHkgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplSGFuZGxlc1Zpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5KHZhbHVlOiBSZXNpemVIYW5kbGVzVmlzaWJpbGl0eSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVIYW5kbGVzVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByYXRlIGF0IHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgcmVmcmVzaCBpdCdzIGNvbnRlbnQgb24gZWxlbWVudCByZXNpemUuIEJ5IGRlZmF1bHQgaXQncyByZWZyZXNoIGltbWVkaWF0ZWx5LiBUaGlzIHByb3BlcnR5IGlzIHVzZWQgZm9yIGVsZW1lbnQgcmVzaXplIHRocm90dGxpbmcgKi9cblx0QElucHV0KClcblx0Z2V0IHJlc2l6ZUludGVydmFsKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbnRlcnZhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplSW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBvZiByZXNvdXJjZXMgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlcygpOiBTY2hlZHVsZXJSZXNvdXJjZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VzKHZhbHVlOiBTY2hlZHVsZXJSZXNvdXJjZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGFuIGFycmF5IG9mIGRhdGVzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIHRvIGhhdmUgZXZlbnRzIG9uLiBFdmVudHMgdGhhdCBvdmVybGFwIHJlc3RyaWN0ZWQgRGF0ZXMgb3Igc3RhcnQvZW5kIG9uIHRoZW0gd2lsbCBub3QgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzdHJpY3RlZERhdGVzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkRGF0ZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc3RyaWN0ZWREYXRlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc3RyaWN0ZWREYXRlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGFuIGFycmF5IG9mIGhvdXJzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIHRvIGhhdmUgZXZlbnRzIG9uLiBFdmVudHMgdGhhdCBvdmVybGFwIHJlc3RyaWN0ZWQgSG91cnMgb3Igc3RhcnQvZW5kIG9uIHRoZW0gd2lsbCBub3QgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzdHJpY3RlZEhvdXJzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkSG91cnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc3RyaWN0ZWRIb3Vycyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc3RyaWN0ZWRIb3VycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBkYXRlIG5hdmlnYXRpb24gbmF2aWdhdGlvbiBidXR0b25zIGluc2lkZSB0aGUgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2Nyb2xsQnV0dG9uc1Bvc2l0aW9uKCk6IFNjaGVkdWxlclNjcm9sbEJ1dHRvbnNQb3NpdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxCdXR0b25zUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNjcm9sbEJ1dHRvbnNQb3NpdGlvbih2YWx1ZTogU2NoZWR1bGVyU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbEJ1dHRvbnNQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzL0Rpc2FibGVzIHRoZSBjdXJyZW50IHRpbWUgc2hhZGVyLiBJZiBlbmFibGVkIGFsbCBjZWxscyB0aGF0IHJlcHJlc2VudCBwYXN0IHRpbWUgd2lsbCBiZSBzaGFkZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaGFkZVVudGlsQ3VycmVudFRpbWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaGFkZVVudGlsQ3VycmVudFRpbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNoYWRlVW50aWxDdXJyZW50VGltZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaGFkZVVudGlsQ3VycmVudFRpbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXNvdXJjZSBsZWdlbmQgaXMgdmlzaWJsZSBvciBub3QuIFRoZSBMZWdlbmQgc2hvd3MgdGhlIHJlc291cmNlcyBhbmQgdGhlaXIgaXRlbXMgaW4gdGhlIGZvb3RlciBzZWN0aW9uIG9mIHRoZSBTY2hlZHVsZXIuIElmIGZpbHRlcmFibGUgaXMgZW5hYmxlZCBpdCBpcyBwb3NzaWJsZSB0byBmaWx0ZXIgYnkgcmVzb3VyY2UgaXRlbXMgYnkgY2xpY2tpbmcgb24gdGhlIGNvcnJlc3BvbmRpbmcgcmVzb3VyY2UgaXRlbSBmcm9tIHRoZSBsZWdlbmQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93TGVnZW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0xlZ2VuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0xlZ2VuZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93TGVnZW5kID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG5hbWUgb2YgdGhlIHJlc291cmNlIGRhdGEgaXRlbSBwcm9wZXJ0eSB0aGF0IHdpbGwgYmUgdXNlZCBmb3Igc29ydGluZyB0aGUgcmVzb3VyY2UgZGF0YSBkZWZpbmVkIGFzIHRoZSByZXNvdXJjZS5kYXRhU291cmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydEJ5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0QnkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRCeSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRCeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gZGVmaW5lIGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gc29ydCB0aGUgcmVzb3VyY2UgZGF0YS4gVGhlIHNvcnRGdW5jdGlvbiBpcyB1c2VkIHdoZW4gc29ydE9yZGVyIGlzIHNldCB0byBjdXN0b20uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNvcnRpbmcgb3JkZXIgb2YgdGhlIHJlc291cmNlIGRhdGEgaXRlbXMuIFdoZW4gc2V0IHRvIGN1c3RvbSwgYSBjdXN0b20gc29ydGluZyBmdW5jdGlvbiBoYXMgdG8gYmUgZGVmaW5lZCBmb3IgdGhlIHNvcnRGdW5jdGlvbiBwcm9wZXJ0eS4gVGhlIGFzYyBzdGFuZHMgZm9yICdhc2NlbmRpbmcnIHdoaWxlIGRlc2MgbWVhbnMgJ2Rlc2NlbmRpbmcnIHNvcnRpbmcgb3JkZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0T3JkZXIoKTogU2NoZWR1bGVyU29ydE9yZGVyIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRPcmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydE9yZGVyKHZhbHVlOiBTY2hlZHVsZXJTb3J0T3JkZXIgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE9yZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlcGVhdGluZyBkZWxheSBvZiB0aGUgcmVwZWF0IGJ1dHRvbnMgaW5zaWRlIHRoZSBoZWFkZXIgb2YgdGhlIGVsZW1lbnQuIFN1Y2ggYnV0dG9ucyBhcmUgdGhlIERhdGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgdmlldyBzY3JvbGwgYnV0dG9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNwaW5CdXR0b25zRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwaW5CdXR0b25zRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNwaW5CdXR0b25zRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0RlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGluaXRpYWwgZGVsYXkgb2YgdGhlIHJlcGVhdCBidXR0b25zIGluc2lkZSB0aGUgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiBTdWNoIGJ1dHRvbnMgYXJlIHRoZSBEYXRlIG5hdmlnYXRpb24gYnV0dG9ucyBhbmQgdGhlIHZpZXcgc2Nyb2xsIGJ1dHRvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcGluQnV0dG9uc0luaXRpYWxEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BpbkJ1dHRvbnNJbml0aWFsRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNwaW5CdXR0b25zSW5pdGlhbERlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BpbkJ1dHRvbnNJbml0aWFsRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyB0aGUgc3RhdHVzZXMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uIHRob3VyZ2ggdGhlIHdpbmRvdyBlZGl0b3IgZm9yIHRoZSBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzdGF0dXNlcygpOiBTY2hlZHVsZXJTdGF0dXNlW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdHVzZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN0YXR1c2VzKHZhbHVlOiBTY2hlZHVsZXJTdGF0dXNlW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdHVzZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBlbGVtZW50J3MgdmlzdWFsIHRoZW1lLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZvcm1hdCBmdW5jdGlvbiBmb3IgdGhlIEhlYWRlciBvZiB0aGUgVGltZWxpbmUuIEFsbG93cyB0byBtb2RpZnkgdGhlIGRhdGUgbGFiZWxzIGluIHRoZSBoZWFkZXIgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRlIHNjYWxlIGZvciB0aGUgdGltZWxpbmUgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lbGluZURheVNjYWxlKCk6IFNjaGVkdWxlclRpbWVsaW5lRGF5U2NhbGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVEYXlTY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZWxpbmVEYXlTY2FsZSh2YWx1ZTogU2NoZWR1bGVyVGltZWxpbmVEYXlTY2FsZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZURheVNjYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMvRGlzYWJsZXMgdGhlIHRpY2sgbWFya3MgbmV4dCB0byB0aGUgdGltZSBjZWxscyBpbiB0aGUgdmVydGljYWwgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiBUaW1lIGhlYWRlciBhcHBlYXJzIGluICdkYXknIGFuZCAnd2Vlaycgdmlld3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lUnVsZXJUaWNrcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVSdWxlclRpY2tzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lUnVsZXJUaWNrcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lUnVsZXJUaWNrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aW1lWm9uZSBmb3IgdGhlIGVsZW1lbnQuIEJ5IGRlZmF1bHQgaWYgdGhlIGxvY2FsIHRpbWUgem9uZSBpcyB1c2VkIGlmIHRoZSBwcm9wZXJ0eSBpcyBub3Qgc2V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZVpvbmUoKTogU2NoZWR1bGVyVGltZVpvbmUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVpvbmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVab25lKHZhbHVlOiBTY2hlZHVsZXJUaW1lWm9uZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lWm9uZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gZGlzcGxheSBhZGRpdGlvbmFsIHRpbWVab25lcyBhdCBvbmNlIGFsb25nIHdpdGggdGhlIGRlZmF1bHQgdGhhdCBpcyBzZXQgdmlhIHRoZSB0aW1lWm9uZSBwcm9wZXJ0eS4gQWNjZXB0cyBhbiBhcnJheSB2YWx1ZXMgdGhhdCByZXByZXNlbnQgdGhlIGlkcyBvZiB2YWxpZCB0aW1lIHpvbmVzLiBUaGUgcG9zc2JpbGUgdGltZSB6b25lcyBjYW4gYmUgdmlld2VkIGluIHRoZSB0aW1lWm9uZSBwcm9wZXJ0eSBkZXNjcmlwdGlvbi4gQnkgZGVmYXVsdCB0aGUgbG9jYWwgdGltZSB6b25lIGlzIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpbWVab25lcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVpvbmVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lWm9uZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lWm9uZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGVsYXkgKCBpbiBtaWxpc2Vjb25kcykgYmVmb3JlIHRoZSB0b29sdGlwL21lbnUgYXBwZWFycy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2x0aXBEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcERlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sdGlwRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgb2Zmc2V0IG90IHRoZSB0b29sdGlwL21lbnUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwT2Zmc2V0KCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXBPZmZzZXQodmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBPZmZzZXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3ZWF0aGVyIG9yIG5vdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgc2hvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB2ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGN1cnJlbnQgdmlldy4gVGhlIHByb3BlcnR5IGFjY2VwdHMgdmlldyB2YWx1ZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgdmlld3MgcHJvcGVydHkuIEN1c3RvbSB2aWV3cyBzaG91bGQgY29udGFpbiBhIHZhbGlkIHZhbHVlIHRoYXQgd2lsbCBiZSBzZXQgYXMgdGhlIGN1cnJlbnQgdmlldy4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZpZXcodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB0aGUgY3VycmVudCBTY2hlZHVsZXIgdmlld1R5cGUuIEN1c3RvbSB2aWV3cyBtdXN0IGNvbnRhaW4gYSB2YWxpZCB0eXBlIHByb3BlcnR5IHRoYXQgY29ycmVzcG9uZHMgdG8gb25lIG9mIHRoZSB2aWV3IHR5cGVzLiBUaGlzIHByb3BlcnR5IHNob3VsZCBub3QgYmUgc2V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmlld1R5cGUoKTogU2NoZWR1bGVyVmlld1R5cGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld1R5cGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZpZXdUeXBlKHZhbHVlOiBTY2hlZHVsZXJWaWV3VHlwZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3VHlwZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2aWV3aW5nIGRhdGUgcmFuZ2Ugb2YgdGhlIHRpbWVsaW5lLiBUaGUgcHJvcGVydHkgc2hvdWxkIGJlIHNldCB0byBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHZpZXcgb2JqZWN0cy4gV2hlbiB5b3Ugc2V0IGl0IHRvIGEgc3RyaW5nLCB5b3Ugc2hvdWxkIHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZzogJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ2FnZW5kYScsICd0aW1lbGluZURheScsICd0aW1lbGluZVdlZWsnLCAndGltZWxpbmVNb250aCcuIEN1c3RvbSB2aWV3cyBjYW4gYmUgZGVmaW5lZCBhcyBvYmplY3RzIGluc3RlYWQgb2Ygc3RyaW5ncy4gVGhlIHZpZXcgb2JqZWN0IHNob3VsZCBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogbGFiZWwgLSB0aGUgbGFiZWwgZm9yIHRoZSB2aWV3LnZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgdmlldy4gVGhlIHZhbHVlIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHZpZXcudHlwZSAtIHRoZSB0eXBlIG9mIHZpZXcuIFRoZSB0eXBlIHNob3VsZCBiZSBvbmUgb2YgdGhlIGRlZmF1bHQgYWxsb3dlZCB2YWx1ZXMgZm9yIGEgdmlldy5oaWRlV2Vla2VuZCAtIGFuIE9wdGlvbmFsIHByb3BlcnR5IHRoYXQgYWxsb3dzIHRvIGhpZGUgdGhlIHdlZWtlbmQgb25seSBmb3IgdGhpcyBzcGVjaWZpYyB2aWV3LmhpZGVOb253b3JraW5nV2Vla2RheXMgLSBhbiBPcHRpb25hbCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB0byBoaWRlIHRoZSBub253cmtpbmcgd2Vla2RheXMgZm9yIHRoaXMgc3BlY2lmaWMgdmlldy5zaG9ydGN1dEtleSAtIGFuIE9wdGlvbmFsIHByb3BlcnR5IHRoYXQgYWxsb3dzIHRvIHNldCBhIGN1c3RvbSBzaG9ydGN1dCBrZXkgZm9yIHRoZSB2aWV3LmhpZGVIb3VycyAtIGFuIE9wdGlvbmFsIHByb3BlcnR5IGFwcGxpY2FibGUgb25seSB0byB0aW1lbGluZVdlZWsgdmlldyB0aGF0IGFsbG93cyB0byBoaWRlIHRoZSBob3VyIGNlbGxzIGFuZCBvbmx5IHNob3cgdGhlIGRheSBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXdzKCk6IFNjaGVkdWxlclZpZXdzIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3cyh2YWx1ZTogU2NoZWR1bGVyVmlld3MgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0eXBlIG9mIHRoZSB2aWV3IHNlbGVjdG9yIGxvY2F0ZWQgaW4gdGhlIGhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXdTZWxlY3RvclR5cGUoKTogU2NoZWR1bGVyVmlld1NlbGVjdG9yVHlwZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3U2VsZWN0b3JUeXBlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3U2VsZWN0b3JUeXBlKHZhbHVlOiBTY2hlZHVsZXJWaWV3U2VsZWN0b3JUeXBlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdTZWxlY3RvclR5cGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgU3RhcnQgRGF0ZSBydWxlLiBUaGUgV2VlayBhbmQgVGltZWxpbmVXZWVrIHZpZXdzIHN0YXJ0IGJ5IGRlZmF1bHQgZnJvbSB0aGUgY3VycmVudCBkYXRlIHRha2luZyBpbnRvIGFjY291bnQgdGhlIGZpcnN0RGF5T2ZXZWVrIHByb3BlcnR5LiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvICdkYXRlQ3VycmVudCcsIHRoZXNlIHZpZXdzIHdpbGwgc3RhcnQgZnJvbSB0aGUgdmFsdWUgb2YgdGhlICdkYXRlQ3VycmVudCcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3U3RhcnREYXkoKTogU2NoZWR1bGVyVmlld1N0YXJ0RGF5IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdTdGFydERheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlld1N0YXJ0RGF5KHZhbHVlOiBTY2hlZHVsZXJWaWV3U3RhcnREYXkgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld1N0YXJ0RGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgd2VlayBkYXlzIGluc2lkZSB0aGUgZWxlbWVudC4gICovXG5cdEBJbnB1dCgpXG5cdGdldCB3ZWVrZGF5Rm9ybWF0KCk6IFdlZWtEYXlGb3JtYXQgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2Vla2RheUZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgd2Vla2RheUZvcm1hdCh2YWx1ZTogV2Vla0RheUZvcm1hdCB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrZGF5Rm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW5zaWRlIHRoZSB0aW1lbGluZSBoZWFkZXIgd2hlbiB0aGV5IHJlcHJlc2VudCB5ZWFycy4gKi9cblx0QElucHV0KClcblx0Z2V0IHllYXJGb3JtYXQoKTogWWVhckZvcm1hdCB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC55ZWFyRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB5ZWFyRm9ybWF0KHZhbHVlOiBZZWFyRm9ybWF0IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnllYXJGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGlmIHRoZSBlbGVtZW50IGNhbiBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgcmVkby91bmRvIHN0ZXBzIHRoYXQgd2lsbCBiZSByZW1lbWJlcmVkIGJ5IHRoZSBTY2hlZHVsZXIuIFdoZW4gdGhlIG51bWJlciBpcyByZWFjaGVkIHRoZSBvbGRlc3QgcmVjb3JkcyBhcmUgcmVtb3ZlZCBpbiBvcmRlciB0byBhZGQgbmV3LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5kb1JlZG9TdGVwcygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb1JlZG9TdGVwcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5kb1JlZG9TdGVwcyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9SZWRvU3RlcHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbXBsZXRseSBjdXN0b21pemUgdGhlIHBvcHVwIFdpbmRvdyB0aGF0IGlzIHVzZWQgdG8gZWRpdCBldmVudHMuIFRoZSBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6IHRhcmdldCAtIHRoZSB0YXJnZXQgcG9wdXAgV2luZG93IHRoYXQgaXMgYWJvdXQgdG8gYmUgb3BlbmVkLnR5cGUgLSB0aGUgdHlwZSBvZiB0aGUgd2luZG93LiBUaGUgdHlwZSBkZXRlcm1pbmVzIHRoZSBwdXJwb3NlIG9mIHRoZSB3aW5kb3cuIFRoZSBkZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgc3RyaW5nIHdoaWNoIG1lYW5zIHRoYXQgaXQncyB0aGUgZGVmYXVsdCBldmVudCBlZGl0aW5nIHdpbmRvdy4gVGhlIG90aGVyIHR5cGUgaXMgJ2NvbmZpcm0nICggY29uZmlybWF0aW9uIHdpbmRvdykgdGhhdCBhcHBlYXJzIHdoZW4gY2xpY2tpbmcgb24gYSByZXBlYXRpbmcgZXZlbnQuIGV2ZW50T2JqIC0gdGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGVkaXRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGJhdGNoIHVwZGF0ZSB3YXMgc3RhcnRlZCBhZnRlciBleGVjdXRpbmcgdGhlIGJlZ2luVXBkYXRlIG1ldGhvZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkJlZ2luVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGJhdGNoIHVwZGF0ZSB3YXMgZW5kZWQgZnJvbSBhZnRlciBleGVjdXRpbmcgdGhlIGVuZFVwZGF0ZSBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25FbmRVcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbmV3IGNlbGwgaXMgc2VsZWN0ZWQvdW5zZWxlY3RlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHRvbGRWYWx1ZSlcblx0KiAgIHZhbHVlIC0gVGhlIG5ldyBzZWxlY3RlZCBEYXRlLlxuXHQqICAgb2xkVmFsdWUgLSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBEYXRlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEV2ZW50IGhhcyBiZWVuIHVwZGF0ZWQvaW5zZXJ0ZWQvcmVtb3ZlZC9kcmFnZ2VkL3Jlc2l6ZWQgb3IgYW4gZXhjZXB0aW9uIG9mIGEgcmVwZWF0aW5nIGV2ZW50IGhhcyBiZWVuIGFkZGVkL3VwZGF0ZWQvcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdHR5cGUpXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgY2hhbmdlIHRoYXQgaXMgYmVpbmcgZG9uZSB0byB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gRXZlbnQgaXMgZ29pbmcgdG8gYmUgdXBkYXRlZC9pbnNlcnRlZC9yZW1vdmVkLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSwgXHR0eXBlKVxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGNoYW5nZSB0aGF0IGlzIGdvaW5nIHRvIGJlIG1hZGUgdG8gdGhlIGl0ZW0gKGUuZy4gJ2luc2VydGluZycsICdyZW1vdmluZycsICd1cGRhdGluZycsICdleGNlcHRpb25JbnNlcnRpbmcnLCAnZXhjZXB0aW9uVXBkYXRpbmcnLCAnZXhjZXB0aW9uUmVtb3ZpbmcnKS5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbUNoYW5naW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBlbiBldmVudCwgZXZlbnQgaXRlbSBvciBhIGNvbnRleHQgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSwgXHR0eXBlLCBcdGl0ZW1PYmopXG5cdCogICBpdGVtIC0gVGhlIEhUTUxFbGVtZW50IGZvciB0aGUgZXZlbnQuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgaXRlbSB0aGF0IGlzIGNsaWNrZWQuIFRoZSBwb3NzaWJsZSB2YWx1ZXMgYXJlOiA8dWw+PGxpPmV2ZW50IC0gd2hlbiBhbiBldmVudCBpdGVtIGlzIGNsaWNrZWQuPC9saT48bGk+Y29udGV4dCAtIHdoZW4gYSBjb250ZXh0IG1lbnUgaXRlbSBpcyBjbGlja2VkLjwvbGk+PC91bD4uXG5cdCogICBpdGVtT2JqIC0gVGhlIGV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBFdmVudCBpcyBpbnNlcnRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtKVxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtSW5zZXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBFdmVudCBpcyByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0pXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1SZW1vdmU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEV2ZW50IGlzIHVwZGF0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSwgXHRpdGVtKVxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGl0ZW0gdGhhdCBoYXMgYmVlbiBtb2RpZmllZC5cblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbVVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpZXcgaXMgY2hhbmdlZCB2aWEgdXNlciBpbnRlcmFjdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGRWYWx1ZSwgXHR2YWx1ZSlcblx0KiAgIG9sZFZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIHZpZXcuXG5cdCogICB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgbmV3IHNlbGVjdGVkIHZpZXcuXG5cdCovXG5cdEBPdXRwdXQoKSBvblZpZXdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIHZpZXcgaXMgY2hhbmdlZCB2aWEgdXNlciBpbnRlcmFjdGlvbi4gVGhlIHZpZXcgY2hhbmdlIGFjdGlvbiBjYW4gYmUgY2FuY2VsZWQgaWYgZXZlbnQucHJldmVudERlZmF1bHQoKSBpcyBjYWxsZWQgb24gdGhlIGV2ZW50LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgdmlldy5cblx0KiAgIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBuZXcgc2VsZWN0ZWQgdmlldy5cblx0Ki9cblx0QE91dHB1dCgpIG9uVmlld0NoYW5naW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHNob3J0Y3V0IGtleSBmb3IgYW4gZXZlbnQgaXMgcHJlc3NlZC4gQnkgZGVmYXVsdCBvbmx5ICdEZWxldGUnIGtleSBpcyB1c2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGtleSwgXHR0YXJnZXQsIFx0ZXZlbnRPYmopXG5cdCogICBrZXkgLSBUaGUgc2hvcnRjdXQga2V5IHRoYXQgd2FzIHByZXNzZWQuXG5cdCogICB0YXJnZXQgLSBUaGUgZXZlbnQgdGFyZ2V0IChIVE1MRWxlbWVudCkuXG5cdCogICBldmVudE9iaiAtIFRoZSBzY2hlZHVsZXIgRXZlbnQgb2JqZWN0IHRoYXQgYWZmZWN0ZWQgYnkgdGhlIGtleXByZXNzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FdmVudFNob3J0Y3V0S2V5OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgJ2RhdGVDdXJyZW50JyBwcm9wZXJ0eSBpcyBjaGFuZ2VkLiBUaGlzIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyB0byBhIGRpZmZlcmVudCBkYXRlLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgcHJldmlvdXMgY3VycmVudCBkYXRlIHRoYXQgd2FzIGluIHZpZXcuXG5cdCogICB2YWx1ZSAtIFRoZSBjdXJyZW50IGRhdGUgaW4gdmlldy5cblx0Ki9cblx0QE91dHB1dCgpIG9uRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gZHJhZ2dpbmcgb2YgYW4gZXZlbnQgYmVnaW5zLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0aXRlbURhdGVSYW5nZSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgdGFyZ2V0IC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGV2ZW50IHRoYXQgaXMgZ29pbmcgdG8gYmUgZHJhZ2dlZC5cblx0KiAgIGl0ZW0gLSBUaGUgc2NoZWR1bGVyIEV2ZW50IG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBpdGVtRGF0ZVJhbmdlIC0gVGhlIHN0YXJ0L2VuZCBkYXRlcyBmb3IgdGhlIFNjaGVkdWxlciBFdmVudC5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGRyYWdnaW5nIG9mIGFuIGV2ZW50IGZpbmlzaGVzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdGl0ZW1EYXRlUmFuZ2UsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHRhcmdldCAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBldmVudCB0aGF0IGlzIGRyYWdnZWQuXG5cdCogICBpdGVtIC0gVGhlIHNjaGVkdWxlciBFdmVudCBvYmplY3QgdGhhdCBpcyBkcmFnZ2VkLlxuXHQqICAgaXRlbURhdGVSYW5nZSAtIFRoZSBuZXcgc3RhcnQvZW5kIGRhdGVzIGZvciB0aGUgZHJhZ2dlZCBTY2hlZHVsZXIgRXZlbnQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgZHJvcHMgYW4gaXRlbSBvdmVyIGEgY2VsbC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0ZGF0ZSwgXHRhbGxEYXkpXG5cdCogICB0YXJnZXQgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZXZlbnQgdGhhdCBpcyBkcmFnZ2VkLlxuXHQqICAgZGF0ZSAtIFRoZSBjZWxsJ3MgZGF0ZSB1bmRlciB0aGUgcG9pbnRlci5cblx0KiAgIGFsbERheSAtIEJvb2xlYW4gdmFsdWUsIHdoaWNoIGlzIHRydWUgd2hlbiB0aGUgY2VsbCB1bmRlciB0aGUgcG9pbnRlciBpcyBhbGwgZGF5IGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BvdmVyQ2VsbDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gcmVzaXppbmcgb2YgYSB0YXNrIHN0YXJ0cy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdGl0ZW1EYXRlUmFuZ2UsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHRhcmdldCAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBldmVudCB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBpdGVtIC0gVGhlIHNjaGVkdWxlciBFdmVudCBvYmplY3QgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqICAgaXRlbURhdGVSYW5nZSAtIFRoZSBzdGFydC9lbmQgZGF0ZXMgZm9yIFNjaGVkdWxlciBFdmVudCB0aGF0IGlzIGdvaW5nIHRvIGJlIHJlc2l6ZWQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSByZXNpemluZyBvZiBhbiBldmVudCBmaW5pc2hlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRpdGVtRGF0ZVJhbmdlLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICB0YXJnZXQgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZXZlbnQgdGhhdCBpcyByZXNpemVkLlxuXHQqICAgaXRlbSAtIFRoZSBzY2hlZHVsZXIgRXZlbnQgb2JqZWN0IHRoYXQgaXMgcmVzaXplZC5cblx0KiAgIGl0ZW1EYXRlUmFuZ2UgLSBUaGUgbmV3IHN0YXJ0L2VuZCBkYXRlcyBmb3IgdGhlIHJlc2l6ZWQgU2NoZWR1bGVyIEV2ZW50LlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIHRvcCBvcGVuIHRoZSBldmVudCBkaWFsb2cgd2luZG93LiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0dHlwZSwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBkaWFsb2cgd2luZG93IHRoYXQgaXMgb3BlbmluZy5cblx0KiAgIGl0ZW0gLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgZ29pbmcgdG8gYmUgZWRpdGVkLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdyB0aGF0IGlzIGdvaW5nIHRvIG9wZW4uIFR3byB3aW5kb3cgdHlwZXMgYXJlIGF2YWlsYWJsZSwgdGhlIGRhZmF1bHQgd2hpY2ggaXMgYW4gZW1wdHkgc3RyaW5nICggZG9lcyBub3QgaGF2ZSBhIHR5cGUpIGFuZCAnY29uZmlybScgd2hpY2ggaXMgZGlzcGxheWVkIHdoZW4gY2xpY2tlZCBvbiBhIHJlcGVhdGluZyBldmVudC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVkaXREaWFsb2dPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBvcGVucyB0aGUgZXZlbnQgZGlhbG9nIHdpbmRvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0ZWRpdG9ycywgXHRpdGVtLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGRpYWxvZyB3aW5kb3cgdGhhdCBpcyBvcGVuZWQuXG5cdCogICBlZGl0b3JzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGV2ZW50IGVkaXRvcnMgdGhhdCBhcmUgcHJlc2VudCBpbnNpZGUgdGhlIHdpbmRvdy4gVGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQgd2hlbiB0aGUgd2luZG93IGlzIG9mIHR5cGUgJ2NvbmZpcm0nLCBiZWNhdXNlIGNvbmZpcm0gd2luZG93cyBkbyBub3QgY29udGFpbiBlZGl0b3JzLlxuXHQqICAgaXRlbSAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBiZWluZyBlZGl0ZWQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FZGl0RGlhbG9nT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSBldmVudCBkaWFsb2cgd2luZG93LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRlZGl0b3JzLCBcdGl0ZW0sIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgZGlhbG9nIHdpbmRvdyB0aGF0IGlzIGNsb3NlZC5cblx0KiAgIGVkaXRvcnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgZXZlbnQgZWRpdG9ycyB0aGF0IGFyZSBwcmVzZW50IGluc2lkZSB0aGUgd2luZG93LiBUaGlzIHByb3BlcnR5IGlzIHVuZGVmaW5lZCB3aGVuIHRoZSB3aW5kb3cgaXMgb2YgdHlwZSAnY29uZmlybScsIGJlY2F1c2UgY29uZmlybSB3aW5kb3dzIGRvIG5vdCBjb250YWluIGVkaXRvcnMuXG5cdCogICBpdGVtIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGJlaW5nIGVkaXRlZC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVkaXREaWFsb2dDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgaXMgYWJvdXQgdG8gY2xvc2UgdGhlIGV2ZW50IGRpYWxvZyB3aW5kb3cuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHR0eXBlLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGRpYWxvZyB3aW5kb3cgdGhhdCBpcyBjbG9zaW5nLlxuXHQqICAgaXRlbSAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBlZGl0ZWQuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2Ygd2luZG93IHRoYXQgaXMgZ29pbmcgdG8gYmUgY2xvc2VkLiBUd28gd2luZG93IHR5cGVzIGFyZSBhdmFpbGFibGUsIHRoZSBkYWZhdWx0IHdoaWNoIGlzIGFuIGVtcHR5IHN0cmluZyAoIGRvZXMgbm90IGhhdmUgYSB0eXBlKSBhbmQgJ2NvbmZpcm0nIHdoaWNoIGlzIGRpc3BsYXllZCB3aGVuIGNsaWNrZWQgb24gYSByZXBlYXRpbmcgZXZlbnQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgYmVnaW5zIHRvIG9wZW4gdGhlIGNvbnRleHQgbWVudSBvbiBhIHRpbWVsaW5lIGNlbGwgb3IgYW4gZXZlbnQgZWxlbWVudC4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRjZWxsT2JqLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGNvbnRleHQgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGNlbGxPYmogLSBUaGUgY2VsbCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGFuIGV2ZW50IGluc3RlYWQgb2YgYSBjZWxsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhIGNlbGwgaW5zdGVhZCBvZiBhbiBldmVudCB0aGlzIHBhcmFtdGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250ZXh0IG1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRjZWxsT2JqLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGNvbnRleHQgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGNlbGxPYmogLSBUaGUgY2VsbCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGFuIGV2ZW50IGluc3RlYWQgb2YgYSBjZWxsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhIGNlbGwgaW5zdGVhZCBvZiBhbiBldmVudCB0aGlzIHBhcmFtdGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250ZXh0IG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRjZWxsT2JqLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGNvbnRleHQgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGNlbGxPYmogLSBUaGUgY2VsbCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGFuIGV2ZW50IGluc3RlYWQgb2YgYSBjZWxsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhIGNlbGwgaW5zdGVhZCBvZiBhbiBldmVudCB0aGlzIHBhcmFtdGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBpcyBhYm91dCB0byBjbG9zZSB0aGUgY29udGV4dCBtZW51LiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGNlbGxPYmosIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgY29udGV4dCBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgY2VsbE9iaiAtIFRoZSBjZWxsIG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYW4gZXZlbnQgaW5zdGVhZCBvZiBhIGNlbGwgdGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGEgY2VsbCBpbnN0ZWFkIG9mIGFuIGV2ZW50IHRoaXMgcGFyYW10ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGV2ZW50IG1lbnUgaXMgYWJvdXQgdG8gb3Blbi4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgb2YgdGhlIGV2ZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV2ZW50TWVudU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBldmVudCBtZW51IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IG9mIHRoZSBldmVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FdmVudE1lbnVPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZXZlbnQgbWVudSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCBvZiB0aGUgZXZlbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXZlbnRNZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBldmV0IG1lbnUgaXMgYWJvdXQgdG8gY2xvc2UuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IG9mIHRoZSBldmVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FdmVudE1lbnVDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZGF0ZSBzZWxlY3Rpb24gbWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRhdGVNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRhdGUgc2VsZWN0aW9uIG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EYXRlTWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlldyBzZWxlY3Rpb24gbWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvblZpZXdNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpZXcgc2VsZWN0aW9uIG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25WaWV3TWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5vdGlmaWNhdGlvbiBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5zdGFuY2UpXG5cdCogICBpbnN0YW5jZSAtIFRoZSB0b2FzdCBpdGVtIGluc3RhbmNlIHRoYXQgaXMgb3BlbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ob3RpZmljYXRpb25PcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5vdGlmaWNhdGlvbiBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5zdGFuY2UpXG5cdCogICBpbnN0YW5jZSAtIFRoZSB0b2FzdCBpdGVtIGluc3RhbmNlIHRoYXQgaXMgY2xvc2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ob3RpZmljYXRpb25DbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYW4gZXZlbnQgdG8gdGhlIFNjaGVkdWxlci4gQWNjZXB0cyBhbiBldmVudCBvYmplY3Qgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXQgKHNhbWUgYXMgdGhlIGRhdGFTb3VyY2UgZm9ybWF0KTogeyBsYWJlbD86IHN0cmluZywgZGF0ZVN0YXJ0OiBkYXRlLCBkYXRlRW5kOiBkYXRlLCBkZXNjcmlwdGlvbj86IHN0cmluZywgaWQ/OiBzdHJpbmcgfCBudW1iZXIsIGNsYXNzPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBhbGxEYXk/OiBib29sZWFuLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuLCByZXBlYXQ/OiB7IHJlcGVhdEZyZXE6IHN0cmluZywgcmVwZWF0SW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0T24/OiBudW1iZXIgfCBudW1iZXJbXSB8IGRhdGUsIHJlcGVhdEVuZD86IG51bWJlciB8IGRhdGUsIGV4Y2VwdGlvbnM/OiB7IGRhdGU6IGRhdGUsIGRhdGVTdGFydD86IGRhdGUsIGRhdGVFbmQ/OiBkYXRlLCBoaWRkZW4/OiBib29sZWFuLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuIH1bXSB9LCBzdGF0dXM/OiBzdHJpbmcgfSBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgU2NoZWR1bGVyIGV2ZW50IHRoYXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBpbiB0aGUgZWxlbWVudC5cblx0Ki9cbiAgICBwdWJsaWMgYWRkRXZlbnQoZXZlbnRPYmo6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudChldmVudE9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnQoZXZlbnRPYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHZpZXcuIEV4YW1wbGU6IHNjaGVkdWxlci5hZGRWaWV3KCd3ZWVrJywgJ015IFZpZXcnLCAnbXlWaWV3JywgZmFsc2UsIGZhbHNlLCAxMCk7IHNjaGVkdWxlci5zZXRWaWV3KCdteVZpZXcnKTsgXG5cdCogQHBhcmFtIHtzdHJpbmd9IHR5cGUuIFRoZSB2aWV3IHR5cGUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGxhYmVsLiBUaGUgdmlldydzIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgaGVhZGVyLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZS4gVGhlIHZpZXcncyB2YWx1ZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSB2aWV3LlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaGlkZVdlZWtlbmQuIERldGVybWluZXMgd2hldGhlciB0byBoaWRlIHRoZSB3ZWVrZW5kLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaGlkZU5vbndvcmtpbmdXZWVrZGF5cy4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGhpZGUgdGhlIG5vbiB3b3JraW5nIGRheXMuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGFkZGl0aW9uYWxEYXlzLiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWRkIGFkZGl0aW9uYWwgZGF5cyB0byB0aGUgdmlldy5cblx0Ki9cbiAgICBwdWJsaWMgYWRkVmlldyh0eXBlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGhpZGVXZWVrZW5kOiBib29sZWFuLCBoaWRlTm9ud29ya2luZ1dlZWtkYXlzOiBib29sZWFuLCBhZGRpdGlvbmFsRGF5czogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFZpZXcodHlwZSwgbGFiZWwsIHZhbHVlLCBoaWRlV2Vla2VuZCwgaGlkZU5vbndvcmtpbmdXZWVrZGF5cywgYWRkaXRpb25hbERheXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFZpZXcodHlwZSwgbGFiZWwsIHZhbHVlLCBoaWRlV2Vla2VuZCwgaGlkZU5vbndvcmtpbmdXZWVrZGF5cywgYWRkaXRpb25hbERheXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTdGFydHMgYW4gdXBkYXRlIG9wZXJhdGlvbi4gVGhpcyBpcyBhcHByb3ByaWF0ZSB3aGVuIGNhbGxpbmcgbXVsdGlwbGUgbWV0aG9kcyBvciBzZXQgbXVsdGlwbGUgcHJvcGVydGllcyBhdCBvbmNlLiBcblx0Ki9cbiAgICBwdWJsaWMgYmVnaW5VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhbiBldmVudCBhbmQgYWRkcyBpdCB0byB0aGUgU2NoZWR1bGVyLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gbGFiZWwuIEV2ZW50IGxhYmVsLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZS4gRXZlbnQgdmFsdWUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdGFydC4gRXZlbnQgZGF0ZSBzdGFydC5cblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0ZUVuZC4gRXZlbnQgZGF0ZSBlbmQuXG5cdCogQHBhcmFtIHtib29sZWFufSBhbGxEYXkuIEV2ZW50IGFsbCBkYXkuIFNldCBpdCB0byB0cnVlIHRvIGNyZWF0ZSBhbGwgZGF5IGV2ZW50LlxuXHQqL1xuICAgIHB1YmxpYyBjcmVhdGVFdmVudChsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBkYXRlU3RhcnQ6IHN0cmluZywgZGF0ZUVuZDogc3RyaW5nLCBhbGxEYXk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY3JlYXRlRXZlbnQobGFiZWwsIHZhbHVlLCBkYXRlU3RhcnQsIGRhdGVFbmQsIGFsbERheSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY3JlYXRlRXZlbnQobGFiZWwsIHZhbHVlLCBkYXRlU3RhcnQsIGRhdGVFbmQsIGFsbERheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuZHMgdGhlIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgbWV0aG9kIHdpbGwgcmVzdW1lIHRoZSByZW5kZXJpbmcgYW5kIHdpbGwgcmVmcmVzaCB0aGUgZWxlbWVudC4gXG5cdCovXG4gICAgcHVibGljIGVuZFVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHN0YXJ0IGFuZCBlbmQgdmlldyBkYXRlcy4gXG5cdCogQHJldHVybnMge0RhdGVbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZpZXdEYXRlcygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Vmlld0RhdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZlcmVzaGVzIHRoZSBTY2hlZHVsZXIgYnkgcmVjYWxjdWxhdGluZyB0aGUgU2Nyb2xsYmFycy4gIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gZnVsbFJlZnJlc2g/LiBJZiBzZXQgdGhlIFNjaGVkdWxlciB3aWxsIGJlIHJlLXJlbmRlcmVkIGNvbXBsZXRlbHkuXG5cdCovXG4gICAgcHVibGljIHJlZnJlc2goZnVsbFJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goZnVsbFJlZnJlc2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goZnVsbFJlZnJlc2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBldmVudHMgZnJvbSB0aGUgU2NoZWR1bGVyLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZvcm1hdC4gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBleHBvcnRlZCBmaWxlLiBUaGUgZm9sbG93aW5nIHZhbHVlcyBhcmUgYXZhaWxhYmxlOiA8dWw+PGxpPjxiPnBkZjwvYj48L2xpPjxsaT48Yj54bHN4PC9iPjwvbGk+PGxpPjxiPmh0bWw8L2I+PC9saT48bGk+PGI+aUNhbDwvYj48L2xpPjwvdWw+XG5cdCogQHBhcmFtIHthbnl9IGNhbGxiYWNrPy4gQSBjYWxsYmFjayB0aGF0IGFsbG93cyB0byBmb3JtYXQgdGhlIGV4cG9ydGVkIGRhdGEgYmFzZWQgb24gYSBjb25kaXRpb24uIEZvciBhZGRpdGlvbmFsIGRldGFpbHMsIHJlZmVyIHJvIHRoZSBTbWFydCBFeHBvcnQgRG9jdW1lbnRhdGlvbi5cblx0Ki9cbiAgICBwdWJsaWMgZXhwb3J0RGF0YShkYXRhRm9ybWF0OiBzdHJpbmcsIGNhbGxiYWNrPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXZlbnRzIGluc2lkZSB0aGUgU2NoZWR1bGVyLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RGF0YVNvdXJjZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RGF0YVNvdXJjZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc291cmNlcyBpbnNpZGUgdGhlIFNjaGVkdWxlci4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFJlc291cmNlcygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0UmVzb3VyY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGEgZGF0ZSBmcm9tIGNvb3JkaW5hdGVzIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB4LiBYIGNvb3JkaW5hdGUuXG5cdCogQHBhcmFtIHtudW1iZXJ9IHkuIFkgY29vcmRpbmF0ZS5cblx0KiBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RGF0ZUZyb21Db29yZGluYXRlcyh4LCB5KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldERhdGVGcm9tQ29vcmRpbmF0ZXMoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgYSBjZWxsIGlzIGFsbCBkYXkgY2VsbCBmcm9tIGNvb3JkaW5hdGVzIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB4LiBYIGNvb3JkaW5hdGUuXG5cdCogQHBhcmFtIHtudW1iZXJ9IHkuIFkgY29vcmRpbmF0ZS5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldElzQWxsRGF5Q2VsbEZyb21Db29yZGluYXRlcyh4LCB5KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldElzQWxsRGF5Q2VsbEZyb21Db29yZGluYXRlcyh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIFNjaGVkdWxlci4gSW5jbHVkZXMgdGhlIGN1cnJlbnQgZGF0ZUN1cmVybnQsIGRhdGFTb3VyY2UgYW5kIHRpbWVab25lIHByb3BlcnRpZXMuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTdGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50IGZvcm0gTG9jYWxTdG9yYWdlIGFjY29yZGluZyB0byBpdCdzIGlkLiBSZXF1aXJlcyBhbiBpZCB0byBiZSBzZXQgdG8gdGhlIGVsZW1lbnQuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2FkcyBhIHByZXZpb3VzbHkgc2F2ZWQgc3RhdGUgb2YgdGhlIGVsZW1lbnQgb3IgY2hlY2tzIExvY2FsU3RvcmFnZSBmb3IgYW55IHNhdmVkIHN0YXRlcyBpZiBubyBhcmd1bWVudCBpcyBwYXNzZWQgdG8gdGhlIG1ldGhvZC4gXG5cdCogQHBhcmFtIHthbnlbXX0gc3RhdGU/LiBBbiBBcnJheSBjb250YWluaW5nIGEgdmFsaWQgc3RydWN0dXJlIG9mIFNjaGVkdWxlciBldmVudHMuIElmIG5vIHN0YXRlIGlzIHByb3ZpZGVkLCB0aGUgZWxlbWVudCB3aWxsIGNoZWNrIGxvY2FsU3RvcmFnZSBmb3IgYSBzYXZlZCBzdGF0ZS5cblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgY3VycmVudCBldmVudHMgb2YgdGhlIGVsZW1lbnQgdG8gTG9jYWxTdG9yYWdlLiBSZXF1aXJlcyBhbiBpZCB0byBiZSBzZXQgdG8gdGhlIGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBTY2hlZHVsZXIgZXZlbnRzLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlU3RhdGUoc3RhdGU/OiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIFNjaGVkdWxlcidzIHZpZXcuIEV4YW1wbGU6IHNjaGVkdWxlci5hZGRWaWV3KCd3ZWVrJywgJ015IFZpZXcnLCAnbXlWaWV3JywgZmFsc2UsIGZhbHNlLCAxMCk7IHNjaGVkdWxlci5zZXRWaWV3KCdteVZpZXcnKTsgXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZpZXc/LiBUaGUgdmlldydzIHZhbHVlLiBGb3IgZXhhbXBsZTogJ2RheScuIFxuXHQqL1xuICAgIHB1YmxpYyBzZXRWaWV3KHZpZXc/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Vmlldyh2aWV3KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRWaWV3KHZpZXcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgU2NoZWR1bGVyIGNvbnRhaW5zIHRoZSBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBjb250YWluc0V2ZW50KGV2ZW50T2JqKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zRXZlbnQoZXZlbnRPYmopO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhbiBldmVudCBhcyBvYmplY3Qgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXQgKHNhbWUgYXMgdGhlIGRhdGFTb3VyY2UgZm9ybWF0KTogeyBsYWJlbD86IHN0cmluZywgZGF0ZVN0YXJ0OiBkYXRlLCBkYXRlRW5kOiBkYXRlLCBkZXNjcmlwdGlvbj86IHN0cmluZywgaWQ/OiBzdHJpbmcgfCBudW1iZXIsIGNsYXNzPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBhbGxEYXk/OiBib29sZWFuLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuLCByZXBlYXQ/OiB7IHJlcGVhdEZyZXE6IHN0cmluZywgcmVwZWF0SW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0T24/OiBudW1iZXIgfCBudW1iZXJbXSB8IGRhdGUsIHJlcGVhdEVuZD86IG51bWJlciB8IGRhdGUsIGV4Y2VwdGlvbnM/OiB7IGRhdGU6IGRhdGUsIGRhdGVTdGFydD86IGRhdGUsIGRhdGVFbmQ/OiBkYXRlLCBoaWRkZW4/OiBib29sZWFuLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuIH1bXSB9LCBzdGF0dXM/OiBzdHJpbmcgfSBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgU2NoZWR1bGVyIGV2ZW50IHRoYXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBpbiB0aGUgZWxlbWVudC5cblx0KiBAcGFyYW0ge251bWJlcn0gaW5kZXg/LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IHRvIGluc2VydCB0aGUgZXZlbnQgYXQuIElmIG5vdCBwcm92aWRlZCB0aGUgZXZlbnQgaXMgaW5zZXJ0ZWQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0RXZlbnQoZXZlbnRPYmo6IGFueSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0RXZlbnQoZXZlbnRPYmosIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRFdmVudChldmVudE9iaiwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGFuIGV2ZW50IG9iamVjdCBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdCAoc2FtZSBhcyB0aGUgZGF0YVNvdXJjZSBmb3JtYXQpOiB7IGxhYmVsPzogc3RyaW5nLCBkYXRlU3RhcnQ6IGRhdGUsIGRhdGVFbmQ6IGRhdGUsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBpZD86IHN0cmluZyB8IG51bWJlciwgY2xhc3M/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIG5vdGlmaWNhdGlvbnM/OiB7IGludGVydmFsOiBudW1lcmljLCB0eXBlPzogc3RyaW5nLCB0aW1lOiBudW1iZXJbXSB9W10sIGFsbERheT86IGJvb2xlYW4sIGRpc2FibGVEcmFnPzogYm9vbGVhbiwgZGlzYWJsZVJlc2l6ZT86IGJvb2xlYW4sIHJlcGVhdD86IHsgcmVwZWF0RnJlcTogc3RyaW5nLCByZXBlYXRJbnRlcnZhbDogbnVtYmVyLCByZXBlYXRPbj86IG51bWJlciB8IG51bWJlcltdIHwgZGF0ZSwgcmVwZWF0RW5kPzogbnVtYmVyIHwgZGF0ZSwgZXhjZXB0aW9ucz86IHsgZGF0ZTogZGF0ZSwgZGF0ZVN0YXJ0PzogZGF0ZSwgZGF0ZUVuZD86IGRhdGUsIGhpZGRlbj86IGJvb2xlYW4sIGJhY2tncm91bmRDb2xvcj86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcsIG5vdGlmaWNhdGlvbnM/OiB7IGludGVydmFsOiBudW1lcmljLCB0eXBlPzogc3RyaW5nLCB0aW1lOiBudW1iZXJbXSB9W10sIGRpc2FibGVEcmFnPzogYm9vbGVhbiwgZGlzYWJsZVJlc2l6ZT86IGJvb2xlYW4gfVtdIH0sIHN0YXR1cz86IHN0cmluZyB9IFxuXHQqIEBwYXJhbSB7YW55fSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhbiBldmVudCBvciBhIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIFNjaGVkdWxlciBldmVudC4gVGhlIHByb3BlcnRpZXMgb2YgdGhpcyBvYmplY3Qgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBkZXNpcmVkIGV2ZW50LlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGVFdmVudChpbmRleDogYW55LCBldmVudE9iajogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUV2ZW50KGluZGV4LCBldmVudE9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlRXZlbnQoaW5kZXgsIGV2ZW50T2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbiBleGlzdGluZyBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGluZGV4LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGFuIGV2ZW50IG9yIHRoZSBhY3R1YWwgZXZlbnQgb2JqZWN0IHRvIGJlIHJlbW92ZWQuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUV2ZW50KGluZGV4OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgZXhjZXB0aW9ucyBvZiB0aGUgdGFyZ2V0IHJlcGVhdGluZyBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBUaGUgaW5kZXgsIGlkIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXhpc3RpbmcgcmVwZWF0aW5nIFNjaGVkdWxlciBldmVudC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RXZlbnRFeGNlcHRpb25zKGV2ZW50T2JqKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEV2ZW50RXhjZXB0aW9ucyhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGFuIGV2ZW50IGV4Y2VwdGlvbiB0byBhIHJlcGVhdGluZyBldmVudC4gVGhlIGV4Y2VwdGlvbiBvY2N1cmVuY2VzIGZvciBhIHJlcGVhdGluZyBldmVudCBjYW4gYmUgZ2F0aGVyZWQgdmlhIHRoZSBmb2xsb3dpbmcgbWV0aG9kczogb2NjdXJlbmNlc29jY3VycmVuY2VzQmV0d2Vlbm9jY3VycmVuY2VBZnRlcm9jY3VycmVuY2VCZWZvcmUuICBFeGFtcGxlIHVzYWdlOiBzY2hlZHVsZXIuYWRkRXZlbnRFeGNlcHRpb24oZXZlbnRPYmosIHsgZGF0ZTogb2NjdXJhbmNlRGF0ZSwgZGF0ZVN0YXJ0OiBuZXdEYXRlU3RhcnQsIGRhdGVFbmQ6IG5ld0RhdGVFbmQsIGxhYmVsOiAnRXhjZXB0aW9uJyB9KTsgXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBUaGUgaW5kZXgsIGlkIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXhpc3RpbmcgcmVwZWF0aW5nIFNjaGVkdWxlciBldmVudC5cblx0KiBAcGFyYW0ge2FueX0gZXhjZXB0aW9uT2JqLiBBbiBldmVudCBvYmplY3QgdGhhdCBkZXNjcmliZXMgYW4gZXhjZXB0aW9uLiBFeGNlcHRpb24gZXZlbnQgb2JqZWN0cyBtdXN0IGhhdmUgYSA8Yj5kYXRlPC9iPiBhdHRyaWJ1dGUgb2YgdHlwZSBEYXRlIHdoaWNoIGluZGljYXRlcyB0aGUgZGF0ZSBvZiBvY2N1cmVuY2UuXG5cdCovXG4gICAgcHVibGljIGFkZEV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqOiBhbnksIGV4Y2VwdGlvbk9iajogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBleGNlcHRpb25PYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBleGNlcHRpb25PYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGFuIGV2ZW50IGV4Y2VwdGlvbiBvZiBhIHJlcGVhdGluZyBldmVudC4gVGhlIGV4Y2VwdGlvbiBvY2N1cmVuY2VzIGZvciBhIHJlcGVhdGluZyBldmVudCBjYW4gYmUgZ2F0aGVyZWQgdmlhIHRoZSBmb2xsb3dpbmcgbWV0aG9kczogb2NjdXJlbmNlc29jY3VycmVuY2VzQmV0d2Vlbm9jY3VycmVuY2VBZnRlcm9jY3VycmVuY2VCZWZvcmUuICBFeGFtcGxlIHVzYWdlOiBzY2hlZHVsZXIudXBkYXRlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmosIGRhdGVPZk9jY3VyYW5jZSwgeyBkYXRlU3RhcnQ6IG5ld0RhdGVTdGFydCwgZGF0ZUVuZDogbmV3RGF0ZUVuZCwgbGFiZWw6ICdVcGRhdGVkIEV4Y2VwdGlvbicgfSk7IFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gVGhlIGluZGV4LCBpZCBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV4aXN0aW5nIHJlcGVhdGluZyBTY2hlZHVsZXIgZXZlbnQuXG5cdCogQHBhcmFtIHthbnl9IGV4Y2VwdGlvblJlZi4gVGhlIGluZGV4LCBpZCwgYW4gb2NjdXJlbmNlIGRhdGUgb2YgdGhlIGV4Y2VwdGlvbiBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV4aXN0aW5nIFNjaGVkdWxlciByZXBlYXRpbmcgZXZlbnQgZXhjZXB0aW9uLlxuXHQqIEBwYXJhbSB7YW55fSBleGNlcHRpb25PYmouIEFuIGV2ZW50IG9iamVjdCB0aGF0IGRlc2NyaWJlcyBhbiBleGNlcHRpb24uIEFsbCBhdHRyaWJ1dGVzIG9mIGFuIGV4Y2VwdGlvbiBjYW4gYmUgdXBkYXRlZCBleGNlcHQgdGhlIG9jY3VyYW5jZSBkYXRlICh0aGUgPGI+ZGF0ZTwvYj4gYXR0cmlidXRlKS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmo6IGFueSwgZXhjZXB0aW9uUmVmOiBhbnksIGV4Y2VwdGlvbk9iajogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBleGNlcHRpb25SZWYsIGV4Y2VwdGlvbk9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmosIGV4Y2VwdGlvblJlZiwgZXhjZXB0aW9uT2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbiBleGNlcHRpb24gZnJvbSBhIHJlcGVhdGluZyBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBUaGUgaW5kZXgsIGlkIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXhpc3RpbmcgcmVwZWF0aW5nIFNjaGVkdWxlciBldmVudC5cblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIFRoZSBpbmRleCwgaWQsIG9jY3VyYW5jZSBkYXRlIG9yIGFuIG9iamVjdCByZWZlcmVuY2Ugb2YgYW4gZXZlbnQgZXhjZXB0aW9uIHRoYXQgYmVsb25ncyB0byB0aGUgdGFyZ2V0IHJlcGVhdGluZyBldmVudC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmo6IGFueSwgaW5kZXg6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudEV4Y2VwdGlvbihldmVudE9iaiwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBwb3B1cCBXaW5kb3cgZm9yIHNwZWNpZmljIGV2ZW50IEVkaXRpbmcuIFxuXHQqIEBwYXJhbSB7YW55fSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhIGV2ZW50IG9yIHRoZSBhY3R1YWwgZXZlbnQgb2JqZWN0IHRvIGJlIGVkaXRlZC5cblx0Ki9cbiAgICBwdWJsaWMgb3BlbldpbmRvdyhpbmRleDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5XaW5kb3coaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbG9zZXMgdGhlIHBvcHVwIHdpbmRvdy4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlV2luZG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVdpbmRvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlV2luZG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFByZXBhcmVzIHRoZSBTY2hlZHVsZXIgZm9yIHByaW50aW5nIGJ5IG9wZW5pbmcgdGhlIGJyb3dzZXIncyBQcmludCBQcmV2aWV3LiBcblx0Ki9cbiAgICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2Nyb2xscyB0aGUgU2NoZWR1bGVyIHRvIGEgRGF0ZS4gXG5cdCogQHBhcmFtIHtEYXRlfSBkYXRlLiBUaGUgZGF0ZSB0byBzY3JvbGwgdG8uXG5cdCogQHBhcmFtIHtib29sZWFufSBzdHJpY3RTY3JvbGw/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2Nyb2xsIHN0cmljdGx5IHRvIHRoZSBkYXRlIG9yIG5vdC4gVGhpcyBtZWFuIHN0aGF0IHRoZSBTY2hlZHVsZXIgd2xsIHNjcm9sbCB0byB0aGUgYmVnaW5pbmcgb2YgdGhlIGNlbGwgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgdGFyZ2V0IGRhdGUuXG5cdCogQHBhcmFtIHtib29sZWFufSBhdXRvU2Nyb2xsPy4gQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBhbmQgZWxlbWVudCBib3VuZHMsIHRoZW4gYWRkcyBhbiBvZmZzZXQgdG8gc2Nyb2xsIHdpdGhpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aWV3LlxuXHQqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0RhdGUoZGF0ZTogRGF0ZSwgc3RyaWN0U2Nyb2xsPzogYm9vbGVhbiwgYXV0b1Njcm9sbD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9EYXRlKGRhdGUsIHN0cmljdFNjcm9sbCwgYXV0b1Njcm9sbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9EYXRlKGRhdGUsIHN0cmljdFNjcm9sbCwgYXV0b1Njcm9sbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0aGUgU2NoZWR1bGVyIHRvIGEgRGF0ZS4gXG5cdCogQHBhcmFtIHtEYXRlfSBkYXRlLiBUaGUgZGF0ZSB0byBuYXZpZ2F0ZSB0by5cblx0Ki9cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0RhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5uYXZpZ2F0ZVRvRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5uYXZpZ2F0ZVRvRGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2Nyb2xscyB0aGUgU2NoZWR1bGVyIHRvIGFuIGV2ZW50LiBcblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIFRoZSBpbmRleCBvZiBhIFNjaGVkdWxlciBldmVudCBvciB0aGUgYWN0dWFsIGV2ZW50IG9iamVjdCB0byBzY3JvbGwgdG8uXG5cdCovXG4gICAgcHVibGljIHNjcm9sbFRvRXZlbnQoaW5kZXg6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxUb0V2ZW50KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxUb0V2ZW50KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgYSBjdXN0b20gbm90aWZpY2F0aW9uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS4gVGhlIG5vdGlmaWNhdGlvbiBtZXNzYWdlLlxuXHQqIEBwYXJhbSB7YW55fSB0b2FzdFNldHRpbmdzLiBTbWFydC5Ub2FzdCBzZXR0aW5ncyB0byBiZSBhcHBsaWVkIHRvIHRoZSBUb2FzdCBlbGVtZW50IHdoZW4gb3BlbmluZyB0aGUgbm90aWZpY2F0aW9uLlxuXHQqL1xuICAgIHB1YmxpYyBvcGVuTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgdG9hc3RTZXR0aW5nczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5Ob3RpZmljYXRpb24obWVzc2FnZSwgdG9hc3RTZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3Blbk5vdGlmaWNhdGlvbihtZXNzYWdlLCB0b2FzdFNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIGFsbCBub3RpZmljYXRpb25zLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2VOb3RpZmljYXRpb25zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbGwgb2NjdXJhbmNlcyBvZiBhbiBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldm5ldCBvYmplY3QuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGNvdW50LiBUaGUgbnVtYmVyIG9mIG9jY3VyYW5jZXMgdG8gcmV0dXJuLiBCeSBkZWZhdWx0IDEwMCBkYXRlIG9jY3VyYW5jZXMgb2YgdGhlIGV2ZW50IGFyZSByZXR1cm5lZC5cblx0Ki9cbiAgICBwdWJsaWMgb2NjdXJyZW5jZXMoZXZlbnRPYmo6IGFueSwgY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlcyhldmVudE9iaiwgY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VzKGV2ZW50T2JqLCBjb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYWxsIG9jY3VyYW5jZXMgb2YgYW4gZXZlbnQgYmV0d2VlbiB0d28gZGF0ZXMuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0LlxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZUZyb20uIFRoZSBzdGFydCBkYXRlLlxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZVRvLiBUaGUgZW5kIGRhdGUuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VzQmV0d2VlbihldmVudE9iajogYW55LCBkYXRlRnJvbTogRGF0ZSwgZGF0ZVRvOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VzQmV0d2VlbihldmVudE9iaiwgZGF0ZUZyb20sIGRhdGVUbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZXNCZXR3ZWVuKGV2ZW50T2JqLCBkYXRlRnJvbSwgZGF0ZVRvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZmlyc3Qgb2NjdXJhbmNlIG9mIGFuIGV2ZW50IGFmdGVyIGEgZGF0ZS4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGRhdGUuIFRoZSBkYXRlIGFmdGVyIHdoaWNoIHRoZSBmaXJzdCBvY2N1cmFuY2Ugb2YgdGhlIGV2ZW50IHdpbGwgYmUgcmV0dXJuZWQuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VBZnRlcihldmVudE9iajogYW55LCBkYXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZUFmdGVyKGV2ZW50T2JqLCBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlQWZ0ZXIoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBsYXN0IG9jY3VyYW5jZSBvZiBhbiBldmVudCBiZWZvcmUgYSBkYXRlLiBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdC5cblx0KiBAcGFyYW0ge251bWJlcn0gZGF0ZS4gVGhlIGRhdGUgYmVmb3JlIHdoaWNoIHRoZSBmaXJzdCBvY2N1cmFuY2Ugb2YgdGhlIGV2ZW50IHdpbGwgYmUgcmV0dXJuZWQuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmo6IGFueSwgZGF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkYXRlU3RhcnQvZGF0ZUVuZCBvZiBhIHRpbWVsaW5lIGNlbGwuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNlbGwuIEEgU2NoZWR1bGVyIHRpbWVsaW5lIGNlbGwgZWxlbWVudC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q2VsbERhdGVSYW5nZShjZWxsKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENlbGxEYXRlUmFuZ2UoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgdG9vbHRpcChldmVudCBtZW51KSBmb3IgYW4gZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0IG9yIGl0J3MgaW5kZXguXG5cdCovXG4gICAgcHVibGljIG9wZW5FdmVudFRvb2x0aXAoZXZlbnRPYmo6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRXZlbnRUb29sdGlwKGV2ZW50T2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRXZlbnRUb29sdGlwKGV2ZW50T2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBldmVudCB0b29sdGlwIChldmVudCBtZW51KS4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlRXZlbnRUb29sdGlwKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZUV2ZW50VG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlRXZlbnRUb29sdGlwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBvciBmYWxzZSB3aGV0aGVyIHRoZSBkYXRlIGlzIHJlc3RyaWN0ZWQgb3Igbm90LiBcblx0KiBAcGFyYW0ge0RhdGV9IGRhdGUuIEEgRGF0ZSBvYmplY3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBpc0RhdGVSZXN0cmljdGVkKGRhdGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNEYXRlUmVzdHJpY3RlZChkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBvciBmYWxzZSB3aGV0aGVyIHRoZSBob3VyIGlzIHJlc3RyaWN0ZWQgb3Igbm90LiBcblx0KiBAcGFyYW0ge251bWJlciB8IERhdGV9IGhvdXIuIEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyBhbiBob3VyICggMCB0byAyMyApIG9yIGEgRGF0ZSBvYmplY3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBpc0hvdXJSZXN0cmljdGVkKGhvdXIpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNIb3VyUmVzdHJpY3RlZChob3VyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBvciBmYWxzZSB3aGV0aGVyIHRoZSBldmVudCBpcyByZXN0cmljdGVkIG9yIG5vdC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCAgb2JqZWN0IG9yIGEgZGlyZWN0IGV2ZW50IEhUTUxFbGVtZW50IGluc3RhbmNlLlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaXNFdmVudFJlc3RyaWN0ZWQoZXZlbnRPYmopOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNFdmVudFJlc3RyaWN0ZWQoZXZlbnRPYmopO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVsZXRlcyB0aGUgY3VycmVudCB1bmRvL3JlZG8gaGlzdG9yeS4gXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBkZWxldGVVbmRvUmVkb0hpc3RvcnkoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmRlbGV0ZVVuZG9SZWRvSGlzdG9yeSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgcG9zc2libGUgdG8gcmVkbyBhbiBhY3Rpb24uIFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgY2FuUmVkbygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuUmVkbygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgcG9zc2JpbGUgdG8gdW5kbyBhbiBhY3Rpb24uIFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgY2FuVW5kbygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuVW5kbygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVkbyB0aGUgbmV4dCBldmVudCBtb2RpZmljYXRpb24uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzdGVwPy4gQSBzdGVwIHRvIHJlZG8gdG8uXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyByZWRvKHN0ZXA/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlZG8oc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbmRvIHRoZSBsYXN0IGV2ZW50IG1vZGlmaWNhdGlvbi4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHN0ZXA/LiBBIHN0ZXAgdG8gdW5kbyB0by5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIHVuZG8oc3RlcD8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kbyhzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkJlZ2luVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZ2luVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydiZWdpblVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVuZFVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1DaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2hhbmdpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUNoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUluc2VydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtSW5zZXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1SZW1vdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbVJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3Q2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVmlld0NoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd2aWV3Q2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3Q2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5naW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVmlld0NoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdDaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5naW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV2ZW50U2hvcnRjdXRLZXkuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXZlbnRTaG9ydGN1dEtleScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EYXRlQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcG92ZXJDZWxsSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJvcG92ZXJDZWxsLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BvdmVyQ2VsbCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcG92ZXJDZWxsSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVkaXREaWFsb2dPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXREaWFsb2dPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRWRpdERpYWxvZ09wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRWRpdERpYWxvZ0Nsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXREaWFsb2dDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FZGl0RGlhbG9nQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV2ZW50TWVudU9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV2ZW50TWVudUNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EYXRlTWVudU9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGF0ZU1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkYXRlTWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVmlld01lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZpZXdNZW51Q2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld01lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ25vdGlmaWNhdGlvbk9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ob3RpZmljYXRpb25PcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbk9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ25vdGlmaWNhdGlvbk9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk5vdGlmaWNhdGlvbkNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbkNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWdpblVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZFVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1JbnNlcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1JbnNlcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtUmVtb3ZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtUmVtb3ZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbVVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZpZXdDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZpZXdDaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudFNob3J0Y3V0S2V5SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRTaG9ydGN1dEtleScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RhdGVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcG92ZXJDZWxsSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcG92ZXJDZWxsJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wb3ZlckNlbGxIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVNZW51Q2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYXRlTWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aWV3TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51T3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZpZXdNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ25vdGlmaWNhdGlvbk9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25PcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbkNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==