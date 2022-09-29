
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.carousel';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/carousel', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].carousel = {}), global.ng.core));
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

    var CarouselComponent = /** @class */ (function (_super) {
        __extends(CarouselComponent, _super);
        function CarouselComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Triggered when the active ( in view ) slide is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
            *   index - The index of the new active slide.
            *   previousIndex - The index of the previous slide that was active.
            */
            _this.onChange = new core.EventEmitter();
            /** @description Triggered when the process of slide changing starts.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
            *   index - The index of the new active slide.
            *   previousIndex - The index of the previous slide that was active.
            */
            _this.onChanging = new core.EventEmitter();
            /** @description This event is triggered when the user swipes to the left inside the Carousel.
            *  @param event. The custom event. 	*/
            _this.onSwipeleft = new core.EventEmitter();
            /** @description This event is triggered when the user swipes to the right inside the Carousel.
            *  @param event. The custom event. 	*/
            _this.onSwiperight = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        CarouselComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-carousel');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(CarouselComponent.prototype, "animation", {
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
        Object.defineProperty(CarouselComponent.prototype, "autoPlay", {
            /** @description The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoPlay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoPlay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "dataSource", {
            /** @description An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "delay", {
            /** @description Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.delay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.delay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "disabled", {
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
        Object.defineProperty(CarouselComponent.prototype, "disableItemClick", {
            /** @description Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableItemClick : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableItemClick = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "displayMode", {
            /** @description Determines the display mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "hideArrows", {
            /** @description Hides the navigation buttons. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideArrows : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideArrows = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "hideIndicators", {
            /** @description Hides the slide indication panel that shows which item is currently in view (active item). */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideIndicators : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideIndicators = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "indicatorTemplate", {
            /** @description Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. */
            get: function () {
                return this.nativeElement ? this.nativeElement.indicatorTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indicatorTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "interval", {
            /** @description Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.interval : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.interval = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "itemTemplate", {
            /** @description Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "keyboard", {
            /** @description Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard */
            get: function () {
                return this.nativeElement ? this.nativeElement.keyboard : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.keyboard = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "locale", {
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
        Object.defineProperty(CarouselComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(CarouselComponent.prototype, "loop", {
            /** @description Determines whether the the items should start over when the first or last item is reached. */
            get: function () {
                return this.nativeElement ? this.nativeElement.loop : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.loop = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "messages", {
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
        Object.defineProperty(CarouselComponent.prototype, "readonly", {
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
        Object.defineProperty(CarouselComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(CarouselComponent.prototype, "slideShow", {
            /** @description When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.slideShow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.slideShow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "swipe", {
            /** @description Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.swipe : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.swipe = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "theme", {
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
        Object.defineProperty(CarouselComponent.prototype, "unfocusable", {
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
        Object.defineProperty(CarouselComponent.prototype, "wheel", {
            /** @description Activates/deactivates slide navigation via mouse wheel. By default it's disabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.wheel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.wheel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Navigates to the next slide.
        */
        CarouselComponent.prototype.next = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.next();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.next();
                });
            }
        };
        /** @description Pauses the slide show if slideShow is enabled.
        */
        CarouselComponent.prototype.pause = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.pause();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.pause();
                });
            }
        };
        /** @description Starts the slide show if slideShow is enabled.
        */
        CarouselComponent.prototype.play = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.play();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.play();
                });
            }
        };
        /** @description Navigates to the previous slide.
        */
        CarouselComponent.prototype.prev = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.prev();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.prev();
                });
            }
        };
        /** @description Navigates to a specific slide with the given index.
        * @param {number} index. The index of the target slide.
        */
        CarouselComponent.prototype.slideTo = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.slideTo(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.slideTo(index);
                });
            }
        };
        Object.defineProperty(CarouselComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        CarouselComponent.prototype.ngOnInit = function () {
        };
        CarouselComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        CarouselComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        CarouselComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        CarouselComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['changingHandler'] = function (event) { that.onChanging.emit(event); };
            that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
            that.eventHandlers['swipeleftHandler'] = function (event) { that.onSwipeleft.emit(event); };
            that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
            that.eventHandlers['swiperightHandler'] = function (event) { that.onSwiperight.emit(event); };
            that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        };
        /** @description Remove event listeners. */
        CarouselComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['changingHandler']) {
                that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
            }
            if (that.eventHandlers['swipeleftHandler']) {
                that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
            }
            if (that.eventHandlers['swiperightHandler']) {
                that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
            }
        };
        CarouselComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "autoPlay", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "delay", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "disableItemClick", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "displayMode", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "hideArrows", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "hideIndicators", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "indicatorTemplate", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "interval", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "keyboard", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "loop", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "slideShow", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "swipe", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], CarouselComponent.prototype, "wheel", null);
        __decorate([
            core.Output()
        ], CarouselComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], CarouselComponent.prototype, "onChanging", void 0);
        __decorate([
            core.Output()
        ], CarouselComponent.prototype, "onSwipeleft", void 0);
        __decorate([
            core.Output()
        ], CarouselComponent.prototype, "onSwiperight", void 0);
        CarouselComponent = __decorate([
            core.Directive({
                exportAs: 'smart-carousel', selector: 'smart-carousel, [smart-carousel]'
            })
        ], CarouselComponent);
        return CarouselComponent;
    }(BaseElement));

    var CarouselModule = /** @class */ (function () {
        function CarouselModule() {
        }
        CarouselModule = __decorate([
            core.NgModule({
                declarations: [CarouselComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [CarouselComponent]
            })
        ], CarouselModule);
        return CarouselModule;
    }());

    exports.CarouselComponent = CarouselComponent;
    exports.CarouselModule = CarouselModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-carousel.umd.js.map
