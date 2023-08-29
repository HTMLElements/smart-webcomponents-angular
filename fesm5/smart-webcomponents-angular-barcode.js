
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.barcode';

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

var BarcodeComponent = /** @class */ (function (_super) {
    __extends(BarcodeComponent, _super);
    function BarcodeComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the value of the barcode is invalid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
        *   invalidCharacters - An array indicating the invalid characters.
        *   lengthValidity - A boolean indicating the length validity.
        *   patternValidity - A boolean indicating the pattern validity.
        *   value - the invalid value of the barcode.
        */
        _this.onInvalid = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BarcodeComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-barcode');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BarcodeComponent.prototype, "backgroundColor", {
        /** @description Sets the background color of the barcode element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "displayLabel", {
        /** @description Sets whether the barcode label is visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "labelColor", {
        /** @description Sets the color of the barcode label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "labelFont", {
        /** @description Sets the font family of the barcode label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFont : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFont = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "labelFontSize", {
        /** @description Sets the font size of the barcode label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFontSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "labelMarginBottom", {
        /** @description Sets the bottom margin of the barcode label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelMarginBottom = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "labelMarginTop", {
        /** @description Sets the top margin of the barcode label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelMarginTop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "labelPosition", {
        /** @description Sets the position of the barcode label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "lineColor", {
        /** @description Sets the color of the barcode lines. */
        get: function () {
            return this.nativeElement ? this.nativeElement.lineColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.lineColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "lineHeight", {
        /** @description Sets the height of the barcode line. */
        get: function () {
            return this.nativeElement ? this.nativeElement.lineHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.lineHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "lineWidth", {
        /** @description Sets the width of the barcode line. */
        get: function () {
            return this.nativeElement ? this.nativeElement.lineWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.lineWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "renderAs", {
        /** @description Sets the rendering mode of the barcode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.renderAs : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.renderAs = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "type", {
        /** @description Sets the barcode type */
        get: function () {
            return this.nativeElement ? this.nativeElement.type : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.type = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "value", {
        /** @description Sets or gets the value of the barcode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "width", {
        /** @description Sets or gets the width of the barcode. If the width is set to 0, the width of the barcode is calculated automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.width : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.width = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeComponent.prototype, "height", {
        /** @description Sets or gets the height of the barcode. If the height is set to 0, the height of the barcode is calculated automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.height : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.height = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Exports the barcode.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    BarcodeComponent.prototype.export = function (format, fileName) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.export(format, fileName);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.export(format, fileName);
            });
        }
    };
    /** @description Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    BarcodeComponent.prototype.getDataURL = function (format) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getDataURL(format);
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
    /** @description Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    BarcodeComponent.prototype.getDataURLAsync = function (format) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getDataURLAsync(format);
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
    /** @description Gets the validity of the barcode
    * @returns {boolean}
  */
    BarcodeComponent.prototype.isValid = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.isValid();
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
    Object.defineProperty(BarcodeComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BarcodeComponent.prototype.ngOnInit = function () {
    };
    BarcodeComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BarcodeComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BarcodeComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BarcodeComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['invalidHandler'] = function (event) { that.onInvalid.emit(event); };
        that.nativeElement.addEventListener('invalid', that.eventHandlers['invalidHandler']);
    };
    /** @description Remove event listeners. */
    BarcodeComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['invalidHandler']) {
            that.nativeElement.removeEventListener('invalid', that.eventHandlers['invalidHandler']);
        }
    };
    BarcodeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "backgroundColor", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "displayLabel", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "labelColor", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "labelFont", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "labelFontSize", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "labelMarginBottom", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "labelMarginTop", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "labelPosition", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "lineColor", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "lineHeight", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "lineWidth", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "renderAs", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "type", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "value", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "width", null);
    __decorate([
        Input()
    ], BarcodeComponent.prototype, "height", null);
    __decorate([
        Output()
    ], BarcodeComponent.prototype, "onInvalid", void 0);
    BarcodeComponent = __decorate([
        Directive({
            exportAs: 'smart-barcode', selector: 'smart-barcode, [smart-barcode]'
        })
    ], BarcodeComponent);
    return BarcodeComponent;
}(BaseElement));

var BarcodeModule = /** @class */ (function () {
    function BarcodeModule() {
    }
    BarcodeModule = __decorate([
        NgModule({
            declarations: [BarcodeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [BarcodeComponent]
        })
    ], BarcodeModule);
    return BarcodeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BarcodeComponent, BarcodeModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-barcode.js.map
