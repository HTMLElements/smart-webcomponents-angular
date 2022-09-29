
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.cardview';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/cardview', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].cardview = {}), global.ng.core));
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

    var CardViewComponent = /** @class */ (function (_super) {
        __extends(CardViewComponent, _super);
        function CardViewComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a filter has been applied.
            *  @param event. The custom event. 	*/
            _this.onFilter = new core.EventEmitter();
            /** @description This event is triggered when sorting has been applied.
            *  @param event. The custom event. 	*/
            _this.onSort = new core.EventEmitter();
            /** @description This event is triggered when the window is opened.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onOpening = new core.EventEmitter();
            /** @description This event is triggered when the window is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when the user starts dragging the card.
            *  @param event. The custom event. 	*/
            _this.onDragStart = new core.EventEmitter();
            /** @description This event is triggered when the user is dragging the card.
            *  @param event. The custom event. 	*/
            _this.onDragging = new core.EventEmitter();
            /** @description This event is triggered when the user dragged the card.
            *  @param event. The custom event. 	*/
            _this.onDragEnd = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        CardViewComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-card-view');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(CardViewComponent.prototype, "addNewButton", {
            /** @description Toggles the button for adding new cards. */
            get: function () {
                return this.nativeElement ? this.nativeElement.addNewButton : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "allowDrag", {
            /** @description Allows reordering by dragging cards. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowDrag : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "animation", {
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
        Object.defineProperty(CardViewComponent.prototype, "cardHeight", {
            /** @description Describes the height for each card. */
            get: function () {
                return this.nativeElement ? this.nativeElement.cardHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.cardHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "cellOrientation", {
            /** @description Describes the orientation of the card cells. */
            get: function () {
                return this.nativeElement ? this.nativeElement.cellOrientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.cellOrientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "collapsible", {
            /** @description Allows collapsing the card content. */
            get: function () {
                return this.nativeElement ? this.nativeElement.collapsible : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.collapsible = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "columns", {
            /** @description Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "coverField", {
            /** @description Describes which data field to be set as cover. */
            get: function () {
                return this.nativeElement ? this.nativeElement.coverField : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.coverField = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "coverMode", {
            /** @description Describes the cover image fit property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.coverMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.coverMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "dataSource", {
            /** @description Determines the data source for the item that will be displayed inside the card. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "dataSourceSettings", {
            /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSourceSettings = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "editable", {
            /** @description Allows the edit option for the cards. */
            get: function () {
                return this.nativeElement ? this.nativeElement.editable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "headerPosition", {
            /** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "locale", {
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
        Object.defineProperty(CardViewComponent.prototype, "messages", {
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
        Object.defineProperty(CardViewComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(CardViewComponent.prototype, "theme", {
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
        Object.defineProperty(CardViewComponent.prototype, "scrolling", {
            /** @description Describes the scrolling behavior of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrolling : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrolling = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CardViewComponent.prototype, "titleField", {
            /** @description Describes which data field to be set as title. */
            get: function () {
                return this.nativeElement ? this.nativeElement.titleField : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.titleField = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds filtering
        * @param {string[]} filters. Filter information
        * @param {string} operator?. Logical operator between the filters of different fields
        */
        CardViewComponent.prototype.addFilter = function (filters, operator) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addFilter(filters, operator);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addFilter(filters, operator);
                });
            }
        };
        /** @description Adds a new record
        * @param {number | string} recordId?. The id of the record to add
        * @param {any} data?. The data of the record to add
        * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
        */
        CardViewComponent.prototype.addRecord = function (recordId, data, position) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addRecord(recordId, data, position);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addRecord(recordId, data, position);
                });
            }
        };
        /** @description Adds sorting
        * @param {[] | string} dataFields. The data field(s) to sort by
        * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
        */
        CardViewComponent.prototype.addSort = function (dataFields, orderBy) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addSort(dataFields, orderBy);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addSort(dataFields, orderBy);
                });
            }
        };
        /** @description Begins an edit operation
        * @param {number | string} recordId. The id of the record to edit
        */
        CardViewComponent.prototype.beginEdit = function (recordId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.beginEdit(recordId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.beginEdit(recordId);
                });
            }
        };
        /** @description Ends the current edit operation and discards changes
        */
        CardViewComponent.prototype.cancelEdit = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.cancelEdit();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.cancelEdit();
                });
            }
        };
        /** @description Closes any open header panel (drop down)
        */
        CardViewComponent.prototype.closePanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.closePanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.closePanel();
                });
            }
        };
        /** @description Ends the current edit operation and saves changes
        */
        CardViewComponent.prototype.endEdit = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.endEdit();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.endEdit();
                });
            }
        };
        /** @description Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card.
        * @param {number | string} recordId. The id of the record to scroll to
        * @returns {HTMLElement}
      */
        CardViewComponent.prototype.ensureVisible = function (recordId) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.ensureVisible(recordId);
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
        /** @description Opens the "Customize cards" header panel (drop down)
        */
        CardViewComponent.prototype.openCustomizePanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openCustomizePanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openCustomizePanel();
                });
            }
        };
        /** @description Opens the "Filter" header panel (drop down)
        */
        CardViewComponent.prototype.openFilterPanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openFilterPanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openFilterPanel();
                });
            }
        };
        /** @description Opens the "Sort" header panel (drop down)
        */
        CardViewComponent.prototype.openSortPanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openSortPanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openSortPanel();
                });
            }
        };
        /** @description Removes filtering
        */
        CardViewComponent.prototype.removeFilter = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeFilter();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeFilter();
                });
            }
        };
        /** @description Removes a record
        * @param {number | string} recordId. The id of the record to remove
        */
        CardViewComponent.prototype.removeRecord = function (recordId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeRecord(recordId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeRecord(recordId);
                });
            }
        };
        /** @description Removes sorting
        */
        CardViewComponent.prototype.removeSort = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeSort();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeSort();
                });
            }
        };
        /** @description Shows a column
        * @param {string} dataField. The data field of the column
        */
        CardViewComponent.prototype.showColumn = function (dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showColumn(dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showColumn(dataField);
                });
            }
        };
        Object.defineProperty(CardViewComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        CardViewComponent.prototype.ngOnInit = function () {
        };
        CardViewComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        CardViewComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        CardViewComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        CardViewComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
            that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
            that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
            that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
            that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
            that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        };
        /** @description Remove event listeners. */
        CardViewComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['filterHandler']) {
                that.nativeElement.onfilterHandler = null;
            }
            if (that.eventHandlers['sortHandler']) {
                that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
            }
            if (that.eventHandlers['closingHandler']) {
                that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
            }
            if (that.eventHandlers['dragStartHandler']) {
                that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            }
            if (that.eventHandlers['draggingHandler']) {
                that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
            }
            if (that.eventHandlers['dragEndHandler']) {
                that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            }
        };
        CardViewComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "addNewButton", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "allowDrag", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "cardHeight", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "cellOrientation", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "collapsible", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "coverField", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "coverMode", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "dataSourceSettings", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "editable", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "headerPosition", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "scrolling", null);
        __decorate([
            core.Input()
        ], CardViewComponent.prototype, "titleField", null);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onFilter", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onSort", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onDragging", void 0);
        __decorate([
            core.Output()
        ], CardViewComponent.prototype, "onDragEnd", void 0);
        CardViewComponent = __decorate([
            core.Directive({
                exportAs: 'smart-card-view', selector: 'smart-card-view, [smart-card-view]'
            })
        ], CardViewComponent);
        return CardViewComponent;
    }(BaseElement));

    var CardViewModule = /** @class */ (function () {
        function CardViewModule() {
        }
        CardViewModule = __decorate([
            core.NgModule({
                declarations: [CardViewComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [CardViewComponent]
            })
        ], CardViewModule);
        return CardViewModule;
    }());

    exports.CardViewComponent = CardViewComponent;
    exports.CardViewModule = CardViewModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-cardview.umd.js.map
