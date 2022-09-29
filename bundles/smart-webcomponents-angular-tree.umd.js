
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tree';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/tree', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].tree = {}), global.ng.core));
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

    var TreeComponent = /** @class */ (function (_super) {
        __extends(TreeComponent, _super);
        function TreeComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when selection in smart-tree is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
            *   item - The item the user has interacted with to change the selection (only when applicable).
            *   oldSelectedIndexes - The selected indexes before the selection is changed.
            *   selectedIndexes - The selected indexes after the selection is changed.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when a smart-tree-items-group is collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
            *   item - the collapsed jqx-tree-items-group
            *   label - the label of the collapsed jqx-tree-items-group
            *   path - the path of the collapsed jqx-tree-items-group
            *   value - the value of the collapsed jqx-tree-items-group
            *   children - the children of the collapsed jqx-tree-items-group
            */
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when a smart-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
            *   item - the jqx-tree-items-group to be collapsed
            *   label - the label of the jqx-tree-items-group to be collapsed
            *   path - the path of the jqx-tree-items-group to be collapsed
            *   value - the value of the jqx-tree-items-group to be collapsed
            *   children - the children of the jqx-tree-items-group to be collapsed
            */
            _this.onCollapsing = new core.EventEmitter();
            /** @description This event is triggered when a smart-tree-item/smart-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
            *   container - the tree the dragged item(s) is dropped to
            *   data - an object with additional drag details
            *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
            *   items - an array with all dragged items
            *   originalEvent - the original, browser, event that initiates the drop operation
            *   previousContainer - the tree the dragged item(s) is dragged from
            *   target - the element the dragged items are dropped to
            */
            _this.onDragEnd = new core.EventEmitter();
            /** @description This event is triggered when a smart-tree-item/smart-tree-items-group is being dragged.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
            *   data - an object with additional drag details
            *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
            *   items - an array with all dragged items
            *   originalEvent - the original, browser, event that initiates the dragging operation
            */
            _this.onDragging = new core.EventEmitter();
            /** @description This event is triggered when a dragging operation is started in smart-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
            *   container - the tree the dragged item(s) is dragged from
            *   data - an object with additional drag details
            *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
            *   items - an array with all dragged items
            *   originalEvent - the original, browser, event that initiates the drag operation
            *   previousContainer - the tree the dragged item(s) is dragged from
            */
            _this.onDragStart = new core.EventEmitter();
            /** @description This event is triggered when a smart-tree-items-group is expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
            *   item - the expanded jqx-tree-items-group
            *   label - the label of the expanded jqx-tree-items-group
            *   path - the path of the expanded jqx-tree-items-group
            *   value - the value of the expanded jqx-tree-items-group
            *   children - the children of the expanded jqx-tree-items-group
            */
            _this.onExpand = new core.EventEmitter();
            /** @description This event is triggered when a smart-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
            *   item - the jqx-tree-items-group to be expanded
            *   label - the label of the jqx-tree-items-group to be expanded
            *   path - the path of the jqx-tree-items-group to be expanded
            *   value - the value of the jqx-tree-items-group to be expanded
            *   children - the children of the jqx-tree-items-group to be expanded
            */
            _this.onExpanding = new core.EventEmitter();
            /** @description This event is triggered when the Tree has been scrolled to the bottom.
            *  @param event. The custom event. 	*/
            _this.onScrollBottomReached = new core.EventEmitter();
            /** @description This event is triggered when the Tree has been scrolled to the top.
            *  @param event. The custom event. 	*/
            _this.onScrollTopReached = new core.EventEmitter();
            /** @description This event is triggered when the user swipes to the left inside the Tree.
            *  @param event. The custom event. 	*/
            _this.onSwipeleft = new core.EventEmitter();
            /** @description This event is triggered when the user swipes to the right inside the Tree.
            *  @param event. The custom event. 	*/
            _this.onSwiperight = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TreeComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tree');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TreeComponent.prototype, "allowDrag", {
            /** @description Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowDrag : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "allowDrop", {
            /** @description Allows drop operation. Dropped items could originate from the current tree or another tree. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowDrop : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "animation", {
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
        Object.defineProperty(TreeComponent.prototype, "autoHideToggleElement", {
            /** @description Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoHideToggleElement : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoHideToggleElement = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "autoLoadState", {
            /** @description Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "autoSaveState", {
            /** @description Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "autoSort", {
            /** @description Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoSort : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoSort = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "dataSource", {
            /** @description Determines the data source that will be loaded to the Tree. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "disabled", {
            /** @description Enables or disables jqxTree. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "displayLoadingIndicator", {
            /** @description Shows or hides loading indicator. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "displayMember", {
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
        Object.defineProperty(TreeComponent.prototype, "dragFeedbackFormatFunction", {
            /** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "dragOffset", {
            /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dragOffset : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "editable", {
            /** @description Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected. */
            get: function () {
                return this.nativeElement ? this.nativeElement.editable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "expandMode", {
            /** @description Determines the expand behavior of TreeItemsGroups in the Tree. */
            get: function () {
                return this.nativeElement ? this.nativeElement.expandMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.expandMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "filterable", {
            /** @description Enables or disables filtering. Shows or hides filter input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "filterOnEnter", {
            /** @description Applies a filter only after the 'Enter' key is pressed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterOnEnter : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterOnEnter = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "filterInputPlaceholder", {
            /** @description Sets custom text for placeholder in the filter input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "filterMember", {
            /** @description Determines the TreeItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the value property or 'textContent' if the user wants to filter by text inside the TreeItem's content or any other property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "filterMode", {
            /** @description Sets filter mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "hasThreeStates", {
            /** @description Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox' */
            get: function () {
                return this.nativeElement ? this.nativeElement.hasThreeStates : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hasThreeStates = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "itemsMember", {
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
        Object.defineProperty(TreeComponent.prototype, "loadingIndicatorPlaceholder", {
            /** @description Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "loadingIndicatorPosition", {
            /** @description Sets the position of the loading indicator. */
            get: function () {
                return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "locale", {
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
        Object.defineProperty(TreeComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(TreeComponent.prototype, "messages", {
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
        Object.defineProperty(TreeComponent.prototype, "overflow", {
            /** @description Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box. */
            get: function () {
                return this.nativeElement ? this.nativeElement.overflow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.overflow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "readonly", {
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
        Object.defineProperty(TreeComponent.prototype, "rightToLeft", {
            /** @description Determines whether the right-to-left support is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "scrollMode", {
            /** @description Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrollMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrollMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "selectedIndexes", {
            /** @description An array with indexes (paths) of the selected items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "selectionDisplayMode", {
            /** @description Determines the way selected items are highlighted. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "selectionMode", {
            /** @description Determines selection mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "selectionTarget", {
            /** @description Determines whether smart-tree-items-groups can be selected. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionTarget : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionTarget = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "showLines", {
            /** @description Shows or hides lines, displaying the relation between elements in group. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showLines : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showLines = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "showRootLines", {
            /** @description Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showRootLines : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showRootLines = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "sort", {
            /** @description Sets user-defined function about custom sorting. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sort : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sort = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "sortDirection", {
            /** @description Determines sort direction - ascending or descending. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sortDirection : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "sorted", {
            /** @description Enables or disables sorting. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sorted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sorted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "theme", {
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
        Object.defineProperty(TreeComponent.prototype, "toggleElementPosition", {
            /** @description Determines togle element (arrow) position. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toggleElementPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toggleElementPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "toggleMode", {
            /** @description Determines the way to toggle smart-tree-items-groups. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toggleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toggleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeComponent.prototype, "unfocusable", {
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
        Object.defineProperty(TreeComponent.prototype, "valueMember", {
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
        /** @description Adds an item after another item as a sibling.
        * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
        * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
        */
        TreeComponent.prototype.addAfter = function (item, sibling) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addAfter(item, sibling);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addAfter(item, sibling);
                });
            }
        };
        /** @description Adds an item before another item as a sibling.
        * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
        * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
        */
        TreeComponent.prototype.addBefore = function (item, sibling) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addBefore(item, sibling);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addBefore(item, sibling);
                });
            }
        };
        /** @description Adds an item as the last child of a parent item.
        * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
        * @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
        */
        TreeComponent.prototype.addTo = function (item, parent) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addTo(item, parent);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addTo(item, parent);
                });
            }
        };
        /** @description Clears selection.
        */
        TreeComponent.prototype.clearSelection = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearSelection();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearSelection();
                });
            }
        };
        /** @description Collapses all smart-tree-items-groups.
        * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
        */
        TreeComponent.prototype.collapseAll = function (animation) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseAll(animation);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseAll(animation);
                });
            }
        };
        /** @description Collapses a smart-tree-items-group.
        * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
        * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
        */
        TreeComponent.prototype.collapseItem = function (item, animation) {
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
        /** @description Makes sure an item is visible by scrolling to it.
        * @param {HTMLElement | string} item. The id or numeric path of an item
        */
        TreeComponent.prototype.ensureVisible = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.ensureVisible(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.ensureVisible(item);
                });
            }
        };
        /** @description Expands all smart-tree-items-groups.
        * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
        */
        TreeComponent.prototype.expandAll = function (animation) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandAll(animation);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandAll(animation);
                });
            }
        };
        /** @description Expands single smart-tree-items-group.
        * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
        * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
        */
        TreeComponent.prototype.expandItem = function (item, animation) {
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
        /** @description Applies filter to the Tree.
        * @param {string} filterQuery. Filter query.
        */
        TreeComponent.prototype.filter = function (filterQuery) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.filter(filterQuery);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.filter(filterQuery);
                });
            }
        };
        /** @description Gets an item by its id or numeric path.
        * @param {string} id. The id or numeric path of an item.
        * @returns {HTMLElement}
      */
        TreeComponent.prototype.getItem = function (id) {
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
        /** @description Gets the selected values. If value is not defined, returns the selected labels.
        * @returns {string[]}
      */
        TreeComponent.prototype.getSelectedValues = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getSelectedValues();
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
        /** @description Returns SmartTree's state
        * @returns {any}
      */
        TreeComponent.prototype.getState = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getState();
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
        /** @description Inserts an item at the given position.
        * @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
        * @param {string} path?. The path to insert the item at.
        */
        TreeComponent.prototype.insert = function (item, path) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(item, path);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insert(item, path);
                });
            }
        };
        /** @description Loads the Tree's state.
        * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
        */
        TreeComponent.prototype.loadState = function (state) {
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
        /** @description Moves an item down relative to its siblings.
        * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
        */
        TreeComponent.prototype.moveDown = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.moveDown(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.moveDown(item);
                });
            }
        };
        /** @description Moves an item up relative to its siblings.
        * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
        */
        TreeComponent.prototype.moveUp = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.moveUp(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.moveUp(item);
                });
            }
        };
        /** @description Removes an item.
        * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
        */
        TreeComponent.prototype.removeItem = function (item) {
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
        /** @description Saves the Tree's state.
        * @returns {any}
      */
        TreeComponent.prototype.saveState = function () {
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
        /** @description Selects an item by its index or by HTMLElement id.
        * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
        */
        TreeComponent.prototype.select = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.select(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.select(item);
                });
            }
        };
        /** @description Selects an item or items by values.
        * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
        */
        TreeComponent.prototype.setSelectedValues = function (items) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setSelectedValues(items);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setSelectedValues(items);
                });
            }
        };
        /** @description Unselects an item by its index or by HTMLElement id.
        * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
        */
        TreeComponent.prototype.unselect = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.unselect(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.unselect(item);
                });
            }
        };
        /** @description Unselects an item or items by values.
        * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
        */
        TreeComponent.prototype.unselectValues = function (items) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.unselectValues(items);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.unselectValues(items);
                });
            }
        };
        /** @description Updates an item.
        * @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
        * @param {any} newItem. An object with updated properties.
        */
        TreeComponent.prototype.updateItem = function (item, newItem) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateItem(item, newItem);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateItem(item, newItem);
                });
            }
        };
        Object.defineProperty(TreeComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TreeComponent.prototype.ngOnInit = function () {
        };
        TreeComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        TreeComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        TreeComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        TreeComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['collapsingHandler'] = function (event) { that.onCollapsing.emit(event); };
            that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
            that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
            that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
            that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
            that.eventHandlers['expandingHandler'] = function (event) { that.onExpanding.emit(event); };
            that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);
            that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
            that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
            that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
            that.eventHandlers['swipeleftHandler'] = function (event) { that.onSwipeleft.emit(event); };
            that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
            that.eventHandlers['swiperightHandler'] = function (event) { that.onSwiperight.emit(event); };
            that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        };
        /** @description Remove event listeners. */
        TreeComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
            }
            if (that.eventHandlers['collapsingHandler']) {
                that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
            }
            if (that.eventHandlers['dragEndHandler']) {
                that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            }
            if (that.eventHandlers['draggingHandler']) {
                that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
            }
            if (that.eventHandlers['dragStartHandler']) {
                that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            }
            if (that.eventHandlers['expandHandler']) {
                that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
            }
            if (that.eventHandlers['expandingHandler']) {
                that.nativeElement.removeEventListener('expanding', that.eventHandlers['expandingHandler']);
            }
            if (that.eventHandlers['scrollBottomReachedHandler']) {
                that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            }
            if (that.eventHandlers['scrollTopReachedHandler']) {
                that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
            }
            if (that.eventHandlers['swipeleftHandler']) {
                that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
            }
            if (that.eventHandlers['swiperightHandler']) {
                that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
            }
        };
        TreeComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "allowDrag", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "allowDrop", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "autoHideToggleElement", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "autoLoadState", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "autoSaveState", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "autoSort", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "displayLoadingIndicator", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "displayMember", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "dragFeedbackFormatFunction", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "dragOffset", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "editable", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "expandMode", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "filterable", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "filterOnEnter", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "filterInputPlaceholder", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "filterMember", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "filterMode", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "hasThreeStates", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "itemsMember", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "loadingIndicatorPlaceholder", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "loadingIndicatorPosition", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "overflow", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "scrollMode", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "selectedIndexes", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "selectionDisplayMode", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "selectionTarget", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "showLines", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "showRootLines", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "sort", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "sortDirection", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "sorted", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "toggleElementPosition", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "toggleMode", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], TreeComponent.prototype, "valueMember", null);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onCollapsing", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onDragging", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onExpanding", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onScrollBottomReached", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onScrollTopReached", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onSwipeleft", void 0);
        __decorate([
            core.Output()
        ], TreeComponent.prototype, "onSwiperight", void 0);
        TreeComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tree', selector: 'smart-tree, [smart-tree]'
            })
        ], TreeComponent);
        return TreeComponent;
    }(BaseElement));

    var TreeItemComponent = /** @class */ (function (_super) {
        __extends(TreeItemComponent, _super);
        function TreeItemComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TreeItemComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tree-item');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TreeItemComponent.prototype, "disabled", {
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
        Object.defineProperty(TreeItemComponent.prototype, "label", {
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
        Object.defineProperty(TreeItemComponent.prototype, "level", {
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
        Object.defineProperty(TreeItemComponent.prototype, "selected", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.selected : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selected = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeItemComponent.prototype, "separator", {
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
        Object.defineProperty(TreeItemComponent.prototype, "shortcut", {
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
        Object.defineProperty(TreeItemComponent.prototype, "value", {
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
        Object.defineProperty(TreeItemComponent.prototype, "readonly", {
            /** @description Disables user interaction with the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeItemComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TreeItemComponent.prototype.ngOnInit = function () {
        };
        TreeItemComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        TreeItemComponent.prototype.ngOnDestroy = function () { };
        TreeItemComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        TreeItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "level", null);
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "selected", null);
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "separator", null);
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "shortcut", null);
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], TreeItemComponent.prototype, "readonly", null);
        TreeItemComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tree-item', selector: 'smart-tree-item, [smart-tree-item]'
            })
        ], TreeItemComponent);
        return TreeItemComponent;
    }(BaseElement));

    var TreeItemsGroupComponent = /** @class */ (function (_super) {
        __extends(TreeItemsGroupComponent, _super);
        function TreeItemsGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TreeItemsGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-tree-items-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TreeItemsGroupComponent.prototype, "disabled", {
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
        Object.defineProperty(TreeItemsGroupComponent.prototype, "expanded", {
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
        Object.defineProperty(TreeItemsGroupComponent.prototype, "label", {
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
        Object.defineProperty(TreeItemsGroupComponent.prototype, "level", {
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
        Object.defineProperty(TreeItemsGroupComponent.prototype, "selected", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.selected : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selected = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeItemsGroupComponent.prototype, "separator", {
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
        Object.defineProperty(TreeItemsGroupComponent.prototype, "value", {
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
        Object.defineProperty(TreeItemsGroupComponent.prototype, "readonly", {
            /** @description Disables user interaction with the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeItemsGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TreeItemsGroupComponent.prototype.ngOnInit = function () {
        };
        TreeItemsGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        TreeItemsGroupComponent.prototype.ngOnDestroy = function () { };
        TreeItemsGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        TreeItemsGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "expanded", null);
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "level", null);
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "selected", null);
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "separator", null);
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], TreeItemsGroupComponent.prototype, "readonly", null);
        TreeItemsGroupComponent = __decorate([
            core.Directive({
                exportAs: 'smart-tree-items-group', selector: 'smart-tree-items-group, [smart-tree-items-group]'
            })
        ], TreeItemsGroupComponent);
        return TreeItemsGroupComponent;
    }(BaseElement));

    var TreeModule = /** @class */ (function () {
        function TreeModule() {
        }
        TreeModule = __decorate([
            core.NgModule({
                declarations: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent]
            })
        ], TreeModule);
        return TreeModule;
    }());

    exports.Smart = Smart;
    exports.TreeComponent = TreeComponent;
    exports.TreeItemComponent = TreeItemComponent;
    exports.TreeItemsGroupComponent = TreeItemsGroupComponent;
    exports.TreeModule = TreeModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-tree.umd.js.map
