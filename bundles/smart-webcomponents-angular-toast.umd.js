
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.toast';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/toast', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].toast = {}), global.ng.core));
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

    var ToastComponent = /** @class */ (function (_super) {
        __extends(ToastComponent, _super);
        function ToastComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when the toast item is clicked.
            *  @param event. The custom event. 	*/
            _this.onItemClick = new core.EventEmitter();
            /** @description This event is triggered when the toast item is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the toast item is opened.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered on swipebottom over an toast item.
            *  @param event. The custom event. 	*/
            _this.onSwipebottom = new core.EventEmitter();
            /** @description This event is triggered on swipeleft over an toast item.
            *  @param event. The custom event. 	*/
            _this.onSwipeleft = new core.EventEmitter();
            /** @description This event is triggered on swiperight over an toast item.
            *  @param event. The custom event. 	*/
            _this.onSwiperight = new core.EventEmitter();
            /** @description This event is triggered on swipetop over an toast item.
            *  @param event. The custom event. 	*/
            _this.onSwipetop = new core.EventEmitter();
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
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "appendTo", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "autoClose", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "autoCloseDelay", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "autoOpen", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "iconClass", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "itemClass", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "modal", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "position", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "showCloseButton", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "type", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "onSwipebottom", void 0);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "onSwipeleft", void 0);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "onSwiperight", void 0);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "onSwipetop", void 0);
        ToastComponent = __decorate([
            core.Directive({
                exportAs: 'smart-toast', selector: 'smart-toast, [smart-toast]'
            })
        ], ToastComponent);
        return ToastComponent;
    }(BaseElement));

    var ToastModule = /** @class */ (function () {
        function ToastModule() {
        }
        ToastModule = __decorate([
            core.NgModule({
                declarations: [ToastComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [ToastComponent]
            })
        ], ToastModule);
        return ToastModule;
    }());

    exports.Smart = Smart;
    exports.ToastComponent = ToastComponent;
    exports.ToastModule = ToastModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-toast.umd.js.map
