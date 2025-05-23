
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
            /** @description This event is triggered after resizing is completed.
            *  @param event. The custom event. 	*/
            _this.onResize = new core.EventEmitter();
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
        Object.defineProperty(LayoutComponent.prototype, "allowLiveSplit", {
            /** @description Determines whether splitting is live or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowLiveSplit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowLiveSplit = value : undefined;
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
            /** @description Determines the selected item. */
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
        /** @description Returns a Layout item according to the index that is passed.
        * @param {number | string} index. The index of an item.
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
        /** @description Refreshes the Layout
        */
        LayoutComponent.prototype.refresh = function () {
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
        /** @description Inserts a new item inside the Layout.
        * @param {any} type. The index of an item to be removed or an instance of JQX.SplitterItem.
        * @param {string | undefined} position?. A string that represents the position where the new item will be created.
        */
        LayoutComponent.prototype.createLayoutItem = function (type, position) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.createLayoutItem(type, position);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.createLayoutItem(type, position);
                });
            }
        };
        /** @description Moves all children from one item to another.
        * @param {any} oldItem. The source item that will have it's content removed.
        * @param {any} newItem. The host item that will have it's content replaced.
        */
        LayoutComponent.prototype.moveChildren = function (oldItem, newItem) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.moveChildren(oldItem, newItem);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.moveChildren(oldItem, newItem);
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
            this.nativeElement.classList.add('smart-angular');
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
            that.eventHandlers['resizeHandler'] = function (event) { that.onResize.emit(event); };
            that.nativeElement.addEventListener('resize', that.eventHandlers['resizeHandler']);
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
            if (that.eventHandlers['resizeHandler']) {
                that.nativeElement.removeEventListener('resize', that.eventHandlers['resizeHandler']);
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
        ], LayoutComponent.prototype, "locale", null);
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
        ], LayoutComponent.prototype, "allowLiveSplit", null);
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
        ], LayoutComponent.prototype, "onResize", void 0);
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
                exportAs: 'smart-layout', selector: 'smart-layout, [smart-layout]'
            })
        ], LayoutComponent);
        return LayoutComponent;
    }(BaseElement));

    var LayoutItemComponent = /** @class */ (function (_super) {
        __extends(LayoutItemComponent, _super);
        function LayoutItemComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        LayoutItemComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-layout-item');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(LayoutItemComponent.prototype, "disabled", {
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
        Object.defineProperty(LayoutItemComponent.prototype, "modifiers", {
            /** @description Sets or gets the modifiers of the Layout item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.modifiers : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.modifiers = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutItemComponent.prototype, "min", {
            /** @description Determines the min size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutItemComponent.prototype, "label", {
            /** @description Determines the label of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutItemComponent.prototype, "size", {
            /** @description Determines the size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.size : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.size = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutItemComponent.prototype, "unfocusable", {
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
        Object.defineProperty(LayoutItemComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        LayoutItemComponent.prototype.ngOnInit = function () {
        };
        LayoutItemComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        LayoutItemComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        LayoutItemComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        LayoutItemComponent.prototype.listen = function () {
            var that = this;
        };
        /** @description Remove event listeners. */
        LayoutItemComponent.prototype.unlisten = function () {
            var that = this;
        };
        LayoutItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LayoutItemComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], LayoutItemComponent.prototype, "modifiers", null);
        __decorate([
            core.Input()
        ], LayoutItemComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], LayoutItemComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], LayoutItemComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], LayoutItemComponent.prototype, "unfocusable", null);
        LayoutItemComponent = __decorate([
            core.Directive({
                exportAs: 'smart-layout-item', selector: 'smart-layout-item, [smart-layout-item]'
            })
        ], LayoutItemComponent);
        return LayoutItemComponent;
    }(BaseElement));

    var LayoutGroupComponent = /** @class */ (function (_super) {
        __extends(LayoutGroupComponent, _super);
        function LayoutGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        LayoutGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-layout-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(LayoutGroupComponent.prototype, "disabled", {
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
        Object.defineProperty(LayoutGroupComponent.prototype, "modifiers", {
            /** @description Sets or gets the modifiers of the Layout item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.modifiers : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.modifiers = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutGroupComponent.prototype, "min", {
            /** @description Determines the min size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutGroupComponent.prototype, "label", {
            /** @description Determines the label of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutGroupComponent.prototype, "orientation", {
            /** @description Determines the group orientation. */
            get: function () {
                return this.nativeElement ? this.nativeElement.orientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.orientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutGroupComponent.prototype, "size", {
            /** @description Determines the size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.size : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.size = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutGroupComponent.prototype, "unfocusable", {
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
        Object.defineProperty(LayoutGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        LayoutGroupComponent.prototype.ngOnInit = function () {
        };
        LayoutGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        LayoutGroupComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        LayoutGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        LayoutGroupComponent.prototype.listen = function () {
            var that = this;
        };
        /** @description Remove event listeners. */
        LayoutGroupComponent.prototype.unlisten = function () {
            var that = this;
        };
        LayoutGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LayoutGroupComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], LayoutGroupComponent.prototype, "modifiers", null);
        __decorate([
            core.Input()
        ], LayoutGroupComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], LayoutGroupComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], LayoutGroupComponent.prototype, "orientation", null);
        __decorate([
            core.Input()
        ], LayoutGroupComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], LayoutGroupComponent.prototype, "unfocusable", null);
        LayoutGroupComponent = __decorate([
            core.Directive({
                exportAs: 'smart-layout-group', selector: 'smart-layout-group, [smart-layout-group]'
            })
        ], LayoutGroupComponent);
        return LayoutGroupComponent;
    }(BaseElement));

    var TabLayoutItemComponent = /** @class */ (function (_super) {
        __extends(TabLayoutItemComponent, _super);
        function TabLayoutItemComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TabLayoutItemComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tab-layout-item');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TabLayoutItemComponent.prototype, "disabled", {
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
        Object.defineProperty(TabLayoutItemComponent.prototype, "modifiers", {
            /** @description Sets or gets the modifiers of the Layout item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.modifiers : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.modifiers = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutItemComponent.prototype, "min", {
            /** @description Determines the min size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutItemComponent.prototype, "label", {
            /** @description Determines the label of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutItemComponent.prototype, "orientation", {
            /** @description Determines the group orientation. */
            get: function () {
                return this.nativeElement ? this.nativeElement.orientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.orientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutItemComponent.prototype, "size", {
            /** @description Determines the size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.size : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.size = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutItemComponent.prototype, "unfocusable", {
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
        Object.defineProperty(TabLayoutItemComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TabLayoutItemComponent.prototype.ngOnInit = function () {
        };
        TabLayoutItemComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        TabLayoutItemComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        TabLayoutItemComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        TabLayoutItemComponent.prototype.listen = function () {
            var that = this;
        };
        /** @description Remove event listeners. */
        TabLayoutItemComponent.prototype.unlisten = function () {
            var that = this;
        };
        TabLayoutItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TabLayoutItemComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TabLayoutItemComponent.prototype, "modifiers", null);
        __decorate([
            core.Input()
        ], TabLayoutItemComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], TabLayoutItemComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], TabLayoutItemComponent.prototype, "orientation", null);
        __decorate([
            core.Input()
        ], TabLayoutItemComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], TabLayoutItemComponent.prototype, "unfocusable", null);
        TabLayoutItemComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tab-layout-item', selector: 'smart-tab-layout-item, [smart-tab-layout-item]'
            })
        ], TabLayoutItemComponent);
        return TabLayoutItemComponent;
    }(BaseElement));

    var TabLayoutGroupComponent = /** @class */ (function (_super) {
        __extends(TabLayoutGroupComponent, _super);
        function TabLayoutGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TabLayoutGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tab-layout-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TabLayoutGroupComponent.prototype, "disabled", {
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
        Object.defineProperty(TabLayoutGroupComponent.prototype, "modifiers", {
            /** @description Sets or gets the modifiers of the Layout item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.modifiers : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.modifiers = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutGroupComponent.prototype, "min", {
            /** @description Determines the min size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutGroupComponent.prototype, "label", {
            /** @description Determines the label of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutGroupComponent.prototype, "orientation", {
            /** @description Determines the group orientation. */
            get: function () {
                return this.nativeElement ? this.nativeElement.orientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.orientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutGroupComponent.prototype, "position", {
            /** @description Determines the position of the tab items group. */
            get: function () {
                return this.nativeElement ? this.nativeElement.position : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.position = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutGroupComponent.prototype, "size", {
            /** @description Determines the size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.size : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.size = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabLayoutGroupComponent.prototype, "unfocusable", {
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
        Object.defineProperty(TabLayoutGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TabLayoutGroupComponent.prototype.ngOnInit = function () {
        };
        TabLayoutGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        TabLayoutGroupComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        TabLayoutGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        TabLayoutGroupComponent.prototype.listen = function () {
            var that = this;
        };
        /** @description Remove event listeners. */
        TabLayoutGroupComponent.prototype.unlisten = function () {
            var that = this;
        };
        TabLayoutGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "modifiers", null);
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "orientation", null);
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "position", null);
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], TabLayoutGroupComponent.prototype, "unfocusable", null);
        TabLayoutGroupComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tab-layout-group', selector: 'smart-tab-layout-group, [smart-tab-layout-group]'
            })
        ], TabLayoutGroupComponent);
        return TabLayoutGroupComponent;
    }(BaseElement));

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule = __decorate([
            core.NgModule({
                declarations: [LayoutComponent, LayoutItemComponent, LayoutGroupComponent, TabLayoutItemComponent, TabLayoutGroupComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [LayoutComponent, LayoutItemComponent, LayoutGroupComponent, TabLayoutItemComponent, TabLayoutGroupComponent]
            })
        ], LayoutModule);
        return LayoutModule;
    }());

    exports.LayoutComponent = LayoutComponent;
    exports.LayoutGroupComponent = LayoutGroupComponent;
    exports.LayoutItemComponent = LayoutItemComponent;
    exports.LayoutModule = LayoutModule;
    exports.Smart = Smart;
    exports.TabLayoutGroupComponent = TabLayoutGroupComponent;
    exports.TabLayoutItemComponent = TabLayoutItemComponent;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-layout.umd.js.map
