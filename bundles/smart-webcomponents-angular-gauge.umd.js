
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.gauge';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/gauge', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].gauge = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return GaugeComponent; }),
        multi: true
    };
    var GaugeComponent = /** @class */ (function (_super) {
        __extends(GaugeComponent, _super);
        function GaugeComponent(ref) {
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
            /** @description This event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
            *   oldValue - The previous value of the element.
            *   value - The new value of the element.
            */
            _this.onChange = new core.EventEmitter();
            _this._initialChange = true;
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        GaugeComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-gauge');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(GaugeComponent.prototype, "analogDisplayType", {
            /** @description Determines the type of gauge's indicator. */
            get: function () {
                return this.nativeElement ? this.nativeElement.analogDisplayType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.analogDisplayType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "animation", {
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
        Object.defineProperty(GaugeComponent.prototype, "animationDuration", {
            /** @description Sets or gets gauge's animation duration. Applicable only when animation is not 'none'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.animationDuration : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "coerce", {
            /** @description With the coerce property true, the value is set to the nearest value allowed by the interval property.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.coerce : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.coerce = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "customInterval", {
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
        Object.defineProperty(GaugeComponent.prototype, "customTicks", {
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
        Object.defineProperty(GaugeComponent.prototype, "dateLabelFormatString", {
            /** @description Determines the date pattern of the labels when mode is 'date'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dateLabelFormatString = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "decimalSeparator", {
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
        Object.defineProperty(GaugeComponent.prototype, "digitalDisplay", {
            /** @description Enables or disables the digital display of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.digitalDisplay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.digitalDisplay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "digitalDisplayPosition", {
            /** @description Sets the position of the digital display inside the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.digitalDisplayPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.digitalDisplayPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "disabled", {
            /** @description Enables or disables the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "drawNeedle", {
            /** @description Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle. */
            get: function () {
                return this.nativeElement ? this.nativeElement.drawNeedle : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.drawNeedle = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "endAngle", {
            /** @description Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees. */
            get: function () {
                return this.nativeElement ? this.nativeElement.endAngle : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.endAngle = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "interval", {
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
        Object.defineProperty(GaugeComponent.prototype, "inverted", {
            /** @description Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inverted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inverted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "labelFormatFunction", {
            /** @description A callback function that can be used to format the values displayed inside the gauge labels. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "labelsVisibility", {
            /** @description Determines the visibility of the labels inside the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelsVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "locale", {
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
        Object.defineProperty(GaugeComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(GaugeComponent.prototype, "logarithmicScale", {
            /** @description Enables or disables the usage of logarithmic scale in the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.logarithmicScale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "max", {
            /** @description Determines the maximum value for the scale of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "mechanicalAction", {
            /** @description Determines when the value of the element is updated. */
            get: function () {
                return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.mechanicalAction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "messages", {
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
        Object.defineProperty(GaugeComponent.prototype, "min", {
            /** @description Determines the minimum value for the scale of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "mode", {
            /** @description Determines whether the element works with numbers or dates. */
            get: function () {
                return this.nativeElement ? this.nativeElement.mode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.mode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "name", {
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
        Object.defineProperty(GaugeComponent.prototype, "needlePosition", {
            /** @description Determines the position of the needle when analogDisplayType is 'needle'.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.needlePosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.needlePosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "precisionDigits", {
            /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.precisionDigits = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "ranges", {
            /** @description This property represents an array of objects. Each object is a different range. The range is a colored area with specific size. */
            get: function () {
                return this.nativeElement ? this.nativeElement.ranges : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.ranges = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "readonly", {
            /** @description When the element is read only the users cannot interact with it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "rightToLeft", {
            /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "scalePosition", {
            /** @description Determines the position of the scale in the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.scalePosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scalePosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "scaleType", {
            /** @description Determines the type of the gauge's value and scale.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.scaleType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scaleType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "scientificNotation", {
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
        Object.defineProperty(GaugeComponent.prototype, "showRanges", {
            /** @description This property indicates whether the gauge ranges are visible or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showRanges : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showRanges = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "showUnit", {
            /** @description Enables or disables displaying of units. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showUnit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showUnit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "significantDigits", {
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
        Object.defineProperty(GaugeComponent.prototype, "sizeMode", {
            /** @description Determines how the Gauge will size. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "startAngle", {
            /** @description Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees. */
            get: function () {
                return this.nativeElement ? this.nativeElement.startAngle : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.startAngle = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "theme", {
            /** @description Sets or gets the element's visual theme. */
            get: function () {
                return this.nativeElement ? this.nativeElement.theme : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.theme = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "ticksPosition", {
            /** @description Determines the position of the ticks in the Gauge. */
            get: function () {
                return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.ticksPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "ticksVisibility", {
            /** @description Determines the visibility of the ticks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.ticksVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "unfocusable", {
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
        Object.defineProperty(GaugeComponent.prototype, "unit", {
            /** @description Sets or gets the name of unit used for the values on the scale of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.unit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.unit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "validation", {
            /** @description Sets the value's validation by min/max. */
            get: function () {
                return this.nativeElement ? this.nativeElement.validation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.validation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "value", {
            /** @description Sets or gets the value of the element. The value can be a date only when scaleType is 'date'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeComponent.prototype, "wordLength", {
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
        /** @description Focuses the element.
        */
        GaugeComponent.prototype.focus = function () {
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
        /** @description Gets the optimal size of the element (the current width and the height based on the plotted internal elements).
        * @returns {any}
      */
        GaugeComponent.prototype.getOptimalSize = function () {
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
        /** @description Get/set the value of the gauge.
        * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
        * @returns {string}
      */
        GaugeComponent.prototype.val = function (value) {
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
        Object.defineProperty(GaugeComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        GaugeComponent.prototype.ngOnInit = function () {
        };
        GaugeComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        GaugeComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        Object.defineProperty(GaugeComponent.prototype, "ngValue", {
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
        GaugeComponent.prototype.writeValue = function (value) {
            var that = this;
            var normalizedValue = value == null ? '' : value;
            that.nativeElement.whenRendered(function () {
                that.value = normalizedValue;
                if (that._initialChange === false) {
                    that._onChange(that.value);
                }
            });
        };
        GaugeComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        GaugeComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        GaugeComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        GaugeComponent.prototype.listen = function () {
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
        GaugeComponent.prototype.unlisten = function () {
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
        GaugeComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "analogDisplayType", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "animationDuration", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "coerce", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "customInterval", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "customTicks", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "dateLabelFormatString", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "decimalSeparator", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "digitalDisplay", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "digitalDisplayPosition", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "drawNeedle", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "endAngle", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "interval", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "inverted", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "labelFormatFunction", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "labelsVisibility", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "logarithmicScale", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "mechanicalAction", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "mode", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "needlePosition", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "precisionDigits", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "ranges", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "scalePosition", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "scaleType", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "scientificNotation", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "showRanges", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "showUnit", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "significantDigits", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "sizeMode", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "startAngle", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "ticksPosition", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "ticksVisibility", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "unit", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "validation", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], GaugeComponent.prototype, "wordLength", null);
        __decorate([
            core.Output()
        ], GaugeComponent.prototype, "onChange", void 0);
        GaugeComponent = __decorate([
            core.Directive({
                exportAs: 'smart-gauge', selector: 'smart-gauge, [smart-gauge]',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            })
        ], GaugeComponent);
        return GaugeComponent;
    }(BaseElement));

    var GaugeModule = /** @class */ (function () {
        function GaugeModule() {
        }
        GaugeModule = __decorate([
            core.NgModule({
                declarations: [GaugeComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [GaugeComponent]
            })
        ], GaugeModule);
        return GaugeModule;
    }());

    exports.GaugeComponent = GaugeComponent;
    exports.GaugeModule = GaugeModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-gauge.umd.js.map
