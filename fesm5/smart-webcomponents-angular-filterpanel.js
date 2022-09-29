
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.filterpanel';

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

var FilterPanelComponent = /** @class */ (function (_super) {
    __extends(FilterPanelComponent, _super);
    function FilterPanelComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the current filtering is discarted.
        *  @param event. The custom event. 	*/
        _this.onCancel = new EventEmitter();
        /** @description This event is triggered when the current filtering is cleared.
        *  @param event. The custom event. 	*/
        _this.onClear = new EventEmitter();
        /** @description This event is triggered when filter panel settings are applied.
        *  @param event. The custom event. 	*/
        _this.onFilter = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    FilterPanelComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-filter-panel');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(FilterPanelComponent.prototype, "animation", {
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
    Object.defineProperty(FilterPanelComponent.prototype, "buttons", {
        /** @description Defines which operation buttons will be shown in the filter panel */
        get: function () {
            return this.nativeElement ? this.nativeElement.buttons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.buttons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "data", {
        /** @description Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array) */
        get: function () {
            return this.nativeElement ? this.nativeElement.data : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.data = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "dataField", {
        /** @description Describes filtered data field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataField : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataField = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "dataSource", {
        /** @description If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "disabled", {
        /** @description Enables or disables filter panel. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "evaluateFilterExpression", {
        /** @description Callback function, used for custom evaluations in filter panel. */
        get: function () {
            return this.nativeElement ? this.nativeElement.evaluateFilterExpression : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.evaluateFilterExpression = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "filterType", {
        /** @description Defines which filter type is used. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "formatString", {
        /** @description Format string used in filterType 'Date'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatString : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatString = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "locale", {
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
    Object.defineProperty(FilterPanelComponent.prototype, "messages", {
        /** @description Defines field names of the filtered element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "mode", {
        /** @description Desfines filter panel's  mode */
        get: function () {
            return this.nativeElement ? this.nativeElement.mode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterPanelComponent.prototype, "readonly", {
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
    Object.defineProperty(FilterPanelComponent.prototype, "theme", {
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
    Object.defineProperty(FilterPanelComponent.prototype, "unfocusable", {
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
    /** @description Discards current filtering.
    */
    FilterPanelComponent.prototype.cancel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.cancel();
            });
        }
    };
    /** @description Clears current filtering.
    */
    FilterPanelComponent.prototype.clear = function () {
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
    /** @description Evaluates a filter.
    * @param {any} value. The evalueated element in filter panel.
    */
    FilterPanelComponent.prototype.evaluate = function (value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.evaluate(value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.evaluate(value);
            });
        }
    };
    /** @description Applies current filtering.
    */
    FilterPanelComponent.prototype.filter = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.filter();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.filter();
            });
        }
    };
    /** @description Gets the current filter state.
    * @returns {any}
  */
    FilterPanelComponent.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getState();
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
    /** @description Loads a previously saved filter state.
    * @param {any} state. An object returned by the method getState.
    */
    FilterPanelComponent.prototype.loadState = function (state) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.loadState(state);
            });
        }
    };
    Object.defineProperty(FilterPanelComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    FilterPanelComponent.prototype.ngOnInit = function () {
    };
    FilterPanelComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    FilterPanelComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    FilterPanelComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    FilterPanelComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['cancelHandler'] = function (event) { that.onCancel.emit(event); };
        that.nativeElement.addEventListener('cancel', that.eventHandlers['cancelHandler']);
        that.eventHandlers['clearHandler'] = function (event) { that.onClear.emit(event); };
        that.nativeElement.addEventListener('clear', that.eventHandlers['clearHandler']);
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
    };
    /** @description Remove event listeners. */
    FilterPanelComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['cancelHandler']) {
            that.nativeElement.removeEventListener('cancel', that.eventHandlers['cancelHandler']);
        }
        if (that.eventHandlers['clearHandler']) {
            that.nativeElement.removeEventListener('clear', that.eventHandlers['clearHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
    };
    FilterPanelComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "buttons", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "data", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "dataField", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "evaluateFilterExpression", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "filterType", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "formatString", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "mode", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], FilterPanelComponent.prototype, "unfocusable", null);
    __decorate([
        Output()
    ], FilterPanelComponent.prototype, "onCancel", void 0);
    __decorate([
        Output()
    ], FilterPanelComponent.prototype, "onClear", void 0);
    __decorate([
        Output()
    ], FilterPanelComponent.prototype, "onFilter", void 0);
    FilterPanelComponent = __decorate([
        Directive({
            exportAs: 'smart-filter-panel', selector: 'smart-filter-panel, [smart-filter-panel]'
        })
    ], FilterPanelComponent);
    return FilterPanelComponent;
}(BaseElement));

var FilterPanelModule = /** @class */ (function () {
    function FilterPanelModule() {
    }
    FilterPanelModule = __decorate([
        NgModule({
            declarations: [FilterPanelComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [FilterPanelComponent]
        })
    ], FilterPanelModule);
    return FilterPanelModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FilterPanelComponent, FilterPanelModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-filterpanel.js.map
