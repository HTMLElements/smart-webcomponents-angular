
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.calendar';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/calendar', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].calendar = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return CalendarComponent; }),
        multi: true
    };
    var CalendarComponent = /** @class */ (function (_super) {
        __extends(CalendarComponent, _super);
        function CalendarComponent(ref) {
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
            /** @description This event is triggered when a new date has been selected/unselected.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
            *   value - An array of all currently selected dates.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldDisplayMode, 	newDisplayMode)
            *   oldDisplayMode - The previous display mode.
            *   newDisplayMode - The new display mode.
            */
            _this.onDisplayModeChanging = new core.EventEmitter();
            /** @description This event is triggered when the display mode has changed.
            *  @param event. The custom event. 	*/
            _this.onDisplayModeChange = new core.EventEmitter();
            /** @description This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
            *   value - The view's date.
            *   type - The view type - 'month', 'decade' or 'year'.
            */
            _this.onNavigationChanging = new core.EventEmitter();
            /** @description This event is triggered when the view is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
            *   value - The view's date.
            *   type - The view type - 'month', 'decade' or 'year'.
            */
            _this.onNavigationChange = new core.EventEmitter();
            /** @description This event is triggered when the tooltip for the important date is opened.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
            *   target - The event target - tooltip.
            *   value - The important date of the hovered cell.
            */
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when the tooltip for the important date is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
            *   target - The event target - tooltip.
            *   value - The important date of the hovered cell.
            */
            _this.onClose = new core.EventEmitter();
            _this._initialChange = true;
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        CalendarComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-calendar');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(CalendarComponent.prototype, "animation", {
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
        Object.defineProperty(CalendarComponent.prototype, "animationSettings", {
            /** @description Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over. */
            get: function () {
                return this.nativeElement ? this.nativeElement.animationSettings : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.animationSettings = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "calendarMode", {
            /** @description Determines the date controls inside the header of the Calendar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.calendarMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.calendarMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "dayNameFormat", {
            /** @description Determines the format of the day names located above the days inside the calendar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dayNameFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "dateFormatFunction", {
            /** @description  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dateFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dateFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "disabled", {
            /** @description Enables or disables the Calendar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "disableAutoNavigation", {
            /** @description Disables auto navigation when the user clicks on a date that's not from the current month in view. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableAutoNavigation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "displayMode", {
            /** @description Determines the date view of the calendar when calendarMode is set to 'default' */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "displayModeView", {
            /** @description Determines the type of the month/year view when calendarMode is set to Default. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayModeView : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayModeView = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "dropDownHeight", {
            /** @description Determines the height of the month's drop down inside the Calendar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "dropDownWidth", {
            /** @description Determines the width of the month's drop down inside the Calendar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "firstDayOfWeek", {
            /** @description Determines the first day of the week. From 0(Sunday) to 6(Saturday) */
            get: function () {
                return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "footerTemplate", {
            /** @description Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "headerTemplate", {
            /** @description Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "hideDayNames", {
            /** @description Hides the names of the weekdays. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideDayNames = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "hideOtherMonthDays", {
            /** @description Hides the dates from other months. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideOtherMonthDays = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "hideTooltipArrow", {
            /** @description Hides the arrow of the tooltip. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideTooltipArrow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "importantDates", {
            /** @description Sets the dates that will be displayed as important. */
            get: function () {
                return this.nativeElement ? this.nativeElement.importantDates : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.importantDates = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "importantDatesTemplate", {
            /** @description Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.importantDatesTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "locale", {
            /** @description  Determines the language of the Calendar.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.locale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.locale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(CalendarComponent.prototype, "max", {
            /** @description Determines the max date for the Calendar. Accepts date objects and valid date string formats. */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "messages", {
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
        Object.defineProperty(CalendarComponent.prototype, "min", {
            /** @description Determines the min date for the Calendar. Accepts date objects and valid date string formats. */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "months", {
            /** @description Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.months : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.months = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "monthNameFormat", {
            /** @description Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.monthNameFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.monthNameFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "name", {
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
        Object.defineProperty(CalendarComponent.prototype, "readonly", {
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
        Object.defineProperty(CalendarComponent.prototype, "restrictedDates", {
            /** @description Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date. */
            get: function () {
                return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.restrictedDates = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(CalendarComponent.prototype, "scrollButtonsNavigationMode", {
            /** @description  Determines the direction of the navigation buttons located in the header and the animation. */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "scrollButtonsPosition", {
            /** @description  Determines the position of the navigation buttons located inside the header.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "selectedDates", {
            /** @description Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedDates : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedDates = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "selectionMode", {
            /** @description Determines the date selection mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "spinButtonsDelay", {
            /** @description Sets the delay between clicks of the date navigation buttons located in the header of the Calendar.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "spinButtonsInitialDelay", {
            /** @description Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "theme", {
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
        Object.defineProperty(CalendarComponent.prototype, "titleTemplate", {
            /** @description Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it. */
            get: function () {
                return this.nativeElement ? this.nativeElement.titleTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.titleTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "tooltip", {
            /** @description Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltip : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltip = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "tooltipArrow", {
            /** @description Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltipArrow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "tooltipDelay", {
            /** @description Sets the delay of the tooltip before it appears. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "tooltipOffset", {
            /** @description Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltipOffset = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "tooltipPosition", {
            /** @description Sets the position of the tooltip. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "tooltipTemplate", {
            /** @description Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "unfocusable", {
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
        Object.defineProperty(CalendarComponent.prototype, "view", {
            /** @description Determines the orientation of the Calendar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.view : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.view = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "viewSections", {
            /** @description Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible. */
            get: function () {
                return this.nativeElement ? this.nativeElement.viewSections : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.viewSections = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "weekNumbers", {
            /** @description Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.weekNumbers = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "weeks", {
            /** @description Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ). */
            get: function () {
                return this.nativeElement ? this.nativeElement.weeks : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.weeks = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "yearFormat", {
            /** @description Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1. */
            get: function () {
                return this.nativeElement ? this.nativeElement.yearFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Clears the selection. Removes all seleceted dates.
        */
        CalendarComponent.prototype.clearSelection = function () {
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
        /** @description Navigates forwards/backwards depending on the argument.
        * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
        * @returns {boolean}
      */
        CalendarComponent.prototype.navigate = function (step) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.navigate(step);
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
        /** @description Selects or Unselects a date.
        * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
        */
        CalendarComponent.prototype.select = function (date) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.select(date);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.select(date);
                });
            }
        };
        /** @description Selects today's date.
        * @returns {Date}
      */
        CalendarComponent.prototype.today = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.today();
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
        Object.defineProperty(CalendarComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        CalendarComponent.prototype.ngOnInit = function () {
        };
        CalendarComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        CalendarComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        Object.defineProperty(CalendarComponent.prototype, "ngValue", {
            get: function () {
                if (!this.nativeElement) {
                    return null;
                }
                if (this.selectedDates && this.selectedDates.length > 0) {
                    var value = this.nativeElement.selectedDates.length === 1 ? this.nativeElement.selectedDates[0] : this.nativeElement.selectedDates;
                    return value;
                }
                return null;
            },
            set: function (value) {
                if (this.nativeElement) {
                    this.writeValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        CalendarComponent.prototype.writeValue = function (value) {
            var _this = this;
            var that = this;
            var normalizedValue = value == null ? '' : value;
            that.nativeElement.whenRendered(function () {
                that.nativeElement.isInitialized = that._initialChange ? false : true;
                that.clearSelection();
                if (Array.isArray(normalizedValue)) {
                    value.forEach(function (currentValue) { return _this.select(currentValue); });
                }
                else {
                    that.select(normalizedValue);
                }
                that.nativeElement.isInitialized = true;
                if (that._initialChange === false) {
                    if (that.selectedDates && that.selectedDates.length > 1) {
                        that._onChange(that.selectedDates);
                    }
                    else {
                        that._onChange((that.selectedDates && that.selectedDates.length > 0) ? that.selectedDates[0] : null);
                        ;
                    }
                }
            });
        };
        CalendarComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        CalendarComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        CalendarComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        CalendarComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['displayModeChangingHandler'] = function (event) { that.onDisplayModeChanging.emit(event); };
            that.nativeElement.addEventListener('displayModeChanging', that.eventHandlers['displayModeChangingHandler']);
            that.eventHandlers['displayModeChangeHandler'] = function (event) { that.onDisplayModeChange.emit(event); };
            that.nativeElement.addEventListener('displayModeChange', that.eventHandlers['displayModeChangeHandler']);
            that.eventHandlers['navigationChangingHandler'] = function (event) { that.onNavigationChanging.emit(event); };
            that.nativeElement.addEventListener('navigationChanging', that.eventHandlers['navigationChangingHandler']);
            that.eventHandlers['navigationChangeHandler'] = function (event) { that.onNavigationChange.emit(event); };
            that.nativeElement.addEventListener('navigationChange', that.eventHandlers['navigationChangeHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['changeModelHandler'] = function (event) {
                that._initialChange = false;
                that._onChange(that.nativeElement.selectedDates.length > 0 ? (that.nativeElement.selectedDates.length > 1 ? that.nativeElement.selectedDates : that.nativeElement.selectedDates[0]) : null);
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
        CalendarComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['displayModeChangingHandler']) {
                that.nativeElement.removeEventListener('displayModeChanging', that.eventHandlers['displayModeChangingHandler']);
            }
            if (that.eventHandlers['displayModeChangeHandler']) {
                that.nativeElement.removeEventListener('displayModeChange', that.eventHandlers['displayModeChangeHandler']);
            }
            if (that.eventHandlers['navigationChangingHandler']) {
                that.nativeElement.removeEventListener('navigationChanging', that.eventHandlers['navigationChangingHandler']);
            }
            if (that.eventHandlers['navigationChangeHandler']) {
                that.nativeElement.removeEventListener('navigationChange', that.eventHandlers['navigationChangeHandler']);
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
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
        CalendarComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "animationSettings", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "calendarMode", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "dayNameFormat", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "dateFormatFunction", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "disableAutoNavigation", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "displayMode", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "displayModeView", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "dropDownHeight", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "dropDownWidth", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "firstDayOfWeek", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "footerTemplate", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "headerTemplate", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "hideDayNames", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "hideOtherMonthDays", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "hideTooltipArrow", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "importantDates", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "importantDatesTemplate", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "months", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "monthNameFormat", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "restrictedDates", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "scrollButtonsNavigationMode", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "scrollButtonsPosition", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "selectedDates", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "spinButtonsDelay", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "spinButtonsInitialDelay", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "titleTemplate", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "tooltipArrow", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "tooltipDelay", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "tooltipOffset", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "tooltipPosition", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "tooltipTemplate", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "view", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "viewSections", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "weekNumbers", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "weeks", null);
        __decorate([
            core.Input()
        ], CalendarComponent.prototype, "yearFormat", null);
        __decorate([
            core.Output()
        ], CalendarComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], CalendarComponent.prototype, "onDisplayModeChanging", void 0);
        __decorate([
            core.Output()
        ], CalendarComponent.prototype, "onDisplayModeChange", void 0);
        __decorate([
            core.Output()
        ], CalendarComponent.prototype, "onNavigationChanging", void 0);
        __decorate([
            core.Output()
        ], CalendarComponent.prototype, "onNavigationChange", void 0);
        __decorate([
            core.Output()
        ], CalendarComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], CalendarComponent.prototype, "onClose", void 0);
        CalendarComponent = __decorate([
            core.Directive({
                exportAs: 'smart-calendar', selector: 'smart-calendar, [smart-calendar]',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            })
        ], CalendarComponent);
        return CalendarComponent;
    }(BaseElement));

    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
        }
        CalendarModule = __decorate([
            core.NgModule({
                declarations: [CalendarComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [CalendarComponent]
            })
        ], CalendarModule);
        return CalendarModule;
    }());

    exports.CalendarComponent = CalendarComponent;
    exports.CalendarModule = CalendarModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-calendar.umd.js.map
