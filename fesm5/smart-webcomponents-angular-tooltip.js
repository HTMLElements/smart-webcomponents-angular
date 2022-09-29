
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tooltip';

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

var TooltipComponent = /** @class */ (function (_super) {
    __extends(TooltipComponent, _super);
    function TooltipComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the tooltip is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered before the tooltip is opened. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when the tooltip is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered before the tooltip is closed. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TooltipComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-tooltip');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TooltipComponent.prototype, "animation", {
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
    Object.defineProperty(TooltipComponent.prototype, "align", {
        /** @description Determines how to align the tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.align : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.align = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "arrow", {
        /** @description Gets or sets whether a tooltip's arrow will be shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.arrow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.arrow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "arrowDirection", {
        /** @description Sets the position of the arrow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.arrowDirection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.arrowDirection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "delay", {
        /** @description Gets or sets whether a tooltip's arrow will be shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.delay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.delay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "disabled", {
        /** @description Enables or disables the tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "offset", {
        /** @description Sets an offset by X and Y. */
        get: function () {
            return this.nativeElement ? this.nativeElement.offset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.offset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "locale", {
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
    Object.defineProperty(TooltipComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(TooltipComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "openMode", {
        /** @description Sets or gets the way of triggering the tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.openMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.openMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "position", {
        /** @description Gets or sets the position of the tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.position : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.position = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "selector", {
        /** @description Sets the element which triggers the tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selector : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selector = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "theme", {
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
    Object.defineProperty(TooltipComponent.prototype, "tooltipTemplate", {
        /** @description Sets custom tooltip template. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "unfocusable", {
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
    Object.defineProperty(TooltipComponent.prototype, "value", {
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
    Object.defineProperty(TooltipComponent.prototype, "visible", {
        /** @description Sets or gets the visibility of the tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.visible : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.visible = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Closes smart-tooltip.
    */
    TooltipComponent.prototype.close = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.close();
            });
        }
    };
    /** @description Opens smart-tooltip.
    */
    TooltipComponent.prototype.open = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.open();
            });
        }
    };
    /** @description Toggles smart-tooltip.
    */
    TooltipComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    /** @description Clears the content of the Tooltip.
    */
    TooltipComponent.prototype.clear = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clear();
            });
        }
    };
    Object.defineProperty(TooltipComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    TooltipComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    TooltipComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    TooltipComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
    };
    /** @description Remove event listeners. */
    TooltipComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
    };
    TooltipComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], TooltipComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "align", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "arrow", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "arrowDirection", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "delay", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "offset", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "openMode", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "position", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "selector", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "tooltipTemplate", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "value", null);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "visible", null);
    __decorate([
        Output()
    ], TooltipComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], TooltipComponent.prototype, "onOpening", void 0);
    __decorate([
        Output()
    ], TooltipComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], TooltipComponent.prototype, "onClosing", void 0);
    TooltipComponent = __decorate([
        Directive({
            exportAs: 'smart-tooltip', selector: 'smart-tooltip, [smart-tooltip]'
        })
    ], TooltipComponent);
    return TooltipComponent;
}(BaseElement));

var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        NgModule({
            declarations: [TooltipComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [TooltipComponent]
        })
    ], TooltipModule);
    return TooltipModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TooltipComponent, TooltipModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-tooltip.js.map
