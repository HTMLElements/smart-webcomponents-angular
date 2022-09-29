
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.array';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/array', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].array = {}), global.ng.core));
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

    var ArrayComponent = /** @class */ (function (_super) {
        __extends(ArrayComponent, _super);
        function ArrayComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a visible row or column has been added or removed.
            *  @param event. The custom event. 	*/
            _this.onArraySizeChange = new core.EventEmitter();
            /** @description This event is triggered when the value of the Array is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when a dimension has been added or removed.
            *  @param event. The custom event. 	*/
            _this.onDimensionChange = new core.EventEmitter();
            /** @description This event is triggered when an Array element has been clicked.
            *  @param event. The custom event. 	*/
            _this.onElementClick = new core.EventEmitter();
            /** @description This event is triggered when the Array is scrolled with one of the scrollbars.
            *  @param event. The custom event. 	*/
            _this.onScroll = new core.EventEmitter();
            /** @description This event is triggered when the column width or the row height has been changed.
            *  @param event. The custom event. 	*/
            _this.onSizeChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        ArrayComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-array');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(ArrayComponent.prototype, "animation", {
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
        Object.defineProperty(ArrayComponent.prototype, "arrayIndexingMode", {
            /** @description Sets or gets the indexing mode of the Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.arrayIndexingMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.arrayIndexingMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "changeProperty", {
            /** @description A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.changeProperty : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.changeProperty = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "columns", {
            /** @description Sets or gets the number of visible columns in the Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "customWidgetDefaultValue", {
            /** @description Sets or gets the default value of inner elements when type is 'custom'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.customWidgetDefaultValue : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.customWidgetDefaultValue = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "dimensions", {
            /** @description Sets or gets the dimensions of the Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dimensions : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dimensions = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "disabled", {
            /** @description Sets or gets disabled state of the Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "elementHeight", {
            /** @description Sets or gets the height of Array elements (row height). */
            get: function () {
                return this.nativeElement ? this.nativeElement.elementHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.elementHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "elementTemplate", {
            /** @description A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function. */
            get: function () {
                return this.nativeElement ? this.nativeElement.elementTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.elementTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "elementWidth", {
            /** @description Sets or gets the width of Array elements (column width). */
            get: function () {
                return this.nativeElement ? this.nativeElement.elementWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.elementWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "getElementValue", {
            /** @description A callback function that can be used for getting the value of element widgets. */
            get: function () {
                return this.nativeElement ? this.nativeElement.getElementValue : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.getElementValue = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "indexerHeight", {
            /** @description Sets or gets the height of indexers. */
            get: function () {
                return this.nativeElement ? this.nativeElement.indexerHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indexerHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "indexerWidth", {
            /** @description Sets or gets the width of indexers. */
            get: function () {
                return this.nativeElement ? this.nativeElement.indexerWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indexerWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "locale", {
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
        Object.defineProperty(ArrayComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(ArrayComponent.prototype, "messages", {
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
        Object.defineProperty(ArrayComponent.prototype, "readonly", {
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
        Object.defineProperty(ArrayComponent.prototype, "rows", {
            /** @description Sets or gets the number of visible rows in the Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rows : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rows = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "setElementValue", {
            /** @description A callback function that can be used for setting the value of element widgets. */
            get: function () {
                return this.nativeElement ? this.nativeElement.setElementValue : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.setElementValue = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "showHorizontalScrollbar", {
            /** @description Sets or gets whether to display the horizontal scrollbar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showHorizontalScrollbar : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showHorizontalScrollbar = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "showIndexDisplay", {
            /** @description Sets or gets whether to display the array indexers. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showIndexDisplay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showIndexDisplay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "showSelection", {
            /** @description Sets or gets whether to highlight selected elements. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showSelection : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showSelection = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "showVerticalScrollbar", {
            /** @description Sets or gets whether to display the vertical scrollbar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showVerticalScrollbar : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showVerticalScrollbar = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "theme", {
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
        Object.defineProperty(ArrayComponent.prototype, "type", {
            /** @description Sets or gets the data type and element widgets to be used in the Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.type : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.type = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayComponent.prototype, "unfocusable", {
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
        Object.defineProperty(ArrayComponent.prototype, "value", {
            /** @description Sets or gets the value of the Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds a dimension to the array. Note: when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
        */
        ArrayComponent.prototype.addDimension = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addDimension();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addDimension();
                });
            }
        };
        /** @description Clears the selection.
        */
        ArrayComponent.prototype.clearSelection = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearSelection();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearSelection();
                });
            }
        };
        /** @description Copies the value of an Array element to the clipboard.
        * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
        * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
        */
        ArrayComponent.prototype.copyElementValueToClipboard = function (Rowvisibleindex, Columnvisibleindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
                });
            }
        };
        /** @description Deletes a column in the value array.
        * @param {number} Columnindex. Index of the column to be deleted.
        */
        ArrayComponent.prototype.deleteColumn = function (Columnindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.deleteColumn(Columnindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.deleteColumn(Columnindex);
                });
            }
        };
        /** @description Deletes a row in the value array.
        * @param {number} Rowindex. Index of the row to be deleted.
        */
        ArrayComponent.prototype.deleteRow = function (Rowindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.deleteRow(Rowindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.deleteRow(Rowindex);
                });
            }
        };
        /** @description Empties the value array.
        */
        ArrayComponent.prototype.emptyArray = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.emptyArray();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.emptyArray();
                });
            }
        };
        /** @description Designates the end of a selection started with the method startSelection.
        * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
        * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
        */
        ArrayComponent.prototype.endSelection = function (Rowboundindex, Columnboundindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
                });
            }
        };
        /** @description Returns the HTML element at the specified visible row and column coordinates of the Array.
        * @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
        * @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
        * @returns {HTMLElement}
      */
        ArrayComponent.prototype.getElement = function (RowVisibleIndex, ColumnVisibleIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getElement(RowVisibleIndex, ColumnVisibleIndex);
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
        /** @description Returns an object with the values of the Array element width and height.
        * @returns {any}
      */
        ArrayComponent.prototype.getElementSize = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getElementSize();
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
        /** @description Gets an array with the values of all indexers.
        * @returns {any[]}
      */
        ArrayComponent.prototype.getIndexerValue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getIndexerValue();
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
        /** @description Returns an HTML element from the Array at the specified page coordinates and other information about this element.
        * @param {number} Pagexcoordinate.
        * @param {number} Pageycoordinate.
        * @returns {any}
      */
        ArrayComponent.prototype.hitTest = function (Pagexcoordinate, Pageycoordinate) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.hitTest(Pagexcoordinate, Pageycoordinate);
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
        /** @description Inserts a column in the value array before the specified column. The new column is filled with default values.
        * @param {number} Columnindex. Index of the column to add a new column before.
        */
        ArrayComponent.prototype.insertColumnBefore = function (Columnindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insertColumnBefore(Columnindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insertColumnBefore(Columnindex);
                });
            }
        };
        /** @description Inserts a row in the value array before the specified row. The new row is filled with default values.
        * @param {number} Rowindex. Index of the row to add a new row before.
        */
        ArrayComponent.prototype.insertRowBefore = function (Rowindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insertRowBefore(Rowindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insertRowBefore(Rowindex);
                });
            }
        };
        /** @description Sets all value array members to the default value.
        */
        ArrayComponent.prototype.reinitializeArray = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.reinitializeArray();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.reinitializeArray();
                });
            }
        };
        /** @description Removes a dimension from the array. Note: when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
        */
        ArrayComponent.prototype.removeDimension = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeDimension();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeDimension();
                });
            }
        };
        /** @description Sets the array's type to 'none'.
        */
        ArrayComponent.prototype.reset = function () {
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
        /** @description Resizes Array elements (changes both the column width and the row height).
        * @param {number} Elementwidth. The new element (column) width.
        * @param {number} Elementheight. The new element (row) height.
        */
        ArrayComponent.prototype.resizeElement = function (Elementwidth, Elementheight) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.resizeElement(Elementwidth, Elementheight);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.resizeElement(Elementwidth, Elementheight);
                });
            }
        };
        /** @description Selects all members of the array.
        */
        ArrayComponent.prototype.selectAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectAll();
                });
            }
        };
        /** @description Selects an element with the passed row and column bound indexes.
        * @param {number} Rowboundindex.
        * @param {number} Columnboundindex.
        */
        ArrayComponent.prototype.selectElement = function (Rowboundindex, Columnboundindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
                });
            }
        };
        /** @description Sets the column (element) width.
        * @param {number} Columnwidth. The new column width.
        */
        ArrayComponent.prototype.setColumnWidth = function (Columnwidth) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setColumnWidth(Columnwidth);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setColumnWidth(Columnwidth);
                });
            }
        };
        /** @description Sets the default value of array members.
        * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
        */
        ArrayComponent.prototype.setDefaultValue = function (Defaultvalue) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setDefaultValue(Defaultvalue);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setDefaultValue(Defaultvalue);
                });
            }
        };
        /** @description Sets the value of one or more Array indexers.
        * @param {any[]} Settings. An array of objects with the fields index and value.
        */
        ArrayComponent.prototype.setIndexerValue = function (Settings) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setIndexerValue(Settings);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setIndexerValue(Settings);
                });
            }
        };
        /** @description Sets the row (element) height.
        * @param {number} Rowheight. The new row height.
        */
        ArrayComponent.prototype.setRowHeight = function (Rowheight) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setRowHeight(Rowheight);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setRowHeight(Rowheight);
                });
            }
        };
        /** @description Makes the last array member visible.
        */
        ArrayComponent.prototype.showLastElement = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showLastElement();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showLastElement();
                });
            }
        };
        /** @description Designates the start of a selection. To end a selection, call endSelection.
        * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
        * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
        */
        ArrayComponent.prototype.startSelection = function (Rowboundindex, Columnboundindex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
                });
            }
        };
        /** @description Increases or decreases the visual gap between Array elements.
        */
        ArrayComponent.prototype.toggleElementGap = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggleElementGap();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggleElementGap();
                });
            }
        };
        /** @description Transposes the array. Applicable only when dimensions is 2 (2D array).
        */
        ArrayComponent.prototype.transposeArray = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.transposeArray();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.transposeArray();
                });
            }
        };
        /** @description Sets or gets the value of the whole array or sets the value of a member of the array.
        * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
        * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
        * @returns {any[]}
      */
        ArrayComponent.prototype.val = function (Newvalue, Elementindexes) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.val(Newvalue, Elementindexes);
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
        Object.defineProperty(ArrayComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        ArrayComponent.prototype.ngOnInit = function () {
        };
        ArrayComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        ArrayComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        ArrayComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        ArrayComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['arraySizeChangeHandler'] = function (event) { that.onArraySizeChange.emit(event); };
            that.nativeElement.addEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['dimensionChangeHandler'] = function (event) { that.onDimensionChange.emit(event); };
            that.nativeElement.addEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);
            that.eventHandlers['elementClickHandler'] = function (event) { that.onElementClick.emit(event); };
            that.nativeElement.addEventListener('elementClick', that.eventHandlers['elementClickHandler']);
            that.eventHandlers['scrollHandler'] = function (event) { that.onScroll.emit(event); };
            that.nativeElement.addEventListener('scroll', that.eventHandlers['scrollHandler']);
            that.eventHandlers['sizeChangeHandler'] = function (event) { that.onSizeChange.emit(event); };
            that.nativeElement.addEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);
        };
        /** @description Remove event listeners. */
        ArrayComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['arraySizeChangeHandler']) {
                that.nativeElement.removeEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);
            }
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['dimensionChangeHandler']) {
                that.nativeElement.removeEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);
            }
            if (that.eventHandlers['elementClickHandler']) {
                that.nativeElement.removeEventListener('elementClick', that.eventHandlers['elementClickHandler']);
            }
            if (that.eventHandlers['scrollHandler']) {
                that.nativeElement.removeEventListener('scroll', that.eventHandlers['scrollHandler']);
            }
            if (that.eventHandlers['sizeChangeHandler']) {
                that.nativeElement.removeEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);
            }
        };
        ArrayComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "arrayIndexingMode", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "changeProperty", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "customWidgetDefaultValue", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "dimensions", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "elementHeight", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "elementTemplate", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "elementWidth", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "getElementValue", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "indexerHeight", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "indexerWidth", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "rows", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "setElementValue", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "showHorizontalScrollbar", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "showIndexDisplay", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "showSelection", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "showVerticalScrollbar", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "type", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], ArrayComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], ArrayComponent.prototype, "onArraySizeChange", void 0);
        __decorate([
            core.Output()
        ], ArrayComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], ArrayComponent.prototype, "onDimensionChange", void 0);
        __decorate([
            core.Output()
        ], ArrayComponent.prototype, "onElementClick", void 0);
        __decorate([
            core.Output()
        ], ArrayComponent.prototype, "onScroll", void 0);
        __decorate([
            core.Output()
        ], ArrayComponent.prototype, "onSizeChange", void 0);
        ArrayComponent = __decorate([
            core.Directive({
                exportAs: 'smart-array', selector: 'smart-array, [smart-array]'
            })
        ], ArrayComponent);
        return ArrayComponent;
    }(BaseElement));

    var ArrayModule = /** @class */ (function () {
        function ArrayModule() {
        }
        ArrayModule = __decorate([
            core.NgModule({
                declarations: [ArrayComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [ArrayComponent]
            })
        ], ArrayModule);
        return ArrayModule;
    }());

    exports.ArrayComponent = ArrayComponent;
    exports.ArrayModule = ArrayModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-array.umd.js.map
