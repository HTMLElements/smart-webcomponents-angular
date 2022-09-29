
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tabs';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/tabs', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].tabs = {}), global.ng.core));
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

    var TabsComponent = /** @class */ (function (_super) {
        __extends(TabsComponent, _super);
        function TabsComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when the addNewTab is enabled and is clicked.
            *  @param event. The custom event. 	*/
            _this.onAddNewTabClick = new core.EventEmitter();
            /** @description This event is triggered when the tab selection is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
            *   index - The tab's index.
            *   oldIndex - The tab's old index.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when a tab is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
            *   index - The tab's index.
            */
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
            *   index - The tab's index.
            */
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when a drag operation has ended.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
            *   left - The tab's left position.
            *   top - The tab's top position.
            *   index - The tab's index.
            *   label - The tab's label.
            */
            _this.onDragEnd = new core.EventEmitter();
            /** @description This event is triggered when a drag operation has started.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
            *   left - The tab's left position.
            *   top - The tab's top position.
            *   index - The tab's index.
            *   label - The tab's label.
            */
            _this.onDragStart = new core.EventEmitter();
            /** @description This event is triggered when tabs have been reordered.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
            *   index - The tab's index.
            *   oldIndex - The tab's old index.
            */
            _this.onReorder = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TabsComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tabs');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TabsComponent.prototype, "addNewTab", {
            /** @description Sets or gets whether the "Add new tab" button (+) is displayed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.addNewTab : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.addNewTab = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "allowToggle", {
            /** @description Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab). */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowToggle : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowToggle = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "animation", {
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
        Object.defineProperty(TabsComponent.prototype, "closeButtonMode", {
            /** @description Sets or gets the close button mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.closeButtonMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.closeButtonMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "closeButtons", {
            /** @description Sets or gets whether close buttons are displayed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.closeButtons : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.closeButtons = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "collapsed", {
            /** @description Sets or gets whether the Tabs content section is collapsed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.collapsed : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.collapsed = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "collapsible", {
            /** @description Enables or disables the collapsible feature. */
            get: function () {
                return this.nativeElement ? this.nativeElement.collapsible : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.collapsible = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "dataSource", {
            /** @description Determines the data source that will be loaded to the Tabs. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "disabled", {
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
        Object.defineProperty(TabsComponent.prototype, "enableMouseWheelAction", {
            /** @description Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "locale", {
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
        Object.defineProperty(TabsComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(TabsComponent.prototype, "messages", {
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
        Object.defineProperty(TabsComponent.prototype, "name", {
            /** @description Sets or gets the widget's name. */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "overflow", {
            /** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.overflow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.overflow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "readonly", {
            /** @description Disables user interaction with the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "reorder", {
            /** @description Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered. */
            get: function () {
                return this.nativeElement ? this.nativeElement.reorder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.reorder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "resize", {
            /** @description Sets or gets whether tab labels can be resized by dragging with the mouse. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(TabsComponent.prototype, "scrollButtonsPosition", {
            /** @description Sets or gets the position of the scroll buttons. */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "scrollMode", {
            /** @description Sets or gets the behavior when scrolling the tab strip via the scroll buttons. */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrollMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrollMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "selectedIndex", {
            /** @description Sets or gets which tab is selected. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "selectionMode", {
            /** @description Determines the way the user can switch between tabs. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "tabLayout", {
            /** @description Applies one of four behaviors when the element is not wide enough to display all tab labels. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabLayout : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabLayout = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "tabPosition", {
            /** @description Sets or gets where the tab strip is positioned. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "tabTextOrientation", {
            /** @description Sets or gets the orientation of the text in the tabs. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabTextOrientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "theme", {
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
        Object.defineProperty(TabsComponent.prototype, "unfocusable", {
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
        /** @description Collapses the content section.
        */
        TabsComponent.prototype.collapse = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapse();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapse();
                });
            }
        };
        /** @description Returns the label of a Tab at given index.
        * @param {number} index. The index of the tab.
        * @returns {string}
      */
        TabsComponent.prototype.getTabLabel = function (index) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getTabLabel(index);
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
        /** @description Returns the content of a Tab at given index.
        * @param {number} index. The index of the tab.
        * @returns {HTMLElement}
      */
        TabsComponent.prototype.getTabContent = function (index) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getTabContent(index);
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
        /** @description Makes sure a tab is visible by scrolling to it.
        * @param {number} index. The index of the tab to scroll to.
        */
        TabsComponent.prototype.ensureVisible = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.ensureVisible(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.ensureVisible(index);
                });
            }
        };
        /** @description Expands the content section.
        */
        TabsComponent.prototype.expand = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expand();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expand();
                });
            }
        };
        /** @description Returns an array of the TabItems inside the element.
        * @returns {TabItem[]}
      */
        TabsComponent.prototype.getTabs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getTabs();
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
        /** @description Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
        * @param {number} index. The index of the tab item.
        * @returns {number}
      */
        TabsComponent.prototype.getOffsetFromEdgeOfElement = function (index) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getOffsetFromEdgeOfElement(index);
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
        /** @description Inserts a new tab and an associated content section.
        * @param {number} index. The index to insert a new tab at.
        * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
        */
        TabsComponent.prototype.insert = function (index, details) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(index, details);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insert(index, details);
                });
            }
        };
        /** @description Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
        */
        TabsComponent.prototype.refreshTabHeader = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.refreshTabHeader();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.refreshTabHeader();
                });
            }
        };
        /** @description Removes a tab and its associated content section.
        * @param {number} index. The index of the tab to remove.
        */
        TabsComponent.prototype.removeAt = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAt(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeAt(index);
                });
            }
        };
        /** @description Selects a tab.
        * @param {number} index. The index of the tab to select.
        */
        TabsComponent.prototype.select = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.select(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.select(index);
                });
            }
        };
        /** @description Updates a tab and its associated content section.
        * @param {number} index. The index of the tab to update.
        * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
        * @param {string | HTMLElement} content. The new content of the tab.
        */
        TabsComponent.prototype.update = function (index, label, content) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.update(index, label, content);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.update(index, label, content);
                });
            }
        };
        Object.defineProperty(TabsComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TabsComponent.prototype.ngOnInit = function () {
        };
        TabsComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        TabsComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        TabsComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        TabsComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['addNewTabClickHandler'] = function (event) { that.onAddNewTabClick.emit(event); };
            that.nativeElement.addEventListener('addNewTabClick', that.eventHandlers['addNewTabClickHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
            that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            that.eventHandlers['reorderHandler'] = function (event) { that.onReorder.emit(event); };
            that.nativeElement.addEventListener('reorder', that.eventHandlers['reorderHandler']);
        };
        /** @description Remove event listeners. */
        TabsComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['addNewTabClickHandler']) {
                that.nativeElement.removeEventListener('addNewTabClick', that.eventHandlers['addNewTabClickHandler']);
            }
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
            }
            if (that.eventHandlers['closingHandler']) {
                that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
            }
            if (that.eventHandlers['dragEndHandler']) {
                that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            }
            if (that.eventHandlers['dragStartHandler']) {
                that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            }
            if (that.eventHandlers['reorderHandler']) {
                that.nativeElement.removeEventListener('reorder', that.eventHandlers['reorderHandler']);
            }
        };
        TabsComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "addNewTab", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "allowToggle", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "closeButtonMode", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "closeButtons", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "collapsed", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "collapsible", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "enableMouseWheelAction", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "overflow", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "reorder", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "resize", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "scrollButtonsPosition", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "scrollMode", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "selectedIndex", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "tabLayout", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "tabPosition", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "tabTextOrientation", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], TabsComponent.prototype, "unfocusable", null);
        __decorate([
            core.Output()
        ], TabsComponent.prototype, "onAddNewTabClick", void 0);
        __decorate([
            core.Output()
        ], TabsComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], TabsComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], TabsComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], TabsComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], TabsComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], TabsComponent.prototype, "onReorder", void 0);
        TabsComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tabs', selector: 'smart-tabs, [smart-tabs]'
            })
        ], TabsComponent);
        return TabsComponent;
    }(BaseElement));

    var TabItemComponent = /** @class */ (function (_super) {
        __extends(TabItemComponent, _super);
        function TabItemComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TabItemComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tab-item');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TabItemComponent.prototype, "closeButtonHidden", {
            /** @description Tab item close button state */
            get: function () {
                return this.nativeElement ? this.nativeElement.closeButtonHidden : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.closeButtonHidden = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemComponent.prototype, "disabled", {
            /** @description Disables the Tab item */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemComponent.prototype, "index", {
            /** @description Tab item index */
            get: function () {
                return this.nativeElement ? this.nativeElement.index : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.index = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemComponent.prototype, "selected", {
            /** @description Tab item selected state */
            get: function () {
                return this.nativeElement ? this.nativeElement.selected : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selected = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemComponent.prototype, "label", {
            /** @description Tab item label */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemComponent.prototype, "content", {
            /** @description Tab item content */
            get: function () {
                return this.nativeElement ? this.nativeElement.content : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.content = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemComponent.prototype, "labelSize", {
            /** @description Tab item label size */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelSize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelSize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TabItemComponent.prototype.ngOnInit = function () {
        };
        TabItemComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        TabItemComponent.prototype.ngOnDestroy = function () { };
        TabItemComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        TabItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TabItemComponent.prototype, "closeButtonHidden", null);
        __decorate([
            core.Input()
        ], TabItemComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TabItemComponent.prototype, "index", null);
        __decorate([
            core.Input()
        ], TabItemComponent.prototype, "selected", null);
        __decorate([
            core.Input()
        ], TabItemComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], TabItemComponent.prototype, "content", null);
        __decorate([
            core.Input()
        ], TabItemComponent.prototype, "labelSize", null);
        TabItemComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tab-item', selector: 'smart-tab-item, [smart-tab-item]'
            })
        ], TabItemComponent);
        return TabItemComponent;
    }(BaseElement));

    var TabItemsGroupComponent = /** @class */ (function (_super) {
        __extends(TabItemsGroupComponent, _super);
        function TabItemsGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TabItemsGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tab-items-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TabItemsGroupComponent.prototype, "label", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemsGroupComponent.prototype, "labelSize", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelSize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelSize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabItemsGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TabItemsGroupComponent.prototype.ngOnInit = function () {
        };
        TabItemsGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        TabItemsGroupComponent.prototype.ngOnDestroy = function () { };
        TabItemsGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        TabItemsGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TabItemsGroupComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], TabItemsGroupComponent.prototype, "labelSize", null);
        TabItemsGroupComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tab-items-group', selector: 'smart-tab-items-group, [smart-tab-items-group]'
            })
        ], TabItemsGroupComponent);
        return TabItemsGroupComponent;
    }(BaseElement));

    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        TabsModule = __decorate([
            core.NgModule({
                declarations: [TabsComponent, TabItemComponent, TabItemsGroupComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [TabsComponent, TabItemComponent, TabItemsGroupComponent]
            })
        ], TabsModule);
        return TabsModule;
    }());

    exports.Smart = Smart;
    exports.TabItemComponent = TabItemComponent;
    exports.TabItemsGroupComponent = TabItemsGroupComponent;
    exports.TabsComponent = TabsComponent;
    exports.TabsModule = TabsModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-tabs.umd.js.map
