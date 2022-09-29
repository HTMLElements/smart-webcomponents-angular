
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.validator';

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

var ValidatorComponent = /** @class */ (function (_super) {
    __extends(ValidatorComponent, _super);
    function ValidatorComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ValidatorComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('jqxValidator');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ValidatorComponent.prototype, "rules", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.rules : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rules = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidatorComponent.prototype, "validationSummarySelector", {
        /** @description A valid CSS selector of an element on the page to be used as a container for validation error messages. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validationSummarySelector : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validationSummarySelector = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Clears the error messages.
    */
    ValidatorComponent.prototype.reset = function () {
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
    /** @description Opens the dropDown.
    * @param {Function} result?. A callback function to call when validating inputs.
    */
    ValidatorComponent.prototype.validate = function (result) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.validate(result);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.validate(result);
            });
        }
    };
    Object.defineProperty(ValidatorComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ValidatorComponent.prototype.ngOnInit = function () {
    };
    ValidatorComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    ValidatorComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    ValidatorComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    ValidatorComponent.prototype.listen = function () {
        var that = this;
    };
    /** @description Remove event listeners. */
    ValidatorComponent.prototype.unlisten = function () {
        var that = this;
    };
    ValidatorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ValidatorComponent.prototype, "rules", null);
    __decorate([
        Input()
    ], ValidatorComponent.prototype, "validationSummarySelector", null);
    ValidatorComponent = __decorate([
        Directive({
            exportAs: 'jqxValidator', selector: 'jqxValidator, [jqxValidator]'
        })
    ], ValidatorComponent);
    return ValidatorComponent;
}(BaseElement));

var ValidatorModule = /** @class */ (function () {
    function ValidatorModule() {
    }
    ValidatorModule = __decorate([
        NgModule({
            declarations: [ValidatorComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ValidatorComponent]
        })
    ], ValidatorModule);
    return ValidatorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, ValidatorComponent, ValidatorModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-validator.js.map
