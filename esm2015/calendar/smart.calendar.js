import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true
};
let CalendarComponent = class CalendarComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        this._onChange = () => { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        this._onTouched = () => { };
        /** @description This event is triggered when a new date has been selected/unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
        *   value - An array of all currently selected dates.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldDisplayMode, 	newDisplayMode)
        *   oldDisplayMode - The previous display mode.
        *   newDisplayMode - The new display mode.
        */
        this.onDisplayModeChanging = new EventEmitter();
        /** @description This event is triggered when the display mode has changed.
        *  @param event. The custom event. 	*/
        this.onDisplayModeChange = new EventEmitter();
        /** @description This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
        *   value - The view's date.
        *   type - The view type - 'month', 'decade' or 'year'.
        */
        this.onNavigationChanging = new EventEmitter();
        /** @description This event is triggered when the view is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
        *   value - The view's date.
        *   type - The view type - 'month', 'decade' or 'year'.
        */
        this.onNavigationChange = new EventEmitter();
        /** @description This event is triggered when the tooltip for the important date is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
        *   target - The event target - tooltip.
        *   value - The important date of the hovered cell.
        */
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the tooltip for the important date is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
        *   target - The event target - tooltip.
        *   value - The important date of the hovered cell.
        */
        this.onClose = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-calendar');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over. */
    get animationSettings() {
        return this.nativeElement ? this.nativeElement.animationSettings : undefined;
    }
    set animationSettings(value) {
        this.nativeElement ? this.nativeElement.animationSettings = value : undefined;
    }
    /** @description Determines the date controls inside the header of the Calendar. */
    get calendarMode() {
        return this.nativeElement ? this.nativeElement.calendarMode : undefined;
    }
    set calendarMode(value) {
        this.nativeElement ? this.nativeElement.calendarMode = value : undefined;
    }
    /** @description Determines the format of the day names located above the days inside the calendar. */
    get dayNameFormat() {
        return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
    }
    set dayNameFormat(value) {
        this.nativeElement ? this.nativeElement.dayNameFormat = value : undefined;
    }
    /** @description  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'. */
    get dateFormatFunction() {
        return this.nativeElement ? this.nativeElement.dateFormatFunction : undefined;
    }
    set dateFormatFunction(value) {
        this.nativeElement ? this.nativeElement.dateFormatFunction = value : undefined;
    }
    /** @description Enables or disables the Calendar. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Disables auto navigation when the user clicks on a date that's not from the current month in view. */
    get disableAutoNavigation() {
        return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
    }
    set disableAutoNavigation(value) {
        this.nativeElement ? this.nativeElement.disableAutoNavigation = value : undefined;
    }
    /** @description Determines the date view of the calendar when calendarMode is set to 'default' */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        this.nativeElement ? this.nativeElement.displayMode = value : undefined;
    }
    /** @description Determines the type of the month/year view when calendarMode is set to Default. */
    get displayModeView() {
        return this.nativeElement ? this.nativeElement.displayModeView : undefined;
    }
    set displayModeView(value) {
        this.nativeElement ? this.nativeElement.displayModeView = value : undefined;
    }
    /** @description Determines the height of the month's drop down inside the Calendar. */
    get dropDownHeight() {
        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
    }
    set dropDownHeight(value) {
        this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
    }
    /** @description Determines the width of the month's drop down inside the Calendar. */
    get dropDownWidth() {
        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
    }
    set dropDownWidth(value) {
        this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
    }
    /** @description Determines the first day of the week. From 0(Sunday) to 6(Saturday) */
    get firstDayOfWeek() {
        return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
    }
    set firstDayOfWeek(value) {
        this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
    }
    /** @description Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
    get footerTemplate() {
        return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
    }
    set footerTemplate(value) {
        this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
    }
    /** @description Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
    get headerTemplate() {
        return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
    }
    set headerTemplate(value) {
        this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
    }
    /** @description Hides the names of the weekdays. */
    get hideDayNames() {
        return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
    }
    set hideDayNames(value) {
        this.nativeElement ? this.nativeElement.hideDayNames = value : undefined;
    }
    /** @description Hides the dates from other months. */
    get hideOtherMonthDays() {
        return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
    }
    set hideOtherMonthDays(value) {
        this.nativeElement ? this.nativeElement.hideOtherMonthDays = value : undefined;
    }
    /** @description Hides the arrow of the tooltip. */
    get hideTooltipArrow() {
        return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
    }
    set hideTooltipArrow(value) {
        this.nativeElement ? this.nativeElement.hideTooltipArrow = value : undefined;
    }
    /** @description Sets the dates that will be displayed as important. */
    get importantDates() {
        return this.nativeElement ? this.nativeElement.importantDates : undefined;
    }
    set importantDates(value) {
        this.nativeElement ? this.nativeElement.importantDates = value : undefined;
    }
    /** @description Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it. */
    get importantDatesTemplate() {
        return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
    }
    set importantDatesTemplate(value) {
        this.nativeElement ? this.nativeElement.importantDatesTemplate = value : undefined;
    }
    /** @description  Determines the language of the Calendar.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Determines the max date for the Calendar. Accepts date objects and valid date string formats. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines the min date for the Calendar. Accepts date objects and valid date string formats. */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown. */
    get months() {
        return this.nativeElement ? this.nativeElement.months : undefined;
    }
    set months(value) {
        this.nativeElement ? this.nativeElement.months = value : undefined;
    }
    /** @description Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1.  */
    get monthNameFormat() {
        return this.nativeElement ? this.nativeElement.monthNameFormat : undefined;
    }
    set monthNameFormat(value) {
        this.nativeElement ? this.nativeElement.monthNameFormat = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date. */
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
    /** @description  Determines the direction of the navigation buttons located in the header and the animation. */
    get scrollButtonsNavigationMode() {
        return this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode : undefined;
    }
    set scrollButtonsNavigationMode(value) {
        this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode = value : undefined;
    }
    /** @description  Determines the position of the navigation buttons located inside the header.  */
    get scrollButtonsPosition() {
        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
    }
    set scrollButtonsPosition(value) {
        this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
    }
    /** @description Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format. */
    get selectedDates() {
        return this.nativeElement ? this.nativeElement.selectedDates : undefined;
    }
    set selectedDates(value) {
        this.nativeElement ? this.nativeElement.selectedDates = value : undefined;
    }
    /** @description Determines the date selection mode. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Sets the delay between clicks of the date navigation buttons located in the header of the Calendar.  */
    get spinButtonsDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
    }
    set spinButtonsDelay(value) {
        this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
    }
    /** @description Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar.  */
    get spinButtonsInitialDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
    }
    set spinButtonsInitialDelay(value) {
        this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it. */
    get titleTemplate() {
        return this.nativeElement ? this.nativeElement.titleTemplate : undefined;
    }
    set titleTemplate(value) {
        this.nativeElement ? this.nativeElement.titleTemplate = value : undefined;
    }
    /** @description Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed. */
    get tooltip() {
        return this.nativeElement ? this.nativeElement.tooltip : undefined;
    }
    set tooltip(value) {
        this.nativeElement ? this.nativeElement.tooltip = value : undefined;
    }
    /** @description Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible. */
    get tooltipArrow() {
        return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
    }
    set tooltipArrow(value) {
        this.nativeElement ? this.nativeElement.tooltipArrow = value : undefined;
    }
    /** @description Sets the delay of the tooltip before it appears. */
    get tooltipDelay() {
        return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
    }
    set tooltipDelay(value) {
        this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
    }
    /** @description Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate. */
    get tooltipOffset() {
        return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
    }
    set tooltipOffset(value) {
        this.nativeElement ? this.nativeElement.tooltipOffset = value : undefined;
    }
    /** @description Sets the position of the tooltip. */
    get tooltipPosition() {
        return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
    }
    set tooltipPosition(value) {
        this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
    }
    /** @description Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference. */
    get tooltipTemplate() {
        return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
    }
    set tooltipTemplate(value) {
        this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Determines the orientation of the Calendar. */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        this.nativeElement ? this.nativeElement.view = value : undefined;
    }
    /** @description Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible. */
    get viewSections() {
        return this.nativeElement ? this.nativeElement.viewSections : undefined;
    }
    set viewSections(value) {
        this.nativeElement ? this.nativeElement.viewSections = value : undefined;
    }
    /** @description Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar. */
    get weekNumbers() {
        return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
    }
    set weekNumbers(value) {
        this.nativeElement ? this.nativeElement.weekNumbers = value : undefined;
    }
    /** @description Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ). */
    get weeks() {
        return this.nativeElement ? this.nativeElement.weeks : undefined;
    }
    set weeks(value) {
        this.nativeElement ? this.nativeElement.weeks = value : undefined;
    }
    /** @description Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1. */
    get yearFormat() {
        return this.nativeElement ? this.nativeElement.yearFormat : undefined;
    }
    set yearFormat(value) {
        this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
    }
    /** @description Clears the selection. Removes all seleceted dates.
    */
    clearSelection() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }
    /** @description Navigates forwards/backwards depending on the argument.
    * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
    * @returns {boolean}
  */
    navigate(step) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.navigate(step);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Selects or Unselects a date.
    * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
    */
    select(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(date);
            });
        }
    }
    /** @description Selects today's date.
    * @returns {Date}
  */
    today() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.today();
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
    get ngValue() {
        if (!this.nativeElement) {
            return null;
        }
        if (this.selectedDates && this.selectedDates.length > 0) {
            const value = this.nativeElement.selectedDates.length === 1 ? this.nativeElement.selectedDates[0] : this.nativeElement.selectedDates;
            return value;
        }
        return null;
    }
    set ngValue(value) {
        if (this.nativeElement) {
            this.writeValue(value);
        }
    }
    writeValue(value) {
        const that = this;
        const normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(() => {
            that.nativeElement.isInitialized = that._initialChange ? false : true;
            that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach((currentValue) => this.select(currentValue));
            }
            else {
                that.select(normalizedValue);
            }
            that.nativeElement.isInitialized = true;
            if (that._initialChange === false) {
                if (that.selectedDates && that.selectedDates.length > 1) {
                    that._onChange(that.selectedDates);
                }
                else {
                    that._onChange((that.selectedDates && that.selectedDates.length > 0) ? that.selectedDates[0] : null);
                    ;
                }
            }
        });
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['displayModeChangingHandler'] = (event) => { that.onDisplayModeChanging.emit(event); };
        that.nativeElement.addEventListener('displayModeChanging', that.eventHandlers['displayModeChangingHandler']);
        that.eventHandlers['displayModeChangeHandler'] = (event) => { that.onDisplayModeChange.emit(event); };
        that.nativeElement.addEventListener('displayModeChange', that.eventHandlers['displayModeChangeHandler']);
        that.eventHandlers['navigationChangingHandler'] = (event) => { that.onNavigationChanging.emit(event); };
        that.nativeElement.addEventListener('navigationChanging', that.eventHandlers['navigationChangingHandler']);
        that.eventHandlers['navigationChangeHandler'] = (event) => { that.onNavigationChange.emit(event); };
        that.nativeElement.addEventListener('navigationChange', that.eventHandlers['navigationChangeHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['changeModelHandler'] = (event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedDates.length > 0 ? (that.nativeElement.selectedDates.length > 1 ? that.nativeElement.selectedDates : that.nativeElement.selectedDates[0]) : null);
        };
        that.eventHandlers['blurModelHandler'] = (event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = (event) => {
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['displayModeChangingHandler']) {
            that.nativeElement.removeEventListener('displayModeChanging', that.eventHandlers['displayModeChangingHandler']);
        }
        if (that.eventHandlers['displayModeChangeHandler']) {
            that.nativeElement.removeEventListener('displayModeChange', that.eventHandlers['displayModeChangeHandler']);
        }
        if (that.eventHandlers['navigationChangingHandler']) {
            that.nativeElement.removeEventListener('navigationChanging', that.eventHandlers['navigationChangingHandler']);
        }
        if (that.eventHandlers['navigationChangeHandler']) {
            that.nativeElement.removeEventListener('navigationChange', that.eventHandlers['navigationChangeHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['changeModelHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        }
        if (that.eventHandlers['blurModelHandler']) {
            that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
        }
    }
};
CalendarComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "animationSettings", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "calendarMode", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "dayNameFormat", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "dateFormatFunction", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "disableAutoNavigation", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "displayMode", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "displayModeView", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "dropDownHeight", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "dropDownWidth", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "firstDayOfWeek", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "footerTemplate", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "headerTemplate", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "hideDayNames", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "hideOtherMonthDays", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "hideTooltipArrow", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "importantDates", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "importantDatesTemplate", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "localizeFormatFunction", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "max", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "min", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "months", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "monthNameFormat", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "name", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "readonly", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "restrictedDates", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "scrollButtonsNavigationMode", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "scrollButtonsPosition", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "selectedDates", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "selectionMode", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "spinButtonsDelay", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "spinButtonsInitialDelay", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "titleTemplate", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "tooltip", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "tooltipArrow", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "tooltipDelay", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "tooltipOffset", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "tooltipPosition", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "tooltipTemplate", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "unfocusable", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "view", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "viewSections", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "weekNumbers", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "weeks", null);
tslib_1.__decorate([
    Input()
], CalendarComponent.prototype, "yearFormat", null);
tslib_1.__decorate([
    Output()
], CalendarComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], CalendarComponent.prototype, "onDisplayModeChanging", void 0);
tslib_1.__decorate([
    Output()
], CalendarComponent.prototype, "onDisplayModeChange", void 0);
tslib_1.__decorate([
    Output()
], CalendarComponent.prototype, "onNavigationChanging", void 0);
tslib_1.__decorate([
    Output()
], CalendarComponent.prototype, "onNavigationChange", void 0);
tslib_1.__decorate([
    Output()
], CalendarComponent.prototype, "onOpen", void 0);
tslib_1.__decorate([
    Output()
], CalendarComponent.prototype, "onClose", void 0);
CalendarComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-calendar, [smart-calendar]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], CalendarComponent);
export { CalendarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvY2FsZW5kYXIvIiwic291cmNlcyI6WyJzbWFydC5jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9MLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl6RSxNQUFNLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUE7QUFRRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLFdBQVc7SUFDakQsWUFBWSxHQUF5QjtRQUNwQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJSixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQWEzQjs7O1VBR0U7UUFDSCxjQUFTLEdBQXlCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUMxQzs7O1VBR0U7UUFDSCxlQUFVLEdBQWMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBcWN2Qzs7O1VBR0U7UUFDUSxhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7Ozs7VUFJRTtRQUNRLDBCQUFxQixHQUE4QixJQUFJ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QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7Z0VBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs4Q0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7Z0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt3REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs2Q0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs4Q0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO21EQUdQO0FBU1M7SUFBVCxNQUFNLEVBQUU7bURBQTBEO0FBT3pEO0lBQVQsTUFBTSxFQUFFO2dFQUF1RTtBQUl0RTtJQUFULE1BQU0sRUFBRTs4REFBcUU7QUFPcEU7SUFBVCxNQUFNLEVBQUU7K0RBQXNFO0FBT3JFO0lBQVQsTUFBTSxFQUFFOzZEQUFvRTtBQU9uRTtJQUFULE1BQU0sRUFBRTtpREFBd0Q7QUFPdkQ7SUFBVCxNQUFNLEVBQUU7a0RBQXlEO0FBNWdCdEQsaUJBQWlCO0lBTjdCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxrQ0FBa0M7UUFDNUMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7S0FFaEQsQ0FBQztHQUVXLGlCQUFpQixDQXl2QjdCO1NBenZCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBDYWxlbmRhck1vZGUsIERheUZvcm1hdCwgQ2FsZW5kYXJEaXNwbGF5TW9kZSwgQ2FsZW5kYXJEaXNwbGF5TW9kZVZpZXcsIE1vbnRoRm9ybWF0LCBWaWV3TGF5b3V0LCBMYXlvdXRQb3NpdGlvbiwgQ2FsZW5kYXJTZWxlY3Rpb25Nb2RlLCBUb29sdGlwUG9zaXRpb24sIFllYXJGb3JtYXQsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBDYWxlbmRhck1vZGUsIERheUZvcm1hdCwgQ2FsZW5kYXJEaXNwbGF5TW9kZSwgQ2FsZW5kYXJEaXNwbGF5TW9kZVZpZXcsIE1vbnRoRm9ybWF0LCBWaWV3TGF5b3V0LCBMYXlvdXRQb3NpdGlvbiwgQ2FsZW5kYXJTZWxlY3Rpb25Nb2RlLCBUb29sdGlwUG9zaXRpb24sIFllYXJGb3JtYXQsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENhbGVuZGFyQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1jYWxlbmRhciwgW3NtYXJ0LWNhbGVuZGFyXScsXG5cdHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPENhbGVuZGFyPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgQ2FsZW5kYXI7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IENhbGVuZGFyO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxDYWxlbmRhcj5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1jYWxlbmRhcicpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG4gICAgICAgIC8qKlxuICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgY2hhbmdlIGV2ZW50IG9jY3VycyBvbiB0aGUgZm9ybSBlbGVtZW50cy5cbiAgICAgICAgKi9cbiAgICAgICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gICAgICAgIC8qKlxuICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgYmx1ciBldmVudCBvY2N1cnMgb24gdGhlIGZvcm0gZWxlbWVudHMuXG4gICAgICAgICovXG4gICAgICAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFwcGxpZXMgbmV3IGFuaW1hdGlvbiBzZXR0aW5ncyB3aGVuIGl0IGlzIGVuYWJsZWQuIFByb3BlcnRpZXM6c3RhcnRTcGVlZCAtIERldGVybWluZXMgdGhlIGluaXRpYWwgc3BlZWQgb2YgdGhlIGFuaW1hdGlvbi5lYXNlVGhyZXNob2xkIC0gRGV0ZXJtaW5lcyB0aGUgcG9pbnQgYXQgd2hpY2ggdGhlIGFuaW1hdGlvbiBzdGFydHMgdG8gc2xvdyBkb3duIC0gdGhlIFwiZWFzZSBlZmZlY3RcIi5zdGVwIC0gRGV0ZXJtaW5lcyB0aGUgc3RlcCAoIHNjcm9sbGluZyBpbnRlcnZhbCApIGF0IHdoaWNoIHRoZSBhbmltYXRpb24gd2lsbCBydW4uIHN0ZXBFYXNlU2l6ZSAtIENvZWZmaWNpZW50IHRoYXQgaXMgdXNlZCB0byBjYWxjdWxhdGVkIHRoZSBuZXcgc3RlcCBvbmNlIHRoZSB0aHJlc2hvbGQgaGFzIGJlZW4gcGFzc2VkLiByZXNldFRocmVzaG9sZCAtIERldGVybWluZXMgdGhlIHRocmVzaG9sZCBmb3IgYW5pbWF0aW9uIHJlc2V0LiBXaGVuIGl0J3MgcmVhY2hlZCB0aGUgYW5pbWF0aW9uIHdpbGwgc3RhcnQgb3Zlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvblNldHRpbmdzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb25TZXR0aW5ncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uU2V0dGluZ3ModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb25TZXR0aW5ncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRlIGNvbnRyb2xzIGluc2lkZSB0aGUgaGVhZGVyIG9mIHRoZSBDYWxlbmRhci4gKi9cblx0QElucHV0KClcblx0Z2V0IGNhbGVuZGFyTW9kZSgpOiBDYWxlbmRhck1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FsZW5kYXJNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjYWxlbmRhck1vZGUodmFsdWU6IENhbGVuZGFyTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jYWxlbmRhck1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBkYXkgbmFtZXMgbG9jYXRlZCBhYm92ZSB0aGUgZGF5cyBpbnNpZGUgdGhlIGNhbGVuZGFyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF5TmFtZUZvcm1hdCgpOiBEYXlGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF5TmFtZUZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF5TmFtZUZvcm1hdCh2YWx1ZTogRGF5Rm9ybWF0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRheU5hbWVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIEEgY2FsbGJhY2sgdGhhdCBjYW4gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIGZvcm1hdCBvZiB0aGUgbW9udGggbmFtZSB3aGVuIGNhbGVuZGFyTW9kZSBpcyBzZXQgdG8gJ2RlZmF1bHQnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0ZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRlRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBDYWxlbmRhci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGF1dG8gbmF2aWdhdGlvbiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIGRhdGUgdGhhdCdzIG5vdCBmcm9tIHRoZSBjdXJyZW50IG1vbnRoIGluIHZpZXcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlQXV0b05hdmlnYXRpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQXV0b05hdmlnYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVBdXRvTmF2aWdhdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlQXV0b05hdmlnYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGF0ZSB2aWV3IG9mIHRoZSBjYWxlbmRhciB3aGVuIGNhbGVuZGFyTW9kZSBpcyBzZXQgdG8gJ2RlZmF1bHQnICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNwbGF5TW9kZSgpOiBDYWxlbmRhckRpc3BsYXlNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNwbGF5TW9kZSh2YWx1ZTogQ2FsZW5kYXJEaXNwbGF5TW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNwbGF5TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBtb250aC95ZWFyIHZpZXcgd2hlbiBjYWxlbmRhck1vZGUgaXMgc2V0IHRvIERlZmF1bHQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNwbGF5TW9kZVZpZXcoKTogQ2FsZW5kYXJEaXNwbGF5TW9kZVZpZXcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheU1vZGVWaWV3IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNwbGF5TW9kZVZpZXcodmFsdWU6IENhbGVuZGFyRGlzcGxheU1vZGVWaWV3KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlNb2RlVmlldyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBoZWlnaHQgb2YgdGhlIG1vbnRoJ3MgZHJvcCBkb3duIGluc2lkZSB0aGUgQ2FsZW5kYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bkhlaWdodCgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25IZWlnaHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duSGVpZ2h0KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25IZWlnaHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIG1vbnRoJ3MgZHJvcCBkb3duIGluc2lkZSB0aGUgQ2FsZW5kYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bldpZHRoKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bldpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bldpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25XaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuIEZyb20gMChTdW5kYXkpIHRvIDYoU2F0dXJkYXkpICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlyc3REYXlPZldlZWsgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpcnN0RGF5T2ZXZWVrKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlyc3REYXlPZldlZWsgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIGN1c3RvbSBmb290ZXIgdGVtcGxhdGUuIEFjY2VwdHMgdGhlIGlkIG9mIGFuIEhUTUxUZW1wbGF0ZUVsZW1lbnQgb3IgYSByZWZlcmVuY2Ugb3QgaXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmb290ZXJUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9vdGVyVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvb3RlclRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9vdGVyVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBjdXN0b20gaGVhZGVyIHRlbXBsYXRlLiBBY2NlcHRzIHRoZSBpZCBvZiBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IG9yIGEgcmVmZXJlbmNlIG90IGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIHRoZSBuYW1lcyBvZiB0aGUgd2Vla2RheXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlRGF5TmFtZXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGF5TmFtZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVEYXlOYW1lcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRGF5TmFtZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZU90aGVyTW9udGhEYXlzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZU90aGVyTW9udGhEYXlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlT3RoZXJNb250aERheXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZU90aGVyTW9udGhEYXlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIHRoZSBhcnJvdyBvZiB0aGUgdG9vbHRpcC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVUb29sdGlwQXJyb3coKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVG9vbHRpcEFycm93IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlVG9vbHRpcEFycm93KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb29sdGlwQXJyb3cgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZGF0ZXMgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBhcyBpbXBvcnRhbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbXBvcnRhbnREYXRlcygpOiBzdHJpbmdbXSB8IERhdGVbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbXBvcnRhbnREYXRlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW1wb3J0YW50RGF0ZXModmFsdWU6IHN0cmluZ1tdIHwgRGF0ZVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmltcG9ydGFudERhdGVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYSB0ZW1wbGF0ZSBmb3IgdGhlIGltcG9ydGFudCBkYXRlcy4gQWNjZXB0cyB0aGUgaWQgb2YgYW4gSFRNTFRlbXBsYXRlIGVsZW1lbnQgaW5zaWRlIHRoZSBET00gb2Ygb3IgYSByZWZlcmVuY2UgdG8gaXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbXBvcnRhbnREYXRlc1RlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbXBvcnRhbnREYXRlc1RlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbXBvcnRhbnREYXRlc1RlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1wb3J0YW50RGF0ZXNUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgRGV0ZXJtaW5lcyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIENhbGVuZGFyLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdXNlZCB0byBjdXN0b21pemUgdGhlIGZvcm1hdCBvZiB0aGUgbWVzc2FnZXMgdGhhdCBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgTG9jYWxpemF0aW9uIE1vZHVsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1heCBkYXRlIGZvciB0aGUgQ2FsZW5kYXIuIEFjY2VwdHMgZGF0ZSBvYmplY3RzIGFuZCB2YWxpZCBkYXRlIHN0cmluZyBmb3JtYXRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4KCk6IHN0cmluZyB8IERhdGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXgodmFsdWU6IHN0cmluZyB8IERhdGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIHdpZGdldCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW4gZGF0ZSBmb3IgdGhlIENhbGVuZGFyLiBBY2NlcHRzIGRhdGUgb2JqZWN0cyBhbmQgdmFsaWQgZGF0ZSBzdHJpbmcgZm9ybWF0cy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbigpOiBzdHJpbmcgfCBEYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWluKHZhbHVlOiBzdHJpbmcgfCBEYXRlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBudW1iZXIgb2YgbW9udGhzIHRvIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGNhbGVuZGFyLiBUaGUgbWF4aW11bSBhbW91bnQgb2YgbW9udGhzIHRoYXQgY2FuIGJlIHNob3duIGlzIDEyLiBCeSBkZWZhdWx0IG9ubHkgMSBtb250aCBpcyBzaG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IG1vbnRocygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9udGhzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtb250aHModmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb250aHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBtb250aCBuYW1lcyBpbiB0aGUgaGVhZGVyIHdoZW4gRGlzcGxheU1vZGUgaXMgc2V0IHRvIERlZmF1bHQgb3Igd2hlbiBNb250aHMgcHJvcGVydHkgaXMgZ3JlYXRlciB0aGFuIDEuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9udGhOYW1lRm9ybWF0KCk6IE1vbnRoRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vbnRoTmFtZUZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbW9udGhOYW1lRm9ybWF0KHZhbHVlOiBNb250aEZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb250aE5hbWVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBuYW1lIGF0dHJpYnV0ZSBmb3IgdGhlIGVsZW1lbnQuIE5hbWUgaXMgdXNlZCB3aGVuIHN1Ym1pdGluZyBIVE1MIGZvcm1zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubmFtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5hbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgdGhlIGVsZW1lbnQgaXMgcmVhZG9ubHksIHVzZXJzIGNhbm5vdCBpbnRlcmFjdCB3aXRoIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyByZXN0cmljdGVkIGRhdGVzLiBSZXN0cmljdGVkIGRhdGVzIGFyZSBkYXRlcyB0aGF0IGNhbm5vdCBiZSBzZWxlY3RlZC9ob3ZlcmVkL2ZvY3VzZWQuIFRoZXkgYXJlIHZpc3VhbHkgc3R5bGVkIGFzIHJlc3RyaWN0ZWQuIFRoZSBkYXRlcyBjYW4gYmUgamF2YXNjcmlwdCBkYXRlIG9iamVjdHMgb3Igc3RyaW5ncyByZXByZXNlbnRpbmcgYSB2YWxpZCBkYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzdHJpY3RlZERhdGVzKCk6IHN0cmluZ1tdIHwgRGF0ZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc3RyaWN0ZWREYXRlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzdHJpY3RlZERhdGVzKHZhbHVlOiBzdHJpbmdbXSB8IERhdGVbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXN0cmljdGVkRGF0ZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uICBEZXRlcm1pbmVzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBsb2NhdGVkIGluIHRoZSBoZWFkZXIgYW5kIHRoZSBhbmltYXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzY3JvbGxCdXR0b25zTmF2aWdhdGlvbk1vZGUoKTogVmlld0xheW91dCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxCdXR0b25zTmF2aWdhdGlvbk1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNjcm9sbEJ1dHRvbnNOYXZpZ2F0aW9uTW9kZSh2YWx1ZTogVmlld0xheW91dCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxCdXR0b25zTmF2aWdhdGlvbk1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgbG9jYXRlZCBpbnNpZGUgdGhlIGhlYWRlci4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBzY3JvbGxCdXR0b25zUG9zaXRpb24oKTogTGF5b3V0UG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsQnV0dG9uc1Bvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzY3JvbGxCdXR0b25zUG9zaXRpb24odmFsdWU6IExheW91dFBvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbEJ1dHRvbnNQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBkYXRlcyB0aGF0IHdpbGwgYmUgc2VsZWN0ZWQuIFNlbGVjdGVkIGRhdGVzIGFyZSBzdHlsZWQgZGlmZmVyZW50bHkgdGhhbiB0aGUgcmVzdC4gVGhlIGRhdGVzIGNhbiBiZSBEYXRlIG9iamVjdHMgb3Igc3RyaW5ncyBpbiBhIHZhbGlkIGRhdGUgZm9ybWF0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0ZWREYXRlcygpOiBzdHJpbmdbXSB8IERhdGVbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZERhdGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZERhdGVzKHZhbHVlOiBzdHJpbmdbXSB8IERhdGVbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZERhdGVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRhdGUgc2VsZWN0aW9uIG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25Nb2RlKCk6IENhbGVuZGFyU2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25Nb2RlKHZhbHVlOiBDYWxlbmRhclNlbGVjdGlvbk1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBkZWxheSBiZXR3ZWVuIGNsaWNrcyBvZiB0aGUgZGF0ZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgbG9jYXRlZCBpbiB0aGUgaGVhZGVyIG9mIHRoZSBDYWxlbmRhci4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcGluQnV0dG9uc0RlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0RlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzcGluQnV0dG9uc0RlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BpbkJ1dHRvbnNEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBpbml0aWFsIGRlbGF5IGJlZm9yZSB0aGUgYWN0aW9uIG9mIHRoZSBkYXRlIG5hdmlnYXRpb24gYnV0dG9ucyBsb2NhdGVkIGluIHRoZSBoZWFkZXIgb2YgdGhlIENhbGVuZGFyLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHNwaW5CdXR0b25zSW5pdGlhbERlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0luaXRpYWxEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BpbkJ1dHRvbnNJbml0aWFsRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGluQnV0dG9uc0luaXRpYWxEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYSB0ZW1wbGF0ZSBmb3IgdGhlIHRpdGxlIHNlY3Rpb24gb2YgdGhlIENhbGVuZGFyLiBBY2NlcHRzIHRoZSBpZCBvZiBhbiBIVE1MVGVtcGxhdGUgZWxlbWVudCBpbnNpZGUgdGhlIERPTSBvZiBvciBhIHJlZmVyZW5jZSBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpdGxlVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpdGxlVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpdGxlVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aXRsZVRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMvRGlzYWJsZWQgdGhlIHRvb2x0aXAgZm9yIHRoZSBpbXBvcnRhbnQgZGF0ZXMuIElmIGVuYWJsZWQgd2hlbiBhbiBpbXBvcnRhbnQgZGF0ZSBpcyBob3ZlcmVkIGEgdG9vbHRpcCBpcyBkaXNwbGF5ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbHRpcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3cvSGlkZSB0aGUgYXJyb3cgb2YgdGhlIHRoZSB0b29sdGlwIGZvciB0aGUgaW1wb3J0YW50IGRhdGVzLiBCeSBkZWZhdWx0IHRoZSBhcnJvdyBpcyB2aXNpYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcEFycm93KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcEFycm93IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sdGlwQXJyb3codmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcEFycm93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGRlbGF5IG9mIHRoZSB0b29sdGlwIGJlZm9yZSBpdCBhcHBlYXJzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcERlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXBEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXQncyBhIGN1c3RvbSBvZmZzZXQgdG8gdGhlIHRvb2x0aXAncyBwb3NpdGlvbi4gQWNjZXB0cyBhbiBhcnJheSBvZiB0d28gbnVtYmVyczogdGhlIGxlZnQgY29vcmRpbmF0ZSBhbmQgdGhlIHRvcCBjb29yZGluYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcE9mZnNldCgpOiBudW1iZXJbXVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXBPZmZzZXQodmFsdWU6IG51bWJlcltdW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcE9mZnNldCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9vbHRpcC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2x0aXBQb3NpdGlvbigpOiBUb29sdGlwUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcFBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sdGlwUG9zaXRpb24odmFsdWU6IFRvb2x0aXBQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIHRlbXBsYXRlIGZvciB0aGUgdG9vbHRpcCdzIGNvbnRlbnQuIEFjY2VwdHMgdGhlIGlkIG9mIGFuIEhUTUxURW1wbGF0ZSBlbGVtZW50IGluc2lkZSB0aGUgRE9NIG9yIGl0J3MgcmVmZXJlbmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcFRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXBUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXBUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgQ2FsZW5kYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aWV3KCk6IFZpZXdMYXlvdXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlldyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlldyh2YWx1ZTogVmlld0xheW91dCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHZpc2libGUgc2VjdGlvbnMgb2YgdGhlIENhbGVuZGFyLiBUaGUgdmlldyBzZWN0aW9ucyBhcmUgOiB0aXRsZSwgaGVhZGVyLCBmb290ZXIuIE11bHRpcGxlIHNlY3Rpb25zIGNhbiBiZSBhcHBsaWVkIGF0IHRoZSBzYW1lIHRpbWUuIEJ5IGRlZmF1bHQgb25seSB0aGUgJ2hlYWRlcicgc2VjdGlvbiBpcyB2aXNpYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmlld1NlY3Rpb25zKCk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpZXdTZWN0aW9ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlld1NlY3Rpb25zKHZhbHVlOiBzdHJpbmdbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aWV3U2VjdGlvbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcy9EaXNhYmxlZCB3ZWVrIG51bWJlcmluZy4gSWYgZW5hYmxlZCB3ZWVrIG51bWJlcnMgYXJlIGRpc3BsYXllZCBpbmZyb250IG9mIGVhY2ggd2VlayBpbnNpZGUgdGhlIENhbGVuZGFyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2Vla051bWJlcnMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrTnVtYmVycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgd2Vla051bWJlcnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2Vla051bWJlcnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbnVtYmVyIG9mIHZpc2libGUgd2Vla3MuIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgcmFuZ2VzIGZyb20gMSB0byA2LiBXaGVyZSAxIGlzIG9uZSB3ZWVrIGFuZCA2IGlzIGEgZnVsbCBtb250aCAoIDYgd2Vla3MgKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHdlZWtzKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgd2Vla3ModmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53ZWVrcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB5ZWFyIGZvcm1hdCBpbiB0aGUgaGVhZGVyIHdoZW4gRGlzcGxheU1vZGUgaXMgc2V0IHRvIERlZmF1bHQgb3Igd2hlbiBNb250aHMgcHJvcGVydHkgaXMgZ3JlYXRlciB0aGFuIDEuICovXG5cdEBJbnB1dCgpXG5cdGdldCB5ZWFyRm9ybWF0KCk6IFllYXJGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueWVhckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgeWVhckZvcm1hdCh2YWx1ZTogWWVhckZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC55ZWFyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBuZXcgZGF0ZSBoYXMgYmVlbiBzZWxlY3RlZC91bnNlbGVjdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHZhbHVlKVxuXHQqICAgdmFsdWUgLSBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHNlbGVjdGVkIGRhdGVzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBkaXNwbGF5TW9kZSBpcyBhYm91dCB0byBjaGFuZ2UuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvbGREaXNwbGF5TW9kZSwgXHRuZXdEaXNwbGF5TW9kZSlcblx0KiAgIG9sZERpc3BsYXlNb2RlIC0gVGhlIHByZXZpb3VzIGRpc3BsYXkgbW9kZS5cblx0KiAgIG5ld0Rpc3BsYXlNb2RlIC0gVGhlIG5ldyBkaXNwbGF5IG1vZGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRpc3BsYXlNb2RlQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBkaXNwbGF5IG1vZGUgaGFzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25EaXNwbGF5TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpZXcgaXMgY2hhbmdpbmcuIFRoaXMgbmF2aWdhdGlvbiBjYW4gYmUgY2FuY2VsbGVkIGJ5IHVzaW5nIHRoZSBwcmV2ZW50RGVmYXVsdCBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dmFsdWUsIFx0dHlwZSlcblx0KiAgIHZhbHVlIC0gVGhlIHZpZXcncyBkYXRlLlxuXHQqICAgdHlwZSAtIFRoZSB2aWV3IHR5cGUgLSAnbW9udGgnLCAnZGVjYWRlJyBvciAneWVhcicuXG5cdCovXG5cdEBPdXRwdXQoKSBvbk5hdmlnYXRpb25DaGFuZ2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpZXcgaXMgY2hhbmdlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR2YWx1ZSwgXHR0eXBlKVxuXHQqICAgdmFsdWUgLSBUaGUgdmlldydzIGRhdGUuXG5cdCogICB0eXBlIC0gVGhlIHZpZXcgdHlwZSAtICdtb250aCcsICdkZWNhZGUnIG9yICd5ZWFyJy5cblx0Ki9cblx0QE91dHB1dCgpIG9uTmF2aWdhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHRvb2x0aXAgZm9yIHRoZSBpbXBvcnRhbnQgZGF0ZSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdHZhbHVlKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGV2ZW50IHRhcmdldCAtIHRvb2x0aXAuXG5cdCogICB2YWx1ZSAtIFRoZSBpbXBvcnRhbnQgZGF0ZSBvZiB0aGUgaG92ZXJlZCBjZWxsLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25PcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdG9vbHRpcCBmb3IgdGhlIGltcG9ydGFudCBkYXRlIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0dmFsdWUpXG5cdCogICB0YXJnZXQgLSBUaGUgZXZlbnQgdGFyZ2V0IC0gdG9vbHRpcC5cblx0KiAgIHZhbHVlIC0gVGhlIGltcG9ydGFudCBkYXRlIG9mIHRoZSBob3ZlcmVkIGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBzZWxlY3Rpb24uIFJlbW92ZXMgYWxsIHNlbGVjZXRlZCBkYXRlcy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyBmb3J3YXJkcy9iYWNrd2FyZHMgZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudC4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBEYXRlIHwgc3RyaW5nfSBzdGVwLiBUaGUgYXJndW1lbnQgY2FuIGJlIHRoZSBmb2xsb3dpbmc6IDx1bD48bGk+IG51bWJlciAtICByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBtb250aHMgdG8gc2Nyb2xsLiBDYW4gYmUgbmVnYXZ0aXZlLiBJZiBuZWdhdGl2ZSBpdCB3aWxsIHNjcm9sbCBiYWNrd2FyZHMuPC9saT48bGk+IERhdGUgLSBhIGRhdGUgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgRGF0ZSB0byBuYXZpZ2F0ZSB0by48L2xpPjxsaT4gc3RyaW5nIC0gYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgdmFsaWQgRGF0ZSwgZS5nLiBcIjIwMjAtMTAtMVwiIDwvbGk+PC91bD5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIG5hdmlnYXRlKHN0ZXApOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQubmF2aWdhdGUoc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIG9yIFVuc2VsZWN0cyBhIGRhdGUuIFxuXHQqIEBwYXJhbSB7RGF0ZSB8IHN0cmluZ30gZGF0ZS4gVGhlIGRhdGUgdG8gYmUgc2VsZWN0ZWQgb3IgdW5zZWxlY3RlZC4gVGhlIGRhdGUgY2FuIGJlIGEgRGF0ZSBvYmplY3Qgb3IgYSBzdHJpbmcgaW4gdmFsaWQgZGF0ZSBmb3JtYXQuXG5cdCovXG4gICAgcHVibGljIHNlbGVjdChkYXRlOiBEYXRlIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3QoZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgdG9kYXkncyBkYXRlLiBcblx0KiBAcmV0dXJucyB7RGF0ZX1cbiAgKi9cblx0cHVibGljIGFzeW5jIHRvZGF5KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC50b2RheSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdF9pbml0aWFsQ2hhbmdlID0gdHJ1ZTsgXG5cblx0Z2V0IG5nVmFsdWUoKTogYW55IHtcblx0XHRpZiAoIXRoaXMubmF0aXZlRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlcyAmJiB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWREYXRlc1swXSA6IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZERhdGVzO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cdH1cblxuXHRzZXQgbmdWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCkge1xuXHRcdCAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC5pc0luaXRpYWxpemVkID0gdGhhdC5faW5pdGlhbENoYW5nZSA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdHRoYXQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vcm1hbGl6ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChjdXJyZW50VmFsdWU6IGFueSkgPT4gdGhpcy5zZWxlY3QoY3VycmVudFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdChub3JtYWxpemVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC5pc0luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdGlmICh0aGF0Ll9pbml0aWFsQ2hhbmdlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHRoYXQuc2VsZWN0ZWREYXRlcyAmJiB0aGF0LnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9vbkNoYW5nZSh0aGF0LnNlbGVjdGVkRGF0ZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX29uQ2hhbmdlKCh0aGF0LnNlbGVjdGVkRGF0ZXMgJiYgdGhhdC5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApID8gdGhhdC5zZWxlY3RlZERhdGVzWzBdIDogbnVsbCk7O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX29uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5fb25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Rpc3BsYXlNb2RlQ2hhbmdpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EaXNwbGF5TW9kZUNoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Rpc3BsYXlNb2RlQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Rpc3BsYXlNb2RlQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkaXNwbGF5TW9kZUNoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRpc3BsYXlNb2RlQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Rpc3BsYXlNb2RlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaXNwbGF5TW9kZUNoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ25hdmlnYXRpb25DaGFuZ2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk5hdmlnYXRpb25DaGFuZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCduYXZpZ2F0aW9uQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ25hdmlnYXRpb25DaGFuZ2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ25hdmlnYXRpb25DaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25OYXZpZ2F0aW9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25hdmlnYXRpb25DaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ25hdmlnYXRpb25DaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXG5cbiAgICAgICAgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoYXQuX2luaXRpYWxDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoYXQuX29uQ2hhbmdlKHRoYXQubmF0aXZlRWxlbWVudC5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDAgPyAodGhhdC5uYXRpdmVFbGVtZW50LnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMSA/IHRoYXQubmF0aXZlRWxlbWVudC5zZWxlY3RlZERhdGVzIDogdGhhdC5uYXRpdmVFbGVtZW50LnNlbGVjdGVkRGF0ZXNbMF0pIDogbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5fb25Ub3VjaGVkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoYXQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5ldmVudEhhbmRsZXJzWydrZXl1cE1vZGVsSGFuZGxlciddID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKGV2ZW50KTsgfSwgNTApO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGF0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sna2V5dXBNb2RlbEhhbmRsZXInXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKTtcblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddKTtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Rpc3BsYXlNb2RlQ2hhbmdpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkaXNwbGF5TW9kZUNoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaXNwbGF5TW9kZUNoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkaXNwbGF5TW9kZUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Rpc3BsYXlNb2RlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaXNwbGF5TW9kZUNoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbmF2aWdhdGlvbkNoYW5naW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbmF2aWdhdGlvbkNoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWyduYXZpZ2F0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ25hdmlnYXRpb25DaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCduYXZpZ2F0aW9uQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWyduYXZpZ2F0aW9uQ2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXSk7XG4gICAgICAgICAgICBpZiAodGhhdC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhhdC5ldmVudEhhbmRsZXJzWydrZXl1cE1vZGVsSGFuZGxlciddKTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==