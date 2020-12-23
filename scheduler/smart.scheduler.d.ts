import { Scheduler } from './../index';
import { SchedulerDayFormat, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerScrollButtonsPosition, SchedulerTimelineDayScale, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerDataSource, SchedulerEvent, SchedulerResource, SchedulerStatuse } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { SchedulerRepeatFreq, SchedulerNotificationType, SchedulerDayFormat, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerScrollButtonsPosition, SchedulerTimelineDayScale, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerDataSource, SchedulerDataSourceRepeat, SchedulerNotification, SchedulerEvent, SchedulerEventRepeat, SchedulerResource, SchedulerStatuse, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Scheduler } from './../index';
export { DataAdapter } from './../index';
export declare class SchedulerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Scheduler>);
    private eventHandlers;
    nativeElement: Scheduler;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Determines the scroll speed while dragging an event.  */
    autoScrollStep: number;
    /** @description Determines the color scheme for the event background selector in the event window editor.  */
    colorScheme: string[];
    /** @description Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.  */
    currentTimeIndicator: boolean;
    /** @description Determines the refresh interval in seconds for the currentTimeIndicator.  */
    currentTimeIndicatorInterval: number;
    /** @description Determines the context menu items that are visible when the Context Menu is opened. */
    contextMenuDataSource: any;
    /** @description Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    eventTemplate: any;
    /** @description Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    eventCollectorTemplate: any;
    /** @description  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created. */
    eventRenderMode: string;
    /** @description Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    eventTooltipTemplate: any;
    /** @description Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell. */
    cellTemplate: any;
    /** @description Determines the currently visible date for the Scheduler. */
    dateCurrent: any;
    /** @description Sets the Schedulers's Data Export options. */
    dataExport: SchedulerDataExport;
    /** @description Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties: */
    dataSource: SchedulerDataSource[];
    /** @description A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date. */
    dateSelectorFormatFunction: any;
    /** @description Determines the day format of the dates in the timeline. */
    dayFormat: SchedulerDayFormat;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Disables auto scrolling of the timeline while dragging/resizing an event. */
    disableAutoScroll: boolean;
    /** @description Disables dragging of events. */
    disableDrag: boolean;
    /** @description Disables dropping of events. */
    disableDrop: boolean;
    /** @description Disables resizing of events. */
    disableResize: boolean;
    /** @description Disables the cell selection. */
    disableSelection: boolean;
    /** @description Disables the window editor for the events. */
    disableWindowEditor: boolean;
    /** @description Disables the context menu of the events and cells. */
    disableContextMenu: boolean;
    /** @description Disables the event menu that appears when an event/collector has been clicked. */
    disableEventMenu: boolean;
    /** @description Disables the view menu that allows to select the current Scheduler view. */
    disableViewMenu: boolean;
    /** @description Disables the date menu that allows to select the current Scheduler date. */
    disableDateMenu: boolean;
    /** @description A callback that can be used to customize the drag feedback that appears when an event is dragged. */
    dragFeedbackFormatFunction: any;
    /** @description Determines the offset for the drag feedback from the pointer. */
    dragOffset: any;
    /** @description A getter that returns  an array of all Scheduler events. */
    events: SchedulerEvent[];
    /** @description Determines the first day of week for the Scheduler. By default it's Sunday. */
    firstDayOfWeek: number;
    /** @description Determines whether the events will be grouped by date. */
    groupByDate: boolean;
    /** @description Determines the grouping orientation. */
    groupOrientation: SchedulerGroupOrientation;
    /** @description Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    groupTemplate: any;
    /** @description Determines the resources that the events are grouped by. */
    groups: any;
    /** @description Determines the end hour that will be displayed in 'day' and 'week' views. */
    hourEnd: number;
    /** @description Determines the start hour that will be displayed in 'day' and 'week' views. */
    hourStart: number;
    /** @description Determines the formatting of hours inside the element. */
    hourFormat: SchedulerHourFormat;
    /** @description Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container.. */
    headerTemplate: any;
    /** @description  Determines the position of the Date selector inside the Header of the element. */
    headerDatePosition: SchedulerHeaderDatePosition;
    /** @description  Determines the styling of the Header navigation controls. */
    headerNavigationStyle: SchedulerHeaderNavigationStyle;
    /** @description  Determines the position of the view selector control inside the Header of the element. */
    headerViewPosition: SchedulerHeaderViewPosition;
    /** @description Determines whether the 'All Day' container with the all day events is hidden or not. */
    hideAllDay: boolean;
    /** @description Determines whether the days set by 'nonworkingDays' property are hidden or not. */
    hideNonworkingWeekdays: boolean;
    /** @description Determines whether the 'Today' button is hidden or not. */
    hideTodayButton: boolean;
    /** @description Determines whether the checkable items in the view selection menu are hidden or not. */
    hideViewMenuCheckableItems: boolean;
    /** @description Determines whether the weekend days are hidden or not. */
    hideWeekend: boolean;
    /** @description Determines weather or not horizontal scrollbar is shown. */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility;
    /** @description  Determines the language of the Scheduler.  */
    locale: string;
    /** @description Detetmines the maximum view date for the Scheduler. */
    max: any;
    /** @description Detetmines the minimum view date for the Scheduler. */
    min: any;
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the minute formatting inside the Scheduler. */
    minuteFormat: MinuteFormat;
    /** @description Determines the month name formatting inside the Scheduler. */
    monthFormat: MonthFormat;
    /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable. */
    nonworkingDays: any;
    /** @description Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest. */
    nonworkingHours: any;
    /** @description Determines the interval (in seconds) at which the element will check for notifications. */
    notificationInterval: number;
    /** @description Determines the visibility of the resize handles. */
    resizeHandlesVisibility: ResizeHandlesVisibility;
    /** @description Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling */
    resizeInterval: number;
    /** @description An array of resources that can be assigned to the events. */
    resources: SchedulerResource[];
    /** @description Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed. */
    restrictedDates: any;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description  Determines the position of the date navigation navigation buttons inside the header of the element. */
    scrollButtonsPosition: SchedulerScrollButtonsPosition;
    /** @description Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded. */
    shadeUntilCurrentTime: boolean;
    /** @description Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
    spinButtonsDelay: number;
    /** @description Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons. */
    spinButtonsInitialDelay: number;
    /** @description Defines the statuses that will be available for selection thourgh the window editor for the events. */
    statuses: SchedulerStatuse[];
    /** @description Sets or gets the element's visual theme.  */
    theme: string;
    /** @description A format function for the Header of the Timeline. Allows to modify the date labels in the header cells. */
    timelineHeaderFormatFunction: any;
    /** @description Determines the date scale for the timeline cells. */
    timelineDayScale: SchedulerTimelineDayScale;
    /** @description Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views. */
    timeRulerTicks: string;
    /** @description Determines the timeZone that the dates will be displayed in. Accepts values from the IANA time zone database. By default it uses the local time zone. */
    timeZone: string;
    /** @description Allows to display multiple timeZones at once. Accepts an array values from the IANA time zone database. By default it uses the local time zone. */
    timeZones: any;
    /** @description Determines the delay ( in miliseconds) before the tooltip/menu appears. */
    tooltipDelay: number;
    /** @description Determines the offset ot the tooltip/menu. */
    tooltipOffset: number[];
    /** @description Determines weather or not vertical scrollbar is shown. */
    verticalScrollBarVisibility: VerticalScrollBarVisibility;
    /** @description Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view. */
    view: string;
    /** @description Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set. */
    viewType: SchedulerViewType;
    /** @description Determines the viewing date range of the timeline. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view. */
    views: SchedulerViews;
    /** @description Determines type of the view selector located in the header of the element. */
    viewSelectorType: SchedulerViewSelectorType;
    /** @description Determines the format of the week days inside the element.  */
    weekdayFormat: WeekDayFormat;
    /** @description Determines the format of the dates inside the timeline header when they represent years. */
    yearFormat: YearFormat;
    /** @description Sets or gets if the element can be focused. */
    unfocusable: boolean;
    /** @description A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited. */
    windowCustomizationFunction: any;
    /** @description This event is triggered when a batch update was started after executing the beginUpdate method.
    *  @param event. The custom event. 	*/
    onBeginUpdate: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a batch update was ended from after executing the endUpdate method.
    *  @param event. The custom event. 	*/
    onEndUpdate: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a new cell is selected/unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
    *   value - The new selected Date.
    *   oldValue - The previously selected Date.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when en event, event item or a context menu item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	itemObj)
    *   item - The HTMLElement for the event.
    *   type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
    *   itemObj - The event object.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an Event is inserted.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemInsert: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an Event is removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemRemove: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an Event is updated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemUpdate: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the view is changed via user interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The value of the previously selected view.
    *   value - The value of the new selected view.
    */
    onViewChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a shortcut key for an event is pressed. By default only 'Delete' key is used.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	key, 	target, 	eventObj)
    *   key - The shortcut key that was pressed.
    *   target - The event target (HTMLElement).
    *   eventObj - The scheduler Event object that affected by the keypress.
    */
    onEventShortcutKey: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the 'dateCurrent' property is changed. This can be caused by navigating to a different date.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous current date that was in view.
    *   value - The current date in view.
    */
    onDateChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when dragging of an event begins. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
    *   target - The HTMLElement that corresponds to the event that is going to be dragged.
    *   item - The scheduler Event object that is going to be dragged.
    *   itemDateRange - The start/end dates for the Scheduler Event.
    *   originalEvent - The original event object.
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when dragging of an event finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
    *   target - The HTMLElement that corresponds to the event that is dragged.
    *   item - The scheduler Event object that is dragged.
    *   itemDateRange - The new start/end dates for the dragged Scheduler Event.
    *   originalEvent - The original event object.
    */
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
    *   target - The HTMLElement that corresponds to the event that is going to be resized.
    *   item - The scheduler Event object that is going to be resized.
    *   itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
    *   originalEvent - The original event object.
    */
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the resizing of an event finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
    *   target - The HTMLElement that corresponds to the event that is resized.
    *   item - The scheduler Event object that is resized.
    *   itemDateRange - The new start/end dates for the resized Scheduler Event.
    *   originalEvent - The original event object.
    */
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user starts top open the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
    *   target - The dialog window that is opening.
    *   item - The event object that is going to be edited.
    *   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
    */
    onEditDialogOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user opens the event dialog window.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
    *   target - The dialog window that is opened.
    *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
    *   item - The event object that is being edited.
    */
    onEditDialogOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user closes the event dialog window.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item)
    *   target - The dialog window that is closed.
    *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
    *   item - The event object that is being edited.
    */
    onEditDialogClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type)
    *   target - The dialog window that is closing.
    *   item - The event object that is edited.
    *   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
    */
    onEditDialogClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user begins to open the context menu on a timeline cell or an event element. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
    *   target - The context menu instance.
    *   owner - The HTMLElement that the menu belongs to.
    *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
    *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
    */
    onContextMenuOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the context menu is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
    *   target - The context menu instance.
    *   owner - The HTMLElement that the menu belongs to.
    *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
    *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
    */
    onContextMenuOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the context menu is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
    *   target - The context menu instance.
    *   owner - The HTMLElement that the menu belongs to.
    *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
    *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
    */
    onContextMenuClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user is about to close the context menu. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
    *   target - The context menu instance.
    *   owner - The HTMLElement that the menu belongs to.
    *   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
    *   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
    */
    onContextMenuClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the event menu is about to open. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
    *   target - The menu instance.
    *   owner - The HTMLElement of the event that the menu belongs to.
    *   eventObj - The event object that is the target of the menu.
    */
    onEventMenuOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the event menu is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
    *   target - The menu instance.
    *   owner - The HTMLElement of the event that the menu belongs to.
    *   eventObj - The event object that is the target of the menu.
    */
    onEventMenuOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the event menu is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
    *   target - The menu instance.
    *   owner - The HTMLElement of the event that the menu belongs to.
    *   eventObj - The event object that is the target of the menu.
    */
    onEventMenuClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the evet menu is about to close. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
    *   target - The menu instance.
    *   owner - The HTMLElement of the event that the menu belongs to.
    *   eventObj - The event object that is the target of the menu.
    */
    onEventMenuClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the date selection menu is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The menu instance.
    */
    onDateMenuOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the date selection menu is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The menu instance.
    */
    onDateMenuClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the view selection menu is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The menu instance.
    */
    onViewMenuOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the view selection menu is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The menu instance.
    */
    onViewMenuClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a notification is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
    *   instance - The toast item instance that is opened.
    */
    onNotificationOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a notification is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
    *   instance - The toast item instance that is closed.
    */
    onNotificationClose: EventEmitter<CustomEvent>;
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** @description Ends the update operation. This method will resume the rendering and will refresh the element.
    */
    endUpdate(): void;
    /** @description Refereshes the Scheduler by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
    */
    refresh(fullRefresh?: boolean): void;
    /** @description Exports the events from the Scheduler.
    * @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
    */
    exportData(dataFormat: string, callback?: any): void;
    /** @description Returns a JSON representation of the events inside the Scheduler.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    clearState(): void;
    /** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
    */
    loadState(state?: any[]): void;
    /** @description Saves the current events of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events.
    */
    saveState(state?: any[]): void;
    /** @description Checks whether the Scheduler contains the event.
    * @param {any} eventObj. A Scheduler event object.
    * @returns {boolean}
  */
    containsEvent(eventObj: any): Promise<any>;
    /** @description Inserts an event.
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
    */
    insertEvent(eventObj: any, index?: number): void;
    /** @description Updates an event.
    * @param {any} index. A number that represents the index of an event or a Scheduler event object.
    * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
    */
    updateEvent(index: any, eventObj: any): void;
    /** @description Removes an event.
    * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
    */
    removeEvent(index: any): void;
    /** @description Opens the popup Window for specific event Editing.
    * @param {any} index. A number that represents the index of a event or the actual event object to be edited.
    */
    openWindow(index: any): void;
    /** @description Closes the popup window.
    */
    closeWindow(): void;
    /** @description Prepares the Scheduler for printing by opening the browser's Print Preview.
    */
    print(): void;
    /** @description Scrolls the Scheduler to a Date.
    * @param {Date} date. The date to scroll to.
    */
    scrollToDate(date: Date): void;
    /** @description Scrolls the Scheduler to an event.
    * @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
    */
    scrollToEvent(index: any): void;
    /** @description Opens a custom notification.
    * @param {string} message. The notification message.
    * @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
    */
    openNotification(message: string, toastSettings: any): void;
    /** @description Closes all notifications.
    */
    closeNotifications(): void;
    /** @description Returns all occurances of an event.
    * @param {any} eventObj. A Scheduler evnet object.
    * @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
    */
    occurrences(eventObj: any, count: number): void;
    /** @description Returns all occurances of an event between two dates.
    * @param {any} eventObj. A Scheduler event object.
    * @param {Date} dateFrom. The start date.
    * @param {Date} dateTo. The end date.
    */
    occurrencesBetween(eventObj: any, dateFrom: Date, dateTo: Date): void;
    /** @description Returns the first occurance of an event after a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date after which the first occurance of the event will be returned.
    */
    occurrenceAfter(eventObj: any, date: number): void;
    /** @description Returns the first occurance of an event before a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date before which the first occurance of the event will be returned.
    */
    occurrenceBefore(eventObj: any, date: number): void;
    /** @description Returns the dateStart/dateEnd of a timeline cell.
    * @param {HTMLElement} cell. A Scheduler timeline cell element.
    * @returns {any}
  */
    getCellDateRange(cell: any): Promise<any>;
    /** @description Opens the tooltip(event menu) for an event.
    * @param {any} eventObj. A Scheduler event object or it's index.
    */
    openEventTooltip(eventObj: any): void;
    /** @description Closes the event tooltip (event menu).
    */
    closeEventTooltip(): void;
    /** @description Returns true or false whether the date is restricted or not.
    * @param {Date} date. A Scheduler event object or it's index.
    * @returns {boolean}
  */
    isDateRestricted(date: any): Promise<any>;
    /** @description Returns true or false whether the event is restricted or not.
    * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
    * @returns {boolean}
  */
    isEventRestricted(eventObj: any): Promise<any>;
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
