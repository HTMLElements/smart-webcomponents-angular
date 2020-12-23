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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
        *   target - The dialog window that is opening.
        *   item - The event object that is going to be edited.
        *   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
        */
        this.onEditDialogOpening = new EventEmitter();
        /** @description This event is triggered when the user opens the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
        *   target - The dialog window that is opened.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        */
        this.onEditDialogOpen = new EventEmitter();
        /** @description This event is triggered when the user closes the event dialog window.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
        *   target - The dialog window that is closed.
        *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
        *   item - The event object that is being edited.
        */
        this.onEditDialogClose = new EventEmitter();
        /** @description This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
        *   target - The dialog window that is closing.
        *   item - The event object that is edited.
        *   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
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
    /** @description Determines the timeZone that the dates will be displayed in. Accepts values from the IANA time zone database. By default it uses the local time zone. */
    get timeZone() {
        return this.nativeElement ? this.nativeElement.timeZone : undefined;
    }
    set timeZone(value) {
        this.nativeElement ? this.nativeElement.timeZone = value : undefined;
    }
    /** @description Allows to display multiple timeZones at once. Accepts an array values from the IANA time zone database. By default it uses the local time zone. */
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
    /** @description Determines the viewing date range of the timeline. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view. */
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
    /** @description A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited. */
    get windowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
    }
    set windowCustomizationFunction(value) {
        this.nativeElement ? this.nativeElement.windowCustomizationFunction = value : undefined;
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
    /** @description Inserts an event.
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
    /** @description Updates an event.
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
    /** @description Removes an event.
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
    */
    scrollToDate(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date);
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
    /** @description Returns the first occurance of an event before a date.
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
    * @param {Date} date. A Scheduler event object or it's index.
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
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
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
        that.eventHandlers['eventShortcutKeyHandler'] = (event) => { that.onEventShortcutKey.emit(event); };
        that.nativeElement.addEventListener('eventShortcutKey', that.eventHandlers['eventShortcutKeyHandler']);
        that.eventHandlers['dateChangeHandler'] = (event) => { that.onDateChange.emit(event); };
        that.nativeElement.addEventListener('dateChange', that.eventHandlers['dateChangeHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
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
], SchedulerComponent.prototype, "events", null);
tslib_1.__decorate([
    Input()
], SchedulerComponent.prototype, "firstDayOfWeek", null);
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
], SchedulerComponent.prototype, "hideTodayButton", null);
tslib_1.__decorate([
    Input()
], SchedulerComponent.prototype, "hideViewMenuCheckableItems", null);
tslib_1.__decorate([
    Input()
], SchedulerComponent.prototype, "hideWeekend", null);
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
], SchedulerComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], SchedulerComponent.prototype, "scrollButtonsPosition", null);
tslib_1.__decorate([
    Input()
], SchedulerComponent.prototype, "shadeUntilCurrentTime", null);
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
export { SchedulerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuc2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3NjaGVkdWxlci8iLCJzb3VyY2VzIjpbInNtYXJ0LnNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTeEMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxXQUFXO0lBQ2xELFlBQVksR0FBMEI7UUFDckMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUF3dkJsQzs4Q0FDc0M7UUFDNUIsa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs4Q0FDc0M7UUFDNUIsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7OztVQUlFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7OztVQUtFO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7O1VBR0U7UUFDUSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7VUFHRTtRQUNRLGlCQUFZLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkU7Ozs7VUFJRTtRQUNRLGlCQUFZLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkU7Ozs7VUFJRTtRQUNRLGlCQUFZLEdBQThC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QVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxD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QUFULE1BQU0sRUFBRTtxREFBMkQ7QUFTMUQ7SUFBVCxNQUFNLEVBQUU7eURBQStEO0FBUzlEO0lBQVQsTUFBTSxFQUFFO3VEQUE2RDtBQVE1RDtJQUFULE1BQU0sRUFBRTsrREFBcUU7QUFRcEU7SUFBVCxNQUFNLEVBQUU7NERBQWtFO0FBUWpFO0lBQVQsTUFBTSxFQUFFOzZEQUFtRTtBQVFsRTtJQUFULE1BQU0sRUFBRTsrREFBcUU7QUFTcEU7SUFBVCxNQUFNLEVBQUU7Z0VBQXNFO0FBU3JFO0lBQVQsTUFBTSxFQUFFOzZEQUFtRTtBQVNsRTtJQUFULE1BQU0sRUFBRTs4REFBb0U7QUFTbkU7SUFBVCxNQUFNLEVBQUU7Z0VBQXNFO0FBUXJFO0lBQVQsTUFBTSxFQUFFOzhEQUFvRTtBQVFuRTtJQUFULE1BQU0sRUFBRTsyREFBaUU7QUFRaEU7SUFBVCxNQUFNLEVBQUU7NERBQWtFO0FBUWpFO0lBQVQsTUFBTSxFQUFFOzhEQUFvRTtBQU1uRTtJQUFULE1BQU0sRUFBRTswREFBZ0U7QUFNL0Q7SUFBVCxNQUFNLEVBQUU7MkRBQWlFO0FBTWhFO0lBQVQsTUFBTSxFQUFFOzBEQUFnRTtBQU0vRDtJQUFULE1BQU0sRUFBRTsyREFBaUU7QUFNaEU7SUFBVCxNQUFNLEVBQUU7OERBQW9FO0FBTW5FO0lBQVQsTUFBTSxFQUFFOytEQUFxRTtBQXgrQmxFLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsb0NBQW9DO0tBQzlDLENBQUM7R0FFVyxrQkFBa0IsQ0F3cUQ5QjtTQXhxRFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBTY2hlZHVsZXJSZXBlYXRGcmVxLCBTY2hlZHVsZXJOb3RpZmljYXRpb25UeXBlLCBTY2hlZHVsZXJEYXlGb3JtYXQsIFNjaGVkdWxlckdyb3VwT3JpZW50YXRpb24sIFNjaGVkdWxlckhvdXJGb3JtYXQsIFNjaGVkdWxlckhlYWRlckRhdGVQb3NpdGlvbiwgU2NoZWR1bGVySGVhZGVyTmF2aWdhdGlvblN0eWxlLCBTY2hlZHVsZXJIZWFkZXJWaWV3UG9zaXRpb24sIEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBNaW51dGVGb3JtYXQsIE1vbnRoRm9ybWF0LCBSZXNpemVIYW5kbGVzVmlzaWJpbGl0eSwgU2NoZWR1bGVyU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uLCBTY2hlZHVsZXJUaW1lbGluZURheVNjYWxlLCBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHksIFNjaGVkdWxlclZpZXdUeXBlLCBTY2hlZHVsZXJWaWV3cywgU2NoZWR1bGVyVmlld1NlbGVjdG9yVHlwZSwgV2Vla0RheUZvcm1hdCwgWWVhckZvcm1hdCwgU2NoZWR1bGVyRGF0YUV4cG9ydCwgU2NoZWR1bGVyRGF0YVNvdXJjZSwgU2NoZWR1bGVyRGF0YVNvdXJjZVJlcGVhdCwgU2NoZWR1bGVyTm90aWZpY2F0aW9uLCBTY2hlZHVsZXJFdmVudCwgU2NoZWR1bGVyRXZlbnRSZXBlYXQsIFNjaGVkdWxlclJlc291cmNlLCBTY2hlZHVsZXJTdGF0dXNlLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBEYXRhQWRhcHRlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IFNjaGVkdWxlclJlcGVhdEZyZXEsIFNjaGVkdWxlck5vdGlmaWNhdGlvblR5cGUsIFNjaGVkdWxlckRheUZvcm1hdCwgU2NoZWR1bGVyR3JvdXBPcmllbnRhdGlvbiwgU2NoZWR1bGVySG91ckZvcm1hdCwgU2NoZWR1bGVySGVhZGVyRGF0ZVBvc2l0aW9uLCBTY2hlZHVsZXJIZWFkZXJOYXZpZ2F0aW9uU3R5bGUsIFNjaGVkdWxlckhlYWRlclZpZXdQb3NpdGlvbiwgSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHksIE1pbnV0ZUZvcm1hdCwgTW9udGhGb3JtYXQsIFJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5LCBTY2hlZHVsZXJTY3JvbGxCdXR0b25zUG9zaXRpb24sIFNjaGVkdWxlclRpbWVsaW5lRGF5U2NhbGUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgU2NoZWR1bGVyVmlld1R5cGUsIFNjaGVkdWxlclZpZXdzLCBTY2hlZHVsZXJWaWV3U2VsZWN0b3JUeXBlLCBXZWVrRGF5Rm9ybWF0LCBZZWFyRm9ybWF0LCBTY2hlZHVsZXJEYXRhRXhwb3J0LCBTY2hlZHVsZXJEYXRhU291cmNlLCBTY2hlZHVsZXJEYXRhU291cmNlUmVwZWF0LCBTY2hlZHVsZXJOb3RpZmljYXRpb24sIFNjaGVkdWxlckV2ZW50LCBTY2hlZHVsZXJFdmVudFJlcGVhdCwgU2NoZWR1bGVyUmVzb3VyY2UsIFNjaGVkdWxlclN0YXR1c2UsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgRGF0YUFkYXB0ZXIgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1zY2hlZHVsZXIsIFtzbWFydC1zY2hlZHVsZXJdJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlckNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxTY2hlZHVsZXI+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBTY2hlZHVsZXI7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFNjaGVkdWxlcjtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8U2NoZWR1bGVyPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LXNjaGVkdWxlcicpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc2Nyb2xsIHNwZWVkIHdoaWxlIGRyYWdnaW5nIGFuIGV2ZW50LiAgKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TY3JvbGxTdGVwKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1Njcm9sbFN0ZXAodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2Nyb2xsU3RlcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb2xvciBzY2hlbWUgZm9yIHRoZSBldmVudCBiYWNrZ3JvdW5kIHNlbGVjdG9yIGluIHRoZSBldmVudCB3aW5kb3cgZWRpdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGNvbG9yU2NoZW1lKCk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbG9yU2NoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xvclNjaGVtZSh2YWx1ZTogc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sb3JTY2hlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy9EaXNhYmxlcyB0aGUgY3VycmVudCB0aW1lIGluZGljYXRvci4gQ3VycmVudCB0aW1lIGluZGljYXRvciBzaG93cyB0aGUgY3VycmVudCB0aW1lIGluIHRoZSBhcHByb3ByaWF0ZSB2aWV3IGNlbGxzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWVJbmRpY2F0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlZnJlc2ggaW50ZXJ2YWwgaW4gc2Vjb25kcyBmb3IgdGhlIGN1cnJlbnRUaW1lSW5kaWNhdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGN1cnJlbnRUaW1lSW5kaWNhdG9ySW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZUluZGljYXRvckludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGNvbnRleHQgbWVudSBpdGVtcyB0aGF0IGFyZSB2aXNpYmxlIHdoZW4gdGhlIENvbnRleHQgTWVudSBpcyBvcGVuZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZXh0TWVudURhdGFTb3VyY2UoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51RGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGV4dE1lbnVEYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVEYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGV2ZW50IGVsZW1lbnRzLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgZXZlbnRzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGV2ZW50IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBldmVudENvbnRlbnQgLSB0aGUgY29udGVudCBob2xkZXIgZm9yIHRoZSBldmVudCxldmVudE9iaiAtIHRoZSBldmVudCBvYmplY3QuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50VGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiB0aGUgZXZlbnQgY29sbGVjdG9yIGVsZW1lbnRzLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgZXZlbnRzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGV2ZW50IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBldmVudENvbnRlbnQgLSB0aGUgY29udGVudCBob2xkZXIgZm9yIHRoZSBldmVudCxldmVudE9iaiAtIHRoZSBldmVudCBvYmplY3QuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRDb2xsZWN0b3JUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50Q29sbGVjdG9yVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgaG93IHRoZSBldmVudHMgaW5zaWRlIHRoZSBTY2hlZHVsZXIgYXJlIHJlbmRlcmVkLmNsYXNzaWMgLSB0aGUgZXZlbnRzIGFyZSBhcnJhbmdlZCBuZXh0IHRvIGVhY2ggb3RoZXIgYW5kIHRyeSB0byBmaXQgaW5zaWRlIHRoZSBjZWxscy5tb2Rlcm4gLSB0aGUgZXZlbnRzIG9iZXkgdGhlIENTUyBwcm9wZXJ0eSB0aGF0IGRldGVybWluZXMgdGhlaXIgc2l6ZSBhbmQgaWYgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIGluc2lkZSB0aGUgY2VsbCBmb3IgYWxsIGV2ZW50cyB0byBhcHBlYXIsIGFuIGV2ZW50IGNvbGxlY3RvciBpcyBjcmVhdGVkIHRvIGhvbGQgdGhlIHJlc3Qgb2YgdGhlIGV2ZW50cy4gT24gbW9iaWxlIHBob25lcyBvbmx5IGNvbGxlY3RvcnMgYXJlIGNyZWF0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBldmVudFJlbmRlck1vZGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV2ZW50UmVuZGVyTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRSZW5kZXJNb2RlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRSZW5kZXJNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGV2ZW50IG1lbnUgaXRlbXMgKHRvb2x0aXApLiBXaGVuIGNsaWNrZWQgb24gYW4gZXZlbnQgZWxlbWVudCBhbiBldmVudCBtZW51IHdpdGggZGV0YWlscyBvcGVucy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGV2ZW50cyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBldmVudCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogZXZlbnRDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgZXZlbnQsZXZlbnRPYmogLSB0aGUgZXZlbnQgb2JqZWN0Li4gV2hlbiB1c2luZyBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGl0J3MgcG9zc2libGUgdG8gYWRkIHByb3BlcnR5IGJpbmRpbmdzIGluc2lkZSB0aGUgdGVtcGxhdGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byB0aGUgY29ycmVzcG9uZGluZyBvYmplY3QgcHJvcGVydGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGV2ZW50VG9vbHRpcFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFRvb2x0aXBUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXZlbnRUb29sdGlwVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ldmVudFRvb2x0aXBUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSB0aW1lbGluZSBjZWxscy4gSXQgY2FuIGJlIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGNlbGxzIG9yIGl0J3MgaWQgYXMgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGNlbGwgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGNlbGxDb250ZW50IC0gdGhlIGNvbnRlbnQgaG9sZGVyIGZvciB0aGUgY2VsbCxjZWxsRGF0ZSAtIHRoZSBjZWxsIGRhdGUuLiBXaGVuIHVzaW5nIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgaXQncyBwb3NzaWJsZSB0byBhZGQgcHJvcGVydHkgYmluZGluZ3MgaW5zaWRlIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNlbGxUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2VsbFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjZWxsVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jZWxsVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY3VycmVudGx5IHZpc2libGUgZGF0ZSBmb3IgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGVDdXJyZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlQ3VycmVudCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0ZUN1cnJlbnQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlQ3VycmVudCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBTY2hlZHVsZXJzJ3MgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogU2NoZWR1bGVyRGF0YUV4cG9ydCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhRXhwb3J0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhRXhwb3J0KHZhbHVlOiBTY2hlZHVsZXJEYXRhRXhwb3J0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZXZlbnRzIHRoYXQgd2lsbCBiZSBsb2FkZWQgaW5zaWRlIHRoZSBUaW1lbGluZS4gRWFjaCBldmVudCByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2UoKTogU2NoZWR1bGVyRGF0YVNvdXJjZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IFNjaGVkdWxlckRhdGFTb3VyY2VbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgdGhhdCBjYW4gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIHRleHQgaW5zaWRlIHRoZSBkYXRlIHNlbGVjdG9yIGxvY2F0ZWQgaW4gdGhlIGhlYWRlci4gVGhlIGNhbGxiYWNrIGhhcyBvbmUgcGFyYW1ldGVyIC0gdGhlIGN1cnJlbnQgZGF0ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGVTZWxlY3RvckZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU2VsZWN0b3JGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0ZVNlbGVjdG9yRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlU2VsZWN0b3JGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXkgZm9ybWF0IG9mIHRoZSBkYXRlcyBpbiB0aGUgdGltZWxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXlGb3JtYXQoKTogU2NoZWR1bGVyRGF5Rm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheUZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF5Rm9ybWF0KHZhbHVlOiBTY2hlZHVsZXJEYXlGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF5Rm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBhdXRvIHNjcm9sbGluZyBvZiB0aGUgdGltZWxpbmUgd2hpbGUgZHJhZ2dpbmcvcmVzaXppbmcgYW4gZXZlbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlQXV0b1Njcm9sbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVBdXRvU2Nyb2xsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlQXV0b1Njcm9sbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQXV0b1Njcm9sbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBkcmFnZ2luZyBvZiBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlRHJhZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEcmFnIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlRHJhZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRHJhZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBkcm9wcGluZyBvZiBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlRHJvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVEcm9wIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlRHJvcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRHJvcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyByZXNpemluZyBvZiBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlUmVzaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVJlc2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlUmVzaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBjZWxsIHNlbGVjdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VsZWN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlU2VsZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWxlY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIHdpbmRvdyBlZGl0b3IgZm9yIHRoZSBldmVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlV2luZG93RWRpdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVdpbmRvd0VkaXRvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVdpbmRvd0VkaXRvcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlV2luZG93RWRpdG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBjb250ZXh0IG1lbnUgb2YgdGhlIGV2ZW50cyBhbmQgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlQ29udGV4dE1lbnUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQ29udGV4dE1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVDb250ZXh0TWVudSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQ29udGV4dE1lbnUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIGV2ZW50IG1lbnUgdGhhdCBhcHBlYXJzIHdoZW4gYW4gZXZlbnQvY29sbGVjdG9yIGhhcyBiZWVuIGNsaWNrZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlRXZlbnRNZW51KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUV2ZW50TWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZUV2ZW50TWVudSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRXZlbnRNZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSB2aWV3IG1lbnUgdGhhdCBhbGxvd3MgdG8gc2VsZWN0IHRoZSBjdXJyZW50IFNjaGVkdWxlciB2aWV3LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVZpZXdNZW51KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVZpZXdNZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlVmlld01lbnUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVZpZXdNZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBkYXRlIG1lbnUgdGhhdCBhbGxvd3MgdG8gc2VsZWN0IHRoZSBjdXJyZW50IFNjaGVkdWxlciBkYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZURhdGVNZW51KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURhdGVNZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlRGF0ZU1lbnUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZURhdGVNZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgdGhhdCBjYW4gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIGRyYWcgZmVlZGJhY2sgdGhhdCBhcHBlYXJzIHdoZW4gYW4gZXZlbnQgaXMgZHJhZ2dlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyYWdGZWVkYmFja0Zvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnRmVlZGJhY2tGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhZ0ZlZWRiYWNrRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnRmVlZGJhY2tGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBvZmZzZXQgZm9yIHRoZSBkcmFnIGZlZWRiYWNrIGZyb20gdGhlIHBvaW50ZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmFnT2Zmc2V0KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnT2Zmc2V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmFnT2Zmc2V0KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgIGFuIGFycmF5IG9mIGFsbCBTY2hlZHVsZXIgZXZlbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXZlbnRzKCk6IFNjaGVkdWxlckV2ZW50W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBldmVudHModmFsdWU6IFNjaGVkdWxlckV2ZW50W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXZlbnRzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrIGZvciB0aGUgU2NoZWR1bGVyLiBCeSBkZWZhdWx0IGl0J3MgU3VuZGF5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpcnN0RGF5T2ZXZWVrIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaXJzdERheU9mV2Vlayh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpcnN0RGF5T2ZXZWVrID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZXZlbnRzIHdpbGwgYmUgZ3JvdXBlZCBieSBkYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBCeURhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEJ5RGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBCeURhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBCeURhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZ3JvdXBpbmcgb3JpZW50YXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cE9yaWVudGF0aW9uKCk6IFNjaGVkdWxlckdyb3VwT3JpZW50YXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBPcmllbnRhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBPcmllbnRhdGlvbih2YWx1ZTogU2NoZWR1bGVyR3JvdXBPcmllbnRhdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cE9yaWVudGF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIGdyb3VwIGNlbGxzIHRoYXQgYXJlIHZpc2libGUgaW5zaWRlIHRoZSBoZWFkZXIuIEl0IGNhbiBiZSBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBjZWxscyBvciBpdCdzIGlkIGFzIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBncm91cCBjZWxsIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBjZWxsQ29udGVudCAtIHRoZSBjb250ZW50IGhvbGRlciBmb3IgdGhlIGdyb3VwIGNlbGwuY2VsbE9iaiAtIHRoZSBncm91cCBjZWxsIG9iamVjdC4uIFdoZW4gdXNpbmcgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCBpdCdzIHBvc3NpYmxlIHRvIGFkZCBwcm9wZXJ0eSBiaW5kaW5ncyBpbnNpZGUgdGhlIHRlbXBsYXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cFRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZXNvdXJjZXMgdGhhdCB0aGUgZXZlbnRzIGFyZSBncm91cGVkIGJ5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3Vwcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBlbmQgaG91ciB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluICdkYXknIGFuZCAnd2Vlaycgdmlld3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRW5kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3VyRW5kKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckVuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzdGFydCBob3VyIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gJ2RheScgYW5kICd3ZWVrJyB2aWV3cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhvdXJTdGFydCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91clN0YXJ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3VyU3RhcnQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyU3RhcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0dGluZyBvZiBob3VycyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3VyRm9ybWF0KCk6IFNjaGVkdWxlckhvdXJGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG91ckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG91ckZvcm1hdCh2YWx1ZTogU2NoZWR1bGVySG91ckZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3VyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGhlYWRlciBvZiB0aGUgU2NoZWR1bGVyLiBJdCBjYW4gYmUgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCwgaXQncyBpZCBhcyBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBoZWFkZXJDb250ZW50IC0gdGhlIGhlYWRlciBjb250YWluZXIuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgRGF0ZSBzZWxlY3RvciBpbnNpZGUgdGhlIEhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlckRhdGVQb3NpdGlvbigpOiBTY2hlZHVsZXJIZWFkZXJEYXRlUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyRGF0ZVBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJEYXRlUG9zaXRpb24odmFsdWU6IFNjaGVkdWxlckhlYWRlckRhdGVQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJEYXRlUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHN0eWxpbmcgb2YgdGhlIEhlYWRlciBuYXZpZ2F0aW9uIGNvbnRyb2xzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyTmF2aWdhdGlvblN0eWxlKCk6IFNjaGVkdWxlckhlYWRlck5hdmlnYXRpb25TdHlsZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJOYXZpZ2F0aW9uU3R5bGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhlYWRlck5hdmlnYXRpb25TdHlsZSh2YWx1ZTogU2NoZWR1bGVySGVhZGVyTmF2aWdhdGlvblN0eWxlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlck5hdmlnYXRpb25TdHlsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIHZpZXcgc2VsZWN0b3IgY29udHJvbCBpbnNpZGUgdGhlIEhlYWRlciBvZiB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclZpZXdQb3NpdGlvbigpOiBTY2hlZHVsZXJIZWFkZXJWaWV3UG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyVmlld1Bvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJWaWV3UG9zaXRpb24odmFsdWU6IFNjaGVkdWxlckhlYWRlclZpZXdQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJWaWV3UG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSAnQWxsIERheScgY29udGFpbmVyIHdpdGggdGhlIGFsbCBkYXkgZXZlbnRzIGlzIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlQWxsRGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUFsbERheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZUFsbERheSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlQWxsRGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZGF5cyBzZXQgYnkgJ25vbndvcmtpbmdEYXlzJyBwcm9wZXJ0eSBhcmUgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVOb253b3JraW5nV2Vla2RheXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTm9ud29ya2luZ1dlZWtkYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlTm9ud29ya2luZ1dlZWtkYXlzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVOb253b3JraW5nV2Vla2RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSAnVG9kYXknIGJ1dHRvbiBpcyBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVRvZGF5QnV0dG9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvZGF5QnV0dG9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlVG9kYXlCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvZGF5QnV0dG9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgY2hlY2thYmxlIGl0ZW1zIGluIHRoZSB2aWV3IHNlbGVjdGlvbiBtZW51IGFyZSBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVmlld01lbnVDaGVja2FibGVJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVZpZXdNZW51Q2hlY2thYmxlSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB3ZWVrZW5kIGRheXMgYXJlIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlV2Vla2VuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVXZWVrZW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlV2Vla2VuZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlV2Vla2VuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdlYXRoZXIgb3Igbm90IGhvcml6b250YWwgc2Nyb2xsYmFyIGlzIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIFNjaGVkdWxlci4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGV0bWluZXMgdGhlIG1heGltdW0gdmlldyBkYXRlIGZvciB0aGUgU2NoZWR1bGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1heCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRldG1pbmVzIHRoZSBtaW5pbXVtIHZpZXcgZGF0ZSBmb3IgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW4odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgZWxlbWVudCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW51dGUgZm9ybWF0dGluZyBpbnNpZGUgdGhlIFNjaGVkdWxlci4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbnV0ZUZvcm1hdCgpOiBNaW51dGVGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWludXRlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW51dGVGb3JtYXQodmFsdWU6IE1pbnV0ZUZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW51dGVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbW9udGggbmFtZSBmb3JtYXR0aW5nIGluc2lkZSB0aGUgU2NoZWR1bGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9udGhGb3JtYXQoKTogTW9udGhGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1vbnRoRm9ybWF0KHZhbHVlOiBNb250aEZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb250aEZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBub253b3JraW5nIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwIHRvIDYsIHdoZXJlIDAgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBhbmQgNiBpcyB0aGUgbGFzdCBkYXkuIE5vbndvcmtpbmcgZGF5cyB3aWxsIGJlIGNvbG9yZWQgZGlmZmVyZW50bHkgaW5zaWRlIHRoZSBUaW1lbGluZS4gVGhlIGNvbG9yIGlzIGRldGVybWluZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nRGF5cygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5vbndvcmtpbmdEYXlzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0RheXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbm9ud29ya2luZyBob3VycyBvZiB0aGUgZGF5LiBIb3VycyBhcmUgcmVwcmVzZW50ZWQgYXMgbnVtYmVycyBpbnNpZGUgYW4gYXJyYXksIGhvd2V2ZXIgcmFuZ2VzIG9mIGhvdXJzIGNhbiBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IHdpdGggc3RhcnRpbmcgYW5kIGVuZGluZyBob3VyIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBJbiB0aGUgdGltbGluZSB0aGUgY2VsbHMgdGhhdCByZXByZXNlbnQgbm9ud29ya2luZyBkYXlzIGFyZSBjb2xvcmVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHJlc3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBub253b3JraW5nSG91cnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vbndvcmtpbmdIb3VycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbm9ud29ya2luZ0hvdXJzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubm9ud29ya2luZ0hvdXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGludGVydmFsIChpbiBzZWNvbmRzKSBhdCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGNoZWNrIGZvciBub3RpZmljYXRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbm90aWZpY2F0aW9uSW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vdGlmaWNhdGlvbkludGVydmFsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBub3RpZmljYXRpb25JbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5vdGlmaWNhdGlvbkludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHJlc2l6ZSBoYW5kbGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzaXplSGFuZGxlc1Zpc2liaWxpdHkoKTogUmVzaXplSGFuZGxlc1Zpc2liaWxpdHkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplSGFuZGxlc1Zpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZUhhbmRsZXNWaXNpYmlsaXR5KHZhbHVlOiBSZXNpemVIYW5kbGVzVmlzaWJpbGl0eSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVIYW5kbGVzVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByYXRlIGF0IHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgcmVmcmVzaCBpdCdzIGNvbnRlbnQgb24gZWxlbWVudCByZXNpemUuIEJ5IGRlZmF1bHQgaXQncyByZWZyZXNoIGltbWVkaWF0ZWx5LiBUaGlzIHByb3BlcnR5IGlzIHVzZWQgZm9yIGVsZW1lbnQgcmVzaXplIHRocm90dGxpbmcgKi9cblx0QElucHV0KClcblx0Z2V0IHJlc2l6ZUludGVydmFsKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbnRlcnZhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplSW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBvZiByZXNvdXJjZXMgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc291cmNlcygpOiBTY2hlZHVsZXJSZXNvdXJjZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzb3VyY2VzKHZhbHVlOiBTY2hlZHVsZXJSZXNvdXJjZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc291cmNlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGFuIGFycmF5IG9mIGRhdGVzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIHRvIGhhdmUgZXZlbnRzIG9uLiBFdmVudHMgdGhhdCBvdmVybGFwIHJlc3RyaWN0ZWQgRGF0ZXMgb3Igc3RhcnQvZW5kIG9uIHRoZW0gd2lsbCBub3QgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzdHJpY3RlZERhdGVzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkRGF0ZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc3RyaWN0ZWREYXRlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc3RyaWN0ZWREYXRlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBkYXRlIG5hdmlnYXRpb24gbmF2aWdhdGlvbiBidXR0b25zIGluc2lkZSB0aGUgaGVhZGVyIG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2Nyb2xsQnV0dG9uc1Bvc2l0aW9uKCk6IFNjaGVkdWxlclNjcm9sbEJ1dHRvbnNQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxCdXR0b25zUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNjcm9sbEJ1dHRvbnNQb3NpdGlvbih2YWx1ZTogU2NoZWR1bGVyU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbEJ1dHRvbnNQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzL0Rpc2FibGVzIHRoZSBjdXJyZW50IHRpbWUgc2hhZGVyLiBJZiBlbmFibGVkIGFsbCBjZWxscyB0aGF0IHJlcHJlc2VudCBwYXN0IHRpbWUgd2lsbCBiZSBzaGFkZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaGFkZVVudGlsQ3VycmVudFRpbWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaGFkZVVudGlsQ3VycmVudFRpbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNoYWRlVW50aWxDdXJyZW50VGltZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaGFkZVVudGlsQ3VycmVudFRpbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmVwZWF0aW5nIGRlbGF5IG9mIHRoZSByZXBlYXQgYnV0dG9ucyBpbnNpZGUgdGhlIGhlYWRlciBvZiB0aGUgZWxlbWVudC4gU3VjaCBidXR0b25zIGFyZSB0aGUgRGF0ZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSB2aWV3IHNjcm9sbCBidXR0b25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3BpbkJ1dHRvbnNEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BpbkJ1dHRvbnNEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BpbkJ1dHRvbnNEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwaW5CdXR0b25zRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgaW5pdGlhbCBkZWxheSBvZiB0aGUgcmVwZWF0IGJ1dHRvbnMgaW5zaWRlIHRoZSBoZWFkZXIgb2YgdGhlIGVsZW1lbnQuIFN1Y2ggYnV0dG9ucyBhcmUgdGhlIERhdGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgdmlldyBzY3JvbGwgYnV0dG9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNwaW5CdXR0b25zSW5pdGlhbERlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0luaXRpYWxEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BpbkJ1dHRvbnNJbml0aWFsRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0luaXRpYWxEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIHRoZSBzdGF0dXNlcyB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24gdGhvdXJnaCB0aGUgd2luZG93IGVkaXRvciBmb3IgdGhlIGV2ZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHN0YXR1c2VzKCk6IFNjaGVkdWxlclN0YXR1c2VbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdGF0dXNlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3RhdHVzZXModmFsdWU6IFNjaGVkdWxlclN0YXR1c2VbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdGF0dXNlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGVsZW1lbnQncyB2aXN1YWwgdGhlbWUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZm9ybWF0IGZ1bmN0aW9uIGZvciB0aGUgSGVhZGVyIG9mIHRoZSBUaW1lbGluZS4gQWxsb3dzIHRvIG1vZGlmeSB0aGUgZGF0ZSBsYWJlbHMgaW4gdGhlIGhlYWRlciBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpbWVsaW5lSGVhZGVyRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZUhlYWRlckZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRhdGUgc2NhbGUgZm9yIHRoZSB0aW1lbGluZSBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpbWVsaW5lRGF5U2NhbGUoKTogU2NoZWR1bGVyVGltZWxpbmVEYXlTY2FsZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lbGluZURheVNjYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lbGluZURheVNjYWxlKHZhbHVlOiBTY2hlZHVsZXJUaW1lbGluZURheVNjYWxlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVsaW5lRGF5U2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy9EaXNhYmxlcyB0aGUgdGljayBtYXJrcyBuZXh0IHRvIHRoZSB0aW1lIGNlbGxzIGluIHRoZSB2ZXJ0aWNhbCBoZWFkZXIgb2YgdGhlIGVsZW1lbnQuIFRpbWUgaGVhZGVyIGFwcGVhcnMgaW4gJ2RheScgYW5kICd3ZWVrJyB2aWV3cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpbWVSdWxlclRpY2tzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lUnVsZXJUaWNrcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZVJ1bGVyVGlja3ModmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aW1lUnVsZXJUaWNrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aW1lWm9uZSB0aGF0IHRoZSBkYXRlcyB3aWxsIGJlIGRpc3BsYXllZCBpbi4gQWNjZXB0cyB2YWx1ZXMgZnJvbSB0aGUgSUFOQSB0aW1lIHpvbmUgZGF0YWJhc2UuIEJ5IGRlZmF1bHQgaXQgdXNlcyB0aGUgbG9jYWwgdGltZSB6b25lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGltZVpvbmUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVab25lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aW1lWm9uZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVab25lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBkaXNwbGF5IG11bHRpcGxlIHRpbWVab25lcyBhdCBvbmNlLiBBY2NlcHRzIGFuIGFycmF5IHZhbHVlcyBmcm9tIHRoZSBJQU5BIHRpbWUgem9uZSBkYXRhYmFzZS4gQnkgZGVmYXVsdCBpdCB1c2VzIHRoZSBsb2NhbCB0aW1lIHpvbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lWm9uZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpbWVab25lcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGltZVpvbmVzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGltZVpvbmVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRlbGF5ICggaW4gbWlsaXNlY29uZHMpIGJlZm9yZSB0aGUgdG9vbHRpcC9tZW51IGFwcGVhcnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbHRpcERlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcERlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG9mZnNldCBvdCB0aGUgdG9vbHRpcC9tZW51LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcE9mZnNldCgpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwT2Zmc2V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sdGlwT2Zmc2V0KHZhbHVlOiBudW1iZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwT2Zmc2V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2VhdGhlciBvciBub3QgdmVydGljYWwgc2Nyb2xsYmFyIGlzIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KCk6IFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSh2YWx1ZTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjdXJyZW50IHZpZXcuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIHZpZXcgdmFsdWVzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIHZpZXdzIHByb3BlcnR5LiBDdXN0b20gdmlld3Mgc2hvdWxkIGNvbnRhaW4gYSB2YWxpZCB2YWx1ZSB0aGF0IHdpbGwgYmUgc2V0IGFzIHRoZSBjdXJyZW50IHZpZXcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlldyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgU2NoZWR1bGVyIHZpZXdUeXBlLiBDdXN0b20gdmlld3MgbXVzdCBjb250YWluIGEgdmFsaWQgdHlwZSBwcm9wZXJ0eSB0aGF0IGNvcnJlc3BvbmRzIHRvIG9uZSBvZiB0aGUgdmlldyB0eXBlcy4gVGhpcyBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIHNldC4gKi9cblx0QElucHV0KClcblx0Z2V0IHZpZXdUeXBlKCk6IFNjaGVkdWxlclZpZXdUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdUeXBlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aWV3VHlwZSh2YWx1ZTogU2NoZWR1bGVyVmlld1R5cGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld1R5cGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdmlld2luZyBkYXRlIHJhbmdlIG9mIHRoZSB0aW1lbGluZS4gQ3VzdG9tIHZpZXdzIGNhbiBiZSBkZWZpbmVkIGFzIG9iamVjdHMgaW5zdGVhZCBvZiBzdHJpbmdzLiBUaGUgdmlldyBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiBsYWJlbCAtIHRoZSBsYWJlbCBmb3IgdGhlIHZpZXcudmFsdWUgLSB0aGUgdmFsdWUgZm9yIHRoZSB2aWV3LiBUaGUgdmFsdWUgaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgdmlldy50eXBlIC0gdGhlIHR5cGUgb2Ygdmlldy4gVGhlIHR5cGUgc2hvdWxkIGJlIG9uZSBvZiB0aGUgZGVmYXVsdCBhbGxvd2VkIHZhbHVlcyBmb3IgYSB2aWV3LmhpZGVXZWVrZW5kIC0gYW4gT3B0aW9uYWwgcHJvcGVydHkgdGhhdCBhbGxvd3MgdG8gaGlkZSB0aGUgd2Vla2VuZCBvbmx5IGZvciB0aGlzIHNwZWNpZmljIHZpZXcuaGlkZU5vbndvcmtpbmdXZWVrZGF5cyAtIGFuIE9wdGlvbmFsIHByb3BlcnR5IHRoYXQgYWxsb3dzIHRvIGhpZGUgdGhlIG5vbndya2luZyB3ZWVrZGF5cyBmb3IgdGhpcyBzcGVjaWZpYyB2aWV3LnNob3J0Y3V0S2V5IC0gYW4gT3B0aW9uYWwgcHJvcGVydHkgdGhhdCBhbGxvd3MgdG8gc2V0IGEgY3VzdG9tIHNob3J0Y3V0IGtleSBmb3IgdGhlIHZpZXcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3cygpOiBTY2hlZHVsZXJWaWV3cyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3cyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlld3ModmFsdWU6IFNjaGVkdWxlclZpZXdzKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdHlwZSBvZiB0aGUgdmlldyBzZWxlY3RvciBsb2NhdGVkIGluIHRoZSBoZWFkZXIgb2YgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3U2VsZWN0b3JUeXBlKCk6IFNjaGVkdWxlclZpZXdTZWxlY3RvclR5cGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlld1NlbGVjdG9yVHlwZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlld1NlbGVjdG9yVHlwZSh2YWx1ZTogU2NoZWR1bGVyVmlld1NlbGVjdG9yVHlwZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3U2VsZWN0b3JUeXBlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgd2VlayBkYXlzIGluc2lkZSB0aGUgZWxlbWVudC4gICovXG5cdEBJbnB1dCgpXG5cdGdldCB3ZWVrZGF5Rm9ybWF0KCk6IFdlZWtEYXlGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2Vla2RheUZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgd2Vla2RheUZvcm1hdCh2YWx1ZTogV2Vla0RheUZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrZGF5Rm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZXMgaW5zaWRlIHRoZSB0aW1lbGluZSBoZWFkZXIgd2hlbiB0aGV5IHJlcHJlc2VudCB5ZWFycy4gKi9cblx0QElucHV0KClcblx0Z2V0IHllYXJGb3JtYXQoKTogWWVhckZvcm1hdCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC55ZWFyRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB5ZWFyRm9ybWF0KHZhbHVlOiBZZWFyRm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnllYXJGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGlmIHRoZSBlbGVtZW50IGNhbiBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbXBsZXRseSBjdXN0b21pemUgdGhlIHBvcHVwIFdpbmRvdyB0aGF0IGlzIHVzZWQgdG8gZWRpdCBldmVudHMuIFRoZSBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6IHRhcmdldCAtIHRoZSB0YXJnZXQgcG9wdXAgV2luZG93IHRoYXQgaXMgYWJvdXQgdG8gYmUgb3BlbmVkLnR5cGUgLSB0aGUgdHlwZSBvZiB0aGUgd2luZG93LiBUaGUgdHlwZSBkZXRlcm1pbmVzIHRoZSBwdXJwb3NlIG9mIHRoZSB3aW5kb3cuIFRoZSBkZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgc3RyaW5nIHdoaWNoIG1lYW5zIHRoYXQgaXQncyB0aGUgZGVmYXVsdCBldmVudCBlZGl0aW5nIHdpbmRvdy4gVGhlIG90aGVyIHR5cGUgaXMgJ2NvbmZpcm0nICggY29uZmlybWF0aW9uIHdpbmRvdykgdGhhdCBhcHBlYXJzIHdoZW4gY2xpY2tpbmcgb24gYSByZXBlYXRpbmcgZXZlbnQuIGV2ZW50T2JqIC0gdGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGVkaXRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGJhdGNoIHVwZGF0ZSB3YXMgc3RhcnRlZCBhZnRlciBleGVjdXRpbmcgdGhlIGJlZ2luVXBkYXRlIG1ldGhvZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkJlZ2luVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGJhdGNoIHVwZGF0ZSB3YXMgZW5kZWQgZnJvbSBhZnRlciBleGVjdXRpbmcgdGhlIGVuZFVwZGF0ZSBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25FbmRVcGRhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbmV3IGNlbGwgaXMgc2VsZWN0ZWQvdW5zZWxlY3RlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHRvbGRWYWx1ZSlcblx0KiAgIHZhbHVlIC0gVGhlIG5ldyBzZWxlY3RlZCBEYXRlLlxuXHQqICAgb2xkVmFsdWUgLSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBEYXRlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGVuIGV2ZW50LCBldmVudCBpdGVtIG9yIGEgY29udGV4dCBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdHR5cGUsIFx0aXRlbU9iailcblx0KiAgIGl0ZW0gLSBUaGUgSFRNTEVsZW1lbnQgZm9yIHRoZSBldmVudC5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBpdGVtIHRoYXQgaXMgY2xpY2tlZC4gVGhlIHBvc3NpYmxlIHZhbHVlcyBhcmU6IDx1bD48bGk+ZXZlbnQgLSB3aGVuIGFuIGV2ZW50IGl0ZW0gaXMgY2xpY2tlZC48L2xpPjxsaT5jb250ZXh0IC0gd2hlbiBhIGNvbnRleHQgbWVudSBpdGVtIGlzIGNsaWNrZWQuPC9saT48L3VsPi5cblx0KiAgIGl0ZW1PYmogLSBUaGUgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEV2ZW50IGlzIGluc2VydGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0pXG5cdCogICBpdGVtIC0gQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgYWN0dWFsIGl0ZW0gd2l0aCBpdCdzIGF0dHJpYnV0ZXMuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1JbnNlcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEV2ZW50IGlzIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSlcblx0KiAgIGl0ZW0gLSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgaXRlbSB3aXRoIGl0J3MgYXR0cmlidXRlcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbVJlbW92ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gRXZlbnQgaXMgdXBkYXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0eXBlLCBcdGl0ZW0pXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgaXRlbSB0aGF0IGhhcyBiZWVuIG1vZGlmaWVkLlxuXHQqICAgaXRlbSAtIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdHVhbCBpdGVtIHdpdGggaXQncyBhdHRyaWJ1dGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JdGVtVXBkYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlldyBpcyBjaGFuZ2VkIHZpYSB1c2VyIGludGVyYWN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgdmlldy5cblx0KiAgIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBuZXcgc2VsZWN0ZWQgdmlldy5cblx0Ki9cblx0QE91dHB1dCgpIG9uVmlld0NoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBzaG9ydGN1dCBrZXkgZm9yIGFuIGV2ZW50IGlzIHByZXNzZWQuIEJ5IGRlZmF1bHQgb25seSAnRGVsZXRlJyBrZXkgaXMgdXNlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRrZXksIFx0dGFyZ2V0LCBcdGV2ZW50T2JqKVxuXHQqICAga2V5IC0gVGhlIHNob3J0Y3V0IGtleSB0aGF0IHdhcyBwcmVzc2VkLlxuXHQqICAgdGFyZ2V0IC0gVGhlIGV2ZW50IHRhcmdldCAoSFRNTEVsZW1lbnQpLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgc2NoZWR1bGVyIEV2ZW50IG9iamVjdCB0aGF0IGFmZmVjdGVkIGJ5IHRoZSBrZXlwcmVzcy5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXZlbnRTaG9ydGN1dEtleTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlICdkYXRlQ3VycmVudCcgcHJvcGVydHkgaXMgY2hhbmdlZC4gVGhpcyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgdG8gYSBkaWZmZXJlbnQgZGF0ZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGRWYWx1ZSwgXHR2YWx1ZSlcblx0KiAgIG9sZFZhbHVlIC0gVGhlIHByZXZpb3VzIGN1cnJlbnQgZGF0ZSB0aGF0IHdhcyBpbiB2aWV3LlxuXHQqICAgdmFsdWUgLSBUaGUgY3VycmVudCBkYXRlIGluIHZpZXcuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGRyYWdnaW5nIG9mIGFuIGV2ZW50IGJlZ2lucy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdGl0ZW1EYXRlUmFuZ2UsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIHRhcmdldCAtIFRoZSBIVE1MRWxlbWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBldmVudCB0aGF0IGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBpdGVtIC0gVGhlIHNjaGVkdWxlciBFdmVudCBvYmplY3QgdGhhdCBpcyBnb2luZyB0byBiZSBkcmFnZ2VkLlxuXHQqICAgaXRlbURhdGVSYW5nZSAtIFRoZSBzdGFydC9lbmQgZGF0ZXMgZm9yIHRoZSBTY2hlZHVsZXIgRXZlbnQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2luZyBvZiBhbiBldmVudCBmaW5pc2hlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRpdGVtRGF0ZVJhbmdlLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICB0YXJnZXQgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZXZlbnQgdGhhdCBpcyBkcmFnZ2VkLlxuXHQqICAgaXRlbSAtIFRoZSBzY2hlZHVsZXIgRXZlbnQgb2JqZWN0IHRoYXQgaXMgZHJhZ2dlZC5cblx0KiAgIGl0ZW1EYXRlUmFuZ2UgLSBUaGUgbmV3IHN0YXJ0L2VuZCBkYXRlcyBmb3IgdGhlIGRyYWdnZWQgU2NoZWR1bGVyIEV2ZW50LlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHJlc2l6aW5nIG9mIGEgdGFzayBzdGFydHMuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRpdGVtRGF0ZVJhbmdlLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICB0YXJnZXQgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZXZlbnQgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqICAgaXRlbSAtIFRoZSBzY2hlZHVsZXIgRXZlbnQgb2JqZWN0IHRoYXQgaXMgZ29pbmcgdG8gYmUgcmVzaXplZC5cblx0KiAgIGl0ZW1EYXRlUmFuZ2UgLSBUaGUgc3RhcnQvZW5kIGRhdGVzIGZvciBTY2hlZHVsZXIgRXZlbnQgdGhhdCBpcyBnb2luZyB0byBiZSByZXNpemVkLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcmVzaXppbmcgb2YgYW4gZXZlbnQgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0aXRlbURhdGVSYW5nZSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgdGFyZ2V0IC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGV2ZW50IHRoYXQgaXMgcmVzaXplZC5cblx0KiAgIGl0ZW0gLSBUaGUgc2NoZWR1bGVyIEV2ZW50IG9iamVjdCB0aGF0IGlzIHJlc2l6ZWQuXG5cdCogICBpdGVtRGF0ZVJhbmdlIC0gVGhlIG5ldyBzdGFydC9lbmQgZGF0ZXMgZm9yIHRoZSByZXNpemVkIFNjaGVkdWxlciBFdmVudC5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyB0b3Agb3BlbiB0aGUgZXZlbnQgZGlhbG9nIHdpbmRvdy4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtLCBcdHR5cGUpXG5cdCogICB0YXJnZXQgLSBUaGUgZGlhbG9nIHdpbmRvdyB0aGF0IGlzIG9wZW5pbmcuXG5cdCogICBpdGVtIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGdvaW5nIHRvIGJlIGVkaXRlZC5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB3aW5kb3cgdGhhdCBpcyBnb2luZyB0byBvcGVuLiBUd28gd2luZG93IHR5cGVzIGFyZSBhdmFpbGFibGUsIHRoZSBkYWZhdWx0IHdoaWNoIGlzIGFuIGVtcHR5IHN0cmluZyAoIGRvZXMgbm90IGhhdmUgYSB0eXBlKSBhbmQgJ2NvbmZpcm0nIHdoaWNoIGlzIGRpc3BsYXllZCB3aGVuIGNsaWNrZWQgb24gYSByZXBlYXRpbmcgZXZlbnQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVkaXREaWFsb2dPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBvcGVucyB0aGUgZXZlbnQgZGlhbG9nIHdpbmRvdy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0ZWRpdG9ycywgXHRpdGVtKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGRpYWxvZyB3aW5kb3cgdGhhdCBpcyBvcGVuZWQuXG5cdCogICBlZGl0b3JzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGV2ZW50IGVkaXRvcnMgdGhhdCBhcmUgcHJlc2VudCBpbnNpZGUgdGhlIHdpbmRvdy4gVGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQgd2hlbiB0aGUgd2luZG93IGlzIG9mIHR5cGUgJ2NvbmZpcm0nLCBiZWNhdXNlIGNvbmZpcm0gd2luZG93cyBkbyBub3QgY29udGFpbiBlZGl0b3JzLlxuXHQqICAgaXRlbSAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBiZWluZyBlZGl0ZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkVkaXREaWFsb2dPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIGV2ZW50IGRpYWxvZyB3aW5kb3cuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGVkaXRvcnMsIFx0aXRlbSlcblx0KiAgIHRhcmdldCAtIFRoZSBkaWFsb2cgd2luZG93IHRoYXQgaXMgY2xvc2VkLlxuXHQqICAgZWRpdG9ycyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBldmVudCBlZGl0b3JzIHRoYXQgYXJlIHByZXNlbnQgaW5zaWRlIHRoZSB3aW5kb3cuIFRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkIHdoZW4gdGhlIHdpbmRvdyBpcyBvZiB0eXBlICdjb25maXJtJywgYmVjYXVzZSBjb25maXJtIHdpbmRvd3MgZG8gbm90IGNvbnRhaW4gZWRpdG9ycy5cblx0KiAgIGl0ZW0gLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgYmVpbmcgZWRpdGVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGlzIGFib3V0IHRvIGNsb3NlIHRoZSBldmVudCBkaWFsb2cgd2luZG93LiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0dHlwZSlcblx0KiAgIHRhcmdldCAtIFRoZSBkaWFsb2cgd2luZG93IHRoYXQgaXMgY2xvc2luZy5cblx0KiAgIGl0ZW0gLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgZWRpdGVkLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdyB0aGF0IGlzIGdvaW5nIHRvIGJlIGNsb3NlZC4gVHdvIHdpbmRvdyB0eXBlcyBhcmUgYXZhaWxhYmxlLCB0aGUgZGFmYXVsdCB3aGljaCBpcyBhbiBlbXB0eSBzdHJpbmcgKCBkb2VzIG5vdCBoYXZlIGEgdHlwZSkgYW5kICdjb25maXJtJyB3aGljaCBpcyBkaXNwbGF5ZWQgd2hlbiBjbGlja2VkIG9uIGEgcmVwZWF0aW5nIGV2ZW50LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgYmVnaW5zIHRvIG9wZW4gdGhlIGNvbnRleHQgbWVudSBvbiBhIHRpbWVsaW5lIGNlbGwgb3IgYW4gZXZlbnQgZWxlbWVudC4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRjZWxsT2JqLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGNvbnRleHQgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGNlbGxPYmogLSBUaGUgY2VsbCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGFuIGV2ZW50IGluc3RlYWQgb2YgYSBjZWxsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhIGNlbGwgaW5zdGVhZCBvZiBhbiBldmVudCB0aGlzIHBhcmFtdGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250ZXh0IG1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRjZWxsT2JqLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGNvbnRleHQgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGNlbGxPYmogLSBUaGUgY2VsbCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGFuIGV2ZW50IGluc3RlYWQgb2YgYSBjZWxsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhIGNlbGwgaW5zdGVhZCBvZiBhbiBldmVudCB0aGlzIHBhcmFtdGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250ZXh0IG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRjZWxsT2JqLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGNvbnRleHQgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGNlbGxPYmogLSBUaGUgY2VsbCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGFuIGV2ZW50IGluc3RlYWQgb2YgYSBjZWxsIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS4gSWYgdGhlIHRhcmdldCBpcyBhIGNlbGwgaW5zdGVhZCBvZiBhbiBldmVudCB0aGlzIHBhcmFtdGVyIHdpbGwgYmUgdW5kZWZpbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBpcyBhYm91dCB0byBjbG9zZSB0aGUgY29udGV4dCBtZW51LiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGNlbGxPYmosIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgY29udGV4dCBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgY2VsbE9iaiAtIFRoZSBjZWxsIG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuIElmIHRoZSB0YXJnZXQgaXMgYW4gZXZlbnQgaW5zdGVhZCBvZiBhIGNlbGwgdGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LiBJZiB0aGUgdGFyZ2V0IGlzIGEgY2VsbCBpbnN0ZWFkIG9mIGFuIGV2ZW50IHRoaXMgcGFyYW10ZXIgd2lsbCBiZSB1bmRlZmluZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGV2ZW50IG1lbnUgaXMgYWJvdXQgdG8gb3Blbi4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24gYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lciwgXHRldmVudE9iailcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqICAgb3duZXIgLSBUaGUgSFRNTEVsZW1lbnQgb2YgdGhlIGV2ZW50IHRoYXQgdGhlIG1lbnUgYmVsb25ncyB0by5cblx0KiAgIGV2ZW50T2JqIC0gVGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG1lbnUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV2ZW50TWVudU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBldmVudCBtZW51IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IG9mIHRoZSBldmVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FdmVudE1lbnVPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZXZlbnQgbWVudSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyLCBcdGV2ZW50T2JqKVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCogICBvd25lciAtIFRoZSBIVE1MRWxlbWVudCBvZiB0aGUgZXZlbnQgdGhhdCB0aGUgbWVudSBiZWxvbmdzIHRvLlxuXHQqICAgZXZlbnRPYmogLSBUaGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgbWVudS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXZlbnRNZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBldmV0IG1lbnUgaXMgYWJvdXQgdG8gY2xvc2UuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIsIFx0ZXZlbnRPYmopXG5cdCogICB0YXJnZXQgLSBUaGUgbWVudSBpbnN0YW5jZS5cblx0KiAgIG93bmVyIC0gVGhlIEhUTUxFbGVtZW50IG9mIHRoZSBldmVudCB0aGF0IHRoZSBtZW51IGJlbG9uZ3MgdG8uXG5cdCogICBldmVudE9iaiAtIFRoZSBldmVudCBvYmplY3QgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBtZW51LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FdmVudE1lbnVDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZGF0ZSBzZWxlY3Rpb24gbWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRhdGVNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRhdGUgc2VsZWN0aW9uIG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EYXRlTWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlldyBzZWxlY3Rpb24gbWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIG1lbnUgaW5zdGFuY2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvblZpZXdNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpZXcgc2VsZWN0aW9uIG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSBtZW51IGluc3RhbmNlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25WaWV3TWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5vdGlmaWNhdGlvbiBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5zdGFuY2UpXG5cdCogICBpbnN0YW5jZSAtIFRoZSB0b2FzdCBpdGVtIGluc3RhbmNlIHRoYXQgaXMgb3BlbmVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ob3RpZmljYXRpb25PcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5vdGlmaWNhdGlvbiBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5zdGFuY2UpXG5cdCogICBpbnN0YW5jZSAtIFRoZSB0b2FzdCBpdGVtIGluc3RhbmNlIHRoYXQgaXMgY2xvc2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ob3RpZmljYXRpb25DbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFN0YXJ0cyBhbiB1cGRhdGUgb3BlcmF0aW9uLiBUaGlzIGlzIGFwcHJvcHJpYXRlIHdoZW4gY2FsbGluZyBtdWx0aXBsZSBtZXRob2RzIG9yIHNldCBtdWx0aXBsZSBwcm9wZXJ0aWVzIGF0IG9uY2UuIFxuXHQqL1xuICAgIHB1YmxpYyBiZWdpblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSB1cGRhdGUgb3BlcmF0aW9uLiBUaGlzIG1ldGhvZCB3aWxsIHJlc3VtZSB0aGUgcmVuZGVyaW5nIGFuZCB3aWxsIHJlZnJlc2ggdGhlIGVsZW1lbnQuIFxuXHQqL1xuICAgIHB1YmxpYyBlbmRVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZlcmVzaGVzIHRoZSBTY2hlZHVsZXIgYnkgcmVjYWxjdWxhdGluZyB0aGUgU2Nyb2xsYmFycy4gIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gZnVsbFJlZnJlc2g/LiBJZiBzZXQgdGhlIFNjaGVkdWxlciB3aWxsIGJlIHJlLXJlbmRlcmVkIGNvbXBsZXRlbHkuXG5cdCovXG4gICAgcHVibGljIHJlZnJlc2goZnVsbFJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goZnVsbFJlZnJlc2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goZnVsbFJlZnJlc2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBldmVudHMgZnJvbSB0aGUgU2NoZWR1bGVyLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZvcm1hdC4gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBleHBvcnRlZCBmaWxlLiBUaGUgZm9sbG93aW5nIHZhbHVlcyBhcmUgYXZhaWxhYmxlOiA8dWw+PGxpPjxiPnBkZjwvYj48L2xpPjxsaT48Yj54bHN4PC9iPjwvbGk+PGxpPjxiPmh0bWw8L2I+PC9saT48bGk+PGI+aUNhbDwvYj48L2xpPjwvdWw+XG5cdCogQHBhcmFtIHthbnl9IGNhbGxiYWNrPy4gQSBjYWxsYmFjayB0aGF0IGFsbG93cyB0byBmb3JtYXQgdGhlIGV4cG9ydGVkIGRhdGEgYmFzZWQgb24gYSBjb25kaXRpb24uIEZvciBhZGRpdGlvbmFsIGRldGFpbHMsIHJlZmVyIHJvIHRoZSBTbWFydCBFeHBvcnQgRG9jdW1lbnRhdGlvbi5cblx0Ki9cbiAgICBwdWJsaWMgZXhwb3J0RGF0YShkYXRhRm9ybWF0OiBzdHJpbmcsIGNhbGxiYWNrPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXZlbnRzIGluc2lkZSB0aGUgU2NoZWR1bGVyLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBmb3JtIExvY2FsU3RvcmFnZSBhY2NvcmRpbmcgdG8gaXQncyBpZC4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50IG9yIGNoZWNrcyBMb2NhbFN0b3JhZ2UgZm9yIGFueSBzYXZlZCBzdGF0ZXMgaWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gQXJyYXkgY29udGFpbmluZyBhIHZhbGlkIHN0cnVjdHVyZSBvZiBTY2hlZHVsZXIgZXZlbnRzLiBJZiBubyBzdGF0ZSBpcyBwcm92aWRlZCwgdGhlIGVsZW1lbnQgd2lsbCBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGEgc2F2ZWQgc3RhdGUuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGN1cnJlbnQgZXZlbnRzIG9mIHRoZSBlbGVtZW50IHRvIExvY2FsU3RvcmFnZS4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50LiBcblx0KiBAcGFyYW0ge2FueVtdfSBzdGF0ZT8uIEFuIEFycmF5IGNvbnRhaW5pbmcgYSB2YWxpZCBzdHJ1Y3R1cmUgb2YgU2NoZWR1bGVyIGV2ZW50cy5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgU2NoZWR1bGVyIGNvbnRhaW5zIHRoZSBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBjb250YWluc0V2ZW50KGV2ZW50T2JqKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zRXZlbnQoZXZlbnRPYmopO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhbiBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBbiBvYmplY3QgZGVzY3JpYmluZyBhIFNjaGVkdWxlciBldmVudCB0aGF0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGVsZW1lbnQuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4Py4gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCB0byBpbnNlcnQgdGhlIGV2ZW50IGF0LiBJZiBub3QgcHJvdmlkZWQgdGhlIGV2ZW50IGlzIGluc2VydGVkIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QuXG5cdCovXG4gICAgcHVibGljIGluc2VydEV2ZW50KGV2ZW50T2JqOiBhbnksIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEV2ZW50KGV2ZW50T2JqLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0RXZlbnQoZXZlbnRPYmosIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhbiBldmVudC4gXG5cdCogQHBhcmFtIHthbnl9IGluZGV4LiBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIGFuIGV2ZW50IG9yIGEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdC5cblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgU2NoZWR1bGVyIGV2ZW50LiBUaGUgcHJvcGVydGllcyBvZiB0aGlzIG9iamVjdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGRlc2lyZWQgZXZlbnQuXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZUV2ZW50KGluZGV4OiBhbnksIGV2ZW50T2JqOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlRXZlbnQoaW5kZXgsIGV2ZW50T2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVFdmVudChpbmRleCwgZXZlbnRPYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFuIGV2ZW50LiBcblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYW4gZXZlbnQgb3IgdGhlIGFjdHVhbCBldmVudCBvYmplY3QgdG8gYmUgcmVtb3ZlZC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlRXZlbnQoaW5kZXg6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnQoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgcG9wdXAgV2luZG93IGZvciBzcGVjaWZpYyBldmVudCBFZGl0aW5nLiBcblx0KiBAcGFyYW0ge2FueX0gaW5kZXguIEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgYSBldmVudCBvciB0aGUgYWN0dWFsIGV2ZW50IG9iamVjdCB0byBiZSBlZGl0ZWQuXG5cdCovXG4gICAgcHVibGljIG9wZW5XaW5kb3coaW5kZXg6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuV2luZG93KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuV2luZG93KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBwb3B1cCB3aW5kb3cuIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZVdpbmRvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VXaW5kb3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZVdpbmRvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQcmVwYXJlcyB0aGUgU2NoZWR1bGVyIGZvciBwcmludGluZyBieSBvcGVuaW5nIHRoZSBicm93c2VyJ3MgUHJpbnQgUHJldmlldy4gXG5cdCovXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNjcm9sbHMgdGhlIFNjaGVkdWxlciB0byBhIERhdGUuIFxuXHQqIEBwYXJhbSB7RGF0ZX0gZGF0ZS4gVGhlIGRhdGUgdG8gc2Nyb2xsIHRvLlxuXHQqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0RhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxUb0RhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9EYXRlKGRhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTY3JvbGxzIHRoZSBTY2hlZHVsZXIgdG8gYW4gZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBpbmRleC4gVGhlIGluZGV4IG9mIGEgU2NoZWR1bGVyIGV2ZW50IG9yIHRoZSBhY3R1YWwgZXZlbnQgb2JqZWN0IHRvIHNjcm9sbCB0by5cblx0Ki9cbiAgICBwdWJsaWMgc2Nyb2xsVG9FdmVudChpbmRleDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbFRvRXZlbnQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbFRvRXZlbnQoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyBhIGN1c3RvbSBub3RpZmljYXRpb24uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLiBUaGUgbm90aWZpY2F0aW9uIG1lc3NhZ2UuXG5cdCogQHBhcmFtIHthbnl9IHRvYXN0U2V0dGluZ3MuIFNtYXJ0LlRvYXN0IHNldHRpbmdzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIFRvYXN0IGVsZW1lbnQgd2hlbiBvcGVuaW5nIHRoZSBub3RpZmljYXRpb24uXG5cdCovXG4gICAgcHVibGljIG9wZW5Ob3RpZmljYXRpb24obWVzc2FnZTogc3RyaW5nLCB0b2FzdFNldHRpbmdzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3Blbk5vdGlmaWNhdGlvbihtZXNzYWdlLCB0b2FzdFNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuTm90aWZpY2F0aW9uKG1lc3NhZ2UsIHRvYXN0U2V0dGluZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbG9zZXMgYWxsIG5vdGlmaWNhdGlvbnMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbG9zZU5vdGlmaWNhdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFsbCBvY2N1cmFuY2VzIG9mIGFuIGV2ZW50LiBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEEgU2NoZWR1bGVyIGV2bmV0IG9iamVjdC5cblx0KiBAcGFyYW0ge251bWJlcn0gY291bnQuIFRoZSBudW1iZXIgb2Ygb2NjdXJhbmNlcyB0byByZXR1cm4uIEJ5IGRlZmF1bHQgMTAwIGRhdGUgb2NjdXJhbmNlcyBvZiB0aGUgZXZlbnQgYXJlIHJldHVybmVkLlxuXHQqL1xuICAgIHB1YmxpYyBvY2N1cnJlbmNlcyhldmVudE9iajogYW55LCBjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VzKGV2ZW50T2JqLCBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZXMoZXZlbnRPYmosIGNvdW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbGwgb2NjdXJhbmNlcyBvZiBhbiBldmVudCBiZXR3ZWVuIHR3byBkYXRlcy4gXG5cdCogQHBhcmFtIHthbnl9IGV2ZW50T2JqLiBBIFNjaGVkdWxlciBldmVudCBvYmplY3QuXG5cdCogQHBhcmFtIHtEYXRlfSBkYXRlRnJvbS4gVGhlIHN0YXJ0IGRhdGUuXG5cdCogQHBhcmFtIHtEYXRlfSBkYXRlVG8uIFRoZSBlbmQgZGF0ZS5cblx0Ki9cbiAgICBwdWJsaWMgb2NjdXJyZW5jZXNCZXR3ZWVuKGV2ZW50T2JqOiBhbnksIGRhdGVGcm9tOiBEYXRlLCBkYXRlVG86IERhdGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub2NjdXJyZW5jZXNCZXR3ZWVuKGV2ZW50T2JqLCBkYXRlRnJvbSwgZGF0ZVRvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlc0JldHdlZW4oZXZlbnRPYmosIGRhdGVGcm9tLCBkYXRlVG8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBmaXJzdCBvY2N1cmFuY2Ugb2YgYW4gZXZlbnQgYWZ0ZXIgYSBkYXRlLiBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdC5cblx0KiBAcGFyYW0ge251bWJlcn0gZGF0ZS4gVGhlIGRhdGUgYWZ0ZXIgd2hpY2ggdGhlIGZpcnN0IG9jY3VyYW5jZSBvZiB0aGUgZXZlbnQgd2lsbCBiZSByZXR1cm5lZC5cblx0Ki9cbiAgICBwdWJsaWMgb2NjdXJyZW5jZUFmdGVyKGV2ZW50T2JqOiBhbnksIGRhdGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vY2N1cnJlbmNlQWZ0ZXIoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VBZnRlcihldmVudE9iaiwgZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGZpcnN0IG9jY3VyYW5jZSBvZiBhbiBldmVudCBiZWZvcmUgYSBkYXRlLiBcblx0KiBAcGFyYW0ge2FueX0gZXZlbnRPYmouIEEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdC5cblx0KiBAcGFyYW0ge251bWJlcn0gZGF0ZS4gVGhlIGRhdGUgYmVmb3JlIHdoaWNoIHRoZSBmaXJzdCBvY2N1cmFuY2Ugb2YgdGhlIGV2ZW50IHdpbGwgYmUgcmV0dXJuZWQuXG5cdCovXG4gICAgcHVibGljIG9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmo6IGFueSwgZGF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9jY3VycmVuY2VCZWZvcmUoZXZlbnRPYmosIGRhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkYXRlU3RhcnQvZGF0ZUVuZCBvZiBhIHRpbWVsaW5lIGNlbGwuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNlbGwuIEEgU2NoZWR1bGVyIHRpbWVsaW5lIGNlbGwgZWxlbWVudC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q2VsbERhdGVSYW5nZShjZWxsKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENlbGxEYXRlUmFuZ2UoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgdG9vbHRpcChldmVudCBtZW51KSBmb3IgYW4gZXZlbnQuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgb2JqZWN0IG9yIGl0J3MgaW5kZXguXG5cdCovXG4gICAgcHVibGljIG9wZW5FdmVudFRvb2x0aXAoZXZlbnRPYmo6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRXZlbnRUb29sdGlwKGV2ZW50T2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuRXZlbnRUb29sdGlwKGV2ZW50T2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBldmVudCB0b29sdGlwIChldmVudCBtZW51KS4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlRXZlbnRUb29sdGlwKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZUV2ZW50VG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlRXZlbnRUb29sdGlwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBvciBmYWxzZSB3aGV0aGVyIHRoZSBkYXRlIGlzIHJlc3RyaWN0ZWQgb3Igbm90LiBcblx0KiBAcGFyYW0ge0RhdGV9IGRhdGUuIEEgU2NoZWR1bGVyIGV2ZW50IG9iamVjdCBvciBpdCdzIGluZGV4LlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaXNEYXRlUmVzdHJpY3RlZChkYXRlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmlzRGF0ZVJlc3RyaWN0ZWQoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgb3IgZmFsc2Ugd2hldGhlciB0aGUgZXZlbnQgaXMgcmVzdHJpY3RlZCBvciBub3QuIFxuXHQqIEBwYXJhbSB7YW55fSBldmVudE9iai4gQSBTY2hlZHVsZXIgZXZlbnQgIG9iamVjdCBvciBhIGRpcmVjdCBldmVudCBIVE1MRWxlbWVudCBpbnN0YW5jZS5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGlzRXZlbnRSZXN0cmljdGVkKGV2ZW50T2JqKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmlzRXZlbnRSZXN0cmljdGVkKGV2ZW50T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQmVnaW5VcGRhdGUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmVnaW5VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kVXBkYXRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRW5kVXBkYXRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VuZFVwZGF0ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZW5kVXBkYXRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1JbnNlcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUluc2VydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtUmVtb3ZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbVVwZGF0ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZpZXdDaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlld0NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50U2hvcnRjdXRLZXlIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudFNob3J0Y3V0S2V5LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50U2hvcnRjdXRLZXknLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50U2hvcnRjdXRLZXlIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkYXRlQ2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkYXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlQ2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FZGl0RGlhbG9nT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVkaXREaWFsb2dPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXREaWFsb2dPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nT3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVkaXREaWFsb2dDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRWRpdERpYWxvZ0Nsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ0Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51Q2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51Q2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXZlbnRNZW51T3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdldmVudE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FdmVudE1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdldmVudE1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXZlbnRNZW51Q2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdldmVudE1lbnVDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGF0ZU1lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RhdGVNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRhdGVNZW51Q2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51T3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZpZXdNZW51T3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd2aWV3TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51T3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25WaWV3TWVudUNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZpZXdNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uTm90aWZpY2F0aW9uT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25PcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snbm90aWZpY2F0aW9uQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ob3RpZmljYXRpb25DbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25DbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snbm90aWZpY2F0aW9uQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVnaW5VcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JlZ2luVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlbmRVcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRVcGRhdGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VuZFVwZGF0ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtSW5zZXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbUluc2VydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUluc2VydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbVJlbW92ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1SZW1vdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1SZW1vdmVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1VcGRhdGVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtVXBkYXRlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtVXBkYXRlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3Q2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlld0NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld0NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRTaG9ydGN1dEtleUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50U2hvcnRjdXRLZXknLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50U2hvcnRjdXRLZXlIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVDaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlQ2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWRpdERpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydlZGl0RGlhbG9nQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VkaXREaWFsb2dDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlZGl0RGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWRpdERpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51T3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V2ZW50TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V2ZW50TWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydldmVudE1lbnVDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXZlbnRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXZlbnRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGF0ZU1lbnVPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGF0ZU1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RhdGVNZW51Q2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYXRlTWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkYXRlTWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd2aWV3TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aWV3TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51T3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndmlld01lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZpZXdNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZpZXdNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ25vdGlmaWNhdGlvbk9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25PcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25PcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbkNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydub3RpZmljYXRpb25DbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==