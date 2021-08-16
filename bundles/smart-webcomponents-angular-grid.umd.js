
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.grid';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/grid', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].grid = {}), global.ng.core));
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

    var GridComponent = /** @class */ (function (_super) {
        __extends(GridComponent, _super);
        function GridComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered, when the edit begins.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
            *   row - The edited row.
            *   column - The edited column.
            *   cell - The edited cell.
            */
            _this.onBeginEdit = new core.EventEmitter();
            /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
            *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
            */
            _this.onBatchChange = new core.EventEmitter();
            /** @description This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
            *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
            */
            _this.onBatchCancel = new core.EventEmitter();
            /** @description This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
            *   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
            *   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered, when the user clicks on the header of a column.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
            *   column - The clicked column.
            *   dataField - The column's data field.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            */
            _this.onColumnClick = new core.EventEmitter();
            /** @description This event is triggered, when the user double clicks on the header of a column.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
            *   column - The double-clicked column.
            *   dataField - The column's data field.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            */
            _this.onColumnDoubleClick = new core.EventEmitter();
            /** @description This event is triggered, when the user resized a column.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
            *   column - The resized column.
            *   dataField - The column's data field.
            *   oldWidth - The old width of the column.
            *   width - The new width of the column.
            */
            _this.onColumnResize = new core.EventEmitter();
            /** @description This event is triggered, when the user starts a column drag.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
            *   column - The column.
            *   dataField - The column's data field.
            *   index - The column's index
            *   originalEvent - The origianl Event object.
            */
            _this.onColumnDragStart = new core.EventEmitter();
            /** @description This event is triggered, when the user drags a column.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
            *   column - The column.
            *   dataField - The column's data field.
            *   index - The column's index
            *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
            *   originalEvent - The origianl Event object.
            */
            _this.onColumnDragging = new core.EventEmitter();
            /** @description This event is triggered, when the user drops a column.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
            *   column - The column.
            *   dataField - The column's data field.
            *   index - The column's index
            *   newIndex - The column's new index
            *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
            *   originalEvent - The origianl Event object.
            */
            _this.onColumnDragEnd = new core.EventEmitter();
            /** @description This event is triggered, when the user reorders a column.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
            *   column - The column.
            *   dataField - The column's data field.
            *   index - The column's index
            *   newIndex - The column's new index
            *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
            *   originalEvent - The origianl Event object.
            */
            _this.onColumnReorder = new core.EventEmitter();
            /** @description This event is triggered, when the user starts a row drag.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
            *   row - The row.
            *   id - The row's id
            *   index - The row's index
            *   originalEvent - The origianl Event object.
            */
            _this.onRowDragStart = new core.EventEmitter();
            /** @description This event is triggered, when the user drags a row.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
            *   row - The row.
            *   id - The row's id
            *   index - The row's index
            *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
            *   originalEvent - The origianl Event object.
            */
            _this.onRowDragging = new core.EventEmitter();
            /** @description This event is triggered, when the user drags a row.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
            *   row - The row.
            *   id - The row's id
            *   index - The row's index
            *   newIndex - The row's new index
            *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
            *   originalEvent - The origianl Event object.
            */
            _this.onRowDragEnd = new core.EventEmitter();
            /** @description This event is triggered, when the user reorders a row.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
            *   row - The row.
            *   id - The row's id
            *   index - The row's index
            *   newIndex - The row's new index
            *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
            *   originalEvent - The origianl Event object.
            */
            _this.onRowReorder = new core.EventEmitter();
            /** @description This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
            *   row - The expanded row.
            *   id - The row's id
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            */
            _this.onRowExpand = new core.EventEmitter();
            /** @description This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
            *   row - The collapsed row.
            *   id - The row's id
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            */
            _this.onRowCollapse = new core.EventEmitter();
            /** @description This event is triggered, when the user clicks on a row of the grid.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
            *   row - The clicked row.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            *   id - Gets the row id.
            *   isRightClick - Gets whether the pointing device's right button is clicked.
            *   pageX - Gets the click's X position.
            *   pageY - Gets the click's Y position.
            */
            _this.onRowClick = new core.EventEmitter();
            /** @description This event is triggered, when the user double clicks on a row of the grid.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
            *   row - The double-clicked row.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            *   id - Gets the row id.
            *   isRightClick - Gets whether the pointing device's right button is clicked.
            *   pageX - Gets the click's X position.
            *   pageY - Gets the click's Y position.
            */
            _this.onRowDoubleClick = new core.EventEmitter();
            /** @description This event is triggered, when the user resized a row.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
            *   row - The resized row.
            *   id - Gets the row id.
            *   oldHeight - The old height of the row.
            *   height - The new height of the row.
            */
            _this.onRowResize = new core.EventEmitter();
            /** @description This event is triggered, when the user clicks on a cell of the grid.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
            *   cell - The clicked cell.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            *   id - Gets the row id.
            *   dataField - Gets the column dataField.
            *   isRightClick - Gets whether the pointing device's right button is clicked.
            *   pageX - Gets the click's X position.
            *   pageY - Gets the click's Y position.
            */
            _this.onCellClick = new core.EventEmitter();
            /** @description This event is triggered, when the user double clicks on a cell of the grid.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
            *   cell - The double-clicked cell.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            *   id - Gets the row id.
            *   dataField - Gets the column dataField.
            *   isRightClick - Gets whether the pointing device's right button is clicked.
            *   pageX - Gets the click's X position.
            *   pageY - Gets the click's Y position.
            */
            _this.onCellDoubleClick = new core.EventEmitter();
            /** @description This event is triggered, when the edit ends.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
            *   row - The edited row.
            *   column - The edited column.
            *   cell - The edited cell.
            */
            _this.onEndEdit = new core.EventEmitter();
            /** @description This event is triggered, when a filter is added or removed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
            *   columns - Array of columns.
            *   data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
            */
            _this.onFilter = new core.EventEmitter();
            /** @description This event is triggered, when the grid is resized.
            *  @param event. The custom event. 	*/
            _this.onResize = new core.EventEmitter();
            /** @description This event is triggered when the user touches and holds on the row for at least 300ms.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
            *   row - The tapped row.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            */
            _this.onRowTap = new core.EventEmitter();
            /** @description This event is triggered when the user touches and holds on the cell for at least 300ms.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
            *   cell - The tapped row.
            *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
            */
            _this.onCellTap = new core.EventEmitter();
            /** @description This event is triggered, when the user changes the pages.
            *  @param event. The custom event. 	*/
            _this.onPage = new core.EventEmitter();
            /** @description This event is triggered, when a sorting column is added or removed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
            *   columns - Array of columns.
            *   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
            */
            _this.onSort = new core.EventEmitter();
            /** @description This event is triggered, when the user reaches the bottom of the grid.
            *  @param event. The custom event. 	*/
            _this.onScrollBottomReached = new core.EventEmitter();
            /** @description This event is triggered, when the user reaches the top of the grid.
            *  @param event. The custom event. 	*/
            _this.onScrollTopReached = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        GridComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-grid');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(GridComponent.prototype, "appearance", {
            /** @description An object containing settings related to the grid's appearance. */
            get: function () {
                return this.nativeElement ? this.nativeElement.appearance : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.appearance = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "behavior", {
            /** @description An object containing settings related to the grid's behavior. */
            get: function () {
                return this.nativeElement ? this.nativeElement.behavior : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.behavior = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "layout", {
            /** @description An object containing settings related to the grid's layout. */
            get: function () {
                return this.nativeElement ? this.nativeElement.layout : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.layout = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "locale", {
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
        Object.defineProperty(GridComponent.prototype, "clipboard", {
            /** @description The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
            get: function () {
                return this.nativeElement ? this.nativeElement.clipboard : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.clipboard = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "columns", {
            /** @description The columns property is used to describe all columns displayed in the grid.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "columnMenu", {
            /** @description Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnMenu : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnMenu = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "columnGroups", {
            /** @description Describes the settings of the column groups. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnGroups : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "conditionalFormatting", {
            /** @description Sets or gets details about conditional formatting to be applied to the Grid's cells. */
            get: function () {
                return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "charting", {
            /** @description Sets the Grid Charting Data Visualization. */
            get: function () {
                return this.nativeElement ? this.nativeElement.charting : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.charting = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "checkBoxes", {
            /** @description Sets the TreeGrid checkboxes. */
            get: function () {
                return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checkBoxes = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "dataExport", {
            /** @description Sets the Grid Data Export options. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataExport : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataExport = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "dataSource", {
            /** @description Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "dataSourceSettings", {
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
        Object.defineProperty(GridComponent.prototype, "editing", {
            /** @description Describes the grid's editing settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.editing : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editing = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "filtering", {
            /** @description Describes the grid's filtering settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filtering : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filtering = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "grouping", {
            /** @description Describes the grid's grouping settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.grouping : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.grouping = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "messages", {
            /** @description Sets the messages values. */
            get: function () {
                return this.nativeElement ? this.nativeElement.messages : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.messages = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onCellValue", {
            /** @description Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onCellValue : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onCellValue = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onCellUpdate", {
            /** @description Callback function() called when the grid has been rendered. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onCellUpdate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onCellRender", {
            /** @description Describes the paging settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onCellRender : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onBeforeInit", {
            /** @description Describes the pager settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onBeforeInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onInit", {
            /** @description Sets the row details. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onAfterInit", {
            /** @description Sets the scroll mode settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onAfterInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onChartInit", {
            /** @description Describes the column header settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onChartInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onChartInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRender", {
            /** @description Describes the summary row settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRender : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRender = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onKey", {
            /** @description Describes the settings for the group header. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onKey : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onKey = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRowInit", {
            /** @description Describes the header settings of the grid. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRowInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRowInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRowDetailInit", {
            /** @description Describes the footer settings of the grid. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRowDetailInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRowDetailUpdated", {
            /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRowDetailUpdated = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRowInserted", {
            /** @description The rows property is used to describe all rows displayed in the grid. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRowInserted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRowRemoved", {
            /** @description Describes the selection settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRowRemoved = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRowUpdate", {
            /** @description Describes sorting settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRowUpdate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onRowUpdated", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onRowUpdated = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onColumnInit", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onColumnInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onColumnInserted", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onColumnInserted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onColumnRemoved", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onColumnRemoved = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onColumnUpdated", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onColumnUpdated = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "onCommand", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.onCommand : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onCommand = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "paging", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.paging : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.paging = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "pager", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.pager : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pager = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "rowDetail", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.rowDetail : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rowDetail = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "scrolling", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrolling : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrolling = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "columnHeader", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnHeader : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnHeader = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "summaryRow", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.summaryRow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.summaryRow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "groupHeader", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.groupHeader : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.groupHeader = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "header", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.header : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.header = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "footer", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.footer : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.footer = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "rightToLeft", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "rows", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.rows : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rows = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "selection", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.selection : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selection = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "sorting", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.sorting : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sorting = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
        * @param {any} data. row data matching the data source
        * @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
        * @param {any} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
        */
        GridComponent.prototype.addRow = function (data, insertAtBottom, callback) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addRow(data, insertAtBottom, callback);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addRow(data, insertAtBottom, callback);
                });
            }
        };
        /** @description Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
        * @param {string} position?. 'near' or 'far'
        * @returns {boolean}
      */
        GridComponent.prototype.addNewRow = function (position) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.addNewRow(position);
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
        /** @description Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
        * @param {number} count. The count of unbound rows.
        * @param {string} position?. 'near' or 'far'
        * @returns {boolean}
      */
        GridComponent.prototype.addUnboundRow = function (count, position) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.addUnboundRow(count, position);
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
        /** @description Adds a filter to a column. This method will apply a filter to the Grid data.
        * @param {string} dataField. column bound data field
        * @param {string} filter. Filter expression like: 'startsWith B'
        * @param {boolean} refreshFilters?.
        */
        GridComponent.prototype.addFilter = function (dataField, filter, refreshFilters) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addFilter(dataField, filter, refreshFilters);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addFilter(dataField, filter, refreshFilters);
                });
            }
        };
        /** @description Auto-sizes grid rows. This method will update the height of all Grid rows.
        */
        GridComponent.prototype.autoSizeRows = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.autoSizeRows();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.autoSizeRows();
                });
            }
        };
        /** @description Auto-sizes grid columns. This method will update the width of all Grid columns.
        */
        GridComponent.prototype.autoSizeColumns = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.autoSizeColumns();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.autoSizeColumns();
                });
            }
        };
        /** @description This method returns true, if all rows in the Grid are selected.
        * @returns {boolean}
      */
        GridComponent.prototype.areAllRowsSelected = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.areAllRowsSelected();
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
        /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
        */
        GridComponent.prototype.beginUpdate = function () {
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
        /** @description Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField?. column bound data field
        */
        GridComponent.prototype.beginEdit = function (rowId, dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.beginEdit(rowId, dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.beginEdit(rowId, dataField);
                });
            }
        };
        /** @description Clears all filters. Refreshes the view and updates all filter input components.
        */
        GridComponent.prototype.clearFilter = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearFilter();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearFilter();
                });
            }
        };
        /** @description Clears the selection that user have made. All row, cell and column selection highlights will be removed.
        */
        GridComponent.prototype.clearSelection = function () {
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
        /** @description Cancels the editing. This method closes the cell editor and cancels the changes.
        */
        GridComponent.prototype.cancelEdit = function () {
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
        /** @description Checks a TreeGrid row. This method updates the row's check-box.
        * @param {string | number} rowId. row bound id
        */
        GridComponent.prototype.checkRow = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.checkRow(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.checkRow(rowId);
                });
            }
        };
        /** @description Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
        */
        GridComponent.prototype.checkAllRows = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.checkAllRows();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.checkAllRows();
                });
            }
        };
        /** @description Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
        */
        GridComponent.prototype.clearRows = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearRows();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearRows();
                });
            }
        };
        /** @description Closes the column drop-down menu.
        */
        GridComponent.prototype.closeMenu = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.closeMenu();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.closeMenu();
                });
            }
        };
        /** @description Collapses a TreeGrid or Grouping row.
        * @param {string | number} rowId. row bound id
        */
        GridComponent.prototype.collapseRow = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseRow(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseRow(rowId);
                });
            }
        };
        /** @description Collapses all TreeGrid or Grouping rows.
        */
        GridComponent.prototype.collapseAllRows = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseAllRows();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseAllRows();
                });
            }
        };
        /** @description Creates a Chart, when charting is enabled.
        * @param {string} type. Chart's type
        * @param {any} dataSource?. Chart's data source
        */
        GridComponent.prototype.createChart = function (type, dataSource) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.createChart(type, dataSource);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.createChart(type, dataSource);
                });
            }
        };
        /** @description Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
        * @param {string | number} rowId. row bound id
        * @param {any} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
        */
        GridComponent.prototype.deleteRow = function (rowId, callback) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.deleteRow(rowId, callback);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.deleteRow(rowId, callback);
                });
            }
        };
        /** @description Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField?. column bound data field
        * @returns {boolean}
      */
        GridComponent.prototype.ensureVisible = function (rowId, dataField) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.ensureVisible(rowId, dataField);
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
        /** @description Ends the editing. This method confirms all changes and closes the opened cell editor(s).
        */
        GridComponent.prototype.endEdit = function () {
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
        /** @description Ends the update operation. This method will resume the rendering and will refresh the Grid.
        * @param {boolean} refresh?. The flag that control the calls of the refresh method.
        */
        GridComponent.prototype.endUpdate = function (refresh) {
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
        /** @description Expands a TreeGrid or Grouping row.
        * @param {string | number} rowId. row bound id
        */
        GridComponent.prototype.expandRow = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandRow(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandRow(rowId);
                });
            }
        };
        /** @description Expands all TreeGrid or Grouping rows.
        */
        GridComponent.prototype.expandAllRows = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandAllRows();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandAllRows();
                });
            }
        };
        /** @description Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
        * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
        */
        GridComponent.prototype.exportData = function (Dataformat) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.exportData(Dataformat);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.exportData(Dataformat);
                });
            }
        };
        /** @description Navigates to a page, when paging is enabled.
        * @param {number} index. page index
        */
        GridComponent.prototype.goToPage = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.goToPage(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.goToPage(index);
                });
            }
        };
        /** @description Navigates to the next page, when grid paging is enabled.
        */
        GridComponent.prototype.nextPage = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.nextPage();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.nextPage();
                });
            }
        };
        /** @description Navigates to the prev page, when grid paging is enabled.
        */
        GridComponent.prototype.prevPage = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.prevPage();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.prevPage();
                });
            }
        };
        /** @description Navigates to the first page, when grid paging is enabled.
        */
        GridComponent.prototype.firstPage = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.firstPage();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.firstPage();
                });
            }
        };
        /** @description Navigates to the last page, when grid paging is enabled.
        */
        GridComponent.prototype.lastPage = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.lastPage();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.lastPage();
                });
            }
        };
        /** @description Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position.
        * @returns {number}
      */
        GridComponent.prototype.getVerticalScrollMax = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getVerticalScrollMax();
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
        /** @description Gets the position of the vertical scrollbar.
        * @returns {number}
      */
        GridComponent.prototype.getVerticalScrollValue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getVerticalScrollValue();
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
        /** @description Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position.
        * @returns {number}
      */
        GridComponent.prototype.getHorizontalScrollMax = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getHorizontalScrollMax();
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
        /** @description Gets the position of the horizontal scrollbar.
        * @returns {number}
      */
        GridComponent.prototype.getHorizontalScrollValue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getHorizontalScrollValue();
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
        /** @description Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'.
        * @returns {any}
      */
        GridComponent.prototype.getColumns = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getColumns();
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
        /** @description Gets the groups array.
        * @returns {any[]}
      */
        GridComponent.prototype.getGroups = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getGroups();
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
        /** @description Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value.
        * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
      */
        GridComponent.prototype.getSortedColumns = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getSortedColumns();
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
        /** @description Gets the selection.
        * @returns {any}
      */
        GridComponent.prototype.getSelection = function () {
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
        /** @description Gets the selected row ids.
        * @returns {any[]}
      */
        GridComponent.prototype.getSelectedRows = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getSelectedRows();
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
        /** @description Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value.
        * @returns {any[]}
      */
        GridComponent.prototype.getSelectedCells = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getSelectedCells();
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
        /** @description Gets an array of columns with applied filters.
        * @returns {any}
      */
        GridComponent.prototype.getFilteredColumns = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getFilteredColumns();
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
        /** @description Gets an array of rows, which are visible and match the applied filter.
        * @returns {any}
      */
        GridComponent.prototype.getVisibleRows = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getVisibleRows();
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
        /** @description Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
        * @returns {any}
      */
        GridComponent.prototype.getViewRows = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getViewRows();
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
        /** @description Gets a JSON object with the following fields: 'sort', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'.
        * @returns {any}
      */
        GridComponent.prototype.getState = function () {
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
        /** @description Gets the changes from the batch edit.
        * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
      */
        GridComponent.prototype.getBatchEditChanges = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getBatchEditChanges();
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
        /** @description Gets a value of a cell.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField. column bound data field
        * @returns {any}
      */
        GridComponent.prototype.getCellValue = function (rowId, dataField) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getCellValue(rowId, dataField);
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
        /** @description Gets a value of a column.
        * @param {string} dataField. column bound data field
        * @param {string} propertyName. The property name.
        * @returns {any}
      */
        GridComponent.prototype.getColumnProperty = function (dataField, propertyName) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getColumnProperty(dataField, propertyName);
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
        /** @description Gets a value of a row.
        * @param {string | number} rowId. row bound id
        * @param {string} propertyName. The property name.
        * @returns {any}
      */
        GridComponent.prototype.getRowProperty = function (rowId, propertyName) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getRowProperty(rowId, propertyName);
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
        /** @description Gets the Data source data associated to the row.
        * @param {string | number} rowId. row bound id
        * @returns {any}
      */
        GridComponent.prototype.getRowData = function (rowId) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getRowData(rowId);
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
        /** @description Gets the Row's id.
        * @param {number} rowIndex. row index
        * @returns {any}
      */
        GridComponent.prototype.getRowId = function (rowIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getRowId(rowIndex);
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
        /** @description Gets whether a column's drop-down menu is opened.
        * @returns {boolean}
      */
        GridComponent.prototype.hasMenu = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.hasMenu();
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
        /** @description This method returns true, if any rows in the Grid are selected.
        * @returns {boolean}
      */
        GridComponent.prototype.hasSelectedRows = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.hasSelectedRows();
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
        /** @description Hides the Details of a Row, when row details are enabled.
        * @param {string | number} rowId. row bound id
        */
        GridComponent.prototype.hideDetail = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideDetail(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideDetail(rowId);
                });
            }
        };
        /** @description Highlights a column. Highlights a Grid column.
        * @param {string} dataField. column bound data field
        */
        GridComponent.prototype.highlightColumn = function (dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.highlightColumn(dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.highlightColumn(dataField);
                });
            }
        };
        /** @description Highlights a cell. Calling the method a second time toggle the highlight state.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField. column bound data field
        * @param {string} className?. CSS Class Name
        */
        GridComponent.prototype.highlightCell = function (rowId, dataField, className) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.highlightCell(rowId, dataField, className);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.highlightCell(rowId, dataField, className);
                });
            }
        };
        /** @description Highlights a row. Calling the method a second time toggle the highlight state.
        * @param {string | number} rowId. row bound id
        * @param {string} className?. CSS Class Name
        */
        GridComponent.prototype.highlightRow = function (rowId, className) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.highlightRow(rowId, className);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.highlightRow(rowId, className);
                });
            }
        };
        /** @description Opens a column drop-down menu.
        * @param {string} dataField. column bound data field
        */
        GridComponent.prototype.openMenu = function (dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openMenu(dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openMenu(dataField);
                });
            }
        };
        /** @description Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property.
        */
        GridComponent.prototype.print = function () {
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
        /** @description Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
        */
        GridComponent.prototype.refresh = function () {
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
        /** @description Refreshes the grid with the current property values. This method will refresh the Grid layout.
        */
        GridComponent.prototype.refreshView = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.refreshView();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.refreshView();
                });
            }
        };
        /** @description Refreshes the grid cells in view. The method is useful for live-updates of cell values.
        * @param {string} dataField. column bound data field
        * @param {boolean} refreshFilters?.
        */
        GridComponent.prototype.removeFilter = function (dataField, refreshFilters) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeFilter(dataField, refreshFilters);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeFilter(dataField, refreshFilters);
                });
            }
        };
        /** @description Removes a column filter.
        */
        GridComponent.prototype.revertBatchEdit = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.revertBatchEdit();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.revertBatchEdit();
                });
            }
        };
        /** @description Reverts the batch edit changes. This method cancels all changes made by the end-user.
        * @param {string | number} dataField. The data field or column index of the first grid column.
        * @param {string | number} referenceDataField. The data field or column index of the second grid column.
        * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
        */
        GridComponent.prototype.reorderColumns = function (dataField, referenceDataField, insertAfter) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
                });
            }
        };
        /** @description Reorders two DataGrid columns.
        * @param {string | number} dataField. The data field or column index of the first grid column.
        * @param {string | number} referenceDataField. The data field or column index of the second grid column.
        */
        GridComponent.prototype.swapColumns = function (dataField, referenceDataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.swapColumns(dataField, referenceDataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.swapColumns(dataField, referenceDataField);
                });
            }
        };
        /** @description Swaps two DataGrid columns.
        */
        GridComponent.prototype.saveBatchEdit = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveBatchEdit();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveBatchEdit();
                });
            }
        };
        /** @description Saves the batch edit changes. This method confirms the editing changes made by the end-user.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField?. column bound data field
        */
        GridComponent.prototype.select = function (rowId, dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.select(rowId, dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.select(rowId, dataField);
                });
            }
        };
        /** @description Selects a row, cell or column.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField. column bound data field
        * @param {string | number} endRowId. row bound id
        * @param {string} endDataField. column bound data field
        */
        GridComponent.prototype.selectRange = function (rowId, dataField, endRowId, endDataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
                });
            }
        };
        /** @description Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid.
        * @param {string | number} rowId. row bound id
        * @param {string | number} endRowId. row bound id
        */
        GridComponent.prototype.selectRowsRange = function (rowId, endRowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectRowsRange(rowId, endRowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectRowsRange(rowId, endRowId);
                });
            }
        };
        /** @description Selects a range of rows.
        * @param {(string | number)[]} rowId. Array of row ids
        */
        GridComponent.prototype.selectRows = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectRows(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectRows(rowId);
                });
            }
        };
        /** @description Selects multiple rows by their ids.
        */
        GridComponent.prototype.selectAllRows = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectAllRows();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectAllRows();
                });
            }
        };
        /** @description Selects all rows.
        * @param {number[]} rowIndex. Array of row indexes
        */
        GridComponent.prototype.selectRowsByIndex = function (rowIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectRowsByIndex(rowIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectRowsByIndex(rowIndex);
                });
            }
        };
        /** @description Selects multiple rows by their index.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField. column bound data field
        * @param {string | number | Date | boolean} value. New Cell value.
        */
        GridComponent.prototype.setCellValue = function (rowId, dataField, value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setCellValue(rowId, dataField, value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setCellValue(rowId, dataField, value);
                });
            }
        };
        /** @description Sets a new value to a cell.
        * @param {string} dataField. column bound data field
        * @param {string} propertyName. The column property's name.
        * @param {any} value. The new property value.
        */
        GridComponent.prototype.setColumnProperty = function (dataField, propertyName, value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setColumnProperty(dataField, propertyName, value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setColumnProperty(dataField, propertyName, value);
                });
            }
        };
        /** @description Sets a property to a column.
        * @param {string | number} rowId. row bound id
        * @param {string} propertyName. The row property's name.
        * @param {any} value. The new property value.
        */
        GridComponent.prototype.setRowProperty = function (rowId, propertyName, value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setRowProperty(rowId, propertyName, value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setRowProperty(rowId, propertyName, value);
                });
            }
        };
        /** @description Sets a property to a row.
        * @param {number} value. The new scroll position
        */
        GridComponent.prototype.setVerticalScrollValue = function (value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setVerticalScrollValue(value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setVerticalScrollValue(value);
                });
            }
        };
        /** @description Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax.
        * @param {number} value. The new scroll position
        */
        GridComponent.prototype.setHorizontalScrollValue = function (value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setHorizontalScrollValue(value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setHorizontalScrollValue(value);
                });
            }
        };
        /** @description Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax.
        * @param {string | number} rowId. row bound id
        */
        GridComponent.prototype.showDetail = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.showDetail(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.showDetail(rowId);
                });
            }
        };
        /** @description Shows the Details of a Row, when row details are enabled.
        * @param {string | number} rowId. row bound id
        * @param {any} data. row data matching the data source
        * @param {any} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
        */
        GridComponent.prototype.updateRow = function (rowId, data, callback) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateRow(rowId, data, callback);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateRow(rowId, data, callback);
                });
            }
        };
        /** @description Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField?. column bound data field
        */
        GridComponent.prototype.unselect = function (rowId, dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.unselect(rowId, dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.unselect(rowId, dataField);
                });
            }
        };
        /** @description Unselects a row, cell or column.
        * @param {string | number} rowId. row bound id
        */
        GridComponent.prototype.uncheckRow = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.uncheckRow(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.uncheckRow(rowId);
                });
            }
        };
        /** @description Unchecks a TreeGrid row. Sets its check-box to false.
        */
        GridComponent.prototype.uncheckAllRows = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.uncheckAllRows();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.uncheckAllRows();
                });
            }
        };
        /** @description Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
        * @param {string | number} rowId. row bound id
        */
        GridComponent.prototype.toggleRow = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggleRow(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggleRow(rowId);
                });
            }
        };
        Object.defineProperty(GridComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        GridComponent.prototype.ngOnInit = function () {
        };
        GridComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        GridComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        GridComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        GridComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['beginEditHandler'] = function (event) { that.onBeginEdit.emit(event); };
            that.nativeElement.addEventListener('beginEdit', that.eventHandlers['beginEditHandler']);
            that.eventHandlers['batchChangeHandler'] = function (event) { that.onBatchChange.emit(event); };
            that.nativeElement.addEventListener('batchChange', that.eventHandlers['batchChangeHandler']);
            that.eventHandlers['batchCancelHandler'] = function (event) { that.onBatchCancel.emit(event); };
            that.nativeElement.addEventListener('batchCancel', that.eventHandlers['batchCancelHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
            that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
            that.eventHandlers['columnDoubleClickHandler'] = function (event) { that.onColumnDoubleClick.emit(event); };
            that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
            that.eventHandlers['columnResizeHandler'] = function (event) { that.onColumnResize.emit(event); };
            that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
            that.eventHandlers['columnDragStartHandler'] = function (event) { that.onColumnDragStart.emit(event); };
            that.nativeElement.addEventListener('columnDragStart', that.eventHandlers['columnDragStartHandler']);
            that.eventHandlers['columnDraggingHandler'] = function (event) { that.onColumnDragging.emit(event); };
            that.nativeElement.addEventListener('columnDragging', that.eventHandlers['columnDraggingHandler']);
            that.eventHandlers['columnDragEndHandler'] = function (event) { that.onColumnDragEnd.emit(event); };
            that.nativeElement.addEventListener('columnDragEnd', that.eventHandlers['columnDragEndHandler']);
            that.eventHandlers['columnReorderHandler'] = function (event) { that.onColumnReorder.emit(event); };
            that.nativeElement.addEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
            that.eventHandlers['rowDragStartHandler'] = function (event) { that.onRowDragStart.emit(event); };
            that.nativeElement.addEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
            that.eventHandlers['rowDraggingHandler'] = function (event) { that.onRowDragging.emit(event); };
            that.nativeElement.addEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
            that.eventHandlers['rowDragEndHandler'] = function (event) { that.onRowDragEnd.emit(event); };
            that.nativeElement.addEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
            that.eventHandlers['rowReorderHandler'] = function (event) { that.onRowReorder.emit(event); };
            that.nativeElement.addEventListener('rowReorder', that.eventHandlers['rowReorderHandler']);
            that.eventHandlers['rowExpandHandler'] = function (event) { that.onRowExpand.emit(event); };
            that.nativeElement.addEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);
            that.eventHandlers['rowCollapseHandler'] = function (event) { that.onRowCollapse.emit(event); };
            that.nativeElement.addEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);
            that.eventHandlers['rowClickHandler'] = function (event) { that.onRowClick.emit(event); };
            that.nativeElement.addEventListener('rowClick', that.eventHandlers['rowClickHandler']);
            that.eventHandlers['rowDoubleClickHandler'] = function (event) { that.onRowDoubleClick.emit(event); };
            that.nativeElement.addEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);
            that.eventHandlers['rowResizeHandler'] = function (event) { that.onRowResize.emit(event); };
            that.nativeElement.addEventListener('rowResize', that.eventHandlers['rowResizeHandler']);
            that.eventHandlers['cellClickHandler'] = function (event) { that.onCellClick.emit(event); };
            that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
            that.eventHandlers['cellDoubleClickHandler'] = function (event) { that.onCellDoubleClick.emit(event); };
            that.nativeElement.addEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);
            that.eventHandlers['endEditHandler'] = function (event) { that.onEndEdit.emit(event); };
            that.nativeElement.addEventListener('endEdit', that.eventHandlers['endEditHandler']);
            that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
            that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
            that.eventHandlers['resizeHandler'] = function (event) { that.onResize.emit(event); };
            that.nativeElement.addEventListener('resize', that.eventHandlers['resizeHandler']);
            that.eventHandlers['rowTapHandler'] = function (event) { that.onRowTap.emit(event); };
            that.nativeElement.addEventListener('rowTap', that.eventHandlers['rowTapHandler']);
            that.eventHandlers['cellTapHandler'] = function (event) { that.onCellTap.emit(event); };
            that.nativeElement.addEventListener('cellTap', that.eventHandlers['cellTapHandler']);
            that.eventHandlers['pageHandler'] = function (event) { that.onPage.emit(event); };
            that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);
            that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
            that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
            that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
            that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
            that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        };
        /** @description Remove event listeners. */
        GridComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['beginEditHandler']) {
                that.nativeElement.removeEventListener('beginEdit', that.eventHandlers['beginEditHandler']);
            }
            if (that.eventHandlers['batchChangeHandler']) {
                that.nativeElement.removeEventListener('batchChange', that.eventHandlers['batchChangeHandler']);
            }
            if (that.eventHandlers['batchCancelHandler']) {
                that.nativeElement.removeEventListener('batchCancel', that.eventHandlers['batchCancelHandler']);
            }
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['columnClickHandler']) {
                that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
            }
            if (that.eventHandlers['columnDoubleClickHandler']) {
                that.nativeElement.removeEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
            }
            if (that.eventHandlers['columnResizeHandler']) {
                that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
            }
            if (that.eventHandlers['columnDragStartHandler']) {
                that.nativeElement.removeEventListener('columnDragStart', that.eventHandlers['columnDragStartHandler']);
            }
            if (that.eventHandlers['columnDraggingHandler']) {
                that.nativeElement.removeEventListener('columnDragging', that.eventHandlers['columnDraggingHandler']);
            }
            if (that.eventHandlers['columnDragEndHandler']) {
                that.nativeElement.removeEventListener('columnDragEnd', that.eventHandlers['columnDragEndHandler']);
            }
            if (that.eventHandlers['columnReorderHandler']) {
                that.nativeElement.removeEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
            }
            if (that.eventHandlers['rowDragStartHandler']) {
                that.nativeElement.removeEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
            }
            if (that.eventHandlers['rowDraggingHandler']) {
                that.nativeElement.removeEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
            }
            if (that.eventHandlers['rowDragEndHandler']) {
                that.nativeElement.removeEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
            }
            if (that.eventHandlers['rowReorderHandler']) {
                that.nativeElement.removeEventListener('rowReorder', that.eventHandlers['rowReorderHandler']);
            }
            if (that.eventHandlers['rowExpandHandler']) {
                that.nativeElement.removeEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);
            }
            if (that.eventHandlers['rowCollapseHandler']) {
                that.nativeElement.removeEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);
            }
            if (that.eventHandlers['rowClickHandler']) {
                that.nativeElement.removeEventListener('rowClick', that.eventHandlers['rowClickHandler']);
            }
            if (that.eventHandlers['rowDoubleClickHandler']) {
                that.nativeElement.removeEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);
            }
            if (that.eventHandlers['rowResizeHandler']) {
                that.nativeElement.removeEventListener('rowResize', that.eventHandlers['rowResizeHandler']);
            }
            if (that.eventHandlers['cellClickHandler']) {
                that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
            }
            if (that.eventHandlers['cellDoubleClickHandler']) {
                that.nativeElement.removeEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);
            }
            if (that.eventHandlers['endEditHandler']) {
                that.nativeElement.removeEventListener('endEdit', that.eventHandlers['endEditHandler']);
            }
            if (that.eventHandlers['filterHandler']) {
                that.nativeElement.onfilterHandler = null;
            }
            if (that.eventHandlers['resizeHandler']) {
                that.nativeElement.removeEventListener('resize', that.eventHandlers['resizeHandler']);
            }
            if (that.eventHandlers['rowTapHandler']) {
                that.nativeElement.removeEventListener('rowTap', that.eventHandlers['rowTapHandler']);
            }
            if (that.eventHandlers['cellTapHandler']) {
                that.nativeElement.removeEventListener('cellTap', that.eventHandlers['cellTapHandler']);
            }
            if (that.eventHandlers['pageHandler']) {
                that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
            }
            if (that.eventHandlers['sortHandler']) {
                that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
            }
            if (that.eventHandlers['scrollBottomReachedHandler']) {
                that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            }
            if (that.eventHandlers['scrollTopReachedHandler']) {
                that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
            }
        };
        GridComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], GridComponent.prototype, "appearance", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "behavior", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "layout", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "clipboard", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "columnMenu", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "columnGroups", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "conditionalFormatting", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "charting", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "checkBoxes", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "dataExport", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "dataSourceSettings", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "editing", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "filtering", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "grouping", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onCellValue", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onCellUpdate", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onCellRender", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onBeforeInit", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onInit", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onAfterInit", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onChartInit", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRender", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onKey", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRowInit", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRowDetailInit", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRowDetailUpdated", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRowInserted", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRowRemoved", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRowUpdate", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onRowUpdated", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onColumnInit", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onColumnInserted", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onColumnRemoved", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onColumnUpdated", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "onCommand", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "paging", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "pager", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "rowDetail", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "scrolling", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "columnHeader", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "summaryRow", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "groupHeader", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "header", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "footer", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "rows", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "selection", null);
        __decorate([
            core.Input()
        ], GridComponent.prototype, "sorting", null);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onBeginEdit", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onBatchChange", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onBatchCancel", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onColumnClick", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onColumnDoubleClick", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onColumnResize", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onColumnDragStart", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onColumnDragging", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onColumnDragEnd", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onColumnReorder", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowDragStart", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowDragging", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowDragEnd", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowReorder", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowExpand", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowCollapse", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowClick", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowDoubleClick", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowResize", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onCellClick", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onCellDoubleClick", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onEndEdit", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onFilter", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onResize", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onRowTap", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onCellTap", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onPage", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onSort", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onScrollBottomReached", void 0);
        __decorate([
            core.Output()
        ], GridComponent.prototype, "onScrollTopReached", void 0);
        GridComponent = __decorate([
            core.Directive({
                selector: 'smart-grid, [smart-grid]'
            })
        ], GridComponent);
        return GridComponent;
    }(BaseElement));

    var GridModule = /** @class */ (function () {
        function GridModule() {
        }
        GridModule = __decorate([
            core.NgModule({
                declarations: [GridComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [GridComponent]
            })
        ], GridModule);
        return GridModule;
    }());

    exports.GridComponent = GridComponent;
    exports.GridModule = GridModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-grid.umd.js.map
