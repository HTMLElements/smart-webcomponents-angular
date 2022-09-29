
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.gauge';

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
    useExisting: forwardRef(() => GaugeComponent),
    multi: true
};
let GaugeComponent = class GaugeComponent extends BaseElement {
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
        /** @description This event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value of the element.
        *   value - The new value of the element.
        */
        this.onChange = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-gauge');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Determines the type of gauge's indicator. */
    get analogDisplayType() {
        return this.nativeElement ? this.nativeElement.analogDisplayType : undefined;
    }
    set analogDisplayType(value) {
        this.nativeElement ? this.nativeElement.analogDisplayType = value : undefined;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Sets or gets gauge's animation duration. Applicable only when animation is not 'none'. */
    get animationDuration() {
        return this.nativeElement ? this.nativeElement.animationDuration : undefined;
    }
    set animationDuration(value) {
        this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
    }
    /** @description With the coerce property true, the value is set to the nearest value allowed by the interval property.  */
    get coerce() {
        return this.nativeElement ? this.nativeElement.coerce : undefined;
    }
    set coerce(value) {
        this.nativeElement ? this.nativeElement.coerce = value : undefined;
    }
    /** @description Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks. */
    get customInterval() {
        return this.nativeElement ? this.nativeElement.customInterval : undefined;
    }
    set customInterval(value) {
        this.nativeElement ? this.nativeElement.customInterval = value : undefined;
    }
    /** @description If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks. */
    get customTicks() {
        return this.nativeElement ? this.nativeElement.customTicks : undefined;
    }
    set customTicks(value) {
        this.nativeElement ? this.nativeElement.customTicks = value : undefined;
    }
    /** @description Determines the date pattern of the labels when mode is 'date'. */
    get dateLabelFormatString() {
        return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
    }
    set dateLabelFormatString(value) {
        this.nativeElement ? this.nativeElement.dateLabelFormatString = value : undefined;
    }
    /** @description Sets or gets the char to use as the decimal separator in numeric values.  */
    get decimalSeparator() {
        return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
    }
    set decimalSeparator(value) {
        this.nativeElement ? this.nativeElement.decimalSeparator = value : undefined;
    }
    /** @description Enables or disables the digital display of the element. */
    get digitalDisplay() {
        return this.nativeElement ? this.nativeElement.digitalDisplay : undefined;
    }
    set digitalDisplay(value) {
        this.nativeElement ? this.nativeElement.digitalDisplay = value : undefined;
    }
    /** @description Sets the position of the digital display inside the element. */
    get digitalDisplayPosition() {
        return this.nativeElement ? this.nativeElement.digitalDisplayPosition : undefined;
    }
    set digitalDisplayPosition(value) {
        this.nativeElement ? this.nativeElement.digitalDisplayPosition = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle. */
    get drawNeedle() {
        return this.nativeElement ? this.nativeElement.drawNeedle : undefined;
    }
    set drawNeedle(value) {
        this.nativeElement ? this.nativeElement.drawNeedle = value : undefined;
    }
    /** @description Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees. */
    get endAngle() {
        return this.nativeElement ? this.nativeElement.endAngle : undefined;
    }
    set endAngle(value) {
        this.nativeElement ? this.nativeElement.endAngle = value : undefined;
    }
    /** @description When cooerce property is true, all values coerce to the interval's value. */
    get interval() {
        return this.nativeElement ? this.nativeElement.interval : undefined;
    }
    set interval(value) {
        this.nativeElement ? this.nativeElement.interval = value : undefined;
    }
    /** @description Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched. */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        this.nativeElement ? this.nativeElement.inverted = value : undefined;
    }
    /** @description A callback function that can be used to format the values displayed inside the gauge labels. */
    get labelFormatFunction() {
        return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
    }
    set labelFormatFunction(value) {
        this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
    }
    /** @description Determines the visibility of the labels inside the element. */
    get labelsVisibility() {
        return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
    }
    set labelsVisibility(value) {
        this.nativeElement ? this.nativeElement.labelsVisibility = value : undefined;
    }
    /** @description Sets or gets the locale. Used in conjunction with the property messages.  */
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
    /** @description Enables or disables the usage of logarithmic scale in the element. */
    get logarithmicScale() {
        return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
    }
    set logarithmicScale(value) {
        this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
    }
    /** @description Determines the maximum value for the scale of the element. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Determines when the value of the element is updated. */
    get mechanicalAction() {
        return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
    }
    set mechanicalAction(value) {
        this.nativeElement ? this.nativeElement.mechanicalAction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines the minimum value for the scale of the element.  */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Determines whether the element works with numbers or dates. */
    get mode() {
        return this.nativeElement ? this.nativeElement.mode : undefined;
    }
    set mode(value) {
        this.nativeElement ? this.nativeElement.mode = value : undefined;
    }
    /** @description Sets or gets the element's name, which is used as a reference when the data is submitted. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Determines the position of the needle when analogDisplayType is 'needle'.  */
    get needlePosition() {
        return this.nativeElement ? this.nativeElement.needlePosition : undefined;
    }
    set needlePosition(value) {
        this.nativeElement ? this.nativeElement.needlePosition = value : undefined;
    }
    /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'. */
    get precisionDigits() {
        return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
    }
    set precisionDigits(value) {
        this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
    }
    /** @description This property represents an array of objects. Each object is a different range. The range is a colored area with specific size. */
    get ranges() {
        return this.nativeElement ? this.nativeElement.ranges : undefined;
    }
    set ranges(value) {
        this.nativeElement ? this.nativeElement.ranges = value : undefined;
    }
    /** @description When the element is read only the users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the position of the scale in the element.  */
    get scalePosition() {
        return this.nativeElement ? this.nativeElement.scalePosition : undefined;
    }
    set scalePosition(value) {
        this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
    }
    /** @description Determines the type of the gauge's value and scale.  */
    get scaleType() {
        return this.nativeElement ? this.nativeElement.scaleType : undefined;
    }
    set scaleType(value) {
        this.nativeElement ? this.nativeElement.scaleType = value : undefined;
    }
    /** @description Enables or disables scientific notation. */
    get scientificNotation() {
        return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
    }
    set scientificNotation(value) {
        this.nativeElement ? this.nativeElement.scientificNotation = value : undefined;
    }
    /** @description This property indicates whether the gauge ranges are visible or not. */
    get showRanges() {
        return this.nativeElement ? this.nativeElement.showRanges : undefined;
    }
    set showRanges(value) {
        this.nativeElement ? this.nativeElement.showRanges = value : undefined;
    }
    /** @description Enables or disables displaying of units. */
    get showUnit() {
        return this.nativeElement ? this.nativeElement.showUnit : undefined;
    }
    set showUnit(value) {
        this.nativeElement ? this.nativeElement.showUnit = value : undefined;
    }
    /** @description Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'. */
    get significantDigits() {
        return this.nativeElement ? this.nativeElement.significantDigits : undefined;
    }
    set significantDigits(value) {
        this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
    }
    /** @description Determines how the Gauge will size. */
    get sizeMode() {
        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
    }
    set sizeMode(value) {
        this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
    }
    /** @description Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees. */
    get startAngle() {
        return this.nativeElement ? this.nativeElement.startAngle : undefined;
    }
    set startAngle(value) {
        this.nativeElement ? this.nativeElement.startAngle = value : undefined;
    }
    /** @description Sets or gets the element's visual theme. */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Determines the position of the ticks in the Gauge. */
    get ticksPosition() {
        return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
    }
    set ticksPosition(value) {
        this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
    }
    /** @description Determines the visibility of the ticks. */
    get ticksVisibility() {
        return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
    }
    set ticksVisibility(value) {
        this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
    }
    /** @description Sets or gets if the element can be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the name of unit used for the values on the scale of the element. */
    get unit() {
        return this.nativeElement ? this.nativeElement.unit : undefined;
    }
    set unit(value) {
        this.nativeElement ? this.nativeElement.unit = value : undefined;
    }
    /** @description Sets the value's validation by min/max. */
    get validation() {
        return this.nativeElement ? this.nativeElement.validation : undefined;
    }
    set validation(value) {
        this.nativeElement ? this.nativeElement.validation = value : undefined;
    }
    /** @description Sets or gets the value of the element. The value can be a date only when scaleType is 'date'. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Sets or gets the word length. Applicable only when scaleType is 'integer'. */
    get wordLength() {
        return this.nativeElement ? this.nativeElement.wordLength : undefined;
    }
    set wordLength(value) {
        this.nativeElement ? this.nativeElement.wordLength = value : undefined;
    }
    /** @description Focuses the element.
    */
    focus() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }
    /** @description Gets the optimal size of the element (the current width and the height based on the plotted internal elements).
    * @returns {any}
  */
    getOptimalSize() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getOptimalSize();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Get/set the value of the gauge.
    * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
    * @returns {string}
  */
    val(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.val(value);
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
        const value = this.nativeElement.value;
        return value;
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
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
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
        that.eventHandlers['changeModelHandler'] = (event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.value);
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
GaugeComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], GaugeComponent.prototype, "analogDisplayType", null);
__decorate([
    Input()
], GaugeComponent.prototype, "animation", null);
__decorate([
    Input()
], GaugeComponent.prototype, "animationDuration", null);
__decorate([
    Input()
], GaugeComponent.prototype, "coerce", null);
__decorate([
    Input()
], GaugeComponent.prototype, "customInterval", null);
__decorate([
    Input()
], GaugeComponent.prototype, "customTicks", null);
__decorate([
    Input()
], GaugeComponent.prototype, "dateLabelFormatString", null);
__decorate([
    Input()
], GaugeComponent.prototype, "decimalSeparator", null);
__decorate([
    Input()
], GaugeComponent.prototype, "digitalDisplay", null);
__decorate([
    Input()
], GaugeComponent.prototype, "digitalDisplayPosition", null);
__decorate([
    Input()
], GaugeComponent.prototype, "disabled", null);
__decorate([
    Input()
], GaugeComponent.prototype, "drawNeedle", null);
__decorate([
    Input()
], GaugeComponent.prototype, "endAngle", null);
__decorate([
    Input()
], GaugeComponent.prototype, "interval", null);
__decorate([
    Input()
], GaugeComponent.prototype, "inverted", null);
__decorate([
    Input()
], GaugeComponent.prototype, "labelFormatFunction", null);
__decorate([
    Input()
], GaugeComponent.prototype, "labelsVisibility", null);
__decorate([
    Input()
], GaugeComponent.prototype, "locale", null);
__decorate([
    Input()
], GaugeComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], GaugeComponent.prototype, "logarithmicScale", null);
__decorate([
    Input()
], GaugeComponent.prototype, "max", null);
__decorate([
    Input()
], GaugeComponent.prototype, "mechanicalAction", null);
__decorate([
    Input()
], GaugeComponent.prototype, "messages", null);
__decorate([
    Input()
], GaugeComponent.prototype, "min", null);
__decorate([
    Input()
], GaugeComponent.prototype, "mode", null);
__decorate([
    Input()
], GaugeComponent.prototype, "name", null);
__decorate([
    Input()
], GaugeComponent.prototype, "needlePosition", null);
__decorate([
    Input()
], GaugeComponent.prototype, "precisionDigits", null);
__decorate([
    Input()
], GaugeComponent.prototype, "ranges", null);
__decorate([
    Input()
], GaugeComponent.prototype, "readonly", null);
__decorate([
    Input()
], GaugeComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], GaugeComponent.prototype, "scalePosition", null);
__decorate([
    Input()
], GaugeComponent.prototype, "scaleType", null);
__decorate([
    Input()
], GaugeComponent.prototype, "scientificNotation", null);
__decorate([
    Input()
], GaugeComponent.prototype, "showRanges", null);
__decorate([
    Input()
], GaugeComponent.prototype, "showUnit", null);
__decorate([
    Input()
], GaugeComponent.prototype, "significantDigits", null);
__decorate([
    Input()
], GaugeComponent.prototype, "sizeMode", null);
__decorate([
    Input()
], GaugeComponent.prototype, "startAngle", null);
__decorate([
    Input()
], GaugeComponent.prototype, "theme", null);
__decorate([
    Input()
], GaugeComponent.prototype, "ticksPosition", null);
__decorate([
    Input()
], GaugeComponent.prototype, "ticksVisibility", null);
__decorate([
    Input()
], GaugeComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], GaugeComponent.prototype, "unit", null);
__decorate([
    Input()
], GaugeComponent.prototype, "validation", null);
__decorate([
    Input()
], GaugeComponent.prototype, "value", null);
__decorate([
    Input()
], GaugeComponent.prototype, "wordLength", null);
__decorate([
    Output()
], GaugeComponent.prototype, "onChange", void 0);
GaugeComponent = __decorate([
    Directive({
        exportAs: 'smart-gauge', selector: 'smart-gauge, [smart-gauge]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], GaugeComponent);

let GaugeModule = class GaugeModule {
};
GaugeModule = __decorate([
    NgModule({
        declarations: [GaugeComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [GaugeComponent]
    })
], GaugeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { GaugeComponent, GaugeModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-gauge.js.map
