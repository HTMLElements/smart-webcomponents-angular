
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.menu';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/menu', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].menu = {}), global.ng.core));
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

    var MenuComponent = /** @class */ (function (_super) {
        __extends(MenuComponent, _super);
        function MenuComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when the menu is closed. The event is fired only in 'dropDown' mode.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	trigger)
            *   trigger - Indicates whether the event was called from inside the element or programatically.
            */
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when a smart-menu-items-group is collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
            *   item - The menu item that was collapsed.
            *   label - The label of the toggled item that was collapsed.
            *   value - The value of the toggled item that was collapsed.
            *   path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
            *   children - The children items of the toggled item that was collapsed.
            */
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when a smart-menu-items-group is collapsing.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
            *   item - The menu item that is going to be collapsed.
            *   label - The label of the toggled item that is going to be collapsed.
            *   value - The value of the toggled item that is going to be collapsed.
            *   path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
            *   children - The children items of the toggled item that is going to be collapsed.
            */
            _this.onCollapsing = new core.EventEmitter();
            /** @description This event is triggered when a smart-menu-items-group is expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
            *   item - The menu item that was expanded.
            *   label - The label of the toggled item that was expanded.
            *   value - The value of the toggled item that was expanded.
            *   path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
            *   children - The children items of the toggled item that was expanded.
            */
            _this.onExpand = new core.EventEmitter();
            /** @description This event is triggered before a smart-menu-items-group is expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
            *   item - The menu item that is going to be expanded.
            *   label - The label of the toggled item that is going to be expanded.
            *   value - The value of the toggled item that is going to be expanded.
            *   path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
            *   children - The children items of the toggled item that is going to be expanded.
            */
            _this.onExpanding = new core.EventEmitter();
            /** @description This event is triggered when a menu item check state is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
            *   item - The menu item which state was changed.
            *   label - The label of the item which state was changed.
            *   value - The value of the item which state was changed.
            *   checked - The checked state of the toggled item. If false the item is not toggled.
            */
            _this.onItemCheckChange = new core.EventEmitter();
            /** @description This event is triggered when a menu item is clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
            *   item - The menu item that is toggled.
            *   label - The label of the toggled item.
            *   value - The value of the toggled item.
            */
            _this.onItemClick = new core.EventEmitter();
            /** @description This event is triggered when the menu is opened. The event is fired only in 'dropDown' mode.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
            *  @param event. The custom event. 	*/
            _this.onOpening = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        MenuComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-menu');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(MenuComponent.prototype, "animation", {
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
        Object.defineProperty(MenuComponent.prototype, "autoCloseDelay", {
            /** @description Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "autoFocusOnMouseenter", {
            /** @description If set to true, on mouseenter, the element receives focus automatically. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoFocusOnMouseenter : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoFocusOnMouseenter = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "checkable", {
            /** @description Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective smart-menu-items-group. */
            get: function () {
                return this.nativeElement ? this.nativeElement.checkable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checkable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "checkboxes", {
            /** @description Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.checkboxes : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checkboxes = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "checkMode", {
            /** @description Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective smart-menu-items-group. */
            get: function () {
                return this.nativeElement ? this.nativeElement.checkMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checkMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "closeAction", {
            /** @description Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown'). */
            get: function () {
                return this.nativeElement ? this.nativeElement.closeAction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.closeAction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "dataSource", {
            /** @description Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "disabled", {
            /** @description Enables or disables element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "displayMember", {
            /** @description Determines the field in the data source that corresponds to an item's label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "dropDownAppendTo", {
            /** @description Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "dropDownOverlay", {
            /** @description If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "dropDownPosition", {
            /** @description Determines the opening direction of Menu dropdowns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "items", {
            /** @description A getter that returns an array of all Menu items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.items : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.items = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "itemsMember", {
            /** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemsMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemsMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "locale", {
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
        Object.defineProperty(MenuComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(MenuComponent.prototype, "messages", {
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
        Object.defineProperty(MenuComponent.prototype, "minimizeIconTemplate", {
            /** @description Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id. */
            get: function () {
                return this.nativeElement ? this.nativeElement.minimizeIconTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.minimizeIconTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "minimizeWidth", {
            /** @description Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically. */
            get: function () {
                return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.minimizeWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "mode", {
            /** @description Determines the menu's display mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.mode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.mode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "opened", {
            /** @description Opens or closes thte menu when it's in 'dropDown' mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.opened : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.opened = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "overflow", {
            /** @description Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null. */
            get: function () {
                return this.nativeElement ? this.nativeElement.overflow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.overflow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "preventCloseOnCheck", {
            /** @description If set to true, prevents the closing of the Menu or its dropdowns when Menu items are checked/unchecked. */
            get: function () {
                return this.nativeElement ? this.nativeElement.preventCloseOnCheck : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.preventCloseOnCheck = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "readonly", {
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
        Object.defineProperty(MenuComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(MenuComponent.prototype, "selectionMode", {
            /** @description Determines the menu's selection mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuComponent.prototype, "theme", {
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
        Object.defineProperty(MenuComponent.prototype, "unfocusable", {
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
        Object.defineProperty(MenuComponent.prototype, "valueMember", {
            /** @description Determines the field in the data source that corresponds to an item's value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.valueMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.valueMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds an item to the menu.
        * @param {HTMLElement} Item. A smart-menu-item to add to the Menu.
        * @param {HTMLElement | string} Parent?. The smart-menu-items-group or its id or numeric path to add the item to.
        */
        MenuComponent.prototype.addItem = function (Item, Parent) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addItem(Item, Parent);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addItem(Item, Parent);
                });
            }
        };
        /** @description Checks an item.
        * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
        */
        MenuComponent.prototype.checkItem = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.checkItem(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.checkItem(item);
                });
            }
        };
        /** @description Clears all Menu items.
        */
        MenuComponent.prototype.clear = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clear();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clear();
                });
            }
        };
        /** @description Clicks on an item programatically.
        * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
        */
        MenuComponent.prototype.clickItem = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clickItem(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clickItem(item);
                });
            }
        };
        /** @description Closes the Menu when mode is 'dropDown'.
        */
        MenuComponent.prototype.close = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.close();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.close();
                });
            }
        };
        /** @description Collapses an item.
        * @param {HTMLElement | string} item?. smart-menu-item/smart-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
        * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
        */
        MenuComponent.prototype.collapseItem = function (item, animation) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseItem(item, animation);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseItem(item, animation);
                });
            }
        };
        /** @description Expands an item.
        * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
        * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
        */
        MenuComponent.prototype.expandItem = function (item, animation) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandItem(item, animation);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandItem(item, animation);
                });
            }
        };
        /** @description Gets an item by its id or numeric path.
        * @param {string} id. The id or numeric path of an item
        * @returns {HTMLElement}
      */
        MenuComponent.prototype.getItem = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getItem(id);
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
        /** @description Maximizes the Menu.
        */
        MenuComponent.prototype.maximize = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.maximize();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.maximize();
                });
            }
        };
        /** @description Minimizes the Menu.
        */
        MenuComponent.prototype.minimize = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.minimize();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.minimize();
                });
            }
        };
        /** @description Opens the Menu when mode is 'dropDown'.
        * @param {number} left. Horizontal position
        * @param {number} top. Vertical position
        */
        MenuComponent.prototype.open = function (left, top) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.open(left, top);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.open(left, top);
                });
            }
        };
        /** @description Removes an item from the menu.
        * @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group or its id or numeric path to remove.
        */
        MenuComponent.prototype.removeItem = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeItem(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeItem(item);
                });
            }
        };
        /** @description Unchecks an item.
        * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path)
        */
        MenuComponent.prototype.uncheckItem = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.uncheckItem(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.uncheckItem(item);
                });
            }
        };
        Object.defineProperty(MenuComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        MenuComponent.prototype.ngOnInit = function () {
        };
        MenuComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        MenuComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        MenuComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        MenuComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['collapsingHandler'] = function (event) { that.onCollapsing.emit(event); };
            that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
            that.eventHandlers['expandingHandler'] = function (event) { that.onExpanding.emit(event); };
            that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);
            that.eventHandlers['itemCheckChangeHandler'] = function (event) { that.onItemCheckChange.emit(event); };
            that.nativeElement.addEventListener('itemCheckChange', that.eventHandlers['itemCheckChangeHandler']);
            that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
            that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        };
        /** @description Remove event listeners. */
        MenuComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
            }
            if (that.eventHandlers['closingHandler']) {
                that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
            }
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
            }
            if (that.eventHandlers['collapsingHandler']) {
                that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
            }
            if (that.eventHandlers['expandHandler']) {
                that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
            }
            if (that.eventHandlers['expandingHandler']) {
                that.nativeElement.removeEventListener('expanding', that.eventHandlers['expandingHandler']);
            }
            if (that.eventHandlers['itemCheckChangeHandler']) {
                that.nativeElement.removeEventListener('itemCheckChange', that.eventHandlers['itemCheckChangeHandler']);
            }
            if (that.eventHandlers['itemClickHandler']) {
                that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
        };
        MenuComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "autoCloseDelay", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "autoFocusOnMouseenter", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "checkable", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "checkboxes", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "checkMode", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "closeAction", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "displayMember", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "dropDownAppendTo", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "dropDownOverlay", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "itemsMember", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "minimizeIconTemplate", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "minimizeWidth", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "mode", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "overflow", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "preventCloseOnCheck", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "valueMember", null);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onCollapsing", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onExpanding", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onItemCheckChange", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], MenuComponent.prototype, "onOpening", void 0);
        MenuComponent = __decorate([
            core.Directive({
                exportAs: 'smart-menu', selector: 'smart-menu, [smart-menu]'
            })
        ], MenuComponent);
        return MenuComponent;
    }(BaseElement));

    var MenuItemComponent = /** @class */ (function (_super) {
        __extends(MenuItemComponent, _super);
        function MenuItemComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        MenuItemComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-menu-item');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(MenuItemComponent.prototype, "checked", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemComponent.prototype, "disabled", {
            /** @description Enables or disables element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemComponent.prototype, "label", {
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
        Object.defineProperty(MenuItemComponent.prototype, "level", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.level : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.level = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemComponent.prototype, "separator", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.separator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.separator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemComponent.prototype, "shortcut", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.shortcut : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.shortcut = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemComponent.prototype, "value", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        MenuItemComponent.prototype.ngOnInit = function () {
        };
        MenuItemComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        MenuItemComponent.prototype.ngOnDestroy = function () { };
        MenuItemComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        MenuItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MenuItemComponent.prototype, "checked", null);
        __decorate([
            core.Input()
        ], MenuItemComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], MenuItemComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], MenuItemComponent.prototype, "level", null);
        __decorate([
            core.Input()
        ], MenuItemComponent.prototype, "separator", null);
        __decorate([
            core.Input()
        ], MenuItemComponent.prototype, "shortcut", null);
        __decorate([
            core.Input()
        ], MenuItemComponent.prototype, "value", null);
        MenuItemComponent = __decorate([
            core.Directive({
                exportAs: 'smart-menu-item', selector: 'smart-menu-item, [smart-menu-item]'
            })
        ], MenuItemComponent);
        return MenuItemComponent;
    }(BaseElement));

    var MenuItemsGroupComponent = /** @class */ (function (_super) {
        __extends(MenuItemsGroupComponent, _super);
        function MenuItemsGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        MenuItemsGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-menu-items-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(MenuItemsGroupComponent.prototype, "checkable", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checkable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checkable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "checked", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "checkMode", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checkMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checkMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "disabled", {
            /** @description Enables or disables element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "dropDownHeight", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "expanded", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.expanded : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.expanded = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "label", {
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
        Object.defineProperty(MenuItemsGroupComponent.prototype, "level", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.level : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.level = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "separator", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.separator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.separator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "value", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuItemsGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        MenuItemsGroupComponent.prototype.ngOnInit = function () {
        };
        MenuItemsGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        MenuItemsGroupComponent.prototype.ngOnDestroy = function () { };
        MenuItemsGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        MenuItemsGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "checkable", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "checked", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "checkMode", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "dropDownHeight", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "expanded", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "level", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "separator", null);
        __decorate([
            core.Input()
        ], MenuItemsGroupComponent.prototype, "value", null);
        MenuItemsGroupComponent = __decorate([
            core.Directive({
                exportAs: 'smart-menu-items-group', selector: 'smart-menu-items-group, [smart-menu-items-group]'
            })
        ], MenuItemsGroupComponent);
        return MenuItemsGroupComponent;
    }(BaseElement));

    var MenuModule = /** @class */ (function () {
        function MenuModule() {
        }
        MenuModule = __decorate([
            core.NgModule({
                declarations: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [MenuComponent, MenuItemComponent, MenuItemsGroupComponent]
            })
        ], MenuModule);
        return MenuModule;
    }());

    exports.MenuComponent = MenuComponent;
    exports.MenuItemComponent = MenuItemComponent;
    exports.MenuItemsGroupComponent = MenuItemsGroupComponent;
    exports.MenuModule = MenuModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-menu.umd.js.map
