
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.layout';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/layout', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].layout = {}), global.ng.core));
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

    var LayoutComponent = /** @class */ (function (_super) {
        __extends(LayoutComponent, _super);
        function LayoutComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when resizing begins.
            *  @param event. The custom event. 	*/
            _this.onResizeStart = new core.EventEmitter();
            /** @description This event is triggered when resizing finishes.
            *  @param event. The custom event. 	*/
            _this.onResizeEnd = new core.EventEmitter();
            /** @description This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
            *   item - The Splitter item that was the target of a change.
            *   type - A description of the operation that has cause the change.
            */
            _this.onStateChange = new core.EventEmitter();
            /** @description This event is triggered when the selection is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
            *   oldSelectedIndex - The Splitter item that was previously selected.
            *   selectedIndex - The Splitter item that is currently selected.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when a the context menu is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onOpening = new core.EventEmitter();
            /** @description This event is triggered when a the context menu is opened.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when an option from the context menu has been clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	label, 	value)
            *   target - The Splitter item that was the target of the context menu opening.
            *   item - The Context menu item that was clicked.
            *   label - The label of the context menu that was clicked.
            *   value - The value of the context menu that was clicked.
            */
            _this.onMenuItemClick = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        LayoutComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-layout');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(LayoutComponent.prototype, "animation", {
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
        Object.defineProperty(LayoutComponent.prototype, "contextMenuDataSource", {
            /** @description Determines the options that will be available for selection inside the context menu. */
            get: function () {
                return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "disabled", {
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
        Object.defineProperty(LayoutComponent.prototype, "dataSource", {
            /** @description Sets or gets Layout's data source. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "itemLabel", {
            /** @description Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "itemGroupLabel", {
            /** @description Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemGroupLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemGroupLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "items", {
            /** @description A getter that returns an array of all Splitter items inside the Layout. */
            get: function () {
                return this.nativeElement ? this.nativeElement.items : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.items = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "locale", {
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
        Object.defineProperty(LayoutComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(LayoutComponent.prototype, "messages", {
            /** @description Sets an object with string values, related to the different states of passwords strength. */
            get: function () {
                return this.nativeElement ? this.nativeElement.messages : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.messages = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "orientation", {
            /** @description Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource. */
            get: function () {
                return this.nativeElement ? this.nativeElement.orientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.orientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "readonly", {
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
        Object.defineProperty(LayoutComponent.prototype, "resizeStep", {
            /** @description Determines the resize step during reisizing */
            get: function () {
                return this.nativeElement ? this.nativeElement.resizeStep : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "liveResize", {
            /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.liveResize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.liveResize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "placeholder", {
            /** @description Determines the placeholder text of the empty items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(LayoutComponent.prototype, "selectedIndex", {
            /** @description Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutComponent.prototype, "theme", {
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
        Object.defineProperty(LayoutComponent.prototype, "unfocusable", {
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
        /** @description Appends a new node.
        * @param {Node} node. The node to append
        * @returns {Node}
      */
        LayoutComponent.prototype.appendChild = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.appendChild(node);
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
        /** @description Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
        * @param {Node} newNode. The  "smart-splitter-item" node to insert.
        * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
        * @returns {Node}
      */
        LayoutComponent.prototype.insertBefore = function (newNode, referenceNode) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.insertBefore(newNode, referenceNode);
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
        /** @description Removes a child "smart-splitter-item" node from the Layout.
        * @param {Node} node. The "smart-splitter-item" node to remove.
        * @returns {Node}
      */
        LayoutComponent.prototype.removeChild = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.removeChild(node);
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
        /** @description Returns a Splitter Item according to the index that is passed as an argument.
        * @param {any} index. The index of an item.
        */
        LayoutComponent.prototype.getItem = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.getItem(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.getItem(index);
                });
            }
        };
        /** @description Returns the index of a Splitter Item that is passed as an argument.
        * @param {any} item. The index of the Splitter item that is passed as an argument.
        */
        LayoutComponent.prototype.getItemIndex = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.getItemIndex(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.getItemIndex(item);
                });
            }
        };
        /** @description Insert a new Splitter item at a given position.
        * @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
        * @param {number | string} index. The index at which a new item will be inserted.
        * @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
        */
        LayoutComponent.prototype.insert = function (item, index, position) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(item, index, position);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insert(item, index, position);
                });
            }
        };
        /** @description Removes a Splitter item from the Layout.
        * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
        */
        LayoutComponent.prototype.removeItem = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeItem(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeItem(index);
                });
            }
        };
        /** @description Removes all items from the Layout
        */
        LayoutComponent.prototype.removeAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeAll();
                });
            }
        };
        /** @description Selects a Splitter item from the Layout.
        * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
        */
        LayoutComponent.prototype.select = function (index) {
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
        /** @description Unselects the selected item inside the element.
        */
        LayoutComponent.prototype.unselect = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.unselect();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.unselect();
                });
            }
        };
        /** @description Updates a Splitter item that is inside the Layout.
        * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
        * @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
        */
        LayoutComponent.prototype.updateItem = function (index, settings) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateItem(index, settings);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateItem(index, settings);
                });
            }
        };
        /** @description Clears the localStorage of any previous cached states of the element according to it's id.
        */
        LayoutComponent.prototype.clearState = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearState();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearState();
                });
            }
        };
        /** @description Saves the current state of the element to LocalStorage. Requires an id to be set to the element.
        * @returns {any}
      */
        LayoutComponent.prototype.saveState = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.saveState();
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
        /** @description Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element.
        * @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
        */
        LayoutComponent.prototype.loadState = function (state) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.loadState(state);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.loadState(state);
                });
            }
        };
        Object.defineProperty(LayoutComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        LayoutComponent.prototype.ngOnInit = function () {
        };
        LayoutComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        LayoutComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        LayoutComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        LayoutComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
            that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
            that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            that.eventHandlers['stateChangeHandler'] = function (event) { that.onStateChange.emit(event); };
            that.nativeElement.addEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['menuItemClickHandler'] = function (event) { that.onMenuItemClick.emit(event); };
            that.nativeElement.addEventListener('menuItemClick', that.eventHandlers['menuItemClickHandler']);
        };
        /** @description Remove event listeners. */
        LayoutComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['resizeStartHandler']) {
                that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            }
            if (that.eventHandlers['resizeEndHandler']) {
                that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            }
            if (that.eventHandlers['stateChangeHandler']) {
                that.nativeElement.removeEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
            }
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['closingHandler']) {
                that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
            }
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
            }
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['menuItemClickHandler']) {
                that.nativeElement.removeEventListener('menuItemClick', that.eventHandlers['menuItemClickHandler']);
            }
        };
        LayoutComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "contextMenuDataSource", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "itemLabel", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "itemGroupLabel", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "orientation", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "resizeStep", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "liveResize", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "selectedIndex", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], LayoutComponent.prototype, "unfocusable", null);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onResizeStart", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onResizeEnd", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onStateChange", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], LayoutComponent.prototype, "onMenuItemClick", void 0);
        LayoutComponent = __decorate([
            core.Directive({
                selector: 'smart-layout, [smart-layout]'
            })
        ], LayoutComponent);
        return LayoutComponent;
    }(BaseElement));

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule = __decorate([
            core.NgModule({
                declarations: [LayoutComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [LayoutComponent]
            })
        ], LayoutModule);
        return LayoutModule;
    }());

    exports.LayoutComponent = LayoutComponent;
    exports.LayoutModule = LayoutModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-layout.umd.js.map
