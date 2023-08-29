import { Scheduler } from './../index';
import { SchedulerEventRenderMode, SchedulerDayFormat, FilterMode, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, SchedulerLegendLocation, SchedulerLegendPosition, SchedulerLegendLayout, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerScrollButtonsPosition, SchedulerSortOrder, SchedulerTimelineDayScale, SchedulerTimeZone, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, SchedulerViewStartDay, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerEvent, SchedulerResource, SchedulerStatuse } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { SchedulerEventRenderMode, SchedulerRepeatFreq, SchedulerNotificationType, SchedulerDayFormat, FilterMode, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, SchedulerLegendLocation, SchedulerLegendPosition, SchedulerLegendLayout, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerResourceSortOrder, SchedulerScrollButtonsPosition, SchedulerSortOrder, SchedulerTimelineDayScale, SchedulerTimeZone, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, SchedulerViewStartDay, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerEvent, SchedulerEventRepeat, SchedulerNotification, SchedulerResource, SchedulerStatuse, ElementRenderMode } from './../index';
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
    /** @description Determines whether the all day cells in Day and Week views automatically change their height depending on the events count in these cells.  */
    autoHeightAllDayCells: boolean;
    /** @description Defines an array of objects with start and end fields, where start and end are Date objects. For example: [{  'start': '2022-10-25T12:00.000Z', 'end': '2022-10-25T13:00.000Z' }].  */
    available: any;
    /** @description Determines the color scheme for the event background selector in the event window editor.  */
    colorScheme: string[];
    /** @description Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.  */
    currentTimeIndicator: boolean;
    /** @description Determines the refresh interval in seconds for the currentTimeIndicator.  */
    currentTimeIndicatorInterval: number;
    /** @description Determines the context menu items that are visible when the Context Menu is opened. */
    contextMenuDataSource: any[];
    /** @description Determines whether the clipboard shortcuts for copy/paste/cut action of events are visible in the Scheduler context menu or not. */
    contextMenuClipboardActions: boolean;
    /** @description Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    eventTemplate: any;
    /** @description Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    eventCollectorTemplate: any;
    /** @description  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created. */
    eventRenderMode: SchedulerEventRenderMode | string;
    /** @description Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    eventTooltipTemplate: any;
    /** @description Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell. */
    cellTemplate: any;
    /** @description Determines the currently visible date for the Scheduler. */
    dateCurrent: string | Date;
    /** @description Sets the Schedulers's Data Export options. */
    dataExport: SchedulerDataExport;
    /** @description Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties: */
    dataSource: SchedulerEvent[];
    /** @description A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date. */
    dateSelectorFormatFunction: any;
    /** @description Determines the day format of the dates in the timeline. */
    dayFormat: SchedulerDayFormat | string;
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
    /** @description Determines the filtering condition for the events.The filter property takes an array of objects or a function. Each object represents a single filtering condition with the following attributes: name - the name of the Scheduler event property that will be filtered by.value - the filtering condition value. The value will be used to compare the events based on the filterMode, for example: [{ name: 'price', value: 25 }]. The value can also be a function. The function accepts a single arguemnt - the value that corresponds to the filtered attribute. The function allows to apply custom condition that is different from the default filter modes. It should return true ( if the evnet passes the filtering condition ) or false ( if the event does not meet the filtering condition ). Here's an example: [{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]. In the example the events that do not have a 'roomId' property that is equal to '2' or '3' will be filtered out.. If a function is set to the filter property instead, it allows to completely customize the filtering logic. The function passes a single argument - each Scheduler event that will be displayed. The function should return true ( if the condition is met ) or false ( if not ). */
    filter: any;
    /** @description Determines whether Scheduler's filtering is enabled or not. */
    filterable: any;
    /** @description Determines the filter mode. */
    filterMode: FilterMode | string;
    /** @description A getter that returns  an array of all Scheduler events. */
    events: SchedulerEvent[];
    /** @description Determines the first day of week for the Scheduler. By default it's Sunday. */
    firstDayOfWeek: number;
    /** @description Allows to customize the footer of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: footerContainer - the footer container.. */
    footerTemplate: any;
    /** @description Determines whether the events will be grouped by date. */
    groupByDate: boolean;
    /** @description Determines the grouping orientation. */
    groupOrientation: SchedulerGroupOrientation | string;
    /** @description Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties. */
    groupTemplate: any;
    /** @description Determines the resources that the events are grouped by. */
    groups: any;
    /** @description Determines the end hour that will be displayed in 'day' and 'week' views. */
    hourEnd: number;
    /** @description Determines the start hour that will be displayed in 'day' and 'week' views. */
    hourStart: number;
    /** @description Determines the formatting of hours inside the element. */
    hourFormat: SchedulerHourFormat | string;
    /** @description Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container.. */
    headerTemplate: any;
    /** @description  Determines the position of the Date selector inside the Header of the element. */
    headerDatePosition: SchedulerHeaderDatePosition | string;
    /** @description  Determines the styling of the Header navigation controls. */
    headerNavigationStyle: SchedulerHeaderNavigationStyle | string;
    /** @description  Determines the position of the view selector control inside the Header of the element. */
    headerViewPosition: SchedulerHeaderViewPosition | string;
    /** @description Determines whether the 'All Day' container with the all day events is hidden or not. */
    hideAllDay: boolean;
    /** @description Determines whether the days set by 'nonworkingDays' property are hidden or not. */
    hideNonworkingWeekdays: boolean;
    /** @description Determines whether other month days are visible when view is set to month. When enabled, events that start on other month days are not displayed and the cells that represent such days do not allow the creation of new events on them. Also dragging and droping an event on other month days is not allowed. Reszing is also affected. Events can end on other month days, but cannot start on one. */
    hideOtherMonthDays: boolean;
    /** @description Determines whether the 'Today' button is hidden or not. */
    hideTodayButton: boolean;
    /** @description Determines whether the checkable items in the view selection menu are hidden or not. */
    hideViewMenuCheckableItems: boolean;
    /** @description Determines whether the weekend days are hidden or not. */
    hideWeekend: boolean;
    /** @description Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header. */
    legendLocation: SchedulerLegendLocation | string;
    /** @description Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that. */
    legendPosition: SchedulerLegendPosition | string;
    /** @description Determines the layout of the legend items. */
    legendLayout: SchedulerLegendLayout | string;
    /** @description Determines the number of items when the legend switches automatically from horizontal list to menu. */
    legendLayoutMenuBreakpoint: number;
    /** @description Determines the mouse wheel step. When this property is set to a positive number, the scroll step with mouse wheel or trackpad will depend on the property value. */
    mouseWheelStep: number;
    /** @description Determines weather or not horizontal scrollbar is shown. */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility | string;
    /** @description  Determines the language of the Scheduler.  */
    locale: string;
    /** @description Detetmines the maximum view date for the Scheduler. */
    max: string | Date;
    /** @description Detetmines the maximum number of events per Scheduler cell. By default this property is null which means that the number of events per cell is automatically determined by the size of the events. */
    maxEventsPerCell: number | null;
    /** @description Detetmines the minimum view date for the Scheduler. */
    min: string | Date;
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the minute formatting inside the Scheduler. */
    minuteFormat: MinuteFormat | string;
    /** @description Determines the month name formatting inside the Scheduler. */
    monthFormat: MonthFormat | string;
    /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable. */
    nonworkingDays: any;
    /** @description Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest. */
    nonworkingHours: any;
    /** @description Determines the interval (in seconds) at which the element will check for notifications. */
    notificationInterval: number;
    /** @description Determines the visibility of the resize handles. */
    resizeHandlesVisibility: ResizeHandlesVisibility | string;
    /** @description Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling */
    resizeInterval: number;
    /** @description An array of resources that can be assigned to the events. */
    resources: SchedulerResource[];
    /** @description Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed. */
    restrictedDates: any;
    /** @description Defines an array of hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed. */
    restrictedHours: any;
    /** @description Defines an array of dates and hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed. Each array item is an Object and requires 2 fields - date and hours. For example: { date: new Date(2022, 10, 1), hours: [[0, 6], 12, [20, 23]] }. The hours define a range of restricted hours similartly to the restricted hours property, the date defines a date where the restricted hours will be applied. */
    restricted: any;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description  Determines the position of the date navigation navigation buttons inside the header of the element. */
    scrollButtonsPosition: SchedulerScrollButtonsPosition | string;
    /** @description Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded. */
    shadeUntilCurrentTime: boolean;
    /** @description Determines whether the resource legend is visible or not. The Legend shows the resources and their items in the footer section of the Scheduler. If filterable is enabled it is possible to filter by resource items by clicking on the corresponding resource item from the legend. */
    showLegend: boolean;
    /** @description Determines the name of the resource data item property that will be used for sorting the resource data defined as the resource.dataSource. */
    sortBy: string;
    /** @description Allows to define a custom sorting function that will be used to sort the resource data. The sortFunction is used when sortOrder is set to custom. */
    sortFunction: any;
    /** @description Determines the sorting order of the resource data items. When set to custom, a custom sorting function has to be defined for the sortFunction property. The asc stands for 'ascending' while desc means 'descending' sorting order. */
    sortOrder: SchedulerSortOrder | string;
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
    timelineDayScale: SchedulerTimelineDayScale | string;
    /** @description Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views. */
    timeRulerTicks: boolean;
    /** @description Determines the timeZone for the element. By default if the local time zone is used if the property is not set. */
    timeZone: SchedulerTimeZone | string;
    /** @description Allows to display additional timeZones at once along with the default that is set via the timeZone property. Accepts an array values that represent the ids of valid time zones. The possbile time zones can be viewed in the timeZone property description. By default the local time zone is displayed. */
    timeZones: any;
    /** @description Determines the delay ( in miliseconds) before the tooltip/menu appears. */
    tooltipDelay: number;
    /** @description Determines the offset ot the tooltip/menu. */
    tooltipOffset: number[];
    /** @description Determines weather or not vertical scrollbar is shown. */
    verticalScrollBarVisibility: VerticalScrollBarVisibility | string;
    /** @description Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view. */
    view: string;
    /** @description Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set. */
    viewType: SchedulerViewType | string;
    /** @description Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.hideHours - an Optional property applicable only to timelineWeek view that allows to hide the hour cells and only show the day cells. */
    views: SchedulerViews | string;
    /** @description Determines type of the view selector located in the header of the element. */
    viewSelectorType: SchedulerViewSelectorType | string;
    /** @description Determines the Start Date rule. The Week and TimelineWeek views start by default from the current date taking into account the firstDayOfWeek property. When this property is set to 'dateCurrent', these views will start from the value of the 'dateCurrent'. */
    viewStartDay: SchedulerViewStartDay | string;
    /** @description Determines the format of the week days inside the element.  */
    weekdayFormat: WeekDayFormat | string;
    /** @description Determines the format of the dates inside the timeline header when they represent years. */
    yearFormat: YearFormat | string;
    /** @description Sets or gets if the element can be focused. */
    unfocusable: boolean;
    /** @description Determines the maximum number of redo/undo steps that will be remembered by the Scheduler. When the number is reached the oldest records are removed in order to add new. */
    undoRedoSteps: number;
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
    /** @description This event is triggered when an Event has been updated/inserted/removed/dragged/resized or an exception of a repeating event has been added/updated/removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
    *   item - An object that represents the actual item with it's attributes.
    *   type - The type of change that is being done to the item.
    */
    onItemChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an Event is going to be updated/inserted/removed. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
    *   item - An object that represents the actual item with it's attributes.
    *   type - The type of change that is going to be made to the item (e.g. 'inserting', 'removing', 'updating', 'exceptionInserting', 'exceptionUpdating', 'exceptionRemoving').
    */
    onItemChanging: EventEmitter<CustomEvent>;
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
    /** @description This event is triggered before the view is changed via user interaction. The view change action can be canceled if event.preventDefault() is called on the event.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The value of the previously selected view.
    *   value - The value of the new selected view.
    */
    onViewChanging: EventEmitter<CustomEvent>;
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
    /** @description This event is triggered when the user drops an item over a cell.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	date, 	allDay)
    *   target - The HTMLElement that corresponds to the event that is dragged.
    *   date - The cell's date under the pointer.
    *   allDay - Boolean value, which is true when the cell under the pointer is all day cell.
    */
    onDropoverCell: EventEmitter<CustomEvent>;
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
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
    *   target - The dialog window that is opening.
    *   item - The event object that is going to be edited.
    *   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
    *   eventObj - The event object that is the target of the menu.
    */
    onEditDialogOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user opens the event dialog window.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
    *   target - The dialog window that is opened.
    *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
    *   item - The event object that is being edited.
    *   eventObj - The event object that is the target of the menu.
    */
    onEditDialogOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user closes the event dialog window.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
    *   target - The dialog window that is closed.
    *   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
    *   item - The event object that is being edited.
    *   eventObj - The event object that is the target of the menu.
    */
    onEditDialogClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
    *   target - The dialog window that is closing.
    *   item - The event object that is edited.
    *   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
    *   eventObj - The event object that is the target of the menu.
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
    /** @description Adds an event to the Scheduler. Accepts an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    */
    addEvent(eventObj: any): void;
    /** @description Adds a new view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} type. The view type.
    * @param {string} label. The view's label displayed in the header.
    * @param {string} value. The view's value used to identify the view.
    * @param {boolean} hideWeekend. Determines whether to hide the weekend.
    * @param {boolean} hideNonworkingWeekdays. Determines whether to hide the non working days.
    * @param {number} additionalDays. Determines whether to add additional days to the view.
    */
    addView(type: string, label: string, value: string, hideWeekend: boolean, hideNonworkingWeekdays: boolean, additionalDays: number): void;
    /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** @description Creates an event and adds it to the Scheduler.
    * @param {string} label. Event label.
    * @param {string} value. Event value.
    * @param {string} dateStart. Event date start.
    * @param {string} dateEnd. Event date end.
    * @param {boolean} allDay. Event all day. Set it to true to create all day event.
    */
    createEvent(label: string, value: string, dateStart: string, dateEnd: string, allDay: boolean): void;
    /** @description Ends the update operation. This method will resume the rendering and will refresh the element.
    */
    endUpdate(): void;
    /** @description Returns an array of the start and end view dates.
    * @returns {Date[]}
  */
    getViewDates(): Promise<any>;
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
    getDataSource(): Promise<any>;
    /** @description Returns a JSON representation of the resources inside the Scheduler.
    * @returns {any}
  */
    getResources(): Promise<any>;
    /** @description Gets a date from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {string}
  */
    getDateFromCoordinates(x: any, y: any): Promise<any>;
    /** @description Gets whether a cell is all day cell from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {boolean}
  */
    getIsAllDayCellFromCoordinates(x: any, y: any): Promise<any>;
    /** @description Returns the current state of the Scheduler. Includes the current dateCurernt, dataSource and timeZone properties.
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
    /** @description Sets the Scheduler's view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} view?. The view's value. For example: 'day'.
    */
    setView(view?: string): void;
    /** @description Checks whether the Scheduler contains the event.
    * @param {any} eventObj. A Scheduler event object.
    * @returns {boolean}
  */
    containsEvent(eventObj: any): Promise<any>;
    /** @description Inserts an event as object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
    */
    insertEvent(eventObj: any, index?: number): void;
    /** @description Updates an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} index. A number that represents the index of an event or a Scheduler event object.
    * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
    */
    updateEvent(index: any, eventObj: any): void;
    /** @description Removes an existing event.
    * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
    */
    removeEvent(index: any): void;
    /** @description Returns an array of all exceptions of the target repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @returns {any}
  */
    getEventExceptions(eventObj: any): Promise<any>;
    /** @description Adds an event exception to a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.addEventException(eventObj, { date: occuranceDate, dateStart: newDateStart, dateEnd: newDateEnd, label: 'Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
    */
    addEventException(eventObj: any, exceptionObj: any): void;
    /** @description Updates an event exception of a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.updateEventException(eventObj, dateOfOccurance, { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
    * @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
    */
    updateEventException(eventObj: any, exceptionRef: any, exceptionObj: any): void;
    /** @description Removes an exception from a repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
    */
    removeEventException(eventObj: any, index: any): void;
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
    * @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
    * @param {boolean} autoScroll?. Calculates the scroll positions and element bounds, then adds an offset to scroll within the middle of the view.
    */
    scrollToDate(date: Date, strictScroll?: boolean, autoScroll?: boolean): void;
    /** @description Navigates the Scheduler to a Date.
    * @param {Date} date. The date to navigate to.
    */
    navigateToDate(date: Date): void;
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
    /** @description Returns the last occurance of an event before a date.
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
    * @param {Date} date. A Date object.
    * @returns {boolean}
  */
    isDateRestricted(date: any): Promise<any>;
    /** @description Returns true or false whether the hour is restricted or not.
    * @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
    * @returns {boolean}
  */
    isHourRestricted(hour: any): Promise<any>;
    /** @description Returns true or false whether the event is restricted or not.
    * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
    * @returns {boolean}
  */
    isEventRestricted(eventObj: any): Promise<any>;
    /** @description Deletes the current undo/redo history.
    * @returns {boolean}
  */
    deleteUndoRedoHistory(): Promise<any>;
    /** @description Indicates whether it is possible to redo an action.
    * @returns {boolean}
  */
    canRedo(): Promise<any>;
    /** @description Indicates whether it is possbile to undo an action.
    * @returns {boolean}
  */
    canUndo(): Promise<any>;
    /** @description Redo the next event modification.
    * @param {number} step?. A step to redo to.
    * @returns {boolean}
  */
    redo(step?: any): Promise<any>;
    /** @description Undo the last event modification.
    * @param {number} step?. A step to undo to.
    * @returns {boolean}
  */
    undo(step?: any): Promise<any>;
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
