
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.form';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/form', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].form = {}), global.ng.core));
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

    var FormComponent = /** @class */ (function (_super) {
        __extends(FormComponent, _super);
        function FormComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        FormComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-form');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(FormComponent.prototype, "columns", {
            /** @description Sets or gets the form columns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "controls", {
            /** @description Sets or gets the form controls. */
            get: function () {
                return this.nativeElement ? this.nativeElement.controls : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.controls = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "onStatusChanges", {
            /** @description Sets or Gets the labels position. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "onValueChanges", {
            /** @description Makes the form readonly. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "labelPosition", {
            /** @description Shows / hides the colon after the labels. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "readonly", {
            /** @description Shows / hides validation summary. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "showColonAfterLabel", {
            /** @description Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "showSummary", {
            /** @description Gets or Sets the Form value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showSummary : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showSummary = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "state", {
            /** @description Automatically validates the form when it is created. */
            get: function () {
                return this.nativeElement ? this.nativeElement.state : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.state = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "value", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "validateOnLoad", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.validateOnLoad : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.validateOnLoad = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds a control to the Form.
        * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
        */
        FormComponent.prototype.addControl = function (controlOptions) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addControl(controlOptions);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addControl(controlOptions);
                });
            }
        };
        /** @description Gets a control by its name(dataField).
        * @param {string} dataField. dataField of a FormControl or FormGroup
        * @returns {Control}
      */
        FormComponent.prototype.getControl = function (dataField) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getControl(dataField);
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
        /** @description Inserts a control to the Form.
        * @param {number} index. Control insert index
        * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
        */
        FormComponent.prototype.insertControl = function (index, controlOptions) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insertControl(index, controlOptions);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insertControl(index, controlOptions);
                });
            }
        };
        /** @description Remove a control from the Form.
        * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
        */
        FormComponent.prototype.removeControl = function (controlOptions) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeControl(controlOptions);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeControl(controlOptions);
                });
            }
        };
        /** @description Submits the form.
        * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
        */
        FormComponent.prototype.submit = function (submitOptions) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.submit(submitOptions);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.submit(submitOptions);
                });
            }
        };
        /** @description Clears the form.
        */
        FormComponent.prototype.reset = function () {
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
        /** @description Validates the form.
        */
        FormComponent.prototype.validate = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.validate();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.validate();
                });
            }
        };
        Object.defineProperty(FormComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        FormComponent.prototype.ngOnInit = function () {
        };
        FormComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        FormComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        FormComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        FormComponent.prototype.listen = function () {
            var that = this;
        };
        /** @description Remove event listeners. */
        FormComponent.prototype.unlisten = function () {
            var that = this;
        };
        FormComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], FormComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "controls", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "onStatusChanges", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "onValueChanges", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "labelPosition", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "showColonAfterLabel", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "showSummary", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "state", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], FormComponent.prototype, "validateOnLoad", null);
        FormComponent = __decorate([
            core.Directive({
                exportAs: 'smart-form', selector: 'smart-form, [smart-form]'
            })
        ], FormComponent);
        return FormComponent;
    }(BaseElement));

    var FormControlComponent = /** @class */ (function (_super) {
        __extends(FormControlComponent, _super);
        function FormControlComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        FormControlComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-form-control');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(FormControlComponent.prototype, "action", {
            /** @description Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit' */
            get: function () {
                return this.nativeElement ? this.nativeElement.action : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.action = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "align", {
            /** @description Sets or Gets the alignment of the FormControl */
            get: function () {
                return this.nativeElement ? this.nativeElement.align : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.align = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "appendHTML", {
            /** @description HTML Content displayed after the Form Control */
            get: function () {
                return this.nativeElement ? this.nativeElement.appendHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.appendHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "controlOptions", {
            /** @description JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control. */
            get: function () {
                return this.nativeElement ? this.nativeElement.controlOptions : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.controlOptions = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "controlType", {
            /** @description The type of the control. */
            get: function () {
                return this.nativeElement ? this.nativeElement.controlType : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.controlType = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "columns", {
            /** @description Sets the Form Group columns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "columnSpan", {
            /** @description Sets the Form control column span. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnSpan : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnSpan = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "dataField", {
            /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataField : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataField = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "disabled", {
            /** @description Sets the Form control disabled mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "dirty", {
            /** @description Gets whether the Form control is 'dirty' i.e its value is changed by the user. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dirty : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dirty = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "info", {
            /** @description Gets or Sets the Form control's info icon's tooltip. */
            get: function () {
                return this.nativeElement ? this.nativeElement.info : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.info = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "invalid", {
            /** @description Gets whether the Form control is invalid. */
            get: function () {
                return this.nativeElement ? this.nativeElement.invalid : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.invalid = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "label", {
            /** @description Gets or Sets the Form control's label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "labelPosition", {
            /** @description Gets or Sets the Form control's label position. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "labelOffset", {
            /** @description Gets or Sets the offset between the label and the control. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelOffset : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelOffset = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "labelAlign", {
            /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelAlign : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelAlign = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "nextButtonLabel", {
            /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.nextButtonLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.nextButtonLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "backButtonLabel", {
            /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.backButtonLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.backButtonLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "placeholder", {
            /** @description Gets or Sets the FormControl placeholder. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "prependHTML", {
            /** @description HTML Content displayed before the Form Control */
            get: function () {
                return this.nativeElement ? this.nativeElement.prependHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.prependHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "readonly", {
            /** @description Gets or Sets the Form control readonly mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "required", {
            /** @description Gets or Sets whether this field is required. */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "untouched", {
            /** @description Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control */
            get: function () {
                return this.nativeElement ? this.nativeElement.untouched : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.untouched = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "showColonAfterLabel", {
            /** @description Gets or Sets whether colon is displayed after the label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "showButtons", {
            /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showButtons : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showButtons = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "value", {
            /** @description Sets or Gets the Form control or Form group value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "valid", {
            /** @description Gets whether the Form control is valid. */
            get: function () {
                return this.nativeElement ? this.nativeElement.valid : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.valid = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "validationRules", {
            /** @description Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message. */
            get: function () {
                return this.nativeElement ? this.nativeElement.validationRules : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.validationRules = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "viewMode", {
            /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.viewMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.viewMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        FormControlComponent.prototype.ngOnInit = function () {
        };
        FormControlComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        FormControlComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        FormControlComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        FormControlComponent.prototype.listen = function () {
            var that = this;
        };
        /** @description Remove event listeners. */
        FormControlComponent.prototype.unlisten = function () {
            var that = this;
        };
        FormControlComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "action", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "align", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "appendHTML", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "controlOptions", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "controlType", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "columnSpan", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "dataField", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "dirty", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "info", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "invalid", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "labelPosition", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "labelOffset", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "labelAlign", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "nextButtonLabel", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "backButtonLabel", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "prependHTML", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "untouched", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "showColonAfterLabel", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "showButtons", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "valid", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "validationRules", null);
        __decorate([
            core.Input()
        ], FormControlComponent.prototype, "viewMode", null);
        FormControlComponent = __decorate([
            core.Directive({
                exportAs: 'smart-form-control', selector: 'smart-form-control, [smart-form-control]'
            })
        ], FormControlComponent);
        return FormControlComponent;
    }(BaseElement));

    var FormGroupComponent = /** @class */ (function (_super) {
        __extends(FormGroupComponent, _super);
        function FormGroupComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        FormGroupComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-form-group');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(FormGroupComponent.prototype, "columns", {
            /** @description Sets or gets the form columns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "dataField", {
            /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataField : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataField = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "label", {
            /** @description Gets or Sets the Form control's label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "controls", {
            /** @description  */
            get: function () {
                return this.nativeElement ? this.nativeElement.controls : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.controls = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "onStatusChanges", {
            /** @description Sets or Gets the labels position. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "onValueChanges", {
            /** @description Makes the form readonly. */
            get: function () {
                return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "labelPosition", {
            /** @description Shows / hides the colon after the labels. */
            get: function () {
                return this.nativeElement ? this.nativeElement.labelPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "readonly", {
            /** @description Shows / hides validation summary. */
            get: function () {
                return this.nativeElement ? this.nativeElement.readonly : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.readonly = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "showColonAfterLabel", {
            /** @description Gets or Sets the Form value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "showSummary", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.showSummary : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showSummary = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "value", {
            /** @description undefined */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds a control to the Form.
        * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
        */
        FormGroupComponent.prototype.addControl = function (controlOptions) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addControl(controlOptions);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addControl(controlOptions);
                });
            }
        };
        /** @description Gets a control by its name(dataField).
        * @param {string} dataField. dataField of a FormControl or FormGroup
        * @returns {Control}
      */
        FormGroupComponent.prototype.getControl = function (dataField) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getControl(dataField);
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
        /** @description Inserts a control to the Form.
        * @param {number} index. Control insert index
        * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
        */
        FormGroupComponent.prototype.insertControl = function (index, controlOptions) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insertControl(index, controlOptions);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insertControl(index, controlOptions);
                });
            }
        };
        /** @description Remove a control from the Form.
        * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
        */
        FormGroupComponent.prototype.removeControl = function (controlOptions) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeControl(controlOptions);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeControl(controlOptions);
                });
            }
        };
        Object.defineProperty(FormGroupComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        FormGroupComponent.prototype.ngOnInit = function () {
        };
        FormGroupComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        FormGroupComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        FormGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        FormGroupComponent.prototype.listen = function () {
            var that = this;
        };
        /** @description Remove event listeners. */
        FormGroupComponent.prototype.unlisten = function () {
            var that = this;
        };
        FormGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "dataField", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "controls", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "onStatusChanges", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "onValueChanges", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "labelPosition", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "showColonAfterLabel", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "showSummary", null);
        __decorate([
            core.Input()
        ], FormGroupComponent.prototype, "value", null);
        FormGroupComponent = __decorate([
            core.Directive({
                exportAs: 'smart-form-group', selector: 'smart-form-group, [smart-form-group]'
            })
        ], FormGroupComponent);
        return FormGroupComponent;
    }(BaseElement));

    var FormModule = /** @class */ (function () {
        function FormModule() {
        }
        FormModule = __decorate([
            core.NgModule({
                declarations: [FormComponent, FormControlComponent, FormGroupComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [FormComponent, FormControlComponent, FormGroupComponent]
            })
        ], FormModule);
        return FormModule;
    }());

    exports.FormComponent = FormComponent;
    exports.FormControlComponent = FormControlComponent;
    exports.FormGroupComponent = FormGroupComponent;
    exports.FormModule = FormModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-form.umd.js.map
