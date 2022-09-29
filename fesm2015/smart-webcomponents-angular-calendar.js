
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.calendar';

import { __decorate, __awaiter } from 'tslib';
import { EventEmitter, Output, Input, forwardRef, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
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
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
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
const Smart = window.Smart;

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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        this.nativeElement.classList.add('smart-angular');
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
__decorate([
    Input()
], CalendarComponent.prototype, "animation", null);
__decorate([
    Input()
], CalendarComponent.prototype, "animationSettings", null);
__decorate([
    Input()
], CalendarComponent.prototype, "calendarMode", null);
__decorate([
    Input()
], CalendarComponent.prototype, "dayNameFormat", null);
__decorate([
    Input()
], CalendarComponent.prototype, "dateFormatFunction", null);
__decorate([
    Input()
], CalendarComponent.prototype, "disabled", null);
__decorate([
    Input()
], CalendarComponent.prototype, "disableAutoNavigation", null);
__decorate([
    Input()
], CalendarComponent.prototype, "displayMode", null);
__decorate([
    Input()
], CalendarComponent.prototype, "displayModeView", null);
__decorate([
    Input()
], CalendarComponent.prototype, "dropDownHeight", null);
__decorate([
    Input()
], CalendarComponent.prototype, "dropDownWidth", null);
__decorate([
    Input()
], CalendarComponent.prototype, "firstDayOfWeek", null);
__decorate([
    Input()
], CalendarComponent.prototype, "footerTemplate", null);
__decorate([
    Input()
], CalendarComponent.prototype, "headerTemplate", null);
__decorate([
    Input()
], CalendarComponent.prototype, "hideDayNames", null);
__decorate([
    Input()
], CalendarComponent.prototype, "hideOtherMonthDays", null);
__decorate([
    Input()
], CalendarComponent.prototype, "hideTooltipArrow", null);
__decorate([
    Input()
], CalendarComponent.prototype, "importantDates", null);
__decorate([
    Input()
], CalendarComponent.prototype, "importantDatesTemplate", null);
__decorate([
    Input()
], CalendarComponent.prototype, "locale", null);
__decorate([
    Input()
], CalendarComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], CalendarComponent.prototype, "max", null);
__decorate([
    Input()
], CalendarComponent.prototype, "messages", null);
__decorate([
    Input()
], CalendarComponent.prototype, "min", null);
__decorate([
    Input()
], CalendarComponent.prototype, "months", null);
__decorate([
    Input()
], CalendarComponent.prototype, "monthNameFormat", null);
__decorate([
    Input()
], CalendarComponent.prototype, "name", null);
__decorate([
    Input()
], CalendarComponent.prototype, "readonly", null);
__decorate([
    Input()
], CalendarComponent.prototype, "restrictedDates", null);
__decorate([
    Input()
], CalendarComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], CalendarComponent.prototype, "scrollButtonsNavigationMode", null);
__decorate([
    Input()
], CalendarComponent.prototype, "scrollButtonsPosition", null);
__decorate([
    Input()
], CalendarComponent.prototype, "selectedDates", null);
__decorate([
    Input()
], CalendarComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], CalendarComponent.prototype, "spinButtonsDelay", null);
__decorate([
    Input()
], CalendarComponent.prototype, "spinButtonsInitialDelay", null);
__decorate([
    Input()
], CalendarComponent.prototype, "theme", null);
__decorate([
    Input()
], CalendarComponent.prototype, "titleTemplate", null);
__decorate([
    Input()
], CalendarComponent.prototype, "tooltip", null);
__decorate([
    Input()
], CalendarComponent.prototype, "tooltipArrow", null);
__decorate([
    Input()
], CalendarComponent.prototype, "tooltipDelay", null);
__decorate([
    Input()
], CalendarComponent.prototype, "tooltipOffset", null);
__decorate([
    Input()
], CalendarComponent.prototype, "tooltipPosition", null);
__decorate([
    Input()
], CalendarComponent.prototype, "tooltipTemplate", null);
__decorate([
    Input()
], CalendarComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], CalendarComponent.prototype, "view", null);
__decorate([
    Input()
], CalendarComponent.prototype, "viewSections", null);
__decorate([
    Input()
], CalendarComponent.prototype, "weekNumbers", null);
__decorate([
    Input()
], CalendarComponent.prototype, "weeks", null);
__decorate([
    Input()
], CalendarComponent.prototype, "yearFormat", null);
__decorate([
    Output()
], CalendarComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], CalendarComponent.prototype, "onDisplayModeChanging", void 0);
__decorate([
    Output()
], CalendarComponent.prototype, "onDisplayModeChange", void 0);
__decorate([
    Output()
], CalendarComponent.prototype, "onNavigationChanging", void 0);
__decorate([
    Output()
], CalendarComponent.prototype, "onNavigationChange", void 0);
__decorate([
    Output()
], CalendarComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], CalendarComponent.prototype, "onClose", void 0);
CalendarComponent = __decorate([
    Directive({
        exportAs: 'smart-calendar', selector: 'smart-calendar, [smart-calendar]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], CalendarComponent);

let CalendarModule = class CalendarModule {
};
CalendarModule = __decorate([
    NgModule({
        declarations: [CalendarComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [CalendarComponent]
    })
], CalendarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarComponent, CalendarModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-calendar.js.map
