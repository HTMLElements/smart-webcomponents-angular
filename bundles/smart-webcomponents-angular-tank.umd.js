
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tank';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/tank', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].tank = {}), global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

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

    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return TankComponent; }),
        multi: true
    };
    var TankComponent = /** @class */ (function (_super) {
        __extends(TankComponent, _super);
        function TankComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /**
            * @description
            * The registered callback function called when a change event occurs on the form elements.
            */
            _this._onChange = function () { };
            /**
            * @description
            * The registered callback function called when a blur event occurs on the form elements.
            */
            _this._onTouched = function () { };
            /** @description This event is triggered when the value of the tank is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this._initialChange = true;
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TankComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tank');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TankComponent.prototype, "animation", {
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
        Object.defineProperty(TankComponent.prototype, "coerce", {
            /** @description If is set to true all values coerce to the interval, set in the interval property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.coerce : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.coerce = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "customInterval", {
            /** @description Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.customInterval : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.customInterval = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "customTicks", {
            /** @description If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.customTicks : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.customTicks = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "dateLabelFormatString", {
            /** @description Sets or gets the pattern which labels are displayed in when mode is 'date'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dateLabelFormatString = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "decimalSeparator", {
            /** @description Sets or gets the char to use as the decimal separator in numeric values.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.decimalSeparator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "disabled", {
            /** @description Enables or disables the widget.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "interval", {
            /** @description When cooerce property is true, all values coerce to the interval's value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.interval : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.interval = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "inverted", {
            /** @description Sets the direction of the tank. If is true - positions of the tank's begin and end are changed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inverted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inverted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "labelFormatFunction", {
            /** @description A callback function that can be used to format the values displayed on the tank labels. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "labelsVisibility", {
            /** @description Sets or gets the widget's label visibility */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelsVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "locale", {
            /** @description Sets or gets the locale. Used in conjunction with the property messages.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.locale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.locale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(TankComponent.prototype, "logarithmicScale", {
            /** @description Enables or disables the usage of logarithmic scale in the widget. */
            get: function () {
                return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "max", {
            /** @description Sets or gets the maximum value of the widget. */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "mechanicalAction", {
            /** @description Sets or gets the type of used mechanical action. */
            get: function () {
                return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.mechanicalAction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "messages", {
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
        Object.defineProperty(TankComponent.prototype, "min", {
            /** @description Sets or gets the minimum value of the widget.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "mode", {
            /** @description Sets or gets whether the widget works with numbers or dates. */
            get: function () {
                return this.nativeElement ? this.nativeElement.mode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.mode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "name", {
            /** @description Sets or gets the element's name, which is used as a reference when the data is submitted. */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "orientation", {
            /** @description Sets the orientation of the widget */
            get: function () {
                return this.nativeElement ? this.nativeElement.orientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.orientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "precisionDigits", {
            /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "readonly", {
            /** @description If the widgets is readonly, the users cannot iteract with the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(TankComponent.prototype, "scalePosition", {
            /** @description Sets the position of the widget's scales.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.scalePosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "scaleType", {
            /** @description Sets the type of the tank's scale.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.scaleType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scaleType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "scientificNotation", {
            /** @description Enables or disables scientific notation. */
            get: function () {
                return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scientificNotation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "showThumbLabel", {
            /** @description Enables or disables displaying of the thumb label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showThumbLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showThumbLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "showTooltip", {
            /** @description Enables or disables displaying of the tooltip. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showTooltip : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showTooltip = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "showUnit", {
            /** @description Enables or disables displaying of the units. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showUnit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showUnit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "significantDigits", {
            /** @description Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.significantDigits : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.significantDigits = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "theme", {
            /** @description Sets or gets the element's visual theme.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.theme : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.theme = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "thumbLabelPosition", {
            /** @description Sets or gets the position of the thumb label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.thumbLabelPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.thumbLabelPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "ticksPosition", {
            /** @description Sets or gets the position of the ticks in jqxTank widget. */
            get: function () {
                return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "ticksVisibility", {
            /** @description Sets or gets the visibility of the ticks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "tooltipPosition", {
            /** @description Sets or gets the position of the tooltip in jqxTank widget. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "unfocusable", {
            /** @description Sets or gets if the element can be focused. */
            get: function () {
                return this.nativeElement ? this.nativeElement.unfocusable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "unit", {
            /** @description Sets or gets the name of unit used in jqxTank widget. */
            get: function () {
                return this.nativeElement ? this.nativeElement.unit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.unit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "validation", {
            /** @description Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
            get: function () {
                return this.nativeElement ? this.nativeElement.validation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.validation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "value", {
            /** @description Sets or gets the value of the jqxTank widget.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TankComponent.prototype, "wordLength", {
            /** @description Sets or gets the word length. Applicable only when scaleType is 'integer'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.wordLength : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.wordLength = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Focuses the tank.
        */
        TankComponent.prototype.focus = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.focus();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.focus();
                });
            }
        };
        /** @description Gets the optimal size of the widget.
        * @returns {any}
      */
        TankComponent.prototype.getOptimalSize = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getOptimalSize();
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
        /** @description Get/set the value of the tank.
        * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank.
        * @returns {string}
      */
        TankComponent.prototype.val = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.val(value);
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
        Object.defineProperty(TankComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TankComponent.prototype.ngOnInit = function () {
        };
        TankComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        TankComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        Object.defineProperty(TankComponent.prototype, "ngValue", {
            get: function () {
                if (!this.nativeElement) {
                    return null;
                }
                var value = this.nativeElement.value;
                return value;
            },
            set: function (value) {
                if (this.nativeElement) {
                    this.writeValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        TankComponent.prototype.writeValue = function (value) {
            var that = this;
            var normalizedValue = value == null ? '' : value;
            that.nativeElement.whenRendered(function () {
                that.value = normalizedValue;
                if (that._initialChange === false) {
                    that._onChange(that.value);
                }
            });
        };
        TankComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        TankComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        TankComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        TankComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['changeModelHandler'] = function (event) {
                that._initialChange = false;
                that._onChange(that.nativeElement.value);
            };
            that.eventHandlers['blurModelHandler'] = function (event) {
                that._onTouched();
            };
            that.nativeElement.whenRendered(function () {
                if (that.nativeElement.querySelector('input')) {
                    that.eventHandlers['keyupModelHandler'] = function (event) {
                        setTimeout(function () { that.eventHandlers['changeModelHandler'](event); }, 50);
                    };
                    that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
                }
            });
            that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
            that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
        };
        /** @description Remove event listeners. */
        TankComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['changeModelHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
                if (that.nativeElement.querySelector('input')) {
                    that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
                }
            }
            if (that.eventHandlers['blurModelHandler']) {
                that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
            }
        };
        TankComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TankComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "coerce", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "customInterval", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "customTicks", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "dateLabelFormatString", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "decimalSeparator", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "interval", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "inverted", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "labelFormatFunction", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "labelsVisibility", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "logarithmicScale", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "mechanicalAction", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "mode", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "orientation", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "precisionDigits", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "scalePosition", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "scaleType", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "scientificNotation", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "showThumbLabel", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "showTooltip", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "showUnit", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "significantDigits", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "thumbLabelPosition", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "ticksPosition", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "ticksVisibility", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "tooltipPosition", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "unit", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "validation", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], TankComponent.prototype, "wordLength", null);
        __decorate([
            core.Output()
        ], TankComponent.prototype, "onChange", void 0);
        TankComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tank', selector: 'smart-tank, [smart-tank]',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            })
        ], TankComponent);
        return TankComponent;
    }(BaseElement));

    var TankModule = /** @class */ (function () {
        function TankModule() {
        }
        TankModule = __decorate([
            core.NgModule({
                declarations: [TankComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [TankComponent]
            })
        ], TankModule);
        return TankModule;
    }());

    exports.Smart = Smart;
    exports.TankComponent = TankComponent;
    exports.TankModule = TankModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-tank.umd.js.map
