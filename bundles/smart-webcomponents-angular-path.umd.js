
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.path';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/path', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].path = {}), global.ng.core));
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

    var PathComponent = /** @class */ (function (_super) {
        __extends(PathComponent, _super);
        function PathComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when user clicks on the browse button.
            *  @param event. The custom event. 	*/
            _this.onBrowseButtonClick = new core.EventEmitter();
            /** @description This event is triggered when the value is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when the drop down is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the drop down is closing.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when user clicks on the drop down button.
            *  @param event. The custom event. 	*/
            _this.onDropDownButtonClick = new core.EventEmitter();
            /** @description This event is triggered when an item from the popup is clicked.
            *  @param event. The custom event. 	*/
            _this.onItemClick = new core.EventEmitter();
            /** @description This event is triggered when the drop down is opened.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when the drop down is opening.
            *  @param event. The custom event. 	*/
            _this.onOpening = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        PathComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-path');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(PathComponent.prototype, "animation", {
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
        Object.defineProperty(PathComponent.prototype, "dataSource", {
            /** @description Determines the data source for the item that will be displayed inside the drop down. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "disabled", {
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
        Object.defineProperty(PathComponent.prototype, "displayMember", {
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
        Object.defineProperty(PathComponent.prototype, "dropDownAppendTo", {
            /** @description Sets the parent container of the dropDown (the popup). Used when a CSS property of unknown parent is interfering with the visibility of the dropDown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "dropDownHeight", {
            /** @description Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "dropDownMaxHeight", {
            /** @description Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMaxHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "dropDownMaxWidth", {
            /** @description Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMaxWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "dropDownMinHeight", {
            /** @description Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMinHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "dropDownMinWidth", {
            /** @description Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMinWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "dropDownOverlay", {
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
        Object.defineProperty(PathComponent.prototype, "dropDownPosition", {
            /** @description Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "dropDownWidth", {
            /** @description Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "hint", {
            /** @description Sets additional helper text below the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.hint : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hint = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "indicator", {
            /** @description Sets the element as an indicator. */
            get: function () {
                return this.nativeElement ? this.nativeElement.indicator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indicator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "items", {
            /** @description A getter that returns an array of all Path items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.items : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.items = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "label", {
            /** @description Sets label above the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "locale", {
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
        Object.defineProperty(PathComponent.prototype, "messages", {
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
        Object.defineProperty(PathComponent.prototype, "name", {
            /** @description The name of the control. */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "opened", {
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
        Object.defineProperty(PathComponent.prototype, "placeholder", {
            /** @description Determines the element's placeholder. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "pathFormat", {
            /** @description Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.pathFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pathFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "readonly", {
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
        Object.defineProperty(PathComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(PathComponent.prototype, "theme", {
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
        Object.defineProperty(PathComponent.prototype, "unfocusable", {
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
        Object.defineProperty(PathComponent.prototype, "value", {
            /** @description The value of the Path control. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PathComponent.prototype, "valueMember", {
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
        Object.defineProperty(PathComponent.prototype, "wrap", {
            /** @description Determines whether or not the element wraps to a new line if overflows. If set the Path can be wrapped on multiple lines.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.wrap : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.wrap = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Closes the dropDown.
        */
        PathComponent.prototype.close = function () {
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
        /** @description Opens the dropDown.
        */
        PathComponent.prototype.open = function () {
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
        /** @description Set's the Path element to 'emptyPath' state and changes the value to '////'.
        */
        PathComponent.prototype.setToEmptyPath = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setToEmptyPath();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setToEmptyPath();
                });
            }
        };
        /** @description Set's the Path element to 'notAPath' state and changes the value to '//'.
        */
        PathComponent.prototype.setToNotAPath = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.setToNotAPath();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.setToNotAPath();
                });
            }
        };
        Object.defineProperty(PathComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        PathComponent.prototype.ngOnInit = function () {
        };
        PathComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        PathComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        PathComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        PathComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['browseButtonClickHandler'] = function (event) { that.onBrowseButtonClick.emit(event); };
            that.nativeElement.addEventListener('browseButtonClick', that.eventHandlers['browseButtonClickHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['dropDownButtonClickHandler'] = function (event) { that.onDropDownButtonClick.emit(event); };
            that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
            that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
            that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        };
        /** @description Remove event listeners. */
        PathComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['browseButtonClickHandler']) {
                that.nativeElement.removeEventListener('browseButtonClick', that.eventHandlers['browseButtonClickHandler']);
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
            if (that.eventHandlers['dropDownButtonClickHandler']) {
                that.nativeElement.removeEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
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
        PathComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], PathComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "displayMember", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownAppendTo", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownHeight", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownMaxHeight", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownMaxWidth", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownMinHeight", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownMinWidth", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownOverlay", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "dropDownWidth", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "indicator", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "pathFormat", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "valueMember", null);
        __decorate([
            core.Input()
        ], PathComponent.prototype, "wrap", null);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onBrowseButtonClick", void 0);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onDropDownButtonClick", void 0);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], PathComponent.prototype, "onOpening", void 0);
        PathComponent = __decorate([
            core.Directive({
                exportAs: 'smart-path', selector: 'smart-path, [smart-path]'
            })
        ], PathComponent);
        return PathComponent;
    }(BaseElement));

    var PathModule = /** @class */ (function () {
        function PathModule() {
        }
        PathModule = __decorate([
            core.NgModule({
                declarations: [PathComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [PathComponent]
            })
        ], PathModule);
        return PathModule;
    }());

    exports.PathComponent = PathComponent;
    exports.PathModule = PathModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-path.umd.js.map
