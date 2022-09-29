
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.pager';

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

var PagerComponent = /** @class */ (function (_super) {
    __extends(PagerComponent, _super);
    function PagerComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when user selects a new item.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when page size is changed.
        *  @param event. The custom event. 	*/
        _this.onPageSizeChanged = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    PagerComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-pager');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(PagerComponent.prototype, "animation", {
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
    Object.defineProperty(PagerComponent.prototype, "autoEllipsis", {
        /** @description Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoEllipsis : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoEllipsis = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "disabled", {
        /** @description Enables or disables the pager. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "locale", {
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
    Object.defineProperty(PagerComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(PagerComponent.prototype, "messages", {
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
    Object.defineProperty(PagerComponent.prototype, "navigationButtonsPosition", {
        /** @description Handles the position of the navigation buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.navigationButtonsPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.navigationButtonsPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "pageIndex", {
        /** @description Gets/sets current page index. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "pageIndexSelectors", {
        /** @description Defines the number of page index selectors. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageIndexSelectors : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageIndexSelectors = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "pageSize", {
        /** @description Gets/sets total number of items displayed on page. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "pageSizeSelectorDataSource", {
        /** @description Defines the data source of the element's page size selector drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "pagesCount", {
        /** @description The number of pages in the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pagesCount : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pagesCount = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "readonly", {
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
    Object.defineProperty(PagerComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(PagerComponent.prototype, "showFirstLastNavigationButtons", {
        /** @description Controlls displaying of the 'first' and 'last' navigation buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "showNavigationButtonLabels", {
        /** @description Displays text content in navigation buttons instead default icons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showNavigationButtonLabels : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showNavigationButtonLabels = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "showNavigationInput", {
        /** @description Determines whether the navigation input is displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showNavigationInput : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showNavigationInput = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "showPageIndexSelectors", {
        /** @description Determines whether the page index selectors are displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showPageIndexSelectors : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showPageIndexSelectors = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "showPageSizeSelector", {
        /** @description Determines whether the page size selector is displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showPageSizeSelector : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showPageSizeSelector = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "showPrevNextNavigationButtons", {
        /** @description Controlls displaying of the 'previous' and 'next' navigation buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "showSummary", {
        /** @description Determines whether the page summary is displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showSummary : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showSummary = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "theme", {
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
    Object.defineProperty(PagerComponent.prototype, "unfocusable", {
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
    Object.defineProperty(PagerComponent.prototype, "totalRecords", {
        /** @description Gets/sets total number of records whose pagination the Pager controls. Useful when the Pager is part of a more complex element or application. */
        get: function () {
            return this.nativeElement ? this.nativeElement.totalRecords : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.totalRecords = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Selects first item.
    */
    PagerComponent.prototype.first = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.first();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.first();
            });
        }
    };
    /** @description Selects last item.
    */
    PagerComponent.prototype.last = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.last();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.last();
            });
        }
    };
    /** @description Navigates to particular item.
    * @param {any} pageIndex.
    */
    PagerComponent.prototype.navigateTo = function (pageIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.navigateTo(pageIndex);
            });
        }
    };
    /** @description Selects next pager item.
    */
    PagerComponent.prototype.next = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.next();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.next();
            });
        }
    };
    /** @description Selects previous pager item.
    */
    PagerComponent.prototype.prev = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.prev();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.prev();
            });
        }
    };
    Object.defineProperty(PagerComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.ngOnInit = function () {
    };
    PagerComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    PagerComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    PagerComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    PagerComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['pageSizeChangedHandler'] = function (event) { that.onPageSizeChanged.emit(event); };
        that.nativeElement.addEventListener('pageSizeChanged', that.eventHandlers['pageSizeChangedHandler']);
    };
    /** @description Remove event listeners. */
    PagerComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['pageSizeChangedHandler']) {
            that.nativeElement.removeEventListener('pageSizeChanged', that.eventHandlers['pageSizeChangedHandler']);
        }
    };
    PagerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], PagerComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "autoEllipsis", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "navigationButtonsPosition", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "pageIndex", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "pageIndexSelectors", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "pageSize", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "pageSizeSelectorDataSource", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "pagesCount", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "showFirstLastNavigationButtons", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "showNavigationButtonLabels", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "showNavigationInput", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "showPageIndexSelectors", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "showPageSizeSelector", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "showPrevNextNavigationButtons", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "showSummary", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], PagerComponent.prototype, "totalRecords", null);
    __decorate([
        Output()
    ], PagerComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], PagerComponent.prototype, "onPageSizeChanged", void 0);
    PagerComponent = __decorate([
        Directive({
            exportAs: 'smart-pager', selector: 'smart-pager, [smart-pager]'
        })
    ], PagerComponent);
    return PagerComponent;
}(BaseElement));

var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    PagerModule = __decorate([
        NgModule({
            declarations: [PagerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [PagerComponent]
        })
    ], PagerModule);
    return PagerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { PagerComponent, PagerModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-pager.js.map
