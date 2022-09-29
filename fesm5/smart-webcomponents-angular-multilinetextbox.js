
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
    useExisting: forwardRef(function () { return MultilineTextBoxComponent; }),
    multi: true
};
var MultilineTextBoxComponent = /** @class */ (function (_super) {
    __extends(MultilineTextBoxComponent, _super);
    function MultilineTextBoxComponent(ref) {
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
        /** @description This event is triggered when the value of the text box is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
        *   oldValue - The previous value of the element before it was changed.
        *   value - The new value of the element.
        *   type - Indicates when the element was called, e.g. on blur or submit.
        */
        _this.onChange = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    MultilineTextBoxComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-multiline-text-box');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(MultilineTextBoxComponent.prototype, "animation", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "autoCapitalize", {
        /** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCapitalize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "autoComplete", {
        /** @description Determines whether the value of the control can be automatically completed by the browser. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoComplete : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoComplete = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "autoExpand", {
        /** @description Determines whether element will auto expand when the input overflows vertically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoExpand : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoExpand = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "autoFocus", {
        /** @description Determines whether the input should be focused when the page is loaded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoFocus : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "cols", {
        /** @description The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20. */
        get: function () {
            return this.nativeElement ? this.nativeElement.cols : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cols = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "displayMode", {
        /** @description Specifies how the characters are displayed inside the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "enterKeyBehavior", {
        /** @description Determines the behavior on "Enter" key. */
        get: function () {
            return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enterKeyBehavior = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "form", {
        /** @description The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
        get: function () {
            return this.nativeElement ? this.nativeElement.form : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.form = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "hint", {
        /** @description Sets additional helper text below the element. Appears only when the element is focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "horizontalScrollBarVisibility", {
        /** @description Controls horizontal scrollbar's visibility.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "inputPurpose", {
        /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "label", {
        /** @description Sets label above the element. The label is displayed above the input and it's always visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "locale", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "maxLength", {
        /** @description Sets or gets the maximum number of characters that the user can enter. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "minLength", {
        /** @description Sets or gets the minimum number of characters that the user can enter. */
        get: function () {
            return this.nativeElement ? this.nativeElement.minLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.minLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "messages", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "name", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "placeholder", {
        /** @description The placeholder text that is displayed when no value is applied to the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "readonly", {
        /** @description If enabled the users cannot iteract with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "required", {
        /** @description Specifies that the user must fill in a value before submitting a form that contains the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "resizable", {
        /** @description Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "rows", {
        /** @description The number of visible text lines for the control. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rows : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rows = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "selectAllOnFocus", {
        /** @description Specifies whether the content of the input will be selected on focus. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "selectionEnd", {
        /** @description Indicates the index of the last character in the current selection. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionEnd = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "selectionStart", {
        /** @description Indicates the index to the first character in the current selection. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionStart : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionStart = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "spellCheck", {
        /** @description Specifies whether the element is to have its spelling and grammar checked or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spellCheck : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "theme", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "unfocusable", {
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
    Object.defineProperty(MultilineTextBoxComponent.prototype, "value", {
        /** @description Sets or gets the value of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "verticalScrollBarVisibility", {
        /** @description Controls vertical scrollbar's visibility.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineTextBoxComponent.prototype, "wrap", {
        /** @description Indicates how the control wraps text. */
        get: function () {
            return this.nativeElement ? this.nativeElement.wrap : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.wrap = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Focuses the element.
    */
    MultilineTextBoxComponent.prototype.focus = function () {
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
    /** @description The method is used to reset the value of the element box to it's initial state.
    */
    MultilineTextBoxComponent.prototype.reset = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.reset();
            });
        }
    };
    /** @description Returns the currenctly selected text.
    * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
    * @returns {string}
  */
    MultilineTextBoxComponent.prototype.selection = function (displayMode) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.selection(displayMode);
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
    /** @description Selects a certain part of the input text. If no arguments are specified the whole text will be selected.
    * @param {any} rangeFrom?. Determines the start index of the text selection.
    * @param {any} rangeTo?. Determines the end index of the text selection.
    */
    MultilineTextBoxComponent.prototype.select = function (rangeFrom, rangeTo) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rangeFrom, rangeTo);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(rangeFrom, rangeTo);
            });
        }
    };
    Object.defineProperty(MultilineTextBoxComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    MultilineTextBoxComponent.prototype.ngOnInit = function () {
    };
    MultilineTextBoxComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    MultilineTextBoxComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(MultilineTextBoxComponent.prototype, "ngValue", {
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
    MultilineTextBoxComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    };
    MultilineTextBoxComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    MultilineTextBoxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    MultilineTextBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    MultilineTextBoxComponent.prototype.listen = function () {
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
    MultilineTextBoxComponent.prototype.unlisten = function () {
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
    MultilineTextBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "autoCapitalize", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "autoComplete", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "autoExpand", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "autoFocus", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "cols", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "displayMode", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "enterKeyBehavior", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "form", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "horizontalScrollBarVisibility", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "inputPurpose", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "label", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "maxLength", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "minLength", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "required", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "resizable", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "rows", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "selectAllOnFocus", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "selectionEnd", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "selectionStart", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "spellCheck", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "verticalScrollBarVisibility", null);
    __decorate([
        Input()
    ], MultilineTextBoxComponent.prototype, "wrap", null);
    __decorate([
        Output()
    ], MultilineTextBoxComponent.prototype, "onChange", void 0);
    MultilineTextBoxComponent = __decorate([
        Directive({
            exportAs: 'smart-multiline-text-box', selector: 'smart-multiline-text-box, [smart-multiline-text-box]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], MultilineTextBoxComponent);
    return MultilineTextBoxComponent;
}(BaseElement));

var ListItemComponent = /** @class */ (function (_super) {
    __extends(ListItemComponent, _super);
    function ListItemComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListItemComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-item');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListItemComponent.prototype, "alternationIndex", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.alternationIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "color", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.color : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.color = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "displayMode", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "grouped", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "selected", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selected = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "value", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "details", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.details : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.details = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "group", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.group : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.group = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "hidden", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.hidden : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hidden = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "readonly", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListItemComponent.prototype.ngOnInit = function () {
    };
    ListItemComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    ListItemComponent.prototype.ngOnDestroy = function () { };
    ListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    ListItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListItemComponent.prototype, "alternationIndex", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "color", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "displayMode", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "selected", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "value", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "label", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "details", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "group", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "hidden", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "readonly", null);
    ListItemComponent = __decorate([
        Directive({
            exportAs: 'smart-list-item', selector: 'smart-list-item, [smart-list-item]'
        })
    ], ListItemComponent);
    return ListItemComponent;
}(BaseElement));

var ListItemsGroupComponent = /** @class */ (function (_super) {
    __extends(ListItemsGroupComponent, _super);
    function ListItemsGroupComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListItemsGroupComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-items-group');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListItemsGroupComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemsGroupComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListItemsGroupComponent.prototype.ngOnInit = function () {
    };
    ListItemsGroupComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    ListItemsGroupComponent.prototype.ngOnDestroy = function () { };
    ListItemsGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    ListItemsGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListItemsGroupComponent.prototype, "label", null);
    ListItemsGroupComponent = __decorate([
        Directive({
            exportAs: 'smart-list-items-group', selector: 'smart-list-items-group, [smart-list-items-group]'
        })
    ], ListItemsGroupComponent);
    return ListItemsGroupComponent;
}(BaseElement));

var MultilineTextBoxModule = /** @class */ (function () {
    function MultilineTextBoxModule() {
    }
    MultilineTextBoxModule = __decorate([
        NgModule({
            declarations: [MultilineTextBoxComponent, ListItemComponent, ListItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [MultilineTextBoxComponent, ListItemComponent, ListItemsGroupComponent]
        })
    ], MultilineTextBoxModule);
    return MultilineTextBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ListItemComponent, ListItemsGroupComponent, MultilineTextBoxComponent, MultilineTextBoxModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-multilinetextbox.js.map
