
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.qrcode';

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

var QRcodeComponent = /** @class */ (function (_super) {
    __extends(QRcodeComponent, _super);
    function QRcodeComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the value of the QR Code is invalid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
        *   invalidCharacters - An array indicating the invalid characters.
        *   lengthValidity - A boolean indicating the length validity.
        *   patternValidity - A boolean indicating the pattern validity.
        *   value - the invalid value of the QR Code.
        */
        _this.onInvalid = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    QRcodeComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-qrcode');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(QRcodeComponent.prototype, "backgroundColor", {
        /** @description Sets the background color of the QR Code element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "displayLabel", {
        /** @description Sets whether the QR Code label is visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "embedImage", {
        /** @description Sets an embedded image. */
        get: function () {
            return this.nativeElement ? this.nativeElement.embedImage : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.embedImage = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "errorLevel", {
        /** @description Sets the error correction level. */
        get: function () {
            return this.nativeElement ? this.nativeElement.errorLevel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.errorLevel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "imageBackgroundColor", {
        /** @description Sets color to the transparent parts of the embedded image. Background remains transparent if set to empty string. */
        get: function () {
            return this.nativeElement ? this.nativeElement.imageBackgroundColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.imageBackgroundColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "imageHeight", {
        /** @description Sets the height of the embedded image. */
        get: function () {
            return this.nativeElement ? this.nativeElement.imageHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.imageHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "imageWidth", {
        /** @description Sets the width of the embedded image. */
        get: function () {
            return this.nativeElement ? this.nativeElement.imageWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.imageWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelColor", {
        /** @description Sets the color of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelFont", {
        /** @description Sets the font family of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFont : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFont = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelFontSize", {
        /** @description Sets the font size of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFontSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelMarginBottom", {
        /** @description Sets the bottom margin of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelMarginBottom = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelMarginTop", {
        /** @description Sets the top margin of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelMarginTop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelPosition", {
        /** @description Sets the position of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "lineColor", {
        /** @description Sets the color of the QR Code lines. */
        get: function () {
            return this.nativeElement ? this.nativeElement.lineColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.lineColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "squareWidth", {
        /** @description Sets the width of the QR Code square. */
        get: function () {
            return this.nativeElement ? this.nativeElement.squareWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.squareWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "renderAs", {
        /** @description Sets the rendering mode of the QR Code. */
        get: function () {
            return this.nativeElement ? this.nativeElement.renderAs : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.renderAs = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "value", {
        /** @description Sets or gets the value of the QR Code. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "width", {
        /** @description Sets or gets the width of the QR Code. If the width is set to 0, the width of the QR Code is calculated automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.width : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.width = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "height", {
        /** @description Sets or gets the height of the QR Code. If the height is set to 0, the height of the QR Code is calculated automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.height : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.height = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Exports the QR Code.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    QRcodeComponent.prototype.export = function (format, fileName) {
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
    /** @description Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    QRcodeComponent.prototype.getDataURL = function (format) {
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
    /** @description Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    QRcodeComponent.prototype.getDataURLAsync = function (format) {
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
    /** @description Gets the validity of the QR Code
    * @returns {boolean}
  */
    QRcodeComponent.prototype.isValid = function () {
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
    Object.defineProperty(QRcodeComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    QRcodeComponent.prototype.ngOnInit = function () {
    };
    QRcodeComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    QRcodeComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    QRcodeComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    QRcodeComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['invalidHandler'] = function (event) { that.onInvalid.emit(event); };
        that.nativeElement.addEventListener('invalid', that.eventHandlers['invalidHandler']);
    };
    /** @description Remove event listeners. */
    QRcodeComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['invalidHandler']) {
            that.nativeElement.removeEventListener('invalid', that.eventHandlers['invalidHandler']);
        }
    };
    QRcodeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "backgroundColor", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "displayLabel", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "embedImage", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "errorLevel", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "imageBackgroundColor", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "imageHeight", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "imageWidth", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "labelColor", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "labelFont", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "labelFontSize", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "labelMarginBottom", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "labelMarginTop", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "labelPosition", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "lineColor", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "squareWidth", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "renderAs", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "value", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "width", null);
    __decorate([
        Input()
    ], QRcodeComponent.prototype, "height", null);
    __decorate([
        Output()
    ], QRcodeComponent.prototype, "onInvalid", void 0);
    QRcodeComponent = __decorate([
        Directive({
            exportAs: 'smart-qrcode', selector: 'smart-qrcode, [smart-qrcode]'
        })
    ], QRcodeComponent);
    return QRcodeComponent;
}(BaseElement));

var QRcodeModule = /** @class */ (function () {
    function QRcodeModule() {
    }
    QRcodeModule = __decorate([
        NgModule({
            declarations: [QRcodeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [QRcodeComponent]
        })
    ], QRcodeModule);
    return QRcodeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { QRcodeComponent, QRcodeModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-qrcode.js.map
