
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.qrcode';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/qrcode', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].qrcode = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BaseElement = /** @class */ (function () {
        function BaseElement(ref) {
            this.onCreate = new core.EventEmitter();
            this.onReady = new core.EventEmitter();
            this.onAttach = new core.EventEmitter();
            this.onDetach = new core.EventEmitter();
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
            core.Output()
        ], BaseElement.prototype, "onCreate", void 0);
        __decorate([
            core.Output()
        ], BaseElement.prototype, "onReady", void 0);
        __decorate([
            core.Output()
        ], BaseElement.prototype, "onAttach", void 0);
        __decorate([
            core.Output()
        ], BaseElement.prototype, "onDetach", void 0);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "locale", null);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "messages", null);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
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
            _this.onInvalid = new core.EventEmitter();
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
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "backgroundColor", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "displayLabel", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "embedImage", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "errorLevel", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "imageBackgroundColor", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "imageHeight", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "imageWidth", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "labelColor", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "labelFont", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "labelFontSize", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "labelMarginBottom", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "labelMarginTop", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "labelPosition", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "lineColor", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "squareWidth", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "renderAs", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "width", null);
        __decorate([
            core.Input()
        ], QRcodeComponent.prototype, "height", null);
        __decorate([
            core.Output()
        ], QRcodeComponent.prototype, "onInvalid", void 0);
        QRcodeComponent = __decorate([
            core.Directive({
                exportAs: 'smart-qrcode', selector: 'smart-qrcode, [smart-qrcode]'
            })
        ], QRcodeComponent);
        return QRcodeComponent;
    }(BaseElement));

    var QRcodeModule = /** @class */ (function () {
        function QRcodeModule() {
        }
        QRcodeModule = __decorate([
            core.NgModule({
                declarations: [QRcodeComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [QRcodeComponent]
            })
        ], QRcodeModule);
        return QRcodeModule;
    }());

    exports.QRcodeComponent = QRcodeComponent;
    exports.QRcodeModule = QRcodeModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-qrcode.umd.js.map
