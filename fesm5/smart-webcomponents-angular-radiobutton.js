
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.button';

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
    useExisting: forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var RadioButtonComponent = /** @class */ (function (_super) {
    __extends(RadioButtonComponent, _super);
    function RadioButtonComponent(ref) {
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
        /** @description This event is triggered when the widget is checked/unchecked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
        *   value - A boolean value indicating the new state of the button ( checked or not ).
        *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
        *   changeType - A string flag indicating whether the change event was triggered via API or an event.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when the widget is checked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
        *   changeType - A string flag indicating whether the change event was triggered via API or an event.
        */
        _this.onCheckValue = new EventEmitter();
        /** @description This event is triggered when the widget is unchecked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
        *   changeType - A string flag indicating whether the change event was triggered via API or an event.
        */
        _this.onUncheckValue = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    RadioButtonComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-radio-button');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(RadioButtonComponent.prototype, "animation", {
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
    Object.defineProperty(RadioButtonComponent.prototype, "checked", {
        /** @description Sets or gets the check state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.checked : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.checked = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "checkMode", {
        /** @description Sets or gets the part that toggles the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.checkMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.checkMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "clickMode", {
        /** @description Sets the click mode of the radio button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.clickMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.clickMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "disabled", {
        /** @description Enables or disables the ratio button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "groupName", {
        /** @description Sets or gets the widget's group name. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupName : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupName = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "innerHTML", {
        /** @description Sets or gets the widget's innerHTML. */
        get: function () {
            return this.nativeElement ? this.nativeElement.innerHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "locale", {
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
    Object.defineProperty(RadioButtonComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(RadioButtonComponent.prototype, "messages", {
        /** @description Sets an object with string values, related to the different states of passwords strength. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "name", {
        /** @description Sets or gets the widget's name. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "readonly", {
        /** @description If the custom element is readonly, it cannot be interacted with. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(RadioButtonComponent.prototype, "theme", {
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
    Object.defineProperty(RadioButtonComponent.prototype, "unfocusable", {
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
    Object.defineProperty(RadioButtonComponent.prototype, "value", {
        /** @description Sets or gets the widget's value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.ngOnInit = function () {
    };
    RadioButtonComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    RadioButtonComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(RadioButtonComponent.prototype, "ngValue", {
        get: function () {
            if (!this.nativeElement) {
                return null;
            }
            var value = this.nativeElement.checked;
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
    RadioButtonComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.checked = normalizedValue;
            that.value = '' + normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    RadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    RadioButtonComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['checkValueHandler'] = function (event) { that.onCheckValue.emit(event); };
        that.nativeElement.addEventListener('checkValue', that.eventHandlers['checkValueHandler']);
        that.eventHandlers['uncheckValueHandler'] = function (event) { that.onUncheckValue.emit(event); };
        that.nativeElement.addEventListener('uncheckValue', that.eventHandlers['uncheckValueHandler']);
        that.eventHandlers['changeModelHandler'] = function (event) {
            that._initialChange = false;
            that._onChange(that.nativeElement.checked);
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
    RadioButtonComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['checkValueHandler']) {
            that.nativeElement.removeEventListener('checkValue', that.eventHandlers['checkValueHandler']);
        }
        if (that.eventHandlers['uncheckValueHandler']) {
            that.nativeElement.removeEventListener('uncheckValue', that.eventHandlers['uncheckValueHandler']);
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
    RadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "checked", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "checkMode", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "clickMode", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "groupName", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "innerHTML", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "name", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], RadioButtonComponent.prototype, "value", null);
    __decorate([
        Output()
    ], RadioButtonComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], RadioButtonComponent.prototype, "onCheckValue", void 0);
    __decorate([
        Output()
    ], RadioButtonComponent.prototype, "onUncheckValue", void 0);
    RadioButtonComponent = __decorate([
        Directive({
            exportAs: 'smart-radio-button', selector: 'smart-radio-button, [smart-radio-button]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}(BaseElement));

var RadioButtonModule = /** @class */ (function () {
    function RadioButtonModule() {
    }
    RadioButtonModule = __decorate([
        NgModule({
            declarations: [RadioButtonComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [RadioButtonComponent]
        })
    ], RadioButtonModule);
    return RadioButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { RadioButtonComponent, RadioButtonModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-radiobutton.js.map
