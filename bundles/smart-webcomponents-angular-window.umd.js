
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.window';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/window', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].window = {}), global.ng.core));
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

    var WindowComponent = /** @class */ (function (_super) {
        __extends(WindowComponent, _super);
        function WindowComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered just before the window starts opening.
            *  @param event. The custom event. 	*/
            _this.onOpening = new core.EventEmitter();
            /** @description This event is triggered when the window is opened( visible ).
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered just before the window starts closing.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when the window is closed( hidden )
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the window is collapsed.
            *  @param event. The custom event. 	*/
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when window's dragging is ended.
            *  @param event. The custom event. 	*/
            _this.onDragEnd = new core.EventEmitter();
            /** @description This event is triggered when window's dragging is started.
            *  @param event. The custom event. 	*/
            _this.onDragStart = new core.EventEmitter();
            /** @description This event is triggered when the window is expanded.
            *  @param event. The custom event. 	*/
            _this.onExpand = new core.EventEmitter();
            /** @description This event is triggered when the window is maximized.
            *  @param event. The custom event. 	*/
            _this.onMaximize = new core.EventEmitter();
            /** @description This event is triggered when the window is minimized.
            *  @param event. The custom event. 	*/
            _this.onMinimize = new core.EventEmitter();
            /** @description This event is triggered when window's resizing is ended.
            *  @param event. The custom event. 	*/
            _this.onResizeEnd = new core.EventEmitter();
            /** @description This event is triggered when window's resizing is started.
            *  @param event. The custom event. 	*/
            _this.onResizeStart = new core.EventEmitter();
            /** @description This event is triggered when the window is restored to it's previous state before maximization.
            *  @param event. The custom event. 	*/
            _this.onRestore = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        WindowComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-window');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(WindowComponent.prototype, "addNewTab", {
            /** @description Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow */
            get: function () {
                return this.nativeElement ? this.nativeElement.addNewTab : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.addNewTab = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "animation", {
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
        Object.defineProperty(WindowComponent.prototype, "autoCapitalize", {
            /** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoCapitalize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "autoExpand", {
            /** @description Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoExpand : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoExpand = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "cancelLabel", {
            /** @description Determines the label for the 'cancel' button inside the Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.cancelLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.cancelLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "completeLabel", {
            /** @description Determines the label for the 'Complete' button insinde the Progress Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.completeLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.completeLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "confirmLabel", {
            /** @description Determines the label for the 'Confirm' button insinde the Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.confirmLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.confirmLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "collapsed", {
            /** @description Determines if the window is collapsed or not. When collapsed the only the header of the window is visible. */
            get: function () {
                return this.nativeElement ? this.nativeElement.collapsed : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.collapsed = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "closeOnMaskClick", {
            /** @description When a modal window is opened, thid property determines if clicking on the mask closes the window or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.closeOnMaskClick : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.closeOnMaskClick = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "dataSource", {
            /** @description Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "disabled", {
            /** @description Enables or disables the window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "disableSnap", {
            /** @description Enables or disables the window snapping feature. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableSnap : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableSnap = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "disableEscape", {
            /** @description By default the window is closing after the 'Escape' key is pressed. Set this property to true, if you want to disable that. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableEscape : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableEscape = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "disableKeyboard", {
            /** @description By default the window is handling keyboard keys like 'Arrows', 'Escape', etc. Set this property to true, if you want to disable that. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableKeyboard : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableKeyboard = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "displayMode", {
            /** @description Determines how the characters are displayed inside the input. Applicable to Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.displayMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.displayMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "dropPosition", {
            /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "formatFunction", {
            /** @description A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.formatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.formatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "footerPosition", {
            /** @description Determines the position of the footer of the window element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.footerPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.footerPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "footerTemplate", {
            /** @description Determines the template for the Dialog section of the window. By default footerTemplate is null. */
            get: function () {
                return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "headerButtons", {
            /** @description Set's the buttons that will be visible in the header section. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerButtons : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerButtons = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "headerTemplate", {
            /** @description Determines the template for the Dialog section of the window. By default headerTemplate is null. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "headerPosition", {
            /** @description Determines the position of the header of the window element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "hint", {
            /** @description Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hint : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hint = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "indeterminate", {
            /** @description Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.indeterminate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "inverted", {
            /** @description Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inverted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inverted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "label", {
            /** @description The label of the window that appears in the header area. */
            get: function () {
                return this.nativeElement ? this.nativeElement.label : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.label = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "liveResize", {
            /** @description When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.liveResize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.liveResize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "layout", {
            /** @description Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout. */
            get: function () {
                return this.nativeElement ? this.nativeElement.layout : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.layout = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "locale", {
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
        Object.defineProperty(WindowComponent.prototype, "locked", {
            /** @description Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.locked : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.locked = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "localizeFormatFunction", {
            /** @description Callback, related to localization module.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "maximized", {
            /** @description Determines if the window is maximized or not. When maximized the window covers the whole viewport. */
            get: function () {
                return this.nativeElement ? this.nativeElement.maximized : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.maximized = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "messages", {
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
        Object.defineProperty(WindowComponent.prototype, "modal", {
            /** @description Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page. */
            get: function () {
                return this.nativeElement ? this.nativeElement.modal : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.modal = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "max", {
            /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "min", {
            /** @description Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "minimized", {
            /** @description Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport. */
            get: function () {
                return this.nativeElement ? this.nativeElement.minimized : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.minimized = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "maxLength", {
            /** @description Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.maxLength : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.maxLength = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "minLength", {
            /** @description Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.minLength : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.minLength = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "opened", {
            /** @description Determines if the window is visible or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.opened : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.opened = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "pinned", {
            /** @description Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized. */
            get: function () {
                return this.nativeElement ? this.nativeElement.pinned : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pinned = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "placeholder", {
            /** @description Determines the input's placeholder. Applicable to Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "promptLabel", {
            /** @description Determines the label for the Input insinde the PromptWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.promptLabel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.promptLabel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "readonly", {
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
        Object.defineProperty(WindowComponent.prototype, "resizeIndicator", {
            /** @description When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "resizeMode", {
            /** @description Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.resizeMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(WindowComponent.prototype, "required", {
            /** @description Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "requiredMessage", {
            /** @description Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.requiredMessage = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "selectAllOnFocus", {
            /** @description Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "selectedIndex", {
            /** @description Sets or gets which tab is selected. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "selectionMode", {
            /** @description Determines the way the user can switch between tabs. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "selectionEnd", {
            /** @description Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionEnd = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "selectionStart", {
            /** @description Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionStart : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionStart = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "showProgressValue", {
            /** @description Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showProgressValue = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "siblings", {
            /** @description A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout. */
            get: function () {
                return this.nativeElement ? this.nativeElement.siblings : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.siblings = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "size", {
            /** @description Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item. */
            get: function () {
                return this.nativeElement ? this.nativeElement.size : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.size = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "spellCheck", {
            /** @description Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.spellCheck : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "tabCloseButtons", {
            /** @description Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabCloseButtons : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabCloseButtons = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "tabCloseButtonMode", {
            /** @description Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabCloseButtonMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabCloseButtonMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "tabOverflow", {
            /** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabOverflow : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabOverflow = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "tabPosition", {
            /** @description Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "tabScrollButtonsPosition", {
            /** @description Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabScrollButtonsPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabScrollButtonsPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "tabTextOrientation", {
            /** @description Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tabTextOrientation = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "theme", {
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
        Object.defineProperty(WindowComponent.prototype, "unfocusable", {
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
        Object.defineProperty(WindowComponent.prototype, "value", {
            /** @description Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "windowParent", {
            /** @description Determines the actual parent of the element. The window can size and move only in the area of that element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.windowParent : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.windowParent = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowComponent.prototype, "wrap", {
            /** @description Indicates how the input wraps text. Applicable only to MultilinePromptWindow. */
            get: function () {
                return this.nativeElement ? this.nativeElement.wrap : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.wrap = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Appends a tabitem to the end of the list of tab items inside element.
        * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
        * @returns {Node}
      */
        WindowComponent.prototype.appendChild = function (node) {
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
        /** @description Sets the window to the top level so the user can interact with it.
        */
        WindowComponent.prototype.bringToFront = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.bringToFront();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.bringToFront();
                });
            }
        };
        /** @description Clears the content of the Window.
        */
        WindowComponent.prototype.clear = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clear();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clear();
                });
            }
        };
        /** @description Closes the window.
        */
        WindowComponent.prototype.close = function () {
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
        /** @description Collapses the window.
        * @returns {HTMLElement}
      */
        WindowComponent.prototype.collapse = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.collapse();
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
        /** @description Makes sure a tab item is visible by scrolling to it. Applicable only to TabsWindow.
        * @param {number} index. The index of the tab to scroll to.
        */
        WindowComponent.prototype.ensureVisible = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.ensureVisible(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.ensureVisible(index);
                });
            }
        };
        /** @description Expands the window after being collapsed.
        * @returns {any[]}
      */
        WindowComponent.prototype.expand = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.expand();
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
        /** @description Inserts a new tab and an associated content section. Applicable only to TabsWindow.
        * @param {number} index. The index to insert a new tab at.
        * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
        */
        WindowComponent.prototype.insert = function (index, details) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(index, details);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insert(index, details);
                });
            }
        };
        /** @description Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. Applicable only to TabsWindow.
        * @param {Node} newNode. The "smart-tab-item" node to insert.
        * @param {Node | null} referenceNode?. The "smart-tab-item" node before which newNode is inserted.
        * @returns {Node}
      */
        WindowComponent.prototype.insertBefore = function (newNode, referenceNode) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.insertBefore(newNode, referenceNode);
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
        /** @description Moves the window to a new position
        * @param {string | number} left. Left position. For example: '100px'.
        * @param {string | number} top. Top position. For example: '100px'.
        */
        WindowComponent.prototype.move = function (left, top) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.move(left, top);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.move(left, top);
                });
            }
        };
        /** @description Maximizes the window to fill the area.
        */
        WindowComponent.prototype.maximize = function () {
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
        /** @description Minimizes the window.
        */
        WindowComponent.prototype.minimize = function () {
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
        /** @description Opens the window
        */
        WindowComponent.prototype.open = function () {
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
        /** @description Pins the window. Disables window dragging.
        */
        WindowComponent.prototype.pin = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.pin();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.pin();
                });
            }
        };
        /** @description Removes a tab and its associated content section. Applicable only to TabsWindow.
        * @param {number} index. The index of the tab to remove.
        */
        WindowComponent.prototype.removeAt = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAt(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeAt(index);
                });
            }
        };
        /** @description Removes a child "smart-tab-item" node. Applicable only to TabsWindow.
        * @param {Node} node. The "smart-tab-item" node to remove.
        * @returns {Node}
      */
        WindowComponent.prototype.removeChild = function (node) {
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
        /** @description Restores the window to it's previous size before maximization/minimization.
        */
        WindowComponent.prototype.restore = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.restore();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.restore();
                });
            }
        };
        /** @description Selects a tab.  Applicalbe only to TabsWindow elements.
        * @param {number} index. The index of the tab to select.
        */
        WindowComponent.prototype.select = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.select(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.select(index);
                });
            }
        };
        /** @description Unpins the window. Enables window dragging.
        */
        WindowComponent.prototype.unpin = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.unpin();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.unpin();
                });
            }
        };
        /** @description Updates the header label.
        * @param {string} label. The new label of the Header.
        */
        WindowComponent.prototype.updateLabel = function (label) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateLabel(label);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateLabel(label);
                });
            }
        };
        /** @description Updates the content.
        * @param {string | HTMLElement} content. The new content of the window.
        */
        WindowComponent.prototype.updateContent = function (content) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateContent(content);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateContent(content);
                });
            }
        };
        /** @description Updates a TAB in TAB Window and its associated content section.  Applies only to TabsWindow elements.
        * @param {number} index. The index of the tab to update.
        * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
        * @param {string | HTMLElement} content. The new content of the tab.
        */
        WindowComponent.prototype.update = function (index, label, content) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.update(index, label, content);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.update(index, label, content);
                });
            }
        };
        Object.defineProperty(WindowComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        WindowComponent.prototype.ngOnInit = function () {
        };
        WindowComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        WindowComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        WindowComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        WindowComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
            that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
            that.eventHandlers['maximizeHandler'] = function (event) { that.onMaximize.emit(event); };
            that.nativeElement.addEventListener('maximize', that.eventHandlers['maximizeHandler']);
            that.eventHandlers['minimizeHandler'] = function (event) { that.onMinimize.emit(event); };
            that.nativeElement.addEventListener('minimize', that.eventHandlers['minimizeHandler']);
            that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
            that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
            that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            that.eventHandlers['restoreHandler'] = function (event) { that.onRestore.emit(event); };
            that.nativeElement.addEventListener('restore', that.eventHandlers['restoreHandler']);
        };
        /** @description Remove event listeners. */
        WindowComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['closingHandler']) {
                that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
            }
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
            }
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
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
            if (that.eventHandlers['maximizeHandler']) {
                that.nativeElement.removeEventListener('maximize', that.eventHandlers['maximizeHandler']);
            }
            if (that.eventHandlers['minimizeHandler']) {
                that.nativeElement.removeEventListener('minimize', that.eventHandlers['minimizeHandler']);
            }
            if (that.eventHandlers['resizeEndHandler']) {
                that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            }
            if (that.eventHandlers['resizeStartHandler']) {
                that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            }
            if (that.eventHandlers['restoreHandler']) {
                that.nativeElement.removeEventListener('restore', that.eventHandlers['restoreHandler']);
            }
        };
        WindowComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "addNewTab", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "autoCapitalize", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "autoExpand", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "cancelLabel", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "completeLabel", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "confirmLabel", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "collapsed", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "closeOnMaskClick", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "disableSnap", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "disableEscape", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "disableKeyboard", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "displayMode", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "dropPosition", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "formatFunction", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "footerPosition", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "footerTemplate", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "headerButtons", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "headerTemplate", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "headerPosition", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "hint", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "indeterminate", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "inverted", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "label", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "liveResize", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "layout", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "locked", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "maximized", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "modal", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "minimized", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "maxLength", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "minLength", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "opened", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "pinned", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "promptLabel", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "resizeIndicator", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "resizeMode", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "requiredMessage", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "selectAllOnFocus", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "selectedIndex", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "selectionEnd", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "selectionStart", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "showProgressValue", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "siblings", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "size", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "spellCheck", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "tabCloseButtons", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "tabCloseButtonMode", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "tabOverflow", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "tabPosition", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "tabScrollButtonsPosition", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "tabTextOrientation", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "windowParent", null);
        __decorate([
            core.Input()
        ], WindowComponent.prototype, "wrap", null);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onMaximize", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onMinimize", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onResizeEnd", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onResizeStart", void 0);
        __decorate([
            core.Output()
        ], WindowComponent.prototype, "onRestore", void 0);
        WindowComponent = __decorate([
            core.Directive({
                exportAs: 'smart-window', selector: 'smart-window, [smart-window], smart-tabs-window, smart-prompt-window, smart-multiline-prompt-window, smart-dialog-window,  smart-alert-window, smart-progress-window, smart-wait-window'
            })
        ], WindowComponent);
        return WindowComponent;
    }(BaseElement));

    var WindowModule = /** @class */ (function () {
        function WindowModule() {
        }
        WindowModule = __decorate([
            core.NgModule({
                declarations: [WindowComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [WindowComponent]
            })
        ], WindowModule);
        return WindowModule;
    }());

    exports.Smart = Smart;
    exports.WindowComponent = WindowComponent;
    exports.WindowModule = WindowModule;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-window.umd.js.map
