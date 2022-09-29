
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.textbox';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/textbox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].textbox = {}), global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

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

    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return TextBoxComponent; }),
        multi: true
    };
    var TextBoxComponent = /** @class */ (function (_super) {
        __extends(TextBoxComponent, _super);
        function TextBoxComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /**
            * @description
            * The registered callback function called when a change event occurs on the form elements.
            */
            _this._onChange = function () { };
            /**
            * @description
            * The registered callback function called when a blur event occurs on the form elements.
            */
            _this._onTouched = function () { };
            /** @description This event is triggered when the value of the Text Box is changed. This happens on blur and if 'Enter' is pressed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
            *   oldValue - The previous value before it was changed.
            *   value - The new value.
            *   type - The type of the event.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered on each key up event of the TextBox, if the value is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
            *   oldValue - The previous value before it was changed.
            *   value - The new value.
            */
            _this.onChanging = new core.EventEmitter();
            _this._initialChange = true;
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        TextBoxComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-text-box');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(TextBoxComponent.prototype, "animation", {
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
        Object.defineProperty(TextBoxComponent.prototype, "autoFocus", {
            /** @description Determines whether the text box will be focused on page load or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoFocus : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoFocus = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "autoComplete", {
            /** @description Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoComplete : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoComplete = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "autoCompleteDelay", {
            /** @description Determines the delay before the drop down opens to show the matches from the auto complete operation. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoCompleteDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dataSource", {
            /** @description Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings, numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "disabled", {
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
        Object.defineProperty(TextBoxComponent.prototype, "displayLoadingIndicator", {
            /** @description Determines whether an indicator will appear during filtering and remote item loading. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "displayMember", {
            /** @description Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "displayMode", {
            /** @description Determines how the characters are displayed inside the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownAppendTo", {
            /** @description Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the drop down will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownHeight", {
            /** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownMaxHeight", {
            /** @description Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMaxHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownMaxWidth", {
            /** @description Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMaxWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownMinHeight", {
            /** @description Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMinHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownMinWidth", {
            /** @description Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownMinWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownOpenMode", {
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
        Object.defineProperty(TextBoxComponent.prototype, "dropDownOverlay", {
            /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the drop down will will target the overlay and not the DOM. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownPlaceholder", {
            /** @description Determines the placeholder for the drop down, displayed when there are no items in it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPlaceholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownPosition", {
            /** @description Determines the position of the drop down when opened. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "dropDownWidth", {
            /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "escKeyMode", {
            /** @description Determines the behavior of the element when Escape key is pressed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.escKeyMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.escKeyMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "enterKeyBehavior", {
            /** @description Specifies the behavior of "Enter" key. */
            get: function () {
                return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enterKeyBehavior = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "form", {
            /** @description The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document. */
            get: function () {
                return this.nativeElement ? this.nativeElement.form : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.form = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "hint", {
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
        Object.defineProperty(TextBoxComponent.prototype, "horizontalScrollBarVisibility", {
            /** @description Determines the visibility of the horizontal Scroll bar thats inside the drop down. */
            get: function () {
                return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "inputMember", {
            /** @description Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inputMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inputMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "inputPurpose", {
            /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "itemHeight", {
            /** @description Sets the height for all list items. Used only when virtualization is enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "itemMeasureMode", {
            /** @description Determines the item width measuring algorithm. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemMeasureMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "items", {
            /** @description A getter that returns an array of all List items inside the drop down. */
            get: function () {
                return this.nativeElement ? this.nativeElement.items : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.items = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "itemTemplate", {
            /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "label", {
            /** @description Sets a little text label above the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "loadingIndicatorPlaceholder", {
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
        Object.defineProperty(TextBoxComponent.prototype, "loadingIndicatorPosition", {
            /** @description Determines the position of the loading indicator. */
            get: function () {
                return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "locale", {
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
        Object.defineProperty(TextBoxComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(TextBoxComponent.prototype, "maxLength", {
            /** @description Sets or gets the maximum number of characters that the user can enter. */
            get: function () {
                return this.nativeElement ? this.nativeElement.maxLength : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.maxLength = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "minLength", {
            /** @description Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. */
            get: function () {
                return this.nativeElement ? this.nativeElement.minLength : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.minLength = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "messages", {
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
        Object.defineProperty(TextBoxComponent.prototype, "name", {
            /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "opened", {
            /** @description Determines whether the drop down is opened or closed */
            get: function () {
                return this.nativeElement ? this.nativeElement.opened : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.opened = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "placeholder", {
            /** @description Determines the input's placeholder. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "readonly", {
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
        Object.defineProperty(TextBoxComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(TextBoxComponent.prototype, "required", {
            /** @description Specifies that the user must fill the input before submitting a form with the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "requiredMessage", {
            /** @description Specifies the message that will appear if required is set and no value is provided in the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.requiredMessage = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "selectAllOnFocus", {
            /** @description Determines whether the content of the input will be selected on focus or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "theme", {
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
        Object.defineProperty(TextBoxComponent.prototype, "unfocusable", {
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
        Object.defineProperty(TextBoxComponent.prototype, "value", {
            /** @description Sets or gets the value of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "valueMember", {
            /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
            get: function () {
                return this.nativeElement ? this.nativeElement.valueMember : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.valueMember = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "verticalScrollBarVisibility", {
            /** @description Determines the visibility of the vertical scroll bar that's inside the drop down. */
            get: function () {
                return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Closes the drop down. The drop down is used only when auto complete is enabled.
        */
        TextBoxComponent.prototype.close = function () {
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
        /** @description Opens the drop down. The drop down is used only when auto complete is enabled.
        */
        TextBoxComponent.prototype.open = function () {
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
        /** @description The method is used to reset the input back to it's initial value.
        */
        TextBoxComponent.prototype.reset = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.reset();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.reset();
                });
            }
        };
        Object.defineProperty(TextBoxComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        TextBoxComponent.prototype.ngOnInit = function () {
        };
        TextBoxComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        TextBoxComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        Object.defineProperty(TextBoxComponent.prototype, "ngValue", {
            get: function () {
                if (!this.nativeElement) {
                    return null;
                }
                var value = this.nativeElement.value;
                return value;
            },
            set: function (value) {
                if (this.nativeElement) {
                    this.writeValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        TextBoxComponent.prototype.writeValue = function (value) {
            var that = this;
            var normalizedValue = value == null ? '' : value;
            that.nativeElement.whenRendered(function () {
                that.value = normalizedValue;
                if (that._initialChange === false) {
                    that._onChange(that.value);
                }
            });
        };
        TextBoxComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        TextBoxComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        TextBoxComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        TextBoxComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['changingHandler'] = function (event) { that.onChanging.emit(event); };
            that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
            that.eventHandlers['changeModelHandler'] = function (event) {
                that._initialChange = false;
                that._onChange(that.nativeElement.value);
            };
            that.eventHandlers['blurModelHandler'] = function (event) {
                that._onTouched();
            };
            that.nativeElement.whenRendered(function () {
                if (that.nativeElement.querySelector('input')) {
                    that.eventHandlers['keyupModelHandler'] = function (event) {
                        setTimeout(function () { that.eventHandlers['changeModelHandler'](event); }, 50);
                    };
                    that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
                }
            });
            that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
            that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
        };
        /** @description Remove event listeners. */
        TextBoxComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['changingHandler']) {
                that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
            }
            if (that.eventHandlers['changeModelHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
                if (that.nativeElement.querySelector('input')) {
                    that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
                }
            }
            if (that.eventHandlers['blurModelHandler']) {
                that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
            }
        };
        TextBoxComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "autoFocus", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "autoComplete", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "autoCompleteDelay", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "displayLoadingIndicator", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "displayMember", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "displayMode", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownAppendTo", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownHeight", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownMaxHeight", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownMaxWidth", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownMinHeight", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownMinWidth", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownOpenMode", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownOverlay", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownPlaceholder", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "dropDownWidth", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "escKeyMode", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "enterKeyBehavior", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "form", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "horizontalScrollBarVisibility", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "inputMember", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "inputPurpose", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "itemHeight", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "itemMeasureMode", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "items", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "loadingIndicatorPlaceholder", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "loadingIndicatorPosition", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "maxLength", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "minLength", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "requiredMessage", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "selectAllOnFocus", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "valueMember", null);
        __decorate([
            core.Input()
        ], TextBoxComponent.prototype, "verticalScrollBarVisibility", null);
        __decorate([
            core.Output()
        ], TextBoxComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], TextBoxComponent.prototype, "onChanging", void 0);
        TextBoxComponent = __decorate([
            core.Directive({
                exportAs: 'smart-text-box', selector: 'smart-text-box, [smart-text-box]',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            })
        ], TextBoxComponent);
        return TextBoxComponent;
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

    var TextBoxModule = /** @class */ (function () {
        function TextBoxModule() {
        }
        TextBoxModule = __decorate([
            core.NgModule({
                declarations: [TextBoxComponent, ListItemComponent, ListItemsGroupComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [TextBoxComponent, ListItemComponent, ListItemsGroupComponent]
            })
        ], TextBoxModule);
        return TextBoxModule;
    }());

    exports.ListItemComponent = ListItemComponent;
    exports.ListItemsGroupComponent = ListItemsGroupComponent;
    exports.Smart = Smart;
    exports.TextBoxComponent = TextBoxComponent;
    exports.TextBoxModule = TextBoxModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-textbox.umd.js.map
