
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.led';

import { __decorate, __extends } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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

var LedComponent = /** @class */ (function (_super) {
    __extends(LedComponent, _super);
    function LedComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the widget is checked/unchecked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value of the element before it was changed.
        *   value - The new value of the element.
        */
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    LedComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-led');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(LedComponent.prototype, "animation", {
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
    Object.defineProperty(LedComponent.prototype, "checked", {
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
    Object.defineProperty(LedComponent.prototype, "clickMode", {
        /** @description Determines when the element fires a click event. */
        get: function () {
            return this.nativeElement ? this.nativeElement.clickMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.clickMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "disabled", {
        /** @description Enables or disables the LED. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "falseContent", {
        /** @description Sets the content for the 'false' state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.falseContent : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.falseContent = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "falseTemplate", {
        /** @description Sets custom template for LED's false state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.falseTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.falseTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "indeterminate", {
        /** @description Sets the LED to indeterminate state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "indeterminateContent", {
        /** @description Sets the content for the 'null' state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminateContent : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminateContent = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "indeterminateTemplate", {
        /** @description Sets a custom template for LED's indeterminate state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminateTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminateTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "locale", {
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
    Object.defineProperty(LedComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(LedComponent.prototype, "messages", {
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
    Object.defineProperty(LedComponent.prototype, "name", {
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
    Object.defineProperty(LedComponent.prototype, "readonly", {
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
    Object.defineProperty(LedComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(LedComponent.prototype, "shape", {
        /** @description Sets the shape of LED. */
        get: function () {
            return this.nativeElement ? this.nativeElement.shape : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.shape = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "theme", {
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
    Object.defineProperty(LedComponent.prototype, "trueContent", {
        /** @description Sets the content for the 'true' state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.trueContent : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.trueContent = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "trueTemplate", {
        /** @description Sets custom template for LED's true state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.trueTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.trueTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "unfocusable", {
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
    Object.defineProperty(LedComponent.prototype, "value", {
        /** @description Sets or gets the element's value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LedComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    LedComponent.prototype.ngOnInit = function () {
    };
    LedComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    LedComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    LedComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    LedComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    LedComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    LedComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], LedComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "checked", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "clickMode", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "falseContent", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "falseTemplate", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "indeterminate", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "indeterminateContent", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "indeterminateTemplate", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "name", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "shape", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "trueContent", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "trueTemplate", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], LedComponent.prototype, "value", null);
    __decorate([
        Output()
    ], LedComponent.prototype, "onChange", void 0);
    LedComponent = __decorate([
        Directive({
            exportAs: 'smart-led', selector: 'smart-led, [smart-led]'
        })
    ], LedComponent);
    return LedComponent;
}(BaseElement));

var LedModule = /** @class */ (function () {
    function LedModule() {
    }
    LedModule = __decorate([
        NgModule({
            declarations: [LedComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [LedComponent]
        })
    ], LedModule);
    return LedModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LedComponent, LedModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-led.js.map
