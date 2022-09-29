
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.gauge';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
import { EventEmitter, Output, Input, forwardRef, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
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
    return BaseElement;
}());
var Smart = window.Smart;

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return GaugeComponent; }),
    multi: true
};
var GaugeComponent = /** @class */ (function (_super) {
    __extends(GaugeComponent, _super);
    function GaugeComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        _this._onChange = function () { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        _this._onTouched = function () { };
        /** @description This event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value of the element.
        *   value - The new value of the element.
        */
        _this.onChange = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    GaugeComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-gauge');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(GaugeComponent.prototype, "analogDisplayType", {
        /** @description Determines the type of gauge's indicator. */
        get: function () {
            return this.nativeElement ? this.nativeElement.analogDisplayType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.analogDisplayType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "animation", {
        /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
        get: function () {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "animationDuration", {
        /** @description Sets or gets gauge's animation duration. Applicable only when animation is not 'none'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.animationDuration : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "coerce", {
        /** @description With the coerce property true, the value is set to the nearest value allowed by the interval property.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.coerce : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.coerce = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "customInterval", {
        /** @description Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.customInterval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.customInterval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "customTicks", {
        /** @description If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.customTicks : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.customTicks = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "dateLabelFormatString", {
        /** @description Determines the date pattern of the labels when mode is 'date'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dateLabelFormatString = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "decimalSeparator", {
        /** @description Sets or gets the char to use as the decimal separator in numeric values.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.decimalSeparator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "digitalDisplay", {
        /** @description Enables or disables the digital display of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.digitalDisplay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.digitalDisplay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "digitalDisplayPosition", {
        /** @description Sets the position of the digital display inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.digitalDisplayPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.digitalDisplayPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "disabled", {
        /** @description Enables or disables the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "drawNeedle", {
        /** @description Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle. */
        get: function () {
            return this.nativeElement ? this.nativeElement.drawNeedle : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.drawNeedle = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "endAngle", {
        /** @description Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees. */
        get: function () {
            return this.nativeElement ? this.nativeElement.endAngle : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.endAngle = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "interval", {
        /** @description When cooerce property is true, all values coerce to the interval's value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.interval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.interval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "inverted", {
        /** @description Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inverted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inverted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "labelFormatFunction", {
        /** @description A callback function that can be used to format the values displayed inside the gauge labels. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "labelsVisibility", {
        /** @description Determines the visibility of the labels inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelsVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "locale", {
        /** @description Sets or gets the locale. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "logarithmicScale", {
        /** @description Enables or disables the usage of logarithmic scale in the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "max", {
        /** @description Determines the maximum value for the scale of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "mechanicalAction", {
        /** @description Determines when the value of the element is updated. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mechanicalAction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "min", {
        /** @description Determines the minimum value for the scale of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "mode", {
        /** @description Determines whether the element works with numbers or dates. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "name", {
        /** @description Sets or gets the element's name, which is used as a reference when the data is submitted. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "needlePosition", {
        /** @description Determines the position of the needle when analogDisplayType is 'needle'.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.needlePosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.needlePosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "precisionDigits", {
        /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "ranges", {
        /** @description This property represents an array of objects. Each object is a different range. The range is a colored area with specific size. */
        get: function () {
            return this.nativeElement ? this.nativeElement.ranges : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.ranges = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "readonly", {
        /** @description When the element is read only the users cannot interact with it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "scalePosition", {
        /** @description Determines the position of the scale in the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.scalePosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "scaleType", {
        /** @description Determines the type of the gauge's value and scale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.scaleType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scaleType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "scientificNotation", {
        /** @description Enables or disables scientific notation. */
        get: function () {
            return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scientificNotation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "showRanges", {
        /** @description This property indicates whether the gauge ranges are visible or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showRanges : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showRanges = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "showUnit", {
        /** @description Enables or disables displaying of units. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showUnit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showUnit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "significantDigits", {
        /** @description Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.significantDigits : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "sizeMode", {
        /** @description Determines how the Gauge will size. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "startAngle", {
        /** @description Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees. */
        get: function () {
            return this.nativeElement ? this.nativeElement.startAngle : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.startAngle = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "theme", {
        /** @description Sets or gets the element's visual theme. */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "ticksPosition", {
        /** @description Determines the position of the ticks in the Gauge. */
        get: function () {
            return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "ticksVisibility", {
        /** @description Determines the visibility of the ticks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "unfocusable", {
        /** @description Sets or gets if the element can be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "unit", {
        /** @description Sets or gets the name of unit used for the values on the scale of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "validation", {
        /** @description Sets the value's validation by min/max. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "value", {
        /** @description Sets or gets the value of the element. The value can be a date only when scaleType is 'date'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "wordLength", {
        /** @description Sets or gets the word length. Applicable only when scaleType is 'integer'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.wordLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.wordLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Focuses the element.
    */
    GaugeComponent.prototype.focus = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.focus();
            });
        }
    };
    /** @description Gets the optimal size of the element (the current width and the height based on the plotted internal elements).
    * @returns {any}
  */
    GaugeComponent.prototype.getOptimalSize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getOptimalSize();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Get/set the value of the gauge.
    * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
    * @returns {string}
  */
    GaugeComponent.prototype.val = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.val(value);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Object.defineProperty(GaugeComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    GaugeComponent.prototype.ngOnInit = function () {
    };
    GaugeComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    GaugeComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(GaugeComponent.prototype, "ngValue", {
        get: function () {
            if (!this.nativeElement) {
                return null;
            }
            var value = this.nativeElement.value;
            return value;
        },
        set: function (value) {
            if (this.nativeElement) {
                this.writeValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    GaugeComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    };
    GaugeComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    GaugeComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    GaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    GaugeComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['changeModelHandler'] = function (event) {
            that._initialChange = false;
            that._onChange(that.nativeElement.value);
        };
        that.eventHandlers['blurModelHandler'] = function (event) {
            that._onTouched();
        };
        that.nativeElement.whenRendered(function () {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = function (event) {
                    setTimeout(function () { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    };
    /** @description Remove event listeners. */
    GaugeComponent.prototype.unlisten = function () {
        var that = this;
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
    };
    GaugeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return GaugeComponent;
}(BaseElement));

var GaugeModule = /** @class */ (function () {
    function GaugeModule() {
    }
    GaugeModule = __decorate([
        NgModule({
            declarations: [GaugeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [GaugeComponent]
        })
    ], GaugeModule);
    return GaugeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { GaugeComponent, GaugeModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-gauge.js.map
