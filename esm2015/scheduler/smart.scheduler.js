import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let SchedulerComponent = class SchedulerComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a batch update was started after executing the beginUpdate method.
        *  @param event. The custom event. 	*/
        this.onBeginUpdate = new EventEmitter();
        /** @description This event is triggered when a batch update was ended from after executing the endUpdate method.
        *  @param event. The custom event. 	*/
        this.onEndUpdate = new EventEmitter();
        /** @description This event is triggered when a new cell is selected/unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
        *   value - The new selected Date.
        *   oldValue - The previously selected Date.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when an Event has been updated/inserted/removed/dragged/resized or an exception of a repeating event has been added/updated/removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
        *   item - An object that represents the actual item with it's attributes.
        *   type - The type of change that is being done to the item.
        */
        this.onItemChange = new EventEmitter();
        /** @description This event is triggered when an Event is going to be updated/inserted/removed. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
        *   item - An object that represents the actual item with it's attributes.
        *   type - The type of change that is going to be made to the item (e.g. 'inserting', 'removing', 'updating', 'exceptionInserting', 'exceptionUpdating', 'exceptionRemoving').
        */
        this.onItemChanging = new EventEmitter();
        /** @description This event is triggered when en event, event item or a context menu item is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	itemObj)
        *   item - The HTMLElement for the event.
        *   type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
        *   itemObj - The event object.
        */
        this.onItemClick = new EventEmitter();
        /** @description This event is triggered when an Event is inserted.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemInsert = new EventEmitter();
        /** @description This event is triggered when an Event is removed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemRemove = new EventEmitter();
        /** @description This event is triggered when an Event is updated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
        *   type - The type of item that has been modified.
        *   item - An object that represents the actual item with it's attributes.
        */
        this.onItemUpdate = new EventEmitter();
        /** @description This event is triggered when the view is changed via user interaction.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The value of the previously selected view.
        *   value - The value of the new selected view.
        */
        this.onViewChange = new EventEmitter();
        /** @description This event is triggered before the view is changed via user interaction. The view change action can be canceled if event.preventDefault() is called on the event.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The value of the previously selected view.
        *   value - The value of the new selected view.
        */
        this.onViewChanging = new EventEmitter();
        /** @description This event is triggered when a shortcut key for an event is pressed. By default only 'Delete' key is used.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	key, 	target, 	eventObj)
        *   key - The shortcut key that was pressed.
        *   target - The event target (HTMLElement).
        *   eventObj - The scheduler Event object that affected by the keypress.
        */
        this.onEventShortcutKey = new EventEmitter();
        /** @description This event is triggered when the 'dateCurrent' property is changed. This can be caused by navigating to a different date.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous current date that was in view.
        *   value - The current date in view.
        */
        this.onDateChange = new EventEmitter();
        /** @description This event is triggered when dragging of an event begins. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is going to be dragged.
        *   item - The scheduler Event object that is going to be dragged.
        *   itemDateRange - The start/end dates for the Scheduler Event.
        *   originalEvent - The original event object.
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when dragging of an event finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is dragged.
        *   item - The scheduler Event object that is dragged.
        *   itemDateRange - The new start/end dates for the dragged Scheduler Event.
        *   originalEvent - The original event object.
        */
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when the user drops an item over a cell.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	date, 	allDay)
        *   target - The HTMLElement that corresponds to the event that is dragged.
        *   date - The cell's date under the pointer.
        *   allDay - Boolean value, which is true when the cell under the pointer is all day cell.
        */
        this.onDropoverCell = new EventEmitter();
        /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is going to be resized.
        *   item - The scheduler Event object that is going to be resized.
        *   itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
        *   originalEvent - The original event object.
        */
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of an event finishes.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
        *   target - The HTMLElement that corresponds to the event that is resized.
        *   item - The scheduler Event object that is resized.
        *   itemDateRange - The new start/end dates for the resized Scheduler Event.
        *   originalEvent - The original event object.
        */
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the user starts top open the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
        *   target - The dialog window that is opening.
        *   item - The event object that is going to be edited.
        *   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEditDialogOpening = new EventEmitter();
        /** @description This event is triggered when the user opens the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
        *   target - The dialog window that is opened.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEditDialogOpen = new EventEmitter();
        /** @description This event is triggered when the user closes the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
        *   target - The dialog window that is closed.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEditDialogClose = new EventEmitter();
        /** @description This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
        *   target - The dialog window that is closing.
        *   item - The event object that is edited.
        *   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEditDialogClosing = new EventEmitter();
        /** @description This event is triggered when the user begins to open the context menu on a timeline cell or an event element. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        this.onContextMenuOpening = new EventEmitter();
        /** @description This event is triggered when the context menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        this.onContextMenuOpen = new EventEmitter();
        /** @description This event is triggered when the context menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        this.onContextMenuClose = new EventEmitter();
        /** @description This event is triggered when the user is about to close the context menu. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
        *   target - The context menu instance.
        *   owner - The HTMLElement that the menu belongs to.
        *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
        *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
        */
        this.onContextMenuClosing = new EventEmitter();
        /** @description This event is triggered when the event menu is about to open. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEventMenuOpening = new EventEmitter();
        /** @description This event is triggered when the event menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEventMenuOpen = new EventEmitter();
        /** @description This event is triggered when the event menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEventMenuClose = new EventEmitter();
        /** @description This event is triggered when the evet menu is about to close. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
        *   target - The menu instance.
        *   owner - The HTMLElement of the event that the menu belongs to.
        *   eventObj - The event object that is the target of the menu.
        */
        this.onEventMenuClosing = new EventEmitter();
        /** @description This event is triggered when the date selection menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        this.onDateMenuOpen = new EventEmitter();
        /** @description This event is triggered when the date selection menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        this.onDateMenuClose = new EventEmitter();
        /** @description This event is triggered when the view selection menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        this.onViewMenuOpen = new EventEmitter();
        /** @description This event is triggered when the view selection menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The menu instance.
        */
        this.onViewMenuClose = new EventEmitter();
        /** @description This event is triggered when a notification is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
        *   instance - The toast item instance that is opened.
        */
        this.onNotificationOpen = new EventEmitter();
        /** @description This event is triggered when a notification is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
        *   instance - The toast item instance that is closed.
        */
        this.onNotificationClose = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-scheduler');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Determines the scroll speed while dragging an event.  */
    get autoScrollStep() {
        return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
    }
    set autoScrollStep(value) {
        this.nativeElement ? this.nativeElement.autoScrollStep = value : undefined;
    }
    /** @description Determines whether the all day cells in Day and Week views automatically change their height depending on the events count in these cells.  */
    get autoHeightAllDayCells() {
        return this.nativeElement ? this.nativeElement.autoHeightAllDayCells : undefined;
    }
    set autoHeightAllDayCells(value) {
        this.nativeElement ? this.nativeElement.autoHeightAllDayCells = value : undefined;
    }
    /** @description Determines the color scheme for the event background selector in the event window editor.  */
    get colorScheme() {
        return this.nativeElement ? this.nativeElement.colorScheme : undefined;
    }
    set colorScheme(value) {
        this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
    }
    /** @description Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.  */
    get currentTimeIndicator() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
    }
    set currentTimeIndicator(value) {
        this.nativeElement ? this.nativeElement.currentTimeIndicator = value : undefined;
    }
    /** @description Determines the refresh interval in seconds for the currentTimeIndicator.  */
    get currentTimeIndicatorInterval() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
    }
    set currentTimeIndicatorInterval(value) {
        this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval = value : undefined;
    }
    /** @description Determines the context menu items that are visible when the Context Menu is opened. */
    get contextMenuDataSource() {
        return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
    }
    set contextMenuDataSource(value) {
        this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
    }
    /** @description Determines whether the clipboard shortcuts for copy/paste/cut action of events are visible in the Scheduler context menu or not. */
    get contextMenuClipboardActions() {
        return this.nativeElement ? this.nativeElement.contextMenuClipboardActions : undefined;
    }
    set contextMenuClipboardActions(value) {
        this.nativeElement ? this.nativeElement.contextMenuClipboardActions = value : undefined;
    }
    /** @description Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    get eventTemplate() {
        return this.nativeElement ? this.nativeElement.eventTemplate : undefined;
    }
    set eventTemplate(value) {
        this.nativeElement ? this.nativeElement.eventTemplate = value : undefined;
    }
    /** @description Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    get eventCollectorTemplate() {
        return this.nativeElement ? this.nativeElement.eventCollectorTemplate : undefined;
    }
    set eventCollectorTemplate(value) {
        this.nativeElement ? this.nativeElement.eventCollectorTemplate = value : undefined;
    }
    /** @description  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created. */
    get eventRenderMode() {
        return this.nativeElement ? this.nativeElement.eventRenderMode : undefined;
    }
    set eventRenderMode(value) {
        this.nativeElement ? this.nativeElement.eventRenderMode = value : undefined;
    }
    /** @description Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    get eventTooltipTemplate() {
        return this.nativeElement ? this.nativeElement.eventTooltipTemplate : undefined;
    }
    set eventTooltipTemplate(value) {
        this.nativeElement ? this.nativeElement.eventTooltipTemplate = value : undefined;
    }
    /** @description Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell. */
    get cellTemplate() {
        return this.nativeElement ? this.nativeElement.cellTemplate : undefined;
    }
    set cellTemplate(value) {
        this.nativeElement ? this.nativeElement.cellTemplate = value : undefined;
    }
    /** @description Determines the currently visible date for the Scheduler. */
    get dateCurrent() {
        return this.nativeElement ? this.nativeElement.dateCurrent : undefined;
    }
    set dateCurrent(value) {
        this.nativeElement ? this.nativeElement.dateCurrent = value : undefined;
    }
    /** @description Sets the Schedulers's Data Export options. */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        this.nativeElement ? this.nativeElement.dataExport = value : undefined;
    }
    /** @description Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties: */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date. */
    get dateSelectorFormatFunction() {
        return this.nativeElement ? this.nativeElement.dateSelectorFormatFunction : undefined;
    }
    set dateSelectorFormatFunction(value) {
        this.nativeElement ? this.nativeElement.dateSelectorFormatFunction = value : undefined;
    }
    /** @description Determines the day format of the dates in the timeline. */
    get dayFormat() {
        return this.nativeElement ? this.nativeElement.dayFormat : undefined;
    }
    set dayFormat(value) {
        this.nativeElement ? this.nativeElement.dayFormat = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Disables auto scrolling of the timeline while dragging/resizing an event. */
    get disableAutoScroll() {
        return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
    }
    set disableAutoScroll(value) {
        this.nativeElement ? this.nativeElement.disableAutoScroll = value : undefined;
    }
    /** @description Disables dragging of events. */
    get disableDrag() {
        return this.nativeElement ? this.nativeElement.disableDrag : undefined;
    }
    set disableDrag(value) {
        this.nativeElement ? this.nativeElement.disableDrag = value : undefined;
    }
    /** @description Disables dropping of events. */
    get disableDrop() {
        return this.nativeElement ? this.nativeElement.disableDrop : undefined;
    }
    set disableDrop(value) {
        this.nativeElement ? this.nativeElement.disableDrop = value : undefined;
    }
    /** @description Disables resizing of events. */
    get disableResize() {
        return this.nativeElement ? this.nativeElement.disableResize : undefined;
    }
    set disableResize(value) {
        this.nativeElement ? this.nativeElement.disableResize = value : undefined;
    }
    /** @description Disables the cell selection. */
    get disableSelection() {
        return this.nativeElement ? this.nativeElement.disableSelection : undefined;
    }
    set disableSelection(value) {
        this.nativeElement ? this.nativeElement.disableSelection = value : undefined;
    }
    /** @description Disables the window editor for the events. */
    get disableWindowEditor() {
        return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
    }
    set disableWindowEditor(value) {
        this.nativeElement ? this.nativeElement.disableWindowEditor = value : undefined;
    }
    /** @description Disables the context menu of the events and cells. */
    get disableContextMenu() {
        return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
    }
    set disableContextMenu(value) {
        this.nativeElement ? this.nativeElement.disableContextMenu = value : undefined;
    }
    /** @description Disables the event menu that appears when an event/collector has been clicked. */
    get disableEventMenu() {
        return this.nativeElement ? this.nativeElement.disableEventMenu : undefined;
    }
    set disableEventMenu(value) {
        this.nativeElement ? this.nativeElement.disableEventMenu = value : undefined;
    }
    /** @description Disables the view menu that allows to select the current Scheduler view. */
    get disableViewMenu() {
        return this.nativeElement ? this.nativeElement.disableViewMenu : undefined;
    }
    set disableViewMenu(value) {
        this.nativeElement ? this.nativeElement.disableViewMenu = value : undefined;
    }
    /** @description Disables the date menu that allows to select the current Scheduler date. */
    get disableDateMenu() {
        return this.nativeElement ? this.nativeElement.disableDateMenu : undefined;
    }
    set disableDateMenu(value) {
        this.nativeElement ? this.nativeElement.disableDateMenu = value : undefined;
    }
    /** @description A callback that can be used to customize the drag feedback that appears when an event is dragged. */
    get dragFeedbackFormatFunction() {
        return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
    }
    set dragFeedbackFormatFunction(value) {
        this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
    }
    /** @description Determines the offset for the drag feedback from the pointer. */
    get dragOffset() {
        return this.nativeElement ? this.nativeElement.dragOffset : undefined;
    }
    set dragOffset(value) {
        this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
    }
    /** @description Determines the filtering condition for the events.The filter property takes an array of objects or a function. Each object represents a single filtering condition with the following attributes: name - the name of the Scheduler event property that will be filtered by.value - the filtering condition value. The value will be used to compare the events based on the filterMode, for example: [{ name: 'price', value: 25 }]. The value can also be a function. The function accepts a single arguemnt - the value that corresponds to the filtered attribute. The function allows to apply custom condition that is different from the default filter modes. It should return true ( if the evnet passes the filtering condition ) or false ( if the event does not meet the filtering condition ). Here's an example: [{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]. In the example the events that do not have a 'roomId' property that is equal to '2' or '3' will be filtered out.. If a function is set to the filter property instead, it allows to completely customize the filtering logic. The function passes a single argument - each Scheduler event that will be displayed. The function should return true ( if the condition is met ) or false ( if not ). */
    get filter() {
        return this.nativeElement ? this.nativeElement.filter : undefined;
    }
    set filter(value) {
        this.nativeElement ? this.nativeElement.filter = value : undefined;
    }
    /** @description Determines whether Scheduler's filtering is enabled or not. */
    get filterable() {
        return this.nativeElement ? this.nativeElement.filterable : undefined;
    }
    set filterable(value) {
        this.nativeElement ? this.nativeElement.filterable = value : undefined;
    }
    /** @description Determines the filter mode. */
    get filterMode() {
        return this.nativeElement ? this.nativeElement.filterMode : undefined;
    }
    set filterMode(value) {
        this.nativeElement ? this.nativeElement.filterMode = value : undefined;
    }
    /** @description A getter that returns  an array of all Scheduler events. */
    get events() {
        return this.nativeElement ? this.nativeElement.events : undefined;
    }
    set events(value) {
        this.nativeElement ? this.nativeElement.events = value : undefined;
    }
    /** @description Determines the first day of week for the Scheduler. By default it's Sunday. */
    get firstDayOfWeek() {
        return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
    }
    set firstDayOfWeek(value) {
        this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
    }
    /** @description Allows to customize the footer of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: footerContainer - the footer container.. */
    get footerTemplate() {
        return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
    }
    set footerTemplate(value) {
        this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
    }
    /** @description Determines whether the events will be grouped by date. */
    get groupByDate() {
        return this.nativeElement ? this.nativeElement.groupByDate : undefined;
    }
    set groupByDate(value) {
        this.nativeElement ? this.nativeElement.groupByDate = value : undefined;
    }
    /** @description Determines the grouping orientation. */
    get groupOrientation() {
        return this.nativeElement ? this.nativeElement.groupOrientation : undefined;
    }
    set groupOrientation(value) {
        this.nativeElement ? this.nativeElement.groupOrientation = value : undefined;
    }
    /** @description Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    get groupTemplate() {
        return this.nativeElement ? this.nativeElement.groupTemplate : undefined;
    }
    set groupTemplate(value) {
        this.nativeElement ? this.nativeElement.groupTemplate = value : undefined;
    }
    /** @description Determines the resources that the events are grouped by. */
    get groups() {
        return this.nativeElement ? this.nativeElement.groups : undefined;
    }
    set groups(value) {
        this.nativeElement ? this.nativeElement.groups = value : undefined;
    }
    /** @description Determines the end hour that will be displayed in 'day' and 'week' views. */
    get hourEnd() {
        return this.nativeElement ? this.nativeElement.hourEnd : undefined;
    }
    set hourEnd(value) {
        this.nativeElement ? this.nativeElement.hourEnd = value : undefined;
    }
    /** @description Determines the start hour that will be displayed in 'day' and 'week' views. */
    get hourStart() {
        return this.nativeElement ? this.nativeElement.hourStart : undefined;
    }
    set hourStart(value) {
        this.nativeElement ? this.nativeElement.hourStart = value : undefined;
    }
    /** @description Determines the formatting of hours inside the element. */
    get hourFormat() {
        return this.nativeElement ? this.nativeElement.hourFormat : undefined;
    }
    set hourFormat(value) {
        this.nativeElement ? this.nativeElement.hourFormat = value : undefined;
    }
    /** @description Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container.. */
    get headerTemplate() {
        return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
    }
    set headerTemplate(value) {
        this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
    }
    /** @description  Determines the position of the Date selector inside the Header of the element. */
    get headerDatePosition() {
        return this.nativeElement ? this.nativeElement.headerDatePosition : undefined;
    }
    set headerDatePosition(value) {
        this.nativeElement ? this.nativeElement.headerDatePosition = value : undefined;
    }
    /** @description  Determines the styling of the Header navigation controls. */
    get headerNavigationStyle() {
        return this.nativeElement ? this.nativeElement.headerNavigationStyle : undefined;
    }
    set headerNavigationStyle(value) {
        this.nativeElement ? this.nativeElement.headerNavigationStyle = value : undefined;
    }
    /** @description  Determines the position of the view selector control inside the Header of the element. */
    get headerViewPosition() {
        return this.nativeElement ? this.nativeElement.headerViewPosition : undefined;
    }
    set headerViewPosition(value) {
        this.nativeElement ? this.nativeElement.headerViewPosition = value : undefined;
    }
    /** @description Determines whether the 'All Day' container with the all day events is hidden or not. */
    get hideAllDay() {
        return this.nativeElement ? this.nativeElement.hideAllDay : undefined;
    }
    set hideAllDay(value) {
        this.nativeElement ? this.nativeElement.hideAllDay = value : undefined;
    }
    /** @description Determines whether the days set by 'nonworkingDays' property are hidden or not. */
    get hideNonworkingWeekdays() {
        return this.nativeElement ? this.nativeElement.hideNonworkingWeekdays : undefined;
    }
    set hideNonworkingWeekdays(value) {
        this.nativeElement ? this.nativeElement.hideNonworkingWeekdays = value : undefined;
    }
    /** @description Determines whether other month days are visible when view is set to month. When enabled, events that start on other month days are not displayed and the cells that represent such days do not allow the creation of new events on them. Also dragging and droping an event on other month days is not allowed. Reszing is also affected. Events can end on other month days, but cannot start on one. */
    get hideOtherMonthDays() {
        return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
    }
    set hideOtherMonthDays(value) {
        this.nativeElement ? this.nativeElement.hideOtherMonthDays = value : undefined;
    }
    /** @description Determines whether the 'Today' button is hidden or not. */
    get hideTodayButton() {
        return this.nativeElement ? this.nativeElement.hideTodayButton : undefined;
    }
    set hideTodayButton(value) {
        this.nativeElement ? this.nativeElement.hideTodayButton = value : undefined;
    }
    /** @description Determines whether the checkable items in the view selection menu are hidden or not. */
    get hideViewMenuCheckableItems() {
        return this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems : undefined;
    }
    set hideViewMenuCheckableItems(value) {
        this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems = value : undefined;
    }
    /** @description Determines whether the weekend days are hidden or not. */
    get hideWeekend() {
        return this.nativeElement ? this.nativeElement.hideWeekend : undefined;
    }
    set hideWeekend(value) {
        this.nativeElement ? this.nativeElement.hideWeekend = value : undefined;
    }
    /** @description Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header. */
    get legendLocation() {
        return this.nativeElement ? this.nativeElement.legendLocation : undefined;
    }
    set legendLocation(value) {
        this.nativeElement ? this.nativeElement.legendLocation = value : undefined;
    }
    /** @description Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that. */
    get legendPosition() {
        return this.nativeElement ? this.nativeElement.legendPosition : undefined;
    }
    set legendPosition(value) {
        this.nativeElement ? this.nativeElement.legendPosition = value : undefined;
    }
    /** @description Determines the mouse wheel step. When this property is set to a positive number, the scroll step with mouse wheel or trackpad will depend on the property value. */
    get mouseWheelStep() {
        return this.nativeElement ? this.nativeElement.mouseWheelStep : undefined;
    }
    set mouseWheelStep(value) {
        this.nativeElement ? this.nativeElement.mouseWheelStep = value : undefined;
    }
    /** @description Determines weather or not horizontal scrollbar is shown. */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
    }
    /** @description  Determines the language of the Scheduler.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Detetmines the maximum view date for the Scheduler. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Detetmines the maximum number of events per Scheduler cell. By default this property is null which means that the number of events per cell is automatically determined by the size of the events. */
    get maxEventsPerCell() {
        return this.nativeElement ? this.nativeElement.maxEventsPerCell : undefined;
    }
    set maxEventsPerCell(value) {
        this.nativeElement ? this.nativeElement.maxEventsPerCell = value : undefined;
    }
    /** @description Detetmines the minimum view date for the Scheduler. */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines the minute formatting inside the Scheduler. */
    get minuteFormat() {
        return this.nativeElement ? this.nativeElement.minuteFormat : undefined;
    }
    set minuteFormat(value) {
        this.nativeElement ? this.nativeElement.minuteFormat = value : undefined;
    }
    /** @description Determines the month name formatting inside the Scheduler. */
    get monthFormat() {
        return this.nativeElement ? this.nativeElement.monthFormat : undefined;
    }
    set monthFormat(value) {
        this.nativeElement ? this.nativeElement.monthFormat = value : undefined;
    }
    /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable. */
    get nonworkingDays() {
        return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
    }
    set nonworkingDays(value) {
        this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
    }
    /** @description Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest. */
    get nonworkingHours() {
        return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
    }
    set nonworkingHours(value) {
        this.nativeElement ? this.nativeElement.nonworkingHours = value : undefined;
    }
    /** @description Determines the interval (in seconds) at which the element will check for notifications. */
    get notificationInterval() {
        return this.nativeElement ? this.nativeElement.notificationInterval : undefined;
    }
    set notificationInterval(value) {
        this.nativeElement ? this.nativeElement.notificationInterval = value : undefined;
    }
    /** @description Determines the visibility of the resize handles. */
    get resizeHandlesVisibility() {
        return this.nativeElement ? this.nativeElement.resizeHandlesVisibility : undefined;
    }
    set resizeHandlesVisibility(value) {
        this.nativeElement ? this.nativeElement.resizeHandlesVisibility = value : undefined;
    }
    /** @description Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling */
    get resizeInterval() {
        return this.nativeElement ? this.nativeElement.resizeInterval : undefined;
    }
    set resizeInterval(value) {
        this.nativeElement ? this.nativeElement.resizeInterval = value : undefined;
    }
    /** @description An array of resources that can be assigned to the events. */
    get resources() {
        return this.nativeElement ? this.nativeElement.resources : undefined;
    }
    set resources(value) {
        this.nativeElement ? this.nativeElement.resources = value : undefined;
    }
    /** @description Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed. */
    get restrictedDates() {
        return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
    }
    set restrictedDates(value) {
        this.nativeElement ? this.nativeElement.restrictedDates = value : undefined;
    }
    /** @description Defines an array of hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed. */
    get restrictedHours() {
        return this.nativeElement ? this.nativeElement.restrictedHours : undefined;
    }
    set restrictedHours(value) {
        this.nativeElement ? this.nativeElement.restrictedHours = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description  Determines the position of the date navigation navigation buttons inside the header of the element. */
    get scrollButtonsPosition() {
        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
    }
    set scrollButtonsPosition(value) {
        this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
    }
    /** @description Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded. */
    get shadeUntilCurrentTime() {
        return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
    }
    set shadeUntilCurrentTime(value) {
        this.nativeElement ? this.nativeElement.shadeUntilCurrentTime = value : undefined;
    }
    /** @description Determines whether the resource legend is visible or not. The Legend shows the resources and their items in the footer section of the Scheduler. If filterable is enabled it is possible to filter by resource items by clicking on the corresponding resource item from the legend. */
    get showLegend() {
        return this.nativeElement ? this.nativeElement.showLegend : undefined;
    }
    set showLegend(value) {
        this.nativeElement ? this.nativeElement.showLegend = value : undefined;
    }
    /** @description Determines the name of the resource data item property that will be used for sorting the resource data defined as the resource.dataSource. */
    get sortBy() {
        return this.nativeElement ? this.nativeElement.sortBy : undefined;
    }
    set sortBy(value) {
        this.nativeElement ? this.nativeElement.sortBy = value : undefined;
    }
    /** @description Allows to define a custom sorting function that will be used to sort the resource data. The sortFunction is used when sortOrder is set to custom. */
    get sortFunction() {
        return this.nativeElement ? this.nativeElement.sortFunction : undefined;
    }
    set sortFunction(value) {
        this.nativeElement ? this.nativeElement.sortFunction = value : undefined;
    }
    /** @description Determines the sorting order of the resource data items. When set to custom, a custom sorting function has to be defined for the sortFunction property. The asc stands for 'ascending' while desc means 'descending' sorting order. */
    get sortOrder() {
        return this.nativeElement ? this.nativeElement.sortOrder : undefined;
    }
    set sortOrder(value) {
        this.nativeElement ? this.nativeElement.sortOrder = value : undefined;
    }
    /** @description Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
    get spinButtonsDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
    }
    set spinButtonsDelay(value) {
        this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
    }
    /** @description Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
    get spinButtonsInitialDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
    }
    set spinButtonsInitialDelay(value) {
        this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
    }
    /** @description Defines the statuses that will be available for selection thourgh the window editor for the events. */
    get statuses() {
        return this.nativeElement ? this.nativeElement.statuses : undefined;
    }
    set statuses(value) {
        this.nativeElement ? this.nativeElement.statuses = value : undefined;
    }
    /** @description Sets or gets the element's visual theme.  */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description A format function for the Header of the Timeline. Allows to modify the date labels in the header cells. */
    get timelineHeaderFormatFunction() {
        return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
    }
    set timelineHeaderFormatFunction(value) {
        this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
    }
    /** @description Determines the date scale for the timeline cells. */
    get timelineDayScale() {
        return this.nativeElement ? this.nativeElement.timelineDayScale : undefined;
    }
    set timelineDayScale(value) {
        this.nativeElement ? this.nativeElement.timelineDayScale = value : undefined;
    }
    /** @description Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views. */
    get timeRulerTicks() {
        return this.nativeElement ? this.nativeElement.timeRulerTicks : undefined;
    }
    set timeRulerTicks(value) {
        this.nativeElement ? this.nativeElement.timeRulerTicks = value : undefined;
    }
    /** @description Determines the timeZone for the element. By default if the local time zone is used if the property is not set. */
    get timeZone() {
        return this.nativeElement ? this.nativeElement.timeZone : undefined;
    }
    set timeZone(value) {
        this.nativeElement ? this.nativeElement.timeZone = value : undefined;
    }
    /** @description Allows to display additional timeZones at once along with the default that is set via the timeZone property. Accepts an array values that represent the ids of valid time zones. The possbile time zones can be viewed in the timeZone property description. By default the local time zone is displayed. */
    get timeZones() {
        return this.nativeElement ? this.nativeElement.timeZones : undefined;
    }
    set timeZones(value) {
        this.nativeElement ? this.nativeElement.timeZones = value : undefined;
    }
    /** @description Determines the delay ( in miliseconds) before the tooltip/menu appears. */
    get tooltipDelay() {
        return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
    }
    set tooltipDelay(value) {
        this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
    }
    /** @description Determines the offset ot the tooltip/menu. */
    get tooltipOffset() {
        return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
    }
    set tooltipOffset(value) {
        this.nativeElement ? this.nativeElement.tooltipOffset = value : undefined;
    }
    /** @description Determines weather or not vertical scrollbar is shown. */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
    }
    /** @description Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view. */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        this.nativeElement ? this.nativeElement.view = value : undefined;
    }
    /** @description Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set. */
    get viewType() {
        return this.nativeElement ? this.nativeElement.viewType : undefined;
    }
    set viewType(value) {
        this.nativeElement ? this.nativeElement.viewType = value : undefined;
    }
    /** @description Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.hideHours - an Optional property applicable only to timelineWeek view that allows to hide the hour cells and only show the day cells. */
    get views() {
        return this.nativeElement ? this.nativeElement.views : undefined;
    }
    set views(value) {
        this.nativeElement ? this.nativeElement.views = value : undefined;
    }
    /** @description Determines type of the view selector located in the header of the element. */
    get viewSelectorType() {
        return this.nativeElement ? this.nativeElement.viewSelectorType : undefined;
    }
    set viewSelectorType(value) {
        this.nativeElement ? this.nativeElement.viewSelectorType = value : undefined;
    }
    /** @description Determines the Start Date rule. The Week and TimelineWeek views start by default from the current date taking into account the firstDayOfWeek property. When this property is set to 'dateCurrent', these views will start from the value of the 'dateCurrent'. */
    get viewStartDay() {
        return this.nativeElement ? this.nativeElement.viewStartDay : undefined;
    }
    set viewStartDay(value) {
        this.nativeElement ? this.nativeElement.viewStartDay = value : undefined;
    }
    /** @description Determines the format of the week days inside the element.  */
    get weekdayFormat() {
        return this.nativeElement ? this.nativeElement.weekdayFormat : undefined;
    }
    set weekdayFormat(value) {
        this.nativeElement ? this.nativeElement.weekdayFormat = value : undefined;
    }
    /** @description Determines the format of the dates inside the timeline header when they represent years. */
    get yearFormat() {
        return this.nativeElement ? this.nativeElement.yearFormat : undefined;
    }
    set yearFormat(value) {
        this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
    }
    /** @description Sets or gets if the element can be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Determines the maximum number of redo/undo steps that will be remembered by the Scheduler. When the number is reached the oldest records are removed in order to add new. */
    get undoRedoSteps() {
        return this.nativeElement ? this.nativeElement.undoRedoSteps : undefined;
    }
    set undoRedoSteps(value) {
        this.nativeElement ? this.nativeElement.undoRedoSteps = value : undefined;
    }
    /** @description A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited. */
    get windowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
    }
    set windowCustomizationFunction(value) {
        this.nativeElement ? this.nativeElement.windowCustomizationFunction = value : undefined;
    }
    /** @description Adds an event to the Scheduler. Accepts an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    */
    addEvent(eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEvent(eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEvent(eventObj);
            });
        }
    }
    /** @description Adds a new view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} type. The view type.
    * @param {string} label. The view's label displayed in the header.
    * @param {string} value. The view's value used to identify the view.
    * @param {boolean} hideWeekend. Determines whether to hide the weekend.
    * @param {boolean} hideNonworkingWeekdays. Determines whether to hide the non working days.
    * @param {number} additionalDays. Determines whether to add additional days to the view.
    */
    addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
            });
        }
    }
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }
    /** @description Creates an event and adds it to the Scheduler.
    * @param {string} label. Event label.
    * @param {string} value. Event value.
    * @param {string} dateStart. Event date start.
    * @param {string} dateEnd. Event date end.
    * @param {boolean} allDay. Event all day. Set it to true to create all day event.
    */
    createEvent(label, value, dateStart, dateEnd, allDay) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
            });
        }
    }
    /** @description Ends the update operation. This method will resume the rendering and will refresh the element.
    */
    endUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate();
            });
        }
    }
    /** @description Returns an array of the start and end view dates.
    * @returns {Date[]}
  */
    getViewDates() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getViewDates();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Refereshes the Scheduler by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
    */
    refresh(fullRefresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh(fullRefresh);
            });
        }
    }
    /** @description Exports the events from the Scheduler.
    * @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
    */
    exportData(dataFormat, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback);
            });
        }
    }
    /** @description Returns a JSON representation of the events inside the Scheduler.
    * @returns {any}
  */
    getDataSource() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getDataSource();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns a JSON representation of the resources inside the Scheduler.
    * @returns {any}
  */
    getResources() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getResources();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a date from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {string}
  */
    getDateFromCoordinates(x, y) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getDateFromCoordinates(x, y);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets whether a cell is all day cell from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {boolean}
  */
    getIsAllDayCellFromCoordinates(x, y) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getIsAllDayCellFromCoordinates(x, y);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the current state of the Scheduler. Includes the current dateCurernt, dataSource and timeZone properties.
    * @returns {any}
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
    /** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    clearState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }
    /** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
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
    /** @description Saves the current events of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events.
    */
    saveState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState(state);
            });
        }
    }
    /** @description Sets the Scheduler's view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} view?. The view's value. For example: 'day'.
    */
    setView(view) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setView(view);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setView(view);
            });
        }
    }
    /** @description Checks whether the Scheduler contains the event.
    * @param {any} eventObj. A Scheduler event object.
    * @returns {boolean}
  */
    containsEvent(eventObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.containsEvent(eventObj);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts an event as object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
    */
    insertEvent(eventObj, index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertEvent(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertEvent(eventObj, index);
            });
        }
    }
    /** @description Updates an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} index. A number that represents the index of an event or a Scheduler event object.
    * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
    */
    updateEvent(index, eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEvent(index, eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEvent(index, eventObj);
            });
        }
    }
    /** @description Removes an existing event.
    * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
    */
    removeEvent(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEvent(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEvent(index);
            });
        }
    }
    /** @description Returns an array of all exceptions of the target repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @returns {any}
  */
    getEventExceptions(eventObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getEventExceptions(eventObj);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Adds an event exception to a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.addEventException(eventObj, { date: occuranceDate, dateStart: newDateStart, dateEnd: newDateEnd, label: 'Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
    */
    addEventException(eventObj, exceptionObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEventException(eventObj, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEventException(eventObj, exceptionObj);
            });
        }
    }
    /** @description Updates an event exception of a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.updateEventException(eventObj, dateOfOccurance, { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
    * @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
    */
    updateEventException(eventObj, exceptionRef, exceptionObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
            });
        }
    }
    /** @description Removes an exception from a repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
    */
    removeEventException(eventObj, index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEventException(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEventException(eventObj, index);
            });
        }
    }
    /** @description Opens the popup Window for specific event Editing.
    * @param {any} index. A number that represents the index of a event or the actual event object to be edited.
    */
    openWindow(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(index);
            });
        }
    }
    /** @description Closes the popup window.
    */
    closeWindow() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeWindow();
            });
        }
    }
    /** @description Prepares the Scheduler for printing by opening the browser's Print Preview.
    */
    print() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }
    /** @description Scrolls the Scheduler to a Date.
    * @param {Date} date. The date to scroll to.
    * @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
    * @param {boolean} autoScroll?. Calculates the scroll positions and element bounds, then adds an offset to scroll within the middle of the view.
    */
    scrollToDate(date, strictScroll, autoScroll) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
            });
        }
    }
    /** @description Navigates the Scheduler to a Date.
    * @param {Date} date. The date to navigate to.
    */
    navigateToDate(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateToDate(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateToDate(date);
            });
        }
    }
    /** @description Scrolls the Scheduler to an event.
    * @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
    */
    scrollToEvent(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToEvent(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToEvent(index);
            });
        }
    }
    /** @description Opens a custom notification.
    * @param {string} message. The notification message.
    * @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
    */
    openNotification(message, toastSettings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openNotification(message, toastSettings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openNotification(message, toastSettings);
            });
        }
    }
    /** @description Closes all notifications.
    */
    closeNotifications() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeNotifications();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeNotifications();
            });
        }
    }
    /** @description Returns all occurances of an event.
    * @param {any} eventObj. A Scheduler evnet object.
    * @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
    */
    occurrences(eventObj, count) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrences(eventObj, count);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrences(eventObj, count);
            });
        }
    }
    /** @description Returns all occurances of an event between two dates.
    * @param {any} eventObj. A Scheduler event object.
    * @param {Date} dateFrom. The start date.
    * @param {Date} dateTo. The end date.
    */
    occurrencesBetween(eventObj, dateFrom, dateTo) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
            });
        }
    }
    /** @description Returns the first occurance of an event after a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date after which the first occurance of the event will be returned.
    */
    occurrenceAfter(eventObj, date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceAfter(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceAfter(eventObj, date);
            });
        }
    }
    /** @description Returns the last occurance of an event before a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date before which the first occurance of the event will be returned.
    */
    occurrenceBefore(eventObj, date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceBefore(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceBefore(eventObj, date);
            });
        }
    }
    /** @description Returns the dateStart/dateEnd of a timeline cell.
    * @param {HTMLElement} cell. A Scheduler timeline cell element.
    * @returns {any}
  */
    getCellDateRange(cell) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getCellDateRange(cell);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Opens the tooltip(event menu) for an event.
    * @param {any} eventObj. A Scheduler event object or it's index.
    */
    openEventTooltip(eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openEventTooltip(eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openEventTooltip(eventObj);
            });
        }
    }
    /** @description Closes the event tooltip (event menu).
    */
    closeEventTooltip() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeEventTooltip();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeEventTooltip();
            });
        }
    }
    /** @description Returns true or false whether the date is restricted or not.
    * @param {Date} date. A Date object.
    * @returns {boolean}
  */
    isDateRestricted(date) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.isDateRestricted(date);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns true or false whether the hour is restricted or not.
    * @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
    * @returns {boolean}
  */
    isHourRestricted(hour) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.isHourRestricted(hour);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns true or false whether the event is restricted or not.
    * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
    * @returns {boolean}
  */
    isEventRestricted(eventObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.isEventRestricted(eventObj);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Deletes the current undo/redo history.
    * @returns {boolean}
  */
    deleteUndoRedoHistory() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.deleteUndoRedoHistory();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Indicates whether it is possible to redo an action.
    * @returns {boolean}
  */
    canRedo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.canRedo();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Indicates whether it is possbile to undo an action.
    * @returns {boolean}
  */
    canUndo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.canUndo();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Redo the next event modification.
    * @param {number} step?. A step to redo to.
    * @returns {boolean}
  */
    redo(step) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.redo(step);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Undo the last event modification.
    * @param {number} step?. A step to undo to.
    * @returns {boolean}
  */
    undo(step) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.undo(step);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
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
        that.eventHandlers['beginUpdateHandler'] = (event) => { that.onBeginUpdate.emit(event); };
        that.nativeElement.addEventListener('beginUpdate', that.eventHandlers['beginUpdateHandler']);
        that.eventHandlers['endUpdateHandler'] = (event) => { that.onEndUpdate.emit(event); };
        that.nativeElement.addEventListener('endUpdate', that.eventHandlers['endUpdateHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['itemChangeHandler'] = (event) => { that.onItemChange.emit(event); };
        that.nativeElement.addEventListener('itemChange', that.eventHandlers['itemChangeHandler']);
        that.eventHandlers['itemChangingHandler'] = (event) => { that.onItemChanging.emit(event); };
        that.nativeElement.addEventListener('itemChanging', that.eventHandlers['itemChangingHandler']);
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['itemInsertHandler'] = (event) => { that.onItemInsert.emit(event); };
        that.nativeElement.addEventListener('itemInsert', that.eventHandlers['itemInsertHandler']);
        that.eventHandlers['itemRemoveHandler'] = (event) => { that.onItemRemove.emit(event); };
        that.nativeElement.addEventListener('itemRemove', that.eventHandlers['itemRemoveHandler']);
        that.eventHandlers['itemUpdateHandler'] = (event) => { that.onItemUpdate.emit(event); };
        that.nativeElement.addEventListener('itemUpdate', that.eventHandlers['itemUpdateHandler']);
        that.eventHandlers['viewChangeHandler'] = (event) => { that.onViewChange.emit(event); };
        that.nativeElement.addEventListener('viewChange', that.eventHandlers['viewChangeHandler']);
        that.eventHandlers['viewChangingHandler'] = (event) => { that.onViewChanging.emit(event); };
        that.nativeElement.addEventListener('viewChanging', that.eventHandlers['viewChangingHandler']);
        that.eventHandlers['eventShortcutKeyHandler'] = (event) => { that.onEventShortcutKey.emit(event); };
        that.nativeElement.addEventListener('eventShortcutKey', that.eventHandlers['eventShortcutKeyHandler']);
        that.eventHandlers['dateChangeHandler'] = (event) => { that.onDateChange.emit(event); };
        that.nativeElement.addEventListener('dateChange', that.eventHandlers['dateChangeHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['dropoverCellHandler'] = (event) => { that.onDropoverCell.emit(event); };
        that.nativeElement.addEventListener('dropoverCell', that.eventHandlers['dropoverCellHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['editDialogOpeningHandler'] = (event) => { that.onEditDialogOpening.emit(event); };
        that.nativeElement.addEventListener('editDialogOpening', that.eventHandlers['editDialogOpeningHandler']);
        that.eventHandlers['editDialogOpenHandler'] = (event) => { that.onEditDialogOpen.emit(event); };
        that.nativeElement.addEventListener('editDialogOpen', that.eventHandlers['editDialogOpenHandler']);
        that.eventHandlers['editDialogCloseHandler'] = (event) => { that.onEditDialogClose.emit(event); };
        that.nativeElement.addEventListener('editDialogClose', that.eventHandlers['editDialogCloseHandler']);
        that.eventHandlers['editDialogClosingHandler'] = (event) => { that.onEditDialogClosing.emit(event); };
        that.nativeElement.addEventListener('editDialogClosing', that.eventHandlers['editDialogClosingHandler']);
        that.eventHandlers['contextMenuOpeningHandler'] = (event) => { that.onContextMenuOpening.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
        that.eventHandlers['contextMenuOpenHandler'] = (event) => { that.onContextMenuOpen.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
        that.eventHandlers['contextMenuCloseHandler'] = (event) => { that.onContextMenuClose.emit(event); };
        that.nativeElement.addEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
        that.eventHandlers['contextMenuClosingHandler'] = (event) => { that.onContextMenuClosing.emit(event); };
        that.nativeElement.addEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
        that.eventHandlers['eventMenuOpeningHandler'] = (event) => { that.onEventMenuOpening.emit(event); };
        that.nativeElement.addEventListener('eventMenuOpening', that.eventHandlers['eventMenuOpeningHandler']);
        that.eventHandlers['eventMenuOpenHandler'] = (event) => { that.onEventMenuOpen.emit(event); };
        that.nativeElement.addEventListener('eventMenuOpen', that.eventHandlers['eventMenuOpenHandler']);
        that.eventHandlers['eventMenuCloseHandler'] = (event) => { that.onEventMenuClose.emit(event); };
        that.nativeElement.addEventListener('eventMenuClose', that.eventHandlers['eventMenuCloseHandler']);
        that.eventHandlers['eventMenuClosingHandler'] = (event) => { that.onEventMenuClosing.emit(event); };
        that.nativeElement.addEventListener('eventMenuClosing', that.eventHandlers['eventMenuClosingHandler']);
        that.eventHandlers['dateMenuOpenHandler'] = (event) => { that.onDateMenuOpen.emit(event); };
        that.nativeElement.addEventListener('dateMenuOpen', that.eventHandlers['dateMenuOpenHandler']);
        that.eventHandlers['dateMenuCloseHandler'] = (event) => { that.onDateMenuClose.emit(event); };
        that.nativeElement.addEventListener('dateMenuClose', that.eventHandlers['dateMenuCloseHandler']);
        that.eventHandlers['viewMenuOpenHandler'] = (event) => { that.onViewMenuOpen.emit(event); };
        that.nativeElement.addEventListener('viewMenuOpen', that.eventHandlers['viewMenuOpenHandler']);
        that.eventHandlers['viewMenuCloseHandler'] = (event) => { that.onViewMenuClose.emit(event); };
        that.nativeElement.addEventListener('viewMenuClose', that.eventHandlers['viewMenuCloseHandler']);
        that.eventHandlers['notificationOpenHandler'] = (event) => { that.onNotificationOpen.emit(event); };
        that.nativeElement.addEventListener('notificationOpen', that.eventHandlers['notificationOpenHandler']);
        that.eventHandlers['notificationCloseHandler'] = (event) => { that.onNotificationClose.emit(event); };
        that.nativeElement.addEventListener('notificationClose', that.eventHandlers['notificationCloseHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
SchedulerComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
export { SchedulerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuc2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3NjaGVkdWxlci8iLCJzb3VyY2VzIjpbInNtYXJ0LnNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxXQUFXO0lBQ2xELFlBQVksR0FBMEI7UUFDckMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUEwNUJsQzs4Q0FDc0M7UUFDNUIsa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs4Q0FDc0M7UUFDNUIsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7OztVQUlFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7O1VBSUU7UUFDUSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7O1VBSUU7UUFDUSxtQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7OztVQUtFO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7O1VBR0U7UUFDUSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7VUFHRTtRQUNRLGlCQUFZLEdBQThC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SUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFB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R1A7QUFPRDtJQURDLEtBQUssRUFBRTtrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzJEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7cURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs2REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzREQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt5REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0VBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7d0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt3REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt1REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7aURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTttREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7d0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs0REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOytEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dFQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt5REFHUDtBQU9EO0lBREMsS0FB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LE1BQU0sRUFBRTsrREFBcUU7QUFTcEU7SUFBVCxNQUFNLEVBQUU7NERBQWtFO0FBU2pFO0lBQVQsTUFBTSxFQUFFOzZEQUFtRTtBQVNsRTtJQUFULE1BQU0sRUFBRTsrREFBcUU7QUFTcEU7SUFBVCxNQUFNLEVBQUU7Z0VBQXNFO0FBU3JFO0lBQVQsTUFBTSxFQUFFOzZEQUFtRTtBQVNsRTtJQUFULE1BQU0sRUFBRTs4REFBb0U7QUFTbkU7SUFBVCxNQUFNLEVBQUU7Z0VBQXNFO0FBUXJFO0lBQVQsTUFBTSxFQUFFOzhEQUFvRTtBQVFuRTtJQUFULE1BQU0sRUFBRTsyREFBaUU7QUFRaEU7SUFBVCxNQUFNLEVBQUU7NERBQWtFO0FBUWpFO0lBQVQsTUFBTSxFQUFFOzhEQUFvRTtBQU1uRTtJQUFULE1BQU0sRUFBRTswREFBZ0U7QUFNL0Q7SUFBVCxNQUFNLEVBQUU7MkRBQWlFO0FBTWhFO0lBQVQsTUFBTSxFQUFFOzBEQUFnRTtBQU0vRDtJQUFULE1BQU0sRUFBRTsyREFBaUU7QUFNaEU7SUFBVCxNQUFNLEVBQUU7OERBQW9FO0FBTW5FO0lBQVQsTUFBTSxFQUFFOytEQUFxRTtBQTNxQ2xFLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLG9DQUFvQztLQUMzRSxDQUFDO0dBRVcsa0JBQWtCLENBb3VFOUI7U0FwdUVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgU2NoZWR1bGVyRXZlbnRSZW5kZXJNb2RlLCBTY2hlZHVsZXJSZXBlYXRGcmVxLCBTY2hlZHVsZXJOb3RpZmljYXRpb25UeXBlLCBTY2hlZHVsZXJEYXlGb3JtYXQsIEZpbHRlck1vZGUsIFNjaGVkdWxlckdyb3VwT3JpZW50YXRpb24sIFNjaGVkdWxlckhvdXJGb3JtYXQsIFNjaGVkdWxlckhlYWRlckRhdGVQb3NpdGlvbiwgU2NoZWR1bGVySGVhZGVyTmF2aWdhdGlvblN0eWxlLCBTY2hlZHVsZXJIZWFkZXJWaWV3UG9zaXRpb24sIFNjaGVkdWxlckxlZ2VuZExvY2F0aW9uLCBTY2hlZHVsZXJMZWdlbmRQb3NpdGlvbiwgSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHksIE1pbnV0ZUZvcm1hdCwgTW9udGhGb3JtYXQsIFJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5LCBTY2hlZHVsZXJSZXNvdXJjZVNvcnRPcmRlciwgU2NoZWR1bGVyU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uLCBTY2hlZHVsZXJTb3J0T3JkZXIsIFNjaGVkdWxlclRpbWVsaW5lRGF5U2NhbGUsIFNjaGVkdWxlclRpbWVab25lLCBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHksIFNjaGVkdWxlclZpZXdUeXBlLCBTY2hlZHVsZXJWaWV3cywgU2NoZWR1bGVyVmlld1NlbGVjdG9yVHlwZSwgU2NoZWR1bGVyVmlld1N0YXJ0RGF5LCBXZWVrRGF5Rm9ybWF0LCBZZWFyRm9ybWF0LCBTY2hlZHVsZXJEYXRhRXhwb3J0LCBTY2hlZHVsZXJFdmVudCwgU2NoZWR1bGVyRXZlbnRSZXBlYXQsIFNjaGVkdWxlck5vdGlmaWNhdGlvbiwgU2NoZWR1bGVyUmVzb3VyY2UsIFNjaGVkdWxlclN0YXR1c2UsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IERhdGFBZGFwdGVyIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgU2NoZWR1bGVyRXZlbnRSZW5kZXJNb2RlLCBTY2hlZHVsZXJSZXBlYXRGcmVxLCBTY2hlZHVsZXJOb3RpZmljYXRpb25UeXBlLCBTY2hlZHVsZXJEYXlGb3JtYXQsIEZpbHRlck1vZGUsIFNjaGVkdWxlckdyb3VwT3JpZW50YXRpb24sIFNjaGVkdWxlckhvdXJGb3JtYXQsIFNjaGVkdWxlckhlYWRlckRhdGVQb3NpdGlvbiwgU2NoZWR1bGVySGVhZGVyTmF2aWdhdGlvblN0eWxlLCBTY2hlZHVsZXJIZWFkZXJWaWV3UG9zaXRpb24sIFNjaGVkdWxlckxlZ2VuZExvY2F0aW9uLCBTY2hlZHVsZXJMZWdlbmRQb3NpdGlvbiwgSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHksIE1pbnV0ZUZvcm1hdCwgTW9udGhGb3JtYXQsIFJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5LCBTY2hlZHVsZXJSZXNvdXJjZVNvcnRPcmRlciwgU2NoZWR1bGVyU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uLCBTY2hlZHVsZXJTb3J0T3JkZXIsIFNjaGVkdWxlclRpbWVsaW5lRGF5U2NhbGUsIFNjaGVkdWxlclRpbWVab25lLCBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHksIFNjaGVkdWxlclZpZXdUeXBlLCBTY2hlZHVsZXJWaWV3cywgU2NoZWR1bGVyVmlld1NlbGVjdG9yVHlwZSwgU2NoZWR1bGVyVmlld1N0YXJ0RGF5LCBXZWVrRGF5Rm9ybWF0LCBZZWFyRm9ybWF0LCBTY2hlZHVsZXJEYXRhRXhwb3J0LCBTY2hlZHVsZXJFdmVudCwgU2NoZWR1bGVyRXZlbnRSZXBlYXQsIFNjaGVkdWxlck5vdGlmaWNhdGlvbiwgU2NoZWR1bGVyUmVzb3VyY2UsIFNjaGVkdWxlclN0YXR1c2UsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0ZXhwb3J0QXM6ICdzbWFydC1zY2hlZHVsZXInLFx0c2VsZWN0b3I6ICdzbWFydC1zY2hlZHVsZXIsIFtzbWFydC1zY2hlZHVsZXJdJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlckNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxTY2hlZHVsZXI+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBTY2hlZHVsZXI7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFNjaGVkdWxlcjtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8U2NoZWR1bGVyPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LXNjaGVkdWxlcicpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2Nyb2xsIHNwZWVkIHdoaWxlIGRyYWdnaW5nIGFuIGV2ZW50LiAgKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TY3JvbGxTdGVwKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1Njcm9sbFN0ZXAodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGFsbCBkYXkgY2VsbHMgaW4gRGF5IGFuZCBXZWVrIHZpZXdzIGF1dG9tYXRpY2FsbHkgY2hhbmdlIHRoZWlyIGhlaWdodCBkZXBlbmRpbmcgb24gdGhlIGV2ZW50cyBjb3VudCBpbiB0aGVzZSBjZWxscy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvSGVpZ2h0QWxsRGF5Q2VsbHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGVpZ2h0QWxsRGF5Q2VsbHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9IZWlnaHRBbGxEYXlDZWxscyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGVpZ2h0QWxsRGF5Q2VsbHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY29sb3Igc2NoZW1lIGZvciB0aGUgZXZlbnQgYmFja2dyb3VuZCBzZWxlY3RvciBpbiB0aGUgZXZlbnQgd2luZG93IGVkaXRvci4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2xvclNjaGVtZSgpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xvclNjaGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sb3JTY2hlbWUodmFsdWU6IHN0cmluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbG9yU2NoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMvRGlzYWJsZXMgdGhlIGN1cnJlbnQgdGltZSBpbmRpY2F0b3IuIEN1cnJlbnQgdGltZSBpbmRpY2F0b3Igc2hvd3MgdGhlIGN1cnJlbnQgdGltZSBpbiB0aGUgYXBwcm9wcmlhdGUgdmlldyBjZWxscy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBjdXJyZW50VGltZUluZGljYXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXJyZW50VGltZUluZGljYXRvcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZUluZGljYXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZWZyZXNoIGludGVydmFsIGluIHNlY29uZHMgZm9yIHRoZSBjdXJyZW50VGltZUluZGljYXRvci4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBjdXJyZW50VGltZUluZGljYXRvckludGVydmFsKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZUluZGljYXRvckludGVydmFsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXJyZW50VGltZUluZGljYXRvckludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWVJbmRpY2F0b3JJbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb250ZXh0IG1lbnUgaXRlbXMgdGhhdCBhcmUgdmlzaWJsZSB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgb3BlbmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udGV4dE1lbnVEYXRhU291cmNlKCk6IGFueVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51RGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGV4dE1lbnVEYXRhU291cmNlKHZhbHVlOiBhbnlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudURhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjbGlwYm9hcmQgc2hvcnRjdXRzIGZvciBjb3B5L3Bhc3RlL2N1dCBhY3Rpb24gb2YgZXZlbnRzIGFyZSB2aXNpYmxlIGluIHRoZSBTY2hlZHVsZXIgY29udGV4dCBtZW51IG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbnRleHRNZW51Q2xpcGJvYXJkQWN0aW9ucygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51Q2xpcGJvYXJkQWN0aW9ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGV4dE1lbnVDbGlwYm9hcmRBY3Rpb25zKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51Q2xpcGJvYXJkQWN0aW9ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSBldmVudCBlbGVtZW50cy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGV2ZW50cyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBldmVudCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogZXZlbnRDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgZXZlbnQsZXZlbnRPYmogLSB0aGUgZXZlbnQgb2JqZWN0Li4gV2hlbiB1c2luZyBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGl0J3MgcG9zc2libGUgdG8gYWRkIHByb3BlcnR5IGJpbmRpbmdzIGluc2lkZSB0aGUgdGVtcGxhdGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byB0aGUgY29ycmVzcG9uZGluZyBvYmplY3QgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGV2ZW50VGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50VGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGV2ZW50VGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGV2ZW50IGNvbGxlY3RvciBlbGVtZW50cy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGV2ZW50cyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBldmVudCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogZXZlbnRDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgZXZlbnQsZXZlbnRPYmogLSB0aGUgZXZlbnQgb2JqZWN0Li4gV2hlbiB1c2luZyBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGl0J3MgcG9zc2libGUgdG8gYWRkIHByb3BlcnR5IGJpbmRpbmdzIGluc2lkZSB0aGUgdGVtcGxhdGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byB0aGUgY29ycmVzcG9uZGluZyBvYmplY3QgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGV2ZW50Q29sbGVjdG9yVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50Q29sbGVjdG9yVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGV2ZW50Q29sbGVjdG9yVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudENvbGxlY3RvclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIGhvdyB0aGUgZXZlbnRzIGluc2lkZSB0aGUgU2NoZWR1bGVyIGFyZSByZW5kZXJlZC5jbGFzc2ljIC0gdGhlIGV2ZW50cyBhcmUgYXJyYW5nZWQgbmV4dCB0byBlYWNoIG90aGVyIGFuZCB0cnkgdG8gZml0IGluc2lkZSB0aGUgY2VsbHMubW9kZXJuIC0gdGhlIGV2ZW50cyBvYmV5IHRoZSBDU1MgcHJvcGVydHkgdGhhdCBkZXRlcm1pbmVzIHRoZWlyIHNpemUgYW5kIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBpbnNpZGUgdGhlIGNlbGwgZm9yIGFsbCBldmVudHMgdG8gYXBwZWFyLCBhbiBldmVudCBjb2xsZWN0b3IgaXMgY3JlYXRlZCB0byBob2xkIHRoZSByZXN0IG9mIHRoZSBldmVudHMuIE9uIG1vYmlsZSBwaG9uZXMgb25seSBjb2xsZWN0b3JzIGFyZSBjcmVhdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRSZW5kZXJNb2RlKCk6IFNjaGVkdWxlckV2ZW50UmVuZGVyTW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFJlbmRlck1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGV2ZW50UmVuZGVyTW9kZSh2YWx1ZTogU2NoZWR1bGVyRXZlbnRSZW5kZXJNb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50UmVuZGVyTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSBldmVudCBtZW51IGl0ZW1zICh0b29sdGlwKS4gV2hlbiBjbGlja2VkIG9uIGFuIGV2ZW50IGVsZW1lbnQgYW4gZXZlbnQgbWVudSB3aXRoIGRldGFpbHMgb3BlbnMuIEl0IGNhbiBiZSBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBldmVudHMgb3IgaXQncyBpZCBhcyBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggZXZlbnQgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGV2ZW50Q29udGVudCAtIHRoZSBjb250ZW50IGhvbGRlciBmb3IgdGhlIGV2ZW50LGV2ZW50T2JqIC0gdGhlIGV2ZW50IG9iamVjdC4uIFdoZW4gdXNpbmcgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCBpdCdzIHBvc3NpYmxlIHRvIGFkZCBwcm9wZXJ0eSBiaW5kaW5ncyBpbnNpZGUgdGhlIHRlbXBsYXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBldmVudFRvb2x0aXBUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRUb29sdGlwVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGV2ZW50VG9vbHRpcFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRUb29sdGlwVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiB0aGUgdGltZWxpbmUgY2VsbHMuIEl0IGNhbiBiZSBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBjZWxscyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBjZWxsIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBjZWxsQ29udGVudCAtIHRoZSBjb250ZW50IGhvbGRlciBmb3IgdGhlIGNlbGwsY2VsbERhdGUgLSB0aGUgY2VsbCBkYXRlLi4gV2hlbiB1c2luZyBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGl0J3MgcG9zc2libGUgdG8gYWRkIHByb3BlcnR5IGJpbmRpbmdzIGluc2lkZSB0aGUgdGVtcGxhdGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byB0aGUgdmFsdWUgb2YgdGhlIGNlbGwuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjZWxsVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNlbGxUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2VsbFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2VsbFRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGN1cnJlbnRseSB2aXNpYmxlIGRhdGUgZm9yIHRoZSBTY2hlZHVsZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRlQ3VycmVudCgpOiBzdHJpbmcgfCBEYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVDdXJyZW50IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRlQ3VycmVudCh2YWx1ZTogc3RyaW5nIHwgRGF0ZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlQ3VycmVudCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBTY2hlZHVsZXJzJ3MgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogU2NoZWR1bGVyRGF0YUV4cG9ydCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhRXhwb3J0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhRXhwb3J0KHZhbHVlOiBTY2hlZHVsZXJEYXRhRXhwb3J0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZXZlbnRzIHRoYXQgd2lsbCBiZSBsb2FkZWQgaW5zaWRlIHRoZSBUaW1lbGluZS4gRWFjaCBldmVudCByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2UoKTogU2NoZWR1bGVyRXZlbnRbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBTY2hlZHVsZXJFdmVudFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBjYWxsYmFjayB0aGF0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgdGV4dCBpbnNpZGUgdGhlIGRhdGUgc2VsZWN0b3IgbG9jYXRlZCBpbiB0aGUgaGVhZGVyLiBUaGUgY2FsbGJhY2sgaGFzIG9uZSBwYXJhbWV0ZXIgLSB0aGUgY3VycmVudCBkYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0ZVNlbGVjdG9yRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVTZWxlY3RvckZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRlU2VsZWN0b3JGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVTZWxlY3RvckZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRheSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluIHRoZSB0aW1lbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRheUZvcm1hdCgpOiBTY2hlZHVsZXJEYXlGb3JtYXQgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF5Rm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXlGb3JtYXQodmFsdWU6IFNjaGVkdWxlckRheUZvcm1hdCB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXlGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGF1dG8gc2Nyb2xsaW5nIG9mIHRoZSB0aW1lbGluZSB3aGlsZSBkcmFnZ2luZy9yZXNpemluZyBhbiBldmVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVBdXRvU2Nyb2xsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUF1dG9TY3JvbGwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVBdXRvU2Nyb2xsKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVBdXRvU2Nyb2xsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGRyYWdnaW5nIG9mIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVEcmFnKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURyYWcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVEcmFnKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEcmFnID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGRyb3BwaW5nIG9mIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVEcm9wKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURyb3AgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVEcm9wKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEcm9wID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHJlc2l6aW5nIG9mIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVSZXNpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlUmVzaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlUmVzaXplKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVSZXNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIGNlbGwgc2VsZWN0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVNlbGVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWxlY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVTZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgd2luZG93IGVkaXRvciBmb3IgdGhlIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVXaW5kb3dFZGl0b3IoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlV2luZG93RWRpdG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlV2luZG93RWRpdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVXaW5kb3dFZGl0b3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIGNvbnRleHQgbWVudSBvZiB0aGUgZXZlbnRzIGFuZCBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVDb250ZXh0TWVudSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVDb250ZXh0TWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZUNvbnRleHRNZW51KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVDb250ZXh0TWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgZXZlbnQgbWVudSB0aGF0IGFwcGVhcnMgd2hlbiBhbiBldmVudC9jb2xsZWN0b3IgaGFzIGJlZW4gY2xpY2tlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVFdmVudE1lbnUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRXZlbnRNZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlRXZlbnRNZW51KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVFdmVudE1lbnUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIHZpZXcgbWVudSB0aGF0IGFsbG93cyB0byBzZWxlY3QgdGhlIGN1cnJlbnQgU2NoZWR1bGVyIHZpZXcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlVmlld01lbnUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVmlld01lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVWaWV3TWVudSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVmlld01lbnUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIGRhdGUgbWVudSB0aGF0IGFsbG93cyB0byBzZWxlY3QgdGhlIGN1cnJlbnQgU2NoZWR1bGVyIGRhdGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlRGF0ZU1lbnUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRGF0ZU1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVEYXRlTWVudSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRGF0ZU1lbnUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBjYWxsYmFjayB0aGF0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgZHJhZyBmZWVkYmFjayB0aGF0IGFwcGVhcnMgd2hlbiBhbiBldmVudCBpcyBkcmFnZ2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ0ZlZWRiYWNrRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdGZWVkYmFja0Zvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmFnRmVlZGJhY2tGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdGZWVkYmFja0Zvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG9mZnNldCBmb3IgdGhlIGRyYWcgZmVlZGJhY2sgZnJvbSB0aGUgcG9pbnRlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyYWdPZmZzZXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYWdPZmZzZXQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnT2Zmc2V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZpbHRlcmluZyBjb25kaXRpb24gZm9yIHRoZSBldmVudHMuVGhlIGZpbHRlciBwcm9wZXJ0eSB0YWtlcyBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgZnVuY3Rpb24uIEVhY2ggb2JqZWN0IHJlcHJlc2VudHMgYSBzaW5nbGUgZmlsdGVyaW5nIGNvbmRpdGlvbiB3aXRoIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczogbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBTY2hlZHVsZXIgZXZlbnQgcHJvcGVydHkgdGhhdCB3aWxsIGJlIGZpbHRlcmVkIGJ5LnZhbHVlIC0gdGhlIGZpbHRlcmluZyBjb25kaXRpb24gdmFsdWUuIFRoZSB2YWx1ZSB3aWxsIGJlIHVzZWQgdG8gY29tcGFyZSB0aGUgZXZlbnRzIGJhc2VkIG9uIHRoZSBmaWx0ZXJNb2RlLCBmb3IgZXhhbXBsZTogW3sgbmFtZTogJ3ByaWNlJywgdmFsdWU6IDI1IH1dLiBUaGUgdmFsdWUgY2FuIGFsc28gYmUgYSBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgYSBzaW5nbGUgYXJndWVtbnQgLSB0aGUgdmFsdWUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZmlsdGVyZWQgYXR0cmlidXRlLiBUaGUgZnVuY3Rpb24gYWxsb3dzIHRvIGFwcGx5IGN1c3RvbSBjb25kaXRpb24gdGhhdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdCBmaWx0ZXIgbW9kZXMuIEl0IHNob3VsZCByZXR1cm4gdHJ1ZSAoIGlmIHRoZSBldm5ldCBwYXNzZXMgdGhlIGZpbHRlcmluZyBjb25kaXRpb24gKSBvciBmYWxzZSAoIGlmIHRoZSBldmVudCBkb2VzIG5vdCBtZWV0IHRoZSBmaWx0ZXJpbmcgY29uZGl0aW9uICkuIEhlcmUncyBhbiBleGFtcGxlOiBbeyBuYW1lOiAncm9vbUlkJywgdmFsdWU6IChpZCkgPT4gWycyJywgJzMnXS5pbmRleE9mKGlkICsgJycpID4gLTEgfV0uIEluIHRoZSBleGFtcGxlIHRoZSBldmVudHMgdGhhdCBkbyBub3QgaGF2ZSBhICdyb29tSWQnIHByb3BlcnR5IHRoYXQgaXMgZXF1YWwgdG8gJzInIG9yICczJyB3aWxsIGJlIGZpbHRlcmVkIG91dC4uIElmIGEgZnVuY3Rpb24gaXMgc2V0IHRvIHRoZSBmaWx0ZXIgcHJvcGVydHkgaW5zdGVhZCwgaXQgYWxsb3dzIHRvIGNvbXBsZXRlbHkgY3VzdG9taXplIHRoZSBmaWx0ZXJpbmcgbG9naWMuIFRoZSBmdW5jdGlvbiBwYXNzZXMgYSBzaW5nbGUgYXJndW1lbnQgLSBlYWNoIFNjaGVkdWxlciBldmVudCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkLiBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiB0cnVlICggaWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQgKSBvciBmYWxzZSAoIGlmIG5vdCApLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgU2NoZWR1bGVyJ3MgZmlsdGVyaW5nIGlzIGVuYWJsZWQgb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyYWJsZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyYWJsZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmFibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZmlsdGVyIG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJNb2RlKCk6IEZpbHRlck1vZGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyTW9kZSh2YWx1ZTogRmlsdGVyTW9kZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyAgYW4gYXJyYXkgb2YgYWxsIFNjaGVkdWxlciBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBldmVudHMoKTogU2NoZWR1bGVyRXZlbnRbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGV2ZW50cyh2YWx1ZTogU2NoZWR1bGVyRXZlbnRbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWsgZm9yIHRoZSBTY2hlZHVsZXIuIEJ5IGRlZmF1bHQgaXQncyBTdW5kYXkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlyc3REYXlPZldlZWsgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpcnN0RGF5T2ZXZWVrKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlyc3REYXlPZldlZWsgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgZm9vdGVyIG9mIHRoZSBTY2hlZHVsZXIuIEl0IGNhbiBiZSBhbiBIVE1MVGVtcGxhdGVFbGVtZW50LCBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGZvb3RlckNvbnRhaW5lciAtIHRoZSBmb290ZXIgY29udGFpbmVyLi4gKi9cblx0QElucHV0KClcblx0Z2V0IGZvb3RlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb290ZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9vdGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb290ZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGV2ZW50cyB3aWxsIGJlIGdyb3VwZWQgYnkgZGF0ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwQnlEYXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBCeURhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3VwQnlEYXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwQnlEYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGdyb3VwaW5nIG9yaWVudGF0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBPcmllbnRhdGlvbigpOiBTY2hlZHVsZXJHcm91cE9yaWVudGF0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwT3JpZW50YXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3VwT3JpZW50YXRpb24odmFsdWU6IFNjaGVkdWxlckdyb3VwT3JpZW50YXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBPcmllbnRhdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSBncm91cCBjZWxscyB0aGF0IGFyZSB2aXNpYmxlIGluc2lkZSB0aGUgaGVhZGVyLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgY2VsbHMgb3IgaXQncyBpZCBhcyBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggZ3JvdXAgY2VsbCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogY2VsbENvbnRlbnQgLSB0aGUgY29udGVudCBob2xkZXIgZm9yIHRoZSBncm91cCBjZWxsLmNlbGxPYmogLSB0aGUgZ3JvdXAgY2VsbCBvYmplY3QuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmVzb3VyY2VzIHRoYXQgdGhlIGV2ZW50cyBhcmUgZ3JvdXBlZCBieS4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cHModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZW5kIGhvdXIgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBpbiAnZGF5JyBhbmQgJ3dlZWsnIHZpZXdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG91ckVuZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckVuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG91ckVuZCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhvdXJFbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc3RhcnQgaG91ciB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluICdkYXknIGFuZCAnd2Vlaycgdmlld3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyU3RhcnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhvdXJTdGFydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG91clN0YXJ0KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91clN0YXJ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdHRpbmcgb2YgaG91cnMgaW5zaWRlIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG91ckZvcm1hdCgpOiBTY2hlZHVsZXJIb3VyRm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhvdXJGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhvdXJGb3JtYXQodmFsdWU6IFNjaGVkdWxlckhvdXJGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBoZWFkZXIgb2YgdGhlIFNjaGVkdWxlci4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQsIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogaGVhZGVyQ29udGVudCAtIHRoZSBoZWFkZXIgY29udGFpbmVyLi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIERhdGUgc2VsZWN0b3IgaW5zaWRlIHRoZSBIZWFkZXIgb2YgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkZXJEYXRlUG9zaXRpb24oKTogU2NoZWR1bGVySGVhZGVyRGF0ZVBvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlckRhdGVQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyRGF0ZVBvc2l0aW9uKHZhbHVlOiBTY2hlZHVsZXJIZWFkZXJEYXRlUG9zaXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyRGF0ZVBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBzdHlsaW5nIG9mIHRoZSBIZWFkZXIgbmF2aWdhdGlvbiBjb250cm9scy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlck5hdmlnYXRpb25TdHlsZSgpOiBTY2hlZHVsZXJIZWFkZXJOYXZpZ2F0aW9uU3R5bGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyTmF2aWdhdGlvblN0eWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJOYXZpZ2F0aW9uU3R5bGUodmFsdWU6IFNjaGVkdWxlckhlYWRlck5hdmlnYXRpb25TdHlsZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJOYXZpZ2F0aW9uU3R5bGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB2aWV3IHNlbGVjdG9yIGNvbnRyb2wgaW5zaWRlIHRoZSBIZWFkZXIgb2YgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkZXJWaWV3UG9zaXRpb24oKTogU2NoZWR1bGVySGVhZGVyVmlld1Bvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclZpZXdQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyVmlld1Bvc2l0aW9uKHZhbHVlOiBTY2hlZHVsZXJIZWFkZXJWaWV3UG9zaXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyVmlld1Bvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgJ0FsbCBEYXknIGNvbnRhaW5lciB3aXRoIHRoZSBhbGwgZGF5IGV2ZW50cyBpcyBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZUFsbERheSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVBbGxEYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVBbGxEYXkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUFsbERheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRheXMgc2V0IGJ5ICdub253b3JraW5nRGF5cycgcHJvcGVydHkgYXJlIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlTm9ud29ya2luZ1dlZWtkYXlzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZU5vbndvcmtpbmdXZWVrZGF5cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZU5vbndvcmtpbmdXZWVrZGF5cyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTm9ud29ya2luZ1dlZWtkYXlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBvdGhlciBtb250aCBkYXlzIGFyZSB2aXNpYmxlIHdoZW4gdmlldyBpcyBzZXQgdG8gbW9udGguIFdoZW4gZW5hYmxlZCwgZXZlbnRzIHRoYXQgc3RhcnQgb24gb3RoZXIgbW9udGggZGF5cyBhcmUgbm90IGRpc3BsYXllZCBhbmQgdGhlIGNlbGxzIHRoYXQgcmVwcmVzZW50IHN1Y2ggZGF5cyBkbyBub3QgYWxsb3cgdGhlIGNyZWF0aW9uIG9mIG5ldyBldmVudHMgb24gdGhlbS4gQWxzbyBkcmFnZ2luZyBhbmQgZHJvcGluZyBhbiBldmVudCBvbiBvdGhlciBtb250aCBkYXlzIGlzIG5vdCBhbGxvd2VkLiBSZXN6aW5nIGlzIGFsc28gYWZmZWN0ZWQuIEV2ZW50cyBjYW4gZW5kIG9uIG90aGVyIG1vbnRoIGRheXMsIGJ1dCBjYW5ub3Qgc3RhcnQgb24gb25lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZU90aGVyTW9udGhEYXlzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZU90aGVyTW9udGhEYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlT3RoZXJNb250aERheXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZU90aGVyTW9udGhEYXlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgJ1RvZGF5JyBidXR0b24gaXMgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVUb2RheUJ1dHRvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb2RheUJ1dHRvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVRvZGF5QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb2RheUJ1dHRvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoZWNrYWJsZSBpdGVtcyBpbiB0aGUgdmlldyBzZWxlY3Rpb24gbWVudSBhcmUgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVWaWV3TWVudUNoZWNrYWJsZUl0ZW1zKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVWaWV3TWVudUNoZWNrYWJsZUl0ZW1zKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVWaWV3TWVudUNoZWNrYWJsZUl0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgd2Vla2VuZCBkYXlzIGFyZSBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVdlZWtlbmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlV2Vla2VuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVdlZWtlbmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVdlZWtlbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbG9jYXRpb24gb2YgdGhlIGxlZ2VuZCBpbnNpZGUgdGhlIFNjaGVkdWxlci4gQnkgZGVmYXVsdCB0aGUgbG9jYXRpb24gaXMgaW5zaWRlIHRoZSBmb290ZXIgYnV0IGl0IGNhbiBhbHNvIHJlc2lkZSBpbiB0aGUgaGVhZGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGVnZW5kTG9jYXRpb24oKTogU2NoZWR1bGVyTGVnZW5kTG9jYXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGVnZW5kTG9jYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxlZ2VuZExvY2F0aW9uKHZhbHVlOiBTY2hlZHVsZXJMZWdlbmRMb2NhdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sZWdlbmRMb2NhdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGVnZW5kLiBCeSBkZWZhdWx0IGl0J3MgcG9zaXRpb25lZCB0byB0aGUgbmVhciBzaWRlIGJ1dCBzZXR0aW5nIGl0IHRvICdmYXInIHdpbGwgY2hhbmdlIHRoYXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsZWdlbmRQb3NpdGlvbigpOiBTY2hlZHVsZXJMZWdlbmRQb3NpdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sZWdlbmRQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGVnZW5kUG9zaXRpb24odmFsdWU6IFNjaGVkdWxlckxlZ2VuZFBvc2l0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZFBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1vdXNlIHdoZWVsIHN0ZXAuIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gYSBwb3NpdGl2ZSBudW1iZXIsIHRoZSBzY3JvbGwgc3RlcCB3aXRoIG1vdXNlIHdoZWVsIG9yIHRyYWNrcGFkIHdpbGwgZGVwZW5kIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IG1vdXNlV2hlZWxTdGVwKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb3VzZVdoZWVsU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbW91c2VXaGVlbFN0ZXAodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb3VzZVdoZWVsU3RlcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdlYXRoZXIgb3Igbm90IGhvcml6b250YWwgc2Nyb2xsYmFyIGlzIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIFNjaGVkdWxlci4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGV0bWluZXMgdGhlIG1heGltdW0gdmlldyBkYXRlIGZvciB0aGUgU2NoZWR1bGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4KCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXgodmFsdWU6IHN0cmluZyB8IERhdGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGV0bWluZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGV2ZW50cyBwZXIgU2NoZWR1bGVyIGNlbGwuIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBudWxsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIG51bWJlciBvZiBldmVudHMgcGVyIGNlbGwgaXMgYXV0b21hdGljYWxseSBkZXRlcm1pbmVkIGJ5IHRoZSBzaXplIG9mIHRoZSBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXhFdmVudHNQZXJDZWxsKCk6IG51bWJlciB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4RXZlbnRzUGVyQ2VsbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWF4RXZlbnRzUGVyQ2VsbCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXhFdmVudHNQZXJDZWxsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGV0bWluZXMgdGhlIG1pbmltdW0gdmlldyBkYXRlIGZvciB0aGUgU2NoZWR1bGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWluKCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW4odmFsdWU6IHN0cmluZyB8IERhdGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIGVsZW1lbnQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWludXRlIGZvcm1hdHRpbmcgaW5zaWRlIHRoZSBTY2hlZHVsZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtaW51dGVGb3JtYXQoKTogTWludXRlRm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbnV0ZUZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWludXRlRm9ybWF0KHZhbHVlOiBNaW51dGVGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWludXRlRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1vbnRoIG5hbWUgZm9ybWF0dGluZyBpbnNpZGUgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG1vbnRoRm9ybWF0KCk6IE1vbnRoRm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vbnRoRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtb250aEZvcm1hdCh2YWx1ZTogTW9udGhGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBkYXlzIG9mIHRoZSB3ZWVrIGZyb20gMCB0byA2LCB3aGVyZSAwIGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgYW5kIDYgaXMgdGhlIGxhc3QgZGF5LiBOb253b3JraW5nIGRheXMgd2lsbCBiZSBjb2xvcmVkIGRpZmZlcmVudGx5IGluc2lkZSB0aGUgVGltZWxpbmUuIFRoZSBjb2xvciBpcyBkZXRlcm1pbmVkIGJ5IGEgQ1NTIHZhcmlhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbm9ud29ya2luZ0RheXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdEYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub253b3JraW5nRGF5cyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdEYXlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG5vbndvcmtpbmcgaG91cnMgb2YgdGhlIGRheS4gSG91cnMgYXJlIHJlcHJlc2VudGVkIGFzIG51bWJlcnMgaW5zaWRlIGFuIGFycmF5LCBob3dldmVyIHJhbmdlcyBvZiBob3VycyBjYW4gYmUgZGVmaW5lZCBhcyBhbiBhcnJheSB3aXRoIHN0YXJ0aW5nIGFuZCBlbmRpbmcgaG91ciBzZXBhcmF0ZWQgYnkgYSBjb21tYS4gSW4gdGhlIHRpbWxpbmUgdGhlIGNlbGxzIHRoYXQgcmVwcmVzZW50IG5vbndvcmtpbmcgZGF5cyBhcmUgY29sb3JlZCBkaWZmZXJlbnRseSBmcm9tIHRoZSByZXN0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbm9ud29ya2luZ0hvdXJzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ub253b3JraW5nSG91cnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5vbndvcmtpbmdIb3Vycyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdIb3VycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBpbnRlcnZhbCAoaW4gc2Vjb25kcykgYXQgd2hpY2ggdGhlIGVsZW1lbnQgd2lsbCBjaGVjayBmb3Igbm90aWZpY2F0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IG5vdGlmaWNhdGlvbkludGVydmFsKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ub3RpZmljYXRpb25JbnRlcnZhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm90aWZpY2F0aW9uSW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ub3RpZmljYXRpb25JbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSByZXNpemUgaGFuZGxlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5KCk6IFJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNpemVIYW5kbGVzVmlzaWJpbGl0eSh2YWx1ZTogUmVzaXplSGFuZGxlc1Zpc2liaWxpdHkgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplSGFuZGxlc1Zpc2liaWxpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmF0ZSBhdCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIHJlZnJlc2ggaXQncyBjb250ZW50IG9uIGVsZW1lbnQgcmVzaXplLiBCeSBkZWZhdWx0IGl0J3MgcmVmcmVzaCBpbW1lZGlhdGVseS4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGZvciBlbGVtZW50IHJlc2l6ZSB0aHJvdHRsaW5nICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNpemVJbnRlcnZhbCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplSW50ZXJ2YWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZUludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplSW50ZXJ2YWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgb2YgcmVzb3VyY2VzIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNvdXJjZXMoKTogU2NoZWR1bGVyUmVzb3VyY2VbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc291cmNlcyh2YWx1ZTogU2NoZWR1bGVyUmVzb3VyY2VbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNvdXJjZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBhbiBhcnJheSBvZiBkYXRlcyB0aGF0IGFyZSBub3QgYWxsb3dlZCB0byBoYXZlIGV2ZW50cyBvbi4gRXZlbnRzIHRoYXQgb3ZlcmxhcCByZXN0cmljdGVkIERhdGVzIG9yIHN0YXJ0L2VuZCBvbiB0aGVtIHdpbGwgbm90IGJlIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc3RyaWN0ZWREYXRlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzdHJpY3RlZERhdGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXN0cmljdGVkRGF0ZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkRGF0ZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBhbiBhcnJheSBvZiBob3VycyB0aGF0IGFyZSBub3QgYWxsb3dlZCB0byBoYXZlIGV2ZW50cyBvbi4gRXZlbnRzIHRoYXQgb3ZlcmxhcCByZXN0cmljdGVkIEhvdXJzIG9yIHN0YXJ0L2VuZCBvbiB0aGVtIHdpbGwgbm90IGJlIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc3RyaWN0ZWRIb3VycygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzdHJpY3RlZEhvdXJzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXN0cmljdGVkSG91cnModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkSG91cnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGF0ZSBuYXZpZ2F0aW9uIG5hdmlnYXRpb24gYnV0dG9ucyBpbnNpZGUgdGhlIGhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNjcm9sbEJ1dHRvbnNQb3NpdGlvbigpOiBTY2hlZHVsZXJTY3JvbGxCdXR0b25zUG9zaXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsQnV0dG9uc1Bvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzY3JvbGxCdXR0b25zUG9zaXRpb24odmFsdWU6IFNjaGVkdWxlclNjcm9sbEJ1dHRvbnNQb3NpdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxCdXR0b25zUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy9EaXNhYmxlcyB0aGUgY3VycmVudCB0aW1lIHNoYWRlci4gSWYgZW5hYmxlZCBhbGwgY2VsbHMgdGhhdCByZXByZXNlbnQgcGFzdCB0aW1lIHdpbGwgYmUgc2hhZGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hhZGVVbnRpbEN1cnJlbnRUaW1lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hhZGVVbnRpbEN1cnJlbnRUaW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaGFkZVVudGlsQ3VycmVudFRpbWUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hhZGVVbnRpbEN1cnJlbnRUaW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgcmVzb3VyY2UgbGVnZW5kIGlzIHZpc2libGUgb3Igbm90LiBUaGUgTGVnZW5kIHNob3dzIHRoZSByZXNvdXJjZXMgYW5kIHRoZWlyIGl0ZW1zIGluIHRoZSBmb290ZXIgc2VjdGlvbiBvZiB0aGUgU2NoZWR1bGVyLiBJZiBmaWx0ZXJhYmxlIGlzIGVuYWJsZWQgaXQgaXMgcG9zc2libGUgdG8gZmlsdGVyIGJ5IHJlc291cmNlIGl0ZW1zIGJ5IGNsaWNraW5nIG9uIHRoZSBjb3JyZXNwb25kaW5nIHJlc291cmNlIGl0ZW0gZnJvbSB0aGUgbGVnZW5kLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd0xlZ2VuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMZWdlbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dMZWdlbmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0xlZ2VuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBuYW1lIG9mIHRoZSByZXNvdXJjZSBkYXRhIGl0ZW0gcHJvcGVydHkgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHNvcnRpbmcgdGhlIHJlc291cmNlIGRhdGEgZGVmaW5lZCBhcyB0aGUgcmVzb3VyY2UuZGF0YVNvdXJjZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnRCeSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEJ5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0QnkodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0QnkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGRlZmluZSBhIGN1c3RvbSBzb3J0aW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNvcnQgdGhlIHJlc291cmNlIGRhdGEuIFRoZSBzb3J0RnVuY3Rpb24gaXMgdXNlZCB3aGVuIHNvcnRPcmRlciBpcyBzZXQgdG8gY3VzdG9tLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzb3J0aW5nIG9yZGVyIG9mIHRoZSByZXNvdXJjZSBkYXRhIGl0ZW1zLiBXaGVuIHNldCB0byBjdXN0b20sIGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb24gaGFzIHRvIGJlIGRlZmluZWQgZm9yIHRoZSBzb3J0RnVuY3Rpb24gcHJvcGVydHkuIFRoZSBhc2Mgc3RhbmRzIGZvciAnYXNjZW5kaW5nJyB3aGlsZSBkZXNjIG1lYW5zICdkZXNjZW5kaW5nJyBzb3J0aW5nIG9yZGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydE9yZGVyKCk6IFNjaGVkdWxlclNvcnRPcmRlciB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0T3JkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRPcmRlcih2YWx1ZTogU2NoZWR1bGVyU29ydE9yZGVyIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRPcmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZXBlYXRpbmcgZGVsYXkgb2YgdGhlIHJlcGVhdCBidXR0b25zIGluc2lkZSB0aGUgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiBTdWNoIGJ1dHRvbnMgYXJlIHRoZSBEYXRlIG5hdmlnYXRpb24gYnV0dG9ucyBhbmQgdGhlIHZpZXcgc2Nyb2xsIGJ1dHRvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcGluQnV0dG9uc0RlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0RlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzcGluQnV0dG9uc0RlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BpbkJ1dHRvbnNEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBpbml0aWFsIGRlbGF5IG9mIHRoZSByZXBlYXQgYnV0dG9ucyBpbnNpZGUgdGhlIGhlYWRlciBvZiB0aGUgZWxlbWVudC4gU3VjaCBidXR0b25zIGFyZSB0aGUgRGF0ZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSB2aWV3IHNjcm9sbCBidXR0b25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3BpbkJ1dHRvbnNJbml0aWFsRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwaW5CdXR0b25zSW5pdGlhbERlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzcGluQnV0dG9uc0luaXRpYWxEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwaW5CdXR0b25zSW5pdGlhbERlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlZmluZXMgdGhlIHN0YXR1c2VzIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yIHNlbGVjdGlvbiB0aG91cmdoIHRoZSB3aW5kb3cgZWRpdG9yIGZvciB0aGUgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3RhdHVzZXMoKTogU2NoZWR1bGVyU3RhdHVzZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0YXR1c2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzdGF0dXNlcyh2YWx1ZTogU2NoZWR1bGVyU3RhdHVzZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0YXR1c2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZWxlbWVudCdzIHZpc3VhbCB0aGVtZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmb3JtYXQgZnVuY3Rpb24gZm9yIHRoZSBIZWFkZXIgb2YgdGhlIFRpbWVsaW5lLiBBbGxvd3MgdG8gbW9kaWZ5IHRoZSBkYXRlIGxhYmVscyBpbiB0aGUgaGVhZGVyIGNlbGxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZWxpbmVIZWFkZXJGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGF0ZSBzY2FsZSBmb3IgdGhlIHRpbWVsaW5lIGNlbGxzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZWxpbmVEYXlTY2FsZSgpOiBTY2hlZHVsZXJUaW1lbGluZURheVNjYWxlIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVsaW5lRGF5U2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVsaW5lRGF5U2NhbGUodmFsdWU6IFNjaGVkdWxlclRpbWVsaW5lRGF5U2NhbGUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZWxpbmVEYXlTY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzL0Rpc2FibGVzIHRoZSB0aWNrIG1hcmtzIG5leHQgdG8gdGhlIHRpbWUgY2VsbHMgaW4gdGhlIHZlcnRpY2FsIGhlYWRlciBvZiB0aGUgZWxlbWVudC4gVGltZSBoZWFkZXIgYXBwZWFycyBpbiAnZGF5JyBhbmQgJ3dlZWsnIHZpZXdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZVJ1bGVyVGlja3MoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lUnVsZXJUaWNrcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZVJ1bGVyVGlja3ModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVJ1bGVyVGlja3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGltZVpvbmUgZm9yIHRoZSBlbGVtZW50LiBCeSBkZWZhdWx0IGlmIHRoZSBsb2NhbCB0aW1lIHpvbmUgaXMgdXNlZCBpZiB0aGUgcHJvcGVydHkgaXMgbm90IHNldC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpbWVab25lKCk6IFNjaGVkdWxlclRpbWVab25lIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVab25lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lWm9uZSh2YWx1ZTogU2NoZWR1bGVyVGltZVpvbmUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVpvbmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGRpc3BsYXkgYWRkaXRpb25hbCB0aW1lWm9uZXMgYXQgb25jZSBhbG9uZyB3aXRoIHRoZSBkZWZhdWx0IHRoYXQgaXMgc2V0IHZpYSB0aGUgdGltZVpvbmUgcHJvcGVydHkuIEFjY2VwdHMgYW4gYXJyYXkgdmFsdWVzIHRoYXQgcmVwcmVzZW50IHRoZSBpZHMgb2YgdmFsaWQgdGltZSB6b25lcy4gVGhlIHBvc3NiaWxlIHRpbWUgem9uZXMgY2FuIGJlIHZpZXdlZCBpbiB0aGUgdGltZVpvbmUgcHJvcGVydHkgZGVzY3JpcHRpb24uIEJ5IGRlZmF1bHQgdGhlIGxvY2FsIHRpbWUgem9uZSBpcyBkaXNwbGF5ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lWm9uZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVab25lcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZVpvbmVzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVpvbmVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRlbGF5ICggaW4gbWlsaXNlY29uZHMpIGJlZm9yZSB0aGUgdG9vbHRpcC9tZW51IGFwcGVhcnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbHRpcERlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcERlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG9mZnNldCBvdCB0aGUgdG9vbHRpcC9tZW51LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcE9mZnNldCgpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwT2Zmc2V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sdGlwT2Zmc2V0KHZhbHVlOiBudW1iZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwT2Zmc2V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2VhdGhlciBvciBub3QgdmVydGljYWwgc2Nyb2xsYmFyIGlzIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KCk6IFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSh2YWx1ZTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjdXJyZW50IHZpZXcuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIHZpZXcgdmFsdWVzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIHZpZXdzIHByb3BlcnR5LiBDdXN0b20gdmlld3Mgc2hvdWxkIGNvbnRhaW4gYSB2YWxpZCB2YWx1ZSB0aGF0IHdpbGwgYmUgc2V0IGFzIHRoZSBjdXJyZW50IHZpZXcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlldyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgU2NoZWR1bGVyIHZpZXdUeXBlLiBDdXN0b20gdmlld3MgbXVzdCBjb250YWluIGEgdmFsaWQgdHlwZSBwcm9wZXJ0eSB0aGF0IGNvcnJlc3BvbmRzIHRvIG9uZSBvZiB0aGUgdmlldyB0eXBlcy4gVGhpcyBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIHNldC4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXdUeXBlKCk6IFNjaGVkdWxlclZpZXdUeXBlIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdUeXBlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3VHlwZSh2YWx1ZTogU2NoZWR1bGVyVmlld1R5cGUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld1R5cGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdmlld2luZyBkYXRlIHJhbmdlIG9mIHRoZSB0aW1lbGluZS4gVGhlIHByb3BlcnR5IHNob3VsZCBiZSBzZXQgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciB2aWV3IG9iamVjdHMuIFdoZW4geW91IHNldCBpdCB0byBhIHN0cmluZywgeW91IHNob3VsZCB1c2UgYW55IG9mIHRoZSBmb2xsb3dpbmc6ICdkYXknLCAnd2VlaycsICdtb250aCcsICdhZ2VuZGEnLCAndGltZWxpbmVEYXknLCAndGltZWxpbmVXZWVrJywgJ3RpbWVsaW5lTW9udGgnLiBDdXN0b20gdmlld3MgY2FuIGJlIGRlZmluZWQgYXMgb2JqZWN0cyBpbnN0ZWFkIG9mIHN0cmluZ3MuIFRoZSB2aWV3IG9iamVjdCBzaG91bGQgY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IGxhYmVsIC0gdGhlIGxhYmVsIGZvciB0aGUgdmlldy52YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHZpZXcuIFRoZSB2YWx1ZSBpcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB2aWV3LnR5cGUgLSB0aGUgdHlwZSBvZiB2aWV3LiBUaGUgdHlwZSBzaG91bGQgYmUgb25lIG9mIHRoZSBkZWZhdWx0IGFsbG93ZWQgdmFsdWVzIGZvciBhIHZpZXcuaGlkZVdlZWtlbmQgLSBhbiBPcHRpb25hbCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB0byBoaWRlIHRoZSB3ZWVrZW5kIG9ubHkgZm9yIHRoaXMgc3BlY2lmaWMgdmlldy5oaWRlTm9ud29ya2luZ1dlZWtkYXlzIC0gYW4gT3B0aW9uYWwgcHJvcGVydHkgdGhhdCBhbGxvd3MgdG8gaGlkZSB0aGUgbm9ud3JraW5nIHdlZWtkYXlzIGZvciB0aGlzIHNwZWNpZmljIHZpZXcuc2hvcnRjdXRLZXkgLSBhbiBPcHRpb25hbCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB0byBzZXQgYSBjdXN0b20gc2hvcnRjdXQga2V5IGZvciB0aGUgdmlldy5oaWRlSG91cnMgLSBhbiBPcHRpb25hbCBwcm9wZXJ0eSBhcHBsaWNhYmxlIG9ubHkgdG8gdGltZWxpbmVXZWVrIHZpZXcgdGhhdCBhbGxvd3MgdG8gaGlkZSB0aGUgaG91ciBjZWxscyBhbmQgb25seSBzaG93IHRoZSBkYXkgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3cygpOiBTY2hlZHVsZXJWaWV3cyB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlld3ModmFsdWU6IFNjaGVkdWxlclZpZXdzIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdHlwZSBvZiB0aGUgdmlldyBzZWxlY3RvciBsb2NhdGVkIGluIHRoZSBoZWFkZXIgb2YgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3U2VsZWN0b3JUeXBlKCk6IFNjaGVkdWxlclZpZXdTZWxlY3RvclR5cGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld1NlbGVjdG9yVHlwZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlld1NlbGVjdG9yVHlwZSh2YWx1ZTogU2NoZWR1bGVyVmlld1NlbGVjdG9yVHlwZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3U2VsZWN0b3JUeXBlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIFN0YXJ0IERhdGUgcnVsZS4gVGhlIFdlZWsgYW5kIFRpbWVsaW5lV2VlayB2aWV3cyBzdGFydCBieSBkZWZhdWx0IGZyb20gdGhlIGN1cnJlbnQgZGF0ZSB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBmaXJzdERheU9mV2VlayBwcm9wZXJ0eS4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIHNldCB0byAnZGF0ZUN1cnJlbnQnLCB0aGVzZSB2aWV3cyB3aWxsIHN0YXJ0IGZyb20gdGhlIHZhbHVlIG9mIHRoZSAnZGF0ZUN1cnJlbnQnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmlld1N0YXJ0RGF5KCk6IFNjaGVkdWxlclZpZXdTdGFydERheSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3U3RhcnREYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZpZXdTdGFydERheSh2YWx1ZTogU2NoZWR1bGVyVmlld1N0YXJ0RGF5IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdTdGFydERheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIHdlZWsgZGF5cyBpbnNpZGUgdGhlIGVsZW1lbnQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2Vla2RheUZvcm1hdCgpOiBXZWVrRGF5Rm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndlZWtkYXlGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHdlZWtkYXlGb3JtYXQodmFsdWU6IFdlZWtEYXlGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2Vla2RheUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGVzIGluc2lkZSB0aGUgdGltZWxpbmUgaGVhZGVyIHdoZW4gdGhleSByZXByZXNlbnQgeWVhcnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB5ZWFyRm9ybWF0KCk6IFllYXJGb3JtYXQgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueWVhckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgeWVhckZvcm1hdCh2YWx1ZTogWWVhckZvcm1hdCB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC55ZWFyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBpZiB0aGUgZWxlbWVudCBjYW4gYmUgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZm9jdXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlZG8vdW5kbyBzdGVwcyB0aGF0IHdpbGwgYmUgcmVtZW1iZXJlZCBieSB0aGUgU2NoZWR1bGVyLiBXaGVuIHRoZSBudW1iZXIgaXMgcmVhY2hlZCB0aGUgb2xkZXN0IHJlY29yZHMgYXJlIHJlbW92ZWQgaW4gb3JkZXIgdG8gYWRkIG5ldy4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZG9SZWRvU3RlcHMoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9SZWRvU3RlcHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZG9SZWRvU3RlcHModmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmRvUmVkb1N0ZXBzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBjb21wbGV0bHkgY3VzdG9taXplIHRoZSBwb3B1cCBXaW5kb3cgdGhhdCBpcyB1c2VkIHRvIGVkaXQgZXZlbnRzLiBUaGUgZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOiB0YXJnZXQgLSB0aGUgdGFyZ2V0IHBvcHVwIFdpbmRvdyB0aGF0IGlzIGFib3V0IHRvIGJlIG9wZW5lZC50eXBlIC0gdGhlIHR5cGUgb2YgdGhlIHdpbmRvdy4gVGhlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgcHVycG9zZSBvZiB0aGUgd2luZG93LiBUaGUgZGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IHN0cmluZyB3aGljaCBtZWFucyB0aGF0IGl0J3MgdGhlIGRlZmF1bHQgZXZlbnQgZWRpdGluZyB3aW5kb3cuIFRoZSBvdGhlciB0eXBlIGlzICdjb25maXJtJyAoIGNvbmZpcm1hdGlvbiB3aW5kb3cpIHRoYXQgYXBwZWFycyB3aGVuIGNsaWNraW5nIG9uIGEgcmVwZWF0aW5nIGV2ZW50LiBldmVudE9iaiAtIHRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBnb2luZyB0byBiZSBlZGl0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB3aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgd2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBiYXRjaCB1cGRhdGUgd2FzIHN0YXJ0ZWQgYWZ0ZXIgZXhlY3V0aW5nIHRoZSBiZWdpblVwZGF0ZSBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25CZWdpblVwZGF0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBiYXRjaCB1cGRhdGUgd2FzIGVuZGVkIGZyb20gYWZ0ZXIgZXhlY3V0aW5nIHRoZSBlbmRVcGRhdGUgbWV0aG9kLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRW5kVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5ldyBjZWxsIGlzIHNlbGVjdGVkL3Vuc2VsZWN0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUsIFx0b2xkVmFsdWUpXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgc2VsZWN0ZWQgRGF0ZS5cblx0KiAgIG9sZFZhbHVlIC0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgRGF0ZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBFdmVudCBoYXMgYmVlbiB1cGRhdGVkL2luc2VydGVkL3JlbW92ZWQvZHJhZ2dlZC9yZXNpemVkIG9yIGFuIGV4Y2VwdGlvbiBvZiBhIHJlcGVhdGluZyBldmVudCBoYXMgYmVlbiBhZGRlZC91cGRhdGVkL3JlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSwgXHR0eXBlKVxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGNoYW5nZSB0aGF0IGlzIGJlaW5nIGRvbmUgdG8gdGhlIGl0ZW0uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEV2ZW50IGlzIGdvaW5nIHRvIGJlIHVwZGF0ZWQvaW5zZXJ0ZWQvcmVtb3ZlZC4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0dHlwZSlcblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBjaGFuZ2UgdGhhdCBpcyBnb2luZyB0byBiZSBtYWRlIHRvIHRoZSBpdGVtIChlLmcuICdpbnNlcnRpbmcnLCAncmVtb3ZpbmcnLCAndXBkYXRpbmcnLCAnZXhjZXB0aW9uSW5zZXJ0aW5nJywgJ2V4Y2VwdGlvblVwZGF0aW5nJywgJ2V4Y2VwdGlvblJlbW92aW5nJykuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DaGFuZ2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gZW4gZXZlbnQsIGV2ZW50IGl0ZW0gb3IgYSBjb250ZXh0IG1lbnUgaXRlbSBpcyBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0dHlwZSwgXHRpdGVtT2JqKVxuXHQqICAgaXRlbSAtIFRoZSBIVE1MRWxlbWVudCBmb3IgdGhlIGV2ZW50LlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGl0ZW0gdGhhdCBpcyBjbGlja2VkLiBUaGUgcG9zc2libGUgdmFsdWVzIGFyZTogPHVsPjxsaT5ldmVudCAtIHdoZW4gYW4gZXZlbnQgaXRlbSBpcyBjbGlja2VkLjwvbGk+PGxpPmNvbnRleHQgLSB3aGVuIGEgY29udGV4dCBtZW51IGl0ZW0gaXMgY2xpY2tlZC48L2xpPjwvdWw+LlxuXHQqICAgaXRlbU9iaiAtIFRoZSBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gRXZlbnQgaXMgaW5zZXJ0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSlcblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbUluc2VydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gRXZlbnQgaXMgcmVtb3ZlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtKVxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtUmVtb3ZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBFdmVudCBpcyB1cGRhdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHR5cGUsIFx0aXRlbSlcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtIHRoYXQgaGFzIGJlZW4gbW9kaWZpZWQuXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1VcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB2aWV3IGlzIGNoYW5nZWQgdmlhIHVzZXIgaW50ZXJhY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCB2aWV3LlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIG5ldyBzZWxlY3RlZCB2aWV3LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25WaWV3Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSB2aWV3IGlzIGNoYW5nZWQgdmlhIHVzZXIgaW50ZXJhY3Rpb24uIFRoZSB2aWV3IGNoYW5nZSBhY3Rpb24gY2FuIGJlIGNhbmNlbGVkIGlmIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGRWYWx1ZSwgXHR2YWx1ZSlcblx0KiAgIG9sZFZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIHZpZXcuXG5cdCogICB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgbmV3IHNlbGVjdGVkIHZpZXcuXG5cdCovXG5cdEBPdXRwdXQoKSBvblZpZXdDaGFuZ2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBzaG9ydGN1dCBrZXkgZm9yIGFuIGV2ZW50IGlzIHByZXNzZWQuIEJ5IGRlZmF1bHQgb25seSAnRGVsZXRlJyBrZXkgaXMgdXNlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRrZXksIFx0dGFyZ2V0LCBcdGV2ZW50T2JqKVxuXHQqICAga2V5IC0gVGhlIHNob3J0Y3V0IGtleSB0aGF0IHdhcyBwcmVzc2VkLlxuXHQqICAgdGFyZ2V0IC0gVGhlIGV2ZW50IHRhcmdldCAoSFRNTEVsZW1lbnQpLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgc2NoZWR1bGVyIEV2ZW50IG9iamVjdCB0aGF0IGFmZmVjdGVkIGJ5IHRoZSBrZXlwcmVzcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXZlbnRTaG9ydGN1dEtleTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlICdkYXRlQ3VycmVudCcgcHJvcGVydHkgaXMgY2hhbmdlZC4gVGhpcyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgdG8gYSBkaWZmZXJlbnQgZGF0ZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGRWYWx1ZSwgXHR2YWx1ZSlcblx0KiAgIG9sZFZhbHVlIC0gVGhlIHByZXZpb3VzIGN1cnJlbnQgZGF0ZSB0aGF0IHdhcyBpbiB2aWV3LlxuXHQqICAgdmFsdWUgLSBUaGUgY3VycmVudCBkYXRlIGluIHZpZXcuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGRyYWdnaW5nIG9mIGFuIGV2ZW50IGJlZ2lucy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdGl0ZW1EYXRlUmFuZ2UsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHRhcmdldCAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBldmVudCB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBpdGVtIC0gVGhlIHNjaGVkdWxlciBFdmVudCBvYmplY3QgdGhhdCBpcyBnb2luZyB0byBiZSBkcmFnZ2VkLlxuXHQqICAgaXRlbURhdGVSYW5nZSAtIFRoZSBzdGFydC9lbmQgZGF0ZXMgZm9yIHRoZSBTY2hlZHVsZXIgRXZlbnQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2luZyBvZiBhbiBldmVudCBmaW5pc2hlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRpdGVtRGF0ZVJhbmdlLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICB0YXJnZXQgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZXZlbnQgdGhhdCBpcyBkcmFnZ2VkLlxuXHQqICAgaXRlbSAtIFRoZSBzY2hlZHVsZXIgRXZlbnQgb2JqZWN0IHRoYXQgaXMgZHJhZ2dlZC5cblx0KiAgIGl0ZW1EYXRlUmFuZ2UgLSBUaGUgbmV3IHN0YXJ0L2VuZCBkYXRlcyBmb3IgdGhlIGRyYWdnZWQgU2NoZWR1bGVyIEV2ZW50LlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGRyb3BzIGFuIGl0ZW0gb3ZlciBhIGNlbGwuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGRhdGUsIFx0YWxsRGF5KVxuXHQqICAgdGFyZ2V0IC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGV2ZW50IHRoYXQgaXMgZHJhZ2dlZC5cblx0KiAgIGRhdGUgLSBUaGUgY2VsbCdzIGRhdGUgdW5kZXIgdGhlIHBvaW50ZXIuXG5cdCogICBhbGxEYXkgLSBCb29sZWFuIHZhbHVlLCB3aGljaCBpcyB0cnVlIHdoZW4gdGhlIGNlbGwgdW5kZXIgdGhlIHBvaW50ZXIgaXMgYWxsIGRheSBjZWxsLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ecm9wb3ZlckNlbGw6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHJlc2l6aW5nIG9mIGEgdGFzayBzdGFydHMuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRpdGVtRGF0ZVJhbmdlLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICB0YXJnZXQgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZXZlbnQgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqICAgaXRlbSAtIFRoZSBzY2hlZHVsZXIgRXZlbnQgb2JqZWN0IHRoYXQgaXMgZ29pbmcgdG8gYmUgcmVzaXplZC5cblx0KiAgIGl0ZW1EYXRlUmFuZ2UgLSBUaGUgc3RhcnQvZW5kIGRhdGVzIGZvciBTY2hlZHVsZXIgRXZlbnQgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcmVzaXppbmcgb2YgYW4gZXZlbnQgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0aXRlbURhdGVSYW5nZSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgdGFyZ2V0IC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGV2ZW50IHRoYXQgaXMgcmVzaXplZC5cblx0KiAgIGl0ZW0gLSBUaGUgc2NoZWR1bGVyIEV2ZW50IG9iamVjdCB0aGF0IGlzIHJlc2l6ZWQuXG5cdCogICBpdGVtRGF0ZVJhbmdlIC0gVGhlIG5ldyBzdGFydC9lbmQgZGF0ZXMgZm9yIHRoZSByZXNpemVkIFNjaGVkdWxlciBFdmVudC5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyB0b3Agb3BlbiB0aGUgZXZlbnQgZGlhbG9nIHdpbmRvdy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdHR5cGUsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgZGlhbG9nIHdpbmRvdyB0aGF0IGlzIG9wZW5pbmcuXG5cdCogICBpdGVtIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGVkaXRlZC5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB3aW5kb3cgdGhhdCBpcyBnb2luZyB0byBvcGVuLiBUd28gd2luZG93IHR5cGVzIGFyZSBhdmFpbGFibGUsIHRoZSBkYWZhdWx0IHdoaWNoIGlzIGFuIGVtcHR5IHN0cmluZyAoIGRvZXMgbm90IGhhdmUgYSB0eXBlKSBhbmQgJ2NvbmZpcm0nIHdoaWNoIGlzIGRpc3BsYXllZCB3aGVuIGNsaWNrZWQgb24gYSByZXBlYXRpbmcgZXZlbnQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FZGl0RGlhbG9nT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgb3BlbnMgdGhlIGV2ZW50IGRpYWxvZyB3aW5kb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGVkaXRvcnMsIFx0aXRlbSwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBkaWFsb2cgd2luZG93IHRoYXQgaXMgb3BlbmVkLlxuXHQqICAgZWRpdG9ycyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBldmVudCBlZGl0b3JzIHRoYXQgYXJlIHByZXNlbnQgaW5zaWRlIHRoZSB3aW5kb3cuIFRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkIHdoZW4gdGhlIHdpbmRvdyBpcyBvZiB0eXBlICdjb25maXJtJywgYmVjYXVzZSBjb25maXJtIHdpbmRvd3MgZG8gbm90IGNvbnRhaW4gZWRpdG9ycy5cblx0KiAgIGl0ZW0gLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgYmVpbmcgZWRpdGVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRWRpdERpYWxvZ09wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZXZlbnQgZGlhbG9nIHdpbmRvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0ZWRpdG9ycywgXHRpdGVtLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGRpYWxvZyB3aW5kb3cgdGhhdCBpcyBjbG9zZWQuXG5cdCogICBlZGl0b3JzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGV2ZW50IGVkaXRvcnMgdGhhdCBhcmUgcHJlc2VudCBpbnNpZGUgdGhlIHdpbmRvdy4gVGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQgd2hlbiB0aGUgd2luZG93IGlzIG9mIHR5cGUgJ2NvbmZpcm0nLCBiZWNhdXNlIGNvbmZpcm0gd2luZG93cyBkbyBub3QgY29udGFpbiBlZGl0b3JzLlxuXHQqICAgaXRlbSAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBiZWluZyBlZGl0ZWQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGlzIGFib3V0IHRvIGNsb3NlIHRoZSBldmVudCBkaWFsb2cgd2luZG93LiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0dHlwZSwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBkaWFsb2cgd2luZG93IHRoYXQgaXMgY2xvc2luZy5cblx0KiAgIGl0ZW0gLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgZWRpdGVkLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdyB0aGF0IGlzIGdvaW5nIHRvIGJlIGNsb3NlZC4gVHdvIHdpbmRvdyB0eXBlcyBhcmUgYXZhaWxhYmxlLCB0aGUgZGFmYXVsdCB3aGljaCBpcyBhbiBlbXB0eSBzdHJpbmcgKCBkb2VzIG5vdCBoYXZlIGEgdHlwZSkgYW5kICdjb25maXJtJyB3aGljaCBpcyBkaXNwbGF5ZWQgd2hlbiBjbGlja2VkIG9uIGEgcmVwZWF0aW5nIGV2ZW50LlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRWRpdERpYWxvZ0Nsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGJlZ2lucyB0byBvcGVuIHRoZSBjb250ZXh0IG1lbnUgb24gYSB0aW1lbGluZSBjZWxsIG9yIGFuIGV2ZW50IGVsZW1lbnQuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0Y2VsbE9iaiwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBjb250ZXh0IG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBjZWxsT2JqIC0gVGhlIGNlbGwgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhbiBldmVudCBpbnN0ZWFkIG9mIGEgY2VsbCB0aGlzIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYSBjZWxsIGluc3RlYWQgb2YgYW4gZXZlbnQgdGhpcyBwYXJhbXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udGV4dCBtZW51IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0Y2VsbE9iaiwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBjb250ZXh0IG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBjZWxsT2JqIC0gVGhlIGNlbGwgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhbiBldmVudCBpbnN0ZWFkIG9mIGEgY2VsbCB0aGlzIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYSBjZWxsIGluc3RlYWQgb2YgYW4gZXZlbnQgdGhpcyBwYXJhbXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udGV4dCBtZW51IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0Y2VsbE9iaiwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBjb250ZXh0IG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBjZWxsT2JqIC0gVGhlIGNlbGwgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhbiBldmVudCBpbnN0ZWFkIG9mIGEgY2VsbCB0aGlzIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYSBjZWxsIGluc3RlYWQgb2YgYW4gZXZlbnQgdGhpcyBwYXJhbXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgaXMgYWJvdXQgdG8gY2xvc2UgdGhlIGNvbnRleHQgbWVudS4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRjZWxsT2JqLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGNvbnRleHQgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGNlbGxPYmogLSBUaGUgY2VsbCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGFuIGV2ZW50IGluc3RlYWQgb2YgYSBjZWxsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhIGNlbGwgaW5zdGVhZCBvZiBhbiBldmVudCB0aGlzIHBhcmFtdGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudUNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBldmVudCBtZW51IGlzIGFib3V0IHRvIG9wZW4uIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IG9mIHRoZSBldmVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FdmVudE1lbnVPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZXZlbnQgbWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCBvZiB0aGUgZXZlbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXZlbnRNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGV2ZW50IG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgb2YgdGhlIGV2ZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV2ZW50TWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZXZldCBtZW51IGlzIGFib3V0IHRvIGNsb3NlLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCBvZiB0aGUgZXZlbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXZlbnRNZW51Q2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRhdGUgc2VsZWN0aW9uIG1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EYXRlTWVudU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBkYXRlIHNlbGVjdGlvbiBtZW51IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRGF0ZU1lbnVDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpZXcgc2VsZWN0aW9uIG1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25WaWV3TWVudU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB2aWV3IHNlbGVjdGlvbiBtZW51IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uVmlld01lbnVDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBub3RpZmljYXRpb24gaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluc3RhbmNlKVxuXHQqICAgaW5zdGFuY2UgLSBUaGUgdG9hc3QgaXRlbSBpbnN0YW5jZSB0aGF0IGlzIG9wZW5lZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uTm90aWZpY2F0aW9uT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBub3RpZmljYXRpb24gaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluc3RhbmNlKVxuXHQqICAgaW5zdGFuY2UgLSBUaGUgdG9hc3QgaXRlbSBpbnN0YW5jZSB0aGF0IGlzIGNsb3NlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uTm90aWZpY2F0aW9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGFuIGV2ZW50IHRvIHRoZSBTY2hlZHVsZXIuIEFjY2VwdHMgYW4gZXZlbnQgb2JqZWN0IG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0IChzYW1lIGFzIHRoZSBkYXRhU291cmNlIGZvcm1hdCk6IHsgbGFiZWw/OiBzdHJpbmcsIGRhdGVTdGFydDogZGF0ZSwgZGF0ZUVuZDogZGF0ZSwgZGVzY3JpcHRpb24/OiBzdHJpbmcsIGlkPzogc3RyaW5nIHwgbnVtYmVyLCBjbGFzcz86IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjb2xvcj86IHN0cmluZywgbm90aWZpY2F0aW9ucz86IHsgaW50ZXJ2YWw6IG51bWVyaWMsIHR5cGU/OiBzdHJpbmcsIHRpbWU6IG51bWJlcltdIH1bXSwgYWxsRGF5PzogYm9vbGVhbiwgZGlzYWJsZURyYWc/OiBib29sZWFuLCBkaXNhYmxlUmVzaXplPzogYm9vbGVhbiwgcmVwZWF0PzogeyByZXBlYXRGcmVxOiBzdHJpbmcsIHJlcGVhdEludGVydmFsOiBudW1iZXIsIHJlcGVhdE9uPzogbnVtYmVyIHwgbnVtYmVyW10gfCBkYXRlLCByZXBlYXRFbmQ/OiBudW1iZXIgfCBkYXRlLCBleGNlcHRpb25zPzogeyBkYXRlOiBkYXRlLCBkYXRlU3RhcnQ/OiBkYXRlLCBkYXRlRW5kPzogZGF0ZSwgaGlkZGVuPzogYm9vbGVhbiwgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZywgbm90aWZpY2F0aW9ucz86IHsgaW50ZXJ2YWw6IG51bWVyaWMsIHR5cGU/OiBzdHJpbmcsIHRpbWU6IG51bWJlcltdIH1bXSwgZGlzYWJsZURyYWc/OiBib29sZWFuLCBkaXNhYmxlUmVzaXplPzogYm9vbGVhbiB9W10gfSwgc3RhdHVzPzogc3RyaW5nIH0gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIFNjaGVkdWxlciBldmVudCB0aGF0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGVsZW1lbnQuXG5cdCovXG4gICAgcHVibGljIGFkZEV2ZW50KGV2ZW50T2JqOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnQoZXZlbnRPYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50KGV2ZW50T2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyB2aWV3LiBFeGFtcGxlOiBzY2hlZHVsZXIuYWRkVmlldygnd2VlaycsICdNeSBWaWV3JywgJ215VmlldycsIGZhbHNlLCBmYWxzZSwgMTApOyBzY2hlZHVsZXIuc2V0VmlldygnbXlWaWV3Jyk7IFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB0eXBlLiBUaGUgdmlldyB0eXBlLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbC4gVGhlIHZpZXcncyBsYWJlbCBkaXNwbGF5ZWQgaW4gdGhlIGhlYWRlci5cblx0KiBAcGFyYW0ge3N0cmluZ30gdmFsdWUuIFRoZSB2aWV3J3MgdmFsdWUgdXNlZCB0byBpZGVudGlmeSB0aGUgdmlldy5cblx0KiBAcGFyYW0ge2Jvb2xlYW59IGhpZGVXZWVrZW5kLiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gaGlkZSB0aGUgd2Vla2VuZC5cblx0KiBAcGFyYW0ge2Jvb2xlYW59IGhpZGVOb253b3JraW5nV2Vla2RheXMuIERldGVybWluZXMgd2hldGhlciB0byBoaWRlIHRoZSBub24gd29ya2luZyBkYXlzLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBhZGRpdGlvbmFsRGF5cy4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFkZCBhZGRpdGlvbmFsIGRheXMgdG8gdGhlIHZpZXcuXG5cdCovXG4gICAgcHVibGljIGFkZFZpZXcodHlwZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBoaWRlV2Vla2VuZDogYm9vbGVhbiwgaGlkZU5vbndvcmtpbmdXZWVrZGF5czogYm9vbGVhbiwgYWRkaXRpb25hbERheXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRWaWV3KHR5cGUsIGxhYmVsLCB2YWx1ZSwgaGlkZVdlZWtlbmQsIGhpZGVOb253b3JraW5nV2Vla2RheXMsIGFkZGl0aW9uYWxEYXlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRWaWV3KHR5cGUsIGxhYmVsLCB2YWx1ZSwgaGlkZVdlZWtlbmQsIGhpZGVOb253b3JraW5nV2Vla2RheXMsIGFkZGl0aW9uYWxEYXlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3RhcnRzIGFuIHVwZGF0ZSBvcGVyYXRpb24uIFRoaXMgaXMgYXBwcm9wcmlhdGUgd2hlbiBjYWxsaW5nIG11bHRpcGxlIG1ldGhvZHMgb3Igc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYXQgb25jZS4gXG5cdCovXG4gICAgcHVibGljIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYW4gZXZlbnQgYW5kIGFkZHMgaXQgdG8gdGhlIFNjaGVkdWxlci4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGxhYmVsLiBFdmVudCBsYWJlbC5cblx0KiBAcGFyYW0ge3N0cmluZ30gdmFsdWUuIEV2ZW50IHZhbHVlLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RhcnQuIEV2ZW50IGRhdGUgc3RhcnQuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGVFbmQuIEV2ZW50IGRhdGUgZW5kLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gYWxsRGF5LiBFdmVudCBhbGwgZGF5LiBTZXQgaXQgdG8gdHJ1ZSB0byBjcmVhdGUgYWxsIGRheSBldmVudC5cblx0Ki9cbiAgICBwdWJsaWMgY3JlYXRlRXZlbnQobGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZGF0ZVN0YXJ0OiBzdHJpbmcsIGRhdGVFbmQ6IHN0cmluZywgYWxsRGF5OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNyZWF0ZUV2ZW50KGxhYmVsLCB2YWx1ZSwgZGF0ZVN0YXJ0LCBkYXRlRW5kLCBhbGxEYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNyZWF0ZUV2ZW50KGxhYmVsLCB2YWx1ZSwgZGF0ZVN0YXJ0LCBkYXRlRW5kLCBhbGxEYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSB1cGRhdGUgb3BlcmF0aW9uLiBUaGlzIG1ldGhvZCB3aWxsIHJlc3VtZSB0aGUgcmVuZGVyaW5nIGFuZCB3aWxsIHJlZnJlc2ggdGhlIGVsZW1lbnQuIFxuXHQqL1xuICAgIHB1YmxpYyBlbmRVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBzdGFydCBhbmQgZW5kIHZpZXcgZGF0ZXMuIFxuXHQqIEByZXR1cm5zIHtEYXRlW119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWaWV3RGF0ZXMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZpZXdEYXRlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmZXJlc2hlcyB0aGUgU2NoZWR1bGVyIGJ5IHJlY2FsY3VsYXRpbmcgdGhlIFNjcm9sbGJhcnMuICBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IGZ1bGxSZWZyZXNoPy4gSWYgc2V0IHRoZSBTY2hlZHVsZXIgd2lsbCBiZSByZS1yZW5kZXJlZCBjb21wbGV0ZWx5LlxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKGZ1bGxSZWZyZXNoPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKGZ1bGxSZWZyZXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgZXZlbnRzIGZyb20gdGhlIFNjaGVkdWxlci4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGb3JtYXQuIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZXhwb3J0ZWQgZmlsZS4gVGhlIGZvbGxvd2luZyB2YWx1ZXMgYXJlIGF2YWlsYWJsZTogPHVsPjxsaT48Yj5wZGY8L2I+PC9saT48bGk+PGI+eGxzeDwvYj48L2xpPjxsaT48Yj5odG1sPC9iPjwvbGk+PGxpPjxiPmlDYWw8L2I+PC9saT48L3VsPlxuXHQqIEBwYXJhbSB7YW55fSBjYWxsYmFjaz8uIEEgY2FsbGJhY2sgdGhhdCBhbGxvd3MgdG8gZm9ybWF0IHRoZSBleHBvcnRlZCBkYXRhIGJhc2VkIG9uIGEgY29uZGl0aW9uLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzLCByZWZlciBybyB0aGUgU21hcnQgRXhwb3J0IERvY3VtZW50YXRpb24uXG5cdCovXG4gICAgcHVibGljIGV4cG9ydERhdGEoZGF0YUZvcm1hdDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGV2ZW50cyBpbnNpZGUgdGhlIFNjaGVkdWxlci4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldERhdGFTb3VyY2UoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldERhdGFTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZXNvdXJjZXMgaW5zaWRlIHRoZSBTY2hlZHVsZXIuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZXMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFJlc291cmNlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhIGRhdGUgZnJvbSBjb29yZGluYXRlcyBcblx0KiBAcGFyYW0ge251bWJlcn0geC4gWCBjb29yZGluYXRlLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSB5LiBZIGNvb3JkaW5hdGUuXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldERhdGVGcm9tQ29vcmRpbmF0ZXMoeCwgeSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXREYXRlRnJvbUNvb3JkaW5hdGVzKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB3aGV0aGVyIGEgY2VsbCBpcyBhbGwgZGF5IGNlbGwgZnJvbSBjb29yZGluYXRlcyBcblx0KiBAcGFyYW0ge251bWJlcn0geC4gWCBjb29yZGluYXRlLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSB5LiBZIGNvb3JkaW5hdGUuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJc0FsbERheUNlbGxGcm9tQ29vcmRpbmF0ZXMoeCwgeSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJc0FsbERheUNlbGxGcm9tQ29vcmRpbmF0ZXMoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBTY2hlZHVsZXIuIEluY2x1ZGVzIHRoZSBjdXJyZW50IGRhdGVDdXJlcm50LCBkYXRhU291cmNlIGFuZCB0aW1lWm9uZSBwcm9wZXJ0aWVzLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBmb3JtIExvY2FsU3RvcmFnZSBhY2NvcmRpbmcgdG8gaXQncyBpZC4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50IG9yIGNoZWNrcyBMb2NhbFN0b3JhZ2UgZm9yIGFueSBzYXZlZCBzdGF0ZXMgaWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBTY2hlZHVsZXIgZXZlbnRzLiBJZiBubyBzdGF0ZSBpcyBwcm92aWRlZCwgdGhlIGVsZW1lbnQgd2lsbCBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGEgc2F2ZWQgc3RhdGUuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGN1cnJlbnQgZXZlbnRzIG9mIHRoZSBlbGVtZW50IHRvIExvY2FsU3RvcmFnZS4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0KiBAcGFyYW0ge2FueVtdfSBzdGF0ZT8uIEFuIEFycmF5IGNvbnRhaW5pbmcgYSB2YWxpZCBzdHJ1Y3R1cmUgb2YgU2NoZWR1bGVyIGV2ZW50cy5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBTY2hlZHVsZXIncyB2aWV3LiBFeGFtcGxlOiBzY2hlZHVsZXIuYWRkVmlldygnd2VlaycsICdNeSBWaWV3JywgJ215VmlldycsIGZhbHNlLCBmYWxzZSwgMTApOyBzY2hlZHVsZXIuc2V0VmlldygnbXlWaWV3Jyk7IFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2aWV3Py4gVGhlIHZpZXcncyB2YWx1ZS4gRm9yIGV4YW1wbGU6ICdkYXknLiBcblx0Ki9cbiAgICBwdWJsaWMgc2V0Vmlldyh2aWV3Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFZpZXcodmlldyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Vmlldyh2aWV3KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIFNjaGVkdWxlciBjb250YWlucyB0aGUgZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0LlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgY29udGFpbnNFdmVudChldmVudE9iaik6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5jb250YWluc0V2ZW50KGV2ZW50T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYW4gZXZlbnQgYXMgb2JqZWN0IG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0IChzYW1lIGFzIHRoZSBkYXRhU291cmNlIGZvcm1hdCk6IHsgbGFiZWw/OiBzdHJpbmcsIGRhdGVTdGFydDogZGF0ZSwgZGF0ZUVuZDogZGF0ZSwgZGVzY3JpcHRpb24/OiBzdHJpbmcsIGlkPzogc3RyaW5nIHwgbnVtYmVyLCBjbGFzcz86IHN0cmluZywgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBjb2xvcj86IHN0cmluZywgbm90aWZpY2F0aW9ucz86IHsgaW50ZXJ2YWw6IG51bWVyaWMsIHR5cGU/OiBzdHJpbmcsIHRpbWU6IG51bWJlcltdIH1bXSwgYWxsRGF5PzogYm9vbGVhbiwgZGlzYWJsZURyYWc/OiBib29sZWFuLCBkaXNhYmxlUmVzaXplPzogYm9vbGVhbiwgcmVwZWF0PzogeyByZXBlYXRGcmVxOiBzdHJpbmcsIHJlcGVhdEludGVydmFsOiBudW1iZXIsIHJlcGVhdE9uPzogbnVtYmVyIHwgbnVtYmVyW10gfCBkYXRlLCByZXBlYXRFbmQ/OiBudW1iZXIgfCBkYXRlLCBleGNlcHRpb25zPzogeyBkYXRlOiBkYXRlLCBkYXRlU3RhcnQ/OiBkYXRlLCBkYXRlRW5kPzogZGF0ZSwgaGlkZGVuPzogYm9vbGVhbiwgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZywgbm90aWZpY2F0aW9ucz86IHsgaW50ZXJ2YWw6IG51bWVyaWMsIHR5cGU/OiBzdHJpbmcsIHRpbWU6IG51bWJlcltdIH1bXSwgZGlzYWJsZURyYWc/OiBib29sZWFuLCBkaXNhYmxlUmVzaXplPzogYm9vbGVhbiB9W10gfSwgc3RhdHVzPzogc3RyaW5nIH0gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIFNjaGVkdWxlciBldmVudCB0aGF0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGVsZW1lbnQuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4Py4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCB0byBpbnNlcnQgdGhlIGV2ZW50IGF0LiBJZiBub3QgcHJvdmlkZWQgdGhlIGV2ZW50IGlzIGluc2VydGVkIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QuXG5cdCovXG4gICAgcHVibGljIGluc2VydEV2ZW50KGV2ZW50T2JqOiBhbnksIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEV2ZW50KGV2ZW50T2JqLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0RXZlbnQoZXZlbnRPYmosIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhbiBldmVudCBvYmplY3Qgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXQgKHNhbWUgYXMgdGhlIGRhdGFTb3VyY2UgZm9ybWF0KTogeyBsYWJlbD86IHN0cmluZywgZGF0ZVN0YXJ0OiBkYXRlLCBkYXRlRW5kOiBkYXRlLCBkZXNjcmlwdGlvbj86IHN0cmluZywgaWQ/OiBzdHJpbmcgfCBudW1iZXIsIGNsYXNzPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBhbGxEYXk/OiBib29sZWFuLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuLCByZXBlYXQ/OiB7IHJlcGVhdEZyZXE6IHN0cmluZywgcmVwZWF0SW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0T24/OiBudW1iZXIgfCBudW1iZXJbXSB8IGRhdGUsIHJlcGVhdEVuZD86IG51bWJlciB8IGRhdGUsIGV4Y2VwdGlvbnM/OiB7IGRhdGU6IGRhdGUsIGRhdGVTdGFydD86IGRhdGUsIGRhdGVFbmQ/OiBkYXRlLCBoaWRkZW4/OiBib29sZWFuLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBub3RpZmljYXRpb25zPzogeyBpbnRlcnZhbDogbnVtZXJpYywgdHlwZT86IHN0cmluZywgdGltZTogbnVtYmVyW10gfVtdLCBkaXNhYmxlRHJhZz86IGJvb2xlYW4sIGRpc2FibGVSZXNpemU/OiBib29sZWFuIH1bXSB9LCBzdGF0dXM/OiBzdHJpbmcgfSBcblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYW4gZXZlbnQgb3IgYSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0LlxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBTY2hlZHVsZXIgZXZlbnQuIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZGVzaXJlZCBldmVudC5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlRXZlbnQoaW5kZXg6IGFueSwgZXZlbnRPYmo6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVFdmVudChpbmRleCwgZXZlbnRPYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUV2ZW50KGluZGV4LCBldmVudE9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYW4gZXhpc3RpbmcgZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBpbmRleC4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBvZiBhbiBldmVudCBvciB0aGUgYWN0dWFsIGV2ZW50IG9iamVjdCB0byBiZSByZW1vdmVkLlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVFdmVudChpbmRleDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudChpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIGV4Y2VwdGlvbnMgb2YgdGhlIHRhcmdldCByZXBlYXRpbmcgZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gVGhlIGluZGV4LCBpZCBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV4aXN0aW5nIHJlcGVhdGluZyBTY2hlZHVsZXIgZXZlbnQuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEV2ZW50RXhjZXB0aW9ucyhldmVudE9iaik6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRFdmVudEV4Y2VwdGlvbnMoZXZlbnRPYmopO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhbiBldmVudCBleGNlcHRpb24gdG8gYSByZXBlYXRpbmcgZXZlbnQuIFRoZSBleGNlcHRpb24gb2NjdXJlbmNlcyBmb3IgYSByZXBlYXRpbmcgZXZlbnQgY2FuIGJlIGdhdGhlcmVkIHZpYSB0aGUgZm9sbG93aW5nIG1ldGhvZHM6IG9jY3VyZW5jZXNvY2N1cnJlbmNlc0JldHdlZW5vY2N1cnJlbmNlQWZ0ZXJvY2N1cnJlbmNlQmVmb3JlLiAgRXhhbXBsZSB1c2FnZTogc2NoZWR1bGVyLmFkZEV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCB7IGRhdGU6IG9jY3VyYW5jZURhdGUsIGRhdGVTdGFydDogbmV3RGF0ZVN0YXJ0LCBkYXRlRW5kOiBuZXdEYXRlRW5kLCBsYWJlbDogJ0V4Y2VwdGlvbicgfSk7IFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gVGhlIGluZGV4LCBpZCBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV4aXN0aW5nIHJlcGVhdGluZyBTY2hlZHVsZXIgZXZlbnQuXG5cdCogQHBhcmFtIHthbnl9IGV4Y2VwdGlvbk9iai4gQW4gZXZlbnQgb2JqZWN0IHRoYXQgZGVzY3JpYmVzIGFuIGV4Y2VwdGlvbi4gRXhjZXB0aW9uIGV2ZW50IG9iamVjdHMgbXVzdCBoYXZlIGEgPGI+ZGF0ZTwvYj4gYXR0cmlidXRlIG9mIHR5cGUgRGF0ZSB3aGljaCBpbmRpY2F0ZXMgdGhlIGRhdGUgb2Ygb2NjdXJlbmNlLlxuXHQqL1xuICAgIHB1YmxpYyBhZGRFdmVudEV4Y2VwdGlvbihldmVudE9iajogYW55LCBleGNlcHRpb25PYmo6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudEV4Y2VwdGlvbihldmVudE9iaiwgZXhjZXB0aW9uT2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudEV4Y2VwdGlvbihldmVudE9iaiwgZXhjZXB0aW9uT2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhbiBldmVudCBleGNlcHRpb24gb2YgYSByZXBlYXRpbmcgZXZlbnQuIFRoZSBleGNlcHRpb24gb2NjdXJlbmNlcyBmb3IgYSByZXBlYXRpbmcgZXZlbnQgY2FuIGJlIGdhdGhlcmVkIHZpYSB0aGUgZm9sbG93aW5nIG1ldGhvZHM6IG9jY3VyZW5jZXNvY2N1cnJlbmNlc0JldHdlZW5vY2N1cnJlbmNlQWZ0ZXJvY2N1cnJlbmNlQmVmb3JlLiAgRXhhbXBsZSB1c2FnZTogc2NoZWR1bGVyLnVwZGF0ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBkYXRlT2ZPY2N1cmFuY2UsIHsgZGF0ZVN0YXJ0OiBuZXdEYXRlU3RhcnQsIGRhdGVFbmQ6IG5ld0RhdGVFbmQsIGxhYmVsOiAnVXBkYXRlZCBFeGNlcHRpb24nIH0pOyBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIFRoZSBpbmRleCwgaWQgb3IgYW4gb2JqZWN0IHJlZmVyZW5jZSBvZiBhbiBleGlzdGluZyByZXBlYXRpbmcgU2NoZWR1bGVyIGV2ZW50LlxuXHQqIEBwYXJhbSB7YW55fSBleGNlcHRpb25SZWYuIFRoZSBpbmRleCwgaWQsIGFuIG9jY3VyZW5jZSBkYXRlIG9mIHRoZSBleGNlcHRpb24gb3IgYW4gb2JqZWN0IHJlZmVyZW5jZSBvZiBhbiBleGlzdGluZyBTY2hlZHVsZXIgcmVwZWF0aW5nIGV2ZW50IGV4Y2VwdGlvbi5cblx0KiBAcGFyYW0ge2FueX0gZXhjZXB0aW9uT2JqLiBBbiBldmVudCBvYmplY3QgdGhhdCBkZXNjcmliZXMgYW4gZXhjZXB0aW9uLiBBbGwgYXR0cmlidXRlcyBvZiBhbiBleGNlcHRpb24gY2FuIGJlIHVwZGF0ZWQgZXhjZXB0IHRoZSBvY2N1cmFuY2UgZGF0ZSAodGhlIDxiPmRhdGU8L2I+IGF0dHJpYnV0ZSkuXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqOiBhbnksIGV4Y2VwdGlvblJlZjogYW55LCBleGNlcHRpb25PYmo6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVFdmVudEV4Y2VwdGlvbihldmVudE9iaiwgZXhjZXB0aW9uUmVmLCBleGNlcHRpb25PYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqLCBleGNlcHRpb25SZWYsIGV4Y2VwdGlvbk9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYW4gZXhjZXB0aW9uIGZyb20gYSByZXBlYXRpbmcgZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gVGhlIGluZGV4LCBpZCBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV4aXN0aW5nIHJlcGVhdGluZyBTY2hlZHVsZXIgZXZlbnQuXG5cdCogQHBhcmFtIHthbnl9IGluZGV4LiBUaGUgaW5kZXgsIGlkLCBvY2N1cmFuY2UgZGF0ZSBvciBhbiBvYmplY3QgcmVmZXJlbmNlIG9mIGFuIGV2ZW50IGV4Y2VwdGlvbiB0aGF0IGJlbG9uZ3MgdG8gdGhlIHRhcmdldCByZXBlYXRpbmcgZXZlbnQuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUV2ZW50RXhjZXB0aW9uKGV2ZW50T2JqOiBhbnksIGluZGV4OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRFeGNlcHRpb24oZXZlbnRPYmosIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudEV4Y2VwdGlvbihldmVudE9iaiwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgcG9wdXAgV2luZG93IGZvciBzcGVjaWZpYyBldmVudCBFZGl0aW5nLiBcblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYSBldmVudCBvciB0aGUgYWN0dWFsIGV2ZW50IG9iamVjdCB0byBiZSBlZGl0ZWQuXG5cdCovXG4gICAgcHVibGljIG9wZW5XaW5kb3coaW5kZXg6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuV2luZG93KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuV2luZG93KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBwb3B1cCB3aW5kb3cuIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZVdpbmRvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VXaW5kb3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVdpbmRvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQcmVwYXJlcyB0aGUgU2NoZWR1bGVyIGZvciBwcmludGluZyBieSBvcGVuaW5nIHRoZSBicm93c2VyJ3MgUHJpbnQgUHJldmlldy4gXG5cdCovXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNjcm9sbHMgdGhlIFNjaGVkdWxlciB0byBhIERhdGUuIFxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZS4gVGhlIGRhdGUgdG8gc2Nyb2xsIHRvLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gc3RyaWN0U2Nyb2xsPy4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNjcm9sbCBzdHJpY3RseSB0byB0aGUgZGF0ZSBvciBub3QuIFRoaXMgbWVhbiBzdGhhdCB0aGUgU2NoZWR1bGVyIHdsbCBzY3JvbGwgdG8gdGhlIGJlZ2luaW5nIG9mIHRoZSBjZWxsIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHRhcmdldCBkYXRlLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b1Njcm9sbD8uIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBwb3NpdGlvbnMgYW5kIGVsZW1lbnQgYm91bmRzLCB0aGVuIGFkZHMgYW4gb2Zmc2V0IHRvIHNjcm9sbCB3aXRoaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlldy5cblx0Ki9cbiAgICBwdWJsaWMgc2Nyb2xsVG9EYXRlKGRhdGU6IERhdGUsIHN0cmljdFNjcm9sbD86IGJvb2xlYW4sIGF1dG9TY3JvbGw/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbFRvRGF0ZShkYXRlLCBzdHJpY3RTY3JvbGwsIGF1dG9TY3JvbGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbFRvRGF0ZShkYXRlLCBzdHJpY3RTY3JvbGwsIGF1dG9TY3JvbGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBOYXZpZ2F0ZXMgdGhlIFNjaGVkdWxlciB0byBhIERhdGUuIFxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZS4gVGhlIGRhdGUgdG8gbmF2aWdhdGUgdG8uXG5cdCovXG4gICAgcHVibGljIG5hdmlnYXRlVG9EYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubmF2aWdhdGVUb0RhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubmF2aWdhdGVUb0RhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNjcm9sbHMgdGhlIFNjaGVkdWxlciB0byBhbiBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGluZGV4LiBUaGUgaW5kZXggb2YgYSBTY2hlZHVsZXIgZXZlbnQgb3IgdGhlIGFjdHVhbCBldmVudCBvYmplY3QgdG8gc2Nyb2xsIHRvLlxuXHQqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0V2ZW50KGluZGV4OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9FdmVudChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9FdmVudChpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIGEgY3VzdG9tIG5vdGlmaWNhdGlvbi4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuIFRoZSBub3RpZmljYXRpb24gbWVzc2FnZS5cblx0KiBAcGFyYW0ge2FueX0gdG9hc3RTZXR0aW5ncy4gU21hcnQuVG9hc3Qgc2V0dGluZ3MgdG8gYmUgYXBwbGllZCB0byB0aGUgVG9hc3QgZWxlbWVudCB3aGVuIG9wZW5pbmcgdGhlIG5vdGlmaWNhdGlvbi5cblx0Ki9cbiAgICBwdWJsaWMgb3Blbk5vdGlmaWNhdGlvbihtZXNzYWdlOiBzdHJpbmcsIHRvYXN0U2V0dGluZ3M6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuTm90aWZpY2F0aW9uKG1lc3NhZ2UsIHRvYXN0U2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5Ob3RpZmljYXRpb24obWVzc2FnZSwgdG9hc3RTZXR0aW5ncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsb3NlcyBhbGwgbm90aWZpY2F0aW9ucy4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlTm90aWZpY2F0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VOb3RpZmljYXRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYWxsIG9jY3VyYW5jZXMgb2YgYW4gZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZuZXQgb2JqZWN0LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBjb3VudC4gVGhlIG51bWJlciBvZiBvY2N1cmFuY2VzIHRvIHJldHVybi4gQnkgZGVmYXVsdCAxMDAgZGF0ZSBvY2N1cmFuY2VzIG9mIHRoZSBldmVudCBhcmUgcmV0dXJuZWQuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VzKGV2ZW50T2JqOiBhbnksIGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZXMoZXZlbnRPYmosIGNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlcyhldmVudE9iaiwgY291bnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFsbCBvY2N1cmFuY2VzIG9mIGFuIGV2ZW50IGJldHdlZW4gdHdvIGRhdGVzLiBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdC5cblx0KiBAcGFyYW0ge0RhdGV9IGRhdGVGcm9tLiBUaGUgc3RhcnQgZGF0ZS5cblx0KiBAcGFyYW0ge0RhdGV9IGRhdGVUby4gVGhlIGVuZCBkYXRlLlxuXHQqL1xuICAgIHB1YmxpYyBvY2N1cnJlbmNlc0JldHdlZW4oZXZlbnRPYmo6IGFueSwgZGF0ZUZyb206IERhdGUsIGRhdGVUbzogRGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlc0JldHdlZW4oZXZlbnRPYmosIGRhdGVGcm9tLCBkYXRlVG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VzQmV0d2VlbihldmVudE9iaiwgZGF0ZUZyb20sIGRhdGVUbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGZpcnN0IG9jY3VyYW5jZSBvZiBhbiBldmVudCBhZnRlciBhIGRhdGUuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBkYXRlLiBUaGUgZGF0ZSBhZnRlciB3aGljaCB0aGUgZmlyc3Qgb2NjdXJhbmNlIG9mIHRoZSBldmVudCB3aWxsIGJlIHJldHVybmVkLlxuXHQqL1xuICAgIHB1YmxpYyBvY2N1cnJlbmNlQWZ0ZXIoZXZlbnRPYmo6IGFueSwgZGF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VBZnRlcihldmVudE9iaiwgZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZUFmdGVyKGV2ZW50T2JqLCBkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgbGFzdCBvY2N1cmFuY2Ugb2YgYW4gZXZlbnQgYmVmb3JlIGEgZGF0ZS4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGRhdGUuIFRoZSBkYXRlIGJlZm9yZSB3aGljaCB0aGUgZmlyc3Qgb2NjdXJhbmNlIG9mIHRoZSBldmVudCB3aWxsIGJlIHJldHVybmVkLlxuXHQqL1xuICAgIHB1YmxpYyBvY2N1cnJlbmNlQmVmb3JlKGV2ZW50T2JqOiBhbnksIGRhdGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlQmVmb3JlKGV2ZW50T2JqLCBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlQmVmb3JlKGV2ZW50T2JqLCBkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZGF0ZVN0YXJ0L2RhdGVFbmQgb2YgYSB0aW1lbGluZSBjZWxsLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjZWxsLiBBIFNjaGVkdWxlciB0aW1lbGluZSBjZWxsIGVsZW1lbnQuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENlbGxEYXRlUmFuZ2UoY2VsbCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDZWxsRGF0ZVJhbmdlKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIHRvb2x0aXAoZXZlbnQgbWVudSkgZm9yIGFuIGV2ZW50LiBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdCBvciBpdCdzIGluZGV4LlxuXHQqL1xuICAgIHB1YmxpYyBvcGVuRXZlbnRUb29sdGlwKGV2ZW50T2JqOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkV2ZW50VG9vbHRpcChldmVudE9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbkV2ZW50VG9vbHRpcChldmVudE9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsb3NlcyB0aGUgZXZlbnQgdG9vbHRpcCAoZXZlbnQgbWVudSkuIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZUV2ZW50VG9vbHRpcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VFdmVudFRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZUV2ZW50VG9vbHRpcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgb3IgZmFsc2Ugd2hldGhlciB0aGUgZGF0ZSBpcyByZXN0cmljdGVkIG9yIG5vdC4gXG5cdCogQHBhcmFtIHtEYXRlfSBkYXRlLiBBIERhdGUgb2JqZWN0LlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaXNEYXRlUmVzdHJpY3RlZChkYXRlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmlzRGF0ZVJlc3RyaWN0ZWQoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgb3IgZmFsc2Ugd2hldGhlciB0aGUgaG91ciBpcyByZXN0cmljdGVkIG9yIG5vdC4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBEYXRlfSBob3VyLiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgYW4gaG91ciAoIDAgdG8gMjMgKSBvciBhIERhdGUgb2JqZWN0LlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaXNIb3VyUmVzdHJpY3RlZChob3VyKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmlzSG91clJlc3RyaWN0ZWQoaG91cik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgb3IgZmFsc2Ugd2hldGhlciB0aGUgZXZlbnQgaXMgcmVzdHJpY3RlZCBvciBub3QuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgIG9iamVjdCBvciBhIGRpcmVjdCBldmVudCBIVE1MRWxlbWVudCBpbnN0YW5jZS5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGlzRXZlbnRSZXN0cmljdGVkKGV2ZW50T2JqKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmlzRXZlbnRSZXN0cmljdGVkKGV2ZW50T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlbGV0ZXMgdGhlIGN1cnJlbnQgdW5kby9yZWRvIGhpc3RvcnkuIFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZGVsZXRlVW5kb1JlZG9IaXN0b3J5KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5kZWxldGVVbmRvUmVkb0hpc3RvcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB3aGV0aGVyIGl0IGlzIHBvc3NpYmxlIHRvIHJlZG8gYW4gYWN0aW9uLiBcblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGNhblJlZG8oKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmNhblJlZG8oKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB3aGV0aGVyIGl0IGlzIHBvc3NiaWxlIHRvIHVuZG8gYW4gYWN0aW9uLiBcblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGNhblVuZG8oKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmNhblVuZG8oKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlZG8gdGhlIG5leHQgZXZlbnQgbW9kaWZpY2F0aW9uLiBcblx0KiBAcGFyYW0ge251bWJlcn0gc3RlcD8uIEEgc3RlcCB0byByZWRvIHRvLlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgcmVkbyhzdGVwPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5yZWRvKHN0ZXApO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVW5kbyB0aGUgbGFzdCBldmVudCBtb2RpZmljYXRpb24uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzdGVwPy4gQSBzdGVwIHRvIHVuZG8gdG8uXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyB1bmRvKHN0ZXA/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnVuZG8oc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25CZWdpblVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdiZWdpblVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmVnaW5VcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FbmRVcGRhdGUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNoYW5naW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUNoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1DaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNoYW5naW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1JbnNlcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUluc2VydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtUmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbVVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZpZXdDaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld0NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZpZXdDaGFuZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd2aWV3Q2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50U2hvcnRjdXRLZXlIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudFNob3J0Y3V0S2V5LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50U2hvcnRjdXRLZXknLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50U2hvcnRjdXRLZXlIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkYXRlQ2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkYXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlQ2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BvdmVyQ2VsbEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyb3BvdmVyQ2VsbC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wb3ZlckNlbGwnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BvdmVyQ2VsbEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FZGl0RGlhbG9nT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVkaXREaWFsb2dPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXREaWFsb2dPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVkaXREaWFsb2dDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRWRpdERpYWxvZ0Nsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ0Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51Q2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51Q2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXZlbnRNZW51T3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdldmVudE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdldmVudE1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXZlbnRNZW51Q2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdldmVudE1lbnVDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGF0ZU1lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGVNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRhdGVNZW51Q2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51T3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZpZXdNZW51T3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd2aWV3TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51T3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25WaWV3TWVudUNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uTm90aWZpY2F0aW9uT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25PcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snbm90aWZpY2F0aW9uQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ob3RpZmljYXRpb25DbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25DbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snbm90aWZpY2F0aW9uQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVnaW5VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2hhbmdpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DaGFuZ2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1JbnNlcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtSW5zZXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtUmVtb3ZlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbVJlbW92ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVVwZGF0ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aWV3Q2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3Q2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3Q2hhbmdpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aWV3Q2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdDaGFuZ2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50U2hvcnRjdXRLZXknLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50U2hvcnRjdXRLZXlIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlQ2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BvdmVyQ2VsbEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3BvdmVyQ2VsbCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcG92ZXJDZWxsSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ09wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VkaXREaWFsb2dPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ0Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nQ2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ0Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdldmVudE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVNZW51T3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RhdGVNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlld01lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3TWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aWV3TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3TWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbm90aWZpY2F0aW9uT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snbm90aWZpY2F0aW9uT3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbm90aWZpY2F0aW9uQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25DbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snbm90aWZpY2F0aW9uQ2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=