
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.button';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/dropdownbutton', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].dropdownbutton = {}), global.ng.core));
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

    var DropDownButtonComponent = /** @class */ (function (_super) {
        __extends(DropDownButtonComponent, _super);
        function DropDownButtonComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when user clicks on the action button. The action button is visible when the placeholder is set.
            *  @param event. The custom event. 	*/
            _this.onActionButtonClick = new core.EventEmitter();
            /** @description This event is triggered when the drop down is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when user clicks on the drop down button.
            *  @param event. The custom event. 	*/
            _this.onDropDownButtonClick = new core.EventEmitter();
            /** @description This event is triggered when the drop down is opened.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onOpening = new core.EventEmitter();
            /** @description This event is triggered when user starts resizing the drop down.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
            *   position - An object containing the current left and top positions of the drop down.
            */
            _this.onResizeStart = new core.EventEmitter();
            /** @description This event is triggered when user finishes resizing the drop down.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
            *   position - An object containing the current left and top positions of the drop down.
            */
            _this.onResizeEnd = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        DropDownButtonComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-drop-down-button');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(DropDownButtonComponent.prototype, "animation", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "autoCloseDelay", {
            /** @description Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "disabled", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownAppendTo", {
            /** @description Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownButtonPosition", {
            /** @description Determines the position of the drop down button. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownHeight", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMaxHeight", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMaxWidth", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMinHeight", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMinWidth", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownOpenMode", {
            /** @description Determines how the drop down is going to open. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownOverlay", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownPlaceholder", {
            /** @description Sets a placeholder text to appear when there is no content inside the dropdown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPlaceholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownPosition", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "dropDownWidth", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "hint", {
            /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hint : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hint = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "horizontalScrollBarVisibility", {
            /** @description Determines the visibility of the horizontal Scroll bar inside the drop down. */
            get: function () {
                return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "label", {
            /** @description Sets a label above the element. The label is always visible. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "locale", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "messages", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "opened", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "placeholder", {
            /** @description Determines the element's placeholder, displayed in the element's action button container. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "placeholderTemplate", {
            /** @description Determines the element's placeholder template, displayed in the element's action button container. You can pass 'string', 'function' or HTMLTemplateElement as a value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholderTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholderTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "readonly", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "resizeIndicator", {
            /** @description Determines whether the resize indicator in the bottom right corner is visible or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "resizeMode", {
            /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropDownButtonComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "theme", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "unfocusable", {
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
        Object.defineProperty(DropDownButtonComponent.prototype, "verticalScrollBarVisibility", {
            /** @description Determines the visibility of the vertical scroll bar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Appends a new HTML node to the drop down.
        * @param {Node} node. The node to be appended
        * @returns {Node}
      */
        DropDownButtonComponent.prototype.appendChild = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.appendChild(node);
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
        /** @description Closes the dropDown.
        */
        DropDownButtonComponent.prototype.close = function () {
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
        DropDownButtonComponent.prototype.open = function () {
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
        /** @description Removes everything from the drop down.
        */
        DropDownButtonComponent.prototype.removeAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeAll();
                });
            }
        };
        /** @description Removes a child node from the drop down.
        * @param {Node} node. The node to remove.
        * @returns {Node}
      */
        DropDownButtonComponent.prototype.removeChild = function (node) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.removeChild(node);
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
        /** @description Scrolls the drop down to a specific position.
        * @param {number} top. Y axis coordinate
        * @param {number} left. X axis coordinate
        */
        DropDownButtonComponent.prototype.scrollTo = function (top, left) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.scrollTo(top, left);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.scrollTo(top, left);
                });
            }
        };
        Object.defineProperty(DropDownButtonComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        DropDownButtonComponent.prototype.ngOnInit = function () {
        };
        DropDownButtonComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        DropDownButtonComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        DropDownButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        DropDownButtonComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['actionButtonClickHandler'] = function (event) { that.onActionButtonClick.emit(event); };
            that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['dropDownButtonClickHandler'] = function (event) { that.onDropDownButtonClick.emit(event); };
            that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
            that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
            that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        };
        /** @description Remove event listeners. */
        DropDownButtonComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['actionButtonClickHandler']) {
                that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
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
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
            if (that.eventHandlers['resizeStartHandler']) {
                that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            }
            if (that.eventHandlers['resizeEndHandler']) {
                that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            }
        };
        DropDownButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "autoCloseDelay", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownAppendTo", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownButtonPosition", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownHeight", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownMaxHeight", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownMaxWidth", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownMinHeight", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownMinWidth", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownOpenMode", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownOverlay", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownPlaceholder", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "dropDownWidth", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "horizontalScrollBarVisibility", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "placeholderTemplate", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "resizeIndicator", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "resizeMode", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], DropDownButtonComponent.prototype, "verticalScrollBarVisibility", null);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onActionButtonClick", void 0);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onDropDownButtonClick", void 0);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onResizeStart", void 0);
        __decorate([
            core.Output()
        ], DropDownButtonComponent.prototype, "onResizeEnd", void 0);
        DropDownButtonComponent = __decorate([
            core.Directive({
                exportAs: 'smart-drop-down-button', selector: 'smart-drop-down-button, [smart-drop-down-button]'
            })
        ], DropDownButtonComponent);
        return DropDownButtonComponent;
    }(BaseElement));

    var DropDownButtonModule = /** @class */ (function () {
        function DropDownButtonModule() {
        }
        DropDownButtonModule = __decorate([
            core.NgModule({
                declarations: [DropDownButtonComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [DropDownButtonComponent]
            })
        ], DropDownButtonModule);
        return DropDownButtonModule;
    }());

    exports.DropDownButtonComponent = DropDownButtonComponent;
    exports.DropDownButtonModule = DropDownButtonModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-dropdownbutton.umd.js.map
