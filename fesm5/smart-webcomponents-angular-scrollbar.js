
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.scrollbar';

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

var ScrollBarComponent = /** @class */ (function (_super) {
    __extends(ScrollBarComponent, _super);
    function ScrollBarComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	min, 	max)
        *   value - A numeric value indicating the scroll position.
        *   oldValue - A numeric value indicating the previous scroll position.
        *   min - A numeric value indicating the min scroll position.
        *   max - A numeric value indicating the max scroll position.
        */
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ScrollBarComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-scroll-bar');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ScrollBarComponent.prototype, "animation", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "disabled", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "largeStep", {
        /** @description Sets or gets the scrollbar's largestep. The value is increased/decreased with this largestep when the user presses the left mouse button in the area between a scrollbar button and thumb. */
        get: function () {
            return this.nativeElement ? this.nativeElement.largeStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.largeStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "locale", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "max", {
        /** @description Sets or gets the scrollbar's maximum value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "mechanicalAction", {
        /** @description Sets or gets the type of used mechanical action. The mechanical action defines in which moment the value of the element will be updated. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mechanicalAction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "messages", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "min", {
        /** @description Sets or gets the scrollbar's minimum value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "orientation", {
        /** @description Sets or gets the scrollbar's orientation */
        get: function () {
            return this.nativeElement ? this.nativeElement.orientation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.orientation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "readonly", {
        /** @description If the element is readonly, users cannot interact with it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "showButtons", {
        /** @description Sets or gets scrollbar buttons visibility. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "step", {
        /** @description Sets or gets the scrollbar's step. The value is increased/decreased with this step when the user presses a scrollbar button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.step : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.step = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarComponent.prototype, "theme", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "unfocusable", {
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
    Object.defineProperty(ScrollBarComponent.prototype, "value", {
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
    /** @description Redraws the element.
    */
    ScrollBarComponent.prototype.refresh = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refresh();
            });
        }
    };
    Object.defineProperty(ScrollBarComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ScrollBarComponent.prototype.ngOnInit = function () {
    };
    ScrollBarComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    ScrollBarComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    ScrollBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    ScrollBarComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    ScrollBarComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    ScrollBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "largeStep", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "max", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "mechanicalAction", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "min", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "orientation", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "showButtons", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "step", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], ScrollBarComponent.prototype, "value", null);
    __decorate([
        Output()
    ], ScrollBarComponent.prototype, "onChange", void 0);
    ScrollBarComponent = __decorate([
        Directive({
            exportAs: 'smart-scroll-bar', selector: 'smart-scroll-bar, [smart-scroll-bar]'
        })
    ], ScrollBarComponent);
    return ScrollBarComponent;
}(BaseElement));

var ScrollBarModule = /** @class */ (function () {
    function ScrollBarModule() {
    }
    ScrollBarModule = __decorate([
        NgModule({
            declarations: [ScrollBarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ScrollBarComponent]
        })
    ], ScrollBarModule);
    return ScrollBarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ScrollBarComponent, ScrollBarModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-scrollbar.js.map
