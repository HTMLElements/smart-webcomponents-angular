
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.button';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/checkbox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].checkbox = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return CheckBoxComponent; }),
        multi: true
    };
    var CheckBoxComponent = /** @class */ (function (_super) {
        __extends(CheckBoxComponent, _super);
        function CheckBoxComponent(ref) {
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
            /** @description This event is triggered when the widget is checked/unchecked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
            *   value - A boolean value indicating the new state of the button ( checked or not ).
            *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
            *   changeType - A string flag indicating whether the change event was triggered via API or an event.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when the widget is checked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
            *   changeType - A string flag indicating whether the change event was triggered via API or an event.
            */
            _this.onCheckValue = new core.EventEmitter();
            /** @description This event is triggered when the widget is unchecked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
            *   changeType - A string flag indicating whether the change event was triggered via API or an event.
            */
            _this.onUncheckValue = new core.EventEmitter();
            _this._initialChange = true;
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        CheckBoxComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-check-box');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(CheckBoxComponent.prototype, "animation", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "checked", {
            /** @description Sets or gets the checked state.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "checkMode", {
            /** @description Determines which part of the element can be used to toggle it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.checkMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checkMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "clickMode", {
            /** @description Sets the click mode of the checkbox. */
            get: function () {
                return this.nativeElement ? this.nativeElement.clickMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.clickMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "disabled", {
            /** @description Enables or disables the checkbox.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "innerHTML", {
            /** @description Sets or gets the elements's innerHTML. */
            get: function () {
                return this.nativeElement ? this.nativeElement.innerHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "locale", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "messages", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "name", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "readonly", {
            /** @description If the element is readonly, users cannot interact with it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "unfocusable", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "theme", {
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
        Object.defineProperty(CheckBoxComponent.prototype, "value", {
            /** @description Sets or gets the value of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        CheckBoxComponent.prototype.ngOnInit = function () {
        };
        CheckBoxComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        CheckBoxComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        Object.defineProperty(CheckBoxComponent.prototype, "ngValue", {
            get: function () {
                if (!this.nativeElement) {
                    return null;
                }
                var value = this.nativeElement.checked;
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
        CheckBoxComponent.prototype.writeValue = function (value) {
            var that = this;
            var normalizedValue = value == null ? '' : value;
            that.nativeElement.whenRendered(function () {
                that.checked = normalizedValue;
                that.value = '' + normalizedValue;
                if (that._initialChange === false) {
                    that._onChange(that.value);
                }
            });
        };
        CheckBoxComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        CheckBoxComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        CheckBoxComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        CheckBoxComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['checkValueHandler'] = function (event) { that.onCheckValue.emit(event); };
            that.nativeElement.addEventListener('checkValue', that.eventHandlers['checkValueHandler']);
            that.eventHandlers['uncheckValueHandler'] = function (event) { that.onUncheckValue.emit(event); };
            that.nativeElement.addEventListener('uncheckValue', that.eventHandlers['uncheckValueHandler']);
            that.eventHandlers['changeModelHandler'] = function (event) {
                that._initialChange = false;
                that._onChange(that.nativeElement.checked);
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
        CheckBoxComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['checkValueHandler']) {
                that.nativeElement.removeEventListener('checkValue', that.eventHandlers['checkValueHandler']);
            }
            if (that.eventHandlers['uncheckValueHandler']) {
                that.nativeElement.removeEventListener('uncheckValue', that.eventHandlers['uncheckValueHandler']);
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
        CheckBoxComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "checked", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "checkMode", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "clickMode", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "innerHTML", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], CheckBoxComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], CheckBoxComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], CheckBoxComponent.prototype, "onCheckValue", void 0);
        __decorate([
            core.Output()
        ], CheckBoxComponent.prototype, "onUncheckValue", void 0);
        CheckBoxComponent = __decorate([
            core.Directive({
                exportAs: 'smart-check-box', selector: 'smart-check-box, [smart-check-box]',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            })
        ], CheckBoxComponent);
        return CheckBoxComponent;
    }(BaseElement));

    var CheckBoxModule = /** @class */ (function () {
        function CheckBoxModule() {
        }
        CheckBoxModule = __decorate([
            core.NgModule({
                declarations: [CheckBoxComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [CheckBoxComponent]
            })
        ], CheckBoxModule);
        return CheckBoxModule;
    }());

    exports.CheckBoxComponent = CheckBoxComponent;
    exports.CheckBoxModule = CheckBoxModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-checkbox.umd.js.map
