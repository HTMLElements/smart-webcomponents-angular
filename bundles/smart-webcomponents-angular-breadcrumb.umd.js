
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.breadcrumb';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/breadcrumb', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].breadcrumb = {}), global.ng.core));
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

    var BreadcrumbComponent = /** @class */ (function (_super) {
        __extends(BreadcrumbComponent, _super);
        function BreadcrumbComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a Breadcrumb item is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
            *   item - The item that has been closed.
            */
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
            *   item - The item that is going to be closed.
            */
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when a Breadcrumb item is dropped.
            *  @param event. The custom event. 	*/
            _this.onDragEnd = new core.EventEmitter();
            /** @description This event is triggered when a Breadcrumb item is being dragged.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
            *   item - The item that is being dragged.
            *   originalEvent - The original event that initiates the dragging operation.
            *   target - The original target.
            */
            _this.onDragging = new core.EventEmitter();
            /** @description This event is triggered when the "Add new item" (+) button is clicked.
            *  @param event. The custom event. 	*/
            _this.onAddNewItem = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BreadcrumbComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-breadcrumb');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BreadcrumbComponent.prototype, "addNewItem", {
            /** @description Enables or disables the "Add new item" (+) button. */
            get: function () {
                return this.nativeElement ? this.nativeElement.addNewItem : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.addNewItem = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "allowDrag", {
            /** @description Enables or disables the dragging of breadcrumb items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowDrag : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "allowDrop", {
            /** @description Enables or disables the dropping of dragged breadcrumb items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowDrop : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "animation", {
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
        Object.defineProperty(BreadcrumbComponent.prototype, "closeButtons", {
            /** @description Show/Hide the close button of breadcrumb items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.closeButtons : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.closeButtons = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "dataSource", {
            /** @description Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "disabled", {
            /** @description Enables or disables the Breadcrumb. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "itemTemplate", {
            /** @description Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "locale", {
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
        Object.defineProperty(BreadcrumbComponent.prototype, "messages", {
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
        Object.defineProperty(BreadcrumbComponent.prototype, "minimizeWidth", {
            /** @description Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically. */
            get: function () {
                return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.minimizeWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BreadcrumbComponent.prototype, "unfocusable", {
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
        /** @description Adds an item.
        * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
        */
        BreadcrumbComponent.prototype.addItem = function (itemDetails) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addItem(itemDetails);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addItem(itemDetails);
                });
            }
        };
        /** @description Restores the Breadcrumb from minimized state back to normal.
        */
        BreadcrumbComponent.prototype.maximize = function () {
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
        /** @description Minimizes the Breadcrumb.
        */
        BreadcrumbComponent.prototype.minimize = function () {
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
        /** @description Removes an item.
        * @param {HTMLElement} item. The item to remove.
        */
        BreadcrumbComponent.prototype.removeItem = function (item) {
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
        Object.defineProperty(BreadcrumbComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BreadcrumbComponent.prototype.ngOnInit = function () {
        };
        BreadcrumbComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BreadcrumbComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BreadcrumbComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BreadcrumbComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
            that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
            that.eventHandlers['addNewItemHandler'] = function (event) { that.onAddNewItem.emit(event); };
            that.nativeElement.addEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);
        };
        /** @description Remove event listeners. */
        BreadcrumbComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
            }
            if (that.eventHandlers['closingHandler']) {
                that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
            }
            if (that.eventHandlers['dragEndHandler']) {
                that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            }
            if (that.eventHandlers['draggingHandler']) {
                that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
            }
            if (that.eventHandlers['addNewItemHandler']) {
                that.nativeElement.removeEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);
            }
        };
        BreadcrumbComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "addNewItem", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "allowDrag", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "allowDrop", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "closeButtons", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "minimizeWidth", null);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "unfocusable", null);
        __decorate([
            core.Output()
        ], BreadcrumbComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], BreadcrumbComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], BreadcrumbComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], BreadcrumbComponent.prototype, "onDragging", void 0);
        __decorate([
            core.Output()
        ], BreadcrumbComponent.prototype, "onAddNewItem", void 0);
        BreadcrumbComponent = __decorate([
            core.Directive({
                exportAs: 'smart-breadcrumb', selector: 'smart-breadcrumb, [smart-breadcrumb]'
            })
        ], BreadcrumbComponent);
        return BreadcrumbComponent;
    }(BaseElement));

    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule = __decorate([
            core.NgModule({
                declarations: [BreadcrumbComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [BreadcrumbComponent]
            })
        ], BreadcrumbModule);
        return BreadcrumbModule;
    }());

    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-breadcrumb.umd.js.map
