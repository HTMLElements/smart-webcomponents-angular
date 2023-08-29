
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.3dchart';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/threedchart', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].threedchart = {}), global.ng.core));
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

    var ThreeDChartComponent = /** @class */ (function (_super) {
        __extends(ThreeDChartComponent, _super);
        function ThreeDChartComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description The event is raised when the user clicks on a chart element.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
            *   itemIndex - The item index of the item.
            *   serieIndex - The serie index of the item.
            *   groupIndex - The group index of the item.
            */
            _this.onItemClick = new core.EventEmitter();
            /** @description The event is raised when a chart element is shown.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
            *   itemIndex - The item index of the item.
            *   serieIndex - The serie index of the item.
            *   groupIndex - The group index of the item.
            */
            _this.onShow = new core.EventEmitter();
            /** @description The event is raised when a chart element is hidden.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
            *   itemIndex - The item index of the item.
            *   serieIndex - The serie index of the item.
            *   groupIndex - The group index of the item.
            */
            _this.onHide = new core.EventEmitter();
            /** @description The event is raised when a chart element is selected.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
            *   itemIndex - The item index of the item.
            *   serieIndex - The serie index of the item.
            *   groupIndex - The group index of the item.
            */
            _this.onSelect = new core.EventEmitter();
            /** @description The event is raised when a chart element is unselected.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
            *   itemIndex - The item index of the item.
            *   serieIndex - The serie index of the item.
            *   groupIndex - The group index of the item.
            */
            _this.onUnselect = new core.EventEmitter();
            /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
            *   minValue - The start value of the range selector.
            *   maxValue - The end value of the range selector.
            */
            _this.onRangeSelectionChanged = new core.EventEmitter();
            /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
            *   minValue - The start value of the range selector.
            *   maxValue - The end value of the range selector.
            *   oldMinValue - The previous start value of the range selector.
            *   oldMaxValue - The previous end value of the range selector.
            */
            _this.onRangeSelectionChanging = new core.EventEmitter();
            /** @description The event is raised when the chart begins rendering.
            *  @param event. The custom event. 	*/
            _this.onRefreshBegin = new core.EventEmitter();
            /** @description The event is raised when the chart finishes rendering.
            *  @param event. The custom event. 	*/
            _this.onRefreshEnd = new core.EventEmitter();
            /** @description The event is raised when the chart begins resizing.
            *  @param event. The custom event. 	*/
            _this.onResizeBegin = new core.EventEmitter();
            /** @description The event is raised when the chart finishes resizing.
            *  @param event. The custom event. 	*/
            _this.onResizeEnd = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        ThreeDChartComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-3d-chart');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(ThreeDChartComponent.prototype, "animation", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "animationSpeed", {
            /** @description Determines the rate of the animation. The default animation rate is 1 */
            get: function () {
                return this.nativeElement ? this.nativeElement.animationSpeed : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.animationSpeed = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "autoRotate", {
            /** @description Sets whether the chart will rotate automatically. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoRotate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoRotate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "autoRotateSpeed", {
            /** @description Sets the speed of the automatic rotation. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoRotateSpeed : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoRotateSpeed = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "backgroundColor", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "backgroundGradient", {
            /** @description Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color' */
            get: function () {
                return this.nativeElement ? this.nativeElement.backgroundGradient : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.backgroundGradient = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "backgroundImage", {
            /** @description Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg' */
            get: function () {
                return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "backgroundTexture", {
            /** @description Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1 */
            get: function () {
                return this.nativeElement ? this.nativeElement.backgroundTexture : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.backgroundTexture = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "cameraPosition", {
            /** @description Sets the camera's position. The property must be set to an {x, y, z} object. */
            get: function () {
                return this.nativeElement ? this.nativeElement.cameraPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.cameraPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "cameraZoom", {
            /** @description Sets the intial camera zoom. The default value is 1 */
            get: function () {
                return this.nativeElement ? this.nativeElement.cameraZoom : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.cameraZoom = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "caption", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "colorScheme", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "controlsSettings", {
            /** @description Sets the chart's controls settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.controlsSettings : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.controlsSettings = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "customModels", {
            /** @description Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl } */
            get: function () {
                return this.nativeElement ? this.nativeElement.customModels : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.customModels = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "dataSource", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "description", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "disabled", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "enableControlsToolbar", {
            /** @description Sets whether the chart's toolbar is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableControlsToolbar : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableControlsToolbar = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "controlsToolbarItems", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.controlsToolbarItems : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.controlsToolbarItems = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "gridOptions", {
            /** @description Sets the chart's grid options. */
            get: function () {
                return this.nativeElement ? this.nativeElement.gridOptions : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.gridOptions = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "legendIndex", {
            /** @description Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type */
            get: function () {
                return this.nativeElement ? this.nativeElement.legendIndex : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.legendIndex = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "legendLayout", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "lightColor", {
            /** @description Sets the light color of the 3D Scene. */
            get: function () {
                return this.nativeElement ? this.nativeElement.lightColor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.lightColor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "locale", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "messages", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "selectionMode", {
            /** @description Determines the selection mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "seriesGroups", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "showConnectionLines", {
            /** @description Determines whether to show grid connecting lines when a chart item is hovered over. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showConnectionLines : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showConnectionLines = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "showLegend", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "showLegendTable", {
            /** @description Determines whether to show or hide the chart series legend table. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showLegendTable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showLegendTable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "showToolTips", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "titlePadding", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "toolTipFormatFunction", {
            /** @description Tooltip data formatting settings for the values in the serie. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "toolTipFormatSettings", {
            /** @description Tooltip line color. By default it is set to the hovered item's color */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipFormatSettings : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipFormatSettings = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "toolTipLineColor", {
            /** @description An object with settings about the Chart's y-axis (value axis). */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "valueAxis", {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "xAxis", {
            /** @description Sets the Chart's zAxis. */
            get: function () {
                return this.nativeElement ? this.nativeElement.xAxis : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.xAxis = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ThreeDChartComponent.prototype, "zAxis", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.zAxis : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.zAxis = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
        * @param {string} schemeName. The name of the custom color scheme.
        * @param {any[]} colorsArray. An array of color values.
        */
        ThreeDChartComponent.prototype.addColorScheme = function (schemeName, colorsArray) {
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
        /** @description Begins an update of the chart. The chart will not be rendered until the endUpdate method is called.
        */
        ThreeDChartComponent.prototype.beginUpdate = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.beginUpdate();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.beginUpdate();
                });
            }
        };
        /** @description Ends an update of the chart. The chart will be rendered after the endUpdate method is called.
        * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
        */
        ThreeDChartComponent.prototype.endUpdate = function (refresh) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.endUpdate(refresh);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.endUpdate(refresh);
                });
            }
        };
        /** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
        * @param {string} schemeName. The name of the color scheme.
        * @returns {any[]}
      */
        ThreeDChartComponent.prototype.getColorScheme = function (schemeName) {
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
        /** @description Gets the item with the specified indexes.
        * @param {number | null} groupIndex?. Series group index.
        * @param {number | null} serieIndex?. Series index.
        * @param {number | null} itemIndex?. Item (data point) index.
        * @returns {any}
      */
        ThreeDChartComponent.prototype.getItemByIndexes = function (groupIndex, serieIndex, itemIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getItemByIndexes(groupIndex, serieIndex, itemIndex);
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
        /** @description Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes.
        * @param {number | null} groupIndex?. Series group index.
        * @param {number | null} serieIndex?. Series index.
        * @param {number | null} itemIndex?. Item (data point) index.
        * @returns {any}
      */
        ThreeDChartComponent.prototype.getItemsByIndexes = function (groupIndex, serieIndex, itemIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getItemsByIndexes(groupIndex, serieIndex, itemIndex);
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
        /** @description Gets the indexes of the hidden series.
        * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
      */
        ThreeDChartComponent.prototype.getHidden = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getHidden();
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
        /** @description Gets the selected items.
        * @returns {any[]}
      */
        ThreeDChartComponent.prototype.getSelection = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getSelection();
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
        /** @description Gets the rendered values of the valueAxis labels.
        * @returns {any}
      */
        ThreeDChartComponent.prototype.getValueAxisLabels = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getValueAxisLabels();
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
        /** @description Gets the rendered values of the xAxis labels.
        * @returns {any}
      */
        ThreeDChartComponent.prototype.getXAxisLabels = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getXAxisLabels();
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
        /** @description Gets the rendered values of the zAxis labels.
        * @returns {any}
      */
        ThreeDChartComponent.prototype.getZAxisLabels = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getZAxisLabels();
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
        /** @description Hides all items of a chart group.
        * @param {number} groupIndex. Series group index.
        */
        ThreeDChartComponent.prototype.hideGroup = function (groupIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideGroup(groupIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideGroup(groupIndex);
                });
            }
        };
        /** @description Hides a chart item.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex?. Item (data point) index.
        */
        ThreeDChartComponent.prototype.hideItem = function (groupIndex, serieIndex, itemIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
                });
            }
        };
        /** @description Hides all items of a chart serie.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        */
        ThreeDChartComponent.prototype.hideSerie = function (groupIndex, serieIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideSerie(groupIndex, serieIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideSerie(groupIndex, serieIndex);
                });
            }
        };
        /** @description Refreshes the content of the chart element after a property or data update.
        */
        ThreeDChartComponent.prototype.refresh = function () {
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
        ThreeDChartComponent.prototype.removeColorScheme = function (schemeName) {
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
        * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
        * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
        */
        ThreeDChartComponent.prototype.saveAsJPEG = function (fileName, includeLegend, includeCaption) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
                });
            }
        };
        /** @description Exports the chart's content as PNG image.
        * @param {string} fileName?. File name.
        * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
        * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
        */
        ThreeDChartComponent.prototype.saveAsPNG = function (fileName, includeLegend, includeCaption) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
                });
            }
        };
        /** @description Exports the chart's content as PDF file.
        * @param {string} fileName?. File name.
        * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
        * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
        */
        ThreeDChartComponent.prototype.saveAsPDF = function (fileName, includeLegend, includeCaption) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
                });
            }
        };
        /** @description Selects a chart item. If selectionMode is 'one', the previous item will be unselected.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex?. Item (data point) index.
        */
        ThreeDChartComponent.prototype.selectItem = function (groupIndex, serieIndex, itemIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
                });
            }
        };
        /** @description Shows all items of a chart group.
        * @param {number} groupIndex. Series group index.
        */
        ThreeDChartComponent.prototype.showGroup = function (groupIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showGroup(groupIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showGroup(groupIndex);
                });
            }
        };
        /** @description Shows a chart item.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex?. Item (data point) index.
        */
        ThreeDChartComponent.prototype.showItem = function (groupIndex, serieIndex, itemIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
                });
            }
        };
        /** @description Shows all items of a chart serie.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        */
        ThreeDChartComponent.prototype.showSerie = function (groupIndex, serieIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showSerie(groupIndex, serieIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showSerie(groupIndex, serieIndex);
                });
            }
        };
        /** @description Sets the camera position to its position during the initialization.
        */
        ThreeDChartComponent.prototype.setDefaultPosition = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setDefaultPosition();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setDefaultPosition();
                });
            }
        };
        /** @description Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'.
        * @param {string} mode. Camera mode.
        */
        ThreeDChartComponent.prototype.setCameraMode = function (mode) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setCameraMode(mode);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setCameraMode(mode);
                });
            }
        };
        /** @description Sets the camera position.
        * @param {number} x. X coordinate.
        * @param {number} y. Y coordinate.
        * @param {number} z. Z coordinate.
        * @param {boolean} animation?. Animation Enabled
        */
        ThreeDChartComponent.prototype.setCameraPosition = function (x, y, z, animation) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setCameraPosition(x, y, z, animation);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setCameraPosition(x, y, z, animation);
                });
            }
        };
        /** @description Sets the camera zoom.
        * @param {number} level. Zoom level.
        * @param {boolean} animation?. Animation Enabled
        */
        ThreeDChartComponent.prototype.setCameraZoom = function (level, animation) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setCameraZoom(level, animation);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setCameraZoom(level, animation);
                });
            }
        };
        /** @description Unelects a chart item.
        * @param {number} groupIndex. Series group index.
        * @param {number} serieIndex. Series index.
        * @param {number} itemIndex?. Item (data point) index.
        */
        ThreeDChartComponent.prototype.unselectItem = function (groupIndex, serieIndex, itemIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
                });
            }
        };
        /** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
        */
        ThreeDChartComponent.prototype.update = function () {
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
        Object.defineProperty(ThreeDChartComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        ThreeDChartComponent.prototype.ngOnInit = function () {
        };
        ThreeDChartComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        ThreeDChartComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        ThreeDChartComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        ThreeDChartComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
            that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
            that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
            that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
            that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
            that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
            that.eventHandlers['selectHandler'] = function (event) { that.onSelect.emit(event); };
            that.nativeElement.addEventListener('select', that.eventHandlers['selectHandler']);
            that.eventHandlers['unselectHandler'] = function (event) { that.onUnselect.emit(event); };
            that.nativeElement.addEventListener('unselect', that.eventHandlers['unselectHandler']);
            that.eventHandlers['rangeSelectionChangedHandler'] = function (event) { that.onRangeSelectionChanged.emit(event); };
            that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
            that.eventHandlers['rangeSelectionChangingHandler'] = function (event) { that.onRangeSelectionChanging.emit(event); };
            that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
            that.eventHandlers['refreshBeginHandler'] = function (event) { that.onRefreshBegin.emit(event); };
            that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
            that.eventHandlers['refreshEndHandler'] = function (event) { that.onRefreshEnd.emit(event); };
            that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
            that.eventHandlers['resizeBeginHandler'] = function (event) { that.onResizeBegin.emit(event); };
            that.nativeElement.addEventListener('resizeBegin', that.eventHandlers['resizeBeginHandler']);
            that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
            that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        };
        /** @description Remove event listeners. */
        ThreeDChartComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['itemClickHandler']) {
                that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
            }
            if (that.eventHandlers['showHandler']) {
                that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
            }
            if (that.eventHandlers['hideHandler']) {
                that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
            }
            if (that.eventHandlers['selectHandler']) {
                that.nativeElement.removeEventListener('select', that.eventHandlers['selectHandler']);
            }
            if (that.eventHandlers['unselectHandler']) {
                that.nativeElement.removeEventListener('unselect', that.eventHandlers['unselectHandler']);
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
            if (that.eventHandlers['resizeBeginHandler']) {
                that.nativeElement.removeEventListener('resizeBegin', that.eventHandlers['resizeBeginHandler']);
            }
            if (that.eventHandlers['resizeEndHandler']) {
                that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            }
        };
        ThreeDChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "animationSpeed", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "autoRotate", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "autoRotateSpeed", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "backgroundColor", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "backgroundGradient", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "backgroundImage", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "backgroundTexture", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "cameraPosition", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "cameraZoom", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "caption", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "colorScheme", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "controlsSettings", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "customModels", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "description", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "enableControlsToolbar", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "controlsToolbarItems", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "gridOptions", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "legendIndex", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "legendLayout", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "lightColor", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "seriesGroups", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "showConnectionLines", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "showLegend", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "showLegendTable", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "showToolTips", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "titlePadding", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "toolTipFormatFunction", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "toolTipFormatSettings", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "toolTipLineColor", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "valueAxis", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "xAxis", null);
        __decorate([
            core.Input()
        ], ThreeDChartComponent.prototype, "zAxis", null);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onShow", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onHide", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onSelect", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onUnselect", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onRangeSelectionChanged", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onRangeSelectionChanging", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onRefreshBegin", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onRefreshEnd", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onResizeBegin", void 0);
        __decorate([
            core.Output()
        ], ThreeDChartComponent.prototype, "onResizeEnd", void 0);
        ThreeDChartComponent = __decorate([
            core.Directive({
                exportAs: 'smart-3d-chart', selector: 'smart-3d-chart, [smart-3d-chart]'
            })
        ], ThreeDChartComponent);
        return ThreeDChartComponent;
    }(BaseElement));

    var ThreeDChartModule = /** @class */ (function () {
        function ThreeDChartModule() {
        }
        ThreeDChartModule = __decorate([
            core.NgModule({
                declarations: [ThreeDChartComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [ThreeDChartComponent]
            })
        ], ThreeDChartModule);
        return ThreeDChartModule;
    }());

    exports.Smart = Smart;
    exports.ThreeDChartComponent = ThreeDChartComponent;
    exports.ThreeDChartModule = ThreeDChartModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-threedchart.umd.js.map
