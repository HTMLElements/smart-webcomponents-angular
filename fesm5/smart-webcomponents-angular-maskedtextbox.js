
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.textbox';

import { __decorate, __extends } from 'tslib';
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
    useExisting: forwardRef(function () { return MaskedTextBoxComponent; }),
    multi: true
};
var MaskedTextBoxComponent = /** @class */ (function (_super) {
    __extends(MaskedTextBoxComponent, _super);
    function MaskedTextBoxComponent(ref) {
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
        /** @description This event is triggered when the value of the Text Box is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value before it was changed.
        *   value - The new value.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered on each key up event of the MaskedTextBox, if the value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value before it was changed.
        *   value - The new value.
        */
        _this.onChanging = new EventEmitter();
        /** @description This event is triggered if the validation property is set. Indicates whether valiation has passed successfully or not.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	success)
        *   success - A flag inidicating whether the validation was successfull or not.
        */
        _this.onValidation = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    MaskedTextBoxComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-masked-text-box');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(MaskedTextBoxComponent.prototype, "animation", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "allowPromptAsInput", {
        /** @description Determines whether promptChar can be entered as valid input by the user. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowPromptAsInput : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowPromptAsInput = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "asciiOnly", {
        /** @description Determines whether the input accepts characters only from the ASCII character set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.asciiOnly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.asciiOnly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "autoFocus", {
        /** @description Specifies whether the input should be focused when the page is loaded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoFocus : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "autoShowMask", {
        /** @description Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoShowMask : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoShowMask = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "cutCopyMaskFormat", {
        /** @description Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations. */
        get: function () {
            return this.nativeElement ? this.nativeElement.cutCopyMaskFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cutCopyMaskFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "enterKeyBehavior", {
        /** @description Specifies the behavior on "Enter" key press. Default mode is "submit". */
        get: function () {
            return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enterKeyBehavior = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "hidePromptOnLeave", {
        /** @description Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hidePromptOnLeave : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hidePromptOnLeave = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "hint", {
        /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "isOverwriteMode", {
        /** @description Determines whether new user input overwrites the existing input value or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.isOverwriteMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.isOverwriteMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "label", {
        /** @description Sets label above the element. The label is always visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "locale", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "mask", {
        /** @description Defines the mask for the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mask : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mask = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "maskCompleted", {
        /** @description Indicates whether all required fields of the mask have been populated or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maskCompleted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maskCompleted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "maskFull", {
        /** @description Indicates whether all required and optional fields of the mask have been populated or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maskFull : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maskFull = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "maxLength", {
        /** @description Determines the maximum number of characters that the user can enter. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "messages", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "name", {
        /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "placeholder", {
        /** @description A string that appears inside the input when there's no value and mask.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "promptChar", {
        /** @description Determines the prompt char that is used for the mask of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.promptChar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.promptChar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "readonly", {
        /** @description If the element is readonly, the users cannot iteract with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "rejectInputOnFirstFailure", {
        /** @description Determines whether the parsing of user input should stop after the first invalid character or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "required", {
        /** @description Specifies that the input must be filled in before submitting a form */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "resetOnPrompt", {
        /** @description Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resetOnPrompt : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resetOnPrompt = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "resetOnSpace", {
        /** @description Determines whether hitting space character resets the currently selected value from the input or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resetOnSpace : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resetOnSpace = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "selectAllOnFocus", {
        /** @description Specifies whether the value of the input will be selected on focus or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "textMaskFormat", {
        /** @description Determines whether the value of the input should contain or not the prompt/literals of the mask. */
        get: function () {
            return this.nativeElement ? this.nativeElement.textMaskFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.textMaskFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "theme", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "unfocusable", {
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
    Object.defineProperty(MaskedTextBoxComponent.prototype, "value", {
        /** @description Sets or gets the value of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "validation", {
        /** @description Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Focuses the element.
    */
    MaskedTextBoxComponent.prototype.focus = function () {
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
    /** @description Blurs the element.
    */
    MaskedTextBoxComponent.prototype.blur = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.blur();
            });
        }
    };
    Object.defineProperty(MaskedTextBoxComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    MaskedTextBoxComponent.prototype.ngOnInit = function () {
    };
    MaskedTextBoxComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    MaskedTextBoxComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(MaskedTextBoxComponent.prototype, "ngValue", {
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
    MaskedTextBoxComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    };
    MaskedTextBoxComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    MaskedTextBoxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    MaskedTextBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    MaskedTextBoxComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['changingHandler'] = function (event) { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['validationHandler'] = function (event) { that.onValidation.emit(event); };
        that.nativeElement.addEventListener('validation', that.eventHandlers['validationHandler']);
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
    MaskedTextBoxComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['changingHandler']) {
            that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
        }
        if (that.eventHandlers['validationHandler']) {
            that.nativeElement.removeEventListener('validation', that.eventHandlers['validationHandler']);
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
    MaskedTextBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "allowPromptAsInput", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "asciiOnly", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "autoFocus", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "autoShowMask", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "cutCopyMaskFormat", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "enterKeyBehavior", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "hidePromptOnLeave", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "isOverwriteMode", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "label", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "mask", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "maskCompleted", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "maskFull", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "promptChar", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "rejectInputOnFirstFailure", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "required", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "resetOnPrompt", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "resetOnSpace", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "selectAllOnFocus", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "textMaskFormat", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], MaskedTextBoxComponent.prototype, "validation", null);
    __decorate([
        Output()
    ], MaskedTextBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], MaskedTextBoxComponent.prototype, "onChanging", void 0);
    __decorate([
        Output()
    ], MaskedTextBoxComponent.prototype, "onValidation", void 0);
    MaskedTextBoxComponent = __decorate([
        Directive({
            exportAs: 'smart-masked-text-box', selector: 'smart-masked-text-box, [smart-masked-text-box]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], MaskedTextBoxComponent);
    return MaskedTextBoxComponent;
}(BaseElement));

var MaskedTextBoxModule = /** @class */ (function () {
    function MaskedTextBoxModule() {
    }
    MaskedTextBoxModule = __decorate([
        NgModule({
            declarations: [MaskedTextBoxComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [MaskedTextBoxComponent]
        })
    ], MaskedTextBoxModule);
    return MaskedTextBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { MaskedTextBoxComponent, MaskedTextBoxModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-maskedtextbox.js.map
