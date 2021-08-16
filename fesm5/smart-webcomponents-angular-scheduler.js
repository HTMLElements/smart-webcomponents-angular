
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.scheduler';

import * as pkg from './../common/rrule.min.js';
window.rrule = { RRule:  pkg.default };
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

var SchedulerComponent = /** @class */ (function (_super) {
    __extends(SchedulerComponent, _super);
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
        /** @description This event is triggered when an Event has been updated/inserted/removed/dragged/resized.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of change that is being done to the item.
        *   item - An object that represents the actual item with it's attributes.
        */
        _this.onItemChange = new EventEmitter();
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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
        *   target - The dialog window that is opening.
        *   item - The event object that is going to be edited.
        *   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
        */
        _this.onEditDialogOpening = new EventEmitter();
        /** @description This event is triggered when the user opens the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
        *   target - The dialog window that is opened.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        */
        _this.onEditDialogOpen = new EventEmitter();
        /** @description This event is triggered when the user closes the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
        *   target - The dialog window that is closed.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        */
        _this.onEditDialogClose = new EventEmitter();
        /** @description This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
        *   target - The dialog window that is closing.
        *   item - The event object that is edited.
        *   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
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
    SchedulerComponent.prototype.getState = function () {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    /** @description Inserts an event.
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
    /** @description Updates an event.
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
    /** @description Removes an event.
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
    */
    SchedulerComponent.prototype.scrollToDate = function (date, strictScroll) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date, strictScroll);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.scrollToDate(date, strictScroll);
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "autoScrollStep", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "colorScheme", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "currentTimeIndicator", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "currentTimeIndicatorInterval", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "contextMenuDataSource", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "contextMenuClipboardActions", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "eventTemplate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "eventCollectorTemplate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "eventRenderMode", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "eventTooltipTemplate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "cellTemplate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "dateCurrent", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "dataExport", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "dateSelectorFormatFunction", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "dayFormat", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableAutoScroll", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableDrag", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableDrop", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableResize", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableSelection", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableWindowEditor", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableContextMenu", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableEventMenu", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableViewMenu", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "disableDateMenu", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "dragFeedbackFormatFunction", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "dragOffset", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "filter", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "filterable", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "filterMode", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "events", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "firstDayOfWeek", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "footerTemplate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "groupByDate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "groupOrientation", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "groupTemplate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "groups", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hourEnd", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hourStart", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hourFormat", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "headerTemplate", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "headerDatePosition", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "headerNavigationStyle", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "headerViewPosition", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hideAllDay", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hideNonworkingWeekdays", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hideOtherMonthDays", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hideTodayButton", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hideViewMenuCheckableItems", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "hideWeekend", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "legendLocation", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "legendPosition", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "horizontalScrollBarVisibility", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "max", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "maxEventsPerCell", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "min", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "minuteFormat", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "monthFormat", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "nonworkingDays", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "nonworkingHours", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "notificationInterval", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "resizeHandlesVisibility", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "resizeInterval", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "resources", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "restrictedDates", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "restrictedHours", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "scrollButtonsPosition", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "shadeUntilCurrentTime", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "showLegend", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "spinButtonsDelay", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "spinButtonsInitialDelay", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "statuses", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "timelineHeaderFormatFunction", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "timelineDayScale", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "timeRulerTicks", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "timeZone", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "timeZones", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "tooltipDelay", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "tooltipOffset", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "verticalScrollBarVisibility", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "view", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "viewType", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "views", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "viewSelectorType", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "weekdayFormat", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "yearFormat", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "undoRedoSteps", null);
    __decorate([
        Input()
    ], SchedulerComponent.prototype, "windowCustomizationFunction", null);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onBeginUpdate", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEndUpdate", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemChange", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemInsert", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemRemove", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onItemUpdate", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewChange", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewChanging", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventShortcutKey", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onDateChange", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onResizeStart", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onResizeEnd", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogOpening", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogOpen", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogClose", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEditDialogClosing", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuOpening", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuOpen", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuClose", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onContextMenuClosing", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuOpening", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuOpen", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuClose", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onEventMenuClosing", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onDateMenuOpen", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onDateMenuClose", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewMenuOpen", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onViewMenuClose", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onNotificationOpen", void 0);
    __decorate([
        Output()
    ], SchedulerComponent.prototype, "onNotificationClose", void 0);
    SchedulerComponent = __decorate([
        Directive({
            selector: 'smart-scheduler, [smart-scheduler]'
        })
    ], SchedulerComponent);
    return SchedulerComponent;
}(BaseElement));

var SchedulerModule = /** @class */ (function () {
    function SchedulerModule() {
    }
    SchedulerModule = __decorate([
        NgModule({
            declarations: [SchedulerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [SchedulerComponent]
        })
    ], SchedulerModule);
    return SchedulerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SchedulerComponent, SchedulerModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-scheduler.js.map
