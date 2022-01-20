
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.table';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/table', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].table = {}), global.ng.core));
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

    var TableComponent = /** @class */ (function (_super) {
        __extends(TableComponent, _super);
        function TableComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a cell edit operation has been initiated.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
            *   id - The id of the row.
            *   dataField - The data field of the cell's column.
            *   row - The data of the cell's row.
            *   value - The data value of the cell.
            */
            _this.onCellBeginEdit = new core.EventEmitter();
            /** @description This event is triggered when a cell has been clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
            *   id - The cell's row id.
            *   dataField - The data field of the cell's column.
            *   row - The data of the cell's row.
            *   value - The data value of the cell.
            *   originalEvent - The 'click' event object.
            */
            _this.onCellClick = new core.EventEmitter();
            /** @description This event is triggered when a cell has been edited.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
            *   id - The id of the row.
            *   dataField - The data field of the cell's column.
            *   row - The new data of the cell's row.
            *   value - The data value of the cell.
            */
            _this.onCellEndEdit = new core.EventEmitter();
            /** @description This event is triggered when the selection is changed. Within the event handler you can get the selection by using the 'getSelection' method.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
            *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when a row has been collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
            *   id - The id of the collapsed row.
            *   record - The data of the collapsed row.
            */
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when a row has been expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
            *   id - The id of the expanded row.
            *   record - The (aggregated) data of the expanded row.
            */
            _this.onExpand = new core.EventEmitter();
            /** @description This event is triggered when a column header cell has been clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
            *   dataField - The data field of the cell's column.
            */
            _this.onColumnClick = new core.EventEmitter();
            /** @description This event is triggered when a column menu is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
            *   dataField - The data field of the column.
            */
            _this.onCloseColumnMenu = new core.EventEmitter();
            /** @description This event is triggered when a column has been resized via dragging or double-click.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
            *   dataField - The data field of the column.
            *   headerCellElement - The column's header cell HTML element.
            *   width - The new width of the column.
            */
            _this.onColumnResize = new core.EventEmitter();
            /** @description This event is triggered when a filtering-related action is made.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
            *   action - The filtering action. Possible actions: 'add', 'remove'.
            *   filters - The added filters. Only when action is 'add'.
            */
            _this.onFilter = new core.EventEmitter();
            /** @description This event is triggered when a grouping-related action is made.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label, 	path)
            *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
            *   dataField - The data field of the column whose grouping is modified.
            *   label - The label of the group (only when collapsing/expanding).
            *   path - The group's path (only when collapsing/expanding). The path includes the path to the expanded/collapsed group starting from the root group. The indexes are joined with '.'. This parameter is available when the 'action' is 'expand' or 'collapse'.
            */
            _this.onGroup = new core.EventEmitter();
            /** @description This event is triggered when a column menu is opened.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
            *   dataField - The data field of the column.
            */
            _this.onOpenColumnMenu = new core.EventEmitter();
            /** @description This event is triggered when a paging-related action is made.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
            *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
            */
            _this.onPage = new core.EventEmitter();
            /** @description This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
            *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
            *   id - The id of the row.
            *   row - The data of the row.
            */
            _this.onRowBeginEdit = new core.EventEmitter();
            /** @description This event is triggered when a row has been edited (only when editMode is 'row').
            *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
            *   id - The id of the row.
            *   row - The new data of the row.
            */
            _this.onRowEndEdit = new core.EventEmitter();
            /** @description This event is triggered when a column header cell has been clicked or sorting is applied programmatically using the Table API.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes, 	type)
            *   columns - An array with information about the columns the Table has been sorted by.
            *   sortDataFields - An array with information about the data fields the Table has been sorted by.
            *   sortOrders - An array with information about the columns sort orders the Table has been sorted by.
            *   sortDataTypes - An array with information about the columns data types the Table has been sorted by.
            *   type - The type of action that initiated the data sort. Possible types: 'programmatic', 'interaction'
            */
            _this.onSort = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TableComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-table');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TableComponent.prototype, "animation", {
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
        Object.defineProperty(TableComponent.prototype, "autoLoadState", {
            /** @description Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "autoSaveState", {
            /** @description Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columnGroups", {
            /** @description Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnGroups : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columnMinWidth", {
            /** @description Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnMinWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnMinWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columnReorder", {
            /** @description Sets or gets whether the reordering of columns is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnReorder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnReorder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columnResize", {
            /** @description Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnResize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnResize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columnResizeNormalize", {
            /** @description This property affects the table sizing, when the columnSizeMode is 'default'. When 'columnResizeNormalize' is false, the Table will add an additional TH element, if all table columns have the 'width' property set. This is done in order to maintain your width settings. Otherwise, when the property is set to true, the Table will auto-fill the remaining space similar to the layout of standard HTML Tables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnResizeNormalize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnResizeNormalize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columnResizeFeedback", {
            /** @description Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnResizeFeedback = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columns", {
            /** @description Describes the columns properties. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "conditionalFormatting", {
            /** @description Sets or gets details about conditional formatting to be applied to the Table's cells. */
            get: function () {
                return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "columnSizeMode", {
            /** @description Sets or gets the column sizing behavior. In 'auto' mode Columns are automatically sized based on their content and the value of the columnMinWidth property, unless there is not enough space in the Table, in which case ellipses are shown. User-set static column width is still respected. In 'default' mode Columns are sized according to the rules of the standard HTML table element's table-layout: fixed. Custom width can also be applied to columns in this case by setting the column width property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnSizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "conditionalFormattingButton", {
            /** @description Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options. */
            get: function () {
                return this.nativeElement ? this.nativeElement.conditionalFormattingButton : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.conditionalFormattingButton = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "deferredScrollDelay", {
            /** @description This property determines the time in milliseconds after which the Table data is updated, when you vertically scroll. */
            get: function () {
                return this.nativeElement ? this.nativeElement.deferredScrollDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.deferredScrollDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "dataRowId", {
            /** @description When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataRowId : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataRowId = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "dataSource", {
            /** @description Determines the data source of the table component. The data source of the Table can be a regular Array or a DataAdapter instance. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "dataSourceSettings", {
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
        Object.defineProperty(TableComponent.prototype, "dataTransform", {
            /** @description Disables the interaction with the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataTransform : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataTransform = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "disabled", {
            /** @description Sets or gets whether the Table can be edited. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "editing", {
            /** @description Sets or gets the edit mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.editing : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editing = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "editMode", {
            /** @description Sets or gets whether Row hierarchies are expanded by default, when created. Use this property when you want your groups to be expanded by default, when the Table is grouped or when you use the Table in tree mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.editMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "expandHierarchy", {
            /** @description Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header. */
            get: function () {
                return this.nativeElement ? this.nativeElement.expandHierarchy : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.expandHierarchy = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "filtering", {
            /** @description Sets or gets whether the Table can be filtered via a filter row. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filtering : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filtering = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "filterRow", {
            /** @description Sets or gets the id of an HTML template element to be applied as a custom filter template. */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterRow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterRow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "filterTemplate", {
            /** @description Sets or gets the id of an HTML template element to be applied as footer row(s). */
            get: function () {
                return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filterTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "footerRow", {
            /** @description Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced). */
            get: function () {
                return this.nativeElement ? this.nativeElement.footerRow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.footerRow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "formulas", {
            /** @description Sets or gets whether the Table's footer is sticky/frozen. */
            get: function () {
                return this.nativeElement ? this.nativeElement.formulas : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.formulas = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "freezeFooter", {
            /** @description Sets or gets whether the Table's column header is sticky/frozen. */
            get: function () {
                return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.freezeFooter = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "freezeHeader", {
            /** @description Sets or gets whether grouping the Table is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "grouping", {
            /** @description Allows to customize the header of the element. The property accepts the id of an HTMLElement, HTMLTemplateElement, function or a string that will be parsed as HTML. When set to a function it contains one argument - the header element of the Table. */
            get: function () {
                return this.nativeElement ? this.nativeElement.grouping : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.grouping = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "groupFormatFunction", {
            /** @description Sets or gets whether navigation with the keyboard is enabled in the Table. */
            get: function () {
                return this.nativeElement ? this.nativeElement.groupFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.groupFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "headerRow", {
            /** @description Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerRow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerRow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "keyboardNavigation", {
            /** @description Sets or gets the language. Used in conjunction with the property messages.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "loadColumnStateBehavior", {
            /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.loadColumnStateBehavior = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "locale", {
            /** @description Sets or gets the page size (when paging is enabled). */
            get: function () {
                return this.nativeElement ? this.nativeElement.locale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.locale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "messages", {
            /** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
            get: function () {
                return this.nativeElement ? this.nativeElement.messages : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.messages = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "onCellRender", {
            /** @description Sets or gets whether paging is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onCellRender : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "onColumnRender", {
            /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "onInit", {
            /** @description Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "pageSize", {
            /** @description Sets or gets an array of the Table's selected row's ids. */
            get: function () {
                return this.nativeElement ? this.nativeElement.pageSize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pageSize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "pageIndex", {
            /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.pageIndex : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "paging", {
            /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.paging : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.paging = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "rightToLeft", {
            /** @description Sets or gets whether row selection (via checkboxes) is hierarchical. When a parent row is selected, all sub rows are selected, too. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "rowDetailTemplate", {
            /** @description Determines the sorting mode of the Table. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rowDetailTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "selected", {
            /** @description Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState). */
            get: function () {
                return this.nativeElement ? this.nativeElement.selected : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selected = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "selection", {
            /** @description Determines the theme. Theme defines the look of the element */
            get: function () {
                return this.nativeElement ? this.nativeElement.selection : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selection = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "selectionMode", {
            /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "selectionByHierarchy", {
            /** @description Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionByHierarchy : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionByHierarchy = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "sort", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.sort : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sort = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "sortMode", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.sortMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sortMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "stateSettings", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.stateSettings : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.stateSettings = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "theme", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.theme : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.theme = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "tooltip", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltip : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltip = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "virtualization", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.virtualization : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.virtualization = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds a new row. When you invoke the method, pass a JSON object with the row's data.
        * @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
        */
        TableComponent.prototype.addRow = function (data) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addRow(data);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addRow(data);
                });
            }
        };
        /** @description Adds a filter to a specific column.
        * @param {string} dataField. The column's data field.
        * @param {any} filter. FilterGroup object.
        */
        TableComponent.prototype.addFilter = function (dataField, filter) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addFilter(dataField, filter);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addFilter(dataField, filter);
                });
            }
        };
        /** @description Groups by a column.
        * @param {string} dataField. The column's data field.
        */
        TableComponent.prototype.addGroup = function (dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addGroup(dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addGroup(dataField);
                });
            }
        };
        /** @description Begins an edit operation.
        * @param {string | number} row. The id of the row to edit.
        * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
        */
        TableComponent.prototype.beginEdit = function (row, dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.beginEdit(row, dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.beginEdit(row, dataField);
                });
            }
        };
        /** @description Begins an update operation. Suspends all table refreshes and renders.
        */
        TableComponent.prototype.beginUpdate = function () {
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
        /** @description Ends the current edit operation and discards changes.
        */
        TableComponent.prototype.cancelEdit = function () {
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
        /** @description Clears applied filters.
        */
        TableComponent.prototype.clearFilters = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearFilters();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearFilters();
                });
            }
        };
        /** @description Clears grouping.
        */
        TableComponent.prototype.clearGrouping = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearGrouping();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearGrouping();
                });
            }
        };
        /** @description Clears selection.
        */
        TableComponent.prototype.clearSelection = function () {
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
        /** @description Clears the Table sorting.
        */
        TableComponent.prototype.clearSort = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearSort();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearSort();
                });
            }
        };
        /** @description Collapses all rows (in tree mode).
        */
        TableComponent.prototype.collapseAllRows = function () {
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
        /** @description Collapses all groups (in tree mode).
        */
        TableComponent.prototype.collapseAllGroups = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseAllGroups();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseAllGroups();
                });
            }
        };
        /** @description Collapses all row details. Rows that have details defined via the rowDetailTemplate will be collapsed.
        */
        TableComponent.prototype.collapseAllRowDetails = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseAllRowDetails();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseAllRowDetails();
                });
            }
        };
        /** @description Collapses a group.
        * @param {string} index. The group's hierarchical index.
        */
        TableComponent.prototype.collapseGroup = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseGroup(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseGroup(index);
                });
            }
        };
        /** @description Collapses a row (in tree mode).
        * @param {string | number} rowId. The id of the row to collapse.
        */
        TableComponent.prototype.collapseRow = function (rowId) {
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
        /** @description Disables a selection of a row. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
        * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
        */
        TableComponent.prototype.disableSelect = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.disableSelect(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.disableSelect(rowId);
                });
            }
        };
        /** @description Enables a selection of a row, if it was previously disabled through a 'disableSelect' method call. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
        * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
        */
        TableComponent.prototype.enableSelect = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.enableSelect(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.enableSelect(rowId);
                });
            }
        };
        /** @description Ends the current edit operation and saves changes.
        */
        TableComponent.prototype.endEdit = function () {
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
        /** @description Ends an update operation. Resumes all table refreshes and renders. Re-renders the Table.
        * @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
        */
        TableComponent.prototype.endUpdate = function (refresh) {
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
        /** @description Expands all rows (in tree mode).
        */
        TableComponent.prototype.expandAllRows = function () {
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
        /** @description Expands all groups (in tree mode).
        */
        TableComponent.prototype.expandAllGroups = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandAllGroups();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandAllGroups();
                });
            }
        };
        /** @description Expands all row details. Rows that have details defined via rowDetailTemplate will be expanded.
        */
        TableComponent.prototype.expandAllRowDetails = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandAllRowDetails();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandAllRowDetails();
                });
            }
        };
        /** @description Expands a group.
        * @param {string} index. The group's hierarchical index.
        */
        TableComponent.prototype.expandGroup = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandGroup(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandGroup(index);
                });
            }
        };
        /** @description Expands a row (in tree mode).
        * @param {string | number} rowId. The id of the row to expand.
        */
        TableComponent.prototype.expandRow = function (rowId) {
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
        /** @description Exports the Table's data.
        * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
        * @param {string} fileName?. The name of the file to export to
        * @param {boolean} exportFiltered?. If set to true, exports only filtered records
        * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
        * @returns {any}
      */
        TableComponent.prototype.exportData = function (dataFormat, fileName, exportFiltered, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
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
        /** @description Returns an array of selected row ids.
        * @returns {(string | number)[]}
      */
        TableComponent.prototype.getSelection = function () {
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
        /** @description Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
        * @returns {any}
      */
        TableComponent.prototype.getState = function () {
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
        /** @description Returns the value of a cell.
        * @param {string | number} row. The id of the cell's row.
        * @param {string} dataField. The dataField of the cell's column.
        * @returns {any}
      */
        TableComponent.prototype.getValue = function (row, dataField) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getValue(row, dataField);
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
        /** @description Gets a column property.
        * @param {string} columnDataField. Column field name.
        * @param {string} propertyName. Column property name.
        * @returns {any}
      */
        TableComponent.prototype.getColumnProperty = function (columnDataField, propertyName) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getColumnProperty(columnDataField, propertyName);
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
        /** @description Checks whether a group is expanded and returns true or false. false is returned when the group index is undefined, too.
        * @param {string} index. The group's hierarchical index.
        * @returns {boolean}
      */
        TableComponent.prototype.isGroupExpanded = function (index) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.isGroupExpanded(index);
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
        /** @description Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
        * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
        */
        TableComponent.prototype.loadState = function (state) {
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
        /** @description Navigates to a page.
        * @param {number} pageIndex. The zero-based page index to navigate to.
        */
        TableComponent.prototype.navigateTo = function (pageIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.navigateTo(pageIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.navigateTo(pageIndex);
                });
            }
        };
        /** @description Refreshes the table.
        */
        TableComponent.prototype.refresh = function () {
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
        /** @description Removes filters applied to a specific column.
        * @param {string} dataField. The column's data field.
        */
        TableComponent.prototype.removeFilter = function (dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeFilter(dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeFilter(dataField);
                });
            }
        };
        /** @description Removes grouping by a column.
        * @param {string} dataField. The column's data field.
        */
        TableComponent.prototype.removeGroup = function (dataField) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeGroup(dataField);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeGroup(dataField);
                });
            }
        };
        /** @description Removes a row by its id.
        * @param {string | number} row. The id of the cell's row.
        */
        TableComponent.prototype.removeRow = function (row) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeRow(row);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeRow(row);
                });
            }
        };
        /** @description Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property.
        * @returns {any}
      */
        TableComponent.prototype.saveState = function () {
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
        /** @description Selects one or more rows.
        * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
        */
        TableComponent.prototype.select = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.select(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.select(rowId);
                });
            }
        };
        /** @description Sets the value of a cell.
        * @param {string | number} row. The id of the cell's row.
        * @param {string} dataField. The dataField of the cell's column.
        * @param {any} value. The new value of the cell.
        */
        TableComponent.prototype.setValue = function (row, dataField, value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setValue(row, dataField, value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setValue(row, dataField, value);
                });
            }
        };
        /** @description Sorts the Table by a column.
        * @param {string} columnDataField. Column field name.
        * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
        */
        TableComponent.prototype.sortBy = function (columnDataField, sortOrder) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.sortBy(columnDataField, sortOrder);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.sortBy(columnDataField, sortOrder);
                });
            }
        };
        /** @description Sets a column property.
        * @param {string} columnDataField. Column field name.
        * @param {string} propertyName. Column property name.
        * @param {any} propertyValue. Property value.
        */
        TableComponent.prototype.setColumnProperty = function (columnDataField, propertyName, propertyValue) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
                });
            }
        };
        /** @description Updates a table row. The method expects two parameters - row id and JSON object with the new row data.
        * @param {string | number} rowId. The id of the row.
        * @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
        */
        TableComponent.prototype.updateRow = function (rowId, data) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateRow(rowId, data);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateRow(rowId, data);
                });
            }
        };
        /** @description Unselects one or more rows.
        * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
        */
        TableComponent.prototype.unselect = function (rowId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.unselect(rowId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.unselect(rowId);
                });
            }
        };
        Object.defineProperty(TableComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TableComponent.prototype.ngOnInit = function () {
        };
        TableComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        TableComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        TableComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        TableComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['cellBeginEditHandler'] = function (event) { that.onCellBeginEdit.emit(event); };
            that.nativeElement.addEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
            that.eventHandlers['cellClickHandler'] = function (event) { that.onCellClick.emit(event); };
            that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
            that.eventHandlers['cellEndEditHandler'] = function (event) { that.onCellEndEdit.emit(event); };
            that.nativeElement.addEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
            that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
            that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
            that.eventHandlers['closeColumnMenuHandler'] = function (event) { that.onCloseColumnMenu.emit(event); };
            that.nativeElement.addEventListener('closeColumnMenu', that.eventHandlers['closeColumnMenuHandler']);
            that.eventHandlers['columnResizeHandler'] = function (event) { that.onColumnResize.emit(event); };
            that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
            that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
            that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
            that.eventHandlers['groupHandler'] = function (event) { that.onGroup.emit(event); };
            that.nativeElement.addEventListener('group', that.eventHandlers['groupHandler']);
            that.eventHandlers['openColumnMenuHandler'] = function (event) { that.onOpenColumnMenu.emit(event); };
            that.nativeElement.addEventListener('openColumnMenu', that.eventHandlers['openColumnMenuHandler']);
            that.eventHandlers['pageHandler'] = function (event) { that.onPage.emit(event); };
            that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);
            that.eventHandlers['rowBeginEditHandler'] = function (event) { that.onRowBeginEdit.emit(event); };
            that.nativeElement.addEventListener('rowBeginEdit', that.eventHandlers['rowBeginEditHandler']);
            that.eventHandlers['rowEndEditHandler'] = function (event) { that.onRowEndEdit.emit(event); };
            that.nativeElement.addEventListener('rowEndEdit', that.eventHandlers['rowEndEditHandler']);
            that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
            that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        };
        /** @description Remove event listeners. */
        TableComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['cellBeginEditHandler']) {
                that.nativeElement.removeEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
            }
            if (that.eventHandlers['cellClickHandler']) {
                that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
            }
            if (that.eventHandlers['cellEndEditHandler']) {
                that.nativeElement.removeEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
            }
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
            }
            if (that.eventHandlers['expandHandler']) {
                that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
            }
            if (that.eventHandlers['columnClickHandler']) {
                that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
            }
            if (that.eventHandlers['closeColumnMenuHandler']) {
                that.nativeElement.removeEventListener('closeColumnMenu', that.eventHandlers['closeColumnMenuHandler']);
            }
            if (that.eventHandlers['columnResizeHandler']) {
                that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
            }
            if (that.eventHandlers['filterHandler']) {
                that.nativeElement.onfilterHandler = null;
            }
            if (that.eventHandlers['groupHandler']) {
                that.nativeElement.removeEventListener('group', that.eventHandlers['groupHandler']);
            }
            if (that.eventHandlers['openColumnMenuHandler']) {
                that.nativeElement.removeEventListener('openColumnMenu', that.eventHandlers['openColumnMenuHandler']);
            }
            if (that.eventHandlers['pageHandler']) {
                that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
            }
            if (that.eventHandlers['rowBeginEditHandler']) {
                that.nativeElement.removeEventListener('rowBeginEdit', that.eventHandlers['rowBeginEditHandler']);
            }
            if (that.eventHandlers['rowEndEditHandler']) {
                that.nativeElement.removeEventListener('rowEndEdit', that.eventHandlers['rowEndEditHandler']);
            }
            if (that.eventHandlers['sortHandler']) {
                that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
            }
        };
        TableComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TableComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "autoLoadState", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "autoSaveState", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columnGroups", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columnMinWidth", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columnReorder", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columnResize", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columnResizeNormalize", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columnResizeFeedback", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "conditionalFormatting", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "columnSizeMode", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "conditionalFormattingButton", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "deferredScrollDelay", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "dataRowId", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "dataSourceSettings", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "dataTransform", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "editing", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "editMode", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "expandHierarchy", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "filtering", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "filterRow", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "filterTemplate", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "footerRow", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "formulas", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "freezeFooter", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "freezeHeader", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "grouping", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "groupFormatFunction", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "headerRow", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "keyboardNavigation", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "loadColumnStateBehavior", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "onCellRender", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "onColumnRender", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "onInit", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "pageSize", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "pageIndex", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "paging", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "rowDetailTemplate", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "selected", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "selection", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "selectionByHierarchy", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "sort", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "sortMode", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "stateSettings", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "virtualization", null);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onCellBeginEdit", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onCellClick", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onCellEndEdit", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onColumnClick", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onCloseColumnMenu", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onColumnResize", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onFilter", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onGroup", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onOpenColumnMenu", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onPage", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onRowBeginEdit", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onRowEndEdit", void 0);
        __decorate([
            core.Output()
        ], TableComponent.prototype, "onSort", void 0);
        TableComponent = __decorate([
            core.Directive({
                selector: 'smart-table, [smart-table]'
            })
        ], TableComponent);
        return TableComponent;
    }(BaseElement));

    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule = __decorate([
            core.NgModule({
                declarations: [TableComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [TableComponent]
            })
        ], TableModule);
        return TableModule;
    }());

    exports.Smart = Smart;
    exports.TableComponent = TableComponent;
    exports.TableModule = TableModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-table.umd.js.map
