
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.bootstrap';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/bootstrap', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].bootstrap = {}), global.ng.core));
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

    var BootstrapButtonComponent = /** @class */ (function (_super) {
        __extends(BootstrapButtonComponent, _super);
        function BootstrapButtonComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Click event.
            *  @param event. The custom event. 	*/
            _this.onClick = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapButtonComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-button');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapButtonComponent.prototype, "disabled", {
            /** @description Enables or disables the button.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapButtonComponent.prototype, "innerHTML", {
            /** @description Sets the inner HTML of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.innerHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapButtonComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapButtonComponent.prototype, "outlined", {
            /** @description Outlines the button.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.outlined : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.outlined = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapButtonComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the button. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapButtonComponent.prototype, "sizeMode", {
            /** @description Sets or gets the size mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapButtonComponent.prototype, "type", {
            /** @description Sets or gets the type of the button. */
            get: function () {
                return this.nativeElement ? this.nativeElement.type : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.type = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapButtonComponent.prototype, "value", {
            /** @description Sets or gets the button's value.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapButtonComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapButtonComponent.prototype.ngOnInit = function () {
        };
        BootstrapButtonComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapButtonComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapButtonComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['clickHandler'] = function (event) { that.onClick.emit(event); };
            that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapButtonComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['clickHandler']) {
                that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
            }
        };
        BootstrapButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "innerHTML", null);
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "outlined", null);
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "sizeMode", null);
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "type", null);
        __decorate([
            core.Input()
        ], BootstrapButtonComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapButtonComponent.prototype, "onClick", void 0);
        BootstrapButtonComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-button', selector: 'bootstrap-button, [bootstrap-button]'
            })
        ], BootstrapButtonComponent);
        return BootstrapButtonComponent;
    }(BaseElement));

    var BootstrapCheckBoxComponent = /** @class */ (function (_super) {
        __extends(BootstrapCheckBoxComponent, _super);
        function BootstrapCheckBoxComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the checkbox is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapCheckBoxComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-check-box');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "checked", {
            /** @description Gets or sets the checked state of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "indeterminate", {
            /** @description Gets or sets whether the element is in indeterminate state.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.indeterminate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "innerHTML", {
            /** @description Sets the inner HTML of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.innerHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "required", {
            /** @description Gets or sets whether the element is required.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Toggles the checkbox
        */
        BootstrapCheckBoxComponent.prototype.toggle = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggle();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggle();
                });
            }
        };
        Object.defineProperty(BootstrapCheckBoxComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapCheckBoxComponent.prototype.ngOnInit = function () {
        };
        BootstrapCheckBoxComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapCheckBoxComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapCheckBoxComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapCheckBoxComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapCheckBoxComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapCheckBoxComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapCheckBoxComponent.prototype, "checked", null);
        __decorate([
            core.Input()
        ], BootstrapCheckBoxComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapCheckBoxComponent.prototype, "indeterminate", null);
        __decorate([
            core.Input()
        ], BootstrapCheckBoxComponent.prototype, "innerHTML", null);
        __decorate([
            core.Input()
        ], BootstrapCheckBoxComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapCheckBoxComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], BootstrapCheckBoxComponent.prototype, "styleMode", null);
        __decorate([
            core.Output()
        ], BootstrapCheckBoxComponent.prototype, "onChange", void 0);
        BootstrapCheckBoxComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-check-box', selector: 'bootstrap-check-box, [bootstrap-check-box]'
            })
        ], BootstrapCheckBoxComponent);
        return BootstrapCheckBoxComponent;
    }(BaseElement));

    var BootstrapCircularComponent = /** @class */ (function (_super) {
        __extends(BootstrapCircularComponent, _super);
        function BootstrapCircularComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapCircularComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-circular');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapCircularComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCircularComponent.prototype, "name", {
            /** @description Sets the name of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCircularComponent.prototype, "min", {
            /** @description Sets or gets the min value */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCircularComponent.prototype, "max", {
            /** @description Sets or gets the max value */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCircularComponent.prototype, "striped", {
            /** @description Sets whether stripes are displayed in the progress.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.striped : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.striped = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCircularComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the button. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCircularComponent.prototype, "value", {
            /** @description Sets or gets the value */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapCircularComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapCircularComponent.prototype.ngOnInit = function () {
        };
        BootstrapCircularComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapCircularComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapCircularComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapCircularComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapCircularComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapCircularComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapCircularComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapCircularComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapCircularComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], BootstrapCircularComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], BootstrapCircularComponent.prototype, "striped", null);
        __decorate([
            core.Input()
        ], BootstrapCircularComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapCircularComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapCircularComponent.prototype, "onChange", void 0);
        BootstrapCircularComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-circular', selector: 'bootstrap-circular, [bootstrap-circular]'
            })
        ], BootstrapCircularComponent);
        return BootstrapCircularComponent;
    }(BaseElement));

    var BootstrapDropDownComponent = /** @class */ (function (_super) {
        __extends(BootstrapDropDownComponent, _super);
        function BootstrapDropDownComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Show event is triggered when the dropdown is going to show.
            *  @param event. The custom event. 	*/
            _this.onShow = new core.EventEmitter();
            /** @description Shown event is triggered when the dropdown is shown.
            *  @param event. The custom event. 	*/
            _this.onShown = new core.EventEmitter();
            /** @description Hide event is triggered when the dropdown is going to be hidden.
            *  @param event. The custom event. 	*/
            _this.onHide = new core.EventEmitter();
            /** @description Hidden event is triggered when the dropdown is hidden
            *  @param event. The custom event. 	*/
            _this.onHidden = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapDropDownComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-drop-down');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapDropDownComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "dropDownPosition", {
            /** @description Sets or gets the drop down position of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "label", {
            /** @description Sets or gets the Label of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "labelType", {
            /** @description Sets or gets the Label type of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "href", {
            /** @description Sets or gets the Href of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.href : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.href = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapDropDownComponent.prototype, "opened", {
            /** @description Gets or sets whether the dropdown is opened.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.opened : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.opened = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "outlined", {
            /** @description Gets or sets whether the dropdown is outlined.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.outlined : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.outlined = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDropDownComponent.prototype, "sizeMode", {
            /** @description Sets or gets the size mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Toggles the dropdown visibility
        */
        BootstrapDropDownComponent.prototype.toggle = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggle();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggle();
                });
            }
        };
        /** @description Shows the dropdown
        */
        BootstrapDropDownComponent.prototype.show = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.show();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.show();
                });
            }
        };
        /** @description Hides the dropdown
        */
        BootstrapDropDownComponent.prototype.hide = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hide();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hide();
                });
            }
        };
        Object.defineProperty(BootstrapDropDownComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapDropDownComponent.prototype.ngOnInit = function () {
        };
        BootstrapDropDownComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapDropDownComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapDropDownComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapDropDownComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
            that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
            that.eventHandlers['shownHandler'] = function (event) { that.onShown.emit(event); };
            that.nativeElement.addEventListener('shown', that.eventHandlers['shownHandler']);
            that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
            that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
            that.eventHandlers['hiddenHandler'] = function (event) { that.onHidden.emit(event); };
            that.nativeElement.addEventListener('hidden', that.eventHandlers['hiddenHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapDropDownComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['showHandler']) {
                that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
            }
            if (that.eventHandlers['shownHandler']) {
                that.nativeElement.removeEventListener('shown', that.eventHandlers['shownHandler']);
            }
            if (that.eventHandlers['hideHandler']) {
                that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
            }
            if (that.eventHandlers['hiddenHandler']) {
                that.nativeElement.removeEventListener('hidden', that.eventHandlers['hiddenHandler']);
            }
        };
        BootstrapDropDownComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "labelType", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "href", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "outlined", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapDropDownComponent.prototype, "sizeMode", null);
        __decorate([
            core.Output()
        ], BootstrapDropDownComponent.prototype, "onShow", void 0);
        __decorate([
            core.Output()
        ], BootstrapDropDownComponent.prototype, "onShown", void 0);
        __decorate([
            core.Output()
        ], BootstrapDropDownComponent.prototype, "onHide", void 0);
        __decorate([
            core.Output()
        ], BootstrapDropDownComponent.prototype, "onHidden", void 0);
        BootstrapDropDownComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-drop-down', selector: 'bootstrap-drop-down, [bootstrap-drop-down]'
            })
        ], BootstrapDropDownComponent);
        return BootstrapDropDownComponent;
    }(BaseElement));

    var BootstrapFileInputComponent = /** @class */ (function (_super) {
        __extends(BootstrapFileInputComponent, _super);
        function BootstrapFileInputComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapFileInputComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-file-input');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapFileInputComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapFileInputComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapFileInputComponent.prototype, "placeholder", {
            /** @description Gets or sets the placeholder of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapFileInputComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapFileInputComponent.prototype, "value", {
            /** @description Gets or sets the value of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapFileInputComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapFileInputComponent.prototype.ngOnInit = function () {
        };
        BootstrapFileInputComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapFileInputComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapFileInputComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapFileInputComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapFileInputComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapFileInputComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapFileInputComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapFileInputComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapFileInputComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], BootstrapFileInputComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapFileInputComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapFileInputComponent.prototype, "onChange", void 0);
        BootstrapFileInputComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-file-input', selector: 'bootstrap-file-input, [bootstrap-file-input]'
            })
        ], BootstrapFileInputComponent);
        return BootstrapFileInputComponent;
    }(BaseElement));

    var BootstrapInputComponent = /** @class */ (function (_super) {
        __extends(BootstrapInputComponent, _super);
        function BootstrapInputComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapInputComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-input');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapInputComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputComponent.prototype, "filled", {
            /** @description Gets or sets whether the element is filled.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.filled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapInputComponent.prototype, "outlined", {
            /** @description Gets or sets whether the element is outlined.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.outlined : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.outlined = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputComponent.prototype, "placeholder", {
            /** @description Gets or sets the placeholder of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputComponent.prototype, "required", {
            /** @description Gets or sets whether the element is required.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputComponent.prototype, "value", {
            /** @description Gets or sets the value of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapInputComponent.prototype.ngOnInit = function () {
        };
        BootstrapInputComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapInputComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapInputComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapInputComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapInputComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapInputComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "filled", null);
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "outlined", null);
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapInputComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapInputComponent.prototype, "onChange", void 0);
        BootstrapInputComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-input', selector: 'bootstrap-input, [bootstrap-input]'
            })
        ], BootstrapInputComponent);
        return BootstrapInputComponent;
    }(BaseElement));

    var BootstrapInputGroupComponent = /** @class */ (function (_super) {
        __extends(BootstrapInputGroupComponent, _super);
        function BootstrapInputGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Click event.
            *  @param event. The custom event. 	*/
            _this.onClick = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapInputGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-input-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "contentBefore", {
            /** @description Sets the content before the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.contentBefore : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.contentBefore = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "contentAfter", {
            /** @description Sets the content after the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.contentAfter : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.contentAfter = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "noWrap", {
            /** @description Enables or disables the wrapping.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.noWrap : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.noWrap = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the input group. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "sizeMode", {
            /** @description Sets or gets the size mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "type", {
            /** @description Sets or gets the type of the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.type : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.type = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "placeholder", {
            /** @description Sets the placeholder of the input. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "value", {
            /** @description Sets or gets the button's value.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapInputGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapInputGroupComponent.prototype.ngOnInit = function () {
        };
        BootstrapInputGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapInputGroupComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapInputGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapInputGroupComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['clickHandler'] = function (event) { that.onClick.emit(event); };
            that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapInputGroupComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['clickHandler']) {
                that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
            }
        };
        BootstrapInputGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "contentBefore", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "contentAfter", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "noWrap", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "sizeMode", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "type", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], BootstrapInputGroupComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapInputGroupComponent.prototype, "onClick", void 0);
        BootstrapInputGroupComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-input-group', selector: 'bootstrap-input-group, [bootstrap-input-group]'
            })
        ], BootstrapInputGroupComponent);
        return BootstrapInputGroupComponent;
    }(BaseElement));

    var BootstrapModalComponent = /** @class */ (function (_super) {
        __extends(BootstrapModalComponent, _super);
        function BootstrapModalComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Show event is triggered when the modal is going to show.
            *  @param event. The custom event. 	*/
            _this.onShow = new core.EventEmitter();
            /** @description Hide event is triggered when the modal is going to be hidden.
            *  @param event. The custom event. 	*/
            _this.onHide = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapModalComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-modal');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapModalComponent.prototype, "backdrop", {
            /** @description Clicking on the modal “backdrop” will automatically close the modal.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.backdrop : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.backdrop = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapModalComponent.prototype, "centered", {
            /** @description Sets or gets whether the modal is centered.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.centered : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.centered = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapModalComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapModalComponent.prototype, "opened", {
            /** @description Gets or sets whether the modal is opened.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.opened : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.opened = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapModalComponent.prototype, "scrollable", {
            /** @description Gets or sets whether the modal is scrollable.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrollable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrollable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapModalComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapModalComponent.prototype, "sizeMode", {
            /** @description Sets or gets the size mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Toggles the modal visibility
        */
        BootstrapModalComponent.prototype.toggle = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggle();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggle();
                });
            }
        };
        /** @description Shows the modal
        */
        BootstrapModalComponent.prototype.show = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.show();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.show();
                });
            }
        };
        /** @description Hides the modal
        */
        BootstrapModalComponent.prototype.hide = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hide();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hide();
                });
            }
        };
        Object.defineProperty(BootstrapModalComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapModalComponent.prototype.ngOnInit = function () {
        };
        BootstrapModalComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapModalComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapModalComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapModalComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
            that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
            that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
            that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapModalComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['showHandler']) {
                that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
            }
            if (that.eventHandlers['hideHandler']) {
                that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
            }
        };
        BootstrapModalComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapModalComponent.prototype, "backdrop", null);
        __decorate([
            core.Input()
        ], BootstrapModalComponent.prototype, "centered", null);
        __decorate([
            core.Input()
        ], BootstrapModalComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapModalComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], BootstrapModalComponent.prototype, "scrollable", null);
        __decorate([
            core.Input()
        ], BootstrapModalComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapModalComponent.prototype, "sizeMode", null);
        __decorate([
            core.Output()
        ], BootstrapModalComponent.prototype, "onShow", void 0);
        __decorate([
            core.Output()
        ], BootstrapModalComponent.prototype, "onHide", void 0);
        BootstrapModalComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-modal', selector: 'bootstrap-modal, [bootstrap-modal]'
            })
        ], BootstrapModalComponent);
        return BootstrapModalComponent;
    }(BaseElement));

    var BootstrapProgressBarComponent = /** @class */ (function (_super) {
        __extends(BootstrapProgressBarComponent, _super);
        function BootstrapProgressBarComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapProgressBarComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-progress-bar');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "name", {
            /** @description Sets the name of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "min", {
            /** @description Sets or gets the min value */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "max", {
            /** @description Sets or gets the max value */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "striped", {
            /** @description Sets whether stripes are displayed in the progress.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.striped : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.striped = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the button. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "value", {
            /** @description Sets or gets the value */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapProgressBarComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapProgressBarComponent.prototype.ngOnInit = function () {
        };
        BootstrapProgressBarComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapProgressBarComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapProgressBarComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapProgressBarComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapProgressBarComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapProgressBarComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapProgressBarComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapProgressBarComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapProgressBarComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], BootstrapProgressBarComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], BootstrapProgressBarComponent.prototype, "striped", null);
        __decorate([
            core.Input()
        ], BootstrapProgressBarComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapProgressBarComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapProgressBarComponent.prototype, "onChange", void 0);
        BootstrapProgressBarComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-progress-bar', selector: 'bootstrap-progress-bar, [bootstrap-progress-bar]'
            })
        ], BootstrapProgressBarComponent);
        return BootstrapProgressBarComponent;
    }(BaseElement));

    var BootstrapRadioButtonComponent = /** @class */ (function (_super) {
        __extends(BootstrapRadioButtonComponent, _super);
        function BootstrapRadioButtonComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapRadioButtonComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-radio-button');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapRadioButtonComponent.prototype, "checked", {
            /** @description Gets or sets the checked state of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRadioButtonComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRadioButtonComponent.prototype, "indeterminate", {
            /** @description Gets or sets whether the element is in indeterminate state.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.indeterminate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRadioButtonComponent.prototype, "innerHTML", {
            /** @description Sets the inner HTML of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.innerHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRadioButtonComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapRadioButtonComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Toggles the element
        */
        BootstrapRadioButtonComponent.prototype.toggle = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggle();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggle();
                });
            }
        };
        Object.defineProperty(BootstrapRadioButtonComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapRadioButtonComponent.prototype.ngOnInit = function () {
        };
        BootstrapRadioButtonComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapRadioButtonComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapRadioButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapRadioButtonComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapRadioButtonComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapRadioButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapRadioButtonComponent.prototype, "checked", null);
        __decorate([
            core.Input()
        ], BootstrapRadioButtonComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapRadioButtonComponent.prototype, "indeterminate", null);
        __decorate([
            core.Input()
        ], BootstrapRadioButtonComponent.prototype, "innerHTML", null);
        __decorate([
            core.Input()
        ], BootstrapRadioButtonComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapRadioButtonComponent.prototype, "styleMode", null);
        __decorate([
            core.Output()
        ], BootstrapRadioButtonComponent.prototype, "onChange", void 0);
        BootstrapRadioButtonComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-radio-button', selector: 'bootstrap-radio-button, [bootstrap-radio-button]'
            })
        ], BootstrapRadioButtonComponent);
        return BootstrapRadioButtonComponent;
    }(BaseElement));

    var BootstrapRangeComponent = /** @class */ (function (_super) {
        __extends(BootstrapRangeComponent, _super);
        function BootstrapRangeComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapRangeComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-range');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapRangeComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRangeComponent.prototype, "name", {
            /** @description Sets the name of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRangeComponent.prototype, "min", {
            /** @description Sets or gets the min value */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRangeComponent.prototype, "max", {
            /** @description Sets or gets the max value */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRangeComponent.prototype, "value", {
            /** @description Sets or gets the value */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapRangeComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapRangeComponent.prototype.ngOnInit = function () {
        };
        BootstrapRangeComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapRangeComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapRangeComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapRangeComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapRangeComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapRangeComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapRangeComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapRangeComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapRangeComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], BootstrapRangeComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], BootstrapRangeComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapRangeComponent.prototype, "onChange", void 0);
        BootstrapRangeComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-range', selector: 'bootstrap-range, [bootstrap-range]'
            })
        ], BootstrapRangeComponent);
        return BootstrapRangeComponent;
    }(BaseElement));

    var BootstrapSplitButtonComponent = /** @class */ (function (_super) {
        __extends(BootstrapSplitButtonComponent, _super);
        function BootstrapSplitButtonComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Show event is triggered when the dropdown is going to show.
            *  @param event. The custom event. 	*/
            _this.onShow = new core.EventEmitter();
            /** @description Shown event is triggered when the dropdown is shown.
            *  @param event. The custom event. 	*/
            _this.onShown = new core.EventEmitter();
            /** @description Hide event is triggered when the dropdown is going to be hidden.
            *  @param event. The custom event. 	*/
            _this.onHide = new core.EventEmitter();
            /** @description Hidden event is triggered when the dropdown is hidden
            *  @param event. The custom event. 	*/
            _this.onHidden = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapSplitButtonComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-split-button');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "dropDownPosition", {
            /** @description Sets or gets the drop down position of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "label", {
            /** @description Sets or gets the Label of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "labelType", {
            /** @description Sets or gets the Label type of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "href", {
            /** @description Sets or gets the Href of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.href : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.href = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "opened", {
            /** @description Gets or sets whether the dropdown is opened.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.opened : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.opened = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "outlined", {
            /** @description Gets or sets whether the dropdown is outlined.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.outlined : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.outlined = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "sizeMode", {
            /** @description Sets or gets the size mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Toggles the dropdown visibility
        */
        BootstrapSplitButtonComponent.prototype.toggle = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggle();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggle();
                });
            }
        };
        /** @description Shows the dropdown
        */
        BootstrapSplitButtonComponent.prototype.show = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.show();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.show();
                });
            }
        };
        /** @description Hides the dropdown
        */
        BootstrapSplitButtonComponent.prototype.hide = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hide();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hide();
                });
            }
        };
        Object.defineProperty(BootstrapSplitButtonComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapSplitButtonComponent.prototype.ngOnInit = function () {
        };
        BootstrapSplitButtonComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapSplitButtonComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapSplitButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapSplitButtonComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
            that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
            that.eventHandlers['shownHandler'] = function (event) { that.onShown.emit(event); };
            that.nativeElement.addEventListener('shown', that.eventHandlers['shownHandler']);
            that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
            that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
            that.eventHandlers['hiddenHandler'] = function (event) { that.onHidden.emit(event); };
            that.nativeElement.addEventListener('hidden', that.eventHandlers['hiddenHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapSplitButtonComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['showHandler']) {
                that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
            }
            if (that.eventHandlers['shownHandler']) {
                that.nativeElement.removeEventListener('shown', that.eventHandlers['shownHandler']);
            }
            if (that.eventHandlers['hideHandler']) {
                that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
            }
            if (that.eventHandlers['hiddenHandler']) {
                that.nativeElement.removeEventListener('hidden', that.eventHandlers['hiddenHandler']);
            }
        };
        BootstrapSplitButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "labelType", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "href", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "outlined", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapSplitButtonComponent.prototype, "sizeMode", null);
        __decorate([
            core.Output()
        ], BootstrapSplitButtonComponent.prototype, "onShow", void 0);
        __decorate([
            core.Output()
        ], BootstrapSplitButtonComponent.prototype, "onShown", void 0);
        __decorate([
            core.Output()
        ], BootstrapSplitButtonComponent.prototype, "onHide", void 0);
        __decorate([
            core.Output()
        ], BootstrapSplitButtonComponent.prototype, "onHidden", void 0);
        BootstrapSplitButtonComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-split-button', selector: 'bootstrap-split-button, [bootstrap-split-button]'
            })
        ], BootstrapSplitButtonComponent);
        return BootstrapSplitButtonComponent;
    }(BaseElement));

    var BootstrapSwitchButtonComponent = /** @class */ (function (_super) {
        __extends(BootstrapSwitchButtonComponent, _super);
        function BootstrapSwitchButtonComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapSwitchButtonComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-switch-button');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "checked", {
            /** @description Gets or sets the checked state of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "indeterminate", {
            /** @description Gets or sets whether the element is in indeterminate state.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.indeterminate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "innerHTML", {
            /** @description Sets the inner HTML of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.innerHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "required", {
            /** @description Gets or sets whether the element is required.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Toggles the element
        */
        BootstrapSwitchButtonComponent.prototype.toggle = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggle();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggle();
                });
            }
        };
        Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapSwitchButtonComponent.prototype.ngOnInit = function () {
        };
        BootstrapSwitchButtonComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapSwitchButtonComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapSwitchButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapSwitchButtonComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapSwitchButtonComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapSwitchButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapSwitchButtonComponent.prototype, "checked", null);
        __decorate([
            core.Input()
        ], BootstrapSwitchButtonComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapSwitchButtonComponent.prototype, "indeterminate", null);
        __decorate([
            core.Input()
        ], BootstrapSwitchButtonComponent.prototype, "innerHTML", null);
        __decorate([
            core.Input()
        ], BootstrapSwitchButtonComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapSwitchButtonComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], BootstrapSwitchButtonComponent.prototype, "styleMode", null);
        __decorate([
            core.Output()
        ], BootstrapSwitchButtonComponent.prototype, "onChange", void 0);
        BootstrapSwitchButtonComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-switch-button', selector: 'bootstrap-switch-button, [bootstrap-switch-button]'
            })
        ], BootstrapSwitchButtonComponent);
        return BootstrapSwitchButtonComponent;
    }(BaseElement));

    var BootstrapTabsComponent = /** @class */ (function (_super) {
        __extends(BootstrapTabsComponent, _super);
        function BootstrapTabsComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Show event.
            *  @param event. The custom event. 	*/
            _this.onShow = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapTabsComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-tabs');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapTabsComponent.prototype, "alignment", {
            /** @description Sets the tabs alignment */
            get: function () {
                return this.nativeElement ? this.nativeElement.alignment : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.alignment = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTabsComponent.prototype, "disabled", {
            /** @description Enables or disables the tabs.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTabsComponent.prototype, "fill", {
            /** @description Sets the tabs fill */
            get: function () {
                return this.nativeElement ? this.nativeElement.fill : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.fill = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTabsComponent.prototype, "justified", {
            /** @description Sets the tabs justified */
            get: function () {
                return this.nativeElement ? this.nativeElement.justified : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.justified = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTabsComponent.prototype, "listType", {
            /** @description Sets or gets the tab type. */
            get: function () {
                return this.nativeElement ? this.nativeElement.listType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.listType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTabsComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the tabs. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTabsComponent.prototype, "sizeMode", {
            /** @description Sets or gets the size mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTabsComponent.prototype, "tabType", {
            /** @description Sets or gets the tab type . */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Shows an item
        * @param {HTMLElement} item. The tab item to be shown.
        */
        BootstrapTabsComponent.prototype.show = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.show(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.show(item);
                });
            }
        };
        Object.defineProperty(BootstrapTabsComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapTabsComponent.prototype.ngOnInit = function () {
        };
        BootstrapTabsComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapTabsComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapTabsComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapTabsComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
            that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapTabsComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['showHandler']) {
                that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
            }
        };
        BootstrapTabsComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "alignment", null);
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "fill", null);
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "justified", null);
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "listType", null);
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "sizeMode", null);
        __decorate([
            core.Input()
        ], BootstrapTabsComponent.prototype, "tabType", null);
        __decorate([
            core.Output()
        ], BootstrapTabsComponent.prototype, "onShow", void 0);
        BootstrapTabsComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-tabs', selector: 'bootstrap-tabs, [bootstrap-tabs]'
            })
        ], BootstrapTabsComponent);
        return BootstrapTabsComponent;
    }(BaseElement));

    var BootstrapTextareaComponent = /** @class */ (function (_super) {
        __extends(BootstrapTextareaComponent, _super);
        function BootstrapTextareaComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapTextareaComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-textarea');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapTextareaComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTextareaComponent.prototype, "filled", {
            /** @description Gets or sets whether the element is filled.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.filled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.filled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTextareaComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapTextareaComponent.prototype, "outlined", {
            /** @description Gets or sets whether the element is outlined.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.outlined : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.outlined = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTextareaComponent.prototype, "placeholder", {
            /** @description Gets or sets the placeholder of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTextareaComponent.prototype, "required", {
            /** @description Gets or sets whether the element is required.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTextareaComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTextareaComponent.prototype, "value", {
            /** @description Gets or sets the value of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapTextareaComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapTextareaComponent.prototype.ngOnInit = function () {
        };
        BootstrapTextareaComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapTextareaComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapTextareaComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapTextareaComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapTextareaComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapTextareaComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "filled", null);
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "outlined", null);
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "styleMode", null);
        __decorate([
            core.Input()
        ], BootstrapTextareaComponent.prototype, "value", null);
        __decorate([
            core.Output()
        ], BootstrapTextareaComponent.prototype, "onChange", void 0);
        BootstrapTextareaComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-textarea', selector: 'bootstrap-textarea, [bootstrap-textarea]'
            })
        ], BootstrapTextareaComponent);
        return BootstrapTextareaComponent;
    }(BaseElement));

    var BootstrapToggleButtonComponent = /** @class */ (function (_super) {
        __extends(BootstrapToggleButtonComponent, _super);
        function BootstrapToggleButtonComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description Change event is triggered when the value of the element is changed.
            *  @param event. The custom event. 	*/
            _this.onChange = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        BootstrapToggleButtonComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('bootstrap-toggle-button');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(BootstrapToggleButtonComponent.prototype, "checked", {
            /** @description Gets or sets the checked state of the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.checked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.checked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapToggleButtonComponent.prototype, "disabled", {
            /** @description Enables or disables the element.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapToggleButtonComponent.prototype, "indeterminate", {
            /** @description Gets or sets whether the element is in indeterminate state.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.indeterminate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapToggleButtonComponent.prototype, "innerHTML", {
            /** @description Sets the inner HTML of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.innerHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapToggleButtonComponent.prototype, "name", {
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
        Object.defineProperty(BootstrapToggleButtonComponent.prototype, "styleMode", {
            /** @description Sets or gets the style mode of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.styleMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.styleMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Toggles the element
        */
        BootstrapToggleButtonComponent.prototype.toggle = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.toggle();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.toggle();
                });
            }
        };
        Object.defineProperty(BootstrapToggleButtonComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        BootstrapToggleButtonComponent.prototype.ngOnInit = function () {
        };
        BootstrapToggleButtonComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        BootstrapToggleButtonComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        BootstrapToggleButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        BootstrapToggleButtonComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        };
        /** @description Remove event listeners. */
        BootstrapToggleButtonComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
        };
        BootstrapToggleButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BootstrapToggleButtonComponent.prototype, "checked", null);
        __decorate([
            core.Input()
        ], BootstrapToggleButtonComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], BootstrapToggleButtonComponent.prototype, "indeterminate", null);
        __decorate([
            core.Input()
        ], BootstrapToggleButtonComponent.prototype, "innerHTML", null);
        __decorate([
            core.Input()
        ], BootstrapToggleButtonComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], BootstrapToggleButtonComponent.prototype, "styleMode", null);
        __decorate([
            core.Output()
        ], BootstrapToggleButtonComponent.prototype, "onChange", void 0);
        BootstrapToggleButtonComponent = __decorate([
            core.Directive({
                exportAs: 'bootstrap-toggle-button', selector: 'bootstrap-toggle-button, [bootstrap-toggle-button]'
            })
        ], BootstrapToggleButtonComponent);
        return BootstrapToggleButtonComponent;
    }(BaseElement));

    var BootstrapModule = /** @class */ (function () {
        function BootstrapModule() {
        }
        BootstrapModule = __decorate([
            core.NgModule({
                declarations: [BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent]
            })
        ], BootstrapModule);
        return BootstrapModule;
    }());

    exports.BootstrapButtonComponent = BootstrapButtonComponent;
    exports.BootstrapCheckBoxComponent = BootstrapCheckBoxComponent;
    exports.BootstrapCircularComponent = BootstrapCircularComponent;
    exports.BootstrapDropDownComponent = BootstrapDropDownComponent;
    exports.BootstrapFileInputComponent = BootstrapFileInputComponent;
    exports.BootstrapInputComponent = BootstrapInputComponent;
    exports.BootstrapInputGroupComponent = BootstrapInputGroupComponent;
    exports.BootstrapModalComponent = BootstrapModalComponent;
    exports.BootstrapModule = BootstrapModule;
    exports.BootstrapProgressBarComponent = BootstrapProgressBarComponent;
    exports.BootstrapRadioButtonComponent = BootstrapRadioButtonComponent;
    exports.BootstrapRangeComponent = BootstrapRangeComponent;
    exports.BootstrapSplitButtonComponent = BootstrapSplitButtonComponent;
    exports.BootstrapSwitchButtonComponent = BootstrapSwitchButtonComponent;
    exports.BootstrapTabsComponent = BootstrapTabsComponent;
    exports.BootstrapTextareaComponent = BootstrapTextareaComponent;
    exports.BootstrapToggleButtonComponent = BootstrapToggleButtonComponent;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-bootstrap.umd.js.map
