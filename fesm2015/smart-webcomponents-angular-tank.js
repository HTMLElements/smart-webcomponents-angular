
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tank';

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
    useExisting: forwardRef(() => TankComponent),
    multi: true
};
let TankComponent = class TankComponent extends BaseElement {
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
        /** @description This event is triggered when the value of the tank is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tank');
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
    /** @description If is set to true all values coerce to the interval, set in the interval property. */
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
    /** @description Sets or gets the pattern which labels are displayed in when mode is 'date'. */
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
    /** @description Enables or disables the widget.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description When cooerce property is true, all values coerce to the interval's value. */
    get interval() {
        return this.nativeElement ? this.nativeElement.interval : undefined;
    }
    set interval(value) {
        this.nativeElement ? this.nativeElement.interval = value : undefined;
    }
    /** @description Sets the direction of the tank. If is true - positions of the tank's begin and end are changed. */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        this.nativeElement ? this.nativeElement.inverted = value : undefined;
    }
    /** @description A callback function that can be used to format the values displayed on the tank labels. */
    get labelFormatFunction() {
        return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
    }
    set labelFormatFunction(value) {
        this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
    }
    /** @description Sets or gets the widget's label visibility */
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
    /** @description Callback, related to localization module.  */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Enables or disables the usage of logarithmic scale in the widget. */
    get logarithmicScale() {
        return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
    }
    set logarithmicScale(value) {
        this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
    }
    /** @description Sets or gets the maximum value of the widget. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Sets or gets the type of used mechanical action. */
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
    /** @description Sets or gets the minimum value of the widget.  */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Sets or gets whether the widget works with numbers or dates. */
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
    /** @description Sets the orientation of the widget */
    get orientation() {
        return this.nativeElement ? this.nativeElement.orientation : undefined;
    }
    set orientation(value) {
        this.nativeElement ? this.nativeElement.orientation = value : undefined;
    }
    /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'. */
    get precisionDigits() {
        return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
    }
    set precisionDigits(value) {
        this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
    }
    /** @description If the widgets is readonly, the users cannot iteract with the element. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Sets the position of the widget's scales.  */
    get scalePosition() {
        return this.nativeElement ? this.nativeElement.scalePosition : undefined;
    }
    set scalePosition(value) {
        this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
    }
    /** @description Sets the type of the tank's scale.  */
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
    /** @description Enables or disables displaying of the thumb label. */
    get showThumbLabel() {
        return this.nativeElement ? this.nativeElement.showThumbLabel : undefined;
    }
    set showThumbLabel(value) {
        this.nativeElement ? this.nativeElement.showThumbLabel = value : undefined;
    }
    /** @description Enables or disables displaying of the tooltip. */
    get showTooltip() {
        return this.nativeElement ? this.nativeElement.showTooltip : undefined;
    }
    set showTooltip(value) {
        this.nativeElement ? this.nativeElement.showTooltip = value : undefined;
    }
    /** @description Enables or disables displaying of the units. */
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
    /** @description Sets or gets the element's visual theme.  */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets or gets the position of the thumb label. */
    get thumbLabelPosition() {
        return this.nativeElement ? this.nativeElement.thumbLabelPosition : undefined;
    }
    set thumbLabelPosition(value) {
        this.nativeElement ? this.nativeElement.thumbLabelPosition = value : undefined;
    }
    /** @description Sets or gets the position of the ticks in jqxTank widget. */
    get ticksPosition() {
        return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
    }
    set ticksPosition(value) {
        this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
    }
    /** @description Sets or gets the visibility of the ticks. */
    get ticksVisibility() {
        return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
    }
    set ticksVisibility(value) {
        this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
    }
    /** @description Sets or gets the position of the tooltip in jqxTank widget. */
    get tooltipPosition() {
        return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
    }
    set tooltipPosition(value) {
        this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
    }
    /** @description Sets or gets if the element can be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the name of unit used in jqxTank widget. */
    get unit() {
        return this.nativeElement ? this.nativeElement.unit : undefined;
    }
    set unit(value) {
        this.nativeElement ? this.nativeElement.unit = value : undefined;
    }
    /** @description Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
    get validation() {
        return this.nativeElement ? this.nativeElement.validation : undefined;
    }
    set validation(value) {
        this.nativeElement ? this.nativeElement.validation = value : undefined;
    }
    /** @description Sets or gets the value of the jqxTank widget.  */
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
    /** @description Focuses the tank.
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
    /** @description Gets the optimal size of the widget.
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
    /** @description Get/set the value of the tank.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank.
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
TankComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TankComponent.prototype, "animation", null);
__decorate([
    Input()
], TankComponent.prototype, "coerce", null);
__decorate([
    Input()
], TankComponent.prototype, "customInterval", null);
__decorate([
    Input()
], TankComponent.prototype, "customTicks", null);
__decorate([
    Input()
], TankComponent.prototype, "dateLabelFormatString", null);
__decorate([
    Input()
], TankComponent.prototype, "decimalSeparator", null);
__decorate([
    Input()
], TankComponent.prototype, "disabled", null);
__decorate([
    Input()
], TankComponent.prototype, "interval", null);
__decorate([
    Input()
], TankComponent.prototype, "inverted", null);
__decorate([
    Input()
], TankComponent.prototype, "labelFormatFunction", null);
__decorate([
    Input()
], TankComponent.prototype, "labelsVisibility", null);
__decorate([
    Input()
], TankComponent.prototype, "locale", null);
__decorate([
    Input()
], TankComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], TankComponent.prototype, "logarithmicScale", null);
__decorate([
    Input()
], TankComponent.prototype, "max", null);
__decorate([
    Input()
], TankComponent.prototype, "mechanicalAction", null);
__decorate([
    Input()
], TankComponent.prototype, "messages", null);
__decorate([
    Input()
], TankComponent.prototype, "min", null);
__decorate([
    Input()
], TankComponent.prototype, "mode", null);
__decorate([
    Input()
], TankComponent.prototype, "name", null);
__decorate([
    Input()
], TankComponent.prototype, "orientation", null);
__decorate([
    Input()
], TankComponent.prototype, "precisionDigits", null);
__decorate([
    Input()
], TankComponent.prototype, "readonly", null);
__decorate([
    Input()
], TankComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], TankComponent.prototype, "scalePosition", null);
__decorate([
    Input()
], TankComponent.prototype, "scaleType", null);
__decorate([
    Input()
], TankComponent.prototype, "scientificNotation", null);
__decorate([
    Input()
], TankComponent.prototype, "showThumbLabel", null);
__decorate([
    Input()
], TankComponent.prototype, "showTooltip", null);
__decorate([
    Input()
], TankComponent.prototype, "showUnit", null);
__decorate([
    Input()
], TankComponent.prototype, "significantDigits", null);
__decorate([
    Input()
], TankComponent.prototype, "theme", null);
__decorate([
    Input()
], TankComponent.prototype, "thumbLabelPosition", null);
__decorate([
    Input()
], TankComponent.prototype, "ticksPosition", null);
__decorate([
    Input()
], TankComponent.prototype, "ticksVisibility", null);
__decorate([
    Input()
], TankComponent.prototype, "tooltipPosition", null);
__decorate([
    Input()
], TankComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], TankComponent.prototype, "unit", null);
__decorate([
    Input()
], TankComponent.prototype, "validation", null);
__decorate([
    Input()
], TankComponent.prototype, "value", null);
__decorate([
    Input()
], TankComponent.prototype, "wordLength", null);
__decorate([
    Output()
], TankComponent.prototype, "onChange", void 0);
TankComponent = __decorate([
    Directive({
        exportAs: 'smart-tank', selector: 'smart-tank, [smart-tank]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], TankComponent);

let TankModule = class TankModule {
};
TankModule = __decorate([
    NgModule({
        declarations: [TankComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [TankComponent]
    })
], TankModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TankComponent, TankModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-tank.js.map
