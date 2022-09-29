
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.colorpicker';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/colorpicker', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].colorpicker = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return ColorPickerComponent; }),
        multi: true
    };
    var ColorPickerComponent = /** @class */ (function (_super) {
        __extends(ColorPickerComponent, _super);
        function ColorPickerComponent(ref) {
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
            /** @description This event is triggered when user clicks on the action button. 'Ok' button is visible only when applyValueMode is set to useButtons.
            *  @param event. The custom event. 	*/
            _this.onActionButtonClick = new core.EventEmitter();
            /** @description This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
            *  @param event. The custom event. 	*/
            _this.onCancelButtonClick = new core.EventEmitter();
            /** @description This event is triggered when the color value is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
            *   oldValue - The previously selected color.
            *   value - The new selected color.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when the drop down is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
            *   value - A boolean that indicates whether the custom color view is shown or not.
            */
            _this.onCustomColorSelection = new core.EventEmitter();
            /** @description This event is triggered when user clicks on the drop down button.
            *  @param event. The custom event. 	*/
            _this.onDropDownButtonClick = new core.EventEmitter();
            /** @description This event is triggered when the ok button is clicked.
            *  @param event. The custom event. 	*/
            _this.onOkButtonClick = new core.EventEmitter();
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
            /** @description This event is triggered when the resizing of the drop down is finished.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
            *   position - An object containing the current left and top positions of the drop down.
            */
            _this.onResizeEnd = new core.EventEmitter();
            _this._initialChange = true;
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        ColorPickerComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-color-picker');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(ColorPickerComponent.prototype, "animation", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "editable", {
            /** @description This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.editable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "autoCloseDelay", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "applyValueMode", {
            /** @description Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.applyValueMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.applyValueMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "columnCount", {
            /** @description Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columnCount : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columnCount = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "displayMode", {
            /** @description Determines the colors that will be displayed and their layout. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "disabled", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "disableUndo", {
            /** @description By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableUndo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableUndo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "dropDownAppendTo", {
            /** @description Sets the parent container of the dropDown (the popup). The expected value is CSS Selector, ID or 'body'. Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. Example: 'body'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "dropDownOpenMode", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "dropDownButtonPosition", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "dropDownPosition", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "dropDownHeight", {
            /** @description Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "dropDownOverlay", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "dropDownWidth", {
            /** @description Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "editAlphaChannel", {
            /** @description Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal' */
            get: function () {
                return this.nativeElement ? this.nativeElement.editAlphaChannel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editAlphaChannel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "enableCustomColors", {
            /** @description Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableCustomColors : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableCustomColors = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "gridThemeColors", {
            /** @description Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.gridThemeColors = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "gridShadeColors", {
            /** @description Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.gridShadeColors = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "gridStandardColors", {
            /** @description Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.gridStandardColors = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "hideAlphaEditor", {
            /** @description Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideAlphaEditor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideAlphaEditor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "hideContentToFit", {
            /** @description Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideContentToFit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideContentToFit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "hideHEXEditor", {
            /** @description HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideHEXEditor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideHEXEditor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "hidePreviewContainer", {
            /** @description Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hidePreviewContainer : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hidePreviewContainer = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "hideRGBEditor", {
            /** @description Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideRGBEditor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideRGBEditor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "hint", {
            /** @description Sets additional helper text below the element that is only visible when the element is focused. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hint : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hint = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "inverted", {
            /** @description Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inverted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inverted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "label", {
            /** @description Sets a label above the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "locale", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "messages", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "name", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "opened", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "palette", {
            /** @description Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
            get: function () {
                return this.nativeElement ? this.nativeElement.palette : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.palette = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "paletteColors", {
            /** @description Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc). */
            get: function () {
                return this.nativeElement ? this.nativeElement.paletteColors : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.paletteColors = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "paletteCustomColors", {
            /** @description Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true. */
            get: function () {
                return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.paletteCustomColors = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "placeholder", {
            /** @description The placeholder is shown when the value is not set yet or is set to null. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "readonly", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "resizeIndicator", {
            /** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "resizeMode", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "theme", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "tooltipDisplayMode", {
            /** @description Determines how the tooltip displays the value of the color that is being hovered. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltipDisplayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltipDisplayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "unfocusable", {
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
        Object.defineProperty(ColorPickerComponent.prototype, "value", {
            /** @description Represents the value of the selected color as the value of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "valueFormat", {
            /** @description Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.valueFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.valueFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorPickerComponent.prototype, "valueDisplayMode", {
            /** @description Determines which elements will be displayed in color picker's action section. */
            get: function () {
                return this.nativeElement ? this.nativeElement.valueDisplayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.valueDisplayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Opens the drop down of the color picker.
        */
        ColorPickerComponent.prototype.open = function () {
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
        /** @description Closes the drop down of the color picker.
        */
        ColorPickerComponent.prototype.close = function () {
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
        Object.defineProperty(ColorPickerComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        ColorPickerComponent.prototype.ngOnInit = function () {
        };
        ColorPickerComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        ColorPickerComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        Object.defineProperty(ColorPickerComponent.prototype, "ngValue", {
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
        ColorPickerComponent.prototype.writeValue = function (value) {
            var that = this;
            var normalizedValue = value == null ? '' : value;
            that.nativeElement.whenRendered(function () {
                that.value = normalizedValue;
                if (that._initialChange === false) {
                    that._onChange(that.value);
                }
            });
        };
        ColorPickerComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        ColorPickerComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        ColorPickerComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        ColorPickerComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['actionButtonClickHandler'] = function (event) { that.onActionButtonClick.emit(event); };
            that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
            that.eventHandlers['cancelButtonClickHandler'] = function (event) { that.onCancelButtonClick.emit(event); };
            that.nativeElement.addEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['customColorSelectionHandler'] = function (event) { that.onCustomColorSelection.emit(event); };
            that.nativeElement.addEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
            that.eventHandlers['dropDownButtonClickHandler'] = function (event) { that.onDropDownButtonClick.emit(event); };
            that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
            that.eventHandlers['okButtonClickHandler'] = function (event) { that.onOkButtonClick.emit(event); };
            that.nativeElement.addEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
            that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
            that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
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
        ColorPickerComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['actionButtonClickHandler']) {
                that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
            }
            if (that.eventHandlers['cancelButtonClickHandler']) {
                that.nativeElement.removeEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
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
            if (that.eventHandlers['customColorSelectionHandler']) {
                that.nativeElement.removeEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
            }
            if (that.eventHandlers['dropDownButtonClickHandler']) {
                that.nativeElement.removeEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
            }
            if (that.eventHandlers['okButtonClickHandler']) {
                that.nativeElement.removeEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
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
        ColorPickerComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "editable", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "autoCloseDelay", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "applyValueMode", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "columnCount", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "displayMode", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "disableUndo", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "dropDownAppendTo", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "dropDownOpenMode", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "dropDownButtonPosition", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "dropDownPosition", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "dropDownHeight", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "dropDownOverlay", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "dropDownWidth", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "editAlphaChannel", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "enableCustomColors", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "gridThemeColors", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "gridShadeColors", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "gridStandardColors", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "hideAlphaEditor", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "hideContentToFit", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "hideHEXEditor", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "hidePreviewContainer", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "hideRGBEditor", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "inverted", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "palette", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "paletteColors", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "paletteCustomColors", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "resizeIndicator", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "resizeMode", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "tooltipDisplayMode", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "valueFormat", null);
        __decorate([
            core.Input()
        ], ColorPickerComponent.prototype, "valueDisplayMode", null);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onActionButtonClick", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onCancelButtonClick", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onCustomColorSelection", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onDropDownButtonClick", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onOkButtonClick", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onResizeStart", void 0);
        __decorate([
            core.Output()
        ], ColorPickerComponent.prototype, "onResizeEnd", void 0);
        ColorPickerComponent = __decorate([
            core.Directive({
                exportAs: 'smart-color-picker', selector: 'smart-color-picker, [smart-color-picker]',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            })
        ], ColorPickerComponent);
        return ColorPickerComponent;
    }(BaseElement));

    var ColorPickerModule = /** @class */ (function () {
        function ColorPickerModule() {
        }
        ColorPickerModule = __decorate([
            core.NgModule({
                declarations: [ColorPickerComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [ColorPickerComponent]
            })
        ], ColorPickerModule);
        return ColorPickerModule;
    }());

    exports.ColorPickerComponent = ColorPickerComponent;
    exports.ColorPickerModule = ColorPickerModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-colorpicker.umd.js.map
