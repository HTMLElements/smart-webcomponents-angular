
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.pivottable';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/pivottable', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].pivottable = {}), global.ng.core));
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

    var PivotTableComponent = /** @class */ (function (_super) {
        __extends(PivotTableComponent, _super);
        function PivotTableComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a cell has been clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
            *   dataField - The data field of the cell's dynamic column.
            *   row - The data of the cell's row.
            */
            _this.onCellClick = new core.EventEmitter();
            /** @description This event is triggered when the selection is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
            *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when a summary column header cell has been clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
            *   columnDefinition - An object detailing the clicked dynamic column.
            *   dataField - The data field of the cell's original column.
            */
            _this.onColumnClick = new core.EventEmitter();
            /** @description This event is triggered when a row has been collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
            *   record - The (aggregated) data of the collapsed row.
            */
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when a total column has been collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
            *   columnDefinition - The definition of the collapsed total column.
            */
            _this.onCollapseTotalColumn = new core.EventEmitter();
            /** @description This event is triggered when a row has been expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
            *   record - The (aggregated) data of the expanded row.
            */
            _this.onExpand = new core.EventEmitter();
            /** @description This event is triggered when a total column has been expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
            *   columnDefinition - The definition of the expanded total column.
            */
            _this.onExpandTotalColumn = new core.EventEmitter();
            /** @description This event is triggered when a filtering-related action is made.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
            *   action - The filtering action. Possible actions: 'add', 'remove'.
            *   filters - The added filters. Only when action is 'add'.
            */
            _this.onFilter = new core.EventEmitter();
            /** @description This event is triggered when a column header cell has been clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
            *   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
            */
            _this.onSort = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        PivotTableComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-pivot-table');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(PivotTableComponent.prototype, "animation", {
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
        Object.defineProperty(PivotTableComponent.prototype, "columnReorder", {
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
        Object.defineProperty(PivotTableComponent.prototype, "columns", {
            /** @description Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "columnTotals", {
            /** @description Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnTotals : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnTotals = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "columnTotalsPosition", {
            /** @description Sets or gets the position of total columns (shown when columnTotals is enabled). */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnTotalsPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "conditionalFormatting", {
            /** @description Sets or gets details about conditional formatting to be applied to the PivotTable's cells. */
            get: function () {
                return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "dataSource", {
            /** @description Determines the original tabular data source of the PivotTable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "defaultSortByRowGroups", {
            /** @description Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order). */
            get: function () {
                return this.nativeElement ? this.nativeElement.defaultSortByRowGroups : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.defaultSortByRowGroups = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "designer", {
            /** @description Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering. */
            get: function () {
                return this.nativeElement ? this.nativeElement.designer : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.designer = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "designerPosition", {
            /** @description Sets or gets the position of the PivotTable's designer (shown when designer is enabled). */
            get: function () {
                return this.nativeElement ? this.nativeElement.designerPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.designerPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "disabled", {
            /** @description Disables the interaction with the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "drillDown", {
            /** @description If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.drillDown : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.drillDown = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "drillDownDataExport", {
            /** @description If set, shows an export button in the drill down dialog. */
            get: function () {
                return this.nativeElement ? this.nativeElement.drillDownDataExport : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.drillDownDataExport = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "drillDownDataExportName", {
            /** @description Sets or gets the drill down table export file name. */
            get: function () {
                return this.nativeElement ? this.nativeElement.drillDownDataExportName : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.drillDownDataExportName = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "drillDownTableInit", {
            /** @description Sets or gets whether sorting based on columns in classic row groups layout mode is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.drillDownTableInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.drillDownTableInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "drillDownCustomAction", {
            /** @description Sets or gets whether the PivotTable's column header is sticky/frozen. */
            get: function () {
                return this.nativeElement ? this.nativeElement.drillDownCustomAction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.drillDownCustomAction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "enableSortByRowGroups", {
            /** @description Sets or gets whether to show a Grand total row aggregating the data of all rows. */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableSortByRowGroups : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableSortByRowGroups = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "freezeHeader", {
            /** @description Sets or gets the way row nesting (based on rowGroup columns) is displayed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "getDefaultSummaryFunction", {
            /** @description Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected. */
            get: function () {
                return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.getDefaultSummaryFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "grandTotal", {
            /** @description Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.grandTotal : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.grandTotal = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "groupLayout", {
            /** @description Sets or gets whether navigation with the keyboard is enabled in the PivotTable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.groupLayout : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.groupLayout = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "hideCellSelectionTooltip", {
            /** @description Sets or gets the language. Used in conjunction with the property messages.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideCellSelectionTooltip : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideCellSelectionTooltip = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "hideEmptyRows", {
            /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideEmptyRows : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideEmptyRows = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "keyboardNavigation", {
            /** @description Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty. */
            get: function () {
                return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "locale", {
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
        Object.defineProperty(PivotTableComponent.prototype, "messages", {
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
        Object.defineProperty(PivotTableComponent.prototype, "nullDefaultValue", {
            /** @description Sets or gets whether paging is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.nullDefaultValue : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.nullDefaultValue = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "onCellRender", {
            /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onCellRender : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "onColumnRender", {
            /** @description Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "onInit", {
            /** @description Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onInit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onInit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "pageSize", {
            /** @description Sets or gets whether to show row total columns for each summary column. */
            get: function () {
                return this.nativeElement ? this.nativeElement.pageSize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pageSize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "pageIndex", {
            /** @description Sets or gets the position of row total columns (shown when rowTotals is enabled). */
            get: function () {
                return this.nativeElement ? this.nativeElement.pageIndex : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "paging", {
            /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.paging : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.paging = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "rightToLeft", {
            /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "rowSort", {
            /** @description Determines the sorting mode of the PivotTable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rowSort : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rowSort = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "rowSummary", {
            /** @description Determines the theme. Theme defines the look of the element */
            get: function () {
                return this.nativeElement ? this.nativeElement.rowSummary : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rowSummary = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "rowTotals", {
            /** @description Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rowTotals : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rowTotals = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "rowTotalsPosition", {
            /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.rowTotalsPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "selection", {
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
        Object.defineProperty(PivotTableComponent.prototype, "selectionMode", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "sortMode", {
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
        Object.defineProperty(PivotTableComponent.prototype, "theme", {
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
        Object.defineProperty(PivotTableComponent.prototype, "toolbar", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolbar : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolbar = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PivotTableComponent.prototype, "tooltip", {
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
        /** @description Adds a filter to a specific column.
        * @param {string} dataField. The column's data field.
        * @param {any} filter. FilterGroup object.
        */
        PivotTableComponent.prototype.addFilter = function (dataField, filter) {
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
        /** @description Clears applied filters.
        */
        PivotTableComponent.prototype.clearFilters = function () {
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
        /** @description Clears selection.
        */
        PivotTableComponent.prototype.clearSelection = function () {
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
        /** @description Clears the PivotTable sorting.
        */
        PivotTableComponent.prototype.clearSort = function () {
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
        /** @description Collapses all rows (when multiple row groups are applied).
        */
        PivotTableComponent.prototype.collapseAllRows = function () {
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
        /** @description Collapses a row (when multiple row groups are applied).
        * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
        */
        PivotTableComponent.prototype.collapseRow = function (rowId) {
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
        /** @description Expands all rows (when multiple row groups are applied).
        */
        PivotTableComponent.prototype.expandAllRows = function () {
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
        /** @description Expands a row (when multiple row groups are applied).
        * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
        */
        PivotTableComponent.prototype.expandRow = function (rowId) {
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
        /** @description Exports the PivotTable's data.
        * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
        * @param {string} fileName. The name of the file to export to
        * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
        * @returns {any}
      */
        PivotTableComponent.prototype.exportData = function (dataFormat, fileName, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.exportData(dataFormat, fileName, callback);
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
        /** @description Returns the current dynamic pivot columns.
        * @returns {any}
      */
        PivotTableComponent.prototype.getDynamicColumns = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getDynamicColumns();
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
        /** @description Returns an array of selected row ids (when selectionMode is 'many' or 'extended') or an array of selected cell details (when selectionMode is 'cell').
        * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
      */
        PivotTableComponent.prototype.getSelection = function () {
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
        /** @description Refreshes the PivotTable.
        */
        PivotTableComponent.prototype.refresh = function () {
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
        PivotTableComponent.prototype.removeFilter = function (dataField) {
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
        /** @description Selects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
        * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
        * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
        */
        PivotTableComponent.prototype.select = function (rowId, dataField) {
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
        /** @description Sorts by a summary or group column.
        * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
        * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
        */
        PivotTableComponent.prototype.sortBy = function (columnDefinition, sortOrder) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.sortBy(columnDefinition, sortOrder);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.sortBy(columnDefinition, sortOrder);
                });
            }
        };
        /** @description Unselects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
        * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
        * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
        */
        PivotTableComponent.prototype.unselect = function (rowId, dataField) {
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
        Object.defineProperty(PivotTableComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        PivotTableComponent.prototype.ngOnInit = function () {
        };
        PivotTableComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        PivotTableComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        PivotTableComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        PivotTableComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['cellClickHandler'] = function (event) { that.onCellClick.emit(event); };
            that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
            that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['collapseTotalColumnHandler'] = function (event) { that.onCollapseTotalColumn.emit(event); };
            that.nativeElement.addEventListener('collapseTotalColumn', that.eventHandlers['collapseTotalColumnHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
            that.eventHandlers['expandTotalColumnHandler'] = function (event) { that.onExpandTotalColumn.emit(event); };
            that.nativeElement.addEventListener('expandTotalColumn', that.eventHandlers['expandTotalColumnHandler']);
            that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
            that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
            that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
            that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        };
        /** @description Remove event listeners. */
        PivotTableComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['cellClickHandler']) {
                that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
            }
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['columnClickHandler']) {
                that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
            }
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
            }
            if (that.eventHandlers['collapseTotalColumnHandler']) {
                that.nativeElement.removeEventListener('collapseTotalColumn', that.eventHandlers['collapseTotalColumnHandler']);
            }
            if (that.eventHandlers['expandHandler']) {
                that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
            }
            if (that.eventHandlers['expandTotalColumnHandler']) {
                that.nativeElement.removeEventListener('expandTotalColumn', that.eventHandlers['expandTotalColumnHandler']);
            }
            if (that.eventHandlers['filterHandler']) {
                that.nativeElement.onfilterHandler = null;
            }
            if (that.eventHandlers['sortHandler']) {
                that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
            }
        };
        PivotTableComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "columnReorder", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "columnTotals", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "columnTotalsPosition", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "conditionalFormatting", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "defaultSortByRowGroups", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "designer", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "designerPosition", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "drillDown", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "drillDownDataExport", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "drillDownDataExportName", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "drillDownTableInit", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "drillDownCustomAction", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "enableSortByRowGroups", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "freezeHeader", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "getDefaultSummaryFunction", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "grandTotal", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "groupLayout", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "hideCellSelectionTooltip", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "hideEmptyRows", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "keyboardNavigation", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "nullDefaultValue", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "onCellRender", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "onColumnRender", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "onInit", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "pageSize", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "pageIndex", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "paging", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "rowSort", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "rowSummary", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "rowTotals", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "rowTotalsPosition", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "selection", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "sortMode", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "toolbar", null);
        __decorate([
            core.Input()
        ], PivotTableComponent.prototype, "tooltip", null);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onCellClick", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onColumnClick", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onCollapseTotalColumn", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onExpandTotalColumn", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onFilter", void 0);
        __decorate([
            core.Output()
        ], PivotTableComponent.prototype, "onSort", void 0);
        PivotTableComponent = __decorate([
            core.Directive({
                exportAs: 'smart-pivot-table', selector: 'smart-pivot-table, [smart-pivot-table]'
            })
        ], PivotTableComponent);
        return PivotTableComponent;
    }(BaseElement));

    var PivotTableModule = /** @class */ (function () {
        function PivotTableModule() {
        }
        PivotTableModule = __decorate([
            core.NgModule({
                declarations: [PivotTableComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [PivotTableComponent]
            })
        ], PivotTableModule);
        return PivotTableModule;
    }());

    exports.PivotTableComponent = PivotTableComponent;
    exports.PivotTableModule = PivotTableModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-pivottable.umd.js.map
