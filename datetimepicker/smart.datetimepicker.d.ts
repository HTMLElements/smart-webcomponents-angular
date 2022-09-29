import { DateTimePicker } from './../index';
import { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { DateTimePicker } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class DateTimePickerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<DateTimePicker>);
    private eventHandlers;
    nativeElement: DateTimePicker;
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
    /** @description Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over. */
    animationSettings: any;
    /** @description Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it. */
    autoClose: boolean;
    /** @description Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true. */
    autoCloseDelay: number;
    /** @description Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date. */
    calendarButton: boolean;
    /** @description Determines the position of the calendar button. */
    calendarButtonPosition: DropDownButtonPosition | string;
    /** @description Determines the header mode of the calendar pop-up. */
    calendarMode: CalendarMode | string;
    /** @description Sets or gets the format of calendar pop-up's day names. */
    dayNameFormat: DayFormat | string;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view. */
    disableAutoNavigation: boolean;
    /** @description Determines the time zone to display the value in. */
    displayKind: DateTimePickerDisplayKind | string;
    /** @description Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default. */
    displayModeView: CalendarDisplayModeView | string;
    /** @description Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element. */
    dropDownAppendTo: string;
    /** @description Sets or gets the pop-up display mode (what components appear in it, and its behaviour). */
    dropDownDisplayMode: DateTimePickerDropDownDisplayMode | string;
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    dropDownOverlay: boolean;
    /** @description Determines the pop-up position when opened. */
    dropDownPosition: DropDownPosition | string;
    /** @description Determines how the the value can be edited inside the input. */
    editMode: DateTimePickerEditMode | string;
    /** @description Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input. */
    enableMouseWheelAction: boolean;
    /** @description Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday) */
    firstDayOfWeek: number;
    /** @description Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied. */
    footerTemplate: any;
    /** @description Determines whether to display a footer. */
    footer: boolean;
    /** @description Determines the pattern that is used to display the value in. Built-in Date formats:// short date pattern'd' - 'M/d/yyyy',// long date pattern'D' - 'dddd, MMMM dd, yyyy',// short time pattern't' - 'h:mm tt',// long time pattern'T' - 'h:mm:ss tt',// long date, short time pattern'f' - 'dddd, MMMM dd, yyyy h:mm tt',// long date, long time pattern'F' - 'dddd, MMMM dd, yyyy h:mm:ss tt',// month/day pattern'M' - 'MMMM dd',// month/year pattern'Y' - 'yyyy MMMM',// S is a sortable format that does not vary by culture'S' - 'yyyy'-'MM'-'dd'T'HH':'mm':'ss'Date format strings:'d'-the day of the month;'dd'-the day of the month'ddd'-the abbreviated name of the day of the week'dddd'- the full name of the day of the week'h'-the hour, using a 12-hour clock from 1 to 12'hh'-the hour, using a 12-hour clock from 01 to 12'H'-the hour, using a 24-hour clock from 0 to 23'HH'- the hour, using a 24-hour clock from 00 to 23'm'-the minute, from 0 through 59'mm'-the minutes,from 00 though59'M'- the month, from 1 through 12'MM'- the month, from 01 through 12'MMM'-the abbreviated name of the month'MMMM'-the full name of the month's'-the second, from 0 through 59'ss'-the second, from 00 through 59't'- the first character of the AM/PM designator'tt'-the AM/PM designator'y'- the year, from 0 to 99'yy'- the year, from 00 to 99'yyy'-the year, with a minimum of three digits'yyyy'-the year as a four-digit number;'yyyyy'-the year as a four-digit number. */
    formatString: string;
    /** @description Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it. */
    headerTemplate: any;
    /** @description Hides the names of the weekdays in the calendar pop-up. */
    hideDayNames: boolean;
    /** @description Determines if dates from other months are visible or not in the calendar pop-up. */
    hideOtherMonthDays: boolean;
    /** @description Hides the arrow of the tooltip in the calendar pop-up. */
    hideTooltipArrow: boolean;
    /** @description Sets additional helper text below the element that appears only when the element is focused. */
    hint: string;
    /** @description Sets dates, displayed as important in the calendar pop-up. */
    importantDates: string[] | Date[];
    /** @description Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement. */
    importantDatesTemplate: string | HTMLTemplateElement;
    /** @description Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds. */
    interval: any;
    /** @description Sets a label above the element. */
    label: string;
    /** @description Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker. */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets the maximum allowed value. */
    max: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the minimum allowed value. */
    min: any;
    /** @description Sets or gets the element's name, which is used as a reference when the data is submitted in a form. */
    name: string;
    /** @description Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set. */
    nullable: boolean;
    /** @description Sets or gets whether the calendar pop-up is opened. */
    opened: boolean;
    /** @description Sets or gets the placeholder text to be shown in the input when value is null. */
    placeholder: string;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Sets or gets an array of dates (DateTime or Date objects) that cannot be selected. */
    restrictedDates: Date[];
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time. */
    spinButtons: boolean;
    /** @description Sets the delay between repeats of the spin buttons in miliseconds. */
    spinButtonsDelay: number;
    /** @description Sets a delay before the first repeat iteration of spin buttons in miliseconds. */
    spinButtonsInitialDelay: number;
    /** @description Sets or gets the position of the spin buttons. */
    spinButtonsPosition: DateTimePickerSpinButtonsPosition | string;
    /** @description Sets or gets the element's visual theme.  */
    theme: string;
    /** @description Enables/Disabled the tooltip for the important dates in the calendar pop-up. */
    tooltip: boolean;
    /** @description Sets the delay of the calendar pop-up's tooltip before it appears. */
    tooltipDelay: number;
    /** @description Sets the position of the tooltip in the calendar pop-up. */
    tooltipPosition: TooltipPosition | string;
    /** @description Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement. */
    tooltipTemplate: string | HTMLTemplateElement;
    /** @description Sets or gets if the element can be focused. */
    unfocusable: boolean;
    /** @description Determines the validation mechanism for the value by min/max. */
    validation: Validation | string;
    /** @description Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object. */
    value: any;
    /** @description Enables/Disabled week numbering in the calendar pop-up.  */
    weekNumbers: boolean;
    /** @description Determines the number of visible weeks in the calendar pop-up. */
    weeks: number;
    /** @description Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025. */
    yearCutoff: number;
    /** @description This event is triggered when the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The old value before it was changed presented as a DateTime object.
    *   value - The new value presented as a DateTime object.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the calendar pop-up is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the calendar pop-up is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description Closes the calendar pop-up.
    */
    close(): void;
    /** @description Focuses the input.
    */
    focus(): void;
    /** @description Opens the calendar pop-up.
    */
    open(): void;
    /** @description Selects the text inside the input.
    */
    select(): void;
    /** @description Gets a Date object.
    * @returns {Date}
  */
    getDate(): Promise<any>;
    /** @description Sets the date of the DateTimePicker.
    * @param {Date} date. The date object to be set.
    */
    setDate(date: Date): void;
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
