
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.textbox';

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
    useExisting: forwardRef(function () { return NumericTextBoxComponent; }),
    multi: true
};
var NumericTextBoxComponent = /** @class */ (function (_super) {
    __extends(NumericTextBoxComponent, _super);
    function NumericTextBoxComponent(ref) {
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
        /** @description This event is triggered when the value is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when the value in the input is being changed via keypress or paste.
        *  @param event. The custom event. 	*/
        _this.onChanging = new EventEmitter();
        /** @description This event is triggered when the dropdown is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when the dropdown is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when the radix is changed.
        *  @param event. The custom event. 	*/
        _this.onRadixChange = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    NumericTextBoxComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-numeric-text-box');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(NumericTextBoxComponent.prototype, "animation", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "decimalSeparator", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "disabled", {
        /** @description Enables or disables the jqxNumericTextBox.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "dropDownAppendTo", {
        /** @description Sets the parent container of the radix dropdown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "dropDownEnabled", {
        /** @description Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownEnabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownEnabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "enableMouseWheelAction", {
        /** @description Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "hint", {
        /** @description Sets additional helper text below the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "inputFormat", {
        /** @description Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.inputFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inputFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "label", {
        /** @description Sets a label above the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "leadingZeros", {
        /** @description If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength. */
        get: function () {
            return this.nativeElement ? this.nativeElement.leadingZeros : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.leadingZeros = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "locale", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "max", {
        /** @description Sets or gets the maximum value of the widget.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "messages", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "min", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "name", {
        /** @description The name of the control. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "nullable", {
        /** @description Enables or disables the setting of the value property to null or empty string.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.nullable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.nullable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "opened", {
        /** @description Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "outputFormatString", {
        /** @description Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.outputFormatString : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.outputFormatString = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "placeholder", {
        /** @description Determines the widget's place holder displayed when the widget's input is empty.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "precisionDigits", {
        /** @description Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "radix", {
        /** @description Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.radix : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.radix = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "radixDisplay", {
        /** @description Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.radixDisplay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.radixDisplay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "radixDisplayPosition", {
        /** @description Sets or gets the position of the radix display button of the jqxNumericTextBox.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.radixDisplayPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.radixDisplayPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "readonly", {
        /** @description Sets or gets the readonly state of the jqxNumericTextBox.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "scientificNotation", {
        /** @description Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scientificNotation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "showDropDownValues", {
        /** @description Determines whether to show the current value represented in all four numeral systems in the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showDropDownValues : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showDropDownValues = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "showUnit", {
        /** @description Enables or disables the visibility of the units.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.showUnit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showUnit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "significantDigits", {
        /** @description Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.significantDigits : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "spinButtons", {
        /** @description Enables or disables the visibility of the spin buttons.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "spinButtonsDelay", {
        /** @description Sets the delay between repeats of spin buttons in miliseconds.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "spinButtonsInitialDelay", {
        /** @description Sets a delay before the first repeat iteration of spin buttons in miliseconds.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "spinButtonsPosition", {
        /** @description Sets or gets the position of the spin buttons of the jqxNumericTextBox.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "spinButtonsStep", {
        /** @description Sets or gets the increase/decrease step.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "theme", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "unfocusable", {
        /** @description If is set to true, the element cannot be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "unit", {
        /** @description Sets or gets the name of unit used in jqxNumericTextBox widget.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.unit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "validation", {
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "value", {
        /** @description Sets or gets the value of the jqxNumericTextBox widget.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextBoxComponent.prototype, "wordLength", {
        /** @description Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.wordLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.wordLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Focuses the NumericTextBox.
    */
    NumericTextBoxComponent.prototype.focus = function () {
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
    /** @description Get/set the value of the NumericTextBox.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox.
    * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation.
    * @returns {string}
  */
    NumericTextBoxComponent.prototype.val = function (value, suppressValidation) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.val(value, suppressValidation);
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
    Object.defineProperty(NumericTextBoxComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    NumericTextBoxComponent.prototype.ngOnInit = function () {
    };
    NumericTextBoxComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    NumericTextBoxComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(NumericTextBoxComponent.prototype, "ngValue", {
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
    NumericTextBoxComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    };
    NumericTextBoxComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NumericTextBoxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NumericTextBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    NumericTextBoxComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['changingHandler'] = function (event) { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['radixChangeHandler'] = function (event) { that.onRadixChange.emit(event); };
        that.nativeElement.addEventListener('radixChange', that.eventHandlers['radixChangeHandler']);
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
                    that.nativeElement._validate(false, that.nativeElement.querySelector('input').value);
                    that.eventHandlers['changeModelHandler'](event);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    };
    /** @description Remove event listeners. */
    NumericTextBoxComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['changingHandler']) {
            that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['radixChangeHandler']) {
            that.nativeElement.removeEventListener('radixChange', that.eventHandlers['radixChangeHandler']);
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
    NumericTextBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "decimalSeparator", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "dropDownAppendTo", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "dropDownEnabled", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "enableMouseWheelAction", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "inputFormat", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "label", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "leadingZeros", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "max", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "min", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "nullable", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "outputFormatString", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "precisionDigits", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "radix", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "radixDisplay", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "radixDisplayPosition", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "scientificNotation", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "showDropDownValues", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "showUnit", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "significantDigits", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "spinButtons", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "spinButtonsDelay", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "spinButtonsInitialDelay", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "spinButtonsPosition", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "spinButtonsStep", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "unit", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "validation", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], NumericTextBoxComponent.prototype, "wordLength", null);
    __decorate([
        Output()
    ], NumericTextBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], NumericTextBoxComponent.prototype, "onChanging", void 0);
    __decorate([
        Output()
    ], NumericTextBoxComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], NumericTextBoxComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], NumericTextBoxComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], NumericTextBoxComponent.prototype, "onOpening", void 0);
    __decorate([
        Output()
    ], NumericTextBoxComponent.prototype, "onRadixChange", void 0);
    NumericTextBoxComponent = __decorate([
        Directive({
            exportAs: 'smart-numeric-text-box', selector: 'smart-numeric-text-box, [smart-numeric-text-box]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], NumericTextBoxComponent);
    return NumericTextBoxComponent;
}(BaseElement));

var NumericTextBoxModule = /** @class */ (function () {
    function NumericTextBoxModule() {
    }
    NumericTextBoxModule = __decorate([
        NgModule({
            declarations: [NumericTextBoxComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [NumericTextBoxComponent]
        })
    ], NumericTextBoxModule);
    return NumericTextBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { NumericTextBoxComponent, NumericTextBoxModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-numerictextbox.js.map
