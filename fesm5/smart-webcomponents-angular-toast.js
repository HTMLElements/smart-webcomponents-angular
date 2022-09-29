
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.toast';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
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

var ToastComponent = /** @class */ (function (_super) {
    __extends(ToastComponent, _super);
    function ToastComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the toast item is clicked.
        *  @param event. The custom event. 	*/
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when the toast item is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the toast item is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered on swipebottom over an toast item.
        *  @param event. The custom event. 	*/
        _this.onSwipebottom = new EventEmitter();
        /** @description This event is triggered on swipeleft over an toast item.
        *  @param event. The custom event. 	*/
        _this.onSwipeleft = new EventEmitter();
        /** @description This event is triggered on swiperight over an toast item.
        *  @param event. The custom event. 	*/
        _this.onSwiperight = new EventEmitter();
        /** @description This event is triggered on swipetop over an toast item.
        *  @param event. The custom event. 	*/
        _this.onSwipetop = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ToastComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-toast');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ToastComponent.prototype, "animation", {
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
    Object.defineProperty(ToastComponent.prototype, "appendTo", {
        /** @description Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.appendTo : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.appendTo = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "autoClose", {
        /** @description Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoClose : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoClose = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "autoCloseDelay", {
        /** @description Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true). */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "autoOpen", {
        /** @description Sets whether the toast will open automatically immediately after widget's initialization. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoOpen : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoOpen = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "disabled", {
        /** @description The user will not be able to interact with toast items when disabled is set to true. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "iconClass", {
        /** @description Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap). */
        get: function () {
            return this.nativeElement ? this.nativeElement.iconClass : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.iconClass = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "itemClass", {
        /** @description Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap). */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemClass : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemClass = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "itemTemplate", {
        /** @description Sets custom item template. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "locale", {
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
    Object.defineProperty(ToastComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(ToastComponent.prototype, "messages", {
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
    Object.defineProperty(ToastComponent.prototype, "modal", {
        /** @description In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.modal : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.modal = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "position", {
        /** @description Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.position : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.position = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "readonly", {
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
    Object.defineProperty(ToastComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(ToastComponent.prototype, "showCloseButton", {
        /** @description Sets or gets whether to show the toast item's close button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showCloseButton : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showCloseButton = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "theme", {
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
    Object.defineProperty(ToastComponent.prototype, "type", {
        /** @description Sets speciffic CSS settings and icon to the toast items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.type : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.type = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "unfocusable", {
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
    Object.defineProperty(ToastComponent.prototype, "value", {
        /** @description Sets a text value to an toast item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Closes all opened toast items.
    */
    ToastComponent.prototype.closeAll = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeAll();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeAll();
            });
        }
    };
    /** @description Closes particular toast item.
    * @param {HTMLElement | string} item. The toast item (or its id) to remove.
    */
    ToastComponent.prototype.closeItem = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeItem(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeItem(item);
            });
        }
    };
    /** @description Closes the last opened toast item.
    */
    ToastComponent.prototype.closeLast = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeLast();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closeLast();
            });
        }
    };
    /** @description Opens a new toast item and returns the opened smart-toast-item instance.
    * @param {HTMLElement | string} value?. The value for the toast item. If not set, the value property will be used.
    * @param {string} iconType?. The icon name for the toast item. If not set, the type property determines the icon type that will be used.
    * @returns {HTMLElement}
  */
    ToastComponent.prototype.open = function (value, iconType) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.open(value, iconType);
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
    Object.defineProperty(ToastComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ToastComponent.prototype.ngOnInit = function () {
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    ToastComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    ToastComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    ToastComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['swipebottomHandler'] = function (event) { that.onSwipebottom.emit(event); };
        that.nativeElement.addEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);
        that.eventHandlers['swipeleftHandler'] = function (event) { that.onSwipeleft.emit(event); };
        that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        that.eventHandlers['swiperightHandler'] = function (event) { that.onSwiperight.emit(event); };
        that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        that.eventHandlers['swipetopHandler'] = function (event) { that.onSwipetop.emit(event); };
        that.nativeElement.addEventListener('swipetop', that.eventHandlers['swipetopHandler']);
    };
    /** @description Remove event listeners. */
    ToastComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['swipebottomHandler']) {
            that.nativeElement.removeEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);
        }
        if (that.eventHandlers['swipeleftHandler']) {
            that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        }
        if (that.eventHandlers['swiperightHandler']) {
            that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        }
        if (that.eventHandlers['swipetopHandler']) {
            that.nativeElement.removeEventListener('swipetop', that.eventHandlers['swipetopHandler']);
        }
    };
    ToastComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ToastComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "appendTo", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "autoClose", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "autoCloseDelay", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "autoOpen", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "iconClass", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "itemClass", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "modal", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "position", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "showCloseButton", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "type", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], ToastComponent.prototype, "value", null);
    __decorate([
        Output()
    ], ToastComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], ToastComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], ToastComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], ToastComponent.prototype, "onSwipebottom", void 0);
    __decorate([
        Output()
    ], ToastComponent.prototype, "onSwipeleft", void 0);
    __decorate([
        Output()
    ], ToastComponent.prototype, "onSwiperight", void 0);
    __decorate([
        Output()
    ], ToastComponent.prototype, "onSwipetop", void 0);
    ToastComponent = __decorate([
        Directive({
            exportAs: 'smart-toast', selector: 'smart-toast, [smart-toast]'
        })
    ], ToastComponent);
    return ToastComponent;
}(BaseElement));

var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    ToastModule = __decorate([
        NgModule({
            declarations: [ToastComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ToastComponent]
        })
    ], ToastModule);
    return ToastModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, ToastComponent, ToastModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-toast.js.map
