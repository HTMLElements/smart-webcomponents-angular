
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.multisplitbutton';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/multisplitbutton', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].multisplitbutton = {}), global.ng.core));
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

    var MultiSplitButtonComponent = /** @class */ (function (_super) {
        __extends(MultiSplitButtonComponent, _super);
        function MultiSplitButtonComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when action button is clicked.
            *  @param event. The custom event. 	*/
            _this.onButtonClick = new core.EventEmitter();
            /** @description This event is triggered when the selection is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
            *   addedItems - An array of List items that have been selected.
            *   disabled - A flag indicating whether or not the item that caused the change event is disabled.
            *   index - The index of the List item that triggered the event.
            *   label - The label of the List item that triggered the event.
            *   removedItems - An array of List items that have been unselected before the event was fired.
            *   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
            *   value - The value of the List item that triggered the event.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when button's dropDown list is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when button's dropDown list is closing.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when an item is clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
            *   disabled - Indicates whether the List item that was clicked is disabled or not.
            *   index - Indicates the index of the List item that was clicked.
            *   label - The label of the List item that was clicked.
            *   selected - Indicates whether the List item that was clicked is selected or not.
            *   value - The value of the List item that was clicked.
            */
            _this.onItemClick = new core.EventEmitter();
            /** @description This event is triggered when button's dropDown list is opened.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when button's dropDown list is opening.
            *  @param event. The custom event. 	*/
            _this.onOpening = new core.EventEmitter();
            /** @description This event is triggered when user scrolls to the end of the dropDown list.
            *  @param event. The custom event. 	*/
            _this.onScrollBottomReached = new core.EventEmitter();
            /** @description This event is triggered when user scrolls to the start of the dropDown list.
            *  @param event. The custom event. 	*/
            _this.onScrollTopReached = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        MultiSplitButtonComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-multi-split-button');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(MultiSplitButtonComponent.prototype, "animation", {
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
        Object.defineProperty(MultiSplitButtonComponent.prototype, "buttonsDataSource", {
            /** @description Determines a data source used to generate element's permanently visible buttons. */
            get: function () {
                return this.nativeElement ? this.nativeElement.buttonsDataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.buttonsDataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "dataSource", {
            /** @description Determines the data source of the multi split button's dropdown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "disabled", {
            /** @description Enables or disables jqxMultiSplitButton. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "displayLoadingIndicator", {
            /** @description Displays or hides the loading indicator */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "displayMember", {
            /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "dropDownAppendTo", {
            /** @description Sets the parent container of the button's dropDown list (the popup). The expected value is CSS Selector, ID or 'body'. Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "dropDownButtonPosition", {
            /** @description Determines position of the drop down button. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "dropDownOpenMode", {
            /** @description Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "dropDownOverlay", {
            /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "dropDownPosition", {
            /** @description Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "filterable", {
            /** @description Determines whether the Filtering is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "filterMode", {
            /** @description Determines the filtering for the drop down list mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "filterInputPlaceholder", {
            /** @description Determines the placeholder for the drop down list filter input field. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "grouped", {
            /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
            get: function () {
                return this.nativeElement ? this.nativeElement.grouped : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.grouped = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "groupMember", {
            /** @description Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object. */
            get: function () {
                return this.nativeElement ? this.nativeElement.groupMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.groupMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "incrementalSearchDelay", {
            /** @description Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing. */
            get: function () {
                return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "incrementalSearchMode", {
            /** @description Sets ot gets the mode of the incremental search mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "itemHeight", {
            /** @description Determines the height of the items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "itemTemplate", {
            /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "loadingIndicatorPlaceholder", {
            /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
            get: function () {
                return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "loadingIndicatorPosition", {
            /** @description The position of the loading indicator. */
            get: function () {
                return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "locale", {
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
        Object.defineProperty(MultiSplitButtonComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(MultiSplitButtonComponent.prototype, "messages", {
            /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.messages : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.messages = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "opened", {
            /** @description Determines whether the popup is opened or closed */
            get: function () {
                return this.nativeElement ? this.nativeElement.opened : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.opened = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "readonly", {
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
        Object.defineProperty(MultiSplitButtonComponent.prototype, "selectedIndexes", {
            /** @description Sets or gets selected indexes of buttons's dropDown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "selectedValues", {
            /** @description Sets or gets selected values of buttons's dropDown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedValues : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "selectionMode", {
            /** @description Determines how many items can be selected. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "sorted", {
            /** @description Determines whether the items in the dropDown are sorted alphabetically or not */
            get: function () {
                return this.nativeElement ? this.nativeElement.sorted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sorted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "theme", {
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
        Object.defineProperty(MultiSplitButtonComponent.prototype, "unfocusable", {
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
        Object.defineProperty(MultiSplitButtonComponent.prototype, "valueMember", {
            /** @description Determines the value member of an item. Stored as value in the item object. */
            get: function () {
                return this.nativeElement ? this.nativeElement.valueMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.valueMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSplitButtonComponent.prototype, "virtualized", {
            /** @description Determines weather or not Virtualization is used for the button's dropDownList. */
            get: function () {
                return this.nativeElement ? this.nativeElement.virtualized : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.virtualized = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Closes button's dropDown list.
        */
        MultiSplitButtonComponent.prototype.close = function () {
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
        /** @description Returns an item instance occured in the element's drop down.
        * @param {string} value. The value of an item from the drop down list or a button.
        * @returns {HTMLElement}
      */
        MultiSplitButtonComponent.prototype.getItem = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getItem(value);
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
        /** @description Returns an array with the items from the split button's dropDown list.
        * @returns {any[]}
      */
        MultiSplitButtonComponent.prototype.items = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.items();
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
        /** @description Inserts a new item at a specified position in the drop down list.
        * @param {number} position. The position where the item must be inserted.
        * @param {any} value. The value of the new item.
        */
        MultiSplitButtonComponent.prototype.insert = function (position, value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(position, value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insert(position, value);
                });
            }
        };
        /** @description Opens the splitButton's dropDown list.
        */
        MultiSplitButtonComponent.prototype.open = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.open();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.open();
                });
            }
        };
        /** @description Removes an item at a specified position in the drop down list.
        * @param {number} position. The position of the removed item.
        */
        MultiSplitButtonComponent.prototype.removeAt = function (position) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAt(position);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeAt(position);
                });
            }
        };
        /** @description Updates an item from the dropDown list.
        * @param {number} position. The position where the item must be updated.
        * @param {any} value. The value of the updated item.
        */
        MultiSplitButtonComponent.prototype.update = function (position, value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.update(position, value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.update(position, value);
                });
            }
        };
        Object.defineProperty(MultiSplitButtonComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        MultiSplitButtonComponent.prototype.ngOnInit = function () {
        };
        MultiSplitButtonComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        MultiSplitButtonComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        MultiSplitButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        MultiSplitButtonComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['buttonClickHandler'] = function (event) { that.onButtonClick.emit(event); };
            that.nativeElement.addEventListener('buttonClick', that.eventHandlers['buttonClickHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
            that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
            that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
            that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        };
        /** @description Remove event listeners. */
        MultiSplitButtonComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['buttonClickHandler']) {
                that.nativeElement.removeEventListener('buttonClick', that.eventHandlers['buttonClickHandler']);
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
            if (that.eventHandlers['itemClickHandler']) {
                that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
            if (that.eventHandlers['scrollBottomReachedHandler']) {
                that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            }
            if (that.eventHandlers['scrollTopReachedHandler']) {
                that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
            }
        };
        MultiSplitButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "buttonsDataSource", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "displayLoadingIndicator", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "displayMember", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "dropDownAppendTo", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "dropDownButtonPosition", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "dropDownOpenMode", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "dropDownOverlay", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "filterable", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "filterMode", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "filterInputPlaceholder", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "grouped", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "groupMember", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "incrementalSearchDelay", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "incrementalSearchMode", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "itemHeight", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "loadingIndicatorPlaceholder", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "loadingIndicatorPosition", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "selectedIndexes", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "selectedValues", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "sorted", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "valueMember", null);
        __decorate([
            core.Input()
        ], MultiSplitButtonComponent.prototype, "virtualized", null);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onButtonClick", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onScrollBottomReached", void 0);
        __decorate([
            core.Output()
        ], MultiSplitButtonComponent.prototype, "onScrollTopReached", void 0);
        MultiSplitButtonComponent = __decorate([
            core.Directive({
                exportAs: 'smart-multi-split-button', selector: 'smart-multi-split-button, [smart-multi-split-button]'
            })
        ], MultiSplitButtonComponent);
        return MultiSplitButtonComponent;
    }(BaseElement));

    var ListItemComponent = /** @class */ (function (_super) {
        __extends(ListItemComponent, _super);
        function ListItemComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        ListItemComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-list-item');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(ListItemComponent.prototype, "alternationIndex", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.alternationIndex = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "color", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.color : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.color = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "displayMode", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "grouped", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.grouped : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.grouped = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "selected", {
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
        Object.defineProperty(ListItemComponent.prototype, "value", {
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
        Object.defineProperty(ListItemComponent.prototype, "label", {
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
        Object.defineProperty(ListItemComponent.prototype, "details", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.details : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.details = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "group", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.group : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.group = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "hidden", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.hidden : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hidden = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "readonly", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        ListItemComponent.prototype.ngOnInit = function () {
        };
        ListItemComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        ListItemComponent.prototype.ngOnDestroy = function () { };
        ListItemComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        ListItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "alternationIndex", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "color", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "displayMode", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "grouped", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "selected", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "details", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "group", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "hidden", null);
        __decorate([
            core.Input()
        ], ListItemComponent.prototype, "readonly", null);
        ListItemComponent = __decorate([
            core.Directive({
                exportAs: 'smart-list-item', selector: 'smart-list-item, [smart-list-item]'
            })
        ], ListItemComponent);
        return ListItemComponent;
    }(BaseElement));

    var ListItemsGroupComponent = /** @class */ (function (_super) {
        __extends(ListItemsGroupComponent, _super);
        function ListItemsGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        ListItemsGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-list-items-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(ListItemsGroupComponent.prototype, "label", {
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
        Object.defineProperty(ListItemsGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        ListItemsGroupComponent.prototype.ngOnInit = function () {
        };
        ListItemsGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        };
        ListItemsGroupComponent.prototype.ngOnDestroy = function () { };
        ListItemsGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        ListItemsGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ListItemsGroupComponent.prototype, "label", null);
        ListItemsGroupComponent = __decorate([
            core.Directive({
                exportAs: 'smart-list-items-group', selector: 'smart-list-items-group, [smart-list-items-group]'
            })
        ], ListItemsGroupComponent);
        return ListItemsGroupComponent;
    }(BaseElement));

    var MultiSplitButtonModule = /** @class */ (function () {
        function MultiSplitButtonModule() {
        }
        MultiSplitButtonModule = __decorate([
            core.NgModule({
                declarations: [MultiSplitButtonComponent, ListItemComponent, ListItemsGroupComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [MultiSplitButtonComponent, ListItemComponent, ListItemsGroupComponent]
            })
        ], MultiSplitButtonModule);
        return MultiSplitButtonModule;
    }());

    exports.ListItemComponent = ListItemComponent;
    exports.ListItemsGroupComponent = ListItemsGroupComponent;
    exports.MultiSplitButtonComponent = MultiSplitButtonComponent;
    exports.MultiSplitButtonModule = MultiSplitButtonModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-multisplitbutton.umd.js.map
