
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.chart';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/chart', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].chart = {}), global.ng.core));
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

    var ChartComponent = /** @class */ (function (_super) {
        __extends(ChartComponent, _super);
        function ChartComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description The event is raised when the user clicks on a chart annotation.
            *  @param event. The custom event. 	*/
            _this.onAnnotationClick = new core.EventEmitter();
            /** @description The event is raised when the user moves the cursor above a chart annotation.
            *  @param event. The custom event. 	*/
            _this.onAnnotationMouseenter = new core.EventEmitter();
            /** @description The event is raised when the user moves the cursor out of a chart annotation.
            *  @param event. The custom event. 	*/
            _this.onAnnotationMouseleave = new core.EventEmitter();
            /** @description The event is raised when the user clicks on series element.
            *  @param event. The custom event. 	*/
            _this.onClick = new core.EventEmitter();
            /** @description The event is raised when the user moves the cursor out of a series element.
            *  @param event. The custom event. 	*/
            _this.onMouseout = new core.EventEmitter();
            /** @description The event is raised when the user moves the cursor above a series element.
            *  @param event. The custom event. 	*/
            _this.onMouseover = new core.EventEmitter();
            /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
            *  @param event. The custom event. 	*/
            _this.onRangeSelectionChanged = new core.EventEmitter();
            /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering.
            *  @param event. The custom event. 	*/
            _this.onRangeSelectionChanging = new core.EventEmitter();
            /** @description The event is raised when the chart begins rendering.
            *  @param event. The custom event. 	*/
            _this.onRefreshBegin = new core.EventEmitter();
            /** @description The event is raised when the chart finishes rendering.
            *  @param event. The custom event. 	*/
            _this.onRefreshEnd = new core.EventEmitter();
            /** @description The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
            *  @param event. The custom event. 	*/
            _this.onToggle = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        ChartComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-chart');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(ChartComponent.prototype, "animation", {
            /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.animation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.animation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "animationDuration", {
            /** @description Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.animationDuration : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "backgroundColor", {
            /** @description Sets the chart's background color. For example: '#DDFFE8' */
            get: function () {
                return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "backgroundImage", {
            /** @description Sets the chart's background image. For example: 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg' */
            get: function () {
                return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "borderLineColor", {
            /** @description Sets the chart's border color. For example: '#098700' */
            get: function () {
                return this.nativeElement ? this.nativeElement.borderLineColor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.borderLineColor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "borderLineWidth", {
            /** @description Sets the chart's border line width. */
            get: function () {
                return this.nativeElement ? this.nativeElement.borderLineWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.borderLineWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "caption", {
            /** @description Sets the caption (title) of the chart. */
            get: function () {
                return this.nativeElement ? this.nativeElement.caption : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.caption = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "clip", {
            /** @description Determines whether to clip plotted elements that overflow the axis boundaries. */
            get: function () {
                return this.nativeElement ? this.nativeElement.clip : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.clip = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "colorScheme", {
            /** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.colorScheme : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "columnSeriesOverlap", {
            /** @description Enables or disables overlapping of the column series. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnSeriesOverlap : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnSeriesOverlap = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "crosshairsColor", {
            /** @description Gets or sets the color of the crosshairs lines. The 'enableCrosshairs' property should be 'true'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.crosshairsColor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.crosshairsColor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "crosshairsDashStyle", {
            /** @description Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. The 'enableCrosshairs' property should be 'true'. For example: '3,3' */
            get: function () {
                return this.nativeElement ? this.nativeElement.crosshairsDashStyle : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.crosshairsDashStyle = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "crosshairsLineWidth", {
            /** @description Gets or sets the width of the crosshairs lines. The 'enableCrosshairs' property should be 'true' */
            get: function () {
                return this.nativeElement ? this.nativeElement.crosshairsLineWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.crosshairsLineWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "dataSource", {
            /** @description Sets the chart's data source. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "description", {
            /** @description Sets the description text of the chart. */
            get: function () {
                return this.nativeElement ? this.nativeElement.description : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.description = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "disabled", {
            /** @description Enables or disables the chart. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "draw", {
            /** @description Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing. */
            get: function () {
                return this.nativeElement ? this.nativeElement.draw : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.draw = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "drawBefore", {
            /** @description Function for custom drawing before the caption and other chart elements. */
            get: function () {
                return this.nativeElement ? this.nativeElement.drawBefore : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.drawBefore = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "enableAxisTextAnimation", {
            /** @description Determines if the animation of the axes text is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableAxisTextAnimation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableAxisTextAnimation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "enableCrosshairs", {
            /** @description Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point. */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableCrosshairs : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableCrosshairs = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "greyScale", {
            /** @description Determines whether to display the chart using greyscale colors. */
            get: function () {
                return this.nativeElement ? this.nativeElement.greyScale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.greyScale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "legendLayout", {
            /** @description Sets the legend's layout. */
            get: function () {
                return this.nativeElement ? this.nativeElement.legendLayout : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.legendLayout = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "locale", {
            /** @description Sets or gets the locale. Used in conjunction with the property messages. */
            get: function () {
                return this.nativeElement ? this.nativeElement.locale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.locale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "localization", {
            /** @description Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
            get: function () {
                return this.nativeElement ? this.nativeElement.localization : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.localization = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "messages", {
            /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
            get: function () {
                return this.nativeElement ? this.nativeElement.messages : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.messages = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "padding", {
            /** @description Sets the left, top, right and bottom padding of the Chart. */
            get: function () {
                return this.nativeElement ? this.nativeElement.padding : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.padding = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "renderEngine", {
            /** @description Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
            get: function () {
                return this.nativeElement ? this.nativeElement.renderEngine : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.renderEngine = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "rightToLeft", {
            /** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "seriesGroups", {
            /** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
            get: function () {
                return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.seriesGroups = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "showBorderLine", {
            /** @description Determines whether to display the chart's border line. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showBorderLine : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showBorderLine = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "showLegend", {
            /** @description Determines whether to show or hide the chart series legend. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showLegend : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showLegend = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "showToolTips", {
            /** @description Enables or disables the chart tooltips. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showToolTips : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showToolTips = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "showToolTipsOnAllSeries", {
            /** @description Determines whether to show a composite tooltip containing information for all series. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "theme", {
            /** @description Determines the set of default background, line, text and band colors that will be used in the Chart. */
            get: function () {
                return this.nativeElement ? this.nativeElement.theme : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.theme = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "titlePadding", {
            /** @description Sets the padding of the chart's title (caption). */
            get: function () {
                return this.nativeElement ? this.nativeElement.titlePadding : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.titlePadding = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "toolTipBackground", {
            /** @description Tooltip background color. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipBackground : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipBackground = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "toolTipFormatFunction", {
            /** @description Determines the tooltip hide delay in milliseconds. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "toolTipHideDelay", {
            /** @description Tooltip line color. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipHideDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipHideDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "toolTipLineColor", {
            /** @description Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms]. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "toolTipShowDelay", {
            /** @description An object with settings about the Chart's y-axis (value axis). */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipShowDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipShowDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "valueAxis", {
            /** @description Sets the Chart's xAxis. */
            get: function () {
                return this.nativeElement ? this.nativeElement.valueAxis : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.valueAxis = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "xAxis", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.xAxis : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.xAxis = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
        * @param {string} schemeName. The name of the custom color scheme.
        * @param {any[]} colorsArray. An array of color values.
        */
        ChartComponent.prototype.addColorScheme = function (schemeName, colorsArray) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addColorScheme(schemeName, colorsArray);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addColorScheme(schemeName, colorsArray);
                });
            }
        };
        /** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
        * @param {string} schemeName. The name of the color scheme.
        * @returns {any[]}
      */
        ChartComponent.prototype.getColorScheme = function (schemeName) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getColorScheme(schemeName);
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
        /** @description Gets the rendered coordinates of a data point element.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex. Item (data point) index.
        * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
      */
        ChartComponent.prototype.getItemCoord = function (groupIndex, serieIndex, itemIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getItemCoord(groupIndex, serieIndex, itemIndex);
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
        /** @description Gets the number of rendered items in a specific serie.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @returns {number}
      */
        ChartComponent.prototype.getItemsCount = function (groupIndex, serieIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getItemsCount(groupIndex, serieIndex);
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
        /** @description Gets the rendered coordinates and values of the valueAxis labels.
        * @param {number} groupIndex. Series group index.
        * @returns {any}
      */
        ChartComponent.prototype.getValueAxisLabels = function (groupIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getValueAxisLabels(groupIndex);
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
        /** @description Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
        * @param {number} groupIndex. Series group index.
        * @returns {DOMRect}
      */
        ChartComponent.prototype.getValueAxisRect = function (groupIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getValueAxisRect(groupIndex);
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
        /** @description Gets the valueAxis (vertical axis)'s value.
        * @param {number} offset. Vertical offset.
        * @param {number} groupIndex. Series group index.
        * @returns {any}
      */
        ChartComponent.prototype.getValueAxisValue = function (offset, groupIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getValueAxisValue(offset, groupIndex);
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
        /** @description Gets the rendered coordinates and values of the xAxis labels.
        * @param {number} groupIndex. Series group index.
        * @returns {any}
      */
        ChartComponent.prototype.getXAxisLabels = function (groupIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getXAxisLabels(groupIndex);
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
        /** @description Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
        * @param {number} groupIndex. Series group index.
        * @returns {DOMRect}
      */
        ChartComponent.prototype.getXAxisRect = function (groupIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getXAxisRect(groupIndex);
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
        /** @description Gets the xAxis (horizontal axis)'s value.
        * @param {number} offset. Horizontal offset.
        * @param {number} groupIndex. Series group index.
        * @returns {any}
      */
        ChartComponent.prototype.getXAxisValue = function (offset, groupIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getXAxisValue(offset, groupIndex);
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
        /** @description Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
        */
        ChartComponent.prototype.hideSerie = function (groupIndex, serieIndex, itemIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
                });
            }
        };
        /** @description Hides the current tooltip if visible.
        * @param {number} hideDelay?. Hide delay.
        */
        ChartComponent.prototype.hideToolTip = function (hideDelay) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideToolTip(hideDelay);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideToolTip(hideDelay);
                });
            }
        };
        /** @description Prints the chart.
        */
        ChartComponent.prototype.print = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.print();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.print();
                });
            }
        };
        /** @description Refreshes the content of the chart element after a property or data update.
        */
        ChartComponent.prototype.refresh = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.refresh();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.refresh();
                });
            }
        };
        /** @description Removes an existing color scheme. If the scheme does not exist, the method has no effect.
        * @param {string} schemeName. The name of the custom color scheme.
        */
        ChartComponent.prototype.removeColorScheme = function (schemeName) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeColorScheme(schemeName);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeColorScheme(schemeName);
                });
            }
        };
        /** @description Exports the chart's content as JPEG image.
        * @param {string} fileName?. File name.
        */
        ChartComponent.prototype.saveAsJPEG = function (fileName) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveAsJPEG(fileName);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveAsJPEG(fileName);
                });
            }
        };
        /** @description Exports the chart's content as PNG image.
        * @param {string} fileName?. File name.
        */
        ChartComponent.prototype.saveAsPNG = function (fileName) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveAsPNG(fileName);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveAsPNG(fileName);
                });
            }
        };
        /** @description Exports the chart's content as PDF.
        * @param {string} fileName?. File name.
        * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
        */
        ChartComponent.prototype.saveAsPDF = function (fileName, pageOrientation) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveAsPDF(fileName, pageOrientation);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveAsPDF(fileName, pageOrientation);
                });
            }
        };
        /** @description Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
        */
        ChartComponent.prototype.showSerie = function (groupIndex, serieIndex, itemIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
                });
            }
        };
        /** @description Shows a the tooltip for a particular data point.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex. Item (data point) index.
        * @param {number} showDelay?. Show delay.
        * @param {number} hideDelay?. Hide delay.
        */
        ChartComponent.prototype.showToolTip = function (groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
                });
            }
        };
        /** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
        */
        ChartComponent.prototype.update = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.update();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.update();
                });
            }
        };
        Object.defineProperty(ChartComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        ChartComponent.prototype.ngOnInit = function () {
        };
        ChartComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        ChartComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        ChartComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        ChartComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['annotationClickHandler'] = function (event) { that.onAnnotationClick.emit(event); };
            that.nativeElement.addEventListener('annotationClick', that.eventHandlers['annotationClickHandler']);
            that.eventHandlers['annotationMouseenterHandler'] = function (event) { that.onAnnotationMouseenter.emit(event); };
            that.nativeElement.addEventListener('annotationMouseenter', that.eventHandlers['annotationMouseenterHandler']);
            that.eventHandlers['annotationMouseleaveHandler'] = function (event) { that.onAnnotationMouseleave.emit(event); };
            that.nativeElement.addEventListener('annotationMouseleave', that.eventHandlers['annotationMouseleaveHandler']);
            that.eventHandlers['clickHandler'] = function (event) { that.onClick.emit(event); };
            that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
            that.eventHandlers['mouseoutHandler'] = function (event) { that.onMouseout.emit(event); };
            that.nativeElement.addEventListener('mouseout', that.eventHandlers['mouseoutHandler']);
            that.eventHandlers['mouseoverHandler'] = function (event) { that.onMouseover.emit(event); };
            that.nativeElement.addEventListener('mouseover', that.eventHandlers['mouseoverHandler']);
            that.eventHandlers['rangeSelectionChangedHandler'] = function (event) { that.onRangeSelectionChanged.emit(event); };
            that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
            that.eventHandlers['rangeSelectionChangingHandler'] = function (event) { that.onRangeSelectionChanging.emit(event); };
            that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
            that.eventHandlers['refreshBeginHandler'] = function (event) { that.onRefreshBegin.emit(event); };
            that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
            that.eventHandlers['refreshEndHandler'] = function (event) { that.onRefreshEnd.emit(event); };
            that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
            that.eventHandlers['toggleHandler'] = function (event) { that.onToggle.emit(event); };
            that.nativeElement.addEventListener('toggle', that.eventHandlers['toggleHandler']);
        };
        /** @description Remove event listeners. */
        ChartComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['annotationClickHandler']) {
                that.nativeElement.removeEventListener('annotationClick', that.eventHandlers['annotationClickHandler']);
            }
            if (that.eventHandlers['annotationMouseenterHandler']) {
                that.nativeElement.removeEventListener('annotationMouseenter', that.eventHandlers['annotationMouseenterHandler']);
            }
            if (that.eventHandlers['annotationMouseleaveHandler']) {
                that.nativeElement.removeEventListener('annotationMouseleave', that.eventHandlers['annotationMouseleaveHandler']);
            }
            if (that.eventHandlers['clickHandler']) {
                that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
            }
            if (that.eventHandlers['mouseoutHandler']) {
                that.nativeElement.removeEventListener('mouseout', that.eventHandlers['mouseoutHandler']);
            }
            if (that.eventHandlers['mouseoverHandler']) {
                that.nativeElement.removeEventListener('mouseover', that.eventHandlers['mouseoverHandler']);
            }
            if (that.eventHandlers['rangeSelectionChangedHandler']) {
                that.nativeElement.removeEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
            }
            if (that.eventHandlers['rangeSelectionChangingHandler']) {
                that.nativeElement.removeEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
            }
            if (that.eventHandlers['refreshBeginHandler']) {
                that.nativeElement.removeEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
            }
            if (that.eventHandlers['refreshEndHandler']) {
                that.nativeElement.removeEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
            }
            if (that.eventHandlers['toggleHandler']) {
                that.nativeElement.removeEventListener('toggle', that.eventHandlers['toggleHandler']);
            }
        };
        ChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "animationDuration", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "backgroundColor", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "backgroundImage", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "borderLineColor", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "borderLineWidth", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "caption", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "clip", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "colorScheme", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "columnSeriesOverlap", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "crosshairsColor", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "crosshairsDashStyle", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "crosshairsLineWidth", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "description", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "draw", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "drawBefore", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "enableAxisTextAnimation", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "enableCrosshairs", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "greyScale", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "legendLayout", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "localization", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "padding", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "renderEngine", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "seriesGroups", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "showBorderLine", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "showLegend", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "showToolTips", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "showToolTipsOnAllSeries", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "titlePadding", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "toolTipBackground", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "toolTipFormatFunction", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "toolTipHideDelay", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "toolTipLineColor", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "toolTipShowDelay", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "valueAxis", null);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "xAxis", null);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onAnnotationClick", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onAnnotationMouseenter", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onAnnotationMouseleave", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onClick", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onMouseout", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onMouseover", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onRangeSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onRangeSelectionChanging", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onRefreshBegin", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onRefreshEnd", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "onToggle", void 0);
        ChartComponent = __decorate([
            core.Directive({
                exportAs: 'smart-chart', selector: 'smart-chart, [smart-chart]'
            })
        ], ChartComponent);
        return ChartComponent;
    }(BaseElement));

    var ChartModule = /** @class */ (function () {
        function ChartModule() {
        }
        ChartModule = __decorate([
            core.NgModule({
                declarations: [ChartComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [ChartComponent]
            })
        ], ChartModule);
        return ChartModule;
    }());

    exports.ChartComponent = ChartComponent;
    exports.ChartModule = ChartModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-chart.umd.js.map
