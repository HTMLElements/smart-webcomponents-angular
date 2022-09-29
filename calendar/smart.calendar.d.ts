import { Calendar } from './../index';
import { Animation, CalendarMode, DayFormat, CalendarDisplayMode, CalendarDisplayModeView, MonthFormat, ViewLayout, LayoutPosition, CalendarSelectionMode, TooltipPosition, YearFormat } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, CalendarMode, DayFormat, CalendarDisplayMode, CalendarDisplayModeView, MonthFormat, ViewLayout, LayoutPosition, CalendarSelectionMode, TooltipPosition, YearFormat, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Calendar } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class CalendarComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<Calendar>);
    private eventHandlers;
    nativeElement: Calendar;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /**
    * @description
    * The registered callback function called when a change event occurs on the form elements.
    */
    _onChange: (value: any) => void;
    /**
    * @description
    * The registered callback function called when a blur event occurs on the form elements.
    */
    _onTouched: () => any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over. */
    animationSettings: any;
    /** @description Determines the date controls inside the header of the Calendar. */
    calendarMode: CalendarMode | string;
    /** @description Determines the format of the day names located above the days inside the calendar. */
    dayNameFormat: DayFormat | string;
    /** @description  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'. */
    dateFormatFunction: any;
    /** @description Enables or disables the Calendar. */
    disabled: boolean;
    /** @description Disables auto navigation when the user clicks on a date that's not from the current month in view. */
    disableAutoNavigation: boolean;
    /** @description Determines the date view of the calendar when calendarMode is set to 'default' */
    displayMode: CalendarDisplayMode | string;
    /** @description Determines the type of the month/year view when calendarMode is set to Default. */
    displayModeView: CalendarDisplayModeView | string;
    /** @description Determines the height of the month's drop down inside the Calendar. */
    dropDownHeight: string | number;
    /** @description Determines the width of the month's drop down inside the Calendar. */
    dropDownWidth: string | number;
    /** @description Determines the first day of the week. From 0(Sunday) to 6(Saturday) */
    firstDayOfWeek: number;
    /** @description Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
    footerTemplate: any;
    /** @description Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
    headerTemplate: any;
    /** @description Hides the names of the weekdays. */
    hideDayNames: boolean;
    /** @description Hides the dates from other months. */
    hideOtherMonthDays: boolean;
    /** @description Hides the arrow of the tooltip. */
    hideTooltipArrow: boolean;
    /** @description Sets the dates that will be displayed as important. */
    importantDates: string[] | Date[];
    /** @description Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it. */
    importantDatesTemplate: any;
    /** @description  Determines the language of the Calendar.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Determines the max date for the Calendar. Accepts date objects and valid date string formats. */
    max: string | Date;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the min date for the Calendar. Accepts date objects and valid date string formats. */
    min: string | Date;
    /** @description Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown. */
    months: number;
    /** @description Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1.  */
    monthNameFormat: MonthFormat | string;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date. */
    restrictedDates: string[] | Date[];
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description  Determines the direction of the navigation buttons located in the header and the animation. */
    scrollButtonsNavigationMode: ViewLayout | string;
    /** @description  Determines the position of the navigation buttons located inside the header.  */
    scrollButtonsPosition: LayoutPosition | string;
    /** @description Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format. */
    selectedDates: string[] | Date[];
    /** @description Determines the date selection mode. */
    selectionMode: CalendarSelectionMode | string;
    /** @description Sets the delay between clicks of the date navigation buttons located in the header of the Calendar.  */
    spinButtonsDelay: number;
    /** @description Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar.  */
    spinButtonsInitialDelay: number;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it. */
    titleTemplate: any;
    /** @description Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed. */
    tooltip: boolean;
    /** @description Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible. */
    tooltipArrow: boolean;
    /** @description Sets the delay of the tooltip before it appears. */
    tooltipDelay: number;
    /** @description Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate. */
    tooltipOffset: number[][];
    /** @description Sets the position of the tooltip. */
    tooltipPosition: TooltipPosition | string;
    /** @description Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference. */
    tooltipTemplate: any;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Determines the orientation of the Calendar. */
    view: ViewLayout | string;
    /** @description Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible. */
    viewSections: string[];
    /** @description Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar. */
    weekNumbers: boolean;
    /** @description Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ). */
    weeks: number;
    /** @description Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1. */
    yearFormat: YearFormat | string;
    /** @description This event is triggered when a new date has been selected/unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - An array of all currently selected dates.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldDisplayMode, 	newDisplayMode)
    *   oldDisplayMode - The previous display mode.
    *   newDisplayMode - The new display mode.
    */
    onDisplayModeChanging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the display mode has changed.
    *  @param event. The custom event. 	*/
    onDisplayModeChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
    *   value - The view's date.
    *   type - The view type - 'month', 'decade' or 'year'.
    */
    onNavigationChanging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the view is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
    *   value - The view's date.
    *   type - The view type - 'month', 'decade' or 'year'.
    */
    onNavigationChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the tooltip for the important date is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
    *   target - The event target - tooltip.
    *   value - The important date of the hovered cell.
    */
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the tooltip for the important date is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
    *   target - The event target - tooltip.
    *   value - The important date of the hovered cell.
    */
    onClose: EventEmitter<CustomEvent>;
    /** @description Clears the selection. Removes all seleceted dates.
    */
    clearSelection(): void;
    /** @description Navigates forwards/backwards depending on the argument.
    * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
    * @returns {boolean}
  */
    navigate(step: any): Promise<any>;
    /** @description Selects or Unselects a date.
    * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
    */
    select(date: Date | string): void;
    /** @description Selects today's date.
    * @returns {Date}
  */
    today(): Promise<any>;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _initialChange: boolean;
    ngValue: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
