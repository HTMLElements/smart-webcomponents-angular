
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.accordion';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/accordion', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].accordion = {}), global.ng.core));
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

    var AccordionComponent = /** @class */ (function (_super) {
        __extends(AccordionComponent, _super);
        function AccordionComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when an item is collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
            *   content - The content of the item.
            *   index - The index of the item.
            *   label - The label of the item
            */
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when an item is going to be collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
            *   content - The content of the item.
            *   index - The index of the item.
            *   label - The label of the item
            */
            _this.onCollapsing = new core.EventEmitter();
            /** @description This event is triggered when a reordering operation is completed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
            *   position - The current top and left position of the item that was dragged.
            *   target - The item that was dragged.
            *   content - The content of the item.
            *   index - The index of the item.
            *   label - The label of the item.
            */
            _this.onDragEnd = new core.EventEmitter();
            /** @description This event is triggered when a reordering operation is started.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
            *   position - The current top and left position of the item that is about to be dragged.
            *   target - The item that is about to be dragged.
            *   content - The content of the item.
            *   index - The index of the item.
            *   label - The label of the item.
            */
            _this.onDragStart = new core.EventEmitter();
            /** @description This event is triggered when an item is expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
            *   position - The current top and left position of the item.
            *   target - The item that was dragged.
            *   content - The content of the item.
            *   index - The index of the item.
            *   label - The label of the item.
            */
            _this.onExpand = new core.EventEmitter();
            /** @description This event is triggered when an item is going to be expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
            *   content - The content of the item.
            *   index - The index of the item.
            *   label - The label of the item
            */
            _this.onExpanding = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        AccordionComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-accordion');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(AccordionComponent.prototype, "animation", {
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
        Object.defineProperty(AccordionComponent.prototype, "dataSource", {
            /** @description Determines the data source that will be loaded to the Accordion. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionComponent.prototype, "disabled", {
            /** @description Enables or disables the accordion. Disabled elements can not be interacted with. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionComponent.prototype, "expandedIndexes", {
            /** @description Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.expandedIndexes : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.expandedIndexes = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionComponent.prototype, "expandMode", {
            /** @description Sets or gets the expand mode. Expand mode determines how the items will expand or collapse. */
            get: function () {
                return this.nativeElement ? this.nativeElement.expandMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.expandMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionComponent.prototype, "locale", {
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
        Object.defineProperty(AccordionComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(AccordionComponent.prototype, "messages", {
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
        Object.defineProperty(AccordionComponent.prototype, "readonly", {
            /** @description Determines if the element is readonly or not. If the element true, users cannot interact with it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionComponent.prototype, "reorder", {
            /** @description Enables or disables accordion reordering. */
            get: function () {
                return this.nativeElement ? this.nativeElement.reorder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.reorder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(AccordionComponent.prototype, "theme", {
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
        Object.defineProperty(AccordionComponent.prototype, "unfocusable", {
            /** @description Determines whether the element can be focused or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.unfocusable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Collapses an item at a specified index.
        * @param {number} position. The index of the collapsed item.
        */
        AccordionComponent.prototype.collapse = function (position) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapse(position);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapse(position);
                });
            }
        };
        /** @description Expands an item at a specified index.
        * @param {number} position. The index of the expanded item.
        */
        AccordionComponent.prototype.expand = function (position) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expand(position);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expand(position);
                });
            }
        };
        /** @description Inserts a new item at a specified index.
        * @param {number} index. The index where the item must be inserted.
        * @param {any} item. An object containing the values for the properties of the new item to be inserted.
        */
        AccordionComponent.prototype.insert = function (index, item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(index, item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insert(index, item);
                });
            }
        };
        /** @description Removes an item at a specified index.
        * @param {number} position. The index of the item to be removed.
        */
        AccordionComponent.prototype.removeAt = function (position) {
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
        /** @description Updates an item from the element.
        * @param {number} index. The index of the item to be updated.
        * @param {any} settings. An object containing the values for the properties of the item that will be updated.
        */
        AccordionComponent.prototype.update = function (index, settings) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.update(index, settings);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.update(index, settings);
                });
            }
        };
        Object.defineProperty(AccordionComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        AccordionComponent.prototype.ngOnInit = function () {
        };
        AccordionComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        AccordionComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        AccordionComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        AccordionComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['collapsingHandler'] = function (event) { that.onCollapsing.emit(event); };
            that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
            that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
            that.eventHandlers['expandingHandler'] = function (event) { that.onExpanding.emit(event); };
            that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);
        };
        /** @description Remove event listeners. */
        AccordionComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
            }
            if (that.eventHandlers['collapsingHandler']) {
                that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
            }
            if (that.eventHandlers['dragEndHandler']) {
                that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
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
        };
        AccordionComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "expandedIndexes", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "expandMode", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "reorder", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], AccordionComponent.prototype, "unfocusable", null);
        __decorate([
            core.Output()
        ], AccordionComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], AccordionComponent.prototype, "onCollapsing", void 0);
        __decorate([
            core.Output()
        ], AccordionComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], AccordionComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], AccordionComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output()
        ], AccordionComponent.prototype, "onExpanding", void 0);
        AccordionComponent = __decorate([
            core.Directive({
                exportAs: 'smart-accordion', selector: 'smart-accordion, [smart-accordion]'
            })
        ], AccordionComponent);
        return AccordionComponent;
    }(BaseElement));

    var AccordionItemComponent = /** @class */ (function (_super) {
        __extends(AccordionItemComponent, _super);
        function AccordionItemComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when the item is collapsed.
            *  @param event. The custom event. 	*/
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when the item is expanded.
            *  @param event. The custom event. 	*/
            _this.onExpand = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        AccordionItemComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-accordion-item');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(AccordionItemComponent.prototype, "arrow", {
            /** @description Sets or gets header's arrow position. If the value is 'none' the arrow is not shown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.arrow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.arrow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionItemComponent.prototype, "content", {
            /** @description Sets or gets the content if the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.content : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.content = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionItemComponent.prototype, "expanded", {
            /** @description Sets or gets the expanded state. */
            get: function () {
                return this.nativeElement ? this.nativeElement.expanded : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.expanded = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionItemComponent.prototype, "focused", {
            /** @description Sets or gets the focus state. */
            get: function () {
                return this.nativeElement ? this.nativeElement.focused : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.focused = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionItemComponent.prototype, "label", {
            /** @description Sets or gets the label if the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionItemComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        AccordionItemComponent.prototype.ngOnInit = function () {
        };
        AccordionItemComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        AccordionItemComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        AccordionItemComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        AccordionItemComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        };
        /** @description Remove event listeners. */
        AccordionItemComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
            }
            if (that.eventHandlers['expandHandler']) {
                that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
            }
        };
        AccordionItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], AccordionItemComponent.prototype, "arrow", null);
        __decorate([
            core.Input()
        ], AccordionItemComponent.prototype, "content", null);
        __decorate([
            core.Input()
        ], AccordionItemComponent.prototype, "expanded", null);
        __decorate([
            core.Input()
        ], AccordionItemComponent.prototype, "focused", null);
        __decorate([
            core.Input()
        ], AccordionItemComponent.prototype, "label", null);
        __decorate([
            core.Output()
        ], AccordionItemComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], AccordionItemComponent.prototype, "onExpand", void 0);
        AccordionItemComponent = __decorate([
            core.Directive({
                exportAs: 'smart-accordion-item', selector: 'smart-accordion-item, [smart-accordion-item]'
            })
        ], AccordionItemComponent);
        return AccordionItemComponent;
    }(BaseElement));

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        AccordionModule = __decorate([
            core.NgModule({
                declarations: [AccordionComponent, AccordionItemComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [AccordionComponent, AccordionItemComponent]
            })
        ], AccordionModule);
        return AccordionModule;
    }());

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionItemComponent = AccordionItemComponent;
    exports.AccordionModule = AccordionModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-accordion.umd.js.map
