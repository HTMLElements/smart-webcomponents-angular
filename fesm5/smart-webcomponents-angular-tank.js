
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tank';

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
    useExisting: forwardRef(function () { return TankComponent; }),
    multi: true
};
var TankComponent = /** @class */ (function (_super) {
    __extends(TankComponent, _super);
    function TankComponent(ref) {
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
        /** @description This event is triggered when the value of the tank is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TankComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-tank');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TankComponent.prototype, "animation", {
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
    Object.defineProperty(TankComponent.prototype, "coerce", {
        /** @description If is set to true all values coerce to the interval, set in the interval property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.coerce : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.coerce = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "customInterval", {
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
    Object.defineProperty(TankComponent.prototype, "customTicks", {
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
    Object.defineProperty(TankComponent.prototype, "dateLabelFormatString", {
        /** @description Sets or gets the pattern which labels are displayed in when mode is 'date'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dateLabelFormatString = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "decimalSeparator", {
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
    Object.defineProperty(TankComponent.prototype, "disabled", {
        /** @description Enables or disables the widget.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "interval", {
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
    Object.defineProperty(TankComponent.prototype, "inverted", {
        /** @description Sets the direction of the tank. If is true - positions of the tank's begin and end are changed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inverted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inverted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "labelFormatFunction", {
        /** @description A callback function that can be used to format the values displayed on the tank labels. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "labelsVisibility", {
        /** @description Sets or gets the widget's label visibility */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelsVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "locale", {
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
    Object.defineProperty(TankComponent.prototype, "localizeFormatFunction", {
        /** @description Callback, related to localization module.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "logarithmicScale", {
        /** @description Enables or disables the usage of logarithmic scale in the widget. */
        get: function () {
            return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "max", {
        /** @description Sets or gets the maximum value of the widget. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "mechanicalAction", {
        /** @description Sets or gets the type of used mechanical action. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mechanicalAction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "messages", {
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
    Object.defineProperty(TankComponent.prototype, "min", {
        /** @description Sets or gets the minimum value of the widget.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "mode", {
        /** @description Sets or gets whether the widget works with numbers or dates. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "name", {
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
    Object.defineProperty(TankComponent.prototype, "orientation", {
        /** @description Sets the orientation of the widget */
        get: function () {
            return this.nativeElement ? this.nativeElement.orientation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.orientation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "precisionDigits", {
        /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "readonly", {
        /** @description If the widgets is readonly, the users cannot iteract with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(TankComponent.prototype, "scalePosition", {
        /** @description Sets the position of the widget's scales.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.scalePosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "scaleType", {
        /** @description Sets the type of the tank's scale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.scaleType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scaleType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "scientificNotation", {
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
    Object.defineProperty(TankComponent.prototype, "showThumbLabel", {
        /** @description Enables or disables displaying of the thumb label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showThumbLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showThumbLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "showTooltip", {
        /** @description Enables or disables displaying of the tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showTooltip : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showTooltip = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "showUnit", {
        /** @description Enables or disables displaying of the units. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showUnit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showUnit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "significantDigits", {
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
    Object.defineProperty(TankComponent.prototype, "theme", {
        /** @description Sets or gets the element's visual theme.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "thumbLabelPosition", {
        /** @description Sets or gets the position of the thumb label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.thumbLabelPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.thumbLabelPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "ticksPosition", {
        /** @description Sets or gets the position of the ticks in jqxTank widget. */
        get: function () {
            return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "ticksVisibility", {
        /** @description Sets or gets the visibility of the ticks. */
        get: function () {
            return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "tooltipPosition", {
        /** @description Sets or gets the position of the tooltip in jqxTank widget. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "unfocusable", {
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
    Object.defineProperty(TankComponent.prototype, "unit", {
        /** @description Sets or gets the name of unit used in jqxTank widget. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "validation", {
        /** @description Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "value", {
        /** @description Sets or gets the value of the jqxTank widget.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankComponent.prototype, "wordLength", {
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
    /** @description Focuses the tank.
    */
    TankComponent.prototype.focus = function () {
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
    /** @description Gets the optimal size of the widget.
    * @returns {any}
  */
    TankComponent.prototype.getOptimalSize = function () {
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
    /** @description Get/set the value of the tank.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank.
    * @returns {string}
  */
    TankComponent.prototype.val = function (value) {
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
    Object.defineProperty(TankComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TankComponent.prototype.ngOnInit = function () {
    };
    TankComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    TankComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(TankComponent.prototype, "ngValue", {
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
    TankComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    };
    TankComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    TankComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    TankComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    TankComponent.prototype.listen = function () {
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
    TankComponent.prototype.unlisten = function () {
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
    TankComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return TankComponent;
}(BaseElement));

var TankModule = /** @class */ (function () {
    function TankModule() {
    }
    TankModule = __decorate([
        NgModule({
            declarations: [TankComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [TankComponent]
        })
    ], TankModule);
    return TankModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TankComponent, TankModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-tank.js.map
